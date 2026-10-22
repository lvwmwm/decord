// Module ID: 9449
// Function ID: 9450
// Name: GameProfileSimilarGames
// Dependencies: [19, 17, 9269, 21, 587, 4969, 558, 576, 9214, 9216, 9220, 1128, 9304, 9274, 9313, 9306, 9450, 1499, 7206, 9284, 2]

// Module 9449 (GameProfileSimilarGames)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9214 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9220 */;
import GameProfileConstants from "GameProfileConstants" /* 9269 */;
import GameProfileHorizontalScrollViewDefault from "GameProfileHorizontalScrollView" /* 9284 */;
import GameProfileSkeletonDefault from "GameProfileSkeleton" /* 9304 */;
import GameProfileSectionDefault from "GameProfileSection" /* 9306 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 9313 */;
import useSimilarGamesDefault from "useSimilarGames" /* 9450 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, obj1, openGameProfileModalResult;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp;
const GameProfileSkeleton = tmp(9304);
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const jsx = Fragment.jsx;
const PX_12 = nativeDefault.space.PX_12;
let c9 = 1.34;
const PX_16 = nativeDefault.space.PX_16;
const PX_122 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, spacer: { width: PX_12 }, listPadding: { width: PX_16 }, coverArtContainer: obj5, coverArt: { width: "100%", height: "100%" }, skeletonCards: obj6, skeletonArtwork: obj7 };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { borderRadius: nativeDefault.radii.sm };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Spacer() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.spacer) {
    const tmp6 = <hasOwnProperty style={tmp2.spacer} />;
    cResult[0] = tmp2.spacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Spacer() {
  return <hasOwnProperty style={closure_12().spacer} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListPadding() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.listPadding) {
    const tmp6 = <hasOwnProperty style={tmp2.listPadding} />;
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListPadding() {
  return <hasOwnProperty style={closure_12().listPadding} />;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SimilarGameCard(game) {
  let shouldOpenGameProfile;
  let tmp = game;
  let obj = game(shouldOpenGameProfile[7]);
  const cResult = obj.c(38);
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let tmp4 = closure_12();
  const result = cardWidth * c9;
  if (cResult[0] === cardWidth) {
    let tmp6;
    let tmp7;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== game.id) {
      let obj2 = { gameId: game.id, source: tmp(tmp2[8]).GameProfileSources.SimilarGames };
      cResult[3] = game.id;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    const tmp8 = trackAction;
    const tmp9 = trackAction(shouldOpenGameProfile[9])(tmp7);
    shouldOpenGameProfile = tmp9.shouldOpenGameProfile;
    const gameId = tmp9.gameId;
    if (cResult[5] === game.id) {
      if (cResult[6] === gameId) {
        if (cResult[7] === shouldOpenGameProfile) {
          let tmp10;
          let tmp11;
          if (cResult[8] === trackAction) {
            tmp10 = cResult[9];
          }
          if (cResult[10] !== cardWidth) {
            let obj3 = { width: cardWidth };
            cResult[10] = cardWidth;
            cResult[11] = obj3;
            tmp11 = obj3;
          } else {
            tmp11 = cResult[11];
          }
          if (cResult[12] === tmp4.card) {
            let tmp12;
            if (cResult[13] === tmp11) {
              tmp12 = cResult[14];
            }
            if (cResult[15] !== game.name) {
              const intl = tmp(tmp2[11]).intl;
              const obj4 = { gameName: game.name };
              cResult[15] = game.name;
              cResult[16] = intl.formatToPlainString(tmp(shouldOpenGameProfile[11]).t["8QLQB+"], obj4);
              intl.formatToPlainString(tmp(shouldOpenGameProfile[11]).t["8QLQB+"], obj4);
              class A {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  obj = { similarGameId: game.id };
                  tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                  tmp4 = shouldOpenGameProfile;
                  if (tmp4) {
                    tmp5 = gameId;
                    tmp6 = null;
                    tmp4 = null != gameId;
                  }
                  if (tmp4) {
                    tmp7 = closure_1;
                    tmp8 = closure_1(tmp2[10]);
                    obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                    tmp9 = gameId;
                    obj1.gameId = gameId;
                    obj4 = { shouldOpenGameProfile: true, gameId: null };
                    obj4.gameId = gameId;
                    obj1.gameProfileModalChecks = obj4;
                    openGameProfileModal = tmp8.openGameProfileModal;
                    obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                    openGameProfileModalResult = openGameProfileModal(obj1);
                  }
                  return;
                }
              }
            }
            const _Math = Math;
            const rounded = Math.ceil(result);
            const _Math2 = Math;
            const rounded1 = Math.ceil(cardWidth);
            if (cResult[17] === tmp6) {
              let tmp18;
              let tmp19;
              let tmp20;
              if (cResult[18] === tmp4.coverArtContainer) {
                tmp18 = cResult[19];
                tmp19 = cResult[20];
              }
              if (cResult[21] !== tmp4.coverArt) {
                const tmp22 = jsx(tmp8(shouldOpenGameProfile[12]), { style: tmp4.coverArt });
                cResult[21] = tmp4.coverArt;
                cResult[22] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[22];
              }
              if (cResult[23] === tmp4.coverArt) {
                let tmp23;
                if (cResult[24] === tmp20) {
                  tmp23 = cResult[25];
                }
                if (cResult[26] === game) {
                  if (cResult[27] === tmp18) {
                    if (cResult[28] === tmp23) {
                      if (cResult[29] === rounded) {
                        if (cResult[30] === rounded1) {
                          let tmp26;
                          if (cResult[31] === tmp19) {
                            tmp26 = cResult[32];
                          }
                          if (cResult[33] === tmp10) {
                            if (cResult[34] === tmp26) {
                              if (cResult[35] === tmp12) {
                                let tmp29;
                                if (cResult[36] === tmp13) {
                                  tmp29 = cResult[37];
                                }
                                return tmp29;
                              }
                            }
                          }
                          class A {
                            constructor() {
                              tmp2 = closure_2;
                              tmp = closure_0;
                              obj = { similarGameId: game.id };
                              tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                              tmp4 = shouldOpenGameProfile;
                              if (tmp4) {
                                tmp5 = gameId;
                                tmp6 = null;
                                tmp4 = null != gameId;
                              }
                              if (tmp4) {
                                tmp7 = closure_1;
                                tmp8 = closure_1(tmp2[10]);
                                obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                                tmp9 = gameId;
                                obj1.gameId = gameId;
                                obj4 = { shouldOpenGameProfile: true, gameId: null };
                                obj4.gameId = gameId;
                                obj1.gameProfileModalChecks = obj4;
                                openGameProfileModal = tmp8.openGameProfileModal;
                                obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                                openGameProfileModalResult = openGameProfileModal(obj1);
                              }
                              return;
                            }
                          }
                          cResult[33] = tmp10;
                          cResult[34] = tmp26;
                          cResult[35] = tmp12;
                          cResult[36] = tmp13;
                          cResult[37] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                    }
                  }
                }
                class A {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    obj = { similarGameId: game.id };
                    tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                    tmp4 = shouldOpenGameProfile;
                    if (tmp4) {
                      tmp5 = gameId;
                      tmp6 = null;
                      tmp4 = null != gameId;
                    }
                    if (tmp4) {
                      tmp7 = closure_1;
                      tmp8 = closure_1(tmp2[10]);
                      obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                      tmp9 = gameId;
                      obj1.gameId = gameId;
                      obj4 = { shouldOpenGameProfile: true, gameId: null };
                      obj4.gameId = gameId;
                      obj1.gameProfileModalChecks = obj4;
                      openGameProfileModal = tmp8.openGameProfileModal;
                      obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                      openGameProfileModalResult = openGameProfileModal(obj1);
                    }
                    return;
                  }
                }
                const tmp28 = jsx(tmp8(shouldOpenGameProfile[13]), { game, coverImageSize: rounded, iconImageSize: rounded1, coverContainerStyle: tmp19, iconContainerStyle: tmp18, loadingPlaceholder: null });
                cResult[26] = game;
                cResult[27] = tmp18;
                cResult[28] = tmp23;
                cResult[29] = rounded;
                cResult[30] = rounded1;
                cResult[31] = tmp19;
                cResult[32] = tmp28;
                tmp26 = tmp28;
              }
              const tmp25 = jsx(tmp(shouldOpenGameProfile[12]).GameProfileSkeletonContainer, { style: tmp4.coverArt, children: tmp20 });
              class A {
                constructor() {
                  tmp2 = closure_2;
                  tmp = closure_0;
                  obj = { similarGameId: game.id };
                  tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                  tmp4 = shouldOpenGameProfile;
                  if (tmp4) {
                    tmp5 = gameId;
                    tmp6 = null;
                    tmp4 = null != gameId;
                  }
                  if (tmp4) {
                    tmp7 = closure_1;
                    tmp8 = closure_1(tmp2[10]);
                    obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                    tmp9 = gameId;
                    obj1.gameId = gameId;
                    obj4 = { shouldOpenGameProfile: true, gameId: null };
                    obj4.gameId = gameId;
                    obj1.gameProfileModalChecks = obj4;
                    openGameProfileModal = tmp8.openGameProfileModal;
                    obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                    openGameProfileModalResult = openGameProfileModal(obj1);
                  }
                  return;
                }
              }
              cResult[24] = tmp20;
              cResult[25] = tmp25;
              tmp23 = tmp25;
            }
            const items = [, ];
            class A {
              constructor() {
                tmp2 = closure_2;
                tmp = closure_0;
                obj = { similarGameId: game.id };
                tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
                tmp4 = shouldOpenGameProfile;
                if (tmp4) {
                  tmp5 = gameId;
                  tmp6 = null;
                  tmp4 = null != gameId;
                }
                if (tmp4) {
                  tmp7 = closure_1;
                  tmp8 = closure_1(tmp2[10]);
                  obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                  tmp9 = gameId;
                  obj1.gameId = gameId;
                  obj4 = { shouldOpenGameProfile: true, gameId: null };
                  obj4.gameId = gameId;
                  obj1.gameProfileModalChecks = obj4;
                  openGameProfileModal = tmp8.openGameProfileModal;
                  obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                  openGameProfileModalResult = openGameProfileModal(obj1);
                }
                return;
              }
            }
            items[1] = tmp6;
            const items1 = [tmp4.coverArtContainer, tmp6];
            cResult[17] = tmp6;
            cResult[18] = tmp4.coverArtContainer;
            cResult[19] = items1;
            cResult[20] = items;
            tmp19 = items;
            tmp18 = items1;
          }
          const items2 = [tmp4.card, tmp11];
          cResult[12] = tmp4.card;
          class A {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              obj = { similarGameId: game.id };
              tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
              tmp4 = shouldOpenGameProfile;
              if (tmp4) {
                tmp5 = gameId;
                tmp6 = null;
                tmp4 = null != gameId;
              }
              if (tmp4) {
                tmp7 = closure_1;
                tmp8 = closure_1(tmp2[10]);
                obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
                tmp9 = gameId;
                obj1.gameId = gameId;
                obj4 = { shouldOpenGameProfile: true, gameId: null };
                obj4.gameId = gameId;
                obj1.gameProfileModalChecks = obj4;
                openGameProfileModal = tmp8.openGameProfileModal;
                obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
                openGameProfileModalResult = openGameProfileModal(obj1);
              }
              return;
            }
          }
          cResult[14] = items2;
          tmp12 = items2;
        }
      }
    }
    class A {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_0;
        obj = { similarGameId: game.id };
        tmp3 = trackAction(closure_0(closure_2[8]).GameProfileTrackActionActions.ClickSimilarGame, obj);
        tmp4 = shouldOpenGameProfile;
        if (tmp4) {
          tmp5 = gameId;
          tmp6 = null;
          tmp4 = null != gameId;
        }
        if (tmp4) {
          tmp7 = closure_1;
          tmp8 = closure_1(tmp2[10]);
          obj1 = { gameId: null, gameProfileModalChecks: null, source: null };
          tmp9 = gameId;
          obj1.gameId = gameId;
          obj4 = { shouldOpenGameProfile: true, gameId: null };
          obj4.gameId = gameId;
          obj1.gameProfileModalChecks = obj4;
          openGameProfileModal = tmp8.openGameProfileModal;
          obj1.source = tmp(tmp2[8]).GameProfileSources.SimilarGames;
          openGameProfileModalResult = openGameProfileModal(obj1);
        }
        return;
      }
    }
    cResult[5] = game.id;
    cResult[6] = gameId;
    cResult[7] = shouldOpenGameProfile;
    cResult[8] = trackAction;
    cResult[9] = A;
    tmp10 = A;
  }
  size = { width: cardWidth, height: result };
  cResult[0] = cardWidth;
  cResult[1] = result;
  cResult[2] = size;
  tmp6 = size;
}) : (function SimilarGameCard(game) {
  let items2;
  let items3;
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  let tmp = closure_12();
  const result = cardWidth * c9;
  size = { width: cardWidth, height: result };
  let obj = { gameId: game.id, source: game(shouldOpenGameProfile[8]).GameProfileSources.SimilarGames };
  const tmp3 = trackAction(shouldOpenGameProfile[9]);
  const tmp3Result = tmp3(obj);
  shouldOpenGameProfile = tmp3Result.shouldOpenGameProfile;
  const gameId = tmp3Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [tmp.card, { width: cardWidth }];
  const intl = game(shouldOpenGameProfile[11]).intl;
  let obj3 = { gameName: game.name };
  ({ game, coverImageSize: Math.ceil(result), iconImageSize: Math.ceil(cardWidth), coverContainerStyle: items2, iconContainerStyle: items3, loadingPlaceholder: null });
  trackAction(shouldOpenGameProfile[13]);
  items2 = [tmp.coverArtContainer, size];
  items3 = [tmp.coverArtContainer, size];
  const GameProfileSkeletonContainer = game(shouldOpenGameProfile[12]).GameProfileSkeletonContainer;
  return <closure_4 style={items1} onPress={gameId.useCallback(() => {
    let obj3;
    const obj = { similarGameId: game.id };
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, obj);
    let tmp4 = shouldOpenGameProfile;
    if (tmp4) {
      tmp4 = null != gameId;
    }
    if (tmp4) {
      const obj2 = { gameId, gameProfileModalChecks: obj3, source: GameProfileAnalyticUtils.GameProfileSources.SimilarGames };
      obj3 = { shouldOpenGameProfile: true, gameId };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj2);
    }
  }, items)} accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(game(shouldOpenGameProfile[11]).t["8QLQB+"], obj3)}>{null}</closure_4>;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGameSkeleton(arg0) {
  let animationDelayMs;
  let cardWidth;
  const obj = react2;
  const cResult = obj.c(12);
  ({ animationDelayMs, cardWidth } = arg0);
  const tmp4 = closure_12();
  const result = cardWidth * c9;
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
      const tmp14 = jsx(GameProfileSkeleton.GameProfileSkeletonContainer, { animationDelayMs, style: tmp7, children: tmp8 });
      cResult[8] = animationDelayMs;
      cResult[9] = tmp7;
      cResult[10] = tmp8;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
    const items = [tmp4.skeletonArtwork, tmp6];
    const tmp11 = jsx(GameProfileSkeletonDefault, { style: items });
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
  cardWidth = cardWidth.cardWidth;
  const animationDelayMs = cardWidth.animationDelayMs;
  const tmp = closure_12();
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  const items = [tmp.skeletonArtwork, ];
  size = { width: cardWidth, height: cardWidth * c9 };
  items[1] = size;
  return <GameProfileSkeletonContainer animationDelayMs={animationDelayMs} style={{ width: cardWidth }}>{null}</GameProfileSkeletonContainer>;
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGamesSkeleton(cardWidth) {
  let container;
  let header;
  let skeletonCards;
  let tmp5;
  const obj = cardWidth(576);
  const cResult = obj.c(9);
  const tmp = cardWidth;
  cardWidth = cardWidth.cardWidth;
  const tmp4 = closure_12();
  ({ container, header, skeletonCards } = tmp4);
  if (cResult[0] !== cardWidth) {
    const _Array = Array;
    const arr = Array.from({ length: 4 }, (arg0, arg1) => <closure_16 key={arg1} animationDelayMs={arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS} cardWidth={cardWidth} />);
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
    const tmp12 = jsx(tmp(9306).GameProfileSectionSkeleton, { style: container, headerStyle: header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: tmp8 });
    cResult[5] = tmp4.container;
    cResult[6] = tmp4.header;
    cResult[7] = tmp8;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const tmp9 = jsx(GameProfileSkeletonCardRowDefault, { contentContainerStyle: skeletonCards, children: tmp5 });
  cResult[2] = tmp4.skeletonCards;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function GameProfileSimilarGamesSkeleton(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_12();
  const GameProfileSectionSkeleton = cardWidth(9306).GameProfileSectionSkeleton;
  ({ contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => <closure_16 key={arg1} animationDelayMs={arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS} cardWidth={cardWidth} />) });
  GameProfileSkeletonCardRowDefault;
  return <GameProfileSectionSkeleton style={tmp.container} headerStyle={tmp.header} showViewAllSkeleton={false} skeletonTitleWidth={124}>{null}</GameProfileSectionSkeleton>;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileSimilarGames(trackAction) {
  let container;
  let header;
  let isFetching;
  let similarGames;
  const obj = trackAction(576);
  const cResult = obj.c(14);
  trackAction = trackAction.trackAction;
  const gameId = trackAction.gameId;
  const tmp4 = closure_12();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  if (isFetching) {
    let tmp22;
    if (cResult[0] !== result) {
      const tmp25 = <closure_17 cardWidth={result} />;
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
      const intl = tmp(1128).intl;
      const stringResult = intl.string(trackAction(1128).t["6rLyQB"]);
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
          const tmp20 = jsx(GameProfileSectionDefault, { style: container, headerStyle: header, title: tmp9, children: tmp13 });
          cResult[10] = tmp4.container;
          cResult[11] = tmp4.header;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const FlashList = tmp(7206).FlashList;
      const tmp17 = <FlashList horizontal renderScrollComponent={GameProfileHorizontalScrollViewDefault} data={similarGames} renderItem={tmp11} showsHorizontalScrollIndicator={false} ItemSeparatorComponent={ItemSeparatorComponent} ListHeaderComponent={ListFooterComponent} ListFooterComponent={ListFooterComponent} decelerationRate="fast" snapToInterval={sum} />;
      cResult[6] = similarGames;
      cResult[7] = tmp11;
      cResult[8] = sum;
      cResult[9] = tmp17;
      tmp13 = tmp17;
    }
    const fn = function b(game) {
      return <closure_15 game={arg0.item} trackAction={trackAction} cardWidth={importDefault} />;
    };
    cResult[3] = result;
    cResult[4] = trackAction;
    cResult[5] = fn;
    tmp11 = fn;
  }
}) : (function GameProfileSimilarGames(trackAction) {
  let cardWidth;
  let isFetching;
  let similarGames;
  let tmp7;
  trackAction = trackAction.trackAction;
  const gameId = trackAction.gameId;
  const tmp = closure_12();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  if (isFetching) {
    tmp7 = <closure_17 cardWidth={result} />;
  } else {
    tmp7 = null;
    if (0 !== similarGames.length) {
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      GameProfileSectionDefault;
      const intl = trackAction(1128).intl;
      ({
        horizontal: true,
        renderScrollComponent: GameProfileHorizontalScrollViewDefault,
        data: similarGames,
        renderItem(game) {
              return <closure_15 game={arg0.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent,
        ListHeaderComponent: ListFooterComponent,
        ListFooterComponent,
        decelerationRate: "fast",
        snapToInterval: result + tmp5
      });
      const FlashList = trackAction(7206).FlashList;
      tmp7 = <tmp2Result style={null} headerStyle={null} title={intl.string(trackAction(1128).t["6rLyQB"])}>{null}</tmp2Result>;
    }
  }
  return tmp7;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default tmp5;
