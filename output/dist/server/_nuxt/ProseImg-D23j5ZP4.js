import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import { withLeadingSlash, withTrailingSlash, joinURL } from "/Users/surachai/Dev/rvc2026/frontend/node_modules/ufo/dist/index.mjs";
import { e as useRuntimeConfig, I as ImageComponent } from "../server.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/hookable/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/unctx/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/radix3/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/defu/dist/defu.mjs";
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
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
        src: unref(refinedSrc),
        alt: props.alt,
        width: props.width,
        height: props.height
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseImg = Object.assign(_sfc_main, { __name: "ProseImg" });
export {
  ProseImg as default
};
//# sourceMappingURL=ProseImg-D23j5ZP4.js.map
