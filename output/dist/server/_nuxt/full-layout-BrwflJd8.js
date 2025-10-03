import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/hookable/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/unctx/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/radix3/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/defu/dist/defu.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/klona/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "reka-ui";
import "@vueuse/core";
import "tailwind-variants";
import "@iconify/utils/lib/css/icon";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center border border-gray-200 dark:border-gray-600 rounded-lg" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/full-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fullLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  fullLayout as default
};
//# sourceMappingURL=full-layout-BrwflJd8.js.map
