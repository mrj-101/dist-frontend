import { defineComponent, useSlots, h, watch, useSSRContext } from "vue";
import ContentRendererMarkdown from "./ContentRendererMarkdown-DhTjA0-c.js";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/destr/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/scule/dist/index.mjs";
import "property-information";
import "./node-yHY0X6Y7.js";
import "vue/server-renderer";
import "./preview-nJr_Xshu.js";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/h3/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/klona/dist/index.mjs";
import "../server.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/hookable/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/radix3/dist/index.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/defu/dist/defu.mjs";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "reka-ui";
import "@vueuse/core";
import "tailwind-variants";
import "@iconify/utils/lib/css/icon";
import "/Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ohash/utils";
const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    /**
     * The document to render.
     */
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        if (newExcerpt && !props.value?.excerpt) {
          console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    const markdownAST = excerpt ? value?.excerpt : value?.body;
    if (!markdownAST?.children?.length && slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if (markdownAST?.type === "root" && markdownAST?.children?.length) {
      return h(
        ContentRendererMarkdown,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentRenderer = Object.assign(_sfc_main, { __name: "ContentRenderer" });
export {
  ContentRenderer as default
};
//# sourceMappingURL=ContentRenderer-BzhgchVz.js.map
