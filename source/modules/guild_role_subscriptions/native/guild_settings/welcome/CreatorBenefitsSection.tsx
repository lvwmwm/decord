// Module ID: 16393
// Function ID: 127863
// Name: getGreenTextStyle
// Dependencies: [31, 27, 14094, 33, 4130, 689, 3976, 4066, 4126, 1212, 5085, 16394, 16395, 16396, 16397, 16398, 16399, 16400, 16401, 2]
// Exports: default

// Module 16393 (getGreenTextStyle)
import "result";
import { View } from "get ActivityIndicator";
import { CREATOR_REVENUE_SHARE_PERCENTAGE as closure_4 } from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function getGreenTextStyle(greenTextDarkMode, arg1) {
  return require(3976) /* AccessibilityAnnouncer */.isThemeDark(arg1) ? greenTextDarkMode.greenTextDarkMode : greenTextDarkMode.greenTextLightMode;
}
function EarningPreview() {
  const tmp = importDefault(4066)();
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp2.earningMetricsShadowContainer, ];
  let obj1 = require(3976) /* AccessibilityAnnouncer */;
  items[1] = obj1.isThemeDark(tmp) && tmp2.earningMetricsShadowContainerDarkMode;
  obj.style = items;
  obj = {};
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp2);
  let obj3 = require(3976) /* AccessibilityAnnouncer */;
  items1[2] = obj3.isThemeDark(tmp) ? tmp2.earningMetricsDarkMode : tmp2.earningMetricsLightMode;
  obj.style = items1;
  obj = {};
  obj1 = { variant: "text-sm/normal", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.TXPK7B);
  const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { style: getGreenTextStyle(tmp2, tmp), variant: "heading-lg/extrabold" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.LdjJG5);
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  const items3 = [callback2(View, obj), ];
  obj3 = { style: tmp2.earningMetricsAvatar };
  const tmp3 = callback;
  const tmp4 = View;
  const tmp5 = obj1.isThemeDark(tmp) && tmp2.earningMetricsShadowContainerDarkMode;
  const tmp6 = callback2;
  const tmp7 = View;
  obj3.source = importDefault(16394);
  items3[1] = callback(importDefault(5085), obj3);
  obj.children = items3;
  obj.children = tmp6(tmp7, obj);
  return tmp3(tmp4, obj);
}
function ConsistentEarningBenefit() {
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = { style: tmp2.benefitCard };
  obj = { style: tmp2.benefitCardTitle, variant: "heading-md/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["9CdmS8"]);
  const items = [callback(require(4126) /* Text */.Text, obj), callback(EarningPreview, {}), ];
  obj = { style: items1 };
  items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp2);
  const obj1 = {};
  const tmp = importDefault(4066)();
  const tmp3 = closure_6;
  const tmp4 = View;
  const tmp5 = closure_6;
  const tmp6 = View;
  const tmp7 = callback;
  const tmp8 = BenefitAvatar;
  if (obj5.isThemeDark(tmp)) {
    let tmp9Result = tmp9(16395);
  } else {
    tmp9Result = tmp9(16396);
  }
  obj1.avatarSource = tmp9Result;
  const items2 = [tmp7(tmp8, obj1), , ];
  obj5 = require(3976) /* AccessibilityAnnouncer */;
  items2[1] = callback(BenefitAvatar, { avatarSource: importDefault(16397) });
  const obj2 = { avatarSource: importDefault(16397) };
  items2[2] = callback(BenefitAvatar, { avatarSource: importDefault(16398) });
  obj.children = items2;
  items[2] = tmp5(tmp6, obj);
  obj.children = items;
  return tmp3(tmp4, obj);
}
function FollowerAwardBenefit() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.benefitCard };
  obj = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.qsKRUQ);
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { style: tmp.socialIllo, source: importDefault(16399) };
  items[1] = callback(importDefault(5085), obj);
  const obj1 = { style: tmp.lanyardIllo };
  const tmp2 = importDefault(5085);
  obj1.source = importDefault(16400);
  items[2] = callback(importDefault(5085), obj1);
  obj.children = items;
  return callback2(View, obj);
}
function RevenueShareBenefit() {
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp2);
  obj = { style: null, variant: "heading-xxl/extrabold", color: "status-positive" };
  const items1 = [tmp2.revenueShare, getGreenTextStyle(tmp2, importDefault(4066)())];
  obj.style = items1;
  obj.children = `${closure_4}%`;
  const items2 = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { style: tmp2.revenueShareDescription, variant: "heading-md/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.AewsXD);
  items2[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp2.revenueShareIllo };
  const tmp = importDefault(4066)();
  obj1.source = importDefault(16401);
  items2[2] = callback(importDefault(5085), obj1);
  obj.children = items2;
  return callback2(View, obj);
}
function BenefitAvatar(avatarSource) {
  const tmp = _createForOfIteratorHelperLoose();
  obj = { style: tmp.benefitAvatarContainer, children: callback(importDefault(5085), obj) };
  obj = { source: avatarSource.avatarSource, style: tmp.benefitAvatar };
  return callback(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { horizontalContainer: { flex: 1, flexDirection: "row" } };
_createForOfIteratorHelperLoose = { padding: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.benefitAvatarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.benefitCard = { marginVertical: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.benefitAvatar = { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" };
_createForOfIteratorHelperLoose.benefitAvatars = { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" };
_createForOfIteratorHelperLoose.benefitCardTitle = { marginStart: 24, marginEnd: 35, marginVertical: 24 };
let obj2 = { shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
_createForOfIteratorHelperLoose.earningMetricsShadowContainer = obj2;
_createForOfIteratorHelperLoose.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
let obj3 = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.earningMetrics = obj3;
_createForOfIteratorHelperLoose.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
let obj1 = { marginVertical: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.earningMetricsLightMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.greenTextDarkMode = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_230 };
let obj5 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_230 };
_createForOfIteratorHelperLoose.greenTextLightMode = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400 };
_createForOfIteratorHelperLoose.earningMetricsAvatar = { width: 54, height: 54, borderRadius: 27, overflow: "hidden" };
_createForOfIteratorHelperLoose.socialIllo = { marginTop: 50, marginStart: 16 };
_createForOfIteratorHelperLoose.lanyardIllo = { position: "absolute", bottom: 25, end: 0 };
_createForOfIteratorHelperLoose.revenueShare = { fontSize: 50, lineHeight: 52 };
_createForOfIteratorHelperLoose.revenueShareContainer = { padding: 24 };
_createForOfIteratorHelperLoose.revenueShareIllo = { marginTop: 15, alignSelf: "flex-end" };
_createForOfIteratorHelperLoose.revenueShareDescription = { marginEnd: 120 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_400 };
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  const obj = {};
  const items = [callback(ConsistentEarningBenefit, {}), callback(FollowerAwardBenefit, {}), callback(RevenueShareBenefit, {})];
  obj.children = items;
  return callback2(View, obj);
};
