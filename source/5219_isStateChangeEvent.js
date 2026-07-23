// Module ID: 5219
// Function ID: 45168
// Name: isStateChangeEvent
// Dependencies: [27, 5220, 5222, 5223, 5225]
// Exports: startListening

// Module 5219 (isStateChangeEvent)
import { DeviceEventEmitter } from "get ActivityIndicator";

function isStateChangeEvent(oldState) {
  return null != oldState.oldState;
}
function onGestureHandlerEvent(handlerTag) {
  let obj = require(5220) /* findHandler */;
  const findHandlerResult = obj.findHandler(handlerTag.handlerTag);
  if (findHandlerResult) {
    if (isStateChangeEvent(handlerTag)) {
      if (handlerTag.oldState === require(5222).State.UNDETERMINED) {
        if (handlerTag.state === require(5222).State.BEGAN) {
          if (null != findHandlerResult.handlers.onBegin) {
            const handlers12 = findHandlerResult.handlers;
            handlers12.onBegin(handlerTag);
          }
        }
      }
      if (handlerTag.oldState === require(5222).State.BEGAN) {
        if (handlerTag.state === require(5222).State.ACTIVE) {
          if (null != findHandlerResult.handlers.onStart) {
            const handlers7 = findHandlerResult.handlers;
            handlers7.onStart(handlerTag);
          }
          table[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
      if (handlerTag.oldState !== handlerTag.state) {
        if (handlerTag.state === require(5222).State.END) {
          if (handlerTag.oldState === require(5222).State.ACTIVE) {
            if (null != findHandlerResult.handlers.onEnd) {
              const handlers10 = findHandlerResult.handlers;
              handlers10.onEnd(handlerTag, true);
            }
          }
          if (null != findHandlerResult.handlers.onFinalize) {
            const handlers11 = findHandlerResult.handlers;
            handlers11.onFinalize(handlerTag, true);
          }
          table[findHandlerResult.handlers.handlerTag] = undefined;
        }
      }
      let tmp51 = handlerTag.state !== require(5222).State.FAILED;
      if (tmp51) {
        tmp51 = handlerTag.state !== require(5222).State.CANCELLED;
      }
      if (!tmp51) {
        tmp51 = handlerTag.oldState === handlerTag.state;
      }
      if (!tmp51) {
        if (handlerTag.oldState === require(5222).State.ACTIVE) {
          if (null != findHandlerResult.handlers.onEnd) {
            const handlers8 = findHandlerResult.handlers;
            handlers8.onEnd(handlerTag, false);
          }
        }
        if (null != findHandlerResult.handlers.onFinalize) {
          const handlers9 = findHandlerResult.handlers;
          handlers9.onFinalize(handlerTag, false);
        }
        map.delete(handlerTag.handlerTag);
        table[findHandlerResult.handlers.handlerTag] = undefined;
      }
    } else if (null != handlerTag.eventType) {
      if (!map.has(handlerTag.handlerTag)) {
        const GestureStateManager = require(5223) /* setGestureState */.GestureStateManager;
        const result = map.set(handlerTag.handlerTag, GestureStateManager.create(handlerTag.handlerTag));
      }
      const value = map.get(handlerTag.handlerTag);
      const eventType = handlerTag.eventType;
      if (require(5225).TouchEventType.TOUCHES_DOWN === eventType) {
        const handlers6 = findHandlerResult.handlers;
        if (!tmp32) {
          handlers6.onTouchesDown(handlerTag, value);
        }
        tmp32 = null == handlers6 || null == handlers6.onTouchesDown;
      } else if (require(5225).TouchEventType.TOUCHES_MOVE === eventType) {
        const handlers5 = findHandlerResult.handlers;
        if (!tmp30) {
          handlers5.onTouchesMove(handlerTag, value);
        }
        tmp30 = null == handlers5 || null == handlers5.onTouchesMove;
      } else if (require(5225).TouchEventType.TOUCHES_UP === eventType) {
        const handlers4 = findHandlerResult.handlers;
        if (!tmp28) {
          handlers4.onTouchesUp(handlerTag, value);
        }
        tmp28 = null == handlers4 || null == handlers4.onTouchesUp;
      } else if (require(5225).TouchEventType.TOUCHES_CANCELLED === eventType) {
        const handlers13 = findHandlerResult.handlers;
        if (!tmp26) {
          handlers13.onTouchesCancelled(handlerTag, value);
        }
        tmp26 = null == handlers13 || null == handlers13.onTouchesCancelled;
      }
    } else {
      if (null != findHandlerResult.handlers.onUpdate) {
        const handlers = findHandlerResult.handlers;
        handlers.onUpdate(handlerTag);
      }
      if (tmp10) {
        if (null != findHandlerResult.handlers.onChange) {
          const handlers2 = findHandlerResult.handlers;
          let result1;
          if (null != findHandlerResult.handlers.changeEventCalculator) {
            const handlers3 = findHandlerResult.handlers;
            result1 = handlers3.changeEventCalculator(handlerTag, table[findHandlerResult.handlers.handlerTag]);
          }
          handlers2.onChange(result1);
        }
        table[findHandlerResult.handlers.handlerTag] = handlerTag;
      }
      tmp10 = findHandlerResult.handlers.onChange && findHandlerResult.handlers.changeEventCalculator;
    }
  } else {
    const result2 = require(5220) /* findHandler */.findOldGestureHandler(handlerTag.handlerTag);
    if (result2) {
      obj = { nativeEvent: handlerTag };
      if (isStateChangeEvent(handlerTag)) {
        result2.onGestureStateChange(obj);
      } else {
        result2.onGestureEvent(obj);
      }
    }
    const obj2 = require(5220) /* findHandler */;
  }
}
function stopListening() {
  if (_null) {
    _null.remove();
    _null = null;
  }
  if (_null2) {
    _null2.remove();
    _null2 = null;
  }
}
let c3 = null;
let c4 = null;
const map = new Map();
let closure_6 = [];

export { onGestureHandlerEvent };
export const startListening = function startListening() {
  stopListening();
  let closure_3 = DeviceEventEmitter.addListener("onGestureHandlerEvent", onGestureHandlerEvent);
  let closure_4 = DeviceEventEmitter.addListener("onGestureHandlerStateChange", onGestureHandlerEvent);
};
export { stopListening };
