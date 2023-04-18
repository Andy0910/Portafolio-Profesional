// Styles
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
	theme: {
		defaultTheme: 'myTheme',
		themes: {
			myTheme: {
				colors:{
					prim: '#002060',
					sec: '#FB773F',
					ter: '#00D7FA'
				}
			}
		}
	},
	icons: {
		defaultSet: "fa",
		aliases,
		sets: {
			fa,
		},
	},
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
