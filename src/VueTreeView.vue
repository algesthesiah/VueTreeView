<script>
import iconAdd from './add'
import iconDel from './del'

export default {
  functional: true,
  name: 'VueTreeView',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  render(h, c) {
    const iconClick = v => {
      v.expanded = !v.expanded
      const ob = v.__ob__
      ob.dep.notify()
    }
    const data = c.props.data
    const mySlot = c.scopedSlots && c.scopedSlots.treeView
    return (
      <div class="tree-container">
        {data.map((v, i) => (
          <li
            class={{
              item: true,
              end: i === data.length - 1,
              first: i === 0,
              change: !v.expanded,
            }}
            key={i}
          >
            {!v.expanded ? (
              <iconDel
                key="iconDel"
                icon-class="slot-icon"
                onClick={() => iconClick(v)}
              />
            ) : (
              <iconAdd
                key="iconAdd"
                icon-class="slot-icon"
                onClick={() => iconClick(v)}
              />
            )}
            {!v.expanded ? (
              <div class="slot-main">
                {mySlot ? mySlot({ value: v }) : null}
              </div>
            ) : null}
          </li>
        ))}
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
