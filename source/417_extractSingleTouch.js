// Module ID: 417
// Function ID: 5857
// Name: extractSingleTouch
// Dependencies: [29, 31, 33, 262, 46, 418, 420, 285]

// Module 417 (extractSingleTouch)
import "result";
import { jsx } from "jsxProd";

let touchableHandleBlur;
let touchableHandleFocus;
function extractSingleTouch(nativeEvent) {
  let changedTouches;
  let touches;
  let first1 = nativeEvent;
  ({ touches, changedTouches } = nativeEvent);
  let tmp2 = touches;
  if (touches) {
    tmp2 = touches.length > 0;
  }
  let tmp3 = changedTouches;
  if (changedTouches) {
    tmp3 = changedTouches.length > 0;
  }
  if (!tmp2) {
    if (tmp3) {
      let first = changedTouches[0];
    }
    return first;
  }
  if (tmp2) {
    first1 = touches[0];
  }
  first = first1;
}
let obj = { NOT_RESPONDER: false, RESPONDER_INACTIVE_PRESS_IN: false, RESPONDER_INACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_PRESS_IN: false, RESPONDER_ACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_LONG_PRESS_IN: false, RESPONDER_ACTIVE_LONG_PRESS_OUT: false, ERROR: false };
let closure_3 = Object.assign({}, obj, { RESPONDER_ACTIVE_PRESS_OUT: true, RESPONDER_ACTIVE_PRESS_IN: true });
let closure_4 = Object.assign({}, obj, { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true });
let closure_5 = Object.assign({}, obj, { RESPONDER_ACTIVE_LONG_PRESS_IN: true });
let closure_6 = { NOT_RESPONDER: { DELAY: "ERROR", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "ERROR", RESPONDER_TERMINATED: "ERROR", ENTER_PRESS_RECT: "ERROR", LEAVE_PRESS_RECT: "ERROR", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, error: { DELAY: "NOT_RESPONDER", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "NOT_RESPONDER", LEAVE_PRESS_RECT: "NOT_RESPONDER", LONG_PRESS_DETECTED: "NOT_RESPONDER" } };
obj = {
  componentDidMount() {
    const isTV = importDefault(262).isTV;
  },
  componentWillUnmount() {
    const self = this;
    if (this.touchableDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.touchableDelayTimeout);
    }
    if (self.longPressDelayTimeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    if (self.pressOutDelayTimeout) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
  },
  touchableGetInitialState() {
    return { touchable: { touchState: undefined, responderID: null } };
  },
  touchableHandleResponderTerminationRequest() {
    return !this.props.rejectResponderTermination;
  },
  touchableHandleStartShouldSetResponder() {
    return !this.props.disabled;
  },
  touchableLongPressCancelsPress() {
    return true;
  },
  touchableHandleResponderGrant(persist) {
    const self = this;
    persist.persist();
    if (this.pressOutDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
    self.pressOutDelayTimeout = null;
    self.state.touchable.touchState = "NOT_RESPONDER";
    self.state.touchable.responderID = persist.currentTarget;
    self._receiveSignal("RESPONDER_GRANT", persist);
    let num = 130;
    let num2 = 130;
    if (undefined !== self.touchableGetHighlightDelayMS) {
      const _Math = Math;
      num2 = Math.max(self.touchableGetHighlightDelayMS(), 0);
    }
    if (!isNaN(num2)) {
      num = num2;
    }
    if (0 !== num) {
      const _setTimeout = setTimeout;
      const _handleDelay = self._handleDelay;
      self.touchableDelayTimeout = setTimeout(_handleDelay.bind(self, persist), num);
    } else {
      self._handleDelay(persist);
    }
    let num4 = 370;
    let num5 = 370;
    if (undefined !== self.touchableGetLongPressDelayMS) {
      const _Math2 = Math;
      num5 = Math.max(self.touchableGetLongPressDelayMS(), 10);
    }
    if (!isNaN(num5)) {
      num4 = num5;
    }
    const _handleLongDelay = self._handleLongDelay;
    self.longPressDelayTimeout = setTimeout(_handleLongDelay.bind(self, persist), num4 + num);
  },
  touchableHandleResponderRelease(arg0) {
    this.pressInLocation = null;
    this._receiveSignal("RESPONDER_RELEASE", arg0);
  },
  touchableHandleResponderTerminate(arg0) {
    this.pressInLocation = null;
    this._receiveSignal("RESPONDER_TERMINATED", arg0);
  },
  touchableHandleResponderMove(nativeEvent) {
    let bottom;
    let left;
    let right;
    let top;
    const self = this;
    if (this.state.touchable.positionOnActivate) {
      const positionOnActivate = self.state.touchable.positionOnActivate;
      const dimensionsOnActivate = self.state.touchable.dimensionsOnActivate;
      if (self.touchableGetPressRectOffset) {
        let result = self.touchableGetPressRectOffset();
      } else {
        result = { left: 20, right: 20, top: 20, bottom: 20 };
      }
      ({ left, top, right, bottom } = result);
      let touchableGetHitSlopResult = null;
      if (self.touchableGetHitSlop) {
        touchableGetHitSlopResult = self.touchableGetHitSlop();
      }
      let tmp2 = left;
      let tmp3 = top;
      let tmp4 = right;
      let sum3 = bottom;
      if (touchableGetHitSlopResult) {
        let num = touchableGetHitSlopResult.top;
        const sum = left + (touchableGetHitSlopResult.left || 0);
        if (!num) {
          num = 0;
        }
        let num2 = touchableGetHitSlopResult.right;
        const sum1 = top + num;
        if (!num2) {
          num2 = 0;
        }
        let num3 = touchableGetHitSlopResult.bottom;
        const sum2 = right + num2;
        if (!num3) {
          num3 = 0;
        }
        sum3 = bottom + num3;
        tmp2 = sum;
        tmp3 = sum1;
        tmp4 = sum2;
        const tmp6 = touchableGetHitSlopResult.left || 0;
      }
      const tmp11 = extractSingleTouch(nativeEvent.nativeEvent);
      let pageX = tmp11;
      if (tmp11) {
        pageX = tmp11.pageX;
      }
      let pageY = tmp11;
      if (tmp11) {
        pageY = tmp11.pageY;
      }
      if (self.pressInLocation) {
        if (self._getDistanceBetweenPoints(pageX, pageY, self.pressInLocation.pageX, self.pressInLocation.pageY) > 10) {
          const result1 = self._cancelLongPressDelayTimeout();
        }
      }
      if (pageX > positionOnActivate.left - tmp2) {
        if (pageY > positionOnActivate.top - tmp3) {
          if (pageX < positionOnActivate.left + dimensionsOnActivate.width + tmp4) {
            if (pageY < positionOnActivate.top + dimensionsOnActivate.height + sum3) {
              self._receiveSignal("ENTER_PRESS_RECT", nativeEvent);
              if (tmp19) {
                const result2 = self._cancelLongPressDelayTimeout();
              }
              tmp19 = self.state.touchable.touchState === "RESPONDER_INACTIVE_PRESS_IN" && self.state.touchable.touchState !== "RESPONDER_INACTIVE_PRESS_IN";
            }
          }
        }
      }
      const result3 = self._cancelLongPressDelayTimeout();
      self._receiveSignal("LEAVE_PRESS_RECT", nativeEvent);
    }
  },
  touchableHandleFocus(arg0) {
    if (this.props.onFocus) {
      const props = this.props;
      props.onFocus(arg0);
    }
  },
  touchableHandleBlur(arg0) {
    if (this.props.onBlur) {
      const props = this.props;
      props.onBlur(arg0);
    }
  },
  _remeasureMetricsOnActivation() {
    const self = this;
    const responderID = this.state.touchable.responderID;
    if (null != responderID) {
      if ("number" === typeof responderID) {
        importDefault(46).measure(responderID, self._handleQueryLayout);
        const obj = importDefault(46);
      } else {
        responderID.measure(self._handleQueryLayout);
      }
    }
  },
  _handleQueryLayout(arg0, arg1, arg2, arg3, arg4, arg5) {
    let tmp = arg0;
    const self = this;
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
      tmp = arg4;
    }
    if (!tmp) {
      tmp = arg5;
    }
    if (tmp) {
      if (self.state.touchable.positionOnActivate) {
        importDefault(418).release(self.state.touchable.positionOnActivate);
        const obj = importDefault(418);
      }
      if (self.state.touchable.dimensionsOnActivate) {
        importDefault(420).release(self.state.touchable.dimensionsOnActivate);
        const obj2 = importDefault(420);
      }
      self.state.touchable.positionOnActivate = importDefault(418).getPooled(arg4, arg5);
      const obj3 = importDefault(418);
      self.state.touchable.dimensionsOnActivate = importDefault(420).getPooled(arg2, arg3);
      const obj4 = importDefault(420);
    }
  },
  _handleDelay(persist) {
    this.touchableDelayTimeout = null;
    this._receiveSignal("DELAY", persist);
  },
  _handleLongDelay(arg0) {
    const self = this;
    this.longPressDelayTimeout = null;
    const touchState = this.state.touchable.touchState;
    let tmp = touchState !== "RESPONDER_ACTIVE_PRESS_IN";
    if (tmp) {
      tmp = touchState !== "RESPONDER_ACTIVE_LONG_PRESS_IN";
    }
    if (!tmp) {
      self._receiveSignal("LONG_PRESS_DETECTED", arg0);
    }
  },
  _receiveSignal(arg0, nativeEvent) {
    const self = this;
    const touchState = this.state.touchable.touchState;
    let tmp = dependencyMap4[touchState];
    if (tmp) {
      tmp = dependencyMap4[touchState][arg0];
    }
    if (this.state.touchable.responderID) {
      if (tmp) {
        if (tmp === "ERROR") {
          let _Error2 = Error;
          let str10 = "<<host component>>`";
          if ("Touchable cannot transition from `" + touchState + "` to `" + arg0 + "` for responder `" + typeof self.state.touchable.responderID === "number") {
            str10 = self.state.touchable.responderID;
          }
          const prototype2 = _Error2.prototype;
          _Error2 = new _Error2(str10);
          throw _Error2;
        } else if (touchState !== tmp) {
          const result = self._performSideEffectsForTransition(touchState, tmp, arg0, nativeEvent);
          self.state.touchable.touchState = tmp;
        }
      } else {
        let _Error = Error;
        let str4 = "host component`";
        if ("Unrecognized signal `" + arg0 + "` or state `" + touchState + "` for Touchable responder `" + typeof self.state.touchable.responderID === "number") {
          str4 = self.state.touchable.responderID;
        }
        const prototype = _Error.prototype;
        _Error = new _Error(str4);
        throw _Error;
      }
    }
  },
  _cancelLongPressDelayTimeout() {
    const self = this;
    if (this.longPressDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    self.longPressDelayTimeout = null;
  },
  _isHighlight(touchState) {
    let tmp = touchState === "RESPONDER_ACTIVE_PRESS_IN";
    if (!tmp) {
      tmp = touchState === "RESPONDER_ACTIVE_LONG_PRESS_IN";
    }
    return tmp;
  },
  _savePressInLocation(nativeEvent) {
    const tmp = extractSingleTouch(nativeEvent.nativeEvent);
    let pageX = tmp;
    if (tmp) {
      pageX = tmp.pageX;
    }
    let pageY = tmp;
    if (tmp) {
      pageY = tmp.pageY;
    }
    let locationX = tmp;
    if (tmp) {
      locationX = tmp.locationX;
    }
    let locationY = tmp;
    if (tmp) {
      locationY = tmp.locationY;
    }
    const obj = { pageX, pageY, locationX, locationY };
    this.pressInLocation = obj;
  },
  _getDistanceBetweenPoints(pageX, pageY, pageX2, pageY2) {
    const diff = pageX - pageX2;
    const diff1 = pageY - pageY2;
    return Math.sqrt(diff * diff + diff1 * diff1);
  },
  _performSideEffectsForTransition(touchState, touchState, arg2, nativeEvent) {
    const self = this;
    const _isHighlightResult = this._isHighlight(touchState);
    let _isHighlightResult1 = this._isHighlight(touchState);
    let tmp3 = arg2 === "RESPONDER_TERMINATED";
    if (!tmp3) {
      tmp3 = arg2 === "RESPONDER_RELEASE";
    }
    if (tmp3) {
      const result = self._cancelLongPressDelayTimeout();
    }
    let tmp5 = touchState === "NOT_RESPONDER";
    if (tmp5) {
      tmp5 = touchState === "RESPONDER_INACTIVE_PRESS_IN";
    }
    let tmp6 = !dependencyMap[touchState];
    if (tmp6) {
      tmp6 = dependencyMap[touchState];
    }
    if (!tmp5) {
      tmp5 = tmp6;
    }
    if (tmp5) {
      const result1 = self._remeasureMetricsOnActivation();
    }
    let touchableHandleLongPress = dependencyMap2[touchState];
    if (touchableHandleLongPress) {
      touchableHandleLongPress = arg2 === "LONG_PRESS_DETECTED";
    }
    if (touchableHandleLongPress) {
      touchableHandleLongPress = self.touchableHandleLongPress;
    }
    if (touchableHandleLongPress) {
      const result2 = self.touchableHandleLongPress(nativeEvent);
    }
    if (_isHighlightResult1) {
      if (!_isHighlightResult) {
        self._startHighlight(nativeEvent);
      }
      if (dependencyMap2[touchState]) {
        if (arg2 === "RESPONDER_RELEASE") {
          let tmp15 = dependencyMap3[touchState];
          if (tmp15) {
            let tmp14 = tmp27;
            if (!tmp27) {
              tmp14 = !self.touchableLongPressCancelsPress();
            }
            tmp15 = tmp14;
          }
          if (tmp17) {
            if (!_isHighlightResult1) {
              _isHighlightResult1 = _isHighlightResult;
            }
            if (!_isHighlightResult1) {
              self._startHighlight(nativeEvent);
              self._endHighlight(nativeEvent);
            }
            if (!self.props.touchSoundDisabled) {
              importDefault(285).playTouchSound();
              const obj = importDefault(285);
            }
            self.touchableHandlePress(nativeEvent);
          }
          tmp17 = (!dependencyMap3[touchState] || tmp15) && self.touchableHandlePress;
        }
      }
      if (self.touchableDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.touchableDelayTimeout);
      }
      self.touchableDelayTimeout = null;
    }
    if (tmp11) {
      self._endHighlight(nativeEvent);
    }
  },
  _startHighlight(nativeEvent) {
    const self = this;
    this._savePressInLocation(nativeEvent);
    if (this.touchableHandleActivePressIn) {
      const result = self.touchableHandleActivePressIn(nativeEvent);
    }
  },
  _endHighlight(closure_0) {
    let self = this;
    self = this;
    if (this.touchableHandleActivePressOut) {
      if (self.touchableGetPressOutDelayMS) {
        if (self.touchableGetPressOutDelayMS()) {
          const _setTimeout = setTimeout;
          self.pressOutDelayTimeout = setTimeout(() => {
            const result = self.touchableHandleActivePressOut(closure_0);
          }, self.touchableGetPressOutDelayMS());
        }
      }
      let result = self.touchableHandleActivePressOut(closure_0);
    }
  },
  withoutDefaultFocusAndBlur: {}
};
({ touchableHandleFocus, touchableHandleBlur } = obj);
obj.withoutDefaultFocusAndBlur = require("_objectWithoutProperties")(obj, ["touchableHandleFocus", "touchableHandleBlur"]);

export default {
  Mixin: obj,
  renderDebugView(arg0) {
    let color;
    let hitSlop;
    ({ color, hitSlop } = arg0);
    return null;
  }
};
