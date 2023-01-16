import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	//https://github.com/aws-amplify/amplify-js/issues/9639#issuecomment-1271856620
	define: {
		global: {} //fix dev build
	},
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser' //fix production build
		}
	}
};

export default config;
