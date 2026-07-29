// Module ID: 4816
// Function ID: 4817
// Name: getDataView
// Dependencies: [4802]

// Module 4816 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4802) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4802) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
