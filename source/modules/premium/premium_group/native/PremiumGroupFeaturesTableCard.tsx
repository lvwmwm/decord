// Module ID: 12468
// Function ID: 96690
// Name: BetaPill
// Dependencies: [27, 6671, 33, 4130, 689, 4126, 1212, 12469, 1273, 4554, 3974, 8062, 2]
// Exports: default

// Module 12468 (BetaPill)
import { View } from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
class BetaPill {
  constructor() {
    tmp = c7();
    obj = { style: tmp.betaPill };
    obj = { variant: "text-xs/bold", style: tmp.betaText };
    intl = require("getSystemLocale").intl;
    obj.children = intl.string(require("getSystemLocale").t.oW0eUd);
    obj.children = jsx(require("Text").Text, obj);
    return jsx(View, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm - 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
obj.premiumGroupCard = obj;
obj.headerContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj.betaPill = obj1;
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj.betaText = obj2;
obj.title = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, marginBottom: 16 };
const obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, marginBottom: 16 };
obj.description = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default function PremiumGroupFeaturesTableCard(arg0) {
  let bodyString;
  let premiumGroupRole;
  let style;
  let subheaderString;
  ({ style, premiumGroupRole } = arg0);
  const tmp = callback3();
  const tmp2 = importDefault(12469)(premiumGroupRole, false);
  if (null == tmp2) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp2);
    let obj = { borderWidth: 2, direction: require(1273) /* Button */.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: importDefault(689).radii.sm, style };
    obj = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
    let obj2 = require(3974) /* hexToRgb */;
    const items = [obj2.hexWithOpacity("#8547C6", 0.15), , ];
    const tmp9 = importDefault(4554);
    items[1] = require(3974) /* hexToRgb */.hexWithOpacity("#B845C1", 0.15);
    const obj4 = require(3974) /* hexToRgb */;
    items[2] = require(3974) /* hexToRgb */.hexWithOpacity("#AB5D8A", 0.15);
    obj.colors = items;
    obj.locations = [0, 0.4996, 0.9593];
    obj.style = tmp.premiumGroupCard;
    obj = { style: tmp.headerContainer };
    const items1 = [callback(importDefault(8062), { width: 181, height: 16 }), callback(BetaPill, {})];
    obj.children = items1;
    const items2 = [callback2(View, obj), , ];
    const obj1 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = callback(require(4126) /* Text */.Text, obj1);
    obj2 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = callback(require(4126) /* Text */.Text, obj2);
    obj.children = items2;
    obj.children = callback2(tmp9, obj);
    return callback(require(1273) /* Button */.GradientBorder, obj);
  }
};
export { BetaPill };
