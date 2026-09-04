// Module ID: 4774
// Function ID: 4775
// Name: map
// Dependencies: [1418, 4775, 571, 4779, 4794, 4777, 4840]

// Module 4774 (map)
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;
import getPolyfill from "getPolyfill" /* 4775 */;
import map2 from "map" /* 4777 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4779 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4840 */;
import callBind from "callBind" /* 1418 */;
import defineProperty from "defineProperty" /* 4794 */;

let closure_2 = callBind.apply(getPolyfill());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return callback(arg0, callback2(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj[0] = getPolyfill;
obj[1] = map2;
obj[2] = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
