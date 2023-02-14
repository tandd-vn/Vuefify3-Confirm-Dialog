import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createVuetify} from 'vuetify'


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
    }
})

export default vuetify
