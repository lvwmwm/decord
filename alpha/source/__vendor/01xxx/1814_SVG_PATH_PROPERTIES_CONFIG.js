// Module ID: 1814
// Function ID: 1815
// Name: SVG_PATH_PROPERTIES_CONFIG
// Dependencies: [1801, 1802]

// Module 1814 (SVG_PATH_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;
import processSVGPath from "processSVGPath" /* 1802 */;

const obj = { d: { process: processSVGPath.processSVGPath } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processSVGPath });

export const SVG_PATH_PROPERTIES_CONFIG = obj;
