// Module ID: 1809
// Function ID: 1810
// Name: SVG_ELLIPSE_PROPERTIES_CONFIG
// Dependencies: [1800]

// Module 1809 (SVG_ELLIPSE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;

const obj = { cx: true, cy: true, rx: true, ry: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_ELLIPSE_PROPERTIES_CONFIG = obj;
