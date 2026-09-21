// Module ID: 1926
// Function ID: 1927
// Name: _default2
// Dependencies: [1927, 1321]

// Module 1926 (_default2)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 1927 */;
import module_1321 from "module_1321" /* 1321 */;

global.IntlPolyfill = CanonicalizeLocaleList.default;
if (!global.Intl) {
  global.Intl = CanonicalizeLocaleList.default;
  const result = CanonicalizeLocaleList.default.__applyLocaleSensitivePrototypes();
  const _default = CanonicalizeLocaleList.default;
}
const _default2 = CanonicalizeLocaleList.default;
_default2.default = CanonicalizeLocaleList.default;

export default _default2;
