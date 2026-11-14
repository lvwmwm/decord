// Module ID: 1803
// Function ID: 1804
// Name: processSVGPath
// Dependencies: [1804, 1805, 1806, 1807, 1808, 1809, 1810]

// Module 1803 (processSVGPath)
import _mod1804 from "module_1804" /* 1804 */;
import convertStringToNumber from "convertStringToNumber" /* 1805 */;
import processPercentage from "processPercentage" /* 1806 */;
import processPolylinePoints from "processPolylinePoints" /* 1807 */;
import _mod1808 from "module_1808" /* 1808 */;
import processSVGGradientStops from "processSVGGradientStops" /* 1809 */;
import _mod1810 from "module_1810" /* 1810 */;

for (const key10013 in _mod1804) {
  exports[key10013] = _mod1804[key10013];
  continue;
}
for (const key10017 in convertStringToNumber) {
  exports[key10017] = convertStringToNumber[key10017];
  continue;
}
for (const key10021 in processPercentage) {
  exports[key10021] = processPercentage[key10021];
  continue;
}
for (const key10025 in processPolylinePoints) {
  exports[key10025] = processPolylinePoints[key10025];
  continue;
}
const processSVGGradientStops_export = processSVGGradientStops.processSVGGradientStops;

export const processSVGPath = _mod1808.processSVGPath;
export { processSVGGradientStops_export as processSVGGradientStops };
export const processStrokeDashArray = _mod1810.processStrokeDashArray;
