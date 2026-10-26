// Module ID: 11805
// Function ID: 11806
// Name: useConjureProjectSettingsDraft
// Dependencies: [5, 32, 19, 6773, 504, 11806, 11809, 11811, 10735, 6774, 7345, 11812, 1128, 3830, 11813, 10720, 2]
// Exports: default

// Module 11805 (useConjureProjectSettingsDraft)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, closure_0, importDefault;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, guild_id) {
  let callback8;
  let closure_10;
  let closure_11;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
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
  _require = arg0;
  importDefault = guild_id;
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
  [str2, closure_11] = changes(obj5.useState(tmp10), 2);
  let num;
  const useState2 = obj5.useState;
  const tmp13 = changes(obj5.useState(tmp10), 2);
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp8Result = changes(useState2(num), 2);
  let flags = tmp8Result[0];
  let closure_13 = tmp8Result[1];
  const tmp8Result7 = changes(obj5.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp8Result7[0];
  let closure_15 = tmp8Result7[1];
  const tmp8Result8 = changes(obj5.useState(false), 2);
  const first2 = tmp8Result8[0];
  let closure_17 = tmp8Result8[1];
  [tmp21, closure_18] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp23, closure_19] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp25, closure_20] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp27, closure_21] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmpResult = tmp(tmp2[9]);
    result = tmpResult.projectSupportsVisibility(stateFromStores);
  }
  let tmp30 = null != stateFromStores;
  if (tmp30) {
    tmp30 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp30 && null != guild_id;
  if (result1) {
    const tmpResult4 = tmp(tmp2[9]);
    result1 = tmpResult4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmpResult5 = tmp(tmp2[10]);
  const conjureProjectAccessSettings = tmpResult5.getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp33 = null != stateFromStores;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (tmp33) {
    tmp33 = trimmed !== tmp10;
  }
  let closure_24 = tmp33;
  let tmp34 = result;
  if (tmp34) {
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
    tmp34 = flags !== num2;
  }
  let closure_25 = tmp34;
  let tmp36 = result1;
  if (tmp36) {
    let roleIds;
    const haveSameRoleIds = tmp(tmp2[11]).haveSameRoleIds;
    tmp(tmp2[11]);
    if (tmp12 != null) {
      roleIds = tmp12.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp36 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_26 = tmp36;
  let closure_27 = tmp39;
  let tmp40 = tmp39 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_28 = tmp40;
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
    let closure_1 = arg1;
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
  const items5 = [setChecked2];
  const callback5 = obj5.useCallback((arg0) => {
    if (arg0.length > ConjureProjectTypes.MAX_PROJECT_COLLABORATOR_ROLES) {
      const intl = tmp(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { max: ConjureProjectTypes.MAX_PROJECT_COLLABORATOR_ROLES };
      prop = _modDef3830["dH7+/Z"];
      closure_19(formatToPlainString(prop, obj));
    } else {
      closure_15(arg0);
      closure_19(null);
      closure_20(null);
    }
  }, []);
  const items6 = [setChecked3];
  const callback6 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_21(null);
  }, items5);
  const callback7 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_21(null);
  }, items6);
  const items7 = [commit, flags, tmp34, guild_id, tmp40, changes, isGuildCollaboration, tmp33, stateFromStores, arg0, tmp39, tmp36, save3, save, save2, first2, first1, trimmed];
  let obj6 = { iconURL: tmp5.iconURL, description: tmp5.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp21, nameChanged: tmp33, isPublic, isGuildCollaboration, selectedRoleIds: first1, supportsVisibility: result, supportsCollaboration: tmp30, supportsCollaboratorRoles: result1, saving: first2, selectionError: tmp23, saveError: tmp25, experimentalError: tmp27, canSave: tmp40, handleIconChange: callback, handleNameChange: callback2, handleDescriptionChange: callback1, handleFlagChange: callback3, handleLiveReloadChange: callback4, handleRoleSelectionChange: callback5, handleSmartContextChange: callback6, handleRequireHostApprovalChange: callback7, submit: callback8 };
  callback8 = obj5.useCallback(save(function*(arg0, value) {
    let closure_2;
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
        return { value: "IconComponent", done: null };
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
              const tmp95 = closure_28;
              if (tmp95) {
                const tmp36 = first2;
                if (!tmp36) {
                  let result = null;
                  if (closure_24) {
                    const obj3 = tmp(stateFromStores[14]);
                    result = obj3.conjureProjectNameError(trimmed);
                  }
                  if (null != result) {
                    closure_18(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_24) {
                      obj6.name = trimmed;
                    }
                    let tmp43 = closure_25;
                    if (tmp43) {
                      obj6.flags = flags;
                    }
                    let tmp45 = closure_26;
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
                    const tmp58 = closure_27;
                    if (tmp58) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: obj5.updateProjectSettings(tmp, obj6), done: false };
                      obj5 = tmp(stateFromStores[15]);
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
          const intl = tmp(stateFromStores[12]).intl;
          closure_128_20(intl.string(guild_id(stateFromStores[13])["9JPr8h"]));
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
          closure_128_9(closure_128_22);
          const obj = { flags: closure_128_12, roleIds: items1 };
          items1 = [];
          HermesBuiltin.arraySpread(items1, closure_128_14, 0);
          closure_128_10(obj);
          closure_128_5();
        }
        if (closure_128_3()) {
          let tmp71;
          if (!closure_128_6()) {
            const intl3 = tmp(stateFromStores[12]).intl;
            closure_128_21(intl3.string(guild_id(stateFromStores[13])["9JPr8h"]));
            tmp71 = "experimental";
          } else {
            tmp71 = null;
          }
          str = tmp71;
        } else {
          const intl2 = tmp(stateFromStores[12]).intl;
          closure_128_20(intl2.string(guild_id(stateFromStores[13]).XzkNBw));
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
  }), items7);
  if (tmp40) {
    tmp40 = "" !== trimmed;
  }
  return obj6;
};
