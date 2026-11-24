// Module ID: 1818
// Function ID: 1819
// Name: SVG_RECT_PROPERTIES_CONFIG
// Dependencies: [1800]

// Module 1818 (SVG_RECT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;

const obj = { x: true, y: true, rx: true, ry: true, width: true, height: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_RECT_PROPERTIES_CONFIG = obj;
