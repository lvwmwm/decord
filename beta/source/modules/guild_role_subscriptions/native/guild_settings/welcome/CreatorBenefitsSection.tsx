// Module ID: 17526
// Function ID: 17527
// Name: CreatorBenefitsSection
// Dependencies: [19, 17, 14750, 21, 4836, 576, 4685, 4767, 4832, 1115, 5899, 17527, 17528, 17529, 17530, 17531, 17532, 17533, 17534, 2]
// Exports: default

// Module 17526 (CreatorBenefitsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import AssetRegistryDefault from "AssetRegistry" /* 17527 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17530 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 17531 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 17532 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 17533 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 17534 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function EarningPreview() {
  let intl;
  let intl2;
  let items3;
  let obj3;
  const tmp3 = useThemeDefault();
  const tmp4 = closure_7();
  const items = [tmp4.earningMetricsShadowContainer, ];
  const obj = shared;
  const obj2 = { style: items, children: metroRequire(View, obj3) };
  items[1] = obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp4);
  obj.isThemeDark(tmp3) && tmp4.earningMetricsShadowContainerDarkMode;
  obj3 = { style: items1, children: items3 };
  const tmp7Result = shared;
  items1[2] = tmp7Result.isThemeDark(tmp3) ? tmp4.earningMetricsDarkMode : tmp4.earningMetricsLightMode;
  const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(intl3.t.TXPK7B) };
  const Text = tmp7(4832).Text;
  intl = tmp7(1115).intl;
  const items2 = [hasOwnProperty(Text, obj4), ];
  const Text2 = tmp7(4832).Text;
  const obj5 = { children: items2 };
  const tmp7Result2 = shared;
  const obj6 = { style: tmp7Result2.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode, variant: "heading-lg/extrabold", children: intl2.string(intl3.t.LdjJG5) };
  intl2 = tmp7(1115).intl;
  items2[1] = hasOwnProperty(Text2, obj6);
  items3 = [metroRequire(View, obj5), ];
  const obj7 = { style: tmp4.earningMetricsAvatar, source: AssetRegistryDefault };
  const tmpResult = FastImageDefault;
  items3[1] = hasOwnProperty(tmpResult, obj7);
  return hasOwnProperty(View, obj2);
}
function ConsistentEarningBenefit() {
  let intl;
  let items;
  let items1;
  let items2;
  let tmpResult;
  const tmp3 = useThemeDefault();
  const tmp4 = closure_7();
  const obj = { style: tmp4.benefitCard, children: items };
  const obj2 = { style: tmp4.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t["9CdmS8"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), hasOwnProperty(EarningPreview, {}), ];
  const obj3 = { style: items1, children: items2 };
  items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp4);
  const obj4 = shared;
  if (obj4.isThemeDark(tmp3)) {
    tmpResult = tmp(17528);
  } else {
    tmpResult = tmp(17529);
  }
  items2 = [hasOwnProperty(BenefitAvatar, { avatarSource: tmpResult }), , ];
  const obj5 = { avatarSource: AssetRegistryDefault2 };
  items2[1] = hasOwnProperty(BenefitAvatar, obj5);
  const obj6 = { avatarSource: AssetRegistryDefault3 };
  items2[2] = hasOwnProperty(BenefitAvatar, obj6);
  items[2] = metroRequire(View, obj3);
  return metroRequire(View, obj);
}
function FollowerAwardBenefit() {
  let intl;
  let items;
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: items };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t.qsKRUQ) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), , ];
  const obj3 = { style: tmp.socialIllo, source: AssetRegistryDefault4 };
  const tmp2 = FastImageDefault;
  items[1] = hasOwnProperty(tmp2, obj3);
  const obj4 = { style: tmp.lanyardIllo, source: AssetRegistryDefault5 };
  const tmp3 = FastImageDefault;
  items[2] = hasOwnProperty(tmp3, obj4);
  return metroRequire(View, obj);
}
function RevenueShareBenefit() {
  let intl;
  let items;
  let items2;
  const tmp3 = useThemeDefault();
  const tmp4 = closure_7();
  const obj = { style: items, children: items2 };
  items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp4);
  const items1 = [tmp4.revenueShare, ];
  const Text = Text_Text.Text;
  const obj3 = { style: items1, variant: "heading-xxl/extrabold", color: "status-positive", children: `${closure_4}%` };
  const obj2 = shared;
  items1[1] = obj2.isThemeDark(tmp3) ? tmp4.greenTextDarkMode : tmp4.greenTextLightMode;
  items2 = [hasOwnProperty(Text, obj3), , ];
  const obj4 = { style: tmp4.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t.AewsXD) };
  const Text2 = tmp8(4832).Text;
  intl = tmp8(1115).intl;
  items2[1] = hasOwnProperty(Text2, obj4);
  const obj5 = { style: tmp4.revenueShareIllo, source: AssetRegistryDefault6 };
  const tmpResult = FastImageDefault;
  items2[2] = hasOwnProperty(tmpResult, obj5);
  return metroRequire(View, obj);
}
function BenefitAvatar(avatarSource) {
  let obj2;
  avatarSource = avatarSource.avatarSource;
  const tmp = closure_7();
  const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(FastImageDefault, obj2) };
  obj2 = { source: avatarSource, style: tmp.benefitAvatar };
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
let closure_4 = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_SHARE_PERCENTAGE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flex: 1, flexDirection: "row" }, benefitAvatarContainer: obj2, benefitCard: obj3, benefitAvatar: { width: 40, height: 40, marginHorizontal: 8, borderRadius: 20, overflow: "hidden" }, benefitAvatars: { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" }, benefitCardTitle: { marginStart: 24, marginEnd: 35, marginVertical: 24 }, earningMetricsShadowContainer: obj4, earningMetricsShadowContainerDarkMode: { shadowOpacity: 0.24 }, earningMetrics: obj5, earningMetricsDarkMode: { backgroundColor: "#2E3638" }, earningMetricsLightMode: obj6, greenTextDarkMode: obj7, greenTextLightMode: { color: nativeDefault.unsafe_rawColors.GREEN_400 }, earningMetricsAvatar: { width: 54, height: 54, borderRadius: 27, overflow: "hidden" }, socialIllo: { marginTop: 50, marginStart: 16 }, lanyardIllo: { position: "absolute", bottom: 25, end: 0 }, revenueShare: { fontSize: 50, lineHeight: 52 }, revenueShareContainer: { padding: 24 }, revenueShareIllo: { marginTop: 15, alignSelf: "flex-end" }, revenueShareDescription: { marginEnd: 120 } };
obj2 = { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj4 = { shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
obj5 = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj7 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
({ color: nativeDefault.unsafe_rawColors.GREEN_400 });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  let items;
  const obj = { children: items };
  items = [hasOwnProperty(ConsistentEarningBenefit, {}), hasOwnProperty(FollowerAwardBenefit, {}), hasOwnProperty(RevenueShareBenefit, {})];
  return metroRequire(View, obj);
};
