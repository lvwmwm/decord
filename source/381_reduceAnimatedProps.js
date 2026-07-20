// Module ID: 381
// Function ID: 5671
// Name: reduceAnimatedProps
// Dependencies: []
// Exports: default

// Module 381 (reduceAnimatedProps)
function reduceAnimatedProps(__getValueWithStaticProps, style) {
  return Object.assign({}, __getValueWithStaticProps.__getValueWithStaticProps(style), { collapsable: false });
}
function addListenersToPropsValue(propValue, arr) {
  if (propValue instanceof importDefault(dependencyMap[7])) {
    const obj = {
      propValue,
      listenerId: propValue.addListener(() => {

        })
    };
    arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(propValue)) {
      for (const item10021 of arg0) {
        let tmp5 = closure_11;
        let tmp6 = arg1;
        let tmp7 = closure_11(item10021, arg1);
      }
    } else {
      const _Object = Object;
      if (propValue instanceof Object) {
        for (const key10018 in arg0) {
          let tmp10 = key10018;
          let tmp11 = closure_11;
          let tmp12 = closure_11(arg0[key10018], arg1);
        }
      }
    }
  }
}
function useAnimatedPropsLifecycleWithPrevNodeRef(arg0) {
  const arg1 = arg0;
  let closure_1 = callback2(null);
  let closure_2 = callback2(false);
  callback(() => {
    closure_2.current = false;
    return () => {
      closure_2.current = true;
    };
  }, []);
  const items = [arg0];
  callback(() => {
    arg0.__attach();
    if (null != ref.current) {
      const current = ref.current;
      const result = current.__restoreDefaultValues();
      current.__detach();
      ref.current = null;
    }
    return () => {
      if (ref.current) {
        closure_0.__detach();
      } else {
        closure_1.current = closure_0;
      }
    };
  }, items);
}
function useAnimatedPropsLifecycleWithCleanupInMicrotask(arg0) {
  const arg1 = arg0;
  let closure_1 = callback2(false);
  const items = [arg0];
  callback(() => {
    closure_1.current = true;
    arg0.__attach();
    return () => {
      closure_1.current = false;
      queueMicrotask(() => {
        if (ref.current) {
          const result = closure_0.__restoreDefaultValues();
        }
        closure_0.__detach();
      });
    };
  }, items);
}
let closure_4 = importDefault(dependencyMap[0]);
({ useCallback: closure_5, useEffect: closure_6, useInsertionEffect: closure_7, useReducer: closure_8, useRef: closure_9 } = arg1(dependencyMap[1]));

