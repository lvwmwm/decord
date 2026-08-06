// Module ID: 15224
// Function ID: 15225
// Name: EmptyBody
// Dependencies: [19, 17, 1410, 1905, 21, 4285, 712, 9370, 9629, 12053, 4253, 9634, 1988, 9633, 4281, 1236, 3030, 5649, 5669, 8545, 4693, 3930, 1297, 4790, 4810, 4781, 2]
// Exports: default, getScaledFavoritesUpsellNoticeHeight

// Module 15224 (EmptyBody)
import openPremiumModal from "openPremiumModal";
import { View } from "context";
import { MAX_FAVORITE_CHANNELS } from "date";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "getPremiumPlanItem";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function EmptyBody() {
  const callback = React.useCallback(() => {
    if (obj.getFavoritesAccess().hasAccess) {
      const result = tmp(tmp2[9]).openAddFavoriteChannelModal({ source: "favorites_empty_sidebar" });
      const tmpResult = tmp(tmp2[9]);
    } else {
      const obj2 = callback2(tmp2[10]);
      obj2.openLazy(tmp(tmp2[12])(tmp2[11], tmp2.paths), tmp(tmp2[13]).FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
      const tmp4 = tmp(tmp2[12])(tmp2[11], tmp2.paths);
    }
  }, []);
  const obj = { variant: c10, color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.format(importDefault(3030).Z3Hdr5, { onClick: callback });
  return callback(require(4281) /* Text */.Text, obj);
}
function UpsellBody() {
  let favoriteCount;
  let favoriteLimit;
  const tmp = createCacheKey();
  let obj = isAtLimit(9629);
  const favoritesLimitUpsell = obj.useFavoritesLimitUpsell();
  isAtLimit = favoritesLimitUpsell.isAtLimit;
  ({ favoriteCount, favoriteLimit } = favoritesLimitUpsell);
  analyticsLocations = analyticsLocations(5649)(analyticsLocations(5669).FAVORITES_GUILD_UPSELL_BAR).analyticsLocations;
  const items = [analyticsLocations];
  const items1 = [isAtLimit];
  const callback = React.useCallback(() => {
    analyticsLocations(outer1_2[19])({ analyticsLocations });
  }, items);
  const callback1 = React.useCallback((children) => {
    let str = "text-default";
    if (isAtLimit) {
      str = "text-feedback-warning";
    }
    return outer1_7(isAtLimit(outer1_2[14]).Text, { variant: "text-sm/bold", color: str, children }, arg1);
  }, items1);
  obj = { direction: "horizontal", align: "flex-start", spacing: null, children: null };
  obj[2] = analyticsLocations(712).space.PX_8;
  obj = { variant: c10, color: "text-muted", style: tmp.upsellText, lineClamp: 3, children: null };
  const intl = isAtLimit(1236).intl;
  const obj1 = { count: favoriteCount, limit: favoriteLimit, maxCount: MAX_FAVORITE_CHANNELS, nitroTierName: null, onClick: null, countHook: null };
  const tmp3 = analyticsLocations(5649);
  obj1[3] = isAtLimit(3930).getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  obj1[4] = callback;
  obj1[5] = callback1;
  obj[4] = intl.format(analyticsLocations(3030).Yw4x8Q, obj1);
  const items2 = [callback(isAtLimit(4281).Text, obj), ];
  const obj2 = { size: null, style: null };
  obj2[0] = isAtLimit(1297).BetaSizes.SMALL;
  obj2[1] = tmp.betaTag;
  items2[1] = callback(isAtLimit(1297).BetaTag, obj2);
  obj[3] = items2;
  return callback2(isAtLimit(4693).Stack, obj);
}
function PlaceholderRows() {
  const tmp = createCacheKey();
  let obj = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  obj = { style: tmp.placeholderRow, children: null };
  obj = { size: "sm", color: null };
  obj[1] = importDefault(712).colors.ICON_MUTED;
  const items = [callback(require(4790) /* TextIcon */.TextIcon, obj), ];
  const items1 = [, ];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  items[1] = callback(View, { style: items1 });
  obj[1] = items;
  const items2 = [callback2(View, obj), , ];
  const obj1 = { style: tmp.placeholderRow, children: null };
  const obj2 = { size: "sm", color: null };
  obj2[1] = importDefault(712).colors.ICON_MUTED;
  const items3 = [callback(require(4810) /* VoiceNormalIcon */.VoiceNormalIcon, obj2), ];
  const items4 = [, ];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  items3[1] = callback(View, { style: items4 });
  obj1[1] = items3;
  items2[1] = callback2(View, obj1);
  const obj3 = { style: tmp.placeholderRow, children: null };
  const obj4 = { size: "sm", color: null };
  obj4[1] = importDefault(712).colors.ICON_MUTED;
  const items5 = [callback(require(4781) /* ChatIcon */.ChatIcon, obj4), ];
  const items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  items5[1] = callback(View, { style: items6 });
  obj3[1] = items5;
  items2[2] = callback2(View, obj3);
  obj[3] = items2;
  return callback2(View, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let c9 = "heading-md/semibold";
let c10 = "text-sm/medium";
createCacheKey = { copy: null, divider: null, upsellText: null, betaTag: null, placeholderRows: null, placeholderRow: null, placeholderBar: null, placeholderBarShort: null, placeholderBarLong: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { marginLeft: 0 };
let obj1 = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = { paddingTop: require("Themes").space.PX_8 };
let obj2 = { paddingTop: require("Themes").space.PX_8 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[6] = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
let obj4 = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[7] = { width: require("Themes").space.PX_80 };
const obj5 = { width: require("Themes").space.PX_80 };
createCacheKey[8] = { width: require("Themes").space.PX_128 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { width: require("Themes").space.PX_128 };
let result = require("date").fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader(variant) {
  const tmp = createCacheKey();
  let obj = { spacing: null, children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj[1] = tmp.copy;
  obj = { variant: c9, color: "mobile-text-heading-primary", lineClamp: null, children: null };
  obj[2] = 1;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(importDefault(3030)["1n0TGE"]);
  const items = [closure_7(require(4281) /* Text */.Heading, obj), closure_7("empty" === variant.variant ? EmptyBody : UpsellBody, {})];
  obj[2] = items;
  const items1 = [closure_8(require(4693) /* Stack */.Stack, obj), closure_7(View, { style: tmp.divider }), ];
  let tmp7Result = null;
  if ("empty" === variant.variant) {
    tmp7Result = tmp7(PlaceholderRows, {});
  }
  items1[2] = tmp7Result;
  obj[1] = items1;
  return closure_8(require(4693) /* Stack */.Stack, obj);
};
export const getScaledFavoritesUpsellNoticeHeight = function getScaledFavoritesUpsellNoticeHeight(fontScale) {
  const obj = require(9370) /* map */;
  const scaleTextLineHeightResult = require(9370) /* map */.scaleTextLineHeight(c9, fontScale);
  const result = 3 * require(9370) /* map */.scaleTextLineHeight(c10, fontScale);
  const sum = importDefault(712).space.PX_16 + scaleTextLineHeightResult;
  const sum1 = sum + importDefault(712).space.PX_8;
  const sum2 = sum1 + result + importDefault(712).space.PX_8;
  return sum2 + importDefault(712).space.PX_12 + 1;
};
