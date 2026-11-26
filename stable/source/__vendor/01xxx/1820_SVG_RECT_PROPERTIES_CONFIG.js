// Module ID: 1820
// Function ID: 1821
// Name: SVG_RECT_PROPERTIES_CONFIG
// Dependencies: [1802]

// Module 1820 (SVG_RECT_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;

const obj = { x: true, y: true, rx: true, ry: true, width: true, height: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_RECT_PROPERTIES_CONFIG = obj;
