// Module ID: 18507
// Function ID: 18508
// Name: useConjureProjectSettingsDraft
// Dependencies: [5, 32, 19, 6934, 504, 18508, 18478, 18510, 7719, 18484, 18483, 6935, 7602, 18511, 7692, 11469, 1112, 4245, 18487, 7667, 2]
// Exports: default

// Module 18507 (useConjureProjectSettingsDraft)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, c5, closure_0, closure_1, importDefault;

let result = size.fileFinishedImporting("modules/conjure/settings/useConjureProjectSettingsDraft.tsx");

export default function useConjureProjectSettingsDraft(arg0, arg1) {
  let callback11;
  let closure_11;
  let closure_19;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_9;
  let save2;
  let stateFromStores;
  let str2;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp41;
  let tmp42;
  let tmp48;
  let tmp50;
  let tmp52;
  let tmp54;
  let tmp56;
  let tmp86;
  _require = arg0;
  importDefault = arg1;
  let tmp2 = _require;
  let tmp3 = stateFromStores;
  let obj = require("get initialized");
  let items = [save2];
  let items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj2 = require("useConjureLiveReloadSetting");
  const conjureLiveReloadSetting = obj2.useConjureLiveReloadSetting(arg0);
  const save = conjureLiveReloadSetting.save;
  let tmp6 = importDefault;
  const tmp7 = require("useConjureAppIdentityDraft")(arg0);
  const changes = tmp7.changes;
  const commit = tmp7.commit;
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
  [tmp12, closure_9] = changes(useState(str), 2);
  const tmp11 = changes(useState(str), 2);
  const tmp13 = changes(obj5.useState(null), 2);
  [tmp14, tmp15] = tmp13;
  let closure_10 = tmp15;
  [str2, closure_11] = changes(obj5.useState(tmp12), 2);
  let num;
  const useState2 = obj5.useState;
  const tmp16 = changes(obj5.useState(tmp12), 2);
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp10Result = changes(useState2(num), 2);
  let flags = tmp10Result[0];
  const tmp19 = tmp10Result[1];
  let closure_13 = tmp19;
  const tmp10Result11 = changes(obj5.useState(() => {
    const items = [...prop];
    return items;
  }), 2);
  const first1 = tmp10Result11[0];
  let closure_15 = tmp21;
  const tmp22 = tmp6(tmp3[9])(arg0);
  let closure_16 = tmp22;
  const memo = obj5.useMemo(() => {
    const obj = closure_0(stateFromStores[10]);
    return obj.conjureSharingOptions();
  }, []);
  const tmp10Result12 = changes(obj5.useState(null), 2);
  const first2 = tmp10Result12[0];
  let closure_18 = tmp26;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let tmp28 = null;
  if ("guild" === install_scope) {
    let guild_id = stateFromStores.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    tmp28 = guild_id;
  }
  const tmp10Result13 = changes(obj5.useState(tmp28), 2);
  if (tmp28 !== tmp10Result13[0]) {
    tmp10Result13[1](tmp28);
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp19(num2);
    const items2 = [];
    let tmp33 = items2;
    HermesBuiltin.arraySpread(items2, prop, 0);
    tmp10Result11[1](items2);
    tmp10Result12[1](null);
    tmp15(null);
  }
  let uses_preview_app;
  if (stateFromStores != null) {
    uses_preview_app = stateFromStores.uses_preview_app;
  }
  [tmp41, tmp42] = changes(obj5.useState(null), 2);
  const tmp43 = null != tmp41 && tmp41 === uses_preview_app;
  changes(obj5.useState(null), 2);
  if (tmp43) {
    tmp42(null);
  }
  const tmp10Result15 = changes(obj5.useState(false), 2);
  const first3 = tmp10Result15[0];
  let closure_21 = tmp10Result15[1];
  [tmp48, closure_22] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp50, closure_23] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp52, closure_24] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp54, closure_25] = changes(obj5.useState(null), 2);
  changes(obj5.useState(null), 2);
  [tmp56, closure_26] = changes(obj5.useState(false), 2);
  changes(obj5.useState(false), 2);
  let closure_27 = obj5.useRef(null);
  let closure_28 = obj5.useRef(false);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmp2Result = tmp2(tmp3[11]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let tmp59 = null != stateFromStores && "guild" === stateFromStores.install_scope;
  let result1 = tmp59 && null != arg1;
  if (result1) {
    const tmp2Result4 = tmp2(tmp3[11]);
    result1 = tmp2Result4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp2Result5 = tmp2(tmp3[12]);
  const conjureProjectAccessSettings = tmp2Result5.getConjureProjectAccessSettings(flags);
  let isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let shareLinksEnabled = first2;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (first2 == null) {
    shareLinksEnabled = tmp22.shareLinksEnabled;
  }
  let str3 = "public";
  if (!isPublic) {
    let tmp62 = null;
    if (null != shareLinksEnabled) {
      let str4 = "collaborators";
      if (shareLinksEnabled) {
        str4 = "link";
      }
      tmp62 = str4;
    }
    str3 = tmp62;
  }
  let closure_31 = tmp63;
  let closure_32 = tmp64;
  let tmp65 = result;
  if (tmp65) {
    let num4;
    if (tmp14 != null) {
      num4 = tmp14.flags;
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
    tmp65 = flags !== num4;
  }
  let closure_33 = tmp65;
  let tmp67 = result1;
  if (tmp67) {
    let roleIds;
    const haveSameRoleIds = tmp2(tmp3[13]).haveSameRoleIds;
    tmp2(tmp3[13]);
    if (tmp14 != null) {
      roleIds = tmp14.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp67 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_34 = tmp67;
  let flag = tmp41;
  if (tmp41 == null) {
    flag = uses_preview_app;
  }
  if (flag == null) {
    flag = false;
  }
  let closure_36 = tmp71;
  let tmp72 = tmp64 || tmp65 || tmp63 || tmp67 || tmp71 || tmp7.changed;
  let closure_37 = tmp72;
  let tmp73 = tmp72 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_38 = tmp73;
  const setIcon = tmp7.setIcon;
  const setDescription = tmp7.setDescription;
  const setChecked = conjureLiveReloadSetting.setChecked;
  const setChecked2 = conjureSmartContextSetting.setChecked;
  const setChecked3 = conjureRequireHostApprovalSetting.setChecked;
  const items3 = [setIcon];
  const items4 = [setDescription];
  const callback = obj5.useCallback((arg0) => {
    setIcon(arg0);
    closure_24(null);
  }, items3);
  const callback1 = obj5.useCallback((description) => {
    setDescription(description);
    closure_24(null);
  }, items4);
  const callback2 = obj5.useCallback((arg0) => {
    closure_11(arg0);
    closure_22(null);
    closure_24(null);
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
    let tmp2 = closure_23(null);
    closure_24(null);
  }, []);
  const callback4 = obj5.useCallback((arg0) => {
    closure_0 = arg0;
    closure_13((arg0) => {
      let tmp3;
      if ("public" === closure_0) {
        tmp3 = arg0 | closure_2_0(stateFromStores[11]).ConjureProjectFlags.PUBLIC;
      } else {
        tmp3 = arg0 & ~closure_2_0(stateFromStores[11]).ConjureProjectFlags.PUBLIC;
      }
      return tmp3;
    });
    let tmp3 = null;
    const tmp2 = closure_18;
    if ("public" !== arg0) {
      tmp3 = "link" === arg0;
    }
    tmp2(tmp3);
    closure_24(null);
  }, []);
  const items5 = [setChecked];
  const callback5 = obj5.useCallback((arg0) => {
    tmp42(arg0);
    closure_24(null);
  }, []);
  const callback6 = obj5.useCallback((arg0) => {
    setChecked(arg0);
    closure_24(null);
  }, items5);
  const items6 = [arg1, stateFromStores];
  const callback7 = obj5.useCallback(save(function*(arg0, value) {
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
                      closure_26(true);
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = { value: obj9.fetchConjureAppInGuild(stateFromStores, closure_1), done: false };
                      obj9 = closure_0(stateFromStores[14]);
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
          closure_129_28.current = false;
          closure_129_26(false);
          throw stateFromStores;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_28.current = false;
            closure_129_26(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (false !== closure_0) {
              if (true === closure_0) {
                closure_129_27.current = closure_129_1;
              }
              c3 = 0;
              closure_129_28.current = false;
              closure_129_26(false);
              c5 = 3;
              return { value: true, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj8 = { value: obj6.requestConjureInstallConsent(closure_129_2.id, closure_129_1), done: false };
              obj6 = closure_0(stateFromStores[15]);
              return obj8;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_28.current = false;
            closure_129_26(false);
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c4 = 4;
            c5 = 1;
            const obj11 = { value: obj3.fetchConjureAppInGuild(closure_129_2, closure_129_1), done: false };
            obj3 = closure_0(stateFromStores[14]);
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_28.current = false;
          closure_129_26(false);
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          value = tmp66;
          const tmp6 = value;
          if (tmp6) {
            closure_129_27.current = closure_129_1;
          }
          c3 = 0;
          closure_129_28.current = false;
          closure_129_26(false);
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
            if (closure_0.length > closure_0(stateFromStores[11]).MAX_PROJECT_COLLABORATOR_ROLES) {
              const intl = tmp18(tmp19[16]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj4 = { max: closure_0(stateFromStores[11]).MAX_PROJECT_COLLABORATOR_ROLES };
              prop = closure_2_1(tmp19[17])["dH7+/Z"];
              closure_1_23(formatToPlainString(prop, obj4));
            } else {
              apply = function apply() {
                closure_2_15(closure_0);
                closure_2_23(null);
                closure_2_24(null);
              };
              if (obj6.some((item) => !closure_1_14.includes(item))) {
                c3 = 1;
                c2 = 2;
                c4 = 1;
                const obj5 = { value: callback7(), done: false };
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
  const items7 = [callback7, first1];
  const items8 = [setChecked2];
  const callback8 = useCallback(function() {
    return closure_0(...arguments);
  }, items7);
  const items9 = [setChecked3];
  const callback9 = obj5.useCallback((arg0) => {
    setChecked2(arg0);
    closure_25(null);
  }, items8);
  const callback10 = obj5.useCallback((arg0) => {
    setChecked3(arg0);
    closure_25(null);
  }, items9);
  const items10 = [commit, flags, tmp65, arg1, tmp73, changes, isGuildCollaboration, tmp64, tmp71, flag, stateFromStores, arg0, tmp72, tmp67, save3, save, save2, first3, first1, tmp22, tmp63, first2, trimmed];
  let obj6 = { iconURL: tmp7.iconURL, description: tmp7.description, liveReload: conjureLiveReloadSetting, smartContext: conjureSmartContextSetting, hostApproval: conjureRequireHostApprovalSetting, name: str2, nameError: tmp48, nameChanged: tmp64, sharingMode: str3, sharingOptions: memo, canChangeSharing: tmp86, isGuildCollaboration, usesPreviewApp: flag, canChangePreviewApp: tmp70, selectedRoleIds: first1, showsManageServerDefault: isGuildCollaboration, supportsVisibility: result, supportsCollaboration: tmp59, supportsCollaboratorRoles: result1, checkingAppInGuild: tmp56, saving: first3, selectionError: tmp50, saveError: tmp52, experimentalError: tmp54, canSave: tmp73, handleIconChange: callback, handleNameChange: callback2, handleDescriptionChange: callback1, handleFlagChange: callback3, handleSharingModeChange: callback4, handleUsesPreviewAppChange: callback5, handleLiveReloadChange: callback6, handleRoleSelectionChange: callback8, ensureAppInGuild: callback7, handleSmartContextChange: callback9, handleRequireHostApprovalChange: callback10, submit: callback11 };
  tmp86 = result;
  callback11 = obj5.useCallback(save(function*(arg0, value) {
    let closure_2;
    let guild_id;
    let items1;
    let obj4;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (null != stateFromStores) {
              const tmp107 = closure_38;
              if (tmp107) {
                const tmp33 = first3;
                if (!tmp33) {
                  let result = null;
                  if (closure_32) {
                    const obj2 = tmp(stateFromStores[18]);
                    result = obj2.conjureProjectNameError(trimmed);
                  }
                  if (null != result) {
                    closure_22(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_32) {
                      obj6.name = trimmed;
                    }
                    let tmp40 = closure_33;
                    if (tmp40) {
                      obj6.flags = flags;
                    }
                    const tmp42 = closure_31;
                    if (tmp42) {
                      obj6.share_links_enabled = first2;
                    }
                    let tmp44 = closure_34;
                    if (tmp44) {
                      const items = [];
                      HermesBuiltin.arraySpread(items, first1, 0);
                      obj6.collaborator_role_ids = items.sort();
                    }
                    const tmp48 = closure_36;
                    if (tmp48) {
                      obj6.uses_preview_app = false;
                    }
                    let tmp50 = null == tmp106.guild_id && null != guild_id;
                    if (tmp50) {
                      if (!tmp44) {
                        if (tmp40) {
                          tmp40 = isGuildCollaboration;
                        }
                        tmp44 = tmp40;
                      }
                      tmp50 = tmp44;
                    }
                    if (tmp50) {
                      obj6.guild_id = guild_id;
                    }
                    closure_21(true);
                    closure_24(null);
                    closure_25(null);
                    c3 = 2;
                    const tmp59 = closure_37;
                    if (tmp59) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: obj4.updateProjectSettings(tmp, obj6), done: false };
                      obj4 = tmp(stateFromStores[19]);
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
          closure_128_21(false);
          throw stateFromStores;
        } else if (2 === guild_id) {
          const intl = tmp(stateFromStores[16]).intl;
          closure_128_24(intl.string(guild_id(stateFromStores[17])["9JPr8h"]));
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_9(closure_128_29);
          const obj8 = { flags: closure_128_12, roleIds: items1 };
          items1 = [];
          HermesBuiltin.arraySpread(items1, closure_128_14, 0);
          closure_128_10(obj8);
          if (null != closure_128_17) {
            closure_128_16.setShareLinksEnabled(closure_128_17);
          }
          closure_128_18(null);
          closure_128_5();
        }
        if (closure_128_3()) {
          let tmp72;
          if (!closure_128_6()) {
            const intl3 = tmp(stateFromStores[16]).intl;
            closure_128_25(intl3.string(guild_id(stateFromStores[17])["9JPr8h"]));
            tmp72 = "experimental";
          } else {
            tmp72 = null;
          }
          str = tmp72;
        } else {
          const intl2 = tmp(stateFromStores[16]).intl;
          closure_128_24(intl2.string(guild_id(stateFromStores[17]).XzkNBw));
          str = "project";
        }
        c3 = 0;
        closure_128_21(false);
        c4 = 3;
        const obj9 = { value: str, done: true };
        return obj9;
      } catch (tmp88) {
        stateFromStores = tmp88;
        if (0 === c3) {
          c4 = 3;
          throw tmp88;
        } else if (1 === tmp90) {
          guild_id = 1;
        } else {
          guild_id = 2;
        }
      }
    }
  }), items10);
  if (result) {
    tmp86 = null != tmp22.shareLinksEnabled || tmp22.loadFailed;
    const tmp87 = null != tmp22.shareLinksEnabled || tmp22.loadFailed;
  }
  if (isGuildCollaboration) {
    isGuildCollaboration = 0 === first1.length;
  }
  if (tmp73) {
    tmp73 = "" !== trimmed;
  }
  return obj6;
};
