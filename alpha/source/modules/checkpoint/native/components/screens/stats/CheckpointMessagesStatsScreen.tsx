// Module ID: 12944
// Function ID: 12945
// Name: CheckpointMessagesStatsScreen
// Dependencies: [17, 12912, 6013, 21, 4969, 587, 558, 576, 504, 12915, 1128, 3088, 3056, 12932, 12935, 12945, 12946, 8540, 12930, 12938, 12940, 12943, 2]

// Module 12944 (CheckpointMessagesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointConstants from "CheckpointConstants" /* 6013 */;
import ChatIcon from "ChatIcon" /* 8540 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 12915 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 12943 */;
import CheckpointStore from "CheckpointStore" /* 12912 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointMessagesStatsScreen() {
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let obj11;
  let str;
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
  let tmp33;
  let tmp37;
  let tmp5;
  let tmp6;
  let tmp9;
  let wWKySP;
  let obj = react;
  const cResult = obj.c(57);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function p() {
      const stats = CheckpointStore.stats;
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function b() {
      const globalStats = CheckpointStore.globalStats;
      let numWordsSent;
      if (globalStats != null) {
        const messages = globalStats.messages;
        if (messages != null) {
          numWordsSent = messages.numWordsSent;
        }
      }
      return numWordsSent;
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
  let numMessagesSent;
  const tmp13 = cResult[4];
  if (stateFromStores != null) {
    numMessagesSent = stateFromStores.numMessagesSent;
  }
  if (tmp13 === numMessagesSent) {
    let prop;
    const tmp73 = cResult[5];
    if (stateFromStores != null) {
      prop = stateFromStores.numMessagesSentPercentile;
    }
    if (tmp73 === prop) {
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
                          let tmp61;
                          if (cResult[41] === tmp23) {
                            tmp61 = cResult[42];
                          }
                          if (cResult[43] === tmp17) {
                            if (cResult[44] === tmp61) {
                              if (cResult[45] === tmp24) {
                                if (cResult[46] === tmp25) {
                                  let tmp64;
                                  if (cResult[47] === tmp26) {
                                    tmp64 = cResult[48];
                                  }
                                  if (cResult[49] === tmp18) {
                                    if (cResult[50] === tmp20) {
                                      if (cResult[51] === tmp21) {
                                        let tmp67;
                                        if (cResult[52] === tmp64) {
                                          tmp67 = cResult[53];
                                        }
                                        if (cResult[54] === tmp19) {
                                          let tmp70;
                                          if (cResult[55] === tmp67) {
                                            tmp70 = cResult[56];
                                          }
                                          return tmp70;
                                        }
                                        const obj2 = { children: tmp67 };
                                        const tmp72 = metroRequire(tmp19, obj2);
                                        cResult[54] = tmp19;
                                        cResult[55] = tmp67;
                                        cResult[56] = tmp72;
                                        tmp70 = tmp72;
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp20, children: items2 };
                                  items2 = [tmp21, tmp64];
                                  const tmp69 = metroImportDefault(tmp18, obj3);
                                  cResult[49] = tmp18;
                                  cResult[50] = tmp20;
                                  cResult[51] = tmp21;
                                  cResult[52] = tmp64;
                                  cResult[53] = tmp69;
                                  tmp67 = tmp69;
                                }
                              }
                            }
                          }
                          const obj4 = { style: tmp24, children: items3 };
                          items3 = [tmp25, tmp26, tmp61];
                          const tmp66 = metroImportDefault(tmp17, obj4);
                          cResult[43] = tmp17;
                          cResult[44] = tmp61;
                          cResult[45] = tmp24;
                          cResult[46] = tmp25;
                          cResult[47] = tmp26;
                          cResult[48] = tmp66;
                          tmp64 = tmp66;
                        }
                      }
                    }
                    const obj5 = { variant: str, accessibilityLabel: tmp22, children: tmp23 };
                    const tmp63 = metroRequire(tmp16, obj5);
                    cResult[38] = tmp16;
                    cResult[39] = str;
                    cResult[40] = tmp22;
                    cResult[41] = tmp23;
                    cResult[42] = tmp63;
                    tmp61 = tmp63;
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
    num5 = stateFromStores.numMessagesSent;
  }
  if (num5 == null) {
    num5 = 0;
  }
  const roundResult = round(num5);
  let prop1;
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop1 = stateFromStores.numMessagesSentPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop1);
  const intl = tmp(1128).intl;
  const string = intl.string;
  if (roundResult <= 0 && null != stateFromStores1) {
    wWKySP = tmp32(3088)["2BuyVC"];
    tmp33 = tmp32;
  } else {
    wWKySP = tmp32(3056).wWKySP;
    tmp33 = tmp32;
  }
  const stringResult = string(wWKySP);
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp(1128).intl;
      const obj6 = {
        numMessages: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp33(3088).TOMBAW, obj6);
    }
  }
  const tmp33Result = tmp33(12932);
  const container = tmp4.container;
  if (cResult[26] !== tmp4.image) {
    const obj7 = { animatedUri: tmp33(12945), staticUri: tmp33(12946), style: tmp4.image };
    const tmp33Result3 = tmp33(12935);
    const tmp40 = metroRequire(tmp33Result3, obj7);
    cResult[26] = tmp4.image;
    cResult[27] = tmp40;
    tmp37 = tmp40;
  } else {
    tmp37 = cResult[27];
  }
  if (cResult[28] === tmp4.imageContainer) {
    let tmp41;
    let tmp43;
    if (cResult[29] === tmp37) {
      tmp41 = cResult[30];
    }
    const copy = tmp4.copy;
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { size: "xs", color: CHECKPOINT_PRIMARY };
      const tmp46 = metroRequire(ChatIcon.ChatIcon, obj8);
      cResult[31] = tmp46;
      tmp43 = tmp46;
    } else {
      tmp43 = cResult[31];
    }
    const titleText = tmp4.titleText;
    const toLocaleUpperCaseResult = stringResult.toLocaleUpperCase();
    if (cResult[32] === tmp4.titleText) {
      let tmp48;
      if (cResult[33] === toLocaleUpperCaseResult) {
        tmp48 = cResult[34];
      }
      if (cResult[35] === tmp4.title) {
        let tmp51;
        let tmp54Result;
        let formatToPlainStringResult1;
        if (cResult[36] === tmp48) {
          tmp51 = cResult[37];
        }
        if (roundResult <= 0 && null != stateFromStores1) {
          const obj9 = { value: stateFromStores1 };
          tmp54Result = tmp54(tmp33(12938), obj9);
        } else {
          const _HermesInternal = HermesInternal;
          const obj10 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp4.number, children: metroRequire(tmp33(12940), obj11) };
          obj11 = { end: roundResult };
          tmp54Result = tmp54(tmp36, obj10);
        }
        const tmp33Result4 = tmp33(12930);
        if (roundResult <= 0 && null != stateFromStores1) {
          const intl5 = tmp(1128).intl;
          const formatToPlainString = intl5.formatToPlainString;
          const _Intl = Intl;
          const obj12 = { numWords: numberFormat.format(stateFromStores1) };
          const bAxEs2 = tmp33(3088).bAxEs2;
          const self = this;
          const self2 = this;
          numberFormat = new Intl.NumberFormat(tmp(1128).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
          formatToPlainStringResult1 = formatToPlainString(bAxEs2, obj12);
        } else if (null != checkpointTopPercent) {
          const intl4 = tmp(1128).intl;
          const obj13 = {
            numMessages: roundResult,
            percent: checkpointTopPercent,
            percentHook(children, arg1) {
                      const obj = { children };
                      return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
                    }
          };
          formatToPlainStringResult1 = intl4.format(tmp33(3088).TOMBAW, obj13);
        } else {
          const intl3 = tmp(1128).intl;
          const obj14 = { numMessages: roundResult };
          formatToPlainStringResult1 = intl3.format(tmp33(3088).cYCqz8, obj14);
        }
        let numMessagesSent1;
        if (stateFromStores != null) {
          numMessagesSent1 = stateFromStores.numMessagesSent;
        }
        cResult[4] = numMessagesSent1;
        let prop2;
        if (stateFromStores != null) {
          prop2 = stateFromStores.numMessagesSentPercentile;
        }
        cResult[5] = prop2;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp4.container;
        cResult[8] = tmp4.copy;
        cResult[9] = tmp4.image;
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp4.number;
        cResult[12] = tmp4.title;
        cResult[13] = tmp4.titleText;
        cResult[14] = tmp33Result4;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp33Result;
        cResult[18] = container;
        cResult[19] = tmp41;
        cResult[20] = "heading-lg/medium";
        cResult[21] = formatToPlainStringResult;
        cResult[22] = formatToPlainStringResult1;
        cResult[23] = copy;
        cResult[24] = tmp51;
        cResult[25] = tmp54Result;
        tmp26 = tmp54Result;
        tmp25 = tmp51;
        tmp24 = copy;
        tmp23 = formatToPlainStringResult1;
        tmp22 = formatToPlainStringResult;
        str = "heading-lg/medium";
        tmp21 = tmp41;
        tmp20 = container;
        tmp19 = tmp33Result;
        tmp18 = tmp36;
        tmp17 = tmp36;
        tmp16 = tmp33Result4;
      }
      const obj15 = { style: title, children: items4 };
      items4 = [tmp43, tmp48];
      const tmp53 = metroImportDefault(View, obj15);
      cResult[35] = tmp4.title;
      cResult[36] = tmp48;
      cResult[37] = tmp53;
      tmp51 = tmp53;
    }
    const obj16 = { variant: "heading-md/extrabold", style: titleText, children: toLocaleUpperCaseResult };
    const tmp50 = metroRequire(tmp33(12930), obj16);
    cResult[32] = tmp4.titleText;
    cResult[33] = toLocaleUpperCaseResult;
    cResult[34] = tmp50;
    tmp48 = tmp50;
  }
  const obj17 = { style: tmp4.imageContainer, children: tmp37 };
  const tmp42 = metroRequire(View, obj17);
  cResult[28] = tmp4.imageContainer;
  cResult[29] = tmp37;
  cResult[30] = tmp42;
  tmp41 = tmp42;
}) : (function CheckpointMessagesStatsScreen() {
  let formatToPlainStringResult1;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let obj13;
  let obj6;
  let tmp12;
  let tmp12Result4;
  let tmp14Result;
  let wWKySP;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let messages;
    if (stats != null) {
      messages = stats.messages;
    }
    return messages;
  });
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let numWordsSent;
    if (globalStats != null) {
      const messages = globalStats.messages;
      if (messages != null) {
        numWordsSent = messages.numWordsSent;
      }
    }
    return numWordsSent;
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
  const getCheckpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent;
  CheckpointStatsUtils;
  if (stateFromStores != null) {
    prop = stateFromStores.numMessagesSentPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  const intl = tmp2(1128).intl;
  const string = intl.string;
  if (roundResult <= 0 && null != stateFromStores1) {
    wWKySP = tmp11(3088)["2BuyVC"];
    tmp12 = tmp11;
  } else {
    wWKySP = tmp11(3056).wWKySP;
    tmp12 = tmp11;
  }
  const stringResult = string(wWKySP);
  let formatToPlainStringResult;
  if (!(roundResult <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = tmp2(1128).intl;
      const obj3 = {
        numMessages: roundResult,
        percent: checkpointTopPercent,
        percentHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl2.formatToPlainString(tmp12(3088).TOMBAW, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: items2 };
  const obj5 = { style: tmp.imageContainer, children: metroRequire(tmp12Result4, obj6) };
  obj6 = { animatedUri: tmp12(12945), staticUri: tmp12(12946), style: tmp.image };
  const tmp12Result = tmp12(12932);
  tmp12Result4 = tmp12(12935);
  items2 = [metroRequire(View, obj5), ];
  const obj8 = { style: tmp.title, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.copy, children: items4 };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items3[0] = metroRequire(ChatIcon.ChatIcon, obj9);
  const obj10 = { variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp12Result5 = tmp12(12930);
  items3[1] = metroRequire(tmp12Result5, obj10);
  items4 = [metroImportDefault(View, obj8), , ];
  if (roundResult <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    tmp14Result = tmp14(tmp12(12938), obj11);
  } else {
    const _HermesInternal = HermesInternal;
    const obj12 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult, style: tmp.number, children: metroRequire(tmp12(12940), obj13) };
    obj13 = { end: roundResult };
    tmp14Result = tmp14(tmp17, obj12);
  }
  items4[1] = tmp14Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatToPlainStringResult1 };
  const tmp12Result6 = tmp12(12930);
  if (roundResult <= 0 && null != stateFromStores1) {
    const intl5 = tmp2(1128).intl;
    const formatToPlainString = intl5.formatToPlainString;
    const _Intl = Intl;
    const obj15 = { numWords: numberFormat.format(stateFromStores1) };
    const bAxEs2 = tmp12(3088).bAxEs2;
    const self = this;
    const self2 = this;
    numberFormat = new Intl.NumberFormat(tmp2(1128).intl.currentLocale, { notation: "compact", compactDisplay: "long" });
    formatToPlainStringResult1 = formatToPlainString(bAxEs2, obj15);
  } else if (null != checkpointTopPercent) {
    const intl4 = tmp2(1128).intl;
    const obj16 = {
      numMessages: roundResult,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_6(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp12(3088).TOMBAW, obj16);
  } else {
    const intl3 = tmp2(1128).intl;
    const obj17 = { numMessages: roundResult };
    formatToPlainStringResult1 = intl3.format(tmp12(3088).cYCqz8, obj17);
  }
  const obj18 = { children: metroImportDefault(View, obj4) };
  items4[2] = metroRequire(tmp12Result6, obj14);
  items2[1] = metroImportDefault(View, obj7);
  return metroRequire(tmp12Result, obj18);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default tmp4;