export default function createAnimatedPropsHook(arg0) {
  const arg1 = arg0;
  let closure_1 = arg1(dependencyMap[2]).createAnimatedPropsMemoHook(arg0);
  const obj = arg1(dependencyMap[2]);
  const importAll = importAll(dependencyMap[3]).shouldUseSetNativePropsInFabric();
  return function useAnimatedProps(fn, items) {
    const callback = tmp(callback5((arg0) => arg0 + 1, 0), 2)[1];
    const callback2 = callback6(null);
    let closure_3 = callback6(null);
    const tmp = callback(() => {
      let tmp = callback(closure_3[4]);
      tmp = new tmp(arg0, () => {
        let currentResult;
        if (null != ref.current) {
          currentResult = ref.current();
        }
        return currentResult;
      }, arg0);
      return tmp;
    }, fn);
    callback4(() => {
      if (!callback(closure_3[5]).shouldSignalBatch) {
        const API = callback(closure_3[5]).API;
        API.flushQueue();
        const tmp = callback;
      }
      let closure_0 = null;
      if (tmp.__isNative) {
        const nativeEventEmitter = callback(closure_3[5]).nativeEventEmitter;
        closure_0 = nativeEventEmitter.addListener("onUserDrivenAnimationEnded", (arg0) => {
          closure_4.update();
        });
      }
      return () => {
        if (null != closure_0) {
          closure_0.remove();
        }
      };
    });
    callback2(closure_3[3]).scheduleAnimatedCleanupInMicrotask() ? closure_13 : closure_12(tmp);
    items = [tmp];
    const obj = callback2(closure_3[3]);
    const tmp4 = callback3((getScrollableNode) => {
      tmp.setNativeView(getScrollableNode);
      closure_2.current = () => {
        let isPublicInstanceResult = arg0(result[8]).isPublicInstance(arg0);
        if (!isPublicInstanceResult) {
          let nativeScrollRef;
          if (null != obj) {
            if (null != obj.getNativeScrollRef) {
              nativeScrollRef = obj.getNativeScrollRef();
            }
          }
          isPublicInstanceResult = arg0(result[8]).isPublicInstance(nativeScrollRef);
          const obj3 = arg0(result[8]);
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
          isPublicInstanceResult = arg0(result[8]).isPublicInstance(nativeScrollRef1);
          const obj4 = arg0(result[8]);
        }
        if (lib.__isNative) {
          let tmp27 = !isPublicInstanceResult;
          if (!tmp27) {
            let result = items(result[3]).cxxNativeAnimatedEnabled();
            if (result) {
              result = items(result[3]).cxxNativeAnimatedRemoveJsSync();
              const obj7 = items(result[3]);
            }
            tmp27 = result;
            const obj6 = items(result[3]);
          }
          if (!tmp27) {
            scrollableNode();
          }
        } else {
          if ("object" === typeof arg0) {
            let setNativeProps;
            if (null != arg0) {
              setNativeProps = arg0.setNativeProps;
            }
            if ("function" === typeof setNativeProps) {
              if (isPublicInstanceResult) {
                if (items) {
                  arg0.setNativeProps(lib.__getAnimatedValue());
                  if (null != result.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(result.current);
                  }
                  const _setTimeout = setTimeout;
                  result.current = setTimeout(() => {
                    closure_3.current = null;
                    callback();
                  }, 48);
                } else {
                  return scrollableNode();
                }
              } else {
                return arg0.setNativeProps(lib.__getAnimatedValue());
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
      let closure_1 = scrollableNode;
      const items = [];
      closure_2 = items;
      const result = tmp.__getNativeAnimatedEventTuples();
      let closure_3 = result;
      while (tmp7 !== undefined) {
        let tmp9 = tmp;
        let tmp10 = tmp(tmp8, 2);
        let obj2 = tmp10[1];
        let tmp11 = scrollableNode;
        let __attachResult = obj2.__attach(scrollableNode, tmp10[0]);
        let tmp13 = callback2;
        let tmp14 = items;
        let tmp15 = callback2(obj2, items);
        // continue
      }
      return () => {
        items.current = null;
        while (tmp !== undefined) {
          let tmp3 = lib;
          let tmp4 = lib(tmp2, 2);
          let obj = tmp4[1];
          let tmp5 = scrollableNode;
          let __detachResult = obj.__detach(scrollableNode, tmp4[0]);
          // continue
        }
        for (const item10022 of closure_2) {
          let propValue = item10022.propValue;
          let removeListenerResult = propValue.removeListener(item10022.listenerId);
        }
      };
    }, items);
    const items1 = [
      callback7(tmp, fn),
      callback(closure_3[6])(callback3((getScrollableNode) => {
        tmp.setNativeView(getScrollableNode);
        closure_2.current = () => {
          let isPublicInstanceResult = arg0(result[8]).isPublicInstance(arg0);
          if (!isPublicInstanceResult) {
            let nativeScrollRef;
            if (null != obj) {
              if (null != obj.getNativeScrollRef) {
                nativeScrollRef = obj.getNativeScrollRef();
              }
            }
            isPublicInstanceResult = arg0(result[8]).isPublicInstance(nativeScrollRef);
            const obj3 = arg0(result[8]);
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
            isPublicInstanceResult = arg0(result[8]).isPublicInstance(nativeScrollRef1);
            const obj4 = arg0(result[8]);
          }
          if (lib.__isNative) {
            let tmp27 = !isPublicInstanceResult;
            if (!tmp27) {
              let result = items(result[3]).cxxNativeAnimatedEnabled();
              if (result) {
                result = items(result[3]).cxxNativeAnimatedRemoveJsSync();
                const obj7 = items(result[3]);
              }
              tmp27 = result;
              const obj6 = items(result[3]);
            }
            if (!tmp27) {
              scrollableNode();
            }
          } else {
            if ("object" === typeof arg0) {
              let setNativeProps;
              if (null != arg0) {
                setNativeProps = arg0.setNativeProps;
              }
              if ("function" === typeof setNativeProps) {
                if (isPublicInstanceResult) {
                  if (items) {
                    arg0.setNativeProps(lib.__getAnimatedValue());
                    if (null != result.current) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(result.current);
                    }
                    const _setTimeout = setTimeout;
                    result.current = setTimeout(() => {
                      closure_3.current = null;
                      callback();
                    }, 48);
                  } else {
                    return scrollableNode();
                  }
                } else {
                  return arg0.setNativeProps(lib.__getAnimatedValue());
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
        let closure_1 = scrollableNode;
        const items = [];
        closure_2 = items;
        const result = tmp.__getNativeAnimatedEventTuples();
        let closure_3 = result;
        while (tmp7 !== undefined) {
          let tmp9 = tmp;
          let tmp10 = tmp(tmp8, 2);
          let obj2 = tmp10[1];
          let tmp11 = scrollableNode;
          let __attachResult = obj2.__attach(scrollableNode, tmp10[0]);
          let tmp13 = callback2;
          let tmp14 = items;
          let tmp15 = callback2(obj2, items);
          // continue
        }
        return () => {
          items.current = null;
          while (tmp !== undefined) {
            let tmp3 = lib;
            let tmp4 = lib(tmp2, 2);
            let obj = tmp4[1];
            let tmp5 = scrollableNode;
            let __detachResult = obj.__detach(scrollableNode, tmp4[0]);
            // continue
          }
          for (const item10022 of closure_2) {
            let propValue = item10022.propValue;
            let removeListenerResult = propValue.removeListener(item10022.listenerId);
          }
        };
      }, items))
    ];
    return items1;
  };
};
