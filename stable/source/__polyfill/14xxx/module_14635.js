// Module ID: 14635
// Function ID: 14636
// Dependencies: [14626, 14636, 14634, 14637]

// Module 14635
import _mod14626 from "module_14626" /* 14626 */;
import _mod14634 from "module_14634" /* 14634 */;
import _mod14636 from "module_14636" /* 14636 */;
import _mod14637 from "module_14637" /* 14637 */;


export default _mod14626 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14636("Symbol");
  let tmpResultResult = _mod14634(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14637(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14637;
  }
  return tmpResultResult;
});
