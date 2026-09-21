// Module ID: 1297
// Function ID: 1298
// Dependencies: [1298, 1299, 1301, 1302]

// Module 1297
import bind from "bind" /* 1299 */;
import _mod1301 from "module_1301" /* 1301 */;
import _mod1302 from "module_1302" /* 1302 */;
import apply from "module_1298" /* 1298 */;

if (apply) {
  module.exports = apply;
} else {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1301;
  const _module3 = _mod1302;
  typeof call === "unknown" ? _module1(_module3) : call(_module2, _module3);
}
