// Module ID: 12896
// Function ID: 12897
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [17, 12843, 5995, 21, 4966, 587, 558, 576, 504, 12846, 1128, 3088, 12863, 12866, 12897, 9007, 12861, 12870, 12871, 2]

// Module 12896 (CheckpointGameTimeStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 5995 */;
import CalendarIcon from "CalendarIcon" /* 9007 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12846 */;
import CheckpointTextDefault from "CheckpointText" /* 12861 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12863 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12866 */;
import NumberAnimationDefault from "NumberAnimation" /* 12870 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12871 */;
import _modDef12897 from "module_12897" /* 12897 */;
import CheckpointStore from "CheckpointStore" /* 12843 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let stats;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 0.6493506493506493 }, copy: { flexShrink: 1 }, number: obj4 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGameTimeStatsScreen() {
  let formatToPlainStringResult;
  let items1;
  let items2;
  let items3;
  let obj11;
  let str;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp31;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(53);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
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
  let totalDaysPlayed;
  const tmp9 = cResult[2];
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (tmp9 === totalDaysPlayed) {
    let prop;
    const tmp66 = cResult[3];
    if (stateFromStores != null) {
      prop = stateFromStores.totalDaysPlayedPercentile;
    }
    if (tmp66 === prop) {
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp4.copy) {
          if (cResult[6] === tmp4.image) {
            if (cResult[7] === tmp4.imageContainer) {
              if (cResult[8] === tmp4.number) {
                if (cResult[9] === tmp4.title) {
                  if (cResult[10] === tmp4.titleText) {
                    tmp12 = cResult[11];
                    tmp13 = cResult[12];
                    tmp14 = cResult[13];
                    tmp15 = cResult[14];
                    str = cResult[15];
                    tmp16 = cResult[16];
                    tmp17 = cResult[17];
                    tmp18 = cResult[18];
                    tmp19 = cResult[19];
                    tmp20 = cResult[20];
                    tmp21 = cResult[21];
                    tmp22 = cResult[22];
                  }
                  if (cResult[34] === tmp12) {
                    if (cResult[35] === str) {
                      if (cResult[36] === tmp16) {
                        let tmp54;
                        if (cResult[37] === tmp17) {
                          tmp54 = cResult[38];
                        }
                        if (cResult[39] === tmp13) {
                          if (cResult[40] === tmp54) {
                            if (cResult[41] === tmp18) {
                              if (cResult[42] === tmp19) {
                                let tmp57;
                                if (cResult[43] === tmp20) {
                                  tmp57 = cResult[44];
                                }
                                if (cResult[45] === tmp14) {
                                  if (cResult[46] === tmp57) {
                                    if (cResult[47] === tmp21) {
                                      let tmp60;
                                      if (cResult[48] === tmp22) {
                                        tmp60 = cResult[49];
                                      }
                                      if (cResult[50] === tmp15) {
                                        let tmp63;
                                        if (cResult[51] === tmp60) {
                                          tmp63 = cResult[52];
                                        }
                                        return tmp63;
                                      }
                                      const obj2 = { children: tmp60 };
                                      const tmp65 = metroRequire(tmp15, obj2);
                                      cResult[50] = tmp15;
                                      cResult[51] = tmp60;
                                      cResult[52] = tmp65;
                                      tmp63 = tmp65;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp21, children: items1 };
                                items1 = [tmp22, tmp57];
                                const tmp62 = metroImportDefault(tmp14, obj3);
                                cResult[45] = tmp14;
                                cResult[46] = tmp57;
                                cResult[47] = tmp21;
                                cResult[48] = tmp22;
                                cResult[49] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                          }
                        }
                        const obj4 = { style: tmp18, children: items2 };
                        items2 = [tmp19, tmp20, tmp54];
                        const tmp59 = metroImportDefault(tmp13, obj4);
                        cResult[39] = tmp13;
                        cResult[40] = tmp54;
                        cResult[41] = tmp18;
                        cResult[42] = tmp19;
                        cResult[43] = tmp20;
                        cResult[44] = tmp59;
                        tmp57 = tmp59;
                      }
                    }
                  }
                  const obj5 = { variant: str, accessibilityLabel: tmp16, children: tmp17 };
                  const tmp56 = metroRequire(tmp12, obj5);
                  cResult[34] = tmp12;
                  cResult[35] = str;
                  cResult[36] = tmp16;
                  cResult[37] = tmp17;
                  cResult[38] = tmp56;
                  tmp54 = tmp56;
                }
              }
            }
          }
        }
      }
    }
  }
  let num3;
  const _Math = Math;
  if (stateFromStores != null) {
    num3 = stateFromStores.totalDaysPlayed;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const roundResult = round(num3);
  let prop1;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop1);
  const intl = tmp(1128).intl;
  const stringResult = intl.string(_modDef3088["4N5p4D"]);
  if (null != checkpointTopPercent) {
    const intl2 = tmp(1128).intl;
    const obj6 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3088["4FXB/m"], obj6);
  }
  const tmp27Result = CheckpointScreenDefault;
  const container = tmp4.container;
  if (cResult[23] !== tmp4.image) {
    const obj7 = { uri: _modDef12897, style: tmp4.image };
    const tmp27Result4 = CheckpointApngPlayerDefault;
    const tmp34 = metroRequire(tmp27Result4, obj7);
    cResult[23] = tmp4.image;
    cResult[24] = tmp34;
    tmp31 = tmp34;
  } else {
    tmp31 = cResult[24];
  }
  if (cResult[25] === tmp4.imageContainer) {
    let tmp35;
    let tmp37;
    let tmp41;
    if (cResult[26] === tmp31) {
      tmp35 = cResult[27];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp40 = metroRequire(CalendarIcon.CalendarIcon, obj8);
      cResult[28] = tmp40;
      tmp37 = tmp40;
    } else {
      tmp37 = cResult[28];
    }
    if (cResult[29] !== tmp4.titleText) {
      const obj9 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
      const tmp27Result5 = CheckpointTextDefault;
      const tmp44 = metroRequire(tmp27Result5, obj9);
      cResult[29] = tmp4.titleText;
      cResult[30] = tmp44;
      tmp41 = tmp44;
    } else {
      tmp41 = cResult[30];
    }
    if (cResult[31] === tmp4.title) {
      let tmp45;
      let formatResult;
      if (cResult[32] === tmp41) {
        tmp45 = cResult[33];
      }
      const _HermesInternal = HermesInternal;
      const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp4.number, children: metroRequire(NumberAnimationDefault, obj11) };
      obj11 = { end: roundResult };
      const tmp49 = metroRequire(View, obj10);
      const tmp27Result6 = CheckpointTextDefault;
      if (null != checkpointTopPercent) {
        const intl4 = tmp(1128).intl;
        const obj12 = {
          numDays: roundResult,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
                  const obj = { children };
                  return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                }
        };
        formatResult = intl4.format(tmp27(3088)["4FXB/m"], obj12);
      } else {
        const intl3 = tmp(1128).intl;
        const obj13 = { numDays: roundResult };
        formatResult = intl3.format(tmp27(3088).iCKjh6, obj13);
      }
      let totalDaysPlayed1;
      if (stateFromStores != null) {
        totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
      }
      cResult[2] = totalDaysPlayed1;
      let prop2;
      if (stateFromStores != null) {
        prop2 = stateFromStores.totalDaysPlayedPercentile;
      }
      cResult[3] = prop2;
      cResult[4] = tmp4.container;
      cResult[5] = tmp4.copy;
      cResult[6] = tmp4.image;
      cResult[7] = tmp4.imageContainer;
      cResult[8] = tmp4.number;
      cResult[9] = tmp4.title;
      cResult[10] = tmp4.titleText;
      cResult[11] = tmp27Result6;
      cResult[12] = View;
      cResult[13] = View;
      cResult[14] = tmp27Result;
      cResult[15] = "heading-lg/medium";
      cResult[16] = formatToPlainStringResult;
      cResult[17] = formatResult;
      cResult[18] = copy;
      cResult[19] = tmp45;
      cResult[20] = tmp49;
      cResult[21] = container;
      cResult[22] = tmp35;
      tmp22 = tmp35;
      tmp21 = container;
      tmp20 = tmp49;
      tmp19 = tmp45;
      tmp18 = copy;
      tmp17 = formatResult;
      tmp16 = formatToPlainStringResult;
      str = "heading-lg/medium";
      tmp15 = tmp27Result;
      tmp14 = tmp30;
      tmp13 = tmp30;
      tmp12 = tmp27Result6;
    }
    const obj14 = { style: tmp4.title, children: items3 };
    items3 = [tmp37, tmp41];
    const tmp47 = metroImportDefault(View, obj14);
    cResult[31] = tmp4.title;
    cResult[32] = tmp41;
    cResult[33] = tmp47;
    tmp45 = tmp47;
  }
  const obj15 = { style: tmp4.imageContainer, children: tmp31 };
  const tmp36 = metroRequire(View, obj15);
  cResult[25] = tmp4.imageContainer;
  cResult[26] = tmp31;
  cResult[27] = tmp36;
  tmp35 = tmp36;
}) : (function CheckpointGameTimeStatsScreen() {
  let formatResult;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp9Result4;
  const tmp = closure_8();
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
    num = stateFromStores.totalDaysPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1128).intl;
  const stringResult = intl.string(_modDef3088["4N5p4D"]);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = tmp2(1128).intl;
    const obj2 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(tmp9(3088)["4FXB/m"], obj2);
  }
  const obj3 = { style: tmp.container, children: items1 };
  const obj4 = { style: tmp.imageContainer, children: metroRequire(tmp9Result4, obj5) };
  obj5 = { uri: _modDef12897, style: tmp.image };
  const tmp9Result = CheckpointScreenDefault;
  tmp9Result4 = CheckpointApngPlayerDefault;
  items1 = [metroRequire(View, obj4), ];
  const obj7 = { style: tmp.title, children: items2 };
  items2 = [, ];
  const obj6 = { style: tmp.copy, children: items3 };
  const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items2[0] = metroRequire(CalendarIcon.CalendarIcon, obj8);
  const obj9 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp9Result5 = CheckpointTextDefault;
  items2[1] = metroRequire(tmp9Result5, obj9);
  items3 = [metroImportDefault(View, obj7), , ];
  const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(NumberAnimationDefault, { end: roundResult }) };
  items3[1] = metroRequire(View, obj10);
  const obj11 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp9Result6 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj12 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp9(3088)["4FXB/m"], obj12);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj13 = { numDays: roundResult };
    formatResult = intl3.format(tmp9(3088).iCKjh6, obj13);
  }
  const obj14 = { children: metroImportDefault(View, obj3) };
  items3[2] = metroRequire(tmp9Result6, obj11);
  items1[1] = metroImportDefault(View, obj6);
  return metroRequire(tmp9Result, obj14);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default tmp4;
