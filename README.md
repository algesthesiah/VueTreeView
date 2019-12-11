# vue2-tree-view

> A simple organization tree chart based on Vue2.x

## Usage

``` html

<template>
  <div class="home">
    <h1>vue2-tree-view</h1>
    <div class="box">
      <VueTreeView :data="data">
        <template v-slot:treeView="scope">
          <li v-for="(it, i) in scope.value.children" :key="i">
            {{ it.label }}
          </li>
        </template>
      </VueTreeView>
    </div>
  </div>
</template>

```

``` js
export default {
  data() {
    return {
      data: [
        {
          children: [
            {
              label: 'Minnie Mouse',
            },
            {
              label: 'Tom Bombadil',
            },
          ],
        },
        {
          children: [
            {
              label: 'Minnie Mouse',
            },
            {
              label: 'Tom Bombadil',
            },
          ],
        },
      ],
    }
  },
}


```

### DEMO <https://algesthesiahunter.github.io/VueTreeView>

### NPM

``` bash
# use npm
npm i vue2-tree-view -S

# use yarn
yarn add vue2-tree-view
```

### Import Plugins

``` js
import VueTreeView from 'vue2-tree-view'
Vue.use(VueTreeView)

```
