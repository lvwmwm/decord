// Module ID: 12897
// Function ID: 12898
// Name: CheckpointVoiceStatsScreen
// Dependencies: [17, 12875, 6002, 21, 4969, 587, 1128, 3088, 558, 576, 504, 12878, 3056, 12895, 12898, 12899, 11591, 12893, 12900, 12901, 12904, 2]

// Module 12897 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6002 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11591 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12878 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12904 */;
import CheckpointStore from "CheckpointStore" /* 12875 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
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
  let obj11;
  let stringResult;
  let tmp10;
  let tmp35;
  let tmp40;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(51);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
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
                    if (cResult[32] === tmp17) {
                      if (cResult[33] === str) {
                        if (cResult[34] === tmp23) {
                          let tmp62;
                          if (cResult[35] === tmp24) {
                            tmp62 = cResult[36];
                          }
                          if (cResult[37] === tmp18) {
                            if (cResult[38] === tmp62) {
                              if (cResult[39] === tmp25) {
                                if (cResult[40] === tmp26) {
                                  let tmp65;
                                  if (cResult[41] === tmp27) {
                                    tmp65 = cResult[42];
                                  }
                                  if (cResult[43] === tmp19) {
                                    if (cResult[44] === tmp21) {
                                      if (cResult[45] === tmp22) {
                                        let tmp69;
                                        if (cResult[46] === tmp65) {
                                          tmp69 = cResult[47];
                                        }
                                        if (cResult[48] === tmp20) {
                                          let tmp73;
                                          if (cResult[49] === tmp69) {
                                            tmp73 = cResult[50];
                                          }
                                          return tmp73;
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
                                        tmp75[0] = tmp69;
                                        const tmp76 = metroRequire(tmp20, tmp75);
                                        cResult[48] = tmp20;
                                        cResult[49] = tmp69;
                                        cResult[50] = tmp76;
                                        tmp73 = tmp76;
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
                                  tmp71[0] = tmp21;
                                  const items2 = [tmp22, tmp65];
                                  tmp71[1] = items2;
                                  const tmp72 = metroImportDefault(tmp19, tmp71);
                                  cResult[43] = tmp19;
                                  cResult[44] = tmp21;
                                  cResult[45] = tmp22;
                                  cResult[46] = tmp65;
                                  cResult[47] = tmp72;
                                  tmp69 = tmp72;
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
                          tmp67[0] = tmp25;
                          const items3 = [tmp26, tmp27, tmp62];
                          tmp67[1] = items3;
                          const tmp68 = metroImportDefault(tmp18, tmp67);
                          cResult[37] = tmp18;
                          cResult[38] = tmp62;
                          cResult[39] = tmp25;
                          cResult[40] = tmp26;
                          cResult[41] = tmp27;
                          cResult[42] = tmp68;
                          tmp65 = tmp68;
                        }
                      }
                    }
                    const obj2 = { variant: str, accessibilityLabel: tmp23, children: tmp24 };
                    const tmp64 = metroRequire(tmp17, obj2);
                    cResult[32] = tmp17;
                    cResult[33] = str;
                    cResult[34] = tmp23;
                    cResult[35] = tmp24;
                    cResult[36] = tmp64;
                    tmp62 = tmp64;
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
  const tmp35Result = tmp35(12895);
  if (cResult[26] !== tmp4.image) {
    const obj5 = { uri: null, style: tmp4.image };
    const tmp35Result4 = tmp35(12898);
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
    const tmp43 = metroRequire(tmp35Result4, obj5);
    cResult[26] = tmp4.image;
    cResult[27] = tmp43;
    tmp40 = tmp43;
  } else {
    tmp40 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    let tmp44;
    let tmp47;
    let tmp52Result;
    let format2Result;
    if (cResult[29] === tmp40) {
      tmp44 = cResult[30];
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
      cResult[31] = tmp50;
      tmp47 = tmp50;
    } else {
      tmp47 = cResult[31];
    }
    const obj7 = { style: tmp4.title, children: items4 };
    items4 = [tmp47, ];
    const obj8 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    const tmp35Result5 = tmp35(12893);
    items4[1] = metroRequire(tmp35Result5, obj8);
    const tmp54 = metroImportDefault(View, obj7);
    if (roundResult <= 0) {
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
      const _HermesInternal = HermesInternal;
      const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp4.number, children: metroRequire(tmp35(12901), obj11) };
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
      obj11 = { end: roundResult };
      tmp52Result = metroRequire(View, obj10);
    }
    const tmp35Result6 = tmp35(12893);
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
        const obj12 = { peakTime: formatResult };
        stringResult1 = intl6.formatToPlainString(tmp34(3088).huiTne, obj12);
      }
      format2Result = stringResult1;
    } else if (null != checkpointTopPercent) {
      const intl4 = tmp(1128).intl;
      const format2 = intl4.format;
      const obj13 = {
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
      format2Result = format2(tmp35(3088).RqXsIs, obj13);
    } else {
      const intl3 = tmp(1128).intl;
      const format = intl3.format;
      const obj14 = { numMinutes: null };
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
      format2Result = format(tmp35(3088).Y3poDW, obj14);
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
    cResult[14] = tmp35Result6;
    cResult[15] = View;
    cResult[16] = View;
    cResult[17] = tmp35Result;
    cResult[18] = container;
    cResult[19] = tmp44;
    cResult[20] = "heading-lg/medium";
    cResult[21] = formatToPlainString2Result;
    cResult[22] = format2Result;
    cResult[23] = copy;
    cResult[24] = tmp54;
    cResult[25] = tmp52Result;
  }
  const obj15 = { style: tmp4.imageContainer, children: tmp40 };
  const tmp45 = metroRequire(View, obj15);
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp40;
  cResult[30] = tmp45;
  tmp44 = tmp45;
}) : (function CheckpointVoiceStatsScreen() {
  let formatResult1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let obj7;
  let stringResult;
  let tmp12;
  let tmp13;
  let tmp13Result4;
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
  const obj6 = { style: tmp.imageContainer, children: metroRequire(tmp13Result4, obj7) };
  obj7 = { uri: tmp13(12899), style: tmp.image };
  const tmp13Result = tmp13(12895);
  tmp13Result4 = tmp13(12898);
  items2 = [metroRequire(View, obj6), ];
  const obj9 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const obj8 = { style: tmp.copy, children: items4 };
  items3[0] = metroRequire(MicrophoneIcon.MicrophoneIcon, obj10);
  const obj11 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp13Result5 = tmp13(12893);
  items3[1] = metroRequire(tmp13Result5, obj11);
  items4 = [metroImportDefault(View, obj9), , ];
  if (roundResult <= 0) {
    const obj12 = { value, compact: true };
    tmp16Result = tmp16(tmp13(12900), obj12);
  } else {
    const _HermesInternal = HermesInternal;
    const obj13 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: metroRequire(tmp13(12901), obj14) };
    obj14 = { end: roundResult };
    tmp16Result = tmp16(tmp19, obj13);
  }
  items4[1] = tmp16Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult1 };
  const tmp13Result6 = tmp13(12893);
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
      const obj16 = { peakTime: formatResult };
      stringResult1 = intl6.formatToPlainString(tmp12(3088).huiTne, obj16);
    }
    formatResult1 = stringResult1;
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj17 = {
      numMinutes: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult1 = intl4.format(tmp13(3088).RqXsIs, obj17);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj18 = { numMinutes: roundResult };
    formatResult1 = intl3.format(tmp13(3088).Y3poDW, obj18);
  }
  const obj19 = { children: metroImportDefault(View, obj5) };
  items4[2] = metroRequire(tmp13Result6, obj15);
  items2[1] = metroImportDefault(View, obj8);
  return metroRequire(tmp13Result, obj19);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default tmp4;
