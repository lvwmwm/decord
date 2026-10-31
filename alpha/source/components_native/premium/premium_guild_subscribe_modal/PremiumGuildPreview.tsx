// Module ID: 15496
// Function ID: 15497
// Name: PremiumGuildPreview
// Dependencies: [19, 17, 1192, 1072, 21, 5014, 575, 6778, 5021, 15497, 15498, 15499, 15500, 15501, 15502, 15503, 15504, 5717, 1187, 8463, 504, 6957, 2]
// Exports: default

// Module 15496 (PremiumGuildPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import LegacyTokens from "LegacyTokens" /* 6778 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8463 */;
import AssetRegistryDefault from "AssetRegistry" /* 15497 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15499 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15501 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15503 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function PremiumGuildTierPill(arg0) {
  let items;
  let obj7;
  let theme;
  let tier;
  let tmp9;
  ({ tier, theme } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.tierPill, children: items };
  const obj2 = { style: tmp.tierPillImage, source: tmp9 };
  const tmp2 = metroImportDefault;
  const tmp3 = View;
  const tmp7 = FastImageDefault;
  if (BoostedGuildTiers.NONE === tier) {
    const tmp5Result = AssetRegistryDefault;
    let tmp5Result8 = tmp5(15498);
    const obj5 = shared;
    if (obj5.isThemeDark(theme)) {
      tmp5Result8 = tmp5Result;
    }
    tmp9 = tmp5Result8;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const tmp5Result9 = AssetRegistryDefault2;
    let tmp5Result10 = tmp5(15500);
    const obj4 = shared;
    if (obj4.isThemeDark(theme)) {
      tmp5Result10 = tmp5Result9;
    }
    tmp9 = tmp5Result10;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const tmp5Result11 = AssetRegistryDefault3;
    let tmp5Result12 = tmp5(15502);
    const obj3 = shared;
    if (obj3.isThemeDark(theme)) {
      tmp5Result12 = tmp5Result11;
    }
    tmp9 = tmp5Result12;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const tmp5Result13 = AssetRegistryDefault4;
    let tmp5Result14 = tmp5(15504);
    const obj8 = shared;
    if (obj8.isThemeDark(theme)) {
      tmp5Result14 = tmp5Result13;
    }
    tmp9 = tmp5Result14;
  }
  items = [metroRequire(tmp7, obj2), ];
  const obj6 = { style: tmp.tierPillText, children: obj7.getTierName(tier) };
  const LegacyText = native.LegacyText;
  obj7 = GuildBoostingUtils;
  items[1] = metroRequire(LegacyText, obj6);
  return tmp2(tmp3, obj);
}
const View = react_native.View;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { guild: obj2, guildInfo: { marginLeft: 16 }, guildName: obj3, tierPill: obj4, tierPillImage: { width: 16, height: 16 }, tierPillText: obj5 };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
obj4 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  let items1;
  let items2;
  let items3;
  let theme;
  guild = guild.guild;
  const style = guild.style;
  const tmp = closure_8();
  const items = [ThemeStore];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp.guild, style];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj3 = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
  const tmp3 = GuildIconDefault;
  items2 = [metroRequire(tmp3, obj3), ];
  const obj4 = { style: tmp.guildInfo, children: items3 };
  items3 = [, ];
  const obj5 = { style: tmp.guildName, children: guild.name };
  items3[0] = metroRequire(native.LegacyText, obj5);
  const obj6 = { tier: guild.premiumTier, theme: stateFromStores };
  items3[1] = metroRequire(PremiumGuildTierPill, obj6);
  items2[1] = metroImportDefault(View, obj4);
  return metroImportDefault(View, obj2);
};
