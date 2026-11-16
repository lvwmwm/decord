// Module ID: 1996
// Function ID: 1997
// Dependencies: [19, 17, 21, 1655, 1645, 1997]

// Module 1996
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1645 */;
import _mod1655 from "module_1655" /* 1655 */;
import react_nativeDefault from "react-native" /* 1997 */;

const module_1655 = _mod1655;

const forwardRef = react2.forwardRef;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_4 = module_1655.createAnimatedComponent(KeyboardControllerNative.ClippingScrollView);
let closure_5 = { code: "(function pnpm_indexTsx1(){let[inverted,bottomPadding,contentInset]=this.__closure;var _contentInset,_contentInset2,_contentInset3,_contentInset4;const dynamicTop=inverted?bottomPadding.value:0;const dynamicBottom=!inverted?bottomPadding.value:0;return{dynamic:{top:dynamicTop,bottom:dynamicBottom},effective:{top:dynamicTop+(((_contentInset=contentInset)===null||_contentInset===void 0?void 0:_contentInset.top)||0),bottom:dynamicBottom+(((_contentInset2=contentInset)===null||_contentInset2===void 0?void 0:_contentInset2.bottom)||0),left:((_contentInset3=contentInset)===null||_contentInset3===void 0?void 0:_contentInset3.left)||0,right:((_contentInset4=contentInset)===null||_contentInset4===void 0?void 0:_contentInset4.right)||0}};})" };
let closure_6 = { code: "(function pnpm_indexTsx2(){let[insets]=this.__closure;return insets.value.effective;})" };
let closure_7 = { code: "(function pnpm_indexTsx3(current,previous){let[onContentInsetChange,runOnJS]=this.__closure;if(!onContentInsetChange){return;}if(previous&&current.top===previous.top&&current.bottom===previous.bottom&&current.left===previous.left&&current.right===previous.right){return;}runOnJS(onContentInsetChange)(current);})" };
let closure_8 = { code: "(function pnpm_indexTsx4(){let[insets,scrollIndicatorPadding,bottomPadding,inverted,scrollIndicatorInsets,contentOffsetY,prevContentOffsetY]=this.__closure;var _scrollIndicatorPaddi,_scrollIndicatorInset,_scrollIndicatorInset2,_scrollIndicatorInset3,_scrollIndicatorInset4;const{dynamic:dynamic,effective:effective}=insets.value;const indicatorPadding=(_scrollIndicatorPaddi=scrollIndicatorPadding)!==null&&_scrollIndicatorPaddi!==void 0?_scrollIndicatorPaddi:bottomPadding;const indicatorTop=(inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset=scrollIndicatorInsets)===null||_scrollIndicatorInset===void 0?void 0:_scrollIndicatorInset.top)||0);const indicatorBottom=(!inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset2=scrollIndicatorInsets)===null||_scrollIndicatorInset2===void 0?void 0:_scrollIndicatorInset2.bottom)||0);const result={contentInset:effective,scrollIndicatorInsets:{bottom:indicatorBottom,top:indicatorTop,right:(_scrollIndicatorInset3=scrollIndicatorInsets)===null||_scrollIndicatorInset3===void 0?void 0:_scrollIndicatorInset3.right,left:(_scrollIndicatorInset4=scrollIndicatorInsets)===null||_scrollIndicatorInset4===void 0?void 0:_scrollIndicatorInset4.left},contentInsetBottom:dynamic.bottom,contentInsetTop:dynamic.top};if(contentOffsetY){const curr=contentOffsetY.value;if(curr!==prevContentOffsetY.value){prevContentOffsetY.value=curr;result.contentOffset={x:0,y:curr};}}return result;})" };

