// Module ID: 12543
// Function ID: 97083
// Name: getThemedImageSource
// Dependencies: [31, 27, 1278, 653, 33, 4130, 689, 4973, 3976, 12544, 12545, 12546, 12547, 12548, 12549, 12550, 12551, 1273, 4022, 566, 5515, 2]
// Exports: default

// Module 12543 (getThemedImageSource)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BoostedGuildTiers } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
function getThemedImageSource(arg0, arg1, arg2) {
  let tmp = arg2;
  if (obj.isThemeDark(arg0)) {
    tmp = arg1;
  }
  return tmp;
}
function getTierIcon(arg0, arg1) {
  if (BoostedGuildTiers.NONE === arg1) {
    return getThemedImageSource(arg0, importDefault(12544), importDefault(12545));
  } else if (BoostedGuildTiers.TIER_1 === arg1) {
    return getThemedImageSource(arg0, importDefault(12546), importDefault(12547));
  } else if (BoostedGuildTiers.TIER_2 === arg1) {
    return getThemedImageSource(arg0, importDefault(12548), importDefault(12549));
  } else if (BoostedGuildTiers.TIER_3 === arg1) {
    return getThemedImageSource(arg0, importDefault(12550), importDefault(12551));
  }
}
function PremiumGuildTierPill(tier) {
  tier = tier.tier;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.tierPill };
  obj = { style: tmp.tierPillImage, source: getTierIcon(tier.theme, tier) };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.tierPillText, children: require(4022) /* _createForOfIteratorHelperLoose */.getTierName(tier) };
  items[1] = callback(require(1273) /* Button */.LegacyText, obj);
  obj.children = items;
  return callback2(closure_3, obj);
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.guild = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildInfo = { marginLeft: 16 };
let obj1 = { fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
_createForOfIteratorHelperLoose.guildName = obj1;
const obj2 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.tierPill = obj2;
_createForOfIteratorHelperLoose.tierPillImage = { width: 16, height: 16 };
const obj3 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
_createForOfIteratorHelperLoose.tierPillText = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default function PremiumGuildPreview(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { style: items1 };
  items1 = [tmp.guild, guild.style];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.theme);
  obj = { guild, size: require(5515) /* makeSizeStyle */.GuildIconSizes.LARGE, selected: false };
  const items2 = [callback(importDefault(5515), obj), ];
  const obj1 = { style: tmp.guildInfo };
  const items3 = [callback(require(1273) /* Button */.LegacyText, { style: tmp.guildName, children: guild.name }), callback(PremiumGuildTierPill, { tier: guild.premiumTier, theme: stateFromStores })];
  obj1.children = items3;
  items2[1] = callback2(closure_3, obj1);
  obj.children = items2;
  return callback2(closure_3, obj);
};
