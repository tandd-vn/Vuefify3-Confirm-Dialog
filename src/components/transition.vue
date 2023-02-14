<template>
    <v-sheet width="300" class="mx-auto">
        <v-form>
            <v-select
                v-model="transitionType"
                label="Select a transition"
                :items="['dialog-bottom-transition',
                            'dialog-top-transition',
                            'dialog-transition',
                            'expand-transition',
                            'expand-x-transition',
                            'fab-transition',
                            'fade-transition',
                            'scale-transition',
                            'scroll-x-transition',
                            'scroll-x-reverse-transition',
                            'scroll-y-transition',
                            'scroll-y-reverse-transition',
                            'slide-x-transition',
                            'slide-x-reverse-transition',
                            'slide-y-transition',
                            'slide-y-reverse-transition',
                        ]"
                variant="underlined"
            ></v-select>

            <v-btn @click="clickedButton" variant="outlined" color="blue">
                Click me
            </v-btn>
        </v-form>
    </v-sheet>
    <vuetify3-confirm-dialog :transition="transitionType" width="250"/>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(props, context) {
        const transitionType = ref('dialog-bottom-transition')
        const clickedButton = () => {
            context.emit('clickedButton')
        }

        return {
            clickedButton,
            transitionType
        }
    }
}
</script>
