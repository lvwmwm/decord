// Module ID: 1655
// Function ID: 1656
// Dependencies: [1656, 1660, 1787, 1755, 1662]

// Module 1655
import cssCallbacksRegistry from "cssCallbacksRegistry" /* 1656 */;
import cssKeyframesRegistry from "cssKeyframesRegistry" /* 1660 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1755 from "module_1755" /* 1755 */;
import CSSManager from "CSSManager" /* 1787 */;

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
for (const key10025 in _mod1755) {
  exports[key10025] = _mod1755[key10025];
  continue;
}
for (const key10029 in _mod1662) {
  exports[key10029] = _mod1662[key10029];
  continue;
}
