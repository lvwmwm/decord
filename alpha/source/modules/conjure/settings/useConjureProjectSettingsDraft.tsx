// Module ID: 12294
// Function ID: 12295
// Name: useConjureProjectSettingsDraft
// Dependencies: [5, 32, 19, 6899, 504, 12295, 12276, 12298, 11020, 6900, 7483, 12299, 11016, 12260, 1113, 4026, 12279, 10996, 2]
// Exports: default

// Module 12294 (useConjureProjectSettingsDraft)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, c5, closure_0, closure_1, importDefault;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  let callback10;
  let closure_10;
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
  let tmp10;
  let tmp12;
  let tmp20;
  let tmp21;
  let tmp27;
  let tmp29;
  let tmp31;
  let tmp33;
  let tmp35;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  let items = [save2];
  let items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureLiveReloadSetting");
  const conjureLiveReloadSetting = obj2.useConjureLiveReloadSetting(arg0);
  const save = conjureLiveReloadSetting.save;
  const tmp5 = require("useConjureAppIdentityDraft")(arg0);
  const changes = tmp5.changes;
  const commit = tmp5.commit;
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
  [tmp10, closure_9] = changes(useState(str), 2);
  const tmp9 = changes(useState(str), 2);
  [tmp12, closure_10] = changes(obj5.useState(null), 2);
  const tmp11 = changes(obj5.useState(null), 2);
  const tmp13 = changes(obj5.useState(tmp10), 2);
  [str2, closure_11] = tmp13;
  let num;
  const useState2 = obj5.useState;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp8Result = changes(useState2(num), 2);
  let flags = tmp8Result[0];
  let closure_13 = tmp8Result[1];
  const tmp8Result9 = changes(obj5.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp8Result9[0];
  let closure_15 = tmp8Result9[1];
  let uses_preview_app;
  if (stateFromStores != null) {
    uses_preview_app = stateFromStores.uses_preview_app;
  }
  [tmp20, tmp21] = changes(obj5.useState(null), 2);
  const tmp22 = null != tmp20 && tmp20 === uses_preview_app;
  changes(obj5.useState(null), 2);
  if (tmp22) {
    tmp21(null);
  }
  const tmp8Result11 = changes(obj5.useState(false), 2);
  const first2 = tmp8Result11[0];
  let closure_18 = tmp8Result11[1];
  [tmp27, closure_19] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp29, closure_20] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp31, closure_21] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp33, closure_22] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp35, closure_23] = changes(obj5.useState(false), 2);
  changes(obj5.useState(false), 2);
  let closure_24 = obj5.useRef(null);
  let closure_25 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmpResult = tmp(tmp2[9]);
    result = tmpResult.projectSupportsVisibility(stateFromStores);
  }
  let tmp38 = null != stateFromStores;
  if (tmp38) {
    tmp38 = "guild" === stateFromStores.install_scope;
  }
  let result1 = tmp38 && null != arg1;
  if (result1) {
    const tmpResult4 = tmp(tmp2[9]);
    result1 = tmpResult4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmpResult5 = tmp(tmp2[10]);
  const conjureProjectAccessSettings = tmpResult5.getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp41 = null != stateFromStores;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (tmp41) {
    tmp41 = trimmed !== tmp10;
  }
  let closure_28 = tmp41;
  let tmp42 = result;
  if (tmp42) {
    let num2;
    if (tmp12 != null) {
      num2 = tmp12.flags;
    }
    if (num2 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num2 = flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp42 = flags !== num2;
  }
  let closure_29 = tmp42;
  let tmp44 = result1;
  if (tmp44) {
    let roleIds;
    const haveSameRoleIds = tmp(tmp2[11]).haveSameRoleIds;
    tmp(tmp2[11]);
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp44 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_30 = tmp44;
  let flag = tmp20;
  if (tmp20 == null) {
    flag = uses_preview_app;
  }
  if (flag == null) {
    flag = false;
  }
  let closure_32 = tmp48;
  let tmp49 = tmp41 || tmp42 || tmp44 || tmp48 || tmp5.changed;
  let closure_33 = tmp49;
  let tmp50 = tmp49 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_34 = tmp50;
  const setIcon = tmp5.setIcon;
  const setDescription = tmp5.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items2 = [setIcon];
  const items3 = [setDescription];
  const callback = obj5.useCallback((arg0) => {
    setIcon(arg0);
    closure_21(null);
  }, items2);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_21(null);
  }, items3);
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
  const items4 = [setChecked];
  const callback4 = obj5.useCallback((arg0) => {
    tmp21(arg0);
    closure_21(null);
  }, []);
  const callback5 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_21(null);
  }, items4);
  const items5 = [arg1, stateFromStores];
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
                  if (null == stateFromStores.install_scope_setup) {
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
  }), items5);
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
  const items6 = [callback6, first1];
  const items7 = [setChecked2];
  const callback7 = useCallback(function() {
    return closure_0(...arguments);
  }, items6);
  const items8 = [setChecked3];
  const callback8 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_22(null);
  }, items7);
  const callback9 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_22(null);
  }, items8);
  const items9 = [commit, flags, tmp42, arg1, tmp50, changes, isGuildCollaboration, tmp41, tmp48, flag, stateFromStores, arg0, tmp49, tmp44, save3, save, save2, first2, first1, trimmed];
  let obj6 = { iconURL: tmp5.iconURL, description: tmp5.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp27, nameChanged: tmp41, isPublic, isGuildCollaboration, usesPreviewApp: flag, canChangePreviewApp: tmp47, selectedRoleIds: first1, supportsVisibility: result, supportsCollaboration: tmp38, supportsCollaboratorRoles: result1, checkingAppInGuild: tmp35, saving: first2, selectionError: tmp29, saveError: tmp31, experimentalError: tmp33, canSave: tmp50, handleIconChange: callback, handleNameChange: callback2, handleDescriptionChange: callback1, handleFlagChange: callback3, handleUsesPreviewAppChange: callback4, handleLiveReloadChange: callback5, handleRoleSelectionChange: callback7, ensureAppInGuild: callback6, handleSmartContextChange: callback8, handleRequireHostApprovalChange: callback9, submit: callback10 };
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
  }), items9);
  if (tmp50) {
    tmp50 = "" !== trimmed;
  }
  return obj6;
};
