// Module ID: 4985
// Function ID: 4986
// Name: getDataView
// Dependencies: [4971]

// Module 4985 (getDataView)
const require = arg1;
const dependencyMap = arg6;
let c2 = 6;
let closure_3 = ["GIF87a", "GIF89a"];
arg5.default = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      hasItem = closure_3.includes(require(4971) /* getDataView */.getStringFromDataView(dataView, 0, c2));
      const obj = require(4971) /* getDataView */;
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
