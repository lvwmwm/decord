// Module ID: 11549
// Function ID: 89906
// Name: GuildPowerupsBoostGem
// Dependencies: [27, 33, 4131, 689, 11550, 2]
// Exports: default

// Module 11549 (GuildPowerupsBoostGem)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { width: 100, height: 100, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj.boostGemContainer = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  let gemHeight;
  let gemWidth;
  let style;
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = {};
  const items = [callback().boostGemContainer, style];
  obj.style = items;
  obj.children = jsx(importDefault(11550), { width: gemWidth, height: gemHeight });
  return <View />;
};
