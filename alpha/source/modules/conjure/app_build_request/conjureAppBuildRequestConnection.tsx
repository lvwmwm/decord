// Module ID: 10948
// Function ID: 10949
// Name: conjureAppBuildRequestConnection
// Dependencies: [572, 2]

// Module 10948 (conjureAppBuildRequestConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  app_build_request(app_build_request, arg1) {
    let obj3;
    if (null != app_build_request.app_build_request) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: app_build_request.turn_id, patch: obj3 };
      obj3 = { appBuildRequest: app_build_request.app_build_request };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }
};
const result = size.fileFinishedImporting("modules/conjure/app_build_request/conjureAppBuildRequestConnection.tsx");

export const appBuildRequestStepHandlers = obj;
