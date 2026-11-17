// Module ID: 8963
// Function ID: 8964
// Dependencies: [8949]

// Module 8963
import _mod8949 from "module_8949" /* 8949 */;

let obj = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      includes = includes.includes;
      const obj = _mod8949;
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
