// Module ID: 11639
// Function ID: 11640
// Name: GuildPowerupsSectionHeader
// Dependencies: [17, 21, 4189, 712, 4185, 2]
// Exports: default

// Module 11639 (GuildPowerupsSectionHeader)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { headerContainer: null };
obj = { padding: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  const obj = { style: callback3().headerContainer, children: null };
  const items = [callback(require(4185) /* Text */.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), callback(require(4185) /* Text */.Text, { variant: "text-md/normal", children: description })];
  obj[1] = items;
  return callback2(View, obj);
};
