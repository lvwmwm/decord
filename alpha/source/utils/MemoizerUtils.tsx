// Module ID: 7467
// Function ID: 7468
// Name: MemoizerUtils
// Dependencies: [2]

// Module 7467 (MemoizerUtils)
import size from "module_2" /* 2 */;

let map;

let obj = {
  makeMemoizer(getURL) {
    map = new Map();
    return (arg0) => {
      let value = map.get(arg0);
      const obj = map;
      if (undefined === value) {
        const tmp3 = getURL(arg0);
        const result = obj.set(arg0, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};
let result = size.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default obj;
