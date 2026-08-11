// Module ID: 12842
// Function ID: 12843
// Name: textLogoTier2
// Dependencies: [19, 17, 6898, 1924, 21, 4303, 712, 5158, 1367, 4725, 691, 3966, 12843, 12844, 7392, 7330, 7331, 7387, 5376, 2]
// Exports: default

// Module 12842 (textLogoTier2)
import "set";
import get_ActivityIndicator from "registerAsset";
import { getPremiumGradientColor } from "items";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: null, bodyLegacy: null };
createCacheKey = { padding: 16, borderBottomRightRadius: require("Themes").radii.xs, borderBottomLeftRadius: require("Themes").radii.xs };
createCacheKey[8] = createCacheKey;
createCacheKey[9] = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_100 };
const result = require("items").fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default function _default(children) {
  let premiumType;
  let style;
  ({ premiumType, style } = children);
  const tmp = createCacheKey();
  const tmp4 = importDefault(1367)("PremiumTierCard");
  let obj = { style: tmp.header, start: null, end: null, colors: null, children: null };
  obj[1] = require(691) /* keys */.HorizontalGradient.START;
  obj[2] = require(691) /* keys */.HorizontalGradient.END;
  obj[3] = getPremiumGradientColor(premiumType);
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, source: null };
  let obj2 = require(3966) /* getPremiumPlanItem */;
  obj[1] = obj2.getPremiumTypeDisplayName(premiumType);
  if (PremiumTypes.TIER_0 === premiumType) {
    let textLogoTier2 = tmp.textLogoTier0;
  } else if (tmp11.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (tmp11.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  obj[3] = textLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    let tmp2Result = tmp2(12843);
  } else if (tmp11.TIER_1 === premiumType) {
    tmp2Result = tmp2(12844);
  } else if (tmp11.TIER_2 === premiumType) {
    tmp2Result = tmp2(7392);
  }
  obj[4] = tmp2Result;
  obj[4] = closure_7(closure_4, obj);
  const items = [closure_7(importDefault(4725), obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    let wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (tmp11.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (tmp11.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  obj = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp2Result = tmp2(7330);
  } else if (tmp11.TIER_1 === premiumType) {
    tmp2Result = tmp2(7331);
  } else if (tmp11.TIER_2 === premiumType) {
    tmp2Result = tmp2(7387);
  }
  obj[3] = tmp2Result;
  items[1] = closure_7(closure_4, obj);
  const items2 = [tmp.body, ];
  let bodyLegacy = !tmp4;
  if (!tmp4) {
    bodyLegacy = tmp.bodyLegacy;
  }
  const obj1 = { children: null };
  items2[1] = bodyLegacy;
  items[2] = closure_7(closure_3, { style: items2, children: children.children });
  obj1[0] = items;
  const tmp5Result = closure_9(closure_8, obj1);
  if (tmp4) {
    obj2 = { variant: "surface-high", style: null, children: null };
    obj2[1] = style;
    obj2[2] = tmp5Result;
    let tmp7Result = tmp7(require(5376) /* PressableCard */.Card, obj2);
  } else {
    const obj3 = { style: null, children: null };
    obj3[0] = style;
    obj3[1] = tmp5Result;
    tmp7Result = tmp7(tmp14, obj3);
  }
  return tmp7Result;
};
