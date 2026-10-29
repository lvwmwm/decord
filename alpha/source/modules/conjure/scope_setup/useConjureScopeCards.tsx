// Module ID: 12561
// Function ID: 12562
// Name: useConjureScopeCards
// Dependencies: [5, 32, 19, 6831, 1125, 3864, 12395, 558, 576, 504, 12409, 2]

// Module 12561 (useConjureScopeCards)
import intl6 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6831 */;
import conjureScopeSetup from "conjureScopeSetup" /* 12395 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, closure_4, closure_6, id;

function errorStatus(status) {
  return status.status;
}
function scopeClarification() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  const obj = { id: "scope-setup", questions: items1 };
  const obj2 = { id, question: intl.string(_modDef3864.ickKBI), recommendation_reason: "", allow_custom: false, options: items };
  intl = intl6.intl;
  const obj3 = { id: id2, label: intl2.string(_modDef3864.qLYOpH), detail: intl3.string(_modDef3864.QSKvUE) };
  intl2 = intl6.intl;
  intl3 = intl6.intl;
  items = [obj3, ];
  const obj4 = { id: id3, label: intl4.string(_modDef3864.QV5C7b), detail: intl5.string(_modDef3864["ZzHR4/"]) };
  intl4 = intl6.intl;
  intl5 = intl6.intl;
  items[1] = obj4;
  items1 = [obj2];
  return obj;
}
function serverClarification(conjureEligibleGuilds, guild_id) {
  let ZWXDeI;
  let intl2;
  let items;
  let items1;
  let tmp5;
  let str = "server-setup-empty";
  if (conjureEligibleGuilds.length > 0) {
    str = "server-setup";
  }
  const obj = { id: str, questions: items1 };
  const intl = intl6.intl;
  const string = intl.string;
  if (conjureEligibleGuilds.length > 0) {
    ZWXDeI = _modDef3864.ZWXDeI;
    tmp5 = importDefault;
  } else {
    ZWXDeI = _modDef3864["u5+Qhu"];
    tmp5 = importDefault;
  }
  const obj2 = { id: "server-setup:q0", question: string(ZWXDeI), recommendation_reason: "", allow_custom: false, options: items };
  if (conjureEligibleGuilds.length > 0) {
    items = [];
  } else {
    const obj3 = { id: id2, label: intl2.string(tmp5(3864).qLYOpH) };
    intl2 = tmp(1125).intl;
    items = [obj3];
  }
  const tmpResult = conjureScopeSetup;
  const merged = Object.assign(tmpResult.serverQuestionFields(conjureEligibleGuilds, guild_id));
  items1 = [obj2];
  return obj;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let isProjectOwner = ConjureProjectStore2.isProjectOwner;
const ConjureScopeSetupCard = "ConjureScopeSetupCard";
const ConjureScopeSwitchCard = "ConjureScopeSwitchCard";
let c10 = "scope-setup:q0";
const id2 = "" + "scope-setup:q0" + ":0";
const id3 = "" + "scope-setup:q0" + ":1";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSetupCard(arg0) {
  let first;
  let install_scope_setup;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp21Result;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(33);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult4 = tmp(12409);
  const conjureEligibleGuilds = tmpResult4.useConjureEligibleGuilds(ConjureScopeSetupCard);
  [tmp10, importDefault] = _slicedToArray(react.useState(null), 2);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  let tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp12, dependencyMap] = tmp11;
  [tmp14, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  const tmp13 = _slicedToArray(react.useState(null), 2);
  if (stateFromStores != null) {
    install_scope_setup = stateFromStores.install_scope_setup;
  }
  let tmp15 = "server" === tmp10;
  if (!tmp15) {
    let tmp16 = null == tmp10;
    if (tmp16) {
      let str = "choose_server";
      tmp16 = "choose_server" === install_scope_setup;
    }
    tmp15 = tmp16;
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] === tmp15) {
    if (cResult[5] === conjureEligibleGuilds) {
      if (cResult[6] === guild_id) {
        let tmp18;
        if (cResult[7] === arg0) {
          tmp18 = cResult[8];
        }
        if (null == install_scope_setup) {
          return null;
        } else {
          let tmp36;
          let tmp38;
          if (null != stateFromStores) {
            if (isProjectOwner(stateFromStores)) {
              let tmp23;
              let tmp27;
              if (cResult[13] !== arg0) {
                _require = _asyncToGenerator(async (arg0, value) => {
                  let closure_3;
                  let obj2;
                  closure_0 = arg0;
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
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    let c5;
                    try {
                      let closure_2;
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
                          closure_2 = tmp4;
                          closure_0 = closure_1;
                          closure_1 = undefined;
                          closure_2(true);
                          tmp(null);
                          c5 = 1;
                          c6 = 2;
                          c7 = 1;
                          const obj5 = { value: obj2.settleConjureInstallScope(closure_0, closure_0, closure_1), done: false };
                          obj2 = closure_0(dependencyMap[6]);
                          return obj5;
                        }
                      } else {
                        if (1 === c6) {
                          c5 = 0;
                          closure_1 = closure_4;
                          closure_2(false);
                          let str = "failed";
                          const tmp11 = tmp;
                          if (null != closure_0) {
                            str = "failed";
                            if (403 === errorStatus(closure_1)) {
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
                        return { value: "IconComponent", done: "IconComponent" };
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
                function settle() {
                  return closure_0(...arguments);
                }
                cResult[13] = arg0;
                cResult[14] = settle;
                tmp23 = settle;
              } else {
                tmp23 = cResult[14];
              }
              _slicedToArray = tmp23;
              if (cResult[15] !== tmp23) {
                function handleAnswered(arg0, arg1) {
                  let first;
                  if (arg1 != null) {
                    first = arg1.answers[0];
                  }
                  if (null != first) {
                    const option_ids = first.option_ids;
                    if (option_ids.includes(id3)) {
                      importDefault("server");
                    } else {
                      closure_4("user", null);
                    }
                  }
                }
                cResult[15] = tmp23;
                cResult[16] = handleAnswered;
              }
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1125).intl;
                const stringResult = intl.string(tmp(1125).t["cY+Oob"]);
                cResult[17] = stringResult;
                tmp27 = stringResult;
              } else {
                tmp27 = cResult[17];
              }
              if (cResult[18] === tmp15) {
                let tmp29;
                if (cResult[19] === tmp12) {
                  tmp29 = cResult[20];
                }
                if (tmp15) {
                  tmp15 = conjureEligibleGuilds.length > 0;
                }
                if (cResult[21] === tmp12) {
                  let tmp30;
                  let tmp31;
                  if (cResult[22] === tmp23) {
                    tmp30 = cResult[23];
                  }
                  if (cResult[24] !== tmp14) {
                    let stringResult1 = null;
                    if (null != tmp14) {
                      let jNVZ3e;
                      const intl2 = tmp(1125).intl;
                      const string = intl2.string;
                      if ("server" === tmp14) {
                        jNVZ3e = _modDef3864["XXKd+7"];
                      } else {
                        jNVZ3e = _modDef3864.jNVZ3e;
                      }
                      stringResult1 = string(jNVZ3e);
                    }
                    cResult[24] = tmp14;
                    cResult[25] = stringResult1;
                    tmp31 = stringResult1;
                  } else {
                    tmp31 = cResult[25];
                  }
                  if (cResult[26] === tmp18) {
                    if (cResult[27] === tmp30) {
                      if (cResult[28] === tmp31) {
                        if (cResult[29] === tmp26) {
                          if (cResult[30] === tmp29) {
                            let tmp35;
                            if (cResult[31] === tmp15) {
                              tmp35 = cResult[32];
                            }
                            return tmp35;
                          }
                        }
                      }
                    }
                  }
                  let obj2 = { clarification: tmp18, readOnly: false, onSubmit: tmp26, submitText: tmp27, onBack: tmp29, hideSubmit: false, serverStep: tmp15, onPickServer: tmp30, failure: tmp31 };
                  cResult[26] = tmp18;
                  cResult[27] = tmp30;
                  cResult[28] = tmp31;
                  cResult[29] = tmp26;
                  cResult[30] = tmp29;
                  cResult[31] = tmp15;
                  cResult[32] = obj2;
                  tmp35 = obj2;
                }
                let fn3;
                if (!tmp12) {
                  fn3 = (arg0) => closure_4("guild", arg0);
                }
                cResult[21] = tmp12;
                cResult[22] = tmp23;
                cResult[23] = fn3;
                tmp30 = fn3;
              }
              let fn2;
              if (tmp15) {
                if (!tmp12) {
                  fn2 = () => importDefault("scope");
                }
              }
              cResult[18] = tmp15;
              cResult[19] = tmp12;
              cResult[20] = fn2;
              tmp29 = fn2;
            }
          }
          if (cResult[9] !== tmp18) {
            const tmpResult5 = tmp(12395);
            const result = tmpResult5.ownerOnlyClarification(tmp18);
            cResult[9] = tmp18;
            cResult[10] = result;
            tmp36 = result;
          } else {
            tmp36 = cResult[10];
          }
          if (cResult[11] !== tmp36) {
            let obj3 = { clarification: tmp36, readOnly: true, hideSubmit: true, failure: null };
            cResult[11] = tmp36;
            cResult[12] = obj3;
            tmp38 = obj3;
          } else {
            tmp38 = cResult[12];
          }
          return tmp38;
        }
      }
    }
  }
  if (tmp15) {
    let heldConjurePromptGuildId = guild_id;
    const tmp21 = serverClarification;
    if (guild_id == null) {
      const tmpResult6 = tmp(12395);
      heldConjurePromptGuildId = tmpResult6.getHeldConjurePromptGuildId(arg0);
    }
    tmp21Result = tmp21(conjureEligibleGuilds, heldConjurePromptGuildId);
  } else {
    tmp21Result = scopeClarification();
  }
  cResult[4] = tmp15;
  cResult[5] = conjureEligibleGuilds;
  cResult[6] = guild_id;
  cResult[7] = arg0;
  cResult[8] = tmp21Result;
  tmp18 = tmp21Result;
}) : (function useConjureScopeSetupCard(arg0) {
  let closure_5;
  let fn;
  let fn2;
  let guild_id;
  let handleAnswered;
  let intl;
  let stringResult;
  let tmp5;
  let tmp7;
  let tmp9;
  let tmpResult;
  _require = arg0;
  function settle() {
    return obj(...arguments);
  }
  let obj = function _settle2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj2;
      closure_0 = arg0;
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
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj5 = { value: obj2.settleConjureInstallScope(closure_2_0, closure_0, closure_1), done: false };
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
                if (403 === closure_1_13(closure_1)) {
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
              obj = { value, done: true };
              return obj;
            } else {
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
  const items = [guild_id];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureProjects");
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(obj);
  let obj3 = react;
  let tmp4 = _slicedToArray(react.useState(null), 2);
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
  const items2 = [tmp11, conjureEligibleGuilds, guild_id, arg0];
  const memo = obj3.useMemo(() => {
    let tmp4Result;
    const tmp = closure_5;
    if (tmp) {
      let heldConjurePromptGuildId = guild_id;
      const tmp4 = serverClarification;
      const tmp5 = conjureEligibleGuilds;
      if (guild_id == null) {
        obj = conjureScopeSetup;
        heldConjurePromptGuildId = obj.getHeldConjurePromptGuildId(closure_0);
      }
      tmp4Result = tmp4(tmp5, heldConjurePromptGuildId);
    } else {
      tmp4Result = scopeClarification();
    }
    return tmp4Result;
  }, items2);
  if (null == install_scope_setup) {
    return null;
  } else {
    if (null != stateFromStores) {
      if (settle(stateFromStores)) {
        let obj4 = { clarification: memo, readOnly: false, onSubmit: handleAnswered, submitText: intl.string(tmp(1125).t["cY+Oob"]), onBack: fn, hideSubmit: false, serverStep: tmp11, onPickServer: fn2, failure: stringResult };
        handleAnswered = undefined;
        if (!tmp7) {
          handleAnswered = function handleAnswered(arg0, arg1) {
            let first;
            if (arg1 != null) {
              first = arg1.answers[0];
            }
            if (null != first) {
              const option_ids = first.option_ids;
              if (option_ids.includes(id3)) {
                dependencyMap("server");
              } else {
                settle("user", null);
              }
            }
          };
        }
        intl = tmp(1125).intl;
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
          const intl2 = tmp(1125).intl;
          const string = intl2.string;
          if ("server" === tmp9) {
            jNVZ3e = conjureEligibleGuilds(3864)["XXKd+7"];
          } else {
            jNVZ3e = conjureEligibleGuilds(3864).jNVZ3e;
          }
          stringResult = string(jNVZ3e);
        }
        return obj4;
      }
    }
    let obj5 = { clarification: tmpResult.ownerOnlyClarification(memo), readOnly: true, hideSubmit: true, failure: null };
    tmpResult = tmp(12395);
    return obj5;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureScopeSwitchCard(projectId) {
  let d7jxeT;
  let first;
  let guild_id;
  let intl5;
  let items2;
  let offer;
  let onKept;
  let tmp12;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp = projectId;
  let obj = projectId(onKept[8]);
  const cResult = obj.c(44);
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  ({ offer, onKept } = projectId);
  const scope = offer.scope;
  const feature = offer.feature;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_6];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function p() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(onKept[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult4 = tmp(onKept[10]);
  const conjureEligibleGuilds = tmpResult4.useConjureEligibleGuilds(ConjureScopeSwitchCard);
  let tmp11 = _slicedToArray(react.useState(false), 2);
  const tmp10 = _slicedToArray;
  [tmp12, _slicedToArray] = tmp11;
  const tmp13 = _slicedToArray(react.useState(null), 2);
  [tmp14, react] = tmp13;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let first1 = tmp10(clarification.questions, 1)[0];
  if (cResult[4] === feature) {
    let tmp16;
    let tmp26;
    if (cResult[5] === scope) {
      tmp16 = cResult[6];
    }
    if (cResult[7] === conjureEligibleGuilds) {
      if (cResult[8] === tmp16) {
        if (cResult[9] === guild_id) {
          if (cResult[10] === first1) {
            let tmp20;
            if (cResult[11] === scope) {
              tmp20 = cResult[12];
            }
            if (cResult[13] === clarification.id) {
              let tmp27;
              let tmp49;
              let tmp51;
              if (cResult[14] === tmp20) {
                tmp27 = cResult[15];
              }
              if (null != stateFromStores) {
                if (isProjectOwner(stateFromStores)) {
                  if (cResult[20] === clarification.id) {
                    if (cResult[21] === projectId) {
                      let tmp28;
                      if (cResult[22] === scope) {
                        tmp28 = cResult[23];
                      }
                      closure_6 = tmp28;
                      if (cResult[24] === onKept) {
                        let tmp30;
                        if (cResult[25] === projectId) {
                          tmp30 = cResult[26];
                        }
                        if (cResult[27] === tmp28) {
                          let tmp31;
                          let tmp33;
                          let tmp38;
                          let tmp43;
                          if (cResult[28] === scope) {
                            tmp31 = cResult[29];
                          }
                          let tmp32;
                          if (!tmp12) {
                            tmp32 = tmp31;
                          }
                          if (cResult[30] !== scope) {
                            let TVRkVh;
                            const intl2 = tmp(tmp2[4]).intl;
                            const string = intl2.string;
                            if ("guild" === scope) {
                              TVRkVh = clarification(tmp2[5]).Ua7yKM;
                            } else {
                              TVRkVh = clarification(tmp2[5]).TVRkVh;
                            }
                            const stringResult = string(TVRkVh);
                            cResult[30] = scope;
                            cResult[31] = stringResult;
                            tmp33 = stringResult;
                          } else {
                            tmp33 = cResult[31];
                          }
                          let tmp37;
                          if (!tmp12) {
                            tmp37 = tmp30;
                          }
                          if (cResult[32] !== scope) {
                            let v4WnIqd;
                            const intl3 = tmp(tmp2[4]).intl;
                            const string2 = intl3.string;
                            if ("guild" === scope) {
                              v4WnIqd = clarification(tmp2[5])["4WnIqd"];
                            } else {
                              v4WnIqd = clarification(tmp2[5])["am+p7p"];
                            }
                            const string2Result = string2(v4WnIqd);
                            cResult[32] = scope;
                            cResult[33] = string2Result;
                            tmp38 = string2Result;
                          } else {
                            tmp38 = cResult[33];
                          }
                          if (cResult[34] !== tmp14) {
                            let string3Result = null;
                            if (null != tmp14) {
                              let jNVZ3e;
                              const intl4 = tmp(tmp2[4]).intl;
                              const string3 = intl4.string;
                              if ("locked" === tmp14) {
                                jNVZ3e = clarification(tmp2[5]).irUT0N;
                              } else {
                                jNVZ3e = clarification(tmp2[5]).jNVZ3e;
                              }
                              string3Result = string3(jNVZ3e);
                            }
                            cResult[34] = tmp14;
                            cResult[35] = string3Result;
                            tmp43 = string3Result;
                          } else {
                            tmp43 = cResult[35];
                          }
                          if (cResult[36] === tmp27) {
                            if (cResult[37] === tmp32) {
                              if (cResult[38] === tmp33) {
                                if (cResult[39] === tmp37) {
                                  if (cResult[40] === tmp38) {
                                    if (cResult[41] === "user" === scope) {
                                      let tmp48;
                                      if (cResult[42] === tmp43) {
                                        tmp48 = cResult[43];
                                      }
                                      return tmp48;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let obj2 = { clarification: tmp27, readOnly: false, onSubmit: tmp32, submitText: tmp33, onBack: tmp37, backText: tmp38, hideSubmit: "user" === scope, failure: tmp43 };
                          cResult[36] = tmp27;
                          cResult[37] = tmp32;
                          cResult[38] = tmp33;
                          cResult[39] = tmp37;
                          cResult[40] = tmp38;
                          cResult[41] = "user" === scope;
                          cResult[42] = tmp43;
                          cResult[43] = obj2;
                          tmp48 = obj2;
                        }
                        function handleAnswered(arg0, arg1) {
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
                            closure_6(null);
                          } else if (null != first1) {
                            closure_6(first1.id);
                          }
                        }
                        cResult[27] = tmp28;
                        cResult[28] = scope;
                        cResult[29] = handleAnswered;
                        tmp31 = handleAnswered;
                      }
                      function keep() {
                        react(null);
                        const obj = conjureScopeSetup;
                        const tmp = react;
                        if (obj.keepConjureInstallScope(projectId)) {
                          onKept();
                        } else {
                          tmp("failed");
                        }
                      }
                      cResult[24] = onKept;
                      cResult[25] = projectId;
                      cResult[26] = keep;
                      tmp30 = keep;
                    }
                  }
                  let closure_0 = scope(function*(arg0, value) {
                    let v0;
                    let v1;
                    closure_0 = arg0;
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
                        return { value: "IconComponent", done: "IconComponent" };
                      }
                    } else {
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
                            id = tmp4;
                            closure_0 = undefined;
                            c4(true);
                            c5(null);
                            c4 = 1;
                            const obj2 = closure_0(onKept[6]);
                            c5 = 2;
                            c6 = 1;
                            const obj5 = { value: obj2.switchConjureInstallScope(closure_0, id.id, closure_3, closure_0), done: false };
                            return obj5;
                          }
                        } else {
                          if (1 === c5) {
                            c4 = 0;
                            closure_0 = closure_3;
                            c4(false);
                            let str = "failed";
                            const tmp11 = c5;
                            if (409 === errorStatus(closure_0)) {
                              str = "locked";
                            }
                            tmp11(str);
                          } else if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 0;
                            c6 = 3;
                            const obj = { value, done: true };
                            return obj;
                          } else {
                            c4 = 0;
                          }
                          c6 = 3;
                          return { value: "IconComponent", done: "IconComponent" };
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
                  function switchTo() {
                    return closure_0(...arguments);
                  }
                  cResult[20] = clarification.id;
                  cResult[21] = projectId;
                  cResult[22] = scope;
                  cResult[23] = switchTo;
                  tmp28 = switchTo;
                }
              }
              if (cResult[16] !== tmp27) {
                const tmpResult5 = tmp(onKept[6]);
                const result = tmpResult5.ownerOnlyClarification(tmp27);
                cResult[16] = tmp27;
                cResult[17] = result;
                tmp49 = result;
              } else {
                tmp49 = cResult[17];
              }
              if (cResult[18] !== tmp49) {
                let obj3 = { clarification: tmp49, readOnly: true, hideSubmit: true, failure: null };
                cResult[18] = tmp49;
                cResult[19] = obj3;
                tmp51 = obj3;
              } else {
                tmp51 = cResult[19];
              }
              return tmp51;
            }
            let obj4 = { id: clarification.id, questions: tmp20 };
            cResult[13] = clarification.id;
            cResult[14] = tmp20;
            cResult[15] = obj4;
            tmp27 = obj4;
          }
        }
      }
    }
    let str = "guild";
    if ("guild" === scope) {
      let obj5 = { question: tmp16, allow_custom: false };
      const merged = Object.assign(first1);
      const tmpResult6 = tmp(onKept[6]);
      const merged1 = Object.assign(tmpResult6.serverQuestionFields(conjureEligibleGuilds, guild_id));
      tmp26 = obj5;
    } else {
      const obj6 = { question: tmp16, allow_custom: false, options: items2 };
      const merged2 = Object.assign(first1);
      const _HermesInternal = HermesInternal;
      const obj7 = { id: "" + first1.id + ":0", label: intl5.string(clarification(onKept[5]).TVRkVh) };
      intl5 = tmp(tmp2[4]).intl;
      items2 = [obj7];
      tmp26 = obj6;
    }
    const items3 = [tmp26];
    cResult[7] = conjureEligibleGuilds;
    cResult[8] = tmp16;
    cResult[9] = guild_id;
    cResult[10] = first1;
    cResult[11] = scope;
    cResult[12] = items3;
    tmp20 = items3;
  }
  const intl = tmp(tmp2[4]).intl;
  const formatToPlainString = intl.formatToPlainString;
  if ("guild" === scope) {
    d7jxeT = clarification(tmp2[5])["jh/iy+"];
  } else {
    d7jxeT = clarification(tmp2[5]).d7jxeT;
  }
  const formatToPlainStringResult = formatToPlainString(d7jxeT, { feature });
  cResult[4] = feature;
  cResult[5] = scope;
  cResult[6] = formatToPlainStringResult;
  tmp16 = formatToPlainStringResult;
}) : (function useConjureScopeSwitchCard(projectId) {
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
  projectId = projectId.projectId;
  const clarification = projectId.clarification;
  ({ offer, onKept: dependencyMap } = projectId);
  c6 = undefined;
  isProjectOwner = undefined;
  function switchTo() {
    return obj(...arguments);
  }
  let obj = function _switchTo2() {
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
          return { value: "IconComponent", done: "IconComponent" };
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
              if (409 === closure_1_13(closure_0)) {
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
            return { value: "IconComponent", done: "IconComponent" };
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
  let obj2 = projectId(12409);
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(switchTo);
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
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp7 = _modDef3864;
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
      const obj4 = { id: "" + first.id + ":0", label: intl2.string(tmp8(3864).TVRkVh) };
      intl2 = tmp3(1125).intl;
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
      let intl = tmp(1125).intl;
      let str = "guild";
      tmp11 = "guild" === scope;
      let tmp12 = clarification;
      string = intl.string;
      const tmp13 = clarification(3864);
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
      let intl2 = tmp(1125).intl;
      string2 = intl2.string;
      tmp14Result = tmp14(3864);
      string3Result = null;
      if (null != tmp8) {
        let jNVZ3e;
        const intl3 = tmp(1125).intl;
        const string3 = intl3.string;
        if ("locked" === tmp8) {
          jNVZ3e = tmp14(3864).irUT0N;
        } else {
          jNVZ3e = tmp14(3864).jNVZ3e;
        }
        string3Result = string3(jNVZ3e);
      }
      return obj4;
    }
  }
  let obj5 = { clarification: tmpResult.ownerOnlyClarification(memo), readOnly: true, hideSubmit: true, failure: null };
  tmpResult = tmp(12395);
  return obj5;
});
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureScopeCards.tsx");

export const useConjureScopeSetupCard = tmp2;
export const useConjureScopeSwitchCard = tmp3;
