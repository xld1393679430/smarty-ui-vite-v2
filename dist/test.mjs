import { defineComponent, h, createVNode, openBlock, createElementBlock } from "vue";
const Button = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "hello");
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
const TsxButton = defineComponent({
  name: "tsxButton",
  props,
  setup(props2, {
    slots
  }) {
    console.log(props2);
    return () => createVNode("button", {
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
    }, [props2.icon ? createVNode("i", {
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
