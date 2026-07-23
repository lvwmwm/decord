// Module ID: 381
// Function ID: 5671
// Name: reduceAnimatedProps
// Dependencies: [57, 31, 382, 79, 373, 348, 326, 347, 383]
// Exports: default

// Module 381 (reduceAnimatedProps)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function reduceAnimatedProps(__getValueWithStaticProps, style) {
  return Object.assign({}, __getValueWithStaticProps.__getValueWithStaticProps(style), { collapsable: false });
}
function addListenersToPropsValue(item10021, arr) {
  if (item10021 instanceof importDefault(347)) {
    const obj = {
      propValue: item10021,
      listenerId: item10021.addListener(() => {

        })
    };
    arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(item10021)) {
      for (const item10021 of arg0) {
        let tmp5 = addListenersToPropsValue;
        let tmp6 = arg1;
        let tmp7 = addListenersToPropsValue(item10021, arg1);
        continue;
      }
    } else {
      const _Object = Object;
      if (item10021 instanceof Object) {
        for (const key10018 in arg0) {
          let tmp10 = key10018;
          let tmp11 = addListenersToPropsValue;
          let tmp12 = addListenersToPropsValue(arg0[key10018], arg1);
          continue;
        }
      }
    }
  }
}
function useAnimatedPropsLifecycleWithPrevNodeRef(arg0) {
  let closure_0 = arg0;
  let closure_1 = callback2(null);
  let closure_2 = callback2(false);
  callback(() => {
    closure_2.current = false;
    return () => {
      outer1_2.current = true;
    };
  }, []);
  const items = [arg0];
  callback(() => {
    closure_0.__attach();
    if (null != ref.current) {
      const current = ref.current;
      const result = current.__restoreDefaultValues();
      current.__detach();
      ref.current = null;
    }
    return () => {
      if (outer1_2.current) {
        outer1_0.__detach();
      } else {
        outer1_1.current = outer1_0;
      }
    };
  }, items);
}
function useAnimatedPropsLifecycleWithCleanupInMicrotask(arg0) {
  let closure_0 = arg0;
  let closure_1 = callback2(false);
  const items = [arg0];
  callback(() => {
    closure_1.current = true;
    closure_0.__attach();
    return () => {
      outer1_1.current = false;
      queueMicrotask(() => {
        if (outer2_1.current) {
          const result = outer2_0.__restoreDefaultValues();
        }
        outer2_0.__detach();
      });
    };
  }, items);
}
({ useCallback: closure_5, useEffect: closure_6, useInsertionEffect: closure_7, useReducer: closure_8, useRef: closure_9 } = result);

