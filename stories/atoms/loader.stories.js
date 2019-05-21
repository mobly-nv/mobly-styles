import { storiesOf } from "@storybook/html";

storiesOf("Components|Atoms/Loader", module)
  .add("Default", () => `
    <div class="a-loader">
      <div class="a-loader__indicator"></div>
    </div>
  `);
