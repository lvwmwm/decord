// Module ID: 13167
// Function ID: 13168
// Name: conjurePublishEvalConnection
// Dependencies: [572, 1269, 7335, 2]
// Exports: releasePublishEvalOnTicketRefused, sendConjurePublishEval

// Module 13167 (conjurePublishEvalConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import v1 from "v1" /* 1269 */;
import size from "module_2" /* 2 */;

function rejectPendingPublishEval(projectId) {
  const value = map.get(projectId);
  const obj = map;
  if (null != value) {
    obj.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const self = this;
    const self2 = this;
    const reject = value.reject;
    const error = new Error("Publish eval result unavailable");
    reject(error);
  }
}
const map = new Map();
let obj = {
  publish_eval_result(request_id, projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    let requestId;
    const obj = map;
    if (value != null) {
      requestId = value.requestId;
    }
    if (requestId === request_id.request_id) {
      obj.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(request_id);
    }
  }
};
let result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEvalConnection.tsx");

export const publishEvalFrameHandlers = obj;
export { rejectPendingPublishEval };
export function releasePublishEvalOnTicketRefused(projectId, status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  const tmp2 = 403 !== status && 404 !== status;
  if (!tmp2) {
    const obj2 = { type: "CONJURE_PUBLISH_EVAL_PROJECT_GONE", projectId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
export function sendConjurePublishEval(projectId, arg1) {
  let closure_0 = projectId;
  let closure_1 = arg1;
  const promise = new Promise(function(resolve, reject) {
    let obj = map;
    let tmp = projectId;
    if (map.has(projectId)) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      let error = new Error("Publish eval already pending");
      reject(error);
    } else {
      const obj2 = v1;
      const v4Result = obj2.v4();
      const _setTimeout = setTimeout;
      const obj3 = {
        requestId: v4Result,
        resolve,
        reject,
        timeout: setTimeout(function() {
            const value = map.get(projectId);
            const obj = map;
            const tmp = projectId;
            if (null != value) {
              obj.delete(tmp);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const reject = value.reject;
              const error = new Error("Publish eval result unavailable");
              reject(error);
            }
          }, 15000)
      };
      const result = obj.set(tmp, obj3);
      const tmp3 = require;
      try {
        const tmp3Result = tmp3(7335);
        const conjureSocket = tmp3Result.getConjureSocket(tmp);
        const tmp9 = conjureSocket;
        if (null == conjureSocket) {
          let _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const sendPublishEval = tmp9.sendPublishEval;
          const obj4 = { type: "submit_publish_eval", request_id: v4Result };
          const merged = Object.assign(closure_1);
          sendPublishEval(obj4);
        }
      } catch (err) {
        rejectPendingPublishEval(tmp);
      }
    }
  });
  return promise;
}
