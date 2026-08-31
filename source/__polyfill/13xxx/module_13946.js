// Module ID: 13946
// Function ID: 13947
// Dependencies: [13937, 13947, 13945, 13948]

// Module 13946
import prop from "prop" /* 13937 */;
import all from "all" /* 13945 */;
import all2 from "all" /* 13947 */;
import call from "call" /* 13948 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});
