// Module ID: 17568
// Function ID: 17569
// Name: FavoritesGuildCleanupModal
// Dependencies: [19, 17, 21, 4971, 587, 6672, 558, 576, 1633, 17569, 5234, 1128, 3412, 7008, 6985, 6984, 5977, 5244, 6987, 11150, 5604, 17571, 6900, 2]

// Module 17568 (FavoritesGuildCleanupModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3412 from "module_3412" /* 3412 */;
import useChannelNameDefault from "useChannelName" /* 5604 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import TableRadioRow2 from "TableRadioRow" /* 6984 */;
import Modal from "Modal" /* 11150 */;
import useFavoritesCleanupActivityDefault from "useFavoritesCleanupActivity" /* 17571 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const TableCheckboxRow2 = tmp(6900);
function closeCleanup() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey("FavoritesGuildCleanupModal");
}
({ Keyboard: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroller: { flex: 1 }, content: { padding: nativeDefault.space.PX_16 }, actions: { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ padding: nativeDefault.space.PX_16 });
  ({ padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CleanupScreen() {
  let candidates;
  let closure_0;
  let first;
  let intl;
  let intl4;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items4;
  let loading;
  let obj19;
  let obj36;
  let stage;
  let str2;
  let stringResult;
  let tmp2 = loading;
  let obj = require("react");
  const cResult = obj.c(44);
  const tmp5 = closure_9(stage(loading[8])().bottom);
  const tmp6 = stage(loading[9])(closeCleanup);
  _require = tmp6;
  stage = tmp6.stage;
  loading = tmp6.loading;
  const container = tmp5.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/normal", children: intl.string(stage(tmp2[12]).DbeF7Y) };
    const Text = tmp(tmp2[10]).Text;
    intl = tmp(tmp2[11]).intl;
    const tmp9 = closure_6(Text, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp6) {
    if (cResult[2] === tmp6.selectedThreads.length) {
      if (cResult[3] === loading) {
        let tmp10;
        let tmp23;
        if (cResult[4] === stage) {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== tmp6.error) {
          let tmp24 = null;
          if (tmp6.error) {
            const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl9.string(stage(tmp2[12]).toOYQw) };
            const Text4 = tmp(tmp2[10]).Text;
            intl9 = tmp(tmp2[11]).intl;
            tmp24 = closure_6(Text4, obj3);
          }
          cResult[6] = tmp6.error;
          cResult[7] = tmp24;
          tmp23 = tmp24;
        } else {
          tmp23 = cResult[7];
        }
        if (cResult[8] === tmp10) {
          let tmp26;
          if (cResult[9] === tmp23) {
            tmp26 = cResult[10];
          }
          if (cResult[11] === tmp5.content) {
            if (cResult[12] === tmp5.scroller) {
              let tmp29;
              if (cResult[13] === tmp26) {
                tmp29 = cResult[14];
              }
              if (cResult[15] === tmp6.selectedThreads.length) {
                let tmp33;
                if (cResult[16] === stage) {
                  tmp33 = cResult[17];
                }
                let str4 = "primary";
                if ("review" === stage) {
                  str4 = "destructive";
                }
                let tmp35 = loading;
                if (!tmp35) {
                  let tmp36;
                  if ("filter" === stage) {
                    tmp36 = !tmp6.validDays;
                  } else {
                    tmp36 = 0 === length;
                  }
                  tmp35 = tmp36;
                }
                if (cResult[18] === tmp6) {
                  let tmp37;
                  if (cResult[19] === stage) {
                    tmp37 = cResult[20];
                  }
                  if (cResult[21] === loading) {
                    if (cResult[22] === tmp37) {
                      if (cResult[23] === tmp33) {
                        if (cResult[24] === str4) {
                          let tmp38;
                          let tmp42;
                          if (cResult[25] === tmp35) {
                            tmp38 = cResult[26];
                          }
                          if (cResult[27] !== stage) {
                            const intl10 = tmp(tmp2[11]).intl;
                            const string2 = intl10.string;
                            class E {
                              constructor() {
                                if ("filter" === stage) {
                                  const obj = ModalActionCreatorsDefault;
                                  obj.popWithKey("FavoritesGuildCleanupModal");
                                } else {
                                  closure_0.setStage("filter");
                                }
                              }
                            }
                            const string2Result = string2(tmp43);
                            cResult[27] = stage;
                            class I {
                              constructor() {
                                React3.dismiss();
                                if ("filter" === stage) {
                                  closure_0.review();
                                } else {
                                  closure_0.remove();
                                }
                              }
                            }
                            cResult[28] = string2Result;
                            tmp42 = string2Result;
                          } else {
                            tmp42 = cResult[28];
                          }
                          if (cResult[29] === tmp6) {
                            let tmp45;
                            if (cResult[30] === stage) {
                              tmp45 = cResult[31];
                            }
                            if (cResult[32] === loading) {
                              if (cResult[33] === tmp42) {
                                let tmp46;
                                if (cResult[34] === tmp45) {
                                  tmp46 = cResult[35];
                                }
                                if (cResult[36] === tmp5.actions) {
                                  if (cResult[37] === tmp38) {
                                    let tmp50;
                                    if (cResult[38] === tmp46) {
                                      tmp50 = cResult[39];
                                    }
                                    if (cResult[40] === tmp5.container) {
                                      if (cResult[41] === tmp50) {
                                        let tmp55;
                                        if (cResult[42] === tmp29) {
                                          tmp55 = cResult[43];
                                        }
                                        return tmp55;
                                      }
                                    }
                                    class E {
                                      constructor() {
                                        if ("filter" === stage) {
                                          const obj = ModalActionCreatorsDefault;
                                          obj.popWithKey("FavoritesGuildCleanupModal");
                                        } else {
                                          closure_0.setStage("filter");
                                        }
                                      }
                                    }
                                    tmp57[0] = container;
                                    let items = [tmp29, ];
                                    class I {
                                      constructor() {
                                        React3.dismiss();
                                        if ("filter" === stage) {
                                          closure_0.review();
                                        } else {
                                          closure_0.remove();
                                        }
                                      }
                                    }
                                    tmp57[2] = items;
                                    const tmp58 = closure_7(require("Stack/Stack").Stack, tmp57);
                                    cResult[40] = tmp5.container;
                                    cResult[41] = tmp50;
                                    cResult[42] = tmp29;
                                    cResult[43] = tmp58;
                                    tmp55 = tmp58;
                                  }
                                }
                                class E {
                                  constructor() {
                                    if ("filter" === stage) {
                                      const obj = ModalActionCreatorsDefault;
                                      obj.popWithKey("FavoritesGuildCleanupModal");
                                    } else {
                                      closure_0.setStage("filter");
                                    }
                                  }
                                }
                                tmp52[0] = tmp32;
                                const Stack3 = tmp(tmp2[16]).Stack;
                                tmp52[1] = stage(tmp2[4]).space.PX_8;
                                class I {
                                  constructor() {
                                    React3.dismiss();
                                    if ("filter" === stage) {
                                      closure_0.review();
                                    } else {
                                      closure_0.remove();
                                    }
                                  }
                                }
                                tmp53[0] = tmp38;
                                tmp53[1] = tmp46;
                                tmp52[2] = tmp53;
                                const tmp54 = closure_7(Stack3, tmp52);
                                cResult[36] = tmp5.actions;
                                cResult[37] = tmp38;
                                cResult[38] = tmp46;
                                cResult[39] = tmp54;
                                tmp50 = tmp54;
                              }
                            }
                            class E {
                              constructor() {
                                if ("filter" === stage) {
                                  const obj = ModalActionCreatorsDefault;
                                  obj.popWithKey("FavoritesGuildCleanupModal");
                                } else {
                                  closure_0.setStage("filter");
                                }
                              }
                            }
                            tmp48[0] = tmp42;
                            tmp48[2] = loading;
                            tmp48[3] = tmp45;
                            class I {
                              constructor() {
                                React3.dismiss();
                                if ("filter" === stage) {
                                  closure_0.review();
                                } else {
                                  closure_0.remove();
                                }
                              }
                            }
                            cResult[32] = loading;
                            cResult[33] = tmp42;
                            cResult[34] = tmp45;
                            cResult[35] = tmp49;
                            tmp46 = tmp49;
                          }
                          class E {
                            constructor() {
                              if ("filter" === stage) {
                                const obj = ModalActionCreatorsDefault;
                                obj.popWithKey("FavoritesGuildCleanupModal");
                              } else {
                                closure_0.setStage("filter");
                              }
                            }
                          }
                          cResult[29] = tmp6;
                          class I {
                            constructor() {
                              React3.dismiss();
                              if ("filter" === stage) {
                                closure_0.review();
                              } else {
                                closure_0.remove();
                              }
                            }
                          }
                          cResult[31] = E;
                          tmp45 = E;
                        }
                      }
                    }
                  }
                  tmp40[0] = tmp33;
                  tmp40[1] = str4;
                  tmp40[2] = tmp35;
                  class I {
                    constructor() {
                      React3.dismiss();
                      if ("filter" === stage) {
                        closure_0.review();
                      } else {
                        closure_0.remove();
                      }
                    }
                  }
                  tmp40[4] = tmp37;
                  const tmp41 = closure_6(require("components/Button/Button").Button, tmp40);
                  cResult[21] = loading;
                  cResult[22] = tmp37;
                  cResult[23] = tmp33;
                  cResult[24] = str4;
                  cResult[25] = tmp35;
                  cResult[26] = tmp41;
                  tmp38 = tmp41;
                }
                class I {
                  constructor() {
                    React3.dismiss();
                    if ("filter" === stage) {
                      closure_0.review();
                    } else {
                      closure_0.remove();
                    }
                  }
                }
                cResult[18] = tmp6;
                cResult[19] = stage;
                cResult[20] = I;
                tmp37 = I;
              }
              cResult[15] = tmp6.selectedThreads.length;
              cResult[17] = tmp34;
              tmp33 = tmp34;
            }
          }
          const obj4 = { style: null, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
          ({ scroller: obj17.style, content: obj17.contentContainerStyle } = tmp5);
          const tmp31 = closure_6(closure_5, obj4);
          cResult[11] = tmp5.content;
          cResult[12] = tmp5.scroller;
          cResult[13] = tmp26;
          cResult[14] = tmp31;
          tmp29 = tmp31;
        }
        const obj5 = { spacing: stage(tmp2[4]).space.PX_16, children: tmp27 };
        const Stack2 = tmp(tmp2[16]).Stack;
        tmp27[0] = first;
        tmp27[1] = tmp10;
        tmp27[2] = tmp23;
        const tmp28 = closure_7(Stack2, obj5);
        cResult[8] = tmp10;
        cResult[9] = tmp23;
        cResult[10] = tmp28;
        tmp26 = tmp28;
      }
    }
  }
  const tmp12 = closure_8;
  if ("filter" === stage) {
    const obj6 = { label: obj11.string(stage(tmp2[12]).VheZQr), value: tmp6.days, onChange: null, keyboardType: "number-pad", maxLength: 5, disabled: loading, errorMessage: stringResult };
    const TextInput = tmp(tmp2[13]).TextInput;
    class E {
      constructor() {
        if ("filter" === stage) {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey("FavoritesGuildCleanupModal");
        } else {
          closure_0.setStage("filter");
        }
      }
    }
    class I {
      constructor() {
        React3.dismiss();
        if ("filter" === stage) {
          closure_0.review();
        } else {
          closure_0.remove();
        }
      }
    }
    stringResult = undefined;
    if ("" !== tmp6.days) {
      if (!tmp6.validDays) {
        const intl6 = tmp(tmp2[11]).intl;
        stringResult = intl6.string(tmp4(tmp2[12])["wT+K51"]);
      }
    }
    const items1 = [closure_6(TextInput, obj6), ];
    const obj7 = {
      title: intl7.string(stage(tmp2[12]).KIzpqi),
      hasIcons: false,
      value: str2,
      onChange(arg0) {
          let tmp2 = null;
          const setCategoryId = closure_0.setCategoryId;
          if ("all" !== arg0) {
            tmp2 = arg0;
          }
          return setCategoryId(tmp2);
        },
      children: items2
    };
    const TableRadioGroup = tmp(tmp2[14]).TableRadioGroup;
    intl7 = tmp(tmp2[11]).intl;
    str2 = tmp6.categoryId;
    if (str2 == null) {
      str2 = "all";
    }
    const obj8 = { children: items1 };
    const obj9 = { label: intl8.string(stage(tmp2[12])["gOUr+P"]), value: "all", disabled: loading };
    const TableRadioRow = tmp(tmp2[15]).TableRadioRow;
    intl8 = tmp(tmp2[11]).intl;
    items2 = [closure_6(TableRadioRow, obj9), ];
    const categories = tmp6.categories;
    items2[1] = categories.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: loading };
      return metroRequire(TableRadioRow2.TableRadioRow, obj, label.id);
    });
    items1[1] = closure_7(TableRadioGroup, obj7);
    obj36 = obj8;
  } else {
    let tmp59Result;
    const obj10 = { variant: "text-sm/medium", accessibilityLiveRegion: "polite", children: null };
    const Text5 = tmp(tmp2[10]).Text;
    class E {
      constructor() {
        if ("filter" === stage) {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey("FavoritesGuildCleanupModal");
        } else {
          closure_0.setStage("filter");
        }
      }
    }
    const format = tmp60.format;
    class I {
      constructor() {
        React3.dismiss();
        if ("filter" === stage) {
          closure_0.review();
        } else {
          closure_0.remove();
        }
      }
    }
    const items3 = [closure_6(Text5, obj10), , ];
    if (tmp6.candidates.length > 0) {
      const obj13 = { spacing: stage(tmp2[4]).space.PX_8, children: items4 };
      const Stack = tmp(tmp2[16]).Stack;
      class E {
        constructor() {
          if ("filter" === stage) {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey("FavoritesGuildCleanupModal");
          } else {
            closure_0.setStage("filter");
          }
        }
      }
      const intl3 = tmp(tmp2[11]).intl;
      const string = intl3.string;
      const allSelected = tmp6.allSelected;
      class I {
        constructor() {
          React3.dismiss();
          if ("filter" === stage) {
            closure_0.review();
          } else {
            closure_0.remove();
          }
        }
      }
      const obj14 = { text: string(allSelected ? tmp16.AX7Fmc : tmp16.ZuaHVJ), variant: "tertiary", size: "sm", disabled: loading, onPress: tmp6.toggleSelection };
      items4 = [closure_6(tmp15, obj14), ];
      const obj15 = {
        title: intl4.string(stage(tmp2[12]).wPednI),
        hasIcons: false,
        children: candidates.map((channel) => {
              let selectedIds;
              const obj = {
                channel,
                checked: selectedIds.includes(channel.id),
                disabled: loading,
                onChange(arg0) {
                  let id;
                  channel = arg0;
                  return channel.setSelectedIds((arr) => {
                    let found;
                    const tmp2 = id;
                    if (tmp2) {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, arr, 0)] = id.id;
                      found = items;
                    } else {
                      found = arr.filter((item) => item !== id.id);
                    }
                    return found;
                  });
                }
              };
              selectedIds = channel.selectedIds;
              return closure_1_6(closure_1_12, obj, channel.id);
            })
      };
      const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
      intl4 = tmp(tmp2[11]).intl;
      candidates = tmp6.candidates;
      items4[1] = closure_6(TableRowGroup, obj15);
      tmp59Result = tmp11(Stack, obj13);
    } else {
      const obj16 = { variant: "text-md/normal", children: tmp13(stage(tmp2[12])["4KOdCv"]) };
      const Text2 = tmp(tmp2[10]).Text;
      const intl2 = tmp(tmp2[11]).intl;
      class E {
        constructor() {
          if ("filter" === stage) {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey("FavoritesGuildCleanupModal");
          } else {
            closure_0.setStage("filter");
          }
        }
      }
      tmp59Result = tmp59(Text2, obj16);
    }
    items3[1] = tmp59Result;
    if (tmp6.unknownCount > 0) {
      ({ variant: "text-sm/normal", children: tmp18(stage(tmp2[12])["rM/wWh"], obj19) });
      const Text3 = tmp(tmp2[10]).Text;
      const intl5 = tmp(tmp2[11]).intl;
      class E {
        constructor() {
          if ("filter" === stage) {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey("FavoritesGuildCleanupModal");
          } else {
            closure_0.setStage("filter");
          }
        }
      }
      obj19 = { count: tmp6.unknownCount };
      class I {
        constructor() {
          React3.dismiss();
          if ("filter" === stage) {
            closure_0.review();
          } else {
            closure_0.remove();
          }
        }
      }
    }
    obj36 = { children: items3 };
    items3[2] = null;
  }
  const tmp11Result2 = closure_7(tmp12, obj36);
  cResult[1] = tmp6;
  cResult[2] = tmp6.selectedThreads.length;
  cResult[3] = loading;
  cResult[4] = stage;
  cResult[5] = tmp11Result2;
  tmp10 = tmp11Result2;
}) : (function CleanupScreen() {
  let Stack2;
  let candidates;
  let closure_0;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items;
  let items2;
  let items4;
  let items5;
  let items6;
  let loading;
  let obj10;
  let obj17;
  let obj3;
  let stage;
  let str2;
  let str3;
  let stringResult;
  let stringResult1;
  let tmp14;
  let tmp19;
  let tmp2 = loading;
  const tmp3 = closure_9(stage(loading[8])().bottom);
  const tmp4 = stage(loading[9])(closeCleanup);
  _require = tmp4;
  stage = tmp4.stage;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: items5 };
  const obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: closure_7(Stack2, obj3) };
  const Stack = require("Stack/Stack").Stack;
  obj3 = { spacing: stage(loading[4]).space.PX_16, children: items };
  Stack2 = require("Stack/Stack").Stack;
  const obj4 = { variant: "text-md/normal", children: intl.string(stage(loading[12]).DbeF7Y) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_6(Text, obj4), , ];
  const obj5 = { children: null };
  const tmp8 = closure_5;
  const tmp9 = closure_8;
  if ("filter" === stage) {
    const obj6 = { label: intl7.string(stage(tmp2[12]).VheZQr), value: null, onChange: null, keyboardType: "number-pad", maxLength: 5, disabled: loading, errorMessage: stringResult };
    const TextInput = tmp6(tmp2[13]).TextInput;
    intl7 = tmp6(tmp2[11]).intl;
    ({ days: obj14.value, setDays: obj14.onChange } = tmp4);
    stringResult = undefined;
    if ("" !== tmp4.days) {
      if (!tmp4.validDays) {
        const intl8 = tmp6(tmp2[11]).intl;
        stringResult = intl8.string(tmp(tmp2[12])["wT+K51"]);
      }
    }
    const items1 = [closure_6(TextInput, obj6), ];
    const obj7 = {
      title: intl9.string(stage(tmp2[12]).KIzpqi),
      hasIcons: false,
      value: str2,
      onChange(arg0) {
          let tmp2 = null;
          const setCategoryId = closure_0.setCategoryId;
          if ("all" !== arg0) {
            tmp2 = arg0;
          }
          return setCategoryId(tmp2);
        },
      children: items2
    };
    const TableRadioGroup = tmp6(tmp2[14]).TableRadioGroup;
    intl9 = tmp6(tmp2[11]).intl;
    str2 = tmp4.categoryId;
    if (str2 == null) {
      str2 = "all";
    }
    const obj8 = { label: intl10.string(stage(tmp2[12])["gOUr+P"]), value: "all", disabled: loading };
    const TableRadioRow = tmp6(tmp2[15]).TableRadioRow;
    intl10 = tmp6(tmp2[11]).intl;
    items2 = [closure_6(TableRadioRow, obj8), ];
    const categories = tmp4.categories;
    items2[1] = categories.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: loading };
      return metroRequire(TableRadioRow2.TableRadioRow, obj, label.id);
    });
    items1[1] = closure_7(TableRadioGroup, obj7);
    obj5.children = items1;
    tmp14 = obj5;
  } else {
    let tmp7Result2;
    const obj9 = { variant: "text-sm/medium", accessibilityLiveRegion: "polite", children: intl2.format(stage(tmp2[12]).kdvwuo, obj10) };
    const Text2 = tmp6(tmp2[10]).Text;
    intl2 = tmp6(tmp2[11]).intl;
    obj10 = { count: tmp4.selectedThreads.length };
    const items3 = [closure_6(Text2, obj9), , ];
    if (tmp4.candidates.length > 0) {
      const obj11 = { spacing: stage(tmp2[4]).space.PX_8, children: items4 };
      const Stack3 = tmp6(tmp2[16]).Stack;
      const Button = tmp6(tmp2[17]).Button;
      const intl4 = tmp6(tmp2[11]).intl;
      const string = intl4.string;
      const allSelected = tmp4.allSelected;
      const tmpResult = stage(tmp2[12]);
      const obj12 = { text: string(allSelected ? tmpResult.AX7Fmc : tmpResult.ZuaHVJ), variant: "tertiary", size: "sm", disabled: loading, onPress: tmp4.toggleSelection };
      items4 = [closure_6(Button, obj12), ];
      const obj13 = {
        title: intl5.string(stage(tmp2[12]).wPednI),
        hasIcons: false,
        children: candidates.map((channel) => {
              let selectedIds;
              const obj = {
                channel,
                checked: selectedIds.includes(channel.id),
                disabled: loading,
                onChange(arg0) {
                  let id;
                  channel = arg0;
                  return channel.setSelectedIds((arr) => {
                    let found;
                    const tmp2 = id;
                    if (tmp2) {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, arr, 0)] = id.id;
                      found = items;
                    } else {
                      found = arr.filter((item) => item !== id.id);
                    }
                    return found;
                  });
                }
              };
              selectedIds = channel.selectedIds;
              return closure_1_6(closure_1_12, obj, channel.id);
            })
      };
      const TableRowGroup = tmp6(tmp2[18]).TableRowGroup;
      intl5 = tmp6(tmp2[11]).intl;
      candidates = tmp4.candidates;
      items4[1] = closure_6(TableRowGroup, obj13);
      tmp7Result2 = tmp5(Stack3, obj11);
    } else {
      const obj15 = { variant: "text-md/normal", children: intl3.string(stage(tmp2[12])["4KOdCv"]) };
      const Text3 = tmp6(tmp2[10]).Text;
      intl3 = tmp6(tmp2[11]).intl;
      tmp7Result2 = tmp7(Text3, obj15);
    }
    items3[1] = tmp7Result2;
    let tmp7Result = null;
    if (tmp4.unknownCount > 0) {
      const obj16 = { variant: "text-sm/normal", children: intl6.format(stage(tmp2[12])["rM/wWh"], obj17) };
      const Text4 = tmp6(tmp2[10]).Text;
      intl6 = tmp6(tmp2[11]).intl;
      obj17 = { count: tmp4.unknownCount };
      tmp7Result = tmp7(Text4, obj16);
    }
    items3[2] = tmp7Result;
    obj5.children = items3;
    tmp14 = obj5;
  }
  items[1] = closure_7(tmp9, tmp14);
  let tmp7Result3 = null;
  if (tmp4.error) {
    const obj18 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl11.string(stage(tmp2[12]).toOYQw) };
    const Text5 = tmp6(tmp2[10]).Text;
    intl11 = tmp6(tmp2[11]).intl;
    tmp7Result3 = tmp7(Text5, obj18);
  }
  items[2] = tmp7Result3;
  items5 = [closure_6(tmp8, obj2), ];
  const obj19 = { style: tmp3.actions, spacing: stage(tmp2[4]).space.PX_8, children: items6 };
  const Stack4 = tmp6(tmp2[16]).Stack;
  const Button2 = tmp6(tmp2[17]).Button;
  const intl12 = tmp6(tmp2[11]).intl;
  if ("filter" === stage) {
    stringResult1 = intl12.string(tmp(tmp2[12]).zAljrZ);
  } else {
    const obj20 = { count: tmp4.selectedThreads.length };
    stringResult1 = intl12.formatToPlainString(tmp(tmp2[12]).jiqJtj, obj20);
  }
  const obj21 = {
    text: stringResult1,
    variant: str3,
    disabled: tmp19,
    loading,
    onPress() {
      React3.dismiss();
      if ("filter" === stage) {
        closure_0.review();
      } else {
        closure_0.remove();
      }
    }
  };
  str3 = "primary";
  if ("review" === stage) {
    str3 = "destructive";
  }
  tmp19 = loading;
  if (!tmp19) {
    let tmp20;
    if ("filter" === stage) {
      tmp20 = !tmp4.validDays;
    } else {
      tmp20 = 0 === length;
    }
    tmp19 = tmp20;
  }
  items6 = [closure_6(Button2, obj21), ];
  const Button3 = tmp6(tmp2[17]).Button;
  const intl13 = tmp6(tmp2[11]).intl;
  const string2 = intl13.string;
  const t = tmp6(tmp2[11]).t;
  const obj41 = {
    text: string2("filter" === stage ? t["ETE/oC"] : t["13/7kX"]),
    variant: "secondary",
    disabled: loading,
    onPress() {
      if ("filter" === stage) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey("FavoritesGuildCleanupModal");
      } else {
        closure_0.setStage("filter");
      }
    }
  };
  items6[1] = closure_6(Button3, obj41);
  items5[1] = closure_7(Stack4, obj19);
  return closure_7(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildCleanupModal() {
  let first;
  let intl;
  let obj3;
  let onPress;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cleanup: obj3 };
    obj3 = {
      title: intl.string(_modDef3412["b081B+"]),
      headerLeft() {
          let intl;
          const obj = { text: intl.string(require("intl").t["ETE/oC"]), size: "sm", variant: "tertiary", onPress };
          const Button = require("components/Button/Button").Button;
          intl = require("intl").intl;
          return closure_1_6(Button, obj);
        },
      render() {
          return closure_1_6(closure_1_11, {});
        }
    };
    intl = tmp(1128).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { screens: first, initialRouteName: "cleanup" };
    const tmp8 = metroRequire(Modal.Modal, obj4);
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function FavoritesGuildCleanupModal() {
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let onPress;
    let obj = { cleanup: obj2 };
    obj2 = {
      title: intl.string(_modDef3412["b081B+"]),
      headerLeft() {
        let intl;
        const obj = { text: intl.string(closure_1_0(closure_1_2[11]).t["ETE/oC"]), size: "sm", variant: "tertiary", onPress };
        const Button = closure_1_0(closure_1_2[17]).Button;
        intl = closure_1_0(closure_1_2[11]).intl;
        return closure_1_6(Button, obj);
      },
      render() {
        return closure_1_6(closure_1_11, {});
      }
    };
    intl = require("intl").intl;
    return obj;
  }, []);
  return metroRequire(Modal.Modal, { screens, initialRouteName: "cleanup" });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function CleanupCandidateRow(arg0) {
  let channel;
  let checked;
  let disabled;
  let onChange;
  const obj = react2;
  const cResult = obj.c(6);
  ({ channel, checked, disabled, onChange } = arg0);
  const tmp4 = useChannelNameDefault(channel);
  const tmp5 = useFavoritesCleanupActivityDefault(channel);
  let str = tmp4;
  if (tmp4 == null) {
    str = "";
  }
  if (cResult[0] === tmp5) {
    if (cResult[1] === checked) {
      if (cResult[2] === disabled) {
        if (cResult[3] === onChange) {
          let tmp6;
          if (cResult[4] === str) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
    }
  }
  const tmp7 = metroRequire(TableCheckboxRow2.TableCheckboxRow, { label: str, subLabel: tmp5, checked, disabled, onPress: onChange });
  cResult[0] = tmp5;
  cResult[1] = checked;
  cResult[2] = disabled;
  cResult[3] = onChange;
  cResult[4] = str;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : (function CleanupCandidateRow(channel) {
  let checked;
  let disabled;
  let onChange;
  channel = channel.channel;
  ({ checked, disabled, onChange } = channel);
  const tmp = useChannelNameDefault(channel);
  const subLabel = useFavoritesCleanupActivityDefault(channel);
  let label = tmp;
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  const tmp3 = metroRequire;
  if (tmp == null) {
    label = "";
  }
  return tmp3(TableCheckboxRow, { label, subLabel, checked, disabled, onPress });
});
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx");

export default tmp4;
