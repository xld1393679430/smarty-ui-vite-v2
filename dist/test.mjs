import { defineComponent, h, createVNode, createTextVNode, openBlock, createElementBlock } from "vue";
const Button = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "hello");
  }
});
const TsxButton = defineComponent({
  name: "tsxButton",
  render() {
    return createVNode("button", null, [createTextVNode("button--tsx")]);
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
  return openBlock(), createElementBlock("button", null, "button -- vue");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(TsxButton.name, TsxButton);
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  Button,
  SFCButton,
  TsxButton,
  entry as default
};
