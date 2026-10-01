// Module ID: 9689
// Function ID: 9690
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 2058, 1074, 21, 9686, 9690, 4800, 9688, 9691, 1115, 3361, 9694, 5745, 5281, 8695, 8663, 9696, 1101, 2]
// Exports: default

// Module 9689 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import _modDef3361 from "module_3361" /* 3361 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 9690 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 9696 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const FAVORITES = Constants.FAVORITES;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default function FavoritesGuildUpsellSheet(limit) {
  let ButtonGroup;
  let analyticsLocations;
  let closure_1;
  let formatToPlainStringResult;
  let intl3;
  let obj4;
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    let tmp2 = dependencyMap;
    FREE_FAVORITE_LIMIT = analyticsLocations(9686).FREE_FAVORITE_LIMIT;
  }
  let str = limit.source;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let str2 = limit.variant;
  if (str2 === undefined) {
    str2 = "no_access";
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault(str).analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[6]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[7]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  const PromoSheet = analyticsLocations(9691).PromoSheet;
  const intl = analyticsLocations(1115).intl;
  const string = intl.string;
  const tmp8 = _modDef3361;
  let obj = { title: string(tmp5 ? tmp8.hINqUs : tmp8.aA0vO8), description: formatToPlainStringResult, illustration: closure_6(analyticsLocations(9694).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj4) };
  const intl2 = tmp7(1115).intl;
  if ("limit_reached" === str2) {
    let obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(3361).D7S0Zo, obj2);
  } else {
    formatToPlainStringResult = intl2.string(tmp3(3361)["WaP/lz"]);
  }
  ButtonGroup = tmp7(5745).ButtonGroup;
  const obj3 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1115).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = tmp7(5281).Button;
  intl3 = tmp7(1115).intl;
  const items = [closure_6(Button, obj3), ];
  const Button2 = tmp7(5281).Button;
  const intl4 = tmp7(1115).intl;
  const string2 = intl4.string;
  const tmp3Result = _modDef3361;
  obj4 = { children: items };
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: string2("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
};
