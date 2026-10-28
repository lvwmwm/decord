// Module ID: 10731
// Function ID: 10732
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 4878, 6736, 21, 5004, 587, 558, 576, 10732, 7382, 504, 1125, 3863, 5246, 7284, 5270, 5280, 7257, 7020, 7021, 5305, 7334, 2]

// Module 10731 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import TableRadioRow from "TableRadioRow" /* 7020 */;
import ConjureRemix from "ConjureRemix" /* 10732 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 4878 */;
import SortedGuildStore_mod from "SortedGuildStore" /* 6736 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let GuildStore = GuildStore_mod;
let SortedGuildStore = SortedGuildStore_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
let closure_12 = createStyles.createStyles((paddingBottom) => {
  let obj2;
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: obj2, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: { gap: nativeDefault.space.PX_16 } };
  obj2 = { paddingBottom };
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_16 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemixSheet(project) {
  let closure_4;
  let closure_6;
  let first1;
  let flattenedGuildIds;
  let footer;
  let footerBody;
  let guild;
  let items1;
  let list;
  let obj5;
  let onRemixed;
  let scroll;
  let tmp11;
  let tmp9;
  let value;
  let tmp = project;
  let tmp2 = onRemixed;
  let obj = project(onRemixed[10]);
  const cResult = obj.c(54);
  project = project.project;
  const currentGuildId = project.currentGuildId;
  onRemixed = project.onRemixed;
  let obj2 = first1;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  let tmp8 = _slicedToArray(first1.useState(null), 2);
  [tmp9, GuildStore] = tmp8;
  let tmp10 = _slicedToArray(first1.useState(0), 2);
  [tmp11, SortedGuildStore] = tmp10;
  const tmp12 = _slicedToArray(first1.useState(0), 2);
  let closure_9 = tmp12[1];
  const tmp13 = closure_12(tmp12[0]);
  let closure_10 = first1.useRef(null);
  if (cResult[0] === currentGuildId) {
    let tmp14;
    if (cResult[1] === project) {
      tmp14 = cResult[2];
    }
    if (cResult[3] === tmp11) {
      if (cResult[4] === currentGuildId) {
        let tmp15;
        let tmp19;
        let tmp18;
        let tmp22;
        let tmp26;
        if (cResult[5] === project) {
          tmp15 = cResult[6];
        }
        const effect = obj2.useEffect(tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SortedGuildStore, ];
          items[1] = GuildStore;
          const fn2 = function x() {
            const items = [];
            SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
            const tmp2 = SortedGuildStore[Symbol.iterator]();
            while (tmp2 !== undefined) {
              GuildStore = GuildStore.getGuild(tmp3);
              let tmp6 = GuildStore;
              let result = null != GuildStore;
              if (result) {
                let obj = project(onRemixed[12]);
                result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
              }
              if (result) {
                let arr = items.push(tmp6);
              }
              continue;
            }
            return items;
          };
          cResult[7] = items;
          cResult[8] = fn2;
          tmp19 = fn2;
          tmp18 = items;
        } else {
          tmp18 = cResult[7];
          tmp19 = cResult[8];
        }
        const tmpResult = tmp(tmp2[13]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp18, tmp19);
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[14]).intl;
          let tmp23 = currentGuildId;
          const stringResult = intl.string(currentGuildId(tmp2[15])["maL0+X"]);
          cResult[9] = stringResult;
          tmp22 = stringResult;
        } else {
          tmp22 = cResult[9];
        }
        if (cResult[10] === value) {
          let tmp25;
          if (cResult[11] === stateFromStoresArray) {
            tmp25 = cResult[12];
          }
          let closure_11 = tmp25;
          if (cResult[15] === value) {
            if (cResult[16] === tmp25) {
              if (cResult[17] === onRemixed) {
                let tmp28;
                let tmp30;
                let tmp31;
                let tmp34;
                let tmp38;
                let tmp42;
                if (cResult[18] === first1) {
                  tmp28 = cResult[19];
                }
                closure_12 = tmp28;
                const _Symbol3 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  function te(nativeEvent) {
                    closure_9(nativeEvent.nativeEvent.layout.height);
                  }
                  cResult[20] = te;
                  tmp30 = te;
                } else {
                  tmp30 = cResult[20];
                }
                const _Symbol4 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj3 = { title: tmp22 };
                  const tmp33 = closure_9(tmp(tmp2[17]).BottomSheetTitleHeader, obj3);
                  cResult[21] = tmp33;
                  tmp31 = tmp33;
                } else {
                  tmp31 = cResult[21];
                }
                ({ footer, footerBody } = tmp13);
                if (cResult[22] !== tmp9) {
                  let tmp35 = null;
                  if (null != tmp9) {
                    let obj4 = { accessibilityRole: "alert", children: closure_9(tmp(tmp2[18]).Text, obj5) };
                    obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp9 };
                    tmp35 = closure_9(closure_6, obj4);
                  }
                  cResult[22] = tmp9;
                  cResult[23] = tmp35;
                  tmp34 = tmp35;
                } else {
                  tmp34 = cResult[23];
                }
                const _Symbol5 = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(tmp2[14]).intl;
                  let tmp39 = currentGuildId;
                  const stringResult1 = intl2.string(currentGuildId(tmp2[15]).XWgAfc);
                  cResult[24] = stringResult1;
                  tmp38 = stringResult1;
                } else {
                  tmp38 = cResult[24];
                }
                if (cResult[25] !== tmp28) {
                  function ce() {
                    const promise = closure_12();
                    promise.catch(() => {

                    });
                  }
                  cResult[25] = tmp28;
                  cResult[26] = ce;
                  tmp42 = ce;
                } else {
                  tmp42 = cResult[26];
                }
                if (cResult[27] === first1) {
                  if (cResult[28] === !tmp25) {
                    let tmp43;
                    if (cResult[29] === tmp42) {
                      tmp43 = cResult[30];
                    }
                    if (cResult[31] === tmp13.footerBody) {
                      if (cResult[32] === tmp34) {
                        let tmp46;
                        if (cResult[33] === tmp43) {
                          tmp46 = cResult[34];
                        }
                        if (cResult[35] === tmp13.footer) {
                          let tmp49;
                          let tmp53;
                          let tmp55;
                          if (cResult[36] === tmp46) {
                            tmp49 = cResult[37];
                          }
                          const _Symbol6 = Symbol;
                          ({ scroll, list } = tmp13);
                          if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                            function fe(arg0) {
                              return closure_4(arg0);
                            }
                            cResult[38] = fe;
                            tmp53 = fe;
                          } else {
                            tmp53 = cResult[38];
                          }
                          if (cResult[39] === stateFromStoresArray) {
                            let tmp54;
                            if (cResult[40] === first1) {
                              tmp54 = cResult[41];
                            }
                            if (cResult[44] === value) {
                              let tmp57;
                              if (cResult[45] === tmp54) {
                                tmp57 = cResult[46];
                              }
                              if (cResult[47] === tmp13.list) {
                                if (cResult[48] === tmp13.scroll) {
                                  let tmp60;
                                  if (cResult[49] === tmp57) {
                                    tmp60 = cResult[50];
                                  }
                                  if (cResult[51] === tmp49) {
                                    let tmp63;
                                    if (cResult[52] === tmp60) {
                                      tmp63 = cResult[53];
                                    }
                                    return tmp63;
                                  }
                                  let obj6 = { scrollable: true, header: tmp31, footer: tmp49, children: tmp60 };
                                  const tmp65 = closure_9(tmp(tmp2[24]).ActionSheet, obj6);
                                  cResult[51] = tmp49;
                                  cResult[52] = tmp60;
                                  cResult[53] = tmp65;
                                  tmp63 = tmp65;
                                }
                              }
                              const obj7 = { style: scroll, contentContainerStyle: list, children: tmp57 };
                              const tmp62 = closure_9(tmp(tmp2[23]).BottomSheetScrollView, obj7);
                              cResult[47] = tmp13.list;
                              cResult[48] = tmp13.scroll;
                              cResult[49] = tmp57;
                              cResult[50] = tmp62;
                              tmp60 = tmp62;
                            }
                            const obj8 = { hasIcons: false, value, onChange: tmp53, accessibilityLabel: tmp22, children: tmp54 };
                            const tmp59 = closure_9(tmp(tmp2[22]).TableRadioGroup, obj8);
                            cResult[44] = value;
                            cResult[45] = tmp54;
                            cResult[46] = tmp59;
                            tmp57 = tmp59;
                          }
                          if (cResult[42] !== first1) {
                            function ve(label) {
                              const obj = { label: label.name, value: label.id, disabled: first1 };
                              return React4(TableRadioRow.TableRadioRow, obj, label.id);
                            }
                            cResult[42] = first1;
                            cResult[43] = ve;
                            tmp55 = ve;
                          } else {
                            tmp55 = cResult[43];
                          }
                          const mapped = stateFromStoresArray.map(tmp55);
                          cResult[39] = stateFromStoresArray;
                          cResult[40] = first1;
                          cResult[41] = mapped;
                          tmp54 = mapped;
                        }
                        const obj9 = { style: footer, onLayout: tmp30, children: tmp46 };
                        const tmp52 = closure_9(closure_6, obj9);
                        cResult[35] = tmp13.footer;
                        cResult[36] = tmp46;
                        cResult[37] = tmp52;
                        tmp49 = tmp52;
                      }
                    }
                    const obj10 = { bottom: true, style: footerBody, children: items1 };
                    items1 = [tmp34, tmp43];
                    const tmp48 = closure_10(tmp(tmp2[20]).SafeAreaPaddingView, obj10);
                    cResult[31] = tmp13.footerBody;
                    cResult[32] = tmp34;
                    cResult[33] = tmp43;
                    cResult[34] = tmp48;
                    tmp46 = tmp48;
                  }
                }
                const obj11 = { variant: "primary", size: "md", text: tmp38, loading: first1, disabled: !tmp25, onPress: tmp42 };
                const tmp45 = closure_9(tmp(tmp2[19]).Button, obj11);
                cResult[27] = first1;
                cResult[28] = !tmp25;
                cResult[29] = tmp42;
                cResult[30] = tmp45;
                tmp43 = tmp45;
              }
            }
          }
          let closure_0 = value(function*(arg0, value) {
            let v1;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let tmp;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_1 = tmp4;
                    tmp = undefined;
                    const tmp39 = first1;
                    if (!tmp39) {
                      const tmp23 = closure_1_11;
                      if (tmp23) {
                        if (null != ref.current) {
                          closure_1_6(true);
                          guild(null);
                          const current = tmp24.current;
                          c2 = 1;
                          c3 = 1;
                          const obj4 = { value: current.open(c3), done: false };
                          return obj4;
                        }
                      }
                    }
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  tmp = value;
                  if (tmp.ok) {
                    const obj = currentGuildId(onRemixed[16]);
                    obj.hideActionSheet(closure_2_11);
                    c2(tmp.projectId, tmp.guildId);
                    c3 = 3;
                    const obj6 = { value: undefined, done: true };
                    return obj6;
                  } else {
                    guild(tmp.message);
                    if (!tmp.kept) {
                      flattenedGuildIds((arg0) => arg0 + 1);
                    }
                    closure_1_6(false);
                  }
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp31) {
                c3 = 3;
                throw tmp31;
              }
            }
          });
          function t7() {
            return closure_0(...arguments);
          }
          cResult[15] = value;
          cResult[16] = tmp25;
          cResult[17] = onRemixed;
          cResult[18] = first1;
          cResult[19] = t7;
          tmp28 = t7;
        }
        if (cResult[13] !== value) {
          class Q {
            constructor(id) {
              return id.id === first;
            }
          }
          cResult[13] = value;
          cResult[14] = Q;
          tmp26 = Q;
        } else {
          class Q {
            constructor(id) {
              return id.id === first;
            }
          }
        }
        const someResult = stateFromStoresArray.some(tmp26);
        cResult[10] = value;
        cResult[11] = stateFromStoresArray;
        cResult[12] = someResult;
        tmp25 = someResult;
      }
    }
    const items2 = [project, currentGuildId, tmp11];
    cResult[3] = tmp11;
    cResult[4] = currentGuildId;
    cResult[5] = project;
    cResult[6] = items2;
    tmp15 = items2;
  }
  const fn = function y() {
    const obj = ConjureRemix;
    const prepareConjureRemixResult = obj.prepareConjureRemix(project, currentGuildId);
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  };
  cResult[0] = currentGuildId;
  cResult[1] = project;
  cResult[2] = fn;
  tmp14 = fn;
}) : (function ConjureRemixSheet(project) {
  let BottomSheetScrollView;
  let SafeAreaPaddingView;
  let TableRadioGroup;
  let c7;
  let c8;
  let closure_4;
  let closure_6;
  let first1;
  let intl2;
  let items3;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let tmp20;
  let tmp6;
  let tmp8;
  let value;
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  value = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  [tmp6, c7] = _slicedToArray(first1.useState(null), 2);
  const tmp5 = _slicedToArray(first1.useState(null), 2);
  [tmp8, c8] = _slicedToArray(first1.useState(0), 2);
  const tmp7 = _slicedToArray(first1.useState(0), 2);
  let tmp9 = _slicedToArray(first1.useState(0), 2);
  let closure_9 = tmp9[1];
  let tmp10 = closure_12(tmp9[0]);
  let closure_10 = first1.useRef(null);
  let items = [project, currentGuildId, tmp8];
  const effect = first1.useEffect(() => {
    const obj = ConjureRemix;
    const prepareConjureRemixResult = obj.prepareConjureRemix(project, currentGuildId);
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  let obj = project(onRemixed[13]);
  const items1 = [c8, c7];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(onRemixed[14]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[15])["maL0+X"]);
  const someResult = stateFromStoresArray.some((id) => id.id === first);
  let c11 = someResult;
  const items2 = [value, someResult, onRemixed, first1];
  closure_12 = first1.useCallback(value(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            const tmp39 = first1;
            if (!tmp39) {
              const tmp23 = c11;
              if (tmp23) {
                if (null != ref.current) {
                  closure_6(true);
                  guild(null);
                  const current = tmp24.current;
                  onRemixed = 1;
                  c3 = 1;
                  const obj4 = { value: current.open(first), done: false };
                  return obj4;
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          tmp = value;
          if (tmp.ok) {
            const obj = tmp4(onRemixed[16]);
            obj.hideActionSheet(closure_1_11);
            closure_129_2(tmp.projectId, tmp.guildId);
            c3 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            closure_129_7(tmp.message);
            if (!tmp.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp31) {
        c3 = 3;
        throw tmp31;
      }
    }
  }), items2);
  const callback = first1.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = { scrollable: true, header: closure_9(project(onRemixed[17]).BottomSheetTitleHeader, { title: stringResult }), footer: closure_9(tmp19, obj3), children: closure_9(BottomSheetScrollView, obj8) };
  const ActionSheet = project(onRemixed[24]).ActionSheet;
  obj3 = { style: tmp10.footer, onLayout: callback, children: tmp20(SafeAreaPaddingView, obj4) };
  obj4 = { bottom: true, style: tmp10.footerBody, children: items3 };
  let tmp18Result = null;
  SafeAreaPaddingView = project(onRemixed[20]).SafeAreaPaddingView;
  const tmp14 = currentGuildId;
  tmp20 = closure_10;
  if (null != tmp6) {
    let obj5 = { accessibilityRole: "alert", children: closure_9(tmp12(tmp13[18]).Text, obj6) };
    obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp6 };
    tmp18Result = tmp18(tmp19, obj5);
  }
  items3 = [tmp18Result, ];
  const obj7 = {
    variant: "primary",
    size: "md",
    text: intl2.string(tmp14(onRemixed[15]).XWgAfc),
    loading: first1,
    disabled: !someResult,
    onPress() {
      const promise = closure_12();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp12(tmp13[19]).Button;
  intl2 = tmp12(tmp13[14]).intl;
  items3[1] = closure_9(Button, obj7);
  obj8 = { style: tmp10.scroll, contentContainerStyle: tmp10.list, children: closure_9(TableRadioGroup, obj9) };
  BottomSheetScrollView = tmp12(tmp13[23]).BottomSheetScrollView;
  obj9 = {
    hasIcons: false,
    value,
    onChange(arg0) {
      return closure_4(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: first1 };
      return React4(TableRadioRow.TableRadioRow, obj, label.id);
    })
  };
  TableRadioGroup = tmp12(tmp13[22]).TableRadioGroup;
  return closure_9(ActionSheet, obj2);
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default tmp3;
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
