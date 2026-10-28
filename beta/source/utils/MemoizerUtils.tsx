// Module ID: 5632
// Function ID: 5633
// Name: MemoizerUtils
// Dependencies: [2]

// Module 5632 (MemoizerUtils)
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
