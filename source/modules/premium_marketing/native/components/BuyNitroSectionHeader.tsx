// Module ID: 7524
// Function ID: 59994
// Name: renderTitleWithNitroLink
// Dependencies: [33, 4126, 2]
// Exports: default

// Module 7524 (renderTitleWithNitroLink)
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
function renderTitleWithNitroLink(title) {
  title = title.title;
  const index = title.indexOf(Nitro);
  let tmp2 = title;
  if (-1 !== index) {
    let obj = {};
    const items = [title.slice(0, index), , ];
    obj = { variant: "text-sm/semibold", color: "text-link", accessibilityRole: "link", onPress: title.onPress, children: Nitro };
    items[1] = callback(require(4126) /* Text */.Text, obj);
    items[2] = title.slice(index + 5);
    obj.children = items;
    tmp2 = callback2(closure_3, obj);
  }
  return tmp2;
}
({ jsx: closure_2, Fragment: closure_3, jsxs: closure_4 } = jsxProd);
const Nitro = "Nitro";
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroSectionHeader.tsx");

export default function BuyNitroSectionHeader(arg0) {
  let onPress;
  let style;
  let title;
  let titleRequiresNitroHack;
  ({ title, titleRequiresNitroHack } = arg0);
  ({ style, onPress } = arg0);
  if (titleRequiresNitroHack === undefined) {
    titleRequiresNitroHack = false;
  }
  let obj = { variant: "text-sm/semibold", color: "text-default", accessibilityRole: "header", style };
  let tmp2 = title;
  if (titleRequiresNitroHack) {
    obj = { title, onPress };
    tmp2 = renderTitleWithNitroLink(obj);
  }
  obj.children = tmp2;
  return closure_2(require(4126) /* Text */.Text, obj);
};
