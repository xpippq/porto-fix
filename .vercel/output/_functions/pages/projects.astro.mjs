/* empty css                                  */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BdqoPpAV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cp5SOX_W.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_CnPcjCoh.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Projects</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Sneakers Shop", "img": "/sneakers_shop.png", "desc": "Website Toko Sepatu - Tugas MPRPL", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Favorite Movies", "img": "/favorite_movies.png", "desc": "Website Favorite Movies - Tugas Informatika", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Restaurant Inventory", "img": "/goat_web.png", "desc": "Website Inventori Restoran - Tugas KK4RPL", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Bucket List", "img": "/bucket_web.png", "desc": "Website Bucket List - Tugas Informatika", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Mars", "img": "/mars_web.png", "desc": "Website Mars - Tugas Informatika", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Fan Website", "img": "/fan_web.png", "desc": "Website Fanbook - Tugas Informatika", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Data Siswa Laravel", "img": "/laravel_web.png", "desc": "Website Data Siswa - Tugas KK3RPL", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Data Siswa JavaScript", "img": "/jssiswa.png", "desc": "Website Data Siswa - Tugas KK4RPL", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Menghubungkan Database ke Web", "img": "/web1_web.png", "desc": "Menghubungkan Database ke Website - Tugas KK1RPL", "url": "#" })}   ` })}`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/Lenovo/Desktop/Portofolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
