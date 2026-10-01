// Module ID: 13078
// Function ID: 13079
// Name: PremiumSubscriptionUpsell
// Dependencies: [19, 17, 2112, 1372, 1074, 6852, 1374, 21, 4836, 576, 4783, 1115, 1882, 504, 4488, 5293, 1094, 4832, 13079, 13080, 8694, 5281, 2]
// Exports: default

// Module 13078 (PremiumSubscriptionUpsell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import intl7 from "intl" /* 1115 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4783 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8694 */;
import AssetRegistryDefault from "AssetRegistry" /* 13079 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13080 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserStore from "UserStore" /* 1372 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
const Fonts = Constants.Fonts;
const Gradients = ColorConstants.Gradients;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportAll, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: c9 } = PremiumConstants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: { textAlign: "center" }, subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" }, upsell: obj2, upsellCard: obj3, upsellFeatures: obj4, upsellFeatureSubLogo: { alignSelf: "center", height: 10, width: 54 }, upsellFeatureList: { marginTop: 8 }, upsellButton: { marginTop: 16 }, upsellFeatureLogoTier2: { alignSelf: "center", height: 20, marginTop: 6, width: 84 }, upsellLabel: obj5, upsellRow: obj6 };
obj2 = { paddingTop: 32, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
obj4 = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
obj6 = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  let Button;
  let P3aEj6;
  let currentUser;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj16;
  let obj18;
  let obj20;
  let obj4;
  let obj8;
  let onLearnMorePremium;
  let style;
  let tmp2Result;
  let tmp5Result;
  ({ onLearnMorePremium, style } = arg0);
  const tmp = closure_13();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7Result = null;
  const obj2 = PremiumUtilsDefault;
  if (!obj2.canUsePremiumGuildMemberProfile(stateFromStores)) {
    let tmp7Result1;
    const obj3 = { style: items1, children: closure_12(tmp5Result, obj4) };
    items1 = [tmp.upsell, style];
    obj4 = { style: tmp.upsellCard, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: items3 };
    tmp5Result = LinearGradientDefault;
    const tmp5Result3 = PremiumUtilsDefault;
    if (tmp5Result3.isPremium(stateFromStores)) {
      const obj5 = { children: items2 };
      const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl2.string(intl7.t.YYfHlx) };
      const Text2 = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items2 = [authStore(Text2, obj6), ];
      const obj7 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: intl3.format(intl7.t.Af0zEZ, obj8) };
      const Text3 = tmp2(4832).Text;
      intl3 = tmp2(1115).intl;
      obj8 = { numFreeGuildSubscriptions: metroImportAll };
      items2[1] = authStore(Text3, obj7);
      tmp7Result1 = tmp9(unpackModuleId, obj5);
    } else {
      const obj9 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: intl.string(intl7.t["qUl+K4"]) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      tmp7Result1 = tmp7(Text, obj9);
    }
    items3 = [tmp7Result1, , ];
    const obj10 = { style: tmp.upsellFeatures, children: items4 };
    const obj11 = { style: tmp.upsellFeatureSubLogo, source: AssetRegistryDefault };
    items4 = [authStore(React3, obj11), , ];
    const obj12 = { style: tmp.upsellFeatureLogoTier2, source: AssetRegistryDefault2 };
    items4[1] = authStore(React3, obj12);
    const obj13 = { style: tmp.upsellFeatureList, features: items5, labelStyle: null, rowStyle: null };
    const obj15 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: formatToPlainString(P3aEj6, obj16), color: nativeDefault.unsafe_rawColors.WHITE };
    const tmp5Result4 = PremiumFeatureListDefault;
    const intl4 = tmp2(1115).intl;
    formatToPlainString = intl4.formatToPlainString;
    obj16 = { discountPercentage: tmp2Result.formatPercent(LocaleStore.locale, React4 / 100) };
    P3aEj6 = tmp2(1115).t.P3aEj6;
    items5 = [obj15, ];
    tmp2Result = NumberUtils;
    const obj17 = { IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon, label: intl5.formatToPlainString(intl7.t.Ntlzbd, obj18), color: nativeDefault.unsafe_rawColors.WHITE };
    intl5 = tmp2(1115).intl;
    obj18 = { numFreeGuildSubscriptions: metroImportAll };
    items5[1] = obj17;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = authStore(tmp5Result4, obj13);
    items3[1] = closure_12(_false, obj10);
    const obj19 = { style: tmp.upsellButton, children: authStore(Button, obj20) };
    obj20 = { variant: "experimental_premium-secondary", text: intl6.string(intl7.t.fJOECn), onPress: onLearnMorePremium };
    Button = tmp2(5281).Button;
    intl6 = tmp2(1115).intl;
    items3[2] = authStore(_false, obj19);
    tmp7Result = tmp7(tmp8, obj3);
  }
  return tmp7Result;
};
