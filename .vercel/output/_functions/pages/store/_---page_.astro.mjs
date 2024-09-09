/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate } from '../../chunks/astro/server_BdqoPpAV.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`<!-- ---
import BaseLayout from "../../layouts/BaseLayout.astro";
import HorizontalShopItem from "../../components/HorizontalShopItem.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths({ paginate }) {
  const items = await getCollection("store");
  items.sort((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf());
  return paginate(items, { pageSize: 10 });
}
const { page } = Astro.props;
---

<BaseLayout title="Store" sideBarActiveItemID="store">
  <ul>
    {
      page.data.map((item) => (
        <>
          <HorizontalShopItem
            title={item.data.title}
            img={item.data.heroImage}
            desc={item.data.description}
            pricing={item.data.pricing}
            oldPricing={item.data.oldPricing}
            checkoutUrl={item.data.checkoutUrl}
            badge={item.data.badge}
            details={item.data.details}
            tags={item.data.tags}
            url={"/store/" + item.slug}
            custom_link={item.data.custom_link}
            custom_link_label={item.data.custom_link_label}
          />
          <div class="divider my-0" />
        </>
      ))
    }
  </ul>

  <div class="flex justify-between">
    {
      page.url.prev ? (
        <a href={page.url.prev} class="btn btn-ghost my-10 mx-5">
          {" "}
          <svg
            class="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>{" "}
          Previous page
        </a>
      ) : (
        <div />
      )
    }
    {
      page.url.next ? (
        <a href={page.url.next} class="btn btn-ghost my-10 mx-5">
          Next page{" "}
          <svg
            class="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            {" "}
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
      ) : (
        <div />
      )
    }
  </div>
</BaseLayout> -->`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/pages/store/[...page].astro", void 0);

const $$file = "C:/Users/Lenovo/Desktop/Portofolio/src/pages/store/[...page].astro";
const $$url = "/store/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
