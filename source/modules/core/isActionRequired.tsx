// Module ID: 1368
// Function ID: 1369
// Name: isActionRequired
// Dependencies: [1365, 1366, 2]
// Exports: default

// Module 1368 (isActionRequired)
import handleUpdateUser from "handleUpdateUser";
import handleRequiredAction from "handleRequiredAction";

const result = require("set").fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = handleUpdateUser;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = handleRequiredAction;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
