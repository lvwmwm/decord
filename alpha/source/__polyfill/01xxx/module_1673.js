// Module ID: 1673
// Function ID: 1674
// Dependencies: [1674, 1675, 1686, 1694, 1696, 1695]

// Module 1673
import _mod1674 from "module_1674" /* 1674 */;
import _mod1675 from "module_1675" /* 1675 */;
import processStyleValue from "processStyleValue" /* 1686 */;
import registerComponentPropsBuilder from "registerComponentPropsBuilder" /* 1694 */;
import propsBuilder from "propsBuilder" /* 1695 */;
import createPropsBuilderDefault from "createPropsBuilder" /* 1696 */;

for (const key10013 in _mod1674) {
  exports[key10013] = _mod1674[key10013];
  continue;
}
for (const key10017 in _mod1675) {
  exports[key10017] = _mod1675[key10017];
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
