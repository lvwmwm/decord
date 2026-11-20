// Module ID: 11103
// Function ID: 11104
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 4656, 1071, 21, 11101, 11104, 5008, 11102, 11105, 1112, 3703, 11106, 6426, 5392, 8979, 10385, 11110, 1098, 2]
// Exports: default

// Module 11103 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import _modDef3703 from "module_3703" /* 3703 */;
import FavoritesConstants from "FavoritesConstants" /* 4656 */;
import openPremiumModalDefault from "openPremiumModal" /* 8979 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10385 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 11104 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 11110 */;
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
    FREE_FAVORITE_LIMIT = analyticsLocations(11101).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[6]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[7]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: intl.string(_modDef3703.hINqUs), description: intl2.formatToPlainString(_modDef3703.D7S0Zo, obj2), illustration: closure_6(analyticsLocations(11106).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj3) };
  const PromoSheet = analyticsLocations(11105).PromoSheet;
  intl = analyticsLocations(1112).intl;
  intl2 = analyticsLocations(1112).intl;
  obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
  obj3 = { children: items };
  ButtonGroup = analyticsLocations(6426).ButtonGroup;
  const obj4 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1112).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = analyticsLocations(5392).Button;
  intl3 = analyticsLocations(1112).intl;
  items = [closure_6(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: intl4.string(_modDef3703.PprSsy),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  const Button2 = analyticsLocations(5392).Button;
  intl4 = analyticsLocations(1112).intl;
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
};
