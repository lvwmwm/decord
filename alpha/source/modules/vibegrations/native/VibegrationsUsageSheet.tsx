// Module ID: 16728
// Function ID: 16729
// Name: VibegrationsUsageSheet
// Dependencies: [19, 17, 12905, 21, 4890, 587, 558, 576, 4886, 6747, 504, 6701, 6644, 1126, 3723, 5593, 2]

// Module 16728 (VibegrationsUsageSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Text_Text from "Text/Text" /* 4886 */;
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import react from "react" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let projectId;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { row: obj2, label: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      const tmpResult = VibegrationsTypes;
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
}) : ((arg0) => {
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
  const obj4 = VibegrationsTypes;
  runeCountResult = obj4.runeCount(usage);
  items[1] = hasOwnProperty(Text, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let first;
  let intl;
  let intl7;
  let items2;
  let items3;
  let items4;
  let runesFromUsdResult;
  let tmp7;
  let tmp8;
  const obj = projectId(576);
  const cResult = obj.c(79);
  projectId = projectId.projectId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function b() {
      return VibegrationsChatStore.getProjectUsage(projectId);
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
    let tmp34;
    let tmp37;
    let tmp39;
    let tmp43;
    let tmp45;
    let tmp49;
    let tmp51;
    let tmp53;
    let tmp57;
    let tmp59;
    let tmp61;
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
                if (cResult[10] === stateFromStores.orchestrator) {
                  tmp10 = cResult[11];
                  tmp11 = cResult[12];
                  tmp12 = cResult[13];
                  tmp13 = cResult[14];
                  tmp14 = cResult[15];
                  tmp15 = cResult[16];
                  tmp16 = cResult[17];
                  tmp17 = cResult[18];
                  tmp18 = cResult[19];
                  tmp19 = cResult[20];
                  str = cResult[21];
                  str2 = cResult[22];
                  tmp20 = cResult[23];
                  tmp21 = cResult[24];
                  str3 = cResult[25];
                }
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp19 + "%";
                if (cResult[55] === tmp10) {
                  if (cResult[56] === combined) {
                    if (cResult[57] === str) {
                      let tmp76;
                      if (cResult[58] === str2) {
                        tmp76 = cResult[59];
                      }
                      if (cResult[60] === tmp11) {
                        if (cResult[61] === tmp76) {
                          if (cResult[62] === tmp20) {
                            let tmp79;
                            if (cResult[63] === tmp21) {
                              tmp79 = cResult[64];
                            }
                            if (cResult[65] === tmp12) {
                              if (cResult[66] === tmp15) {
                                if (cResult[67] === tmp16) {
                                  if (cResult[68] === tmp17) {
                                    if (cResult[69] === tmp79) {
                                      let tmp82;
                                      if (cResult[70] === str3) {
                                        tmp82 = cResult[71];
                                      }
                                      if (cResult[72] === tmp13) {
                                        let tmp85;
                                        if (cResult[73] === tmp82) {
                                          tmp85 = cResult[74];
                                        }
                                        if (cResult[75] === tmp14) {
                                          if (cResult[76] === tmp18) {
                                            let tmp88;
                                            if (cResult[77] === tmp85) {
                                              tmp88 = cResult[78];
                                            }
                                            return tmp88;
                                          }
                                        }
                                        const obj2 = { header: tmp18, children: tmp85 };
                                        const tmp90 = closure_5(tmp14, obj2);
                                        cResult[75] = tmp14;
                                        cResult[76] = tmp18;
                                        cResult[77] = tmp85;
                                        cResult[78] = tmp90;
                                        tmp88 = tmp90;
                                      }
                                      const obj3 = { children: tmp82 };
                                      const tmp87 = closure_5(tmp13, obj3);
                                      cResult[72] = tmp13;
                                      cResult[73] = tmp82;
                                      cResult[74] = tmp87;
                                      tmp85 = tmp87;
                                    }
                                  }
                                }
                              }
                            }
                            const obj4 = { direction: str3, spacing: tmp15, children: items2 };
                            items2 = [tmp16, tmp17, tmp79];
                            const tmp84 = closure_6(tmp12, obj4);
                            cResult[65] = tmp12;
                            cResult[66] = tmp15;
                            cResult[67] = tmp16;
                            cResult[68] = tmp17;
                            cResult[69] = tmp79;
                            cResult[70] = str3;
                            cResult[71] = tmp84;
                            tmp82 = tmp84;
                          }
                        }
                      }
                      const obj5 = { style: tmp20, children: items3 };
                      items3 = [tmp21, tmp76];
                      const tmp81 = closure_6(tmp11, obj5);
                      cResult[60] = tmp11;
                      cResult[61] = tmp76;
                      cResult[62] = tmp20;
                      cResult[63] = tmp21;
                      cResult[64] = tmp81;
                      tmp79 = tmp81;
                    }
                  }
                }
                const obj6 = { variant: str, color: str2, children: combined };
                const tmp78 = closure_5(tmp10, obj6);
                cResult[55] = tmp10;
                cResult[56] = combined;
                cResult[57] = str;
                cResult[58] = str2;
                cResult[59] = tmp78;
                tmp76 = tmp78;
              }
            }
          }
        }
      }
    }
    const sumTokenUsage = projectId(6747).sumTokenUsage;
    projectId(6747);
    const tmpResult9 = projectId(6747);
    const sumTokenUsageResult = tmpResult9.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmpResult10 = projectId(6747);
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmpResult10.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp(6701).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { title: intl.string(_modDef3723["9yoLWZ"]) };
      const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
      intl = tmp(1126).intl;
      const tmp28 = closure_5(BottomSheetTitleHeader, obj7);
      cResult[26] = tmp28;
      tmp25 = tmp28;
    } else {
      tmp25 = cResult[26];
    }
    const Stack = tmp(5593).Stack;
    const PX_12 = nativeDefault.space.PX_12;
    if (cResult[27] !== stateFromStores.cost_usd) {
      const intl2 = tmp(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj8 = { runes: runesFromUsdResult.toLocaleString() };
      const v4PFO2p = tmp30(3723)["4PFO2p"];
      const tmpResult11 = projectId(6747);
      runesFromUsdResult = tmpResult11.runesFromUsd(stateFromStores.cost_usd);
      const formatToPlainStringResult = formatToPlainString(v4PFO2p, obj8);
      cResult[27] = stateFromStores.cost_usd;
      cResult[28] = formatToPlainStringResult;
      tmp31 = formatToPlainStringResult;
    } else {
      tmp31 = cResult[28];
    }
    if (cResult[29] !== tmp31) {
      const obj9 = { variant: "text-md/semibold", color: "text-default", children: tmp31 };
      const tmp36 = closure_5(projectId(4886).Text, obj9);
      cResult[29] = tmp31;
      cResult[30] = tmp36;
      tmp34 = tmp36;
    } else {
      tmp34 = cResult[30];
    }
    const _Symbol2 = Symbol;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(_modDef3723.hk4jJr);
      cResult[31] = stringResult;
      tmp37 = stringResult;
    } else {
      tmp37 = cResult[31];
    }
    if (cResult[32] !== stateFromStores.orchestrator) {
      const obj10 = { label: tmp37, usage: stateFromStores.orchestrator };
      const tmp42 = closure_5(closure_8, obj10);
      cResult[32] = stateFromStores.orchestrator;
      cResult[33] = tmp42;
      tmp39 = tmp42;
    } else {
      tmp39 = cResult[33];
    }
    const _Symbol3 = Symbol;
    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult1 = intl4.string(_modDef3723.R9aduM);
      cResult[34] = stringResult1;
      tmp43 = stringResult1;
    } else {
      tmp43 = cResult[34];
    }
    if (cResult[35] !== stateFromStores.codegen) {
      const obj11 = { label: tmp43, usage: stateFromStores.codegen };
      const tmp48 = closure_5(closure_8, obj11);
      cResult[35] = stateFromStores.codegen;
      cResult[36] = tmp48;
      tmp45 = tmp48;
    } else {
      tmp45 = cResult[36];
    }
    const _Symbol4 = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1126).intl;
      const stringResult2 = intl5.string(_modDef3723.Tj6b30);
      cResult[37] = stringResult2;
      tmp49 = stringResult2;
    } else {
      tmp49 = cResult[37];
    }
    if (cResult[38] !== stateFromStores.compaction) {
      const tmpResult12 = projectId(6747);
      const usageOrEmptyResult = tmpResult12.usageOrEmpty(stateFromStores.compaction);
      cResult[38] = stateFromStores.compaction;
      cResult[39] = usageOrEmptyResult;
      tmp51 = usageOrEmptyResult;
    } else {
      tmp51 = cResult[39];
    }
    if (cResult[40] !== tmp51) {
      const obj12 = { label: tmp49, usage: tmp51 };
      const tmp56 = closure_5(closure_8, obj12);
      cResult[40] = tmp51;
      cResult[41] = tmp56;
      tmp53 = tmp56;
    } else {
      tmp53 = cResult[41];
    }
    const _Symbol5 = Symbol;
    if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = tmp(1126).intl;
      const stringResult3 = intl6.string(_modDef3723.vVUMwj);
      cResult[42] = stringResult3;
      tmp57 = stringResult3;
    } else {
      tmp57 = cResult[42];
    }
    if (cResult[43] !== stateFromStores.classifier) {
      const tmpResult13 = projectId(6747);
      const usageOrEmptyResult1 = tmpResult13.usageOrEmpty(stateFromStores.classifier);
      cResult[43] = stateFromStores.classifier;
      cResult[44] = usageOrEmptyResult1;
      tmp59 = usageOrEmptyResult1;
    } else {
      tmp59 = cResult[44];
    }
    if (cResult[45] !== tmp59) {
      const obj13 = { label: tmp57, usage: tmp59 };
      const tmp64 = closure_5(closure_8, obj13);
      cResult[45] = tmp59;
      cResult[46] = tmp64;
      tmp61 = tmp64;
    } else {
      tmp61 = cResult[46];
    }
    if (cResult[47] === tmp39) {
      if (cResult[48] === tmp45) {
        if (cResult[49] === tmp53) {
          let tmp65;
          let tmp68;
          let tmp71;
          if (cResult[50] === tmp61) {
            tmp65 = cResult[51];
          }
          const row = tmp4.row;
          const _Symbol6 = Symbol;
          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
            const obj14 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(_modDef3723["kILb+R"]) };
            const Text = tmp(4886).Text;
            intl7 = tmp(1126).intl;
            const tmp70 = closure_5(Text, obj14);
            cResult[52] = tmp70;
            tmp68 = tmp70;
          } else {
            tmp68 = cResult[52];
          }
          if (cResult[53] !== tmp4.label) {
            const obj15 = { style: tmp4.label, children: tmp68 };
            const tmp73 = closure_5(View, obj15);
            cResult[53] = tmp4.label;
            cResult[54] = tmp73;
            tmp71 = tmp73;
          } else {
            tmp71 = cResult[54];
          }
          const Text2 = tmp(4886).Text;
          const _Math = Math;
          const tmpResult14 = projectId(6747);
          const roundResult = round(100 * tmpResult14.cacheHitRate(sumTokenUsageResult1));
          cResult[4] = tmp4.label;
          cResult[5] = tmp4.row;
          cResult[6] = stateFromStores.classifier;
          cResult[7] = stateFromStores.codegen;
          cResult[8] = stateFromStores.compaction;
          cResult[9] = stateFromStores.cost_usd;
          cResult[10] = stateFromStores.orchestrator;
          cResult[11] = Text2;
          cResult[12] = View;
          cResult[13] = Stack;
          cResult[14] = View;
          cResult[15] = ActionSheet;
          cResult[16] = PX_12;
          cResult[17] = tmp34;
          cResult[18] = tmp65;
          cResult[19] = tmp25;
          cResult[20] = roundResult;
          cResult[21] = "text-sm/medium";
          cResult[22] = "text-default";
          cResult[23] = row;
          cResult[24] = tmp71;
          cResult[25] = "vertical";
          tmp21 = tmp71;
          str3 = "vertical";
          tmp20 = row;
          str2 = "text-default";
          str = "text-sm/medium";
          tmp19 = roundResult;
          tmp18 = tmp25;
          tmp17 = tmp65;
          tmp16 = tmp34;
          tmp15 = PX_12;
          tmp14 = ActionSheet;
          tmp13 = tmp29;
          tmp12 = Stack;
          tmp11 = tmp29;
          tmp10 = Text2;
        }
      }
    }
    const obj16 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items4 };
    const Stack2 = tmp(5593).Stack;
    items4 = [tmp39, tmp45, tmp53, tmp61];
    const tmp67 = closure_6(Stack2, obj16);
    cResult[47] = tmp39;
    cResult[48] = tmp45;
    cResult[49] = tmp53;
    cResult[50] = tmp61;
    cResult[51] = tmp67;
    tmp65 = tmp67;
  }
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let Stack;
  let Text2;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let items4;
  let obj15;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let round;
  let runesFromUsdResult;
  let tmp2Result10;
  let tmp2Result11;
  let tmp2Result12;
  let v4PFO2p;
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [VibegrationsChatStore];
  const items1 = [projectId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsChatStore.getProjectUsage(projectId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const sumTokenUsage = projectId(6747).sumTokenUsage;
    projectId(6747);
    const tmp2Result7 = projectId(6747);
    const sumTokenUsageResult = tmp2Result7.sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result8 = projectId(6747);
    const obj2 = { header: closure_5(BottomSheetTitleHeader, obj3), children: closure_5(View, obj4) };
    const sumTokenUsageResult1 = sumTokenUsage(sumTokenUsageResult, tmp2Result8.usageOrEmpty(stateFromStores.compaction));
    const ActionSheet = tmp2(6701).ActionSheet;
    obj3 = { title: intl.string(_modDef3723["9yoLWZ"]) };
    BottomSheetTitleHeader = tmp2(6644).BottomSheetTitleHeader;
    intl = tmp2(1126).intl;
    obj4 = { children: closure_6(Stack, obj5) };
    obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: items2 };
    Stack = tmp2(5593).Stack;
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: formatToPlainString(v4PFO2p, obj7) };
    const Text = tmp2(4886).Text;
    const intl2 = tmp2(1126).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { runes: runesFromUsdResult.toLocaleString() };
    v4PFO2p = _modDef3723["4PFO2p"];
    const tmp2Result9 = projectId(6747);
    runesFromUsdResult = tmp2Result9.runesFromUsd(stateFromStores.cost_usd);
    items2 = [closure_5(Text, obj6), , ];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items3 };
    const Stack2 = tmp2(5593).Stack;
    const obj9 = { label: intl3.string(_modDef3723.hk4jJr), usage: stateFromStores.orchestrator };
    intl3 = tmp2(1126).intl;
    items3 = [closure_5(closure_8, obj9), , , ];
    const obj10 = { label: intl4.string(_modDef3723.R9aduM), usage: stateFromStores.codegen };
    intl4 = tmp2(1126).intl;
    items3[1] = closure_5(closure_8, obj10);
    const obj11 = { label: intl5.string(_modDef3723.Tj6b30), usage: tmp2Result10.usageOrEmpty(stateFromStores.compaction) };
    intl5 = tmp2(1126).intl;
    tmp2Result10 = projectId(6747);
    items3[2] = closure_5(closure_8, obj11);
    const obj12 = { label: intl6.string(_modDef3723.vVUMwj), usage: tmp2Result11.usageOrEmpty(stateFromStores.classifier) };
    intl6 = tmp2(1126).intl;
    tmp2Result11 = projectId(6747);
    items3[3] = closure_5(closure_8, obj12);
    items2[1] = closure_6(Stack2, obj8);
    const obj13 = { style: tmp.row, children: items4 };
    const obj14 = { style: tmp.label, children: closure_5(Text2, obj15) };
    obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(_modDef3723["kILb+R"]) };
    Text2 = tmp2(4886).Text;
    intl7 = tmp2(1126).intl;
    items4 = [closure_5(View, obj14), ];
    const _Math = Math;
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: "" + round(100 * tmp2Result12.cacheHitRate(sumTokenUsageResult1)) + "%" };
    const Text3 = tmp2(4886).Text;
    round = Math.round;
    const _HermesInternal = HermesInternal;
    tmp2Result12 = projectId(6747);
    items4[1] = closure_5(Text3, obj16);
    items2[2] = closure_6(View, obj13);
    return closure_5(ActionSheet, obj2);
  }
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsUsageSheet.tsx");

export default tmp4;
export const VIBEGRATIONS_USAGE_SHEET_KEY = "VibegrationsUsageSheet";
