// Module ID: 14250
// Function ID: 14251
// Dependencies: [14241, 14251, 14249, 14252]

// Module 14250
import prop from "prop" /* 14241 */;
import all from "all" /* 14249 */;
import all2 from "all" /* 14251 */;
import call from "call" /* 14252 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});
