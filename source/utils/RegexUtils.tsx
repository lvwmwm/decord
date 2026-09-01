// Module ID: 4465
// Function ID: 4466
// Name: set
// Dependencies: [2]

// Module 4465 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
