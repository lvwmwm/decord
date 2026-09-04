// Module ID: 12626
// Function ID: 12627
// Name: ContactSyncError
// Dependencies: [19, 21, 4481, 4218, 4482, 4477, 2]
// Exports: default

// Module 12626 (ContactSyncError)
import noopAll from "noop" /* 19 */;
import _modDef4218 from "module_4218" /* 4218 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { justifyContent: "center" }, error: { paddingHorizontal: 16, textAlign: "center" } });
let closure_5 = { code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}" };
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default function ContactSyncError(error) {
  error = error.error;
  let _require;
  const tmp = callback();
  let tmp2 = null != error;
  if (tmp2) {
    tmp2 = "" !== error;
  }
  _require = tmp2;
  let obj = _require(4218);
  const fn = function l() {
    let obj = callback(closure_1_2[4]);
    let num = 0;
    if (callback) {
      num = 44;
    }
    obj = { height: obj.withTiming(num) };
    return obj;
  };
  obj = { withTiming: _require(4482).withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
  fn.__closure = obj;
  fn.__workletHash = 14558247431913;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: jsx(_require(4477).Text, obj1) };
  items = [tmp.container, error.style, animatedStyle];
  return jsx(_modDef4218.View, { style: items, children: jsx(_require(4477).Text, obj1) });
};
