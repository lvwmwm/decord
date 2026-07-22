// Module ID: 11713
// Function ID: 90968
// Name: ContactSyncError
// Dependencies: [0, 0, 0, 0, 4294967295, 0]
// Exports: default

// Module 11713 (ContactSyncError)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_4 = require("__exportStarResult1").createStyles({ container: { justifyContent: "center" }, error: {} });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

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
  const obj1 = { cachedAt: 1, edpbxy: "center", style: tmp.error, children: error };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj1);
  return jsx(importDefault(dependencyMap[3]).View, obj);
};
