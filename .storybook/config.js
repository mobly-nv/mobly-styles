import { configure } from "@storybook/html";

import "../dist/css/main.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
