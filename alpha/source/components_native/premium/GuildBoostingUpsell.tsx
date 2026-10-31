// Module ID: 15406
// Function ID: 15407
// Name: GuildBoostingUpsell
// Dependencies: [19, 17, 6772, 1385, 21, 5014, 575, 15385, 1113, 9920, 15407, 15408, 15410, 9059, 15411, 9452, 15412, 11042, 15413, 14089, 15414, 9916, 15415, 10063, 504, 15283, 15416, 5253, 5717, 15248, 5021, 15257, 15258, 5624, 9936, 15420, 15421, 15422, 2]
// Exports: default

// Module 15406 (GuildBoostingUpsell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl14 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9059 */;
import ReactionIcon from "ReactionIcon" /* 9452 */;
import UploadIcon from "UploadIcon" /* 9916 */;
import BoostGemIcon from "BoostGemIcon" /* 9920 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9936 */;
import StarIcon from "StarIcon" /* 10063 */;
import StickerIcon from "StickerIcon" /* 11042 */;
import HeadphonesIcon from "HeadphonesIcon" /* 14089 */;
import AssetRegistryDefault from "AssetRegistry" /* 15248 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 15283 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15385 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15407 */;
import BoostTier3Icon2 from "BoostTier3Icon" /* 15408 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15410 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 15411 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 15412 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 15413 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 15414 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 15415 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 15416 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 15421 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, StyleSheet } = react_native);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: obj2, subscriptionUpsell: { marginTop: 32 } };
obj2 = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles.createStyles(obj);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    let intl;
    let intl2;
    let intl3;
    let obj = { icon: AssetRegistryDefault2, label: intl.string(intl14.t["GS+bL0"]), IconComponent: BoostGemIcon.BoostGemIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    intl = intl14.intl;
    const items = [obj, , ];
    const obj2 = {
      icon: AssetRegistryDefault3,
      label: intl2.string(intl14.t.a7LWeM),
      IconComponent(arg0) {
        const obj = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        const BoostTier3Icon = BoostTier3Icon2.BoostTier3Icon;
        const merged = Object.assign(arg0);
        return closure_1_6(BoostTier3Icon, obj);
      }
    };
    intl2 = intl14.intl;
    items[1] = obj2;
    const obj3 = { icon: AssetRegistryDefault4, label: intl3.string(intl14.t.E76jz8), color: nativeDefault.unsafe_rawColors.YELLOW_300, IconComponent: ShieldUserIcon.ShieldUserIcon };
    intl3 = intl14.intl;
    items[2] = obj3;
    return items;
  }
}
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default function GuildBoostingUpsell(arg0) {
  let flattenedGuildIds;
  let fractionalState;
  let hasAvailableSlots;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isInReverseTrial;
  let items1;
  let items2;
  let items3;
  let items4;
  let onLearnMorePremium;
  let tmp7Result6;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_8();
  const items = [SortedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const obj2 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj2.useSubscriptionPlansLoaded();
  const obj3 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = obj3.useGuildSubscriptionNoGuildsSource();
  const tmp8 = useThemeDefault();
  const tmp9 = FractionalPremiumStates;
  if (fractionalState !== FractionalPremiumStates.NONE) {
    let tmp11Result2;
    if (!isInReverseTrial) {
      tmp11Result2 = null;
    }
    return tmp11Result2;
  }
  const obj4 = { style: tmp.root, children: items2 };
  const obj5 = { style: tmp.header, children: items1 };
  const obj6 = { style: tmp.imgPremiumGuild, source: AssetRegistryDefault };
  const tmp7Result = FastImageDefault;
  items1 = [metroRequire(tmp7Result, obj6), , , ];
  const obj7 = { style: tmp.logoPremiumGuild, source: tmp7Result6 };
  const tmp7Result5 = FastImageDefault;
  const tmp2Result = shared;
  if (tmp2Result.isThemeDark(tmp8)) {
    tmp7Result6 = tmp7(15257);
  } else {
    tmp7Result6 = tmp7(15258);
  }
  items1[1] = metroRequire(tmp7Result5, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl14.t.hw6WTd) };
  const Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  items1[2] = metroRequire(Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: intl2.string(intl14.t.K5jBdG) };
  const Text2 = tmp2(5624).Text;
  intl2 = tmp2(1113).intl;
  items1[3] = metroRequire(Text2, obj9);
  items2 = [metroImportDefault(_false, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl14.t.RvfRTB) };
  const Text3 = tmp2(5624).Text;
  intl3 = tmp2(1113).intl;
  items2[1] = metroRequire(Text3, obj10);
  const obj11 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD_USER() };
  const tmp7Result7 = PremiumFeatureListDefault;
  items2[2] = metroRequire(tmp7Result7, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(intl14.t["/pVhjb"]) };
  const Text4 = tmp2(5624).Text;
  intl4 = tmp2(1113).intl;
  items2[3] = metroRequire(Text4, obj12);
  const obj13 = { style: tmp.features, features: items3 };
  const obj14 = { icon: AssetRegistryDefault5, label: intl5.string(intl14.t.Ts7BVI), IconComponent: ReactionIcon.ReactionIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW };
  const tmp7Result8 = PremiumFeatureListDefault;
  intl5 = tmp2(1113).intl;
  items3 = [obj14, , , , ];
  const obj15 = { icon: AssetRegistryDefault6, label: intl6.string(intl14.t.QcJbt6), IconComponent: StickerIcon.StickerIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE };
  intl6 = tmp2(1113).intl;
  items3[1] = obj15;
  const obj16 = { icon: AssetRegistryDefault7, label: intl7.string(intl14.t.rFNkf5), color: "#4173da", IconComponent: HeadphonesIcon.HeadphonesIcon };
  intl7 = tmp2(1113).intl;
  items3[2] = obj16;
  const obj17 = { icon: AssetRegistryDefault8, label: intl8.string(intl14.t["BpjjS/"]), IconComponent: UploadIcon.UploadIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  intl8 = tmp2(1113).intl;
  items3[3] = obj17;
  const obj18 = { icon: AssetRegistryDefault9, label: intl9.string(intl14.t["9g5Lgb"]), IconComponent: StarIcon.StarIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD };
  intl9 = tmp2(1113).intl;
  items3[4] = obj18;
  items2[4] = metroRequire(tmp7Result8, obj13);
  let tmp13Result = null;
  const obj19 = { style: tmp.upsell, children: items4 };
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === tmp9.NONE) {
      tmp13Result = tmp13(tmp7(15420), {});
    }
  }
  items4 = [tmp13Result, , ];
  let tmp11Result = null;
  if (!isInReverseTrial) {
    let tmp21;
    const obj20 = { children: null };
    if (stateFromStores) {
      const obj21 = { style: tmp.cardText, variant: "text-md/medium", children: intl12.string(intl14.t.WRzob8) };
      const Text7 = tmp2(5624).Text;
      intl12 = tmp2(1113).intl;
      const items5 = [metroRequire(Text7, obj21), , ];
      const obj22 = { style: tmp.cardText, variant: "text-md/bold", children: intl13.string(intl14.t.j4bXcm) };
      const Text8 = tmp2(5624).Text;
      intl13 = tmp2(1113).intl;
      items5[1] = metroRequire(Text8, obj22);
      const obj23 = { style: tmp.guildList };
      items5[2] = metroRequire(GuildBoostingGuildListDefault, obj23);
      obj20.children = items5;
      tmp21 = obj20;
    } else {
      const obj24 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items6 = [metroRequire(FastImageDefault, obj24), , ];
      const obj25 = { style: tmp.cardText, variant: "text-md/bold", children: intl10.string(intl14.t.FHm4bZ) };
      const Text5 = tmp2(5624).Text;
      intl10 = tmp2(1113).intl;
      items6[1] = metroRequire(Text5, obj25);
      const obj26 = { style: tmp.cardText, variant: "text-md/medium", children: intl11.string(intl14.t.PSLiiu) };
      const Text6 = tmp2(5624).Text;
      intl11 = tmp2(1113).intl;
      items6[2] = metroRequire(Text6, obj26);
      obj20.children = items6;
      tmp21 = obj20;
    }
    tmp11Result = tmp11(tmp12, tmp21);
  }
  items4[1] = tmp11Result;
  let tmp13Result2 = null;
  if (subscriptionPlansLoaded) {
    const obj27 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
    tmp13Result2 = tmp13(tmp7(15422), obj27);
  }
  items4[2] = tmp13Result2;
  items2[5] = metroImportDefault(_false, obj19);
  tmp11Result2 = tmp11(tmp12, obj4);
};
export { FEATURES_PREMIUM_GUILD_USER };
