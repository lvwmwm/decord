// Module ID: 9335
// Function ID: 72958
// Name: PortalKeyboardFooterIOS
// Dependencies: []
// Exports: default

// Module 9335 (PortalKeyboardFooterIOS)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.keyboardStickyFooter = obj;
let closure_5 = obj.createStyles(obj);
let closure_6 = { code: "function PortalKeyboardFooterIOSIosTsx1(){const{interpolate,progress,bottom,followSystemKeyboard,keyboardType,KeyboardTypes,animatedSheetIndex,height,EXPRESSION_FOOTER_HEIGHT}=this.__closure;const offset=interpolate(progress.get(),[0,1],[0,bottom]);const shouldFollowKeyboard=followSystemKeyboard||keyboardType.get()===KeyboardTypes.EXPRESSION;if(shouldFollowKeyboard&&animatedSheetIndex.get()>=0){return{transform:[{translateY:height.get()+offset}]};}return{transform:[{translateY:interpolate(animatedSheetIndex.get(),[-1,0],[EXPRESSION_FOOTER_HEIGHT+bottom,0],'clamp')}]};}" };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/keyboard/native/PortalKeyboardFooterIOS.ios.tsx");

export default function PortalKeyboardFooterIOS(animatedSheetIndex) {
  animatedSheetIndex = animatedSheetIndex.animatedSheetIndex;
  const arg1 = animatedSheetIndex;
  let str = animatedSheetIndex.portalHostName;
  if (str === undefined) {
    str = "expression-footer";
  }
  let flag = animatedSheetIndex.followSystemKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  let React;
  let jsx;
  let callback;
  let closure_6;
  let animatedStyle;
  const tmp = callback();
  dependencyMap = tmp;
  const bottom = importDefault(dependencyMap[4])().bottom;
  React = bottom;
  let obj = arg1(dependencyMap[5]);
  const reanimatedKeyboardAnimation = obj.useReanimatedKeyboardAnimation();
  const height = reanimatedKeyboardAnimation.height;
  jsx = height;
  const progress = reanimatedKeyboardAnimation.progress;
  callback = progress;
  let obj1 = arg1(dependencyMap[6]);
  const keyboardTypeSharedValue = obj1.useKeyboardTypeSharedValue();
  closure_6 = keyboardTypeSharedValue;
  class S {
    constructor() {
      tmp = animatedSheetIndex(closure_2[7]);
      [0.229][1] = bottom;
      if (closure_1) {
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
        tmp3 = closure_6;
        tmp5 = animatedSheetIndex;
        tmp6 = closure_2;
        num = 8;
        value = closure_6.get();
      }
      obj = {};
      obj2 = {};
      obj3 = animatedSheetIndex(closure_2[7]);
      value1 = animatedSheetIndex.get();
      items1 = [, ];
      items1[0] = -1;
      items1[1] = 0;
      items2 = [, ];
      items2[0] = animatedSheetIndex(closure_2[9]).EXPRESSION_FOOTER_HEIGHT + bottom;
      items2[1] = 0;
      obj2.translateY = obj3.interpolate(value1, items1, items2, "clamp");
      items3 = [];
      items3[0] = obj2;
      obj.transform = items3;
      return;
    }
  }
  obj = { interpolate: arg1(dependencyMap[7]).interpolate, progress, bottom, followSystemKeyboard: flag, keyboardType: keyboardTypeSharedValue, KeyboardTypes: arg1(dependencyMap[8]).KeyboardTypes, animatedSheetIndex, height, EXPRESSION_FOOTER_HEIGHT: arg1(dependencyMap[9]).EXPRESSION_FOOTER_HEIGHT };
  S.__closure = obj;
  S.__workletHash = 9444646970651;
  S.__initData = closure_6;
  animatedStyle = arg1(dependencyMap[7]).useAnimatedStyle(S);
  const items = [animatedStyle, tmp];
  const memo = React.useMemo(() => {
    const items = [tmp.keyboardStickyFooter, animatedStyle];
    return items;
  }, items);
  obj = { style: memo };
  obj1 = { name: str };
  obj.children = jsx(arg1(dependencyMap[10]).PortalHost, obj1);
  return jsx(importDefault(dependencyMap[7]).View, obj);
};
