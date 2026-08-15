// Module ID: 13041
// Function ID: 13042
// Name: PremiumGuildTierPill
// Dependencies: [19, 17, 1302, 676, 21, 4661, 712, 6289, 1363, 13042, 13043, 13044, 13045, 13046, 13047, 13048, 13049, 1297, 4266, 589, 7188, 2]
// Exports: default

// Module 13041 (PremiumGuildTierPill)
import "initialize";
import get_ActivityIndicator from "Button";
import handleThemeChange from "handleThemeChange";
import { BoostedGuildTiers } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let error;
let metroImportAll;
const require = arg1;
function PremiumGuildTierPill(arg0) {
  let theme;
  let tier;
  ({ tier, theme } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.tierPill, children: null };
  obj = { style: tmp.tierPillImage, source: null };
  if (BoostedGuildTiers.NONE === tier) {
    let tmp22 = importDefault(13043);
    const tmp21 = importDefault(13042);
    if (obj5.isThemeDark(theme)) {
      tmp22 = tmp21;
    }
    let tmp7 = tmp22;
    obj5 = require(1363) /* AccessibilityAnnouncer */;
  } else if (tmp6.TIER_1 === tier) {
    let tmp17 = importDefault(13045);
    const tmp16 = importDefault(13044);
    if (obj4.isThemeDark(theme)) {
      tmp17 = tmp16;
    }
    tmp7 = tmp17;
    obj4 = require(1363) /* AccessibilityAnnouncer */;
  } else if (tmp6.TIER_2 === tier) {
    let tmp12 = importDefault(13047);
    const tmp11 = importDefault(13046);
    if (obj3.isThemeDark(theme)) {
      tmp12 = tmp11;
    }
    tmp7 = tmp12;
    obj3 = require(1363) /* AccessibilityAnnouncer */;
  } else if (tmp6.TIER_3 === tier) {
    let tmp8 = importDefault(13049);
    const tmp26 = importDefault(13048);
    if (obj8.isThemeDark(theme)) {
      tmp8 = tmp26;
    }
    tmp7 = tmp8;
    obj8 = require(1363) /* AccessibilityAnnouncer */;
  }
  obj[1] = tmp7;
  const items = [closure_7(closure_4, obj), ];
  obj = { style: tmp.tierPillText, children: null };
  obj[1] = require(4266) /* getGuildTierFromGuild */.getTierName(tier);
  items[1] = closure_7(require(1297) /* Button */.LegacyText, obj);
  obj[1] = items;
  return closure_8(closure_3, obj);
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { guild: null, guildInfo: null, guildName: null, tierPill: null, tierPillImage: null, tierPillText: null };
createCacheKey = { padding: 16, borderRadius: require("Themes").radii.xs, flexDirection: "row", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 16 };
createCacheKey[2] = { fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
let obj1 = { fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
createCacheKey[3] = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { width: 16, height: 16 };
const obj2 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = require("handleThemeChange").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [handleThemeChange];
  obj = { style: items1, children: null };
  items1 = [tmp.guild, guild.style];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = { guild, size: null, selected: false };
  obj[1] = require(7188) /* GuildIconSizes */.GuildIconSizes.LARGE;
  const items2 = [callback(importDefault(7188), obj), ];
  const obj1 = { style: tmp.guildInfo, children: null };
  const items3 = [callback(require(1297) /* Button */.LegacyText, { style: tmp.guildName, children: guild.name }), callback(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj1[1] = items3;
  items2[1] = callback2(closure_3, obj1);
  obj[1] = items2;
  return callback2(closure_3, obj);
};
