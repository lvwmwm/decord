// Module ID: 5812
// Function ID: 5813
// Name: RegexUtils
// Dependencies: [2]

// Module 5812 (RegexUtils)
import size from "module_2" /* 2 */;

const obj = {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default obj;
