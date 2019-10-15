import VueTreeView from './VueTreeView'

const install = Vue => {
  if (install.installed) {
    return
  }

  install.installed = true

  Vue.component(VueTreeView.name, VueTreeView)
}

VueTreeView.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTreeView)
}

export default VueTreeView
