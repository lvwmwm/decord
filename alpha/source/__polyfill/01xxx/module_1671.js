// Module ID: 1671
// Function ID: 1672
// Dependencies: [1672, 1673, 1684, 1692, 1694, 1693]

// Module 1671
import _mod1672 from "module_1672" /* 1672 */;
import _mod1673 from "module_1673" /* 1673 */;
import processStyleValue from "processStyleValue" /* 1684 */;
import registerComponentPropsBuilder from "registerComponentPropsBuilder" /* 1692 */;
import propsBuilder from "propsBuilder" /* 1693 */;
import createPropsBuilderDefault from "createPropsBuilder" /* 1694 */;

for (const key10013 in _mod1672) {
  exports[key10013] = _mod1672[key10013];
  continue;
}
for (const key10017 in _mod1673) {
  exports[key10017] = _mod1673[key10017];
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
