import React from "react";
import { Counter } from "./Counter";
import _ from 'lodash';
export { Page };

function Page() {
	const a = [1,2]
	const c = { name: 'xin' }
	const b = _.map(a, i => i * 2)
	return (
		<>
			<h1>Hello from vite-plugin-ssr</h1>
			This page is:
			<ul>
				<li>Rendered to HTML.</li>
				<li>
					Interactive. <Counter />
				</li>
				<li>
					{`${b[0]}-${b[1]}`} { _.get(c, 'name')}
				</li>
			</ul>
		</>
	);
}
