// Module ID: 11066
// Function ID: 11067
// Name: conjurePublishScheduleRequests
// Dependencies: [11067, 10998, 2]
// Exports: deletePublishSchedule, fetchPublishSchedule, setPublishSchedule

// Module 11066 (conjurePublishScheduleRequests)
import conjureProjectSockets from "conjureProjectSockets" /* 10998 */;
import ConjurePublishScheduleErrorDefault from "ConjurePublishScheduleError" /* 11067 */;
import size from "module_2" /* 2 */;

function rejectPendingPublishSchedule(projectId) {
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
    const error = new Error("Publishing schedule response unavailable");
    reject(error);
  }
}
const map = new Map();
let obj = {
  publish_schedule(error, projectId) {
    error = error.error;
    projectId = projectId.projectId;
    const schedule = error.schedule;
    const value = map.get(projectId);
    const obj = map;
    if (null != value) {
      obj.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      if (null != error) {
        const reject = value.reject;
        const self = this;
        const self2 = this;
        const tmp8 = new ConjurePublishScheduleErrorDefault(error);
        reject(tmp8);
      } else {
        value.resolve(schedule);
      }
    }
  }
};
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/conjurePublishScheduleRequests.tsx");

export const publishScheduleFrameHandlers = obj;
export { rejectPendingPublishSchedule };
export const fetchPublishSchedule = function fetchPublishSchedule(iter) {
  let closure_0 = iter;
  let closure_1 = { type: "get_publish_schedule" };
  const promise = new Promise(function(resolve, reject) {
    obj = map;
    let tmp = closure_0;
    if (map.has(closure_0)) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(function() {
            const value = map.get(closure_1_0);
            obj = map;
            const tmp = closure_1_0;
            if (null != value) {
              obj.delete(tmp);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const reject = value.reject;
              const error = new Error("Publishing schedule response unavailable");
              reject(error);
            }
          }, 15000)
      };
      const result = obj.set(tmp, obj2);
      try {
        const obj3 = conjureProjectSockets;
        const conjureSocket = obj3.getConjureSocket(tmp);
        const obj4 = conjureSocket;
        if (null == conjureSocket) {
          let _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(obj);
        }
      } catch (err) {
        rejectPendingPublishSchedule(tmp);
      }
    }
  });
  return promise;
};
export const deletePublishSchedule = function deletePublishSchedule(arg0) {
  let closure_0 = arg0;
  let closure_1 = { type: "delete_publish_schedule", supports_errors: true };
  const promise = new Promise(function(resolve, reject) {
    obj = map;
    let tmp = closure_0;
    if (map.has(closure_0)) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(function() {
            const value = map.get(closure_1_0);
            obj = map;
            const tmp = closure_1_0;
            if (null != value) {
              obj.delete(tmp);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const reject = value.reject;
              const error = new Error("Publishing schedule response unavailable");
              reject(error);
            }
          }, 15000)
      };
      const result = obj.set(tmp, obj2);
      try {
        const obj3 = conjureProjectSockets;
        const conjureSocket = obj3.getConjureSocket(tmp);
        const obj4 = conjureSocket;
        if (null == conjureSocket) {
          let _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(obj);
        }
      } catch (err) {
        rejectPendingPublishSchedule(tmp);
      }
    }
  });
  return promise;
};
export const setPublishSchedule = function setPublishSchedule(arg0, trigger) {
  let obj = { type: "set_publish_schedule", trigger, supports_errors: true };
  let closure_0 = arg0;
  const promise = new Promise(function(resolve, reject) {
    obj = map;
    let tmp = closure_0;
    if (map.has(closure_0)) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      let error = new Error("Publishing schedule request already pending");
      reject(error);
    } else {
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(function() {
            const value = map.get(closure_1_0);
            obj = map;
            const tmp = closure_1_0;
            if (null != value) {
              obj.delete(tmp);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const reject = value.reject;
              const error = new Error("Publishing schedule response unavailable");
              reject(error);
            }
          }, 15000)
      };
      const result = obj.set(tmp, obj2);
      try {
        const obj3 = conjureProjectSockets;
        const conjureSocket = obj3.getConjureSocket(tmp);
        const obj4 = conjureSocket;
        if (null == conjureSocket) {
          let _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error("Not connected");
          throw error1;
        } else {
          const result1 = obj4.sendPublishScheduleMessage(obj);
        }
      } catch (err) {
        rejectPendingPublishSchedule(tmp);
      }
    }
  });
  return promise;
};
