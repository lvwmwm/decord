// Module ID: 18957
// Function ID: 18958
// Name: PermissionActionCreators
// Dependencies: [572, 2]

// Module 18957 (PermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  clearVADWarning() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag });
  },
  clearPTTAdminWarning() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    const obj = DispatcherDefault;
    const obj2 = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj2);
  },
  clearElevatedProcess() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    const obj = DispatcherDefault;
    const obj2 = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default obj;
