// Module ID: 13607
// Function ID: 104554
// Name: _getGeneratedPoolById
// Dependencies: [5, 1858, 13584, 653, 6659, 5588, 6664, 4943, 480, 686, 13608, 2]
// Exports: getGeneratedPoolById, loginAsGeneratedUser, removeGeneratedPoolFromList

// Module 13607 (_getGeneratedPoolById)
import dispatchLogout from "dispatchLogout";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
function _getGeneratedPoolById() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

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
      let obj = importDefault(5588);
      obj = { login: user.email, password, isMultiAccount: true, source: "generated_test_user" };
      return obj.login(obj).catch(() => {
        outer1_1(outer1_2[6]).showFailedToast(outer1_7.GENERIC_ERROR);
        return null;
      });
    }
  }
};
export const getGeneratedPoolById = function getGeneratedPoolById(arg0, arg1) {
  return _getGeneratedPoolById(...arguments);
};
export const removeGeneratedPoolFromList = function removeGeneratedPoolFromList(poolId) {
  let obj = importDefault(686);
  obj = { type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId };
  obj.dispatch(obj);
};
