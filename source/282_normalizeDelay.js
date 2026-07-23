// Module ID: 282
// Function ID: 4410
// Name: normalizeDelay
// Dependencies: [6, 7, 283, 284, 44, 285, 46, 288]

// Module 282 (normalizeDelay)
import isFabricReactTag from "isFabricReactTag";
import createSquare from "createSquare";

const require = arg1;
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
let closure_5 = Object.freeze({ NOT_RESPONDER: { DELAY: "ERROR", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "ERROR", RESPONDER_TERMINATED: "ERROR", ENTER_PRESS_RECT: "ERROR", LEAVE_PRESS_RECT: "ERROR", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, ERROR: { DELAY: "NOT_RESPONDER", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "NOT_RESPONDER", LEAVE_PRESS_RECT: "NOT_RESPONDER", LONG_PRESS_DETECTED: "NOT_RESPONDER" } });
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
let c9 = 10;
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

export default (() => {
  class Pressability {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, self);
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
      const self = this;
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
          const _self = persist;
          persist.persist();
          const result = _self._cancelPressOutDelayTimeout();
          _self._responderID = persist.currentTarget;
          _self._touchState = "NOT_RESPONDER";
          _self._receiveSignal("RESPONDER_GRANT", persist);
          const tmp4 = outer2_11(_self._config.delayPressIn);
          if (tmp4 > 0) {
            const _setTimeout = setTimeout;
            _self._pressDelayTimeout = setTimeout(() => {
              persist._receiveSignal("DELAY", persist);
            }, tmp4);
          } else {
            _self._receiveSignal("DELAY", persist);
          }
          _self._longPressDelayTimeout = setTimeout(() => {
            persist._handleLongPress(persist);
          }, outer2_11(_self._config.delayLongPress, 10, 500 - tmp4) + tmp4);
          return true === _self._config.blockNativeResponder;
        },
        onResponderMove(arg0) {
          const onPressMove = self._config.onPressMove;
          if (null != onPressMove) {
            onPressMove(arg0);
          }
          const _responderRegion = self._responderRegion;
          if (null != _responderRegion) {
            const tmp15 = outer2_10(arg0);
            if (null == tmp15) {
              const result = self._cancelLongPressDelayTimeout();
              self._receiveSignal("LEAVE_PRESS_RECT", arg0);
            } else {
              if (null != self._touchActivatePosition) {
                const _Math = Math;
                if (Math.hypot(self._touchActivatePosition.pageX - tmp15.pageX, self._touchActivatePosition.pageY - tmp15.pageY) > outer2_9) {
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
            const _self = persist;
            _self._isHovered = true;
            const result = _self._cancelHoverOutDelayTimeout();
            if (null != onHoverIn) {
              const tmp4 = outer2_11(_self._config.delayHoverIn);
              if (tmp4 > 0) {
                persist.persist();
                const _setTimeout = setTimeout;
                _self._hoverInDelayTimeout = setTimeout(() => {
                  outer1_1(outer3_12(closure_0));
                }, tmp4);
              } else {
                onHoverIn(outer2_12(persist));
              }
            }
          };
        }
        if (null != onHoverOut) {
          obj.onPointerLeave = (persist) => {
            const _self = persist;
            if (_self._isHovered) {
              _self._isHovered = false;
              const result = _self._cancelHoverInDelayTimeout();
              if (null != onHoverOut) {
                const tmp7 = outer2_11(_self._config.delayHoverOut);
                if (tmp7 > 0) {
                  persist.persist();
                  const _setTimeout = setTimeout;
                  _self._hoverOutDelayTimeout = setTimeout(() => {
                    outer1_2(outer3_12(closure_0));
                  }, tmp7);
                } else {
                  onHoverOut(outer2_12(persist));
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
      obj3 = outer1_1(outer1_2[2]);
    }
  };
  items[4] = {
    key: "_receiveSignal",
    value: function _receiveSignal(arg0, nativeEvent) {
      const self = this;
      let closure_0 = arg0;
      let closure_1 = nativeEvent;
      if (null != nativeEvent.nativeEvent.timestamp) {
        outer1_1(outer1_2[3]).emitEvent(() => ({ signal: closure_0, nativeTimestamp: nativeEvent.nativeEvent.timestamp }));
        const obj = outer1_1(outer1_2[3]);
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
        outer1_1(outer1_2[4])(tmp10, "Pressability: Invalid signal `%s` for state `%s` on responder: %s", arg0, _touchState, str3);
        if (_touchState !== tmp5) {
          const result = self._performTransitionSideEffects(_touchState, tmp5, arg0, nativeEvent);
          self._touchState = tmp5;
        }
        const tmp9 = outer1_1(outer1_2[4]);
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
      const tmp5 = outer1_7(_touchState);
      let tmp6 = !tmp5;
      if (!tmp5) {
        tmp6 = outer1_7(arg1);
      }
      if (!tmp4) {
        tmp4 = tmp6;
      }
      if (tmp4) {
        const result1 = self._measureResponderRegion();
      }
      if (outer1_8(_touchState)) {
        if ("LONG_PRESS_DETECTED" === arg2) {
          const onLongPress = self._config.onLongPress;
          if (null != onLongPress) {
            onLongPress(nativeEvent);
          }
        }
      }
      const tmp11 = outer1_6(_touchState);
      let tmp12 = outer1_6(arg1);
      if (!tmp11) {
        if (tmp12) {
          self._activate(nativeEvent);
        }
        if (outer1_8(_touchState)) {
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
                  outer1_1(outer1_2[5]).playTouchSound();
                  const obj = outer1_1(outer1_2[5]);
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
      const tmp = outer1_10(nativeEvent);
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
      let closure_0 = persist;
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
        const diff = outer1_11(self._config.minPressDuration, 0, 130) - (timestamp - num);
        const bound = Math.max(diff, outer1_11(self._config.delayPressOut));
        if (bound > 0) {
          persist.persist();
          const _setTimeout = setTimeout;
          self._pressOutDelayTimeout = setTimeout(() => {
            onPressOut(closure_0);
          }, bound);
        } else {
          onPressOut(persist);
        }
        const tmp7 = outer1_11(self._config.minPressDuration, 0, 130);
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
          outer1_1(outer1_2[6]).measure(self._responderID, self._measureCallback);
          const obj = outer1_1(outer1_2[6]);
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
      const rect = Pressability(outer1_2[7]).normalizeRect(this._config.hitSlop);
      const obj = Pressability(outer1_2[7]);
      const rect2 = Pressability(outer1_2[7]).normalizeRect(this._config.pressRectOffset);
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
    value: function _handleLongPress(closure_0) {
      const self = this;
      let tmp = "RESPONDER_ACTIVE_PRESS_IN" !== this._touchState;
      if (tmp) {
        tmp = "RESPONDER_ACTIVE_LONG_PRESS_IN" !== self._touchState;
      }
      if (!tmp) {
        self._receiveSignal("LONG_PRESS_DETECTED", closure_0);
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
        const outer1_9 = arg0;
      }
    }
  ];
  return callback(Pressability, items, items1);
})();
