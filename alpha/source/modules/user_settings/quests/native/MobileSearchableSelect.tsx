// Module ID: 17081
// Function ID: 17082
// Name: MobileSearchableSelect
// Dependencies: [32, 19, 17, 21, 5009, 575, 1114, 7212, 5619, 2]

// Module 17081 (MobileSearchableSelect)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_9, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
class MobileSearchableSelect {
  constructor(options) {
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
      const intl = options(1114).intl;
      placeholder = intl.string(options(1114).t.XqMe3N);
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
    items6 = [ref(options(7212).SearchBar, { ref, placeholder, defaultValue: first, onChange: callback1, onSubmitEditing: callback2, onFocus: callback3, onBlur: callback4, disabled: flag2 }), ];
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
              children: ref(options(dependencyMap[8]).Text, obj2)
            };
            obj2 = { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label };
            return ref(tmp2, obj, "option-" + children.value + "-" + index);
          })
      };
      tmp20Result = tmp20(tmp19, obj3);
    }
    items6[1] = tmp20Result;
    return tmp18(flag2, obj2);
  }
}
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { dropdownContainer: rect, dropdownItem: obj2, dropdownItemLast: { borderBottomWidth: 0 }, dropdownItemText: { fontSize: 14 } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, marginTop: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
createStyles = createStyles.createStyles;
obj2 = { padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default MobileSearchableSelect;
export { MobileSearchableSelect };
