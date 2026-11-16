// Module ID: 1988
// Function ID: 1989
// Dependencies: [19, 17, 21, 1655, 1989, 1976, 1972, 1645, 1990]

// Module 1988
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import react_mod from "react" /* 19 */;

let contentContainerStyle;

let c3;
let closure_4;
let forwardRef;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = react);
react = react_mod;
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = { x: 0, y: 0, width: 0, height: 0 };
let closure_9 = { code: "(function pnpm_indexTsx1(){let[initialFrame,defaultLayout]=this.__closure;return initialFrame.value||defaultLayout;})" };
let closure_10 = { code: "(function pnpm_indexTsx2(){let[screenHeight,keyboard,keyboardVerticalOffset,frame]=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);})" };
let closure_11 = { code: "(function pnpm_indexTsx3(value){let[interpolate,relativeKeyboardHeight]=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);})" };
let closure_12 = { code: "(function pnpm_indexTsx4(layout){let[keyboard,initialFrame,behavior]=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null||behavior!==\"height\"){initialFrame.value=layout;}})" };
let closure_13 = { code: "(function pnpm_indexTsx5(){let[enabled,interpolateToRelativeKeyboardHeight,keyboard,translate,padding,frame,behavior]=this.__closure;if(!enabled){return{};}const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const height=frame.value.height-bottom;switch(behavior){case\"height\":if(!keyboard.isClosed.value&&height>0){return{height:height,flex:0};}return{};case\"position\":return{bottom:bottom};case\"padding\":return{paddingBottom:bottom};case\"translate-with-padding\":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}})" };

