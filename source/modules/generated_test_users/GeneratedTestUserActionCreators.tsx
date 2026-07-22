// Module ID: 13428
// Function ID: 101939
// Name: _getGeneratedPoolById
// Dependencies: []
// Exports: getGeneratedPoolById, loginAsGeneratedUser, removeGeneratedPoolFromList

// Module 13428 (_getGeneratedPoolById)
function _getGeneratedPoolById() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getGeneratedPoolById = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const SafetyToastType = arg1(dependencyMap[4]).SafetyToastType;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

export const loginAsGeneratedUser = function loginAsGeneratedUser(id, arg1) {
  const user = authStore.getUser(arg1);
  if (null == user) {
    const _Error3 = Error;
    const error = new Error("User not found");
    throw error;
  } else {
    const pool = authStore.getPool(id);
    let password;
    if (null != pool) {
      password = pool.password;
    }
    if (null == password) {
      const _Error2 = Error;
      const error1 = new Error("Pool password not found");
      throw error1;
    } else if (null == user.email) {
      const _Error = Error;
      const error2 = new Error("User email not found");
      throw error2;
    } else {
      let obj = importDefault(dependencyMap[5]);
      obj = { login: user.email, password, isMultiAccount: true, source: "generated_test_user" };
      return obj.login(obj).catch(() => {
        callback(closure_2[6]).showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
    }
  }
};
export const getGeneratedPoolById = function getGeneratedPoolById(arg0, arg1) {
  return _getGeneratedPoolById(...arguments);
};
export const removeGeneratedPoolFromList = function removeGeneratedPoolFromList(poolId) {
  let obj = importDefault(dependencyMap[9]);
  obj = { type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId };
  obj.dispatch(obj);
};
