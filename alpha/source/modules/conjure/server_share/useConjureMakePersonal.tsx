// Module ID: 13215
// Function ID: 13216
// Name: useConjureMakePersonal
// Dependencies: [5, 32, 19, 6954, 7265, 13199, 13216, 1113, 4079, 2]
// Exports: canMakeConjureProjectPersonal, default

// Module 13215 (useConjureMakePersonal)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6954 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import conjureChangeRows from "conjureChangeRows" /* 13216 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureMakePersonal.tsx");

export default function useConjureMakePersonal(id) {
  let callback;
  let closure_1;
  let closure_2;
  let first;
  let first1;
  let result;
  let target;
  let tmp10;
  _require = id;
  let obj = target;
  [first, closure_1] = target.useState(false);
  [first1, dependencyMap] = target.useState(null);
  const items = [id.id];
  const effect = target.useEffect(() => {
    const obj = ConjureActionCreators;
    return obj.refreshConjureInstallState(id.id);
  }, items);
  let obj2 = require("conjureRemoveApp");
  const conjureRemoveTarget = obj2.useConjureRemoveTarget(id.id);
  const tmp9 = _slicedToArray(target.useState(null), 2);
  [tmp10, _slicedToArray] = tmp9;
  target = conjureRemoveTarget;
  const tmp6 = _require;
  if (null != tmp10) {
    target = tmp10.target;
  }
  let appName;
  if (target != null) {
    appName = target.appName;
  }
  if (appName == null) {
    appName = id.name;
  }
  const items1 = [id, target];
  const memo = obj.useMemo(() => {
    const obj = conjureChangeRows;
    return obj.conjureMakePersonalRows(id, target);
  }, items1);
  const items2 = [appName, conjureRemoveTarget, id.id];
  let obj3 = { appName, rows: memo, keptChannels: result, pending: first, error: first1, submit: callback };
  result = null;
  callback = obj.useCallback(conjureRemoveTarget(function*(arg0, value) {
    let closure_0;
    let integrationStatus;
    let obj8;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
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
            id = undefined;
            tmp(true);
            closure_2(null);
            const obj4 = { target: conjureRemoveTarget };
            _slicedToArray(obj4);
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj5 = { value: obj8.makeConjureProjectPersonal(id.id), done: false };
            obj8 = id(c2[4]);
            return obj5;
          }
        } else if (1 === c3) {
          c2 = 0;
          const intl2 = id(c2[7]).intl;
          closure_129_2(intl2.string(tmp(c2[8])["d+wTRF"]));
          closure_129_4(null);
          closure_129_1(false);
          c4 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let TWYUzf;
          c2 = 0;
          closure_129_1(false);
          integrationStatus = integrationStatus.getIntegrationStatus(closure_129_0.id);
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.owner_authorization_revoked;
          }
          id = true === prop;
          const intl = id(c2[7]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const tmp14 = tmp(c2[8]);
          if (id) {
            TWYUzf = tmp14.tOu7uv;
          } else {
            TWYUzf = tmp14.TWYUzf;
          }
          const obj = { app: closure_129_6 };
          c4 = 3;
          const obj7 = { value: formatToPlainString(TWYUzf, obj), done: true };
          return obj7;
        }
      } catch (tmp28) {
        if (0 === c2) {
          c4 = 3;
          throw tmp28;
        } else {
          c3 = 1;
        }
      }
    }
  }), items2);
  if (null != target) {
    const tmp6Result = tmp6(13199);
    result = tmp6Result.conjureRemoveAppKeptChannels(target);
  }
  return obj3;
};
export function canMakeConjureProjectPersonal(project) {
  const tmp = "guild" === project.install_scope && isProjectOwner(project);
  return tmp;
}
