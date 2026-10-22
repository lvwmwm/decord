// Module ID: 12949
// Function ID: 12950
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [17, 12893, 6001, 21, 4969, 587, 558, 576, 504, 12896, 1128, 3088, 12913, 12916, 12950, 9023, 12911, 12918, 12920, 12922, 2]

// Module 12949 (CheckpointGameTimeStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import CalendarIcon from "CalendarIcon" /* 9023 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12896 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12922 */;
import CheckpointStore from "CheckpointStore" /* 12893 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 0.6498194945848376 }, copy: { flexShrink: 1 }, number: obj4 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGameTimeStatsScreen() {
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let obj11;
  let str;
  let stringResult;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp34;
  let tmp38;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(57);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function b() {
      const globalStats = CheckpointStore.globalStats;
      let prop;
      if (globalStats != null) {
        const games = globalStats.games;
        if (games != null) {
          prop = games.numUsersPlayedEveryDay;
        }
      }
      return prop;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  let totalDaysPlayed;
  const tmp13 = cResult[4];
  if (stateFromStores != null) {
    totalDaysPlayed = stateFromStores.totalDaysPlayed;
  }
  if (tmp13 === totalDaysPlayed) {
    let prop;
    const tmp75 = cResult[5];
    if (stateFromStores != null) {
      prop = stateFromStores.totalDaysPlayedPercentile;
    }
    if (tmp75 === prop) {
      if (cResult[6] === stateFromStores1) {
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp4.copy) {
            if (cResult[9] === tmp4.image) {
              if (cResult[10] === tmp4.imageContainer) {
                if (cResult[11] === tmp4.number) {
                  if (cResult[12] === tmp4.title) {
                    if (cResult[13] === tmp4.titleText) {
                      tmp16 = cResult[14];
                      tmp17 = cResult[15];
                      tmp18 = cResult[16];
                      tmp19 = cResult[17];
                      tmp20 = cResult[18];
                      tmp21 = cResult[19];
                      str = cResult[20];
                      tmp22 = cResult[21];
                      tmp23 = cResult[22];
                      tmp24 = cResult[23];
                      tmp25 = cResult[24];
                      tmp26 = cResult[25];
                    }
                    if (cResult[38] === tmp16) {
                      if (cResult[39] === str) {
                        if (cResult[40] === tmp22) {
                          let tmp63;
                          if (cResult[41] === tmp23) {
                            tmp63 = cResult[42];
                          }
                          if (cResult[43] === tmp17) {
                            if (cResult[44] === tmp63) {
                              if (cResult[45] === tmp24) {
                                if (cResult[46] === tmp25) {
                                  let tmp66;
                                  if (cResult[47] === tmp26) {
                                    tmp66 = cResult[48];
                                  }
                                  if (cResult[49] === tmp18) {
                                    if (cResult[50] === tmp20) {
                                      if (cResult[51] === tmp21) {
                                        let tmp69;
                                        if (cResult[52] === tmp66) {
                                          tmp69 = cResult[53];
                                        }
                                        if (cResult[54] === tmp19) {
                                          let tmp72;
                                          if (cResult[55] === tmp69) {
                                            tmp72 = cResult[56];
                                          }
                                          return tmp72;
                                        }
                                        const obj2 = { children: tmp69 };
                                        const tmp74 = metroRequire(tmp19, obj2);
                                        cResult[54] = tmp19;
                                        cResult[55] = tmp69;
                                        cResult[56] = tmp74;
                                        tmp72 = tmp74;
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp20, children: items2 };
                                  items2 = [tmp21, tmp66];
                                  const tmp71 = metroImportDefault(tmp18, obj3);
                                  cResult[49] = tmp18;
                                  cResult[50] = tmp20;
                                  cResult[51] = tmp21;
                                  cResult[52] = tmp66;
                                  cResult[53] = tmp71;
                                  tmp69 = tmp71;
                                }
                              }
                            }
                          }
                          const obj4 = { style: tmp24, children: items3 };
                          items3 = [tmp25, tmp26, tmp63];
                          const tmp68 = metroImportDefault(tmp17, obj4);
                          cResult[43] = tmp17;
                          cResult[44] = tmp63;
                          cResult[45] = tmp24;
                          cResult[46] = tmp25;
                          cResult[47] = tmp26;
                          cResult[48] = tmp68;
                          tmp66 = tmp68;
                        }
                      }
                    }
                    const obj5 = { variant: str, accessibilityLabel: tmp22, children: tmp23 };
                    const tmp65 = metroRequire(tmp16, obj5);
                    cResult[38] = tmp16;
                    cResult[39] = str;
                    cResult[40] = tmp22;
                    cResult[41] = tmp23;
                    cResult[42] = tmp65;
                    tmp63 = tmp65;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let num5;
  const _Math = Math;
  if (stateFromStores != null) {
    num5 = stateFromStores.totalDaysPlayed;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const roundResult = round(num5);
  let prop1;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalDaysPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop1);
  const intl = tmp(1128).intl;
  const string = intl.string;
  const tmp33 = _modDef3088;
  if (roundResult <= 0 && null != stateFromStores1) {
    stringResult = string(tmp33["dx4+NI"]);
    tmp34 = tmp32;
  } else {
    stringResult = string(tmp33["4N5p4D"]);
    tmp34 = tmp32;
  }
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1128).intl;
      const obj6 = {
        numDays: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp34(3088)["4FXB/m"], obj6);
    }
  }
  const tmp34Result = tmp34(12913);
  const container = tmp4.container;
  if (cResult[26] !== tmp4.image) {
    const obj7 = { uri: tmp34(12950), style: tmp4.image };
    const tmp34Result3 = tmp34(12916);
    const tmp41 = metroRequire(tmp34Result3, obj7);
    cResult[26] = tmp4.image;
    cResult[27] = tmp41;
    tmp38 = tmp41;
  } else {
    tmp38 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    let tmp42;
    let tmp44;
    if (cResult[29] === tmp38) {
      tmp42 = cResult[30];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp47 = metroRequire(CalendarIcon.CalendarIcon, obj8);
      cResult[31] = tmp47;
      tmp44 = tmp47;
    } else {
      tmp44 = cResult[31];
    }
    const titleText = tmp4.titleText;
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    if (cResult[32] === tmp4.titleText) {
      let tmp49;
      if (cResult[33] === toLocaleUpperCaseResult) {
        tmp49 = cResult[34];
      }
      if (cResult[35] === tmp4.title) {
        let tmp52;
        let tmp55Result;
        let formatToPlainStringResult1;
        if (cResult[36] === tmp49) {
          tmp52 = cResult[37];
        }
        if (roundResult <= 0 && null != stateFromStores1) {
          const obj9 = { value: stateFromStores1 };
          tmp55Result = tmp55(tmp34(12918), obj9);
        } else {
          const _HermesInternal = HermesInternal;
          const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp4.number, children: metroRequire(tmp34(12920), obj11) };
          obj11 = { end: roundResult };
          tmp55Result = tmp55(tmp37, obj10);
        }
        const tmp34Result4 = tmp34(12911);
        if (roundResult <= 0 && null != stateFromStores1) {
          const intl5 = tmp(1128).intl;
          const formatToPlainString = intl5.formatToPlainString;
          const _Intl = Intl;
          const obj12 = { numUsers: numberFormat.format(stateFromStores1) };
          const prop2 = tmp34(3088)["N32w+2"];
          const self = this;
          const self2 = this;
          numberFormat = new Intl.NumberFormat(tmp(1128).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
          formatToPlainStringResult1 = formatToPlainString(prop2, obj12);
        } else if (null != checkpointTopPercent) {
          const intl4 = tmp(1128).intl;
          const obj13 = {
            numDays: roundResult,
            percent: checkpointTopPercent,
            percentHook(children, arg1) {
                      const obj = { children };
                      return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                    }
          };
          formatToPlainStringResult1 = intl4.format(tmp34(3088)["4FXB/m"], obj13);
        } else {
          const intl3 = tmp(1128).intl;
          const obj14 = { numDays: roundResult };
          formatToPlainStringResult1 = intl3.format(tmp34(3088).iCKjh6, obj14);
        }
        let totalDaysPlayed1;
        if (stateFromStores != null) {
          totalDaysPlayed1 = stateFromStores.totalDaysPlayed;
        }
        cResult[4] = totalDaysPlayed1;
        let prop3;
        if (stateFromStores != null) {
          prop3 = stateFromStores.totalDaysPlayedPercentile;
        }
        cResult[5] = prop3;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp4.container;
        cResult[8] = tmp4.copy;
        cResult[9] = tmp4.image;
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp4.number;
        cResult[12] = tmp4.title;
        cResult[13] = tmp4.titleText;
        cResult[14] = tmp34Result4;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp34Result;
        cResult[18] = container;
        cResult[19] = tmp42;
        cResult[20] = "heading-lg/medium";
        cResult[21] = formatToPlainStringResult;
        cResult[22] = formatToPlainStringResult1;
        cResult[23] = copy;
        cResult[24] = tmp52;
        cResult[25] = tmp55Result;
        tmp26 = tmp55Result;
        tmp25 = tmp52;
        tmp24 = copy;
        tmp23 = formatToPlainStringResult1;
        tmp22 = formatToPlainStringResult;
        str = "heading-lg/medium";
        tmp21 = tmp42;
        tmp20 = container;
        tmp19 = tmp34Result;
        tmp18 = tmp37;
        tmp17 = tmp37;
        tmp16 = tmp34Result4;
      }
      const obj15 = { style: title, children: items4 };
      items4 = [tmp44, tmp49];
      const tmp54 = metroImportDefault(View, obj15);
      cResult[35] = tmp4.title;
      cResult[36] = tmp49;
      cResult[37] = tmp54;
      tmp52 = tmp54;
    }
    const obj16 = { variant: "heading-md/extrabold", style: titleText, children: toLocaleUpperCaseResult };
    const tmp51 = metroRequire(tmp34(12911), obj16);
    cResult[32] = tmp4.titleText;
    cResult[33] = toLocaleUpperCaseResult;
    cResult[34] = tmp51;
    tmp49 = tmp51;
  }
  const obj17 = { style: tmp4.imageContainer, children: tmp38 };
  const tmp43 = metroRequire(View, obj17);
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp38;
  cResult[30] = tmp43;
  tmp42 = tmp43;
}) : (function CheckpointGameTimeStatsScreen() {
  let formatToPlainStringResult1;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let obj13;
  let obj6;
  let stringResult;
  let tmp13;
  let tmp13Result4;
  let tmp15Result;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let prop;
    if (globalStats != null) {
      const games = globalStats.games;
      if (games != null) {
        prop = games.numUsersPlayedEveryDay;
      }
    }
    return prop;
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
  const string = intl.string;
  const tmp12 = _modDef3088;
  if (roundResult <= 0 && null != stateFromStores1) {
    stringResult = string(tmp12["dx4+NI"]);
    tmp13 = tmp11;
  } else {
    stringResult = string(tmp12["4N5p4D"]);
    tmp13 = tmp11;
  }
  let formatToPlainStringResult;
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1128).intl;
      const obj3 = {
        numDays: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3088)["4FXB/m"], obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items2 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp13Result4, obj6) };
  obj6 = { uri: tmp13(12950), style: tmp.image };
  const tmp13Result = tmp13(12913);
  tmp13Result4 = tmp13(12916);
  items2 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.copy, children: items4 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items3[0] = metroRequire(CalendarIcon.CalendarIcon, obj9);
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(12911);
  items3[1] = metroRequire(tmp13Result5, obj10);
  items4 = [metroImportDefault(View, obj8), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    tmp15Result = tmp15(tmp13(12918), obj11);
  } else {
    const _HermesInternal = HermesInternal;
    const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(tmp13(12920), obj13) };
    obj13 = { end: roundResult };
    tmp15Result = tmp15(tmp18, obj12);
  }
  items4[1] = tmp15Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp13Result6 = tmp13(12911);
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp2(1128).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const _Intl = Intl;
    const obj15 = { numUsers: numberFormat.format(stateFromStores1) };
    const prop1 = tmp13(3088)["N32w+2"];
    const self = this;
    const self2 = this;
    numberFormat = new Intl.NumberFormat(tmp2(1128).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
    formatToPlainStringResult1 = formatToPlainString(prop1, obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj16 = {
      numDays: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp13(3088)["4FXB/m"], obj16);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj17 = { numDays: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp13(3088).iCKjh6, obj17);
  }
  const obj18 = { children: metroImportDefault(View, obj4) };
  items4[2] = metroRequire(tmp13Result6, obj14);
  items2[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp13Result, obj18);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default tmp4;
