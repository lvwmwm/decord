// Module ID: 4857
// Function ID: 4858
// Name: isActionRequired
// Dependencies: [4854, 4855, 2]
// Exports: default

// Module 4857 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4854 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4855 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = LoginRequiredActionStore;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = UserRequiredActionStore;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
