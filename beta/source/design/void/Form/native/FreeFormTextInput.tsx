// Module ID: 6358
// Function ID: 6359
// Name: FreeFormTextInput
// Dependencies: [19, 17, 21, 4836, 576, 5435, 1115, 1177, 6359, 38, 2]

// Module 6358 (FreeFormTextInput)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Pressables from "Pressables" /* 5435 */;
import AssetRegistryDefault from "AssetRegistry" /* 6359 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function ClearButton(onPress) {
  let Icon;
  let intl;
  let obj2;
  onPress = onPress.onPress;
  const obj = { style: { borderRadius: 20, padding: 8 }, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.VkKicb), onPress, hitSlop: { top: 8, bottom: 8, right: 8 }, children: metroImportDefault(Icon, obj2) };
  const tmp = closure_9();
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  obj2 = { source: AssetRegistryDefault, style: tmp.closeIcon, size: native.Icon.Sizes.MEDIUM };
  Icon = native.Icon;
  return metroImportDefault(PressableOpacity, obj);
}
({ TouchableWithoutFeedback: closure_4, View: hasOwnProperty, TouchableOpacity: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, onPress: { flexDirection: "row" }, input: obj3, error: obj4, closeIcon: obj5, placeholder: { color: nativeDefault.colors.TEXT_MUTED } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, height: 48, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, paddingRight: 6, paddingLeft: 12, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8, flexShrink: 0 };
({ color: nativeDefault.colors.TEXT_MUTED });
let closure_9 = createStyles(obj);
const forwardRefResult = react.forwardRef((editable, ref) => {
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let closure_129_1;
  let closure_129_2;
  let error;
  let forceAccessibleContainer;
  let items1;
  let obj3;
  let onChangeText;
  let onPress;
  let renderLeadingComponent;
  let renderTrailingComponent;
  let str2;
  let str4;
  let style;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let value;
  ({ renderLeadingComponent, renderTrailingComponent, onChangeText } = editable);
  ({ onFocus: closure_129_1, onBlur: closure_129_2, value, onPress } = editable);
  let flag = editable.editable;
  ({ style, error, accessibilityRole } = editable);
  if (flag === undefined) {
    flag = true;
  }
  ({ accessibilityLabel, forceAccessibleContainer, accessibilityHint } = editable);
  if (forceAccessibleContainer === undefined) {
    forceAccessibleContainer = false;
  }
  let WITH_CONTENT = editable.clearButtonVisibility;
  if (WITH_CONTENT === undefined) {
    let tmp = require;
    WITH_CONTENT = native.ClearButtonVisibility.WITH_CONTENT;
  }
  const merged = Object.assign(editable, Object.assign({ style: 0, error: 0, renderLeadingComponent: 0, renderTrailingComponent: 0, onChangeText: 0, onFocus: 0, accessibilityRole: 0, onBlur: 0, value: 0, onPress: 0, editable: 0, accessibilityLabel: 0, accessibilityHint: 0, forceAccessibleContainer: 0, clearButtonVisibility: 0 }));
  const tmp4 = closure_9();
  ref = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref, () => ref.current);
  let flag2 = true;
  if (native.ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
    if (native.ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
      let tmp9 = null != value;
      if (tmp9) {
        tmp9 = "" !== value;
      }
      flag2 = tmp9;
    } else if (native.ClearButtonVisibility.NEVER === WITH_CONTENT) {
      flag2 = false;
    }
  }
  let tmp11 = null != onPress;
  const tmp10 = _modDef38;
  if (tmp11) {
    tmp11 = flag;
  }
  tmp10(!tmp11, "Cannot have an editable input w/ onPress handler");
  let items = [tmp4.container, , ];
  let error1 = null;
  if (error) {
    error1 = tmp4.error;
  }
  items[1] = error1;
  items[2] = style;
  const obj = {
    onPress() {
      const tmp = flag;
      if (tmp) {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
      if (onPress != null) {
        tmp5();
      }
    },
    style: tmp17,
    accessibilityRole: str2,
    accessible: forceAccessibleContainer,
    accessibilityLabel: tmp18,
    accessibilityValue: tmp19,
    accessibilityHint: tmp20,
    children: tmp21(tmp22, obj3)
  };
  tmp17 = null;
  const tmp16 = null != onPress ? metroRequire : React3;
  if (null != onPress) {
    tmp17 = items;
  }
  str2 = undefined;
  if (forceAccessibleContainer) {
    str2 = "button";
  }
  tmp18 = undefined;
  if (forceAccessibleContainer) {
    tmp18 = accessibilityLabel;
  }
  tmp19 = undefined;
  if (forceAccessibleContainer) {
    tmp19 = { text: value };
    const obj2 = { text: value };
  }
  tmp20 = undefined;
  if (forceAccessibleContainer) {
    tmp20 = accessibilityHint;
  }
  tmp21 = metroImportAll;
  tmp22 = hasOwnProperty;
  if (null != onPress) {
    items = tmp4.onPress;
  }
  let result;
  obj3 = { style: items, children: items1 };
  if (renderLeadingComponent != null) {
    result = renderLeadingComponent();
  }
  items1 = [result, , , ];
  let str3 = "auto";
  const TextInput = tmp7(1177).TextInput;
  if (null != onPress) {
    str3 = "none";
  }
  const obj4 = {
    pointerEvents: str3,
    accessibilityRole,
    accessibilityLabel,
    ref,
    editable: flag,
    style: tmp4.input,
    numberOfLines: 1,
    multiline: false,
    value,
    onChangeText,
    onFocus(arg0) {
      if (closure_1_1 != null) {
        tmp(arg0);
      }
    },
    onBlur(arg0) {
      if (closure_1_2 != null) {
        tmp(arg0);
      }
    },
    placeholderTextColor: tmp4.placeholder.color,
    clearButtonMode: "never",
    importantForAccessibility: str4,
    accessibilityElementsHidden: !flag
  };
  const merged1 = Object.assign(merged);
  str4 = "no-hide-descendants";
  if (flag) {
    str4 = "yes";
  }
  items1[1] = metroImportDefault(TextInput, obj4);
  let result1;
  if (renderTrailingComponent != null) {
    result1 = renderTrailingComponent();
  }
  items1[2] = result1;
  let tmp15Result = null;
  if (flag2) {
    const obj5 = {
      onPress() {
          let tmpResult;
          if (onChangeText != null) {
            tmpResult = tmp("");
          }
          return tmpResult;
        }
    };
    tmp15Result = tmp15(ClearButton, obj5);
  }
  items1[3] = tmp15Result;
  return metroImportDefault(tmp16, obj);
});
let result = size.fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default forwardRefResult;
