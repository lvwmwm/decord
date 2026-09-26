// Module ID: 13063
// Function ID: 13064
// Name: GuildBoostingUpsell
// Dependencies: [19, 17, 5750, 1374, 21, 4836, 576, 13042, 1115, 8678, 13064, 13065, 13067, 9033, 13068, 8219, 13069, 9573, 13070, 12026, 13071, 8674, 13072, 9698, 504, 12940, 13073, 4767, 12905, 4685, 12914, 12915, 4832, 8694, 13077, 13078, 13079, 2]
// Exports: default

// Module 13063 (GuildBoostingUpsell)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import UploadIcon from "UploadIcon" /* 8674 */;
import BoostGemIcon from "BoostGemIcon" /* 8678 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8694 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9033 */;
import StickerIcon from "StickerIcon" /* 9573 */;
import StarIcon from "StarIcon" /* 9698 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12026 */;
import _modDef12905 from "module_12905" /* 12905 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 12940 */;
import _modDef13042 from "module_13042" /* 13042 */;
import _modDef13064 from "module_13064" /* 13064 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13065 */;
import _modDef13067 from "module_13067" /* 13067 */;
import _modDef13068 from "module_13068" /* 13068 */;
import _modDef13069 from "module_13069" /* 13069 */;
import _modDef13070 from "module_13070" /* 13070 */;
import _modDef13071 from "module_13071" /* 13071 */;
import _modDef13072 from "module_13072" /* 13072 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13073 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const FractionalPremiumStates = fn(1374).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, subscriptionUpsell: { marginTop: 32 } };
let closure_9 = createStyles.createStyles(obj2);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: closure_1(closure_2[7]), label: null, IconComponent: null, color: null };
    intl = closure_0(closure_2[8]).intl;
    obj.label = intl.string(closure_0(closure_2[8]).t["GS+bL0"]);
    obj.IconComponent = closure_0(closure_2[9]).BoostGemIcon;
    obj.color = closure_1(closure_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj1 = { icon: closure_1(closure_2[10]), label: null, IconComponent: null };
    intl2 = closure_0(closure_2[8]).intl;
    obj1.label = intl2.string(closure_0(closure_2[8]).t.a7LWeM);
    obj1.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      return closure_1_7(BoostTier3Icon.BoostTier3Icon, obj);
    };
    items[1] = obj1;
    obj4 = { icon: closure_1(closure_2[12]), label: null, color: null, IconComponent: null };
    intl3 = closure_0(closure_2[8]).intl;
    obj4.label = intl3.string(closure_0(closure_2[8]).t.E76jz8);
    obj4.color = closure_1(closure_2[6]).unsafe_rawColors.YELLOW_300;
    obj4.IconComponent = closure_0(closure_2[13]).ShieldUserIcon;
    items[2] = obj4;
    return items;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const guildSubscriptionNoGuildsSource = GuildSubscriptionNoGuilds.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  const obj4 = { style: tmp.root, children: null };
  const obj5 = { style: tmp.header, children: null };
  const tmp8 = useThemeDefault();
  const tmp9 = FractionalPremiumStates;
  const items1 = [React5(React4, { style: tmp.imgPremiumGuild, source: _modDef12905 }), , , ];
  const obj7 = { style: tmp.logoPremiumGuild, source: null };
  const obj6 = { style: tmp.imgPremiumGuild, source: _modDef12905 };
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = tmp7(12914);
  } else {
    tmp7Result = tmp7(12915);
  }
  obj7.source = tmp7Result;
  items1[1] = React5(React4, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1115).intl;
  obj8.children = intl.string(util.t.hw6WTd);
  items1[2] = React5(Text_Text.Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = tmp2(1115).intl;
  obj9.children = intl2.string(util.t.K5jBdG);
  items1[3] = React5(Text_Text.Text, obj9);
  obj5.children = items1;
  const items2 = [React6(React3, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1115).intl;
  obj10.children = intl3.string(util.t.RvfRTB);
  items2[1] = React5(Text_Text.Text, obj10);
  const obj11 = { style: tmp.features, features: null };
  tmp2Result = shared;
  obj11.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = React5(PremiumFeatureListDefault, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(1115).intl;
  obj12.children = intl4.string(util.t["/pVhjb"]);
  items2[3] = React5(Text_Text.Text, obj12);
  const obj13 = { style: tmp.features, features: null };
  const obj14 = { icon: null, label: null, IconComponent: null, color: null };
  const tmp7Result3 = PremiumFeatureListDefault;
  obj14.icon = _modDef13068;
  const intl5 = tmp2(1115).intl;
  obj14.label = intl5.string(util.t.Ts7BVI);
  obj14.IconComponent = ReactionIcon.ReactionIcon;
  obj14.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items3 = [obj14, , , , ];
  const obj15 = { icon: _modDef13069, label: null, IconComponent: null, color: null };
  const intl6 = tmp2(1115).intl;
  obj15.label = intl6.string(util.t.QcJbt6);
  obj15.IconComponent = StickerIcon.StickerIcon;
  obj15.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items3[1] = obj15;
  const obj16 = { icon: _modDef13070, label: null, color: "#4173da", IconComponent: null };
  const intl7 = tmp2(1115).intl;
  obj16.label = intl7.string(util.t.rFNkf5);
  obj16.IconComponent = HeadphonesIcon.HeadphonesIcon;
  items3[2] = obj16;
  const obj17 = { icon: _modDef13071, label: null, IconComponent: null, color: null };
  const intl8 = tmp2(1115).intl;
  obj17.label = intl8.string(util.t["BpjjS/"]);
  obj17.IconComponent = UploadIcon.UploadIcon;
  obj17.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items3[3] = obj17;
  const obj18 = { icon: _modDef13072, label: null, IconComponent: null, color: null };
  const intl9 = tmp2(1115).intl;
  obj18.label = intl9.string(util.t["9g5Lgb"]);
  obj18.IconComponent = StarIcon.StarIcon;
  obj18.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD;
  items3[4] = obj18;
  obj13.features = items3;
  items2[4] = React5(PremiumFeatureListDefault, obj13);
  const obj19 = { style: tmp.upsell, children: null };
  let tmp13Result = null;
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === tmp9.NONE) {
      tmp13Result = tmp13(tmp7(13077), {});
    }
  }
  const items4 = [tmp13Result, , ];
  if (isInReverseTrial) {
    items4[1] = null;
    let tmp13Result2 = null;
    if (subscriptionPlansLoaded) {
      const obj20 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp13Result2 = tmp13(tmp7(13079), obj20);
    }
    items4[2] = tmp13Result2;
    obj19.children = items4;
    items2[5] = tmp11(tmp12, obj19);
    obj4.children = items2;
    tmp11Result = tmp11(tmp12, obj4);
  } else {
    const obj21 = { children: null };
    if (stateFromStores) {
      const obj22 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl12 = tmp2(1115).intl;
      obj22.children = intl12.string(tmp2(1115).t.WRzob8);
      const items5 = [tmp13(tmp2(4832).Text, obj22), , ];
      const obj23 = { style: null, variant: "text-md/bold", children: null };
      const items6 = [tmp.cardText];
      obj23.style = items6;
      const intl13 = tmp2(1115).intl;
      obj23.children = intl13.string(tmp2(1115).t.j4bXcm);
      items5[1] = tmp13(tmp2(4832).Text, obj23);
      const obj24 = { style: tmp.guildList };
      items5[2] = tmp13(tmp7(13078), obj24);
      obj21.children = items5;
      let tmp19 = obj21;
    } else {
      const obj25 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items7 = [tmp13(tmp14, obj25), , ];
      const obj26 = { style: null, variant: "text-md/bold", children: null };
      const items8 = [tmp.cardText];
      obj26.style = items8;
      const intl10 = tmp2(1115).intl;
      obj26.children = intl10.string(tmp2(1115).t.FHm4bZ);
      items7[1] = tmp13(tmp2(4832).Text, obj26);
      const obj27 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl11 = tmp2(1115).intl;
      obj27.children = intl11.string(tmp2(1115).t.PSLiiu);
      items7[2] = tmp13(tmp2(4832).Text, obj27);
      obj21.children = items7;
      tmp19 = obj21;
    }
    tmp11(tmp12, tmp19);
  }
};
export { FEATURES_PREMIUM_GUILD_USER };
