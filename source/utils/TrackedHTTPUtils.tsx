// Module ID: 4942
// Function ID: 42354
// Name: makeRequest
// Dependencies: [29, 675, 507, 2]

// Module 4942 (makeRequest)
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
function makeRequest(arg0, trackedActionData, request_method) {
  let closure_0 = arg0;
  trackedActionData = trackedActionData.trackedActionData;
  const tmp = obj(trackedActionData, closure_2);
  closure_2 = tmp;
  obj = { url: tmp.url, request_method };
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    let closure_1 = arg1;
    const promise = callback(closure_2);
    callback(closure_2).then((status) => {
      let properties = lib.properties;
      if ("function" === typeof lib.properties) {
        properties = lib.properties(status);
      }
      let obj = callback(trackedActionData[1]);
      obj = { status_code: status.status };
      const merged = Object.assign(outer1_3);
      const merged1 = Object.assign(properties);
      obj.trackNetworkAction(lib.event, obj);
      callback(status);
    }).catch((status) => {
      let properties = lib.properties;
      if ("function" === typeof lib.properties) {
        properties = lib.properties(status);
      }
      let obj = callback(trackedActionData[1]);
      obj = { status_code: status.status };
      const body = status.body;
      let code;
      if (null != body) {
        code = body.code;
      }
      obj.error_code = code;
      const body2 = status.body;
      let message;
      if (null != body2) {
        message = body2.message;
      }
      obj.error_message = message;
      const merged = Object.assign(outer1_3);
      const merged1 = Object.assign(properties);
      obj.trackNetworkAction(lib.event, obj);
      lib(status);
    });
  });
}
let closure_2 = ["trackedActionData"];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default {
  get(arg0) {
    return makeRequest(require(507) /* _isNativeReflectConstruct */.HTTP.get, arg0, "get");
  },
  post(sendMessageOptionsForReply, responseHandler) {
    return makeRequest(require(507) /* _isNativeReflectConstruct */.HTTP.post, sendMessageOptionsForReply, "post");
  },
  put(arg0) {
    return makeRequest(require(507) /* _isNativeReflectConstruct */.HTTP.put, arg0, "put");
  },
  patch(arg0) {
    return makeRequest(require(507) /* _isNativeReflectConstruct */.HTTP.patch, arg0, "patch");
  },
  delete: function del(arg0) {
    return makeRequest(require(507) /* _isNativeReflectConstruct */.HTTP.del, arg0, "del");
  }
};
