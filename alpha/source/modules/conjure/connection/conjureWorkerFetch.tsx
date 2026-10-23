// Module ID: 10792
// Function ID: 10793
// Name: conjureWorkerFetch
// Dependencies: [5, 10791, 2]
// Exports: fetchConjureWorker

// Module 10792 (conjureWorkerFetch)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c7, c8;

let obj = function _fetchConjureWorker() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c2;
    let c3;
    let c4;
    let closure_1;
    let obj9;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let status;
        let send;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let c6 = 0;
            c2 = undefined;
            c3 = undefined;
            c4 = undefined;
            let closure_5;
            let obj6 = closure_2;
            if (closure_2 === undefined) {
              obj6 = {};
            }
            ({ query: c2, json: c3, headers: c4 } = obj6);
            closure_5 = Object.assign(obj6, Object.assign({ query: 0, json: 0, headers: 0 }));
            status = undefined;
            send = function send(baseUrl) {
              let obj4;
              let response;
              baseUrl = baseUrl.baseUrl;
              obj = { ticket: baseUrl.ticket };
              const merged = Object.assign(c2);
              const uRLSearchParams = new URLSearchParams(obj);
              const combined = "" + baseUrl + closure_1 + "?" + uRLSearchParams;
              if (undefined === c3) {
                const _fetch2 = fetch;
                const obj2 = { headers };
                const merged1 = Object.assign(closure_5);
                response = fetch(combined, obj2);
              } else {
                const _fetch = fetch;
                const obj3 = { headers: obj4, body: JSON.stringify(tmp4) };
                const merged2 = Object.assign(closure_5);
                obj4 = { "content-type": "application/json" };
                const merged3 = Object.assign(headers);
                const _JSON = JSON;
                response = fetch(combined, obj3);
              }
              return response;
            };
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let closure_4;
          if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_4 = send;
              c7 = 2;
              c8 = 1;
              const obj10 = { value: obj9.getMediaTicket(closure_0), done: false };
              obj9 = closure_133_0(closure_133_1[1]);
              return obj10;
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              c7 = 3;
              c8 = 1;
              const obj12 = { value: closure_4(value), done: false };
              return obj12;
            }
          } else {
            let tmp5;
            let closure_3;
            if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                status = value;
                if (401 !== status.status) {
                  tmp5 = status;
                } else {
                  let obj2 = closure_133_0(closure_133_1[1]);
                  obj2.retireMediaTicket(closure_0);
                  closure_3 = send;
                  let obj3 = closure_133_0(closure_133_1[1]);
                  c7 = 4;
                  c8 = 1;
                  const obj14 = { value: obj3.getMediaTicket(closure_0), done: false };
                  return obj14;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const tmp4 = closure_3;
              tmp5 = closure_3(value);
            }
            c8 = 3;
            const obj15 = { value: tmp5, done: true };
            return obj15;
          }
        }
      } catch (tmp26) {
        c8 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/connection/conjureWorkerFetch.tsx");

export const fetchConjureWorker = function fetchConjureWorker() {
  return obj(...arguments);
};
