// Module ID: 8994
// Function ID: 70823
// Name: ClearButton
// Dependencies: []

// Module 8994 (ClearButton)
function ClearButton(onPress) {
  let obj = { style: { "057": "<string:410124289>", UPVOTE: "<string:402653184>" }, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[6]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = {};
  obj = { source: importDefault(dependencyMap[8]), style: callback2().closeIcon, size: arg1(dependencyMap[7]).Icon.Sizes.MEDIUM };
  obj.children = callback(arg1(dependencyMap[7]).Icon, obj);
  return callback(arg1(dependencyMap[5]).PressableOpacity, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ TouchableWithoutFeedback: closure_4, View: closure_5, TouchableOpacity: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.container = obj;
obj.onPress = { flexDirection: "row" };
obj1 = { flex: 1, color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.input = obj1;
const tmp3 = arg1(dependencyMap[2]);
obj.error = { borderColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
const obj2 = { borderColor: importDefault(dependencyMap[4]).unsafe_rawColors.RED_400 };
obj.closeIcon = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj3 = { tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.placeholder = { color: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
let closure_9 = obj1.createStyles(obj);
const obj4 = { color: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
const forwardRefResult = importAllResult.forwardRef((editable) => {
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let error;
  let forceAccessibleContainer;
  let onChangeText;
  let onPress;
  let renderLeadingComponent;
  let renderTrailingComponent;
  let style;
  let value;
  ({ renderLeadingComponent, renderTrailingComponent, onChangeText } = editable);
  const arg1 = onChangeText;
  ({ onFocus: closure_1, onBlur: closure_2, value, onPress } = editable);
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
    WITH_CONTENT = arg1(dependencyMap[7]).ClearButtonVisibility.WITH_CONTENT;
  }
  let obj = { "Bool(false)": "mobile-text-heading-primary", "Bool(false)": "header", "Bool(false)": null, "Bool(false)": 1, "Bool(false)": "absolute", "Bool(false)": "100%", "Bool(false)": "100%", "Bool(false)": null, "Bool(false)": "row", "Bool(false)": 4, "Bool(false)": "relative", "Bool(false)": "100%", "Bool(false)": "center", "Bool(false)": "center", "Bool(false)": 120 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(editable, obj);
  let ref;
  const tmp5 = callback2();
  ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ref.current);
  let flag2 = true;
  if (arg1(dependencyMap[7]).ClearButtonVisibility.ALWAYS !== WITH_CONTENT) {
    if (arg1(dependencyMap[7]).ClearButtonVisibility.WITH_CONTENT === WITH_CONTENT) {
      let tmp12 = null != value;
      if (tmp12) {
        tmp12 = "" !== value;
      }
      flag2 = tmp12;
    } else if (arg1(dependencyMap[7]).ClearButtonVisibility.NEVER === WITH_CONTENT) {
      flag2 = false;
    }
  }
  let tmp14 = null != onPress;
  if (tmp14) {
    tmp14 = flag;
  }
  importDefault(dependencyMap[9])(!tmp14, "Cannot have an editable input w/ onPress handler");
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
  items1[1] = callback(arg1(dependencyMap[7]).TextInput, obj2);
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
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/Form/native/FreeFormTextInput.tsx");

export default forwardRefResult;
