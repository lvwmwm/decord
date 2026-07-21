// Module ID: 11770
// Function ID: 91371
// Name: setNewUser
// Dependencies: [646840323, 899088385]
// Exports: setNewUser, setNewUserFlowCompleted

// Module 11770 (setNewUser)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  const importDefault = ORGANIC_REGISTERED;
  importDefault(dependencyMap[0]).wait(() => {
    let obj = arg0(closure_1[0]);
    obj = { type: "NUF_NEW_USER", newUserType: arg0 };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  importDefault(dependencyMap[0]).wait(() => callback(closure_1[0]).dispatch({ type: "NUF_COMPLETE" }));
};