export default forwardRef((arg0, ref) => {
  let ScrollViewComponent;
  let applyWorkaroundForContentInsetHitTestBug;
  let bottomPadding;
  let children;
  let contentInset;
  let contentOffsetY;
  let inverted;
  let onContentInsetChange;
  let scrollIndicatorInsets;
  let scrollIndicatorPadding;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ bottomPadding, contentInset, scrollIndicatorInsets, inverted, contentOffsetY, onContentInsetChange } = arg0);
  ({ ScrollViewComponent, scrollIndicatorPadding, applyWorkaroundForContentInsetHitTestBug, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ ScrollViewComponent: 0, bottomPadding: 0, scrollIndicatorPadding: 0, contentInset: 0, scrollIndicatorInsets: 0, inverted: 0, contentOffsetY: 0, applyWorkaroundForContentInsetHitTestBug: 0, onContentInsetChange: 0, children: 0 }));
  let obj = _mod1655;
  const sharedValue = obj.useSharedValue(null);
  const items = [closure_5, inverted, bottomPadding, contentInset];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_indexTsx1() {
    let num4;
    let num5;
    let num6;
    let rect1;
    let num = 0;
    if (c0) {
      num = _undefined.value;
    }
    let num2 = 0;
    if (!c0) {
      num2 = _undefined.value;
    }
    const rect = c2;
    let num3;
    const obj = { dynamic: { top: num, bottom: num2 }, effective: rect1 };
    if (c2 != null) {
      num3 = rect.top;
    }
    if (!num3) {
      num3 = 0;
    }
    rect1 = { top: num + num3, bottom: num2 + num4, left: num5, right: num6 };
    num4 = undefined;
    if (rect != null) {
      num4 = rect.bottom;
    }
    if (!num4) {
      num4 = 0;
    }
    num5 = undefined;
    if (rect != null) {
      num5 = rect.left;
    }
    if (!num5) {
      num5 = 0;
    }
    num6 = undefined;
    if (rect != null) {
      num6 = rect.right;
    }
    if (!num6) {
      num6 = 0;
    }
    return obj;
  }
  const items1 = [tmp7, tmp8, tmp9];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 4530674049402;
  pnpm_indexTsx1.__initData = tmp6;
  const items2 = [inverted, , , , ];
  let top;
  const useDerivedValue = _mod1655.useDerivedValue;
  if (contentInset != null) {
    top = contentInset.top;
  }
  items2[1] = top;
  let bottom;
  if (contentInset != null) {
    bottom = contentInset.bottom;
  }
  items2[2] = bottom;
  let left;
  if (contentInset != null) {
    left = contentInset.left;
  }
  items2[3] = left;
  let right;
  if (contentInset != null) {
    right = contentInset.right;
  }
  items2[4] = right;
  const derivedValue = useDerivedValue(pnpm_indexTsx1, items2);
  const items3 = [closure_6, derivedValue];
  [tmp16, tmp17] = items3;
  function pnpm_indexTsx2() {
    return _undefined.value.effective;
  }
  const items4 = [tmp17];
  pnpm_indexTsx2.__closure = items4;
  pnpm_indexTsx2.__workletHash = 5140086364767;
  pnpm_indexTsx2.__initData = tmp16;
  const items5 = [closure_7, onContentInsetChange, ];
  const useAnimatedReaction = tmp2(1655).useAnimatedReaction;
  _mod1655;
  items5[2] = _mod1655.runOnJS;
  [tmp18, tmp19, tmp20] = items5;
  function pnpm_indexTsx3(top, top2) {
    if (c0) {
      const tmp4 = top2 && top.top === top2.top && top.bottom === top2.bottom && top.left === top2.left && top.right === top2.right;
      if (!tmp4) {
        _undefined(tmp)(top);
      }
    }
  }
  const items6 = [tmp19, tmp20];
  pnpm_indexTsx3.__closure = items6;
  pnpm_indexTsx3.__workletHash = 9660379911352;
  pnpm_indexTsx3.__initData = tmp18;
  const items7 = [onContentInsetChange];
  const animatedReaction = useAnimatedReaction(pnpm_indexTsx2, pnpm_indexTsx3, items7);
  const items8 = [closure_8, derivedValue, scrollIndicatorPadding, bottomPadding, inverted, scrollIndicatorInsets, contentOffsetY, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items8;
  function pnpm_indexTsx4() {
    let left;
    let rect1;
    let right;
    const value = _undefined.value;
    const dynamic = value.dynamic;
    let iter = c1;
    const effective = value.effective;
    if (c1 == null) {
      iter = c2;
    }
    let num = 0;
    if (c3) {
      num = iter.value;
    }
    const rect = c4;
    let num2;
    if (c4 != null) {
      num2 = rect.top;
    }
    if (!num2) {
      num2 = 0;
    }
    const obj = { contentInset: effective, scrollIndicatorInsets: rect1, contentInsetBottom: null, contentInsetTop: null };
    let num3 = 0;
    const sum = num + num2;
    if (!c3) {
      num3 = iter.value;
    }
    let num4;
    if (rect != null) {
      num4 = rect.bottom;
    }
    if (!num4) {
      num4 = 0;
    }
    rect1 = { bottom: num3 + num4, top: sum, right, left };
    right = undefined;
    if (rect != null) {
      right = rect.right;
    }
    left = undefined;
    if (rect != null) {
      left = rect.left;
    }
    ({ bottom: obj.contentInsetBottom, top: obj.contentInsetTop } = dynamic);
    if (_undefined2) {
      const value2 = _undefined2.value;
      if (value2 !== _undefined3.value) {
        _undefined3.value = value2;
        const point = { x: 0, y: value2 };
        obj.contentOffset = point;
      }
    }
    return obj;
  }
  const items9 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 13506688530662;
  pnpm_indexTsx4.__initData = tmp23;
  let bottom1;
  const useAnimatedProps = tmp2(1655).useAnimatedProps;
  _mod1655;
  if (scrollIndicatorInsets != null) {
    bottom1 = scrollIndicatorInsets.bottom;
  }
  const items10 = [bottom1, , , , , ];
  let top1;
  if (scrollIndicatorInsets != null) {
    top1 = scrollIndicatorInsets.top;
  }
  items10[1] = top1;
  let right1;
  if (scrollIndicatorInsets != null) {
    right1 = scrollIndicatorInsets.right;
  }
  items10[2] = right1;
  let left1;
  if (scrollIndicatorInsets != null) {
    left1 = scrollIndicatorInsets.left;
  }
  items10[3] = left1;
  items10[4] = inverted;
  items10[5] = contentOffsetY;
  const animatedProps = useAnimatedProps(pnpm_indexTsx4, items10);
  const merged1 = Object.assign(merged);
  return <closure_4 animatedProps={animatedProps} applyWorkaroundForContentInsetHitTestBug={applyWorkaroundForContentInsetHitTestBug} style={react_nativeDefault.container}>{null}</closure_4>;
});
