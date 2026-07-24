// Module ID: 11750
// Function ID: 91255
// Name: ContactSyncError
// Dependencies: [31, 33, 4130, 3991, 4131, 4126, 2]
// Exports: default

// Module 11750 (ContactSyncError)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let _require;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  let obj = _require(3991);
  const fn = function l() {
    const obj = {};
    let num = 0;
    if (_undefined) {
      num = 44;
    }
    obj.height = _undefined(outer1_2[4]).withTiming(num);
    return obj;
  };
  obj = { withTiming: _require(4131).withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.container, error.style, animatedStyle];
  const obj1 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: error };
  obj.children = jsx(_require(4126).Text, { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp.error, children: error });
  return jsx(importDefault(3991).View, { style: items });
};
