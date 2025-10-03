import ContentSlot from './ContentSlot-DjP8VRq2.mjs';
import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/index.mjs';
import './node-yHY0X6Y7.mjs';

const _sfc_main = defineComponent({
  name: "Markdown",
  extends: ContentSlot,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Markdown = Object.assign(_sfc_main, { __name: "Markdown" });

export { Markdown as default };
//# sourceMappingURL=Markdown-CMWKbbwX.mjs.map
