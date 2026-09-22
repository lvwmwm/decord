// Module ID: 13629
// Function ID: 13630
// Name: PremiumSubscriptionUpsell
// Dependencies: [19, 17, 2025, 1371, 1074, 7535, 1373, 21, 4636, 576, 4587, 1114, 1880, 504, 4294, 5068, 1093, 4632, 13630, 13631, 9521, 5056, 2]
// Exports: default

// Module 13629 (PremiumSubscriptionUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const Gradients = fn(7535).Gradients;
const PremiumConstants = fn(1373);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_9 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4636);
const obj2 = { title: { textAlign: "center" }, subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" }, upsell: { paddingTop: 32, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, upsellCard: null, upsellFeatures: null, upsellFeatureSubLogo: null, upsellFeatureList: null, upsellButton: null, upsellFeatureLogoTier2: null, upsellLabel: null, upsellRow: null };
let obj3 = { paddingTop: 32, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.upsellCard = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
let obj4 = { borderRadius: nativeDefault.radii.xs, padding: 16, alignItems: "center" };
obj2.upsellFeatures = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.upsellFeatureSubLogo = { alignSelf: "center", height: 10, width: 54 };
obj2.upsellFeatureList = { marginTop: 8 };
obj2.upsellButton = { marginTop: 16 };
obj2.upsellFeatureLogoTier2 = { alignSelf: "center", height: 20, marginTop: 6, width: 84 };
let obj5 = { borderRadius: nativeDefault.radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.upsellLabel = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
let obj6 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
obj2.upsellRow = { paddingVertical: 0, marginTop: 8, color: nativeDefault.unsafe_rawColors.WHITE };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  ({ onLearnMorePremium, style } = arg0);
  let tmp = closure_13();
  let stringResult = dependencyMap;
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (obj2.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.upsell, style];
    obj3.style = items1;
    let obj4 = { style: tmp.upsellCard, start: tmp2(1093).HorizontalGradient.START, end: tmp2(1093).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: null };
    const tmp5Result = tmp5(5068);
    if (tmp5Result3.isPremium(stateFromStores)) {
      const obj5 = { children: null };
      const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl2 = tmp2(1114).intl;
      obj6.children = intl2.string(tmp2(1114).t.YYfHlx);
      const items2 = [tmp6(tmp2(4632).Text, obj6), ];
      const obj7 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl3 = tmp2(1114).intl;
      const obj8 = { numFreeGuildSubscriptions };
      obj7.children = intl3.format(tmp2(1114).t.Af0zEZ, obj8);
      items2[1] = tmp6(tmp2(4632).Text, obj7);
      obj5.children = items2;
      let tmp6Result1 = tmp8(closure_1_11, obj5);
    } else {
      const obj9 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light", children: null };
      const intl = tmp2(1114).intl;
      obj9.children = intl.string(tmp2(1114).t["qUl+K4"]);
      tmp6Result1 = tmp6(tmp2(4632).Text, obj9);
    }
    const items3 = [tmp6Result1, , ];
    const obj10 = { style: tmp.upsellFeatures, children: null };
    const obj11 = { style: tmp.upsellFeatureSubLogo, source: tmp5(13630) };
    const items4 = [closure_1_10(React4, obj11), , ];
    const obj12 = { style: tmp.upsellFeatureLogoTier2, source: tmp5(13631) };
    items4[1] = closure_1_10(React4, obj12);
    const obj13 = { style: tmp.upsellFeatureList, features: null, labelStyle: null, rowStyle: null };
    const obj15 = { IconComponent: null, label: null, color: null };
    tmp5Result3 = tmp5(4294);
    obj15.IconComponent = tmp2(4587).CheckmarkLargeIcon;
    const intl4 = tmp2(1114).intl;
    const obj16 = { discountPercentage: null };
    const tmp5Result4 = tmp5(9521);
    obj16.discountPercentage = tmp2(1880).formatPercent(LocaleStore.locale, React7 / 100);
    obj15.label = intl4.formatToPlainString(tmp2(1114).t.P3aEj6, obj16);
    obj15.color = tmp5(576).unsafe_rawColors.WHITE;
    const items5 = [obj15, ];
    const obj17 = { IconComponent: tmp2(4587).CheckmarkLargeIcon, label: null, color: null };
    const intl5 = tmp2(1114).intl;
    const obj18 = { numFreeGuildSubscriptions };
    obj17.label = intl5.formatToPlainString(tmp2(1114).t.Ntlzbd, obj18);
    obj17.color = tmp5(576).unsafe_rawColors.WHITE;
    items5[1] = obj17;
    obj13.features = items5;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = closure_1_10(tmp5Result4, obj13);
    obj10.children = items4;
    items3[1] = closure_1_12(React3, obj10);
    const obj19 = { style: tmp.upsellButton, children: null };
    const obj20 = { variant: "experimental_premium-secondary", text: null, onPress: null };
    const intl6 = tmp2(1114).intl;
    stringResult = intl6.string(tmp2(1114).t.fJOECn);
    obj20.text = stringResult;
    obj20.onPress = onLearnMorePremium;
    tmp = tmp6(tmp2(5056).Button, obj20);
    obj19.children = tmp;
    items3[2] = closure_1_10(React3, obj19);
    obj4.children = items3;
    obj4 = tmp8(tmp5Result, obj4);
    obj3.children = obj4;
    closure_1_10(React3, obj3);
    const tmp2Result = tmp2(1880);
  }
};
