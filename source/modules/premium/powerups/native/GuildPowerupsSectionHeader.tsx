// Module ID: 11585
// Function ID: 90061
// Name: GuildPowerupsSectionHeader
// Dependencies: [27, 33, 4130, 689, 4126, 2]
// Exports: default

// Module 11585 (GuildPowerupsSectionHeader)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.headerContainer = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  let obj = { style: callback3().headerContainer };
  obj = { variant: "heading-lg/semibold", accessibilityRole: "header", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj), callback(require(4126) /* Text */.Text, { variant: "text-md/normal", children: description })];
  obj.children = items;
  return callback2(View, obj);
};
