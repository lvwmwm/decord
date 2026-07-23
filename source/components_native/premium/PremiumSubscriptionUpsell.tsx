// Module ID: 12469
// Function ID: 96646
// Name: PremiumSubscriptionUpsell
// Dependencies: [31, 27, 1921, 1849, 653, 6671, 1851, 33, 4130, 689, 4082, 1212, 1827, 566, 3776, 4554, 668, 4126, 12470, 12471, 8138, 4543, 2]
// Exports: default

// Module 12469 (PremiumSubscriptionUpsell)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Gradients } from "items";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_3;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_9 } = GuildFeatures);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { title: { textAlign: "center" }, subtitle: { lineHeight: 20, marginTop: 8, textAlign: "center" } };
_createForOfIteratorHelperLoose = { paddingTop: 32, borderTopWidth: 2 * get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.upsell = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 16, alignItems: "center" };
_createForOfIteratorHelperLoose.upsellCard = obj1;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16, marginTop: 12, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.upsellFeatures = obj2;
_createForOfIteratorHelperLoose.upsellFeatureSubLogo = { alignSelf: "center", height: 10, width: 54 };
_createForOfIteratorHelperLoose.upsellFeatureList = { marginTop: 8 };
_createForOfIteratorHelperLoose.upsellButton = { marginTop: 16 };
_createForOfIteratorHelperLoose.upsellFeatureLogoTier2 = { alignSelf: "center", height: 20, marginTop: 6, width: 84 };
_createForOfIteratorHelperLoose.upsellLabel = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
let obj4 = { paddingVertical: 0, marginTop: 8, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
_createForOfIteratorHelperLoose.upsellRow = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/premium/PremiumSubscriptionUpsell.tsx");

export default function PremiumSubscriptionUpsell(arg0) {
  let onLearnMorePremium;
  let style;
  ({ onLearnMorePremium, style } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj1 = importDefault(3776);
  if (obj1.canUsePremiumGuildMemberProfile(stateFromStores)) {
    return null;
  } else {
    obj = {};
    const items1 = [tmp.upsell, style];
    obj.style = items1;
    obj = { style: tmp.upsellCard, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD };
    let obj4 = importDefault(3776);
    if (obj4.isPremium(stateFromStores)) {
      obj1 = {};
      const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.YYfHlx);
      const items2 = [callback(require(4126) /* Text */.Text, obj2), ];
      const obj3 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light" };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj4 = { numFreeGuildSubscriptions: closure_8 };
      obj3.children = intl3.format(require(1212) /* getSystemLocale */.t.Af0zEZ, obj4);
      items2[1] = callback(require(4126) /* Text */.Text, obj3);
      obj1.children = items2;
      let tmp14 = callback2(closure_11, obj1);
    } else {
      const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "text-overlay-light" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj5.children = intl.string(require(1212) /* getSystemLocale */.t["qUl+K4"]);
      tmp14 = callback(require(4126) /* Text */.Text, obj5);
    }
    const items3 = [tmp14, , ];
    const obj6 = { style: tmp.upsellFeatures };
    const obj7 = { style: tmp.upsellFeatureSubLogo, source: importDefault(12470) };
    const items4 = [callback(closure_4, obj7), , ];
    const obj8 = { style: tmp.upsellFeatureLogoTier2, source: importDefault(12471) };
    items4[1] = callback(closure_4, obj8);
    const obj9 = { style: tmp.upsellFeatureList };
    const obj10 = {};
    const tmp3 = callback;
    const tmp4 = closure_3;
    const tmp5 = callback2;
    const tmp8 = importDefault(4554);
    obj10.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj11 = {};
    const tmp27 = importDefault(8138);
    obj11.discountPercentage = require(1827) /* shortenAndLocalizeNumber */.formatPercent(locale.locale, closure_9 / 100);
    obj10.label = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.P3aEj6, obj11);
    obj10.color = importDefault(689).unsafe_rawColors.WHITE;
    const items5 = [obj10, ];
    const obj12 = { IconComponent: require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon };
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const obj13 = { numFreeGuildSubscriptions: closure_8 };
    obj12.label = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.Ntlzbd, obj13);
    obj12.color = importDefault(689).unsafe_rawColors.WHITE;
    items5[1] = obj12;
    obj9.features = items5;
    ({ upsellLabel: obj14.labelStyle, upsellRow: obj14.rowStyle } = tmp);
    items4[2] = callback(tmp27, obj9);
    obj6.children = items4;
    items3[1] = callback2(closure_3, obj6);
    const obj14 = { style: tmp.upsellButton };
    const obj15 = { variant: "experimental_premium-secondary" };
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj15.text = intl6.string(require(1212) /* getSystemLocale */.t.fJOECn);
    obj15.onPress = onLearnMorePremium;
    tmp = callback(require(4543) /* Button */.Button, obj15);
    obj14.children = tmp;
    items3[2] = callback(closure_3, obj14);
    obj.children = items3;
    obj = tmp5(tmp8, obj);
    obj.children = obj;
    tmp3(tmp4, obj);
    const obj17 = require(1827) /* shortenAndLocalizeNumber */;
  }
};
