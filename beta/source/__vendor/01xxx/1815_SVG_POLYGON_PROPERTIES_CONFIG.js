// Module ID: 1815
// Function ID: 1816
// Name: SVG_POLYGON_PROPERTIES_CONFIG
// Dependencies: [1800, 1801]

// Module 1815 (SVG_POLYGON_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;
import processSVGPath from "processSVGPath" /* 1801 */;

const obj = { points: { process: processSVGPath.processPolygonPoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolygonPoints });

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
