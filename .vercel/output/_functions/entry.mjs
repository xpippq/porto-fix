import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DirGR7cz.mjs';
import { manifest } from './manifest_C1ZRmiQy.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/tag/_tag_/_---page_.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/cv.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/store/_slug_.astro.mjs');
const _page10 = () => import('./pages/store/_---page_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/tag/[tag]/[...page].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/cv.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/store/[slug].astro", _page9],
    ["src/pages/store/[...page].astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1ec0170c-c78b-404e-8338-232d5f0a2a83",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
