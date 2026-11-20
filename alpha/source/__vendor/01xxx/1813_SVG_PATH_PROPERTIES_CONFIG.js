// Module ID: 1813
// Function ID: 1814
// Name: SVG_PATH_PROPERTIES_CONFIG
// Dependencies: [1800, 1801]

// Module 1813 (SVG_PATH_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;
import processSVGPath from "processSVGPath" /* 1801 */;

const obj = { d: { process: processSVGPath.processSVGPath } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processSVGPath });

export const SVG_PATH_PROPERTIES_CONFIG = obj;
