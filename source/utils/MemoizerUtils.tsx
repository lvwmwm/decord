// Module ID: 7065
// Function ID: 56486
// Dependencies: []

// Module 7065
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/MemoizerUtils.tsx");

export default {
  makeMemoizer(getURL) {
    const map = new Map();
    return (arg0) => {
      let value = map.get(arg0);
      if (undefined === value) {
        const tmp3 = arg0(arg0);
        const result = map.set(arg0, tmp3);
        value = tmp3;
      }
      return value;
    };
  }
};
