// Module ID: 16276
// Function ID: 125689
// Name: getGreenTextStyle
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16276 (getGreenTextStyle)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import { CREATOR_REVENUE_SHARE_PERCENTAGE as closure_4 } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function getGreenTextStyle(greenTextDarkMode, arg1) {
  return arg1(dependencyMap[6]).isThemeDark(arg1) ? greenTextDarkMode.greenTextDarkMode : greenTextDarkMode.greenTextLightMode;
}
function EarningPreview() {
  const tmp = importDefault(dependencyMap[7])();
  const tmp2 = __exportStarResult1();
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
  obj1 = { cachedAt: -8364226096399416000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, edpbxy: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012460413631725481 };
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
  const tmp2 = __exportStarResult1();
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
  const tmp = __exportStarResult1();
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
  const tmp2 = __exportStarResult1();
  let obj = { style: items };
  const items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp2);
  obj = { "Null": null, "Null": "676cd159b1913e0ab2a481c3bd4a0b5c", alignItems: "role_subscription_earning_illo" };
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
  const tmp = __exportStarResult1();
  let obj = { style: tmp.benefitAvatarContainer, children: callback(importDefault(dependencyMap[10]), obj) };
  obj = { source: avatarSource.avatarSource, style: tmp.benefitAvatar };
  return callback(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = { horizontalContainer: { marginLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013132815383737633, marginVertical: 203722238426496480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
__exportStarResult1 = { padding: 20, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW, borderRadius: require("__exportStarResult1").radii.sm, overflow: "hidden" };
__exportStarResult1.benefitAvatarContainer = __exportStarResult1;
__exportStarResult1.benefitCard = { marginVertical: 6, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.benefitAvatar = { flex: true, justifyContent: "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", marginLeft: 40, backgroundColor: 40.5, borderRadius: null };
__exportStarResult1.benefitAvatars = { -9223372036854775808: null, 0: "e3602af71cc76e8c04bf027b54c9843f", 9223372036854775807: "role_subscription_benefit_nelly_avatar" };
__exportStarResult1.benefitCardTitle = { -1202476189: "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", 1387058257: 138, -157771085: 92.5 };
const obj1 = { marginVertical: 6, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.earningMetricsShadowContainer = { shadowColor: require("__exportStarResult1").colors.BLACK, shadowOffset: { "Null": null, "Null": null } };
__exportStarResult1.earningMetricsShadowContainerDarkMode = { shadowOpacity: 0.24 };
const obj2 = { shadowColor: require("__exportStarResult1").colors.BLACK, shadowOffset: { "Null": null, "Null": null } };
__exportStarResult1.earningMetrics = { borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.earningMetricsDarkMode = { backgroundColor: "#2E3638" };
const obj3 = { borderRadius: require("__exportStarResult1").radii.sm };
__exportStarResult1.earningMetricsLightMode = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW };
__exportStarResult1.greenTextDarkMode = { color: require("__exportStarResult1").unsafe_rawColors.GREEN_230 };
const obj5 = { color: require("__exportStarResult1").unsafe_rawColors.GREEN_230 };
__exportStarResult1.greenTextLightMode = { color: require("__exportStarResult1").unsafe_rawColors.GREEN_400 };
__exportStarResult1.earningMetricsAvatar = { skuId: true, product: "/assets/modules/guild_role_subscriptions/native/guild_settings/welcome/images", onPress: 159, onTrackPress: 105.5 };
__exportStarResult1.socialIllo = {};
__exportStarResult1.lanyardIllo = {};
__exportStarResult1.revenueShare = {};
__exportStarResult1.revenueShareContainer = { padding: 24 };
__exportStarResult1.revenueShareIllo = { -2124314034: "String", 529464659: "isArray" };
__exportStarResult1.revenueShareDescription = { marginEnd: 120 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  const obj = {};
  const items = [callback(ConsistentEarningBenefit, {}), callback(FollowerAwardBenefit, {}), callback(RevenueShareBenefit, {})];
  obj.children = items;
  return callback2(View, obj);
};
