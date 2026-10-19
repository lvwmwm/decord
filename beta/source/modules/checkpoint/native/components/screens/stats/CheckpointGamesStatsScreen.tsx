// Module ID: 12778
// Function ID: 12779
// Name: CheckpointGamesStatsScreen
// Dependencies: [17, 2022, 12742, 5537, 21, 5191, 587, 558, 576, 504, 1128, 3141, 12766, 9514, 12764, 12770, 1417, 5128, 7955, 12775, 5187, 2]

// Module 12778 (CheckpointGamesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import _modDef3141 from "module_3141" /* 3141 */;
import FastImageDefault from "FastImage" /* 5128 */;
import GameControllerIcon from "GameControllerIcon" /* 9514 */;
import CheckpointTextDefault from "CheckpointText" /* 12764 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12766 */;
import NumberAnimationDefault from "NumberAnimation" /* 12770 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 12775 */;
import GameStore from "GameStore" /* 2022 */;
import CheckpointStore from "CheckpointStore" /* 12742 */;
import CheckpointConstants from "CheckpointConstants" /* 5537 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let stats;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, number: obj4, games: obj5, game: obj6, cover: { width: "87.5%", aspectRatio: 0.75 }, coverImage: { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, unknownCover: obj7, rank: { position: "absolute", bottom: 0, left: 0 }, gameText: obj8, gameName: { color: CHECKPOINT_WHITE }, gameSessions: { fontSize: 14, lineHeight: 18 } };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj6 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj7 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj8 = { gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGamesStatsScreen() {
  let arr2;
  let items1;
  let items2;
  let items3;
  let tmp11;
  let tmp28;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(51);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      stats = stats.stats;
      let games;
      if (stats != null) {
        games = stats.games;
      }
      return games;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let totalGamesPlayed;
  const tmp9 = cResult[2];
  if (stateFromStores != null) {
    totalGamesPlayed = stateFromStores.totalGamesPlayed;
  }
  if (tmp9 !== totalGamesPlayed) {
    let num3;
    const _Math = Math;
    if (stateFromStores != null) {
      num3 = stateFromStores.totalGamesPlayed;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const roundResult = round(num3);
    let totalGamesPlayed1;
    if (stateFromStores != null) {
      totalGamesPlayed1 = stateFromStores.totalGamesPlayed;
    }
    cResult[2] = totalGamesPlayed1;
    cResult[3] = roundResult;
    tmp11 = roundResult;
  } else {
    tmp11 = cResult[3];
  }
  let games1;
  const tmp14 = cResult[4];
  if (stateFromStores != null) {
    games1 = stateFromStores.games;
  }
  if (tmp14 !== games1) {
    let games2;
    if (stateFromStores != null) {
      games2 = stateFromStores.games;
    }
    if (games2 == null) {
      games2 = [];
    }
    let games3;
    if (stateFromStores != null) {
      games3 = stateFromStores.games;
    }
    cResult[4] = games3;
    cResult[5] = games2;
    arr2 = games2;
  } else {
    arr2 = cResult[5];
  }
  if (cResult[6] === tmp11) {
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp4.title) {
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp21;
        let tmp22;
        let flag;
        let tmp23;
        let tmp24;
        let tmp35;
        if (cResult[9] === tmp4.titleText) {
          tmp17 = cResult[10];
          tmp18 = cResult[11];
          tmp19 = cResult[12];
          tmp21 = cResult[14];
          tmp22 = cResult[15];
          flag = cResult[16];
          tmp23 = cResult[17];
          tmp24 = cResult[18];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp21 + " " + tmp22;
        if (cResult[20] !== tmp11) {
          const obj2 = { end: tmp11 };
          const tmp38 = metroImportDefault(NumberAnimationDefault, obj2);
          cResult[20] = tmp11;
          cResult[21] = tmp38;
          tmp35 = tmp38;
        } else {
          tmp35 = cResult[21];
        }
        if (cResult[22] === tmp17) {
          if (cResult[23] === tmp4.number) {
            if (cResult[24] === tmp35) {
              if (cResult[25] === flag) {
                let tmp39;
                let tmp42;
                let tmp45;
                if (cResult[26] === combined) {
                  tmp39 = cResult[27];
                }
                if (cResult[28] !== tmp11) {
                  const intl2 = tmp(1128).intl;
                  const obj3 = { numGames: tmp11 };
                  const formatResult = intl2.format(_modDef3141.aJMJ6b, obj3);
                  cResult[28] = tmp11;
                  cResult[29] = formatResult;
                  tmp42 = formatResult;
                } else {
                  tmp42 = cResult[29];
                }
                if (cResult[30] !== tmp42) {
                  const obj4 = { variant: "heading-lg/medium", children: tmp42 };
                  const tmp48 = metroImportDefault(CheckpointTextDefault, obj4);
                  cResult[30] = tmp42;
                  cResult[31] = tmp48;
                  tmp45 = tmp48;
                } else {
                  tmp45 = cResult[31];
                }
                if (cResult[32] === tmp18) {
                  if (cResult[33] === tmp39) {
                    if (cResult[34] === tmp45) {
                      let tmp49;
                      if (cResult[35] === tmp23) {
                        tmp49 = cResult[36];
                      }
                      let games = tmp4.games;
                      if (cResult[37] !== arr2) {
                        let tmp53;
                        const _Symbol = Symbol;
                        if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                          class F {
                            constructor(game, arg1) {
                              game = game.game;
                              const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
                              return closure_1_7(closure_1_10, obj, game.id);
                            }
                          }
                          cResult[39] = F;
                          tmp53 = F;
                        } else {
                          class F {
                            constructor(game, arg1) {
                              game = game.game;
                              const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
                              return closure_1_7(closure_1_10, obj, game.id);
                            }
                          }
                        }
                        const mapped = arr2.map(tmp53);
                        cResult[37] = arr2;
                        cResult[38] = mapped;
                      } else {
                        class F {
                          constructor(game, arg1) {
                            game = game.game;
                            const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
                            return closure_1_7(closure_1_10, obj, game.id);
                          }
                        }
                      }
                      if (cResult[40] === tmp4.games) {
                        class F {
                          constructor(game, arg1) {
                            game = game.game;
                            const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
                            return closure_1_7(closure_1_10, obj, game.id);
                          }
                        }
                        if (cResult[43] === tmp19) {
                          class F {
                            constructor(game, arg1) {
                              game = game.game;
                              const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
                              return closure_1_7(closure_1_10, obj, game.id);
                            }
                          }
                        }
                        const obj5 = { style: tmp24, children: items1 };
                        items1 = [tmp49, tmp55];
                        cResult[43] = tmp19;
                        cResult[44] = tmp49;
                        cResult[45] = tmp55;
                        cResult[46] = tmp24;
                        cResult[47] = metroImportAll(tmp19, obj5);
                        const tmp61 = metroImportAll(tmp19, obj5);
                      }
                      const obj6 = { style: games, children: tmp52 };
                      cResult[40] = tmp4.games;
                      cResult[41] = tmp52;
                      cResult[42] = metroImportDefault(View, obj6);
                      const tmp58 = metroImportDefault(View, obj6);
                    }
                  }
                }
                const obj7 = { children: items2 };
                items2 = [tmp23, tmp39, tmp45];
                const tmp51 = metroImportAll(tmp18, obj7);
                cResult[32] = tmp18;
                cResult[33] = tmp39;
                cResult[34] = tmp45;
                cResult[35] = tmp23;
                cResult[36] = tmp51;
                tmp49 = tmp51;
              }
            }
          }
        }
        const obj8 = { accessible: flag, accessibilityLabel: combined, style: tmp4.number, children: tmp35 };
        const tmp41 = metroImportDefault(tmp17, obj8);
        cResult[22] = tmp17;
        cResult[23] = tmp4.number;
        cResult[24] = tmp35;
        cResult[25] = flag;
        cResult[26] = combined;
        cResult[27] = tmp41;
        tmp39 = tmp41;
      }
    }
  }
  const intl = tmp(1128).intl;
  const stringResult = intl.string(_modDef3141.HM2fjf);
  const container = tmp4.container;
  const tmp26 = CheckpointScreenDefault;
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(game, arg1) {
        game = game.game;
        const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
        return closure_1_7(closure_1_10, obj, game.id);
      }
    }
    const obj9 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
    const tmp30 = metroImportDefault(GameControllerIcon.GameControllerIcon, obj9);
    cResult[19] = tmp30;
    tmp28 = tmp30;
  } else {
    class F {
      constructor(game, arg1) {
        game = game.game;
        const obj = { game, rank: arg1 + 1, numSessions: game.numSessions };
        return closure_1_7(closure_1_10, obj, game.id);
      }
    }
  }
  const obj10 = { style: tmp4.title, children: items3 };
  items3 = [tmp28, ];
  const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp25Result = CheckpointTextDefault;
  items3[1] = metroImportDefault(tmp25Result, obj11);
  const tmp32 = metroImportAll(View, obj10);
  const toLocaleLowerCaseResult = stringResult.toLocaleLowerCase();
  cResult[6] = tmp11;
  cResult[7] = tmp4.container;
  cResult[8] = tmp4.title;
  cResult[9] = tmp4.titleText;
  cResult[10] = View;
  cResult[11] = View;
  cResult[12] = View;
  cResult[13] = tmp26;
  cResult[14] = tmp11;
  cResult[15] = toLocaleLowerCaseResult;
  cResult[16] = true;
  cResult[17] = tmp32;
  cResult[18] = container;
  tmp24 = container;
  tmp23 = tmp32;
  flag = true;
  tmp22 = toLocaleLowerCaseResult;
  tmp21 = tmp11;
  tmp19 = tmp27;
  tmp18 = tmp27;
  tmp17 = tmp27;
}) : (function CheckpointGamesStatsScreen() {
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj3;
  const tmp = closure_9();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (games == null) {
    games = [];
  }
  const intl = tmp2(1128).intl;
  const stringResult = intl.string(_modDef3141.HM2fjf);
  const obj2 = { children: metroImportAll(View, obj3) };
  const obj5 = { style: tmp.title, children: items1 };
  items1 = [, ];
  obj3 = { style: tmp.container, children: items3 };
  const obj4 = { children: items2 };
  const obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp6 = CheckpointScreenDefault;
  items1[0] = metroImportDefault(GameControllerIcon.GameControllerIcon, obj6);
  const obj7 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp7 = CheckpointTextDefault;
  items1[1] = metroImportDefault(tmp7, obj7);
  items2 = [metroImportAll(View, obj5), , ];
  const obj8 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: metroImportDefault(NumberAnimationDefault, { end: roundResult }) };
  items2[1] = metroImportDefault(View, obj8);
  const obj9 = { variant: "heading-lg/medium", children: intl2.format(_modDef3141.aJMJ6b, { numGames: roundResult }) };
  const tmp8 = CheckpointTextDefault;
  intl2 = tmp2(1128).intl;
  items2[2] = metroImportDefault(tmp8, obj9);
  items3 = [metroImportAll(View, obj4), ];
  const obj10 = {
    style: tmp.games,
    children: games.map((game, index) => {
      game = game.game;
      const obj = { game, rank: index + 1, numSessions: game.numSessions };
      return closure_1_7(closure_1_10, obj, game.id);
    })
  };
  items3[1] = metroImportDefault(View, obj10);
  return metroImportDefault(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCard(arg0) {
  let coverImageHash;
  let first;
  let game;
  let iconHash;
  let id;
  let items1;
  let items2;
  let items3;
  let items4;
  let name;
  let numSessions;
  let obj7;
  let rank;
  let tmp13;
  let tmp7;
  const obj = id(576);
  const cResult = obj.c(43);
  ({ game, rank, numSessions } = arg0);
  id = game.id;
  ({ name, iconHash, coverImageHash } = game);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
      return GameStore.getCoverImageUrl(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = id(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === coverImageHash) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === iconHash) {
        let tmp9;
        if (cResult[6] === id) {
          tmp9 = cResult[7];
        }
        if (cResult[8] === name) {
          if (cResult[9] === numSessions) {
            let tmp14;
            let tmp15;
            let flag;
            let tmp16;
            let tmp25;
            if (cResult[10] === rank) {
              tmp14 = cResult[11];
              tmp15 = cResult[12];
              flag = cResult[13];
              tmp16 = cResult[14];
            }
            if (cResult[15] === tmp9) {
              if (cResult[16] === tmp4.coverImage) {
                let tmp21;
                if (cResult[17] === tmp4.unknownCover) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === rank) {
                  let tmp29;
                  if (cResult[20] === tmp4.rank) {
                    tmp29 = cResult[21];
                  }
                  if (cResult[22] === tmp4.cover) {
                    if (cResult[23] === tmp21) {
                      let tmp33;
                      if (cResult[24] === tmp29) {
                        tmp33 = cResult[25];
                      }
                      if (cResult[26] === name) {
                        let tmp37;
                        if (cResult[27] === tmp4.gameName) {
                          tmp37 = cResult[28];
                        }
                        if (cResult[29] === tmp15) {
                          let tmp40;
                          if (cResult[30] === tmp4.gameSessions) {
                            tmp40 = cResult[31];
                          }
                          if (cResult[32] === tmp4.gameText) {
                            if (cResult[33] === tmp37) {
                              let tmp44;
                              if (cResult[34] === tmp40) {
                                tmp44 = cResult[35];
                              }
                              if (cResult[36] === tmp14) {
                                if (cResult[37] === tmp4.game) {
                                  if (cResult[38] === tmp44) {
                                    if (cResult[39] === flag) {
                                      if (cResult[40] === tmp16) {
                                        let tmp48;
                                        if (cResult[41] === tmp33) {
                                          tmp48 = cResult[42];
                                        }
                                        return tmp48;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj2 = { accessible: flag, accessibilityLabel: tmp16, style: tmp4.game, children: items1 };
                              items1 = [tmp33, tmp44];
                              const tmp50 = closure_8(tmp14, obj2);
                              cResult[36] = tmp14;
                              cResult[37] = tmp4.game;
                              cResult[38] = tmp44;
                              cResult[39] = flag;
                              cResult[40] = tmp16;
                              cResult[41] = tmp33;
                              cResult[42] = tmp50;
                              tmp48 = tmp50;
                            }
                          }
                          const obj3 = { style: tmp4.gameText, children: items2 };
                          items2 = [tmp37, tmp40];
                          const tmp47 = closure_8(View, obj3);
                          cResult[32] = tmp4.gameText;
                          cResult[33] = tmp37;
                          cResult[34] = tmp40;
                          cResult[35] = tmp47;
                          tmp44 = tmp47;
                        }
                        const obj4 = { variant: "experimental/mono-md/bold", style: tmp4.gameSessions, children: tmp15 };
                        const tmp43 = closure_7(CheckpointTextDefault, obj4);
                        cResult[29] = tmp15;
                        cResult[30] = tmp4.gameSessions;
                        cResult[31] = tmp43;
                        tmp40 = tmp43;
                      }
                      const obj5 = { variant: "text-md/semibold", style: tmp4.gameName, lineClamp: 2, children: name };
                      const tmp39 = closure_7(id(5187).Text, obj5);
                      cResult[26] = name;
                      cResult[27] = tmp4.gameName;
                      cResult[28] = tmp39;
                      tmp37 = tmp39;
                    }
                  }
                  const obj6 = { style: tmp4.cover, children: items3 };
                  items3 = [tmp21, tmp29];
                  const tmp36 = closure_8(View, obj6);
                  cResult[22] = tmp4.cover;
                  cResult[23] = tmp21;
                  cResult[24] = tmp29;
                  cResult[25] = tmp36;
                  tmp33 = tmp36;
                }
                const obj8 = { rank, style: tmp4.rank };
                const tmp32 = closure_7(CheckpointRankTagDefault, obj8);
                cResult[19] = rank;
                cResult[20] = tmp4.rank;
                cResult[21] = tmp32;
                tmp29 = tmp32;
              }
            }
            if (null != tmp9) {
              const obj9 = { source: obj7.makeSource(tmp9), style: tmp4.coverImage, resizeMode: "cover" };
              const tmp28 = FastImageDefault;
              obj7 = AvatarUtilsDefault;
              tmp25 = closure_7(tmp28, obj9);
            } else {
              const obj10 = { style: items4, children: closure_7(id(7955).UnknownGameIcon, { size: "lg" }) };
              items4 = [, ];
              ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp4);
              tmp25 = closure_7(View, obj10);
            }
            cResult[15] = tmp9;
            cResult[16] = tmp4.coverImage;
            cResult[17] = tmp4.unknownCover;
            cResult[18] = tmp25;
            tmp21 = tmp25;
          }
        }
        const _Math = Math;
        const rounded = Math.round(numSessions);
        const intl = tmp(1128).intl;
        const obj11 = { gameName: name, rank, numSessions: rounded };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef3141.mqdLhl, obj11);
        cResult[8] = name;
        cResult[9] = numSessions;
        cResult[10] = rank;
        cResult[11] = View;
        cResult[12] = rounded;
        cResult[13] = true;
        cResult[14] = formatToPlainStringResult;
        tmp16 = formatToPlainStringResult;
        flag = true;
        tmp15 = rounded;
        tmp14 = View;
      }
    }
  }
  let applicationIconURL = stateFromStores;
  if (stateFromStores == null) {
    const obj12 = { id, icon: tmp13, fallbackAvatar: false };
    tmp13 = coverImageHash;
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (coverImageHash == null) {
      tmp13 = iconHash;
    }
    applicationIconURL = getApplicationIconURL(obj12);
  }
  cResult[3] = coverImageHash;
  cResult[4] = stateFromStores;
  cResult[5] = iconHash;
  cResult[6] = id;
  cResult[7] = applicationIconURL;
  tmp9 = applicationIconURL;
}) : (function GameCard(game) {
  let coverImageHash;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let name;
  let tmp10Result2;
  let tmp11;
  let tmp12;
  game = game.game;
  const id = game.id;
  ({ name, coverImageHash } = game);
  const rank = game.rank;
  const iconHash = game.iconHash;
  const numSessions = game.numSessions;
  const tmp = closure_9();
  const items = [GameStore];
  const obj = id(504);
  let stateFromStores = obj.useStateFromStores(items, () => GameStore.getCoverImageUrl(id));
  if (stateFromStores == null) {
    const obj2 = { id, icon: coverImageHash, fallbackAvatar: false };
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (coverImageHash == null) {
      coverImageHash = iconHash;
    }
    stateFromStores = getApplicationIconURL(obj2);
  }
  const rounded = Math.round(numSessions);
  const obj3 = { accessible: true, accessibilityLabel: intl.formatToPlainString(_modDef3141.mqdLhl, { gameName: name, rank, numSessions: rounded }), style: tmp.game, children: items3 };
  intl = tmp2(1128).intl;
  const obj4 = { style: tmp.cover, children: items2 };
  if (null != stateFromStores) {
    const obj5 = { source: tmp10Result2.makeSource(stateFromStores), style: tmp.coverImage, resizeMode: "cover" };
    const tmp10Result = FastImageDefault;
    tmp10Result2 = AvatarUtilsDefault;
    tmp12 = closure_7(tmp10Result, obj5);
    tmp11 = closure_7;
  } else {
    tmp11 = closure_7;
    const obj6 = { style: items1, children: closure_7(id(7955).UnknownGameIcon, { size: "lg" }) };
    items1 = [, ];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    tmp12 = closure_7(tmp9, obj6);
  }
  items2 = [tmp12, ];
  const obj7 = { rank, style: tmp.rank };
  items2[1] = tmp11(CheckpointRankTagDefault, obj7);
  items3 = [closure_8(View, obj4), ];
  const obj8 = { style: tmp.gameText, children: items4 };
  items4 = [, ];
  const obj9 = { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name };
  items4[0] = tmp11(id(5187).Text, obj9);
  const obj10 = { variant: "experimental/mono-md/bold", style: tmp.gameSessions, children: rounded };
  items4[1] = tmp11(CheckpointTextDefault, obj10);
  items3[1] = closure_8(View, obj8);
  return closure_8(View, obj3);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default tmp5;
