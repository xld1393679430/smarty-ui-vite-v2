(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Test = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const Button = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", null, "hello");
    }
  });
  const TsxButton = vue.defineComponent({
    name: "tsxButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("button--tsx")]);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
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
  exports2.Button = Button;
  exports2.SFCButton = SFCButton;
  exports2.TsxButton = TsxButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
