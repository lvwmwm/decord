// Module ID: 1815
// Function ID: 1816
// Name: SVG_PATH_PROPERTIES_CONFIG
// Dependencies: [1802, 1803]

// Module 1815 (SVG_PATH_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;
import processSVGPath from "processSVGPath" /* 1803 */;

const obj = { d: { process: processSVGPath.processSVGPath } };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);
({ process: processSVGPath.processSVGPath });

export const SVG_PATH_PROPERTIES_CONFIG = obj;
