// Module ID: 10849
// Function ID: 10850
// Name: FavoritesGuildUpsellSheet
// Dependencies: [19, 4836, 1087, 21, 558, 576, 10847, 10850, 5210, 10848, 1128, 3412, 10851, 5244, 9792, 9793, 10855, 1114, 6696, 10856, 2]

// Module 10849 (FavoritesGuildUpsellSheet)
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import _modDef3412 from "module_3412" /* 3412 */;
import FavoritesConstants from "FavoritesConstants" /* 4836 */;
import openPremiumModalDefault from "openPremiumModal" /* 9792 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9793 */;
import useTrackFavoritesGuildUpsellModalOpenedDefault from "useTrackFavoritesGuildUpsellModalOpened" /* 10850 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10855 */;
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
    FREE_FAVORITE_LIMIT = tmp(10847).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = first(10850)().analyticsLocations;
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
    const intl = tmp(1128).intl;
    const stringResult = intl.string(first(3412).hINqUs);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== FREE_FAVORITE_LIMIT) {
    const intl2 = tmp(1128).intl;
    let obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
    const formatToPlainStringResult = intl2.formatToPlainString(first(3412).D7S0Zo, obj2);
    cResult[2] = FREE_FAVORITE_LIMIT;
    cResult[3] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_6(analyticsLocations(10851).FavoritesSpotIllustration, {});
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1128).intl;
    const stringResult1 = intl3.string(analyticsLocations(1128).t.pj0XBN);
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
    const tmp18 = closure_6(analyticsLocations(5244).Button, obj3);
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
      text: intl4.string(first(3412).PprSsy),
      onPress() {
          first();
          const obj = FavoritesGuildAnalytics;
          const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
          const obj2 = router_utils;
          obj2.transitionToGuild(FAVORITES);
        }
    };
    const Button = tmp(5244).Button;
    intl4 = tmp(1128).intl;
    const tmp21 = closure_6(Button, obj4);
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] !== tmp16) {
    const obj5 = { children: items };
    items = [tmp16, tmp19];
    const tmp24 = closure_7(analyticsLocations(6696).ButtonGroup, obj5);
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
  const tmp26 = closure_6(analyticsLocations(10856).PromoSheet, { title: tmp6, description: tmp8, illustration: tmp11, actions: tmp22 });
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
    FREE_FAVORITE_LIMIT = analyticsLocations(10847).FREE_FAVORITE_LIMIT;
  }
  analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault().analyticsLocations;
  importDefault = react.useCallback(() => {
    const obj = closure_1(dependencyMap[8]);
    obj.hideActionSheet(analyticsLocations(dependencyMap[9]).FAVORITES_UPSELL_SHEET_KEY);
  }, []);
  let obj = { title: intl.string(_modDef3412.hINqUs), description: intl2.formatToPlainString(_modDef3412.D7S0Zo, obj2), illustration: closure_6(analyticsLocations(10851).FavoritesSpotIllustration, {}), actions: closure_7(ButtonGroup, obj3) };
  const PromoSheet = analyticsLocations(10856).PromoSheet;
  intl = analyticsLocations(1128).intl;
  intl2 = analyticsLocations(1128).intl;
  obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
  obj3 = { children: items };
  ButtonGroup = analyticsLocations(6696).ButtonGroup;
  const obj4 = {
    size: "lg",
    variant: "primary",
    text: intl3.string(analyticsLocations(1128).t.pj0XBN),
    onPress() {
      closure_1();
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp2 = openPremiumModalDefault;
      tmp2(obj);
    }
  };
  const Button = analyticsLocations(5244).Button;
  intl3 = analyticsLocations(1128).intl;
  items = [closure_6(Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    text: intl4.string(_modDef3412.PprSsy),
    onPress() {
      closure_1();
      const obj = FavoritesGuildAnalytics;
      const result = obj.setNextFavoritesGuildViewSource("upsell_modal");
      const obj2 = router_utils;
      obj2.transitionToGuild(FAVORITES);
    }
  };
  const Button2 = analyticsLocations(5244).Button;
  intl4 = analyticsLocations(1128).intl;
  items[1] = closure_6(Button2, obj5);
  return closure_6(PromoSheet, obj);
});
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default tmp3;
