// Module ID: 9349
// Function ID: 9350
// Name: GameProfileReviews
// Dependencies: [19, 17, 21, 5003, 587, 7973, 9350, 558, 576, 5017, 9286, 5692, 9352, 9353, 9277, 1128, 9310, 5266, 2042, 9355, 5701, 9361, 9306, 9362, 9363, 2]

// Module 9349 (GameProfileReviews)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react3 from "react" /* 5017 */;
import Text_Text from "Text/Text" /* 5266 */;
import LinkingDefault from "Linking" /* 5692 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 7973 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9277 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 9286 */;
import GooglePlayNeutralIcon from "GooglePlayNeutralIcon" /* 9350 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 32;
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
let closure_9 = createStyles(obj);
let obj10 = { appStore: AppleNeutralIcon.AppleNeutralIcon, googlePlay: GooglePlayNeutralIcon.GooglePlayNeutralIcon };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SteamReviewRow(url) {
  let closure_2;
  let isRecentRating;
  let items;
  let items1;
  let items3;
  let num;
  let rating;
  let ratingCount;
  let str;
  let str2;
  let str6;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp8;
  let tmp9;
  const obj = url(576);
  const cResult = obj.c(65);
  url = url.url;
  const trackAction = url.trackAction;
  ({ title, rating, ratingCount, isRecentRating } = url);
  const tmp4 = closure_9();
  const alwaysShowLinkDecorations = react.useContext(url(5017).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp6 = trackAction(9286);
  const tmp6Result = tmp6(trackAction(5692).openURL);
  dependencyMap = tmp6Result;
  const tmp5 = trackAction;
  if (cResult[0] === alwaysShowLinkDecorations) {
    if (cResult[1] === isRecentRating) {
      if (cResult[2] === tmp6Result) {
        if (cResult[3] === rating) {
          if (cResult[4] === ratingCount) {
            if (cResult[5] === tmp4.linkText) {
              if (cResult[6] === tmp4.ratingContainer) {
                if (cResult[7] === tmp4.ratingDescription) {
                  if (cResult[8] === tmp4.reviewNameContainer) {
                    if (cResult[9] === tmp4.reviewRow) {
                      if (cResult[10] === title) {
                        if (cResult[11] === trackAction) {
                          if (cResult[12] === url) {
                            tmp8 = cResult[13];
                            tmp9 = cResult[14];
                            tmp10 = cResult[15];
                            tmp11 = cResult[16];
                            str = cResult[17];
                            tmp12 = cResult[18];
                            tmp13 = cResult[19];
                            tmp14 = cResult[20];
                            num = cResult[21];
                            tmp15 = cResult[22];
                            tmp16 = cResult[23];
                            tmp17 = cResult[24];
                            tmp18 = cResult[25];
                            str2 = cResult[26];
                            tmp19 = cResult[27];
                          }
                          if (cResult[42] === tmp8) {
                            if (cResult[43] === str) {
                              if (cResult[44] === tmp14) {
                                if (cResult[45] === num) {
                                  if (cResult[46] === tmp15) {
                                    let tmp41;
                                    if (cResult[47] === tmp16) {
                                      tmp41 = cResult[48];
                                    }
                                    if (cResult[49] === ratingCount) {
                                      let tmp44;
                                      if (cResult[50] === tmp11) {
                                        tmp44 = cResult[51];
                                      }
                                      if (cResult[52] === tmp9) {
                                        if (cResult[53] === tmp41) {
                                          if (cResult[54] === tmp44) {
                                            let tmp48;
                                            if (cResult[55] === tmp17) {
                                              tmp48 = cResult[56];
                                            }
                                            if (cResult[57] === tmp10) {
                                              if (cResult[58] === tmp12) {
                                                if (cResult[59] === tmp13) {
                                                  if (cResult[60] === tmp48) {
                                                    if (cResult[61] === tmp18) {
                                                      if (cResult[62] === str2) {
                                                        let tmp51;
                                                        if (cResult[63] === tmp19) {
                                                          tmp51 = cResult[64];
                                                        }
                                                        return tmp51;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj2 = { onPress: tmp18, accessibilityRole: str2, accessibilityLabel: tmp19, style: tmp12, children: items };
                                            items = [tmp13, tmp48];
                                            const tmp53 = closure_7(tmp10, obj2);
                                            cResult[57] = tmp10;
                                            cResult[58] = tmp12;
                                            cResult[59] = tmp13;
                                            cResult[60] = tmp48;
                                            cResult[61] = tmp18;
                                            cResult[62] = str2;
                                            cResult[63] = tmp19;
                                            cResult[64] = tmp53;
                                            tmp51 = tmp53;
                                          }
                                        }
                                      }
                                      const obj3 = { style: tmp17, children: items1 };
                                      items1 = [tmp41, tmp44];
                                      const tmp50 = closure_7(tmp9, obj3);
                                      cResult[52] = tmp9;
                                      cResult[53] = tmp41;
                                      cResult[54] = tmp44;
                                      cResult[55] = tmp17;
                                      cResult[56] = tmp50;
                                      tmp48 = tmp50;
                                    }
                                    let tmp46 = null != ratingCount && tmp11 !== tmp(2042).SteamReviewScoreDescription.NO_USER_REVIEWS;
                                    if (tmp46) {
                                      const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: str6.toString() };
                                      const Text2 = tmp(5266).Text;
                                      const intl2 = tmp(1128).intl;
                                      const format = intl2.format;
                                      const obj5 = { rating_count: ratingCount.toLocaleString() };
                                      const sgIoin = tmp(1128).t.sgIoin;
                                      str6 = format(sgIoin, obj5);
                                      tmp46 = closure_6(Text2, obj4);
                                    }
                                    cResult[49] = ratingCount;
                                    cResult[50] = tmp11;
                                    cResult[51] = tmp46;
                                    tmp44 = tmp46;
                                  }
                                }
                              }
                            }
                          }
                          const obj6 = { variant: str, color: tmp14, lineClamp: num, style: tmp15, children: tmp16 };
                          const tmp43 = closure_6(tmp8, obj6);
                          cResult[42] = tmp8;
                          cResult[43] = str;
                          cResult[44] = tmp14;
                          cResult[45] = num;
                          cResult[46] = tmp15;
                          cResult[47] = tmp16;
                          cResult[48] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult = url(9352);
  const result = tmpResult.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const tmpResult3 = url(9353);
  const steamReviewScoreDescriptionColor = tmpResult3.getSteamReviewScoreDescriptionColor(result);
  if (cResult[28] === tmp6Result) {
    if (cResult[29] === trackAction) {
      let tmp22;
      let tmp25;
      let tmp27;
      let tmp30;
      if (cResult[30] === url) {
        tmp22 = cResult[31];
      }
      const _Symbol = Symbol;
      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(url(1128).t.YNC5Di);
        cResult[32] = stringResult;
        tmp25 = stringResult;
      } else {
        tmp25 = cResult[32];
      }
      const reviewRow = tmp4.reviewRow;
      const _Symbol2 = Symbol;
      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { size: "sm", color: tmp5(587).colors.ICON_STRONG };
        const SteamNeutralIcon = tmp(9310).SteamNeutralIcon;
        const tmp29 = closure_6(SteamNeutralIcon, obj7);
        cResult[33] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[33];
      }
      if (cResult[34] !== title) {
        const obj8 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title };
        const tmp32 = closure_6(url(5266).Text, obj8);
        cResult[34] = title;
        cResult[35] = tmp32;
        tmp30 = tmp32;
      } else {
        tmp30 = cResult[35];
      }
      if (cResult[36] === tmp4.reviewNameContainer) {
        let tmp33;
        if (cResult[37] === tmp30) {
          tmp33 = cResult[38];
        }
        const ratingContainer = tmp4.ratingContainer;
        const Text = tmp(5266).Text;
        let linkText;
        if (alwaysShowLinkDecorations) {
          linkText = tmp4.linkText;
        }
        if (cResult[39] === tmp4.ratingDescription) {
          let tmp39;
          if (cResult[40] === linkText) {
            tmp39 = cResult[41];
          }
          const tmpResult4 = url(9353);
          const steamReviewScoreDescriptionIntl = tmpResult4.getSteamReviewScoreDescriptionIntl(result);
          cResult[0] = alwaysShowLinkDecorations;
          cResult[1] = isRecentRating;
          cResult[2] = tmp6Result;
          cResult[3] = rating;
          cResult[4] = ratingCount;
          cResult[5] = tmp4.linkText;
          cResult[6] = tmp4.ratingContainer;
          cResult[7] = tmp4.ratingDescription;
          cResult[8] = tmp4.reviewNameContainer;
          cResult[9] = tmp4.reviewRow;
          cResult[10] = title;
          cResult[11] = trackAction;
          cResult[12] = url;
          cResult[13] = Text;
          cResult[14] = closure_4;
          cResult[15] = closure_5;
          cResult[16] = result;
          cResult[17] = "text-sm/medium";
          cResult[18] = reviewRow;
          cResult[19] = tmp33;
          cResult[20] = steamReviewScoreDescriptionColor;
          cResult[21] = 1;
          cResult[22] = tmp39;
          cResult[23] = steamReviewScoreDescriptionIntl;
          cResult[24] = ratingContainer;
          cResult[25] = tmp22;
          cResult[26] = "link";
          cResult[27] = tmp25;
          tmp15 = tmp39;
          tmp19 = tmp25;
          str2 = "link";
          tmp18 = tmp22;
          tmp17 = ratingContainer;
          tmp16 = steamReviewScoreDescriptionIntl;
          num = 1;
          tmp14 = steamReviewScoreDescriptionColor;
          tmp13 = tmp33;
          tmp12 = reviewRow;
          str = "text-sm/medium";
          tmp11 = result;
          tmp10 = tmp23;
          tmp9 = tmp37;
          tmp8 = Text;
        }
        const items2 = [tmp4.ratingDescription, linkText];
        cResult[39] = tmp4.ratingDescription;
        cResult[40] = linkText;
        cResult[41] = items2;
        tmp39 = items2;
      }
      const obj9 = { style: tmp4.reviewNameContainer, children: items3 };
      items3 = [tmp27, tmp30];
      const tmp36 = closure_7(closure_4, obj9);
      cResult[36] = tmp4.reviewNameContainer;
      cResult[37] = tmp30;
      cResult[38] = tmp36;
      tmp33 = tmp36;
    }
  }
  const fn = function j() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
    closure_2(url);
  };
  cResult[28] = tmp6Result;
  cResult[29] = trackAction;
  cResult[30] = url;
  cResult[31] = fn;
  tmp22 = fn;
}) : (function SteamReviewRow(url) {
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
  const tmp = closure_9();
  const alwaysShowLinkDecorations = react.useContext(url(5017).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp4 = trackAction(9286);
  const tmp4Result = tmp4(trackAction(5692).openURL);
  dependencyMap = tmp4Result;
  const obj = url(9352);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const items = [tmp4Result, url, trackAction];
  const obj2 = url(9353);
  const steamReviewScoreDescriptionColor = obj2.getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: react.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: intl.string(url(1128).t.YNC5Di),
    style: tmp.reviewRow,
    children: items2
  };
  intl = url(1128).intl;
  const obj4 = { style: tmp.reviewNameContainer, children: items1 };
  const obj5 = { size: "sm", color: trackAction(587).colors.ICON_STRONG };
  const SteamNeutralIcon = url(9310).SteamNeutralIcon;
  items1 = [closure_6(SteamNeutralIcon, obj5), closure_6(url(5266).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  items2 = [closure_7(closure_4, obj4), ];
  const obj6 = { style: tmp.ratingContainer, children: items4 };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, lineClamp: 1, style: items3, children: tmp2Result.getSteamReviewScoreDescriptionIntl(result) };
  items3 = [tmp.ratingDescription, ];
  let linkText;
  const Text = url(5266).Text;
  const tmp10 = closure_4;
  const tmp9 = closure_5;
  if (alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  tmp2Result = url(9353);
  items4 = [closure_6(Text, obj7), ];
  let tmp11Result = null != ratingCount && result !== tmp2(2042).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp11Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: str.toString() };
    const Text2 = tmp2(5266).Text;
    const intl2 = tmp2(1128).intl;
    const format = intl2.format;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    const sgIoin = tmp2(1128).t.sgIoin;
    str = format(sgIoin, obj9);
    tmp11Result = tmp11(Text2, obj8);
  }
  items4[1] = tmp11Result;
  items2[1] = closure_7(tmp10, obj6);
  return closure_7(tmp9, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpenCriticReview(trackAction) {
  let Text2;
  let backgroundColor;
  let closure_2;
  let foregroundColor;
  let game;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj13;
  let tier;
  let tmp10Result;
  let tmp7;
  let tmpResult5;
  let tmpResult6;
  let topCriticRating;
  let url;
  const obj = url(576);
  const cResult = obj.c(35);
  ({ game, url } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp4 = closure_9();
  const reviews = game.reviews;
  let opencritic;
  const first = cResult[0];
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (first !== opencritic) {
    const reviews2 = game.reviews;
    let opencritic1;
    if (reviews2 != null) {
      opencritic1 = reviews2.opencritic;
    }
    if (opencritic1 == null) {
      opencritic1 = { topCriticRating: "toCharArray$esjava$1", topCriticRatingCount: "test", tier: "ix" };
    }
    const reviews3 = game.reviews;
    let opencritic2;
    if (reviews3 != null) {
      opencritic2 = reviews3.opencritic;
    }
    cResult[0] = opencritic2;
    cResult[1] = opencritic1;
    tmp7 = opencritic1;
  } else {
    tmp7 = cResult[1];
  }
  ({ tier, topCriticRating } = tmp7);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num3 = tmp7.topCriticRatingCount;
  if (num3 == null) {
    num3 = -1;
  }
  const tmp11 = trackAction(9286);
  const tmp11Result = tmp11(trackAction(5692).openURL);
  dependencyMap = tmp11Result;
  if (cResult[2] === tmp11Result) {
    if (cResult[3] === trackAction) {
      let tmp13;
      let tmp14;
      let tmp16;
      let tmp18;
      let tmp20;
      if (cResult[4] === url) {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== tier) {
        let str = "";
        if (null != tier) {
          const tmpResult = url(9355);
          str = tmpResult.getOpenCriticTierText(tier);
        }
        cResult[6] = tier;
        cResult[7] = str;
        tmp14 = str;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tier) {
        let openCriticCircleRatingColor;
        if (null != tier) {
          const tmpResult4 = url(9355);
          openCriticCircleRatingColor = tmpResult4.getOpenCriticCircleRatingColor(tier);
        } else {
          openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
        }
        cResult[8] = tier;
        cResult[9] = openCriticCircleRatingColor;
        tmp16 = openCriticCircleRatingColor;
      } else {
        tmp16 = cResult[9];
      }
      ({ foregroundColor, backgroundColor } = tmp16);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(url(1128).t.aLNBAw);
        cResult[10] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: intl2.string(url(1128).t["UxvER+"]) };
        const Text = tmp(5266).Text;
        intl2 = tmp(1128).intl;
        const tmp22 = closure_6(Text, obj2);
        cResult[11] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] === tmp4.opencriticTopCriticContainer) {
        if (cResult[13] === tmp4.opencriticTopCriticImage) {
          if (cResult[14] === tier) {
            let tmp23;
            if (cResult[15] === tmp14) {
              tmp23 = cResult[16];
            }
            if (cResult[17] === backgroundColor) {
              if (cResult[18] === foregroundColor) {
                if (cResult[19] === (null != tier && topCriticRating > 0 && num3 > 0)) {
                  if (cResult[20] === topCriticRating) {
                    if (cResult[21] === tmp4.opencriticTopCriticContainer) {
                      let tmp28;
                      let tmp34;
                      if (cResult[22] === tmp4.opencriticTopCriticRatingContainer) {
                        tmp28 = cResult[23];
                      }
                      if (cResult[24] !== ((topCriticRating <= 0 || num3 <= 0) && null == tier)) {
                        let tmp35 = null;
                        if ((topCriticRating <= 0 || num3 <= 0) && null == tier) {
                          const obj3 = { variant: "text-xs/medium", color: tmpResult5.getSteamReviewScoreDescriptionColor(url(2042).SteamReviewScoreDescription.NO_USER_REVIEWS), children: intl4.string(url(1128).t["0xYzpO"]) };
                          const Text3 = tmp(5266).Text;
                          tmpResult5 = url(9353);
                          intl4 = tmp(1128).intl;
                          tmp35 = closure_6(Text3, obj3);
                        }
                        cResult[24] = (topCriticRating <= 0 || num3 <= 0) && null == tier;
                        cResult[25] = tmp35;
                        tmp34 = tmp35;
                      } else {
                        tmp34 = cResult[25];
                      }
                      if (cResult[26] === tmp4.opencriticRightContainer) {
                        if (cResult[27] === tmp23) {
                          if (cResult[28] === tmp28) {
                            let tmp37;
                            if (cResult[29] === tmp34) {
                              tmp37 = cResult[30];
                            }
                            if (cResult[31] === tmp13) {
                              if (cResult[32] === tmp4.reviewRow) {
                                let tmp41;
                                if (cResult[33] === tmp37) {
                                  tmp41 = cResult[34];
                                }
                                return tmp41;
                              }
                            }
                            const obj4 = { onPress: tmp13, accessibilityRole: "link", accessibilityLabel: tmp18, style: tmp4.reviewRow, children: items };
                            items = [tmp20, tmp37];
                            const tmp44 = closure_7(closure_5, obj4);
                            cResult[31] = tmp13;
                            cResult[32] = tmp4.reviewRow;
                            cResult[33] = tmp37;
                            cResult[34] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                      const obj5 = { style: tmp4.opencriticRightContainer, children: items1 };
                      items1 = [tmp23, tmp28, tmp34];
                      const tmp40 = closure_7(closure_4, obj5);
                      cResult[26] = tmp4.opencriticRightContainer;
                      cResult[27] = tmp23;
                      cResult[28] = tmp28;
                      cResult[29] = tmp34;
                      cResult[30] = tmp40;
                      tmp37 = tmp40;
                    }
                  }
                }
              }
            }
            let tmp29 = null;
            if (null != tier && topCriticRating > 0 && num3 > 0) {
              const obj6 = { style: items2, accessibilityLabel: intl3.string(url(1128).t.Ub4YR1), accessibilityRole: "image", children: items3 };
              items2 = [tmp4.opencriticTopCriticContainer, ];
              const obj7 = { backgroundColor };
              items2[1] = obj7;
              intl3 = tmp(1128).intl;
              const obj8 = { rating: topCriticRating, strokeColor: foregroundColor, size };
              items3 = [closure_6(trackAction(9361), obj8), ];
              const obj9 = { style: tmp4.opencriticTopCriticRatingContainer, children: closure_6(Text2, obj10) };
              const _Math = Math;
              obj10 = { variant: "text-xs/bold", color: "text-overlay-light", children: Math.floor(topCriticRating) };
              Text2 = tmp(5266).Text;
              items3[1] = closure_6(closure_4, obj9);
              tmp29 = closure_7(closure_4, obj6);
            }
            cResult[17] = backgroundColor;
            cResult[18] = foregroundColor;
            cResult[19] = null != tier && topCriticRating > 0 && num3 > 0;
            cResult[20] = topCriticRating;
            cResult[21] = tmp4.opencriticTopCriticContainer;
            cResult[22] = tmp4.opencriticTopCriticRatingContainer;
            cResult[23] = tmp29;
            tmp28 = tmp29;
          }
        }
      }
      let tmp24 = null;
      if (null != tier) {
        const obj11 = { style: tmp4.opencriticTopCriticContainer, accessibilityLabel: tmp14, accessibilityRole: "image", children: closure_6(tmp10Result, obj12) };
        obj12 = { source: obj13, style: tmp4.opencriticTopCriticImage, accessible: true, accessibilityLabel: tmp14 };
        obj13 = { uri: tmpResult6.getOpenCriticTierImage(tier) };
        tmp10Result = trackAction(5701);
        tmpResult6 = url(9355);
        tmp24 = closure_6(closure_4, obj11);
      }
      cResult[12] = tmp4.opencriticTopCriticContainer;
      cResult[13] = tmp4.opencriticTopCriticImage;
      cResult[14] = tier;
      cResult[15] = tmp14;
      cResult[16] = tmp24;
      tmp23 = tmp24;
    }
  }
  const fn = function y() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  };
  cResult[2] = tmp11Result;
  cResult[3] = trackAction;
  cResult[4] = url;
  cResult[5] = fn;
  tmp13 = fn;
}) : (function OpenCriticReview(url) {
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
  const tmp = closure_9();
  const reviews = game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "toCharArray$esjava$1", topCriticRatingCount: "test", tier: "ix" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4 = trackAction(9286);
  const tmp4Result = tmp4(trackAction(5692).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = react.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    const obj2 = url(9355);
    str = obj2.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    const obj4 = url(9355);
    openCriticCircleRatingColor = obj4.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: intl.string(url(1128).t.aLNBAw), style: tmp.reviewRow, children: items1 };
  intl = url(1128).intl;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: intl2.string(url(1128).t["UxvER+"]) };
  const Text = url(5266).Text;
  intl2 = url(1128).intl;
  items1 = [closure_6(Text, obj3), ];
  let tmp12Result = null;
  const obj5 = { style: tmp.opencriticRightContainer, children: items2 };
  const tmp10 = closure_5;
  if (null != tier) {
    const obj6 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: closure_6(tmp2Result, obj7) };
    obj7 = { source: obj8, style: tmp.opencriticTopCriticImage, accessible: true, accessibilityLabel: str };
    obj8 = { uri: tmp11Result.getOpenCriticTierImage(tier) };
    tmp2Result = trackAction(5701);
    tmp11Result = url(9355);
    tmp12Result = tmp12(tmp13, obj6);
  }
  items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: items3, accessibilityLabel: intl3.string(url(1128).t.Ub4YR1), accessibilityRole: "image", children: items4 };
        items3 = [tmp.opencriticTopCriticContainer, ];
        obj10 = { backgroundColor };
        items3[1] = obj10;
        intl3 = tmp11(1128).intl;
        const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size };
        items4 = [closure_6(tmp2(9361), obj11), ];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: closure_6(Text2, obj13) };
        const _Math = Math;
        obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: Math.floor(topCriticRating) };
        Text2 = tmp11(5266).Text;
        items4[1] = closure_6(closure_4, obj12);
        tmp9Result = tmp9(tmp13, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    tmp12Result2 = null;
    if (null == tier) {
      const obj14 = { variant: "text-xs/medium", color: tmp11Result2.getSteamReviewScoreDescriptionColor(url(2042).SteamReviewScoreDescription.NO_USER_REVIEWS), children: intl4.string(url(1128).t["0xYzpO"]) };
      const Text3 = tmp11(5266).Text;
      tmp11Result2 = url(9353);
      intl4 = tmp11(1128).intl;
      tmp12Result2 = tmp12(Text3, obj14);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  items1[1] = closure_7(closure_4, obj5);
  return closure_7(tmp10, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileStoreReviewRow(arg0) {
  let items;
  let items1;
  let items3;
  let review;
  let trackAction;
  const obj = react2;
  const cResult = obj.c(31);
  ({ review, trackAction } = arg0);
  const tmp4 = closure_9();
  const alwaysShowLinkDecorations = react.useContext(react3.AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const tmp6 = useOpenExternalUrlFromGameProfileDefault;
  const tmp6Result = tmp6(LinkingDefault.openURL);
  let closure_1 = tmp6Result;
  const action = review.action;
  const url = review.url;
  if (cResult[0] === action) {
    if (cResult[1] === tmp6Result) {
      if (cResult[2] === trackAction) {
        let tmp9;
        let tmp10;
        let tmp13;
        if (cResult[3] === url) {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== obj10[review.key]) {
          const obj2 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
          const tmp12 = metroRequire(obj10[review.key], obj2);
          cResult[5] = obj10[review.key];
          cResult[6] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== review.title) {
          const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: review.title };
          const tmp15 = metroRequire(Text_Text.Text, obj3);
          cResult[7] = review.title;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp4.reviewNameContainer) {
          if (cResult[10] === tmp10) {
            let tmp16;
            if (cResult[11] === tmp13) {
              tmp16 = cResult[12];
            }
            let linkText;
            if (alwaysShowLinkDecorations) {
              linkText = tmp4.linkText;
            }
            if (cResult[13] === tmp4.ratingDescription) {
              let tmp21;
              if (cResult[14] === linkText) {
                tmp21 = cResult[15];
              }
              if (cResult[16] === review.ratingText) {
                let tmp22;
                let tmp25;
                if (cResult[17] === tmp21) {
                  tmp22 = cResult[18];
                }
                if (cResult[19] !== review.ratingCountText) {
                  const obj4 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: review.ratingCountText };
                  const tmp27 = metroRequire(Text_Text.Text, obj4);
                  cResult[19] = review.ratingCountText;
                  cResult[20] = tmp27;
                  tmp25 = tmp27;
                } else {
                  tmp25 = cResult[20];
                }
                if (cResult[21] === tmp4.ratingContainer) {
                  if (cResult[22] === tmp22) {
                    let tmp28;
                    if (cResult[23] === tmp25) {
                      tmp28 = cResult[24];
                    }
                    if (cResult[25] === tmp9) {
                      if (cResult[26] === review.accessibilityLabel) {
                        if (cResult[27] === tmp4.reviewRow) {
                          if (cResult[28] === tmp16) {
                            let tmp32;
                            if (cResult[29] === tmp28) {
                              tmp32 = cResult[30];
                            }
                            return tmp32;
                          }
                        }
                      }
                    }
                    const obj5 = { onPress: tmp9, accessibilityRole: "link", accessibilityLabel: review.accessibilityLabel, style: tmp4.reviewRow, children: items };
                    items = [tmp16, tmp28];
                    const tmp35 = metroImportDefault(hasOwnProperty, obj5);
                    cResult[25] = tmp9;
                    cResult[26] = review.accessibilityLabel;
                    cResult[27] = tmp4.reviewRow;
                    cResult[28] = tmp16;
                    cResult[29] = tmp28;
                    cResult[30] = tmp35;
                    tmp32 = tmp35;
                  }
                }
                const obj6 = { style: tmp4.ratingContainer, children: items1 };
                items1 = [tmp22, tmp25];
                const tmp31 = metroImportDefault(React3, obj6);
                cResult[21] = tmp4.ratingContainer;
                cResult[22] = tmp22;
                cResult[23] = tmp25;
                cResult[24] = tmp31;
                tmp28 = tmp31;
              }
              const obj7 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp21, children: review.ratingText };
              const tmp24 = metroRequire(Text_Text.Text, obj7);
              cResult[16] = review.ratingText;
              cResult[17] = tmp21;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            const items2 = [tmp4.ratingDescription, linkText];
            cResult[13] = tmp4.ratingDescription;
            cResult[14] = linkText;
            cResult[15] = items2;
            tmp21 = items2;
          }
        }
        const obj8 = { style: tmp4.reviewNameContainer, children: items3 };
        items3 = [tmp10, tmp13];
        const tmp19 = metroImportDefault(React3, obj8);
        cResult[9] = tmp4.reviewNameContainer;
        cResult[10] = tmp10;
        cResult[11] = tmp13;
        cResult[12] = tmp19;
        tmp16 = tmp19;
      }
    }
  }
  const fn = function l() {
    trackAction(action);
    closure_1(url);
  };
  cResult[0] = action;
  cResult[1] = tmp6Result;
  cResult[2] = trackAction;
  cResult[3] = url;
  cResult[4] = fn;
  tmp9 = fn;
}) : (function MobileStoreReviewRow(arg0) {
  let items1;
  let items2;
  let items4;
  let review;
  let trackAction;
  ({ review, trackAction } = arg0);
  const tmp = closure_9();
  const alwaysShowLinkDecorations = react.useContext(react3.AccessibilityPreferencesContext).alwaysShowLinkDecorations;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileReviews(arg0) {
  let closure_0;
  let container;
  let game;
  let headerText;
  let items;
  let obj11;
  let obj15;
  let obj9;
  let primarySteamRating;
  let primarySteamRatingCount;
  let primarySteamTitleKey;
  let showRecentSteamReview;
  let showSteamReview;
  let steamReview;
  let trackAction;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(49);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  const obj2 = require("useSteamWebsiteUrl");
  const steamWebsiteUrl = obj2.useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj3 = require("useGameProfileReviewDisplayData");
  const gameProfileReviewDisplayData = obj3.useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  const obj4 = require("useGameProfileMobileStoreReviews");
  const gameProfileMobileStoreReviews = obj4.useGameProfileMobileStoreReviews(gameProfileReviewDisplayData.mobileStoreReviews);
  ({ steamReview, showSteamReview, showRecentSteamReview, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  if (cResult[0] === game) {
    let tmp8;
    let items1;
    if (cResult[1] === gameProfileMobileStoreReviews) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === game) {
      if (cResult[4] === gameProfileMobileStoreReviews) {
        if (cResult[5] === opencriticUrl) {
          if (cResult[6] === primarySteamRating) {
            if (cResult[7] === primarySteamRatingCount) {
              if (cResult[8] === primarySteamTitleKey) {
                if (cResult[9] === tmp8) {
                  if (cResult[10] === showRecentSteamReview) {
                    if (cResult[11] === showSteamReview) {
                      let recentRating;
                      const tmp10 = cResult[12];
                      if (steamReview != null) {
                        recentRating = steamReview.recentRating;
                      }
                      if (tmp10 === recentRating) {
                        let recentRatingCount;
                        const tmp13 = cResult[13];
                        if (steamReview != null) {
                          recentRatingCount = steamReview.recentRatingCount;
                        }
                        if (tmp13 === recentRatingCount) {
                          if (cResult[14] === steamWebsiteUrl) {
                            if (cResult[15] === trackAction) {
                              items1 = cResult[16];
                            }
                            if (0 === arr.length) {
                              return null;
                            } else {
                              let tmp44;
                              let tmp48;
                              const _Symbol2 = Symbol;
                              ({ container, headerText } = tmp4);
                              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl3 = require("intl").intl;
                                const stringResult = intl3.string(require("intl").t.GaAQXP);
                                cResult[35] = stringResult;
                                tmp44 = stringResult;
                              } else {
                                tmp44 = cResult[35];
                              }
                              if (cResult[36] !== tmp4.headerText) {
                                const obj5 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp44 };
                                const tmp52 = closure_6(require("Text/Text").Text, obj5);
                                cResult[36] = tmp4.headerText;
                                cResult[37] = tmp52;
                                tmp48 = tmp52;
                              } else {
                                tmp48 = cResult[37];
                              }
                              if (cResult[38] === arr) {
                                if (cResult[39] === tmp4.reviewRowContainer) {
                                  let tmp54;
                                  if (cResult[40] === tmp4.reviewRowContainerNotLast) {
                                    tmp54 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.reviewContainer) {
                                    let tmp56;
                                    if (cResult[43] === tmp54) {
                                      tmp56 = cResult[44];
                                    }
                                    if (cResult[45] === tmp4.container) {
                                      if (cResult[46] === tmp48) {
                                        let tmp60;
                                        if (cResult[47] === tmp56) {
                                          tmp60 = cResult[48];
                                        }
                                        return tmp60;
                                      }
                                    }
                                    const obj6 = { style: container, children: items };
                                    items = [tmp48, tmp56];
                                    const tmp63 = closure_7(closure_4, obj6);
                                    cResult[45] = tmp4.container;
                                    cResult[46] = tmp48;
                                    cResult[47] = tmp56;
                                    cResult[48] = tmp63;
                                    tmp60 = tmp63;
                                  }
                                  const obj7 = { style: tmp53, children: tmp54 };
                                  const tmp59 = closure_6(closure_4, obj7);
                                  cResult[42] = tmp4.reviewContainer;
                                  cResult[43] = tmp54;
                                  cResult[44] = tmp59;
                                  tmp56 = tmp59;
                                }
                              }
                              const mapped = arr.map((item, index) => {
                                let key;
                                let row;
                                const style = [closure_0.reviewRowContainer, ];
                                let reviewRowContainerNotLast = index < items1.length - 1;
                                ({ key, row } = item);
                                const tmp = metroRequire;
                                const tmp2 = React3;
                                if (reviewRowContainerNotLast) {
                                  reviewRowContainerNotLast = closure_0.reviewRowContainerNotLast;
                                }
                                style[1] = reviewRowContainerNotLast;
                                return tmp(tmp2, { style, children }, key);
                              });
                              cResult[38] = arr;
                              cResult[39] = tmp4.reviewRowContainer;
                              cResult[40] = tmp4.reviewRowContainerNotLast;
                              cResult[41] = mapped;
                              tmp54 = mapped;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    items1 = [];
    if (showRecentSteamReview) {
      if (null != steamWebsiteUrl) {
        let tmp16;
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult1 = intl.string(tmp(1128).t.MQGNsN);
          cResult[17] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[17];
        }
        let recentRating1;
        if (steamReview != null) {
          recentRating1 = steamReview.recentRating;
        }
        let recentRatingCount1;
        if (steamReview != null) {
          recentRatingCount1 = steamReview.recentRatingCount;
        }
        if (cResult[18] === steamWebsiteUrl) {
          if (cResult[19] === recentRating1) {
            if (cResult[20] === recentRatingCount1) {
              let tmp20;
              if (cResult[21] === trackAction) {
                tmp20 = cResult[22];
              }
              items1.push(tmp20);
            }
          }
        }
        const obj8 = { key: "steam-recent", row: closure_6(closure_11, obj9) };
        obj9 = { url: steamWebsiteUrl, trackAction, title: tmp16, rating: recentRating1, ratingCount: recentRatingCount1, isRecentRating: true };
        cResult[18] = steamWebsiteUrl;
        cResult[19] = recentRating1;
        cResult[20] = recentRatingCount1;
        cResult[21] = trackAction;
        cResult[22] = obj8;
        tmp20 = obj8;
      }
    }
    if (showSteamReview) {
      if (null != steamWebsiteUrl) {
        let tmp25;
        if (cResult[23] !== primarySteamTitleKey) {
          const intl2 = tmp(1128).intl;
          const stringResult2 = intl2.string(primarySteamTitleKey);
          cResult[23] = primarySteamTitleKey;
          cResult[24] = stringResult2;
          tmp25 = stringResult2;
        } else {
          tmp25 = cResult[24];
        }
        if (cResult[25] === primarySteamRating) {
          if (cResult[26] === primarySteamRatingCount) {
            if (cResult[27] === steamWebsiteUrl) {
              if (cResult[28] === tmp25) {
                let tmp27;
                if (cResult[29] === trackAction) {
                  tmp27 = cResult[30];
                }
                items1.push(tmp27);
              }
            }
          }
        }
        obj10 = { key: "steam-primary", row: closure_6(closure_11, obj11) };
        obj11 = { url: steamWebsiteUrl, trackAction, title: tmp25, rating: primarySteamRating, ratingCount: primarySteamRatingCount, isRecentRating: false };
        cResult[25] = primarySteamRating;
        cResult[26] = primarySteamRatingCount;
        cResult[27] = steamWebsiteUrl;
        cResult[28] = tmp25;
        cResult[29] = trackAction;
        cResult[30] = obj10;
        tmp27 = obj10;
      }
    }
    for (const item10125 of gameProfileMobileStoreReviews) {
      let obj12 = { key: item10125.key, row: closure_6(closure_13, obj13) };
      let obj13 = { review: item10125, trackAction };
      let push = items1.push;
      let arr7 = push(obj12);
      continue;
    }
    if (tmp8) {
      if (null != opencriticUrl) {
        if (cResult[31] === game) {
          if (cResult[32] === opencriticUrl) {
            let tmp37;
            if (cResult[33] === trackAction) {
              tmp37 = cResult[34];
            }
            items1.push(tmp37);
          }
        }
        const obj14 = { key: "opencritic", row: closure_6(closure_12, obj15) };
        obj15 = { game, url: opencriticUrl, trackAction };
        cResult[31] = game;
        cResult[32] = opencriticUrl;
        cResult[33] = trackAction;
        cResult[34] = obj14;
        tmp37 = obj14;
      }
    }
    cResult[3] = game;
    cResult[4] = gameProfileMobileStoreReviews;
    cResult[5] = opencriticUrl;
    cResult[6] = primarySteamRating;
    cResult[7] = primarySteamRatingCount;
    cResult[8] = primarySteamTitleKey;
    cResult[9] = tmp8;
    cResult[10] = showRecentSteamReview;
    cResult[11] = showSteamReview;
    let recentRating2;
    if (steamReview != null) {
      recentRating2 = steamReview.recentRating;
    }
    cResult[12] = recentRating2;
    let recentRatingCount2;
    if (steamReview != null) {
      recentRatingCount2 = steamReview.recentRatingCount;
    }
    cResult[13] = recentRatingCount2;
    cResult[14] = steamWebsiteUrl;
    cResult[15] = trackAction;
    cResult[16] = items1;
  }
  const tmpResult = tmp(9353);
  const result = tmpResult.canShowOpenCriticReview(game, gameProfileMobileStoreReviews);
  cResult[0] = game;
  cResult[1] = gameProfileMobileStoreReviews;
  cResult[2] = result;
  tmp8 = result;
}) : (function GameProfileReviews(arg0) {
  let closure_0;
  let game;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj12;
  let obj8;
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
  let tmp = closure_9();
  _require = tmp;
  let tmp2 = _require;
  const obj = require("useSteamWebsiteUrl");
  const steamWebsiteUrl = obj.useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj2 = require("useGameProfileReviewDisplayData");
  const gameProfileReviewDisplayData = obj2.useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  const obj3 = require("useGameProfileMobileStoreReviews");
  const gameProfileMobileStoreReviews = obj3.useGameProfileMobileStoreReviews(gameProfileReviewDisplayData.mobileStoreReviews);
  ({ steamReview, showSteamReview, showRecentSteamReview, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  const obj4 = require("GameProfileReviewUtils");
  let result = obj4.canShowOpenCriticReview(game, gameProfileMobileStoreReviews);
  const items = [];
  if (showRecentSteamReview) {
    showRecentSteamReview = null != steamWebsiteUrl;
  }
  if (showRecentSteamReview) {
    const push = items.push;
    const obj5 = { url: steamWebsiteUrl, trackAction, title: intl.string(tmp2(1128).t.MQGNsN), rating: recentRating, ratingCount: recentRatingCount, isRecentRating: true };
    intl = tmp2(1128).intl;
    recentRating = undefined;
    const tmp10 = closure_11;
    const tmp9 = closure_6;
    if (steamReview != null) {
      recentRating = steamReview.recentRating;
    }
    recentRatingCount = undefined;
    if (steamReview != null) {
      recentRatingCount = steamReview.recentRatingCount;
    }
    const obj6 = { key: "steam-recent", row: tmp9(tmp10, obj5) };
    push(obj6);
  }
  if (showSteamReview) {
    showSteamReview = null != steamWebsiteUrl;
  }
  if (showSteamReview) {
    const obj7 = { key: "steam-primary", row: closure_6(closure_11, obj8) };
    const push2 = items.push;
    obj8 = { url: steamWebsiteUrl, trackAction, title: intl2.string(primarySteamTitleKey), rating: primarySteamRating, ratingCount: primarySteamRatingCount, isRecentRating: false };
    intl2 = tmp2(1128).intl;
    push2(obj7);
  }
  for (const item10072 of gameProfileMobileStoreReviews) {
    let obj9 = { key: item10072.key, row: closure_6(closure_13, obj10) };
    obj10 = { review: item10072, trackAction };
    let push3 = items.push;
    let push3Result = push3(obj9);
    continue;
  }
  if (result) {
    result = null != opencriticUrl;
  }
  if (result) {
    const obj11 = { key: "opencritic", row: closure_6(closure_12, obj12) };
    const push4 = items.push;
    obj12 = { game, url: opencriticUrl, trackAction };
    push4(obj11);
  }
  let tmp26 = null;
  if (0 !== items.length) {
    const obj13 = { style: tmp.container, children: items1 };
    const obj14 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl3.string(require("intl").t.GaAQXP) };
    const Text = require("Text/Text").Text;
    intl3 = require("intl").intl;
    items1 = [closure_6(Text, obj14), ];
    const obj15 = {
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
    items1[1] = closure_6(closure_4, obj15);
    tmp26 = closure_7(closure_4, obj13);
  }
  return tmp26;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default tmp5;
