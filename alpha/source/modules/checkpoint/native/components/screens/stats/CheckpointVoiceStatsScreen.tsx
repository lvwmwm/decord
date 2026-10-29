// Module ID: 13446
// Function ID: 13447
// Name: CheckpointVoiceStatsScreen
// Dependencies: [19, 17, 13236, 6054, 21, 5005, 587, 558, 576, 504, 13249, 1125, 3090, 3058, 13438, 13442, 13447, 13448, 11740, 13436, 13449, 13450, 13451, 2]

// Module 13446 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3058 from "module_3058" /* 3058 */;
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11740 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 13249 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13451 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
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
  let formatToPlainString2Result;
  let items4;
  let obj10;
  let stringResult;
  let tmp10;
  let tmp31;
  let tmp42;
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
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp10 = S;
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
                  const tmp13 = cResult[12];
                  class S {
                    constructor() {
                      const globalStats = CheckpointStore.globalStats;
                      let peakHourUtc;
                      if (globalStats != null) {
                        const voice = globalStats.voice;
                        if (voice != null) {
                          peakHourUtc = voice.peakHourUtc;
                        }
                      }
                      return peakHourUtc;
                    }
                  }
                  if (tmp13 === undefined) {
                    if (stateFromStores != null) {
                      const totalVoiceMinutesPercentile = stateFromStores.totalVoiceMinutesPercentile;
                    }
                    class S {
                      constructor() {
                        const globalStats = CheckpointStore.globalStats;
                        let peakHourUtc;
                        if (globalStats != null) {
                          const voice = globalStats.voice;
                          if (voice != null) {
                            peakHourUtc = voice.peakHourUtc;
                          }
                        }
                        return peakHourUtc;
                      }
                    }
                    if (cResult[38] === tmp17) {
                      if (cResult[39] === str) {
                        if (cResult[40] === tmp24) {
                          let tmp64;
                          if (cResult[41] === tmp25) {
                            tmp64 = cResult[42];
                          }
                          if (cResult[43] === tmp18) {
                            if (cResult[44] === tmp21) {
                              if (cResult[45] === tmp64) {
                                if (cResult[46] === tmp26) {
                                  if (cResult[47] === tmp27) {
                                    let tmp67;
                                    if (cResult[48] === tmp28) {
                                      tmp67 = cResult[49];
                                    }
                                    if (cResult[50] === tmp19) {
                                      if (cResult[51] === tmp22) {
                                        if (cResult[52] === tmp23) {
                                          let tmp71;
                                          if (cResult[53] === tmp67) {
                                            tmp71 = cResult[54];
                                          }
                                          if (cResult[55] === tmp20) {
                                            let tmp75;
                                            if (cResult[56] === tmp71) {
                                              tmp75 = cResult[57];
                                            }
                                            return tmp75;
                                          }
                                          class S {
                                            constructor() {
                                              const globalStats = CheckpointStore.globalStats;
                                              let peakHourUtc;
                                              if (globalStats != null) {
                                                const voice = globalStats.voice;
                                                if (voice != null) {
                                                  peakHourUtc = voice.peakHourUtc;
                                                }
                                              }
                                              return peakHourUtc;
                                            }
                                          }
                                          tmp77[0] = tmp71;
                                          const tmp78 = metroImportDefault(tmp20, tmp77);
                                          cResult[55] = tmp20;
                                          cResult[56] = tmp71;
                                          cResult[57] = tmp78;
                                          tmp75 = tmp78;
                                        }
                                      }
                                    }
                                    class S {
                                      constructor() {
                                        const globalStats = CheckpointStore.globalStats;
                                        let peakHourUtc;
                                        if (globalStats != null) {
                                          const voice = globalStats.voice;
                                          if (voice != null) {
                                            peakHourUtc = voice.peakHourUtc;
                                          }
                                        }
                                        return peakHourUtc;
                                      }
                                    }
                                    tmp73[0] = tmp22;
                                    const items2 = [tmp23, tmp67];
                                    tmp73[1] = items2;
                                    const tmp74 = metroImportAll(tmp19, tmp73);
                                    cResult[50] = tmp19;
                                    cResult[51] = tmp22;
                                    cResult[52] = tmp23;
                                    cResult[53] = tmp67;
                                    cResult[54] = tmp74;
                                    tmp71 = tmp74;
                                  }
                                }
                              }
                            }
                          }
                          class S {
                            constructor() {
                              const globalStats = CheckpointStore.globalStats;
                              let peakHourUtc;
                              if (globalStats != null) {
                                const voice = globalStats.voice;
                                if (voice != null) {
                                  peakHourUtc = voice.peakHourUtc;
                                }
                              }
                              return peakHourUtc;
                            }
                          }
                          tmp69[0] = tmp26;
                          const items3 = [tmp27, tmp28, tmp21, tmp64];
                          tmp69[1] = items3;
                          const tmp70 = metroImportAll(tmp18, tmp69);
                          cResult[43] = tmp18;
                          cResult[44] = tmp21;
                          cResult[45] = tmp64;
                          cResult[46] = tmp26;
                          cResult[47] = tmp27;
                          cResult[48] = tmp28;
                          cResult[49] = tmp70;
                          tmp67 = tmp70;
                        }
                      }
                    }
                    const obj2 = { variant: str, accessibilityLabel: tmp24, children: tmp25 };
                    const tmp66 = metroImportDefault(tmp17, obj2);
                    cResult[38] = tmp17;
                    cResult[39] = str;
                    cResult[40] = tmp24;
                    cResult[41] = tmp25;
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
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
    cResult[28] = result;
    tmp31 = result;
  } else {
    tmp31 = cResult[28];
  }
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp(1125).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3090.ZCwB8J);
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
  } else {
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { numMinutes: null };
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
    stringResult = formatToPlainString(_modDef3058.UZbUtl, obj3);
  }
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1125).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const obj4 = {
        numMinutes: null,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let peakHourUtc;
          if (globalStats != null) {
            const voice = globalStats.voice;
            if (voice != null) {
              peakHourUtc = voice.peakHourUtc;
            }
          }
          return peakHourUtc;
        }
      }
      formatToPlainString2Result = formatToPlainString2(tmp37(3090).RqXsIs, obj4);
    }
  }
  const container = tmp4.container;
  const tmp37Result = tmp37(13438);
  if (cResult[29] !== tmp4.image) {
    const obj5 = { animatedUri: null, staticUri: tmp37(13448), style: tmp4.image };
    const tmp37Result3 = tmp37(13442);
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
    const tmp45 = metroImportDefault(tmp37Result3, obj5);
    cResult[29] = tmp4.image;
    cResult[30] = tmp45;
    tmp42 = tmp45;
  } else {
    tmp42 = cResult[30];
  }
  if (cResult[31] === tmp4.imageContainer) {
    let tmp46;
    let tmp49;
    if (cResult[32] === tmp42) {
      tmp46 = cResult[33];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    class S {
      constructor() {
        const globalStats = CheckpointStore.globalStats;
        let peakHourUtc;
        if (globalStats != null) {
          const voice = globalStats.voice;
          if (voice != null) {
            peakHourUtc = voice.peakHourUtc;
          }
        }
        return peakHourUtc;
      }
    }
    if (tmp48 === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { size: "xs", color: null };
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let peakHourUtc;
          if (globalStats != null) {
            const voice = globalStats.voice;
            if (voice != null) {
              peakHourUtc = voice.peakHourUtc;
            }
          }
          return peakHourUtc;
        }
      }
      const tmp52 = metroImportDefault(MicrophoneIcon.MicrophoneIcon, obj6);
      cResult[34] = tmp52;
      tmp49 = tmp52;
    } else {
      tmp49 = cResult[34];
    }
    const obj7 = { style: tmp4.title, children: items4 };
    items4 = [tmp49, ];
    const obj8 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    const tmp37Result4 = tmp37(13436);
    items4[1] = metroImportDefault(tmp37Result4, obj8);
    const tmp56 = metroImportAll(View, obj7);
    if (cResult[35] === tmp31) {
      let tmp57;
      let stringResult1;
      if (cResult[36] === roundResult <= 0) {
        tmp57 = cResult[37];
      }
      let tmp54Result = !tmp30;
      if (tmp54Result) {
        const _HermesInternal = HermesInternal;
        const obj9 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp4.number, children: metroImportDefault(tmp37(13450), obj10) };
        class S {
          constructor() {
            const globalStats = CheckpointStore.globalStats;
            let peakHourUtc;
            if (globalStats != null) {
              const voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        obj10 = { end: roundResult };
        tmp54Result = tmp54(tmp41, obj9);
      }
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let peakHourUtc;
          if (globalStats != null) {
            const voice = globalStats.voice;
            if (voice != null) {
              peakHourUtc = voice.peakHourUtc;
            }
          }
          return peakHourUtc;
        }
      }
      if (roundResult <= 0) {
        const intl5 = tmp(1125).intl;
        stringResult1 = intl5.string(tmp37(3090).huiTne);
      } else if (null != checkpointTopPercent) {
        const intl4 = tmp(1125).intl;
        const format2 = intl4.format;
        const obj11 = {
          numMinutes: null,
          percent: checkpointTopPercent,
          percentHook(children, arg1) {
                  const obj = { children };
                  return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
                }
        };
        class S {
          constructor() {
            const globalStats = CheckpointStore.globalStats;
            let peakHourUtc;
            if (globalStats != null) {
              const voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        stringResult1 = format2(tmp37(3090).RqXsIs, obj11);
      } else {
        const intl3 = tmp(1125).intl;
        const format = intl3.format;
        const obj12 = { numMinutes: null };
        class S {
          constructor() {
            const globalStats = CheckpointStore.globalStats;
            let peakHourUtc;
            if (globalStats != null) {
              const voice = globalStats.voice;
              if (voice != null) {
                peakHourUtc = voice.peakHourUtc;
              }
            }
            return peakHourUtc;
          }
        }
        stringResult1 = format(tmp37(3090).Y3poDW, obj12);
      }
      cResult[4] = stateFromStores1;
      cResult[5] = tmp4.container;
      cResult[6] = tmp4.copy;
      cResult[7] = tmp4.image;
      cResult[8] = tmp4.imageContainer;
      cResult[9] = tmp4.number;
      cResult[10] = tmp4.title;
      cResult[11] = tmp4.titleText;
      let totalVoiceMinutes;
      if (stateFromStores != null) {
        totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
      }
      cResult[12] = totalVoiceMinutes;
      let prop1;
      if (stateFromStores != null) {
        prop1 = stateFromStores.totalVoiceMinutesPercentile;
      }
      cResult[13] = prop1;
      cResult[14] = tmp60;
      cResult[15] = View;
      cResult[16] = View;
      cResult[17] = tmp37Result;
      cResult[18] = tmp54Result;
      cResult[19] = container;
      cResult[20] = tmp46;
      cResult[21] = "heading-lg/medium";
      cResult[22] = formatToPlainString2Result;
      cResult[23] = stringResult1;
      cResult[24] = copy;
      cResult[25] = tmp56;
      cResult[26] = tmp57;
    }
    if (roundResult <= 0 && null != tmp31) {
      ({ value: obj13.value, label: obj13.accessibilityLabel } = tmp31);
      class S {
        constructor() {
          const globalStats = CheckpointStore.globalStats;
          let peakHourUtc;
          if (globalStats != null) {
            const voice = globalStats.voice;
            if (voice != null) {
              peakHourUtc = voice.peakHourUtc;
            }
          }
          return peakHourUtc;
        }
      }
    }
    cResult[35] = tmp31;
    cResult[36] = roundResult <= 0;
    cResult[37] = roundResult <= 0 && null != tmp31;
    tmp57 = tmp58;
  }
  const obj15 = { style: tmp4.imageContainer, children: tmp42 };
  const tmp47 = metroImportDefault(View, obj15);
  cResult[31] = tmp4.imageContainer;
  cResult[32] = tmp42;
  cResult[33] = tmp47;
  tmp46 = tmp47;
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
  const getCheckpointTopPercent = stateFromStores1(13249).getCheckpointTopPercent;
  stateFromStores1(13249);
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1125).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3090.ZCwB8J);
    tmp13 = importDefault;
  } else {
    const obj3 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3058.UZbUtl, obj3);
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
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3090).RqXsIs, obj4);
    }
  }
  const obj5 = { style: tmp.container, children: items3 };
  const obj6 = { style: tmp.imageContainer, children: closure_7(tmp13Result4, obj7) };
  obj7 = { animatedUri: tmp13(13447), staticUri: tmp13(13448), style: tmp.image };
  const tmp13Result = tmp13(13438);
  tmp13Result4 = tmp13(13442);
  items3 = [closure_7(View, obj6), ];
  const obj9 = { style: tmp.title, children: items4 };
  items4 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp.copy, children: items5 };
  items4[0] = closure_7(stateFromStores1(11740).MicrophoneIcon, obj10);
  const obj11 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(13436);
  items4[1] = closure_7(tmp13Result5, obj11);
  items5 = [closure_8(View, obj9), , , ];
  let tmp16Result = tmp7 && null != memo;
  if (tmp16Result) {
    const obj12 = { value: null, accessibilityLabel: null };
    ({ value: obj13.value, label: obj13.accessibilityLabel } = memo);
    tmp16Result = tmp16(tmp13(13449), obj12);
  }
  items5[1] = tmp16Result;
  let tmp16Result2 = !tmp7;
  if (tmp16Result2) {
    const _HermesInternal = HermesInternal;
    const obj14 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_7(tmp13(13450), obj15) };
    obj15 = { end: roundResult };
    tmp16Result2 = tmp16(tmp19, obj14);
  }
  items5[2] = tmp16Result2;
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: stringResult1 };
  const tmp13Result6 = tmp13(13436);
  if (roundResult <= 0) {
    const intl5 = tmp2(1125).intl;
    stringResult1 = intl5.string(tmp13(3090).huiTne);
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
    stringResult1 = intl4.format(tmp13(3090).RqXsIs, obj17);
  } else {
    const intl3 = tmp2(1125).intl;
    const obj18 = { numMinutes: roundResult };
    stringResult1 = intl3.format(tmp13(3090).Y3poDW, obj18);
  }
  const obj19 = { children: closure_8(View, obj5) };
  items5[3] = closure_7(tmp13Result6, obj16);
  items3[1] = closure_8(View, obj8);
  return closure_7(tmp13Result, obj19);
});
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default tmp4;
