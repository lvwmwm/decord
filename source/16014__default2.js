// Module ID: 16014
// Function ID: 123680
// Name: _default2
// Dependencies: [16015, 553]

// Module 16014 (_default2)
import module_553 from "module_553";
import { default as _default2 } from "IsStructurallyValidLanguageTag";

global.IntlPolyfill = require("IsStructurallyValidLanguageTag").default;
if (!global.Intl) {
  global.Intl = require("IsStructurallyValidLanguageTag").default;
  const result = require("IsStructurallyValidLanguageTag").default.__applyLocaleSensitivePrototypes();
  const _default = require("IsStructurallyValidLanguageTag").default;
}
_default2.default = require("IsStructurallyValidLanguageTag").default;

export default _default2;
