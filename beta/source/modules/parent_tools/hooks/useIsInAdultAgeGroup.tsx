// Module ID: 8954
// Function ID: 8955
// Name: useIsInAdultAgeGroup
// Dependencies: [7816, 558, 568, 504, 2]

// Module 8954 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function u() {
      return ageGroup.getAgeGroup();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return "adult" === initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [FamilyCenterStore];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
});
