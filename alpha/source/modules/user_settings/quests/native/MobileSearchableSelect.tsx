// Module ID: 16516
// Function ID: 16517
// Name: MobileSearchableSelect
// Dependencies: [32, 19, 17, 21, 4971, 587, 558, 576, 1128, 7145, 5234, 2]

// Module 16516 (MobileSearchableSelect)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { dropdownContainer: rect, dropdownItem: obj2, dropdownItemLast: { borderBottomWidth: 0 }, dropdownItemText: { fontSize: 14 } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, marginTop: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
createStyles = createStyles.createStyles;
obj2 = { padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileSearchableSelect(options) {
  let allowCustomValue;
  let disabled;
  let isDisabled;
  let items1;
  let obj7;
  let placeholder;
  let tmp14;
  let tmp17;
  let tmp4;
  let tmp = options;
  let tmp2 = dependencyMap;
  let obj = options(576);
  const cResult = obj.c(46);
  options = options.options;
  const value = options.value;
  dependencyMap = value;
  const onChange = options.onChange;
  ({ placeholder, allowCustomValue, isDisabled } = options);
  if (cResult[0] !== placeholder) {
    let stringResult = placeholder;
    if (undefined === placeholder) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.XqMe3N);
    }
    cResult[0] = placeholder;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = undefined !== allowCustomValue && allowCustomValue;
  let tmp7 = undefined !== isDisabled && isDisabled;
  react = tmp7;
  const tmp8 = closure_9();
  const dropdownItem = tmp8;
  let obj2 = react;
  react.useRef(null);
  const ref = react.useRef(false);
  let str = value;
  const useState = react.useState;
  if (value == null) {
    str = "";
  }
  const first = onChange(useState(str), 1)[0];
  let str2 = value;
  const useState2 = obj2.useState;
  if (value == null) {
    str2 = "";
  }
  const tmp10Result = onChange(useState2(str2), 2);
  const str3 = tmp10Result[0];
  let closure_8 = tmp10Result[1];
  [tmp14, closure_9] = onChange(obj2.useState(false), 2);
  onChange(obj2.useState(false), 2);
  const tmp10Result4 = onChange(obj2.useState(false), 2);
  const first1 = tmp10Result4[0];
  let closure_11 = tmp10Result4[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(arg0) {
      closure_6.current = true;
      const current = ref.current;
      const tmp = closure_6;
      if (current != null) {
        current.setText(arg0);
      }
      tmp.current = false;
      closure_8(arg0);
    };
    cResult[2] = fn;
    tmp17 = fn;
  } else {
    tmp17 = cResult[2];
  }
  let closure_12 = tmp17;
  if (cResult[3] === first1) {
    if (cResult[4] === str3) {
      let tmp18;
      let tmp19;
      if (cResult[5] === value) {
        tmp18 = cResult[6];
        tmp19 = cResult[7];
      }
      const effect = obj2.useEffect(tmp18, tmp19);
      if (cResult[8] === options) {
        let arr3;
        let tmp27;
        if (cResult[9] === str3) {
          arr3 = cResult[10];
        }
        let arr4 = arr3;
        if (tmp6) {
          arr4 = arr3;
          if (0 === arr3.length) {
            arr4 = arr3;
            if ("" !== str3.trim()) {
              let tmp22;
              let tmp24;
              if (cResult[11] !== str3) {
                const trimmed = str3.trim();
                cResult[11] = str3;
                cResult[12] = trimmed;
                tmp22 = trimmed;
              } else {
                tmp22 = cResult[12];
              }
              if (cResult[13] !== str3) {
                const trimmed1 = str3.trim();
                cResult[13] = str3;
                cResult[14] = trimmed1;
                tmp24 = trimmed1;
              } else {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp22) {
                let tmp26;
                if (cResult[16] === tmp24) {
                  tmp26 = cResult[17];
                }
                arr4 = tmp26;
              }
              let items = [{ label: tmp22, value: tmp24 }];
              const obj3 = { label: tmp22, value: tmp24 };
              cResult[15] = tmp22;
              cResult[16] = tmp24;
              cResult[17] = items;
              tmp26 = items;
            }
          }
        }
        if (cResult[18] !== options.length) {
          function ee(arg0) {
            if (!ref.current) {
              closure_11(true);
              closure_8(arg0);
              let tmp7 = arg0.length > 0;
              const tmp6 = closure_9;
              if (!tmp7) {
                tmp7 = options.length > 0;
              }
              tmp6(tmp7);
            }
          }
          cResult[18] = options.length;
          cResult[19] = ee;
          tmp27 = ee;
        } else {
          tmp27 = cResult[19];
        }
        if (cResult[20] === onChange) {
          let tmp28;
          let tmp29;
          if (cResult[21] === str3) {
            tmp28 = cResult[22];
          }
          if (cResult[23] !== onChange) {
            function ae(arg0) {
              closure_12(arg0);
              onChange(arg0);
              closure_11(false);
              closure_9(false);
            }
            cResult[23] = onChange;
            cResult[24] = ae;
            tmp29 = ae;
          } else {
            tmp29 = cResult[24];
          }
          let closure_14 = tmp29;
          if (cResult[25] === options.length) {
            let tmp30;
            let tmp31;
            let tmp32;
            if (cResult[26] === str3.length) {
              tmp30 = cResult[27];
            }
            const _Symbol = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              function de() {
                closure_9(false);
                closure_11(false);
              }
              cResult[28] = de;
              tmp31 = de;
            } else {
              tmp31 = cResult[28];
            }
            const _Symbol2 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { position: "relative", zIndex: 100, overflow: "visible" };
              cResult[29] = obj4;
              tmp32 = obj4;
            } else {
              tmp32 = cResult[29];
            }
            if (cResult[30] === tmp27) {
              if (cResult[31] === tmp30) {
                if (cResult[32] === tmp28) {
                  if (cResult[33] === first) {
                    if (cResult[34] === tmp7) {
                      let tmp33;
                      if (cResult[35] === tmp4) {
                        tmp33 = cResult[36];
                      }
                      if (cResult[37] === arr4) {
                        if (cResult[38] === tmp29) {
                          if (cResult[39] === tmp7) {
                            if (cResult[40] === tmp14) {
                              let tmp36;
                              if (cResult[41] === tmp8) {
                                tmp36 = cResult[42];
                              }
                              if (cResult[43] === tmp33) {
                                let tmp41;
                                if (cResult[44] === tmp36) {
                                  tmp41 = cResult[45];
                                }
                                return tmp41;
                              }
                              const obj5 = { style: tmp32, children: items1 };
                              items1 = [tmp33, tmp36];
                              const tmp44 = closure_8(dropdownItem, obj5);
                              cResult[43] = tmp33;
                              cResult[44] = tmp36;
                              cResult[45] = tmp44;
                              tmp41 = tmp44;
                            }
                          }
                        }
                      }
                      let tmp37 = tmp14 && arr4.length > 0;
                      if (tmp37) {
                        const obj6 = { style: tmp8.dropdownContainer, children: str3(ref, obj7) };
                        obj7 = {
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: false,
                          keyboardShouldPersistTaps: "handled",
                          children: arr4.map((children, index) => {
                                                  let obj2;
                                                  const items = [dropdownItem.dropdownItem, ];
                                                  let dropdownItemLast = index === arr4.length - 1;
                                                  const tmp2 = ref;
                                                  if (dropdownItemLast) {
                                                    dropdownItemLast = tmp3.dropdownItemLast;
                                                  }
                                                  items[1] = dropdownItemLast;
                                                  const obj = {
                                                    style: items,
                                                    activeOpacity: 0.7,
                                                    onPress() {
                                                      closure_14(children.value);
                                                    },
                                                    disabled,
                                                    children: str3(options(dependencyMap[10]).Text, obj2)
                                                  };
                                                  obj2 = { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label };
                                                  return str3(tmp2, obj, "option-" + children.value + "-" + index);
                                                })
                        };
                        tmp37 = str3(dropdownItem, obj6);
                      }
                      cResult[37] = arr4;
                      cResult[38] = tmp29;
                      cResult[39] = tmp7;
                      cResult[40] = tmp14;
                      cResult[41] = tmp8;
                      cResult[42] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                }
              }
            }
            const obj8 = { ref, placeholder: tmp4, defaultValue: first, onChange: tmp27, onSubmitEditing: tmp28, onFocus: tmp30, onBlur: tmp31, disabled: tmp7 };
            const tmp35 = str3(tmp(7145).SearchBar, obj8);
            cResult[30] = tmp27;
            cResult[31] = tmp30;
            cResult[32] = tmp28;
            cResult[33] = first;
            cResult[34] = tmp7;
            cResult[35] = tmp4;
            cResult[36] = tmp35;
            tmp33 = tmp35;
          }
          function ne() {
            let tmp2 = str3.length > 0;
            const tmp = closure_9;
            if (!tmp2) {
              tmp2 = options.length > 0;
            }
            tmp(tmp2);
          }
          cResult[25] = options.length;
          cResult[26] = str3.length;
          cResult[27] = ne;
          tmp30 = ne;
        }
        function le() {
          const tmp = str3;
          if ("" !== str3.trim()) {
            onChange(tmp);
            closure_11(false);
            closure_9(false);
          }
        }
        cResult[20] = onChange;
        cResult[21] = str3;
        cResult[22] = le;
        tmp28 = le;
      }
      let found = options;
      if ("" !== str3.trim()) {
        let closure_0 = str3.toLowerCase();
        found = options.filter((label) => {
          const str = label.label;
          const formatted = str.toLowerCase();
          let hasItem = formatted.includes(closure_0);
          const tmp = closure_0;
          if (!hasItem) {
            const str2 = label.value;
            const formatted1 = str2.toLowerCase();
            hasItem = formatted1.includes(tmp);
          }
          return hasItem;
        });
      }
      cResult[8] = options;
      cResult[9] = str3;
      cResult[10] = found;
      arr3 = found;
    }
  }
  class U {
    constructor() {
      const tmp2 = null == dependencyMap || tmp === str3 || first1;
      if (!tmp2) {
        closure_12(dependencyMap);
      }
    }
  }
  const items2 = [value, str3, first1, tmp17];
  cResult[3] = first1;
  cResult[4] = str3;
  cResult[5] = value;
  cResult[6] = U;
  cResult[7] = items2;
  tmp19 = items2;
  tmp18 = U;
}) : (function MobileSearchableSelect(options) {
  let _undefined;
  let c10;
  let items6;
  let obj4;
  let tmp20Result;
  let tmp9;
  options = options.options;
  const value = options.value;
  dependencyMap = value;
  const onChange = options.onChange;
  let placeholder = options.placeholder;
  if (placeholder === undefined) {
    let tmp = options;
    let tmp2 = dependencyMap;
    const intl = options(1128).intl;
    placeholder = intl.string(options(1128).t.XqMe3N);
  }
  let flag = options.allowCustomValue;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = options.isDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let first1;
  closure_9 = undefined;
  c10 = undefined;
  let first2;
  let closure_12;
  let callback;
  let memo;
  let closure_15;
  const tmp3 = closure_9();
  const dropdownItem = tmp3;
  let obj = flag;
  flag.useRef(null);
  const ref = flag.useRef(false);
  let str = value;
  const useState = flag.useState;
  if (value == null) {
    str = "";
  }
  let str2 = value;
  const first = onChange(useState(str), 1)[0];
  const useState2 = obj.useState;
  if (value == null) {
    str2 = "";
  }
  const tmp5Result = onChange(useState2(str2), 2);
  first1 = tmp5Result[0];
  closure_9 = tmp5Result[1];
  [tmp9, c10] = onChange(obj.useState(false), 2);
  onChange(obj.useState(false), 2);
  const tmp5Result4 = onChange(obj.useState(false), 2);
  first2 = tmp5Result4[0];
  closure_12 = tmp5Result4[1];
  callback = obj.useCallback((arg0) => {
    closure_7.current = true;
    const current = ref.current;
    const tmp = closure_7;
    if (current != null) {
      current.setText(arg0);
    }
    tmp.current = false;
    closure_9(arg0);
  }, []);
  let items = [value, first1, first2, callback];
  const effect = obj.useEffect(() => {
    const tmp2 = null == dependencyMap || tmp === first1 || first2;
    if (!tmp2) {
      callback(dependencyMap);
    }
  }, items);
  const items1 = [options, first1, flag];
  memo = obj.useMemo(() => {
    let str = first1;
    let found = options;
    const arr = options;
    if ("" !== first1.trim()) {
      let closure_0 = str.toLowerCase();
      found = arr.filter((label) => {
        const str = label.label;
        const formatted = str.toLowerCase();
        let hasItem = formatted.includes(closure_0);
        const tmp = closure_0;
        if (!hasItem) {
          const str2 = label.value;
          const formatted1 = str2.toLowerCase();
          hasItem = formatted1.includes(tmp);
        }
        return hasItem;
      });
    }
    let tmp = found;
    if (flag) {
      tmp = found;
      if (0 === found.length) {
        tmp = found;
        if ("" !== str.trim()) {
          const items = [{ label: str.trim(), value: str.trim() }];
          tmp = items;
          const obj = { label: str.trim(), value: str.trim() };
        }
      }
    }
    return tmp;
  }, items1);
  const items2 = [options.length];
  const items3 = [first1, onChange];
  const callback1 = obj.useCallback((arg0) => {
    if (!ref.current) {
      closure_12(true);
      closure_9(arg0);
      let tmp7 = arg0.length > 0;
      const tmp6 = c10;
      if (!tmp7) {
        tmp7 = options.length > 0;
      }
      tmp6(tmp7);
    }
  }, items2);
  const items4 = [onChange, callback];
  const callback2 = obj.useCallback(() => {
    const tmp = first1;
    if ("" !== first1.trim()) {
      onChange(tmp);
      closure_12(false);
      _undefined(false);
    }
  }, items3);
  closure_15 = obj.useCallback((arg0) => {
    callback(arg0);
    onChange(arg0);
    closure_12(false);
    _undefined(false);
  }, items4);
  const items5 = [first1.length, options.length];
  const callback3 = obj.useCallback(() => {
    let tmp2 = first1.length > 0;
    const tmp = c10;
    if (!tmp2) {
      tmp2 = options.length > 0;
    }
    tmp(tmp2);
  }, items5);
  let obj2 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: items6 };
  const callback4 = obj.useCallback(() => {
    _undefined(false);
    closure_12(false);
  }, []);
  items6 = [ref(options(7145).SearchBar, { ref, placeholder, defaultValue: first, onChange: callback1, onSubmitEditing: callback2, onFocus: callback3, onBlur: callback4, disabled: flag2 }), ];
  const tmp18 = first1;
  if (tmp20Result) {
    tmp20Result = memo.length > 0;
  }
  if (tmp20Result) {
    const obj3 = { style: tmp3.dropdownContainer, children: ref(dropdownItem, obj4) };
    obj4 = {
      nestedScrollEnabled: true,
      showsVerticalScrollIndicator: false,
      keyboardShouldPersistTaps: "handled",
      children: memo.map((children, index) => {
          let obj2;
          const items = [dropdownItem.dropdownItem, ];
          let dropdownItemLast = index === memo.length - 1;
          const tmp2 = ref;
          if (dropdownItemLast) {
            dropdownItemLast = tmp3.dropdownItemLast;
          }
          items[1] = dropdownItemLast;
          const obj = {
            style: items,
            activeOpacity: 0.7,
            onPress() {
              closure_15(children.value);
            },
            disabled: flag2,
            children: ref(options(dependencyMap[10]).Text, obj2)
          };
          obj2 = { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label };
          return ref(tmp2, obj, "option-" + children.value + "-" + index);
        })
    };
    tmp20Result = tmp20(tmp19, obj3);
  }
  items6[1] = tmp20Result;
  return tmp18(flag2, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default tmp5;
export const MobileSearchableSelect = tmp5;
