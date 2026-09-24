// Module ID: 8107
// Function ID: 8108
// Name: MemoizerUtils
// Dependencies: [2]

// Module 8107 (MemoizerUtils)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    const map = new Map();
    return (arg0) => {
      value = map.get(arg0);
      if (undefined === value) {
        const tmp3 = getURL(arg0);
        const result = map.set(arg0, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};
