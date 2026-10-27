// Module ID: 16461
// Function ID: 16462
// Name: OrbsArcadeRewardChain
// Dependencies: [19, 17, 21, 587, 4972, 558, 576, 4979, 16440, 16435, 16449, 16462, 683, 5259, 16444, 5235, 2]

// Module 16461 (OrbsArcadeRewardChain)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Text_Text from "Text/Text" /* 5235 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16435 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16440 */;
import useOrbsArcadeRewardAccentColorDefault from "useOrbsArcadeRewardAccentColor" /* 16449 */;
import OrbsArcadeRewardChainCellDefault from "OrbsArcadeRewardChainCell" /* 16462 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let absoluteFill, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp16;
const OrbsArcadeRewardStatusLabelDefault = tmp16(16444);
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_8 = 2 * PX_16 + 1;
let start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let createStyles = createStyles_mod;
let obj = { chain: obj2, divider: obj3, row: obj4, dimmedRow: { opacity: 0.4 }, rewardCopy: obj5 };
obj2 = { overflow: "hidden", padding: nativeDefault.space.PX_16, gap: PX_16, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginHorizontal: -nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardChain(grantAnimatedOnOpenRewardIds) {
  let arr;
  let closure_1;
  let closure_2;
  let game;
  let gameState;
  let items2;
  let tmp12;
  let tmp16;
  const tmp2 = gameState;
  let obj = gameState(576);
  const cResult = obj.c(55);
  ({ game, gameState } = grantAnimatedOnOpenRewardIds);
  grantAnimatedOnOpenRewardIds = grantAnimatedOnOpenRewardIds.grantAnimatedOnOpenRewardIds;
  const tmp5 = closure_11();
  importDefault = tmp5;
  let obj2 = gameState(4979);
  const theme = obj2.useThemeContext().theme;
  if (cResult[0] !== game.rewards) {
    let tmp7;
    let tmp6 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(scoreTarget, scoreTarget2) {
        return scoreTarget2.scoreTarget - scoreTarget.scoreTarget;
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    let items = [];
    HermesBuiltin.arraySpread(items, game.rewards, 0);
    const sorted = items.sort(tmp7);
    cResult[0] = game.rewards;
    cResult[1] = sorted;
    arr = sorted;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] === gameState) {
    let tmp11;
    let tmp15;
    if (cResult[4] === arr) {
      tmp11 = cResult[5];
    }
    dependencyMap = tmp11;
    if (cResult[8] === arr) {
      let tmp14;
      let tmp24;
      let tmp26;
      if (cResult[9] === tmp11) {
        tmp14 = cResult[10];
      }
      let id = tmp14;
      let tmp18 = importDefault;
      let first = tmp14;
      const tmp19 = useOrbsArcadeRewardAccentColorDefault;
      if (tmp14 == null) {
        first = arr[0];
      }
      const tmp19Result = tmp19(first);
      if (cResult[13] === arr) {
        let tmp23;
        if (cResult[14] === tmp11) {
          tmp23 = cResult[15];
        }
        id = undefined;
        if (tmp14 != null) {
          id = tmp14.id;
        }
        if (id == null) {
          id = null;
        }
        if (cResult[19] === grantAnimatedOnOpenRewardIds) {
          if (cResult[20] === tmp23) {
            let tmp29;
            let tmp31;
            let tmp33;
            if (cResult[21] === id) {
              tmp29 = cResult[22];
            }
            let tmp2Result = tmp2(16462);
            const orbsArcadeRewardChainTimeline = tmp2Result.useOrbsArcadeRewardChainTimeline(tmp29);
            const timeline = orbsArcadeRewardChainTimeline.timeline;
            const getGrantAtMs = orbsArcadeRewardChainTimeline.getGrantAtMs;
            const getFocusRingAtMs = orbsArcadeRewardChainTimeline.getFocusRingAtMs;
            if (cResult[23] !== tmp19Result) {
              let obj6 = tmp18(683)(tmp19Result);
              const alphaResult = obj6.alpha(0.3);
              const cssResult = alphaResult.css();
              cResult[23] = tmp19Result;
              cResult[24] = cssResult;
              tmp31 = cssResult;
            } else {
              tmp31 = cResult[24];
            }
            if (cResult[25] !== tmp31) {
              let items1 = [tmp18(587).unsafe_rawColors.TRANSPARENT, tmp31];
              cResult[25] = tmp31;
              cResult[26] = items1;
              tmp33 = items1;
            } else {
              tmp33 = cResult[26];
            }
            if (cResult[27] === tmp33) {
              let tmp35;
              let tmp43;
              if (cResult[28] === theme) {
                tmp35 = cResult[29];
              }
              let id1;
              const tmp41 = cResult[30];
              if (tmp14 != null) {
                id1 = tmp14.id;
              }
              if (tmp41 === id1) {
                if (cResult[31] === getFocusRingAtMs) {
                  if (cResult[32] === getGrantAtMs) {
                    if (cResult[33] === arr) {
                      if (cResult[34] === tmp11) {
                        if (cResult[35] === tmp5.dimmedRow) {
                          if (cResult[36] === tmp5.divider) {
                            if (cResult[37] === tmp5.rewardCopy) {
                              if (cResult[38] === tmp5.row) {
                                if (cResult[39] === timeline) {
                                  tmp43 = cResult[40];
                                }
                                if (cResult[51] === tmp5.chain) {
                                  if (cResult[52] === tmp35) {
                                    let tmp50;
                                    if (cResult[53] === tmp43) {
                                      tmp50 = cResult[54];
                                    }
                                    return tmp50;
                                  }
                                }
                                let obj3 = { style: tmp34, children: items2 };
                                items2 = [tmp35, tmp43];
                                const tmp53 = closure_7(getGrantAtMs, obj3);
                                cResult[51] = tmp5.chain;
                                cResult[52] = tmp35;
                                cResult[53] = tmp43;
                                cResult[54] = tmp53;
                                tmp50 = tmp53;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              let id2;
              const tmp44 = cResult[41];
              if (tmp14 != null) {
                id2 = tmp14.id;
              }
              if (tmp44 === id2) {
                if (cResult[42] === getFocusRingAtMs) {
                  if (cResult[43] === getGrantAtMs) {
                    if (cResult[44] === tmp11) {
                      if (cResult[45] === tmp5.dimmedRow) {
                        if (cResult[46] === tmp5.divider) {
                          if (cResult[47] === tmp5.rewardCopy) {
                            if (cResult[48] === tmp5.row) {
                              let tmp46;
                              if (cResult[49] === timeline) {
                                tmp46 = cResult[50];
                              }
                              const mapped = arr.map(tmp46);
                              let id3;
                              if (tmp14 != null) {
                                id3 = tmp14.id;
                              }
                              cResult[30] = id3;
                              cResult[31] = getFocusRingAtMs;
                              cResult[32] = getGrantAtMs;
                              cResult[33] = arr;
                              cResult[34] = tmp11;
                              cResult[35] = tmp5.dimmedRow;
                              cResult[36] = tmp5.divider;
                              cResult[37] = tmp5.rewardCopy;
                              cResult[38] = tmp5.row;
                              cResult[39] = timeline;
                              cResult[40] = mapped;
                              tmp43 = mapped;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              let id4;
              if (tmp14 != null) {
                id4 = tmp14.id;
              }
              const fn2 = function z(reward, arg1) {
                let items2;
                let items3;
                let tmp18;
                let tmp2Result;
                let id1;
                const LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
                id = reward.id;
                if (id != null) {
                  id1 = id.id;
                }
                let tmp6 = null;
                const Fragment = react.Fragment;
                if (arg1 > 0) {
                  const obj = { style: closure_1.divider };
                  tmp6 = metroRequire(hasOwnProperty, obj);
                }
                const items = [tmp6, ];
                const items1 = [closure_1.row, ];
                let dimmedRow;
                if (closure_2[arg1] === LOCKED) {
                  if (id !== id1) {
                    dimmedRow = tmp13.dimmedRow;
                  }
                }
                const obj2 = { style: items1, children: items2 };
                items1[1] = dimmedRow;
                const obj3 = { reward, status: closure_2[arg1], isFocused: id === id1, stemLength: tmp18, timeline, grantAtMs: getGrantAtMs(reward.id), focusRingAtMs: getFocusRingAtMs(reward.id) };
                tmp18 = null;
                const tmp17 = OrbsArcadeRewardChainCellDefault;
                if (arg1 > 0) {
                  tmp18 = null;
                  if (closure_2[arg1] !== LOCKED) {
                    tmp18 = closure_8;
                  }
                }
                const obj4 = { children: items };
                items2 = [metroRequire(tmp17, obj3), ];
                const obj5 = { style: closure_1.rewardCopy, children: items3 };
                items3 = [, , ];
                const obj6 = { reward, status: closure_2[arg1], color: "text-subtle" };
                items3[0] = metroRequire(OrbsArcadeRewardStatusLabelDefault, obj6);
                const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
                items3[1] = metroRequire(Text_Text.Text, obj7);
                const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: tmp2Result.getOrbsArcadeRewardScoreLabel(reward, closure_2[arg1]) };
                const Text = tmp2(5235).Text;
                tmp2Result = OrbsArcadeRewardUtils;
                items3[2] = metroRequire(Text, obj8);
                items2[1] = metroImportDefault(hasOwnProperty, obj5);
                items[1] = metroImportDefault(hasOwnProperty, obj2);
                return metroImportDefault(Fragment, obj4, reward.id);
              };
              cResult[41] = id4;
              cResult[42] = getFocusRingAtMs;
              cResult[43] = getGrantAtMs;
              cResult[44] = tmp11;
              cResult[45] = tmp5.dimmedRow;
              cResult[46] = tmp5.divider;
              cResult[47] = tmp5.rewardCopy;
              cResult[48] = tmp5.row;
              cResult[49] = timeline;
              cResult[50] = fn2;
              tmp46 = fn2;
            }
            let tmp36 = null;
            const tmp2Result2 = tmp2(4979);
            if (!tmp2Result2.isThemeLight(theme)) {
              let obj4 = { style: timeline.absoluteFill, start, end, colors: tmp33 };
              tmp36 = getFocusRingAtMs(tmp18(5259), obj4);
            }
            cResult[27] = tmp33;
            cResult[28] = theme;
            cResult[29] = tmp36;
            tmp35 = tmp36;
          }
        }
        let obj5 = { grantedRewardIds: tmp23, focusedRewardId: id, grantAnimatedOnOpenRewardIds };
        cResult[19] = grantAnimatedOnOpenRewardIds;
        cResult[20] = tmp23;
        cResult[21] = id;
        cResult[22] = obj5;
        tmp29 = obj5;
      }
      if (cResult[16] !== tmp11) {
        class M {
          constructor(arg0, arg1) {
            return closure_2[arg1] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
          }
        }
        cResult[16] = tmp11;
        cResult[17] = M;
        tmp24 = M;
      } else {
        class M {
          constructor(arg0, arg1) {
            return closure_2[arg1] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(id) {
            return id.id;
          }
        }
        cResult[18] = I;
        tmp26 = I;
      } else {
        class I {
          constructor(id) {
            return id.id;
          }
        }
      }
      const found = arr.filter(tmp24);
      const mapped1 = found.map(tmp26);
      const reversed = mapped1.reverse();
      cResult[13] = arr;
      cResult[14] = tmp11;
      cResult[15] = reversed;
      tmp23 = reversed;
    }
    if (cResult[11] !== tmp11) {
      class I {
        constructor(id) {
          return id.id;
        }
      }
      cResult[11] = tmp11;
      cResult[12] = tmp16;
      tmp15 = tmp16;
    } else {
      class I {
        constructor(id) {
          return id.id;
        }
      }
    }
    const findLastResult = arr.findLast(tmp15);
    cResult[8] = arr;
    cResult[9] = tmp11;
    cResult[10] = findLastResult;
    tmp14 = findLastResult;
  }
  if (cResult[6] !== gameState) {
    class I {
      constructor(id) {
        return id.id;
      }
    }
    cResult[6] = gameState;
    cResult[7] = S;
    tmp12 = S;
  } else {
    class I {
      constructor(id) {
        return id.id;
      }
    }
  }
  const mapped2 = arr.map(tmp12);
  cResult[3] = gameState;
  cResult[4] = arr;
  cResult[5] = mapped2;
  tmp11 = mapped2;
}) : (function OrbsArcadeRewardChain(game) {
  let _undefined2;
  let _undefined3;
  let c7;
  let c8;
  let c9;
  let closure_2;
  let closure_4;
  let id;
  let items3;
  let mapped;
  let timeline;
  game = game.game;
  const gameState = game.gameState;
  let memo;
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  start = undefined;
  const grantAnimatedOnOpenRewardIds = game.grantAnimatedOnOpenRewardIds;
  const tmp = closure_11();
  dependencyMap = tmp;
  const tmp2 = game;
  let obj = game(4979);
  let obj2 = memo;
  let items = [game.rewards];
  const theme = obj.useThemeContext().theme;
  memo = memo.useMemo(() => {
    const items = [...game.rewards];
    return items.sort((scoreTarget, scoreTarget2) => scoreTarget2.scoreTarget - scoreTarget.scoreTarget);
  }, items);
  let items1 = [memo, gameState];
  absoluteFill = memo.useMemo(() => memo.map((id) => {
    const obj = game(closure_2[8]);
    return obj.getOrbsArcadeRewardStatus(id.id, gameState);
  }), items1);
  const findLastResult = memo.findLast((arg0, arg1) => closure_4[arg1] === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  let c5 = findLastResult;
  let first = findLastResult;
  let tmp6 = gameState(16449);
  const tmp5 = gameState;
  if (findLastResult == null) {
    first = memo[0];
  }
  const tmp6Result = tmp6(first);
  closure_6 = tmp6Result;
  let tmp2Result = tmp2(16462);
  let obj3 = { grantedRewardIds: mapped.reverse(), focusedRewardId: id, grantAnimatedOnOpenRewardIds };
  const useOrbsArcadeRewardChainTimeline = tmp2Result.useOrbsArcadeRewardChainTimeline;
  const found = memo.filter((item, index) => closure_4[index] !== OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED);
  mapped = found.map((id) => id.id);
  id = undefined;
  if (findLastResult != null) {
    id = findLastResult.id;
  }
  if (id == null) {
    id = null;
  }
  const orbsArcadeRewardChainTimeline = useOrbsArcadeRewardChainTimeline(obj3);
  ({ timeline: c7, getGrantAtMs: c8, getFocusRingAtMs: c9 } = orbsArcadeRewardChainTimeline);
  let items2 = [tmp6Result];
  let obj4 = { style: tmp.chain, children: items3 };
  const memo1 = obj2.useMemo(() => {
    const items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef683(closure_6);
    const alphaResult = obj.alpha(0.3);
    items[1] = alphaResult.css();
    return items;
  }, items2);
  const tmp13 = c7;
  let tmp15 = null;
  const tmp14 = c5;
  const tmp2Result2 = tmp2(4979);
  if (!tmp2Result2.isThemeLight(theme)) {
    let tmp16 = closure_6;
    let obj5 = { style: absoluteFill.absoluteFill, start, end, colors: memo1 };
    let tmp17 = absoluteFill;
    let tmp18 = start;
    tmp15 = closure_6(tmp5(5259), obj5);
  }
  items3 = [
    tmp15,
    memo.map((reward, index) => {
      let items2;
      let items3;
      let tmp18;
      let tmp2Result;
      let id1;
      const LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      id = reward.id;
      if (id != null) {
        id1 = id.id;
      }
      let tmp6 = null;
      const Fragment = react.Fragment;
      if (index > 0) {
        const obj = { style: closure_2.divider };
        tmp6 = metroRequire(hasOwnProperty, obj);
      }
      const items = [tmp6, ];
      const items1 = [closure_2.row, ];
      let dimmedRow;
      if (closure_4[index] === LOCKED) {
        if (id !== id1) {
          dimmedRow = tmp13.dimmedRow;
        }
      }
      const obj2 = { style: items1, children: items2 };
      items1[1] = dimmedRow;
      const obj3 = { reward, status: closure_4[index], isFocused: id === id1, stemLength: tmp18, timeline, grantAtMs: _undefined2(reward.id), focusRingAtMs: _undefined3(reward.id) };
      tmp18 = null;
      const tmp17 = OrbsArcadeRewardChainCellDefault;
      if (index > 0) {
        tmp18 = null;
        if (closure_4[index] !== LOCKED) {
          tmp18 = closure_8;
        }
      }
      const obj4 = { children: items };
      items2 = [metroRequire(tmp17, obj3), ];
      const obj5 = { style: closure_2.rewardCopy, children: items3 };
      items3 = [, , ];
      const obj6 = { reward, status: closure_4[index], color: "text-subtle" };
      items3[0] = metroRequire(OrbsArcadeRewardStatusLabelDefault, obj6);
      const obj7 = { variant: "heading-sm/semibold", color: "text-strong", children: reward.name };
      items3[1] = metroRequire(Text_Text.Text, obj7);
      const obj8 = { variant: "text-xxs/medium", color: "text-muted", children: tmp2Result.getOrbsArcadeRewardScoreLabel(reward, closure_4[index]) };
      const Text = tmp2(5235).Text;
      tmp2Result = OrbsArcadeRewardUtils;
      items3[2] = metroRequire(Text, obj8);
      items2[1] = metroImportDefault(hasOwnProperty, obj5);
      items[1] = metroImportDefault(hasOwnProperty, obj2);
      return metroImportDefault(Fragment, obj4, reward.id);
    })
  ];
  return tmp13(tmp14, obj4);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardChain.tsx");

export default tmp5;
