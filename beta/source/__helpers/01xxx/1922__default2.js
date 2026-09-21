// Module ID: 1922
// Function ID: 1923
// Name: _default2
// Dependencies: [1923, 1317]

// Module 1922 (_default2)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 1923 */;
import module_1317 from "module_1317" /* 1317 */;

global.IntlPolyfill = CanonicalizeLocaleList.default;
if (!global.Intl) {
  global.Intl = CanonicalizeLocaleList.default;
  const result = CanonicalizeLocaleList.default.__applyLocaleSensitivePrototypes();
  const _default = CanonicalizeLocaleList.default;
}
const _default2 = CanonicalizeLocaleList.default;
_default2.default = CanonicalizeLocaleList.default;

export default _default2;
