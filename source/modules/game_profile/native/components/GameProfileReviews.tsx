// Module ID: 8636
// Function ID: 68422
// Name: SteamReviewRow
// Dependencies: [31, 27, 33, 4130, 689, 8597, 3827, 8637, 8638, 8600, 1212, 8609, 4126, 4164, 8639, 8645, 8605, 8606, 2]
// Exports: default

// Module 8636 (SteamReviewRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function SteamReviewRow(url) {
  let isRecentRating;
  let rating;
  let showBorderBottom;
  let title;
  let trackAction;
  url = url.url;
  ({ showBorderBottom, trackAction } = url);
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2Result = trackAction(8597)(trackAction(3827).openURL);
  const dependencyMap = tmp2Result;
  let obj = url(8637);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  let obj1 = url(8638);
  const items = [tmp2Result, url, trackAction];
  const steamReviewScoreDescriptionColor = obj1.getSteamReviewScoreDescriptionColor(result);
  obj = {
    onPress: React.useCallback(() => {
      trackAction(url(tmp2Result[9]).GameProfileTrackActionActions.SteamReviews);
      tmp2Result(url);
    }, items),
    accessibilityRole: "link"
  };
  const intl = url(1212).intl;
  obj.accessibilityLabel = intl.string(url(1212).t.YNC5Di);
  const items1 = [tmp.reviewRow, ];
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  obj.style = items1;
  obj = { style: tmp.steamNameContainer };
  obj1 = { size: "sm", color: trackAction(689).colors.ICON_STRONG };
  const items2 = [callback(url(8609).SteamNeutralIcon, obj1), ];
  const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title };
  items2[1] = callback(url(4126).Text, obj2);
  obj.children = items2;
  const items3 = [callback2(closure_4, obj), ];
  const obj3 = { style: tmp.steamRatingContainer };
  const obj4 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor };
  const tmp2 = trackAction(8597);
  const tmp6 = callback2;
  const tmp7 = closure_5;
  const tmp8 = callback2;
  const tmp9 = closure_4;
  obj4.children = url(8638).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [callback(url(4126).Text, obj4), ];
  let tmp10 = null != ratingCount;
  if (tmp10) {
    tmp10 = result !== url(4164).SteamReviewScoreDescription.NO_USER_REVIEWS;
  }
  if (tmp10) {
    const obj5 = { variant: "text-sm/medium", color: "text-subtle" };
    const intl2 = url(1212).intl;
    const obj6 = { rating_count: ratingCount.toLocaleString() };
    obj5.children = intl2.format(url(1212).t.sgIoin, obj6).toString();
    tmp10 = callback(url(4126).Text, obj5);
    const str = intl2.format(url(1212).t.sgIoin, obj6);
  }
  items4[1] = tmp10;
  obj3.children = items4;
  items3[1] = tmp8(tmp9, obj3);
  obj.children = items3;
  return tmp6(tmp7, obj);
}
function OpenCriticReview(url) {
  let backgroundColor;
  let foregroundColor;
  let tier;
  let topCriticRating;
  url = url.url;
  const trackAction = url.trackAction;
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  const reviews = url.game.reviews;
  let opencritic;
  if (null != reviews) {
    opencritic = reviews.opencritic;
  }
  if (null == opencritic) {
    let obj = { topCriticRating: undefined, topCriticRatingCount: undefined, tier: undefined };
    opencritic = obj;
  }
  ({ tier, topCriticRating } = opencritic);
  let num = -1;
  let num2 = -1;
  if (null != topCriticRating) {
    num2 = topCriticRating;
  }
  const topCriticRatingCount = opencritic.topCriticRatingCount;
  if (null != topCriticRatingCount) {
    num = topCriticRatingCount;
  }
  const tmp3Result = trackAction(8597)(trackAction(3827).openURL);
  dependencyMap = tmp3Result;
  const items = [tmp3Result, url, trackAction];
  let str = "";
  const callback = React.useCallback(() => {
    trackAction(url(_undefined[9]).GameProfileTrackActionActions.OpenCriticReviews);
    _undefined(url);
  }, items);
  if (null != tier) {
    let obj1 = url(8639);
    str = obj1.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    let obj3 = url(8639);
    let openCriticCircleRatingColor = obj3.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  obj = { onPress: callback, accessibilityRole: "link" };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1212).intl;
  obj.accessibilityLabel = intl.string(url(1212).t.aLNBAw);
  obj.style = tmp.reviewRow;
  obj = { variant: "heading-sm/medium", color: "mobile-text-heading-primary" };
  const intl2 = url(1212).intl;
  obj.children = intl2.string(url(1212).t["UxvER+"]);
  const items1 = [callback(url(4126).Text, obj), ];
  obj1 = { style: tmp.opencriticRightContainer };
  let tmp14 = null;
  if (null != tier) {
    const obj2 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image" };
    obj3 = {};
    const obj4 = {};
    let obj10 = url(8639);
    obj4.uri = obj10.getOpenCriticTierImage(tier);
    obj3.source = obj4;
    obj3.style = tmp.opencriticTopCriticImage;
    obj3.accessible = true;
    obj3.accessibilityLabel = str;
    obj2.children = callback(closure_6, obj3);
    tmp14 = callback(closure_4, obj2);
  }
  const items2 = [tmp14, , ];
  let tmp21 = null;
  if (null != tier) {
    tmp21 = null;
    if (num2 > 0) {
      tmp21 = null;
      if (num > 0) {
        const obj5 = {};
        const items3 = [tmp.opencriticTopCriticContainer, ];
        const obj6 = { backgroundColor };
        items3[1] = obj6;
        obj5.style = items3;
        const intl3 = url(1212).intl;
        obj5.accessibilityLabel = intl3.string(url(1212).t.Ub4YR1);
        obj5.accessibilityRole = "image";
        const obj7 = { rating: num2, strokeColor: foregroundColor, size: 32 };
        const items4 = [callback(trackAction(8645), obj7), ];
        const obj8 = { style: tmp.opencriticTopCriticRatingContainer };
        const obj9 = { variant: "text-xs/bold", color: "text-overlay-light" };
        const _Math = Math;
        obj9.children = Math.floor(num2);
        obj8.children = callback(url(4126).Text, obj9);
        items4[1] = callback(closure_4, obj8);
        obj5.children = items4;
        tmp21 = callback2(closure_4, obj5);
      }
    }
  }
  items2[1] = tmp21;
  if (num2 <= 0) {
    let tmp32 = null;
    if (null == tier) {
      obj10 = { variant: "text-xs/medium", color: url(8638).getSteamReviewScoreDescriptionColor(url(4164).SteamReviewScoreDescription.NO_USER_REVIEWS) };
      const intl4 = url(1212).intl;
      obj10.children = intl4.string(url(1212).t["0xYzpO"]);
      tmp32 = callback(url(4126).Text, obj10);
      const obj18 = url(8638);
    }
  } else {
    tmp32 = null;
  }
  items2[2] = tmp32;
  obj1.children = items2;
  items1[1] = callback2(closure_4, obj1);
  obj.children = items1;
  return callback2(closure_5, obj);
}
({ View: closure_4, Pressable: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.reviewContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden" };
let obj3 = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.reviewRow = obj3;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, overflow: "hidden" };
_createForOfIteratorHelperLoose.reviewRowNotLast = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.steamNameContainer = obj5;
let obj6 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_32, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.steamRatingContainer = obj6;
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.opencriticRightContainer = obj7;
let obj8 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.opencriticTopCriticContainer = obj8;
_createForOfIteratorHelperLoose.opencriticTopCriticImage = { width: 32, height: 32 };
_createForOfIteratorHelperLoose.opencriticTopCriticRatingContainer = { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8605) /* buildSteamStoreUrl */;
  let id;
  if (null != game) {
    id = game.id;
  }
  const steamWebsiteUrl = obj.useSteamWebsiteUrl(id);
  if (null != game) {
    const opencriticUrl = game.opencriticUrl;
  }
  if (null == game) {
    return null;
  } else {
    const tmp4 = game.steamReleaseStatus !== require(8606) /* SteamReleaseStatus */.SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (null != reviews) {
      steam = reviews.steam;
    }
    const calculateSteamReviewScoreDescription = require(8637) /* calculateSteamReviewScoreDescription */.calculateSteamReviewScoreDescription;
    if (null != steam) {
      let recentRating = steam.recentRating;
    }
    if (null != steam) {
      let recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = tmp4;
    if (tmp4) {
      tmp10 = tmp9 !== require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    let obj1 = require(8638) /* getSteamReviewScoreDescriptionColor */;
    const result = obj1.canShowLocalizedSteamReview(steam);
    if (result) {
      let localizedRating;
      if (!tmp16) {
        localizedRating = steam.localizedRating;
      }
      let rating = localizedRating;
    } else if (!tmp16) {
      rating = steam.rating;
    }
    if (result) {
      let localizedRatingCount;
      if (!tmp18) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      let ratingCount = localizedRatingCount;
    } else if (!tmp18) {
      ratingCount = steam.ratingCount;
    }
    const t = require(1212) /* getSystemLocale */.t;
    const reviews2 = game.reviews;
    let opencritic;
    if (null != reviews2) {
      opencritic = reviews2.opencritic;
    }
    if (!tmp4) {
      if (!tmp10) {
        let tmp26Result = null;
      }
      return tmp26Result;
    }
    obj = { style: tmp.container };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.GaAQXP);
    const items = [callback(require(4126) /* Text */.Text, obj), ];
    obj1 = { style: tmp.reviewContainer };
    let tmp34Result = null;
    if (tmp10) {
      tmp34Result = null;
      if (null != steamWebsiteUrl) {
        const obj2 = { url: steamWebsiteUrl };
        let tmp36 = tmp4;
        if (!tmp4) {
          tmp36 = tmp24;
        }
        obj2.showBorderBottom = tmp36;
        obj2.trackAction = trackAction;
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj2.title = intl2.string(require(1212) /* getSystemLocale */.t.MQGNsN);
        recentRating = undefined;
        if (null != steam) {
          recentRating = steam.recentRating;
        }
        obj2.rating = recentRating;
        recentRatingCount = undefined;
        if (null != steam) {
          recentRatingCount = steam.recentRatingCount;
        }
        obj2.ratingCount = recentRatingCount;
        obj2.isRecentRating = true;
        tmp34Result = callback(SteamReviewRow, obj2);
        const tmp34 = callback;
        const tmp35 = SteamReviewRow;
      }
    }
    const items1 = [tmp34Result, , ];
    let tmp41 = null;
    if (tmp4) {
      tmp41 = null;
      if (null != steamWebsiteUrl) {
        const obj3 = { url: steamWebsiteUrl, showBorderBottom: tmp24, trackAction };
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj3.title = intl3.string(tmp22);
        obj3.rating = rating;
        obj3.ratingCount = ratingCount;
        obj3.isRecentRating = false;
        tmp41 = callback(SteamReviewRow, obj3);
      }
    }
    items1[1] = tmp41;
    let tmp46 = null;
    if (null != opencritic && null != opencriticUrl) {
      tmp46 = null;
      if (null != opencriticUrl) {
        const obj4 = { game, url: opencriticUrl, trackAction };
        tmp46 = callback(OpenCriticReview, obj4);
      }
    }
    items1[2] = tmp46;
    obj1.children = items1;
    items[1] = closure_8(closure_4, obj1);
    obj.children = items;
    tmp26Result = closure_8(closure_4, obj);
    tmp22 = result ? t["aWb+V4"] : t["8e4LiB"];
    const tmp26 = closure_8;
    const tmp27 = closure_4;
    const tmp31 = closure_8;
    const tmp32 = closure_4;
    const tmp8 = require(8637) /* calculateSteamReviewScoreDescription */;
  }
};
