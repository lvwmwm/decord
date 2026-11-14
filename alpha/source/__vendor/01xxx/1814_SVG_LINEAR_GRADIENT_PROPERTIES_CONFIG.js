// Module ID: 1814
// Function ID: 1815
// Name: SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG
// Dependencies: [1803]

// Module 1814 (SVG_LINEAR_GRADIENT_PROPERTIES_CONFIG)
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
