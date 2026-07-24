// Module ID: 11808
// Function ID: 91671
// Name: setNewUser
// Dependencies: [686, 2]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 11808 (setNewUser)
const result = require("set").fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  const importDefault = ORGANIC_REGISTERED;
  importDefault(686).wait(() => {
    let obj = ORGANIC_REGISTERED(outer1_1[0]);
    obj = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  importDefault(686).wait(() => outer1_0(outer1_1[0]).dispatch({ type: "NUF_COMPLETE" }));
};
