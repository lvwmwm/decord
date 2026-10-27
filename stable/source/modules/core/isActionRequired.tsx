// Module ID: 2064
// Function ID: 2065
// Name: isActionRequired
// Dependencies: [2061, 2062, 2]
// Exports: default

// Module 2064 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2061 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2062 */;
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
