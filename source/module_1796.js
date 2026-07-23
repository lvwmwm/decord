// Module ID: 1796
// Function ID: 19893
// Dependencies: [29, 31, 27, 33, 1582, 1572, 1797]

// Module 1796
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["ScrollViewComponent", "bottomPadding", "scrollIndicatorPadding", "contentInset", "scrollIndicatorInsets", "inverted", "contentOffsetY", "applyWorkaroundForContentInsetHitTestBug", "onContentInsetChange", "children"];
let closure_6 = require("cancelAnimation").createAnimatedComponent(require("nativeEventEmitter").ClippingScrollView);
let closure_7 = { code: "function pnpm_indexTsx1(){const{inverted,bottomPadding,contentInset}=this.__closure;var _contentInset,_contentInset2,_contentInset3,_contentInset4;const dynamicTop=inverted?bottomPadding.value:0;const dynamicBottom=!inverted?bottomPadding.value:0;return{dynamic:{top:dynamicTop,bottom:dynamicBottom},effective:{top:dynamicTop+(((_contentInset=contentInset)===null||_contentInset===void 0?void 0:_contentInset.top)||0),bottom:dynamicBottom+(((_contentInset2=contentInset)===null||_contentInset2===void 0?void 0:_contentInset2.bottom)||0),left:((_contentInset3=contentInset)===null||_contentInset3===void 0?void 0:_contentInset3.left)||0,right:((_contentInset4=contentInset)===null||_contentInset4===void 0?void 0:_contentInset4.right)||0}};}" };
let closure_8 = { code: "function pnpm_indexTsx2(){const{insets}=this.__closure;return insets.value.effective;}" };
let closure_9 = { code: "function pnpm_indexTsx3(current,previous){const{onContentInsetChange,runOnJS}=this.__closure;if(!onContentInsetChange){return;}if(previous&&current.top===previous.top&&current.bottom===previous.bottom&&current.left===previous.left&&current.right===previous.right){return;}runOnJS(onContentInsetChange)(current);}" };
let closure_10 = { code: "function pnpm_indexTsx4(){const{insets,scrollIndicatorPadding,bottomPadding,inverted,scrollIndicatorInsets,contentOffsetY,prevContentOffsetY}=this.__closure;var _scrollIndicatorPaddi,_scrollIndicatorInset,_scrollIndicatorInset2,_scrollIndicatorInset3,_scrollIndicatorInset4;const{dynamic:dynamic,effective:effective}=insets.value;const indicatorPadding=(_scrollIndicatorPaddi=scrollIndicatorPadding)!==null&&_scrollIndicatorPaddi!==void 0?_scrollIndicatorPaddi:bottomPadding;const indicatorTop=(inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset=scrollIndicatorInsets)===null||_scrollIndicatorInset===void 0?void 0:_scrollIndicatorInset.top)||0);const indicatorBottom=(!inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset2=scrollIndicatorInsets)===null||_scrollIndicatorInset2===void 0?void 0:_scrollIndicatorInset2.bottom)||0);const result={contentInset:effective,scrollIndicatorInsets:{bottom:indicatorBottom,top:indicatorTop,right:(_scrollIndicatorInset3=scrollIndicatorInsets)===null||_scrollIndicatorInset3===void 0?void 0:_scrollIndicatorInset3.right,left:(_scrollIndicatorInset4=scrollIndicatorInsets)===null||_scrollIndicatorInset4===void 0?void 0:_scrollIndicatorInset4.left},contentInsetBottom:dynamic.bottom,contentInsetTop:dynamic.top};if(contentOffsetY){const curr=contentOffsetY.value;if(curr!==prevContentOffsetY.value){prevContentOffsetY.value=curr;result.contentOffset={x:0,y:curr};}}return result;}" };

