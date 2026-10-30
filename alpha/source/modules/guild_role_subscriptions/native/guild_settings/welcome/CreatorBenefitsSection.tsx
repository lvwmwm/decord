// Module ID: 19836
// Function ID: 19837
// Name: CreatorBenefitsSection
// Dependencies: [19, 17, 17125, 21, 5009, 575, 5016, 5248, 5619, 1114, 19837, 19841, 19845, 19849, 19853, 19857, 2]
// Exports: default

// Module 19836 (CreatorBenefitsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import Text_Text from "Text/Text" /* 5619 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17125 */;
import AvatarRoseExample from "AvatarRoseExample" /* 19837 */;
import AvatarLokyExample from "AvatarLokyExample" /* 19841 */;
import AvatarGraggleExample from "AvatarGraggleExample" /* 19845 */;
import AvatarMoatmonsturrExample from "AvatarMoatmonsturrExample" /* 19849 */;
import StarKeySpotIllustration from "StarKeySpotIllustration" /* 19853 */;
import StarCoinsSpotIllustration from "StarCoinsSpotIllustration" /* 19857 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function EarningPreview() {
  let intl;
  let intl2;
  let items3;
  let obj3;
  const tmp2 = useThemeDefault();
  const tmp3 = closure_7();
  const items = [tmp3.earningMetricsShadowContainer, ];
  const obj = shared;
  const obj2 = { style: items, children: metroRequire(View, obj3) };
  items[1] = obj.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp3);
  obj.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  obj3 = { style: items1, children: items3 };
  const tmp6Result = shared;
  items1[2] = tmp6Result.isThemeDark(tmp2) ? tmp3.earningMetricsDarkMode : tmp3.earningMetricsLightMode;
  const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(intl3.t.TXPK7B) };
  const Text = tmp6(5619).Text;
  intl = tmp6(1114).intl;
  const items2 = [hasOwnProperty(Text, obj4), ];
  const Text2 = tmp6(5619).Text;
  const obj5 = { children: items2 };
  const tmp6Result2 = shared;
  const obj6 = { style: tmp6Result2.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode, variant: "heading-lg/extrabold", children: intl2.string(intl3.t.LdjJG5) };
  intl2 = tmp6(1114).intl;
  items2[1] = hasOwnProperty(Text2, obj6);
  items3 = [metroRequire(View, obj5), hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 })];
  return hasOwnProperty(View, obj2);
}
function ConsistentEarningBenefit() {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: items };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t["9CdmS8"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), hasOwnProperty(EarningPreview, {}), ];
  const obj3 = { style: items1, children: items2 };
  items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp);
  items2 = [, , ];
  const obj4 = { Avatar: AvatarLokyExample.AvatarLokyExample };
  items2[0] = hasOwnProperty(BenefitAvatar, obj4);
  const obj5 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
  items2[1] = hasOwnProperty(BenefitAvatar, obj5);
  const obj6 = { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample };
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
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.starKeyIllo, children: hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 }) };
  items[1] = hasOwnProperty(View, obj3);
  return metroRequire(View, obj);
}
function RevenueShareBenefit() {
  let intl;
  let items;
  let items2;
  const tmp2 = useThemeDefault();
  const tmp3 = closure_7();
  const obj = { style: items, children: items2 };
  items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp3);
  const items1 = [tmp3.revenueShare, ];
  const Text = Text_Text.Text;
  const obj3 = { style: items1, variant: "heading-xxl/extrabold", color: "status-positive", children: `${closure_4}%` };
  const obj2 = shared;
  items1[1] = obj2.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode;
  items2 = [hasOwnProperty(Text, obj3), , ];
  const obj4 = { style: tmp3.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t.AewsXD) };
  const Text2 = tmp7(5619).Text;
  intl = tmp7(1114).intl;
  items2[1] = hasOwnProperty(Text2, obj4);
  const obj5 = { style: tmp3.revenueShareIllo, children: hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 }) };
  items2[2] = hasOwnProperty(View, obj5);
  return metroRequire(View, obj);
}
function BenefitAvatar(Avatar) {
  let obj2;
  Avatar = Avatar.Avatar;
  const tmp = closure_7();
  const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.benefitAvatar, children: hasOwnProperty(Avatar, { width: 40 }) };
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
let closure_4 = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_SHARE_PERCENTAGE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flex: 1, flexDirection: "row" }, benefitAvatarContainer: obj2, benefitCard: obj3, benefitAvatar: { marginHorizontal: 8 }, benefitAvatars: { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" }, benefitCardTitle: { marginStart: 24, marginEnd: 35, marginVertical: 24 }, earningMetricsShadowContainer: obj4, earningMetricsShadowContainerDarkMode: { shadowOpacity: 0.24 }, earningMetrics: obj5, earningMetricsDarkMode: { backgroundColor: "#2E3638" }, earningMetricsLightMode: obj6, greenTextDarkMode: { color: nativeDefault.unsafe_rawColors.GREEN_230 }, greenTextLightMode: { color: nativeDefault.unsafe_rawColors.GREEN_400 }, starKeyIllo: { alignSelf: "flex-end", marginEnd: 16, marginBottom: 16 }, revenueShare: { fontSize: 50, lineHeight: 52 }, revenueShareContainer: { padding: 24 }, revenueShareIllo: { marginTop: 15, alignSelf: "flex-end" }, revenueShareDescription: { marginEnd: 120 } };
obj2 = { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj4 = { shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
obj5 = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
({ color: nativeDefault.unsafe_rawColors.GREEN_230 });
({ color: nativeDefault.unsafe_rawColors.GREEN_400 });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default function CreatorBenefitsSection() {
  let items;
  const obj = { children: items };
  items = [hasOwnProperty(ConsistentEarningBenefit, {}), hasOwnProperty(FollowerAwardBenefit, {}), hasOwnProperty(RevenueShareBenefit, {})];
  return metroRequire(View, obj);
};
