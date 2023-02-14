<template>
    <v-app id="inspire">
        <v-app-bar flat>
            <v-container class="fill-height d-flex align-center pa-0">
                <v-avatar
                    color="brown"
                    size="large"
                >
                    <span class="text-h5">DT</span>
                </v-avatar>
            </v-container>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg" class="mx-auto pa-2">
                            <v-list rounded="lg">
                                <v-list-item
                                    v-for="(_, tab) in tabs"
                                    :class="currentTab === tab?'bg-blue':''"
                                    rounded="shaped"
                                    @click="currentTab = tab"
                                >
                                    <v-list-item-title>
                                        {{ tab }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="d-flex align-center justify-center h-100"
                        >
                            <component :is="tabs[currentTab]" @clickedButton="showConfirm"/>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import {getCurrentInstance, ref} from 'vue'
import Persistent from './components/persistent'
import Transition from './components/transition'

export default {
    setup(props) {
        const {proxy}      = getCurrentInstance();
        const currentTab = ref('Persistent')
        const tabs = {
            Persistent,
            Transition
        }
        const showConfirm  = () => {
            proxy.$confirmDialog(
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
                        }
                    }
                }
            )
        }

        return {
            tabs,
            currentTab,
            showConfirm
        }
    }
}
</script>
<style lang="css">
html {
    overflow: auto !important;
}
</style>