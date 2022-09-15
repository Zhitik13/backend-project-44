install: cloning repository
	npm ci

brain-games:
	node bin/brain-games.js
	chmod +x bin/brain-games.js.

publish:
	npm publish --dry-run

lint:
	npx eslint .
