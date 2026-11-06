// Module ID: 10971
// Function ID: 10972
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 5032, 1072, 21, 10969, 10972, 5404, 10970, 10973, 1113, 3606, 10974, 6847, 5788, 10043, 10044, 10978, 1099, 2]
// Exports: default

// Module 10971 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef3606 from "module_3606" /* 3606 */;
import FavoritesConstants from "FavoritesConstants" /* 5032 */;
import openPremiumModalDefault from "openPremiumModal" /* 10043 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10044 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10972 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10978 */;
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
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj3;
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (FREE_FAVORITE_LIMIT === undefined) {
    let tmp2 = dependencyMap;
    FREE_FAVORITE_LIMIT = analyticsLocations(10969).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[6]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[7]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: intl.string(_modDef3606.hINqUs), description: intl2.formatToPlainString(_modDef3606.D7S0Zo, obj2), illustration: closure_6(analyticsLocations(10974).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj3) };
  const PromoSheet = analyticsLocations(10973).PromoSheet;
  intl = analyticsLocations(1113).intl;
  intl2 = analyticsLocations(1113).intl;
  obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
  obj3 = { children: items };
  ButtonGroup = analyticsLocations(6847).ButtonGroup;
  const obj4 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1113).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = analyticsLocations(5788).Button;
  intl3 = analyticsLocations(1113).intl;
  items = [closure_6(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: intl4.string(_modDef3606.PprSsy),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  const Button2 = analyticsLocations(5788).Button;
  intl4 = analyticsLocations(1113).intl;
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
};
