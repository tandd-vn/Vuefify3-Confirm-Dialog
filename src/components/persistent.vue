<template>
    <v-btn @click="clickedButton" variant="outlined" color="blue">
        Click me
    </v-btn>
    <vuetify3-confirm-dialog persistent width="250"/>
</template>

<script>
export default {
    setup(props, context) {
        const clickedButton = () => {
            context.emit('clickedButton')
        }

        return {
            clickedButton
        }
    }
}
</script>
