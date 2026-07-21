// Module ID: 4116
// Function ID: 34078
// Dependencies: [284214097]

// Module 4116
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
