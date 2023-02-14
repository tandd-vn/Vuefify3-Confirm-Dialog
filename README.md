# vuetify3-confirm-dialog

Simple Confirm Dialog verification plugin with VueJS 3 and Vuetify 3.

Demo: https://demo.tandd.dev/vuetify3-confirm-dialog/

## Install

```bash
$ npm install --save vuetify3-confirm-dialog
```

Or

```bash
$ yarn add vuetify3-confirm-dialog
```

## Quick Start Usage

In main.js or plugin (for Nuxt.js):

```js
import {createApp} from 'vue'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

import Vuetify3ConfirmDialog from 'vuetify3-confirm-dialog'

createApp(App).use(vuetify).use(Vuetify3ConfirmDialog).mount('#app')
```

In App.vue (or in the template file for Nuxt.js (layout/default.vue)):

```html

<template>
    <div id="app">
        <vuetify3-confirm-dialog/>
        <!-- your code -->
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
```

In any of functions :

```js
methods: {
    handleClick()
    {
        this.$confirmDialog(
            {
                title  : "Confirm",
                message: "Are you sure?",
                button : {
                    no : 'No',
                    yes: 'Yes'
                },
                /**
                 * Callback Function
                 * @param {Boolean} confirm
                 */
                callback: confirm => {
                    if (confirm) {
                        console.log(confirm)
                        // Do something
                    }
                }
            }
        )
    }
}
```

If you want to use in \*.js file (e.g Vuex Store) before import Vue and after use Vue.\$confirmDialog.

```js
import Vue from 'vue'

export default {
    namespaced: true,
    state     : {},
    actions   : {
        logout({commit}) {
            Vue.$confirmDialog({
                title   : 'Are you sure?',
                message : 'Are you sure you want to logout?',
                button  : {
                    yes: 'Yes',
                    no : 'Cancel'
                },
                callback: confirm => {
                    // ...do something
                }
            })
        }
    }
}
```

## Props

| Name             | Type                                                          | Default         | Description                                                                                                                     |
|------------------|---------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------|
| persistent       | boolean                                                       | false           | Clicking outside of the element or pressing esc key will not deactivate it.                                                     |
| transition       | String                                                        | fade-transition | Sets the component transition. Can be one of the [built in](https://vuetifyjs.com/en/styles/transitions/) or custom transition. |
| width            | String I Number                                               | auto            | Sets the width for the component.                                                                                               |
| z-index          | String I Number                                               | 2400            | The z-index used for the component                                                                                              |
| title-class      | String                                                        | 'bg-blue'       | The card title class.                                                                                                           |
| content-class    | String                                                        |                 | The card body class.                                                                                                            |
| actions-class    | String                                                        |                 | The card actions class.                                                                                                         |
| variant-button   | 'flat' I 'text' I 'elevated' I 'tonal' I 'outlined' I 'plain' | 'outlined'      | Applies a distinct style to the component                                                                                       |
| no-button-class  | String                                                        |                 | The class for "no" button.                                                                                                      |
| yes-button-class | String                                                        |                 | The class for "yes" button.                                                                                                     |
| no-button-color  | String                                                        |                 | The color for "no" button.                                                                                                      |
| yes-button-color | String                                                        | 'blue'          | The color for "yes" button.                                                                                                     |

## Use only for information

If you want to use only for information, and you want of see one button in dialog, you can use only one of 'no' or 'yes'
button object.

```js
methods: {
    handleClick()
    {
        this.$confirmDialog(
            {
                title:"Confirm",
                message: "Are you sure?",
                button: {
                    yes: 'Yes'
                },
                /**
                 * Callback Function
                 * @param {Boolean} confirm
                 */
                callback: confirm => {
                    if (confirm) {
                        console.log(confirm)
                        // Do something
                    }
                }
            }
        )
    }
}
```