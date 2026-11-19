// Module ID: 18334
// Function ID: 18335
// Name: useConjureProjectServerChange
// Dependencies: [5, 32, 19, 6500, 18335, 504, 6719, 6814, 12295, 18336, 1113, 4089, 2]
// Exports: default, useConjureProjectServerCandidates

// Module 18334 (useConjureProjectServerChange)
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import conjureChangeRows from "conjureChangeRows" /* 18336 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5;

let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureProjectServerChange.tsx");

export default function useConjureProjectServerChange(id) {
  let closure_7;
  let closure_9;
  let moving;
  let project;
  let target;
  let tmp12;
  let tmp16;
  _require = id;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(id), items1);
  _require = id;
  let obj2 = require("useConjureProjects");
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds("ConjureProjectServerChange");
  let obj3 = require("get initialized");
  const items2 = [ConjureProjectStore];
  const items3 = [id];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const obj = id(first[6]);
    return obj.conjureServerProjectGuildId(ConjureProjectStore.getProject(id));
  }, items3);
  let obj4 = target;
  const items4 = [conjureEligibleGuilds, stateFromStores1];
  const memo = target.useMemo(() => conjureEligibleGuilds.filter((id) => id.id !== stateFromStores1), items4);
  moving = _slicedToArray(target.useState(() => {
    let install_scope;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    return "guild" === install_scope;
  }), 1)[0];
  const first1 = _slicedToArray(target.useState(memo), 1)[0];
  const items5 = [moving, id];
  const effect = target.useEffect(() => {
    const tmp = first;
    if (tmp) {
      const obj = ConjureActionCreators;
      const result = obj.refreshConjureInstallState(id);
    }
  }, items5);
  let tmp9 = null;
  const useConjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget;
  const tmp8 = require("conjureRemoveApp");
  if (moving) {
    tmp9 = id;
  }
  const conjureRemoveTarget = useConjureRemoveTarget(tmp9);
  [tmp12, _slicedToArray] = _slicedToArray(obj4.useState(null), 2);
  target = conjureRemoveTarget;
  _slicedToArray(obj4.useState(null), 2);
  if (null != tmp12) {
    target = tmp12.target;
  }
  [ConjureProjectStore, closure_7] = _slicedToArray(obj4.useState(null), 2);
  _slicedToArray(obj4.useState(null), 2);
  let found = first1.find((id) => id.id === ConjureProjectStore);
  if (found == null) {
    found = first1[0];
  }
  if (found == null) {
    found = null;
  }
  [tmp16, closure_9] = _slicedToArray(obj4.useState(false), 2);
  _slicedToArray(obj4.useState(false), 2);
  const tmp5Result6 = _slicedToArray(obj4.useState(null), 2);
  let closure_10 = tmp5Result6[1];
  let str;
  const first2 = tmp5Result6[0];
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const items6 = [stateFromStores, found, moving, target];
  const memo1 = obj4.useMemo(() => {
    if (null != stateFromStores) {
      if (null != found) {
        const obj = conjureChangeRows;
        if (first) {
          obj.conjureMoveRows(stateFromStores, target, found.name);
        } else {
          obj.conjureShareRows(stateFromStores, found.name);
        }
      }
      return [];
    }
  }, items6);
  const callback = obj4.useCallback((arg0) => {
    closure_7(arg0);
    closure_10(null);
  }, []);
  const items7 = [str, found, conjureRemoveTarget, moving, id];
  let obj5 = {
    appName: str,
    moving,
    guilds: first1,
    guild: found,
    pickGuild: callback,
    rows: memo1,
    pending: tmp16,
    error: first2,
    submit: obj4.useCallback(conjureRemoveTarget(function*(arg0, value) {
      let body;
      let closure_0;
      let closure_1;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c3;
        try {
          let message;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              id = tmp4;
              message = undefined;
              if (null == found) {
                c5 = 3;
                return { value: null, done: true };
              } else {
                closure_9(true);
                closure_10(null);
                const obj4 = { target: conjureRemoveTarget };
                _slicedToArray(obj4);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: obj5.setConjureProjectServer(id, found.id), done: false };
                obj5 = id(body[7]);
                return obj6;
              }
            }
          } else if (1 === c4) {
            let stringResult;
            c3 = 0;
            message = undefined;
            if (body != null) {
              body = body.body;
              if (body != null) {
                message = body.message;
              }
            }
            const tmp12 = closure_129_10;
            if (typeof message === "string") {
              stringResult = message;
            } else {
              let qDjkvv;
              const intl2 = id(body[10]).intl;
              const string = intl2.string;
              const tmp55 = tmp(body[11]);
              if (closure_129_2) {
                qDjkvv = tmp55.mdrXGt;
              } else {
                qDjkvv = tmp55.qDjkvv;
              }
              stringResult = string(qDjkvv);
            }
            tmp12(stringResult);
            closure_129_4(null);
            closure_129_9(false);
            c5 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let yHhjsi;
            c3 = 0;
            closure_129_9(false);
            const intl = id(body[10]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const tmp48 = tmp(body[11]);
            if (closure_129_2) {
              yHhjsi = tmp48["B+Xtjy"];
            } else {
              yHhjsi = tmp48.yHhjsi;
            }
            const obj = { app: closure_129_11, server: closure_129_8.name };
            c5 = 3;
            const obj8 = { value: formatToPlainString(yHhjsi, obj), done: true };
            return obj8;
          }
        } catch (tmp32) {
          body = tmp32;
          if (0 === c3) {
            c5 = 3;
            throw tmp32;
          } else {
            c4 = 1;
          }
        }
      }
    }), items7)
  };
  return obj5;
};
export function useConjureProjectServerCandidates(projectId) {
  let stateFromStores;
  _require = projectId;
  const obj = require("useConjureProjects");
  const conjureEligibleGuilds = obj.useConjureEligibleGuilds("ConjureProjectServerChange");
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = id(first[6]);
    return obj.conjureServerProjectGuildId(ConjureProjectStore.getProject(id));
  }, items1);
  const items2 = [conjureEligibleGuilds, stateFromStores];
  return react.useMemo(() => conjureEligibleGuilds.filter((id) => id.id !== stateFromStores1), items2);
}
