// Module ID: 4943
// Function ID: 4944
// Name: getDataView
// Dependencies: [4929]

// Module 4943 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4929) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4929) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
