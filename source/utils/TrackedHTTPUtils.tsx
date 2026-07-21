// Module ID: 4939
// Function ID: 42327
// Name: makeRequest
// Dependencies: []

// Module 4939 (makeRequest)
function makeRequest(arg0, trackedActionData, request_method) {
  trackedActionData = arg0;
  const dependencyMap = trackedActionData.trackedActionData;
  const tmp = callback(trackedActionData, closure_2);
  closure_2 = tmp;
  const callback = { url: tmp.url, request_method };
  return new Promise((arg0, arg1) => {
    const trackedActionData = arg1;
    const promise = arg0(tmp);
    arg0(tmp).then((status, self) => {
      let properties = self.properties;
      if ("function" === typeof self.properties) {
        properties = self.properties(status);
      }
      let obj = status(self[1]);
      obj = { status_code: status.status };
      const merged = Object.assign(closure_3);
      const merged1 = Object.assign(properties);
      obj.trackNetworkAction(self.event, obj);
      status(status);
    }).catch((status, self) => {
      let properties = self.properties;
      if ("function" === typeof self.properties) {
        properties = self.properties(status);
      }
      let obj = status(self[1]);
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
      const merged = Object.assign(closure_3);
      const merged1 = Object.assign(properties);
      obj.trackNetworkAction(self.event, obj);
      self(status);
    });
  });
}
let closure_2 = [-777111954108288600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default {
  get(arg0) {
    return makeRequest(arg1(dependencyMap[2]).HTTP.get, arg0, "get");
  },
  post(sendMessageOptionsForReply, responseHandler) {
    return makeRequest(responseHandler(dependencyMap[2]).HTTP.post, sendMessageOptionsForReply, "post");
  },
  put(arg0) {
    return makeRequest(arg1(dependencyMap[2]).HTTP.put, arg0, "put");
  },
  patch(arg0) {
    return makeRequest(arg1(dependencyMap[2]).HTTP.patch, arg0, "patch");
  },
  delete: function del(arg0) {
    return makeRequest(arg1(dependencyMap[2]).HTTP.del, arg0, "del");
  }
};
