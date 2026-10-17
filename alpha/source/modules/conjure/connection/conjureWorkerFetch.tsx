// Module ID: 11044
// Function ID: 11045
// Name: conjureWorkerFetch
// Dependencies: [5, 11042, 2]
// Exports: fetchConjureWorker

// Module 11044 (conjureWorkerFetch)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _fetchConjureWorker() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c2;
    let c3;
    let c4;
    let obj12;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
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
        let headers;
        let closure_5;
        let closure_6;
        let ticket;
        let closure_8;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            c2 = undefined;
            c3 = undefined;
            headers = undefined;
            closure_5 = undefined;
            let obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            ({ query: c2, json: c3, headers: c4 } = obj4);
            closure_5 = Object.assign(obj4, Object.assign({ query: 0, json: 0, headers: 0 }));
            closure_6 = undefined;
            ticket = undefined;
            closure_8 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c5 = 2;
            c6 = 1;
            const obj8 = { value: obj6.mintWorkerTicket(closure_0), done: false };
            obj6 = closure_132_0(closure_132_1[1]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          let response;
          closure_6 = value;
          ticket = closure_6.ticket;
          const baseUrl = closure_6.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj10 = { ticket };
          const merged = Object.assign(c2);
          const self = this;
          const self2 = this;
          const uRLSearchParams = new URLSearchParams(obj10);
          const _HermesInternal = HermesInternal;
          closure_8 = "" + baseUrl + closure_1 + "?" + uRLSearchParams;
          if (undefined === c3) {
            const _fetch2 = fetch;
            const obj11 = { headers };
            const merged1 = Object.assign(closure_5);
            response = fetch(closure_8, obj11);
          } else {
            const _fetch = fetch;
            obj = { headers: obj12, body: JSON.stringify(c3) };
            const merged2 = Object.assign(closure_5);
            obj12 = { "content-type": "application/json" };
            const merged3 = Object.assign(headers);
            const _JSON = JSON;
            response = fetch(closure_8, obj);
          }
          c6 = 3;
          const obj13 = { value: response, done: true };
          return obj13;
        }
      } catch (tmp28) {
        c6 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/connection/conjureWorkerFetch.tsx");

export const fetchConjureWorker = function fetchConjureWorker() {
  return obj(...arguments);
};
