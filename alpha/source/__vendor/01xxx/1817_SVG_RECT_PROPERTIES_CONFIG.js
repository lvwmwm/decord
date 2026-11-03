// Module ID: 1817
// Function ID: 1818
// Name: SVG_RECT_PROPERTIES_CONFIG
// Dependencies: [1799]

// Module 1817 (SVG_RECT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1799 */;

const obj = { x: true, y: true, rx: true, ry: true, width: true, height: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_RECT_PROPERTIES_CONFIG = obj;
