// Module ID: 5216
// Function ID: 45156
// Name: useScrollEventsHandlersDefault
// Dependencies: [5197, 1582, 5190, 5217]

// Module 5216 (useScrollEventsHandlersDefault)
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useScrollEventsHandlersDefaultTs1(){const{_lockableScrollableContentOffsetY}=this.__closure;return _lockableScrollableContentOffsetY.value;}" };
let closure_3 = { code: "function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){const{lockableScrollableContentOffsetY}=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}}" };
let closure_4 = { code: "function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){const{animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY}=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;}" };
let closure_5 = { code: "function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){const{scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE}=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}}" };
let closure_6 = { code: "function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
let closure_7 = { code: "function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
arg5.useScrollEventsHandlersDefault = function useScrollEventsHandlersDefault(animatedRef, sharedValue, lockableScrollableContentOffsetY) {
  const _require = animatedRef;
  const dependencyMap = sharedValue;
  let closure_2 = lockableScrollableContentOffsetY;
  let obj = _require(5197);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedSheetState = bottomSheetInternal.animatedSheetState;
  const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
  const animatedAnimationState = bottomSheetInternal.animatedAnimationState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  let obj1 = _require(1582);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs1(){const{_lockableScrollableContentOffsetY}=this.__closure;return _lockableScrollableContentOffsetY.value;}
  pnpm_useScrollEventsHandlersDefaultTs1.__closure = { _lockableScrollableContentOffsetY: sharedValue };
  pnpm_useScrollEventsHandlersDefaultTs1.__workletHash = 4812983890833;
  pnpm_useScrollEventsHandlersDefaultTs1.__initData = closure_2;
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){const{lockableScrollableContentOffsetY}=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}}
  pnpm_useScrollEventsHandlersDefaultTs2.__closure = { lockableScrollableContentOffsetY };
  pnpm_useScrollEventsHandlersDefaultTs2.__workletHash = 2896583663542;
  pnpm_useScrollEventsHandlersDefaultTs2.__initData = animatedSheetState;
  const animatedReaction = obj2.useAnimatedReaction(pnpm_useScrollEventsHandlersDefaultTs1, pnpm_useScrollEventsHandlersDefaultTs2);
  obj = {};
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){const{animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY}=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;}
  obj = { animatedSheetState, SHEET_STATE: _require(5190).SHEET_STATE, animatedHandleGestureState, State: _require(5217).State, animatedScrollableState, SCROLLABLE_STATE: _require(5190).SCROLLABLE_STATE, scrollTo: _require(1582).scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue };
  pnpm_useScrollEventsHandlersDefaultTs3.__closure = obj;
  pnpm_useScrollEventsHandlersDefaultTs3.__workletHash = 5039788283731;
  pnpm_useScrollEventsHandlersDefaultTs3.__initData = animatedScrollableState;
  const items = [animatedRef, sharedValue, animatedScrollableState, animatedSheetState];
  obj.handleOnScroll = _require(1582).useWorkletCallback(pnpm_useScrollEventsHandlersDefaultTs3, items);
  const obj5 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){const{scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE}=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}}
  obj1 = { scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: _require(5190).SHEET_STATE };
  pnpm_useScrollEventsHandlersDefaultTs4.__closure = obj1;
  pnpm_useScrollEventsHandlersDefaultTs4.__workletHash = 13124284367046;
  pnpm_useScrollEventsHandlersDefaultTs4.__initData = animatedAnimationState;
  const items1 = [sharedValue, animatedSheetState, animatedScrollableContentOffsetY];
  obj.handleOnBeginDrag = _require(1582).useWorkletCallback(pnpm_useScrollEventsHandlersDefaultTs4, items1);
  const obj7 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}
  obj2 = { animatedScrollableState, SCROLLABLE_STATE: _require(5190).SCROLLABLE_STATE, scrollTo: _require(1582).scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: _require(5190).ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  pnpm_useScrollEventsHandlersDefaultTs5.__closure = obj2;
  pnpm_useScrollEventsHandlersDefaultTs5.__workletHash = 10064727970609;
  pnpm_useScrollEventsHandlersDefaultTs5.__initData = animatedHandleGestureState;
  const items2 = [animatedRef, sharedValue, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY];
  obj.handleOnEndDrag = _require(1582).useWorkletCallback(pnpm_useScrollEventsHandlersDefaultTs5, items2);
  const obj9 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}
  const obj11 = _require(1582);
  pnpm_useScrollEventsHandlersDefaultTs6.__closure = { animatedScrollableState, SCROLLABLE_STATE: _require(5190).SCROLLABLE_STATE, scrollTo: _require(1582).scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: _require(5190).ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  pnpm_useScrollEventsHandlersDefaultTs6.__workletHash = 15660341750098;
  pnpm_useScrollEventsHandlersDefaultTs6.__initData = animatedScrollableContentOffsetY;
  const items3 = [sharedValue, animatedRef, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY];
  obj.handleOnMomentumEnd = obj11.useWorkletCallback(pnpm_useScrollEventsHandlersDefaultTs6, items3);
  return obj;
};
