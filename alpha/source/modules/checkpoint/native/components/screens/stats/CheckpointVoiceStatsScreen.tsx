// Module ID: 12865
// Function ID: 12866
// Name: CheckpointVoiceStatsScreen
// Dependencies: [17, 12843, 5995, 21, 4966, 587, 1128, 3088, 558, 576, 504, 12846, 3056, 12863, 12866, 12867, 11574, 12861, 12868, 12869, 12870, 12871, 2]

// Module 12865 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 5995 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11574 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12846 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12871 */;
import CheckpointStore from "CheckpointStore" /* 12843 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 9200000;
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 1 }, copy: { flexShrink: 1 }, number: obj4, globalNumber: obj5, globe: { width: 75, height: 56 } };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_6 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointVoiceStatsScreen() {
  let formatToPlainString2Result;
  let items4;
  let stringResult;
  let tmp10;
  let tmp35;
  let tmp40;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(53);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function b() {
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
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp4.copy) {
        if (cResult[7] === tmp4.globalNumber) {
          if (cResult[8] === tmp4.globe) {
            if (cResult[9] === tmp4.image) {
              if (cResult[10] === tmp4.imageContainer) {
                if (cResult[11] === tmp4.number) {
                  if (cResult[12] === tmp4.title) {
                    if (cResult[13] === tmp4.titleText) {
                      const tmp13 = cResult[14];
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
                        if (cResult[34] === tmp17) {
                          if (cResult[35] === str) {
                            if (cResult[36] === tmp23) {
                              let tmp63;
                              if (cResult[37] === tmp24) {
                                tmp63 = cResult[38];
                              }
                              if (cResult[39] === tmp18) {
                                if (cResult[40] === tmp63) {
                                  if (cResult[41] === tmp25) {
                                    if (cResult[42] === tmp26) {
                                      let tmp66;
                                      if (cResult[43] === tmp27) {
                                        tmp66 = cResult[44];
                                      }
                                      if (cResult[45] === tmp19) {
                                        if (cResult[46] === tmp21) {
                                          if (cResult[47] === tmp22) {
                                            let tmp70;
                                            if (cResult[48] === tmp66) {
                                              tmp70 = cResult[49];
                                            }
                                            if (cResult[50] === tmp20) {
                                              let tmp74;
                                              if (cResult[51] === tmp70) {
                                                tmp74 = cResult[52];
                                              }
                                              return tmp74;
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
                                            tmp76[0] = tmp70;
                                            const tmp77 = metroRequire(tmp20, tmp76);
                                            cResult[50] = tmp20;
                                            cResult[51] = tmp70;
                                            cResult[52] = tmp77;
                                            tmp74 = tmp77;
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
                                      tmp72[0] = tmp21;
                                      const items2 = [tmp22, tmp66];
                                      tmp72[1] = items2;
                                      const tmp73 = metroImportDefault(tmp19, tmp72);
                                      cResult[45] = tmp19;
                                      cResult[46] = tmp21;
                                      cResult[47] = tmp22;
                                      cResult[48] = tmp66;
                                      cResult[49] = tmp73;
                                      tmp70 = tmp73;
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
                              tmp68[0] = tmp25;
                              const items3 = [tmp26, tmp27, tmp63];
                              tmp68[1] = items3;
                              const tmp69 = metroImportDefault(tmp18, tmp68);
                              cResult[39] = tmp18;
                              cResult[40] = tmp63;
                              cResult[41] = tmp25;
                              cResult[42] = tmp26;
                              cResult[43] = tmp27;
                              cResult[44] = tmp69;
                              tmp66 = tmp69;
                            }
                          }
                        }
                        const obj2 = { variant: str, accessibilityLabel: tmp23, children: tmp24 };
                        const tmp65 = metroRequire(tmp17, obj2);
                        cResult[34] = tmp17;
                        cResult[35] = str;
                        cResult[36] = tmp23;
                        cResult[37] = tmp24;
                        cResult[38] = tmp65;
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
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp(1128).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3088.ZCwB8J);
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
    tmp35 = importDefault;
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
    stringResult = formatToPlainString(_modDef3056.UZbUtl, obj3);
    tmp35 = importDefault;
  }
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1128).intl;
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
      formatToPlainString2Result = formatToPlainString2(tmp35(3088).RqXsIs, obj4);
    }
  }
  const container = tmp4.container;
  const tmp35Result = tmp35(12863);
  if (cResult[28] !== tmp4.image) {
    const obj5 = { uri: null, style: tmp4.image };
    const tmp35Result5 = tmp35(12866);
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
    const tmp43 = metroRequire(tmp35Result5, obj5);
    cResult[28] = tmp4.image;
    cResult[29] = tmp43;
    tmp40 = tmp43;
  } else {
    tmp40 = cResult[29];
  }
  if (cResult[30] === tmp4.imageContainer) {
    let tmp44;
    let tmp47;
    let tmp52Result;
    let format2Result;
    if (cResult[31] === tmp40) {
      tmp44 = cResult[32];
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
    if (tmp46 === Symbol.for("react.memo_cache_sentinel")) {
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
      const tmp50 = metroRequire(MicrophoneIcon.MicrophoneIcon, obj6);
      cResult[33] = tmp50;
      tmp47 = tmp50;
    } else {
      tmp47 = cResult[33];
    }
    const obj7 = { style: tmp4.title, children: items4 };
    items4 = [tmp47, ];
    const obj8 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    const tmp35Result6 = tmp35(12861);
    items4[1] = metroRequire(tmp35Result6, obj8);
    const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const tmp51 = metroImportDefault;
    const tmp54 = metroImportDefault(View, obj7);
    if (roundResult <= 0) {
      obj9.accessibilityLabel = value.toLocaleString(intl7.intl.currentLocale);
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
      const obj10 = { value, size: 80 };
      const items5 = [metroRequire(tmp35(12868), obj10), ];
      const obj11 = { uri: tmp35(12869), style: tmp4.globe };
      const tmp35Result7 = tmp35(12866);
      items5[1] = metroRequire(tmp35Result7, obj11);
      obj9.children = items5;
      tmp52Result = tmp51(tmp39, obj9);
    } else {
      const _HermesInternal = HermesInternal;
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
      obj9.style = tmp4.number;
      const obj12 = { end: roundResult };
      obj9.children = metroRequire(tmp35(12870), obj12);
      tmp52Result = tmp52(tmp39, obj9);
    }
    const tmp35Result8 = tmp35(12861);
    if (roundResult <= 0) {
      let stringResult1;
      if (null == stateFromStores1) {
        const intl5 = tmp(1128).intl;
        stringResult1 = intl5.string(tmp34(3088)["X/xLXp"]);
      } else {
        const _Intl = Intl;
        const self = this;
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
        const dateTimeFormat = new DateTimeFormat(tmp(1128).intl.currentLocale, { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" });
        const _Date = Date;
        const _Date2 = Date;
        const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
        const intl6 = tmp(1128).intl;
        const obj13 = { peakTime: formatResult };
        stringResult1 = intl6.formatToPlainString(tmp34(3088).huiTne, obj13);
      }
      format2Result = stringResult1;
    } else if (null != checkpointTopPercent) {
      const intl4 = tmp(1128).intl;
      const format2 = intl4.format;
      const obj14 = {
        numMinutes: null,
        percent: checkpointTopPercent,
        percentHook(children, arg1) {
              const obj = { children };
              return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
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
      format2Result = format2(tmp35(3088).RqXsIs, obj14);
    } else {
      const intl3 = tmp(1128).intl;
      const format = intl3.format;
      const obj15 = { numMinutes: null };
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
      format2Result = format(tmp35(3088).Y3poDW, obj15);
    }
    cResult[4] = stateFromStores1;
    cResult[5] = tmp4.container;
    cResult[6] = tmp4.copy;
    cResult[7] = tmp4.globalNumber;
    cResult[8] = tmp4.globe;
    cResult[9] = tmp4.image;
    cResult[10] = tmp4.imageContainer;
    cResult[11] = tmp4.number;
    cResult[12] = tmp4.title;
    cResult[13] = tmp4.titleText;
    let totalVoiceMinutes;
    if (stateFromStores != null) {
      totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
    }
    cResult[14] = totalVoiceMinutes;
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.totalVoiceMinutesPercentile;
    }
    cResult[15] = prop1;
    cResult[16] = tmp35Result8;
    cResult[17] = View;
    cResult[18] = View;
    cResult[19] = tmp35Result;
    cResult[20] = container;
    cResult[21] = tmp44;
    cResult[22] = "heading-lg/medium";
    cResult[23] = formatToPlainString2Result;
    cResult[24] = format2Result;
    cResult[25] = copy;
    cResult[26] = tmp54;
    cResult[27] = tmp52Result;
  }
  const obj16 = { style: tmp4.imageContainer, children: tmp40 };
  const tmp45 = metroRequire(View, obj16);
  cResult[30] = tmp4.imageContainer;
  cResult[31] = tmp40;
  cResult[32] = tmp45;
  tmp44 = tmp45;
}) : (function CheckpointVoiceStatsScreen() {
  let formatResult1;
  let items2;
  let items3;
  let items4;
  let obj7;
  let stringResult;
  let tmp12;
  let tmp13;
  let tmp13Result5;
  let tmp16Result;
  const tmp = closure_9();
  let obj = get_initialized;
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
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  let prop;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1128).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3088.ZCwB8J);
    tmp12 = importDefault;
    tmp13 = importDefault;
  } else {
    const obj3 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3056.UZbUtl, obj3);
    tmp12 = importDefault;
    tmp13 = importDefault;
  }
  let formatToPlainStringResult;
  if (roundResult > 0) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1128).intl;
      const obj4 = {
        numMinutes: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp13(3088).RqXsIs, obj4);
    }
  }
  const obj5 = { style: tmp.container, children: items2 };
  const obj6 = { style: tmp.imageContainer, children: metroRequire(tmp13Result5, obj7) };
  obj7 = { uri: tmp13(12867), style: tmp.image };
  const tmp13Result = tmp13(12863);
  tmp13Result5 = tmp13(12866);
  items2 = [metroRequire(View, obj6), ];
  const obj9 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp.copy, children: items4 };
  items3[0] = metroRequire(MicrophoneIcon.MicrophoneIcon, obj10);
  const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result6 = tmp13(12861);
  items3[1] = metroRequire(tmp13Result6, obj11);
  items4 = [metroImportDefault(View, obj9), , ];
  const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  if (roundResult <= 0) {
    obj12.accessibilityLabel = value.toLocaleString(intl7.intl.currentLocale);
    obj12.style = tmp.globalNumber;
    const obj13 = { value, size: 80 };
    const items5 = [metroRequire(tmp13(12868), obj13), ];
    const obj14 = { uri: tmp13(12869), style: tmp.globe };
    const tmp13Result7 = tmp13(12866);
    items5[1] = metroRequire(tmp13Result7, obj14);
    obj12.children = items5;
    tmp16Result = tmp18(tmp19, obj12);
  } else {
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + roundResult + " " + stringResult.toLocaleLowerCase();
    obj12.style = tmp.number;
    const obj15 = { end: roundResult };
    obj12.children = metroRequire(tmp13(12870), obj15);
    tmp16Result = tmp16(tmp19, obj12);
  }
  items4[1] = tmp16Result;
  const obj16 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult1 };
  const tmp13Result8 = tmp13(12861);
  if (roundResult <= 0) {
    let stringResult1;
    if (null == stateFromStores1) {
      const intl5 = tmp2(1128).intl;
      stringResult1 = intl5.string(tmp12(3088)["X/xLXp"]);
    } else {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const dateTimeFormat = new Intl.DateTimeFormat(tmp2(1128).intl.currentLocale, { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" });
      const _Date = Date;
      const _Date2 = Date;
      const formatResult = dateTimeFormat.format(Date.UTC(2026, 0, 25, stateFromStores1));
      const intl6 = tmp2(1128).intl;
      const obj17 = { peakTime: formatResult };
      stringResult1 = intl6.formatToPlainString(tmp12(3088).huiTne, obj17);
    }
    formatResult1 = stringResult1;
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj18 = {
      numMinutes: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult1 = intl4.format(tmp13(3088).RqXsIs, obj18);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj19 = { numMinutes: roundResult };
    formatResult1 = intl3.format(tmp13(3088).Y3poDW, obj19);
  }
  const obj20 = { children: metroImportDefault(View, obj5) };
  items4[2] = metroRequire(tmp13Result8, obj16);
  items2[1] = metroImportDefault(View, obj8);
  return metroRequire(tmp13Result, obj20);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default tmp4;
