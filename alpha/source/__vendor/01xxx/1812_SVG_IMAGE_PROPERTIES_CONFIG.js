// Module ID: 1812
// Function ID: 1813
// Name: SVG_IMAGE_PROPERTIES_CONFIG
// Dependencies: [1802]

// Module 1812 (SVG_IMAGE_PROPERTIES_CONFIG)
import SVG_COMMON_PROPERTIES_CONFIG from "SVG_COMMON_PROPERTIES_CONFIG" /* 1802 */;

const obj = { width: true, height: true, x: true, y: true };
const merged = Object.assign(SVG_COMMON_PROPERTIES_CONFIG.SVG_COMMON_PROPERTIES_CONFIG);

export const SVG_IMAGE_PROPERTIES_CONFIG = obj;
