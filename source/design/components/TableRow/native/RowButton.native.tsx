// Module ID: 7493
// Function ID: 60105
// Name: RowButtonWrapper
// Dependencies: []

// Module 7493 (RowButtonWrapper)
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
    obj = { formatToPlainString: "Text", jsx: "resizeMode", ix: "from", -73374748: "Array", -1359392420: "isArray", 1386281826: "braintreemasterpasslanding" };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp3 = importDefault(dependencyMap[4])("RowButton");
    tmp4 = icon;
    if (null != icon) {
      tmp5 = importAll;
      tmp4 = icon;
      if (!importAll.isValidElement(icon)) {
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
        tmp7 = arg1;
        tmp8 = dependencyMap;
        num = 5;
        obj = {};
        obj.source = icon;
        obj.variant = str2;
        tmp4 = jsx(arg1(dependencyMap[5]).TableRowIcon, obj);
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
      tmp14 = importDefault;
      tmp15 = dependencyMap;
      num2 = 3;
      xl = importDefault(dependencyMap[3]).radii.xl;
    }
    obj2.borderRadius = xl;
    merged2 = Object.assign(merged);
    obj1["children"] = tmp12(arg1(dependencyMap[6]).TableRowInner, obj2);
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
  let obj = { "Null": false, height: false, width: false, style: false, title: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(isRefreshEnabled, obj);
  const arg1 = merged;
  let importDefault;
  let closure_2;
  let React;
  const tmp3 = callback(flag);
  let obj1 = arg1(closure_2[7]);
  const sharedValue = obj1.useSharedValue(0);
  importDefault = sharedValue;
  const items = [sharedValue];
  closure_2 = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  React = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (isRefreshEnabled.experimental_withBlurBackground) {
    obj = {
      "Bool(false)": true,
      "Bool(false)": true,
      "Bool(false)": true,
      "Bool(false)": true,
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
    obj["children"] = jsx(arg1(closure_2[9]).BackgroundBlurView, obj);
    return jsx(arg1(closure_2[8]).InternalCard, obj);
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
    obj1 = { onPress, style: tmp3.card, disabled };
    const merged2 = Object.assign(merged);
    obj1["variant"] = str2;
    obj1["border"] = str;
    obj1["children"] = children;
    return jsx(arg1(closure_2[8]).InternalCard, obj1);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { padding: 0, borderTopStartRadius: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_BORDER_RADIUS };
  obj.card = obj;
  obj.cardWithBlur = { overflow: "hidden" };
  return obj;
});
RowButton.Icon = arg1(dependencyMap[5]).TableRowIcon;
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = arg1(dependencyMap[5]).TableRowIconProps;
export { RowButton };
