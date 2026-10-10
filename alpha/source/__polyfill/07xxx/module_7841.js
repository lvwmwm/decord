// Module ID: 7841
// Function ID: 7842
// Dependencies: [7827]

// Module 7841
import _mod7827 from "module_7827" /* 7827 */;

let obj = {
  isGifFile(dataView) {
    let hasItem = dataView;
    if (hasItem) {
      includes = includes.includes;
      const obj = _mod7827;
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
