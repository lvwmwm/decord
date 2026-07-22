// Module ID: 8629
// Function ID: 68382
// Name: SteamReviewRow
// Dependencies: []
// Exports: default

// Module 8629 (SteamReviewRow)
function SteamReviewRow(url) {
  let isRecentRating;
  let rating;
  let showBorderBottom;
  let title;
  let trackAction;
  url = url.url;
  const arg1 = url;
  ({ showBorderBottom, trackAction } = url);
  const importDefault = trackAction;
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = callback3();
  const tmp2Result = importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).openURL);
  const dependencyMap = tmp2Result;
  let obj = arg1(dependencyMap[7]);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  let obj1 = arg1(dependencyMap[8]);
  const items = [tmp2Result, url, trackAction];
  const steamReviewScoreDescriptionColor = obj1.getSteamReviewScoreDescriptionColor(result);
  obj = {
    onPress: React.useCallback(() => {
      trackAction(url(tmp2Result[9]).GameProfileTrackActionActions.SteamReviews);
      tmp2Result(url);
    }, items),
    accessibilityRole: "link"
  };
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.YNC5Di);
  const items1 = [tmp.reviewRow, ];
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  obj.style = items1;
  obj = { style: tmp.steamNameContainer };
  obj1 = { size: "sm", color: importDefault(dependencyMap[4]).colors.ICON_STRONG };
  const items2 = [callback(arg1(dependencyMap[11]).SteamNeutralIcon, obj1), callback(arg1(dependencyMap[12]).Text, { children: title })];
  obj.children = items2;
  const items3 = [callback2(closure_4, obj), ];
  const obj2 = { style: tmp.steamRatingContainer };
  const obj3 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor };
  const tmp2 = importDefault(dependencyMap[5]);
  const tmp6 = callback2;
  const tmp7 = closure_5;
  const tmp8 = callback2;
  const tmp9 = closure_4;
  obj3.children = arg1(dependencyMap[8]).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [callback(arg1(dependencyMap[12]).Text, obj3), ];
  let tmp10 = null != ratingCount;
  if (tmp10) {
    tmp10 = result !== arg1(dependencyMap[13]).SteamReviewScoreDescription.NO_USER_REVIEWS;
  }
  if (tmp10) {
    const obj4 = { cachedAt: true, edpbxy: true };
    const intl2 = arg1(dependencyMap[10]).intl;
    const obj5 = { rating_count: ratingCount.toLocaleString() };
    obj4.children = intl2.format(arg1(dependencyMap[10]).t.sgIoin, obj5).toString();
    tmp10 = callback(arg1(dependencyMap[12]).Text, obj4);
    const str = intl2.format(arg1(dependencyMap[10]).t.sgIoin, obj5);
  }
  items4[1] = tmp10;
  obj2.children = items4;
  items3[1] = tmp8(tmp9, obj2);
  obj.children = items3;
  return tmp6(tmp7, obj);
}
function OpenCriticReview(url) {
  let backgroundColor;
  let foregroundColor;
  let tier;
  let topCriticRating;
  url = url.url;
  const arg1 = url;
  const trackAction = url.trackAction;
  const importDefault = trackAction;
  let dependencyMap;
  const tmp = callback3();
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
  const tmp3Result = importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).openURL);
  dependencyMap = tmp3Result;
  const items = [tmp3Result, url, trackAction];
  let str = "";
  const callback = React.useCallback(() => {
    trackAction(url(tmp3Result[9]).GameProfileTrackActionActions.OpenCriticReviews);
    tmp3Result(url);
  }, items);
  if (null != tier) {
    let obj1 = arg1(dependencyMap[14]);
    str = obj1.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    let obj3 = arg1(dependencyMap[14]);
    let openCriticCircleRatingColor = obj3.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { "Bool(true)": "Normal", "Bool(true)": true };
  }
  obj = { onPress: callback, accessibilityRole: "link" };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.aLNBAw);
  obj.style = tmp.reviewRow;
  obj = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.children = intl2.string(arg1(dependencyMap[10]).t.UxvER+);
  const items1 = [callback(arg1(dependencyMap[12]).Text, obj), ];
  obj1 = { style: tmp.opencriticRightContainer };
  let tmp14 = null;
  if (null != tier) {
    const obj2 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image" };
    obj3 = {};
    const obj4 = {};
    let obj10 = arg1(dependencyMap[14]);
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
        const intl3 = arg1(dependencyMap[10]).intl;
        obj5.accessibilityLabel = intl3.string(arg1(dependencyMap[10]).t.Ub4YR1);
        obj5.accessibilityRole = "image";
        const obj7 = { rating: num2, strokeColor: foregroundColor, size: 32 };
        const items4 = [callback(importDefault(dependencyMap[15]), obj7), ];
        const obj8 = { style: tmp.opencriticTopCriticRatingContainer };
        const obj9 = { cachedAt: "absolute", edpbxy: -3 };
        const _Math = Math;
        obj9.children = Math.floor(num2);
        obj8.children = callback(arg1(dependencyMap[12]).Text, obj9);
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
      obj10 = { variant: "text-xs/medium", color: arg1(dependencyMap[8]).getSteamReviewScoreDescriptionColor(arg1(dependencyMap[13]).SteamReviewScoreDescription.NO_USER_REVIEWS) };
      const intl4 = arg1(dependencyMap[10]).intl;
      obj10.children = intl4.string(arg1(dependencyMap[10]).t.0xYzpO);
      tmp32 = callback(arg1(dependencyMap[12]).Text, obj10);
      const obj18 = arg1(dependencyMap[8]);
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
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Pressable: closure_5, Image: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.headerText = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8 };
obj.reviewContainer = { borderRadius: importDefault(dependencyMap[4]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, overflow: "hidden" };
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, overflow: "hidden" };
obj.reviewRow = { padding: importDefault(dependencyMap[4]).space.PX_12 };
const obj3 = { padding: importDefault(dependencyMap[4]).space.PX_12 };
obj.reviewRowNotLast = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
const obj5 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.steamNameContainer = obj5;
const obj4 = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.steamRatingContainer = { paddingLeft: importDefault(dependencyMap[4]).space.PX_32, gap: importDefault(dependencyMap[4]).space.PX_4 };
const obj7 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[4]).space.PX_12 };
obj.opencriticRightContainer = obj7;
const obj6 = { paddingLeft: importDefault(dependencyMap[4]).space.PX_32, gap: importDefault(dependencyMap[4]).space.PX_4 };
obj.opencriticTopCriticContainer = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.opencriticTopCriticImage = { "Null": true, "Null": true };
obj.opencriticTopCriticRatingContainer = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304209316664174, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011747791549251514, "Null": 9126805506, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001564950676549964, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000543230925073, "Null": 16381034594465807000000000000000000000000000000000000000000000000000000000000000000, "Null": true };
let closure_9 = obj.createStyles(obj);
const obj8 = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[16]);
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
    const tmp4 = game.steamReleaseStatus !== arg1(dependencyMap[17]).SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (null != reviews) {
      steam = reviews.steam;
    }
    const calculateSteamReviewScoreDescription = arg1(dependencyMap[7]).calculateSteamReviewScoreDescription;
    if (null != steam) {
      let recentRating = steam.recentRating;
    }
    if (null != steam) {
      let recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = tmp4;
    if (tmp4) {
      tmp10 = tmp9 !== arg1(dependencyMap[13]).SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    let obj1 = arg1(dependencyMap[8]);
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
    const t = arg1(dependencyMap[10]).t;
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
    obj = { cachedAt: "polite", edpbxy: "column", style: tmp.headerText };
    const intl = arg1(dependencyMap[10]).intl;
    obj.children = intl.string(arg1(dependencyMap[10]).t.GaAQXP);
    const items = [callback(arg1(dependencyMap[12]).Text, obj), ];
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
        const intl2 = arg1(dependencyMap[10]).intl;
        obj2.title = intl2.string(arg1(dependencyMap[10]).t.MQGNsN);
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
        const intl3 = arg1(dependencyMap[10]).intl;
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
    const tmp22 = result ? t.aWb+V4 : t.8e4LiB;
    const tmp26 = closure_8;
    const tmp27 = closure_4;
    const tmp31 = closure_8;
    const tmp32 = closure_4;
    const tmp8 = arg1(dependencyMap[7]);
  }
};
