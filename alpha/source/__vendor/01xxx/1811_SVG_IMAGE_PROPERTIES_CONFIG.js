// Module ID: 1811
// Function ID: 1812
// Name: SVG_IMAGE_PROPERTIES_CONFIG
// Dependencies: [1801]

// Module 1811 (SVG_IMAGE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1801 */;

const obj = { width: true, height: true, x: true, y: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_IMAGE_PROPERTIES_CONFIG = obj;
