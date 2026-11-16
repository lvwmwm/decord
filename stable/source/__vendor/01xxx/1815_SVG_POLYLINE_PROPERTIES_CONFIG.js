// Module ID: 1815
// Function ID: 1816
// Name: SVG_POLYLINE_PROPERTIES_CONFIG
// Dependencies: [1799, 1800]

// Module 1815 (SVG_POLYLINE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1799 */;
import processSVGPath from "processSVGPath" /* 1800 */;

const obj = { points: { process: processSVGPath.processPolylinePoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolylinePoints });

export const SVG_POLYLINE_PROPERTIES_CONFIG = obj;
