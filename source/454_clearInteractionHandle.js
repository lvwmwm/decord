// Module ID: 454
// Function ID: 6055
// Name: clearInteractionHandle
// Dependencies: [455, 359]

// Module 454 (clearInteractionHandle)
function clearInteractionHandle(handle) {
  if (handle.handle) {
    const result = require(359) /* _scheduleUpdate */.default.clearInteractionHandle(handle.handle);
    handle.handle = null;
    const _default = require(359) /* _scheduleUpdate */.default;
  }
  if (arg1) {
    arg1(arg2, arg3);
  }
}
let closure_2 = require("module_455").default.currentCentroidXOfTouchesChangedAfter;
let closure_3 = require("module_455").default.currentCentroidYOfTouchesChangedAfter;
let closure_4 = require("module_455").default.previousCentroidXOfTouchesChangedAfter;
let closure_5 = require("module_455").default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = require("module_455").default.currentCentroidX;
const currentCentroidY = require("module_455").default.currentCentroidY;
let obj = {
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
    let closure_0 = arg0;
    let closure_1 = { handle: null };
    let obj = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
    obj = {
      panHandlers: obj,
      getInteractionHandle() {
        return closure_1.handle;
      }
    };
    obj = {
      onStartShouldSetResponder(arg0) {
        let result = null != lib.onStartShouldSetPanResponder;
        if (result) {
          result = lib.onStartShouldSetPanResponder(arg0, obj);
        }
        return result;
      },
      onMoveShouldSetResponder(arg0) {
        let result = null != lib.onMoveShouldSetPanResponder;
        if (result) {
          result = lib.onMoveShouldSetPanResponder(arg0, obj);
        }
        return result;
      },
      onStartShouldSetResponderCapture(nativeEvent) {
        if (1 === nativeEvent.nativeEvent.touches.length) {
          const result = outer1_8._initializeGestureState(obj);
        }
        obj.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
        let result1 = null != lib.onStartShouldSetPanResponderCapture;
        if (result1) {
          result1 = lib.onStartShouldSetPanResponderCapture(nativeEvent, obj);
        }
        return result1;
      },
      onMoveShouldSetResponderCapture(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        let tmp = obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp;
        if (tmp) {
          const result = outer1_8._updateGestureStateOnMove(obj, touchHistory);
          let result1 = !tmp6;
          if (!!lib.onMoveShouldSetPanResponderCapture) {
            result1 = lib.onMoveShouldSetPanResponderCapture(touchHistory, obj);
          }
          tmp = result1;
        }
        return tmp;
      },
      onResponderGrant(touchHistory) {
        if (!closure_1.handle) {
          closure_1.handle = lib(closure_1[1]).default.createInteractionHandle();
          const _default = lib(closure_1[1]).default;
        }
        obj.x0 = outer1_6(touchHistory.touchHistory);
        obj.y0 = outer1_7(touchHistory.touchHistory);
        obj.dx = 0;
        obj.dy = 0;
        if (lib.onPanResponderGrant) {
          lib.onPanResponderGrant(touchHistory, obj);
        }
        let result = null == lib.onShouldBlockNativeResponder;
        if (!result) {
          result = lib.onShouldBlockNativeResponder(touchHistory, obj);
        }
        return result;
      },
      onResponderReject(arg0) {
        outer1_9(closure_1, lib.onPanResponderReject, arg0, obj);
      },
      onResponderRelease(arg0) {
        outer1_9(closure_1, lib.onPanResponderRelease, arg0, obj);
        const result = outer1_8._initializeGestureState(obj);
      },
      onResponderStart(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        if (lib.onPanResponderStart) {
          lib.onPanResponderStart(touchHistory, obj);
        }
      },
      onResponderMove(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        if (obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp) {
          const result = outer1_8._updateGestureStateOnMove(obj, touchHistory);
          if (lib.onPanResponderMove) {
            lib.onPanResponderMove(touchHistory, obj);
          }
        }
      },
      onResponderEnd(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        outer1_9(closure_1, lib.onPanResponderEnd, touchHistory, obj);
      },
      onResponderTerminate(arg0) {
        outer1_9(closure_1, lib.onPanResponderTerminate, arg0, obj);
        const result = outer1_8._initializeGestureState(obj);
      },
      onResponderTerminationRequest(arg0) {
        let result = null == lib.onPanResponderTerminationRequest;
        if (!result) {
          result = lib.onPanResponderTerminationRequest(arg0, obj);
        }
        return result;
      }
    };
    return obj;
  }
};

export default obj;
