// Module ID: 282
// Function ID: 4410
// Name: normalizeDelay
// Dependencies: []

// Module 282 (normalizeDelay)
function normalizeDelay(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let num2 = 0;
  if (arguments.length > 2) {
    num2 = 0;
    if (undefined !== arguments[2]) {
      num2 = arguments[2];
    }
  }
  if (null != arg0) {
    num2 = arg0;
  }
  return Math.max(num, num2);
}
function convertPointerEventToMouseEvent(nativeEvent) {
  let clientX;
  let clientY;
  ({ clientX, clientY } = nativeEvent.nativeEvent);
  nativeEvent = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: nativeEvent.timeStamp };
  return Object.assign({}, nativeEvent, { nativeEvent });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = Object.freeze({ NOT_RESPONDER: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }, RESPONDER_INACTIVE_PRESS_IN: {}, RESPONDER_INACTIVE_PRESS_OUT: { "Bool(true)": "RED_NEW_46", "Bool(true)": 1, "Bool(true)": "column-reverse", "Bool(true)": "absolute", "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": 0 }, RESPONDER_ACTIVE_PRESS_IN: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }, RESPONDER_ACTIVE_PRESS_OUT: {}, RESPONDER_ACTIVE_LONG_PRESS_IN: {}, RESPONDER_ACTIVE_LONG_PRESS_OUT: {}, ERROR: { "Bool(true)": "start", "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "accessibilityRole", "Bool(true)": "gap", "Bool(true)": "enumerable", "Bool(true)": "Array" } });
function isActiveSignal(arg0) {
  let tmp = "RESPONDER_ACTIVE_PRESS_IN" === arg0;
  if (!tmp) {
    tmp = "RESPONDER_ACTIVE_LONG_PRESS_IN" === arg0;
  }
  return tmp;
}
function isActivationSignal(arg0) {
  let tmp = "RESPONDER_ACTIVE_PRESS_OUT" === arg0;
  if (!tmp) {
    tmp = "RESPONDER_ACTIVE_PRESS_IN" === arg0;
  }
  return tmp;
}
function isPressInSignal(arg0) {
  let tmp = "RESPONDER_INACTIVE_PRESS_IN" === arg0;
  if (!tmp) {
    tmp = "RESPONDER_ACTIVE_PRESS_IN" === arg0;
  }
  if (!tmp) {
    tmp = "RESPONDER_ACTIVE_LONG_PRESS_IN" === arg0;
  }
  return tmp;
}
let closure_9 = 10;
function getTouchFromPressEvent(nativeEvent) {
  let changedTouches;
  let touches;
  ({ changedTouches, touches } = nativeEvent.nativeEvent);
  if (null != touches) {
    if (touches.length > 0) {
      nativeEvent = touches[0];
    }
    return nativeEvent;
  }
  if (null != changedTouches) {
    if (changedTouches.length > 0) {
      nativeEvent = changedTouches[0];
    }
  }
  nativeEvent = nativeEvent.nativeEvent;
}

export default () => {
  class Pressability {
    constructor(arg0) {
      Pressability = this;
      tmp = closure_3(this, Pressability);
      this._eventHandlers = null;
      this._hoverInDelayTimeout = null;
      this._hoverOutDelayTimeout = null;
      this._isHovered = false;
      this._longPressDelayTimeout = null;
      this._pressDelayTimeout = null;
      this._pressOutDelayTimeout = null;
      this._responderID = null;
      this._responderRegion = null;
      this._touchState = "NOT_RESPONDER";
      this._measureCallback = (arg0, arg1, arg2, arg3, left, top) => {
        let tmp = arg0;
        if (!arg0) {
          tmp = arg1;
        }
        if (!tmp) {
          tmp = arg2;
        }
        if (!tmp) {
          tmp = arg3;
        }
        if (!tmp) {
          tmp = left;
        }
        if (!tmp) {
          tmp = top;
        }
        if (tmp) {
          const obj = { bottom: top + arg3, left, right: left + arg2, top };
          self._responderRegion = obj;
        }
      };
      configureResult = this.configure(arg0);
      return;
    }
  }
  const arg1 = Pressability;
  let obj = {
    key: "configure",
    value: function configure(_config) {
      this._config = _config;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "reset",
    value: function reset() {
      const result = this._cancelHoverInDelayTimeout();
      const result1 = this._cancelHoverOutDelayTimeout();
      const result2 = this._cancelLongPressDelayTimeout();
      const result3 = this._cancelPressDelayTimeout();
      const result4 = this._cancelPressOutDelayTimeout();
      this._config = Object.freeze({});
    }
  };
  items[1] = obj;
  obj = {
    key: "getEventHandlers",
    value: function getEventHandlers() {
      const self = this;
      if (null == this._eventHandlers) {
        self._eventHandlers = self._createEventHandlers();
      }
      return self._eventHandlers;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_createEventHandlers",
    value: function _createEventHandlers() {
      const Pressability = this;
      let obj = {
        onBlur(arg0) {
          const onBlur = self._config.onBlur;
          if (null != onBlur) {
            onBlur(arg0);
          }
        },
        onFocus(arg0) {
          const onFocus = self._config.onFocus;
          if (null != onFocus) {
            onFocus(arg0);
          }
        }
      };
      obj = {
        onStartShouldSetResponder() {
          return null == !self._config.disabled || !self._config.disabled;
        },
        onResponderGrant(persist) {
          const self = persist;
          persist.persist();
          const result = self._cancelPressOutDelayTimeout();
          self._responderID = persist.currentTarget;
          self._touchState = "NOT_RESPONDER";
          self._receiveSignal("RESPONDER_GRANT", persist);
          const tmp4 = callback2(self._config.delayPressIn);
          if (tmp4 > 0) {
            const _setTimeout = setTimeout;
            self._pressDelayTimeout = setTimeout(() => {
              arg0._receiveSignal("DELAY", arg0);
            }, tmp4);
          } else {
            self._receiveSignal("DELAY", persist);
          }
          self._longPressDelayTimeout = setTimeout(() => {
            arg0._handleLongPress(arg0);
          }, callback2(self._config.delayLongPress, 10, 500 - tmp4) + tmp4);
          return true === self._config.blockNativeResponder;
        },
        onResponderMove(arg0) {
          const onPressMove = self._config.onPressMove;
          if (null != onPressMove) {
            onPressMove(arg0);
          }
          const _responderRegion = self._responderRegion;
          if (null != _responderRegion) {
            const tmp15 = callback(arg0);
            if (null == tmp15) {
              const result = self._cancelLongPressDelayTimeout();
              self._receiveSignal("LEAVE_PRESS_RECT", arg0);
            } else {
              if (null != self._touchActivatePosition) {
                const _Math = Math;
                if (Math.hypot(self._touchActivatePosition.pageX - tmp15.pageX, self._touchActivatePosition.pageY - tmp15.pageY) > closure_9) {
                  const result1 = self._cancelLongPressDelayTimeout();
                }
              }
              if (self._isTouchWithinResponderRegion(tmp15, _responderRegion)) {
                obj._receiveSignal("ENTER_PRESS_RECT", arg0);
              } else {
                const result2 = obj._cancelLongPressDelayTimeout();
                obj._receiveSignal("LEAVE_PRESS_RECT", arg0);
              }
            }
          }
        },
        onResponderRelease(arg0) {
          self._receiveSignal("RESPONDER_RELEASE", arg0);
        },
        onResponderTerminate(arg0) {
          self._receiveSignal("RESPONDER_TERMINATED", arg0);
        },
        onResponderTerminationRequest() {
          const cancelable = self._config.cancelable;
          return null == cancelable || cancelable;
        },
        onClick(nativeEvent) {
          if (null != nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
          }
          let currentTarget;
          if (null != nativeEvent) {
            currentTarget = nativeEvent.currentTarget;
          }
          let target;
          if (null != nativeEvent) {
            target = nativeEvent.target;
          }
          if (currentTarget === target) {
            const onPress = self._config.onPress;
            let tmp6 = null != onPress;
            if (tmp6) {
              tmp6 = true !== tmp5;
            }
            if (tmp6) {
              onPress(nativeEvent);
            }
          } else if (null != nativeEvent) {
            nativeEvent.stopPropagation();
          }
        }
      };
      if (obj3.shouldPressibilityUseW3CPointerEventsForHover()) {
        obj = { onPointerEnter: undefined, onPointerLeave: undefined };
        const _config = this._config;
        const onHoverIn = _config.onHoverIn;
        const onHoverOut = _config.onHoverOut;
        if (null != onHoverIn) {
          obj.onPointerEnter = (persist) => {
            const self = persist;
            self._isHovered = true;
            const result = self._cancelHoverOutDelayTimeout();
            if (null != onHoverIn) {
              const tmp4 = callback2(self._config.delayHoverIn);
              if (tmp4 > 0) {
                persist.persist();
                const _setTimeout = setTimeout;
                self._hoverInDelayTimeout = setTimeout(() => {
                  callback(callback2(arg0));
                }, tmp4);
              } else {
                onHoverIn(callback3(persist));
              }
            }
          };
        }
        if (null != onHoverOut) {
          obj.onPointerLeave = (persist) => {
            const self = persist;
            if (self._isHovered) {
              self._isHovered = false;
              const result = self._cancelHoverInDelayTimeout();
              if (null != onHoverOut) {
                const tmp7 = callback2(self._config.delayHoverOut);
                if (tmp7 > 0) {
                  persist.persist();
                  const _setTimeout = setTimeout;
                  self._hoverOutDelayTimeout = setTimeout(() => {
                    callback(callback2(arg0));
                  }, tmp7);
                } else {
                  onHoverOut(callback3(persist));
                }
              }
            }
          };
        }
        const _Object3 = Object;
        const _Object4 = Object;
        return Object.assign({}, obj, obj, obj);
      } else {
        const _Object = Object;
        const _Object2 = Object;
        return Object.assign({}, obj, obj, null);
      }
      const obj3 = onHoverIn(onHoverOut[2]);
    }
  };
  items[4] = {
    key: "_receiveSignal",
    value: function _receiveSignal(arg0, nativeEvent) {
      const self = this;
      const Pressability = arg0;
      if (null != nativeEvent.nativeEvent.timestamp) {
        nativeEvent(closure_2[3]).emitEvent(() => ({ signal: arg0, nativeTimestamp: arg1.nativeEvent.timestamp }));
        const obj = nativeEvent(closure_2[3]);
      }
      const _touchState = self._touchState;
      let tmp6 = null == self._responderID;
      if (tmp6) {
        tmp6 = "RESPONDER_RELEASE" === arg0;
      }
      if (!tmp6) {
        let tmp10 = null != tmp5;
        if (tmp10) {
          tmp10 = "ERROR" !== tmp5;
        }
        let str3 = "<<host component>>";
        if ("number" === typeof self._responderID) {
          str3 = self._responderID;
        }
        nativeEvent(closure_2[4])(tmp10, "Pressability: Invalid signal `%s` for state `%s` on responder: %s", arg0, _touchState, str3);
        if (_touchState !== tmp5) {
          const result = self._performTransitionSideEffects(_touchState, tmp5, arg0, nativeEvent);
          self._touchState = tmp5;
        }
        const tmp9 = nativeEvent(closure_2[4]);
      }
    }
  };
  items[5] = {
    key: "_performTransitionSideEffects",
    value: function _performTransitionSideEffects(_touchState, arg1, arg2, nativeEvent) {
      const self = this;
      let tmp = "RESPONDER_TERMINATED" === arg2;
      if (!tmp) {
        tmp = "RESPONDER_RELEASE" === arg2;
      }
      if (tmp) {
        self._touchActivatePosition = null;
        const result = self._cancelLongPressDelayTimeout();
      }
      let tmp4 = "NOT_RESPONDER" === _touchState;
      if (tmp4) {
        tmp4 = "RESPONDER_INACTIVE_PRESS_IN" === arg1;
      }
      const tmp5 = callback4(_touchState);
      let tmp6 = !tmp5;
      if (!tmp5) {
        tmp6 = callback4(arg1);
      }
      if (!tmp4) {
        tmp4 = tmp6;
      }
      if (tmp4) {
        const result1 = self._measureResponderRegion();
      }
      if (callback5(_touchState)) {
        if ("LONG_PRESS_DETECTED" === arg2) {
          const onLongPress = self._config.onLongPress;
          if (null != onLongPress) {
            onLongPress(nativeEvent);
          }
        }
      }
      const tmp11 = callback3(_touchState);
      let tmp12 = callback3(arg1);
      if (!tmp11) {
        if (tmp12) {
          self._activate(nativeEvent);
        }
        if (callback5(_touchState)) {
          if ("RESPONDER_RELEASE" === arg2) {
            if (!tmp12) {
              tmp12 = tmp11;
            }
            if (!tmp12) {
              self._activate(nativeEvent);
              self._deactivate(nativeEvent);
            }
            const _config = self._config;
            const onPress = _config.onPress;
            if (null != onPress) {
              let tmp21 = null != _config.onLongPress;
              if (tmp21) {
                tmp21 = "RESPONDER_ACTIVE_LONG_PRESS_IN" === _touchState;
              }
              if (!tmp21) {
                if (true !== tmp19) {
                  callback(closure_2[5]).playTouchSound();
                  const obj = callback(closure_2[5]);
                }
                onPress(nativeEvent);
              }
            }
          }
        }
        const result2 = self._cancelPressDelayTimeout();
      }
      let tmp14 = tmp11;
      if (tmp11) {
        tmp14 = !tmp12;
      }
      if (tmp14) {
        self._deactivate(nativeEvent);
      }
    }
  };
  items[6] = {
    key: "_activate",
    value: function _activate(nativeEvent) {
      const onPressIn = this._config.onPressIn;
      const tmp = callback6(nativeEvent);
      this._touchActivatePosition = { pageX: tmp.pageX, pageY: tmp.pageY };
      this._touchActivateTime = Date.now();
      if (null != onPressIn) {
        onPressIn(nativeEvent);
      }
    }
  };
  items[7] = {
    key: "_deactivate",
    value: function _deactivate(persist) {
      const self = this;
      const Pressability = persist;
      const onPressOut = this._config.onPressOut;
      if (null != onPressOut) {
        const _Date = Date;
        const _touchActivateTime = self._touchActivateTime;
        let num = 0;
        const timestamp = Date.now();
        if (null != _touchActivateTime) {
          num = _touchActivateTime;
        }
        const _Math = Math;
        const diff = callback7(self._config.minPressDuration, 0, 130) - (timestamp - num);
        const bound = Math.max(diff, callback7(self._config.delayPressOut));
        if (bound > 0) {
          persist.persist();
          const _setTimeout = setTimeout;
          self._pressOutDelayTimeout = setTimeout(() => {
            onPressOut(arg0);
          }, bound);
        } else {
          onPressOut(persist);
        }
        const tmp7 = callback7(self._config.minPressDuration, 0, 130);
      }
      self._touchActivateTime = null;
    }
  };
  items[8] = {
    key: "_measureResponderRegion",
    value: function _measureResponderRegion() {
      const self = this;
      if (null != this._responderID) {
        if ("number" === typeof self._responderID) {
          callback(closure_2[6]).measure(self._responderID, self._measureCallback);
          const obj = callback(closure_2[6]);
        } else {
          const _responderID = self._responderID;
          _responderID.measure(self._measureCallback, true);
        }
      }
    }
  };
  items[9] = {
    key: "_isTouchWithinResponderRegion",
    value: function _isTouchWithinResponderRegion(pageX, _responderRegion) {
      let bottom;
      let left;
      let right;
      let top;
      const rect = Pressability(closure_2[7]).normalizeRect(this._config.hitSlop);
      const obj = Pressability(closure_2[7]);
      const rect2 = Pressability(closure_2[7]).normalizeRect(this._config.pressRectOffset);
      ({ bottom, left, right, top } = _responderRegion);
      let tmp = bottom;
      let tmp2 = left;
      let tmp3 = right;
      let tmp4 = top;
      if (null != rect) {
        let sum = bottom;
        if (null != rect.bottom) {
          sum = bottom + rect.bottom;
        }
        let diff = left;
        if (null != rect.left) {
          diff = left - rect.left;
        }
        let sum1 = right;
        if (null != rect.right) {
          sum1 = right + rect.right;
        }
        let diff1 = top;
        if (null != rect.top) {
          diff1 = top - rect.top;
        }
        tmp4 = diff1;
        tmp = sum;
        tmp2 = diff;
        tmp3 = sum1;
      }
      bottom = undefined;
      if (null != rect2) {
        bottom = rect2.bottom;
      }
      let num = 30;
      if (null != bottom) {
        num = bottom;
      }
      left = undefined;
      const sum2 = tmp + num;
      if (null != rect2) {
        left = rect2.left;
      }
      let num2 = 20;
      let num3 = 20;
      if (null != left) {
        num3 = left;
      }
      right = undefined;
      const diff2 = tmp2 - num3;
      if (null != rect2) {
        right = rect2.right;
      }
      let tmp14 = num2;
      if (null != right) {
        tmp14 = right;
      }
      top = undefined;
      const sum3 = tmp3 + tmp14;
      if (null != rect2) {
        top = rect2.top;
      }
      if (null != top) {
        num2 = top;
      }
      let tmp18 = pageX.pageX > diff2;
      const diff3 = tmp4 - num2;
      if (tmp18) {
        tmp18 = pageX.pageX < sum3;
      }
      if (tmp18) {
        tmp18 = pageX.pageY > diff3;
      }
      if (tmp18) {
        tmp18 = pageX.pageY < sum2;
      }
      return tmp18;
    }
  };
  items[10] = {
    key: "_handleLongPress",
    value: function _handleLongPress(arg0) {
      const self = this;
      let tmp = "RESPONDER_ACTIVE_PRESS_IN" !== this._touchState;
      if (tmp) {
        tmp = "RESPONDER_ACTIVE_LONG_PRESS_IN" !== self._touchState;
      }
      if (!tmp) {
        self._receiveSignal("LONG_PRESS_DETECTED", arg0);
      }
    }
  };
  items[11] = {
    key: "_cancelHoverInDelayTimeout",
    value: function _cancelHoverInDelayTimeout() {
      const self = this;
      if (null != this._hoverInDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverInDelayTimeout);
        self._hoverInDelayTimeout = null;
      }
    }
  };
  items[12] = {
    key: "_cancelHoverOutDelayTimeout",
    value: function _cancelHoverOutDelayTimeout() {
      const self = this;
      if (null != this._hoverOutDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverOutDelayTimeout);
        self._hoverOutDelayTimeout = null;
      }
    }
  };
  items[13] = {
    key: "_cancelLongPressDelayTimeout",
    value: function _cancelLongPressDelayTimeout() {
      const self = this;
      if (null != this._longPressDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._longPressDelayTimeout);
        self._longPressDelayTimeout = null;
      }
    }
  };
  items[14] = {
    key: "_cancelPressDelayTimeout",
    value: function _cancelPressDelayTimeout() {
      const self = this;
      if (null != this._pressDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressDelayTimeout);
        self._pressDelayTimeout = null;
      }
    }
  };
  items[15] = {
    key: "_cancelPressOutDelayTimeout",
    value: function _cancelPressOutDelayTimeout() {
      const self = this;
      if (null != this._pressOutDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressOutDelayTimeout);
        self._pressOutDelayTimeout = null;
      }
    }
  };
  const items1 = [
    {
      key: "setLongPressDeactivationDistance",
      value: function setLongPressDeactivationDistance(arg0) {

      }
    }
  ];
  return callback(Pressability, items, items1);
}();
