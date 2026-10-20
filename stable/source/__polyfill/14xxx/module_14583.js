// Module ID: 14583
// Function ID: 14584
// Dependencies: [14574, 14584, 14582, 14585]

// Module 14583
import _mod14574 from "module_14574" /* 14574 */;
import _mod14582 from "module_14582" /* 14582 */;
import _mod14584 from "module_14584" /* 14584 */;

let tmp;
const _mod14585 = tmp(14585);

export default _mod14574 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14584("Symbol");
  let tmpResultResult = _mod14582(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14585;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
