// Module ID: 9072
// Function ID: 9073
// Name: GameProfileSimilarGames
// Dependencies: [32, 19, 17, 8900, 8945, 21, 587, 5091, 558, 576, 8859, 8861, 8865, 1126, 8927, 6163, 5087, 8935, 8929, 9073, 1497, 8608, 8913, 2]

// Module 9072 (GameProfileSimilarGames)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8608 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8865 */;
import GameProfileConstants from "GameProfileConstants" /* 8900 */;
import GameProfileHorizontalScrollViewDefault from "GameProfileHorizontalScrollView" /* 8913 */;
import GameProfileSkeletonDefault from "GameProfileSkeleton" /* 8927 */;
import GameProfileSectionDefault from "GameProfileSection" /* 8929 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8935 */;
import SimilarGamesConstants from "SimilarGamesConstants" /* 8945 */;
import useSimilarGamesDefault from "useSimilarGames" /* 9073 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, obj1, openGameProfileModalResult;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp;
const GameProfileSkeleton = tmp(8927);
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
let closure_7 = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let c12 = 1.34;
const PX_16 = nativeDefault.space.PX_16;
const PX_122 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, spacer: { width: PX_12 }, listPadding: { width: PX_16 }, coverArtContainer: obj5, coverArt: { width: "100%", height: "100%" }, coverArtPlaceholder: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }, coverArtFallback: obj6, skeletonCards: obj7, skeletonArtwork: obj8 };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { borderRadius: nativeDefault.radii.sm };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Spacer() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.spacer) {
    const obj2 = { style: tmp2.spacer };
    const tmp6 = React4(metroRequire, obj2);
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Spacer() {
  const obj = { style: closure_15().spacer };
  return React4(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListPadding() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = React4(metroRequire, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListPadding() {
  const obj = { style: closure_15().listPadding };
  return React4(metroRequire, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SimilarGameCard(game) {
  let closure_2;
  let closure_3;
  let items2;
  let obj10;
  let obj6;
  let obj8;
  let shouldOpenGameProfile;
  let tmp = game;
  let obj = game(576);
  const cResult = obj.c(37);
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let tmp4 = closure_15();
  const result = cardWidth * c12;
  if (cResult[0] === cardWidth) {
    let tmp6;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === result) {
      let tmp8;
      let tmp16;
      if (cResult[4] === game) {
        tmp8 = cResult[5];
      }
      dependencyMap = tmp8;
      const tmp13 = _slicedToArray(shouldOpenGameProfile.useState(undefined), 2);
      _slicedToArray = tmp13[1];
      if (cResult[6] !== game.id) {
        let obj2 = { gameId: game.id, source: tmp(8859).GameProfileSources.SimilarGames };
        cResult[6] = game.id;
        cResult[7] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[7];
      }
      const tmp18 = trackAction(8861)(tmp16);
      shouldOpenGameProfile = tmp18.shouldOpenGameProfile;
      const gameId = tmp18.gameId;
      if (cResult[8] === game.id) {
        if (cResult[9] === gameId) {
          if (cResult[10] === shouldOpenGameProfile) {
            let tmp20;
            if (cResult[13] !== tmp8) {
              class F {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              cResult[13] = tmp8;
              cResult[14] = F;
              tmp20 = F;
            } else {
              class F {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
            }
            if (cResult[15] !== cardWidth) {
              class F {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              tmp22[0] = cardWidth;
              cResult[15] = cardWidth;
              cResult[16] = tmp22;
            } else {
              class F {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
            }
            if (cResult[17] === tmp4.card) {
              let tmp29Result;
              class F {
                constructor() {
                  tmp = closure_3(closure_2);
                  return;
                }
              }
              if (cResult[20] !== game.name) {
                class F {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj4 = { gameName: game.name };
                cResult[20] = game.name;
                cResult[21] = obj3.formatToPlainString(tmp(1126).t["8QLQB+"], obj4);
                const formatToPlainStringResult = obj3.formatToPlainString(tmp(1126).t["8QLQB+"], obj4);
              } else {
                class F {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (cResult[22] === tmp6) {
                class F {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
              }
              if (null != tmp8) {
                class F {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const items = [tmp4.coverArtContainer, tmp6];
                tmp31[0] = items;
                let tmp32 = tmp15;
                const tmp29 = closure_10;
                const tmp30 = closure_6;
                if (null != tmp8 && tmp13[0] !== tmp8) {
                  class F {
                    constructor() {
                      tmp = closure_3(closure_2);
                      return;
                    }
                  }
                  const obj5 = { style: tmp4.coverArtPlaceholder, children: closure_9(trackAction(8927), obj6) };
                  const GameProfileSkeletonContainer = tmp(8927).GameProfileSkeletonContainer;
                  obj6 = { style: tmp4.coverArt };
                  tmp32 = closure_9(GameProfileSkeletonContainer, obj5);
                }
                const items1 = [tmp32, ];
                const obj7 = { source: obj8, style: tmp4.coverArt, onLoadEnd: null };
                obj8 = { uri: tmp8 };
                class R {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                    tmp4 = shouldOpenGameProfile;
                    if (tmp4) {
                      tmp5 = gameId;
                      tmp6 = null;
                      tmp4 = null != gameId;
                    }
                    if (tmp4) {
                      tmp7 = closure_1;
                      tmp8 = closure_1(tmp2[12]);
                      obj = { gameId: null, gameProfileModalChecks: null, source: null };
                      tmp9 = gameId;
                      obj.gameId = gameId;
                      obj1 = { shouldOpenGameProfile: true, gameId: null };
                      obj1.gameId = gameId;
                      obj.gameProfileModalChecks = obj1;
                      openGameProfileModal = tmp8.openGameProfileModal;
                      obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                      openGameProfileModalResult = openGameProfileModal(obj);
                    }
                    return;
                  }
                }
                items1[1] = closure_9(trackAction(6163), obj7);
                tmp31[1] = items1;
                tmp29Result = tmp29(tmp30, tmp31);
              } else {
                class F {
                  constructor() {
                    tmp = closure_3(closure_2);
                    return;
                  }
                }
                const obj9 = { style: items2, children: closure_9(tmp(5087).Text, obj10) };
                items2 = [tmp4.coverArtFallback, tmp6];
                obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
                tmp29Result = closure_9(closure_6, obj9);
              }
              cResult[22] = tmp6;
              cResult[23] = tmp8;
              cResult[24] = game.name;
              cResult[25] = tmp20;
              cResult[26] = null != tmp8 && tmp13[0] !== tmp8;
              cResult[27] = tmp4.coverArt;
              class R {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
                  tmp4 = shouldOpenGameProfile;
                  if (tmp4) {
                    tmp5 = gameId;
                    tmp6 = null;
                    tmp4 = null != gameId;
                  }
                  if (tmp4) {
                    tmp7 = closure_1;
                    tmp8 = closure_1(tmp2[12]);
                    obj = { gameId: null, gameProfileModalChecks: null, source: null };
                    tmp9 = gameId;
                    obj.gameId = gameId;
                    obj1 = { shouldOpenGameProfile: true, gameId: null };
                    obj1.gameId = gameId;
                    obj.gameProfileModalChecks = obj1;
                    openGameProfileModal = tmp8.openGameProfileModal;
                    obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
                    openGameProfileModalResult = openGameProfileModal(obj);
                  }
                  return;
                }
              }
              cResult[29] = tmp4.coverArtFallback;
              cResult[30] = tmp4.coverArtPlaceholder;
              cResult[31] = tmp29Result;
            }
            const items3 = [tmp4.card, tmp21];
            cResult[17] = tmp4.card;
            cResult[18] = tmp21;
            cResult[19] = items3;
          }
        }
      }
      class R {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_0;
          tmp3 = trackAction(closure_0(closure_2[10]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
          tmp4 = shouldOpenGameProfile;
          if (tmp4) {
            tmp5 = gameId;
            tmp6 = null;
            tmp4 = null != gameId;
          }
          if (tmp4) {
            tmp7 = closure_1;
            tmp8 = closure_1(tmp2[12]);
            obj = { gameId: null, gameProfileModalChecks: null, source: null };
            tmp9 = gameId;
            obj.gameId = gameId;
            obj1 = { shouldOpenGameProfile: true, gameId: null };
            obj1.gameId = gameId;
            obj.gameProfileModalChecks = obj1;
            openGameProfileModal = tmp8.openGameProfileModal;
            obj.source = tmp(tmp2[10]).GameProfileSources.SimilarGames;
            openGameProfileModalResult = openGameProfileModal(obj);
          }
          return;
        }
      }
      cResult[8] = game.id;
      cResult[9] = gameId;
      cResult[10] = shouldOpenGameProfile;
      cResult[11] = trackAction;
      cResult[12] = R;
    }
    const _Math = Math;
    const coverURL = game.getCoverURL(Math.ceil(result));
    cResult[3] = result;
    cResult[4] = game;
    cResult[5] = coverURL;
    tmp8 = coverURL;
  }
  tmp7[0] = cardWidth;
  tmp7[1] = result;
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function SimilarGameCard(game) {
  let closure_3;
  let first;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj3;
  let obj6;
  let obj8;
  let tmp13Result1;
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  _slicedToArray = undefined;
  let shouldOpenGameProfile;
  let tmp = closure_15();
  const result = cardWidth * c12;
  size = { width: cardWidth, height: result };
  const coverURL = game.getCoverURL(Math.ceil(result));
  [first, _slicedToArray] = shouldOpenGameProfile.useState(undefined);
  let obj = { gameId: game.id, source: game(coverURL[10]).GameProfileSources.SimilarGames };
  const tmp8 = trackAction(coverURL[11]);
  const tmp8Result = tmp8(obj);
  shouldOpenGameProfile = tmp8Result.shouldOpenGameProfile;
  const gameId = tmp8Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [coverURL];
  const callback = shouldOpenGameProfile.useCallback(() => {
    let obj2;
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, game.id);
    let tmp4 = shouldOpenGameProfile;
    if (tmp4) {
      tmp4 = null != gameId;
    }
    if (tmp4) {
      const obj = { gameId, gameProfileModalChecks: obj2, source: GameProfileAnalyticUtils.GameProfileSources.SimilarGames };
      obj2 = { shouldOpenGameProfile: true, gameId };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj);
    }
  }, items);
  let obj2 = { style: items2, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(game(coverURL[13]).t["8QLQB+"], obj3), children: tmp13Result1 };
  items2 = [tmp.card, { width: cardWidth }];
  const callback1 = shouldOpenGameProfile.useCallback(() => {
    closure_3(coverURL);
  }, items1);
  intl = game(coverURL[13]).intl;
  obj3 = { gameName: game.name };
  const tmp14 = gameId;
  if (null != coverURL) {
    const obj4 = { style: items3, children: items4 };
    items3 = [tmp.coverArtContainer, size];
    let tmp13Result = null != coverURL;
    const tmp17 = closure_10;
    const tmp18 = closure_6;
    if (tmp13Result) {
      tmp13Result = first !== coverURL;
    }
    if (tmp13Result) {
      const obj5 = { style: tmp.coverArtPlaceholder, children: closure_9(trackAction(coverURL[14]), obj6) };
      const GameProfileSkeletonContainer = tmp9(tmp7[14]).GameProfileSkeletonContainer;
      obj6 = { style: tmp.coverArt };
      tmp13Result = tmp13(GameProfileSkeletonContainer, obj5);
    }
    items4 = [tmp13Result, ];
    const obj7 = { source: obj8, style: tmp.coverArt, onLoadEnd: callback1 };
    obj8 = { uri: coverURL };
    items4[1] = closure_9(trackAction(coverURL[15]), obj7);
    tmp13Result1 = tmp17(tmp18, obj4);
  } else {
    const obj9 = { style: items5, children: closure_9(game(coverURL[16]).Text, obj10) };
    items5 = [tmp.coverArtFallback, size];
    obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    tmp13Result1 = tmp13(closure_6, obj9);
  }
  return closure_9(tmp14, obj2);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGameSkeleton(arg0) {
  let animationDelayMs;
  let cardWidth;
  let items;
  const obj = react2;
  const cResult = obj.c(12);
  ({ animationDelayMs, cardWidth } = arg0);
  const tmp4 = closure_15();
  const result = cardWidth * c12;
  if (cResult[0] === cardWidth) {
    let tmp6;
    let tmp7;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== cardWidth) {
      const obj2 = { width: cardWidth };
      cResult[3] = cardWidth;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      let tmp8;
      if (cResult[6] === tmp4.skeletonArtwork) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === animationDelayMs) {
        if (cResult[9] === tmp7) {
          let tmp12;
          if (cResult[10] === tmp8) {
            tmp12 = cResult[11];
          }
          return tmp12;
        }
      }
      const obj3 = { animationDelayMs, style: tmp7, children: tmp8 };
      const tmp14 = React4(GameProfileSkeleton.GameProfileSkeletonContainer, obj3);
      cResult[8] = animationDelayMs;
      cResult[9] = tmp7;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
    const obj4 = { style: items };
    items = [tmp4.skeletonArtwork, tmp6];
    const tmp11 = React4(GameProfileSkeletonDefault, obj4);
    cResult[5] = tmp6;
    cResult[6] = tmp4.skeletonArtwork;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  size = { width: cardWidth, height: result };
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = size;
  tmp6 = size;
}) : (function GameProfileSimilarGameSkeleton(cardWidth) {
  let items;
  let obj2;
  cardWidth = cardWidth.cardWidth;
  const animationDelayMs = cardWidth.animationDelayMs;
  const obj = { animationDelayMs, style: { width: cardWidth }, children: React4(GameProfileSkeletonDefault, obj2) };
  const tmp = closure_15();
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  obj2 = { style: items };
  items = [tmp.skeletonArtwork, ];
  size = { width: cardWidth, height: cardWidth * c12 };
  items[1] = size;
  return React4(GameProfileSkeletonContainer, obj);
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGamesSkeleton(cardWidth) {
  let container;
  let header;
  let skeletonCards;
  let tmp5;
  let obj = cardWidth(576);
  const cResult = obj.c(9);
  const tmp = cardWidth;
  cardWidth = cardWidth.cardWidth;
  const tmp4 = closure_15();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] !== cardWidth) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, arg1) => {
      const obj = { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth };
      return React4(closure_19, obj, arg1);
    });
    cResult[0] = cardWidth;
    cResult[1] = arr;
    tmp5 = arr;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.skeletonCards) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp4.header) {
        let tmp10;
        if (cResult[7] === tmp8) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
    const obj2 = { style: container, headerStyle: header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: tmp8 };
    const tmp12 = closure_9(tmp(8929).GameProfileSectionSkeleton, obj2);
    cResult[5] = tmp4.container;
    cResult[6] = tmp4.header;
    cResult[7] = tmp8;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const tmp9 = closure_9(GameProfileSkeletonCardRowDefault, { contentContainerStyle: skeletonCards, children: tmp5 });
  cResult[2] = tmp4.skeletonCards;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function GameProfileSimilarGamesSkeleton(cardWidth) {
  let obj2;
  let tmp2;
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_15();
  let obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: closure_9(tmp2, obj2) };
  const GameProfileSectionSkeleton = cardWidth(8929).GameProfileSectionSkeleton;
  obj2 = {
    contentContainerStyle: tmp.skeletonCards,
    children: Array.from({ length: 4 }, (arg0, arg1) => {
      const obj = { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth };
      return React4(closure_19, obj, arg1);
    })
  };
  tmp2 = GameProfileSkeletonCardRowDefault;
  return closure_9(GameProfileSectionSkeleton, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGames(arg0) {
  let container;
  let gameId;
  let header;
  let isFetching;
  let similarGames;
  let trackAction;
  let obj = trackAction(576);
  const cResult = obj.c(14);
  ({ gameId, trackAction } = arg0);
  const tmp4 = closure_15();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_7) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  const tmp7 = PX_12;
  if (set.has(gameId)) {
    return null;
  } else if (isFetching) {
    let tmp22;
    if (cResult[0] !== result) {
      const obj2 = { cardWidth: result };
      const tmp25 = closure_9(closure_20, obj2);
      cResult[0] = result;
      cResult[1] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[1];
    }
    return tmp22;
  } else if (0 === similarGames.length) {
    return null;
  } else {
    let tmp9;
    const _Symbol = Symbol;
    ({ container, header } = tmp4);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(trackAction(1126).t["6rLyQB"]);
      cResult[2] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === result) {
      let tmp11;
      if (cResult[4] === trackAction) {
        tmp11 = cResult[5];
      }
      const sum = result + tmp7;
      if (cResult[6] === similarGames) {
        if (cResult[7] === tmp11) {
          let tmp13;
          if (cResult[8] === sum) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.header) {
              let tmp18;
              if (cResult[12] === tmp13) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
          const obj3 = { style: container, headerStyle: header, title: tmp9, children: null };
          class M {
            constructor(arg0) {
              obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
              return jsx(closure_18, obj);
            }
          }
          const tmp20 = closure_9(GameProfileSectionDefault, obj3);
          cResult[10] = tmp4.container;
          cResult[11] = tmp4.header;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const obj4 = { horizontal: true, renderScrollComponent: GameProfileHorizontalScrollViewDefault, data: null, renderItem: tmp11, showsHorizontalScrollIndicator: false, ItemSeparatorComponent, ListHeaderComponent: ListFooterComponent, ListFooterComponent, decelerationRate: "fast", snapToInterval: sum };
      const FlashList = tmp(8608).FlashList;
      class M {
        constructor(arg0) {
          obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
          return jsx(closure_18, obj);
        }
      }
      const tmp17 = closure_9(FlashList, obj4);
      cResult[6] = similarGames;
      cResult[7] = tmp11;
      cResult[8] = sum;
      cResult[9] = tmp17;
      tmp13 = tmp17;
    }
    class M {
      constructor(arg0) {
        obj = { game: arg0.item, trackAction, cardWidth: closure_1 };
        return jsx(closure_18, obj);
      }
    }
    cResult[3] = result;
    cResult[4] = trackAction;
    cResult[5] = M;
    tmp11 = M;
  }
}) : (function GameProfileSimilarGames(arg0) {
  let FlashList;
  let cardWidth;
  let gameId;
  let intl;
  let isFetching;
  let obj5;
  let require;
  let similarGames;
  let trackAction;
  ({ gameId, trackAction: require } = arg0);
  const tmp = closure_15();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_7) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  let tmp7 = null;
  const tmp5 = PX_12;
  if (!set.has(gameId)) {
    let tmp8;
    if (isFetching) {
      let obj = { cardWidth: result };
      tmp8 = closure_9(closure_20, obj);
    } else {
      tmp8 = null;
      if (0 !== similarGames.length) {
        ({ container: obj2.style, header: obj2.headerStyle } = tmp);
        const obj3 = { style: null, headerStyle: null, title: intl.string(intl2.t["6rLyQB"]), children: closure_9(FlashList, obj5) };
        const tmp2Result = GameProfileSectionDefault;
        intl = intl2.intl;
        obj5 = {
          horizontal: true,
          renderScrollComponent: GameProfileHorizontalScrollViewDefault,
          data: similarGames,
          renderItem(game) {
                  const obj = { game: game.item, trackAction: require, cardWidth };
                  return React4(closure_18, obj);
                },
          showsHorizontalScrollIndicator: false,
          ItemSeparatorComponent,
          ListHeaderComponent: ListFooterComponent,
          ListFooterComponent,
          decelerationRate: "fast",
          snapToInterval: result + tmp5
        };
        FlashList = defaultMVCPConfig.FlashList;
        tmp8 = closure_9(tmp2Result, obj3);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default tmp6;
