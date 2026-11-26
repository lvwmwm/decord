// Module ID: 8661
// Function ID: 8662
// Name: useClipMessageNoticeStore
// Dependencies: [560, 572, 2]
// Exports: claimClipMessageNotice, markClipMessageNoticeShown, releaseClipMessageNotice, useClipMessageNoticeOwner, useClipMessageNoticeOwners, useShownClipMessageNotice

// Module 8661 (useClipMessageNoticeStore)
import module_560_mod from "module_560" /* 560 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let module_560 = module_560_mod;
let closure_0 = module_560.create(() => ({}));
module_560 = module_560_mod;
let closure_1 = module_560.create(() => ({}));
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  closure_0.setState({}, true);
  closure_1.setState({}, true);
});
const result = size.fileFinishedImporting("modules/clips/useClipMessageNoticeStore.tsx");

export function claimClipMessageNotice(arg0, arg1) {
  let flag = null == closure_0.getState()[arg0];
  const obj = closure_0;
  if (flag) {
    const obj2 = {};
    obj2[arg0] = arg1;
    obj.setState(obj2);
    flag = true;
  }
  return flag;
}
export function releaseClipMessageNotice(arg0, arg1) {
  const obj = closure_0;
  if (closure_0.getState()[arg0] === arg1) {
    const obj2 = {};
    obj2[arg0] = undefined;
    obj.setState(obj2);
  }
}
export function useClipMessageNoticeOwner(arg0) {
  closure_0 = arg0;
  return closure_0((arg0) => arg0[closure_0]);
}
export function useClipMessageNoticeOwners() {
  return closure_0((arg0) => arg0);
}
export function markClipMessageNoticeShown(arg0, arg1) {
  const obj = closure_1;
  if (null == closure_1.getState()[arg0]) {
    const obj2 = {};
    obj2[arg0] = arg1;
    obj.setState(obj2);
  }
}
export function useShownClipMessageNotice(arg0) {
  closure_0 = arg0;
  return closure_1((arg0) => arg0[closure_0]);
}
