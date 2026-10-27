// Module ID: 10779
// Function ID: 10780
// Name: EmbeddedAppCSPActionCreators
// Dependencies: [5, 1294, 584, 1254, 2]
// Exports: fetchEmbeddedAppCSP

// Module 10779 (EmbeddedAppCSPActionCreators)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3;

let obj = function _fetchEmbeddedAppCSP() {
  obj = _asyncToGenerator(async (routerOrigin) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
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
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const _HermesInternal = HermesInternal;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj5 = { url: "" + routerOrigin + "/.discord/csp.json", rejectWithError: true };
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj4 = closure_130_1(closure_130_2[3]);
            obj4.captureException(closure_2);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj8 = { type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin, policy: body };
            obj = closure_130_1(closure_130_2[2]);
            obj.dispatch(obj8);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPActionCreators.tsx");

export const fetchEmbeddedAppCSP = function fetchEmbeddedAppCSP() {
  return obj(...arguments);
};
