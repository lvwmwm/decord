// Module ID: 17066
// Function ID: 17067
// Name: ConjurePerfTraceModal
// Dependencies: [19, 17, 17048, 21, 5090, 587, 558, 576, 6892, 10508, 5086, 5003, 17067, 1630, 17069, 17068, 5375, 504, 6203, 5940, 11213, 2]

// Module 17066 (ConjurePerfTraceModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import Text_Text from "Text/Text" /* 5086 */;
import NavigatorHeader from "NavigatorHeader" /* 6203 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 6892 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17067 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import useConjurePerfTraceTreeDefault from "useConjurePerfTraceTree" /* 17069 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureDebugStore from "ConjureDebugStore" /* 17048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, label, name;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj21;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let react = react_mod;
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const perf_trace = "perf_trace";
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, toolbar: obj4, legend: obj5, legendItem: obj6, row: obj7, rowSelected: obj8, rowTop: obj9, chevron: obj10, operation: { flex: 1 }, badge: obj11, swatch: size, track: { height: 6 }, bar: rect, detail: obj12, detailLine: obj13, op: obj14, model: obj15, tool: obj16, setup: obj17, worktree: obj18, sandbox: obj19, build: obj20, platform: obj21, other: { backgroundColor: nativeDefault.colors.ICON_SUBTLE }, failed: { backgroundColor: nativeDefault.colors.STATUS_DANGER }, running: { backgroundColor: nativeDefault.colors.STATUS_WARNING }, smaller: { backgroundColor: nativeDefault.colors.ICON_MUTED }, smallerTrack: { height: 3 } };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_12, rowGap: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { paddingVertical: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj10 = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj11 = { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
rect = { position: "absolute", top: 0, bottom: 0, minWidth: 2, borderRadius: nativeDefault.radii.xs };
obj12 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj13 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj15 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_NOTIFICATION };
obj16 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj17 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_INFO };
obj18 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
obj19 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj20 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj21 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
({ backgroundColor: nativeDefault.colors.ICON_SUBTLE });
({ backgroundColor: nativeDefault.colors.STATUS_DANGER });
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
({ backgroundColor: nativeDefault.colors.ICON_MUTED });
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function WaterfallRow(node) {
  let ChevronSmallDownIcon;
  let Text;
  let collapsed;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj15;
  let obj19;
  let onSelect;
  let perfNodeDetailsResult;
  let selected;
  let str3;
  let tmp = node;
  let obj = node(onSelect[7]);
  const cResult = obj.c(78);
  node = node.node;
  ({ extent, collapsed, selected } = node);
  onSelect = node.onSelect;
  const onToggle = node.onToggle;
  const onExpandSubtree = node.onExpandSubtree;
  const tmp4 = closure_11();
  let closure_5 = tmp4;
  if (collapsed) {
    ChevronSmallDownIcon = tmp(tmp2[8]).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp(tmp2[9]).ChevronSmallDownIcon;
  }
  let str = "failed";
  if (!node.failed) {
    let str2 = "running";
    if (!node.running) {
      str2 = node.category;
    }
    str = str2;
  }
  if (cResult[0] === tmp4.row) {
    let tmp7;
    if (cResult[1] === (selected && tmp4.rowSelected)) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === node.key) {
      if (cResult[4] === onSelect) {
        let tmp8;
        if (cResult[5] === selected) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === node.key) {
          let tmp9;
          if (cResult[8] === onExpandSubtree) {
            tmp9 = cResult[9];
          }
          let tmp10;
          if (node.children.length > 0) {
            tmp10 = !collapsed;
          }
          if (cResult[10] === selected) {
            let tmp11;
            let tmp14;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            const result = node.depth * selected(tmp2[5]).space.PX_12;
            if (cResult[13] !== result) {
              let obj2 = { paddingLeft: result };
              cResult[13] = result;
              cResult[14] = obj2;
              tmp14 = obj2;
            } else {
              tmp14 = cResult[14];
            }
            if (cResult[15] === tmp4.rowTop) {
              let tmp15;
              let tmp17Result;
              if (cResult[16] === tmp14) {
                tmp15 = cResult[17];
              }
              if (cResult[18] === ChevronSmallDownIcon) {
                if (cResult[19] === collapsed) {
                  if (cResult[20] === node.children.length > 0) {
                    if (cResult[21] === node.key) {
                      if (cResult[22] === onToggle) {
                        let tmp16;
                        let tmp21;
                        if (cResult[23] === tmp4.chevron) {
                          tmp16 = cResult[24];
                        }
                        if (cResult[25] !== node.descendants) {
                          let tmp22 = null;
                          if (node.descendants > 0) {
                            const obj3 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
                            tmp22 = closure_8(tmp(tmp2[10]).Text, obj3);
                          }
                          cResult[25] = node.descendants;
                          cResult[26] = tmp22;
                          tmp21 = tmp22;
                        } else {
                          tmp21 = cResult[26];
                        }
                        if (cResult[27] === tmp4.swatch) {
                          let tmp25;
                          let tmp29;
                          if (cResult[28] === tmp4[node.category]) {
                            tmp25 = cResult[29];
                          }
                          if (cResult[30] !== node.service) {
                            const obj4 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
                            const tmp31 = closure_8(tmp(onSelect[10]).Text, obj4);
                            cResult[30] = node.service;
                            cResult[31] = tmp31;
                            tmp29 = tmp31;
                          } else {
                            tmp29 = cResult[31];
                          }
                          if (cResult[32] === node.operation) {
                            let tmp32;
                            if (cResult[33] === tmp4.operation) {
                              tmp32 = cResult[34];
                            }
                            if (cResult[35] === node.count) {
                              let tmp35;
                              let tmp40;
                              let tmp43;
                              let tmp45;
                              if (cResult[36] === tmp4.badge) {
                                tmp35 = cResult[37];
                              }
                              if (cResult[38] !== node.failed) {
                                let tmp41 = null;
                                if (node.failed) {
                                  const obj5 = { size: "xs", color: selected(onSelect[5]).colors.STATUS_DANGER };
                                  const WarningIcon = tmp(tmp2[11]).WarningIcon;
                                  tmp41 = closure_8(WarningIcon, obj5);
                                }
                                cResult[38] = node.failed;
                                cResult[39] = tmp41;
                                tmp40 = tmp41;
                              } else {
                                tmp40 = cResult[39];
                              }
                              if (cResult[40] !== node) {
                                const tmpResult = tmp(onSelect[12]);
                                const perfNodeDurationResult = tmpResult.perfNodeDuration(node);
                                cResult[40] = node;
                                cResult[41] = perfNodeDurationResult;
                                tmp43 = perfNodeDurationResult;
                              } else {
                                tmp43 = cResult[41];
                              }
                              if (cResult[42] !== tmp43) {
                                const obj6 = { variant: "text-xs/normal", color: "text-muted", children: tmp43 };
                                const tmp47 = closure_8(tmp(onSelect[10]).Text, obj6);
                                cResult[42] = tmp43;
                                cResult[43] = tmp47;
                                tmp45 = tmp47;
                              } else {
                                tmp45 = cResult[43];
                              }
                              if (cResult[44] === tmp16) {
                                if (cResult[45] === tmp21) {
                                  if (cResult[46] === tmp25) {
                                    if (cResult[47] === tmp29) {
                                      if (cResult[48] === tmp32) {
                                        if (cResult[49] === tmp35) {
                                          if (cResult[50] === tmp40) {
                                            if (cResult[51] === tmp45) {
                                              let tmp48;
                                              if (cResult[52] === tmp15) {
                                                tmp48 = cResult[53];
                                              }
                                              const text = `${node.start / extent * 100}%`;
                                              const text1 = `${(node.end - node.start) / extent * 100}%`;
                                              if (cResult[54] === `${node.start / extent * 100}%`) {
                                                let tmp55;
                                                if (cResult[55] === `${(node.end - node.start) / extent * 100}%`) {
                                                  tmp55 = cResult[56];
                                                }
                                                if (cResult[57] === tmp4.bar) {
                                                  if (cResult[58] === tmp4[str]) {
                                                    let tmp56;
                                                    if (cResult[59] === tmp55) {
                                                      tmp56 = cResult[60];
                                                    }
                                                    if (cResult[61] === tmp4.track) {
                                                      let tmp60;
                                                      if (cResult[62] === tmp56) {
                                                        tmp60 = cResult[63];
                                                      }
                                                      if (cResult[64] === node) {
                                                        if (cResult[65] === selected) {
                                                          if (cResult[66] === tmp4.detail) {
                                                            if (cResult[67] === tmp4.detailLine) {
                                                              let tmp64;
                                                              if (cResult[68] === tmp4.operation) {
                                                                tmp64 = cResult[69];
                                                              }
                                                              if (cResult[70] === tmp7) {
                                                                if (cResult[71] === tmp48) {
                                                                  if (cResult[72] === tmp60) {
                                                                    if (cResult[73] === tmp64) {
                                                                      if (cResult[74] === tmp8) {
                                                                        if (cResult[75] === tmp9) {
                                                                          let tmp68;
                                                                          if (cResult[76] === tmp11) {
                                                                            tmp68 = cResult[77];
                                                                          }
                                                                          return tmp68;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj7 = { style: tmp7, onPress: tmp8, onLongPress: tmp9, accessibilityRole: "button", accessibilityState: tmp11, children: items };
                                                              items = [tmp48, tmp60, tmp64];
                                                              const tmp71 = closure_9(onExpandSubtree, obj7);
                                                              cResult[70] = tmp7;
                                                              cResult[71] = tmp48;
                                                              cResult[72] = tmp60;
                                                              cResult[73] = tmp64;
                                                              cResult[74] = tmp8;
                                                              cResult[75] = tmp9;
                                                              cResult[76] = tmp11;
                                                              cResult[77] = tmp71;
                                                              tmp68 = tmp71;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let tmp65 = null;
                                                      if (selected) {
                                                        const obj8 = {
                                                          style: items1,
                                                          children: perfNodeDetailsResult.map((label) => {
                                                                                                                  let items;
                                                                                                                  label = label.label;
                                                                                                                  const value = label.value;
                                                                                                                  const obj = { style: closure_5.detailLine, children: items };
                                                                                                                  items = [metroImportAll(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: label }), ];
                                                                                                                  const obj2 = { variant: "text-xs/normal", color: "text-default", style: closure_5.operation, children: value };
                                                                                                                  items[1] = metroImportAll(Text_Text.Text, obj2);
                                                                                                                  return React4(metroRequire, obj, label);
                                                                                                                })
                                                        };
                                                        items1 = [tmp4.detail, ];
                                                        items1[1] = { paddingLeft: node.depth * selected(onSelect[5]).space.PX_12 };
                                                        const obj9 = { paddingLeft: node.depth * selected(onSelect[5]).space.PX_12 };
                                                        const tmpResult2 = tmp(onSelect[12]);
                                                        perfNodeDetailsResult = tmpResult2.perfNodeDetails(node);
                                                        tmp65 = closure_8(closure_6, obj8);
                                                      }
                                                      cResult[64] = node;
                                                      cResult[65] = selected;
                                                      cResult[66] = tmp4.detail;
                                                      cResult[67] = tmp4.detailLine;
                                                      cResult[68] = tmp4.operation;
                                                      cResult[69] = tmp65;
                                                      tmp64 = tmp65;
                                                    }
                                                    const obj10 = { style: tmp4.track, children: tmp56 };
                                                    const tmp63 = closure_8(closure_6, obj10);
                                                    cResult[61] = tmp4.track;
                                                    cResult[62] = tmp56;
                                                    cResult[63] = tmp63;
                                                    tmp60 = tmp63;
                                                  }
                                                }
                                                const obj11 = { style: items2 };
                                                items2 = [tmp4.bar, tmp4[str], tmp55];
                                                const tmp59 = closure_8(closure_6, obj11);
                                                cResult[57] = tmp4.bar;
                                                cResult[58] = tmp4[str];
                                                cResult[59] = tmp55;
                                                cResult[60] = tmp59;
                                                tmp56 = tmp59;
                                              }
                                              const obj12 = { left: text, width: text1 };
                                              cResult[54] = text;
                                              cResult[55] = text1;
                                              cResult[56] = obj12;
                                              tmp55 = obj12;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj13 = { style: tmp15, children: items3 };
                              items3 = [tmp16, tmp21, tmp25, tmp29, tmp32, tmp35, tmp40, tmp45];
                              const tmp51 = closure_9(closure_6, obj13);
                              cResult[44] = tmp16;
                              cResult[45] = tmp21;
                              cResult[46] = tmp25;
                              cResult[47] = tmp29;
                              cResult[48] = tmp32;
                              cResult[49] = tmp35;
                              cResult[50] = tmp40;
                              cResult[51] = tmp45;
                              cResult[52] = tmp15;
                              cResult[53] = tmp51;
                              tmp48 = tmp51;
                            }
                            let tmp36 = null;
                            if (node.count > 1) {
                              const obj14 = { style: tmp4.badge, children: closure_8(Text, obj15) };
                              const _HermesInternal = HermesInternal;
                              obj15 = { variant: "text-xxs/semibold", color: "text-default", children: "\u00D7" + node.count };
                              Text = tmp(tmp2[10]).Text;
                              tmp36 = closure_8(closure_6, obj14);
                            }
                            cResult[35] = node.count;
                            cResult[36] = tmp4.badge;
                            cResult[37] = tmp36;
                            tmp35 = tmp36;
                          }
                          const obj16 = { variant: "text-xs/normal", color: "text-default", style: tmp4.operation, lineClamp: 1, children: node.operation };
                          const tmp34 = closure_8(tmp(onSelect[10]).Text, obj16);
                          cResult[32] = node.operation;
                          cResult[33] = tmp4.operation;
                          cResult[34] = tmp34;
                          tmp32 = tmp34;
                        }
                        const obj17 = { style: items4 };
                        items4 = [tmp4.swatch, tmp4[node.category]];
                        const tmp28 = closure_8(closure_6, obj17);
                        cResult[27] = tmp4.swatch;
                        cResult[28] = tmp4[node.category];
                        cResult[29] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                  }
                }
              }
              if (node.children.length > 0) {
                const obj18 = {
                  style: tmp4.chevron,
                  onPress() {
                                  return onToggle(node.key);
                                },
                  accessibilityRole: "button",
                  accessibilityLabel: str3,
                  children: closure_8(ChevronSmallDownIcon, obj19)
                };
                str3 = "Collapse";
                const tmp20 = onExpandSubtree;
                if (collapsed) {
                  str3 = "Expand";
                }
                obj19 = { size: "xs", color: selected(onSelect[5]).colors.ICON_SUBTLE };
                tmp17Result = tmp17(tmp20, obj18);
              } else {
                const obj20 = { style: tmp4.chevron };
                tmp17Result = tmp17(closure_6, obj20);
              }
              cResult[18] = ChevronSmallDownIcon;
              cResult[19] = collapsed;
              cResult[20] = node.children.length > 0;
              cResult[21] = node.key;
              cResult[22] = onToggle;
              cResult[23] = tmp4.chevron;
              cResult[24] = tmp17Result;
              tmp16 = tmp17Result;
            }
            const items5 = [tmp4.rowTop, tmp14];
            cResult[15] = tmp4.rowTop;
            cResult[16] = tmp14;
            cResult[17] = items5;
            tmp15 = items5;
          }
          const obj21 = { selected, expanded: tmp10 };
          cResult[10] = selected;
          cResult[11] = tmp10;
          cResult[12] = obj21;
          tmp11 = obj21;
        }
        const fn2 = function s() {
          return onExpandSubtree(node.key);
        };
        cResult[7] = node.key;
        cResult[8] = onExpandSubtree;
        cResult[9] = fn2;
        tmp9 = fn2;
      }
    }
    const fn = function n() {
      let key = null;
      const tmp = onSelect;
      if (!selected) {
        key = node.key;
      }
      return tmp(key);
    };
    cResult[3] = node.key;
    cResult[4] = onSelect;
    cResult[5] = selected;
    cResult[6] = fn;
    tmp8 = fn;
  }
  const items6 = [tmp4.row, selected && tmp4.rowSelected];
  cResult[0] = tmp4.row;
  cResult[1] = selected && tmp4.rowSelected;
  cResult[2] = items6;
  tmp7 = items6;
}) : (function WaterfallRow(node) {
  let ChevronSmallDownIcon;
  let Text;
  let closure_4;
  let collapsed;
  let extent;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj13;
  let obj17;
  let obj2;
  let obj6;
  let perfNodeDetailsResult;
  let selected;
  let str3;
  let tmp10;
  let tmp13Result;
  let tmp15;
  let tmp5;
  let tmp5Result;
  node = node.node;
  ({ extent, collapsed, selected } = node);
  ({ onSelect: dependencyMap, onToggle: react, onExpandSubtree: closure_4 } = node);
  let tmp = closure_11();
  let closure_5 = tmp;
  if (collapsed) {
    ChevronSmallDownIcon = tmp3(6892).ChevronSmallRightIcon;
    tmp5 = tmp3;
  } else {
    ChevronSmallDownIcon = tmp3(10508).ChevronSmallDownIcon;
    tmp5 = tmp3;
  }
  let str = "failed";
  if (!node.failed) {
    let str2 = "running";
    if (!node.running) {
      str2 = node.category;
    }
    str = str2;
  }
  let items = [tmp.row, ];
  let obj = {
    style: items,
    onPress() {
      let key = null;
      const tmp = dependencyMap;
      if (!selected) {
        key = node.key;
      }
      return tmp(key);
    },
    onLongPress() {
      return closure_4(node.key);
    },
    accessibilityRole: "button",
    accessibilityState: obj2,
    children: items4
  };
  const tmp9 = selected && tmp.rowSelected;
  items[1] = tmp9;
  obj2 = { selected, expanded: tmp10 };
  tmp10 = undefined;
  if (node.children.length > 0) {
    tmp10 = !collapsed;
  }
  const obj3 = { style: items1, children: items2 };
  items1 = [tmp.rowTop, { paddingLeft: node.depth * selected(587).space.PX_12 }];
  ({ paddingLeft: node.depth * selected(587).space.PX_12 });
  if (node.children.length > 0) {
    const obj5 = {
      style: tmp.chevron,
      onPress() {
          return react(node.key);
        },
      accessibilityRole: "button",
      accessibilityLabel: str3,
      children: closure_8(ChevronSmallDownIcon, obj6)
    };
    str3 = "Collapse";
    if (collapsed) {
      str3 = "Expand";
    }
    obj6 = { size: "xs", color: selected(587).colors.ICON_SUBTLE };
    tmp13Result = tmp13(tmp8, obj5);
    tmp15 = tmp13;
  } else {
    const obj7 = { style: tmp.chevron };
    tmp13Result = tmp13(tmp11, obj7);
    tmp15 = tmp13;
  }
  items2 = [tmp13Result, , , , , , , ];
  let tmp15Result = null;
  if (node.descendants > 0) {
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
    tmp15Result = tmp15(tmp5(5086).Text, obj8);
  }
  items2[1] = tmp15Result;
  const obj9 = { style: items3 };
  items3 = [tmp.swatch, tmp[node.category]];
  items2[2] = tmp15(closure_6, obj9);
  const obj10 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
  items2[3] = tmp15(tmp5(5086).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-default", style: tmp.operation, lineClamp: 1, children: node.operation };
  items2[4] = tmp15(tmp5(5086).Text, obj11);
  let tmp15Result4 = null;
  if (node.count > 1) {
    const obj12 = { style: tmp.badge, children: tmp15(Text, obj13) };
    const _HermesInternal = HermesInternal;
    obj13 = { variant: "text-xxs/semibold", color: "text-default", children: "\u00D7" + node.count };
    Text = tmp5(5086).Text;
    tmp15Result4 = tmp15(tmp11, obj12);
  }
  items2[5] = tmp15Result4;
  let tmp15Result5 = null;
  if (node.failed) {
    const obj14 = { size: "xs", color: selected(587).colors.STATUS_DANGER };
    const WarningIcon = tmp5(5003).WarningIcon;
    tmp15Result5 = tmp15(WarningIcon, obj14);
  }
  items2[6] = tmp15Result5;
  const obj15 = { variant: "text-xs/normal", color: "text-muted", children: tmp5Result.perfNodeDuration(node) };
  const Text2 = tmp5(5086).Text;
  tmp5Result = tmp5(17067);
  items2[7] = tmp15(Text2, obj15);
  items4 = [closure_9(closure_6, obj3), , ];
  const obj16 = { style: tmp.track, children: tmp15(closure_6, obj17) };
  obj17 = { style: items5 };
  items5 = [tmp.bar, tmp[str], ];
  const obj18 = { left: `${node.start / extent * 100}%`, width: `${(node.end - node.start) / extent * 100}%` };
  items5[2] = obj18;
  items4[1] = tmp15(closure_6, obj16);
  let tmp15Result6 = null;
  if (selected) {
    const obj19 = {
      style: items6,
      children: perfNodeDetailsResult.map((label) => {
          let items;
          label = label.label;
          const value = label.value;
          const obj = { style: closure_5.detailLine, children: items };
          items = [metroImportAll(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: label }), ];
          const obj2 = { variant: "text-xs/normal", color: "text-default", style: closure_5.operation, children: value };
          items[1] = metroImportAll(Text_Text.Text, obj2);
          return React4(metroRequire, obj, label);
        })
    };
    items6 = [tmp.detail, ];
    items6[1] = { paddingLeft: node.depth * selected(587).space.PX_12 };
    const obj20 = { paddingLeft: node.depth * selected(587).space.PX_12 };
    const tmp5Result2 = tmp5(17067);
    perfNodeDetailsResult = tmp5Result2.perfNodeDetails(node);
    tmp15Result6 = tmp15(tmp11, obj19);
  }
  items4[2] = tmp15Result6;
  return closure_9(closure_4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SmallerRow(row) {
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let onReveal;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(45);
  row = row.row;
  ({ extent, onReveal } = row);
  const tmp4 = closure_11();
  if (cResult[0] !== row) {
    const tmpResult = ConjurePerfTraceFormat;
    const perfSmallerLabelResult = tmpResult.perfSmallerLabel(row);
    cResult[0] = row;
    cResult[1] = perfSmallerLabelResult;
    tmp5 = perfSmallerLabelResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === onReveal) {
    let tmp8;
    let tmp11;
    if (cResult[3] === row.parentKey) {
      tmp8 = cResult[4];
    }
    const result = row.depth * nativeDefault.space.PX_12;
    const tmp9 = importDefault;
    if (cResult[5] !== result) {
      const obj2 = { paddingLeft: result };
      cResult[5] = result;
      cResult[6] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.rowTop) {
      let tmp12;
      let tmp14;
      let tmp17;
      if (cResult[8] === tmp11) {
        tmp12 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "xs", color: tmp9(587).colors.ICON_SUBTLE };
        const ChevronSmallRightIcon = tmp(6892).ChevronSmallRightIcon;
        const tmp16 = metroImportAll(ChevronSmallRightIcon, obj3);
        cResult[10] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[10];
      }
      if (cResult[11] !== tmp4.chevron) {
        const obj4 = { style: tmp4.chevron, children: tmp14 };
        const tmp20 = metroImportAll(metroRequire, obj4);
        cResult[11] = tmp4.chevron;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[12];
      }
      if (cResult[13] === tmp4.smaller) {
        let tmp21;
        if (cResult[14] === tmp4.swatch) {
          tmp21 = cResult[15];
        }
        if (cResult[16] === tmp5) {
          let tmp25;
          let tmp28;
          let tmp30;
          if (cResult[17] === tmp4.operation) {
            tmp25 = cResult[18];
          }
          if (cResult[19] !== row.totalMs) {
            const tmpResult2 = ConjurePerfTraceFormat;
            const formatPerfMsResult = tmpResult2.formatPerfMs(row.totalMs);
            cResult[19] = row.totalMs;
            cResult[20] = formatPerfMsResult;
            tmp28 = formatPerfMsResult;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] !== tmp28) {
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp28 };
            const tmp32 = metroImportAll(Text_Text.Text, obj5);
            cResult[21] = tmp28;
            cResult[22] = tmp32;
            tmp30 = tmp32;
          } else {
            tmp30 = cResult[22];
          }
          if (cResult[23] === tmp25) {
            if (cResult[24] === tmp30) {
              if (cResult[25] === tmp12) {
                if (cResult[26] === tmp17) {
                  let tmp33;
                  if (cResult[27] === tmp21) {
                    tmp33 = cResult[28];
                  }
                  const text = `${row.start / extent * 100}%`;
                  const text1 = `${(row.end - row.start) / extent * 100}%`;
                  if (cResult[29] === `${row.start / extent * 100}%`) {
                    let tmp39;
                    if (cResult[30] === `${(row.end - row.start) / extent * 100}%`) {
                      tmp39 = cResult[31];
                    }
                    if (cResult[32] === tmp4.bar) {
                      if (cResult[33] === tmp4.smaller) {
                        let tmp40;
                        if (cResult[34] === tmp39) {
                          tmp40 = cResult[35];
                        }
                        if (cResult[36] === tmp4.smallerTrack) {
                          let tmp44;
                          if (cResult[37] === tmp40) {
                            tmp44 = cResult[38];
                          }
                          if (cResult[39] === tmp5) {
                            if (cResult[40] === tmp4.row) {
                              if (cResult[41] === tmp33) {
                                if (cResult[42] === tmp44) {
                                  let tmp48;
                                  if (cResult[43] === tmp8) {
                                    tmp48 = cResult[44];
                                  }
                                  return tmp48;
                                }
                              }
                            }
                          }
                          const obj6 = { style: tmp7, onPress: tmp8, accessibilityRole: "button", accessibilityLabel: tmp5, children: items };
                          items = [tmp33, tmp44];
                          const tmp51 = React4(React3, obj6);
                          cResult[39] = tmp5;
                          class T {
                            constructor() {
                              return onReveal(row.parentKey);
                            }
                          }
                          cResult[41] = tmp33;
                          cResult[42] = tmp44;
                          cResult[43] = tmp8;
                          cResult[44] = tmp51;
                          tmp48 = tmp51;
                        }
                        const obj7 = { style: tmp4.smallerTrack, children: tmp40 };
                        const tmp47 = metroImportAll(metroRequire, obj7);
                        cResult[36] = tmp4.smallerTrack;
                        cResult[37] = tmp40;
                        cResult[38] = tmp47;
                        tmp44 = tmp47;
                      }
                    }
                    const obj8 = { style: items1 };
                    items1 = [, , ];
                    ({ bar: arr4[0], smaller: arr4[1] } = tmp4);
                    items1[2] = tmp39;
                    const tmp43 = metroImportAll(metroRequire, obj8);
                    cResult[32] = tmp4.bar;
                    cResult[33] = tmp4.smaller;
                    class T {
                      constructor() {
                        return onReveal(row.parentKey);
                      }
                    }
                    cResult[35] = tmp43;
                    tmp40 = tmp43;
                  }
                  const obj9 = { left: text, width: text1 };
                  cResult[29] = text;
                  cResult[30] = text1;
                  cResult[31] = obj9;
                  tmp39 = obj9;
                }
              }
            }
          }
          const obj10 = { style: tmp12, children: items2 };
          items2 = [tmp17, tmp21, tmp25, tmp30];
          const tmp36 = React4(metroRequire, obj10);
          class T {
            constructor() {
              return onReveal(row.parentKey);
            }
          }
          cResult[24] = tmp30;
          cResult[25] = tmp12;
          cResult[26] = tmp17;
          cResult[27] = tmp21;
          cResult[28] = tmp36;
          tmp33 = tmp36;
        }
        const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.operation, lineClamp: 1, children: tmp5 };
        const tmp27 = metroImportAll(Text_Text.Text, obj11);
        cResult[16] = tmp5;
        cResult[17] = tmp4.operation;
        cResult[18] = tmp27;
        tmp25 = tmp27;
      }
      const obj12 = { style: items3 };
      items3 = [, ];
      ({ swatch: arr2[0], smaller: arr2[1] } = tmp4);
      const tmp24 = metroImportAll(metroRequire, obj12);
      class T {
        constructor() {
          return onReveal(row.parentKey);
        }
      }
      cResult[13] = tmp4.smaller;
      cResult[14] = tmp4.swatch;
      cResult[15] = tmp24;
      tmp21 = tmp24;
    }
    const items4 = [tmp4.rowTop, tmp11];
    cResult[7] = tmp4.rowTop;
    cResult[8] = tmp11;
    cResult[9] = items4;
    tmp12 = items4;
  }
  class T {
    constructor() {
      return onReveal(row.parentKey);
    }
  }
  cResult[2] = onReveal;
  cResult[3] = row.parentKey;
  cResult[4] = T;
  tmp8 = T;
}) : (function SmallerRow(row) {
  let ChevronSmallRightIcon;
  let closure_129_1;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj6;
  row = row.row;
  ({ extent, onReveal: closure_129_1 } = row);
  const tmp = closure_11();
  const obj = ConjurePerfTraceFormat;
  const perfSmallerLabelResult = obj.perfSmallerLabel(row);
  const obj2 = {
    style: tmp.row,
    onPress() {
      return closure_1_1(row.parentKey);
    },
    accessibilityRole: "button",
    accessibilityLabel: perfSmallerLabelResult,
    children: items3
  };
  const obj3 = { style: items, children: items1 };
  items = [tmp.rowTop, { paddingLeft: row.depth * nativeDefault.space.PX_12 }];
  const obj5 = { style: tmp.chevron, children: metroImportAll(ChevronSmallRightIcon, obj6) };
  obj6 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
  ({ paddingLeft: row.depth * nativeDefault.space.PX_12 });
  ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  items1 = [metroImportAll(metroRequire, obj5), , , ];
  const obj7 = { style: items2 };
  items2 = [, ];
  ({ swatch: arr3[0], smaller: arr3[1] } = tmp);
  items1[1] = metroImportAll(metroRequire, obj7);
  const obj8 = { variant: "text-xs/normal", color: "text-muted", style: tmp.operation, lineClamp: 1, children: perfSmallerLabelResult };
  items1[2] = metroImportAll(Text_Text.Text, obj8);
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: obj10.formatPerfMs(row.totalMs) };
  const Text = Text_Text.Text;
  obj10 = ConjurePerfTraceFormat;
  items1[3] = metroImportAll(Text, obj9);
  items3 = [React4(metroRequire, obj3), ];
  const obj11 = { style: tmp.smallerTrack, children: metroImportAll(metroRequire, obj12) };
  obj12 = { style: items4 };
  items4 = [, , ];
  ({ bar: arr5[0], smaller: arr5[1] } = tmp);
  const obj13 = { left: `${row.start / extent * 100}%`, width: `${(row.end - row.start) / extent * 100}%` };
  items4[2] = obj13;
  items3[1] = metroImportAll(metroRequire, obj11);
  return React4(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function Waterfall(trace) {
  let arr;
  let closure_0;
  let closure_1;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let tmp11;
  let tmp7;
  let tmpResult8;
  let obj = require("react");
  const cResult = obj.c(73);
  trace = trace.trace;
  const tmp4 = closure_11();
  _require = tmp4;
  let tmp5 = importDefault;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp6 = useConjurePerfTraceTreeDefault(trace);
  importDefault = tmp6;
  if (cResult[0] !== trace) {
    const tmpResult = require("ConjurePerfTraceLayout");
    const perfTraceExtentResult = tmpResult.perfTraceExtent(trace);
    cResult[0] = trace;
    cResult[1] = perfTraceExtentResult;
    tmp7 = perfTraceExtentResult;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] !== trace) {
    const tmpResult5 = require("ConjurePerfTraceLayout");
    const perfTraceSelfTimesResult = tmpResult5.perfTraceSelfTimes(trace, 6);
    cResult[2] = trace;
    cResult[3] = perfTraceSelfTimesResult;
    arr = perfTraceSelfTimesResult;
  } else {
    arr = cResult[3];
  }
  const sum = nativeDefault.space.PX_16 + bottom;
  if (cResult[4] !== sum) {
    let obj2 = { paddingBottom: sum };
    cResult[4] = sum;
    cResult[5] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4.content) {
    let tmp12;
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp20;
    let tmp23;
    let tmp27;
    if (cResult[7] === tmp11) {
      tmp12 = cResult[8];
    }
    const section = tmp4.section;
    if (cResult[9] !== trace) {
      const tmpResult6 = require("ConjurePerfTraceFormat");
      let str = tmpResult6.perfTraceDuration(trace);
      if (str == null) {
        str = "still running";
      }
      cResult[9] = trace;
      cResult[10] = str;
      tmp13 = str;
    } else {
      tmp13 = cResult[10];
    }
    if (cResult[11] !== tmp13) {
      let obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp13 };
      const tmp17 = closure_8(require("Text/Text").Text, obj3);
      cResult[11] = tmp13;
      cResult[12] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[12];
    }
    if (cResult[13] !== trace) {
      const tmpResult7 = require("ConjurePerfTraceFormat");
      const perfTraceSummaryResult = tmpResult7.perfTraceSummary(trace);
      cResult[13] = trace;
      cResult[14] = perfTraceSummaryResult;
      tmp18 = perfTraceSummaryResult;
    } else {
      tmp18 = cResult[14];
    }
    if (cResult[15] !== tmp18) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp18 };
      const tmp22 = closure_8(require("Text/Text").Text, obj4);
      cResult[15] = tmp18;
      cResult[16] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[16];
    }
    if (cResult[17] !== trace.started_by) {
      let tmp24 = null;
      if (null != trace.started_by) {
        const _HermesInternal = HermesInternal;
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: "Started by " + trace.started_by.trace_name };
        let Text = tmp(5086).Text;
        tmp24 = closure_8(Text, obj5);
      }
      cResult[17] = trace.started_by;
      cResult[18] = tmp24;
      tmp23 = tmp24;
    } else {
      tmp23 = cResult[18];
    }
    if (cResult[19] !== trace.dropped) {
      let tmp28 = null;
      if (0 !== trace.dropped) {
        const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: "" + tmpResult8.formatSpanCount(trace.dropped) + " not recorded" };
        const Text2 = tmp(5086).Text;
        const _HermesInternal2 = HermesInternal;
        tmpResult8 = require("ConjurePerfTraceFormat");
        tmp28 = closure_8(Text2, obj6);
      }
      cResult[19] = trace.dropped;
      cResult[20] = tmp28;
      tmp27 = tmp28;
    } else {
      tmp27 = cResult[20];
    }
    if (cResult[21] === tmp4.section) {
      if (cResult[22] === tmp20) {
        if (cResult[23] === tmp23) {
          if (cResult[24] === tmp27) {
            let tmp31;
            let tmp35;
            let tmp38;
            let tmp41;
            if (cResult[25] === tmp15) {
              tmp31 = cResult[26];
            }
            if (cResult[27] !== tmp6.reset) {
              const obj7 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp6.reset };
              const tmp37 = closure_8(require("components/Button/Button").Button, obj7);
              cResult[27] = tmp6.reset;
              cResult[28] = tmp37;
              tmp35 = tmp37;
            } else {
              tmp35 = cResult[28];
            }
            if (cResult[29] !== tmp6.expandAll) {
              const obj8 = { size: "sm", variant: "secondary", text: "Expand all", onPress: tmp6.expandAll };
              const tmp40 = closure_8(require("components/Button/Button").Button, obj8);
              cResult[29] = tmp6.expandAll;
              cResult[30] = tmp40;
              tmp38 = tmp40;
            } else {
              tmp38 = cResult[30];
            }
            if (cResult[31] !== tmp6.collapseAll) {
              const obj9 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: tmp6.collapseAll };
              const tmp43 = closure_8(require("components/Button/Button").Button, obj9);
              cResult[31] = tmp6.collapseAll;
              cResult[32] = tmp43;
              tmp41 = tmp43;
            } else {
              tmp41 = cResult[32];
            }
            if (cResult[33] === tmp4.toolbar) {
              if (cResult[34] === tmp35) {
                if (cResult[35] === tmp38) {
                  let tmp44;
                  let tmp49;
                  let tmp52;
                  if (cResult[36] === tmp41) {
                    tmp44 = cResult[37];
                  }
                  const _Symbol = Symbol;
                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp51 = closure_8(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Long-press a span to expand everything under it." });
                    cResult[38] = tmp51;
                    tmp49 = tmp51;
                  } else {
                    tmp49 = cResult[38];
                  }
                  const legend = tmp4.legend;
                  if (cResult[39] !== tmp4) {
                    const PERF_CATEGORIES = tmp(17068).PERF_CATEGORIES;
                    const mapped = PERF_CATEGORIES.map((item) => {
                      let items;
                      let items1;
                      const obj2 = { style: items };
                      items = [closure_0.swatch, closure_0[item]];
                      const obj = { style: closure_0.legendItem, children: items1 };
                      items1 = [metroImportAll(metroRequire, obj2), ];
                      const obj3 = { variant: "text-xs/normal", color: "text-muted", children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item] };
                      const Text = Text_Text.Text;
                      items1[1] = metroImportAll(Text, obj3);
                      return React4(metroRequire, obj, item);
                    });
                    cResult[39] = tmp4;
                    cResult[40] = mapped;
                    tmp52 = mapped;
                  } else {
                    tmp52 = cResult[40];
                  }
                  if (cResult[41] === tmp4.legend) {
                    let tmp54;
                    let tmp58;
                    if (cResult[42] === tmp52) {
                      tmp54 = cResult[43];
                    }
                    if (cResult[44] === tmp7) {
                      if (cResult[45] === tmp6.collapsed) {
                        if (cResult[46] === tmp6.expandSubtree) {
                          if (cResult[47] === tmp6.reveal) {
                            if (cResult[48] === tmp6.rows) {
                              if (cResult[49] === tmp6.select) {
                                if (cResult[50] === tmp6.selectedKey) {
                                  let tmp61;
                                  if (cResult[51] === tmp6.toggle) {
                                    tmp58 = cResult[52];
                                  }
                                  if (cResult[61] !== tmp58) {
                                    const obj10 = { children: tmp58 };
                                    const tmp64 = closure_8(closure_6, obj10);
                                    cResult[61] = tmp58;
                                    cResult[62] = tmp64;
                                    tmp61 = tmp64;
                                  } else {
                                    tmp61 = cResult[62];
                                  }
                                  if (cResult[63] === arr) {
                                    let tmp65;
                                    if (cResult[64] === tmp4.section) {
                                      tmp65 = cResult[65];
                                    }
                                    if (cResult[66] === tmp31) {
                                      if (cResult[67] === tmp44) {
                                        if (cResult[68] === tmp54) {
                                          if (cResult[69] === tmp61) {
                                            if (cResult[70] === tmp65) {
                                              let tmp70;
                                              if (cResult[71] === tmp12) {
                                                tmp70 = cResult[72];
                                              }
                                              return tmp70;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj11 = { contentContainerStyle: tmp12, children: items };
                                    items = [tmp31, tmp44, tmp49, tmp54, tmp61, tmp65];
                                    const tmp73 = closure_9(closure_5, obj11);
                                    cResult[66] = tmp31;
                                    cResult[67] = tmp44;
                                    cResult[68] = tmp54;
                                    cResult[69] = tmp61;
                                    cResult[70] = tmp65;
                                    cResult[71] = tmp12;
                                    cResult[72] = tmp73;
                                    tmp70 = tmp73;
                                  }
                                  let tmp66 = null;
                                  if (0 !== arr.length) {
                                    const obj12 = { style: tmp4.section, children: items1 };
                                    items1 = [
                                      closure_8(tmp(5086).Text, { variant: "text-sm/semibold", color: "text-default", children: "Most time" }),
                                      arr.map((name) => {
                                                                          let obj2;
                                                                          name = name.name;
                                                                          const ms = name.ms;
                                                                          const obj = { variant: "text-sm/normal", color: "text-muted", children: "" + name + " " + obj2.formatPerfMs(ms) };
                                                                          const Text = closure_0(extent[10]).Text;
                                                                          obj2 = closure_0(extent[12]);
                                                                          return closure_1_8(Text, obj, name);
                                                                        })
                                    ];
                                    tmp66 = closure_9(closure_6, obj12);
                                  }
                                  cResult[63] = arr;
                                  cResult[64] = tmp4.section;
                                  cResult[65] = tmp66;
                                  tmp65 = tmp66;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (cResult[53] === tmp7) {
                      if (cResult[54] === tmp6.collapsed) {
                        if (cResult[55] === tmp6.expandSubtree) {
                          if (cResult[56] === tmp6.reveal) {
                            if (cResult[57] === tmp6.select) {
                              if (cResult[58] === tmp6.selectedKey) {
                                let tmp59;
                                if (cResult[59] === tmp6.toggle) {
                                  tmp59 = cResult[60];
                                }
                                const rows = tmp6.rows;
                                const mapped1 = rows.map(tmp59);
                                cResult[44] = tmp7;
                                cResult[45] = tmp6.collapsed;
                                cResult[46] = tmp6.expandSubtree;
                                cResult[47] = tmp6.reveal;
                                cResult[48] = tmp6.rows;
                                cResult[49] = tmp6.select;
                                cResult[50] = tmp6.selectedKey;
                                cResult[51] = tmp6.toggle;
                                cResult[52] = mapped1;
                                tmp58 = mapped1;
                              }
                            }
                          }
                        }
                      }
                    }
                    const fn = function z(kind) {
                      let collapsed;
                      let tmp5;
                      if ("node" === kind.kind) {
                        const obj3 = { node: kind.node, extent, collapsed: collapsed.has(kind.key), selected: kind.key === closure_1.selectedKey, onSelect: null, onToggle: null, onExpandSubtree: null };
                        collapsed = closure_1.collapsed;
                        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_1);
                        tmp5 = metroImportAll(closure_12, obj3, kind.key);
                      } else {
                        const obj = { row: kind, extent, onReveal: closure_1.reveal };
                        tmp5 = metroImportAll(closure_13, obj, kind.key);
                      }
                      return tmp5;
                    };
                    cResult[53] = tmp7;
                    cResult[54] = tmp6.collapsed;
                    cResult[55] = tmp6.expandSubtree;
                    cResult[56] = tmp6.reveal;
                    cResult[57] = tmp6.select;
                    cResult[58] = tmp6.selectedKey;
                    cResult[59] = tmp6.toggle;
                    cResult[60] = fn;
                    tmp59 = fn;
                  }
                  const obj13 = { style: legend, children: tmp52 };
                  const tmp57 = closure_8(closure_6, obj13);
                  cResult[41] = tmp4.legend;
                  cResult[42] = tmp52;
                  cResult[43] = tmp57;
                  tmp54 = tmp57;
                }
              }
            }
            const obj14 = { style: tmp4.toolbar, children: items2 };
            items2 = [tmp35, tmp38, tmp41];
            const tmp47 = closure_9(closure_6, obj14);
            cResult[33] = tmp4.toolbar;
            cResult[34] = tmp35;
            cResult[35] = tmp38;
            cResult[36] = tmp41;
            cResult[37] = tmp47;
            tmp44 = tmp47;
          }
        }
      }
    }
    const obj15 = { style: section, children: items3 };
    items3 = [tmp15, tmp20, tmp23, tmp27];
    const tmp34 = closure_9(closure_6, obj15);
    cResult[21] = tmp4.section;
    cResult[22] = tmp20;
    cResult[23] = tmp23;
    cResult[24] = tmp27;
    cResult[25] = tmp15;
    cResult[26] = tmp34;
    tmp31 = tmp34;
  }
  const items4 = [tmp4.content, tmp11];
  cResult[6] = tmp4.content;
  cResult[7] = tmp11;
  cResult[8] = items4;
  tmp12 = items4;
}) : (function Waterfall(trace) {
  let PERF_CATEGORIES;
  let closure_1;
  let closure_2;
  let extent;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let rows;
  let tmp4Result;
  let tmp4Result2;
  trace = trace.trace;
  const tmp = closure_11();
  importDefault = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useConjurePerfTraceTreeDefault(trace);
  dependencyMap = tmp3;
  let obj = trace(17068);
  react = obj.perfTraceExtent(trace);
  let items = [trace];
  const memo = react.useMemo(() => {
    const obj = ConjurePerfTraceLayout;
    return obj.perfTraceSelfTimes(trace, 6);
  }, items);
  let tmp5 = closure_9;
  let obj2 = { contentContainerStyle: items1, children: items3 };
  items1 = [tmp.content, ];
  let obj3 = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  items1[1] = obj3;
  const obj4 = { style: tmp.section, children: items2 };
  let Text = trace(5086).Text;
  const obj5 = trace(17067);
  let str = obj5.perfTraceDuration(trace);
  const tmp6 = closure_5;
  if (str == null) {
    str = "still running";
  }
  items2 = [tmp8(Text, { variant: "text-md/semibold", color: "text-strong", children: str }), , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-muted", children: tmp4Result.perfTraceSummary(trace) };
  const Text2 = tmp4(5086).Text;
  tmp4Result = trace(17067);
  items2[1] = closure_8(Text2, obj6);
  let tmp8Result = null;
  if (null != trace.started_by) {
    const _HermesInternal = HermesInternal;
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: "Started by " + trace.started_by.trace_name };
    const Text3 = tmp4(5086).Text;
    tmp8Result = tmp8(Text3, obj7);
  }
  items2[2] = tmp8Result;
  let tmp8Result2 = null;
  if (0 !== trace.dropped) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: "" + tmp4Result2.formatSpanCount(trace.dropped) + " not recorded" };
    const Text4 = tmp4(5086).Text;
    const _HermesInternal2 = HermesInternal;
    tmp4Result2 = trace(17067);
    tmp8Result2 = tmp8(Text4, obj8);
  }
  items2[3] = tmp8Result2;
  items3 = [tmp5(tmp7, obj4), , , , , ];
  const obj9 = { style: tmp.toolbar, children: items4 };
  items4 = [, , ];
  const obj10 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp3.reset };
  items4[0] = closure_8(trace(5375).Button, obj10);
  const obj11 = { size: "sm", variant: "secondary", text: "Expand all", onPress: tmp3.expandAll };
  items4[1] = closure_8(trace(5375).Button, obj11);
  const obj12 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: tmp3.collapseAll };
  items4[2] = closure_8(trace(5375).Button, obj12);
  items3[1] = tmp5(closure_6, obj9);
  items3[2] = closure_8(trace(5086).Text, { variant: "text-xs/normal", color: "text-muted", children: "Long-press a span to expand everything under it." });
  const obj13 = {
    style: tmp.legend,
    children: PERF_CATEGORIES.map((item) => {
      let items;
      let items1;
      const obj2 = { style: items };
      items = [closure_1.swatch, closure_1[item]];
      const obj = { style: closure_1.legendItem, children: items1 };
      items1 = [metroImportAll(metroRequire, obj2), ];
      const obj3 = { variant: "text-xs/normal", color: "text-muted", children: ConjurePerfTraceFormat.PERF_CATEGORY_LABELS[item] };
      const Text = Text_Text.Text;
      items1[1] = metroImportAll(Text, obj3);
      return React4(metroRequire, obj, item);
    })
  };
  PERF_CATEGORIES = tmp4(17068).PERF_CATEGORIES;
  items3[3] = closure_8(closure_6, obj13);
  const obj14 = {
    children: rows.map((kind) => {
      let collapsed;
      let tmp5;
      if ("node" === kind.kind) {
        const obj3 = { node: kind.node, extent, collapsed: collapsed.has(kind.key), selected: kind.key === closure_2.selectedKey, onSelect: null, onToggle: null, onExpandSubtree: null };
        collapsed = closure_2.collapsed;
        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_2);
        tmp5 = metroImportAll(closure_12, obj3, kind.key);
      } else {
        const obj = { row: kind, extent, onReveal: closure_2.reveal };
        tmp5 = metroImportAll(closure_13, obj, kind.key);
      }
      return tmp5;
    })
  };
  rows = tmp3.rows;
  items3[4] = closure_8(closure_6, obj14);
  let tmp5Result = null;
  if (0 !== memo.length) {
    const obj15 = { style: tmp.section, children: items5 };
    items5 = [
      tmp8(tmp4(5086).Text, { variant: "text-sm/semibold", color: "text-default", children: "Most time" }),
      memo.map((name) => {
          let obj2;
          name = name.name;
          const ms = name.ms;
          const obj = { variant: "text-sm/normal", color: "text-muted", children: "" + name + " " + obj2.formatPerfMs(ms) };
          const Text = trace(closure_2[10]).Text;
          obj2 = trace(closure_2[12]);
          return closure_1_8(Text, obj, name);
        })
    ];
    tmp5Result = tmp5(tmp7, obj15);
  }
  items3[5] = tmp5Result;
  return tmp5(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerfTraceScreen(projectId) {
  let first;
  const obj = projectId(576);
  const cResult = obj.c(8);
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === projectId) {
    let tmp6;
    let tmp7;
    let tmp10;
    if (cResult[2] === traceId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = projectId(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (null == stateFromStores) {
      let tmp14;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_8(projectId(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "This trace is no longer available." });
        cResult[5] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[5];
      }
      tmp10 = tmp14;
    } else if (cResult[6] !== stateFromStores) {
      const obj2 = { trace: stateFromStores };
      const tmp13 = closure_8(closure_14, obj2);
      cResult[6] = stateFromStores;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  const fn = function o() {
    return ConjureDebugStore.getTimingTrace(projectId, traceId);
  };
  const items1 = [projectId, traceId];
  cResult[1] = projectId;
  cResult[2] = traceId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function PerfTraceScreen(projectId) {
  let tmp6;
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  const obj = projectId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getTimingTrace(projectId, traceId), items1);
  const tmp = projectId;
  if (null == stateFromStores) {
    tmp6 = closure_8(tmp(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "This trace is no longer available." });
  } else {
    const obj2 = { trace: stateFromStores };
    tmp6 = closure_8(closure_14, obj2);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceModal(projectId) {
  let first;
  let obj = projectId(576);
  const cResult = obj.c(14);
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === projectId) {
    let tmp6;
    let tmp7;
    let tmp9;
    if (cResult[2] === traceId) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = projectId(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult2 = projectId(6203);
      const headerCloseButton = tmpResult2.getHeaderCloseButton(() => {
        const arr = traceId(dependencyMap[19]);
        return arr.pop();
      });
      cResult[5] = headerCloseButton;
      tmp9 = headerCloseButton;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === projectId) {
      let tmp11;
      if (cResult[7] === traceId) {
        tmp11 = cResult[8];
      }
      if (cResult[9] === tmp11) {
        let tmp12;
        let tmp14;
        if (cResult[10] === stateFromStores) {
          tmp12 = cResult[11];
        }
        if (cResult[12] !== tmp12) {
          const obj2 = { initialRouteName: perf_trace, screens: tmp12 };
          const tmp17 = closure_8(projectId(11213).Modal, obj2);
          cResult[12] = tmp12;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[13];
        }
        return tmp14;
      }
      const obj3 = {};
      const obj4 = { title: stateFromStores, headerLeft: tmp9, render: tmp11 };
      obj3[perf_trace] = obj4;
      cResult[9] = tmp11;
      cResult[10] = stateFromStores;
      cResult[11] = obj3;
      tmp12 = obj3;
    }
    const fn2 = function b() {
      const obj = { projectId, traceId };
      return metroImportAll(closure_15, obj);
    };
    cResult[6] = projectId;
    cResult[7] = traceId;
    cResult[8] = fn2;
    tmp11 = fn2;
  }
  const fn = function o() {
    const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
    let str;
    if (timingTrace != null) {
      str = timingTrace.name;
    }
    if (str == null) {
      str = "Perf Trace";
    }
    return str;
  };
  const items1 = [projectId, traceId];
  cResult[1] = projectId;
  cResult[2] = traceId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function ConjurePerfTraceModal(projectId) {
  projectId = projectId.projectId;
  const traceId = projectId.traceId;
  let stateFromStores;
  let obj = projectId(stateFromStores[17]);
  const items = [ConjureDebugStore];
  const items1 = [projectId, traceId];
  stateFromStores = obj.useStateFromStores(items, () => {
    const timingTrace = ConjureDebugStore.getTimingTrace(projectId, traceId);
    let str;
    if (timingTrace != null) {
      str = timingTrace.name;
    }
    if (str == null) {
      str = "Perf Trace";
    }
    return str;
  }, items1);
  const items2 = [projectId, stateFromStores, traceId];
  const memo = react.useMemo(() => {
    let obj3;
    let obj = {};
    const obj2 = {
      title: stateFromStores,
      headerLeft: obj3.getHeaderCloseButton(() => {
        const arr = traceId(stateFromStores[19]);
        return arr.pop();
      }),
      render() {
        const obj = { projectId, traceId };
        return closure_2_8(closure_2_15, obj);
      }
    };
    obj[perf_trace] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items2);
  let obj2 = { initialRouteName: perf_trace, screens: memo };
  return closure_8(projectId(stateFromStores[20]).Modal, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx");

export default tmp5;
