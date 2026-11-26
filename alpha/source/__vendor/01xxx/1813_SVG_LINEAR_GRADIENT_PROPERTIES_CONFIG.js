// Module ID: 1813
// Function ID: 1814
// Name: SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG
// Dependencies: [1802]

// Module 1813 (SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG)
const require = globalThis.__r;

function process(arg0) {
  let num = 0;
  if ("userSpaceOnUse" === arg0) {
    num = 1;
  }
  return num;
}
const obj = { x1: true, x2: true, y1: true, y2: true, gradient: { process: require("processSVGPath").processSVGGradientStops }, gradientUnits: { process } };
({ process: require("processSVGPath").processSVGGradientStops });

export const SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG = { x1: true, x2: true, y1: true, y2: true, gradient: { process: require("processSVGPath").processSVGGradientStops }, gradientUnits: { process } };
