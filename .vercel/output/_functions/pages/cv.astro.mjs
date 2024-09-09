/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, d as renderComponent } from '../chunks/astro/server_BdqoPpAV.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cp5SOX_W.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/components/cv/TimeLine.astro", void 0);

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Profile</div> </div> <div class="mb-10 text-justify">
Halo! Saya sangat tertarik dengan dunia web developer dan memiliki minat besar dalam menciptakan aplikasi web yang interaktif, responsif, dan mudah digunakan.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "SMP", "subtitle": "2019 - 2022 SMP Negeri 28 Bandung" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "SMK", "subtitle": "2022 - 2025 SMK Negeri 4 Bandung" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Kunjungan Industri", "subtitle": "2022" }, { "default": ($$result3) => renderTemplate`
Melakukan kunjungan Industri pada tahun 2022 ke AMIKOM Yogyakarta.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Kunjungan Sekolah", "subtitle": "2023" }, { "default": ($$result3) => renderTemplate`
Melakukan kunjungan ke sekolah SMK Mitra Industri MM2100 bersama pihak MedianSkill dan LearningX.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Mengerjakan Projek bersama MedianSkill", "subtitle": "2023" }, { "default": ($$result3) => renderTemplate`
Mengerjakan Projek Book Store API bersama pihak Medianskill tahun 2023.
` })}</div>  <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>HTML</li> <li>Python</li> <li>JavaScript</li> <li>MySQL</li> <li>Laravel</li> <li>PHP</li> <li>Java</li> <li>Vite JS</li> <li>Vue JS</li> <!-- <li>Skill Name</li>
    <li>Skill Name</li>
    <li>Skill Name</li>
    <li>Skill Name</li>
    <li>Skill Name</li>
    <li>Skill Name</li> --> </ul> ` })}`;
}, "C:/Users/Lenovo/Desktop/Portofolio/src/pages/cv.astro", void 0);

const $$file = "C:/Users/Lenovo/Desktop/Portofolio/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
