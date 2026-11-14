// Module ID: 2010
// Function ID: 2011
// Dependencies: [19, 17, 21, 1655, 1990, 2011, 2013, 2015, 1996]

// Module 2010
import react_native from "react-native" /* 17 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_1655_mod from "module_1655" /* 1655 */;

let c3;
let closure_4;
let forwardRef;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, forwardRef } = react);
react = react_mod;
const StyleSheet = react_native.StyleSheet;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let module_1655 = module_1655_mod;
let closure_8 = module_1655.makeMutable(0);
module_1655 = module_1655_mod;
let closure_9 = module_1655.makeMutable(0);
let closure_10 = { code: "(function pnpm_indexTsx1(){let[freeze]=this.__closure;return typeof freeze===\"boolean\"?freeze:freeze.value;})" };
let closure_11 = { code: "(function pnpm_indexTsx2(){let[blankSpace,padding,extraContentPadding]=this.__closure;return Math.max(blankSpace.value,padding.value+extraContentPadding.value);})" };
let closure_12 = { code: "(function pnpm_indexTsx3(){let[padding,extraContentPadding]=this.__closure;return padding.value+extraContentPadding.value;})" };
let closure_13 = { code: "(function pnpm_indexTsx4(){let[currentHeight]=this.__closure;return{transform:[{translateY:-currentHeight.value}]};})" };
const forwardRefResult = forwardRef((ScrollViewComponent, arg1) => {
  let commitView;
  let contentOffsetY;
  let items11;
  let layout;
  let onContentSizeChange;
  let onLayout2;
  let padding;
  let scroll;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp26;
  let tmp27;
  let tmp9;
  let ScrollView = ScrollViewComponent.ScrollViewComponent;
  const children = ScrollViewComponent.children;
  if (ScrollView === undefined) {
    ScrollView = onContentSizeChange(onLayout2[3]).ScrollView;
  }
  let flag = ScrollViewComponent.inverted;
  if (flag === undefined) {
    flag = false;
  }
  let str = ScrollViewComponent.keyboardLiftBehavior;
  if (str === undefined) {
    str = "always";
  }
  let flag2 = ScrollViewComponent.freeze;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num = ScrollViewComponent.offset;
  if (num === undefined) {
    num = 0;
  }
  let extraContentPadding = ScrollViewComponent.extraContentPadding;
  if (extraContentPadding === undefined) {
    extraContentPadding = closure_8;
  }
  let blankSpace = ScrollViewComponent.blankSpace;
  if (blankSpace === undefined) {
    blankSpace = closure_9;
  }
  let flag3 = ScrollViewComponent.applyWorkaroundForContentInsetHitTestBug;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onLayout = ScrollViewComponent.onLayout;
  onContentSizeChange = ScrollViewComponent.onContentSizeChange;
  const onEndVisible = ScrollViewComponent.onEndVisible;
  const merged = Object.assign(ScrollViewComponent, Object.assign({ children: 0, ScrollViewComponent: 0, inverted: 0, keyboardLiftBehavior: 0, freeze: 0, offset: 0, extraContentPadding: 0, blankSpace: 0, applyWorkaroundForContentInsetHitTestBug: 0, onLayout: 0, onContentSizeChange: 0, onEndVisible: 0 }));
  onLayout2 = undefined;
  let obj = onLayout(onLayout2[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp8 = onContentSizeChange(onLayout2[4])(arg1, animatedRef);
  let obj2 = onLayout(onLayout2[3]);
  let items = [closure_10, flag2];
  [tmp9, tmp10] = items;
  function pnpm_indexTsx1() {
    let value = _undefined;
    if (typeof _undefined !== "boolean") {
      value = _undefined.value;
    }
    return value;
  }
  const items1 = [tmp10];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 9504393585682;
  pnpm_indexTsx1.__initData = tmp9;
  const derivedValue = obj2.useDerivedValue(pnpm_indexTsx1);
  const tmp4Result = onLayout(onLayout2[5]);
  const chatKeyboard = tmp4Result.useChatKeyboard(animatedRef, { inverted: flag, keyboardLiftBehavior: str, freeze: derivedValue, offset: num, blankSpace, extraContentPadding });
  ({ padding, contentOffsetY, scroll, layout, size, onLayout: onLayout2 } = chatKeyboard);
  const onContentSizeChange2 = chatKeyboard.onContentSizeChange;
  const currentHeight = chatKeyboard.currentHeight;
  const tmp4Result6 = onLayout(onLayout2[6]);
  const extraContentPadding1 = tmp4Result6.useExtraContentPadding({ scrollViewRef: animatedRef, extraContentPadding, keyboardPadding: padding, blankSpace, scroll, layout, size, contentOffsetY, inverted: flag, keyboardLiftBehavior: str, freeze: derivedValue });
  const tmp4Result7 = onLayout(onLayout2[7]);
  const endVisible = tmp4Result7.useEndVisible({ scroll, layout, size, inverted: flag, onEndVisible });
  const items2 = [closure_11, blankSpace, padding, extraContentPadding];
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  function pnpm_indexTsx2() {
    return Math.max(_undefined.value, _undefined2.value + _undefined3.value);
  }
  const items3 = [tmp16, tmp17, tmp18];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 3831364564688;
  pnpm_indexTsx2.__initData = tmp15;
  const tmp4Result8 = onLayout(onLayout2[3]);
  const derivedValue1 = tmp4Result8.useDerivedValue(pnpm_indexTsx2);
  const items4 = [closure_12, padding, extraContentPadding];
  let c1;
  [tmp20, tmp21, tmp22] = items4;
  function pnpm_indexTsx3() {
    return _undefined.value + _undefined2.value;
  }
  const items5 = [tmp21, tmp22];
  pnpm_indexTsx3.__closure = items5;
  pnpm_indexTsx3.__workletHash = 17297715476063;
  pnpm_indexTsx3.__initData = tmp20;
  const items6 = [onLayout2, onLayout];
  const tmp4Result9 = onLayout(onLayout2[3]);
  const derivedValue2 = tmp4Result9.useDerivedValue(pnpm_indexTsx3);
  const items7 = [onContentSizeChange2, onContentSizeChange];
  const tmp24 = onContentSizeChange2((arg0) => {
    onLayout2(arg0);
    if (onLayout != null) {
      onLayout(arg0);
    }
  }, items6);
  const items8 = [closure_13, currentHeight];
  let c0;
  [tmp26, tmp27] = items8;
  function pnpm_indexTsx4() {
    let items;
    const obj = { transform: items };
    items = [];
    const obj2 = { translateY: -_undefined.value };
    items[0] = obj2;
    return obj;
  }
  const items9 = [tmp27];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 229079233250;
  pnpm_indexTsx4.__initData = tmp26;
  const tmp25 = onContentSizeChange2((arg0, arg1) => {
    onContentSizeChange2(arg0, arg1);
    if (onContentSizeChange != null) {
      onContentSizeChange(arg0, arg1);
    }
  }, items7);
  const tmp4Result10 = onLayout(onLayout2[3]);
  const animatedStyle = tmp4Result10.useAnimatedStyle(pnpm_indexTsx4, []);
  const items10 = [animatedStyle];
  const obj3 = { children: items11 };
  const obj4 = { ref: tmp8, applyWorkaroundForContentInsetHitTestBug: flag3, bottomPadding: derivedValue1, contentOffsetY, inverted: flag, scrollIndicatorPadding: derivedValue2, ScrollViewComponent: ScrollView, onContentSizeChange: tmp25, onLayout: tmp24, children };
  const tmp29 = animatedStyle(() => {
    const items = [commitView.commitView, animatedStyle];
    return items;
  }, items10);
  const tmp7Result = onContentSizeChange(onLayout2[8]);
  const merged1 = Object.assign(merged);
  items11 = [closure_5(tmp7Result, obj4), closure_5(onContentSizeChange(onLayout2[3]).View, { style: tmp29 })];
  return closure_7(closure_6, obj3);
});
const styles = StyleSheet.create({ commitView: { display: "none", position: "absolute" } });

export default forwardRefResult;
