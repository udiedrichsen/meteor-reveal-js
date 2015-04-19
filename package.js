Package.describe({
  name: 'doedel:reveal-js',
  summary: 'Reveal.js - HTML Presentation Framework',
  version: '3.0.2',
  git: 'https://github.com/udiedrichsen/meteor-reveal-js.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
	'reveal.js/css/theme/beige.css',
	'reveal.js/css/theme/blood.css',
	'reveal.js/css/theme/league.css',
	'reveal.js/css/theme/moon.css',
	'reveal.js/css/theme/night.css',
	'reveal.js/css/theme/serif.css',
	'reveal.js/css/theme/simple.css',
	'reveal.js/css/theme/sky.css',
	'reveal.js/css/theme/solarized.css',
	'reveal.js/css/theme/white.css',
	'reveal.js/lib/font/league-gothic/league-gothic.eot',
	'reveal.js/lib/font/league-gothic/league-gothic.ttf',
	'reveal.js/lib/font/league-gothic/league-gothic.woff',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.eot',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.ttf',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.woff',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.eot',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.ttf',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.woff',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.eot',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.ttf',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.woff',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff'
  ], 'client', { isAsset: true });

  api.addFiles([
	'reveal.js/lib/css/zenburn.css',
	'reveal.js/css/reveal.css',
	'reveal.js/css/theme/black.css',
	'reveal.js/lib/font/league-gothic/league-gothic.css',
    'reveal.js/lib/font/source-sans-pro/source-sans-pro.css',
	'reveal.js/js/reveal.js'
  ], 'client');

  api.export('Reveal', 'client');
});