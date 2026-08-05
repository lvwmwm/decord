// Module ID: 4896
// Function ID: 4897
// Name: getDataView
// Dependencies: [4882]

// Module 4896 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4882) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4882) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
