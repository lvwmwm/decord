// Module ID: 345
// Function ID: 5062
// Name: _combineCallbacks
// Dependencies: []

// Module 345 (_combineCallbacks)
function _combineCallbacks(arg0, onComplete) {
  let fn = arg0;
  onComplete = arg0;
  const arg2 = onComplete;
  if (arg0) {
    if (onComplete.onComplete) {
      fn = () => {
        if (arg1.onComplete) {
          const onComplete = arg1.onComplete;
          onComplete(...arguments);
        }
        if (arg0) {
          arg0(...arguments);
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
  if (arg0 instanceof decayImpl(arg6[6])) {
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
        // continue
      }
      continue;
    }
    const items = [decayImpl(arg0.x, merged), decayImpl(arg0.y, merged1)];
    obj = { stopTogether: false };
    return parallelImpl(items, obj);
  } else if (arg0 instanceof decayImpl(arg6[7])) {
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
        // continue
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
  arg1 = arg0;
  const arg2 = arg1;
  function start(stopTracking, toValue) {
    const tmp = callback(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof toValue(start[8])) {
      let tmp14 = toValue(start[9]);
      const prototype2 = tmp14.prototype;
      tmp14 = new tmp14(stopTracking, toValue.toValue, toValue(start[10]), toValue, tmp);
      stopTracking.track(tmp14);
    } else {
      let tmp5 = toValue(start[10]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(toValue);
      stopTracking.animate(tmp5, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, springImpl);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(arg0, arg1, arg0);
        },
      stop() {
          arg0.stopAnimation();
        },
      reset() {
          arg0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(iterations, Object.assign({}, arg1, { iterations }));
        },
      _isUsingNativeDriver() {
          return arg1.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function timingImpl(arg0, arg1) {
  arg1 = arg0;
  const arg2 = arg1;
  function start(stopTracking, toValue) {
    const tmp = callback(arg2, toValue);
    stopTracking.stopTracking();
    if (toValue.toValue instanceof toValue(start[8])) {
      let tmp14 = toValue(start[9]);
      const prototype2 = tmp14.prototype;
      tmp14 = new tmp14(stopTracking, toValue.toValue, toValue(start[11]), toValue, tmp);
      stopTracking.track(tmp14);
    } else {
      let tmp5 = toValue(start[11]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(toValue);
      stopTracking.animate(tmp5, tmp);
    }
  }
  let tmp = maybeVectorAnim(arg0, arg1, timingImpl);
  if (!tmp) {
    const obj = {
      start(arg0, isLooping) {
          start(arg0, Object.assign({}, isLooping, { isLooping }), arg0);
        },
      stop() {
          arg0.stopAnimation();
        },
      reset() {
          arg0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(iterations, Object.assign({}, arg1, { iterations }));
        },
      _isUsingNativeDriver() {
          return arg1.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function decayImpl(arg0, arg1) {
  arg1 = arg0;
  const arg2 = arg1;
  function start(stopTracking) {
    stopTracking.stopTracking();
    let tmp3 = arg1(start[12]);
    tmp3 = new tmp3(arg1);
    stopTracking.animate(tmp3, callback(arg2, arg1));
  }
  let tmp = maybeVectorAnim(arg0, arg1, decayImpl);
  if (!tmp) {
    const obj = {
      start(arg0) {
          start(arg0, arg1, arg0);
        },
      stop() {
          arg0.stopAnimation();
        },
      reset() {
          arg0.resetAnimation();
        },
      _startNativeLoop(iterations) {
          start(iterations, Object.assign({}, arg1, { iterations }));
        },
      _isUsingNativeDriver() {
          return arg1.useNativeDriver || false;
        }
    };
    tmp = obj;
  }
  return tmp;
}
function sequenceImpl(arg0) {
  const arg1 = arg0;
  let closure_1 = 0;
  return {
    start(arg0, arg1) {
      let closure_1 = arg1;
      function onComplete(finished) {
        if (finished.finished) {
          const sum = closure_1 + 1;
          closure_1 = sum;
          if (sum === finished.length) {
            closure_1 = 0;
            if (finished) {
              finished(finished);
            }
          } else {
            finished[closure_1].start(onComplete, closure_1);
            const obj = finished[closure_1];
          }
        } else if (finished) {
          finished(finished);
        }
      }
      if (0 === arg0.length) {
        if (arg0) {
          let obj = { finished: true };
          arg0(obj);
        }
      } else {
        obj = arg0[closure_1];
        obj.start(onComplete, arg1);
      }
    },
    stop() {
      if (closure_1 < arg0.length) {
        arg0[closure_1].stop();
        const obj = arg0[closure_1];
      }
    },
    reset() {
      const item = arg0.forEach((reset) => {
        if (arg1 <= closure_1) {
          reset.reset();
        }
      });
      let closure_1 = 0;
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
  stopTogether = items;
  let closure_1 = 0;
  let closure_2 = {};
  let tmp = stopTogether;
  if (stopTogether) {
    tmp = false === stopTogether.stopTogether;
  }
  let closure_3 = !tmp;
  const obj = {
    start(arg0, arg1) {
      let closure_1 = arg1;
      if (closure_1 !== arg0.length) {
        const item = arg0.forEach((start) => {
          start = arg1;
          function cb(finished) {
            closure_2[arg1] = true;
            const sum = closure_1 + 1;
            closure_1 = sum;
            if (sum === arg1.length) {
              closure_1 = 0;
              if (arg1) {
                arg1(finished);
              }
            } else if (tmp2) {
              closure_4.stop();
            }
          }
          if (start) {
            start.start(cb, arg1);
          } else {
            const obj = { finished: true };
            cb(obj);
          }
        });
      } else if (arg0) {
        const obj = { finished: true };
        arg0(obj);
      }
    },
    stop() {
      const item = arg0.forEach((stop) => {
        if (!closure_2[arg1]) {
          stop.stop();
        }
        closure_2[arg1] = true;
      });
    },
    reset() {
      const item = arg0.forEach((reset) => {
        reset.reset();
        closure_2[arg1] = false;
        let closure_1 = 0;
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
  const maybeVectorAnim = obj;
  return obj;
}
function delayImpl(delay) {
  let tmp = arg2(arg6[13]);
  tmp = new tmp(0);
  const obj = { 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005447466926202258, 9223372036854775807: 9035156309112640000000000000000000000000000000000000000000000000000000000000000000000000000000, -9223372036854775808: -222642562571379900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: -399161991724106600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, delay };
  return timingImpl(tmp, obj);
}
arg5.default = {
  Value: arg2(arg6[13]),
  ValueXY: arg2(arg6[6]),
  Color: arg2(arg6[7]),
  Interpolation: arg2(arg6[15]),
  Node: arg2(arg6[8]),
  decay: decayImpl,
  timing: timingImpl,
  spring: springImpl,
  add: function addImpl(arg0, arg1) {
    let tmp = arg2(arg6[0]);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  subtract: function subtractImpl(arg0, arg1) {
    let tmp = arg2(arg6[1]);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  divide: function divideImpl(arg0, arg1) {
    let tmp = arg2(arg6[2]);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  multiply: function multiplyImpl(arg0, arg1) {
    let tmp = arg2(arg6[3]);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  modulo: function moduloImpl(arg0, arg1) {
    let tmp = arg2(arg6[4]);
    tmp = new tmp(arg0, arg1);
    return tmp;
  },
  diffClamp: function diffClampImpl(arg0, arg1, arg2) {
    let tmp = arg2(arg6[5]);
    tmp = new tmp(arg0, arg1, arg2);
    return tmp;
  },
  delay: delayImpl,
  sequence: sequenceImpl,
  parallel: parallelImpl,
  stagger: function staggerImpl(arg0, arr) {
    arr = arg0;
    return parallelImpl(arr.map((arg0, arg1) => {
      const items = [callback2(arg0 * arg1), arg0];
      return callback(items);
    }));
  },
  loop: function loopImpl(arg0) {
    const arg1 = arg0;
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const iterations = obj.iterations;
      let num = -1;
      if (undefined !== iterations) {
        num = iterations;
      }
      const arg2 = num;
      const resetBeforeIteration = obj.resetBeforeIteration;
      let closure_2 = undefined === resetBeforeIteration || resetBeforeIteration;
      let closure_3 = false;
      let closure_4 = 0;
      obj = {
        start(self) {
            function restart(self) {
              if (arguments.length > 0) {
                if (undefined !== arguments[0]) {
                  let first = arguments[0];
                }
                if (!closure_3) {
                  if (closure_4 !== restart) {
                    if (false !== first.finished) {
                      closure_4 = closure_4 + 1;
                      if (closure_2) {
                        self.reset();
                      }
                      self.start(restart, -1 === restart);
                    }
                  }
                }
                if (self) {
                  self(first);
                }
              }
              first = { finished: true };
            }
            let num = restart;
            if (self) {
              num = 0;
              if (0 !== num) {
                if (self._isUsingNativeDriver()) {
                  self._startNativeLoop(num);
                } else {
                  restart();
                }
              }
            }
            if (self) {
              const obj = { finished: true };
              self(obj);
            }
          },
        stop() {
            let closure_3 = true;
            arg0.stop();
          },
        reset() {
            let closure_4 = 0;
            let closure_3 = false;
            arg0.reset();
          },
        _startNativeLoop() {
            const error = new Error("Loops run using the native driver cannot contain Animated.loop animations");
            throw error;
          },
        _isUsingNativeDriver() {
            return arg0._isUsingNativeDriver();
          }
      };
      return obj;
    }
    obj = {};
  },
  event: function eventImpl(_argMapping, useNativeDriver) {
    const animatedEvent = new useNativeDriver(arg6[14]).AnimatedEvent(_argMapping, useNativeDriver);
    let __getHandlerResult = animatedEvent;
    if (!animatedEvent.__isNative) {
      __getHandlerResult = animatedEvent.__getHandler();
    }
    return __getHandlerResult;
  },
  createAnimatedComponent: arg2(arg6[16]),
  attachNativeEvent: arg1(arg6[14]).attachNativeEventImpl,
  forkEvent: function forkEventImpl(__addListener, listener) {
    listener = __addListener;
    const arg2 = listener;
    if (!__addListener) {
      return listener;
    } else if (__addListener instanceof listener(arg6[14]).AnimatedEvent) {
      __addListener.__addListener(listener);
      let fn = __addListener;
    } else {
      fn = () => {
        if ("function" === typeof arg0) {
          arg0(...arguments);
        }
        arg1(...arguments);
      };
    }
  },
  unforkEvent: function unforkEventImpl(__removeListener) {
    let tmp = __removeListener;
    if (__removeListener) {
      tmp = __removeListener instanceof arg1(arg6[14]).AnimatedEvent;
    }
    if (tmp) {
      __removeListener.__removeListener(arg1);
    }
  },
  Event: arg1(arg6[14]).AnimatedEvent
};
