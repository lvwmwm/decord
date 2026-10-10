// Module ID: 15999
// Function ID: 16000
// Name: CheckpointVoiceStatsScreen
// Dependencies: [17, 15977, 5437, 21, 5092, 587, 558, 576, 504, 1126, 3086, 3118, 15998, 16000, 16001, 11104, 15996, 16002, 16003, 2]

// Module 15999 (CheckpointVoiceStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3086 from "module_3086" /* 3086 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11104 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 16003 */;
import CheckpointStore from "CheckpointStore" /* 15977 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
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
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 1 }, copy: { flexShrink: 1 }, number: obj4 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointVoiceStatsScreen() {
  let formatToPlainStringResult;
  let items1;
  let items2;
  let items3;
  let obj13;
  let str;
  let stringResult;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp30;
  let tmp35;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(48);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      stats = stats.stats;
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
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp4.copy) {
      if (cResult[4] === tmp4.image) {
        if (cResult[5] === tmp4.imageContainer) {
          if (cResult[6] === tmp4.number) {
            if (cResult[7] === tmp4.title) {
              if (cResult[8] === tmp4.titleText) {
                let totalVoiceMinutes;
                const tmp9 = cResult[9];
                if (stateFromStores != null) {
                  totalVoiceMinutes = stateFromStores.totalVoiceMinutes;
                }
                if (tmp9 === totalVoiceMinutes) {
                  let prop;
                  const tmp12 = cResult[10];
                  if (stateFromStores != null) {
                    prop = stateFromStores.totalVoiceMinutesPercentile;
                  }
                  if (tmp12 === prop) {
                    tmp14 = cResult[11];
                    tmp15 = cResult[12];
                    tmp16 = cResult[13];
                    tmp17 = cResult[14];
                    str = cResult[15];
                    tmp18 = cResult[16];
                    tmp19 = cResult[17];
                    tmp20 = cResult[18];
                    tmp21 = cResult[19];
                    tmp22 = cResult[20];
                    tmp23 = cResult[21];
                    tmp24 = cResult[22];
                  }
                  if (cResult[29] === tmp14) {
                    if (cResult[30] === str) {
                      if (cResult[31] === tmp18) {
                        let tmp54;
                        if (cResult[32] === tmp19) {
                          tmp54 = cResult[33];
                        }
                        if (cResult[34] === tmp15) {
                          if (cResult[35] === tmp54) {
                            if (cResult[36] === tmp20) {
                              if (cResult[37] === tmp21) {
                                let tmp57;
                                if (cResult[38] === tmp22) {
                                  tmp57 = cResult[39];
                                }
                                if (cResult[40] === tmp16) {
                                  if (cResult[41] === tmp57) {
                                    if (cResult[42] === tmp23) {
                                      let tmp60;
                                      if (cResult[43] === tmp24) {
                                        tmp60 = cResult[44];
                                      }
                                      if (cResult[45] === tmp17) {
                                        let tmp63;
                                        if (cResult[46] === tmp60) {
                                          tmp63 = cResult[47];
                                        }
                                        return tmp63;
                                      }
                                      const obj2 = { children: tmp60 };
                                      const tmp65 = metroRequire(tmp17, obj2);
                                      cResult[45] = tmp17;
                                      cResult[46] = tmp60;
                                      cResult[47] = tmp65;
                                      tmp63 = tmp65;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp23, children: items1 };
                                items1 = [tmp24, tmp57];
                                const tmp62 = metroImportDefault(tmp16, obj3);
                                cResult[40] = tmp16;
                                cResult[41] = tmp57;
                                cResult[42] = tmp23;
                                cResult[43] = tmp24;
                                cResult[44] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                          }
                        }
                        const obj4 = { style: tmp20, children: items2 };
                        items2 = [tmp21, tmp22, tmp54];
                        const tmp59 = metroImportDefault(tmp15, obj4);
                        cResult[34] = tmp15;
                        cResult[35] = tmp54;
                        cResult[36] = tmp20;
                        cResult[37] = tmp21;
                        cResult[38] = tmp22;
                        cResult[39] = tmp59;
                        tmp57 = tmp59;
                      }
                    }
                  }
                  const obj5 = { variant: str, accessibilityLabel: tmp18, children: tmp19 };
                  const tmp56 = metroRequire(tmp14, obj5);
                  cResult[29] = tmp14;
                  cResult[30] = str;
                  cResult[31] = tmp18;
                  cResult[32] = tmp19;
                  cResult[33] = tmp56;
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
    num3 = stateFromStores.totalVoiceMinutes;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const roundResult = round(num3);
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.totalVoiceMinutesPercentile;
  }
  let bound = null;
  if (null != prop1) {
    bound = null;
    if (prop1 >= 50) {
      const _Math2 = Math;
      const _Math3 = Math;
      bound = Math.max(1, Math.ceil(100 - prop1));
    }
  }
  const intl = tmp(1126).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3086["OBeYX/"]);
    tmp30 = importDefault;
  } else {
    const obj6 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3086.UZbUtl, obj6);
    tmp30 = importDefault;
  }
  if (roundResult > 0) {
    if (null != bound) {
      const intl2 = tmp(1126).intl;
      const obj7 = {
        numMinutes: roundResult,
        percent: bound,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp30(3118).RqXsIs, obj7);
    }
  }
  const tmp30Result = tmp30(15998);
  const container = tmp4.container;
  if (cResult[23] !== tmp4.image) {
    const obj8 = { uri: tmp30(16001), style: tmp4.image };
    const tmp30Result4 = tmp30(16000);
    const tmp38 = metroRequire(tmp30Result4, obj8);
    cResult[23] = tmp4.image;
    cResult[24] = tmp38;
    tmp35 = tmp38;
  } else {
    tmp35 = cResult[24];
  }
  if (cResult[25] === tmp4.imageContainer) {
    let tmp39;
    let tmp41;
    let stringResult1;
    if (cResult[26] === tmp35) {
      tmp39 = cResult[27];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp44 = metroRequire(MicrophoneIcon.MicrophoneIcon, obj9);
      cResult[28] = tmp44;
      tmp41 = tmp44;
    } else {
      tmp41 = cResult[28];
    }
    const obj10 = { style: tmp4.title, children: items3 };
    items3 = [tmp41, ];
    const obj11 = { variant: "heading-md/extrabold", style: tmp4.titleText, children: stringResult.toLocaleUpperCase() };
    const tmp30Result5 = tmp30(15996);
    items3[1] = metroRequire(tmp30Result5, obj11);
    const tmp48 = metroImportDefault(View, obj10);
    let tmp46Result = !tmp26;
    if (tmp46Result) {
      const _HermesInternal = HermesInternal;
      const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp4.number, children: metroRequire(tmp30(16002), obj13) };
      obj13 = { end: roundResult };
      tmp46Result = tmp46(tmp34, obj12);
    }
    const tmp30Result6 = tmp30(15996);
    if (roundResult <= 0) {
      const intl5 = tmp(1126).intl;
      stringResult1 = intl5.string(tmp30(3086).MyO0sh);
    } else if (null != bound) {
      const intl4 = tmp(1126).intl;
      const obj14 = {
        numMinutes: roundResult,
        percent: bound,
        percentHook(children, arg1) {
              const obj = { children };
              return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
            }
      };
      stringResult1 = intl4.format(tmp30(3118).RqXsIs, obj14);
    } else {
      const intl3 = tmp(1126).intl;
      const obj15 = { numMinutes: roundResult };
      stringResult1 = intl3.format(tmp30(3118).Y3poDW, obj15);
    }
    cResult[2] = tmp4.container;
    cResult[3] = tmp4.copy;
    cResult[4] = tmp4.image;
    cResult[5] = tmp4.imageContainer;
    cResult[6] = tmp4.number;
    cResult[7] = tmp4.title;
    cResult[8] = tmp4.titleText;
    let totalVoiceMinutes1;
    if (stateFromStores != null) {
      totalVoiceMinutes1 = stateFromStores.totalVoiceMinutes;
    }
    cResult[9] = totalVoiceMinutes1;
    let prop2;
    if (stateFromStores != null) {
      prop2 = stateFromStores.totalVoiceMinutesPercentile;
    }
    cResult[10] = prop2;
    cResult[11] = tmp30Result6;
    cResult[12] = View;
    cResult[13] = View;
    cResult[14] = tmp30Result;
    cResult[15] = "heading-lg/medium";
    cResult[16] = formatToPlainStringResult;
    cResult[17] = stringResult1;
    cResult[18] = copy;
    cResult[19] = tmp48;
    cResult[20] = tmp46Result;
    cResult[21] = container;
    cResult[22] = tmp39;
    tmp24 = tmp39;
    tmp23 = container;
    tmp22 = tmp46Result;
    tmp21 = tmp48;
    tmp20 = copy;
    tmp19 = stringResult1;
    tmp18 = formatToPlainStringResult;
    str = "heading-lg/medium";
    tmp17 = tmp30Result;
    tmp16 = tmp34;
    tmp15 = tmp34;
    tmp14 = tmp30Result6;
  }
  const obj16 = { style: tmp4.imageContainer, children: tmp35 };
  const tmp40 = metroRequire(View, obj16);
  cResult[25] = tmp4.imageContainer;
  cResult[26] = tmp35;
  cResult[27] = tmp40;
  tmp39 = tmp40;
}) : (function CheckpointVoiceStatsScreen() {
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj6;
  let stringResult;
  let stringResult1;
  let tmp10;
  let tmp10Result4;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let voice;
    if (stats != null) {
      voice = stats.voice;
    }
    return voice;
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
  if (stateFromStores != null) {
    prop = stateFromStores.totalVoiceMinutesPercentile;
  }
  let bound = null;
  if (null != prop) {
    bound = null;
    if (prop >= 50) {
      const _Math2 = Math;
      const _Math3 = Math;
      bound = Math.max(1, Math.ceil(100 - prop));
    }
  }
  const intl = tmp2(1126).intl;
  if (roundResult <= 0) {
    stringResult = intl.string(_modDef3086["OBeYX/"]);
    tmp10 = importDefault;
  } else {
    const obj2 = { numMinutes: roundResult };
    stringResult = intl.formatToPlainString(_modDef3086.UZbUtl, obj2);
    tmp10 = importDefault;
  }
  let formatToPlainStringResult;
  if (roundResult > 0) {
    if (null != bound) {
      const intl2 = tmp2(1126).intl;
      const obj3 = {
        numMinutes: roundResult,
        percent: bound,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(3118).RqXsIs, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items1 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp10Result4, obj6) };
  obj6 = { uri: tmp10(16001), style: tmp.image };
  const tmp10Result = tmp10(15998);
  tmp10Result4 = tmp10(16000);
  items1 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items2 };
  items2 = [, ];
  const obj7 = { style: tmp.copy, children: items3 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items2[0] = metroRequire(MicrophoneIcon.MicrophoneIcon, obj9);
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp10Result5 = tmp10(15996);
  items2[1] = metroRequire(tmp10Result5, obj10);
  items3 = [metroImportDefault(View, obj8), , ];
  let tmp13Result = !tmp6;
  if (tmp13Result) {
    const _HermesInternal = HermesInternal;
    const obj11 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: metroRequire(tmp10(16002), obj12) };
    obj12 = { end: roundResult };
    tmp13Result = tmp13(tmp16, obj11);
  }
  items3[1] = tmp13Result;
  const obj13 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: stringResult1 };
  const tmp10Result6 = tmp10(15996);
  if (roundResult <= 0) {
    const intl5 = tmp2(1126).intl;
    stringResult1 = intl5.string(tmp10(3086).MyO0sh);
  } else if (null != bound) {
    const intl4 = tmp2(1126).intl;
    const obj14 = {
      numMinutes: roundResult,
      percent: bound,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    stringResult1 = intl4.format(tmp10(3118).RqXsIs, obj14);
  } else {
    const intl3 = tmp2(1126).intl;
    const obj15 = { numMinutes: roundResult };
    stringResult1 = intl3.format(tmp10(3118).Y3poDW, obj15);
  }
  const obj16 = { children: metroImportDefault(View, obj4) };
  items3[2] = metroRequire(tmp10Result6, obj13);
  items1[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp10Result, obj16);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default tmp4;
