// Module ID: 9342
// Function ID: 72999
// Name: PortalKeyboardFooterIOS
// Dependencies: [31, 33, 4130, 689, 1557, 1571, 3996, 3991, 1555, 668, 4001, 2]
// Exports: default

// Module 9342 (PortalKeyboardFooterIOS)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 1, flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
_createForOfIteratorHelperLoose.keyboardStickyFooter = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_6 = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(animatedSheetIndex) {
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  let str = animatedSheetIndex.portalHostName;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = animatedSheetIndex.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let bottom;
  let height;
  let progress;
  let keyboardTypeSharedValue;
  let animatedStyle;
  const tmp = progress();
  dependencyMap = tmp;
  bottom = flag(1557)().bottom;
  let obj = animatedSheetIndex(1571);
  const reanimatedKeyboardAnimation = obj.useReanimatedKeyboardAnimation();
  height = reanimatedKeyboardAnimation.height;
  progress = reanimatedKeyboardAnimation.progress;
  let obj1 = animatedSheetIndex(3996);
  keyboardTypeSharedValue = obj1.useKeyboardTypeSharedValue();
  class S {
    constructor() {
      tmp = animatedSheetIndex(c2[7]);
      [0][1] = bottom;
      if (c1) {
        tmp7 = animatedSheetIndex;
        num2 = 0;
        if (animatedSheetIndex.get() >= 0) {
          obj = {};
          obj1 = {};
          tmp9 = height;
          obj1.translateY = height.get() + tmp2;
          items = [];
          items[0] = obj1;
          obj.transform = items;
        }
        return obj;
      } else {
        tmp3 = c6;
        tmp5 = animatedSheetIndex;
        tmp6 = c2;
        num = 8;
        value = c6.get();
      }
      obj = {};
      obj2 = {};
      obj3 = animatedSheetIndex(c2[7]);
      value1 = animatedSheetIndex.get();
      items1 = [, ];
      items1[0] = -1;
      items1[1] = 0;
      items2 = [, ];
      items2[0] = animatedSheetIndex(c2[9]).EXPRESSION_FOOTER_HEIGHT + bottom;
      items2[1] = 0;
      obj2.translateY = obj3.interpolate(value1, items1, items2, "clamp");
      items3 = [];
      items3[0] = obj2;
      obj.transform = items3;
      return;
    }
  }
  obj = { interpolate: animatedSheetIndex(3991).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: animatedSheetIndex(1555).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: animatedSheetIndex(668).EXPRESSION_FOOTER_HEIGHT };
  S.__closure = obj;
  S.__workletHash = 9444646970651;
  S.__initData = keyboardTypeSharedValue;
  animatedStyle = animatedSheetIndex(3991).useAnimatedStyle(S);
  let items = [animatedStyle, tmp];
  const memo = bottom.useMemo(() => {
    const items = [_undefined.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  obj = { style: memo };
  obj1 = { name: str };
  obj.children = height(animatedSheetIndex(4001).PortalHost, obj1);
  return height(flag(3991).View, obj);
};
