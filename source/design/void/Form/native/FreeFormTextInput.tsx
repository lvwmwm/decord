// Module ID: 9041
// Function ID: 71092
// Name: ClearButton
// Dependencies: [31, 27, 33, 4130, 689, 4660, 1212, 1273, 9042, 44, 2]

// Module 9041 (ClearButton)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ClearButton(onPress) {
  let obj = { style: { borderRadius: 20, padding: 8 }, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  obj = { source: importDefault(9042), style: callback2().closeIcon, size: require(1273) /* Button */.Icon.Sizes.MEDIUM };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
({ TouchableWithoutFeedback: closure_4, View: closure_5, TouchableOpacity: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, height: 48, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingRight: 6, paddingLeft: 12, flexDirection: "row", alignItems: "center" };
obj.container = obj;
obj.onPress = { flexDirection: "row" };
_createForOfIteratorHelperLoose = { flex: 1, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.input = _createForOfIteratorHelperLoose;
obj.error = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, paddingLeft: 8, flexShrink: 0 };
obj.closeIcon = obj3;
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
obj.placeholder = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const forwardRefResult = importAllResult.forwardRef((editable) => {
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let dependencyMap;
  let error;
  let forceAccessibleContainer;
  let importDefault;
  let onChangeText;
  let onPress;
  let renderLeadingComponent;
  let renderTrailingComponent;
  let style;
  let value;
  ({ renderLeadingComponent, renderTrailingComponent, onChangeText } = editable);
  ({ onFocus: importDefault, onBlur: dependencyMap, value, onPress } = editable);
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
    WITH_CONTENT = onChangeText(1273).ClearButtonVisibility.WITH_CONTENT;
  }
  let obj = { style: 0, error: 0, renderLeadingComponent: 0, renderTrailingComponent: 0, onChangeText: 0, onFocus: 0, accessibilityRole: 0, onBlur: 0, value: 0, onPress: 0, editable: 0, accessibilityLabel: 0, accessibilityHint: 0, forceAccessibleContainer: 0, clearButtonVisibility: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(editable, obj);
  let ref;
  const tmp5 = callback2();
  ref = onPress.useRef(null);
  const imperativeHandle = onPress.useImperativeHandle(arg1, () => ref.current);
  let flag2 = true;
  if (onChangeText(1273).ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
    if (onChangeText(1273).ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
      let tmp12 = null != value;
      if (tmp12) {
        tmp12 = "" !== value;
      }
      flag2 = tmp12;
    } else if (onChangeText(1273).ClearButtonVisibility.NEVER === WITH_CONTENT) {
      flag2 = false;
    }
  }
  let tmp14 = null != onPress;
  if (tmp14) {
    tmp14 = flag;
  }
  importDefault(44)(!tmp14, "Cannot have an editable input w/ onPress handler");
  let items = [tmp5.container, , ];
  error = null;
  if (error) {
    error = tmp5.error;
  }
  items[1] = error;
  items[2] = style;
  obj = {
    onPress() {
      if (flag) {
        const current = ref.current;
        if (null != current) {
          current.focus();
        }
      }
      if (null != onPress) {
        onPress();
      }
    }
  };
  let tmp20 = null;
  if (null != onPress) {
    tmp20 = items;
  }
  obj.style = tmp20;
  let str2;
  if (forceAccessibleContainer) {
    str2 = "button";
  }
  obj.accessibilityRole = str2;
  obj.accessible = forceAccessibleContainer;
  let tmp21;
  if (forceAccessibleContainer) {
    tmp21 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp21;
  let tmp22;
  if (forceAccessibleContainer) {
    obj = { text: value };
    tmp22 = obj;
  }
  obj.accessibilityValue = tmp22;
  let tmp23;
  if (forceAccessibleContainer) {
    tmp23 = accessibilityHint;
  }
  obj.accessibilityHint = tmp23;
  const obj1 = {};
  if (null != onPress) {
    items = tmp5.onPress;
  }
  obj1.style = items;
  let result;
  if (null != renderLeadingComponent) {
    result = renderLeadingComponent();
  }
  const items1 = [result, , , ];
  const obj2 = {};
  let str3 = "auto";
  if (null != onPress) {
    str3 = "none";
  }
  obj2.pointerEvents = str3;
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.ref = ref;
  obj2.editable = flag;
  obj2.style = tmp5.input;
  obj2.numberOfLines = 1;
  obj2.multiline = false;
  obj2.value = value;
  obj2.onChangeText = onChangeText;
  obj2.onFocus = function onFocus(arg0) {
    if (null != callback) {
      callback(arg0);
    }
  };
  obj2.onBlur = function onBlur(arg0) {
    if (null != callback2) {
      callback2(arg0);
    }
  };
  obj2.placeholderTextColor = tmp5.placeholder.color;
  obj2.clearButtonMode = "never";
  const merged1 = Object.assign(merged);
  let str4 = "no-hide-descendants";
  if (flag) {
    str4 = "yes";
  }
  obj2["importantForAccessibility"] = str4;
  obj2["accessibilityElementsHidden"] = !flag;
  items1[1] = callback(onChangeText(1273).TextInput, obj2);
  let result1;
  if (null != renderTrailingComponent) {
    result1 = renderTrailingComponent();
  }
  items1[2] = result1;
  let tmp30 = null;
  if (flag2) {
    const obj3 = {
      onPress() {
          let tmp;
          if (null != onChangeText) {
            tmp = onChangeText("");
          }
          return tmp;
        }
    };
    tmp30 = callback(ClearButton, obj3);
  }
  items1[3] = tmp30;
  obj1.children = items1;
  obj.children = closure_8(ref, obj1);
  return callback(null != onPress ? closure_6 : flag, obj);
});
let result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default forwardRefResult;
