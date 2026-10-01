// Module ID: 13062
// Function ID: 13063
// Name: GuildBoostingUpsell
// Dependencies: [19, 17, 5750, 1374, 21, 4836, 576, 13041, 1115, 8678, 13063, 13064, 13066, 9033, 13067, 8219, 13068, 9573, 13069, 12026, 13070, 8674, 13071, 9698, 504, 12939, 13072, 4767, 12904, 4685, 12913, 12914, 4832, 8694, 13076, 13077, 13078, 2]
// Exports: default

// Module 13062 (GuildBoostingUpsell)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl14 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import UploadIcon from "UploadIcon" /* 8674 */;
import BoostGemIcon from "BoostGemIcon" /* 8678 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8694 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9033 */;
import StickerIcon from "StickerIcon" /* 9573 */;
import StarIcon from "StarIcon" /* 9698 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12026 */;
import AssetRegistryDefault from "AssetRegistry" /* 12904 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 12939 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13041 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13063 */;
import BoostTier3Icon2 from "BoostTier3Icon" /* 13064 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13066 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13067 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13068 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13069 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13070 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 13071 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13072 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 13077 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: obj2, subscriptionUpsell: { marginTop: 32 } };
obj2 = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj);
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
        return closure_1_7(BoostTier3Icon, obj);
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
  let items6;
  let items8;
  let onLearnMorePremium;
  let tmp7Result;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
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
  const obj5 = { style: tmp.header, children: items1 };
  items1 = [, , , ];
  const obj4 = { style: tmp.root, children: items2 };
  const obj6 = { style: tmp.imgPremiumGuild, source: AssetRegistryDefault };
  items1[0] = metroImportDefault(React3, obj6);
  const obj7 = { style: tmp.logoPremiumGuild, source: tmp7Result };
  const tmp2Result = shared;
  if (tmp2Result.isThemeDark(tmp8)) {
    tmp7Result = tmp7(12913);
  } else {
    tmp7Result = tmp7(12914);
  }
  items1[1] = metroImportDefault(React3, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl14.t.hw6WTd) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1[2] = metroImportDefault(Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: intl2.string(intl14.t.K5jBdG) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items1[3] = metroImportDefault(Text2, obj9);
  items2 = [metroImportAll(_false, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl14.t.RvfRTB) };
  const Text3 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items2[1] = metroImportDefault(Text3, obj10);
  const obj11 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD_USER() };
  const tmp7Result3 = PremiumFeatureListDefault;
  items2[2] = metroImportDefault(tmp7Result3, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(intl14.t["/pVhjb"]) };
  const Text4 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items2[3] = metroImportDefault(Text4, obj12);
  const obj13 = { style: tmp.features, features: items3 };
  const obj14 = { icon: AssetRegistryDefault5, label: intl5.string(intl14.t.Ts7BVI), IconComponent: ReactionIcon.ReactionIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW };
  const tmp7Result4 = PremiumFeatureListDefault;
  intl5 = tmp2(1115).intl;
  items3 = [obj14, , , , ];
  const obj15 = { icon: AssetRegistryDefault6, label: intl6.string(intl14.t.QcJbt6), IconComponent: StickerIcon.StickerIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE };
  intl6 = tmp2(1115).intl;
  items3[1] = obj15;
  const obj16 = { icon: AssetRegistryDefault7, label: intl7.string(intl14.t.rFNkf5), color: "#4173da", IconComponent: HeadphonesIcon.HeadphonesIcon };
  intl7 = tmp2(1115).intl;
  items3[2] = obj16;
  const obj17 = { icon: AssetRegistryDefault8, label: intl8.string(intl14.t["BpjjS/"]), IconComponent: UploadIcon.UploadIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  intl8 = tmp2(1115).intl;
  items3[3] = obj17;
  const obj18 = { icon: AssetRegistryDefault9, label: intl9.string(intl14.t["9g5Lgb"]), IconComponent: StarIcon.StarIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD };
  intl9 = tmp2(1115).intl;
  items3[4] = obj18;
  items2[4] = metroImportDefault(tmp7Result4, obj13);
  let tmp13Result = null;
  const obj19 = { style: tmp.upsell, children: items4 };
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === tmp9.NONE) {
      tmp13Result = tmp13(tmp7(13076), {});
    }
  }
  items4 = [tmp13Result, , ];
  let tmp11Result = null;
  if (!isInReverseTrial) {
    let tmp20;
    const obj20 = { children: null };
    if (stateFromStores) {
      const obj21 = { style: tmp.cardText, variant: "text-md/medium", children: intl12.string(intl14.t.WRzob8) };
      const Text7 = tmp2(4832).Text;
      intl12 = tmp2(1115).intl;
      const items5 = [metroImportDefault(Text7, obj21), , ];
      const obj22 = { style: items6, variant: "text-md/bold", children: intl13.string(intl14.t.j4bXcm) };
      items6 = [tmp.cardText];
      const Text8 = tmp2(4832).Text;
      intl13 = tmp2(1115).intl;
      items5[1] = metroImportDefault(Text8, obj22);
      const obj23 = { style: tmp.guildList };
      items5[2] = metroImportDefault(GuildBoostingGuildListDefault, obj23);
      obj20.children = items5;
      tmp20 = obj20;
    } else {
      const obj24 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items7 = [metroImportDefault(React3, obj24), , ];
      const obj25 = { style: items8, variant: "text-md/bold", children: intl10.string(intl14.t.FHm4bZ) };
      items8 = [tmp.cardText];
      const Text5 = tmp2(4832).Text;
      intl10 = tmp2(1115).intl;
      items7[1] = metroImportDefault(Text5, obj25);
      const obj26 = { style: tmp.cardText, variant: "text-md/medium", children: intl11.string(intl14.t.PSLiiu) };
      const Text6 = tmp2(4832).Text;
      intl11 = tmp2(1115).intl;
      items7[2] = metroImportDefault(Text6, obj26);
      obj20.children = items7;
      tmp20 = obj20;
    }
    tmp11Result = tmp11(tmp12, tmp20);
  }
  items4[1] = tmp11Result;
  let tmp13Result2 = null;
  if (subscriptionPlansLoaded) {
    const obj27 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
    tmp13Result2 = tmp13(tmp7(13078), obj27);
  }
  items4[2] = tmp13Result2;
  items2[5] = metroImportAll(_false, obj19);
  tmp11Result2 = tmp11(tmp12, obj4);
};
export { FEATURES_PREMIUM_GUILD_USER };
