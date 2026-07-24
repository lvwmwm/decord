// Module ID: 15649
// Function ID: 120615
// Name: dispatcher
// Dependencies: [686, 2]

// Module 15649 (dispatcher)
const result = require("set").fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default {
  clearVADWarning() {
    importDefault(686).dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = importDefault(686);
    obj = { type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag };
    obj.dispatch(obj);
  },
  clearPTTAdminWarning() {
    importDefault(686).dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    let obj = importDefault(686);
    obj = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
  clearElevatedProcess() {
    importDefault(686).dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    let obj = importDefault(686);
    obj = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  }
};
