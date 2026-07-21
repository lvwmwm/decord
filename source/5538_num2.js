// Module ID: 5538
// Function ID: 47080
// Name: num2
// Dependencies: []
// Exports: default

// Module 5538 (num2)
let I18nManager;
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
let num = 1;
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ Animated: closure_5, I18nManager, Image: closure_6, StyleSheet, View: closure_7 } = tmp2);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = { 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, foreground: tmp2.Platform.Version >= 23 };
obj = { container: Object.assign(obj, { "Bool(true)": "Array", "Bool(true)": "isArray" }), disabled: { opacity: 0.5 }, label: {}, labelWrapper: {} };
obj = { minWidth: StyleSheet.hairlineWidth };
const obj1 = { paddingVertical: 141754369, flexDirection: 335544320, alignItems: 335544320, position: 16777216 };
const obj2 = {};
let num2 = 1;
if (I18nManager.getConstants().isRTL) {
  num2 = -1;
}
obj2.scaleX = num2;
const items = [obj2];
obj1.transform = items;
obj.icon = obj1;
obj.iconWithLabel = {};
obj.iconMaskContainer = { padding: null, Date: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", apply: true };
obj.iconMaskFillerRect = {};
const obj3 = { marginTop: null, display: null, alignItems: null, alignSelf: null, backgroundColor: null, marginTop: null };
const obj4 = {};
if (I18nManager.getConstants().isRTL) {
  num = -1;
}
obj4.scaleX = num;
const items1 = [obj4];
obj3.transform = items1;
obj.iconMask = obj3;
const styles = StyleSheet.create(obj);

export default function HeaderBackButton(accessibilityLabel) {
  let backImage;
  let disabled;
  let label;
  let labelVisible;
  let pressColor;
  let pressOpacity;
  let style;
  let testID;
  let tintColor;
  let truncatedLabel;
  ({ disabled, allowFontScaling: closure_0, backImage, label } = accessibilityLabel);
  const importDefault = label;
  ({ labelStyle: closure_2, labelVisible } = accessibilityLabel);
  const callback = tmp;
  ({ onLabelLayout: closure_4, onPress: closure_5, screenLayout: closure_6, tintColor, titleLayout: closure_7, truncatedLabel } = accessibilityLabel);
  let str = "Back";
  ({ pressColor, pressOpacity } = accessibilityLabel);
  if (undefined !== truncatedLabel) {
    str = truncatedLabel;
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (undefined === accessibilityLabel) {
    let str3 = "Go back";
    if (label) {
      str3 = "Go back";
      if ("Back" !== label) {
        const _HermesInternal = HermesInternal;
        str3 = "" + label + ", back";
      }
    }
    accessibilityLabel = str3;
  }
  ({ testID, style } = accessibilityLabel);
  let obj = arg1(dependencyMap[4]);
  const tmp3 = callback(React.useState(undefined), 2);
  let closure_9 = tmp3[0];
  let closure_10 = tmp3[1];
  if (undefined === tintColor) {
    tintColor = obj.useTheme().colors.text;
  }
  let closure_11 = tintColor;
  function handleLabelLayout(nativeEvent) {
    if (null != callback) {
      callback(nativeEvent);
    }
    callback2(nativeEvent.nativeEvent.layout.x + nativeEvent.nativeEvent.layout.width);
  }
  obj = { "Null": "isArray", "Null": "isArray", "Null": "next", disabled, accessibilityLabel, testID };
  let handlePress;
  if (!disabled) {
    handlePress = function handlePress() {
      let animationFrame = closure_5;
      if (closure_5) {
        const _requestAnimationFrame = requestAnimationFrame;
        animationFrame = requestAnimationFrame(closure_5);
      }
      return animationFrame;
    };
  }
  obj.onPress = handlePress;
  obj.pressColor = pressColor;
  obj.pressOpacity = pressOpacity;
  obj.android_ripple = closure_10;
  const items = [closure_11.container, , ];
  if (disabled) {
    disabled = closure_11.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj.style = items;
  obj.hitSlop = {};
  obj = {};
  if (backImage) {
    const obj1 = { tintColor };
    let backImageResult = backImage(obj1);
  } else {
    const obj2 = {};
    const items1 = [closure_11.icon, , ];
    const _Boolean = Boolean;
    let iconWithLabel = Boolean(tmp);
    if (iconWithLabel) {
      iconWithLabel = closure_11.iconWithLabel;
    }
    items1[1] = iconWithLabel;
    const _Boolean2 = Boolean;
    let BooleanResult = Boolean(tintColor);
    if (BooleanResult) {
      const obj3 = { tintColor };
      BooleanResult = obj3;
    }
    items1[2] = BooleanResult;
    obj2.style = items1;
    obj2.source = arg1(dependencyMap[5]);
    obj2.fadeDuration = 0;
    backImageResult = str(closure_6, obj2);
    const tmp8 = str;
    const tmp9 = closure_6;
  }
  const items2 = [
    backImageResult,
    function renderLabel() {
      let tmp = !label;
      if (!tmp) {
        let tmp2 = closure_9;
        if (closure_9) {
          tmp2 = styles2;
        }
        if (tmp2) {
          tmp2 = styles;
        }
        if (tmp2) {
          tmp2 = (styles.width - styles2.width) / 2 < closure_9 + 26;
        }
        tmp = tmp2;
      }
      const tmp6 = tmp ? str : label;
      if (tmp) {
        if (undefined !== tmp6) {
          let obj = {};
          let tmp9 = null;
          if (styles) {
            const items = [tintColor.labelWrapper, ];
            obj = { minWidth: styles.width / 2 - 27 };
            items[1] = obj;
            tmp9 = items;
          }
          obj.style = tmp9;
          obj = { accessible: false };
          let tmp13;
          if (tmp6 === label) {
            tmp13 = handleLabelLayout;
          }
          obj.onLayout = tmp13;
          const items1 = [tintColor.label, , ];
          let tmp16 = null;
          if (tintColor) {
            const obj1 = { color: tintColor };
            tmp16 = obj1;
          }
          items1[1] = tmp16;
          items1[2] = closure_2;
          obj.style = items1;
          obj.numberOfLines = 1;
          obj.allowFontScaling = closure_0;
          obj.children = tmp6;
          obj.children = str(RN.Text, obj);
          return str(styles2, obj);
        }
      }
      return null;
    }()
  ];
  obj.children = items2;
  obj.children = closure_9(React.Fragment, obj);
  return str(importDefault(dependencyMap[8]), obj);
};
