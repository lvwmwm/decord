// Module ID: 1672
// Function ID: 1673
// Dependencies: [1673, 1674, 1685, 1693, 1695, 1694]

// Module 1672
import _mod1673 from "module_1673" /* 1673 */;
import _mod1674 from "module_1674" /* 1674 */;
import processStyleValue from "processStyleValue" /* 1685 */;
import registerComponentPropsBuilder from "registerComponentPropsBuilder" /* 1693 */;
import propsBuilder from "propsBuilder" /* 1694 */;
import createPropsBuilderDefault from "createPropsBuilder" /* 1695 */;

for (const key10013 in _mod1673) {
  exports[key10013] = _mod1673[key10013];
  continue;
}
for (const key10017 in _mod1674) {
  exports[key10017] = _mod1674[key10017];
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
