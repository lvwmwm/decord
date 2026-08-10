// Module ID: 9715
// Function ID: 9716
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 1410, 676, 21, 9712, 9716, 4271, 9714, 7733, 1236, 3030, 6274, 5150, 4714, 8622, 9717, 1222, 2]
// Exports: default

// Module 9715 (FavoritesGuildUpsellSheet)
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
    FREE_FAVORITE_LIMIT = analyticsLocations(9712).FREE_FAVORITE_LIMIT;
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
  analyticsLocations = importDefault(9716)(str).analyticsLocations;
  importDefault = React.useCallback(() => {
    callback(4271).hideActionSheet(analyticsLocations(9714).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const intl = analyticsLocations(1236).intl;
  const tmp8 = importDefault(3030);
  let obj = { title: intl.string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: null, illustration: null, actions: null };
  const intl2 = tmp7(1236).intl;
  if ("limit_reached" === str2) {
    obj = { count: null, maxCount: null };
    obj[0] = FREE_FAVORITE_LIMIT;
    obj[1] = MAX_FAVORITE_CHANNELS;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3030).D7S0Zo, obj);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3030)["WaP/lz"]);
  }
  obj[1] = formatToPlainStringResult;
  obj[2] = closure_6(analyticsLocations(6274).FavoritesSpotIllustration, {});
  obj = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = tmp7(1236).intl;
  obj[2] = intl3.string(analyticsLocations(1236).t.pj0XBN);
  obj[3] = function onPress() {
    callback();
    callback(outer1_2[14])({ analyticsLocations });
  };
  const items = [closure_6(analyticsLocations(4714).Button, obj), ];
  const intl4 = tmp7(1236).intl;
  const tmp3Result = importDefault(3030);
  const obj1 = { children: null };
  items[1] = closure_6(analyticsLocations(4714).Button, {
    size: "lg",
    variant: "secondary",
    text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      callback();
      const result = analyticsLocations(outer1_2[15]).setNextFavoritesGuildViewSource("upsell_modal");
      const obj = analyticsLocations(outer1_2[15]);
      analyticsLocations(outer1_2[16]).transitionToGuild(outer1_5);
    }
  });
  obj1[0] = items;
  obj[3] = closure_7(analyticsLocations(5150).ButtonGroup, obj1);
  return closure_6(analyticsLocations(7733).PromoSheet, obj);
};
