// Module ID: 15894
// Function ID: 15895
// Name: GeneratedTestUserActionCreators
// Dependencies: [5, 1404, 15871, 1085, 7019, 5930, 7025, 5938, 1273, 584, 15895, 2]
// Exports: getGeneratedPoolById, loginAsGeneratedUser, removeGeneratedPoolFromList

// Module 15894 (GeneratedTestUserActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5930 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5938 */;
import Constants2 from "Constants" /* 7019 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7025 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRecord from "UserRecord" /* 1404 */;
import GeneratedTestUsersStore from "GeneratedTestUsersStore" /* 15871 */;
import size from "module_2" /* 2 */;

let body, c2, c3;

let obj = function _getGeneratedPoolById() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let nextPromise;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = closure_1;
            const obj4 = { url: Endpoints.GENERATED_POOL_BY_ID(closure_0), trackedActionData: obj5, rejectWithError: false };
            const get = TrackedHTTPUtilsDefault.get;
            obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN };
            value = get(obj4);
            c3 = 1;
            c2 = 1;
            const obj6 = {
              value: nextPromise.catch(() => {
                        obj = closure_1_1(closure_1_2[6]);
                        obj.showFailedToast(constants.GENERIC_ERROR);
                        return null;
                      }),
              done: false
            };
            nextPromise = value.then((body) => {
              let fromServerResult;
              body = body.body;
              if (body.ok) {
                const users = body.users;
                const generated_pool = body.generated_pool;
                const obj2 = {
                  type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                  pool: fromServerResult.setPassword(closure_0),
                  users: users.map((item) => {
                      const tmp = new closure_1_4(item);
                      return tmp;
                    })
                };
                const dispatch = closure_2_1(closure_2_2[9]).dispatch;
                closure_2_1(closure_2_2[9]);
                const GeneratedTestPoolRecord = closure_2_0(closure_2_2[10]).GeneratedTestPoolRecord;
                fromServerResult = GeneratedTestPoolRecord.fromServer(generated_pool);
                dispatch(obj2);
              } else {
                let tmp = closure_2_1;
                obj = closure_2_1(closure_2_2[6]);
                obj.showFailedToast(constants.GENERIC_ERROR);
              }
            });
            return obj6;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp4) {
        c2 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const SafetyToastType = Constants2.SafetyToastType;
const result = size.fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

export const loginAsGeneratedUser = function loginAsGeneratedUser(id, arg1) {
  obj = GeneratedTestUsersStore;
  const user = GeneratedTestUsersStore.getUser(arg1);
  if (null == user) {
    const _Error3 = Error;
    const self5 = this;
    const self6 = this;
    const error = new Error("User not found");
    throw error;
  } else {
    const pool = obj.getPool(id);
    let password;
    if (pool != null) {
      password = pool.password;
    }
    if (null == password) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error1 = new Error("Pool password not found");
      throw error1;
    } else if (null == user.email) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error2 = new Error("User email not found");
      throw error2;
    } else {
      const obj3 = { login: user.email, password, isMultiAccount: true, source: "generated_test_user" };
      const obj2 = AuthenticationActionCreatorsDefault;
      const loginResult = obj2.login(obj3);
      return loginResult.catch(() => {
        obj = SafetyToastsActionCreatorsDefault;
        obj.showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
    }
  }
};
export const getGeneratedPoolById = function getGeneratedPoolById() {
  return obj(...arguments);
};
export const removeGeneratedPoolFromList = function removeGeneratedPoolFromList(poolId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId };
  obj.dispatch(obj2);
};