export default function createAnimatedPropsHook(arg0) {
  const _require = arg0;
  let closure_1 = _require(382).createAnimatedPropsMemoHook(arg0);
  let obj = _require(382);
  importAll = importAll(79).shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn, items) {
    let closure_0 = fn;
    const callback = outer1_4(outer1_8((arg0) => arg0 + 1, 0), 2)[1];
    const callback2 = outer1_9(null);
    let closure_3 = outer1_9(null);
    let tmp = callback(() => {
      let tmp = callback(outer2_3[4]);
      tmp = new tmp(closure_0, () => {
        let currentResult;
        if (null != outer1_2.current) {
          currentResult = outer1_2.current();
        }
        return currentResult;
      }, closure_0);
      return tmp;
    }, fn);
    let _slicedToArray = tmp;
    outer1_6(() => {
      if (!callback(outer2_3[5]).shouldSignalBatch) {
        const API = callback(outer2_3[5]).API;
        API.flushQueue();
        const tmp = callback;
      }
      let closure_0 = null;
      if (tmp.__isNative) {
        const nativeEventEmitter = callback(outer2_3[5]).nativeEventEmitter;
        closure_0 = nativeEventEmitter.addListener("onUserDrivenAnimationEnded", (arg0) => {
          outer1_4.update();
        });
      }
      return () => {
        if (null != closure_0) {
          closure_0.remove();
        }
      };
    });
    callback2(outer1_3[3]).scheduleAnimatedCleanupInMicrotask() ? outer1_13 : outer1_12(tmp);
    items = [tmp];
    let obj = callback2(outer1_3[3]);
    let tmp4 = outer1_5((getScrollableNode) => {
      let closure_0 = getScrollableNode;
      tmp.setNativeView(getScrollableNode);
      items.current = () => {
        let isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(getScrollableNode);
        if (!isPublicInstanceResult) {
          let nativeScrollRef;
          if (null != obj) {
            if (null != obj.getNativeScrollRef) {
              nativeScrollRef = obj.getNativeScrollRef();
            }
          }
          isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(nativeScrollRef);
          const obj3 = getScrollableNode(outer3_3[8]);
        }
        if (!isPublicInstanceResult) {
          let nativeScrollRef1;
          if (null != obj) {
            if (null != obj.getScrollResponder) {
              const scrollResponder = obj.getScrollResponder();
              if (null != scrollResponder) {
                if (null != scrollResponder.getNativeScrollRef) {
                  nativeScrollRef1 = scrollResponder.getNativeScrollRef();
                }
              }
            }
          }
          isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(nativeScrollRef1);
          const obj4 = getScrollableNode(outer3_3[8]);
        }
        if (outer1_4.__isNative) {
          let tmp27 = !isPublicInstanceResult;
          if (!tmp27) {
            let result = items(outer3_3[3]).cxxNativeAnimatedEnabled();
            if (result) {
              result = items(outer3_3[3]).cxxNativeAnimatedRemoveJsSync();
              const obj7 = items(outer3_3[3]);
            }
            tmp27 = result;
            const obj6 = items(outer3_3[3]);
          }
          if (!tmp27) {
            scrollableNode();
          }
        } else {
          if ("object" === typeof getScrollableNode) {
            let setNativeProps;
            if (null != getScrollableNode) {
              setNativeProps = getScrollableNode.setNativeProps;
            }
            if ("function" === typeof setNativeProps) {
              if (isPublicInstanceResult) {
                if (items) {
                  getScrollableNode.setNativeProps(outer1_4.__getAnimatedValue());
                  if (null != result.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(result.current);
                  }
                  const _setTimeout = setTimeout;
                  result.current = setTimeout(() => {
                    result.current = null;
                    scrollableNode();
                  }, 48);
                } else {
                  return scrollableNode();
                }
              } else {
                return getScrollableNode.setNativeProps(outer1_4.__getAnimatedValue());
              }
            }
          }
          return scrollableNode();
        }
      };
      let scrollableNode = getScrollableNode;
      if ("object" === typeof getScrollableNode) {
        getScrollableNode = undefined;
        if (null != getScrollableNode) {
          getScrollableNode = getScrollableNode.getScrollableNode;
        }
        scrollableNode = getScrollableNode;
        if ("function" === typeof getScrollableNode) {
          scrollableNode = getScrollableNode.getScrollableNode();
        }
      }
      items = [];
      let result = tmp.__getNativeAnimatedEventTuples();
      let closure_3 = result;
      while (tmp7 !== undefined) {
        let tmp9 = outer2_4;
        let tmp10 = outer2_4(tmp8, 2);
        let obj2 = tmp10[1];
        let tmp11 = scrollableNode;
        let __attachResult = obj2.__attach(scrollableNode, tmp10[0]);
        let tmp13 = outer2_11;
        let tmp14 = items;
        let tmp15 = outer2_11(obj2, items);
        continue;
      }
      return () => {
        items.current = null;
        while (tmp !== undefined) {
          let tmp3 = outer3_4;
          let tmp4 = outer3_4(tmp2, 2);
          let obj = tmp4[1];
          let tmp5 = scrollableNode;
          let __detachResult = obj.__detach(scrollableNode, tmp4[0]);
          continue;
        }
        for (const item10022 of items) {
          let propValue = item10022.propValue;
          let removeListenerResult = propValue.removeListener(item10022.listenerId);
          continue;
        }
      };
    }, items);
    const items1 = [
      outer1_10(tmp, fn),
      callback(outer1_3[6])(outer1_5((getScrollableNode) => {
        let closure_0 = getScrollableNode;
        tmp.setNativeView(getScrollableNode);
        items.current = () => {
          let isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(getScrollableNode);
          if (!isPublicInstanceResult) {
            let nativeScrollRef;
            if (null != obj) {
              if (null != obj.getNativeScrollRef) {
                nativeScrollRef = obj.getNativeScrollRef();
              }
            }
            isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(nativeScrollRef);
            const obj3 = getScrollableNode(outer3_3[8]);
          }
          if (!isPublicInstanceResult) {
            let nativeScrollRef1;
            if (null != obj) {
              if (null != obj.getScrollResponder) {
                const scrollResponder = obj.getScrollResponder();
                if (null != scrollResponder) {
                  if (null != scrollResponder.getNativeScrollRef) {
                    nativeScrollRef1 = scrollResponder.getNativeScrollRef();
                  }
                }
              }
            }
            isPublicInstanceResult = getScrollableNode(outer3_3[8]).isPublicInstance(nativeScrollRef1);
            const obj4 = getScrollableNode(outer3_3[8]);
          }
          if (outer1_4.__isNative) {
            let tmp27 = !isPublicInstanceResult;
            if (!tmp27) {
              let result = items(outer3_3[3]).cxxNativeAnimatedEnabled();
              if (result) {
                result = items(outer3_3[3]).cxxNativeAnimatedRemoveJsSync();
                const obj7 = items(outer3_3[3]);
              }
              tmp27 = result;
              const obj6 = items(outer3_3[3]);
            }
            if (!tmp27) {
              scrollableNode();
            }
          } else {
            if ("object" === typeof getScrollableNode) {
              let setNativeProps;
              if (null != getScrollableNode) {
                setNativeProps = getScrollableNode.setNativeProps;
              }
              if ("function" === typeof setNativeProps) {
                if (isPublicInstanceResult) {
                  if (items) {
                    getScrollableNode.setNativeProps(outer1_4.__getAnimatedValue());
                    if (null != result.current) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(result.current);
                    }
                    const _setTimeout = setTimeout;
                    result.current = setTimeout(() => {
                      result.current = null;
                      scrollableNode();
                    }, 48);
                  } else {
                    return scrollableNode();
                  }
                } else {
                  return getScrollableNode.setNativeProps(outer1_4.__getAnimatedValue());
                }
              }
            }
            return scrollableNode();
          }
        };
        let scrollableNode = getScrollableNode;
        if ("object" === typeof getScrollableNode) {
          getScrollableNode = undefined;
          if (null != getScrollableNode) {
            getScrollableNode = getScrollableNode.getScrollableNode;
          }
          scrollableNode = getScrollableNode;
          if ("function" === typeof getScrollableNode) {
            scrollableNode = getScrollableNode.getScrollableNode();
          }
        }
        items = [];
        let result = tmp.__getNativeAnimatedEventTuples();
        let closure_3 = result;
        while (tmp7 !== undefined) {
          let tmp9 = outer2_4;
          let tmp10 = outer2_4(tmp8, 2);
          let obj2 = tmp10[1];
          let tmp11 = scrollableNode;
          let __attachResult = obj2.__attach(scrollableNode, tmp10[0]);
          let tmp13 = outer2_11;
          let tmp14 = items;
          let tmp15 = outer2_11(obj2, items);
          continue;
        }
        return () => {
          items.current = null;
          while (tmp !== undefined) {
            let tmp3 = outer3_4;
            let tmp4 = outer3_4(tmp2, 2);
            let obj = tmp4[1];
            let tmp5 = scrollableNode;
            let __detachResult = obj.__detach(scrollableNode, tmp4[0]);
            continue;
          }
          for (const item10022 of items) {
            let propValue = item10022.propValue;
            let removeListenerResult = propValue.removeListener(item10022.listenerId);
            continue;
          }
        };
      }, items))
    ];
    return items1;
  };
};
