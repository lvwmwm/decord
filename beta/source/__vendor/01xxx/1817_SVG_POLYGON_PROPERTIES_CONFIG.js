// Module ID: 1817
// Function ID: 1818
// Name: SVG_POLYGON_PROPERTIES_CONFIG
// Dependencies: [1802, 1803]

// Module 1817 (SVG_POLYGON_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;
import processSVGPath from "processSVGPath" /* 1803 */;

const obj = { points: { process: processSVGPath.processPolygonPoints } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processPolygonPoints });

export const SVG_POLYGON_PROPERTIES_CONFIG = obj;
