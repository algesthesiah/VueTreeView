import Vue2TreeView from './vue2-tree-view'

const install = Vue => {
  if (install.installed) {
    return
  }

  install.installed = true

  Vue.component(Vue2TreeView.name, Vue2TreeView)
}

Vue2TreeView.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2TreeView)
}

export default Vue2TreeView
