/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate } from '../../chunks/astro/server_BdqoPpAV.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  return renderTemplate`<!-- ---
import { CollectionEntry, getCollection } from "astro:content";
import { StoreSchema } from "../../content/config";
import StoreItemLayout from "../../layouts/StoreItemLayout.astro";

export async function getStaticPaths() {
  const itemEntries = await getCollection("store");
  return itemEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

interface Props {
  entry: CollectionEntry<"store">;
}

const { entry } = Astro.props;
const item: StoreSchema = entry.data;
const { Content } = await entry.render();
---

<StoreItemLayout
  title={item.title}
  description={item.description}
  heroImage={item.heroImage}
  updatedDate={item.updatedDate}
  heroImage={item.heroImage}
  pricing={item.pricing}
  oldPricing={item.oldPricing}
  checkoutUrl={item.checkoutUrl}
  badge={item.badge}
  custom_link={item.custom_link}
  custom_link_label={item.custom_link_label}
>
  <Content />
</StoreItemLayout> -->`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/pages/store/[slug].astro", void 0);

const $$file = "C:/Users/Lenovo/Desktop/Portofolio/src/pages/store/[slug].astro";
const $$url = "/store/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
