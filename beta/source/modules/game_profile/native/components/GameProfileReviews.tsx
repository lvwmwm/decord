// Module ID: 8182
// Function ID: 8183
// Name: GameProfileReviews
// Dependencies: [19, 17, 21, 4836, 576, 4550, 8136, 4525, 8183, 8184, 8139, 1115, 8147, 4832, 2020, 8185, 8191, 8143, 8144, 2]
// Exports: default

// Module 8182 (GameProfileReviews)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2020 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import useSteamWebsiteUrl2 from "useSteamWebsiteUrl" /* 8143 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8144 */;
import calculateSteamReviewScoreDescription2 from "calculateSteamReviewScoreDescription" /* 8183 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 8184 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
function SteamReviewRow(url) {
  let closure_2;
  let intl;
  let isRecentRating;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let rating;
  let showBorderBottom;
  let str;
  let title;
  let tmp2Result;
  let trackAction;
  url = url.url;
  ({ showBorderBottom, trackAction } = url);
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_9();
  const alwaysShowLinkDecorations = react.useContext(url(4550).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp5 = trackAction(8136);
  const tmp5Result = tmp5(trackAction(4525).openURL);
  dependencyMap = tmp5Result;
  const obj = url(8183);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const items = [tmp5Result, url, trackAction];
  const obj2 = url(8184);
  const steamReviewScoreDescriptionColor = obj2.getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: react.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: intl.string(url(1115).t.YNC5Di),
    style: items1,
    children: items3
  };
  intl = url(1115).intl;
  items1 = [tmp.reviewRow, ];
  const tmp10 = closure_5;
  const tmp4 = trackAction;
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  const obj4 = { style: tmp.steamNameContainer, children: items2 };
  const obj5 = { size: "sm", color: tmp4(576).colors.ICON_STRONG };
  const SteamNeutralIcon = tmp2(8147).SteamNeutralIcon;
  items2 = [closure_7(SteamNeutralIcon, obj5), closure_7(tmp2(4832).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  items3 = [closure_8(closure_4, obj4), ];
  const obj6 = { style: tmp.steamRatingContainer, children: items5 };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, lineClamp: 1, style: items4, children: tmp2Result.getSteamReviewScoreDescriptionIntl(result) };
  items4 = [tmp.steamScoreDescription, ];
  let linkText;
  const Text = tmp2(4832).Text;
  const tmp11 = closure_4;
  if (alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items4[1] = linkText;
  tmp2Result = url(8184);
  items5 = [closure_7(Text, obj7), ];
  let tmp12Result = null != ratingCount && result !== tmp2(2020).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp12Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: str.toString() };
    const Text2 = tmp2(4832).Text;
    const intl2 = tmp2(1115).intl;
    const format = intl2.format;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    const sgIoin = tmp2(1115).t.sgIoin;
    str = format(sgIoin, obj9);
    tmp12Result = tmp12(Text2, obj8);
  }
  items5[1] = tmp12Result;
  items3[1] = closure_8(tmp11, obj6);
  return closure_8(tmp10, obj3);
}
function OpenCriticReview(url) {
  let Text2;
  let backgroundColor;
  let closure_2;
  let foregroundColor;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj7;
  let obj8;
  let openCriticCircleRatingColor;
  let tier;
  let tmp11Result;
  let tmp11Result2;
  let tmp12Result2;
  let topCriticRating;
  url = url.url;
  const trackAction = url.trackAction;
  dependencyMap = undefined;
  const game = url.game;
  const tmp = closure_9();
  const reviews = game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "Array", topCriticRatingCount: "add", tier: "ao" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4 = trackAction(8136);
  const tmp4Result = tmp4(trackAction(4525).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = react.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  const tmp2 = trackAction;
  if (null != tier) {
    const obj2 = url(8185);
    str = obj2.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    const obj4 = url(8185);
    openCriticCircleRatingColor = obj4.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: intl.string(url(1115).t.aLNBAw), style: tmp.reviewRow, children: items1 };
  intl = url(1115).intl;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: intl2.string(url(1115).t["UxvER+"]) };
  const Text = url(4832).Text;
  intl2 = url(1115).intl;
  items1 = [closure_7(Text, obj3), ];
  let tmp12Result = null;
  const obj5 = { style: tmp.opencriticRightContainer, children: items2 };
  const tmp10 = closure_5;
  if (null != tier) {
    const obj6 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: closure_7(closure_6, obj7) };
    obj7 = { source: obj8, style: tmp.opencriticTopCriticImage, accessible: true, accessibilityLabel: str };
    obj8 = { uri: tmp11Result.getOpenCriticTierImage(tier) };
    tmp11Result = url(8185);
    tmp12Result = tmp12(tmp13, obj6);
  }
  items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: items3, accessibilityLabel: intl3.string(url(1115).t.Ub4YR1), accessibilityRole: "image", children: items4 };
        items3 = [tmp.opencriticTopCriticContainer, ];
        const obj10 = { backgroundColor };
        items3[1] = obj10;
        intl3 = tmp11(1115).intl;
        const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size: 32 };
        items4 = [closure_7(tmp2(8191), obj11), ];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: closure_7(Text2, obj13) };
        const _Math = Math;
        obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: Math.floor(topCriticRating) };
        Text2 = tmp11(4832).Text;
        items4[1] = closure_7(closure_4, obj12);
        tmp9Result = tmp9(tmp13, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    tmp12Result2 = null;
    if (null == tier) {
      const obj14 = { variant: "text-xs/medium", color: tmp11Result2.getSteamReviewScoreDescriptionColor(url(2020).SteamReviewScoreDescription.NO_USER_REVIEWS), children: intl4.string(url(1115).t["0xYzpO"]) };
      const Text3 = tmp11(4832).Text;
      tmp11Result2 = url(8184);
      intl4 = tmp11(1115).intl;
      tmp12Result2 = tmp12(Text3, obj14);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  items1[1] = closure_8(closure_4, obj5);
  return closure_8(tmp10, obj);
}
({ View: closure_4, Pressable: hasOwnProperty, Image: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerText: obj3, reviewContainer: obj4, reviewRow: obj5, reviewRowNotLast: obj6, steamNameContainer: obj7, steamRatingContainer: obj8, steamScoreDescription: { flexShrink: 1 }, opencriticRightContainer: obj9, opencriticTopCriticContainer: size, opencriticTopCriticImage: { width: 32, height: 32 }, opencriticTopCriticRatingContainer: { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }, linkText: { textDecorationLine: "underline" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj5 = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj6 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  let game;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let opencriticUrl;
  let recentRating1;
  let recentRatingCount1;
  let tmp26;
  let trackAction;
  ({ game, trackAction } = arg0);
  const tmp = closure_9();
  let id;
  const useSteamWebsiteUrl = useSteamWebsiteUrl2.useSteamWebsiteUrl;
  useSteamWebsiteUrl2;
  if (game != null) {
    id = game.id;
  }
  const steamWebsiteUrl = useSteamWebsiteUrl(id);
  if (game != null) {
    opencriticUrl = game.opencriticUrl;
  }
  if (null == game) {
    return null;
  } else {
    let rating;
    let ratingCount;
    const tmp7 = game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    const calculateSteamReviewScoreDescription = calculateSteamReviewScoreDescription2.calculateSteamReviewScoreDescription;
    calculateSteamReviewScoreDescription2;
    if (steam != null) {
      const recentRating = steam.recentRating;
    }
    if (steam != null) {
      const recentRatingCount = steam.recentRatingCount;
    }
    const tmp11 = tmp7 && tmp10 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    const tmp2Result2 = GameProfileReviewUtils;
    const result = tmp2Result2.canShowLocalizedSteamReview(steam);
    if (result) {
      let localizedRating;
      if (steam != null) {
        localizedRating = steam.localizedRating;
      }
      rating = localizedRating;
    } else if (steam != null) {
      rating = steam.rating;
    }
    if (result) {
      let localizedRatingCount;
      if (steam != null) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      ratingCount = localizedRatingCount;
    } else if (steam != null) {
      ratingCount = steam.ratingCount;
    }
    const t = tmp2(1115).t;
    const reviews2 = game.reviews;
    let opencritic;
    const tmp17 = result ? t["aWb+V4"] : t["8e4LiB"];
    if (reviews2 != null) {
      opencritic = reviews2.opencritic;
    }
    if (!tmp7) {
      let tmp21Result;
      if (!tmp11) {
        tmp21Result = null;
      }
      return tmp21Result;
    }
    const obj = { style: tmp.container, children: items };
    const obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(intl5.t.GaAQXP) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items = [metroImportDefault(Text, obj2), ];
    let tmp23Result = null;
    const obj3 = { style: tmp.reviewContainer, children: items1 };
    if (tmp11) {
      tmp23Result = null;
      if (null != steamWebsiteUrl) {
        const obj4 = { url: steamWebsiteUrl, showBorderBottom: tmp26, trackAction, title: intl2.string(intl5.t.MQGNsN), rating: recentRating1, ratingCount: recentRatingCount1, isRecentRating: true };
        tmp26 = tmp7;
        const tmp25 = SteamReviewRow;
        if (!tmp7) {
          tmp26 = tmp19;
        }
        intl2 = tmp2(1115).intl;
        recentRating1 = undefined;
        if (steam != null) {
          recentRating1 = steam.recentRating;
        }
        recentRatingCount1 = undefined;
        if (steam != null) {
          recentRatingCount1 = steam.recentRatingCount;
        }
        tmp23Result = tmp23(tmp25, obj4);
      }
    }
    items1 = [tmp23Result, , ];
    let tmp23Result3 = null;
    if (tmp7) {
      tmp23Result3 = null;
      if (null != steamWebsiteUrl) {
        const obj5 = { url: steamWebsiteUrl, showBorderBottom: null != opencritic && null != opencriticUrl, trackAction, title: intl3.string(tmp17), rating, ratingCount, isRecentRating: false };
        intl3 = tmp2(1115).intl;
        tmp23Result3 = tmp23(SteamReviewRow, obj5);
      }
    }
    items1[1] = tmp23Result3;
    let tmp23Result4 = null;
    if (null != opencritic && null != opencriticUrl) {
      tmp23Result4 = null;
      if (null != opencriticUrl) {
        const obj6 = { game, url: opencriticUrl, trackAction };
        tmp23Result4 = tmp23(OpenCriticReview, obj6);
      }
    }
    items1[2] = tmp23Result4;
    items[1] = metroImportAll(React3, obj3);
    tmp21Result = tmp21(tmp22, obj);
  }
};
