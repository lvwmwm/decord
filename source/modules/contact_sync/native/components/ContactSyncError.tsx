// Module ID: 11705
// Function ID: 90920
// Name: ContactSyncError
// Dependencies: [0, 0, 0, 0, 4294967295, 0]
// Exports: default

// Module 11705 (ContactSyncError)
import "result";
import { jsx } from "result";
import result from "result";

let closure_4 = result.createStyles({ container: { justifyContent: "center" }, error: { y: "center", isArray: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
result = arg1(dependencyMap[6]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let arg1;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  arg1 = tmp2;
  let obj = arg1(dependencyMap[3]);
  const fn = function l() {
    const obj = {};
    let num = 0;
    if (tmp2) {
      num = 44;
    }
    obj.height = tmp2(closure_2[4]).withTiming(num);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[4]).withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.container, error.style, animatedStyle];
  const obj1 = { INTEGRATION_CREATE: 1, ConstraintReasonCode: "center", style: tmp.error, children: error };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj1);
  return jsx(importDefault(dependencyMap[3]).View, obj);
};
