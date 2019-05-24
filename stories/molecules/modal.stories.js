import { storiesOf } from "@storybook/html";

storiesOf("Components|Molecules/Modal", module)
  .add("Default", () => `
    <div class="m-modal is-open">
      <div class="m-modal__box">
        <button type="button" class="m-modal__close a-button a-button--transparent a-button--icon">
          <i class="a-button__icon q-icon-fill">cross</i>
        </button>

        <div class="u-text-center">
          <h3>My modal title</h3>
          <p class="u-text-grey">
            Lorem ipsum dolor sit amet.
          </p>
          <div>
            <button type="button" class="a-button a-button--fluid u-mb-4">Action 1</button>
            <button type="button" class="a-button a-button--blue a-button--fluid">Action 2</button>
          </div>
        </div>
      </div>
      <div class="m-modal__overlay"></div>
    </div>
  `);
