// Module ID: 4988
// Function ID: 4989
// Name: isActionRequired
// Dependencies: [4985, 4986, 2]
// Exports: default

// Module 4988 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4985 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4986 */;
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
