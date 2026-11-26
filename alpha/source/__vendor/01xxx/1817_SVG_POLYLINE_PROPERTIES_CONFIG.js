// Module ID: 1817
// Function ID: 1818
// Name: SVG_POLYLINE_PROPERTIES_CONFIG
// Dependencies: [1801, 1802]

// Module 1817 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;
import processSVGPath from "processSVGPath" /* 1802 */;

const obj = { points: { process: processSVGPath.processPolylinePoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolylinePoints });

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;
