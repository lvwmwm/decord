// Module ID: 2047
// Function ID: 2048
// Name: isActionRequired
// Dependencies: [2043, 2044, 2]
// Exports: default

// Module 2047 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2043 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
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
