// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#022770',
        secondary: '#6495F5',
        accent: '#50700D',
      },
      dark: {
        primary: '#50778D',
        secondary: '#0B1C3D',
        accent: '#204165',
      },
    },
  },
})
