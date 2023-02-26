import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser' //fix production build
		}
	}
};

export default config;
