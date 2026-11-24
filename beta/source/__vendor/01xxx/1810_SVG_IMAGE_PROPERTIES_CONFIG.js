// Module ID: 1810
// Function ID: 1811
// Name: SVG_IMAGE_PROPERTIES_CONFIG
// Dependencies: [1800]

// Module 1810 (SVG_IMAGE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1800 */;

const obj = { width: true, height: true, x: true, y: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_IMAGE_PROPERTIES_CONFIG = obj;
