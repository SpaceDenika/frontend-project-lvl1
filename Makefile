setup: install publish lint brain-games

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js
	
brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js