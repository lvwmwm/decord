// Module ID: 474
// Function ID: 475
// Dependencies: [475]

// Module 474
import _mod475 from "module_475" /* 475 */;

let closure_0 = _mod475.default.currentCentroidXOfTouchesChangedAfter;
let closure_1 = _mod475.default.currentCentroidYOfTouchesChangedAfter;
let closure_2 = _mod475.default.previousCentroidXOfTouchesChangedAfter;
let closure_3 = _mod475.default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = _mod475.default.currentCentroidX;
const currentCentroidY = _mod475.default.currentCentroidY;
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
    _accountsForMovesUpTo.moveX = closure_0(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo.moveY = closure_1(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo = _accountsForMovesUpTo._accountsForMovesUpTo;
    const tmp = closure_2(touchHistory, _accountsForMovesUpTo);
    const sum = _accountsForMovesUpTo.dx + (closure_0(touchHistory, _accountsForMovesUpTo) - tmp);
    const tmp2 = closure_0(touchHistory, _accountsForMovesUpTo);
    const tmp3 = closure_3(touchHistory, _accountsForMovesUpTo);
    const sum1 = _accountsForMovesUpTo.dy + (closure_1(touchHistory, _accountsForMovesUpTo) - tmp3);
    const diff = touchHistory.mostRecentTimeStamp - _accountsForMovesUpTo._accountsForMovesUpTo;
    _accountsForMovesUpTo.vx = (sum - _accountsForMovesUpTo.dx) / diff;
    _accountsForMovesUpTo.vy = (sum1 - _accountsForMovesUpTo.dy) / diff;
    _accountsForMovesUpTo.dx = sum;
    _accountsForMovesUpTo.dy = sum1;
    _accountsForMovesUpTo._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create(arg0) {
    closure_0 = arg0;
    obj = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
    return {
      panHandlers: {
        onStartShouldSetResponder(arg0) {
          const result = null != closure_0.onStartShouldSetPanResponder && obj.onStartShouldSetPanResponder(arg0, obj);
          return result;
        },
        onMoveShouldSetResponder(arg0) {
          const result = null != closure_0.onMoveShouldSetPanResponder && obj.onMoveShouldSetPanResponder(arg0, obj);
          return result;
        },
        onStartShouldSetResponderCapture(nativeEvent) {
          if (1 === nativeEvent.nativeEvent.touches.length) {
            const result = obj._initializeGestureState(obj);
          }
          obj.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
          const tmp5 = null != closure_0.onStartShouldSetPanResponderCapture && closure_0.onStartShouldSetPanResponderCapture(nativeEvent, tmp4);
          return tmp5;
        },
        onMoveShouldSetResponderCapture(touchHistory) {
          touchHistory = touchHistory.touchHistory;
          let tmp2 = obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp;
          if (tmp2) {
            const result = obj._updateGestureStateOnMove(tmp, touchHistory);
            tmp2 = closure_0.onMoveShouldSetPanResponderCapture && closure_0.onMoveShouldSetPanResponderCapture(touchHistory, obj);
            closure_0.onMoveShouldSetPanResponderCapture && closure_0.onMoveShouldSetPanResponderCapture(touchHistory, obj);
          }
          return tmp2;
        },
        onResponderGrant(touchHistory) {
          obj.x0 = currentCentroidX(touchHistory.touchHistory);
          obj.y0 = currentCentroidY(touchHistory.touchHistory);
          obj.dx = 0;
          obj.dy = 0;
          if (closure_0.onPanResponderGrant) {
            closure_0.onPanResponderGrant(touchHistory, obj);
          }
          const tmp3 = null == closure_0.onShouldBlockNativeResponder || closure_0.onShouldBlockNativeResponder(touchHistory, obj);
          return tmp3;
        },
        onResponderReject(arg0) {
          const onPanResponderReject = closure_0.onPanResponderReject;
          if (onPanResponderReject != null) {
            onPanResponderReject.call(undefined, arg0, obj);
          }
        },
        onResponderRelease(arg0) {
          const onPanResponderRelease = closure_0.onPanResponderRelease;
          if (onPanResponderRelease != null) {
            onPanResponderRelease.call(undefined, arg0, obj);
          }
          const result = obj._initializeGestureState(obj);
        },
        onResponderStart(touchHistory) {
          obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
          if (closure_0.onPanResponderStart) {
            closure_0.onPanResponderStart(touchHistory, tmp);
          }
        },
        onResponderMove(touchHistory) {
          touchHistory = touchHistory.touchHistory;
          if (obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp) {
            const result = obj._updateGestureStateOnMove(tmp, touchHistory);
            if (closure_0.onPanResponderMove) {
              closure_0.onPanResponderMove(touchHistory, obj);
            }
          }
        },
        onResponderEnd(touchHistory) {
          obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
          const onPanResponderEnd = closure_0.onPanResponderEnd;
          if (onPanResponderEnd != null) {
            onPanResponderEnd.call(undefined, touchHistory, tmp);
          }
        },
        onResponderTerminate(arg0) {
          const onPanResponderTerminate = closure_0.onPanResponderTerminate;
          if (onPanResponderTerminate != null) {
            onPanResponderTerminate.call(undefined, arg0, obj);
          }
          const result = obj._initializeGestureState(obj);
        },
        onResponderTerminationRequest(arg0) {
          const result = null == closure_0.onPanResponderTerminationRequest || obj.onPanResponderTerminationRequest(arg0, obj);
          return result;
        }
      },
      getInteractionHandle() {
        return null;
      }
    };
  }
};

export default obj;
