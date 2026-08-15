// Module ID: 9983
// Function ID: 9984
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 1429, 676, 21, 9980, 9984, 4342, 9982, 8017, 1236, 3079, 5696, 6687, 4745, 9325, 9326, 9985, 1222, 2]
// Exports: default

// Module 9983 (FavoritesGuildUpsellSheet)
import noop from "noop";
import { MAX_FAVORITE_CHANNELS } from "date";
import { FAVORITES } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let result = require("ME").fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    FREE_FAVORITE_LIMIT = analyticsLocations(9980).FREE_FAVORITE_LIMIT;
  }
  let str = limit.source;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let str2 = limit.variant;
  if (str2 === undefined) {
    str2 = "no_access";
  }
  analyticsLocations = undefined;
  let importDefault;
  analyticsLocations = importDefault(9984)(str).analyticsLocations;
  importDefault = React.useCallback(() => {
    callback(4342).hideActionSheet(analyticsLocations(9982).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = analyticsLocations(1236).intl;
  const tmp8 = importDefault(3079);
  let obj = { title: intl.string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp7(1236).intl;
  if ("limit_reached" === str2) {
    obj = { count: null, maxCount: null };
    obj[0] = FREE_FAVORITE_LIMIT;
    obj[1] = MAX_FAVORITE_CHANNELS;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3079).D7S0Zo, obj);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3079)["WaP/lz"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = closure_6(analyticsLocations(5696).FavoritesSpotIllustration, {});
  obj = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp7(1236).intl;
  obj[2] = intl3.string(analyticsLocations(1236).t.pj0XBN);
  obj[3] = function onPress() {
    callback();
    const obj = { analyticsLocations, premiumFeatureCardOrder: null };
    obj[1] = analyticsLocations(outer1_2[15]).PremiumFeatureCardOrder.TIER_2_LEADING;
    callback(outer1_2[14])(obj);
  };
  const items = [closure_6(analyticsLocations(4745).Button, obj), ];
  const intl4 = tmp7(1236).intl;
  const tmp3Result = importDefault(3079);
  const obj1 = { children: null };
  items[1] = closure_6(analyticsLocations(4745).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      callback();
      const result = analyticsLocations(outer1_2[16]).setNextFavoritesGuildViewSource("upsell_modal");
      const obj = analyticsLocations(outer1_2[16]);
      analyticsLocations(outer1_2[17]).transitionToGuild(outer1_5);
    }
  });
  obj1[0] = items;
  obj[3] = closure_7(analyticsLocations(6687).ButtonGroup, obj1);
  return closure_6(analyticsLocations(8017).PromoSheet, obj);
};
