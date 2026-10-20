// Module ID: 17314
// Function ID: 17315
// Name: conjureSecretsRequests
// Dependencies: [5, 13246, 2]
// Exports: submitProjectSecrets

// Module 17314 (conjureSecretsRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13246 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _submitProjectSecrets() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
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
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = ConjureWorkerTickets;
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/secrets?" + uRLSearchParams;
            c3 = 2;
            c4 = 1;
            const obj8 = { value: fetch(combined, request), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("secret submission failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c4 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/secrets/conjureSecretsRequests.tsx");

export const submitProjectSecrets = function submitProjectSecrets() {
  return obj(...arguments);
};
