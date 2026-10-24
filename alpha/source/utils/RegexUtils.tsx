// Module ID: 5608
// Function ID: 5609
// Name: RegexUtils
// Dependencies: [2]

// Module 5608 (RegexUtils)
import size from "module_2" /* 2 */;

const obj = {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default obj;
