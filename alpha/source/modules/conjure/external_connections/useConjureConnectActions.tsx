// Module ID: 12511
// Function ID: 12512
// Name: useConjureConnectActions
// Dependencies: [5, 32, 19, 12482, 12481, 8931, 1114, 3865, 2]
// Exports: useConjureConnectActions

// Module 12511 (useConjureConnectActions)
import conjureExternalConnections from "conjureExternalConnections" /* 12482 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c3;

const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/external_connections/useConjureConnectActions.tsx");

export function useConjureConnectActions(projectId, presentError) {
  let callback;
  let tmp2;
  let closure_1 = presentError;
  let tmp = callback(react.useState(set), 2);
  [tmp2, dependencyMap] = tmp;
  const ref = react.useRef(set);
  callback = react.useCallback((arg0) => {
    const obj = conjureExternalConnections;
    ref.current = obj.endExternalAuthorization(ref.current, arg0);
    dependencyMap(ref.current);
  }, []);
  const items = [presentError, projectId, callback];
  let obj = {
    pending: tmp2,
    connect: react.useCallback((type) => {
      function startAuthorization() {
        return obj(...arguments);
      }
      projectId = type;
      let obj = function _startAuthorization() {
        obj = _asyncToGenerator(async (arg0, value) => {
          let closure_0;
          let obj5;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              let closure_1;
              let tmp;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_1 = tmp4;
                  tmp = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: obj5.requestExternalAuthorizeUrl(tmp, type.type), done: false };
                  obj5 = type(closure_2_2[4]);
                  return obj6;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                tmp = value;
                closure_1_4(closure_129_0.type);
                if ("url" !== tmp.type) {
                  let stringResult;
                  const obj3 = type(closure_2_2[3]);
                  const tmp13 = closure_1;
                  if ("setup" === obj3.externalAuthErrorCopy(tmp.error)) {
                    const intl2 = type(closure_2_2[6]).intl;
                    stringResult = intl2.string(closure_2_1(closure_2_2[7])["jCQ/1B"]);
                  } else {
                    const intl = type(closure_2_2[6]).intl;
                    stringResult = intl.string(closure_2_1(closure_2_2[7]).POxkSh);
                  }
                  tmp13(stringResult);
                } else {
                  const obj8 = { href: tmp.url, trusted: false };
                  obj = type(closure_2_2[5]);
                  obj.handleClick(obj8);
                }
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp33) {
              c3 = 3;
              throw tmp33;
            }
          }
        });
        return obj(...arguments);
      };
      if (null != projectId) {
        let tmp = projectId;
        obj = projectId(dependencyMap[3]);
        const tmp3 = ref;
        const result = obj.beginExternalAuthorization(ref.current, type.type);
        if (null != result) {
          tmp3.current = result;
          dependencyMap(result);
          const promise = startAuthorization();
          promise.catch(() => callback(type.type));
        }
      }
    }, items)
  };
  return obj;
}
