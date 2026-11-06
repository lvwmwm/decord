// Module ID: 5524
// Function ID: 5525
// Dependencies: [19, 5471, 5457]
// Exports: runCallback, touchEventTypeToCallbackType, useMemoizedGestureCallbacks

// Module 5524
import react from "react" /* 19 */;
import TouchEventType from "TouchEventType" /* 5457 */;
import CallbackType from "CallbackType" /* 5471 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
const useMemo = react.useMemo;
let items = [{ code: "(function getHandler_Pnpm_eventHandlersUtilsTs1(type,callbacks){let[CallbackType]=this.__closure;switch(type){case CallbackType.BEGAN:return callbacks.onBegin;case CallbackType.START:return callbacks.onActivate;case CallbackType.UPDATE:return callbacks.onUpdate;case CallbackType.END:return callbacks.onDeactivate;case CallbackType.FINALIZE:return callbacks.onFinalize;case CallbackType.TOUCHES_DOWN:return callbacks.onTouchesDown;case CallbackType.TOUCHES_MOVE:return callbacks.onTouchesMove;case CallbackType.TOUCHES_UP:return callbacks.onTouchesUp;case CallbackType.TOUCHES_CANCEL:return callbacks.onTouchesCancel;}})" }, CallbackType.CallbackType];
[tmp2, tmp3] = items;
function getHandler(arg0, onBegin) {
  if (_undefined.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (_undefined.START === arg0) {
    return onBegin.onActivate;
  } else if (_undefined.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (_undefined.END === arg0) {
    return onBegin.onDeactivate;
  } else if (_undefined.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (_undefined.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (_undefined.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (_undefined.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else {
    return _undefined.TOUCHES_CANCEL === arg0 ? onBegin.onTouchesCancel : undefined;
  }
}
const items1 = [tmp3];
getHandler.__closure = items1;
getHandler.__workletHash = 13046541192109;
getHandler.__initData = tmp2;
const items2 = [{ code: "(function touchEventTypeToCallbackType_Pnpm_eventHandlersUtilsTs2(eventType){let[TouchEventType,CallbackType]=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CallbackType.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CallbackType.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CallbackType.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CallbackType.TOUCHES_CANCEL;}return CallbackType.UNDEFINED;})" }, TouchEventType.TouchEventType, CallbackType.CallbackType];
let c1;
[tmp4, tmp5, tmp6] = items2;
function touchEventTypeToCallbackType(arg0) {
  if (_undefined.TOUCHES_DOWN === arg0) {
    return _undefined2.TOUCHES_DOWN;
  } else if (_undefined.TOUCHES_MOVE === arg0) {
    return _undefined2.TOUCHES_MOVE;
  } else if (_undefined.TOUCHES_UP === arg0) {
    return _undefined2.TOUCHES_UP;
  } else if (_undefined.TOUCHES_CANCEL === arg0) {
    return _undefined2.TOUCHES_CANCEL;
  } else {
    return _undefined2.UNDEFINED;
  }
}
const items3 = [tmp5, tmp6];
touchEventTypeToCallbackType.__closure = items3;
touchEventTypeToCallbackType.__workletHash = 6698033145431;
touchEventTypeToCallbackType.__initData = tmp4;
const items4 = [{ code: "(function runCallback_Pnpm_eventHandlersUtilsTs3(type,callbacks,event){let[getHandler]=this.__closure;const handler=getHandler(type,callbacks);if(!handler){return;}handler(event);})" }, getHandler];
let c0;
[tmp7, tmp8] = items4;
function runCallback(arg0, arg1, arg2) {
  const tmp = _undefined(arg0, arg1);
  if (tmp) {
    tmp(arg2);
  }
}
const items5 = [tmp8];
runCallback.__closure = items5;
runCallback.__workletHash = 179583064692;
runCallback.__initData = tmp7;

export function useMemoizedGestureCallbacks(disableReanimated) {
  let closure_0 = disableReanimated;
  const items = [, , , , , , , , ];
  ({ onActivate: arr[0], onBegin: arr[1], onDeactivate: arr[2], onFinalize: arr[3], onTouchesCancel: arr[4], onTouchesDown: arr[5], onTouchesMove: arr[6], onTouchesUp: arr[7], onUpdate: arr[8] } = disableReanimated);
  return useMemo(() => {
    const obj = {};
    if (onBegin.onBegin) {
      obj.onBegin = onBegin.onBegin;
    }
    if (onBegin.onActivate) {
      obj.onActivate = onBegin.onActivate;
    }
    if (onBegin.onDeactivate) {
      obj.onDeactivate = onBegin.onDeactivate;
    }
    if (onBegin.onFinalize) {
      obj.onFinalize = onBegin.onFinalize;
    }
    if (onBegin.onUpdate) {
      obj.onUpdate = onBegin.onUpdate;
    }
    if (onBegin.onTouchesDown) {
      obj.onTouchesDown = onBegin.onTouchesDown;
    }
    if (onBegin.onTouchesMove) {
      obj.onTouchesMove = onBegin.onTouchesMove;
    }
    if (onBegin.onTouchesUp) {
      obj.onTouchesUp = onBegin.onTouchesUp;
    }
    if (onBegin.onTouchesCancel) {
      obj.onTouchesCancel = onBegin.onTouchesCancel;
    }
    return obj;
  }, items);
}
export { touchEventTypeToCallbackType };
export { runCallback };
