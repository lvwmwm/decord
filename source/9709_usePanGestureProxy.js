// Module ID: 9709
// Function ID: 75492
// Name: usePanGestureProxy
// Dependencies: []
// Exports: usePanGestureProxy

// Module 9709 (usePanGestureProxy)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = { code: "function pnpm_usePanGestureProxyTs1(e){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);}" };
let closure_4 = { code: "function pnpm_usePanGestureProxyTs2(e){const{onGestureStart,userDefinedConflictGestures}=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);}" };
let closure_5 = { code: "function pnpm_usePanGestureProxyTs3(e){const{onGestureUpdate,userDefinedConflictGestures}=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);}" };
let closure_6 = { code: "function pnpm_usePanGestureProxyTs4(e,success){const{onGestureEnd,userDefinedConflictGestures}=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);}" };
let closure_7 = { code: "function pnpm_usePanGestureProxyTs5(e,success){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);}" };

export const usePanGestureProxy = function usePanGestureProxy(onConfigurePanGesture) {
  onConfigurePanGesture = onConfigurePanGesture.onConfigurePanGesture;
  const require = onConfigurePanGesture;
  const onGestureStart = onConfigurePanGesture.onGestureStart;
  const dependencyMap = onGestureStart;
  const onGestureUpdate = onConfigurePanGesture.onGestureUpdate;
  const useMemo = onGestureUpdate;
  const onGestureEnd = onConfigurePanGesture.onGestureEnd;
  let closure_3 = onGestureEnd;
  let options = onConfigurePanGesture.options;
  if (undefined === options) {
    options = {};
  }
  const items = [onGestureStart, onGestureUpdate, onGestureEnd, onConfigurePanGesture];
  const tmp = useMemo(() => {
    const Gesture = onConfigurePanGesture(onGestureStart[1]).Gesture;
    const withTestIdResult = Gesture.Pan().withTestId("rnrc-gesture-handler");
    const onConfigurePanGesture = withTestIdResult;
    let obj = { onBegin: withTestIdResult.onBegin, onStart: withTestIdResult.onStart, onUpdate: withTestIdResult.onUpdate, onEnd: withTestIdResult.onEnd, onFinalize: withTestIdResult.onFinalize };
    obj = { onBegin: undefined, onStart: undefined, onUpdate: undefined, onEnd: undefined, onFinalize: undefined };
    const onGestureStart = obj;
    withTestIdResult.onBegin = function fakeOnBegin(onBegin) {
      obj.onBegin = onBegin;
      return withTestIdResult;
    };
    withTestIdResult.onStart = function fakeOnStart(onStart) {
      obj.onStart = onStart;
      return withTestIdResult;
    };
    withTestIdResult.onUpdate = function fakeOnUpdate(onUpdate) {
      obj.onUpdate = onUpdate;
      return withTestIdResult;
    };
    withTestIdResult.onEnd = function fakeOnEnd(onEnd) {
      obj.onEnd = onEnd;
      return withTestIdResult;
    };
    withTestIdResult.onFinalize = function fakeOnFinalize(onFinalize) {
      obj.onFinalize = onFinalize;
      return withTestIdResult;
    };
    if (onConfigurePanGesture) {
      onConfigurePanGesture(withTestIdResult);
    }
    ({ onBegin: obj2.onBegin, onStart: obj2.onStart, onUpdate: obj2.onUpdate, onEnd: obj2.onEnd, onFinalize: obj2.onFinalize } = obj);
    /* worklet (recovered source) */ function pnpm_usePanGestureProxyTs1(e){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onBegin)userDefinedConflictGestures.onBegin(e);}
    pnpm_usePanGestureProxyTs1.__closure = { userDefinedConflictGestures: obj };
    pnpm_usePanGestureProxyTs1.__workletHash = 7286111968229;
    pnpm_usePanGestureProxyTs1.__initData = onGestureEnd;
    const PanResult = Gesture.Pan();
    /* worklet (recovered source) */ function pnpm_usePanGestureProxyTs2(e){const{onGestureStart,userDefinedConflictGestures}=this.__closure;onGestureStart(e);if(userDefinedConflictGestures.onStart)userDefinedConflictGestures.onStart(e);}
    pnpm_usePanGestureProxyTs2.__closure = { onGestureStart, userDefinedConflictGestures: obj };
    pnpm_usePanGestureProxyTs2.__workletHash = 2969501037173;
    pnpm_usePanGestureProxyTs2.__initData = closure_4;
    const obj1 = { onGestureStart, userDefinedConflictGestures: obj };
    const onBeginResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1);
    /* worklet (recovered source) */ function pnpm_usePanGestureProxyTs3(e){const{onGestureUpdate,userDefinedConflictGestures}=this.__closure;onGestureUpdate(e);if(userDefinedConflictGestures.onUpdate)userDefinedConflictGestures.onUpdate(e);}
    const obj2 = { onGestureUpdate, userDefinedConflictGestures: obj };
    pnpm_usePanGestureProxyTs3.__closure = obj2;
    pnpm_usePanGestureProxyTs3.__workletHash = 14406733755860;
    pnpm_usePanGestureProxyTs3.__initData = closure_5;
    const onStartResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2);
    /* worklet (recovered source) */ function pnpm_usePanGestureProxyTs4(e,success){const{onGestureEnd,userDefinedConflictGestures}=this.__closure;onGestureEnd(e,success);if(userDefinedConflictGestures.onEnd)userDefinedConflictGestures.onEnd(e,success);}
    pnpm_usePanGestureProxyTs4.__closure = { onGestureEnd, userDefinedConflictGestures: obj };
    pnpm_usePanGestureProxyTs4.__workletHash = 3800149117372;
    pnpm_usePanGestureProxyTs4.__initData = closure_6;
    const obj3 = { onGestureEnd, userDefinedConflictGestures: obj };
    const onUpdateResult = withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2).onUpdate(pnpm_usePanGestureProxyTs3);
    /* worklet (recovered source) */ function pnpm_usePanGestureProxyTs5(e,success){const{userDefinedConflictGestures}=this.__closure;if(userDefinedConflictGestures.onFinalize)userDefinedConflictGestures.onFinalize(e,success);}
    pnpm_usePanGestureProxyTs5.__closure = { userDefinedConflictGestures: obj };
    pnpm_usePanGestureProxyTs5.__workletHash = 16525776198753;
    pnpm_usePanGestureProxyTs5.__initData = closure_7;
    withTestIdResult.onBegin(pnpm_usePanGestureProxyTs1).onStart(pnpm_usePanGestureProxyTs2).onUpdate(pnpm_usePanGestureProxyTs3).onEnd(pnpm_usePanGestureProxyTs4).onFinalize(pnpm_usePanGestureProxyTs5);
    return withTestIdResult;
  }, items);
  const updateGestureConfig = require(dependencyMap[2]).useUpdateGestureConfig(tmp, options);
  return tmp;
};
