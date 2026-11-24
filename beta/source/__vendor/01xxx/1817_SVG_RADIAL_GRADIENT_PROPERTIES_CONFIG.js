// Module ID: 1817
// Function ID: 1818
// Name: SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG
// Dependencies: [1801]

// Module 1817 (SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG)
const require = globalThis.__r;

let obj2;
const obj = {
  r: obj2,
  rx: true,
  ry: true,
  cx: {
    process(fx) {
      return { fx, cx: fx };
    }
  },
  cy: {
    process(fy) {
      return { fy, cy: fy };
    }
  },
  fx: true,
  fy: true,
  gradient: { process: require("processSVGPath").processSVGGradientStops },
  gradientUnits: {
    process(arg0) {
      let num = 0;
      if ("userSpaceOnUse" === arg0) {
        num = 1;
      }
      return num;
    }
  }
};
obj2 = {
  process(rx) {
    return { rx, ry: rx };
  }
};
({ process: require("processSVGPath").processSVGGradientStops });

export const SVG_RADIAL_GRADIENT_PROPERTIES_CONFIG = obj;
