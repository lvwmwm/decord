// Module ID: 4660
// Function ID: 40366
// Name: PressableBase
// Dependencies: [31, 27, 4551, 1277, 33, 4130, 689, 477, 4661, 2]

// Module 4660 (PressableBase)
import importAllResult from "result";
import { Pressable } from "get ActivityIndicator";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import { getThemedRippleConfig } from "semanticColor";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function PressableBase(androidRippleConfig) {
  let children;
  let innerRef;
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  let obj = { children: 0, androidRippleConfig: 0, style: 0, type: 0, activeOpacity: 0, underlayColor: 0, innerRef: 0 };
  ({ children, innerRef } = androidRippleConfig);
  Object.setPrototypeOf(null);
  let merged = Object.assign(androidRippleConfig, obj);
  const backgroundColor = callback().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = activeOpacity.useMemo(() => androidRippleConfig(type[7]).isAndroid() ? style : ((pressed) => {
    const items = [outer1_1, , ];
    if (!pressed.pressed) {
      items[1] = null;
      items[2] = backgroundColor;
      return items;
    } else {
      if ("highlight" !== outer1_2) {
        let obj = {};
        let num = 0.2;
        if (null != outer1_3) {
          num = outer1_3;
        }
        obj.opacity = num;
      }
      obj = { backgroundColor: null != outer1_4 ? outer1_4 : outer1_5 };
    }
  }), items);
  obj = {
    android_ripple: activeOpacity.useMemo(() => {
      let obj = androidRippleConfig(type[7]);
      if (obj.isAndroid()) {
        const cornerRadius = null != androidRippleConfig ? androidRippleConfig : {}.cornerRadius;
        let tmp3 = cornerRadius;
        if (null == cornerRadius) {
          const styleProp = style(type[8]).getStyleProp(style, "borderRadius");
          tmp3 = cornerRadius;
          if (null != styleProp) {
            tmp3 = styleProp;
          }
          const obj2 = style(type[8]);
        }
        obj = {};
        const merged = Object.assign(androidRippleConfig);
        obj["cornerRadius"] = tmp3;
        return outer1_6(obj);
      }
    }, items1),
    style: memo,
    ref: innerRef
  };
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return <underlayColor android_ripple={activeOpacity.useMemo(() => {
    let obj = androidRippleConfig(type[7]);
    if (obj.isAndroid()) {
      const cornerRadius = null != androidRippleConfig ? androidRippleConfig : {}.cornerRadius;
      let tmp3 = cornerRadius;
      if (null == cornerRadius) {
        const styleProp = style(type[8]).getStyleProp(style, "borderRadius");
        tmp3 = cornerRadius;
        if (null != styleProp) {
          tmp3 = styleProp;
        }
        const obj2 = style(type[8]);
      }
      obj = {};
      const merged = Object.assign(androidRippleConfig);
      obj["cornerRadius"] = tmp3;
      return outer1_6(obj);
    }
  }, items1)} style={memo} ref={innerRef} />;
}
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
obj.pressedHighlight = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  let obj = Object.create(null);
  obj.activeOpacity = 0;
  obj = { innerRef, type: "opacity", activeOpacity: num };
  const merged = Object.assign(Object.assign(activeOpacity, obj));
  return <PressableBase innerRef={arg1} type="opacity" activeOpacity={num} />;
});
const forwardRefResult1 = importAllResult.forwardRef((underlayColor, innerRef) => {
  let obj = Object.create(null);
  obj.underlayColor = 0;
  obj = { innerRef, type: "highlight", underlayColor: underlayColor.underlayColor };
  const merged = Object.assign(Object.assign(underlayColor, obj));
  return <PressableBase innerRef={arg1} type="highlight" underlayColor={arg0.underlayColor} />;
});
const result = require("IOS_POINTER_STYLE").fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRefResult1;
