// Module ID: 6980
// Function ID: 6981
// Name: Pressables
// Dependencies: [19, 17, 5644, 1191, 21, 5014, 575, 1375, 6981, 2]
// Exports: PressableHighlight, PressableOpacity

// Module 6980 (Pressables)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FormConstants from "FormConstants" /* 1191 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import react_native2 from "react-native" /* 5644 */;
import StyleSheetUtilsDefault from "StyleSheetUtils" /* 6981 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
const IOS_POINTER_STYLE = react_native2.IOS_POINTER_STYLE;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const jsx = Fragment.jsx;
let obj = { pressedHighlight: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export function PressableOpacity(activeOpacity) {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.assign({ activeOpacity: 0, ref: 0 })));
  return <PressableBase innerRef={arg0.ref} type="opacity" activeOpacity={num} />;
}
export function PressableHighlight(arg0) {
  let ref;
  let underlayColor;
  ({ underlayColor, ref } = arg0);
  const merged = Object.assign(Object.assign(arg0, Object.assign({ underlayColor: 0, ref: 0 })));
  return <PressableBase innerRef={ref} type="highlight" underlayColor={underlayColor} />;
}
