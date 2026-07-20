// Module ID: 16423
// Function ID: 126893
// Name: getScreensForTaskType
// Dependencies: []
// Exports: useOnTaskComplete

// Module 16423 (getScreensForTaskType)
function getScreensForTaskType(task_type) {
  const tmp = arg1(dependencyMap[3]).TASK_TYPE_TO_SCREENS[task_type];
  let tmp2 = null;
  if (null != tmp) {
    let tmp5 = tmp;
    if (task_type === arg1(dependencyMap[3]).TaskType.EMAIL_VERIFICATION) {
      const currentUser = currentUser.getCurrentUser();
      let email;
      if (null != currentUser) {
        email = currentUser.email;
      }
      tmp5 = tmp;
      if (null != email) {
        const items = [arg1(dependencyMap[3]).SafetyFlowScreens.VERIFY_EMAIL];
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
  const _fetchAndUpdateTask = obj;
  return obj(...arguments);
}
function navigateToScreenForTask(arr, task_type) {
  if (null == task_type) {
    let obj = importDefault(dependencyMap[5]);
    obj.popWithKey(task_type(dependencyMap[6]).SAFETY_FLOWS_MODAL_KEY);
    obj = { key: "SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS", icon: importDefault(dependencyMap[8]) };
    const intl = task_type(dependencyMap[9]).intl;
    obj.content = intl.string(importDefault(dependencyMap[10])./fHz9S);
    importDefault(dependencyMap[7]).open(obj);
  } else {
    const tmp2 = getScreensForTaskType(task_type.task_type);
    if (null != tmp2) {
      arr.push(tmp2[0]);
    } else {
      arr.push(task_type(dependencyMap[3]).SafetyFlowScreens.UPDATE_APP);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/safety_flows/native/SafetyFlowsUtils.tsx");

export { getScreensForTaskType };
export { fetchAndUpdateTask };
export { navigateToScreenForTask };
export const useOnTaskComplete = function useOnTaskComplete() {
  const navigation = arg1(dependencyMap[11]).useNavigation();
  const arg1 = navigation;
  const obj = arg1(dependencyMap[11]);
  const safetyFlowTask = arg1(dependencyMap[12]).useSafetyFlowTask();
  const task = safetyFlowTask.task;
  const importDefault = task;
  const setTask = safetyFlowTask.setTask;
  const dependencyMap = setTask;
  const items = [navigation, task, setTask];
  return React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
