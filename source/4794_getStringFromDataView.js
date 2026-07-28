// Module ID: 4794
// Function ID: 41453
// Name: getStringFromDataView
// Dependencies: [4780]

// Module 4794 (getStringFromDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = !tmp;
    if (!!dataView) {
      hasItem = closure_3.includes(require(4780) /* getStringFromDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4780) /* getStringFromDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
