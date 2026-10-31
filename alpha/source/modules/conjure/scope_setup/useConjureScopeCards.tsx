// Module ID: 12748
// Function ID: 12749
// Name: useConjureScopeCards
// Dependencies: [5, 32, 19, 6844, 1113, 3868, 12580, 504, 12596, 2]
// Exports: useConjureScopeSetupCard, useConjureScopeSwitchCard

// Module 12748 (useConjureScopeCards)
import intl8 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6844 */;
import conjureScopeSetup from "conjureScopeSetup" /* 12580 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, closure_4;

function errorStatus(status) {
  return status.status;
}
let react = react_mod;
let isProjectOwner = ConjureProjectStore2.isProjectOwner;
let c8 = "scope-setup:q0";
let closure_9 = "" + "scope-setup:q0" + ":0";
let closure_10 = "" + "scope-setup:q0" + ":1";
const result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureScopeCards.tsx");

export function useConjureScopeSetupCard(projectId) {
  let closure_5;
  let fn;
  let fn2;
  let guild_id;
  let handleAnswered;
  let id;
  let id2;
  let id3;
  let intl;
  let stringResult;
  let tmp5;
  let tmp7;
  let tmp9;
  let tmpResult;
  _require = projectId;
  function settle() {
    return obj(...arguments);
  }
  let obj = function _settle() {
    let obj = _asyncToGenerator(async (arg0, value) => {
      let obj2;
      let closure_0 = arg0;
      let closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c5;
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              closure_0 = closure_1;
              _asyncToGenerator(true);
              _slicedToArray(null);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: obj2.settleConjureInstallScope(projectId, closure_0, closure_1), done: false };
              obj2 = closure_0(closure_2[6]);
              return obj5;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              closure_1 = closure_4;
              closure_131_3(false);
              let str = "failed";
              const tmp11 = closure_131_4;
              if (null != closure_0) {
                str = "failed";
                if (403 === closure_1_11(closure_1)) {
                  str = "server";
                }
              }
              tmp11(str);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp27) {
          closure_4 = tmp27;
          if (0 === c5) {
            c7 = 3;
            throw tmp27;
          } else {
            c6 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _require;
  obj = require("get initialized");
  let items = [guild_id];
  let items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = require("useConjureProjects");
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds("ConjureScopeSetupCard");
  let obj3 = react;
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, dependencyMap] = tmp4;
  [tmp7, _asyncToGenerator] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  [tmp9, _slicedToArray] = tmp8;
  let install_scope_setup;
  if (stateFromStores != null) {
    install_scope_setup = stateFromStores.install_scope_setup;
  }
  let tmp11 = "server" === tmp5;
  if (!tmp11) {
    let tmp12 = null == tmp5;
    if (tmp12) {
      let str = "choose_server";
      tmp12 = "choose_server" === install_scope_setup;
    }
    tmp11 = tmp12;
  }
  react = tmp11;
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let items2 = [tmp11, conjureEligibleGuilds, guild_id, projectId];
  const memo = obj3.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl7;
    let items;
    let items1;
    let items2;
    let items3;
    let obj;
    const tmp = closure_5;
    if (tmp) {
      let ZWXDeI;
      let heldConjurePromptGuildId = guild_id;
      if (guild_id == null) {
        const obj5 = conjureScopeSetup;
        heldConjurePromptGuildId = obj5.getHeldConjurePromptGuildId(projectId);
      }
      let str = "server-setup-empty";
      if (conjureEligibleGuilds.length > 0) {
        str = "server-setup";
      }
      const obj2 = { id: str, questions: items1 };
      const intl6 = intl8.intl;
      const string = intl6.string;
      if (conjureEligibleGuilds.length > 0) {
        ZWXDeI = _modDef3868.ZWXDeI;
      } else {
        ZWXDeI = _modDef3868["u5+Qhu"];
      }
      const obj3 = { id: "server-setup:q0", question: string(ZWXDeI), recommendation_reason: "", allow_custom: false, options: items };
      if (conjureEligibleGuilds.length > 0) {
        items = [];
      } else {
        const obj4 = { id: id2, label: intl7.string(_modDef3868.qLYOpH) };
        intl7 = intl8.intl;
        items = [obj4];
      }
      const obj9 = conjureScopeSetup;
      const merged = Object.assign(obj9.serverQuestionFields(arr3, heldConjurePromptGuildId));
      items1 = [obj3];
      obj = obj2;
    } else {
      obj = { id: "scope-setup", questions: items3 };
      const obj6 = { id, question: intl.string(_modDef3868.ickKBI), recommendation_reason: "", allow_custom: false, options: items2 };
      intl = intl8.intl;
      const obj7 = { id: id2, label: intl2.string(_modDef3868.qLYOpH), detail: intl3.string(_modDef3868.QSKvUE) };
      intl2 = intl8.intl;
      intl3 = intl8.intl;
      items2 = [obj7, ];
      const obj8 = { id: id3, label: intl4.string(_modDef3868.QV5C7b), detail: intl5.string(_modDef3868["ZzHR4/"]) };
      intl4 = intl8.intl;
      intl5 = intl8.intl;
      items2[1] = obj8;
      items3 = [obj6];
    }
    return obj;
  }, items2);
  if (null == install_scope_setup) {
    return null;
  } else {
    if (null != stateFromStores) {
      if (settle(stateFromStores)) {
        let obj4 = { clarification: memo, readOnly: false, onSubmit: handleAnswered, submitText: intl.string(tmp(1113).t["cY+Oob"]), onBack: fn, hideSubmit: false, serverStep: tmp11, onPickServer: fn2, failure: stringResult };
        handleAnswered = undefined;
        if (!tmp7) {
          handleAnswered = function handleAnswered(arg0, arg1) {
            let first;
            if (arg1 != null) {
              first = arg1.answers[0];
            }
            if (null != first) {
              const option_ids = first.option_ids;
              if (option_ids.includes(closure_10)) {
                dependencyMap("server");
              } else {
                settle("user", null);
              }
            }
          };
        }
        intl = tmp(1113).intl;
        fn = undefined;
        if (tmp11) {
          if (!tmp7) {
            fn = () => dependencyMap("scope");
          }
        }
        if (tmp11) {
          tmp11 = conjureEligibleGuilds.length > 0;
        }
        fn2 = undefined;
        if (!tmp7) {
          fn2 = (arg0) => settle("guild", arg0);
        }
        stringResult = null;
        if (null != tmp9) {
          let jNVZ3e;
          let intl2 = tmp(1113).intl;
          let string = intl2.string;
          if ("server" === tmp9) {
            jNVZ3e = conjureEligibleGuilds(3868)["XXKd+7"];
          } else {
            jNVZ3e = conjureEligibleGuilds(3868).jNVZ3e;
          }
          stringResult = string(jNVZ3e);
        }
        return obj4;
      }
    }
    let obj5 = { clarification: tmpResult.ownerOnlyClarification(memo), readOnly: true, hideSubmit: true, failure: null };
    tmpResult = tmp(12580);
    return obj5;
  }
}
export function useConjureScopeSwitchCard(merged) {
  let TVRkVh;
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let handleAnswered;
  let keep;
  let offer;
  let string;
  let string2;
  let string3Result;
  let tmp11;
  let tmp14Result;
  let tmp6;
  let tmp8;
  let tmpResult;
  const projectId = merged.projectId;
  const clarification = merged.clarification;
  ({ offer, onKept: dependencyMap } = merged);
  c6 = undefined;
  isProjectOwner = undefined;
  function switchTo() {
    return obj(...arguments);
  }
  let obj = function _switchTo() {
    let id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c4;
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              _undefined(true);
              _undefined(null);
              c4 = 1;
              const obj2 = closure_0(closure_2[6]);
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj2.switchConjureInstallScope(projectId, id.id, scope, closure_0), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_0 = closure_3;
              closure_130_6(false);
              let str = "failed";
              const tmp11 = closure_130_7;
              if (409 === closure_1_11(closure_0)) {
                str = "locked";
              }
              tmp11(str);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp26) {
          closure_3 = tmp26;
          if (0 === c4) {
            c6 = 3;
            throw tmp26;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const scope = offer.scope;
  const feature = offer.feature;
  let tmp = projectId;
  obj = projectId(504);
  let items = [c6];
  let items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = projectId(12596);
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds("ConjureScopeSwitchCard");
  let obj3 = conjureEligibleGuilds;
  [tmp6, c6] = feature(conjureEligibleGuilds.useState(false), 2);
  const tmp5 = feature(conjureEligibleGuilds.useState(false), 2);
  let tmp7 = feature(conjureEligibleGuilds.useState(null), 2);
  [tmp8, c7] = tmp7;
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [clarification, feature, conjureEligibleGuilds, guild_id, scope];
  const memo = obj3.useMemo(() => {
    let d7jxeT;
    let formatToPlainStringResult;
    let intl2;
    let items1;
    let tmp12;
    let tmp8;
    const first = _slicedToArray(clarification.questions, 1)[0];
    const intl = intl8.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp7 = _modDef3868;
    const tmp = clarification;
    if ("guild" === scope) {
      d7jxeT = tmp7["jh/iy+"];
      tmp8 = tmp6;
    } else {
      d7jxeT = tmp7.d7jxeT;
      tmp8 = tmp6;
    }
    const obj3 = { question: formatToPlainStringResult, allow_custom: false };
    obj = { feature };
    const obj2 = { id: tmp.id, questions: items1 };
    formatToPlainStringResult = formatToPlainString(d7jxeT, obj);
    const merged = Object.assign(first);
    if ("guild" === scope) {
      const tmp3Result = conjureScopeSetup;
      const merged1 = Object.assign(tmp3Result.serverQuestionFields(conjureEligibleGuilds, guild_id));
      tmp12 = obj3;
    } else {
      const _HermesInternal = HermesInternal;
      const obj4 = { id: "" + first.id + ":0", label: intl2.string(tmp8(3868).TVRkVh) };
      intl2 = tmp3(1113).intl;
      const items = [obj4];
      obj3.options = items;
      tmp12 = obj3;
    }
    items1 = [tmp12];
    return obj2;
  }, items2);
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let tmp14;
      let obj4 = { clarification: memo, readOnly: false, onSubmit: handleAnswered, submitText: string(TVRkVh), onBack: keep, backText: string2(tmp11 ? tmp14Result["4WnIqd"] : tmp14Result["am+p7p"]), hideSubmit: "user" === scope, failure: string3Result };
      handleAnswered = undefined;
      if (!tmp6) {
        handleAnswered = function handleAnswered(arg0, arg1) {
          let first1;
          if (arg1 != null) {
            const first = arg1.answers[0];
            if (first != null) {
              const entities = first.entities;
              if (entities != null) {
                first1 = entities[0];
              }
            }
          }
          if ("user" === scope) {
            switchTo(null);
          } else if (null != first1) {
            switchTo(first1.id);
          }
        };
      }
      let intl = tmp(1113).intl;
      let str = "guild";
      tmp11 = "guild" === scope;
      let tmp12 = clarification;
      string = intl.string;
      const tmp13 = clarification(3868);
      if (tmp11) {
        TVRkVh = tmp13.Ua7yKM;
        tmp14 = tmp12;
      } else {
        TVRkVh = tmp13.TVRkVh;
        tmp14 = tmp12;
      }
      keep = undefined;
      if (!tmp6) {
        keep = function keep() {
          _undefined2(null);
          obj = conjureScopeSetup;
          const tmp = _undefined2;
          if (obj.keepConjureInstallScope(projectId)) {
            dependencyMap();
          } else {
            tmp("failed");
          }
        };
      }
      let intl2 = tmp(1113).intl;
      string2 = intl2.string;
      tmp14Result = tmp14(3868);
      string3Result = null;
      if (null != tmp8) {
        let jNVZ3e;
        const intl3 = tmp(1113).intl;
        const string3 = intl3.string;
        if ("locked" === tmp8) {
          jNVZ3e = tmp14(3868).irUT0N;
        } else {
          jNVZ3e = tmp14(3868).jNVZ3e;
        }
        string3Result = string3(jNVZ3e);
      }
      return obj4;
    }
  }
  let obj5 = { clarification: tmpResult.ownerOnlyClarification(memo), readOnly: true, hideSubmit: true, failure: null };
  tmpResult = tmp(12580);
  return obj5;
}
