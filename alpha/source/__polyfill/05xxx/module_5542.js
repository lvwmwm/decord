// Module ID: 5542
// Function ID: 5543
// Dependencies: [5424, 5425]

// Module 5542
import tagMessage from "tagMessage" /* 5424 */;
import State from "State" /* 5425 */;

let activate;
let deactivate;
let fail;
let tmp10;
let tmp11;
let tmp12;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function pnpm_gestureStateManagerTs1(handlerTag,state){let[tagMessage]=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}})" }, tagMessage.tagMessage];
[tmp2, tmp3] = items;
function pnpm_gestureStateManagerTs1(arg0, arg1) {
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, arg1);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, arg1);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(_undefined("Failed to set gesture state"));
    throw error;
  }
}
const items1 = [tmp3];
pnpm_gestureStateManagerTs1.__closure = items1;
pnpm_gestureStateManagerTs1.__workletHash = 7329582373210;
pnpm_gestureStateManagerTs1.__initData = tmp2;
const items2 = [{ code: "(function activate_Pnpm_gestureStateManagerTs2(handlerTag){let[setGestureState,State]=this.__closure;setGestureState(handlerTag,State.ACTIVE);})" }, pnpm_gestureStateManagerTs1, State.State];
[tmp4, tmp5, tmp6] = items2;
const obj = { activate, fail, deactivate };
activate = function activate(arg0) {
  _undefined(arg0, _undefined2.ACTIVE);
};
const items3 = [tmp5, tmp6];
activate.__closure = items3;
activate.__workletHash = 1857335023251;
activate.__initData = tmp4;
const items4 = [{ code: "(function fail_Pnpm_gestureStateManagerTs3(handlerTag){let[setGestureState,State]=this.__closure;setGestureState(handlerTag,State.FAILED);})" }, pnpm_gestureStateManagerTs1, State.State];
[tmp7, tmp8, tmp9] = items4;
fail = function fail(arg0) {
  _undefined(arg0, _undefined2.FAILED);
};
const items5 = [tmp8, tmp9];
fail.__closure = items5;
fail.__workletHash = 2377190791686;
fail.__initData = tmp7;
const items6 = [{ code: "(function deactivate_Pnpm_gestureStateManagerTs4(handlerTag){let[setGestureState,State]=this.__closure;setGestureState(handlerTag,State.END);})" }, pnpm_gestureStateManagerTs1, State.State];
let c0;
let c1;
[tmp10, tmp11, tmp12] = items6;
deactivate = function deactivate(arg0) {
  _undefined(arg0, _undefined2.END);
};
const items7 = [tmp11, tmp12];
deactivate.__closure = items7;
deactivate.__workletHash = 3880091307703;
deactivate.__initData = tmp10;

export const GestureStateManager = obj;