export default require("result").forwardRef((bottomPadding, ref) => {
  let ScrollViewComponent;
  let applyWorkaroundForContentInsetHitTestBug;
  let children;
  bottomPadding = bottomPadding.bottomPadding;
  const scrollIndicatorPadding = bottomPadding.scrollIndicatorPadding;
  const contentInset = bottomPadding.contentInset;
  const scrollIndicatorInsets = bottomPadding.scrollIndicatorInsets;
  const inverted = bottomPadding.inverted;
  const contentOffsetY = bottomPadding.contentOffsetY;
  const onContentInsetChange = bottomPadding.onContentInsetChange;
  ({ ScrollViewComponent, applyWorkaroundForContentInsetHitTestBug, children } = bottomPadding);
  let obj = bottomPadding(contentInset[4]);
  const sharedValue = obj.useSharedValue(null);
  let obj1 = bottomPadding(contentInset[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx1(){const{index,textWidth,spacing,anim}=this.__closure;return{position:'absolute',left:index*(textWidth.value+spacing),transform:[{translateX:-(anim.value%(textWidth.value+spacing))}]};}
  pnpm_indexTsx1.__closure = { inverted, bottomPadding, contentInset };
  pnpm_indexTsx1.__workletHash = 788035152099;
  pnpm_indexTsx1.__initData = sharedValue;
  const items = [inverted, , , , ];
  let top;
  if (null != contentInset) {
    top = contentInset.top;
  }
  items[1] = top;
  let bottom;
  if (null != contentInset) {
    bottom = contentInset.bottom;
  }
  items[2] = bottom;
  let left;
  if (null != contentInset) {
    left = contentInset.left;
  }
  items[3] = left;
  let right;
  if (null != contentInset) {
    right = contentInset.right;
  }
  items[4] = right;
  const derivedValue = obj1.useDerivedValue(pnpm_indexTsx1, items);
  let tmp = inverted(bottomPadding, scrollIndicatorInsets);
  /* worklet (recovered source) */ function pnpm_indexTsx2(){const{anim,speed}=this.__closure;anim.value+=speed;}
  pnpm_indexTsx2.__closure = { insets: derivedValue };
  pnpm_indexTsx2.__workletHash = 3359315898790;
  pnpm_indexTsx2.__initData = derivedValue;
  /* worklet (recovered source) */ function pnpm_indexTsx3(){const{textWidth,parentWidth}=this.__closure;if(textWidth.value===0||parentWidth.value===0){return 0;}return Math.round(parentWidth.value/textWidth.value)+1;}
  obj = { onContentInsetChange, runOnJS: bottomPadding(contentInset[4]).runOnJS };
  pnpm_indexTsx3.__closure = obj;
  pnpm_indexTsx3.__workletHash = 12461544130657;
  pnpm_indexTsx3.__initData = closure_9;
  const items1 = [onContentInsetChange];
  const animatedReaction = bottomPadding(contentInset[4]).useAnimatedReaction(pnpm_indexTsx2, pnpm_indexTsx3, items1);
  const obj3 = bottomPadding(contentInset[4]);
  /* worklet (recovered source) */ function pnpm_indexTsx4(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v*2);}
  pnpm_indexTsx4.__closure = { insets: derivedValue, scrollIndicatorPadding, bottomPadding, inverted, scrollIndicatorInsets, contentOffsetY, prevContentOffsetY: sharedValue };
  pnpm_indexTsx4.__workletHash = 909305568735;
  pnpm_indexTsx4.__initData = closure_10;
  let bottom1;
  if (null != scrollIndicatorInsets) {
    bottom1 = scrollIndicatorInsets.bottom;
  }
  const items2 = [bottom1, , , , , ];
  let top1;
  if (null != scrollIndicatorInsets) {
    top1 = scrollIndicatorInsets.top;
  }
  items2[1] = top1;
  let right1;
  if (null != scrollIndicatorInsets) {
    right1 = scrollIndicatorInsets.right;
  }
  items2[2] = right1;
  let left1;
  if (null != scrollIndicatorInsets) {
    left1 = scrollIndicatorInsets.left;
  }
  items2[3] = left1;
  items2[4] = inverted;
  items2[5] = contentOffsetY;
  const animatedProps = bottomPadding(contentInset[4]).useAnimatedProps(pnpm_indexTsx4, items2);
  obj = { animatedProps, applyWorkaroundForContentInsetHitTestBug, style: scrollIndicatorPadding(contentInset[6]).container, children: contentOffsetY(ScrollViewComponent, Object.assign(obj1, tmp, { children })) };
  obj1 = { ref, animatedProps };
  return contentOffsetY(onContentInsetChange, obj);
});
