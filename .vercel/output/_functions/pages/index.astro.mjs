/* empty css                                  */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BdqoPpAV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cp5SOX_W.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_CnPcjCoh.mjs';
import { g as getCollection } from '../chunks/_astro_content_CnRsD1Zv.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Halo! 👋</div> <div class="text-5xl font-bold">Muhammad Rafif Ramadhan</div> <div class="text-3xl py-3 font-bold">Web Developer</div> <div class="py-2"> <text class="text-lg">
Halo! Saya sangat tertarik dengan dunia web developer 
        dan memiliki minat besar dalam menciptakan aplikasi web yang interaktif, responsif, dan mudah digunakan.
</text> </div> <!-- <div class="mt-8">
      <a class="btn" href="https://twitter.com/manuelernestog" target="_blank"> Let's connect!</a>
      <a href="https://github.com/manuelernestog/astrofy" target="_blank" class="btn btn-outline ml-5">
        Get This template
      </a>
    </div>
  </div> --> <div> <div class="text-3xl w-full font-bold mb-2">Projek Terbaik Saya ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Sneakers Shop", "img": "/sneakers_shop.png", "desc": "Website Toko Sepatu - Tugas MPRPL", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Favorite Movies", "img": "/favorite_movies.png", "desc": "Website Favorite Movies - Tugas Informatika", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Restaurant Inventory", "img": "/goat_web.png", "desc": "Website Inventori Restoran - Tugas KK4RPL", "url": "#" })} <!-- <div>
    <div class="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</div>
  </div>

  {
    last_posts.map((post) => (
      <>
        <HorizontalCard
          title={post.data.title}
          img={post.data.heroImage}
          desc={post.data.description}
          url={"/blog/" + createSlug(post.data.title, post.slug)}
          target="_self"
          badge={post.data.badge}
        />
        <div class="divider my-0" />
      </>
    ))
  } --> </div>` })}`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lenovo/Desktop/Portofolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
