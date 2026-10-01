// Module ID: 17698
// Function ID: 17699
// Name: SafetyFlowsUtils
// Dependencies: [5, 19, 1372, 17692, 17694, 5039, 17693, 4528, 8810, 1115, 2781, 1485, 17697, 2]
// Exports: getScreensForTaskType, useOnTaskComplete

// Module 17698 (SafetyFlowsUtils)
import intl2 from "intl" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import AssetRegistryDefault from "AssetRegistry" /* 8810 */;
import types from "types" /* 17692 */;
import constants from "constants" /* 17693 */;
import SafetyFlowsActionCreators from "SafetyFlowsActionCreators" /* 17694 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let c2, closure_1, closure_2, data, navigation;

function fetchAndUpdateTask() {
  return obj(...arguments);
}
let obj = function _fetchAndUpdateTask() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
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
            value = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj3.getCurrentTask(), done: false };
            obj3 = SafetyFlowsActionCreators;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          if (null != value) {
            closure_0(value);
          }
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function navigateToScreenForTask(arr, task_type) {
  let intl;
  if (null == task_type) {
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(constants.SAFETY_FLOWS_MODAL_KEY);
    const obj2 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: AssetRegistryDefault, content: intl.string(_modDef2781["/fHz9S"]) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj2);
  } else {
    task_type = task_type.task_type;
    const tmp17 = types.TASK_TYPE_TO_SCREENS[task_type];
    let tmp5 = null;
    if (null != tmp17) {
      let tmp = tmp17;
      if (task_type === types.TaskType.EMAIL_VERIFICATION) {
        const currentUser = UserStore.getCurrentUser();
        let email;
        if (currentUser != null) {
          email = currentUser.email;
        }
        tmp = tmp17;
        if (null != email) {
          const items = [types.SafetyFlowScreens.VERIFY_EMAIL];
          tmp = items;
        }
      }
      tmp5 = tmp;
    }
    if (null != tmp5) {
      arr.push(tmp5[0]);
    } else {
      arr.push(types.SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export const getScreensForTaskType = function getScreensForTaskType(task_type) {
  const tmp3 = types.TASK_TYPE_TO_SCREENS[task_type];
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5 = tmp3;
    if (task_type === types.TaskType.EMAIL_VERIFICATION) {
      const currentUser = UserStore.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      tmp5 = tmp3;
      if (null != email) {
        const items = [types.SafetyFlowScreens.VERIFY_EMAIL];
        tmp5 = items;
      }
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = function useOnTaskComplete() {
  let setTask;
  obj = navigation(setTask[11]);
  navigation = obj.useNavigation();
  const obj2 = navigation(setTask[12]);
  const safetyFlowTask = obj2.useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (data) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj7;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              data = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { task_id: closure_1.task_id, flow_id: closure_1.flow_context.flow_id, data };
              const obj5 = { value: obj7.completeTask(obj4), done: false };
              obj7 = data(setTask[4]);
              return obj5;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj8 = { value: closure_2_6(closure_2), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            data = value;
            closure_2_8(data, data);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  const items = [navigation, task, setTask];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};
