// Module ID: 5435
// Function ID: 5436
// Name: Pressables
// Dependencies: [19, 17, 5290, 1181, 21, 4836, 576, 1364, 5436, 2]

// Module 5435 (Pressables)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import FormConstants from "FormConstants" /* 1181 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import styleConstants from "styleConstants" /* 5290 */;
import StyleSheetUtilsDefault from "StyleSheetUtils" /* 5436 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
function PressableBase(androidRippleConfig) {
  let children;
  let innerRef;
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  ({ children, innerRef } = androidRippleConfig);
  let merged = Object.assign(androidRippleConfig, Object.assign({ children: 0, androidRippleConfig: 0, style: 0, type: 0, activeOpacity: 0, underlayColor: 0, innerRef: 0 }));
  const backgroundColor = closure_8().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = activeOpacity.useMemo(() => {
    let obj = PlatformUtils;
    return obj.isAndroid() ? style : ((pressed) => {
      const items = [style, , ];
      let tmp = null;
      if (pressed.pressed) {
        let obj;
        if ("highlight" === type) {
          let tmp3 = underlayColor;
          if (underlayColor == null) {
            tmp3 = closure_1_5;
          }
          obj = { backgroundColor: tmp3 };
          const obj2 = { backgroundColor: tmp3 };
        } else {
          let num = activeOpacity;
          if (activeOpacity == null) {
            num = 0.2;
          }
          obj = { opacity: num };
        }
        tmp = obj;
      }
      items[1] = tmp;
      items[2] = backgroundColor;
      return items;
    });
  }, items);
  const merged1 = Object.assign(merged);
  return <underlayColor android_ripple={activeOpacity.useMemo(() => {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      let obj2 = androidRippleConfig;
      if (androidRippleConfig == null) {
        obj2 = {};
      }
      const cornerRadius = obj2.cornerRadius;
      let tmp4 = cornerRadius;
      if (null == cornerRadius) {
        const obj3 = StyleSheetUtilsDefault;
        const styleProp = obj3.getStyleProp(style, "borderRadius");
        tmp4 = cornerRadius;
        if (null != styleProp) {
          tmp4 = styleProp;
        }
      }
      const obj4 = { cornerRadius: tmp4 };
      const merged = Object.assign(tmp2);
      return getThemedRippleConfig(obj4);
    }
  }, items1)} style={memo} ref={innerRef}>{children}</underlayColor>;
}
const Pressable = react_native.Pressable;
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const jsx = Fragment.jsx;
let obj = { pressedHighlight: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_8 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.assign({ activeOpacity: 0 })));
  return <PressableBase innerRef={arg1} type="opacity" activeOpacity={num} />;
});
const forwardRefResult1 = react.forwardRef((underlayColor, innerRef) => {
  const merged = Object.assign(Object.assign(underlayColor, Object.assign({ underlayColor: 0 })));
  return <PressableBase innerRef={arg1} type="highlight" underlayColor={arg0.underlayColor} />;
});
const result = size.fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRefResult1;
