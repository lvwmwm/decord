// Module ID: 15474
// Function ID: 118037
// Dependencies: []

// Module 15474
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default {
  clearVADWarning() {
    importDefault(dependencyMap[0]).dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag };
    obj.dispatch(obj);
  },
  clearPTTAdminWarning() {
    importDefault(dependencyMap[0]).dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
  clearElevatedProcess() {
    importDefault(dependencyMap[0]).dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  }
};
