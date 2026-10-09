// Module ID: 17212
// Function ID: 17213
// Name: ConjurePerfTraceModal
// Dependencies: [19, 17, 13165, 21, 5091, 587, 558, 576, 17213, 6899, 10498, 5087, 5004, 17214, 17216, 1631, 17217, 13174, 5376, 504, 6205, 5941, 10568, 2]

// Module 17212 (ConjurePerfTraceModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 6899 */;
import ConjurePerfTraceStatsHeaderDefault from "ConjurePerfTraceStatsHeader" /* 17213 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17214 */;
import useConjurePerfTraceTreeDefault from "useConjurePerfTraceTree" /* 17217 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, label, obj1;

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
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let tmp;
const ConjurePerfTraceStats = tmp(17216);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const perf_trace = "perf_trace";
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, toolbar: obj4, row: obj5, rowSelected: obj6, rowTop: obj7, chevron: obj8, operation: { flex: 1 }, badge: obj9, swatch: size, track: { height: 6 }, bar: rect, detail: obj10, detailLine: obj11, detailBlock: obj12, failed: obj13, running: obj14, smaller: obj15, smallerTrack: { height: 3 } };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj5 = { paddingVertical: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj8 = { width: nativeDefault.space.PX_16, alignItems: "center" };
obj9 = { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs };
rect = { position: "absolute", top: 0, bottom: 0, minWidth: 2, borderRadius: nativeDefault.radii.xs };
obj10 = { gap: nativeDefault.space.PX_4, paddingTop: nativeDefault.space.PX_4 };
obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj12 = { gap: nativeDefault.space.PX_4 };
obj13 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj14 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
obj15 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
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
  let obj16;
  let obj20;
  let onSelect;
  let perfNodeSectionsResult;
  let running;
  let selected;
  let str;
  let tmp = node;
  let tmp2 = onSelect;
  let obj = node(onSelect[7]);
  const cResult = obj.c(79);
  node = node.node;
  ({ extent, collapsed, selected } = node);
  onSelect = node.onSelect;
  const onToggle = node.onToggle;
  const onExpandSubtree = node.onExpandSubtree;
  let tmp4 = closure_11();
  const detail = tmp4;
  let obj2 = node(onSelect[8]);
  const perfCategoryColors = obj2.usePerfCategoryColors();
  if (collapsed) {
    ChevronSmallDownIcon = tmp(tmp2[9]).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp(tmp2[10]).ChevronSmallDownIcon;
  }
  if (node.failed) {
    running = tmp4.failed;
  } else if (node.running) {
    running = tmp4.running;
  } else {
    running = perfCategoryColors[node.category];
  }
  if (cResult[0] === tmp4.row) {
    let tmp8;
    if (cResult[1] === (selected && tmp4.rowSelected)) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === node.key) {
      if (cResult[4] === onSelect) {
        let tmp9;
        if (cResult[5] === selected) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === node.key) {
          let tmp10;
          if (cResult[8] === onExpandSubtree) {
            tmp10 = cResult[9];
          }
          let tmp11;
          if (node.children.length > 0) {
            tmp11 = !collapsed;
          }
          if (cResult[10] === selected) {
            let tmp12;
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp12 = cResult[12];
            }
            const result = node.depth * selected(tmp2[5]).space.PX_12;
            if (cResult[13] !== result) {
              const obj3 = { paddingLeft: result };
              cResult[13] = result;
              cResult[14] = obj3;
              tmp15 = obj3;
            } else {
              tmp15 = cResult[14];
            }
            if (cResult[15] === tmp4.rowTop) {
              let tmp16;
              let tmp18Result;
              if (cResult[16] === tmp15) {
                tmp16 = cResult[17];
              }
              if (cResult[18] === ChevronSmallDownIcon) {
                if (cResult[19] === collapsed) {
                  if (cResult[20] === node.children.length > 0) {
                    if (cResult[21] === node.key) {
                      if (cResult[22] === onToggle) {
                        let tmp17;
                        let tmp22;
                        if (cResult[23] === tmp4.chevron) {
                          tmp17 = cResult[24];
                        }
                        if (cResult[25] !== node.descendants) {
                          let tmp23 = null;
                          if (node.descendants > 0) {
                            const obj4 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
                            tmp23 = closure_8(tmp(tmp2[11]).Text, obj4);
                          }
                          cResult[25] = node.descendants;
                          cResult[26] = tmp23;
                          tmp22 = tmp23;
                        } else {
                          tmp22 = cResult[26];
                        }
                        if (cResult[27] === tmp4.swatch) {
                          let tmp26;
                          let tmp30;
                          if (cResult[28] === perfCategoryColors[node.category]) {
                            tmp26 = cResult[29];
                          }
                          if (cResult[30] !== node.service) {
                            const obj5 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
                            const tmp32 = closure_8(tmp(tmp2[11]).Text, obj5);
                            cResult[30] = node.service;
                            cResult[31] = tmp32;
                            tmp30 = tmp32;
                          } else {
                            tmp30 = cResult[31];
                          }
                          if (cResult[32] === node.operation) {
                            let tmp33;
                            if (cResult[33] === tmp4.operation) {
                              tmp33 = cResult[34];
                            }
                            if (cResult[35] === node.count) {
                              let tmp36;
                              let tmp41;
                              let tmp44;
                              let tmp46;
                              if (cResult[36] === tmp4.badge) {
                                tmp36 = cResult[37];
                              }
                              if (cResult[38] !== node.failed) {
                                let tmp42 = null;
                                if (node.failed) {
                                  const obj6 = { size: "xs", color: selected(tmp2[5]).colors.STATUS_DANGER };
                                  const WarningIcon = tmp(tmp2[12]).WarningIcon;
                                  tmp42 = closure_8(WarningIcon, obj6);
                                }
                                cResult[38] = node.failed;
                                cResult[39] = tmp42;
                                tmp41 = tmp42;
                              } else {
                                tmp41 = cResult[39];
                              }
                              if (cResult[40] !== node) {
                                const tmpResult = tmp(tmp2[13]);
                                const perfNodeDurationResult = tmpResult.perfNodeDuration(node);
                                cResult[40] = node;
                                cResult[41] = perfNodeDurationResult;
                                tmp44 = perfNodeDurationResult;
                              } else {
                                tmp44 = cResult[41];
                              }
                              if (cResult[42] !== tmp44) {
                                const obj7 = { variant: "text-xs/normal", color: "text-muted", children: tmp44 };
                                const tmp48 = closure_8(tmp(tmp2[11]).Text, obj7);
                                cResult[42] = tmp44;
                                cResult[43] = tmp48;
                                tmp46 = tmp48;
                              } else {
                                tmp46 = cResult[43];
                              }
                              if (cResult[44] === tmp17) {
                                if (cResult[45] === tmp22) {
                                  if (cResult[46] === tmp26) {
                                    if (cResult[47] === tmp30) {
                                      if (cResult[48] === tmp33) {
                                        if (cResult[49] === tmp36) {
                                          if (cResult[50] === tmp41) {
                                            if (cResult[51] === tmp46) {
                                              let tmp49;
                                              if (cResult[52] === tmp16) {
                                                tmp49 = cResult[53];
                                              }
                                              const text = `${node.start / extent * 100}%`;
                                              const text1 = `${(node.end - node.start) / extent * 100}%`;
                                              if (cResult[54] === `${node.start / extent * 100}%`) {
                                                let tmp55;
                                                if (cResult[55] === `${(node.end - node.start) / extent * 100}%`) {
                                                  tmp55 = cResult[56];
                                                }
                                                if (cResult[57] === running) {
                                                  if (cResult[58] === tmp4.bar) {
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
                                                            if (cResult[67] === tmp4.detailBlock) {
                                                              if (cResult[68] === tmp4.detailLine) {
                                                                let tmp64;
                                                                if (cResult[69] === tmp4.operation) {
                                                                  tmp64 = cResult[70];
                                                                }
                                                                if (cResult[71] === tmp8) {
                                                                  if (cResult[72] === tmp49) {
                                                                    if (cResult[73] === tmp60) {
                                                                      if (cResult[74] === tmp64) {
                                                                        if (cResult[75] === tmp9) {
                                                                          if (cResult[76] === tmp10) {
                                                                            let tmp68;
                                                                            if (cResult[77] === tmp12) {
                                                                              tmp68 = cResult[78];
                                                                            }
                                                                            return tmp68;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                const obj8 = { style: tmp8, onPress: tmp9, onLongPress: tmp10, accessibilityRole: "button", accessibilityState: tmp12, children: items };
                                                                items = [tmp49, tmp60, tmp64];
                                                                const tmp71 = closure_9(onExpandSubtree, obj8);
                                                                cResult[71] = tmp8;
                                                                cResult[72] = tmp49;
                                                                cResult[73] = tmp60;
                                                                cResult[74] = tmp64;
                                                                cResult[75] = tmp9;
                                                                cResult[76] = tmp10;
                                                                cResult[77] = tmp12;
                                                                cResult[78] = tmp71;
                                                                tmp68 = tmp71;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let tmp65 = null;
                                                      if (selected) {
                                                        const obj9 = {
                                                          style: items1,
                                                          children: perfNodeSectionsResult.map((item) => {
                                                                                                                  let items;
                                                                                                                  let rows;
                                                                                                                  let title;
                                                                                                                  ({ title, rows } = item);
                                                                                                                  let obj = { style: detail.detail, children: items };
                                                                                                                  let tmp3 = null;
                                                                                                                  let tmp = React4;
                                                                                                                  let tmp2 = metroRequire;
                                                                                                                  if (null != title) {
                                                                                                                    let tmp4 = metroImportAll;
                                                                                                                    let obj2 = { variant: "text-xs/semibold", color: "text-strong", children: title };
                                                                                                                    tmp3 = metroImportAll(Text_Text.Text, obj2);
                                                                                                                  }
                                                                                                                  items = [
                                                                                                                    tmp3,
                                                                                                                    rows.map((label) => {
                                                                                                                      let detailLine;
                                                                                                                      let items;
                                                                                                                      let tmp4;
                                                                                                                      label = label.label;
                                                                                                                      const value = label.value;
                                                                                                                      const tmp = closure_2_9;
                                                                                                                      const tmp2 = closure_2_6;
                                                                                                                      if (label.block) {
                                                                                                                        detailLine = tmp3.detailBlock;
                                                                                                                        tmp4 = tmp3;
                                                                                                                      } else {
                                                                                                                        detailLine = tmp3.detailLine;
                                                                                                                        tmp4 = tmp3;
                                                                                                                      }
                                                                                                                      const obj = { style: detailLine, children: items };
                                                                                                                      items = [closure_2_8(node(onSelect[11]).Text, { variant: "text-xs/semibold", color: "text-muted", children: label }), ];
                                                                                                                      const obj2 = { variant: "text-xs/normal", color: "text-default", style: tmp4.operation, selectable: true, children: value };
                                                                                                                      items[1] = closure_2_8(node(onSelect[11]).Text, obj2);
                                                                                                                      return tmp(tmp2, obj, label);
                                                                                                                    })
                                                                                                                  ];
                                                                                                                  if (title == null) {
                                                                                                                    title = "timing";
                                                                                                                  }
                                                                                                                  return tmp(tmp2, obj, title);
                                                                                                                })
                                                        };
                                                        items1 = [tmp4.detail, ];
                                                        items1[1] = { paddingLeft: node.depth * selected(tmp2[5]).space.PX_12 };
                                                        const obj10 = { paddingLeft: node.depth * selected(tmp2[5]).space.PX_12 };
                                                        const tmpResult2 = tmp(tmp2[13]);
                                                        perfNodeSectionsResult = tmpResult2.perfNodeSections(node);
                                                        tmp65 = closure_8(closure_6, obj9);
                                                      }
                                                      cResult[64] = node;
                                                      cResult[65] = selected;
                                                      cResult[66] = tmp4.detail;
                                                      cResult[67] = tmp4.detailBlock;
                                                      cResult[68] = tmp4.detailLine;
                                                      cResult[69] = tmp4.operation;
                                                      cResult[70] = tmp65;
                                                      tmp64 = tmp65;
                                                    }
                                                    const obj11 = { style: tmp4.track, children: tmp56 };
                                                    const tmp63 = closure_8(closure_6, obj11);
                                                    cResult[61] = tmp4.track;
                                                    cResult[62] = tmp56;
                                                    cResult[63] = tmp63;
                                                    tmp60 = tmp63;
                                                  }
                                                }
                                                const obj12 = { style: items2 };
                                                items2 = [tmp4.bar, running, tmp55];
                                                const tmp59 = closure_8(closure_6, obj12);
                                                cResult[57] = running;
                                                cResult[58] = tmp4.bar;
                                                cResult[59] = tmp55;
                                                cResult[60] = tmp59;
                                                tmp56 = tmp59;
                                              }
                                              const obj13 = { left: text, width: text1 };
                                              cResult[54] = text;
                                              cResult[55] = text1;
                                              cResult[56] = obj13;
                                              tmp55 = obj13;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj14 = { style: tmp16, children: items3 };
                              items3 = [tmp17, tmp22, tmp26, tmp30, tmp33, tmp36, tmp41, tmp46];
                              const tmp52 = closure_9(closure_6, obj14);
                              cResult[44] = tmp17;
                              cResult[45] = tmp22;
                              cResult[46] = tmp26;
                              cResult[47] = tmp30;
                              cResult[48] = tmp33;
                              cResult[49] = tmp36;
                              cResult[50] = tmp41;
                              cResult[51] = tmp46;
                              cResult[52] = tmp16;
                              cResult[53] = tmp52;
                              tmp49 = tmp52;
                            }
                            let tmp37 = null;
                            if (node.count > 1) {
                              const obj15 = { style: tmp4.badge, children: closure_8(Text, obj16) };
                              const _HermesInternal = HermesInternal;
                              obj16 = { variant: "text-xxs/semibold", color: "text-default", children: "\u00D7" + node.count };
                              Text = tmp(tmp2[11]).Text;
                              tmp37 = closure_8(closure_6, obj15);
                            }
                            cResult[35] = node.count;
                            cResult[36] = tmp4.badge;
                            cResult[37] = tmp37;
                            tmp36 = tmp37;
                          }
                          const obj17 = { variant: "text-xs/normal", color: "text-default", style: tmp4.operation, lineClamp: 1, children: node.operation };
                          const tmp35 = closure_8(tmp(tmp2[11]).Text, obj17);
                          cResult[32] = node.operation;
                          cResult[33] = tmp4.operation;
                          cResult[34] = tmp35;
                          tmp33 = tmp35;
                        }
                        const obj18 = { style: items4 };
                        items4 = [tmp4.swatch, perfCategoryColors[node.category]];
                        const tmp29 = closure_8(closure_6, obj18);
                        cResult[27] = tmp4.swatch;
                        cResult[28] = perfCategoryColors[node.category];
                        cResult[29] = tmp29;
                        tmp26 = tmp29;
                      }
                    }
                  }
                }
              }
              if (node.children.length > 0) {
                const obj19 = {
                  style: tmp4.chevron,
                  onPress() {
                                  return onToggle(node.key);
                                },
                  accessibilityRole: "button",
                  accessibilityLabel: str,
                  children: closure_8(ChevronSmallDownIcon, obj20)
                };
                str = "Collapse";
                const tmp21 = onExpandSubtree;
                if (collapsed) {
                  str = "Expand";
                }
                obj20 = { size: "xs", color: selected(tmp2[5]).colors.ICON_SUBTLE };
                tmp18Result = tmp18(tmp21, obj19);
              } else {
                const obj21 = { style: tmp4.chevron };
                tmp18Result = tmp18(closure_6, obj21);
              }
              cResult[18] = ChevronSmallDownIcon;
              cResult[19] = collapsed;
              cResult[20] = node.children.length > 0;
              cResult[21] = node.key;
              cResult[22] = onToggle;
              cResult[23] = tmp4.chevron;
              cResult[24] = tmp18Result;
              tmp17 = tmp18Result;
            }
            const items5 = [tmp4.rowTop, tmp15];
            cResult[15] = tmp4.rowTop;
            cResult[16] = tmp15;
            cResult[17] = items5;
            tmp16 = items5;
          }
          const obj22 = { selected, expanded: tmp11 };
          cResult[10] = selected;
          cResult[11] = tmp11;
          cResult[12] = obj22;
          tmp12 = obj22;
        }
        const fn2 = function s() {
          return onExpandSubtree(node.key);
        };
        cResult[7] = node.key;
        cResult[8] = onExpandSubtree;
        cResult[9] = fn2;
        tmp10 = fn2;
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
    tmp9 = fn;
  }
  const items6 = [tmp4.row, selected && tmp4.rowSelected];
  cResult[0] = tmp4.row;
  cResult[1] = selected && tmp4.rowSelected;
  cResult[2] = items6;
  tmp8 = items6;
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
  let obj14;
  let obj18;
  let obj3;
  let obj7;
  let perfNodeSectionsResult;
  let running;
  let selected;
  let str;
  let tmp12Result;
  let tmp14;
  let tmp2Result;
  let tmp9;
  node = node.node;
  ({ extent, collapsed, selected } = node);
  ({ onSelect: dependencyMap, onToggle: react, onExpandSubtree: closure_4 } = node);
  let tmp = closure_11();
  const detail = tmp;
  let tmp2 = node;
  let tmp3 = dependencyMap;
  let obj = node(17213);
  const perfCategoryColors = obj.usePerfCategoryColors();
  if (collapsed) {
    ChevronSmallDownIcon = tmp2(6899).ChevronSmallRightIcon;
  } else {
    ChevronSmallDownIcon = tmp2(10498).ChevronSmallDownIcon;
  }
  if (node.failed) {
    running = tmp.failed;
  } else if (node.running) {
    running = tmp.running;
  } else {
    running = perfCategoryColors[node.category];
  }
  let items = [tmp.row, ];
  let obj2 = {
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
    accessibilityState: obj3,
    children: items4
  };
  const tmp8 = selected && tmp.rowSelected;
  items[1] = tmp8;
  obj3 = { selected, expanded: tmp9 };
  tmp9 = undefined;
  if (node.children.length > 0) {
    tmp9 = !collapsed;
  }
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.rowTop, { paddingLeft: node.depth * selected(587).space.PX_12 }];
  ({ paddingLeft: node.depth * selected(587).space.PX_12 });
  if (node.children.length > 0) {
    const obj6 = {
      style: tmp.chevron,
      onPress() {
          return react(node.key);
        },
      accessibilityRole: "button",
      accessibilityLabel: str,
      children: closure_8(ChevronSmallDownIcon, obj7)
    };
    str = "Collapse";
    if (collapsed) {
      str = "Expand";
    }
    obj7 = { size: "xs", color: selected(587).colors.ICON_SUBTLE };
    tmp12Result = tmp12(tmp7, obj6);
    tmp14 = tmp12;
  } else {
    const obj8 = { style: tmp.chevron };
    tmp12Result = tmp12(tmp10, obj8);
    tmp14 = tmp12;
  }
  items2 = [tmp12Result, , , , , , , ];
  let tmp14Result = null;
  if (node.descendants > 0) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: node.descendants };
    tmp14Result = tmp14(tmp2(5087).Text, obj9);
  }
  items2[1] = tmp14Result;
  const obj10 = { style: items3 };
  items3 = [tmp.swatch, perfCategoryColors[node.category]];
  items2[2] = tmp14(closure_6, obj10);
  const obj11 = { variant: "text-xs/semibold", color: "text-strong", children: node.service };
  items2[3] = tmp14(tmp2(5087).Text, obj11);
  const obj12 = { variant: "text-xs/normal", color: "text-default", style: tmp.operation, lineClamp: 1, children: node.operation };
  items2[4] = tmp14(tmp2(5087).Text, obj12);
  let tmp14Result4 = null;
  if (node.count > 1) {
    const obj13 = { style: tmp.badge, children: tmp14(Text, obj14) };
    const _HermesInternal = HermesInternal;
    obj14 = { variant: "text-xxs/semibold", color: "text-default", children: "\u00D7" + node.count };
    Text = tmp2(5087).Text;
    tmp14Result4 = tmp14(tmp10, obj13);
  }
  items2[5] = tmp14Result4;
  let tmp14Result5 = null;
  if (node.failed) {
    const obj15 = { size: "xs", color: selected(587).colors.STATUS_DANGER };
    const WarningIcon = tmp2(5004).WarningIcon;
    tmp14Result5 = tmp14(WarningIcon, obj15);
  }
  items2[6] = tmp14Result5;
  const obj16 = { variant: "text-xs/normal", color: "text-muted", children: tmp2Result.perfNodeDuration(node) };
  const Text2 = tmp2(5087).Text;
  tmp2Result = tmp2(17214);
  items2[7] = tmp14(Text2, obj16);
  items4 = [tmp6(closure_6, obj4), , ];
  const obj17 = { style: tmp.track, children: tmp14(closure_6, obj18) };
  obj18 = { style: items5 };
  items5 = [tmp.bar, running, ];
  const obj19 = { left: `${node.start / extent * 100}%`, width: `${(node.end - node.start) / extent * 100}%` };
  items5[2] = obj19;
  items4[1] = tmp14(closure_6, obj17);
  let tmp14Result6 = null;
  if (selected) {
    const obj20 = {
      style: items6,
      children: perfNodeSectionsResult.map((item) => {
          let items;
          let rows;
          let title;
          ({ title, rows } = item);
          let obj = { style: detail.detail, children: items };
          let tmp3 = null;
          let tmp = React4;
          let tmp2 = metroRequire;
          if (null != title) {
            let tmp4 = metroImportAll;
            let obj2 = { variant: "text-xs/semibold", color: "text-strong", children: title };
            tmp3 = metroImportAll(Text_Text.Text, obj2);
          }
          items = [
            tmp3,
            rows.map((label) => {
              let detailLine;
              let items;
              let tmp4;
              label = label.label;
              const value = label.value;
              const tmp = closure_2_9;
              const tmp2 = closure_2_6;
              if (label.block) {
                detailLine = tmp3.detailBlock;
                tmp4 = tmp3;
              } else {
                detailLine = tmp3.detailLine;
                tmp4 = tmp3;
              }
              const obj = { style: detailLine, children: items };
              items = [closure_2_8(node(dependencyMap[11]).Text, { variant: "text-xs/semibold", color: "text-muted", children: label }), ];
              const obj2 = { variant: "text-xs/normal", color: "text-default", style: tmp4.operation, selectable: true, children: value };
              items[1] = closure_2_8(node(dependencyMap[11]).Text, obj2);
              return tmp(tmp2, obj, label);
            })
          ];
          if (title == null) {
            title = "timing";
          }
          return tmp(tmp2, obj, title);
        })
    };
    items6 = [tmp.detail, ];
    items6[1] = { paddingLeft: node.depth * selected(587).space.PX_12 };
    const obj21 = { paddingLeft: node.depth * selected(587).space.PX_12 };
    const tmp2Result2 = tmp2(17214);
    perfNodeSectionsResult = tmp2Result2.perfNodeSections(node);
    tmp14Result6 = tmp14(tmp10, obj20);
  }
  items4[2] = tmp14Result6;
  return closure_9(closure_4, obj2);
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
        const ChevronSmallRightIcon = tmp(6899).ChevronSmallRightIcon;
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
                          cResult[40] = tmp4.row;
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
                    cResult[34] = tmp39;
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
          cResult[23] = tmp25;
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
  const fn = function v() {
    return onReveal(row.parentKey);
  };
  cResult[2] = onReveal;
  cResult[3] = row.parentKey;
  cResult[4] = fn;
  tmp8 = fn;
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
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraceStats(trace) {
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  trace = trace.trace;
  if (cResult[0] !== trace) {
    const tmpResult = ConjurePerfTraceStats;
    const perfTraceStatsResult = tmpResult.perfTraceStats(trace);
    cResult[0] = trace;
    cResult[1] = perfTraceStatsResult;
    tmp4 = perfTraceStatsResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { stats: tmp4 };
    const tmp9 = metroImportAll(ConjurePerfTraceStatsHeaderDefault, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function TraceStats(trace) {
  trace = trace.trace;
  const items = [trace];
  const stats = react.useMemo(() => {
    const obj = ConjurePerfTraceStats;
    return obj.perfTraceStats(trace);
  }, items);
  return closure_8(ConjurePerfTraceStatsHeaderDefault, { stats });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function Waterfall(trace) {
  let closure_0;
  let extent;
  let items;
  let items2;
  let tmp10;
  let tmp7;
  let tmpResult6;
  let obj = require("react");
  const cResult = obj.c(64);
  trace = trace.trace;
  const tmp4 = closure_11();
  let tmp5 = importDefault;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp6 = useConjurePerfTraceTreeDefault(trace);
  _require = tmp6;
  if (cResult[0] !== trace) {
    const tmpResult = require("ConjurePerfTraceLayout");
    const perfTraceExtentResult = tmpResult.perfTraceExtent(trace);
    cResult[0] = trace;
    cResult[1] = perfTraceExtentResult;
    tmp7 = perfTraceExtentResult;
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  const sum = nativeDefault.space.PX_16 + bottom;
  if (cResult[2] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[2] = sum;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.content) {
    let tmp11;
    let tmp12;
    let tmp14;
    let tmp17;
    let tmp19;
    let tmp22;
    let tmp26;
    if (cResult[5] === tmp10) {
      tmp11 = cResult[6];
    }
    const section = tmp4.section;
    if (cResult[7] !== trace) {
      const tmpResult4 = require("ConjurePerfTraceFormat");
      const perfTraceDurationResult = tmpResult4.perfTraceDuration(trace);
      cResult[7] = trace;
      cResult[8] = perfTraceDurationResult;
      tmp12 = perfTraceDurationResult;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      let obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp12 };
      const tmp16 = closure_8(require("Text/Text").Text, obj3);
      cResult[9] = tmp12;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    if (cResult[11] !== trace) {
      const tmpResult5 = require("ConjurePerfTraceFormat");
      const perfTraceSummaryResult = tmpResult5.perfTraceSummary(trace);
      cResult[11] = trace;
      cResult[12] = perfTraceSummaryResult;
      tmp17 = perfTraceSummaryResult;
    } else {
      tmp17 = cResult[12];
    }
    if (cResult[13] !== tmp17) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: tmp17 };
      const tmp21 = closure_8(require("Text/Text").Text, obj4);
      cResult[13] = tmp17;
      cResult[14] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[14];
    }
    if (cResult[15] !== trace.started_by) {
      let tmp23 = null;
      if (null != trace.started_by) {
        const _HermesInternal = HermesInternal;
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: "Started by " + trace.started_by.trace_name };
        const Text = tmp(5087).Text;
        tmp23 = closure_8(Text, obj5);
      }
      cResult[15] = trace.started_by;
      cResult[16] = tmp23;
      tmp22 = tmp23;
    } else {
      tmp22 = cResult[16];
    }
    if (cResult[17] !== trace.dropped) {
      let tmp27 = null;
      if (0 !== trace.dropped) {
        const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: "" + tmpResult6.formatSpanCount(trace.dropped) + " not recorded" };
        const Text2 = tmp(5087).Text;
        const _HermesInternal2 = HermesInternal;
        tmpResult6 = require("ConjurePerfTraceFormat");
        tmp27 = closure_8(Text2, obj6);
      }
      cResult[17] = trace.dropped;
      cResult[18] = tmp27;
      tmp26 = tmp27;
    } else {
      tmp26 = cResult[18];
    }
    if (cResult[19] === tmp4.section) {
      if (cResult[20] === tmp22) {
        if (cResult[21] === tmp26) {
          if (cResult[22] === tmp14) {
            let tmp30;
            let tmp34;
            let tmp38;
            let tmp41;
            let tmp44;
            if (cResult[23] === tmp19) {
              tmp30 = cResult[24];
            }
            if (cResult[25] !== trace) {
              const obj7 = { trace };
              const tmp37 = closure_8(closure_14, obj7);
              cResult[25] = trace;
              cResult[26] = tmp37;
              tmp34 = tmp37;
            } else {
              tmp34 = cResult[26];
            }
            if (cResult[27] !== tmp6.reset) {
              const obj8 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp6.reset };
              const tmp40 = closure_8(require("components/Button/Button").Button, obj8);
              cResult[27] = tmp6.reset;
              cResult[28] = tmp40;
              tmp38 = tmp40;
            } else {
              tmp38 = cResult[28];
            }
            if (cResult[29] !== tmp6.expandAll) {
              const obj9 = { size: "sm", variant: "secondary", text: "Expand all", onPress: tmp6.expandAll };
              const tmp43 = closure_8(require("components/Button/Button").Button, obj9);
              cResult[29] = tmp6.expandAll;
              cResult[30] = tmp43;
              tmp41 = tmp43;
            } else {
              tmp41 = cResult[30];
            }
            if (cResult[31] !== tmp6.collapseAll) {
              const obj10 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: tmp6.collapseAll };
              const tmp46 = closure_8(require("components/Button/Button").Button, obj10);
              cResult[31] = tmp6.collapseAll;
              cResult[32] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[32];
            }
            if (cResult[33] === tmp4.toolbar) {
              if (cResult[34] === tmp38) {
                if (cResult[35] === tmp41) {
                  let tmp47;
                  let tmp53;
                  let tmp56;
                  if (cResult[36] === tmp44) {
                    tmp47 = cResult[37];
                  }
                  const _Symbol = Symbol;
                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp55 = closure_8(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Long-press a span to expand everything under it." });
                    cResult[38] = tmp55;
                    tmp53 = tmp55;
                  } else {
                    tmp53 = cResult[38];
                  }
                  if (cResult[39] === tmp7) {
                    if (cResult[40] === tmp6.collapsed) {
                      if (cResult[41] === tmp6.expandSubtree) {
                        if (cResult[42] === tmp6.reveal) {
                          if (cResult[43] === tmp6.rows) {
                            if (cResult[44] === tmp6.select) {
                              if (cResult[45] === tmp6.selectedKey) {
                                let tmp59;
                                if (cResult[46] === tmp6.toggle) {
                                  tmp56 = cResult[47];
                                }
                                if (cResult[56] !== tmp56) {
                                  const obj11 = { children: tmp56 };
                                  cResult[56] = tmp56;
                                  const tmp62 = closure_8(closure_6, obj11);
                                  class K {
                                    constructor(arg0) {
                                      if ("node" === trace.kind) {
                                        tmp6 = jsx;
                                        tmp7 = WaterfallRow;
                                        obj1 = { node: null, extent: null, collapsed: null, selected: null, onSelect: null, onToggle: null, onExpandSubtree: null };
                                        obj1.node = trace.node;
                                        tmp8 = closure_1;
                                        obj1.extent = closure_1;
                                        tmp9 = closure_0;
                                        collapsed = closure_0.collapsed;
                                        obj1.collapsed = collapsed.has(trace.key);
                                        obj1.selected = trace.key === closure_0.selectedKey;
                                        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
                                        tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                      } else {
                                        tmp = jsx;
                                        tmp2 = SmallerRow;
                                        obj = { row: null, extent: null, onReveal: null };
                                        obj.row = trace;
                                        tmp3 = closure_1;
                                        obj.extent = closure_1;
                                        tmp4 = closure_0;
                                        obj.onReveal = closure_0.reveal;
                                        tmp5 = jsx(SmallerRow, obj, trace.key);
                                      }
                                      return tmp5;
                                    }
                                  }
                                  tmp59 = tmp62;
                                } else {
                                  tmp59 = cResult[57];
                                }
                                if (cResult[58] === tmp30) {
                                  if (cResult[59] === tmp34) {
                                    if (cResult[60] === tmp47) {
                                      if (cResult[61] === tmp59) {
                                        let tmp63;
                                        if (cResult[62] === tmp11) {
                                          tmp63 = cResult[63];
                                        }
                                        return tmp63;
                                      }
                                    }
                                  }
                                }
                                const obj12 = { contentContainerStyle: tmp11, children: items };
                                items = [, , , , ];
                                class K {
                                  constructor(arg0) {
                                    if ("node" === trace.kind) {
                                      tmp6 = jsx;
                                      tmp7 = WaterfallRow;
                                      obj1 = { node: null, extent: null, collapsed: null, selected: null, onSelect: null, onToggle: null, onExpandSubtree: null };
                                      obj1.node = trace.node;
                                      tmp8 = closure_1;
                                      obj1.extent = closure_1;
                                      tmp9 = closure_0;
                                      collapsed = closure_0.collapsed;
                                      obj1.collapsed = collapsed.has(trace.key);
                                      obj1.selected = trace.key === closure_0.selectedKey;
                                      ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
                                      tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                    } else {
                                      tmp = jsx;
                                      tmp2 = SmallerRow;
                                      obj = { row: null, extent: null, onReveal: null };
                                      obj.row = trace;
                                      tmp3 = closure_1;
                                      obj.extent = closure_1;
                                      tmp4 = closure_0;
                                      obj.onReveal = closure_0.reveal;
                                      tmp5 = jsx(SmallerRow, obj, trace.key);
                                    }
                                    return tmp5;
                                  }
                                }
                                items[1] = tmp34;
                                items[2] = tmp47;
                                items[3] = tmp53;
                                items[4] = tmp59;
                                const tmp66 = closure_9(closure_5, obj12);
                                cResult[58] = tmp30;
                                cResult[59] = tmp34;
                                cResult[60] = tmp47;
                                cResult[61] = tmp59;
                                cResult[62] = tmp11;
                                cResult[63] = tmp66;
                                tmp63 = tmp66;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (cResult[48] === tmp7) {
                    if (cResult[49] === tmp6.collapsed) {
                      if (cResult[50] === tmp6.expandSubtree) {
                        if (cResult[51] === tmp6.reveal) {
                          if (cResult[52] === tmp6.select) {
                            if (cResult[53] === tmp6.selectedKey) {
                              let tmp57;
                              if (cResult[54] === tmp6.toggle) {
                                tmp57 = cResult[55];
                              }
                              const rows = tmp6.rows;
                              const mapped = rows.map(tmp57);
                              cResult[39] = tmp7;
                              cResult[40] = tmp6.collapsed;
                              class K {
                                constructor(arg0) {
                                  if ("node" === trace.kind) {
                                    tmp6 = jsx;
                                    tmp7 = WaterfallRow;
                                    obj1 = { node: null, extent: null, collapsed: null, selected: null, onSelect: null, onToggle: null, onExpandSubtree: null };
                                    obj1.node = trace.node;
                                    tmp8 = closure_1;
                                    obj1.extent = closure_1;
                                    tmp9 = closure_0;
                                    collapsed = closure_0.collapsed;
                                    obj1.collapsed = collapsed.has(trace.key);
                                    obj1.selected = trace.key === closure_0.selectedKey;
                                    ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
                                    tmp5 = jsx(WaterfallRow, obj1, trace.key);
                                  } else {
                                    tmp = jsx;
                                    tmp2 = SmallerRow;
                                    obj = { row: null, extent: null, onReveal: null };
                                    obj.row = trace;
                                    tmp3 = closure_1;
                                    obj.extent = closure_1;
                                    tmp4 = closure_0;
                                    obj.onReveal = closure_0.reveal;
                                    tmp5 = jsx(SmallerRow, obj, trace.key);
                                  }
                                  return tmp5;
                                }
                              }
                              cResult[42] = tmp6.reveal;
                              cResult[43] = tmp6.rows;
                              cResult[44] = tmp6.select;
                              cResult[45] = tmp6.selectedKey;
                              cResult[46] = tmp6.toggle;
                              cResult[47] = mapped;
                              tmp56 = mapped;
                            }
                          }
                        }
                      }
                    }
                  }
                  class K {
                    constructor(arg0) {
                      if ("node" === trace.kind) {
                        tmp6 = jsx;
                        tmp7 = WaterfallRow;
                        obj1 = { node: null, extent: null, collapsed: null, selected: null, onSelect: null, onToggle: null, onExpandSubtree: null };
                        obj1.node = trace.node;
                        tmp8 = closure_1;
                        obj1.extent = closure_1;
                        tmp9 = closure_0;
                        collapsed = closure_0.collapsed;
                        obj1.collapsed = collapsed.has(trace.key);
                        obj1.selected = trace.key === closure_0.selectedKey;
                        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
                        tmp5 = jsx(WaterfallRow, obj1, trace.key);
                      } else {
                        tmp = jsx;
                        tmp2 = SmallerRow;
                        obj = { row: null, extent: null, onReveal: null };
                        obj.row = trace;
                        tmp3 = closure_1;
                        obj.extent = closure_1;
                        tmp4 = closure_0;
                        obj.onReveal = closure_0.reveal;
                        tmp5 = jsx(SmallerRow, obj, trace.key);
                      }
                      return tmp5;
                    }
                  }
                  cResult[48] = tmp7;
                  cResult[49] = tmp6.collapsed;
                  cResult[50] = tmp6.expandSubtree;
                  cResult[51] = tmp6.reveal;
                  cResult[52] = tmp6.select;
                  cResult[53] = tmp6.selectedKey;
                  cResult[54] = tmp6.toggle;
                  cResult[55] = K;
                  tmp57 = K;
                }
              }
            }
            tmp50[0] = tmp4.toolbar;
            const items1 = [tmp38, tmp41, tmp44];
            tmp50[1] = items1;
            const tmp51 = closure_9(closure_6, tmp50);
            cResult[33] = tmp4.toolbar;
            cResult[34] = tmp38;
            cResult[35] = tmp41;
            cResult[36] = tmp44;
            cResult[37] = tmp51;
            tmp47 = tmp51;
          }
        }
      }
    }
    const obj13 = { style: section, children: items2 };
    items2 = [tmp14, tmp19, tmp22, tmp26];
    const tmp33 = closure_9(closure_6, obj13);
    cResult[19] = tmp4.section;
    cResult[20] = tmp22;
    cResult[21] = tmp26;
    cResult[22] = tmp14;
    cResult[23] = tmp19;
    cResult[24] = tmp33;
    tmp30 = tmp33;
  }
  const items3 = [tmp4.content, tmp10];
  cResult[4] = tmp4.content;
  cResult[5] = tmp10;
  cResult[6] = items3;
  tmp11 = items3;
}) : (function Waterfall(trace) {
  let closure_0;
  let extent;
  let items;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj8;
  let rows;
  let tmp4Result;
  trace = trace.trace;
  const tmp = closure_11();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useConjurePerfTraceTreeDefault(trace);
  _require = tmp3;
  let obj = require("ConjurePerfTraceLayout");
  importDefault = obj.perfTraceExtent(trace);
  let tmp5 = closure_9;
  const obj2 = { contentContainerStyle: items, children: items2 };
  items = [tmp.content, ];
  let obj3 = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  items[1] = obj3;
  const obj4 = { style: tmp.section, children: items1 };
  const obj5 = { variant: "text-md/semibold", color: "text-strong", children: obj6.perfTraceDuration(trace) };
  const Text = require("Text/Text").Text;
  obj6 = require("ConjurePerfTraceFormat");
  items1 = [closure_8(Text, obj5), , , ];
  const obj7 = { variant: "text-sm/normal", color: "text-muted", children: obj8.perfTraceSummary(trace) };
  const Text2 = require("Text/Text").Text;
  obj8 = require("ConjurePerfTraceFormat");
  items1[1] = closure_8(Text2, obj7);
  let tmp8Result = null;
  const tmp6 = closure_5;
  if (null != trace.started_by) {
    const _HermesInternal = HermesInternal;
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: "Started by " + trace.started_by.trace_name };
    const Text3 = tmp4(5087).Text;
    tmp8Result = tmp8(Text3, obj9);
  }
  items1[2] = tmp8Result;
  let tmp8Result2 = null;
  if (0 !== trace.dropped) {
    const obj10 = { variant: "text-sm/normal", color: "text-feedback-warning", children: "" + tmp4Result.formatSpanCount(trace.dropped) + " not recorded" };
    const Text4 = tmp4(5087).Text;
    const _HermesInternal2 = HermesInternal;
    tmp4Result = require("ConjurePerfTraceFormat");
    tmp8Result2 = tmp8(Text4, obj10);
  }
  items1[3] = tmp8Result2;
  items2 = [tmp5(tmp7, obj4), tmp8(closure_14, { trace }), , , ];
  const obj11 = { style: tmp.toolbar, children: items3 };
  items3 = [, , ];
  const obj12 = { size: "sm", variant: "secondary", text: "Time sinks", onPress: tmp3.reset };
  items3[0] = closure_8(require("components/Button/Button").Button, obj12);
  const obj13 = { size: "sm", variant: "secondary", text: "Expand all", onPress: tmp3.expandAll };
  items3[1] = closure_8(require("components/Button/Button").Button, obj13);
  const obj14 = { size: "sm", variant: "secondary", text: "Collapse all", onPress: tmp3.collapseAll };
  items3[2] = closure_8(require("components/Button/Button").Button, obj14);
  items2[2] = tmp5(closure_6, obj11);
  items2[3] = closure_8(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Long-press a span to expand everything under it." });
  const obj15 = {
    children: rows.map((kind) => {
      let collapsed;
      let tmp5;
      if ("node" === kind.kind) {
        const obj3 = { node: kind.node, extent, collapsed: collapsed.has(kind.key), selected: kind.key === closure_0.selectedKey, onSelect: null, onToggle: null, onExpandSubtree: null };
        collapsed = closure_0.collapsed;
        ({ select: obj2.onSelect, toggle: obj2.onToggle, expandSubtree: obj2.onExpandSubtree } = closure_0);
        tmp5 = metroImportAll(closure_12, obj3, kind.key);
      } else {
        const obj = { row: kind, extent, onReveal: closure_0.reveal };
        tmp5 = metroImportAll(closure_13, obj, kind.key);
      }
      return tmp5;
    })
  };
  rows = tmp3.rows;
  items2[4] = closure_8(closure_6, obj15);
  return tmp5(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerfTraceScreen(projectId) {
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
        const tmp16 = closure_8(projectId(5087).Text, { variant: "text-sm/normal", color: "text-muted", children: "This trace is no longer available." });
        cResult[5] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[5];
      }
      tmp10 = tmp14;
    } else if (cResult[6] !== stateFromStores) {
      const obj2 = { trace: stateFromStores };
      const tmp13 = closure_8(closure_15, obj2);
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
    tmp6 = closure_8(tmp(5087).Text, { variant: "text-sm/normal", color: "text-muted", children: "This trace is no longer available." });
  } else {
    const obj2 = { trace: stateFromStores };
    tmp6 = closure_8(closure_15, obj2);
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
      const tmpResult2 = projectId(6205);
      const headerCloseButton = tmpResult2.getHeaderCloseButton(() => {
        const arr = traceId(dependencyMap[21]);
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
          const tmp17 = closure_8(projectId(10568).Modal, obj2);
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
      return metroImportAll(closure_16, obj);
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
  let obj = projectId(stateFromStores[19]);
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
        const arr = traceId(stateFromStores[21]);
        return arr.pop();
      }),
      render() {
        const obj = { projectId, traceId };
        return closure_2_8(closure_2_16, obj);
      }
    };
    obj[perf_trace] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items2);
  let obj2 = { initialRouteName: perf_trace, screens: memo };
  return closure_8(projectId(stateFromStores[22]).Modal, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceModal.tsx");

export default tmp5;
