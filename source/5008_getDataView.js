// Module ID: 5008
// Function ID: 5009
// Name: getDataView
// Dependencies: [4994]

// Module 5008 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4994) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4994) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
