// Module ID: 11097
// Function ID: 11098
// Name: conjureAppBuildRequestConnection
// Dependencies: [584, 2]

// Module 11097 (conjureAppBuildRequestConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
