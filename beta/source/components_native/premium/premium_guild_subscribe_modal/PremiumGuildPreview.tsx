// Module ID: 13150
// Function ID: 13151
// Name: PremiumGuildPreview
// Dependencies: [19, 17, 1182, 1074, 21, 4836, 576, 5753, 4685, 13151, 13152, 13153, 13154, 13155, 13156, 13157, 13158, 1177, 4728, 504, 5896, 2]
// Exports: default

// Module 13150 (PremiumGuildPreview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import shared from "shared" /* 4685 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import AssetRegistryDefault from "AssetRegistry" /* 13151 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13152 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13153 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13154 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13155 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13156 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13157 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13158 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function PremiumGuildTierPill(arg0) {
  let items;
  let obj7;
  let theme;
  let tier;
  let tmp7;
  ({ tier, theme } = arg0);
  const tmp = closure_9();
  const obj = { style: tmp.tierPill, children: items };
  const obj2 = { style: tmp.tierPillImage, source: tmp7 };
  const tmp2 = metroImportAll;
  const tmp3 = _false;
  const tmp5 = React3;
  if (BoostedGuildTiers.NONE === tier) {
    const tmp21 = AssetRegistryDefault;
    let tmp22 = AssetRegistryDefault2;
    const obj5 = shared;
    if (obj5.isThemeDark(theme)) {
      tmp22 = tmp21;
    }
    tmp7 = tmp22;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const tmp16 = AssetRegistryDefault3;
    let tmp17 = AssetRegistryDefault4;
    const obj4 = shared;
    if (obj4.isThemeDark(theme)) {
      tmp17 = tmp16;
    }
    tmp7 = tmp17;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const tmp11 = AssetRegistryDefault5;
    let tmp12 = AssetRegistryDefault6;
    const obj3 = shared;
    if (obj3.isThemeDark(theme)) {
      tmp12 = tmp11;
    }
    tmp7 = tmp12;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const tmp26 = AssetRegistryDefault7;
    let tmp8 = AssetRegistryDefault8;
    const obj8 = shared;
    if (obj8.isThemeDark(theme)) {
      tmp8 = tmp26;
    }
    tmp7 = tmp8;
  }
  items = [metroImportDefault(tmp5, obj2), ];
  const obj6 = { style: tmp.tierPillText, children: obj7.getTierName(tier) };
  const LegacyText = native.LegacyText;
  obj7 = GuildBoostingUtils;
  items[1] = metroImportDefault(LegacyText, obj6);
  return tmp2(tmp3, obj);
}
({ View: c3, Image: closure_4 } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { guild: obj2, guildInfo: { marginLeft: 16 }, guildName: obj3, tierPill: obj4, tierPillImage: { width: 16, height: 16 }, tierPillText: obj5 };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
obj4 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  let items1;
  let items2;
  let items3;
  let theme;
  guild = guild.guild;
  const style = guild.style;
  const tmp = closure_9();
  const items = [ThemeStore];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp.guild, style];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj3 = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
  const tmp3 = GuildIconDefault;
  items2 = [metroImportDefault(tmp3, obj3), ];
  const obj4 = { style: tmp.guildInfo, children: items3 };
  items3 = [, ];
  const obj5 = { style: tmp.guildName, children: guild.name };
  items3[0] = metroImportDefault(native.LegacyText, obj5);
  const obj6 = { tier: guild.premiumTier, theme: stateFromStores };
  items3[1] = metroImportDefault(PremiumGuildTierPill, obj6);
  items2[1] = metroImportAll(_false, obj4);
  return metroImportAll(_false, obj2);
};
