// Module ID: 1816
// Function ID: 1817
// Name: SVG_POLYGON_PROPERTIES_CONFIG
// Dependencies: [1801, 1802]

// Module 1816 (SVG_POLYGON_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;
import processSVGPath from "processSVGPath" /* 1802 */;

const obj = { points: { process: processSVGPath.processPolygonPoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolygonPoints });

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
