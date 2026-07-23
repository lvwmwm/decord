// Module ID: 1786
// Function ID: 19807
// Name: useAnimatedKeyboard
// Dependencies: [1582, 1776]

// Module 1786 (useAnimatedKeyboard)
const require = arg1;
const dependencyMap = arg6;
let obj = { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 };
let closure_3 = { code: "function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}" };
let closure_4 = { code: "function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}" };
let closure_5 = { code: "function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}" };
let closure_6 = { code: "function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}" };
arg5.KeyboardState = obj;
arg5.useAnimatedKeyboard = function useAnimatedKeyboard() {
  const obj = height(state[0]);
  height = obj.useSharedValue(0);
  state = height(state[0]).useSharedValue(obj.UNKNOWN);
  const obj2 = height(state[0]);
  /* worklet (recovered source) */ function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}
  pnpm_compatTs1.__closure = { state, KeyboardState: obj };
  pnpm_compatTs1.__workletHash = 14565322463725;
  pnpm_compatTs1.__initData = closure_3;
  /* worklet (recovered source) */ function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}
  pnpm_compatTs2.__closure = { height };
  pnpm_compatTs2.__workletHash = 10176723030164;
  pnpm_compatTs2.__initData = closure_4;
  /* worklet (recovered source) */ function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}
  pnpm_compatTs3.__closure = { height };
  pnpm_compatTs3.__workletHash = 5410731249621;
  pnpm_compatTs3.__initData = closure_5;
  /* worklet (recovered source) */ function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}
  pnpm_compatTs4.__closure = { state, KeyboardState: obj, height };
  pnpm_compatTs4.__workletHash = 1401367954247;
  pnpm_compatTs4.__initData = closure_6;
  height(state[1]).useKeyboardHandler({ onStart: pnpm_compatTs1, onMove: pnpm_compatTs2, onInteractive: pnpm_compatTs3, onEnd: pnpm_compatTs4 }, []);
  return { height, state };
};
