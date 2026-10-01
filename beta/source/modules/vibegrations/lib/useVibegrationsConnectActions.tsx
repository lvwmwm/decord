// Module ID: 16310
// Function ID: 16311
// Name: useVibegrationsConnectActions
// Dependencies: [5, 32, 19, 12642, 12649, 7818, 1115, 3715, 2]
// Exports: useVibegrationsConnectActions

// Module 16310 (useVibegrationsConnectActions)
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import vibegrationsExternalConnections from "vibegrationsExternalConnections" /* 12649 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c3;

let closure_6 = VibegrationsConnectionStore.requestExternalAuthorizeUrl;
const set = new Set();
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsConnectActions.tsx");

export const useVibegrationsConnectActions = function useVibegrationsConnectActions(projectId, presentError) {
  let callback;
  let tmp2;
  let closure_1 = presentError;
  let tmp = callback(react.useState(set), 2);
  [tmp2, dependencyMap] = tmp;
  const ref = react.useRef(set);
  callback = react.useCallback((arg0) => {
    const obj = vibegrationsExternalConnections;
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
                  const obj5 = { value: closure_2_6(tmp, type.type), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                tmp = value;
                closure_1_4(closure_129_0.type);
                if ("url" !== tmp.type) {
                  let stringResult;
                  const obj3 = type(closure_2_2[4]);
                  const tmp13 = closure_1;
                  if ("setup" === obj3.externalAuthErrorCopy(tmp.error)) {
                    const intl2 = type(closure_2_2[6]).intl;
                    stringResult = intl2.string(closure_2_1(closure_2_2[7]).avu1u4);
                  } else {
                    const intl = type(closure_2_2[6]).intl;
                    stringResult = intl.string(closure_2_1(closure_2_2[7])["5fwOcF"]);
                  }
                  tmp13(stringResult);
                } else {
                  const obj7 = { href: tmp.url, trusted: false };
                  obj = type(closure_2_2[5]);
                  obj.handleClick(obj7);
                }
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp32) {
              c3 = 3;
              throw tmp32;
            }
          }
        });
        return obj(...arguments);
      };
      if (null != projectId) {
        let tmp = projectId;
        obj = projectId(dependencyMap[4]);
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
};
