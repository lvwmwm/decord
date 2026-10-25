// Module ID: 12277
// Function ID: 12278
// Name: conjurePublishHistoryRequests
// Dependencies: [5, 10794, 2]
// Exports: fetchPublishHistory, fetchPublishHistoryNotes

// Module 12277 (conjurePublishHistoryRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10794 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _fetchPublishHistory() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let tmp10;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const fetchConjureWorker = conjureWorkerFetch.fetchConjureWorker;
    const tmp18 = closure_0;
    const tmp19 = closure_1;
    if (null != closure_1) {
      const obj4 = { before: tmp19 };
      tmp10 = obj4;
    }
    const obj5 = { query: tmp10 };
    closure_0 = await fetchConjureWorker(tmp18, "/agent/publish-history", obj5);
    if (!closure_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("publish history failed (" + closure_0.status + ")");
      throw error;
    }
    await closure_0.json();
    return arg1;
  });
  return obj(...arguments);
};
obj = function _fetchPublishHistoryNotes() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = undefined;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal2 = HermesInternal;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj8.fetchConjureWorker(closure_0, "/agent/publish-history/" + encodeURIComponent(closure_1) + "/notes", { method: "POST" }), done: false };
            obj8 = conjureWorkerFetch;
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c3 = 2;
              c4 = 1;
              const obj6 = { value: closure_0.json(), done: false };
              return obj6;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("publish history notes failed (" + closure_0.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 3;
          obj = { value: value.notes, done: true };
          return obj;
        }
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/history/conjurePublishHistoryRequests.tsx");

export const fetchPublishHistory = function fetchPublishHistory() {
  return obj(...arguments);
};
export const fetchPublishHistoryNotes = function fetchPublishHistoryNotes() {
  return obj(...arguments);
};
