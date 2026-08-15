// Module ID: 4924
// Function ID: 4925
// Name: getDataView
// Dependencies: [4910]

// Module 4924 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4910) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4910) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
