// Module ID: 12520
// Function ID: 12521
// Name: setNewUser
// Dependencies: [706, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 12520 (setNewUser)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const result = set.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  importDefault = ORGANIC_REGISTERED;
  dispatcherDefault.wait(() => {
    let obj = ORGANIC_REGISTERED(closure_1_1[0]);
    obj = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  dispatcherDefault.wait(() => callback(table[0]).dispatch({ type: "NUF_COMPLETE" }));
};
