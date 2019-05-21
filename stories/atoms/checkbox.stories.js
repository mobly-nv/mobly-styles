import { storiesOf } from "@storybook/html";

storiesOf(`Atoms|Checkbox`, module)
  .add("Default", () => `
    <label for="check-input" class="a-checkbox">
      <input id="check-input" type="checkbox" class="a-checkbox__field" />
      <span class="a-checkbox__icon-container">
        <i class="a-checkbox__icon q-icon-fill">check-small</i>
      </span>
      <span class="a-checkbox__label">
        Ik ga akkoord met de <a class="a-link a-link--underline" href="#">algemene voorwaarden</a> en de
        <a class="a-link a-link--underline" href="#">privacyverklaring</a> en de voorwaarden bij het opvragen
        van gegevens op basis van mijn nummerplaat of chassisnummer.
      </span>
    </label>
  `);
