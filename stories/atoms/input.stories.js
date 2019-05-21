import { storiesOf } from "@storybook/html";

import EuImage from "../../src/images/eu.png";

storiesOf(`Atoms|Input`, module)
  .add("Default", () => `
    <div class="a-input">
      <label for="text-input" class="a-input__label">Default input</label>
      <div class="a-input__field-container">
        <input id="text-input" class="a-input__field" type="text" />
      </div>
    </div>
  `)
  .add("Large", () => `
    <div class="a-input a-input--lg">
      <label for="text-input" class="a-input__label">Large input</label>
      <div class="a-input__field-container">
        <input id="text-input" class="a-input__field" type="text" />
      </div>
    </div>
  `)
  .add("Addon", () => `
    <div class="a-input a-input--addon-left">
      <label for="text-input" class="a-input__label">Input with addon</label>
      <div class="a-input__field-container">
        <div class="a-input__addon">
          <img src="${EuImage}" alt="eu" />
        </div>
        <input id="text-input" class="a-input__field" type="text" />
      </div>
    </div>
  `)
  .add("Icon", () => `
    <div class="a-input">
      <label for="text-input" class="a-input__label">Input with icon</label>
      <div class="a-input__field-container">
        <input id="text-input" class="a-input__field" type="text" />
        <div class="a-input__icon-container">
          <i class="a-input__icon q-icon-fill">password-show</i>
        </div>
      </div>
    </div>
  `);
