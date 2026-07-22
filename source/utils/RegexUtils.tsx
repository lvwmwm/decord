// Module ID: 4116
// Function ID: 34085
// Dependencies: []

// Module 4116
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
