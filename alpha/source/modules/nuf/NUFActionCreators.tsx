// Module ID: 13094
// Function ID: 13095
// Name: nuf/NUFActionCreators
// Dependencies: [573, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 13094 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  importDefault = ORGANIC_REGISTERED;
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "NUF_NEW_USER", newUserType }));
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "NUF_COMPLETE" }));
};
