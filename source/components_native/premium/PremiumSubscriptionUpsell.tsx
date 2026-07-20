// Module ID: 12343
// Function ID: 94432
// Name: PremiumSubscriptionUpsell
// Dependencies: []
// Exports: default

// Module 12343 (PremiumSubscriptionUpsell)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ View: closure_3, Image: closure_4 } = tmp3);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Gradients = arg1(dependencyMap[5]).Gradients;
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_9 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { title: { textAlign: "center" }, subtitle: {} };
obj = { paddingTop: 32, borderTopWidth: 2 * tmp3.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.upsell = obj;
const tmp5 = arg1(dependencyMap[7]);
obj.upsellCard = { borderRadius: importDefault(dependencyMap[9]).radii.xs };
const obj1 = { borderRadius: importDefault(dependencyMap[9]).radii.xs };
obj.upsellFeatures = { borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.upsellFeatureSubLogo = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
obj.upsellFeatureList = { marginTop: 8 };
obj.upsellButton = { marginTop: 16 };
obj.upsellFeatureLogoTier2 = {};
const obj2 = { borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.upsellLabel = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE, fontFamily: arg1(dependencyMap[4]).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
const obj3 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE, fontFamily: arg1(dependencyMap[4]).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
obj.upsellRow = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
let closure_13 = obj.createStyles(obj);
const obj4 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  let onLearnMorePremium;
  let style;
  ({ onLearnMorePremium, style } = arg0);
  let tmp = callback3();
  let obj = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[14]);
  if (obj1.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    obj = {};
    const items1 = [tmp.upsell, style];
    obj.style = items1;
    obj = { style: tmp.upsellCard, start: arg1(dependencyMap[16]).HorizontalGradient.START, end: arg1(dependencyMap[16]).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD };
    let obj4 = importDefault(dependencyMap[14]);
    if (obj4.isPremium(stateFromStores)) {
      obj1 = {};
      const obj2 = { 0: -40, 9223372036854775807: 8, 0: "flex", -9223372036854775808: "row", style: tmp.title };
      const intl2 = arg1(dependencyMap[11]).intl;
      obj2.children = intl2.string(arg1(dependencyMap[11]).t.YYfHlx);
      const items2 = [callback(arg1(dependencyMap[17]).Text, obj2), ];
      const obj3 = { Promise: 24, marginTop: 24, flags: null, style: tmp.subtitle };
      const intl3 = arg1(dependencyMap[11]).intl;
      obj4 = { numFreeGuildSubscriptions: closure_8 };
      obj3.children = intl3.format(arg1(dependencyMap[11]).t.Af0zEZ, obj4);
      items2[1] = callback(arg1(dependencyMap[17]).Text, obj3);
      obj1.children = items2;
      let tmp14 = callback2(closure_11, obj1);
    } else {
      const obj5 = { 0: -40, 9223372036854775807: 8, 0: "flex", -9223372036854775808: "row", style: tmp.title };
      const intl = arg1(dependencyMap[11]).intl;
      obj5.children = intl.string(arg1(dependencyMap[11]).t.qUl+K4);
      tmp14 = callback(arg1(dependencyMap[17]).Text, obj5);
    }
    const items3 = [tmp14, , ];
    const obj6 = { style: tmp.upsellFeatures };
    const obj7 = { style: tmp.upsellFeatureSubLogo, source: importDefault(dependencyMap[18]) };
    const items4 = [callback(closure_4, obj7), , ];
    const obj8 = { style: tmp.upsellFeatureLogoTier2, source: importDefault(dependencyMap[19]) };
    items4[1] = callback(closure_4, obj8);
    const obj9 = { style: tmp.upsellFeatureList };
    const obj10 = {};
    const tmp3 = callback;
    const tmp4 = closure_3;
    const tmp5 = callback2;
    const tmp8 = importDefault(dependencyMap[15]);
    obj10.IconComponent = arg1(dependencyMap[10]).CheckmarkLargeIcon;
    const intl4 = arg1(dependencyMap[11]).intl;
    const obj11 = {};
    const tmp27 = importDefault(dependencyMap[20]);
    obj11.discountPercentage = arg1(dependencyMap[12]).formatPercent(locale.locale, closure_9 / 100);
    obj10.label = intl4.formatToPlainString(arg1(dependencyMap[11]).t.P3aEj6, obj11);
    obj10.color = importDefault(dependencyMap[9]).unsafe_rawColors.WHITE;
    const items5 = [obj10, ];
    const obj12 = { IconComponent: arg1(dependencyMap[10]).CheckmarkLargeIcon };
    const intl5 = arg1(dependencyMap[11]).intl;
    const obj13 = { numFreeGuildSubscriptions: closure_8 };
    obj12.label = intl5.formatToPlainString(arg1(dependencyMap[11]).t.Ntlzbd, obj13);
    obj12.color = importDefault(dependencyMap[9]).unsafe_rawColors.WHITE;
    items5[1] = obj12;
    obj9.features = items5;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = callback(tmp27, obj9);
    obj6.children = items4;
    items3[1] = callback2(closure_3, obj6);
    const obj14 = { style: tmp.upsellButton };
    const obj15 = { variant: "experimental_premium-secondary" };
    const intl6 = arg1(dependencyMap[11]).intl;
    obj15.text = intl6.string(arg1(dependencyMap[11]).t.fJOECn);
    obj15.onPress = onLearnMorePremium;
    tmp = callback(arg1(dependencyMap[21]).Button, obj15);
    obj14.children = tmp;
    items3[2] = callback(closure_3, obj14);
    obj.children = items3;
    obj = tmp5(tmp8, obj);
    obj.children = obj;
    tmp3(tmp4, obj);
    const obj17 = arg1(dependencyMap[12]);
  }
};
