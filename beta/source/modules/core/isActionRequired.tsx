// Module ID: 2037
// Function ID: 2038
// Name: isActionRequired
// Dependencies: [2034, 2035, 2]
// Exports: default

// Module 2037 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2034 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2035 */;

const size = fn(2);
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
