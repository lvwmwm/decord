// Module ID: 13700
// Function ID: 13701
// Name: nuf/NUFActionCreators
// Dependencies: [572, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 13700 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export function setNewUser(ORGANIC_REGISTERED) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
  obj.dispatch(obj2);
}
export function setNewUserFlowCompleted() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NUF_COMPLETE" });
}
