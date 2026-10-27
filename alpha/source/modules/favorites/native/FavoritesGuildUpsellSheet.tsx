// Module ID: 10852
// Function ID: 10853
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 4837, 1084, 21, 558, 576, 10850, 10853, 5211, 10851, 1125, 3413, 10854, 5245, 9794, 9795, 10858, 1111, 6697, 10859, 2]

// Module 10852 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import _modDef3413 from "module_3413" /* 3413 */;
import FavoritesConstants from "FavoritesConstants" /* 4837 */;
import openPremiumModalDefault from "openPremiumModal" /* 9794 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9795 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10853 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10858 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const FAVORITES = Constants.FAVORITES;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildUpsellSheet(limit) {
  let analyticsLocations;
  let first;
  let intl4;
  let items;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp19;
  let tmp22;
  let tmp6;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = analyticsLocations(576);
  const cResult = obj.c(14);
  let FREE_FAVORITE_LIMIT = limit.limit;
  if (undefined === FREE_FAVORITE_LIMIT) {
    FREE_FAVORITE_LIMIT = tmp(10850).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = first(10853)().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = first(dependencyMap[8]);
      obj.hideActionSheet(analyticsLocations(dependencyMap[9]).FAVORITES_UPSELL_SHEET_KEY);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(first(3413).hINqUs);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== FREE_FAVORITE_LIMIT) {
    const intl2 = tmp(1125).intl;
    let obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    const formatToPlainStringResult = intl2.formatToPlainString(first(3413).D7S0Zo, obj2);
    cResult[2] = FREE_FAVORITE_LIMIT;
    cResult[3] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_6(analyticsLocations(10854).FavoritesSpotIllustration, {});
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1125).intl;
    const stringResult1 = intl3.string(analyticsLocations(1125).t.pj0XBN);
    cResult[5] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== analyticsLocations) {
    const obj3 = {
      size: "lg",
      variant: "primary",
      text: tmp14,
      onPress() {
          first();
          const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          const tmp2 = openPremiumModalDefault;
          tmp2(obj);
        }
    };
    const tmp18 = closure_6(analyticsLocations(5245).Button, obj3);
    cResult[6] = analyticsLocations;
    cResult[7] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {
      size: "lg",
      variant: "secondary",
      text: intl4.string(first(3413).PprSsy),
      onPress() {
          first();
          const obj = FavoritesGuildAnalytics;
          const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
          const obj2 = router_utils;
          obj2.transitionToGuild(FAVORITES);
        }
    };
    const Button = tmp(5245).Button;
    intl4 = tmp(1125).intl;
    const tmp21 = closure_6(Button, obj4);
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] !== tmp16) {
    const obj5 = { children: items };
    items = [tmp16, tmp19];
    const tmp24 = closure_7(analyticsLocations(6697).ButtonGroup, obj5);
    cResult[9] = tmp16;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === tmp8) {
    let tmp25;
    if (cResult[12] === tmp22) {
      tmp25 = cResult[13];
    }
    return tmp25;
  }
  const tmp26 = closure_6(analyticsLocations(10859).PromoSheet, { title: tmp6, description: tmp8, illustration: tmp11, actions: tmp22 });
  cResult[11] = tmp8;
  cResult[12] = tmp22;
  cResult[13] = tmp26;
  tmp25 = tmp26;
}) : (function FavoritesGuildUpsellSheet(limit) {
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
    FREE_FAVORITE_LIMIT = analyticsLocations(10850).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[8]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[9]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: intl.string(_modDef3413.hINqUs), description: intl2.formatToPlainString(_modDef3413.D7S0Zo, obj2), illustration: closure_6(analyticsLocations(10854).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj3) };
  const PromoSheet = analyticsLocations(10859).PromoSheet;
  intl = analyticsLocations(1125).intl;
  intl2 = analyticsLocations(1125).intl;
  obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
  obj3 = { children: items };
  ButtonGroup = analyticsLocations(6697).ButtonGroup;
  const obj4 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1125).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = analyticsLocations(5245).Button;
  intl3 = analyticsLocations(1125).intl;
  items = [closure_6(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: intl4.string(_modDef3413.PprSsy),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  const Button2 = analyticsLocations(5245).Button;
  intl4 = analyticsLocations(1125).intl;
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
});
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default tmp3;
