// Module ID: 13478
// Function ID: 13479
// Name: CheckpointGamesStatsScreen
// Dependencies: [17, 2020, 13236, 6054, 21, 5005, 587, 558, 576, 504, 13249, 1125, 3090, 13442, 13443, 13444, 13456, 13436, 13438, 9682, 13450, 1415, 5707, 8129, 13458, 5271, 2]

// Module 13478 (CheckpointGamesStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import _modDef3090 from "module_3090" /* 3090 */;
import FastImageDefault from "FastImage" /* 5707 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13438 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13442 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13444 from "module_13444" /* 13444 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13450 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13456 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13458 */;
import GameStore from "GameStore" /* 2020 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let list;

let CHECKPOINT_PRIMARY;
let c9;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const View = react_native.View;
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: metroRequire, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, globalHeading: obj5, globe: { width: 75, height: 56 }, title: obj6, titleText: { flexShrink: 1 }, number: obj7, games: obj8, game: obj9, cover: { width: "87.5%", aspectRatio: 0.75 }, coverImage: { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, unknownCover: obj10, rank: { position: "absolute", bottom: 0, left: 0 }, gameText: obj11, gameName: { color: CHECKPOINT_WHITE }, gameLabel: { fontSize: 14, lineHeight: 18 } };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj10 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj11 = { gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGamesStatsScreen() {
  let items3;
  let items4;
  let items6;
  let stateFromStores1;
  let stringResult1;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp20;
  let tmp5;
  let tmp6;
  let tmp69;
  let tmp76;
  let tmp9;
  let toLocaleLowerCaseResult;
  const tmp = stateFromStores1;
  let obj = stateFromStores1(576);
  const cResult = obj.c(86);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      const stats = CheckpointStore.stats;
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp10 = C;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CheckpointStore];
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp16;
    tmp14 = tmp16;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  let totalGamesPlayed;
  const tmp18 = cResult[6];
  if (stateFromStores != null) {
    totalGamesPlayed = stateFromStores.totalGamesPlayed;
  }
  if (tmp18 !== totalGamesPlayed) {
    let num7;
    const _Math = Math;
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    if (num7 == null) {
      num7 = 0;
    }
    const roundResult = round(num7);
    let totalGamesPlayed1;
    if (stateFromStores != null) {
      totalGamesPlayed1 = stateFromStores.totalGamesPlayed;
    }
    cResult[6] = totalGamesPlayed1;
    cResult[7] = roundResult;
    tmp20 = roundResult;
  } else {
    tmp20 = cResult[7];
  }
  let games1;
  const tmp23 = cResult[8];
  if (stateFromStores != null) {
    games1 = stateFromStores.games;
  }
  if (tmp23 !== games1) {
    let games;
    let games3;
    if (stateFromStores != null) {
      games3 = stateFromStores.games;
    }
    if (games3 == null) {
      games3 = [];
    }
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    if (stateFromStores != null) {
      games = stateFromStores.games;
    }
    cResult[8] = games;
    cResult[9] = games3;
  }
  if (cResult[10] === stateFromStores1) {
    if (cResult[11] === stateFromStores2) {
      if (cResult[12] === tmp20) {
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp4.games) {
            if (cResult[15] === tmp4.globalContainer) {
              if (cResult[16] === tmp4.globalHeading) {
                if (cResult[17] === tmp4.globe) {
                  if (cResult[18] === tmp4.header) {
                    if (cResult[19] === tmp4.title) {
                      if (cResult[20] === tmp4.titleText) {
                        class C {
                          constructor() {
                            const globalStats = CheckpointStore.globalStats;
                            let games;
                            if (globalStats != null) {
                              games = globalStats.games;
                            }
                            return games;
                          }
                        }
                      }
                      const _Symbol3 = Symbol;
                      class C {
                        constructor() {
                          const globalStats = CheckpointStore.globalStats;
                          let games;
                          if (globalStats != null) {
                            games = globalStats.games;
                          }
                          return games;
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
  Symbol.for("react.early_return_sentinel");
  let intl = tmp(1125).intl;
  let stringResult = intl.string(_modDef3090.HM2fjf);
  if (!stateFromStores2) {
    if (null != stateFromStores1) {
      if (cResult[31] === tmp4.container) {
        let tmp39;
        let tmp44;
        if (cResult[34] !== tmp4.globe) {
          let obj2 = { animatedUri: null, staticUri: _modDef13444, style: tmp4.globe };
          const tmp37Result = CheckpointApngPlayerDefault;
          class C {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let games;
              if (globalStats != null) {
                games = globalStats.games;
              }
              return games;
            }
          }
          const tmp42 = closure_8(tmp37Result, obj2);
          cResult[34] = tmp4.globe;
          cResult[35] = tmp42;
          tmp39 = tmp42;
        } else {
          tmp39 = cResult[35];
        }
        const _Symbol = Symbol;
        class C {
          constructor() {
            const globalStats = CheckpointStore.globalStats;
            let games;
            if (globalStats != null) {
              games = globalStats.games;
            }
            return games;
          }
        }
        if (tmp43 === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { isStepHeading: true, children: stringResult1.toLocaleUpperCase() };
          const tmp37Result4 = CheckpointDisplayTextDefault;
          class C {
            constructor() {
              const globalStats = CheckpointStore.globalStats;
              let games;
              if (globalStats != null) {
                games = globalStats.games;
              }
              return games;
            }
          }
          stringResult1 = obj8.string(_modDef3090.qbCgI7);
          const tmp47 = closure_8(tmp37Result4, obj3);
          cResult[36] = tmp47;
          tmp44 = tmp47;
        } else {
          tmp44 = cResult[36];
        }
        if (cResult[37] === tmp4.globalHeading) {
          if (cResult[38] === tmp39) {
            let tmp48;
            if (cResult[39] === tmp44) {
              tmp48 = cResult[40];
            }
            const _Symbol2 = Symbol;
            class C {
              constructor() {
                const globalStats = CheckpointStore.globalStats;
                let games;
                if (globalStats != null) {
                  games = globalStats.games;
                }
                return games;
              }
            }
            if (cResult[42] === tmp4.header) {
              let tmp58;
              const games2 = tmp4.games;
              if (cResult[45] !== stateFromStores1) {
                const mapped = closure_6.map((list) => {
                  list = list.list;
                  const first = stateFromStores1[list][0];
                  if (null == first) {
                    return null;
                  } else {
                    const intl = intl5.intl;
                    const stringResult = intl.string(tmp);
                    const _HermesInternal = HermesInternal;
                    const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: "" + first.name + ", " + stringResult };
                    return metroImportAll(closure_11, obj, list);
                  }
                });
                class C {
                  constructor() {
                    const globalStats = CheckpointStore.globalStats;
                    let games;
                    if (globalStats != null) {
                      games = globalStats.games;
                    }
                    return games;
                  }
                }
                cResult[46] = mapped;
                tmp58 = mapped;
              } else {
                tmp58 = cResult[46];
              }
              class C {
                constructor() {
                  const globalStats = CheckpointStore.globalStats;
                  let games;
                  if (globalStats != null) {
                    games = globalStats.games;
                  }
                  return games;
                }
              }
              const obj4 = { style: games2, children: tmp58 };
              cResult[47] = tmp4.games;
              cResult[48] = tmp58;
              cResult[49] = closure_8(View, obj4);
              const tmp64 = closure_8(View, obj4);
            }
            const obj5 = { style: tmp4.header, children: items3 };
            items3 = [tmp48, tmp53];
            cResult[42] = tmp4.header;
            cResult[43] = tmp48;
            cResult[44] = closure_9(View, obj5);
            const tmp57 = closure_9(View, obj5);
          }
        }
        const obj6 = { style: tmp4.globalHeading, children: items4 };
        items4 = [tmp39, tmp44];
        const tmp51 = closure_9(View, obj6);
        cResult[37] = tmp4.globalHeading;
        cResult[38] = tmp39;
        cResult[39] = tmp44;
        cResult[40] = tmp51;
        tmp48 = tmp51;
      }
      const items5 = [tmp4.container, ];
      class C {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let games;
          if (globalStats != null) {
            games = globalStats.games;
          }
          return games;
        }
      }
      cResult[31] = tmp4.container;
      cResult[32] = tmp4.globalContainer;
      cResult[33] = items5;
    }
    cResult[10] = stateFromStores1;
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    cResult[11] = stateFromStores2;
    cResult[12] = tmp20;
    cResult[13] = tmp4.container;
    cResult[14] = tmp4.games;
    cResult[15] = tmp4.globalContainer;
    cResult[16] = tmp4.globalHeading;
    cResult[17] = tmp4.globe;
    cResult[18] = tmp4.header;
    cResult[19] = tmp4.title;
    cResult[20] = tmp4.titleText;
    cResult[21] = tmp73;
    cResult[22] = tmp72;
    cResult[23] = tmp71;
    cResult[24] = tmp70;
    cResult[25] = flag;
    cResult[26] = tmp69;
    cResult[27] = tmp68;
    cResult[28] = tmp65;
    cResult[29] = tmp67;
    cResult[30] = toLocaleLowerCaseResult;
  }
  const container = tmp4.container;
  CheckpointScreenDefault;
  if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { size: "refresh_sm", color: null };
    class C {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let games;
        if (globalStats != null) {
          games = globalStats.games;
        }
        return games;
      }
    }
    const tmp79 = closure_8(tmp(9682).GameControllerIcon, obj7);
    cResult[54] = tmp79;
    tmp76 = tmp79;
  } else {
    tmp76 = cResult[54];
  }
  const obj9 = { style: tmp4.title, children: items6 };
  items6 = [tmp76, ];
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp37Result6 = CheckpointTextDefault;
  items6[1] = closure_8(tmp37Result6, obj10);
  tmp69 = closure_9(View, obj9);
  toLocaleLowerCaseResult = stringResult.toLocaleLowerCase();
}) : (function CheckpointGamesStatsScreen() {
  let intl2;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj5;
  let stateFromStores1;
  let stringResult1;
  const tmp = closure_10();
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  let obj2 = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const items2 = [CheckpointStore];
  let num;
  const obj3 = stateFromStores1(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const obj = stateFromStores1(dependencyMap[10]);
    return obj.hasCheckpointGames(CheckpointStore.stats);
  });
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
  let intl = tmp2(1125).intl;
  let stringResult = intl.string(_modDef3090.HM2fjf);
  if (!stateFromStores2) {
    let obj4;
    if (null != stateFromStores1) {
      obj4 = { children: closure_9(View, obj5) };
      obj5 = { style: items3, children: items6 };
      items3 = [, ];
      ({ container: arr8[0], globalContainer: arr8[1] } = tmp);
      const obj6 = { style: tmp.header, children: items5 };
      const obj7 = { style: tmp.globalHeading, children: items4 };
      const obj8 = { animatedUri: _modDef13443, staticUri: _modDef13444, style: tmp.globe };
      const tmp8Result = CheckpointApngPlayerDefault;
      items4 = [closure_8(tmp8Result, obj8), ];
      const obj9 = { isStepHeading: true, children: stringResult1.toLocaleUpperCase() };
      const tmp8Result5 = CheckpointDisplayTextDefault;
      const intl3 = tmp2(1125).intl;
      stringResult1 = intl3.string(_modDef3090.qbCgI7);
      items4[1] = closure_8(tmp8Result5, obj9);
      items5 = [closure_9(View, obj7), ];
      const obj10 = { variant: "heading-lg/medium", children: intl4.string(_modDef3090["0oDeiM"]) };
      const tmp8Result6 = CheckpointTextDefault;
      intl4 = tmp2(1125).intl;
      items5[1] = closure_8(tmp8Result6, obj10);
      items6 = [closure_9(View, obj6), ];
      const obj11 = {
        style: tmp.games,
        children: closure_6.map((list) => {
              list = list.list;
              const first = stateFromStores1[list][0];
              if (null == first) {
                return null;
              } else {
                const intl = intl5.intl;
                const stringResult = intl.string(tmp);
                const _HermesInternal = HermesInternal;
                const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: "" + first.name + ", " + stringResult };
                return metroImportAll(closure_11, obj, list);
              }
            })
      };
      items6[1] = closure_8(View, obj11);
    }
    return closure_8(tmp10, obj4);
  }
  const obj12 = { children: closure_9(View, obj13) };
  const obj15 = { style: tmp.title, children: items7 };
  items7 = [, ];
  obj13 = { style: tmp.container, children: items9 };
  const obj14 = { children: items8 };
  const obj16 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items7[0] = closure_8(stateFromStores1(9682).GameControllerIcon, obj16);
  const obj17 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp8Result7 = CheckpointTextDefault;
  items7[1] = closure_8(tmp8Result7, obj17);
  items8 = [closure_9(View, obj15), , ];
  const obj18 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_8(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  items8[1] = closure_8(View, obj18);
  const obj19 = { variant: "heading-lg/medium", children: intl2.format(_modDef3090.aJMJ6b, { numGames: roundResult }) };
  const tmp8Result8 = CheckpointTextDefault;
  intl2 = tmp2(1125).intl;
  items8[2] = closure_8(tmp8Result8, obj19);
  items9 = [closure_9(View, obj14), ];
  const obj20 = {
    style: tmp.games,
    children: games.map((game, index) => {
      let intl;
      let obj2;
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { game, rank: sum, label: rounded, accessibilityLabel: intl.formatToPlainString(_modDef3090.mqdLhl, obj2) };
      intl = stateFromStores1(dependencyMap[11]).intl;
      obj2 = { gameName: game.name, rank: sum, numSessions: rounded };
      return closure_1_8(closure_1_11, obj, game.id);
    })
  };
  items9[1] = closure_8(View, obj20);
  obj4 = obj12;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameCard(arg0) {
  let accessibilityLabel;
  let coverImageHash;
  let first;
  let game;
  let iconHash;
  let id;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let name;
  let obj6;
  let rank;
  let tmp13;
  let tmp7;
  const obj = id(576);
  const cResult = obj.c(34);
  ({ game, rank, label, accessibilityLabel } = arg0);
  id = game.id;
  ({ name, iconHash, coverImageHash } = game);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
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
        let tmp18;
        if (cResult[6] === id) {
          tmp9 = cResult[7];
        }
        if (cResult[8] === tmp9) {
          if (cResult[9] === tmp4.coverImage) {
            let tmp14;
            if (cResult[10] === tmp4.unknownCover) {
              tmp14 = cResult[11];
            }
            if (cResult[12] === rank) {
              let tmp22;
              if (cResult[13] === tmp4.rank) {
                tmp22 = cResult[14];
              }
              if (cResult[15] === tmp4.cover) {
                if (cResult[16] === tmp14) {
                  let tmp27;
                  if (cResult[17] === tmp22) {
                    tmp27 = cResult[18];
                  }
                  if (cResult[19] === name) {
                    let tmp31;
                    if (cResult[20] === tmp4.gameName) {
                      tmp31 = cResult[21];
                    }
                    if (cResult[22] === label) {
                      let tmp34;
                      if (cResult[23] === tmp4.gameLabel) {
                        tmp34 = cResult[24];
                      }
                      if (cResult[25] === tmp4.gameText) {
                        if (cResult[26] === tmp31) {
                          let tmp38;
                          if (cResult[27] === tmp34) {
                            tmp38 = cResult[28];
                          }
                          if (cResult[29] === accessibilityLabel) {
                            if (cResult[30] === tmp4.game) {
                              if (cResult[31] === tmp38) {
                                let tmp42;
                                if (cResult[32] === tmp27) {
                                  tmp42 = cResult[33];
                                }
                                return tmp42;
                              }
                            }
                          }
                          const obj2 = { accessible: true, accessibilityLabel, style: tmp4.game, children: items1 };
                          items1 = [tmp27, tmp38];
                          const tmp45 = closure_9(View, obj2);
                          cResult[29] = accessibilityLabel;
                          cResult[30] = tmp4.game;
                          cResult[31] = tmp38;
                          cResult[32] = tmp27;
                          cResult[33] = tmp45;
                          tmp42 = tmp45;
                        }
                      }
                      const obj3 = { style: tmp4.gameText, children: items2 };
                      items2 = [tmp31, tmp34];
                      const tmp41 = closure_9(View, obj3);
                      cResult[25] = tmp4.gameText;
                      cResult[26] = tmp31;
                      cResult[27] = tmp34;
                      cResult[28] = tmp41;
                      tmp38 = tmp41;
                    }
                    const obj4 = { variant: "experimental/mono-md/bold", style: tmp4.gameLabel, children: label };
                    const tmp37 = closure_8(CheckpointTextDefault, obj4);
                    cResult[22] = label;
                    cResult[23] = tmp4.gameLabel;
                    cResult[24] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj5 = { variant: "text-md/semibold", style: tmp4.gameName, lineClamp: 2, children: name };
                  const tmp33 = closure_8(id(5271).Text, obj5);
                  cResult[19] = name;
                  cResult[20] = tmp4.gameName;
                  cResult[21] = tmp33;
                  tmp31 = tmp33;
                }
              }
              const obj7 = { style: tmp4.cover, children: items3 };
              items3 = [tmp14, tmp22];
              const tmp30 = closure_9(View, obj7);
              cResult[15] = tmp4.cover;
              cResult[16] = tmp14;
              cResult[17] = tmp22;
              cResult[18] = tmp30;
              tmp27 = tmp30;
            }
            let tmp24 = null != rank;
            if (tmp24) {
              const obj8 = { rank, style: tmp4.rank };
              tmp24 = closure_8(CheckpointRankTagDefault, obj8);
            }
            cResult[12] = rank;
            cResult[13] = tmp4.rank;
            cResult[14] = tmp24;
            tmp22 = tmp24;
          }
        }
        if (null != tmp9) {
          const obj9 = { source: obj6.makeSource(tmp9), style: tmp4.coverImage, resizeMode: "cover" };
          const tmp21 = FastImageDefault;
          obj6 = AvatarUtilsDefault;
          tmp18 = closure_8(tmp21, obj9);
        } else {
          const obj10 = { style: items4, children: closure_8(id(8129).UnknownGameIcon, { size: "lg" }) };
          items4 = [, ];
          ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp4);
          tmp18 = closure_8(View, obj10);
        }
        cResult[8] = tmp9;
        cResult[9] = tmp4.coverImage;
        cResult[10] = tmp4.unknownCover;
        cResult[11] = tmp18;
        tmp14 = tmp18;
      }
    }
  }
  let applicationIconURL = stateFromStores;
  if (stateFromStores == null) {
    const obj11 = { id, icon: tmp13, fallbackAvatar: false };
    tmp13 = coverImageHash;
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (coverImageHash == null) {
      tmp13 = iconHash;
    }
    applicationIconURL = getApplicationIconURL(obj11);
  }
  cResult[3] = coverImageHash;
  cResult[4] = stateFromStores;
  cResult[5] = iconHash;
  cResult[6] = id;
  cResult[7] = applicationIconURL;
  tmp9 = applicationIconURL;
}) : (function GameCard(game) {
  let accessibilityLabel;
  let iconHash;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let name;
  let obj7;
  let tmp10;
  let tmp11;
  game = game.game;
  const id = game.id;
  let coverImageHash = game.coverImageHash;
  const rank = game.rank;
  ({ name, iconHash } = game);
  ({ label, accessibilityLabel } = game);
  const tmp = closure_10();
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
  const obj3 = { accessible: true, accessibilityLabel, style: tmp.game, children: items3 };
  const obj4 = { style: tmp.cover, children: items2 };
  if (null != stateFromStores) {
    const obj5 = { source: obj7.makeSource(stateFromStores), style: tmp.coverImage, resizeMode: "cover" };
    const tmp14 = FastImageDefault;
    obj7 = AvatarUtilsDefault;
    tmp11 = closure_8(tmp14, obj5);
    tmp10 = closure_8;
  } else {
    const obj6 = { style: items1, children: closure_8(id(8129).UnknownGameIcon, { size: "lg" }) };
    items1 = [, ];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    tmp10 = closure_8;
    tmp11 = closure_8(tmp8, obj6);
  }
  items2 = [tmp11, ];
  let tmp10Result = null != rank;
  if (tmp10Result) {
    const obj8 = { rank, style: tmp.rank };
    tmp10Result = tmp10(CheckpointRankTagDefault, obj8);
  }
  items2[1] = tmp10Result;
  items3 = [closure_9(View, obj4), ];
  const obj9 = { style: tmp.gameText, children: items4 };
  items4 = [, ];
  const obj10 = { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name };
  items4[0] = tmp10(id(5271).Text, obj10);
  const obj11 = { variant: "experimental/mono-md/bold", style: tmp.gameLabel, children: label };
  items4[1] = tmp10(CheckpointTextDefault, obj11);
  items3[1] = closure_9(View, obj9);
  return closure_9(View, obj3);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default tmp5;
