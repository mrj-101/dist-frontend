import { defineComponent, h, useSSRContext } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/index.mjs';

const _sfc_main = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h("div", "Document not found");
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocumentDrivenNotFound = Object.assign(_sfc_main, { __name: "DocumentDrivenNotFound" });

export { DocumentDrivenNotFound as default };
//# sourceMappingURL=DocumentDrivenNotFound-CrGBz1Ho.mjs.map
