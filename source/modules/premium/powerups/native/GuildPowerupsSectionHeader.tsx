// Module ID: 11580
// Function ID: 90027
// Name: GuildPowerupsSectionHeader
// Dependencies: [27, 33, 4131, 689, 4127, 2]
// Exports: default

// Module 11580 (GuildPowerupsSectionHeader)
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
  const items = [callback(require(4127) /* Text */.Text, obj), callback(require(4127) /* Text */.Text, { variant: "text-md/normal", children: description })];
  obj.children = items;
  return callback2(View, obj);
};
