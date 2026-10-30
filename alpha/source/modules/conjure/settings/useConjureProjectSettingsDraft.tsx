// Module ID: 12435
// Function ID: 12436
// Name: useConjureProjectSettingsDraft
// Dependencies: [5, 32, 19, 6838, 504, 12436, 12416, 12439, 10870, 6839, 7413, 12440, 10866, 12400, 1114, 3865, 12419, 10855, 2]
// Exports: default

// Module 12435 (useConjureProjectSettingsDraft)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, c5, closure_0, closure_1, importDefault;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  let callback9;
  let closure_10;
  let closure_11;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_9;
  let save2;
  let stateFromStores;
  let str2;
  let tmp10;
  let tmp12;
  let tmp21;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp29;
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
  const tmp8Result8 = changes(obj5.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp8Result8[0];
  let closure_15 = tmp8Result8[1];
  const tmp8Result9 = changes(obj5.useState(false), 2);
  const first2 = tmp8Result9[0];
  let closure_17 = tmp8Result9[1];
  [tmp21, closure_18] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp23, closure_19] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp25, closure_20] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp27, closure_21] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp29, closure_22] = changes(obj5.useState(false), 2);
  changes(obj5.useState(false), 2);
  let closure_23 = obj5.useRef(null);
  let closure_24 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmpResult = tmp(tmp2[9]);
    result = tmpResult.projectSupportsVisibility(stateFromStores);
  }
  let tmp32 = null != stateFromStores;
  if (tmp32) {
    tmp32 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp32 && null != arg1;
  if (result1) {
    const tmpResult4 = tmp(tmp2[9]);
    result1 = tmpResult4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmpResult5 = tmp(tmp2[10]);
  const conjureProjectAccessSettings = tmpResult5.getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp35 = null != stateFromStores;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (tmp35) {
    tmp35 = trimmed !== tmp10;
  }
  let closure_27 = tmp35;
  let tmp36 = result;
  if (tmp36) {
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
    tmp36 = flags !== num2;
  }
  let closure_28 = tmp36;
  let tmp38 = result1;
  if (tmp38) {
    let roleIds;
    const haveSameRoleIds = tmp(tmp2[11]).haveSameRoleIds;
    tmp(tmp2[11]);
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp38 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_29 = tmp38;
  let closure_30 = tmp41;
  let tmp42 = tmp41 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_31 = tmp42;
  const setIcon = tmp5.setIcon;
  const setDescription = tmp5.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items2 = [setIcon];
  const items3 = [setDescription];
  const callback = obj5.useCallback((arg0) => {
    setIcon(arg0);
    closure_20(null);
  }, items2);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_20(null);
  }, items3);
  const callback2 = obj5.useCallback((arg0) => {
    closure_11(arg0);
    closure_18(null);
    closure_20(null);
  }, []);
  const items4 = [setChecked];
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
    let tmp2 = closure_19(null);
    closure_20(null);
  }, []);
  const callback4 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_20(null);
  }, items4);
  const items5 = [arg1, stateFromStores];
  const callback5 = obj5.useCallback(save(function*(arg0, value) {
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
                    const obj13 = closure_0(stateFromStores[9]);
                    if (!obj13.isPreviewlessProject(stateFromStores)) {
                      if (ref.current !== closure_1) {
                        if (ref2.current) {
                          c5 = 3;
                          return { value: false, done: true };
                        } else {
                          ref2.current = true;
                          closure_22(true);
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
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_24.current = false;
          closure_129_22(false);
          throw stateFromStores;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_24.current = false;
            closure_129_22(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (false !== closure_0) {
              if (true === closure_0) {
                closure_129_23.current = closure_129_1;
              }
              c3 = 0;
              closure_129_24.current = false;
              closure_129_22(false);
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
            closure_129_24.current = false;
            closure_129_22(false);
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
          closure_129_24.current = false;
          closure_129_22(false);
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          value = tmp69;
          const tmp6 = value;
          if (tmp6) {
            closure_129_23.current = closure_129_1;
          }
          c3 = 0;
          closure_129_24.current = false;
          closure_129_22(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp62) {
        stateFromStores = tmp62;
        if (0 === c3) {
          c5 = 3;
          throw tmp62;
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
              closure_1_19(formatToPlainString(prop, obj4));
            } else {
              apply = function apply() {
                closure_2_15(closure_0);
                closure_2_19(null);
                closure_2_20(null);
              };
              if (obj6.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback5(), done: false };
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
  const items6 = [callback5, first1];
  const items7 = [setChecked2];
  const callback6 = useCallback(function() {
    return closure_0(...arguments);
  }, items6);
  const items8 = [setChecked3];
  const callback7 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_21(null);
  }, items7);
  const callback8 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_21(null);
  }, items8);
  const items9 = [commit, flags, tmp36, arg1, tmp42, changes, isGuildCollaboration, tmp35, stateFromStores, arg0, tmp41, tmp38, save3, save, save2, first2, first1, trimmed];
  let obj6 = { iconURL: tmp5.iconURL, description: tmp5.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp21, nameChanged: tmp35, isPublic, isGuildCollaboration, selectedRoleIds: first1, supportsVisibility: result, supportsCollaboration: tmp32, supportsCollaboratorRoles: result1, checkingAppInGuild: tmp29, saving: first2, selectionError: tmp23, saveError: tmp25, experimentalError: tmp27, canSave: tmp42, handleIconChange: callback, handleNameChange: callback2, handleDescriptionChange: callback1, handleFlagChange: callback3, handleLiveReloadChange: callback4, handleRoleSelectionChange: callback6, ensureAppInGuild: callback5, handleSmartContextChange: callback7, handleRequireHostApprovalChange: callback8, submit: callback9 };
  callback9 = obj5.useCallback(save(function*(arg0, value) {
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
              const tmp95 = closure_31;
              if (tmp95) {
                const tmp36 = first2;
                if (!tmp36) {
                  let result = null;
                  if (closure_27) {
                    const obj3 = tmp(stateFromStores[16]);
                    result = obj3.conjureProjectNameError(trimmed);
                  }
                  if (null != result) {
                    closure_18(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_27) {
                      obj6.name = trimmed;
                    }
                    let tmp43 = closure_28;
                    if (tmp43) {
                      obj6.flags = flags;
                    }
                    let tmp45 = closure_29;
                    if (tmp45) {
                      const items = [];
                      HermesBuiltin.arraySpread(items, first1, 0);
                      obj6.collaborator_role_ids = items.sort();
                    }
                    let tmp49 = null == tmp94.guild_id && null != guild_id;
                    if (tmp49) {
                      if (!tmp45) {
                        if (tmp43) {
                          tmp43 = isGuildCollaboration;
                        }
                        tmp45 = tmp43;
                      }
                      tmp49 = tmp45;
                    }
                    if (tmp49) {
                      obj6.guild_id = guild_id;
                    }
                    closure_17(true);
                    closure_20(null);
                    closure_21(null);
                    c3 = 2;
                    const tmp58 = closure_30;
                    if (tmp58) {
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
          closure_128_17(false);
          throw stateFromStores;
        } else if (2 === guild_id) {
          const intl = tmp(stateFromStores[14]).intl;
          closure_128_20(intl.string(guild_id(stateFromStores[15])["9JPr8h"]));
          c3 = 0;
          closure_128_17(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_17(false);
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_128_9(closure_128_25);
          const obj = { flags: closure_128_12, roleIds: items1 };
          items1 = [];
          HermesBuiltin.arraySpread(items1, closure_128_14, 0);
          closure_128_10(obj);
          closure_128_5();
        }
        if (closure_128_3()) {
          let tmp71;
          if (!closure_128_6()) {
            const intl3 = tmp(stateFromStores[14]).intl;
            closure_128_21(intl3.string(guild_id(stateFromStores[15])["9JPr8h"]));
            tmp71 = "experimental";
          } else {
            tmp71 = null;
          }
          str = tmp71;
        } else {
          const intl2 = tmp(stateFromStores[14]).intl;
          closure_128_20(intl2.string(guild_id(stateFromStores[15]).XzkNBw));
          str = "project";
        }
        c3 = 0;
        closure_128_17(false);
        c4 = 3;
        const obj9 = { value: str, done: true };
        return obj9;
      } catch (tmp87) {
        stateFromStores = tmp87;
        if (0 === c3) {
          c4 = 3;
          throw tmp87;
        } else if (1 === tmp89) {
          guild_id = 1;
        } else {
          guild_id = 2;
        }
      }
    }
  }), items9);
  if (tmp42) {
    tmp42 = "" !== trimmed;
  }
  return obj6;
};