export default forwardRef((contentContainerStyle, arg1) => {
  let behavior;
  let children;
  let enabled;
  let obj4;
  let onLayout;
  let padding;
  let style;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp42Result;
  let tmp6;
  let tmp7;
  let tmp8;
  let translate;
  ({ behavior, children, enabled } = contentContainerStyle);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  if (enabled === undefined) {
    enabled = true;
  }
  let num = contentContainerStyle.keyboardVerticalOffset;
  if (num === undefined) {
    num = 0;
  }
  let flag = contentContainerStyle.automaticOffset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, onLayout } = contentContainerStyle);
  let merged = Object.assign(contentContainerStyle, Object.assign({ behavior: 0, children: 0, contentContainerStyle: 0, enabled: 0, keyboardVerticalOffset: 0, automaticOffset: 0, style: 0, onLayout: 0 }));
  let ref;
  let closure_3;
  contentContainerStyle = undefined;
  let tmp3 = ref;
  let obj = flag(ref[3]);
  const sharedValue = obj.useSharedValue(null);
  ref = contentContainerStyle.useRef(null);
  let obj2 = flag(ref[3]);
  let items = [closure_9, sharedValue, closure_8];
  [tmp6, tmp7, tmp8] = items;
  function pnpm_indexTsx1() {
    return _undefined.value || c1;
  }
  const items1 = [tmp7, tmp8];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 4134304805971;
  pnpm_indexTsx1.__initData = tmp6;
  const derivedValue = obj2.useDerivedValue(pnpm_indexTsx1);
  const tmp2Result = flag(tmp3[4]);
  const translateAnimation = tmp2Result.useTranslateAnimation();
  ({ translate, padding } = translateAnimation);
  const tmp2Result4 = flag(tmp3[4]);
  const keyboardAnimation = tmp2Result4.useKeyboardAnimation();
  const tmp2Result5 = flag(tmp3[5]);
  const height = tmp2Result5.useWindowDimensions().height;
  const items2 = [closure_10, height, keyboardAnimation, num, derivedValue];
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  function pnpm_indexTsx2() {
    return Math.max(_undefined2.value.y + _undefined2.value.height - (c0 - _undefined.heightWhenOpened.value - c2), 0);
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 8655445807337;
  pnpm_indexTsx2.__initData = tmp13;
  const items4 = [height, num];
  const tmp12Result = closure_3(pnpm_indexTsx2, items4);
  const items5 = [closure_11, tmp2(tmp3[3]).interpolate, tmp12Result];
  [tmp19, tmp20, tmp21] = items5;
  function pnpm_indexTsx3(arg0) {
    const items = [0, _undefined2()];
    return _undefined(arg0, [0, 1], items);
  }
  const items6 = [tmp20, tmp21];
  pnpm_indexTsx3.__closure = items6;
  pnpm_indexTsx3.__workletHash = 8511069457637;
  pnpm_indexTsx3.__initData = tmp19;
  const items7 = [tmp12Result];
  const tmp12Result3 = closure_3(pnpm_indexTsx3, items7);
  const items8 = [closure_12, keyboardAnimation, sharedValue, behavior];
  [tmp23, tmp24, tmp25, tmp26] = items8;
  function pnpm_indexTsx4(value) {
    value = _undefined.isClosed.value || null === _undefined2.value || "height" !== c2;
    if (value) {
      _undefined2.value = value;
    }
  }
  const items9 = [tmp24, tmp25, tmp26];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 7686210950232;
  pnpm_indexTsx4.__initData = tmp23;
  const items10 = [behavior];
  closure_3 = tmp12(pnpm_indexTsx4, items10);
  const items11 = [onLayout, flag];
  const tmp12Result4 = closure_3((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    const layout = nativeEvent.nativeEvent.layout;
    const tmp3 = layout;
    if (tmp3) {
      let obj = flag(ref[6]);
      const findNodeHandleResult = obj.findNodeHandle(ref.current);
      if (null !== findNodeHandleResult) {
        const KeyboardControllerNative = flag(ref[7]).KeyboardControllerNative;
        const viewPositionInWindowResult = KeyboardControllerNative.viewPositionInWindow(findNodeHandleResult);
        const nextPromise = viewPositionInWindowResult.then((result) => {
          const obj = _mod1655;
          const obj3 = {};
          const runOnUIResult = obj.runOnUI(closure_3);
          const merged = Object.assign(layout);
          ({ x: obj2.x, y: obj2.y } = result);
          runOnUIResult(obj3);
        });
        return nextPromise.catch(() => {
          const obj = _mod1655;
          obj.runOnUI(closure_3)(layout);
        });
      }
    }
    const obj2 = flag(ref[3]);
    return obj2.runOnUI(closure_3)(layout);
  }, items11);
  const items12 = [closure_13, enabled, tmp12Result3, keyboardAnimation, translate, padding, derivedValue, behavior];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items12;
  function pnpm_indexTsx5() {
    let items;
    const tmp = c0;
    if (tmp) {
      const tmp4 = _undefined(_undefined2.progress.value);
      const diff = _undefined4.value.height - tmp4;
      const tmp3 = _undefined2;
      const tmp6 = _undefined(_undefined3.value);
      if ("height" === c6) {
        if (!tmp3.isClosed.value) {
          let obj2;
          if (diff > 0) {
            obj2 = { height: diff, flex: 0 };
          }
          return obj2;
        }
        obj2 = {};
      } else if ("position" === c6) {
        return { bottom: tmp4 };
      } else if ("padding" === c6) {
        return { paddingBottom: tmp4 };
      } else if ("translate-with-padding" === c6) {
        const obj = { paddingTop: tmp8, transform: items };
        items = [{ translateY: -tmp6 }];
        return obj;
      } else {
        return {};
      }
    } else {
      return {};
    }
  }
  const items13 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  pnpm_indexTsx5.__closure = items13;
  pnpm_indexTsx5.__workletHash = 7384178893176;
  pnpm_indexTsx5.__initData = tmp28;
  const items14 = [behavior, enabled, tmp12Result3];
  const tmp2Result6 = flag(tmp3[3]);
  const animatedStyle = tmp2Result6.useAnimatedStyle(pnpm_indexTsx5, items14);
  const tmp38 = onLayout(tmp3[8])(ref, arg1);
  let tmp40 = style;
  if ("position" === behavior) {
    tmp40 = contentContainerStyle;
  }
  contentContainerStyle = tmp40;
  const items15 = [tmp40, animatedStyle];
  const tmp41 = animatedStyle(() => {
    const items = [contentContainerStyle, animatedStyle];
    return items;
  }, items15);
  if ("position" === behavior) {
    let obj3 = { ref: tmp38, style, onLayout: tmp12Result4, children: jsx(onLayout(tmp3[3]).View, obj4) };
    const merged1 = Object.assign(merged);
    obj4 = { style: tmp41, children };
    tmp42Result = tmp42(View, obj3);
  } else {
    const obj5 = { ref: tmp38, style: tmp41, onLayout: tmp12Result4, children };
    View = tmp37(tmp3[3]).View;
    const merged2 = Object.assign(merged);
    tmp42Result = tmp42(View, obj5);
  }
  return tmp42Result;
});
