// Module ID: 1816
// Function ID: 1817
// Name: SVG_POLYLINE_PROPERTIES_CONFIG
// Dependencies: [1800, 1801]

// Module 1816 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;
import processSVGPath from "processSVGPath" /* 1801 */;

const obj = { points: { process: processSVGPath.processPolylinePoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolylinePoints });

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;
