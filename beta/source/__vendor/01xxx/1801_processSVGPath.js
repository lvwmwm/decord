// Module ID: 1801
// Function ID: 1802
// Name: processSVGPath
// Dependencies: [1802, 1803, 1804, 1805, 1806, 1807, 1808]

// Module 1801 (processSVGPath)
import _mod1802 from "module_1802" /* 1802 */;
import convertStringToNumber from "convertStringToNumber" /* 1803 */;
import processPercentage from "processPercentage" /* 1804 */;
import processPolylinePoints from "processPolylinePoints" /* 1805 */;
import _mod1806 from "module_1806" /* 1806 */;
import processSVGGradientStops from "processSVGGradientStops" /* 1807 */;
import _mod1808 from "module_1808" /* 1808 */;

for (const key10013 in _mod1802) {
  exports[key10013] = _mod1802[key10013];
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

export const processSVGPath = _mod1806.processSVGPath;
export { processSVGGradientStops_export as processSVGGradientStops };
export const processStrokeDashArray = _mod1808.processStrokeDashArray;
