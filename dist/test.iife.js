var Test = function(exports, vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.innerHTML = '*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-ic-baseline-edit{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.cursor-pointer,[cursor-pointer=\"\"]{cursor:pointer;}.rounded-lg,[rounded-lg=\"\"]{border-radius:0.5rem;}.border-none,[border-none=\"\"]{border-style:none;}.bg-blue-500{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-red-500{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-500{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgba(29,78,216,var(--un-bg-opacity));}.hover\:bg-red-700:hover{--un-bg-opacity:1;background-color:rgba(185,28,28,var(--un-bg-opacity));}.hover\:bg-yellow-700:hover{--un-bg-opacity:1;background-color:rgba(161,98,7,var(--un-bg-opacity));}.p-2,[p-2=\"\"]{padding:0.5rem;}.px-4,[px-4=\"\"]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=\"\"]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=\"\"]{font-weight:600;}.text-white,[text-white=\"\"]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.shadow-md,[shadow-md=\"\"]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}';
  document.head.appendChild(__vite_style__);
  const Button = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", null, "hello");
    }
  });
  const __uno = "";
  const props = {
    color: {
      type: String,
      default: "blue"
    },
    icon: String
  };
  const TsxButton = vue.defineComponent({
    name: "tsxButton",
    props,
    setup(props2, {
      slots
    }) {
      console.log(props2);
      return () => vue.createVNode("button", {
        "class": `
            py-2
            px-4
            shadow-md
            text-white
            bg-${props2.color}-500
            border-none
            rounded-lg
            font-semibold
            cursor-pointer
            hover:bg-${props2.color}-700
        `
      }, [props2.icon ? vue.createVNode("i", {
        "class": `i-ic-baseline-${props2.icon} p-2`
      }, null) : null, (slots == null ? void 0 : slots.default) ? slots == null ? void 0 : slots.default() : "\u9ED8\u8BA4"]);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "button -- vue");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const entry = {
    install(app) {
      app.component(Button.name, Button);
      app.component(TsxButton.name, TsxButton);
      app.component(SFCButton.name, SFCButton);
    }
  };
  exports.Button = Button;
  exports.SFCButton = SFCButton;
  exports.TsxButton = TsxButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
