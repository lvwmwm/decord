// Module ID: 1810
// Function ID: 19941
// Name: forwardRef
// Dependencies: [29, 31, 27, 33, 1582, 1790, 1811, 1813, 1815, 1796]

// Module 1810 (forwardRef)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import cancelAnimation from "cancelAnimation";
import closure_10 from "_objectWithoutProperties";
import cancelAnimation from "cancelAnimation";
import closure_11 from "_objectWithoutProperties";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let forwardRef;
let require = arg1;
let closure_3 = ["children", "ScrollViewComponent", "inverted", "keyboardLiftBehavior", "freeze", "offset", "extraContentPadding", "blankSpace", "applyWorkaroundForContentInsetHitTestBug", "onLayout", "onContentSizeChange", "onEndVisible"];
({ useCallback: closure_5, useMemo: closure_6, forwardRef } = result);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_12 = { code: "function pnpm_indexTsx1(){const{freeze}=this.__closure;return typeof freeze===\"boolean\"?freeze:freeze.value;}" };
let closure_13 = { code: "function pnpm_indexTsx2(){const{blankSpace,padding,extraContentPadding}=this.__closure;return Math.max(blankSpace.value,padding.value+extraContentPadding.value);}" };
let closure_14 = { code: "function pnpm_indexTsx3(){const{padding,extraContentPadding}=this.__closure;return padding.value+extraContentPadding.value;}" };
let closure_15 = { code: "function pnpm_indexTsx4(){const{currentHeight}=this.__closure;return{transform:[{translateY:-currentHeight.value}]};}" };
const styles = StyleSheet.create({ commitView: { display: "none", position: "absolute" } });

export default forwardRef((onEndVisible) => {
  let contentOffsetY;
  let layout;
  let onLayout2;
  let scroll;
  let size;
  let ScrollView = onEndVisible.ScrollViewComponent;
  if (undefined === ScrollView) {
    ScrollView = extraContentPadding(blankSpace[4]).ScrollView;
  }
  const inverted = onEndVisible.inverted;
  const keyboardLiftBehavior = onEndVisible.keyboardLiftBehavior;
  let str = "always";
  if (undefined !== keyboardLiftBehavior) {
    str = keyboardLiftBehavior;
  }
  const freeze = onEndVisible.freeze;
  const require = tmp4;
  const offset = onEndVisible.offset;
  let num2 = 0;
  if (undefined !== offset) {
    num2 = offset;
  }
  extraContentPadding = onEndVisible.extraContentPadding;
  if (undefined === extraContentPadding) {
    extraContentPadding = closure_10;
  }
  blankSpace = onEndVisible.blankSpace;
  if (undefined === blankSpace) {
    blankSpace = closure_11;
  }
  const applyWorkaroundForContentInsetHitTestBug = onEndVisible.applyWorkaroundForContentInsetHitTestBug;
  const onLayout = onEndVisible.onLayout;
  const onContentSizeChange = onEndVisible.onContentSizeChange;
  let obj = require(blankSpace[4]);
  const animatedRef = obj.useAnimatedRef();
  const tmp5 = undefined !== applyWorkaroundForContentInsetHitTestBug && applyWorkaroundForContentInsetHitTestBug;
  const tmp6 = onContentSizeChange(onEndVisible, onLayout);
  let obj1 = require(blankSpace[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { freeze: undefined !== freeze && freeze };
  pnpm_indexTsx1.__workletHash = 1441280506731;
  pnpm_indexTsx1.__initData = closure_12;
  const derivedValue = obj1.useDerivedValue(pnpm_indexTsx1);
  let obj2 = require(blankSpace[6]);
  obj = { inverted: tmp3, keyboardLiftBehavior: str, freeze: derivedValue, offset: num2, blankSpace, extraContentPadding };
  const chatKeyboard = obj2.useChatKeyboard(animatedRef, obj);
  const padding = chatKeyboard.padding;
  const currentHeight = chatKeyboard.currentHeight;
  ({ contentOffsetY, scroll, layout, size, onLayout: onLayout2 } = chatKeyboard);
  const onContentSizeChange2 = chatKeyboard.onContentSizeChange;
  let obj4 = require(blankSpace[7]);
  obj = { scrollViewRef: animatedRef, extraContentPadding, keyboardPadding: padding, blankSpace, scroll, layout, size, contentOffsetY, inverted: undefined !== inverted && inverted, keyboardLiftBehavior: str, freeze: derivedValue };
  extraContentPadding = obj4.useExtraContentPadding(obj);
  const tmp8 = extraContentPadding(blankSpace[5])(arg1, animatedRef);
  const endVisible = require(blankSpace[8]).useEndVisible({ scroll, layout, size, inverted: tmp3, onEndVisible: onEndVisible.onEndVisible });
  const obj7 = require(blankSpace[8]);
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  obj1 = { blankSpace, padding, extraContentPadding };
  pnpm_indexTsx2.__closure = obj1;
  pnpm_indexTsx2.__workletHash = 5812718828105;
  pnpm_indexTsx2.__initData = closure_13;
  const derivedValue1 = require(blankSpace[4]).useDerivedValue(pnpm_indexTsx2);
  const obj8 = require(blankSpace[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  obj2 = { padding, extraContentPadding };
  pnpm_indexTsx3.__closure = obj2;
  pnpm_indexTsx3.__workletHash = 17005251423398;
  pnpm_indexTsx3.__initData = closure_14;
  let items = [onLayout2, onLayout];
  const derivedValue2 = require(blankSpace[4]).useDerivedValue(pnpm_indexTsx3);
  const items1 = [onContentSizeChange2, onContentSizeChange];
  const obj10 = require(blankSpace[4]);
  const tmp15 = padding((arg0) => {
    onLayout2(arg0);
    if (null != onLayout) {
      onLayout(arg0);
    }
  }, items);
  const tmp16 = padding((arg0, arg1) => {
    onContentSizeChange2(arg0, arg1);
    if (null != onContentSizeChange) {
      onContentSizeChange(arg0, arg1);
    }
  }, items1);
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  pnpm_indexTsx4.__closure = { currentHeight };
  pnpm_indexTsx4.__workletHash = 2509855764315;
  pnpm_indexTsx4.__initData = closure_15;
  const animatedStyle = require(blankSpace[4]).useAnimatedStyle(pnpm_indexTsx4, []);
  const items2 = [animatedStyle];
  const obj3 = {};
  const obj12 = require(blankSpace[4]);
  obj4 = { applyWorkaroundForContentInsetHitTestBug: tmp5, bottomPadding: derivedValue1, contentOffsetY, inverted: tmp3, scrollIndicatorPadding: derivedValue2, ScrollViewComponent: ScrollView, onContentSizeChange: tmp16, onLayout: tmp15, children: onEndVisible.children };
  const tmp18 = currentHeight(() => {
    const items = [outer1_16.commitView, animatedStyle];
    return items;
  }, items2);
  const items3 = [onLayout2(extraContentPadding(blankSpace[9]), Object.assign({ ref: tmp8 }, tmp6, obj4)), onLayout2(extraContentPadding(blankSpace[4]).View, { style: tmp18 })];
  obj3.children = items3;
  return animatedStyle(onContentSizeChange2, obj3);
});
