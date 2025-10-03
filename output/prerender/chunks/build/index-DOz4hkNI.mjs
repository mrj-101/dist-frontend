import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSlots, computed, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue/server-renderer/index.mjs';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/reka-ui/dist/index.js';
import { reactivePick } from 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@vueuse/core/index.mjs';
import { b as useAppConfig, t as tv, c as _sfc_main$e, g as get } from './server.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unified/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-parse/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-rehype/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/defu/dist/defu.mjs';
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
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/icon/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/icon/node_modules/ohash/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/consola/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ipx/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@nuxt/image/node_modules/pathe/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/tailwind-variants/dist/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/ohash/dist/utils.mjs';
import '../_/renderer.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unhead/dist/server.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/devalue/index.js';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/surachai/Dev/rvc2026/frontend/node_modules/nuxt/node_modules/pathe/dist/index.mjs';

const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: String, required: false },
    labelKey: { type: String, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "type", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.accordion) || {} })({
        disabled: props.disabled
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              var _a2, _b;
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c2, _d2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a5, _b4, _c3, _d3;
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$e, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  _push5(ssrRenderComponent(_sfc_main$e, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_c3 = props.ui) == null ? void 0 : _c3.label, (_d3 = item.ui) == null ? void 0 : _d3.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$e, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_c2 = props.ui) == null ? void 0 : _c2.trigger, (_d2 = item.ui) == null ? void 0 : _d2.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$e, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open
                            }, () => {
                              var _a4, _b3;
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ])
                                  ], 2)
                                ];
                              })
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
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_e = props.ui) == null ? void 0 : _e.header, (_f = item.ui) == null ? void 0 : _f.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$e, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_g = props.ui) == null ? void 0 : _g.content, (_h = item.ui) == null ? void 0 : _h.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                var _a2, _b;
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
                }, {
                  default: withCtx(({ open }) => {
                    var _a3, _b2, _c, _d;
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$e, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Nuxt&Vue",
        icon: "i-lucide-swatch-book",
        content: `
      <ul>
        <li><a href="https://vuejs.org" target="_blank" class="text-blue-600 cursor-pointer ml-7">Vue</a></li>
        <li><a href="https://ui.nuxt.com" target="_blank" class="text-blue-600 cursor-pointer ml-7">UINuxt</a></li>
        <li><a href="https://nuxt.com" target="_blank" class="text-blue-600 cursor-pointer ml-7">Nuxt</a></li>
        <li><a href="https://github.com/michalsnik/aos" target="_blank" class="text-blue-600 cursor-pointer ml-7">aos</a></li>
        <li><a href="https://icones.js.org/collection/iconoir?s=menu" target="_blank" class="text-blue-600 cursor-pointer ml-7">Icon</a></li>
      </ul>
    `
      },
      {
        label: "Section 2",
        icon: "i-lucide-swatch-book",
        content: `<a href="https://rvc.ac.th" target="_blank" class="text-blue-600 hover:underline">Ratchavinit School</a>`
      },
      {
        label: "Section 3",
        icon: "i-lucide-swatch-book",
        content: `<a href="https://rvc.ac.th" target="_blank" class="text-blue-600 hover:underline">Ratchavinit School</a>`
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAccordion = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center mx-auto gap-4 p-4 h-1/2 w-1/2" }, _attrs))}><h1>Useful Link</h1>`);
      _push(ssrRenderComponent(_component_UAccordion, {
        "trailing-icon": "i-lucide-arrow-down",
        items: unref(items),
        class: "w-full max-w-md"
      }, {
        body: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<p class="text-sm pb-3.5 text-secondary"${_scopeId}>${(_a = item.content) != null ? _a : ""}</p>`);
          } else {
            return [
              createVNode("p", {
                innerHTML: item.content,
                class: "text-sm pb-3.5 text-secondary"
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/private/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DOz4hkNI.mjs.map
