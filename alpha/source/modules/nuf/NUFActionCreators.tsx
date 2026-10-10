// Module ID: 12512
// Function ID: 12513
// Name: nuf/NUFActionCreators
// Dependencies: [584, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 12512 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  const obj = DispatcherDefault;
  const obj2 = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
  obj.dispatch(obj2);
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "NUF_COMPLETE" });
};
