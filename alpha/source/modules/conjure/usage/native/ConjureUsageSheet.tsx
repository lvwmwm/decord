// Module ID: 12602
// Function ID: 12603
// Name: ConjureUsageSheet
// Dependencies: [19, 17, 10808, 21, 5005, 587, 558, 576, 5271, 10816, 504, 7358, 7308, 1125, 3864, 6015, 2]

// Module 12602 (ConjureUsageSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10816 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { row: obj2, label: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleRow(arg0) {
  let items;
  let label;
  let tmp5;
  let usage;
  const obj = react2;
  const cResult = obj.c(13);
  ({ label, usage } = arg0);
  const tmp4 = closure_7();
  const row = tmp4.row;
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: label };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.label) {
    let tmp8;
    let tmp10;
    let tmp12;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== usage) {
      const tmpResult = ConjureUsageTypes;
      const runeCountResult = tmpResult.runeCount(usage);
      const toLocaleStringResult = runeCountResult.toLocaleString();
      cResult[5] = usage;
      cResult[6] = toLocaleStringResult;
      tmp10 = toLocaleStringResult;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== tmp10) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp10 };
      const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4.row) {
      if (cResult[10] === tmp8) {
        let tmp15;
        if (cResult[11] === tmp12) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
    const obj4 = { style: row, children: items };
    items = [tmp8, tmp12];
    const tmp18 = metroRequire(View, obj4);
    cResult[9] = tmp4.row;
    cResult[10] = tmp8;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const obj5 = { style: tmp4.label, children: tmp5 };
  const tmp9 = hasOwnProperty(View, obj5);
  cResult[2] = tmp4.label;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function RoleRow(arg0) {
  let items;
  let label;
  let runeCountResult;
  let usage;
  ({ label, usage } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: items };
  items = [, ];
  const obj2 = { style: tmp.label, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: runeCountResult.toLocaleString() };
  const Text = Text_Text.Text;
  const obj4 = ConjureUsageTypes;
  runeCountResult = obj4.runeCount(usage);
  items[1] = hasOwnProperty(Text, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUsageSheet(projectId) {
  let first;
  let intl;
  let intl8;
  let items2;
  let items3;
  let items4;
  let runesFromUsdResult;
  let tmp7;
  let tmp8;
  const obj = projectId(576);
  const cResult = obj.c(86);
  projectId = projectId.projectId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function x() {
      return ConjureChatStore.getProjectUsage(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp25;
    let tmp31;
    let tmp33;
    let tmp36;
    let tmp38;
    let tmp42;
    let tmp44;
    let tmp48;
    let tmp50;
    let tmp52;
    let tmp56;
    let tmp58;
    let tmp60;
    let tmp64;
    let tmp66;
    let tmp68;
    let tmp21;
    let str3;
    let tmp20;
    let str2;
    let str;
    let tmp19;
    let tmp18;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp14;
    let tmp13;
    let tmp12;
    let tmp11;
    let tmp10;
    if (cResult[4] === tmp4.label) {
      if (cResult[5] === tmp4.row) {
        if (cResult[6] === stateFromStores.classifier) {
          if (cResult[7] === stateFromStores.codegen) {
            if (cResult[8] === stateFromStores.compaction) {
              if (cResult[9] === stateFromStores.cost_usd) {
                if (cResult[10] === stateFromStores.image) {
                  if (cResult[11] === stateFromStores.orchestrator) {
                    tmp10 = cResult[12];
                    tmp11 = cResult[13];
                    tmp12 = cResult[14];
                    tmp13 = cResult[15];
                    tmp14 = cResult[16];
                    tmp15 = cResult[17];
                    tmp16 = cResult[18];
                    tmp17 = cResult[19];
                    tmp18 = cResult[20];
                    tmp19 = cResult[21];
                    str = cResult[22];
                    str2 = cResult[23];
                    tmp20 = cResult[24];
                    tmp21 = cResult[25];
                    str3 = cResult[26];
                  }
                  const _HermesInternal = HermesInternal;
                  const combined = "" + tmp19 + "%";
                  if (cResult[62] === tmp10) {
                    if (cResult[63] === combined) {
                      if (cResult[64] === str) {
                        let tmp83;
                        if (cResult[65] === str2) {
                          tmp83 = cResult[66];
                        }
                        if (cResult[67] === tmp11) {
                          if (cResult[68] === tmp83) {
                            if (cResult[69] === tmp20) {
                              let tmp86;
                              if (cResult[70] === tmp21) {
                                tmp86 = cResult[71];
                              }
                              if (cResult[72] === tmp12) {
                                if (cResult[73] === tmp15) {
                                  if (cResult[74] === tmp16) {
                                    if (cResult[75] === tmp17) {
                                      if (cResult[76] === tmp86) {
                                        let tmp89;
                                        if (cResult[77] === str3) {
                                          tmp89 = cResult[78];
                                        }
                                        if (cResult[79] === tmp13) {
                                          let tmp92;
                                          if (cResult[80] === tmp89) {
                                            tmp92 = cResult[81];
                                          }
                                          if (cResult[82] === tmp14) {
                                            if (cResult[83] === tmp18) {
                                              let tmp95;
                                              if (cResult[84] === tmp92) {
                                                tmp95 = cResult[85];
                                              }
                                              return tmp95;
                                            }
                                          }
                                          const obj2 = { header: tmp18, children: tmp92 };
                                          const tmp97 = closure_5(tmp14, obj2);
                                          cResult[82] = tmp14;
                                          cResult[83] = tmp18;
                                          cResult[84] = tmp92;
                                          cResult[85] = tmp97;
                                          tmp95 = tmp97;
                                        }
                                        const obj3 = { children: tmp89 };
                                        const tmp94 = closure_5(tmp13, obj3);
                                        cResult[79] = tmp13;
                                        cResult[80] = tmp89;
                                        cResult[81] = tmp94;
                                        tmp92 = tmp94;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj4 = { direction: str3, spacing: tmp15, children: items2 };
                              items2 = [tmp16, tmp17, tmp86];
                              const tmp91 = closure_6(tmp12, obj4);
                              cResult[72] = tmp12;
                              cResult[73] = tmp15;
                              cResult[74] = tmp16;
                              cResult[75] = tmp17;
                              cResult[76] = tmp86;
                              cResult[77] = str3;
                              cResult[78] = tmp91;
                              tmp89 = tmp91;
                            }
                          }
                        }
                        const obj5 = { style: tmp20, children: items3 };
                        items3 = [tmp21, tmp83];
                        const tmp88 = closure_6(tmp11, obj5);
                        cResult[67] = tmp11;
                        cResult[68] = tmp83;
                        cResult[69] = tmp20;
                        cResult[70] = tmp21;
                        cResult[71] = tmp88;
                        tmp86 = tmp88;
                      }
                    }
                  }
                  const obj6 = { variant: str, color: str2, children: combined };
                  const tmp85 = closure_5(tmp10, obj6);
                  cResult[62] = tmp10;
                  cResult[63] = combined;
                  cResult[64] = str;
                  cResult[65] = str2;
                  cResult[66] = tmp85;
                  tmp83 = tmp85;
                }
              }
            }
          }
        }
      }
    }
    const sumTokenUsage = projectId(10816).sumTokenUsage;
    projectId(10816);
    const tmpResult10 = projectId(10816);
    const sumTokenUsageResult = tmpResult10.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmpResult11 = projectId(10816);
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmpResult11.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp(7358).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { title: intl.string(_modDef3864.p5EGzq) };
      const BottomSheetTitleHeader = tmp(7308).BottomSheetTitleHeader;
      intl = tmp(1125).intl;
      const tmp28 = closure_5(BottomSheetTitleHeader, obj7);
      cResult[27] = tmp28;
      tmp25 = tmp28;
    } else {
      tmp25 = cResult[27];
    }
    const Stack = tmp(6015).Stack;
    const PX_12 = nativeDefault.space.PX_12;
    if (cResult[28] !== stateFromStores.cost_usd) {
      const intl2 = tmp(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj8 = { runes: runesFromUsdResult.toLocaleString() };
      const gMuw5d = tmp30(3864).gMuw5d;
      const tmpResult12 = projectId(10816);
      runesFromUsdResult = tmpResult12.runesFromUsd(stateFromStores.cost_usd);
      const formatToPlainStringResult = formatToPlainString(gMuw5d, obj8);
      cResult[28] = stateFromStores.cost_usd;
      cResult[29] = formatToPlainStringResult;
      tmp31 = formatToPlainStringResult;
    } else {
      tmp31 = cResult[29];
    }
    if (cResult[30] !== tmp31) {
      const obj9 = { variant: "text-md/semibold", color: "text-default", children: tmp31 };
      const tmp35 = closure_5(projectId(5271).Text, obj9);
      cResult[30] = tmp31;
      cResult[31] = tmp35;
      tmp33 = tmp35;
    } else {
      tmp33 = cResult[31];
    }
    const _Symbol2 = Symbol;
    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1125).intl;
      const stringResult = intl3.string(_modDef3864.xtxP0e);
      cResult[32] = stringResult;
      tmp36 = stringResult;
    } else {
      tmp36 = cResult[32];
    }
    if (cResult[33] !== stateFromStores.orchestrator) {
      const obj10 = { label: tmp36, usage: stateFromStores.orchestrator };
      const tmp41 = closure_5(closure_8, obj10);
      cResult[33] = stateFromStores.orchestrator;
      cResult[34] = tmp41;
      tmp38 = tmp41;
    } else {
      tmp38 = cResult[34];
    }
    const _Symbol3 = Symbol;
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1125).intl;
      const stringResult1 = intl4.string(_modDef3864["9Sj3SX"]);
      cResult[35] = stringResult1;
      tmp42 = stringResult1;
    } else {
      tmp42 = cResult[35];
    }
    if (cResult[36] !== stateFromStores.codegen) {
      const obj11 = { label: tmp42, usage: stateFromStores.codegen };
      const tmp47 = closure_5(closure_8, obj11);
      cResult[36] = stateFromStores.codegen;
      cResult[37] = tmp47;
      tmp44 = tmp47;
    } else {
      tmp44 = cResult[37];
    }
    const _Symbol4 = Symbol;
    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1125).intl;
      const stringResult2 = intl5.string(_modDef3864.ANCEo3);
      cResult[38] = stringResult2;
      tmp48 = stringResult2;
    } else {
      tmp48 = cResult[38];
    }
    if (cResult[39] !== stateFromStores.compaction) {
      const tmpResult13 = projectId(10816);
      const usageOrEmptyResult = tmpResult13.usageOrEmpty(stateFromStores.compaction);
      cResult[39] = stateFromStores.compaction;
      cResult[40] = usageOrEmptyResult;
      tmp50 = usageOrEmptyResult;
    } else {
      tmp50 = cResult[40];
    }
    if (cResult[41] !== tmp50) {
      const obj12 = { label: tmp48, usage: tmp50 };
      const tmp55 = closure_5(closure_8, obj12);
      cResult[41] = tmp50;
      cResult[42] = tmp55;
      tmp52 = tmp55;
    } else {
      tmp52 = cResult[42];
    }
    const _Symbol5 = Symbol;
    if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = tmp(1125).intl;
      const stringResult3 = intl6.string(_modDef3864.ugL6D4);
      cResult[43] = stringResult3;
      tmp56 = stringResult3;
    } else {
      tmp56 = cResult[43];
    }
    if (cResult[44] !== stateFromStores.classifier) {
      const tmpResult14 = projectId(10816);
      const usageOrEmptyResult1 = tmpResult14.usageOrEmpty(stateFromStores.classifier);
      cResult[44] = stateFromStores.classifier;
      cResult[45] = usageOrEmptyResult1;
      tmp58 = usageOrEmptyResult1;
    } else {
      tmp58 = cResult[45];
    }
    if (cResult[46] !== tmp58) {
      const obj13 = { label: tmp56, usage: tmp58 };
      const tmp63 = closure_5(closure_8, obj13);
      cResult[46] = tmp58;
      cResult[47] = tmp63;
      tmp60 = tmp63;
    } else {
      tmp60 = cResult[47];
    }
    const _Symbol6 = Symbol;
    if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1125).intl;
      const stringResult4 = intl7.string(_modDef3864.DHr5On);
      cResult[48] = stringResult4;
      tmp64 = stringResult4;
    } else {
      tmp64 = cResult[48];
    }
    if (cResult[49] !== stateFromStores.image) {
      const tmpResult15 = projectId(10816);
      const usageOrEmptyResult2 = tmpResult15.usageOrEmpty(stateFromStores.image);
      cResult[49] = stateFromStores.image;
      cResult[50] = usageOrEmptyResult2;
      tmp66 = usageOrEmptyResult2;
    } else {
      tmp66 = cResult[50];
    }
    if (cResult[51] !== tmp66) {
      const obj14 = { label: tmp64, usage: tmp66 };
      const tmp71 = closure_5(closure_8, obj14);
      cResult[51] = tmp66;
      cResult[52] = tmp71;
      tmp68 = tmp71;
    } else {
      tmp68 = cResult[52];
    }
    if (cResult[53] === tmp38) {
      if (cResult[54] === tmp44) {
        if (cResult[55] === tmp52) {
          if (cResult[56] === tmp60) {
            let tmp72;
            let tmp75;
            let tmp78;
            if (cResult[57] === tmp68) {
              tmp72 = cResult[58];
            }
            const row = tmp4.row;
            const _Symbol7 = Symbol;
            if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
              const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl8.string(_modDef3864["8OUg09"]) };
              const Text = tmp(5271).Text;
              intl8 = tmp(1125).intl;
              const tmp77 = closure_5(Text, obj15);
              cResult[59] = tmp77;
              tmp75 = tmp77;
            } else {
              tmp75 = cResult[59];
            }
            if (cResult[60] !== tmp4.label) {
              const obj16 = { style: tmp4.label, children: tmp75 };
              const tmp80 = closure_5(View, obj16);
              cResult[60] = tmp4.label;
              cResult[61] = tmp80;
              tmp78 = tmp80;
            } else {
              tmp78 = cResult[61];
            }
            const Text2 = tmp(5271).Text;
            const _Math = Math;
            const tmpResult16 = projectId(10816);
            const roundResult = round(100 * tmpResult16.cacheHitRate(sumTokenUsageResult1));
            cResult[4] = tmp4.label;
            cResult[5] = tmp4.row;
            cResult[6] = stateFromStores.classifier;
            cResult[7] = stateFromStores.codegen;
            cResult[8] = stateFromStores.compaction;
            cResult[9] = stateFromStores.cost_usd;
            cResult[10] = stateFromStores.image;
            cResult[11] = stateFromStores.orchestrator;
            cResult[12] = Text2;
            cResult[13] = View;
            cResult[14] = Stack;
            cResult[15] = View;
            cResult[16] = ActionSheet;
            cResult[17] = PX_12;
            cResult[18] = tmp33;
            cResult[19] = tmp72;
            cResult[20] = tmp25;
            cResult[21] = roundResult;
            cResult[22] = "text-sm/medium";
            cResult[23] = "text-default";
            cResult[24] = row;
            cResult[25] = tmp78;
            cResult[26] = "vertical";
            tmp21 = tmp78;
            str3 = "vertical";
            tmp20 = row;
            str2 = "text-default";
            str = "text-sm/medium";
            tmp19 = roundResult;
            tmp18 = tmp25;
            tmp17 = tmp72;
            tmp16 = tmp33;
            tmp15 = PX_12;
            tmp14 = ActionSheet;
            tmp13 = tmp29;
            tmp12 = Stack;
            tmp11 = tmp29;
            tmp10 = Text2;
          }
        }
      }
    }
    const obj17 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items4 };
    const Stack2 = tmp(6015).Stack;
    items4 = [tmp38, tmp44, tmp52, tmp60, tmp68];
    const tmp74 = closure_6(Stack2, obj17);
    cResult[53] = tmp38;
    cResult[54] = tmp44;
    cResult[55] = tmp52;
    cResult[56] = tmp60;
    cResult[57] = tmp68;
    cResult[58] = tmp74;
    tmp72 = tmp74;
  }
}) : (function ConjureUsageSheet(projectId) {
  let BottomSheetTitleHeader;
  let Stack;
  let Text2;
  let formatToPlainString;
  let gMuw5d;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let round;
  let runesFromUsdResult;
  let tmp2Result11;
  let tmp2Result12;
  let tmp2Result13;
  let tmp2Result14;
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureChatStore.getProjectUsage(projectId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const sumTokenUsage = projectId(10816).sumTokenUsage;
    projectId(10816);
    const tmp2Result8 = projectId(10816);
    const sumTokenUsageResult = tmp2Result8.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result9 = projectId(10816);
    const obj2 = { header: closure_5(BottomSheetTitleHeader, obj3), children: closure_5(View, obj4) };
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmp2Result9.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp2(7358).ActionSheet;
    obj3 = { title: intl.string(_modDef3864.p5EGzq) };
    BottomSheetTitleHeader = tmp2(7308).BottomSheetTitleHeader;
    intl = tmp2(1125).intl;
    obj4 = { children: closure_6(Stack, obj5) };
    obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: items2 };
    Stack = tmp2(6015).Stack;
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: formatToPlainString(gMuw5d, obj7) };
    const Text = tmp2(5271).Text;
    const intl2 = tmp2(1125).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { runes: runesFromUsdResult.toLocaleString() };
    gMuw5d = _modDef3864.gMuw5d;
    const tmp2Result10 = projectId(10816);
    runesFromUsdResult = tmp2Result10.runesFromUsd(stateFromStores.cost_usd);
    items2 = [closure_5(Text, obj6), , ];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items3 };
    const Stack2 = tmp2(6015).Stack;
    const obj9 = { label: intl3.string(_modDef3864.xtxP0e), usage: stateFromStores.orchestrator };
    intl3 = tmp2(1125).intl;
    items3 = [closure_5(closure_8, obj9), , , , ];
    const obj10 = { label: intl4.string(_modDef3864["9Sj3SX"]), usage: stateFromStores.codegen };
    intl4 = tmp2(1125).intl;
    items3[1] = closure_5(closure_8, obj10);
    const obj11 = { label: intl5.string(_modDef3864.ANCEo3), usage: tmp2Result11.usageOrEmpty(stateFromStores.compaction) };
    intl5 = tmp2(1125).intl;
    tmp2Result11 = projectId(10816);
    items3[2] = closure_5(closure_8, obj11);
    const obj12 = { label: intl6.string(_modDef3864.ugL6D4), usage: tmp2Result12.usageOrEmpty(stateFromStores.classifier) };
    intl6 = tmp2(1125).intl;
    tmp2Result12 = projectId(10816);
    items3[3] = closure_5(closure_8, obj12);
    const obj13 = { label: intl7.string(_modDef3864.DHr5On), usage: tmp2Result13.usageOrEmpty(stateFromStores.image) };
    intl7 = tmp2(1125).intl;
    tmp2Result13 = projectId(10816);
    items3[4] = closure_5(closure_8, obj13);
    items2[1] = closure_6(Stack2, obj8);
    const obj14 = { style: tmp.row, children: items4 };
    const obj15 = { style: tmp.label, children: closure_5(Text2, obj16) };
    obj16 = { variant: "text-sm/normal", color: "text-muted", children: intl8.string(_modDef3864["8OUg09"]) };
    Text2 = tmp2(5271).Text;
    intl8 = tmp2(1125).intl;
    items4 = [closure_5(View, obj15), ];
    const _Math = Math;
    const obj17 = { variant: "text-sm/medium", color: "text-default", children: "" + round(100 * tmp2Result14.cacheHitRate(sumTokenUsageResult1)) + "%" };
    const Text3 = tmp2(5271).Text;
    round = Math.round;
    const _HermesInternal = HermesInternal;
    tmp2Result14 = projectId(10816);
    items4[1] = closure_5(Text3, obj17);
    items2[2] = closure_6(View, obj14);
    return closure_5(ActionSheet, obj2);
  }
});
const result = size.fileFinishedImporting("modules/conjure/usage/native/ConjureUsageSheet.tsx");

export default tmp4;
export const CONJURE_USAGE_SHEET_KEY = "ConjureUsageSheet";
