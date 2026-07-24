// Module ID: 12550
// Function ID: 97161
// Name: textLogoTier2
// Dependencies: [31, 27, 6671, 1851, 33, 4130, 689, 4973, 1324, 4554, 668, 3776, 12551, 12552, 7172, 7114, 7115, 7167, 5167, 2]
// Exports: default

// Module 12550 (textLogoTier2)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { getPremiumGradientColor } from "items";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 } };
_createForOfIteratorHelperLoose = { padding: 16, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bodyLegacy = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
const result = require("items").fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(children) {
  let premiumType;
  let style;
  ({ premiumType, style } = children);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(1324)("PremiumTierCard");
  let obj = {};
  obj = { style: tmp.header, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType) };
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header" };
  let obj3 = require(3776) /* _createForOfIteratorHelperLoose */;
  obj.accessibilityLabel = obj3.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj.style = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp12 = importDefault(12551);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp12 = importDefault(12552);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp12 = importDefault(7172);
  }
  obj.source = tmp12;
  obj.children = closure_7(closure_4, obj);
  const items = [closure_7(importDefault(4554), obj), , ];
  const obj1 = { accessible: false, importantForAccessibility: "no" };
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  items1[1] = wumpusLogoTier2;
  obj1.style = items1;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp23 = importDefault(7114);
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp23 = importDefault(7115);
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp23 = importDefault(7167);
  }
  obj1.source = tmp23;
  items[1] = closure_7(closure_4, obj1);
  const obj2 = {};
  const items2 = [tmp.body, ];
  let bodyLegacy = !tmp2;
  if (bodyLegacy) {
    bodyLegacy = tmp.bodyLegacy;
  }
  items2[1] = bodyLegacy;
  obj2.style = items2;
  obj2.children = children.children;
  items[2] = closure_7(closure_3, obj2);
  obj.children = items;
  const tmp3Result = closure_9(closure_8, obj);
  if (tmp2) {
    obj3 = { variant: "surface-high", style, children: tmp3Result };
    let tmp32Result = tmp32(require(5167) /* getCardBackgroundToken */.Card, obj3);
  } else {
    const obj4 = { style, children: tmp3Result };
    tmp32Result = tmp32(closure_3, obj4);
  }
  return tmp32Result;
};
