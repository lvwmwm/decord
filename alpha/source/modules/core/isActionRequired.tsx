// Module ID: 2060
// Function ID: 2061
// Name: isActionRequired
// Dependencies: [2057, 2058, 2]
// Exports: default

// Module 2060 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2057 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2058 */;
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
