// Module ID: 8063
// Function ID: 8064
// Dependencies: [8049]

// Module 8063
import _mod8049 from "module_8049" /* 8049 */;

let obj = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      includes = includes.includes;
      const obj = _mod8049;
      hasItem = includes(obj.getStringFromDataView(dataView, 0, c2));
    }
    return hasItem;
  },
  findOffsets() {
    return { gifHeaderOffset: 0 };
  }
};
let c2 = 6;
let includes = ["GIF87a", "GIF89a"];

export default obj;
