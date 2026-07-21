// Module ID: 454
// Function ID: 6055
// Name: clearInteractionHandle
// Dependencies: []

// Module 454 (clearInteractionHandle)
function clearInteractionHandle(handle) {
  if (handle.handle) {
    const result = require(dependencyMap[1]).default.clearInteractionHandle(handle.handle);
    handle.handle = null;
    const _default = require(dependencyMap[1]).default;
  }
  if (arg1) {
    arg1(arg2, arg3);
  }
}
let closure_2 = require(dependencyMap[0]).default.currentCentroidXOfTouchesChangedAfter;
let closure_3 = require(dependencyMap[0]).default.currentCentroidYOfTouchesChangedAfter;
let closure_4 = require(dependencyMap[0]).default.previousCentroidXOfTouchesChangedAfter;
let closure_5 = require(dependencyMap[0]).default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = require(dependencyMap[0]).default.currentCentroidX;
const currentCentroidY = require(dependencyMap[0]).default.currentCentroidY;
const obj = {
  _initializeGestureState(arg0) {
    arg0.moveX = 0;
    arg0.moveY = 0;
    arg0.x0 = 0;
    arg0.y0 = 0;
    arg0.dx = 0;
    arg0.dy = 0;
    arg0.vx = 0;
    arg0.vy = 0;
    arg0.numberActiveTouches = 0;
    arg0._accountsForMovesUpTo = 0;
  },
  _updateGestureStateOnMove(_accountsForMovesUpTo, touchHistory) {
    _accountsForMovesUpTo.numberActiveTouches = touchHistory.numberActiveTouches;
    _accountsForMovesUpTo.moveX = callback(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo.moveY = callback2(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo = _accountsForMovesUpTo._accountsForMovesUpTo;
    const tmp = callback3(touchHistory, _accountsForMovesUpTo);
    const tmp2 = callback(touchHistory, _accountsForMovesUpTo);
    const sum = _accountsForMovesUpTo.dx + (tmp2 - tmp);
    const sum1 = _accountsForMovesUpTo.dy + (callback2(touchHistory, _accountsForMovesUpTo) - callback4(touchHistory, _accountsForMovesUpTo));
    const diff = touchHistory.mostRecentTimeStamp - _accountsForMovesUpTo._accountsForMovesUpTo;
    _accountsForMovesUpTo.vx = (sum - _accountsForMovesUpTo.dx) / diff;
    _accountsForMovesUpTo.vy = (sum1 - _accountsForMovesUpTo.dy) / diff;
    _accountsForMovesUpTo.dx = sum;
    _accountsForMovesUpTo.dy = sum1;
    _accountsForMovesUpTo._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create(arg0) {
    const require = arg0;
    let closure_1 = { handle: null };
    let obj = { stateID: Math.random() };
    let closure_2 = obj;
    obj = {
      panHandlers: obj,
      getInteractionHandle() {
        return closure_1.handle;
      }
    };
    obj = {
      onStartShouldSetResponder(arg0) {
        let result = null != arg0.onStartShouldSetPanResponder;
        if (result) {
          result = arg0.onStartShouldSetPanResponder(arg0, obj);
        }
        return result;
      },
      onMoveShouldSetResponder(arg0) {
        let result = null != arg0.onMoveShouldSetPanResponder;
        if (result) {
          result = arg0.onMoveShouldSetPanResponder(arg0, obj);
        }
        return result;
      },
      onStartShouldSetResponderCapture(nativeEvent) {
        if (1 === nativeEvent.nativeEvent.touches.length) {
          const result = closure_8._initializeGestureState(obj);
        }
        obj.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
        let result1 = null != nativeEvent.onStartShouldSetPanResponderCapture;
        if (result1) {
          result1 = nativeEvent.onStartShouldSetPanResponderCapture(nativeEvent, obj);
        }
        return result1;
      },
      onMoveShouldSetResponderCapture(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        let tmp = obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp;
        if (tmp) {
          const result = closure_8._updateGestureStateOnMove(obj, touchHistory);
          let result1 = !tmp6;
          if (!!touchHistory.onMoveShouldSetPanResponderCapture) {
            result1 = touchHistory.onMoveShouldSetPanResponderCapture(touchHistory, obj);
          }
          tmp = result1;
        }
        return tmp;
      },
      onResponderGrant(touchHistory) {
        if (!closure_1.handle) {
          closure_1.handle = touchHistory(closure_1[1]).default.createInteractionHandle();
          const _default = touchHistory(closure_1[1]).default;
        }
        obj.x0 = callback(touchHistory.touchHistory);
        obj.y0 = callback2(touchHistory.touchHistory);
        obj.dx = 0;
        obj.dy = 0;
        if (touchHistory.onPanResponderGrant) {
          touchHistory.onPanResponderGrant(touchHistory, obj);
        }
        let result = null == touchHistory.onShouldBlockNativeResponder;
        if (!result) {
          result = touchHistory.onShouldBlockNativeResponder(touchHistory, obj);
        }
        return result;
      },
      onResponderReject(arg0) {
        callback3(closure_1, arg0.onPanResponderReject, arg0, obj);
      },
      onResponderRelease(arg0) {
        callback3(closure_1, arg0.onPanResponderRelease, arg0, obj);
        const result = closure_8._initializeGestureState(obj);
      },
      onResponderStart(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        if (touchHistory.onPanResponderStart) {
          touchHistory.onPanResponderStart(touchHistory, obj);
        }
      },
      onResponderMove(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        if (obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp) {
          const result = closure_8._updateGestureStateOnMove(obj, touchHistory);
          if (touchHistory.onPanResponderMove) {
            touchHistory.onPanResponderMove(touchHistory, obj);
          }
        }
      },
      onResponderEnd(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        callback3(closure_1, touchHistory.onPanResponderEnd, touchHistory, obj);
      },
      onResponderTerminate(arg0) {
        callback3(closure_1, arg0.onPanResponderTerminate, arg0, obj);
        const result = closure_8._initializeGestureState(obj);
      },
      onResponderTerminationRequest(arg0) {
        let result = null == arg0.onPanResponderTerminationRequest;
        if (!result) {
          result = arg0.onPanResponderTerminationRequest(arg0, obj);
        }
        return result;
      }
    };
    return obj;
  }
};

export default obj;
