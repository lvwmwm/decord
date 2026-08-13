// Module ID: 4986
// Function ID: 4987
// Name: getDataView
// Dependencies: [4972]

// Module 4986 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4972) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4972) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
