// Module ID: 12895
// Function ID: 12896
// Name: nuf/NUFActionCreators
// Dependencies: [577, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 12895 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  importDefault = ORGANIC_REGISTERED;
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "NUF_NEW_USER", newUserType }));
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "NUF_COMPLETE" }));
};
