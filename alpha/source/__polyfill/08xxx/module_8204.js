// Module ID: 8204
// Function ID: 8205
// Dependencies: [8190]

// Module 8204
import _mod8190 from "module_8190" /* 8190 */;

let obj = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      includes = includes.includes;
      const obj = _mod8190;
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
