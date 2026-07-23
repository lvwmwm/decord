// Module ID: 14074
// Function ID: 108245
// Name: MobileSearchableSelect
// Dependencies: [57, 31, 27, 33, 4130, 689, 1212, 5773, 5786, 4126, 2]

// Module 14074 (MobileSearchableSelect)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class MobileSearchableSelect {
  constructor(arg0) {
    options = global.options;
    value = global.value;
    closure_1 = value;
    onChange = global.onChange;
    placeholder = global.placeholder;
    if (placeholder === undefined) {
      tmp = options;
      tmp2 = closure_1;
      num = 6;
      intl = require("getSystemLocale").intl;
      placeholder = intl.string(require("getSystemLocale").t.XqMe3N);
    }
    flag = global.allowCustomValue;
    if (flag === undefined) {
      flag = false;
    }
    c3 = flag;
    flag2 = global.isDisabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c4 = flag2;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    useState = undefined;
    useState = undefined;
    intl = undefined;
    c11 = undefined;
    f108253 = undefined;
    tmp3 = useState();
    c5 = tmp3;
    str = "";
    tmp4 = c3;
    if (null != value) {
      str = value;
    }
    tmp5 = onChange(c3.useState(str), 2);
    first = tmp5[0];
    c6 = first;
    c7 = tmp5[1];
    tmp6 = onChange(c3.useState(false), 2);
    [tmp7, useState] = tmp6;
    tmp8 = onChange(c3.useState(false), 2);
    first1 = tmp8[0];
    useState = first1;
    intl = tmp8[1];
    items = [, , ];
    items[0] = value;
    items[1] = first;
    items[2] = first1;
    effect = c3.useEffect(() => {
      let tmp = null == closure_1;
      if (!tmp) {
        tmp = closure_1 === first;
      }
      if (!tmp) {
        tmp = first1;
      }
      if (!tmp) {
        callback(closure_1);
      }
    }, items);
    items1 = [, , ];
    items1[0] = options;
    items1[1] = first;
    items1[2] = flag;
    memo = c3.useMemo(() => {
      const arr = (function defaultFilter(options, first) {
        if ("" === first.trim()) {
          return options;
        } else {
          let closure_0 = first.toLowerCase();
          return options.filter((label) => {
            const formatted = label.label.toLowerCase();
            let hasItem = formatted.includes(closure_0);
            if (!hasItem) {
              const formatted1 = label.value.toLowerCase();
              hasItem = formatted1.includes(closure_0);
              const str2 = label.value;
            }
            return hasItem;
          });
        }
      })(options, first);
      let tmp = arr;
      if (flag) {
        tmp = arr;
        if (0 === arr.length) {
          tmp = arr;
          if ("" !== first.trim()) {
            const obj = { label: first.trim(), value: first.trim() };
            const items = [obj];
            tmp = items;
          }
        }
      }
      return tmp;
    }, items1);
    c11 = memo;
    items2 = [];
    items2[0] = options.length;
    items3 = [, ];
    items3[0] = first;
    items3[1] = onChange;
    callback = c3.useCallback((arg0) => {
      callback2(true);
      callback(arg0);
      let tmp4 = arg0.length > 0;
      if (!tmp4) {
        tmp4 = options.length > 0;
      }
      c8(tmp4);
    }, items2);
    items4 = [];
    items4[0] = onChange;
    callback1 = c3.useCallback(() => {
      if ("" !== first.trim()) {
        onChange(first);
        callback2(false);
        _undefined2(false);
      }
    }, items3);
    f108253 = c3.useCallback((arg0) => {
      callback(arg0);
      onChange(arg0);
      callback2(false);
      _undefined2(false);
    }, items4);
    items5 = [, ];
    items5[0] = first.length;
    items5[1] = options.length;
    callback2 = c3.useCallback(() => {
      let tmp2 = first.length > 0;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      c8(tmp2);
    }, items5);
    obj = { style: { position: "relative", zIndex: 100, overflow: "visible" } };
    callback3 = c3.useCallback(() => {
      _undefined2(false);
      callback2(false);
    }, []);
    tmp15 = useState;
    tmp16 = c4;
    obj = {};
    obj.placeholder = placeholder;
    obj.value = first;
    obj.onChange = callback;
    obj.onSubmitEditing = callback1;
    obj.onFocus = callback2;
    obj.onBlur = callback3;
    obj.leadingIcon = require("MagnifyingGlassIcon").MagnifyingGlassIcon;
    obj.isClearable = true;
    obj.returnKeyType = "search";
    obj.accessibilityRole = "search";
    obj.autoCorrect = false;
    obj.autoCapitalize = "none";
    obj.isDisabled = flag2;
    items6 = [, ];
    items6[0] = c7(require("TextField").TextField, obj);
    if (tmp7) {
      tmp7 = memo.length > 0;
    }
    if (tmp7) {
      tmp17 = c7;
      tmp18 = c4;
      obj1 = {};
      obj1.style = tmp3.dropdownContainer;
      tmp19 = c7;
      tmp20 = c5;
      obj2 = { nestedScrollEnabled: true, showsVerticalScrollIndicator: false, keyboardShouldPersistTaps: "handled" };
      obj2.children = memo.map((label) => {
        let closure_0 = label;
        let obj = {};
        const items = [_undefined.dropdownItem, ];
        let dropdownItemLast = arg1 === memo.length - 1;
        if (dropdownItemLast) {
          dropdownItemLast = _undefined.dropdownItemLast;
        }
        items[1] = dropdownItemLast;
        obj.style = items;
        obj.activeOpacity = 0.7;
        obj.onPress = function onPress() {
          outer1_12(label.value);
        };
        obj.disabled = flag2;
        obj = { variant: "text-sm/medium", color: "text-default", style: _undefined.dropdownItemText, children: label.label };
        obj.children = callback(options(value[9]).Text, obj);
        return callback(first, obj, "option-" + label.value + "-" + arg1);
      });
      obj1.children = c7(c5, obj2);
      tmp7 = c7(c4, obj1);
    }
    items6[1] = tmp7;
    obj.children = items6;
    return tmp15(tmp16, obj);
  }
}
({ View: closure_4, ScrollView: closure_5, TouchableOpacity: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
_createForOfIteratorHelperLoose.dropdownContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.dropdownItem = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.dropdownItemLast = { borderBottomWidth: 0 };
_createForOfIteratorHelperLoose.dropdownItemText = { fontSize: 14 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default MobileSearchableSelect;
export { MobileSearchableSelect };
