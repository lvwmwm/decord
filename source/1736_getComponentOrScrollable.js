// Module ID: 1736
// Function ID: 19451
// Name: getComponentOrScrollable
// Dependencies: []

// Module 1736 (getComponentOrScrollable)
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
  const arg1 = arg0;
  const dependencyMap = fun(new Map()).current;
  let closure_2 = fun(-1);
  const tmp2 = fun(null);
  if (!tmp2.current) {
    function fun(map) {
      if (map) {
        ref.current = map(map);
        fun.getTag = () => arg0(tmp11[3]).findNodeHandle(arg0);
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
          const current = tmp11;
          const item = current.forEach((arg0, arg1) => {
            if (null != arg0) {
              arg0();
            }
            const result = tmp11.set(arg1, arg1(tmp11));
          });
        }
      }
      return ref.current;
    }
    fun.observe = (arg0) => {
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
        const value = map.get(arg0);
        if (null != value) {
          value();
        }
        map.delete(arg0);
      };
    };
    fun.current = null;
    tmp2.current = fun;
  }
  return tmp2.current;
}
let closure_2 = importDefault(dependencyMap[0]);
({ useRef: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const obj = arg1(dependencyMap[2]);
const shouldBeUseWebResult = arg1(dependencyMap[2]).shouldBeUseWeb();
let isIOSResult = arg1(dependencyMap[2]).isIOS();
if (!isIOSResult) {
  isIOSResult = arg1(dependencyMap[2]).isMacOS();
  const obj3 = arg1(dependencyMap[2]);
}
let closure_6 = { code: "function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}" };

export const useAnimatedRef = shouldBeUseWebResult ? function useAnimatedRefWeb() {
  return useAnimatedRefBase((arg0) => callback(arg0));
} : function useAnimatedRefNative() {
  const first = callback(callback2(() => {
    let mutable = null;
    if (!obj.isFabric()) {
      mutable = null;
      if (closure_5) {
        mutable = first(first1[4]).makeMutable(null);
        const obj2 = first(first1[4]);
      }
    }
    return mutable;
  }), 1)[0];
  const arg1 = first;
  const first1 = callback(callback2(() => first(first1[4]).makeMutable(null)), 1)[0];
  const dependencyMap = first1;
  const tmp3 = useAnimatedRefBase((viewConfig) => {
    if (obj.isFabric()) {
      let fn = first(first1[5]).getShadowNodeWrapperFromRef;
    } else {
      fn = (viewConfig) => callback(closure_1[3]).findNodeHandle(callback2(viewConfig));
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
  const shareableMappingCache = arg1(dependencyMap[6]).shareableMappingCache;
  if (!shareableMappingCache.get(tmp3)) {
    let obj = arg1(dependencyMap[7]);
    obj = {};
    /* worklet (recovered source) */ function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}
    obj = { tagOrWrapper: first1, viewName: first };
    pnpm_useAnimatedRefTs1.__closure = obj;
    pnpm_useAnimatedRefTs1.__workletHash = 5138727370224;
    pnpm_useAnimatedRefTs1.__initData = closure_6;
    obj.__init = pnpm_useAnimatedRefTs1;
    const shareableCloneRecursive = obj.makeShareableCloneRecursive(obj);
    const shareableMappingCache2 = arg1(dependencyMap[6]).shareableMappingCache;
    const result = shareableMappingCache2.set(tmp3, shareableCloneRecursive);
  }
  return tmp3;
};
