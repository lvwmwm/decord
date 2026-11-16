// Module ID: 1670
// Function ID: 1671
// Dependencies: [1671, 1672, 1683, 1691, 1693, 1692]

// Module 1670
import _mod1671 from "module_1671" /* 1671 */;
import _mod1672 from "module_1672" /* 1672 */;
import processStyleValue from "processStyleValue" /* 1683 */;
import registerComponentPropsBuilder from "registerComponentPropsBuilder" /* 1691 */;
import propsBuilder from "propsBuilder" /* 1692 */;
import createPropsBuilderDefault from "createPropsBuilder" /* 1693 */;

for (const key10013 in _mod1671) {
  exports[key10013] = _mod1671[key10013];
  continue;
}
for (const key10017 in _mod1672) {
  exports[key10017] = _mod1672[key10017];
  continue;
}
for (const key10021 in processStyleValue) {
  exports[key10021] = processStyleValue[key10021];
  continue;
}
for (const key10025 in registerComponentPropsBuilder) {
  exports[key10025] = registerComponentPropsBuilder[key10025];
  continue;
}

export const createPropsBuilder = createPropsBuilderDefault;
export const stylePropsBuilder = propsBuilder.stylePropsBuilder;
