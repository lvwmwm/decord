// Module ID: 13950
// Function ID: 106017
// Name: MobileSearchableSelect
// Dependencies: [0, 0, 0, 0, 0, 771751956, 553648182, 788529152, 2399141942, 838860840, 2147483702]

// Module 13950 (MobileSearchableSelect)
import closure_2 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

class MobileSearchableSelect {
  constructor(arg0) {
    options = global.options;
    arg1 = options;
    value = global.value;
    dependencyMap = value;
    onChange = global.onChange;
    placeholder = global.placeholder;
    if (placeholder === undefined) {
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 6;
      intl = arg1(dependencyMap[6]).intl;
      placeholder = intl.string(arg1(dependencyMap[6]).t.XqMe3N);
    }
    flag = global.allowCustomValue;
    if (flag === undefined) {
      flag = false;
    }
    closure_3 = flag;
    flag2 = global.isDisabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    closure_4 = flag2;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    jsxs = undefined;
    closure_9 = undefined;
    intl = undefined;
    closure_11 = undefined;
    f106025 = undefined;
    tmp3 = closure_9();
    closure_5 = tmp3;
    str = "";
    tmp4 = closure_3;
    if (null != value) {
      str = value;
    }
    tmp5 = onChange(closure_3.useState(str), 2);
    first = tmp5[0];
    closure_6 = first;
    closure_7 = tmp5[1];
    tmp6 = onChange(closure_3.useState(false), 2);
    [tmp7, closure_8] = tmp6;
    tmp8 = onChange(closure_3.useState(false), 2);
    first1 = tmp8[0];
    closure_9 = first1;
    intl = tmp8[1];
    items = [, , ];
    items[0] = value;
    items[1] = first;
    items[2] = first1;
    effect = closure_3.useEffect(() => {
      let tmp = null == value;
      if (!tmp) {
        tmp = value === first;
      }
      if (!tmp) {
        tmp = first1;
      }
      if (!tmp) {
        callback(value);
      }
    }, items);
    items1 = [, , ];
    items1[0] = options;
    items1[1] = first;
    items1[2] = flag;
    memo = closure_3.useMemo(() => {
      const arr = function defaultFilter(options, first) {
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
      }(options, first);
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
    closure_11 = memo;
    items2 = [];
    items2[0] = options.length;
    items3 = [, ];
    items3[0] = first;
    items3[1] = onChange;
    callback = closure_3.useCallback((arg0) => {
      callback2(true);
      callback(arg0);
      let tmp4 = arg0.length > 0;
      if (!tmp4) {
        tmp4 = options.length > 0;
      }
      closure_8(tmp4);
    }, items2);
    items4 = [];
    items4[0] = onChange;
    callback1 = closure_3.useCallback(() => {
      if ("" !== first.trim()) {
        onChange(first);
        callback2(false);
        _undefined(false);
      }
    }, items3);
    f106025 = closure_3.useCallback((arg0) => {
      callback(arg0);
      onChange(arg0);
      callback2(false);
      _undefined(false);
    }, items4);
    items5 = [, ];
    items5[0] = first.length;
    items5[1] = options.length;
    callback2 = closure_3.useCallback(() => {
      let tmp2 = first.length > 0;
      if (!tmp2) {
        tmp2 = options.length > 0;
      }
      closure_8(tmp2);
    }, items5);
    obj = { style: { -77407381: true, -1399238308: true, 1565641825: true } };
    callback3 = closure_3.useCallback(() => {
      _undefined(false);
      callback2(false);
    }, []);
    tmp15 = jsxs;
    tmp16 = closure_4;
    obj = {};
    obj.placeholder = placeholder;
    obj.value = first;
    obj.onChange = callback;
    obj.onSubmitEditing = callback1;
    obj.onFocus = callback2;
    obj.onBlur = callback3;
    obj.leadingIcon = arg1(dependencyMap[8]).MagnifyingGlassIcon;
    obj.isClearable = true;
    obj.returnKeyType = "search";
    obj.accessibilityRole = "search";
    obj.autoCorrect = false;
    obj.autoCapitalize = "none";
    obj.isDisabled = flag2;
    items6 = [, ];
    items6[0] = closure_7(arg1(dependencyMap[7]).TextField, obj);
    if (tmp7) {
      tmp7 = memo.length > 0;
    }
    if (tmp7) {
      tmp17 = closure_7;
      tmp18 = closure_4;
      obj1 = {};
      obj1.style = tmp3.dropdownContainer;
      tmp19 = closure_7;
      tmp20 = closure_5;
      obj2 = { "Bool(true)": "14a4fdad987e2761599ba055042fdafa", "Bool(true)": "EyeSlashIcon", "Bool(true)": "png" };
      obj2.children = memo.map((children) => {
        const options = children;
        let obj = {};
        const items = [tmp3.dropdownItem, ];
        let dropdownItemLast = arg1 === memo.length - 1;
        if (dropdownItemLast) {
          dropdownItemLast = tmp3.dropdownItemLast;
        }
        items[1] = dropdownItemLast;
        obj.style = items;
        obj.activeOpacity = 0.7;
        obj.onPress = function onPress() {
          callback(arg0.value);
        };
        obj.disabled = flag2;
        obj = { style: tmp3.dropdownItemText, children: children.label };
        obj.children = callback(options(value[9]).Text, obj);
        return callback(first, obj, "option-" + children.value + "-" + arg1);
      });
      obj1.children = closure_7(closure_5, obj2);
      tmp7 = closure_7(closure_4, obj1);
    }
    items6[1] = tmp7;
    obj.children = items6;
    return tmp15(tmp16, obj);
  }
}
({ View: closure_4, ScrollView: closure_5, TouchableOpacity: closure_6 } = __exportStarResult1);
({ jsx: closure_7, jsxs: closure_8 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[5]).radii.md, marginTop: importDefault(dependencyMap[5]).space.PX_4, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { bhk: false, bic: false }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
__exportStarResult1.dropdownContainer = __exportStarResult1;
__exportStarResult1.dropdownItem = { padding: importDefault(dependencyMap[5]).space.PX_12, borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED };
__exportStarResult1.dropdownItemLast = { borderBottomWidth: 0 };
__exportStarResult1.dropdownItemText = { fontSize: 14 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const obj1 = { padding: importDefault(dependencyMap[5]).space.PX_12, borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default MobileSearchableSelect;
export { MobileSearchableSelect };
