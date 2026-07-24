// Module ID: 16610
// Function ID: 129528
// Name: getScreensForTaskType
// Dependencies: [5, 31, 1849, 16604, 16606, 4337, 16605, 3831, 10361, 1212, 2460, 1456, 16609, 2]
// Exports: useOnTaskComplete

// Module 16610 (getScreensForTaskType)
import module_4337 from "module_4337";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getScreensForTaskType(task_type) {
  const tmp = require(16604) /* TaskType */.TASK_TYPE_TO_SCREENS[task_type];
  let tmp2 = null;
  if (null != tmp) {
    let tmp5 = tmp;
    if (task_type === require(16604) /* TaskType */.TaskType.EMAIL_VERIFICATION) {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (null != currentUser) {
        email = currentUser.email;
      }
      tmp5 = tmp;
      if (null != email) {
        const items = [require(16604) /* TaskType */.SafetyFlowScreens.VERIFY_EMAIL];
        tmp5 = items;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function fetchAndUpdateTask() {
  return _fetchAndUpdateTask(...arguments);
}
function _fetchAndUpdateTask() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function navigateToScreenForTask(arr, task_type) {
  if (null == task_type) {
    let obj = importDefault(4337);
    obj.popWithKey(require(16605) /* SAFETY_FLOWS_MODAL_KEY */.SAFETY_FLOWS_MODAL_KEY);
    obj = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: importDefault(10361) };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.content = intl.string(importDefault(2460)["/fHz9S"]);
    importDefault(3831).open(obj);
  } else {
    const tmp2 = getScreensForTaskType(task_type.task_type);
    if (null != tmp2) {
      arr.push(tmp2[0]);
    } else {
      arr.push(require(16604) /* TaskType */.SafetyFlowScreens.UPDATE_APP);
    }
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export { getScreensForTaskType };
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = function useOnTaskComplete() {
  navigation = navigation(setTask[11]).useNavigation();
  const obj = navigation(setTask[11]);
  const safetyFlowTask = navigation(setTask[12]).useSafetyFlowTask();
  const task = safetyFlowTask.task;
  setTask = safetyFlowTask.setTask;
  const items = [navigation, task, setTask];
  return React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
