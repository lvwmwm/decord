// Module ID: 9388
// Function ID: 9389
// Name: GameProfileReviews
// Dependencies: [19, 17, 21, 5014, 575, 8013, 9389, 5028, 9323, 5709, 9391, 9392, 9340, 1113, 9348, 5624, 2035, 9394, 5717, 9400, 9344, 9401, 2]
// Exports: default

// Module 9388 (GameProfileReviews)
import nativeDefault from "native" /* 575 */;
import react2 from "react" /* 5028 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8013 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 9323 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import GooglePlayNeutralIcon from "GooglePlayNeutralIcon" /* 9389 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
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
  let rating;
  let str;
  let title;
  let tmp2Result;
  url = url.url;
  const trackAction = url.trackAction;
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_8();
  const alwaysShowLinkDecorations = react.useContext(url(5028).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp4 = trackAction(9323);
  const tmp4Result = tmp4(trackAction(5709).openURL);
  dependencyMap = tmp4Result;
  const obj = url(9391);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const items = [tmp4Result, url, trackAction];
  const obj2 = url(9392);
  const steamReviewScoreDescriptionColor = obj2.getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: react.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: intl.string(url(1113).t.YNC5Di),
    style: tmp.reviewRow,
    children: items2
  };
  intl = url(1113).intl;
  const obj4 = { style: tmp.reviewNameContainer, children: items1 };
  const obj5 = { size: "sm", color: trackAction(575).colors.ICON_STRONG };
  const SteamNeutralIcon = url(9348).SteamNeutralIcon;
  items1 = [closure_6(SteamNeutralIcon, obj5), closure_6(url(5624).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  items2 = [closure_7(closure_4, obj4), ];
  const obj6 = { style: tmp.ratingContainer, children: items4 };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, lineClamp: 1, style: items3, children: tmp2Result.getSteamReviewScoreDescriptionIntl(result) };
  items3 = [tmp.ratingDescription, ];
  let linkText;
  const Text = url(5624).Text;
  const tmp10 = closure_4;
  const tmp9 = closure_5;
  if (alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  tmp2Result = url(9392);
  items4 = [closure_6(Text, obj7), ];
  let tmp11Result = null != ratingCount && result !== tmp2(2035).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp11Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: str.toString() };
    const Text2 = tmp2(5624).Text;
    const intl2 = tmp2(1113).intl;
    const format = intl2.format;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    const sgIoin = tmp2(1113).t.sgIoin;
    str = format(sgIoin, obj9);
    tmp11Result = tmp11(Text2, obj8);
  }
  items4[1] = tmp11Result;
  items2[1] = closure_7(tmp10, obj6);
  return closure_7(tmp9, obj3);
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
  let tmp2Result;
  let topCriticRating;
  url = url.url;
  const trackAction = url.trackAction;
  dependencyMap = undefined;
  const game = url.game;
  const tmp = closure_8();
  const reviews = game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "dispatch", topCriticRatingCount: "isArray", tier: "isArray" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4 = trackAction(9323);
  const tmp4Result = tmp4(trackAction(5709).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = react.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    const obj2 = url(9394);
    str = obj2.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    const obj4 = url(9394);
    openCriticCircleRatingColor = obj4.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: intl.string(url(1113).t.aLNBAw), style: tmp.reviewRow, children: items1 };
  intl = url(1113).intl;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: intl2.string(url(1113).t["UxvER+"]) };
  const Text = url(5624).Text;
  intl2 = url(1113).intl;
  items1 = [closure_6(Text, obj3), ];
  let tmp12Result = null;
  const obj5 = { style: tmp.opencriticRightContainer, children: items2 };
  const tmp10 = closure_5;
  if (null != tier) {
    const obj6 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: closure_6(tmp2Result, obj7) };
    obj7 = { source: obj8, style: tmp.opencriticTopCriticImage, accessible: true, accessibilityLabel: str };
    obj8 = { uri: tmp11Result.getOpenCriticTierImage(tier) };
    tmp2Result = trackAction(5717);
    tmp11Result = url(9394);
    tmp12Result = tmp12(tmp13, obj6);
  }
  items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: items3, accessibilityLabel: intl3.string(url(1113).t.Ub4YR1), accessibilityRole: "image", children: items4 };
        items3 = [tmp.opencriticTopCriticContainer, ];
        obj10 = { backgroundColor };
        items3[1] = obj10;
        intl3 = tmp11(1113).intl;
        const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size: 32 };
        items4 = [closure_6(tmp2(9400), obj11), ];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: closure_6(Text2, obj13) };
        const _Math = Math;
        obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: Math.floor(topCriticRating) };
        Text2 = tmp11(5624).Text;
        items4[1] = closure_6(closure_4, obj12);
        tmp9Result = tmp9(tmp13, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    tmp12Result2 = null;
    if (null == tier) {
      const obj14 = { variant: "text-xs/medium", color: tmp11Result2.getSteamReviewScoreDescriptionColor(url(2035).SteamReviewScoreDescription.NO_USER_REVIEWS), children: intl4.string(url(1113).t["0xYzpO"]) };
      const Text3 = tmp11(5624).Text;
      tmp11Result2 = url(9392);
      intl4 = tmp11(1113).intl;
      tmp12Result2 = tmp12(Text3, obj14);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  items1[1] = closure_7(closure_4, obj5);
  return closure_7(tmp10, obj);
}
function MobileStoreReviewRow(arg0) {
  let items1;
  let items2;
  let items4;
  let review;
  let trackAction;
  ({ review, trackAction } = arg0);
  const tmp = closure_8();
  const alwaysShowLinkDecorations = react.useContext(react2.AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp4 = useOpenExternalUrlFromGameProfileDefault;
  const tmp4Result = tmp4(LinkingDefault.openURL);
  let closure_1 = tmp4Result;
  const action = review.action;
  const url = review.url;
  const items = [action, tmp4Result, trackAction, url];
  const tmp6 = obj10[review.key];
  const obj2 = { style: tmp.reviewNameContainer, children: items1 };
  items1 = [, ];
  const obj = {
    onPress: react.useCallback(() => {
      trackAction(action);
      closure_1(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: review.accessibilityLabel,
    style: tmp.reviewRow,
    children: items2
  };
  const obj3 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
  items1[0] = metroRequire(tmp6, obj3);
  const obj4 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: review.title };
  items1[1] = metroRequire(Text_Text.Text, obj4);
  items2 = [metroImportDefault(React3, obj2), ];
  const items3 = [tmp.ratingDescription, ];
  let linkText;
  const obj5 = { style: tmp.ratingContainer, children: items4 };
  const Text = Text_Text.Text;
  const tmp8 = hasOwnProperty;
  const tmp9 = React3;
  if (alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  const obj6 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: items3, children: review.ratingText };
  items3[1] = linkText;
  items4 = [metroRequire(Text, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: review.ratingCountText };
  items4[1] = metroRequire(Text_Text.Text, obj7);
  items2[1] = metroImportDefault(tmp9, obj5);
  return metroImportDefault(tmp8, obj);
}
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerText: obj3, reviewContainer: obj4, reviewRowContainer: { height: 56 }, reviewRowContainerNotLast: obj5, reviewRow: obj6, reviewNameContainer: obj7, ratingContainer: obj8, ratingDescription: { flexShrink: 1 }, opencriticRightContainer: obj9, opencriticTopCriticContainer: size, opencriticTopCriticImage: { width: 32, height: 32 }, opencriticTopCriticRatingContainer: { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }, linkText: { textDecorationLine: "underline" } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj6 = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let closure_8 = createStyles(obj);
let obj10 = { appStore: AppleNeutralIcon.AppleNeutralIcon, googlePlay: GooglePlayNeutralIcon.GooglePlayNeutralIcon };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  let closure_0;
  let game;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let mobileStoreReviews;
  let obj11;
  let obj7;
  let primarySteamRating;
  let primarySteamRatingCount;
  let primarySteamTitleKey;
  let recentRating;
  let recentRatingCount;
  let showRecentSteamReview;
  let showSteamReview;
  let steamReview;
  let trackAction;
  ({ game, trackAction } = arg0);
  let tmp = closure_8();
  _require = tmp;
  let tmp2 = _require;
  const obj = require("useSteamWebsiteUrl");
  const steamWebsiteUrl = obj.useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj2 = require("useGameProfileReviewDisplayData");
  const gameProfileReviewDisplayData = obj2.useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  ({ steamReview, showSteamReview, showRecentSteamReview, mobileStoreReviews, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  const obj3 = require("GameProfileReviewUtils");
  let result = obj3.canShowOpenCriticReview(game, mobileStoreReviews);
  const items = [];
  if (showRecentSteamReview) {
    showRecentSteamReview = null != steamWebsiteUrl;
  }
  if (showRecentSteamReview) {
    const push = items.push;
    const obj4 = { url: steamWebsiteUrl, trackAction, title: intl.string(tmp2(1113).t.MQGNsN), rating: recentRating, ratingCount: recentRatingCount, isRecentRating: true };
    intl = tmp2(1113).intl;
    recentRating = undefined;
    const tmp8 = closure_6;
    const tmp9 = SteamReviewRow;
    if (steamReview != null) {
      recentRating = steamReview.recentRating;
    }
    recentRatingCount = undefined;
    if (steamReview != null) {
      recentRatingCount = steamReview.recentRatingCount;
    }
    const obj5 = { key: "steam-recent", row: tmp8(tmp9, obj4) };
    push(obj5);
  }
  if (showSteamReview) {
    showSteamReview = null != steamWebsiteUrl;
  }
  if (showSteamReview) {
    const obj6 = { key: "steam-primary", row: closure_6(SteamReviewRow, obj7) };
    const push2 = items.push;
    obj7 = { url: steamWebsiteUrl, trackAction, title: intl2.string(primarySteamTitleKey), rating: primarySteamRating, ratingCount: primarySteamRatingCount, isRecentRating: false };
    intl2 = tmp2(1113).intl;
    push2(obj6);
  }
  for (const item10068 of mobileStoreReviews) {
    let obj8 = { key: item10068.key, row: closure_6(MobileStoreReviewRow, obj9) };
    let obj9 = { review: item10068, trackAction };
    let push3 = items.push;
    let push3Result = push3(obj8);
    continue;
  }
  if (result) {
    result = null != opencriticUrl;
  }
  if (result) {
    obj10 = { key: "opencritic", row: closure_6(OpenCriticReview, obj11) };
    const push4 = items.push;
    obj11 = { game, url: opencriticUrl, trackAction };
    push4(obj10);
  }
  let tmp25 = null;
  if (0 !== items.length) {
    const obj12 = { style: tmp.container, children: items1 };
    const obj13 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl3.string(require("intl").t.GaAQXP) };
    const Text = require("Text/Text").Text;
    intl3 = require("intl").intl;
    items1 = [closure_6(Text, obj13), ];
    const obj14 = {
      style: tmp.reviewContainer,
      children: items.map((item, index) => {
          let key;
          let row;
          const style = [closure_0.reviewRowContainer, ];
          let reviewRowContainerNotLast = index < items.length - 1;
          ({ key, row } = item);
          const tmp = metroRequire;
          const tmp2 = React3;
          if (reviewRowContainerNotLast) {
            reviewRowContainerNotLast = closure_0.reviewRowContainerNotLast;
          }
          style[1] = reviewRowContainerNotLast;
          return tmp(tmp2, { style, children }, key);
        })
    };
    items1[1] = closure_6(closure_4, obj14);
    tmp25 = closure_7(closure_4, obj12);
  }
  return tmp25;
};
