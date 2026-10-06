// Module ID: 14890
// Function ID: 14891
// Name: Shopfront
// Dependencies: [5, 1085, 1282, 1336, 6852, 2]
// Exports: search

// Module 14890 (Shopfront)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_4;

let obj = function _search() {
  obj = _asyncToGenerator(async (query) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
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
          let timeout;
          let aPIError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              timeout = undefined;
              let obj5 = closure_1;
              if (closure_1 === undefined) {
                obj5 = {};
              }
              timeout = obj5.timeout;
              aPIError = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const HTTP = closure_131_0(closure_131_1[2]).HTTP;
              const request = { url: closure_131_3.COLLECTIBLES_SEARCH, query, rejectWithError: true, timeout };
              c6 = 3;
              c7 = 1;
              const obj7 = { value: HTTP.get(request), done: false };
              return obj7;
            }
          } else if (2 === c6) {
            c5 = 0;
            closure_3 = closure_4;
            const self = this;
            const self2 = this;
            aPIError = new closure_131_0(closure_131_1[3]).APIError(closure_3);
            const obj3 = closure_131_0(closure_131_1[4]);
            const result = obj3.captureOrIgnoreApiError(aPIError);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp27) {
          closure_4 = tmp27;
          if (0 === c5) {
            c7 = 3;
            throw tmp27;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/collectibles/api/Shopfront.tsx");

export const search = function search() {
  return obj(...arguments);
};
