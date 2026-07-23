// Module ID: 674
// Function ID: 8284
// Name: getGlobalObject
// Dependencies: [2]
// Exports: getGlobalObject

// Module 674 (getGlobalObject)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/GlobalUtils.tsx");

export const getGlobalObject = function getGlobalObject() {
  if ("undefined" !== typeof globalThis) {
    let _self2 = globalThis;
  } else {
    const _window = window;
    if ("undefined" !== typeof window) {
      _self2 = window;
    } else if (undefined !== global) {
      _self2 = global;
    } else {
      const _self = self;
      if ("undefined" !== typeof self) {
        _self2 = self;
      } else {
        const _Object = Object;
        _self2 = Object.create(null);
      }
    }
  }
  return _self2;
};
