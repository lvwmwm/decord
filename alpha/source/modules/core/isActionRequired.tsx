// Module ID: 4819
// Function ID: 4820
// Name: isActionRequired
// Dependencies: [4816, 4817, 2]
// Exports: default

// Module 4819 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4816 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4817 */;
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
