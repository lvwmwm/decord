// Module ID: 335
// Function ID: 4969
// Dependencies: [31, 33, 336, 253]

// Module 335
import "result";
import { jsx } from "jsxProd";

let prop;
if (null != global) {
  prop = global.nativeFabricUIManager;
}
let closure_3 = require("setStyleAttributePreprocessor").create({ container: { display: "contents" } });

export default null != prop ? (function LayoutConformance(arg0) {
  return jsx(importDefault(336), Object.assign({}, arg0, { style: container.container }));
}) : (function UnimplementedLayoutConformance(children) {
  return children.children;
});
