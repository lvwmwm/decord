// Module ID: 11971
// Function ID: 11972
// Name: GuildPowerupsSectionHeader
// Dependencies: [17, 21, 4344, 712, 8236, 4340, 2]
// Exports: default

// Module 11971 (GuildPowerupsSectionHeader)
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
  let obj = require(8236) /* apexExperiment */;
  obj = { style: callback2().headerContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
  const items = [callback(require(4340) /* Text */.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), ];
  let str = "text-md/normal";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = callback(require(4340) /* Text */.Text, { variant: str, children: description });
  obj[1] = items;
  return closure_4(View, obj);
};
