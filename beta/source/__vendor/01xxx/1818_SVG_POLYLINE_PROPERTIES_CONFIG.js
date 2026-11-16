// Module ID: 1818
// Function ID: 1819
// Name: SVG_POLYLINE_PROPERTIES_CONFIG
// Dependencies: [1802, 1803]

// Module 1818 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;
import processSVGPath from "processSVGPath" /* 1803 */;

const obj = { points: { process: processSVGPath.processPolylinePoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolylinePoints });

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;
