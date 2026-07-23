// Module ID: 1736
// Function ID: 19457
// Name: getComponentOrScrollable
// Dependencies: [57, 31, 1585, 1690, 1619, 1610, 1613, 1612]

// Module 1736 (getComponentOrScrollable)
import _slicedToArray from "_slicedToArray";
import result from "result";
import isJest from "isJest";
import isJest from "isJest";

let closure_3;
let closure_4;
const require = arg1;
function getComponentOrScrollable(getScrollableNode) {
  if (getScrollableNode.getScrollableNode) {
    let scrollableNode = getScrollableNode.getScrollableNode();
  } else {
    scrollableNode = getScrollableNode;
    if (getScrollableNode.getNativeScrollRef) {
      scrollableNode = getScrollableNode.getNativeScrollRef();
    }
  }
  return scrollableNode;
}
function useAnimatedRefBase(arg0) {
  let closure_0 = arg0;
  let current = fun(new Map()).current;
  let _slicedToArray = fun(-1);
  const tmp2 = fun(null);
  if (!tmp2.current) {
    fun = function fun(map) {
      const callback = map;
      if (map) {
        ref.current = callback(map);
        fun.getTag = () => map(current[3]).findNodeHandle(map);
        fun.current = map;
        if (current.size) {
          let tag;
          if (null != fun) {
            if (null != fun.getTag) {
              tag = fun.getTag();
            }
          }
          let tmp11 = null;
          if (null != tag) {
            tmp11 = tag;
          }
          current = tmp11;
          const item = current.forEach((arg0, arg1) => {
            if (null != arg0) {
              arg0();
            }
            const result = tmp11.set(arg1, arg1(tmp11));
          });
        }
      }
      return ref.current;
    };
    fun.observe = (arg0) => {
      let closure_0 = arg0;
      let tag;
      if (null != fun) {
        if (null != fun.getTag) {
          tag = fun.getTag();
        }
      }
      let tmp4 = null;
      if (null != tag) {
        tmp4 = tag;
      }
      const result = current.set(arg0, arg0(tmp4));
      return () => {
        const value = outer1_1.get(closure_0);
        if (null != value) {
          value();
        }
        outer1_1.delete(closure_0);
      };
    };
    fun.current = null;
    tmp2.current = fun;
  }
  return tmp2.current;
}
({ useRef: closure_3, useState: closure_4 } = result);
isJest = isJest.shouldBeUseWeb();
isJest = isJest.isIOS();
if (!isJest) {
  isJest = require("isJest").isMacOS();
  const obj3 = require("isJest");
}
let closure_6 = { code: "function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}" };

export const useAnimatedRef = isJest ? (function useAnimatedRefWeb() {
  return useAnimatedRefBase((arg0) => outer1_7(arg0));
}) : (function useAnimatedRefNative() {
  const first = callback(callback2(() => {
    let mutable = null;
    if (!obj.isFabric()) {
      mutable = null;
      if (outer1_5) {
        mutable = first(first1[4]).makeMutable(null);
        const obj2 = first(first1[4]);
      }
    }
    return mutable;
  }), 1)[0];
  const first1 = callback(callback2(() => first(first1[4]).makeMutable(null)), 1)[0];
  let tmp3 = useAnimatedRefBase((viewConfig) => {
    if (obj.isFabric()) {
      let fn = first(first1[5]).getShadowNodeWrapperFromRef;
    } else {
      fn = (viewConfig) => first(first1[3]).findNodeHandle(outer2_7(viewConfig));
    }
    first1.value = fn(viewConfig);
    if (first) {
      let str;
      if (null != viewConfig) {
        viewConfig = viewConfig.viewConfig;
        if (null != viewConfig) {
          str = viewConfig.uiViewClassName;
        }
      }
      if (!str) {
        str = "RCTView";
      }
      first.value = str;
      const tmp3 = first;
    }
    return first1.value;
  });
  const shareableMappingCache = first(first1[6]).shareableMappingCache;
  if (!shareableMappingCache.get(tmp3)) {
    let obj = first(first1[7]);
    obj = {};
    /* worklet (recovered source) */ function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}
    obj = { tagOrWrapper: first1, viewName: first };
    pnpm_useAnimatedRefTs1.__closure = obj;
    pnpm_useAnimatedRefTs1.__workletHash = 5138727370224;
    pnpm_useAnimatedRefTs1.__initData = closure_6;
    obj.__init = pnpm_useAnimatedRefTs1;
    const shareableCloneRecursive = obj.makeShareableCloneRecursive(obj);
    const shareableMappingCache2 = first(first1[6]).shareableMappingCache;
    const result = shareableMappingCache2.set(tmp3, shareableCloneRecursive);
  }
  return tmp3;
});
