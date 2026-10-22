// Module ID: 12285
// Function ID: 12286
// Name: conjureClarificationLinks
// Dependencies: [5, 11063, 2]
// Exports: sendAfterLinkingApps

// Module 12285 (conjureClarificationLinks)
import conjureWorkerFetch from "conjureWorkerFetch" /* 11063 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _approveCaller() {
  obj = _asyncToGenerator(async (arg0, caller_project_id) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj2;
      let obj6;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const obj5 = { method: "PUT", json: obj6 };
              c3 = 1;
              c2 = 1;
              obj6 = { caller_project_id };
              const obj7 = { value: obj2.fetchConjureWorker(closure_0, "/agent/linked-apps", obj5), done: false };
              obj2 = conjureWorkerFetch;
              return obj7;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export const sendAfterLinkingApps = function sendAfterLinkingApps(arg0, result1, arg2, fn) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  const questions = result1.questions;
  const flatMapResult = questions.flatMap((link) => {
    if (true === link.link) {
      let kind;
      if (closure_1[link.id] != null) {
        kind = tmp.kind;
      }
      if ("entities" === kind) {
        const entities = tmp.entities;
        const mapped = entities.map((id) => id.id);
      }
      return [];
    }
  });
  if (0 !== flatMapResult.length) {
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => {
      function approveCaller() {
        return closure_1_3(...arguments);
      }
      return approveCaller(item, closure_0);
    }));
    allSettledResult.then(fn);
  } else {
    const tmp = fn();
  }
};
