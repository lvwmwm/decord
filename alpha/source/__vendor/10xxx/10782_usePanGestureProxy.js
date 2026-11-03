// Module ID: 10782
// Function ID: 10783
// Name: usePanGestureProxy
// Dependencies: [19, 5426, 10783]
// Exports: usePanGestureProxy

// Module 10782 (usePanGestureProxy)
import react from "react" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5426 */;

const useMemo = react.useMemo;
let closure_3 = { code: "(function pnpm_usePanGestureProxyTs1(e){let[userDefinedConflictGestures]=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);})" };
let closure_4 = { code: "(function pnpm_usePanGestureProxyTs2(e){let[onGestureStart,userDefinedConflictGestures]=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);})" };
let closure_5 = { code: "(function pnpm_usePanGestureProxyTs3(e){let[onGestureUpdate,userDefinedConflictGestures]=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);})" };
let closure_6 = { code: "(function pnpm_usePanGestureProxyTs4(e,success){let[onGestureEnd,userDefinedConflictGestures]=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);})" };
let closure_7 = { code: "(function pnpm_usePanGestureProxyTs5(e,success){let[userDefinedConflictGestures]=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);})" };

export const usePanGestureProxy = (onConfigurePanGesture) => {
  onConfigurePanGesture = onConfigurePanGesture.onConfigurePanGesture;
  const onGestureStart = onConfigurePanGesture.onGestureStart;
  const onGestureUpdate = onConfigurePanGesture.onGestureUpdate;
  const onGestureEnd = onConfigurePanGesture.onGestureEnd;
  let options = onConfigurePanGesture.options;
  if (undefined === options) {
    options = {};
  }
  let items = [onGestureStart, onGestureUpdate, onGestureEnd, onConfigurePanGesture];
  const tmp = onGestureUpdate(() => {
    let onBegin;
    let onEnd;
    let onFinalize;
    let onStart;
    let onUpdate;
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const withTestIdResult = PanResult.withTestId("rnrc-gesture-handler");
    let obj = { onBegin: "flexDirection", onStart: "channel_id", onUpdate: "a", onEnd: "isArray", onFinalize: "a" };
    withTestIdResult.onBegin = (onBegin) => {
      obj.onBegin = onBegin;
      return withTestIdResult;
    };
    withTestIdResult.onStart = (onStart) => {
      obj.onStart = onStart;
      return withTestIdResult;
    };
    withTestIdResult.onUpdate = (onUpdate) => {
      obj.onUpdate = onUpdate;
      return withTestIdResult;
    };
    withTestIdResult.onEnd = (onEnd) => {
      obj.onEnd = onEnd;
      return withTestIdResult;
    };
    withTestIdResult.onFinalize = (onFinalize) => {
      obj.onFinalize = onFinalize;
      return withTestIdResult;
    };
    ({ onBegin, onStart, onUpdate, onEnd, onFinalize } = withTestIdResult);
    if (onConfigurePanGesture) {
      onConfigurePanGesture(withTestIdResult);
    }
    withTestIdResult.onBegin = onBegin;
    withTestIdResult.onStart = onStart;
    withTestIdResult.onUpdate = onUpdate;
    withTestIdResult.onEnd = onEnd;
    withTestIdResult.onFinalize = onFinalize;
    const items = [closure_3, obj];
    [tmp2, tmp3] = items;
    function pnpm_usePanGestureProxyTs1(arg0) {
      const obj = _undefined;
      if (_undefined.onBegin) {
        obj.onBegin(arg0);
      }
    }
    const items1 = [tmp3];
    pnpm_usePanGestureProxyTs1.__closure = items1;
    pnpm_usePanGestureProxyTs1.__workletHash = 5525534194300;
    pnpm_usePanGestureProxyTs1.__initData = tmp2;
    const items2 = [closure_4, onGestureStart, obj];
    [tmp4, tmp5, tmp6] = items2;
    function pnpm_usePanGestureProxyTs2(arg0) {
      _undefined(arg0);
      const obj = _undefined2;
      if (_undefined2.onStart) {
        obj.onStart(arg0);
      }
    }
    const items3 = [tmp5, tmp6];
    pnpm_usePanGestureProxyTs2.__closure = items3;
    pnpm_usePanGestureProxyTs2.__workletHash = 7970688141516;
    pnpm_usePanGestureProxyTs2.__initData = tmp4;
    const onBeginResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1);
    const items4 = [closure_5, onGestureUpdate, obj];
    [tmp7, tmp8, tmp9] = items4;
    function pnpm_usePanGestureProxyTs3(arg0) {
      _undefined(arg0);
      const obj = _undefined2;
      if (_undefined2.onUpdate) {
        obj.onUpdate(arg0);
      }
    }
    const items5 = [tmp8, tmp9];
    pnpm_usePanGestureProxyTs3.__closure = items5;
    pnpm_usePanGestureProxyTs3.__workletHash = 2256335785357;
    pnpm_usePanGestureProxyTs3.__initData = tmp7;
    const onStartResult = onBeginResult.onStart(pnpm_usePanGestureProxyTs2);
    const items6 = [closure_6, onGestureEnd, obj];
    let c1;
    [tmp10, tmp11, tmp12] = items6;
    function pnpm_usePanGestureProxyTs4(arg0, arg1) {
      _undefined(arg0, arg1);
      const obj = _undefined2;
      if (_undefined2.onEnd) {
        obj.onEnd(arg0, arg1);
      }
    }
    const items7 = [tmp11, tmp12];
    pnpm_usePanGestureProxyTs4.__closure = items7;
    pnpm_usePanGestureProxyTs4.__workletHash = 14431046418597;
    pnpm_usePanGestureProxyTs4.__initData = tmp10;
    const onUpdateResult = onStartResult.onUpdate(pnpm_usePanGestureProxyTs3);
    const items8 = [closure_7, obj];
    let c0;
    [tmp13, tmp14] = items8;
    function pnpm_usePanGestureProxyTs5(arg0, arg1) {
      const obj = _undefined;
      if (_undefined.onFinalize) {
        obj.onFinalize(arg0, arg1);
      }
    }
    const items9 = [tmp14];
    pnpm_usePanGestureProxyTs5.__closure = items9;
    pnpm_usePanGestureProxyTs5.__workletHash = 8527927500216;
    pnpm_usePanGestureProxyTs5.__initData = tmp13;
    const onEndResult = onUpdateResult.onEnd(pnpm_usePanGestureProxyTs4);
    onEndResult.onFinalize(pnpm_usePanGestureProxyTs5);
    return withTestIdResult;
  }, items);
  const obj2 = onConfigurePanGesture(onGestureStart[2]);
  const updateGestureConfig = obj2.useUpdateGestureConfig(tmp, options);
  return tmp;
};
