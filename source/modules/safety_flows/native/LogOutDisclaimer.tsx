// Module ID: 16431
// Function ID: 126939
// Name: LogOutDisclaimer
// Dependencies: []
// Exports: default

// Module 16431 (LogOutDisclaimer)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = {};
  obj = { variant: "text-xs/medium" };
  const intl = require(dependencyMap[3]).intl;
  obj = {
    handleLogOut() {
      callback(closure_2[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj.children = intl.format(importDefault(dependencyMap[4]).0DHxym, obj);
  obj.children = jsx(require(dependencyMap[2]).Text, obj);
  return jsx(require(dependencyMap[1]).ModalDisclaimer, obj);
};
