// Module ID: 20073
// Function ID: 20074
// Name: openSafetyFlow
// Dependencies: [5, 4857, 1072, 20074, 6744, 20075, 20076, 8155, 20077, 8147, 8148, 20078, 1994, 2]
// Exports: openSafetyFlow

// Module 20073 (openSafetyFlow)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4857 */;
import size from "module_2" /* 2 */;

let c2, c3, closure_2;

let obj = function _openSafetyFlow() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_4;
    let obj13;
    let obj18;
    let requiredAction;
    let task;
    let tmp;
    function getInitialScreenForTask(task_type) {
      let UPDATE_APP;
      if (task_type.task_type === closure_1_0(closure_1_2[3]).TaskType.AGE_VERIFICATION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.AGE_VERIFICATION;
      } else if (task_type.task_type === closure_1_0(closure_1_2[3]).TaskType.PARENTAL_CONSENT_CONNECTION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION;
      } else if (task_type.task_type === closure_1_0(closure_1_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION;
      } else if (null != closure_1_0(closure_1_2[3]).TASK_TYPE_TO_SCREENS[task_type.task_type]) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.OVERVIEW;
      } else {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.UPDATE_APP;
      }
      return UPDATE_APP;
    }
    let closure_0 = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        let obj8 = { value, done: true };
        return obj8;
      } else {
        task = requiredAction;
        if (requiredAction == null) {
          task = closure_131_4.getAction();
        }
        if (task === closure_131_5.REQUIRE_SAFETY_FLOWS) {
          let c5 = 1;
          let c6 = 3;
          c7 = 1;
          let obj10 = { value: obj18.getCurrentTask(), done: false };
          obj18 = closure_131_0(closure_131_2[6]);
          return obj10;
        } else {
          const obj17 = closure_131_1(closure_131_2[4]);
          obj17.popWithKey(closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
        }
      }
    } else if (2 === tmp4) {
      c5 = 0;
      const pushLazy2 = closure_131_1(closure_131_2[4]).pushLazy;
      const obj11 = { task: null, initialScreen: closure_131_0(closure_131_2[3]).SafetyFlowScreens.ERROR };
      const tmp46 = closure_131_1(closure_131_2[4]);
      const tmp51 = closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths);
      pushLazy2(tmp51, obj11, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
    } else {
      if (3 === tmp4) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          task = value;
          if (null == task) {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (task.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
            c6 = 4;
            c7 = 1;
            const obj14 = { value: obj13.settleAppStoreAgeSignalReport(), done: false };
            obj13 = closure_131_0(closure_131_2[7]);
            return obj14;
          }
        }
      } else if (4 === tmp4) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          let obj9 = closure_131_0(closure_131_2[6]);
          c6 = 5;
          c7 = 1;
          const obj16 = { value: obj9.getCurrentTask(), done: false };
          return obj16;
        }
      } else if (5 === tmp4) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          task = value;
          if (null == value) {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (task.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
            const obj24 = closure_131_0(closure_131_2[8]);
            if (obj24.getIsAppStoreConsentReinstateEndpointEnabled("openSafetyFlow")) {
              const tmp13 = closure_131_0;
              let obj5 = closure_131_0(closure_131_2[7]);
              if (obj5.isAppStoreAgeSignalColdLaunch()) {
                c5 = 2;
                let obj6 = closure_131_0(closure_131_2[7]);
                c6 = 8;
                c7 = 1;
                const obj20 = {
                  value: obj6.queueAppStoreAgeSignalSubmit(closure_131_3(async (arg0, value) => {
                                if (c3 === 2) {
                                  c3 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp3 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj3 = { value, done: true };
                                    return obj3;
                                  } else {
                                    return { value: "HermesInternal", done: "HermesInternal" };
                                  }
                                } else {
                                  try {
                                    let tmp;
                                    c3 = 2;
                                    if (0 === c2) {
                                      if (arg0 === 1) {
                                        c3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 3;
                                        const obj4 = { value, done: true };
                                        return obj4;
                                      } else {
                                        let closure_1 = tmp4;
                                        tmp = undefined;
                                        const obj10 = tmp(c2[7]);
                                        if (obj10.isAppStoreAgeSignalColdLaunch()) {
                                          const obj6 = tmp(c2[9]);
                                          c2 = 1;
                                          c3 = 1;
                                          const obj5 = { value: obj6.getAppStoreConsentReinstatementProof(), done: false };
                                          return obj5;
                                        } else {
                                          c3 = 3;
                                          return { value: "HermesInternal", done: "HermesInternal" };
                                        }
                                      }
                                    } else {
                                      let tmp5;
                                      if (1 === c2) {
                                        if (arg0 === 1) {
                                          c3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c3 = 3;
                                          const obj7 = { value, done: true };
                                          return obj7;
                                        } else {
                                          tmp = value;
                                          if (null != tmp) {
                                            const obj2 = tmp(c2[10]);
                                            c2 = 2;
                                            c3 = 1;
                                            const obj8 = { value: obj2.reinstateAppStoreConsent(tmp), done: false };
                                            return obj8;
                                          }
                                        }
                                      } else if (arg0 === 1) {
                                        c3 = 3;
                                        throw value;
                                      } else {
                                        tmp5 = value;
                                        if (arg0 === 2) {
                                          c3 = 3;
                                          obj = { value, done: true };
                                          return obj;
                                        }
                                      }
                                      c3 = 3;
                                      const obj9 = { value: tmp5, done: true };
                                      return obj9;
                                    }
                                  } catch (tmp13) {
                                    c3 = 3;
                                    throw tmp13;
                                  }
                                }
                              })),
                  done: false
                };
                return obj20;
              }
            }
          }
        }
      } else {
        if (6 === tmp4) {
          c5 = 1;
        } else if (7 === tmp4) {
          c5 = 1;
        } else if (8 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj21 = { value, done: true };
            return obj21;
          } else {
            c5 = 1;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let tmp5 = closure_2;
          closure_2 = value;
          if (null == closure_2) {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            task = closure_2;
            c5 = 1;
          }
        }
        c5 = 3;
        let obj3 = closure_131_0(closure_131_2[6]);
        c6 = 9;
        c7 = 1;
        const obj22 = { value: obj3.getCurrentTask(), done: false };
        return obj22;
      }
      let initialScreen = getInitialScreenForTask(task);
      const pushLazy = closure_131_1(closure_131_2[4]).pushLazy;
      const obj23 = { task, initialScreen };
      const tmp28 = closure_131_1(closure_131_2[4]);
      const tmp33 = closure_131_0(closure_131_2[12])(closure_131_2[11], closure_131_2.paths);
      pushLazy(tmp33, obj23, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
      c5 = 0;
    }
    await "HermesInternal";
    initialScreen = tmp;
    let obj7 = closure_0;
    if (closure_0 === undefined) {
      obj7 = {};
    }
    requiredAction = obj7.requiredAction;
    return "flexDirection";
  });
  return obj(...arguments);
};
const UserRequiredActions = Constants.UserRequiredActions;
const result = size.fileFinishedImporting("modules/safety_flows/openSafetyFlow.native.tsx");

export function openSafetyFlow() {
  return obj(...arguments);
}
