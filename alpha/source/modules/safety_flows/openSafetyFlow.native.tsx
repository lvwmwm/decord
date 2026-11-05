// Module ID: 20395
// Function ID: 20396
// Name: openSafetyFlow
// Dependencies: [5, 4986, 1072, 20396, 6882, 20397, 19902, 20398, 8300, 20399, 2123, 2]
// Exports: openSafetyFlow

// Module 20395 (openSafetyFlow)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4986 */;
import size from "module_2" /* 2 */;

let c6;

let obj = function _openSafetyFlow() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
    let closure_4;
    let obj14;
    let obj2;
    let obj5;
    let obj9;
    let requiredAction;
    let task;
    function getInitialScreenForTask(task_type) {
      let UPDATE_APP;
      if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.AGE_VERIFICATION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.AGE_VERIFICATION;
      } else if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.PARENTAL_CONSENT_CONNECTION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION;
      } else if (task_type.task_type === closure_1_0(initialScreen[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION;
      } else if (null != closure_1_0(initialScreen[3]).TASK_TYPE_TO_SCREENS[task_type.task_type]) {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.OVERVIEW;
      } else {
        UPDATE_APP = tmp(tmp2[3]).SafetyFlowScreens.UPDATE_APP;
      }
      return UPDATE_APP;
    }
    let closure_0 = arg0;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        task = requiredAction;
        if (requiredAction == null) {
          task = closure_131_4.getAction();
        }
        if (task === closure_131_5.REQUIRE_SAFETY_FLOWS) {
          let c5 = 1;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: obj14.settleAppStoreConsentReinstatement(), done: false };
          obj14 = closure_131_0(closure_131_2[6]);
          return obj8;
        } else {
          const obj13 = closure_131_1(closure_131_2[4]);
          obj13.popWithKey(closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
        }
      }
    } else if (2 === c6) {
      c5 = 0;
      const pushLazy2 = closure_131_1(closure_131_2[4]).pushLazy;
      const obj10 = { task: null, initialScreen: closure_131_0(closure_131_2[3]).SafetyFlowScreens.ERROR };
      const tmp40 = closure_131_1(closure_131_2[4]);
      const tmp45 = closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths);
      pushLazy2(tmp45, obj10, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
    } else if (3 === c6) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else if (value) {
        c6 = 4;
        c7 = 1;
        const obj12 = { value: obj9.getCurrentTask(), done: false };
        obj9 = closure_131_0(closure_131_2[7]);
        return obj12;
      } else {
        c5 = 0;
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } else {
      if (4 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          task = value;
          if (null == task) {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const obj20 = closure_131_0(closure_131_2[6]);
            if (!obj20.isAppStoreConsentReinstatementEnabledForSession()) {
              if (task.task_type === closure_131_0(closure_131_2[3]).TaskType.APP_STORE_PARENTAL_REVOCATION) {
                c6 = 5;
                c7 = 1;
                const obj16 = { value: obj5.settleAppStoreAgeSignalReport(), done: false };
                obj5 = closure_131_0(closure_131_2[8]);
                return obj16;
              }
            }
          }
        }
      } else if (5 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          c6 = 6;
          c7 = 1;
          const obj18 = { value: obj2.getCurrentTask(), done: false };
          obj2 = closure_131_0(closure_131_2[7]);
          return obj18;
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
        task = value;
        if (null == value) {
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
      let initialScreen = getInitialScreenForTask(task);
      const pushLazy = closure_131_1(closure_131_2[4]).pushLazy;
      const obj19 = { task, initialScreen };
      const tmp22 = closure_131_1(closure_131_2[4]);
      const tmp27 = closure_131_0(closure_131_2[10])(closure_131_2[9], closure_131_2.paths);
      pushLazy(tmp27, obj19, closure_131_0(closure_131_2[5]).SAFETY_FLOWS_MODAL_KEY);
      c5 = 0;
    }
    await "HermesInternal";
    initialScreen = tmp4;
    let obj6 = closure_0;
    if (closure_0 === undefined) {
      obj6 = {};
    }
    requiredAction = obj6.requiredAction;
    return "flexDirection";
  });
  return obj(...arguments);
};
const UserRequiredActions = Constants.UserRequiredActions;
const result = size.fileFinishedImporting("modules/safety_flows/openSafetyFlow.native.tsx");

export function openSafetyFlow() {
  return obj(...arguments);
}
