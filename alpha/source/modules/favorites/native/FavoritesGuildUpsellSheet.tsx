// Module ID: 10815
// Function ID: 10816
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 4871, 1072, 21, 10813, 10816, 5253, 10814, 10817, 1114, 3447, 10818, 6761, 5629, 9884, 9885, 10822, 1100, 2]
// Exports: default

// Module 10815 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import _modDef3447 from "module_3447" /* 3447 */;
import FavoritesConstants from "FavoritesConstants" /* 4871 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10816 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10822 */;
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
    FREE_FAVORITE_LIMIT = analyticsLocations(10813).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[6]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[7]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: intl.string(_modDef3447.hINqUs), description: intl2.formatToPlainString(_modDef3447.D7S0Zo, obj2), illustration: closure_6(analyticsLocations(10818).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj3) };
  const PromoSheet = analyticsLocations(10817).PromoSheet;
  intl = analyticsLocations(1114).intl;
  intl2 = analyticsLocations(1114).intl;
  obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
  obj3 = { children: items };
  ButtonGroup = analyticsLocations(6761).ButtonGroup;
  const obj4 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1114).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = analyticsLocations(5629).Button;
  intl3 = analyticsLocations(1114).intl;
  items = [closure_6(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: intl4.string(_modDef3447.PprSsy),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  const Button2 = analyticsLocations(5629).Button;
  intl4 = analyticsLocations(1114).intl;
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
};
