// Module ID: 1800
// Function ID: 1801
// Name: processSVGPath
// Dependencies: [1801, 1802, 1803, 1804, 1805, 1806, 1807]

// Module 1800 (processSVGPath)
import _mod1801 from "module_1801" /* 1801 */;
import convertStringToNumber from "convertStringToNumber" /* 1802 */;
import processPercentage from "processPercentage" /* 1803 */;
import processPolylinePoints from "processPolylinePoints" /* 1804 */;
import _mod1805 from "module_1805" /* 1805 */;
import processSVGGradientStops from "processSVGGradientStops" /* 1806 */;
import _mod1807 from "module_1807" /* 1807 */;

for (const key10013 in _mod1801) {
  exports[key10013] = _mod1801[key10013];
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

export const processSVGPath = _mod1805.processSVGPath;
export { processSVGGradientStops_export as processSVGGradientStops };
export const processStrokeDashArray = _mod1807.processStrokeDashArray;
