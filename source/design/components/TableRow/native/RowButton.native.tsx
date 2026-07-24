// Module ID: 7639
// Function ID: 60785
// Name: RowButtonWrapper
// Dependencies: [31, 33, 4130, 689, 1324, 5170, 5165, 3991, 5167, 7640, 2]

// Module 7639 (RowButtonWrapper)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class RowButton {
  constructor(arg0) {
    flag = global.arrow;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    str = global.variant;
    if (str === undefined) {
      str = "secondary";
    }
    ({ icon, experimental_withBlurBackground } = global);
    obj = { arrow: 0, disabled: 0, variant: 0, icon: 0, onPress: 0, experimental_withBlurBackground: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp3 = require("useIsMobileVisualRefreshExperimentEnabled")("RowButton");
    tmp4 = icon;
    if (null != icon) {
      tmp5 = result;
      tmp4 = icon;
      if (!result.isValidElement(icon)) {
        str2 = "translucent";
        if (!experimental_withBlurBackground) {
          str3 = "secondary";
          str4 = "primary";
          if ("primary" === str) {
            str3 = "default";
          }
          str2 = str3;
        }
        tmp6 = jsx;
        tmp7 = closure_0;
        tmp8 = closure_2;
        num = 5;
        obj = {};
        obj.source = icon;
        obj.variant = str2;
        tmp4 = jsx(require("TableRowIcon").TableRowIcon, obj);
      }
    }
    obj1 = { isRefreshEnabled: tmp3, experimental_withBlurBackground, onPress: global.onPress };
    obj1.disabled = flag2;
    tmp9 = jsx;
    tmp10 = RowButtonWrapper;
    merged1 = Object.assign(merged);
    tmp12 = jsx;
    obj2 = {};
    obj2.icon = tmp4;
    obj2.arrow = flag;
    obj2.disabled = flag2;
    xl = undefined;
    if (tmp3) {
      tmp14 = closure_1;
      tmp15 = closure_2;
      num2 = 3;
      xl = require("_createForOfIteratorHelperLoose").radii.xl;
    }
    obj2.borderRadius = xl;
    merged2 = Object.assign(merged);
    obj1["children"] = tmp12(require("TableRowInner").TableRowInner, obj2);
    return tmp9(tmp10, obj1);
  }
}
function RowButtonWrapper(isRefreshEnabled) {
  let children;
  let disabled;
  let onPress;
  let flag = isRefreshEnabled.isRefreshEnabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ onPress, disabled, children } = isRefreshEnabled);
  let obj = { experimental_withBlurBackground: 0, isRefreshEnabled: 0, onPress: 0, disabled: 0, children: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(isRefreshEnabled, obj);
  let sharedValue;
  let dependencyMap;
  let React;
  const tmp3 = callback(flag);
  let obj1 = merged(3991);
  sharedValue = obj1.useSharedValue(0);
  const items = [sharedValue];
  dependencyMap = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  React = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (isRefreshEnabled.experimental_withBlurBackground) {
    obj = {
      shadow: "none",
      border: "none",
      start: true,
      end: true,
      onPress,
      onPressIn(arg0) {
          if (null != merged.onPressIn) {
            merged.onPressIn(arg0);
          }
          callback();
        },
      onPressOut(arg0) {
          if (null != merged.onPressOut) {
            merged.onPressOut(arg0);
          }
          callback2();
        }
    };
    const items2 = [, ];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp3);
    obj.style = items2;
    obj.disabled = disabled;
    const merged1 = Object.assign(merged);
    obj["variant"] = "transparent";
    obj = { pressed: sharedValue, children };
    obj["children"] = jsx(merged(7640).BackgroundBlurView, { pressed: sharedValue, children });
    return jsx(merged(5167).InternalCard, { pressed: sharedValue, children });
  } else {
    let str = "subtle";
    if (flag) {
      str = "control-secondary";
    }
    let str2 = "control-secondary";
    if (!flag) {
      let variant;
      if (null != merged) {
        variant = merged.variant;
      }
      str2 = variant;
    }
    obj1 = { shadow: "low", start: true, end: true, onPress, style: tmp3.card, disabled };
    const merged2 = Object.assign(merged);
    obj1["variant"] = str2;
    obj1["border"] = str;
    obj1["children"] = children;
    return jsx(merged(5167).InternalCard, { shadow: "low", start: true, end: true, onPress, style: tmp3.card, disabled });
  }
}
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { padding: 0, borderTopStartRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS };
  obj.card = obj;
  obj.cardWithBlur = { overflow: "hidden" };
  return obj;
});
RowButton.Icon = require("TableRowIcon").TableRowIcon;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = require("TableRowIcon").TableRowIconProps;
export { RowButton };
