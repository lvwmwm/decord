// Module ID: 9738
// Function ID: 9739
// Name: PortalKeyboardFooterIOS
// Dependencies: [19, 21, 4836, 576, 1613, 1627, 4703, 4566, 1611, 1094, 4708, 2]
// Exports: default

// Module 9738 (PortalKeyboardFooterIOS)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let rect;
const jsx = Fragment.jsx;
let obj = { keyboardStickyFooter: rect };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(animatedSheetIndex) {
  let keyboardStickyFooter;
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  let str = animatedSheetIndex.portalHostName;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = animatedSheetIndex.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let progress;
  let animatedStyle;
  const tmp = progress();
  dependencyMap = tmp;
  const bottom = flag(1613)().bottom;
  let obj = animatedSheetIndex(1627);
  const reanimatedKeyboardAnimation = obj.useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  let obj2 = animatedSheetIndex(4703);
  const keyboardTypeSharedValue = obj2.useKeyboardTypeSharedValue();
  let obj3 = animatedSheetIndex(4566);
  class S {
    constructor() {
      let interpolate;
      let items;
      let items1;
      let items2;
      let value2;
      ReanimatedRexport;
      [0][1] = bottom;
      const tmp4 = bottom;
      const tmp6 = flag;
      if (tmp6) {
        let obj;
        if (animatedSheetIndex.get() >= 0) {
          const obj2 = { transform: items };
          items = [{ translateY: height.get() + tmp5 }];
          obj = obj2;
          const obj3 = { translateY: height.get() + tmp5 };
        }
        return obj;
      } else {
        const value = keyboardTypeSharedValue.get();
      }
      obj = { transform: items2 };
      const obj4 = { translateY: interpolate(value2, [-1, 0], items1, "clamp") };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value2 = animatedSheetIndex.get();
      items1 = [ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + tmp4, 0];
      items2 = [obj4];
    }
  }
  let obj4 = { interpolate: animatedSheetIndex(4566).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1611).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(1094).EXPRESSION_FOOTER_HEIGHT };
  S.__closure = obj4;
  S.__workletHash = 9444646970651;
  S.__initData = keyboardTypeSharedValue;
  animatedStyle = obj3.useAnimatedStyle(S);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [keyboardStickyFooter.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  const obj5 = { style: memo, children: height(animatedSheetIndex(4708).PortalHost, { name: str }) };
  const View = flag(4566).View;
  return height(View, obj5);
};
