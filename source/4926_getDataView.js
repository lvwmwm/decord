// Module ID: 4926
// Function ID: 4927
// Name: getDataView
// Dependencies: [4912]

// Module 4926 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4912) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4912) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
