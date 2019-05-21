import { storiesOf } from "@storybook/html";

storiesOf(`Components|Atoms/Link`, module)
  .add("Default", () => `
    <a href="#" class="a-link">This is a link</a>
  `)
  .add("Underline", () => `
    <a href="#" class="a-link a-link--underline">This is a link</a>
  `)
  .add("Icon left", () => `
    <a href="#" class="a-link a-link--icon-left">
      <i class="a-link__icon q-icon-fill">chevron-left</i>
      <span>Go back</span>
    </a>
  `)
  .add("Icon right", () => `
    <a href="#" class="a-link a-link--icon-right">
      <span>Read more</span>
      <i class="a-link__icon q-icon-fill">chevron-right</i>
    </a>
  `);
