import * as React from 'react';
import {{pascalCase name}} from '../../../src/components/{{pascalCase name}}/{{pascalCase name}}';
import ExampleSource from '../../../node_modules/vimeo-styleguide/components/styleListings/ExampleSource';

export default function {{pascalCase name}}Docs() {

	return (
		<div>
			<div data-code>
				<{{pascalCase name}} />
			</div>

			<ExampleSource>
				{`
				<{{pascalCase name}} />
				`}
			</ExampleSource>
		</div>

	);
};
