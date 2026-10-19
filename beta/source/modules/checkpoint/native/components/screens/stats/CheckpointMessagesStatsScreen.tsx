// Module ID: 12772
// Function ID: 12773
// Name: CheckpointMessagesStatsScreen
// Dependencies: [17, 12742, 5537, 21, 5191, 587, 558, 576, 504, 1128, 3109, 3141, 12766, 12768, 12773, 8471, 12764, 12770, 12771, 2]

// Module 12772 (CheckpointMessagesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3109 from "module_3109" /* 3109 */;
import _modDef3141 from "module_3141" /* 3141 */;
import CheckpointConstants from "CheckpointConstants" /* 5537 */;
import ChatIcon from "ChatIcon" /* 8471 */;
import CheckpointTextDefault from "CheckpointText" /* 12764 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 12766 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12768 */;
import NumberAnimationDefault from "NumberAnimation" /* 12770 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12771 */;
import _modDef12773 from "module_12773" /* 12773 */;
import CheckpointStore from "CheckpointStore" /* 12742 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
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
let obj = { container: obj2, title: obj3, titleText: { flexShrink: 1 }, imageContainer: { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" }, image: { height: "100%", aspectRatio: 0.75 }, copy: { flexShrink: 1 }, number: obj4 };
obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointMessagesStatsScreen() {
  let copy;
  let formatToPlainStringResult;
  let items1;
  let items2;
  let items3;
  let str;
  let title;
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
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp35;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(69);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      stats = stats.stats;
      let messages;
      if (stats != null) {
        messages = stats.messages;
      }
      return messages;
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
  let numMessagesSent;
  const tmp9 = cResult[2];
  if (stateFromStores != null) {
    numMessagesSent = stateFromStores.numMessagesSent;
  }
  if (tmp9 === numMessagesSent) {
    let prop;
    const tmp81 = cResult[3];
    if (stateFromStores != null) {
      prop = stateFromStores.numMessagesSentPercentile;
    }
    if (tmp81 === prop) {
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp4.copy) {
          if (cResult[6] === tmp4.image) {
            if (cResult[7] === tmp4.imageContainer) {
              if (cResult[8] === tmp4.title) {
                if (cResult[9] === tmp4.titleText) {
                  tmp12 = cResult[10];
                  tmp13 = cResult[11];
                  tmp14 = cResult[12];
                  tmp15 = cResult[13];
                  tmp16 = cResult[14];
                  tmp17 = cResult[15];
                  tmp18 = cResult[16];
                  str = cResult[17];
                  tmp19 = cResult[18];
                  tmp20 = cResult[19];
                  tmp21 = cResult[20];
                  tmp22 = cResult[21];
                  tmp23 = cResult[22];
                  tmp24 = cResult[23];
                  tmp25 = cResult[24];
                  tmp26 = cResult[25];
                  tmp27 = cResult[26];
                }
                if (cResult[33] === tmp12) {
                  if (cResult[34] === str) {
                    if (cResult[35] === tmp19) {
                      let tmp49;
                      if (cResult[36] === tmp20) {
                        tmp49 = cResult[37];
                      }
                      if (cResult[38] === tmp13) {
                        if (cResult[39] === tmp49) {
                          if (cResult[40] === tmp21) {
                            let tmp52;
                            let tmp56;
                            if (cResult[41] === tmp22) {
                              tmp52 = cResult[42];
                            }
                            const _HermesInternal = HermesInternal;
                            const combined = "" + tmp17 + " " + tmp26;
                            if (cResult[43] !== tmp17) {
                              const obj2 = { end: tmp17 };
                              const tmp59 = metroRequire(NumberAnimationDefault, obj2);
                              cResult[43] = tmp17;
                              cResult[44] = tmp59;
                              tmp56 = tmp59;
                            } else {
                              tmp56 = cResult[44];
                            }
                            if (cResult[45] === tmp4.number) {
                              if (cResult[46] === combined) {
                                let tmp60;
                                let formatResult;
                                if (cResult[47] === tmp56) {
                                  tmp60 = cResult[48];
                                }
                                if (cResult[49] === tmp17) {
                                  let tmp64;
                                  if (cResult[50] === tmp27) {
                                    tmp64 = cResult[51];
                                  }
                                  if (cResult[52] === tmp18) {
                                    let tmp68;
                                    if (cResult[53] === tmp64) {
                                      tmp68 = cResult[54];
                                    }
                                    if (cResult[55] === tmp14) {
                                      if (cResult[56] === tmp52) {
                                        if (cResult[57] === tmp60) {
                                          if (cResult[58] === tmp68) {
                                            let tmp72;
                                            if (cResult[59] === tmp23) {
                                              tmp72 = cResult[60];
                                            }
                                            if (cResult[61] === tmp15) {
                                              if (cResult[62] === tmp72) {
                                                if (cResult[63] === tmp24) {
                                                  let tmp75;
                                                  if (cResult[64] === tmp25) {
                                                    tmp75 = cResult[65];
                                                  }
                                                  if (cResult[66] === tmp16) {
                                                    let tmp78;
                                                    if (cResult[67] === tmp75) {
                                                      tmp78 = cResult[68];
                                                    }
                                                    return tmp78;
                                                  }
                                                  const obj3 = { children: tmp75 };
                                                  const tmp80 = metroRequire(tmp16, obj3);
                                                  cResult[66] = tmp16;
                                                  cResult[67] = tmp75;
                                                  cResult[68] = tmp80;
                                                  tmp78 = tmp80;
                                                }
                                              }
                                            }
                                            const obj4 = { style: tmp24, children: items1 };
                                            items1 = [tmp25, tmp72];
                                            const tmp77 = metroImportDefault(tmp15, obj4);
                                            cResult[61] = tmp15;
                                            cResult[62] = tmp72;
                                            cResult[63] = tmp24;
                                            cResult[64] = tmp25;
                                            cResult[65] = tmp77;
                                            tmp75 = tmp77;
                                          }
                                        }
                                      }
                                    }
                                    const obj5 = { style: tmp23, children: items2 };
                                    items2 = [tmp52, tmp60, tmp68];
                                    const tmp74 = metroImportDefault(tmp14, obj5);
                                    cResult[55] = tmp14;
                                    cResult[56] = tmp52;
                                    cResult[57] = tmp60;
                                    cResult[58] = tmp68;
                                    cResult[59] = tmp23;
                                    cResult[60] = tmp74;
                                    tmp72 = tmp74;
                                  }
                                  const obj6 = { variant: "heading-lg/medium", accessibilityLabel: tmp18, children: tmp64 };
                                  const tmp71 = metroRequire(CheckpointTextDefault, obj6);
                                  cResult[52] = tmp18;
                                  cResult[53] = tmp64;
                                  cResult[54] = tmp71;
                                  tmp68 = tmp71;
                                }
                                if (null != tmp27) {
                                  const intl4 = tmp(1128).intl;
                                  const obj7 = {
                                    numMessages: tmp17,
                                    percent: tmp27,
                                    percentHook(children, arg1) {
                                                                      const obj = { children };
                                                                      return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                                                                    }
                                  };
                                  formatResult = intl4.format(_modDef3141.TOMBAW, obj7);
                                } else {
                                  const intl3 = tmp(1128).intl;
                                  const obj8 = { numMessages: tmp17 };
                                  formatResult = intl3.format(_modDef3141.cYCqz8, obj8);
                                }
                                cResult[49] = tmp17;
                                cResult[50] = tmp27;
                                cResult[51] = formatResult;
                                tmp64 = formatResult;
                              }
                            }
                            const obj9 = { accessible: true, accessibilityLabel: combined, style: tmp4.number, children: tmp56 };
                            const tmp63 = metroRequire(View, obj9);
                            cResult[45] = tmp4.number;
                            cResult[46] = combined;
                            cResult[47] = tmp56;
                            cResult[48] = tmp63;
                            tmp60 = tmp63;
                          }
                        }
                      }
                      const obj10 = { style: tmp21, children: items3 };
                      items3 = [tmp22, tmp49];
                      const tmp54 = metroImportDefault(tmp13, obj10);
                      cResult[38] = tmp13;
                      cResult[39] = tmp49;
                      cResult[40] = tmp21;
                      cResult[41] = tmp22;
                      cResult[42] = tmp54;
                      tmp52 = tmp54;
                    }
                  }
                }
                const obj11 = { variant: str, style: tmp19, children: tmp20 };
                const tmp51 = metroRequire(tmp12, obj11);
                cResult[33] = tmp12;
                cResult[34] = str;
                cResult[35] = tmp19;
                cResult[36] = tmp20;
                cResult[37] = tmp51;
                tmp49 = tmp51;
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
    num3 = stateFromStores.numMessagesSent;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const roundResult = round(num3);
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.numMessagesSentPercentile;
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
  const intl = tmp(1128).intl;
  const stringResult = intl.string(_modDef3109.wWKySP);
  if (null != bound) {
    const intl2 = tmp(1128).intl;
    const obj12 = {
      numMessages: roundResult,
      percent: bound,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3141.TOMBAW, obj12);
  }
  const tmp31Result = CheckpointScreenDefault;
  const container = tmp4.container;
  if (cResult[27] !== tmp4.image) {
    const obj13 = { uri: _modDef12773, style: tmp4.image };
    const tmp31Result3 = CheckpointApngPlayerDefault;
    const tmp38 = metroRequire(tmp31Result3, obj13);
    cResult[27] = tmp4.image;
    cResult[28] = tmp38;
    tmp35 = tmp38;
  } else {
    tmp35 = cResult[28];
  }
  if (cResult[29] === tmp4.imageContainer) {
    let tmp39;
    let tmp41;
    if (cResult[30] === tmp35) {
      tmp39 = cResult[31];
    }
    ({ copy, title } = tmp4);
    const _Symbol = Symbol;
    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
      const obj14 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp44 = metroRequire(ChatIcon.ChatIcon, obj14);
      cResult[32] = tmp44;
      tmp41 = tmp44;
    } else {
      tmp41 = cResult[32];
    }
    const tmp31Result4 = CheckpointTextDefault;
    const titleText = tmp4.titleText;
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    let numMessagesSent1;
    if (stateFromStores != null) {
      numMessagesSent1 = stateFromStores.numMessagesSent;
    }
    cResult[2] = numMessagesSent1;
    let prop2;
    if (stateFromStores != null) {
      prop2 = stateFromStores.numMessagesSentPercentile;
    }
    cResult[3] = prop2;
    cResult[4] = tmp4.container;
    cResult[5] = tmp4.copy;
    cResult[6] = tmp4.image;
    cResult[7] = tmp4.imageContainer;
    cResult[8] = tmp4.title;
    cResult[9] = tmp4.titleText;
    cResult[10] = tmp31Result4;
    cResult[11] = View;
    cResult[12] = View;
    cResult[13] = View;
    cResult[14] = tmp31Result;
    cResult[15] = roundResult;
    cResult[16] = formatToPlainStringResult;
    cResult[17] = "heading-md/extrabold";
    cResult[18] = titleText;
    cResult[19] = toLocaleUpperCaseResult;
    cResult[20] = title;
    cResult[21] = tmp41;
    cResult[22] = copy;
    cResult[23] = container;
    cResult[24] = tmp39;
    cResult[25] = stringResult;
    cResult[26] = bound;
    tmp27 = bound;
    tmp26 = stringResult;
    tmp25 = tmp39;
    tmp24 = container;
    tmp23 = copy;
    tmp22 = tmp41;
    tmp21 = title;
    tmp20 = toLocaleUpperCaseResult;
    tmp19 = titleText;
    str = "heading-md/extrabold";
    tmp18 = formatToPlainStringResult;
    tmp17 = roundResult;
    tmp16 = tmp31Result;
    tmp15 = tmp34;
    tmp14 = tmp34;
    tmp13 = tmp34;
    tmp12 = tmp31Result4;
  }
  const obj15 = { style: tmp4.imageContainer, children: tmp35 };
  const tmp40 = metroRequire(View, obj15);
  cResult[29] = tmp4.imageContainer;
  cResult[30] = tmp35;
  cResult[31] = tmp40;
  tmp39 = tmp40;
}) : (function CheckpointMessagesStatsScreen() {
  let formatResult;
  let items1;
  let items2;
  let items3;
  let obj5;
  let tmp8Result4;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    stats = stats.stats;
    let messages;
    if (stats != null) {
      messages = stats.messages;
    }
    return messages;
  });
  let num;
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.numMessagesSent;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.numMessagesSentPercentile;
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
  const intl = tmp2(1128).intl;
  const stringResult = intl.string(_modDef3109.wWKySP);
  let formatToPlainStringResult;
  if (null != bound) {
    const intl2 = tmp2(1128).intl;
    const obj2 = {
      numMessages: roundResult,
      percent: bound,
      percentHook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl2.formatToPlainString(tmp8(3141).TOMBAW, obj2);
  }
  const obj3 = { style: tmp.container, children: items1 };
  const obj4 = { style: tmp.imageContainer, children: metroRequire(tmp8Result4, obj5) };
  obj5 = { uri: _modDef12773, style: tmp.image };
  const tmp8Result = CheckpointScreenDefault;
  tmp8Result4 = CheckpointApngPlayerDefault;
  items1 = [metroRequire(View, obj4), ];
  const obj7 = { style: tmp.title, children: items2 };
  items2 = [, ];
  const obj6 = { style: tmp.copy, children: items3 };
  const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items2[0] = metroRequire(ChatIcon.ChatIcon, obj8);
  const obj9 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp8Result5 = CheckpointTextDefault;
  items2[1] = metroRequire(tmp8Result5, obj9);
  items3 = [metroImportDefault(View, obj7), , ];
  const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(NumberAnimationDefault, { end: roundResult }) };
  items3[1] = metroRequire(View, obj10);
  const obj11 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp8Result6 = CheckpointTextDefault;
  if (null != bound) {
    const intl4 = tmp2(1128).intl;
    const obj12 = {
      numMessages: roundResult,
      percent: bound,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp8(3141).TOMBAW, obj12);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj13 = { numMessages: roundResult };
    formatResult = intl3.format(tmp8(3141).cYCqz8, obj13);
  }
  const obj14 = { children: metroImportDefault(View, obj3) };
  items3[2] = metroRequire(tmp8Result6, obj11);
  items1[1] = metroImportDefault(View, obj6);
  return metroRequire(tmp8Result, obj14);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default tmp4;
