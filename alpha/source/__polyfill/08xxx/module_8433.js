// Module ID: 8433
// Function ID: 8434
// Dependencies: [8419]

// Module 8433
import _mod8419 from "module_8419" /* 8419 */;

let obj = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      includes = includes.includes;
      const obj = _mod8419;
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
