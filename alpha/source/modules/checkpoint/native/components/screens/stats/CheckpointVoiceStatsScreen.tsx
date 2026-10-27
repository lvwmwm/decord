// Module ID: 12991
// Function ID: 12992
// Name: CheckpointVoiceStatsScreen
// Dependencies: [19, 17, 12968, 6016, 21, 4972, 587, 558, 576, 504, 12971, 1125, 3089, 3057, 12988, 12992, 12993, 12994, 11648, 12986, 12995, 12997, 13000, 2]

// Module 12991 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import CheckpointConstants from "CheckpointConstants" /* 6016 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11648 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12971 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13000 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "flex-end", alignItems: "center" }, image: obj4, copy: { flexShrink: 1 }, number: obj5 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { width: "155.17241379310343%", aspectRatio: 1.2996389891696751, marginBottom: -nativeDefault.space.PX_16 };
obj5 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointVoiceStatsScreen() {
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let obj14;
  let str;
  let stringResult;
  let tmp10;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp38;
  let tmp43;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(58);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function c() {
      const stats = CheckpointStore.stats;
      let voice;
      if (stats != null) {
        voice = stats.voice;
      }
      return voice;
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
    const fn2 = function f() {
      const globalStats = CheckpointStore.globalStats;
      let peakHourUtc;
      if (globalStats != null) {
        const voice = globalStats.voice;
        if (voice != null) {
          peakHourUtc = voice.peakHourUtc;
        }
      }
      return peakHourUtc;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = get_initialized;
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp4.copy) {
        if (cResult[7] === tmp4.image) {
          if (cResult[8] === tmp4.imageContainer) {
            if (cResult[9] === tmp4.number) {
              if (cResult[10] === tmp4.title) {
                if (cResult[11] === tmp4.titleText) {
                  let totalVoiceMinutes;
                  const tmp13 = cResult[12];
                  if (stateFromStores != null) {
                    totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
                  }
                  if (tmp13 === totalVoiceMinutes) {
                    let prop;
                    const tmp16 = cResult[13];
                    if (stateFromStores != null) {
                      prop = stateFromStores.totalVoiceMinutesPercentile;
                    }
                    if (tmp16 === prop) {
                      tmp18 = cResult[14];
                      tmp19 = cResult[15];
                      tmp20 = cResult[16];
                      tmp21 = cResult[17];
                      tmp22 = cResult[18];
                      tmp23 = cResult[19];
                      tmp24 = cResult[20];
                      str = cResult[21];
                      tmp25 = cResult[22];
                      tmp26 = cResult[23];
                      tmp27 = cResult[24];
                      tmp28 = cResult[25];
                      tmp29 = cResult[26];
                    }
                    if (cResult[38] === tmp18) {
                      if (cResult[39] === str) {
                        if (cResult[40] === tmp25) {
                          let tmp64;
                          if (cResult[41] === tmp26) {
                            tmp64 = cResult[42];
                          }
                          if (cResult[43] === tmp19) {
                            if (cResult[44] === tmp22) {
                              if (cResult[45] === tmp64) {
                                if (cResult[46] === tmp27) {
                                  if (cResult[47] === tmp28) {
                                    let tmp67;
                                    if (cResult[48] === tmp29) {
                                      tmp67 = cResult[49];
                                    }
                                    if (cResult[50] === tmp20) {
                                      if (cResult[51] === tmp23) {
                                        if (cResult[52] === tmp24) {
                                          let tmp70;
                                          if (cResult[53] === tmp67) {
                                            tmp70 = cResult[54];
                                          }
                                          if (cResult[55] === tmp21) {
                                            let tmp73;
                                            if (cResult[56] === tmp70) {
                                              tmp73 = cResult[57];
                                            }
                                            return tmp73;
                                          }
                                          const obj2 = { children: tmp70 };
                                          const tmp75 = metroImportDefault(tmp21, obj2);
                                          cResult[55] = tmp21;
                                          cResult[56] = tmp70;
                                          cResult[57] = tmp75;
                                          tmp73 = tmp75;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp23, children: items2 };
                                    items2 = [tmp24, tmp67];
                                    const tmp72 = metroImportAll(tmp20, obj3);
                                    cResult[50] = tmp20;
                                    cResult[51] = tmp23;
                                    cResult[52] = tmp24;
                                    cResult[53] = tmp67;
                                    cResult[54] = tmp72;
                                    tmp70 = tmp72;
                                  }
                                }
                              }
                            }
                          }
                          const obj4 = { style: tmp27, children: items3 };
                          items3 = [tmp28, tmp29, tmp22, tmp64];
                          const tmp69 = metroImportAll(tmp19, obj4);
                          cResult[43] = tmp19;
                          cResult[44] = tmp22;
                          cResult[45] = tmp64;
                          cResult[46] = tmp27;
                          cResult[47] = tmp28;
                          cResult[48] = tmp29;
                          cResult[49] = tmp69;
                          tmp67 = tmp69;
                        }
                      }
                    }
                    const obj5 = { variant: str, accessibilityLabel: tmp25, children: tmp26 };
                    const tmp66 = metroImportDefault(tmp18, obj5);
                    cResult[38] = tmp18;
                    cResult[39] = str;
                    cResult[40] = tmp25;
                    cResult[41] = tmp26;
                    cResult[42] = tmp66;
                    tmp64 = tmp66;
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
    num5 = stateFromStores.totalVoiceMinutes;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const roundResult = round(num5);
  if (cResult[27] !== stateFromStores1) {
    const tmpResult5 = CheckpointStatsUtils;
    const result = tmpResult5.formatCheckpointPeakHour(stateFromStores1);
    cResult[27] = stateFromStores1;
    cResult[28] = result;
    tmp32 = result;
  } else {
    tmp32 = cResult[28];
  }
  let prop1;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop1);
  const intl = tmp(1125).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3089.ZCwB8J);
    tmp38 = importDefault;
  } else {
    const obj6 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3057.UZbUtl, obj6);
    tmp38 = importDefault;
  }
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1125).intl;
      const obj7 = {
        numMinutes: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp38(3089).RqXsIs, obj7);
    }
  }
  const tmp38Result = tmp38(12988);
  const container = tmp4.container;
  if (cResult[29] !== tmp4.image) {
    const obj8 = { animatedUri: tmp38(12993), staticUri: tmp38(12994), style: tmp4.image };
    const tmp38Result4 = tmp38(12992);
    const tmp46 = metroImportDefault(tmp38Result4, obj8);
    cResult[29] = tmp4.image;
    cResult[30] = tmp46;
    tmp43 = tmp46;
  } else {
    tmp43 = cResult[30];
  }
  if (cResult[31] === tmp4.imageContainer) {
    let tmp47;
    let tmp49;
    if (cResult[32] === tmp43) {
      tmp47 = cResult[33];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp52 = metroImportDefault(MicrophoneIcon.MicrophoneIcon, obj9);
      cResult[34] = tmp52;
      tmp49 = tmp52;
    } else {
      tmp49 = cResult[34];
    }
    const obj10 = { style: tmp4.title, children: items4 };
    items4 = [tmp49, ];
    const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    const tmp38Result5 = tmp38(12986);
    items4[1] = metroImportDefault(tmp38Result5, obj11);
    const tmp56 = metroImportAll(View, obj10);
    if (cResult[35] === tmp32) {
      let tmp57;
      let stringResult1;
      if (cResult[36] === roundResult <= 0) {
        tmp57 = cResult[37];
      }
      let tmp54Result = !tmp31;
      if (tmp54Result) {
        const _HermesInternal = HermesInternal;
        const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp4.number, children: metroImportDefault(tmp38(12997), obj14) };
        obj14 = { end: roundResult };
        tmp54Result = tmp54(tmp42, obj12);
      }
      const tmp38Result6 = tmp38(12986);
      if (roundResult <= 0) {
        const intl5 = tmp(1125).intl;
        stringResult1 = intl5.string(tmp38(3089).huiTne);
      } else if (null != checkpointTopPercent) {
        const intl4 = tmp(1125).intl;
        const obj15 = {
          numMinutes: roundResult,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
                  const obj = { children };
                  return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
                }
        };
        stringResult1 = intl4.format(tmp38(3089).RqXsIs, obj15);
      } else {
        const intl3 = tmp(1125).intl;
        const obj16 = { numMinutes: roundResult };
        stringResult1 = intl3.format(tmp38(3089).Y3poDW, obj16);
      }
      cResult[4] = stateFromStores1;
      cResult[5] = tmp4.container;
      cResult[6] = tmp4.copy;
      cResult[7] = tmp4.image;
      cResult[8] = tmp4.imageContainer;
      cResult[9] = tmp4.number;
      cResult[10] = tmp4.title;
      cResult[11] = tmp4.titleText;
      let totalVoiceMinutes1;
      if (stateFromStores != null) {
        totalVoiceMinutes1 = stateFromStores.totalVoiceMinutes;
      }
      cResult[12] = totalVoiceMinutes1;
      let prop2;
      if (stateFromStores != null) {
        prop2 = stateFromStores.totalVoiceMinutesPercentile;
      }
      cResult[13] = prop2;
      cResult[14] = tmp38Result6;
      cResult[15] = View;
      cResult[16] = View;
      cResult[17] = tmp38Result;
      cResult[18] = tmp54Result;
      cResult[19] = container;
      cResult[20] = tmp47;
      cResult[21] = "heading-lg/medium";
      cResult[22] = formatToPlainStringResult;
      cResult[23] = stringResult1;
      cResult[24] = copy;
      cResult[25] = tmp56;
      cResult[26] = tmp57;
      tmp29 = tmp57;
      tmp28 = tmp56;
      tmp27 = copy;
      tmp26 = stringResult1;
      tmp25 = formatToPlainStringResult;
      str = "heading-lg/medium";
      tmp24 = tmp47;
      tmp23 = container;
      tmp22 = tmp54Result;
      tmp21 = tmp38Result;
      tmp20 = tmp42;
      tmp19 = tmp42;
      tmp18 = tmp38Result6;
    }
    let tmp54Result2 = tmp31 && null != tmp32;
    if (tmp54Result2) {
      const obj17 = { value: null, accessibilityLabel: null };
      ({ value: obj13.value, label: obj13.accessibilityLabel } = tmp32);
      tmp54Result2 = tmp54(tmp38(12995), obj17);
    }
    cResult[35] = tmp32;
    cResult[36] = roundResult <= 0;
    cResult[37] = tmp54Result2;
    tmp57 = tmp54Result2;
  }
  const obj18 = { style: tmp4.imageContainer, children: tmp43 };
  const tmp48 = metroImportDefault(View, obj18);
  cResult[31] = tmp4.imageContainer;
  cResult[32] = tmp43;
  cResult[33] = tmp48;
  tmp47 = tmp48;
}) : (function CheckpointVoiceStatsScreen() {
  let items3;
  let items4;
  let items5;
  let obj15;
  let obj7;
  let stateFromStores1;
  let stringResult;
  let stringResult1;
  let tmp13;
  let tmp13Result4;
  const tmp = closure_9();
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let voice;
    if (stats != null) {
      voice = stats.voice;
    }
    return voice;
  });
  const items1 = [CheckpointStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let peakHourUtc;
    if (globalStats != null) {
      const voice = globalStats.voice;
      if (voice != null) {
        peakHourUtc = voice.peakHourUtc;
      }
    }
    return peakHourUtc;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.totalVoiceMinutes;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  const items2 = [stateFromStores1];
  const memo = react.useMemo(() => {
    const obj = CheckpointStatsUtils;
    return obj.formatCheckpointPeakHour(stateFromStores1);
  }, items2);
  let prop;
  const getCheckpointTopPercent = stateFromStores1(12971).getCheckpointTopPercent;
  stateFromStores1(12971);
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1125).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3089.ZCwB8J);
    tmp13 = importDefault;
  } else {
    const obj3 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3057.UZbUtl, obj3);
    tmp13 = importDefault;
  }
  let formatToPlainStringResult;
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1125).intl;
      const obj4 = {
        numMinutes: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3089).RqXsIs, obj4);
    }
  }
  const obj5 = { style: tmp.container, children: items3 };
  const obj6 = { style: tmp.imageContainer, children: closure_7(tmp13Result4, obj7) };
  obj7 = { animatedUri: tmp13(12993), staticUri: tmp13(12994), style: tmp.image };
  const tmp13Result = tmp13(12988);
  tmp13Result4 = tmp13(12992);
  items3 = [closure_7(View, obj6), ];
  const obj9 = { style: tmp.title, children: items4 };
  items4 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp.copy, children: items5 };
  items4[0] = closure_7(stateFromStores1(11648).MicrophoneIcon, obj10);
  const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(12986);
  items4[1] = closure_7(tmp13Result5, obj11);
  items5 = [closure_8(View, obj9), , , ];
  let tmp16Result = tmp7 && null != memo;
  if (tmp16Result) {
    const obj12 = { value: null, accessibilityLabel: null };
    ({ value: obj13.value, label: obj13.accessibilityLabel } = memo);
    tmp16Result = tmp16(tmp13(12995), obj12);
  }
  items5[1] = tmp16Result;
  let tmp16Result2 = !tmp7;
  if (tmp16Result2) {
    const _HermesInternal = HermesInternal;
    const obj14 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_7(tmp13(12997), obj15) };
    obj15 = { end: roundResult };
    tmp16Result2 = tmp16(tmp19, obj14);
  }
  items5[2] = tmp16Result2;
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: stringResult1 };
  const tmp13Result6 = tmp13(12986);
  if (roundResult <= 0) {
    const intl5 = tmp2(1125).intl;
    stringResult1 = intl5.string(tmp13(3089).huiTne);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1125).intl;
    const obj17 = {
      numMinutes: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    stringResult1 = intl4.format(tmp13(3089).RqXsIs, obj17);
  } else {
    const intl3 = tmp2(1125).intl;
    const obj18 = { numMinutes: roundResult };
    stringResult1 = intl3.format(tmp13(3089).Y3poDW, obj18);
  }
  const obj19 = { children: closure_8(View, obj5) };
  items5[3] = closure_7(tmp13Result6, obj16);
  items3[1] = closure_8(View, obj8);
  return closure_7(tmp13Result, obj19);
});
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default tmp4;
