import { storiesOf } from "@storybook/html";

function button(cls = "", attr = null, inner = "") {
  const btn = document.createElement("button");
  btn.classList.add("a-button");
  btn.innerText = "Click me";

  if (cls) {
    btn.classList.add(cls);
  }
  if (attr) {
    btn.setAttribute(attr.name, attr.value);
  }
  if (inner) {
    btn.innerHTML = inner;
  }

  return btn;
};

storiesOf("Components|Atoms/Button", module)
  .add("Default", () => button())
  .add("Outline", () => button("a-button--outline"))
  .add("Transparent", () => button("a-button--transparent"))
  .add("Fluid", () => button("a-button--fluid"))
  .add("Disabled", () => button("", { name: "disabled", value: true }))
  .add("Blue", () => button("a-button--blue"))
  .add("Icon", () => button("a-button--icon", null, "<i class='a-button__icon q-icon-fill icon-people'>pencil</i>"));
