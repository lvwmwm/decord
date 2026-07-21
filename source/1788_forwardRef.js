// Module ID: 1788
// Function ID: 19813
// Name: forwardRef
// Dependencies: []

// Module 1788 (forwardRef)
let forwardRef;
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
({ useCallback: closure_5, useMemo: closure_6, forwardRef } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_10 = { dispatch: "ERROR", split: "ERROR", location: "NOT_RESPONDER", __initData: "NOT_RESPONDER" };
let closure_11 = { code: "function pnpm_indexTsx1(){const{initialFrame,defaultLayout}=this.__closure;return initialFrame.value||defaultLayout;}" };
let closure_12 = { code: "function pnpm_indexTsx2(){const{screenHeight,keyboard,keyboardVerticalOffset,frame}=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);}" };
let closure_13 = { code: "function pnpm_indexTsx3(value){const{interpolate,relativeKeyboardHeight}=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);}" };
let closure_14 = { code: "function pnpm_indexTsx4(layout){const{keyboard,initialFrame,behavior}=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null||behavior!==\"height\"){initialFrame.value=layout;}}" };
let closure_15 = { code: "function pnpm_indexTsx5(){const{enabled,interpolateToRelativeKeyboardHeight,keyboard,translate,padding,frame,behavior}=this.__closure;if(!enabled){return{};}const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const height=frame.value.height-bottom;switch(behavior){case\"height\":if(!keyboard.isClosed.value&&height>0){return{height:height,flex:0};}return{};case\"position\":return{bottom:bottom};case\"padding\":return{paddingBottom:bottom};case\"translate-with-padding\":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}}" };

export default forwardRef((behavior) => {
  let children;
  let enabled;
  let onLayout;
  let style;
  behavior = behavior.behavior;
  const arg1 = behavior;
  ({ children, enabled } = behavior);
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const importDefault = tmp;
  const keyboardVerticalOffset = behavior.keyboardVerticalOffset;
  let num = 0;
  if (undefined !== keyboardVerticalOffset) {
    num = keyboardVerticalOffset;
  }
  const dependencyMap = num;
  const automaticOffset = behavior.automaticOffset;
  let closure_3 = tmp2;
  ({ style, onLayout } = behavior);
  const callback = onLayout;
  const tmp3 = callback(behavior, closure_3);
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(null);
  const ref = React.useRef(null);
  let obj1 = arg1(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  obj = { initialFrame: sharedValue, defaultLayout: closure_10 };
  pnpm_indexTsx1.__closure = obj;
  pnpm_indexTsx1.__workletHash = 4703969179658;
  pnpm_indexTsx1.__initData = closure_11;
  const derivedValue = obj1.useDerivedValue(pnpm_indexTsx1);
  const React = derivedValue;
  let obj3 = arg1(dependencyMap[5]);
  const translateAnimation = obj3.useTranslateAnimation();
  const translate = translateAnimation.translate;
  const View = translate;
  const padding = translateAnimation.padding;
  const jsx = padding;
  let obj4 = arg1(dependencyMap[5]);
  const keyboardAnimation = obj4.useKeyboardAnimation();
  closure_10 = keyboardAnimation;
  let obj5 = arg1(dependencyMap[6]);
  const height = obj5.useWindowDimensions().height;
  closure_11 = height;
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  obj = { screenHeight: height, keyboard: keyboardAnimation, keyboardVerticalOffset: num, frame: derivedValue };
  pnpm_indexTsx2.__closure = obj;
  pnpm_indexTsx2.__workletHash = 10539040422992;
  pnpm_indexTsx2.__initData = closure_12;
  const items = [height, num];
  const tmp9 = sharedValue(pnpm_indexTsx2, items);
  closure_12 = tmp9;
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  obj1 = { interpolate: arg1(dependencyMap[4]).interpolate, relativeKeyboardHeight: tmp9 };
  pnpm_indexTsx3.__closure = obj1;
  pnpm_indexTsx3.__workletHash = 11482114301276;
  pnpm_indexTsx3.__initData = closure_13;
  const items1 = [tmp9];
  const tmp10 = sharedValue(pnpm_indexTsx3, items1);
  closure_13 = tmp10;
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  pnpm_indexTsx4.__closure = { keyboard: keyboardAnimation, initialFrame: sharedValue, behavior };
  pnpm_indexTsx4.__workletHash = 12256944793057;
  pnpm_indexTsx4.__initData = closure_14;
  const items2 = [behavior];
  closure_14 = sharedValue(pnpm_indexTsx4, items2);
  const items3 = [onLayout, undefined !== automaticOffset && automaticOffset];
  const tmp11 = sharedValue((nativeEvent) => {
    if (null != onLayout) {
      const tmp2 = onLayout(nativeEvent);
    }
    const layout = nativeEvent.nativeEvent.layout;
    const behavior = layout;
    if (tmp2) {
      const findNodeHandleResult = behavior(7[7]).findNodeHandle(ref.current);
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = behavior(num[8]).KeyboardControllerNative;
        const viewPositionInWindowResult = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
        return KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult).then((arg0) => {
          let obj = layout(closure_2[4]);
          obj = { x: arg0.x, y: arg0.y };
          obj.runOnUI(closure_14)(Object.assign({}, layout, obj));
        }).catch(() => {
          layout(closure_2[4]).runOnUI(closure_14)(layout);
        });
      }
      const obj = behavior(7[7]);
    }
    return behavior(num[4]).runOnUI(closure_14)(layout);
  }, items3);
  /* worklet (recovered source) */ function pnpm_indexTsx5(){const{lastSelection,input,layout,clamp}=this.__closure;var _lastSelection$value,_input$value;const customHeight=(_lastSelection$value=lastSelection.value)===null||_lastSelection$value===void 0?void 0:_lastSelection$value.selection.end.y;if(!((_input$value=input.value)!==null&&_input$value!==void 0&&_input$value.layout)||!customHeight){return false;}layout.value={...input.value,layout:{...input.value.layout,height:clamp(customHeight,0,input.value.layout.height)}};return true;}
  const obj2 = { enabled: tmp, interpolateToRelativeKeyboardHeight: tmp10, keyboard: keyboardAnimation, translate, padding, frame: derivedValue, behavior };
  pnpm_indexTsx5.__closure = obj2;
  pnpm_indexTsx5.__workletHash = 6440002265153;
  pnpm_indexTsx5.__initData = closure_15;
  const items4 = [behavior, tmp, tmp10];
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(pnpm_indexTsx5, items4);
  closure_15 = animatedStyle;
  const tmp13 = importDefault(dependencyMap[9])(ref, arg1);
  let contentContainerStyle = style;
  if ("position" === behavior) {
    contentContainerStyle = behavior.contentContainerStyle;
  }
  const items5 = [contentContainerStyle, animatedStyle];
  const tmp15 = ref(() => {
    const items = [contentContainerStyle, animatedStyle];
    return items;
  }, items5);
  if ("position" === behavior) {
    const _Object2 = Object;
    obj3 = { ref: tmp13, style, onLayout: tmp11 };
    obj4 = {};
    obj5 = { style: tmp15, children };
    obj4.children = tmp16(importDefault(dependencyMap[4]).View, obj5);
    let tmp16Result = tmp16(View, Object.assign(obj3, tmp3, obj4));
  } else {
    const _Object = Object;
    const obj6 = { ref: tmp13, style: tmp15, onLayout: tmp11 };
    const obj7 = { children };
    tmp16Result = tmp16(importDefault(dependencyMap[4]).View, Object.assign(obj6, tmp3, obj7));
  }
  return tmp16Result;
});
