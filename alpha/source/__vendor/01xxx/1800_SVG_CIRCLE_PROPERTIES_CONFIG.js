// Module ID: 1800
// Function ID: 1801
// Name: SVG_CIRCLE_PROPERTIES_CONFIG
// Dependencies: [1801]

// Module 1800 (SVG_CIRCLE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;

const obj = { cx: true, cy: true, r: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_CIRCLE_PROPERTIES_CONFIG = obj;
