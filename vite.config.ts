import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import vavite from "vavite";

import { visualizer } from 'rollup-plugin-visualizer'
export default defineConfig({
    // legacy: { buildSsrCjsExternalHeuristics: true },
	buildSteps: [
		{ 
			name: "client",
			config: {
				build: { ssr: true },
			},
			// config: {
			// 	build: {
			// 		rollupOptions: {
			// 			external: ['lodash']
			// 		}
			// 	}
			// }
		},
		// {
		// 	name: "server",
		// 	config: {
		// 		build: { ssr: true },
		// 	},
		// },
	],
	build: {
		
	},
	ssr: {
		external: ['lodash', 'react'],
		noExternal: /lodash/,
	},
	plugins: [
		vavite({
			serverEntry: "/server/index.ts",
			serveClientAssetsInDev: true,
		}),
		react(),
		ssr({ disableAutoFullBuild: true }),
		visualizer()
	],
});
