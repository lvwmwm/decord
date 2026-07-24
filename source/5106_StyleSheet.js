// Module ID: 5106
// Function ID: 44366
// Name: StyleSheet
// Dependencies: [57, 31, 27, 33, 1457, 5095, 5107, 5096, 5111]
// Exports: default

// Module 5106 (StyleSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let I18nManager;
let StyleSheet;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let create;
const require = arg1;
let num = 1;
({ Animated: closure_5, I18nManager, Image: closure_6, StyleSheet, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { borderless: true, foreground: get_ActivityIndicator.Platform.Version >= 23, radius: 20 };
obj = { container: Object.assign(obj, { marginVertical: 3, marginHorizontal: 11 }), disabled: { opacity: 0.5 }, label: { fontSize: 17, letterSpacing: 0.35 }, labelWrapper: { flexDirection: "row", alignItems: "flex-start" } };
obj = { alignItems: "center", flexDirection: "row" };
({ hairlineWidth: obj3.minWidth, create } = StyleSheet);
let obj1 = { height: 24, width: 24, margin: 3, resizeMode: "contain" };
let obj2 = {};
let num2 = 1;
if (I18nManager.getConstants().isRTL) {
  num2 = -1;
}
obj2.scaleX = num2;
let items = [obj2];
obj1.transform = items;
obj.icon = obj1;
obj.iconWithLabel = {};
obj.iconMaskContainer = { flex: 1, flexDirection: "row", justifyContent: "center" };
obj.iconMaskFillerRect = { flex: 1, backgroundColor: "#000" };
let obj3 = { height: 21, width: 13, marginLeft: -14.5, marginVertical: 12, alignSelf: "center", resizeMode: "contain" };
const obj4 = {};
if (I18nManager.getConstants().isRTL) {
  num = -1;
}
obj4.scaleX = num;
let items1 = [obj4];
obj3.transform = items1;
obj.iconMask = obj3;
let closure_11 = create(obj);

export default function HeaderBackButton(accessibilityLabel) {
  let backImage;
  let result;
  let closure_5;
  let closure_6;
  let closure_7;
  let dependencyMap;
  let disabled;
  let label;
  let labelVisible;
  let pressColor;
  let pressOpacity;
  let require;
  let style;
  let testID;
  let tintColor;
  let truncatedLabel;
  ({ disabled, allowFontScaling: require, backImage, label } = accessibilityLabel);
  ({ labelStyle: dependencyMap, labelVisible } = accessibilityLabel);
  const callback = tmp;
  ({ onLabelLayout: result, onPress: closure_5, screenLayout: closure_6, tintColor, titleLayout: closure_7, truncatedLabel } = accessibilityLabel);
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
  let obj = require(1457) /* Link */;
  const tmp3 = callback(React.useState(undefined), 2);
  let closure_9 = tmp3[0];
  let closure_10 = tmp3[1];
  if (undefined === tintColor) {
    tintColor = obj.useTheme().colors.text;
  }
  function handleLabelLayout(nativeEvent) {
    if (null != callback) {
      callback(nativeEvent);
    }
    callback2(nativeEvent.nativeEvent.layout.x + nativeEvent.nativeEvent.layout.width);
  }
  obj = { disabled, accessible: true, accessibilityRole: "button", accessibilityLabel, testID };
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
  let items = [tintColor.container, , ];
  if (disabled) {
    disabled = tintColor.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj.style = items;
  obj.hitSlop = { top: 16, right: 16, bottom: 16, left: 16 };
  obj = {};
  if (backImage) {
    let obj1 = { tintColor };
    let backImageResult = backImage(obj1);
  } else {
    const obj2 = {};
    let items1 = [tintColor.icon, , ];
    const _Boolean = Boolean;
    let iconWithLabel = Boolean(tmp);
    if (iconWithLabel) {
      iconWithLabel = tintColor.iconWithLabel;
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
    obj2.source = require(5095) /* registerAsset */;
    obj2.fadeDuration = 0;
    backImageResult = str(closure_6, obj2);
    const tmp8 = str;
    let tmp9 = closure_6;
  }
  const items2 = [
    backImageResult,
    (function renderLabel() {
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
      if (_slicedToArray) {
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
          obj.children = str(outer1_5.Text, obj);
          return str(outer1_7, obj);
        }
      }
      return null;
    })()
  ];
  obj.children = items2;
  obj.children = closure_9(React.Fragment, obj);
  return str(label(5111), obj);
};
