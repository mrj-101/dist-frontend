import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: props.href,
        target: props.target
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseA = Object.assign(_sfc_main, { __name: "ProseA" });
export {
  ProseA as default
};
//# sourceMappingURL=ProseA-ZKhFjPo1.js.map
