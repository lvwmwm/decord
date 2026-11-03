// Module ID: 1814
// Function ID: 1815
// Name: SVG_POLYGON_PROPERTIES_CONFIG
// Dependencies: [1799, 1800]

// Module 1814 (SVG_POLYGON_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1799 */;
import processSVGPath from "processSVGPath" /* 1800 */;

const obj = { points: { process: processSVGPath.processPolygonPoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolygonPoints });

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
