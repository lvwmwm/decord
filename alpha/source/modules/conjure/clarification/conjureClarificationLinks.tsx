// Module ID: 11954
// Function ID: 11955
// Name: conjureClarificationLinks
// Dependencies: [5, 10748, 2]
// Exports: sendAfterLinkingApps

// Module 11954 (conjureClarificationLinks)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let caller_project_id, closure_2;

let obj = function _approveCaller() {
  obj = _asyncToGenerator(async (caller_project_id, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj4;
      let obj8;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let ticket;
          let baseUrl;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              caller_project_id = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj4.mintWorkerTicket(caller_project_id), done: false };
              obj4 = ConjureWorkerTickets;
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _fetch = fetch;
              const _URLSearchParams = URLSearchParams;
              const self = this;
              const self2 = this;
              const obj7 = { ticket };
              const uRLSearchParams = new URLSearchParams(obj7);
              const _HermesInternal = HermesInternal;
              const request = { method: "PUT", body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { caller_project_id };
              const combined = "" + baseUrl + "/agent/linked-apps?" + uRLSearchParams;
              c3 = 2;
              c4 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c4 = 3;
          throw tmp9;
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
