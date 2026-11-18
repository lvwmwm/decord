// Module ID: 13196
// Function ID: 13197
// Name: useConjureProjectSettingsDraft
// Dependencies: [5, 32, 19, 7017, 504, 13197, 13180, 13199, 7388, 7018, 7260, 13201, 7351, 13162, 1113, 4131, 13183, 7329, 2]
// Exports: default

// Module 13196 (useConjureProjectSettingsDraft)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, c5, closure_0, closure_1, importDefault;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  let callback10;
  let closure_11;
  let closure_16;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_9;
  let save2;
  let stateFromStores;
  let str2;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp35;
  let tmp36;
  let tmp42;
  let tmp44;
  let tmp46;
  let tmp48;
  let tmp50;
  _require = arg0;
  importDefault = arg1;
  let tmp2 = _require;
  const tmp3 = stateFromStores;
  let obj = require("get initialized");
  let items = [save2];
  let items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureLiveReloadSetting");
  const conjureLiveReloadSetting = obj2.useConjureLiveReloadSetting(arg0);
  const save = conjureLiveReloadSetting.save;
  let tmp6 = require("useConjureAppIdentityDraft")(arg0);
  const changes = tmp6.changes;
  const commit = tmp6.commit;
  let obj3 = require("ConjureSmartContext");
  const conjureSmartContextSetting = obj3.useConjureSmartContextSetting(arg0);
  save2 = conjureSmartContextSetting.save;
  let obj4 = require("ConjureHostApproval");
  const conjureRequireHostApprovalSetting = obj4.useConjureRequireHostApprovalSetting(arg0);
  const save3 = conjureRequireHostApprovalSetting.save;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let obj5 = commit;
  let str;
  const useState = commit.useState;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  [tmp11, closure_9] = changes(useState(str), 2);
  const tmp10 = changes(useState(str), 2);
  [tmp13, tmp14] = changes(obj5.useState(null), 2);
  let closure_10 = tmp14;
  const tmp12 = changes(obj5.useState(null), 2);
  [str2, closure_11] = changes(obj5.useState(tmp11), 2);
  let num;
  const useState2 = obj5.useState;
  const tmp15 = changes(obj5.useState(tmp11), 2);
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp9Result = changes(useState2(num), 2);
  let flags = tmp9Result[0];
  const tmp18 = tmp9Result[1];
  let closure_13 = tmp18;
  const tmp9Result10 = changes(obj5.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp9Result10[0];
  let closure_15 = tmp21;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let tmp23 = null;
  if ("guild" === install_scope) {
    let guild_id = stateFromStores.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    tmp23 = guild_id;
  }
  const tmp9Result11 = changes(obj5.useState(tmp23), 2);
  if (tmp23 !== tmp9Result11[0]) {
    tmp9Result11[1](tmp23);
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp18(num2);
    const items2 = [];
    HermesBuiltin.arraySpread(items2, prop, 0);
    tmp9Result10[1](items2);
    tmp14(null);
  }
  let uses_preview_app;
  if (stateFromStores != null) {
    uses_preview_app = stateFromStores.uses_preview_app;
  }
  [tmp35, tmp36] = changes(obj5.useState(null), 2);
  const tmp37 = null != tmp35 && tmp35 === uses_preview_app;
  changes(obj5.useState(null), 2);
  if (tmp37) {
    tmp36(null);
  }
  const tmp9Result13 = changes(obj5.useState(false), 2);
  const first2 = tmp9Result13[0];
  let closure_18 = tmp9Result13[1];
  [tmp42, closure_19] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp44, closure_20] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp46, closure_21] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp48, closure_22] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp50, closure_23] = changes(obj5.useState(false), 2);
  changes(obj5.useState(false), 2);
  let closure_24 = obj5.useRef(null);
  let closure_25 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmp2Result = tmp2(tmp3[9]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let result1 = tmp53 && null != arg1;
  if (result1) {
    const tmp2Result4 = tmp2(tmp3[9]);
    result1 = tmp2Result4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp2Result5 = tmp2(tmp3[10]);
  const conjureProjectAccessSettings = tmp2Result5.getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp56 = null != stateFromStores;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (tmp56) {
    tmp56 = trimmed !== tmp11;
  }
  let closure_28 = tmp56;
  let tmp57 = result;
  if (tmp57) {
    let num4;
    if (tmp13 != null) {
      num4 = tmp13.flags;
    }
    if (num4 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num4 = flags;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp57 = flags !== num4;
  }
  let closure_29 = tmp57;
  let tmp59 = result1;
  if (tmp59) {
    let roleIds;
    const haveSameRoleIds = tmp2(tmp3[11]).haveSameRoleIds;
    tmp2(tmp3[11]);
    if (tmp13 != null) {
      roleIds = tmp13.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp59 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_30 = tmp59;
  let flag = tmp35;
  if (tmp35 == null) {
    flag = uses_preview_app;
  }
  if (flag == null) {
    flag = false;
  }
  let closure_32 = tmp63;
  let closure_33 = tmp64;
  let tmp65 = tmp64 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_34 = tmp65;
  const setIcon = tmp6.setIcon;
  const setDescription = tmp6.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items3 = [setIcon];
  const items4 = [setDescription];
  const callback = obj5.useCallback((arg0) => {
    setIcon(arg0);
    closure_21(null);
  }, items3);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_21(null);
  }, items4);
  const callback2 = obj5.useCallback((arg0) => {
    closure_11(arg0);
    closure_19(null);
    closure_21(null);
  }, []);
  const callback3 = obj5.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const tmp = closure_13((arg0) => {
      let tmp2;
      if (closure_1) {
        tmp2 = arg0 | tmp;
      } else {
        tmp2 = arg0 & ~tmp;
      }
      return tmp2;
    });
    let tmp2 = closure_20(null);
    closure_21(null);
  }, []);
  const items5 = [setChecked];
  const callback4 = obj5.useCallback((arg0) => {
    tmp36(arg0);
    closure_21(null);
  }, []);
  const callback5 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_21(null);
  }, items5);
  const items6 = [arg1, stateFromStores];
  const callback6 = obj5.useCallback(save(function*(arg0, value) {
    let closure_2;
    let obj3;
    let obj6;
    let obj9;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            closure_0 = undefined;
            value = undefined;
            if (null != stateFromStores) {
              if (null != closure_1) {
                if (null != stateFromStores.preview_application_id) {
                  if (ref.current !== closure_1) {
                    if (ref2.current) {
                      c5 = 3;
                      return { value: false, done: true };
                    } else {
                      ref2.current = true;
                      closure_23(true);
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = { value: obj9.fetchConjureAppInGuild(stateFromStores, closure_1), done: false };
                      obj9 = closure_0(stateFromStores[12]);
                      return obj5;
                    }
                  }
                }
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_25.current = false;
          closure_129_23(false);
          throw stateFromStores;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_25.current = false;
            closure_129_23(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (false !== closure_0) {
              if (true === closure_0) {
                closure_129_24.current = closure_129_1;
              }
              c3 = 0;
              closure_129_25.current = false;
              closure_129_23(false);
              c5 = 3;
              return { value: true, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj8 = { value: obj6.requestConjureInstallConsent(closure_129_2.id, closure_129_1), done: false };
              obj6 = closure_0(stateFromStores[13]);
              return obj8;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_25.current = false;
            closure_129_23(false);
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 4;
            c5 = 1;
            const obj11 = { value: obj3.fetchConjureAppInGuild(closure_129_2, closure_129_1), done: false };
            obj3 = closure_0(stateFromStores[12]);
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_25.current = false;
          closure_129_23(false);
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          value = tmp66;
          const tmp6 = value;
          if (tmp6) {
            closure_129_24.current = closure_129_1;
          }
          c3 = 0;
          closure_129_25.current = false;
          closure_129_23(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp59) {
        stateFromStores = tmp59;
        if (0 === c3) {
          c5 = 3;
          throw tmp59;
        } else {
          c4 = 1;
        }
      }
    }
  }), items6);
  const useCallback = obj5.useCallback;
  _require = save(function*(arg0, value) {
    let tmp14;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let apply;
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp14;
            const obj6 = closure_0;
            apply = undefined;
            if (closure_0.length > closure_0(stateFromStores[9]).MAX_PROJECT_COLLABORATOR_ROLES) {
              const intl = tmp18(tmp19[14]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj4 = { max: closure_0(stateFromStores[9]).MAX_PROJECT_COLLABORATOR_ROLES };
              prop = closure_2_1(tmp19[15])["dH7+/Z"];
              closure_1_20(formatToPlainString(prop, obj4));
            } else {
              apply = function apply() {
                closure_2_15(closure_0);
                closure_2_20(null);
                closure_2_21(null);
              };
              if (obj6.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback6(), done: false };
                return obj5;
              } else {
                apply();
              }
            }
          }
        } else if (1 === tmp3) {
          c3 = 0;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            apply();
          }
          c3 = 0;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp13) {
        tmp14 = c3;
        if (0 === c3) {
          c4 = 3;
          throw tmp13;
        } else {
          c2 = 1;
        }
      }
    }
  });
  const items7 = [callback6, first1];
  const items8 = [setChecked2];
  const callback7 = useCallback(function() {
    return closure_0(...arguments);
  }, items7);
  const items9 = [setChecked3];
  const callback8 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_22(null);
  }, items8);
  const callback9 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_22(null);
  }, items9);
  const items10 = [commit, flags, tmp57, arg1, tmp65, changes, isGuildCollaboration, tmp56, tmp63, flag, stateFromStores, arg0, tmp64, tmp59, save3, save, save2, first2, first1, trimmed];
  let obj6 = { iconURL: tmp6.iconURL, description: tmp6.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp42, nameChanged: tmp56, isPublic, isGuildCollaboration, usesPreviewApp: flag, canChangePreviewApp: tmp62, selectedRoleIds: first1, supportsVisibility: result, supportsCollaboration: tmp53, supportsCollaboratorRoles: result1, checkingAppInGuild: tmp50, saving: first2, selectionError: tmp44, saveError: tmp46, experimentalError: tmp48, canSave: tmp65, handleIconChange: callback, handleNameChange: callback2, handleDescriptionChange: callback1, handleFlagChange: callback3, handleUsesPreviewAppChange: callback4, handleLiveReloadChange: callback5, handleRoleSelectionChange: callback7, ensureAppInGuild: callback6, handleSmartContextChange: callback8, handleRequireHostApprovalChange: callback9, submit: callback10 };
  callback10 = obj5.useCallback(save(function*(arg0, value) {
    let closure_2;
    let guild_id;
    let items1;
    let obj5;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let str;
        c4 = 2;
        if (0 === guild_id) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (null != stateFromStores) {
              const tmp97 = closure_34;
              if (tmp97) {
                const tmp36 = first2;
                if (!tmp36) {
                  let result = null;
                  if (closure_28) {
                    const obj3 = tmp(stateFromStores[16]);
                    result = obj3.conjureProjectNameError(trimmed);
                  }
                  if (null != result) {
                    closure_19(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_28) {
                      obj6.name = trimmed;
                    }
                    let tmp43 = closure_29;
                    if (tmp43) {
                      obj6.flags = flags;
                    }
                    let tmp45 = closure_30;
                    if (tmp45) {
                      const items = [];
                      HermesBuiltin.arraySpread(items, first1, 0);
                      obj6.collaborator_role_ids = items.sort();
                    }
                    const tmp49 = closure_32;
                    if (tmp49) {
                      obj6.uses_preview_app = false;
                    }
                    let tmp51 = null == tmp96.guild_id && null != guild_id;
                    if (tmp51) {
                      if (!tmp45) {
                        if (tmp43) {
                          tmp43 = isGuildCollaboration;
                        }
                        tmp45 = tmp43;
                      }
                      tmp51 = tmp45;
                    }
                    if (tmp51) {
                      obj6.guild_id = guild_id;
                    }
                    closure_18(true);
                    closure_21(null);
                    closure_22(null);
                    c3 = 2;
                    const tmp60 = closure_33;
                    if (tmp60) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: obj5.updateProjectSettings(tmp, obj6), done: false };
                      obj5 = tmp(stateFromStores[17]);
                      return obj7;
                    }
                  }
                }
              }
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } else if (1 === guild_id) {
          c3 = 0;
          closure_128_18(false);
          throw stateFromStores;
        } else if (2 === guild_id) {
          const intl = tmp(stateFromStores[14]).intl;
          closure_128_21(intl.string(guild_id(stateFromStores[15])["9JPr8h"]));
          c3 = 0;
          closure_128_18(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_18(false);
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_128_9(closure_128_26);
          const obj = { flags: closure_128_12, roleIds: items1 };
          items1 = [];
          HermesBuiltin.arraySpread(items1, closure_128_14, 0);
          closure_128_10(obj);
          closure_128_5();
        }
        if (closure_128_3()) {
          let tmp73;
          if (!closure_128_6()) {
            const intl3 = tmp(stateFromStores[14]).intl;
            closure_128_22(intl3.string(guild_id(stateFromStores[15])["9JPr8h"]));
            tmp73 = "experimental";
          } else {
            tmp73 = null;
          }
          str = tmp73;
        } else {
          const intl2 = tmp(stateFromStores[14]).intl;
          closure_128_21(intl2.string(guild_id(stateFromStores[15]).XzkNBw));
          str = "project";
        }
        c3 = 0;
        closure_128_18(false);
        c4 = 3;
        const obj9 = { value: str, done: true };
        return obj9;
      } catch (tmp89) {
        stateFromStores = tmp89;
        if (0 === c3) {
          c4 = 3;
          throw tmp89;
        } else if (1 === tmp91) {
          guild_id = 1;
        } else {
          guild_id = 2;
        }
      }
    }
  }), items10);
  if (tmp65) {
    tmp65 = "" !== trimmed;
  }
  return obj6;
};
