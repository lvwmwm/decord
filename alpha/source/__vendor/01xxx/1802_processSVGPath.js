// Module ID: 1802
// Function ID: 1803
// Name: processSVGPath
// Dependencies: [1803, 1804, 1805, 1806, 1807, 1808, 1809]

// Module 1802 (processSVGPath)
import _mod1803 from "module_1803" /* 1803 */;
import convertStringToNumber from "convertStringToNumber" /* 1804 */;
import processPercentage from "processPercentage" /* 1805 */;
import processPolylinePoints from "processPolylinePoints" /* 1806 */;
import _mod1807 from "module_1807" /* 1807 */;
import processSVGGradientStops from "processSVGGradientStops" /* 1808 */;
import _mod1809 from "module_1809" /* 1809 */;

for (const key10013 in _mod1803) {
  exports[key10013] = _mod1803[key10013];
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

export const processSVGPath = _mod1807.processSVGPath;
export { processSVGGradientStops_export as processSVGGradientStops };
export const processStrokeDashArray = _mod1809.processStrokeDashArray;
