// Module ID: 16268
// Function ID: 125647
// Name: getGreenTextStyle
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16268 (getGreenTextStyle)
import "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

function getGreenTextStyle(greenTextDarkMode, arg1) {
  return arg1(dependencyMap[6]).isThemeDark(arg1) ? greenTextDarkMode.greenTextDarkMode : greenTextDarkMode.greenTextLightMode;
}
function EarningPreview() {
  const tmp = importDefault(dependencyMap[7])();
  const tmp2 = result();
  let obj = {};
  const items = [tmp2.earningMetricsShadowContainer, ];
  let obj1 = arg1(dependencyMap[6]);
  items[1] = obj1.isThemeDark(tmp) && tmp2.earningMetricsShadowContainerDarkMode;
  obj.style = items;
  obj = {};
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp2);
  let obj3 = arg1(dependencyMap[6]);
  items1[2] = obj3.isThemeDark(tmp) ? tmp2.earningMetricsDarkMode : tmp2.earningMetricsLightMode;
  obj.style = items1;
  obj = {};
  obj1 = { hasMaxConnections: false, isBoostOnlySubscription: false };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.TXPK7B);
  const items2 = [callback(arg1(dependencyMap[8]).Text, obj1), ];
  const obj2 = { style: getGreenTextStyle(tmp2, tmp), variant: "heading-lg/extrabold" };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[9]).t.LdjJG5);
  items2[1] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj.children = items2;
  const items3 = [callback2(View, obj), ];
  obj3 = { style: tmp2.earningMetricsAvatar };
  const tmp3 = callback;
  const tmp4 = View;
  const tmp5 = obj1.isThemeDark(tmp) && tmp2.earningMetricsShadowContainerDarkMode;
  const tmp6 = callback2;
  const tmp7 = View;
  obj3.source = importDefault(dependencyMap[11]);
  items3[1] = callback(importDefault(dependencyMap[10]), obj3);
  obj.children = items3;
  obj.children = tmp6(tmp7, obj);
  return tmp3(tmp4, obj);
}
function ConsistentEarningBenefit() {
  const tmp2 = result();
  let obj = { style: tmp2.benefitCard };
  obj = { style: tmp2.benefitCardTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.9CdmS8);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), callback(EarningPreview, {}), ];
  obj = { style: items1 };
  const items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp2);
  const obj1 = {};
  const tmp = importDefault(dependencyMap[7])();
  const tmp3 = closure_6;
  const tmp4 = View;
  const tmp5 = closure_6;
  const tmp6 = View;
  const tmp7 = callback;
  const tmp8 = BenefitAvatar;
  if (obj5.isThemeDark(tmp)) {
    let tmp9Result = tmp9(tmp10[12]);
  } else {
    tmp9Result = tmp9(tmp10[13]);
  }
  obj1.avatarSource = tmp9Result;
  const items2 = [tmp7(tmp8, obj1), , ];
  const obj5 = arg1(dependencyMap[6]);
  items2[1] = callback(BenefitAvatar, { avatarSource: importDefault(dependencyMap[14]) });
  const obj2 = { avatarSource: importDefault(dependencyMap[14]) };
  items2[2] = callback(BenefitAvatar, { avatarSource: importDefault(dependencyMap[15]) });
  obj.children = items2;
  items[2] = tmp5(tmp6, obj);
  obj.children = items;
  return tmp3(tmp4, obj);
}
function FollowerAwardBenefit() {
  const tmp = result();
  let obj = { style: tmp.benefitCard };
  obj = { style: tmp.benefitCardTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.qsKRUQ);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), , ];
  obj = { style: tmp.socialIllo, source: importDefault(dependencyMap[16]) };
  items[1] = callback(importDefault(dependencyMap[10]), obj);
  const obj1 = { style: tmp.lanyardIllo };
  const tmp2 = importDefault(dependencyMap[10]);
  obj1.source = importDefault(dependencyMap[17]);
  items[2] = callback(importDefault(dependencyMap[10]), obj1);
  obj.children = items;
  return callback2(View, obj);
}
function RevenueShareBenefit() {
  const tmp2 = result();
  let obj = { style: items };
  const items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp2);
  obj = { delete: null, dispatch: "676cd159b1913e0ab2a481c3bd4a0b5c", raw: "role_subscription_earning_illo" };
  const items1 = [tmp2.revenueShare, getGreenTextStyle(tmp2, importDefault(dependencyMap[7])())];
  obj.style = items1;
  obj.children = `${closure_4}%`;
  const items2 = [callback(arg1(dependencyMap[8]).Text, obj), , ];
  obj = { style: tmp2.revenueShareDescription };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.AewsXD);
  items2[1] = callback(arg1(dependencyMap[8]).Text, obj);
  const obj1 = { style: tmp2.revenueShareIllo };
  const tmp = importDefault(dependencyMap[7])();
  obj1.source = importDefault(dependencyMap[18]);
  items2[2] = callback(importDefault(dependencyMap[10]), obj1);
  obj.children = items2;
  return callback2(View, obj);
}
function BenefitAvatar(avatarSource) {
  const tmp = result();
  let obj = { style: tmp.benefitAvatarContainer, children: callback(importDefault(dependencyMap[10]), obj) };
  obj = { source: avatarSource.avatarSource, style: tmp.benefitAvatar };
  return callback(View, obj);
}
let closure_4 = arg1(dependencyMap[2]).CREATOR_REVENUE_SHARE_PERCENTAGE;
({ jsx: closure_5, jsxs: closure_6 } = result);
result = { horizontalContainer: {} };
result = { padding: 20, backgroundColor: require("result").colors.BACKGROUND_BASE_LOW, borderRadius: require("result").radii.sm, overflow: "hidden" };
result.benefitAvatarContainer = result;
result.benefitCard = { marginVertical: 6, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("result").radii.sm };
result.benefitAvatar = { 9223372036854775807: true, 9223372036854775807: "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", 9223372036854775807: 40, 9223372036854775807: 40.5, 9223372036854775807: null };
result.benefitAvatars = { <string:1560008803>: null, <string:930247715>: "e3602af71cc76e8c04bf027b54c9843f", <string:3991311273>: "role_subscription_benefit_nelly_avatar" };
result.benefitCardTitle = { backdropOpacity: "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", startExpanded: 138, enabled: 92.5 };
const obj1 = { marginVertical: 6, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("result").radii.sm };
result.earningMetricsShadowContainer = { shadowColor: require("result").colors.BLACK, shadowOffset: { "Null": "r", "Null": "gift_info" } };
result.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
const obj2 = { shadowColor: require("result").colors.BLACK, shadowOffset: { "Null": "r", "Null": "gift_info" } };
result.earningMetrics = { borderRadius: require("result").radii.sm };
result.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
const obj3 = { borderRadius: require("result").radii.sm };
result.earningMetricsLightMode = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOW };
result.greenTextDarkMode = { color: require("result").unsafe_rawColors.GREEN_230 };
const obj5 = { color: require("result").unsafe_rawColors.GREEN_230 };
result.greenTextLightMode = { color: require("result").unsafe_rawColors.GREEN_400 };
result.earningMetricsAvatar = { "Null": true, "Null": "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", "Null": 159, "Null": 105.5 };
result.socialIllo = {};
result.lanyardIllo = {};
result.revenueShare = {};
result.revenueShareContainer = { padding: 24 };
result.revenueShareIllo = { disabled: "String", sequence: "isArray" };
result.revenueShareDescription = { marginEnd: 120 };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  const obj = {};
  const items = [callback(ConsistentEarningBenefit, {}), callback(FollowerAwardBenefit, {}), callback(RevenueShareBenefit, {})];
  obj.children = items;
  return callback2(View, obj);
};
