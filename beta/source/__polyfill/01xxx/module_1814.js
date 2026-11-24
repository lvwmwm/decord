// Module ID: 1814
// Function ID: 1815
// Dependencies: []

// Module 1814
let obj;
const size = {
  x: true,
  y: true,
  width: true,
  height: true,
  patternUnits: obj,
  patternContentUnits: {
    process(arg0) {
      let num = 0;
      if ("userSpaceOnUse" === arg0) {
        num = 1;
      }
      return num;
    }
  }
};
obj = {
  process(arg0) {
    let num = 0;
    if ("userSpaceOnUse" === arg0) {
      num = 1;
    }
    return num;
  }
};

export const SVG_PATTERN_PROPERTIES_CONFIG = size;
