// Module ID: 345
// Function ID: 5062
// Name: _combineCallbacks
// Dependencies: [346, 362, 363, 364, 365, 366, 367, 368, 358, 369, 370, 378, 379, 347, 377, 354, 380]

// Module 345 (_combineCallbacks)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function _combineCallbacks(arg0, onComplete) {
  let fn = arg0;
  let closure_0 = arg0;
  let closure_1 = onComplete;
  if (arg0) {
    if (onComplete.onComplete) {
      fn = () => {
        if (onComplete.onComplete) {
          onComplete = onComplete.onComplete;
          onComplete(...arguments);
        }
        if (callback) {
          callback(...arguments);
        }
      };
    }
    return fn;
  }
  if (!fn) {
    fn = onComplete.onComplete;
  }
}
function maybeVectorAnim(arg0, obj, decayImpl) {
  let a;
  let b;
  let g;
  let r;
  let x;
  let y;
  if (arg0 instanceof module(367)) {
    const _Object5 = Object;
    const merged = Object.assign({}, obj);
    const _Object6 = Object;
    const merged1 = Object.assign({}, obj);
    for (const key10062 in arg1) {
      let tmp23 = key10062;
      ({ x, y } = arg1[key10062]);
      let tmp19 = undefined !== x;
      if (tmp19) {
        tmp19 = undefined !== y;
      }
      if (!tmp19) {
        continue;
      } else {
        merged[key10062] = x;
        merged1[key10062] = y;
        continue;
      }
      continue;
    }
    const items = [decayImpl(arg0.x, merged), decayImpl(arg0.y, merged1)];
    obj = { stopTogether: false };
    return parallelImpl(items, obj);
  } else if (arg0 instanceof module(368)) {
    const _Object = Object;
    const merged2 = Object.assign({}, obj);
    const _Object2 = Object;
    const merged3 = Object.assign({}, obj);
    const _Object3 = Object;
    const merged4 = Object.assign({}, obj);
    const _Object4 = Object;
    const merged5 = Object.assign({}, obj);
    for (const key10036 in arg1) {
      let tmp22 = key10036;
      ({ r, g, b, a } = arg1[key10036]);
      let tmp10 = undefined !== r;
      if (tmp10) {
        tmp10 = undefined !== g;
      }
      if (tmp10) {
        tmp10 = undefined !== b;
      }
      if (tmp10) {
        tmp10 = undefined !== a;
      }
      if (!tmp10) {
        continue;
      } else {
        merged2[key10036] = r;
        merged3[key10036] = g;
        merged4[key10036] = b;
        merged5[key10036] = a;
        continue;
      }
      continue;
    }
    const tmp11 = decayImpl(arg0.r, merged2);
    const tmp12 = decayImpl(arg0.g, merged3);
    const items1 = [tmp11, tmp12, decayImpl(arg0.b, merged4), decayImpl(arg0.a, merged5)];
    obj = { stopTogether: false };
    return parallelImpl(items1, obj);
  } else {
    return null;
  }
}
function springImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function start(stopTracking, toValue) {
    const tmp = outer1_3(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof lib(start[8])) {
      let tmp14 = lib(start[9]);
      const prototype2 = tmp14.prototype;
      tmp14 = new tmp14(stopTracking, toValue.toValue, lib(start[10]), toValue, tmp);
      stopTracking.track(tmp14);
    } else {
      let tmp5 = lib(start[10]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(toValue);
      stopTracking.animate(tmp5, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, springImpl);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(closure_0, closure_1, arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return lib.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function timingImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function start(stopTracking, toValue) {
    const tmp = outer1_3(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof lib(start[8])) {
      let tmp14 = lib(start[9]);
      const prototype2 = tmp14.prototype;
      tmp14 = new tmp14(stopTracking, toValue.toValue, lib(start[11]), toValue, tmp);
      stopTracking.track(tmp14);
    } else {
      let tmp5 = lib(start[11]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(toValue);
      stopTracking.animate(tmp5, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, timingImpl);
  if (!tmp) {
    const obj = {
      start(arg0, isLooping) {
          start(closure_0, Object.assign({}, closure_1, { isLooping }), arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return lib.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function decayImpl(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function start(stopTracking) {
    stopTracking.stopTracking();
    let tmp3 = lib(start[12]);
    tmp3 = new tmp3(arg1);
    stopTracking.animate(tmp3, outer1_3(arg2, arg1));
  }
  let tmp = maybeVectorAnim(arg0, arg1, decayImpl);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(closure_0, closure_1, arg0);
        },
      stop() {
          closure_0.stopAnimation();
        },
      reset() {
          closure_0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(closure_0, Object.assign({}, closure_1, { iterations }));
        },
      _isUsingNativeDriver() {
          return lib.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  return {
    start(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = closure_1 + 1;
          closure_1 = sum;
          if (sum === lib.length) {
            closure_1 = 0;
            if (lib) {
              lib(finished);
            }
          } else {
            lib[closure_1].start(onComplete, closure_1);
            const obj = lib[closure_1];
          }
        } else if (lib) {
          lib(finished);
        }
      }
      if (0 === closure_0.length) {
        if (arg0) {
          let obj = { finished: true };
          arg0(obj);
        }
      } else {
        obj = closure_0[closure_1];
        obj.start(onComplete, arg1);
      }
    },
    stop() {
      if (c1 < closure_0.length) {
        closure_0[c1].stop();
        const obj = closure_0[c1];
      }
    },
    reset() {
      const item = closure_0.forEach((reset) => {
        if (arg1 <= c1) {
          reset.reset();
        }
      });
      let c1 = 0;
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.sequence animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
}
function parallelImpl(items, stopTogether) {
  let closure_0 = items;
  let c1 = 0;
  let closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = false === stopTogether.stopTogether;
  }
  let closure_3 = !tmp;
  let obj = {
    start(arg0, arg1) {
      const items = arg0;
      let closure_1 = arg1;
      if (closure_1 !== items.length) {
        const item = items.forEach((start) => {
          let closure_0 = arg1;
          function cb(finished) {
            outer2_2[lib] = true;
            const sum = closure_1 + 1;
            closure_1 = sum;
            if (sum === lib.length) {
              closure_1 = 0;
              if (lib) {
                lib(finished);
              }
            } else if (tmp2) {
              outer2_4.stop();
            }
          }
          if (start) {
            start.start(cb, closure_1);
          } else {
            const obj = { finished: true };
            cb(obj);
          }
        });
      } else if (arg0) {
        let obj = { finished: true };
        arg0(obj);
      }
    },
    stop() {
      const item = items.forEach((stop) => {
        if (!outer1_2[arg1]) {
          stop.stop();
        }
        outer1_2[arg1] = true;
      });
    },
    reset() {
      const item = items.forEach((reset) => {
        reset.reset();
        outer1_2[arg1] = false;
        const outer1_1 = 0;
      });
    },
    _startNativeLoop() {
      const error = new Error("Loops run using the native driver cannot contain Animated.parallel animations");
      throw error;
    },
    _isUsingNativeDriver() {
      return false;
    }
  };
  return obj;
}
function delayImpl(delay) {
  let tmp = module(347);
  tmp = new tmp(0);
  const obj = { toValue: 0, delay, duration: 0, useNativeDriver: false };
  return timingImpl(tmp, obj);
}
arg5.default = {
  Value: require("_isNativeReflectConstruct"),
  ValueXY: require("_isNativeReflectConstruct"),
  Color: require("_isNativeReflectConstruct"),
  Interpolation: require("_isNativeReflectConstruct"),
  Node: require("_assertNativeAnimatedModule"),
  decay: decayImpl,
  timing: timingImpl,
  spring: springImpl,
  add: function addImpl(arg0, arg1) {
    let tmp = module(346);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  subtract: function subtractImpl(arg0, arg1) {
    let tmp = module(362);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  divide: function divideImpl(arg0, arg1) {
    let tmp = module(363);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  multiply: function multiplyImpl(arg0, arg1) {
    let tmp = module(364);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  modulo: function moduloImpl(arg0, arg1) {
    let tmp = module(365);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  diffClamp: function diffClampImpl(arg0, arg1, arg2) {
    let tmp = module(366);
    tmp = new tmp(arg0, arg1, arg2);
    return tmp;
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger: function staggerImpl(arg0, arr) {
    let closure_0 = arg0;
    return parallelImpl(arr.map((arg0, arg1) => {
      const items = [outer1_10(closure_0 * arg1), arg0];
      return outer1_8(items);
    }));
  },
  loop: function loopImpl(arg0) {
    let closure_0 = arg0;
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const iterations = obj.iterations;
      let num = -1;
      if (undefined !== iterations) {
        num = iterations;
      }
      const resetBeforeIteration = obj.resetBeforeIteration;
      let closure_2 = undefined === resetBeforeIteration || resetBeforeIteration;
      let c3 = false;
      let c4 = 0;
      obj = {
        start(arg0) {
            const navigation = arg0;
            function restart() {
              if (arguments.length > 0) {
                if (undefined !== arguments[0]) {
                  let first = arguments[0];
                }
                if (!outer1_3) {
                  if (outer1_4 !== restart) {
                    if (false !== first.finished) {
                      outer1_4 = outer1_4 + 1;
                      if (outer1_2) {
                        navigation.reset();
                      }
                      navigation.start(restart, -1 === restart);
                    }
                  }
                }
                if (navigation) {
                  navigation(first);
                }
              }
              first = { finished: true };
            }
            if (navigation) {
              if (0 !== restart) {
                if (navigation._isUsingNativeDriver()) {
                  navigation._startNativeLoop(restart);
                } else {
                  restart();
                }
              }
            }
            if (arg0) {
              const obj = { finished: true };
              arg0(obj);
            }
          },
        stop() {
            let c3 = true;
            navigation.stop();
          },
        reset() {
            let c4 = 0;
            let c3 = false;
            navigation.reset();
          },
        _startNativeLoop() {
            const error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
            throw error;
          },
        _isUsingNativeDriver() {
            return navigation._isUsingNativeDriver();
          }
      };
      return obj;
    }
    obj = {};
  },
  event: function eventImpl(_argMapping, useNativeDriver) {
    const animatedEvent = new require(377) /* attachNativeEventImpl */.AnimatedEvent(_argMapping, useNativeDriver);
    let __getHandlerResult = animatedEvent;
    if (!animatedEvent.__isNative) {
      __getHandlerResult = animatedEvent.__getHandler();
    }
    return __getHandlerResult;
  },
  createAnimatedComponent: require("unstable_createAnimatedComponentWithAllowlist"),
  attachNativeEvent: require("attachNativeEventImpl").attachNativeEventImpl,
  forkEvent: function forkEventImpl(__addListener, listener) {
    const _require = __addListener;
    let closure_1 = listener;
    if (!__addListener) {
      return listener;
    } else if (__addListener instanceof _require(377).AnimatedEvent) {
      __addListener.__addListener(listener);
      let fn = __addListener;
    } else {
      fn = () => {
        if ("function" === typeof __addListener) {
          __addListener(...arguments);
        }
        listener(...arguments);
      };
    }
  },
  unforkEvent: function unforkEventImpl(__removeListener) {
    let tmp = __removeListener;
    if (__removeListener) {
      tmp = __removeListener instanceof require(377) /* attachNativeEventImpl */.AnimatedEvent;
    }
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: require("attachNativeEventImpl").AnimatedEvent
};
