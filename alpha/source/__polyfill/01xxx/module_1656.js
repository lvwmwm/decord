// Module ID: 1656
// Function ID: 1657
// Dependencies: [1657, 1661, 1788, 1756, 1663]

// Module 1656
import cssCallbacksRegistry from "cssCallbacksRegistry" /* 1657 */;
import cssKeyframesRegistry from "cssKeyframesRegistry" /* 1661 */;
import _mod1663 from "module_1663" /* 1663 */;
import _mod1756 from "module_1756" /* 1756 */;
import CSSManager from "CSSManager" /* 1788 */;

for (const key10013 in cssCallbacksRegistry) {
  exports[key10013] = cssCallbacksRegistry[key10013];
  continue;
}
for (const key10017 in cssKeyframesRegistry) {
  exports[key10017] = cssKeyframesRegistry[key10017];
  continue;
}
for (const key10021 in CSSManager) {
  exports[key10021] = CSSManager[key10021];
  continue;
}
for (const key10025 in _mod1756) {
  exports[key10025] = _mod1756[key10025];
  continue;
}
for (const key10029 in _mod1663) {
  exports[key10029] = _mod1663[key10029];
  continue;
}
