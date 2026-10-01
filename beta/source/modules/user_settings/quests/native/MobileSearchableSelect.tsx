// Module ID: 14709
// Function ID: 14710
// Name: MobileSearchableSelect
// Dependencies: [32, 19, 17, 21, 4836, 576, 1115, 6031, 6472, 4832, 2]

// Module 14709 (MobileSearchableSelect)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_12, dependencyMap;

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
    let c8;
    let items6;
    let obj5;
    let tmp16Result;
    let tmp6;
    options = options.options;
    let value = options.value;
    dependencyMap = value;
    const onChange = options.onChange;
    let placeholder = options.placeholder;
    if (placeholder === undefined) {
      let tmp = options;
      let tmp2 = dependencyMap;
      const intl = options(1115).intl;
      placeholder = intl.string(options(1115).t.XqMe3N);
    }
    let flag = options.allowCustomValue;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = options.isDisabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    value = undefined;
    let closure_7;
    c8 = undefined;
    let first1;
    let closure_10;
    let memo;
    closure_12 = undefined;
    let tmp3 = first1();
    const dropdownItem = tmp3;
    let obj = flag;
    let str = value;
    const useState = flag.useState;
    if (value == null) {
      str = "";
    }
    let tmp4 = onChange(useState(str), 2);
    value = tmp4[0];
    closure_7 = tmp4[1];
    [tmp6, c8] = onChange(obj.useState(false), 2);
    const tmp5 = onChange(obj.useState(false), 2);
    const tmp7 = onChange(obj.useState(false), 2);
    first1 = tmp7[0];
    closure_10 = tmp7[1];
    let items = [value, value, first1];
    const effect = obj.useEffect(() => {
      const tmp2 = null == dependencyMap || tmp === first || first1;
      if (!tmp2) {
        closure_7(dependencyMap);
      }
    }, items);
    const items1 = [options, value, flag];
    memo = obj.useMemo(() => {
      let str = first;
      let found = options;
      const arr = options;
      if ("" !== first.trim()) {
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
    const items3 = [value, onChange];
    const callback = obj.useCallback((arg0) => {
      closure_10(true);
      closure_7(arg0);
      let tmp4 = arg0.length > 0;
      const tmp3 = c8;
      if (!tmp4) {
        tmp4 = options.length > 0;
      }
      tmp3(tmp4);
    }, items2);
    const items4 = [onChange];
    const callback1 = obj.useCallback(() => {
      const tmp = first;
      if ("" !== first.trim()) {
        onChange(tmp);
        closure_10(false);
        _undefined(false);
      }
    }, items3);
    closure_12 = obj.useCallback((arg0) => {
      closure_7(arg0);
      onChange(arg0);
      closure_10(false);
      _undefined(false);
    }, items4);
    const items5 = [value.length, options.length];
    const callback2 = obj.useCallback(() => {
      let tmp2 = first.length > 0;
      const tmp = c8;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      tmp(tmp2);
    }, items5);
    let obj2 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: items6 };
    const callback3 = obj.useCallback(() => {
      _undefined(false);
      closure_10(false);
    }, []);
    const obj3 = { placeholder, value, onChange: callback, onSubmitEditing: callback1, onFocus: callback2, onBlur: callback3, leadingIcon: options(6472).MagnifyingGlassIcon, clearable: true, returnKeyType: "search", accessibilityRole: "search", autoCorrect: false, autoCapitalize: "none", disabled: flag2 };
    const TextField = options(6031).TextField;
    items6 = [closure_7(TextField, obj3), ];
    const tmp14 = c8;
    if (tmp16Result) {
      tmp16Result = memo.length > 0;
    }
    if (tmp16Result) {
      const obj4 = { style: tmp3.dropdownContainer, children: closure_7(dropdownItem, obj5) };
      obj5 = {
        nestedScrollEnabled: true,
        showsVerticalScrollIndicator: false,
        keyboardShouldPersistTaps: "handled",
        children: memo.map((children, index) => {
            let obj2;
            const items = [dropdownItem.dropdownItem, ];
            let dropdownItemLast = index === memo.length - 1;
            const tmp2 = first;
            if (dropdownItemLast) {
              dropdownItemLast = tmp3.dropdownItemLast;
            }
            items[1] = dropdownItemLast;
            const obj = {
              style: items,
              activeOpacity: 0.7,
              onPress() {
                closure_12(children.value);
              },
              disabled: flag2,
              children: closure_7(options(dependencyMap[9]).Text, obj2)
            };
            obj2 = { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label };
            return closure_7(tmp2, obj, "option-" + children.value + "-" + index);
          })
      };
      tmp16Result = tmp16(tmp15, obj4);
    }
    items6[1] = tmp16Result;
    return tmp14(flag2, obj2);
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
