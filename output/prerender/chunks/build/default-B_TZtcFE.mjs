import { defineComponent, ref, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, isRef, useSlots, computed, toRef, mergeProps, resolveDynamicComponent, renderSlot, createTextVNode, withModifiers, Fragment, renderList, toHandlers, reactive, useSSRContext } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderVNode, ssrRenderList } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/server-renderer/index.mjs';
import { useForwardPropsEmits, AccordionTrigger, AccordionItem, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, AccordionContent, AccordionRoot, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose, Primitive, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/reka-ui/dist/index.js';
import { defu } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/defu/dist/defu.mjs';
import { reactivePick, createReusableTemplate, createSharedComposable } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@vueuse/core/index.mjs';
import { p as _sfc_main$9, c as _sfc_main$e, f as useState, b as useAppConfig, t as tv, o as isArrayOfArray, m as _sfc_main$b, g as get, q as pickLinkProps, r as _sfc_main$a, s as useLocale, n as usePortal, v as _sfc_main$8, k as useButtonGroup, l as useComponentIcons } from './server.mjs';
import { HoverCard, Popover } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/reka-ui/dist/namespaced/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/tailwind-variants/dist/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ohash/dist/utils.mjs';
import '../_/renderer.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unhead/dist/server.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/devalue/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unified/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-parse/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-rehype/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-gfm/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/rehype-external-links/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/rehype-raw/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/detab/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/hast-util-to-string/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/github-slugger/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/icon/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/icon/node_modules/ohash/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/consola/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ipx/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/image/node_modules/pathe/dist/index.mjs';

const theme$5 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "tertiary",
      "variant": "solid",
      "class": "bg-tertiary text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "tertiary",
      "variant": "outline",
      "class": "text-tertiary ring ring-inset ring-tertiary/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "tertiary",
      "variant": "soft",
      "class": "bg-tertiary/10 text-tertiary"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "tertiary",
      "variant": "subtle",
      "class": "bg-tertiary/10 text-tertiary ring ring-inset ring-tertiary/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$6 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$5), ...((_a = appConfig.ui) == null ? void 0 : _a.badge) || {} })({
        color: props.color,
        variant: props.variant,
        size: buttonGroupSize.value || props.size,
        square: props.square || !slots.default && !props.label,
        buttonGroup: orientation.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.base({ class: [(_a = props.ui) == null ? void 0 : _a.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a2, _b, _c;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                  size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a2;
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a2 = props.ui) == null ? void 0 : _a2.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a2;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$e, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a2, _b, _c;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                    key: 1,
                    size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a2;
                return [
                  __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a2 = props.ui) == null ? void 0 : _a2.label })
                  }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a2;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a2 = props.ui) == null ? void 0 : _a2.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$4 = {
  "slots": {
    "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-default"
  }
};
const _sfc_main$5 = {
  __name: "UPopover",
  __ssrInlineRender: true,
  props: {
    mode: { type: String, required: false, default: "click" },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    openDelay: { type: Number, required: false, default: 0 },
    closeDelay: { type: Number, required: false, default: 0 }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.popover) || {} })({
        side: contentProps.value.side
      });
    });
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("Anchor" in Component.value && !!slots.anchor) {
              _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "anchor", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "anchor")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["reference", "class"])) : createCommentVNode("", true),
              "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
                key: 1,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "anchor")
                ]),
                _: 3
              })) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const kbdKeysMap = {
  meta: "",
  ctrl: "",
  alt: "",
  win: "\u229E",
  command: "\u2318",
  shift: "\u21E7",
  control: "\u2303",
  option: "\u2325",
  enter: "\u21B5",
  delete: "\u2326",
  backspace: "\u232B",
  escape: "\u238B",
  tab: "\u21E5",
  capslock: "\u21EA",
  arrowup: "\u2191",
  arrowright: "\u2192",
  arrowdown: "\u2193",
  arrowleft: "\u2190",
  pageup: "\u21DE",
  pagedown: "\u21DF",
  home: "\u2196",
  end: "\u2198"
};
const _useKbd = () => {
  const macOS = computed(() => false);
  const kbdKeysSpecificMap = reactive({
    meta: " ",
    alt: " ",
    ctrl: " "
  });
  function getKbdKey(value) {
    if (!value) {
      return;
    }
    if (["meta", "alt", "ctrl"].includes(value)) {
      return kbdKeysSpecificMap[value];
    }
    return kbdKeysMap[value] || value.toUpperCase();
  }
  return {
    macOS,
    getKbdKey
  };
};
const useKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
const theme$3 = {
  "base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans",
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "sm": "h-4 min-w-[16px] text-[10px]",
      "md": "h-5 min-w-[20px] text-[11px]",
      "lg": "h-6 min-w-[24px] text-[12px]"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "text-inverted bg-primary"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "text-inverted bg-secondary"
    },
    {
      "color": "tertiary",
      "variant": "solid",
      "class": "text-inverted bg-tertiary"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "text-inverted bg-info"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "text-inverted bg-success"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "text-inverted bg-warning"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "text-inverted bg-error"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "ring ring-inset ring-primary/50 text-primary"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "ring ring-inset ring-secondary/50 text-secondary"
    },
    {
      "color": "tertiary",
      "variant": "outline",
      "class": "ring ring-inset ring-tertiary/50 text-tertiary"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "ring ring-inset ring-info/50 text-info"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "ring ring-inset ring-success/50 text-success"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "ring ring-inset ring-warning/50 text-warning"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "ring ring-inset ring-error/50 text-error"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "text-primary bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "text-secondary bg-secondary/10"
    },
    {
      "color": "tertiary",
      "variant": "soft",
      "class": "text-tertiary bg-tertiary/10"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "text-info bg-info/10"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "text-success bg-success/10"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "text-warning bg-warning/10"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "text-error bg-error/10"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
    },
    {
      "color": "tertiary",
      "variant": "subtle",
      "class": "text-tertiary ring ring-inset ring-tertiary/25 bg-tertiary/10"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "text-info ring ring-inset ring-info/25 bg-info/10"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "text-success ring ring-inset ring-success/25 bg-success/10"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "text-error ring ring-inset ring-error/25 bg-error/10"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "color": "neutral",
    "size": "md"
  }
};
const _sfc_main$4 = {
  __name: "UKbd",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "kbd" },
    value: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { getKbdKey } = useKbd();
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.kbd) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class, color: props.color, variant: props.variant, size: props.size })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(unref(getKbdKey)(__props.value))}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(unref(getKbdKey)(__props.value)), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
    "arrow": "fill-default",
    "text": "truncate",
    "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['\xB7'] not-first-of-type:before:me-0.5",
    "kbdsSize": "sm"
  }
};
const _sfc_main$3 = {
  __name: "UTooltip",
  __ssrInlineRender: true,
  props: {
    text: { type: String, required: false },
    kbds: { type: Array, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.tooltip) || {} })({
        side: contentProps.value.side
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(rootProps), {
        disabled: !(__props.text || ((_a = __props.kbds) == null ? void 0 : _a.length) || !!slots.content) || props.disabled
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(TooltipTrigger), mergeProps(_ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(TooltipPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TooltipContent), mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a4, _b3, _c;
                          if (__props.text) {
                            _push4(`<span class="${ssrRenderClass(ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text }))}"${_scopeId3}>${ssrInterpolate(__props.text)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if ((_b3 = __props.kbds) == null ? void 0 : _b3.length) {
                            _push4(`<span class="${ssrRenderClass(ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds }))}"${_scopeId3}><!--[-->`);
                            ssrRenderList(__props.kbds, (kbd, index) => {
                              var _a5;
                              _push4(ssrRenderComponent(_sfc_main$4, mergeProps({
                                key: index,
                                size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(TooltipArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b3, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b3 = __props.kbds) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$4, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b2, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b2 = __props.kbds) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$4, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(TooltipTrigger), mergeProps({ key: 0 }, _ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1040, ["reference", "class"])) : createCommentVNode("", true),
              createVNode(unref(TooltipPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a4, _b, _c;
                            return [
                              __props.text ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.text({ class: (_a4 = props.ui) == null ? void 0 : _a4.text })
                              }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                              ((_b = __props.kbds) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.kbds({ class: (_c = props.ui) == null ? void 0 : _c.kbds })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                  var _a5;
                                  return openBlock(), createBlock(_sfc_main$4, mergeProps({
                                    key: index,
                                    size: ((_a5 = props.ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                  }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                                }), 128))
                              ], 2)) : createCommentVNode("", true)
                            ];
                          }),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "group ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childList": "isolate",
    "childLabel": "text-xs text-highlighted",
    "childItem": "",
    "childLink": "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "childLinkWrapper": "min-w-0",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "truncate",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childLinkDescription": "text-muted",
    "separator": "px-2 h-px bg-border",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    "content": "",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary",
        "childLink": "focus-visible:before:ring-primary"
      },
      "secondary": {
        "link": "focus-visible:before:ring-secondary",
        "childLink": "focus-visible:before:ring-secondary"
      },
      "tertiary": {
        "link": "focus-visible:before:ring-tertiary",
        "childLink": "focus-visible:before:ring-tertiary"
      },
      "info": {
        "link": "focus-visible:before:ring-info",
        "childLink": "focus-visible:before:ring-info"
      },
      "success": {
        "link": "focus-visible:before:ring-success",
        "childLink": "focus-visible:before:ring-success"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning",
        "childLink": "focus-visible:before:ring-warning"
      },
      "error": {
        "link": "focus-visible:before:ring-error",
        "childLink": "focus-visible:before:ring-error"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted",
        "childLink": "focus-visible:before:ring-inverted"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2",
        "childLink": "px-3 py-2 gap-2 before:inset-x-px before:inset-y-0",
        "childLinkLabel": "font-medium",
        "content": "absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
        "childLabel": "px-1.5 py-0.5",
        "childLink": "p-1.5 gap-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)"
      }
    },
    "active": {
      "true": {
        "childLink": "before:bg-elevated text-highlighted",
        "childLinkIcon": "text-default"
      },
      "false": {
        "link": "text-muted",
        "linkLeadingIcon": "text-dimmed",
        "childLink": [
          "hover:before:bg-elevated/50 text-default hover:text-highlighted",
          "transition-colors before:transition-colors"
        ],
        "childLinkIcon": [
          "text-dimmed group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-default",
        "childItem": "ps-1.5 -ms-px",
        "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5",
        "content": "shadow-sm rounded-sm min-h-6 p-1"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "tertiary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-tertiary",
        "linkLeadingIcon": "text-tertiary group-data-[state=open]:text-tertiary"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-elevated"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "disabled": false,
      "class": {
        "link": [
          "hover:before:bg-elevated/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-highlighted",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "tertiary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-tertiary",
        "linkLeadingIcon": "text-tertiary group-data-[state=open]:text-tertiary"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-secondary"
      }
    },
    {
      "highlightColor": "tertiary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-tertiary"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-info"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-success"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UNavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    trailingIcon: { type: String, required: false },
    externalIcon: { type: [Boolean, String], required: false, default: true },
    items: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    collapsed: { type: Boolean, required: false },
    tooltip: { type: [Boolean, Object], required: false },
    popover: { type: [Boolean, Object], required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    content: { type: Object, required: false },
    contentOrientation: { type: null, required: false, default: "horizontal" },
    arrow: { type: Boolean, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    delayDuration: { type: Number, required: false, default: 0 },
    disableClickTrigger: { type: Boolean, required: false },
    disableHoverTrigger: { type: Boolean, required: false },
    skipDelayDuration: { type: Number, required: false },
    disablePointerLeaveClose: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false },
    type: { type: String, required: false, default: "multiple" },
    collapsible: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const accordionProps = useForwardPropsEmits(reactivePick(props, "collapsible", "disabled", "type", "unmountOnHide"), emits);
    const contentProps = toRef(() => props.content);
    const tooltipProps = toRef(() => defu(typeof props.tooltip === "boolean" ? {} : props.tooltip, { delayDuration: 0, content: { side: "right" } }));
    const popoverProps = toRef(() => defu(typeof props.popover === "boolean" ? {} : props.popover, { mode: "hover", content: { side: "right", align: "start", alignOffset: 2 } }));
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.navigationMenu) || {} })({
        orientation: props.orientation,
        contentOrientation: props.orientation === "vertical" ? void 0 : props.contentOrientation,
        collapsed: props.collapsed,
        color: props.color,
        variant: props.variant,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    const lists = computed(
      () => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
    );
    function getAccordionDefaultValue(list, level = 0) {
      const indexes = list.reduce((acc, item, index) => {
        if (item.defaultOpen || item.open) {
          acc.push(item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`));
        }
        return acc;
      }, []);
      return props.type === "single" ? indexes[0] : indexes;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a3, _b2, _c2, _d2, _e2, _f2;
                if (item.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                    size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar], active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: [(_e2 = props.ui) == null ? void 0 : _e2.linkLeadingIcon, (_f2 = item.ui) == null ? void 0 : _f2.linkLeadingIcon], active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: [(_a2 = props.ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    class: ui.value.linkLabelExternalIcon({ class: [(_c = props.ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon], active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                  as: "span",
                  class: ui.value.linkTrailing({ class: [(_h = props.ui) == null ? void 0 : _h.linkTrailing, (_i = item.ui) == null ? void 0 : _i.linkTrailing] }),
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                        item,
                        active,
                        index
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                        if (item.badge !== void 0) {
                          _push3(ssrRenderComponent(_sfc_main$6, mergeProps({
                            color: "neutral",
                            variant: "outline",
                            size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length)) {
                          _push3(ssrRenderComponent(_sfc_main$e, {
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else if (item.trailingIcon) {
                          _push3(ssrRenderComponent(_sfc_main$e, {
                            name: item.trailingIcon,
                            class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                          item,
                          active,
                          index
                        }, () => {
                          var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                          return [
                            item.badge !== void 0 ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
                              key: 0,
                              color: "neutral",
                              variant: "outline",
                              size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                            }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                              class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                            __props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$e, {
                              key: 1,
                              name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                              class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                            }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e, {
                              key: 2,
                              name: item.trailingIcon,
                              class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
                      ];
                    }
                  }),
                  _: 2
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a3, _b2, _c2, _d2, _e2, _f2;
                    return [
                      item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                        key: 0,
                        size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar], active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: [(_e2 = props.ui) == null ? void 0 : _e2.linkLeadingIcon, (_f2 = item.ui) == null ? void 0 : _f2.linkLeadingIcon], active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!__props.collapsed || __props.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: [(_a2 = props.ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                      class: ui.value.linkLabelExternalIcon({ class: [(_c = props.ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon], active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!__props.collapsed || __props.orientation !== "vertical") && (item.badge || __props.orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                    key: 1,
                    as: "span",
                    class: ui.value.linkTrailing({ class: [(_h = props.ui) == null ? void 0 : _h.linkTrailing, (_i = item.ui) == null ? void 0 : _i.linkTrailing] }),
                    onClick: withModifiers(() => {
                    }, ["stop", "prevent"])
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                        item,
                        active,
                        index
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
                        return [
                          item.badge !== void 0 ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "outline",
                            size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            class: ui.value.linkTrailingBadge({ class: [(_c2 = props.ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                          __props.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            class: ui.value.linkTrailingIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 2,
                            name: item.trailingIcon,
                            class: ui.value.linkTrailingIcon({ class: [(_i2 = props.ui) == null ? void 0 : _i2.linkTrailingIcon, (_j = item.ui) == null ? void 0 : _j.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  if (__props.orientation === "vertical" && item.type === "label" && !__props.collapsed) {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: [(_a2 = props.ui) == null ? void 0 : _a2.label, (_b = item.ui) == null ? void 0 : _b.label, item.class] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(_sfc_main$9, mergeProps(__props.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                              if (_push5) {
                                if (__props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover)) {
                                  _push5(ssrRenderComponent(_sfc_main$5, mergeProps({ ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                  }), {
                                    content: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, () => {
                                          var _a5, _b4, _c4, _d4;
                                          _push6(`<ul class="${ssrRenderClass(ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] }))}"${_scopeId5}><li class="${ssrRenderClass(ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] }))}"${_scopeId5}>${ssrInterpolate(unref(get)(item, props.labelKey))}</li><!--[-->`);
                                          ssrRenderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            _push6(`<li class="${ssrRenderClass(ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] }))}"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                              default: withCtx(({ active: childActive, ...childSlotProps }, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a7, _b6, _c5, _d5;
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx((_5, _push9, _parent9, _scopeId8) => {
                                                            var _a8, _b7, _c6, _d6, _e4, _f4, _g4, _h4, _i4, _j4, _k2, _l2;
                                                            if (_push9) {
                                                              if (childItem.icon) {
                                                                _push9(ssrRenderComponent(_sfc_main$e, {
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`<span class="${ssrRenderClass(ui.value.childLinkLabel({ class: [(_c6 = props.ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel], active: childActive }))}"${_scopeId8}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                              if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                                _push9(ssrRenderComponent(_sfc_main$e, {
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`</span>`);
                                                            } else {
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_g4 = props.ui) == null ? void 0 : _g4.childLinkIcon, (_h4 = item.ui) == null ? void 0 : _h4.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_i4 = props.ui) == null ? void 0 : _i4.childLinkLabel, (_j4 = item.ui) == null ? void 0 : _j4.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_k2 = props.ui) == null ? void 0 : _k2.childLinkLabelExternalIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLink, (_d5 = item.ui) == null ? void 0 : _d5.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c6, _d6, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c6 = props.ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(`</li>`);
                                          });
                                          _push6(`<!--]--></ul>`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, () => {
                                            var _a5, _b4, _c4, _d4;
                                            return [
                                              createVNode("ul", {
                                                class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                              }, [
                                                createVNode("li", {
                                                  class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                                }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                                  var _a6, _b5;
                                                  return openBlock(), createBlock("li", {
                                                    key: childIndex,
                                                    class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                                  }, [
                                                    createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                      default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                        createVNode(unref(NavigationMenuLink), {
                                                          "as-child": "",
                                                          active: childActive,
                                                          onSelect: childItem.onSelect
                                                        }, {
                                                          default: withCtx(() => {
                                                            var _a7, _b6;
                                                            return [
                                                              createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                                class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                              }), {
                                                                default: withCtx(() => {
                                                                  var _a8, _b7, _c5, _d5, _e4, _f4;
                                                                  return [
                                                                    childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                      key: 0,
                                                                      name: childItem.icon,
                                                                      class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                    createVNode("span", {
                                                                      class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                    }, [
                                                                      createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                      childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                        key: 0,
                                                                        name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                        class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                    ], 2)
                                                                  ];
                                                                }),
                                                                _: 2
                                                              }, 1040, ["class"])
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1032, ["active", "onSelect"])
                                                      ]),
                                                      _: 2
                                                    }, 1040)
                                                  ], 2);
                                                }), 128))
                                              ], 2)
                                            ];
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      var _a5, _b4, _c4, _d4;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a, mergeProps(slotProps, {
                                            class: ui.value.link({ class: [(_c4 = props.ui) == null ? void 0 : _c4.link, (_d4 = item.ui) == null ? void 0 : _d4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else if (__props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip)) {
                                  _push5(ssrRenderComponent(_sfc_main$3, mergeProps({
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      var _a5, _b4, _c4, _d4;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a, mergeProps(slotProps, {
                                            class: ui.value.link({ class: [(_c4 = props.ui) == null ? void 0 : _c4.link, (_d4 = item.ui) == null ? void 0 : _d4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(_sfc_main$a, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                              } else {
                                return [
                                  __props.orientation === "vertical" && __props.collapsed && ((_f3 = item.children) == null ? void 0 : _f3.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_g3 = props.ui) == null ? void 0 : _g3.content, (_h3 = item.ui) == null ? void 0 : _h3.content] }) }
                                  }), {
                                    content: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, () => {
                                        var _a5, _b4, _c4, _d4;
                                        return [
                                          createVNode("ul", {
                                            class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                          }, [
                                            createVNode("li", {
                                              class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                            }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                              var _a6, _b5;
                                              return openBlock(), createBlock("li", {
                                                key: childIndex,
                                                class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                              }, [
                                                createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                  default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f4;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ], 2);
                                            }), 128))
                                          ], 2)
                                        ];
                                      })
                                    ]),
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                    key: 1,
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a, mergeProps({ key: 2 }, slotProps, {
                                    class: ui.value.link({ class: [(_i3 = props.ui) == null ? void 0 : _i3.link, (_j3 = item.ui) == null ? void 0 : _j3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"]))
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (__props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active: active || item.active,
                                    index
                                  }, () => {
                                    var _a4, _b3;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                var _a6, _b5, _c3, _d3;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3, _k2, _l2, _m, _n, _o, _p, _q, _r, _s, _t;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(_sfc_main$e, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(_sfc_main$e, {
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_k2 = props.ui) == null ? void 0 : _k2.childLinkIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_m = props.ui) == null ? void 0 : _m.childLinkWrapper, (_n = item.ui) == null ? void 0 : _n.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_o = props.ui) == null ? void 0 : _o.childLinkLabel, (_p = item.ui) == null ? void 0 : _p.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_q = props.ui) == null ? void 0 : _q.childLinkLabelExternalIcon, (_r = item.ui) == null ? void 0 : _r.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_s = props.ui) == null ? void 0 : _s.childLinkDescription, (_t = item.ui) == null ? void 0 : _t.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLink, (_d3 = item.ui) == null ? void 0 : _d3.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a6, _b5;
                                                  return [
                                                    createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a4, _b3;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a5, _b4;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a6, _b5;
                                                      return [
                                                        createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_f2 = item.children) == null ? void 0 : _f2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_g2 = item.children) == null ? void 0 : _g2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a4, _b3, _c3, _d3, _e3;
                                return [
                                  __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                  }), {
                                    content: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, () => {
                                        var _a5, _b4, _c4, _d4;
                                        return [
                                          createVNode("ul", {
                                            class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                          }, [
                                            createVNode("li", {
                                              class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                            }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                              var _a6, _b5;
                                              return openBlock(), createBlock("li", {
                                                key: childIndex,
                                                class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                              }, [
                                                createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                  default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a7, _b6;
                                                        return [
                                                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                            class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => {
                                                              var _a8, _b7, _c5, _d5, _e4, _f3;
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ], 2);
                                            }), 128))
                                          ], 2)
                                        ];
                                      })
                                    ]),
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                    key: 1,
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx(() => {
                                      var _a5, _b4;
                                      return [
                                        createVNode(_sfc_main$a, mergeProps(slotProps, {
                                          class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(ReuseLinkTemplate), {
                                              item,
                                              active: active || item.active,
                                              index
                                            }, null, 8, ["item", "active", "index"])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
                                      ];
                                    }),
                                    _: 2
                                  }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a, mergeProps({ key: 2 }, slotProps, {
                                    class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"]))
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            __props.orientation === "horizontal" && (((_h2 = item.children) == null ? void 0 : _h2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: [(_i2 = props.ui) == null ? void 0 : _i2.content, (_j2 = item.ui) == null ? void 0 : _j2.content] })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index
                                }, () => {
                                  var _a4, _b3;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a5, _b4;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                        }, [
                                          createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a6, _b5;
                                                  return [
                                                    createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [(_g3 = props.ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: [(_i3 = props.ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !__props.collapsed) {
                    _push3(ssrRenderComponent(unref(AccordionContent), {
                      class: ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a3, _b2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(item.children, (childItem, childIndex) => {
                                  var _a4, _b3;
                                  _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                    var _a4, _b3;
                                    return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                      key: childIndex,
                                      item: childItem,
                                      index: childIndex,
                                      level: level + 1,
                                      class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                    }, null, 8, ["item", "index", "level", "class"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionRoot), mergeProps({
                              ...unref(accordionProps),
                              defaultValue: getAccordionDefaultValue(item.children, level + 1)
                            }, {
                              as: "ul",
                              class: ui.value.childList({ class: (_b2 = props.ui) == null ? void 0 : _b2.childList })
                            }), {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                  var _a4, _b3;
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                                  }, null, 8, ["item", "index", "level", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1040, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: [(_g = props.ui) == null ? void 0 : _g.label, (_h = item.ui) == null ? void 0 : _h.label, item.class] })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_i = item.children) == null ? void 0 : _i.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a3, _b2, _c2, _d2, _e2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3, _c3, _d3, _e3;
                              return [
                                __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                  ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                }), {
                                  content: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a5, _b4, _c4, _d4;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                        }, [
                                          createVNode("li", {
                                            class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a7, _b6;
                                                      return [
                                                        createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a8, _b7, _c5, _d5, _e4, _f2;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ]),
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: 1,
                                  text: unref(get)(item, props.labelKey)
                                }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a, mergeProps({ key: 2 }, slotProps, {
                                  class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"]))
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active: active || item.active,
                                index
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a6, _b5;
                                                return [
                                                  createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a7, _b6, _c3, _d3, _e3, _f2, _g2, _h2, _i2, _j2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [(_g2 = props.ui) == null ? void 0 : _g2.childLinkLabelExternalIcon, (_h2 = item.ui) == null ? void 0 : _h2.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: [(_i2 = props.ui) == null ? void 0 : _i2.childLinkDescription, (_j2 = item.ui) == null ? void 0 : _j2.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true),
                    __props.orientation === "vertical" && ((_j = item.children) == null ? void 0 : _j.length) && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 2,
                      class: ui.value.content({ class: [(_k = props.ui) == null ? void 0 : _k.content, (_l = item.ui) == null ? void 0 : _l.content] })
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                var _a4, _b2;
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: childIndex,
                                  item: childItem,
                                  index: childIndex,
                                  level: level + 1,
                                  class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b2 = childItem.ui) == null ? void 0 : _b2.childItem] })
                                }, null, 8, ["item", "index", "level", "class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
              }, {
                default: withCtx(() => {
                  var _a2, _b, _c, _d, _e, _f;
                  return [
                    __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: [(_a2 = props.ui) == null ? void 0 : _a2.label, (_b = item.ui) == null ? void 0 : _b.label, item.class] })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9, mergeProps({ key: 1 }, __props.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a3, _b2, _c2, _d2, _e2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a4, _b3, _c3, _d3, _e3;
                              return [
                                __props.orientation === "vertical" && __props.collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                  ui: { content: ui.value.content({ class: [(_b3 = props.ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) }
                                }), {
                                  content: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, () => {
                                      var _a5, _b4, _c4, _d4;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                        }, [
                                          createVNode("li", {
                                            class: ui.value.childLabel({ class: [(_c4 = props.ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a6, _b5;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a7, _b6;
                                                      return [
                                                        createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLink, (_b6 = item.ui) == null ? void 0 : _b6.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a8, _b7, _c5, _d5, _e4, _f2;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                class: ui.value.childLinkLabel({ class: [(_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [(_e4 = props.ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ]),
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                                  key: 1,
                                  text: unref(get)(item, props.labelKey)
                                }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                  default: withCtx(() => {
                                    var _a5, _b4;
                                    return [
                                      createVNode(_sfc_main$a, mergeProps(slotProps, {
                                        class: ui.value.link({ class: [(_a5 = props.ui) == null ? void 0 : _a5.link, (_b4 = item.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ];
                                  }),
                                  _: 2
                                }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a, mergeProps({ key: 2 }, slotProps, {
                                  class: ui.value.link({ class: [(_d3 = props.ui) == null ? void 0 : _d3.link, (_e3 = item.ui) == null ? void 0 : _e3.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"]))
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          __props.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: [(_d2 = props.ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active: active || item.active,
                                index
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a5, _b4;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: [(_a5 = props.ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a6, _b5;
                                                return [
                                                  createVNode(_sfc_main$a, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a6 = props.ui) == null ? void 0 : _a6.childLink, (_b5 = item.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a7, _b6, _c3, _d3, _e3, _f2, _g, _h, _i, _j;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: [(_a7 = props.ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: [(_c3 = props.ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: [(_e3 = props.ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [(_g = props.ui) == null ? void 0 : _g.childLinkLabelExternalIcon, (_h = item.ui) == null ? void 0 : _h.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: [(_i = props.ui) == null ? void 0 : _i.childLinkDescription, (_j = item.ui) == null ? void 0 : _j.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true),
                    __props.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 2,
                      class: ui.value.content({ class: [(_e = props.ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
                    }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            class: ui.value.childList({ class: (_a3 = props.ui) == null ? void 0 : _a3.childList })
                          }), {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                var _a4, _b2;
                                return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                  key: childIndex,
                                  item: childItem,
                                  index: childIndex,
                                  level: level + 1,
                                  class: ui.value.childItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.childItem, (_b2 = childItem.ui) == null ? void 0 : _b2.childItem] })
                                }, null, 8, ["item", "index", "level", "class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1040, ["class"])
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["value"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps({ ...unref(rootProps), ..._ctx.$attrs }, {
        "data-collapsed": __props.collapsed,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a3, _b2;
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                ...unref(accordionProps),
                defaultValue: getAccordionDefaultValue(list)
              } : {}, {
                as: "ul",
                class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a4, _b3;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
              if (__props.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push2, _parent2, _scopeId);
            if (__props.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.viewportWrapper }))}"${_scopeId}>`);
              if (__props.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b = props.ui) == null ? void 0 : _b.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b2;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "list-leading"),
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a3, _b2;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                    ...unref(accordionProps),
                    defaultValue: getAccordionDefaultValue(list)
                  } : {}, {
                    as: "ul",
                    class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
                  }), {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: [(_a4 = props.ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1040, ["class"])),
                  __props.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              renderSlot(_ctx.$slots, "list-trailing"),
              __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d = props.ui) == null ? void 0 : _d.viewportWrapper })
              }, [
                __props.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": {
        "content": "inset-x-0 top-0 max-h-full"
      },
      "right": {
        "content": "right-0 inset-y-0 w-full max-w-md"
      },
      "bottom": {
        "content": "inset-x-0 bottom-0 max-h-full"
      },
      "left": {
        "content": "left-0 inset-y-0 w-full max-w-md"
      }
    },
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "transition": true,
      "side": "top",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ]
};
const _sfc_main$1 = {
  __name: "USlideover",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    side: { type: null, required: false, default: "right" },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: String, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      const defaultEvents = {
        closeAutoFocus: (e) => e.preventDefault()
      };
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, defaultEvents);
      }
      return defaultEvents;
    });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.slideover) || {} })({
        transition: props.transition,
        side: props.side
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              var _a3, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", { close }, () => {
                                  var _a3, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                    }, [
                                      __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    renderSlot(_ctx.$slots, "actions"),
                                    props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                      key: 0,
                                      "as-child": ""
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", {
                                          close,
                                          ui: ui.value
                                        }, () => {
                                          var _a4;
                                          return [
                                            props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                              key: 0,
                                              icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("slideover.close")
                                            }, typeof props.close === "object" ? props.close : {}, {
                                              class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              createVNode("div", {
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body", { close })
                              ], 2),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer", { close })
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c2;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a = props.ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => {
                          var _a2, _b2, _c;
                          return [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper })
                                  }, [
                                    __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  renderSlot(_ctx.$slots, "actions"),
                                  props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                    key: 0,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", {
                                        close,
                                        ui: ui.value
                                      }, () => {
                                        var _a4;
                                        return [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/logo.png");
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let open = ref(false);
    const colorMode = useColorMode();
    colorMode.preference = "light";
    const items = ref([
      [
        {
          label: "Home",
          icon: "lets-icons:home-duotone",
          to: "/",
          cick() {
            open.value = false;
          }
        },
        {
          label: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19",
          icon: "iconoir:presentation",
          children: [
            {
              label: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32",
              icon: "hugeicons:school",
              description: "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 \u0E27\u0E34\u0E2A\u0E31\u0E22\u0E17\u0E31\u0E28\u0E19\u0E4C \u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08",
              to: "/base/rvc"
            },
            {
              label: "\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32",
              icon: "hugeicons:manager",
              description: "\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32, \u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23",
              to: "/base/administrator"
            },
            {
              label: "\u0E04\u0E13\u0E30\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32",
              icon: "hugeicons:user-group-02",
              description: "\u0E04\u0E13\u0E30\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32, \u0E0A\u0E21\u0E23\u0E21\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07",
              to: "/base/board"
            },
            {
              label: "\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
              icon: "hugeicons:maps-global-01",
              description: "\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48 \u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C \u0E42\u0E17\u0E23\u0E2A\u0E32\u0E23 \u0E2D\u0E35\u0E40\u0E21\u0E25",
              to: "/base/contact"
            },
            {
              label: "\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08",
              icon: "lets-icons:desk-duotone-line",
              description: "\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48 \u0E01\u0E0F\u0E2B\u0E21\u0E32\u0E22",
              to: "/base/mission"
            }
          ]
        },
        {
          label: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23",
          icon: "i-lucide-book-open",
          children: [
            {
              label: "\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E0A.",
              icon: "hugeicons:book-01",
              description: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E0A.",
              to: "/curriculum/grade2"
            },
            {
              label: "\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E2A.",
              icon: "hugeicons:book-02",
              description: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E2A.",
              to: "/curriculum/grade3"
            },
            {
              label: "\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B.\u0E15\u0E23\u0E35",
              icon: "hugeicons:book-03",
              description: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B.\u0E15\u0E23\u0E35",
              to: "/curriculum/grade4"
            }
          ]
        },
        {
          label: "\u0E2A\u0E32\u0E02\u0E32\u0E27\u0E34\u0E0A\u0E32/\u0E07\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E22",
          icon: "lets-icons:subttasks-fill",
          children: [
            {
              label: "\u0E41\u0E1C\u0E19\u0E01\u0E27\u0E34\u0E0A\u0E32",
              icon: "hugeicons:student",
              description: "\u0E41\u0E1C\u0E19\u0E01\u0E27\u0E34\u0E0A\u0E32 \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B\u0E27\u0E0A. \u0E41\u0E25\u0E30 \u0E1B\u0E27\u0E2A.",
              to: "/dept/dept"
            },
            {
              label: "\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32",
              icon: "hugeicons:student",
              description: "\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32 \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A \u0E1B.\u0E15\u0E23\u0E35",
              to: "/dept/graduate"
            },
            {
              label: "\u0E1D\u0E48\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23",
              icon: "hugeicons:student",
              description: "\u0E07\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E40\u0E0A\u0E48\u0E19 \u0E07\u0E32\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23",
              to: "/job/academic/"
            },
            {
              label: "\u0E1D\u0E48\u0E32\u0E22\u0E01\u0E34\u0E08\u0E01\u0E32\u0E23\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32",
              icon: "hugeicons:workout-run",
              description: "\u0E07\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E40\u0E0A\u0E48\u0E19 \u0E07\u0E32\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2F",
              to: "/job/activity/"
            },
            {
              label: "\u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23",
              icon: "hugeicons:permanent-job",
              description: "\u0E07\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E32\u0E23 \u0E40\u0E0A\u0E48\u0E19 \u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19",
              to: "/job/resource/"
            },
            {
              label: "\u0E1D\u0E48\u0E32\u0E22\u0E41\u0E1C\u0E19\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D",
              icon: "hugeicons:bitcoin-money-02",
              description: "\u0E07\u0E32\u0E19\u0E43\u0E19\u0E1D\u0E48\u0E32\u0E22\u0E1D\u0E48\u0E32\u0E22\u0E41\u0E1C\u0E19\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D \u0E40\u0E0A\u0E48\u0E19 \u0E07\u0E32\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D",
              to: "/job/plan/"
            }
          ]
        }
      ]
    ]);
    const socials = ref([
      [
        {
          icon: "hugeicons:youtube",
          class: "text-red-600",
          to: "https://www.youtube.com/@RoiEtVocationalCollege",
          target: "_blank"
        },
        {
          icon: "hugeicons:facebook-02",
          class: "text-blue-600",
          to: "https://www.facebook.com/profile.php?id=100057582813831",
          target: "_blank"
        },
        {
          icon: "hugeicons:tiktok",
          class: "text-gray-600",
          to: "https://www.tiktok.com/discover/\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E2D\u0E32\u0E0A\u0E35\u0E27\u0E30\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14",
          target: "_blank"
          // active: true
        }
      ]
    ]);
    const onMenuSelect = (item) => {
      if (item == null ? void 0 : item.to) {
        open.value = false;
      } else {
        console.log("Menu item selected:", item);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNavigationMenu = _sfc_main$2;
      const _component_ULink = _sfc_main$9;
      const _component_UIcon = _sfc_main$e;
      const _component_USlideover = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="border-b border-gray-200 dark:border-gray-600 w-full"><div class="lg:px-5 lg:pl-3 py-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start"><button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"><svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><a href="/" class="text-xl font-bold flex items-center lg:ml-2.5"><img${ssrRenderAttr("src", _imports_0)} class="h-12 mr-2" alt="RVC Logo"><span class="self-center whitespace-nowrap text-slate-600">\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E2D\u0E32\u0E0A\u0E35\u0E27\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14<span class="block text-sm text-slate-400 font-thin tracking-widest">Roi Et Vocational College</span></span></a></div><div class="hidden md:flex justify-center w-1/2">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        color: "neutral",
        items: unref(items),
        class: "w-full justify-center text-blue-700"
      }, null, _parent));
      _push(`</div><div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        items: unref(socials),
        highlight: "",
        "highlight-color": "info",
        class: "w-full justify-center"
      }, {
        item: withCtx(({ item, active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ULink, {
              "as-child": "",
              to: item.to,
              class: "px-2 rounded-md transition",
              "aria-label": "Go to {{ item.label }}"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="inline-flex items-center"${_scopeId2}>`);
                  if (item.icon) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: item.icon,
                      class: ["size-5", item.class]
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.label)}</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "inline-flex items-center" }, [
                      item.icon ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: item.icon,
                        class: ["size-5", item.class]
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString(item.label), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ULink, {
                "as-child": "",
                to: item.to,
                class: "px-2 rounded-md transition",
                "aria-label": "Go to {{ item.label }}"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "inline-flex items-center" }, [
                    item.icon ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: item.icon,
                      class: ["size-5", item.class]
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(item.label), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      _push(ssrRenderComponent(_component_USlideover, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : open = $event,
        side: "left",
        title: "\u0E40\u0E21\u0E19\u0E39",
        "close-icon": "i-lucide-arrow-left",
        class: "w-96"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-items-end h-full p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              highlight: "true",
              "highlight-color": "secondary",
              orientation: "vertical",
              items: unref(items),
              class: "w-full text-xs"
            }, {
              item: withCtx(({ item, active }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ULink, {
                    to: item.to,
                    onClick: ($event) => onMenuSelect(item),
                    class: "px-2 py-1 rounded-md transition",
                    "aria-label": "Go to {{ item.label }}"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="inline-flex items-center justify-baseline"${_scopeId3}>`);
                        if (item.icon) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span class="ms-2"${_scopeId3}>${ssrInterpolate(item.label)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: item.icon,
                              class: ["size-5 text-blue-600", item.class]
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                            createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ULink, {
                      to: item.to,
                      onClick: ($event) => onMenuSelect(item),
                      class: "px-2 py-1 rounded-md transition",
                      "aria-label": "Go to {{ item.label }}"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-items-end h-full p-4" }, [
                createVNode(_component_UNavigationMenu, {
                  highlight: "true",
                  "highlight-color": "secondary",
                  orientation: "vertical",
                  items: unref(items),
                  class: "w-full text-xs"
                }, {
                  item: withCtx(({ item, active }) => [
                    createVNode(_component_ULink, {
                      to: item.to,
                      onClick: ($event) => onMenuSelect(item),
                      class: "px-2 py-1 rounded-md transition",
                      "aria-label": "Go to {{ item.label }}"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "inline-flex items-center justify-baseline" }, [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: ["size-5 text-blue-600", item.class]
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                          createVNode("span", { class: "ms-2" }, toDisplayString(item.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to", "onClick"])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-gray-50 py-2 md:py-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B_TZtcFE.mjs.map
