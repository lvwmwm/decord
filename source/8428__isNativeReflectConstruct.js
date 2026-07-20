// Module ID: 8428
// Function ID: 67202
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8428 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function syncGuild(guildId) {
  if (null != guild) {
    if (null != guild) {
      if (guild.id === guildId) {
        const guild = store2.getGuild(guildId);
        let flag = null != guild;
        if (flag) {
          if (guild === guild) {
            flag = true;
          } else {
            flag = true;
          }
        }
        return flag;
      }
    }
  }
  return false;
}
function handleFormInit(location) {
  let guildId;
  let section;
  let subsection;
  ({ guildId, section, subsection } = location);
  const guild = store2.getGuild(guildId);
  if (null == guild) {
    handleFormClose();
  } else {
    const profile = store.getProfile(guildId);
    let closure_45 = closure_44;
    let closure_47 = closure_46;
    const CLOSED = FormStates.OPEN;
    let closure_41 = {};
    let closure_42 = null;
    let closure_32 = importDefault(dependencyMap[16]).castGuildIdAsEveryoneGuildRoleId(guildId);
    const NONE = guild.mfaLevel;
    let closure_56 = obj;
    let closure_34 = null;
    let closure_48 = {};
    const _location = location.location;
    if (section === constants.TAG) {
      let obj = arg1(dependencyMap[17]);
      if (!obj.canUseMobileServerTagSettings(guildId)) {
        let obj2;
      }
    }
    if (null != section) {
      obj = { key: "landing", name: constants.LANDING };
      const items = [obj];
      if (section === constants.TAG_CUSTOMIZE) {
        obj = { key: constants.TAG, name: constants.TAG };
        items.push(obj);
      }
      const obj1 = { key: section, name: section };
      items.push(obj1);
      obj2 = { type: "stack", routes: items };
    }
    const obj5 = importDefault(dependencyMap[16]);
  }
}
function handleFormClose() {
  let closure_39 = false;
  const CLOSED = FormStates.CLOSED;
  let closure_29 = null;
  let closure_28 = null;
  let closure_43 = false;
  let closure_45 = false;
  let closure_47 = null;
  let closure_49 = null;
  let closure_50 = 0;
  let closure_57 = null;
  let closure_60 = null;
  let closure_61 = null;
  let closure_25 = null;
  let closure_26 = null;
  let closure_27 = null;
  const NONE = MFALevels.NONE;
  let closure_48 = {};
  let closure_33;
}
function _createInvite(code) {
  let tmp = closure_12;
  const obj = { code: code.code, temporary: code.temporary, revoked: code.revoked };
  let tmp2 = null;
  if (null != code.inviter) {
    const prototype = ctor.prototype;
    tmp2 = new ctor(code.inviter);
  }
  obj.inviter = tmp2;
  obj.channel = callback3(code.channel);
  let fromInviteGuildResult = null;
  if (null != code.guild) {
    fromInviteGuildResult = arg1(dependencyMap[22]).fromInviteGuild(code.guild);
    const obj2 = arg1(dependencyMap[22]);
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  const created_at = code.created_at;
  let tmp10;
  if (null != created_at) {
    tmp10 = created_at;
  }
  obj.createdAt = importDefault(dependencyMap[23])(tmp10);
  ({ flags: obj.flags, roles: obj.roles } = code);
  tmp = new tmp(obj);
  return tmp;
}
function handleIntegrationsUpdate(type) {
  let tmp = null != user;
  if (tmp) {
    tmp = CLOSED === FormStates.OPEN;
  }
  if (tmp) {
    let tmp4 = "GUILD_INTEGRATIONS_UPDATE" !== type.type;
    if (!tmp4) {
      tmp4 = type.guildId === user.id;
    }
    if (tmp4) {
      const guildIntegrationsApplications = arg1(dependencyMap[24]).fetchGuildIntegrationsApplications(user.id);
      const obj = arg1(dependencyMap[24]);
    }
    tmp = tmp4;
  }
  return tmp;
}
function handleProfileUpdateStart(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      let closure_42 = null;
    }
  }
  return false;
}
function handleProfileApiUpdateFailure(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      let closure_42 = tmp2;
    }
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let set = arg1(dependencyMap[5]).set;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = arg1(dependencyMap[7]).createChannelRecordFromInvite;
const getGuildEveryoneRoleId = arg1(dependencyMap[8]).getGuildEveryoneRoleId;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
const tmp2 = arg1(dependencyMap[13]);
const FormStates = tmp2.FormStates;
const MFALevels = tmp2.MFALevels;
({ GuildSettingsSections: closure_18, GuildSettingsSubsections: closure_19, Endpoints: closure_20, GuildFeatures: closure_21 } = tmp2);
const DEFAULT_DISCOVERY_CATEGORY_ID = arg1(dependencyMap[14]).DEFAULT_DISCOVERY_CATEGORY_ID;
({ PUBLIC_SUCCESS_MODAL_SEEN_KEY: closure_23, CREATE_NEW_CHANNEL_VALUE: closure_24 } = arg1(dependencyMap[15]));
let closure_35 = [];
let closure_36 = [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000002637020112755557, 53944000819712560000000000000000000000000000000000000000000000000000, 8593571552.000582, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001492229287243438, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000002637000594199947, -563262703796295.9, 723244228261808700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Array", "isArray", "status", "__closure", "r"];
set = new Set(["<string:2322923522>", "<string:1394606081>", "<string:1096155138>", "<string:1060044802>", null]);
let closure_38 = {};
let closure_39 = false;
const CLOSED = FormStates.CLOSED;
let closure_41 = {};
let closure_42 = null;
let closure_43 = false;
let closure_44 = false;
let closure_45 = false;
let closure_46 = null;
let closure_47 = null;
let closure_48 = {};
let closure_49 = null;
let closure_50 = 0;
const NONE = MFALevels.NONE;
let closure_52 = null;
let obj = { 0: true, -9223372036854775808: true, 9223372036854775807: true, 9223372036854775807: true, 0: true, 9223372036854775807: true, 9223372036854775807: true, primaryCategoryId: DEFAULT_DISCOVERY_CATEGORY_ID, secondaryCategoryIds: [], keywords: [], reasonsToJoin: [], socialLinks: [], about: "" };
let closure_54 = false;
let closure_57 = null;
let closure_58 = 0;
let closure_59 = null;
let closure_60 = null;
let closure_61 = null;
let tmp5 = (Store) => {
  class GuildSettingsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildSettingsStore);
      obj = closure_6(GuildSettingsStore);
      tmp2 = closure_5;
      if (closure_62()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildSettingsStore;
  callback2(GuildSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_14, closure_9, closure_15);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getMetadata",
    value() {
      return closure_56;
    }
  };
  items[1] = obj;
  obj = {
    key: "widgetHasChanges",
    value() {
      let tmp = false !== closure_43;
      if (tmp) {
        let tmp4 = closure_45 !== closure_44;
        if (!tmp4) {
          tmp4 = closure_47 !== closure_46;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasChanges",
    value() {
      const self = this;
      let widgetHasChangesResult = !callback(closure_2[25]).isEqual(closure_29, closure_28);
      if (!widgetHasChangesResult) {
        widgetHasChangesResult = !callback(closure_2[25]).isEqual(closure_56, closure_55);
        const obj2 = callback(closure_2[25]);
      }
      if (!widgetHasChangesResult) {
        widgetHasChangesResult = !callback(closure_2[25]).isEqual(closure_31, closure_30);
        const obj3 = callback(closure_2[25]);
      }
      if (!widgetHasChangesResult) {
        widgetHasChangesResult = self.widgetHasChanges();
      }
      return widgetHasChangesResult;
    }
  };
  items[4] = {
    key: "isOpen",
    value() {
      return closure_39;
    }
  };
  items[5] = {
    key: "getSavedRouteState",
    value() {
      return closure_33;
    }
  };
  items[6] = {
    key: "getSection",
    value() {
      return closure_25;
    }
  };
  items[7] = {
    key: "showNotice",
    value() {
      return this.hasChanges();
    }
  };
  items[8] = {
    key: "getGuildId",
    value() {
      let id = null;
      if (null != id) {
        id = id.id;
      }
      return id;
    }
  };
  items[9] = {
    key: "showPublicSuccessModal",
    value() {
      const Storage = GuildSettingsStore(closure_2[26]).Storage;
      return !Storage.get(closure_23);
    }
  };
  items[10] = {
    key: "getGuild",
    value() {
      return closure_29;
    }
  };
  items[11] = {
    key: "getPendingOriginalMd5s",
    value() {
      return closure_48;
    }
  };
  items[12] = {
    key: "getGuildProfile",
    value() {
      return closure_31;
    }
  };
  items[13] = {
    key: "getWidget",
    value() {
      return { enabled: closure_45, channelId: closure_47 };
    }
  };
  items[14] = {
    key: "isSubmitting",
    value() {
      return closure_40 === constants.SUBMITTING;
    }
  };
  items[15] = {
    key: "isGuildMetadataLoaded",
    value() {
      return closure_54;
    }
  };
  items[16] = {
    key: "getErrors",
    value() {
      return closure_41;
    }
  };
  items[17] = {
    key: "getError",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_41[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[18] = {
    key: "getProfileError",
    value() {
      return closure_42;
    }
  };
  items[19] = {
    key: "getSelectedRoleId",
    value() {
      return closure_32;
    }
  };
  items[20] = {
    key: "getSlug",
    value() {
      return closure_34;
    }
  };
  items[21] = {
    key: "getBans",
    value() {
      const items = [closure_57, closure_58];
      return items;
    }
  };
  items[22] = {
    key: "getProps",
    value() {
      return { submitting: this.isSubmitting(), integrations: closure_61, section: closure_25, subsection: closure_26, errors: closure_41, guild: closure_29, bans: closure_57, bansVersion: closure_58, invites: closure_60, selectedRoleId: closure_32, fetchedEmbed: closure_43, embedEnabled: closure_45, embedChannelId: closure_47, mfaLevel: closure_51, searchQuery: closure_27, vanityURLCode: closure_49, vanityURLUses: closure_50, originalGuild: closure_28, hasChanges: this.hasChanges(), guildMetadata: closure_56, analyticsLocation: closure_52, isGuildMetadataLoaded: closure_54, originalProfile: closure_30, profile: closure_31 };
    }
  };
  return callback(GuildSettingsStore, items);
}(importDefault(dependencyMap[27]).Store);
tmp5.displayName = "GuildSettingsStore";
obj = {
  GUILD_SETTINGS_INIT: handleFormInit,
  GUILD_SETTINGS_OPEN: function handleFormOpen(arg0) {
    let closure_39 = true;
    handleFormInit(arg0);
  },
  GUILD_SETTINGS_CLOSE: handleFormClose,
  GUILD_SETTINGS_UPDATE: function handleUpdate(arg0) {
    const arg1 = arg0;
    if (null == closure_29) {
      return false;
    } else {
      const item = closure_35.forEach((arg0) => {
        let hasOwnPropertyResult = null != closure_29;
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = arg0.hasOwnProperty(arg0);
        }
        if (hasOwnPropertyResult) {
          let tmp7 = null;
          if (null != arg0[arg0]) {
            tmp7 = tmp6;
          }
          closure_29 = closure_8(closure_29, arg0, tmp7);
          const tmp3 = closure_8;
          const tmp4 = closure_29;
        }
      });
      const _Object = Object;
      const keys = Object.keys(closure_38);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp = keys[num];
        if (arg0.hasOwnProperty(tmp)) {
          let tmp2 = closure_38;
          let tmp3 = arg0[closure_38[tmp]];
          if (null != tmp3) {
            let tmp6 = closure_48;
            closure_48[tmp] = tmp3;
            let tmp7 = tmp3;
          } else {
            let tmp4 = closure_48;
            delete r9[r10];
            let tmp5 = tmp3;
          }
        }
      }
      function validateUpdate() {
        let closure_0 = closure_29;
        if (null == closure_29) {
          return false;
        } else if (!closure_35.some((arg0) => closure_0[arg0] !== closure_28[arg0])) {
          closure_29 = closure_28;
        }
      }();
    }
  },
  GUILD_SETTINGS_PROFILE_UPDATE: function handleSettingsProfileUpdate(arg0) {
    const arg1 = arg0;
    if (null != closure_31) {
      if (null != user) {
        if (user.id === tmp) {
          const item = closure_36.forEach((arg0) => {
            if (null != obj) {
              if (arg0.hasOwnProperty(arg0)) {
                if (undefined !== arg0[arg0]) {
                  const obj = {};
                  const merged = Object.assign(obj);
                  obj[arg0] = tmp3;
                }
              }
            }
          });
        }
      }
    }
    return false;
  },
  GUILD_SETTINGS_CANCEL_CHANGES: function handleCancelChanges(guildId) {
    let closure_41 = {};
    let closure_48 = {};
    const guild = store2.getGuild(guildId.guildId);
  },
  GUILD_SETTINGS_SAVE_ROUTE_STACK: function handleSaveRouteStack(state) {
    state = state.state;
    return false;
  },
  GUILD_SETTINGS_SUBMIT: function handleFormSubmit() {
    const CLOSED = FormStates.SUBMITTING;
    let closure_41 = {};
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess() {
    const CLOSED = FormStates.OPEN;
    let closure_48 = {};
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    const CLOSED = FormStates.OPEN;
    if (null == defaultGuildSettingsSection) {
      const defaultGuildSettingsSection = arg1(dependencyMap[21]).getDefaultGuildSettingsSection();
      const obj = arg1(dependencyMap[21]);
    }
    let closure_26 = null;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
    let closure_41 = errors;
  },
  GUILD_SETTINGS_SET_SECTION: function handleSetSection(section) {
    if (null == user) {
      return false;
    } else {
      ({ section: closure_25, subsection: closure_26 } = section);
      if (closure_25 !== constants.INSTANT_INVITES) {
        if (closure_25 !== constants.INVITES) {
          if (closure_25 !== constants.INTEGRATIONS) {
            if (closure_25 !== constants.ROLES) {
              if (closure_25 === constants.MEMBERS) {
                let closure_32 = getGuildEveryoneRoleId(user);
              } else if (closure_25 === constants.VANITY_URL) {
                let obj = arg1(dependencyMap[20]);
                const vanityUrl = obj.fetchVanityUrl(user.id);
              } else if (closure_25 === constants.SAFETY) {
                obj = { type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION" };
                if (null == closure_26) {
                  let SAFETY_OVERVIEW = constants2.SAFETY_OVERVIEW;
                } else {
                  SAFETY_OVERVIEW = closure_26;
                }
                obj.subsection = SAFETY_OVERVIEW;
                importDefault(dependencyMap[19]).dispatch(obj);
                const obj3 = importDefault(dependencyMap[19]);
              }
            }
          }
          closure_32 = null;
          if (tmp17 !== section.section) {
            return handleIntegrationsUpdate(section);
          }
        }
      }
      const HTTP = arg1(dependencyMap[18]).HTTP;
      obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_20.GUILD_INSTANT_INVITES(user.id) };
      const value = HTTP.get(obj);
      value.then((body) => {
        let obj = callback(closure_2[19]);
        obj = { type: "GUILD_SETTINGS_LOADED_INVITES", invites: body.body };
        obj.dispatch(obj);
      });
    }
  },
  GUILD_SETTINGS_SET_SEARCH_QUERY: function handleSetSearchQuery(searchQuery) {
    searchQuery = searchQuery.searchQuery;
  },
  GUILD_SETTINGS_LOADED_BANS: function handleLoadedBans(bans) {
    bans = bans.bans;
    let closure_57 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, new Map());
    closure_58 = closure_58 + 1;
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleLoadedBansBatch(arg0) {
    let bans;
    let guildId;
    ({ bans, guildId } = arg0);
    let tmp = closure_59 === guildId;
    if (tmp) {
      tmp = null != closure_57;
    }
    if (!tmp) {
      closure_59 = guildId;
      const _Map = Map;
      const map = new Map();
      closure_57 = map;
    }
    closure_57 = bans.reduce((set, user) => {
      if (tmp) {
        const result = set.set(user.user.id, user);
      }
      return set;
    }, closure_57);
    closure_58 = closure_58 + 1;
  },
  GUILD_SETTINGS_LOADED_INVITES: function handleLoadedInvites(invites) {
    invites = invites.invites;
    let closure_60 = invites.reduce((arg0, code) => {
      arg0[code.code] = callback(code);
      return arg0;
    }, {});
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetEmbed(enabled) {
    let closure_43 = true;
    enabled = enabled.enabled;
    let closure_45 = enabled;
    let closure_44 = enabled;
    const channelId = enabled.channelId;
    let closure_47 = channelId;
    let closure_46 = channelId;
  },
  GUILD_SETTINGS_SET_VANITY_URL: function handleSetVanityURL(code) {
    code = code.code;
    let tmp = null;
    if (null != code) {
      tmp = code;
    }
    let closure_49 = tmp;
    const uses = code.uses;
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function handleSetMFALevelSuccess(level) {
    const NONE = level.level;
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleRoleSelect(roleId) {
    roleId = roleId.roleId;
    let tmp = null;
    if (null != roleId) {
      tmp = roleId;
    }
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function handleLoadedIntegrations(integrations) {
    integrations = integrations.integrations;
  },
  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function handlePinPermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(user.features, 0);
        items[arraySpreadResult] = constants3.PIN_PERMISSION_MIGRATION_COMPLETE;
        const sum = arraySpreadResult + 1;
        const set = new Set(items);
        const user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function handleSlowmodePermissionMigrated(arg0) {
    if (null != user) {
      if (tmp === user.id) {
        const _Set = Set;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(user.features, 0);
        items[arraySpreadResult] = constants3.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
        const sum = arraySpreadResult + 1;
        const set = new Set(items);
        const user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_BAN_ADD: function handleAddBan(user) {
    user = user.user;
    let tmp2 = null != map;
    if (tmp2) {
      let tmp4 = null != user;
      if (tmp4) {
        tmp4 = user.id === tmp;
      }
      if (tmp4) {
        const obj = { user, reason: null };
        const result = map.set(user.id, obj);
        closure_58 = +closure_58 + 1;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_BAN_REMOVE: function handleRemoveBan(arg0) {
    let tmp3 = null != map;
    if (tmp3) {
      let tmp5 = null != user;
      if (tmp5) {
        tmp5 = user.id === tmp2;
      }
      if (tmp5) {
        map.delete(tmp.id);
        closure_58 = +closure_58 + 1;
      }
      tmp3 = tmp5;
    }
    return tmp3;
  },
  GUILD_ROLE_CREATE: function handleRoleCreate(guildId) {
    if (!syncGuild(guildId.guildId)) {
      return false;
    }
  },
  GUILD_ROLE_UPDATE: function handleRoleUpdate(guildId) {
    if (!syncGuild(guildId.guildId)) {
      return false;
    }
  },
  GUILD_ROLE_DELETE: function handleRoleDelete(guildId) {
    if (syncGuild(guildId.guildId)) {
      if (closure_32 === guildId.roleId) {
        closure_32 = null;
      }
    } else {
      return false;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    if (null != user) {
      if (user.id === guild.guild.id) {
        guild = store2.getGuild(user.id);
        const arg1 = guild;
        if (null == guild) {
          return false;
        } else {
          const profile = store.getProfile(user.id);
          let result = closure_25 === constants.PROFILE;
          if (!result) {
            result = closure_25 === constants.TAG;
          }
          if (!result) {
            let obj = arg1(dependencyMap[17]);
            result = obj.isServerTagDraftDirty(closure_31, profile);
          }
          if (!result) {
            closure_31 = profile;
          }
          if (closure_25 === constants.PROFILE) {
            let user = guild;
          } else {
            const importDefault = guild;
            obj = {};
            const merged = Object.assign(user);
            const dependencyMap = obj;
            const item = closure_35.forEach((arg0) => {
              if (!set.has(arg0)) {
                let tmp = "rulesChannelId" !== arg0;
                if (tmp) {
                  tmp = "publicUpdatesChannelId" !== arg0;
                }
                if (!tmp) {
                  tmp = obj[arg0] !== closure_24;
                }
                if (tmp) {
                  tmp = "features" !== arg0;
                }
                if (tmp) {
                  if ("ownerConfiguredContentLevel" !== arg0) {
                    let tmp7 = obj[arg0];
                  } else {
                    tmp7 = guild[arg0];
                  }
                  closure_1 = closure_8(closure_1, arg0, tmp7);
                  const tmp4 = closure_8;
                  const tmp5 = closure_1;
                }
              }
            });
            user = importDefault;
          }
        }
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (null != user) {
      if (user.id === guild.guild.id) {
        handleFormClose();
      }
    }
    return false;
  },
  GUILD_PROFILE_FETCH_SUCCESS: function handleProfileFetch(profile) {
    profile = profile.profile;
    let id;
    if (null != user) {
      id = user.id;
    }
    let tmp2 = profile.id === id;
    if (tmp2) {
      const tmp7 = !arg1(dependencyMap[17]).isServerTagDraftDirty(profile, profile);
      tmp2 = tmp7;
      const obj = arg1(dependencyMap[17]);
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE: handleProfileUpdateStart,
  GUILD_PROFILE_UPDATE_SUCCESS: function handleProfileApiUpdate(profile) {
    profile = profile.profile;
    let id;
    if (null != profile) {
      id = profile.id;
    }
    let tmp2 = null != id;
    if (tmp2) {
      const tmp5 = syncGuild(profile.id);
      if (tmp5) {
        let id1;
        if (null != user) {
          id1 = user.id;
        }
        if (profile.id === id1) {
          let closure_42 = null;
        }
      }
      tmp2 = tmp5;
      const tmp6 = tmp5;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE_FAILURE: handleProfileApiUpdateFailure,
  GUILD_PROFILE_UPDATE_VISIBILITY: handleProfileUpdateStart,
  GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function handleProfileApiUpdateVisibility(guildId) {
    guildId = guildId.guildId;
    let id;
    if (null != profile) {
      id = profile.id;
    }
    let tmp2 = null != id;
    if (tmp2) {
      const tmp5 = syncGuild(profile.id);
      if (tmp5) {
        let id1;
        if (null != user) {
          id1 = user.id;
        }
        if (guildId === id1) {
          const profile = store.getProfile(guildId);
          let closure_42 = null;
        }
      }
      tmp2 = tmp5;
      const tmp6 = tmp5;
    }
    return tmp2;
  },
  GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: handleProfileApiUpdateFailure,
  USER_CONNECTIONS_UPDATE: handleIntegrationsUpdate,
  GUILD_INTEGRATIONS_UPDATE: handleIntegrationsUpdate,
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInviteRevoke(arg0) {
    const merged = Object.assign(closure_60);
    closure_60 = {};
    delete r1[r0];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(closure_60);
    obj[invite.invite.code] = _createInvite(invite.invite);
    closure_60 = obj;
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function handleGuildMetadataServerUpdate(metadata) {
    metadata = metadata.metadata;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (false === closure_54) {
        closure_54 = true;
      }
      const obj = {};
      let primaryCategoryId = metadata.primaryCategoryId;
      if (null == primaryCategoryId) {
        primaryCategoryId = DEFAULT_DISCOVERY_CATEGORY_ID;
      }
      obj.primaryCategoryId = primaryCategoryId;
      let secondaryCategoryIds = metadata.secondaryCategoryIds;
      if (null == secondaryCategoryIds) {
        secondaryCategoryIds = [];
      }
      obj.secondaryCategoryIds = secondaryCategoryIds;
      let keywords = metadata.keywords;
      if (null == keywords) {
        keywords = [];
      }
      obj.keywords = keywords;
      const emojiDiscoverabilityEnabled = metadata.emojiDiscoverabilityEnabled;
      let flag3 = true;
      if (null != emojiDiscoverabilityEnabled) {
        flag3 = emojiDiscoverabilityEnabled;
      }
      obj.emojiDiscoverabilityEnabled = flag3;
      const partnerActionedTimestamp = metadata.partnerActionedTimestamp;
      let tmp5 = null;
      if (null != partnerActionedTimestamp) {
        tmp5 = partnerActionedTimestamp;
      }
      obj.partnerActionedTimestamp = tmp5;
      const partnerApplicationTimestamp = metadata.partnerApplicationTimestamp;
      let tmp6 = null;
      if (null != partnerApplicationTimestamp) {
        tmp6 = partnerApplicationTimestamp;
      }
      obj.partnerApplicationTimestamp = tmp6;
      const isPublished = metadata.isPublished;
      obj.isPublished = null != isPublished && isPublished;
      let reasonsToJoin = metadata.reasonsToJoin;
      if (null == reasonsToJoin) {
        reasonsToJoin = [];
      }
      obj.reasonsToJoin = reasonsToJoin;
      let socialLinks = metadata.socialLinks;
      if (null == socialLinks) {
        socialLinks = [];
      }
      obj.socialLinks = socialLinks;
      const about = metadata.about;
      let str = "";
      if (null != about) {
        str = about;
      }
      obj.about = str;
      let closure_41 = {};
    }
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function handleGuildMetadataFetchFail() {
    let closure_56 = obj;
    let closure_55 = obj;
  },
  GUILD_DISCOVERY_CATEGORY_ADD: function handleGuildCategoryAdd(categoryId) {
    categoryId = categoryId.categoryId;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      let obj = {};
      const merged = Object.assign(obj);
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
      items[arraySpreadResult] = categoryId;
      const sum = arraySpreadResult + 1;
      obj["secondaryCategoryIds"] = items;
      obj = {};
      const merged1 = Object.assign(obj);
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
      items1[arraySpreadResult] = categoryId;
      const sum1 = arraySpreadResult + 1;
      obj["secondaryCategoryIds"] = items1;
    }
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function handleGuildCategoryDelete(categoryId) {
    categoryId = categoryId.categoryId;
    if (null != user) {
      if (tmp === user.id) {
        const secondaryCategoryIds = obj.secondaryCategoryIds;
        const index = secondaryCategoryIds.indexOf(categoryId);
        if (-1 !== index) {
          const items = [];
          HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
          items.splice(index, 1);
          let obj = {};
          const merged = Object.assign(obj);
          obj["secondaryCategoryIds"] = items;
        }
        const secondaryCategoryIds1 = obj.secondaryCategoryIds;
        const index1 = secondaryCategoryIds1.indexOf(categoryId);
        if (-1 !== index1) {
          const items1 = [];
          HermesBuiltin.arraySpread(obj.secondaryCategoryIds, 0);
          items1.splice(index1, 1);
          obj = {};
          const merged1 = Object.assign(obj);
          obj["secondaryCategoryIds"] = items1;
        }
      }
    }
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function handleGuildCategoryUpdateFail(errors) {
    errors = errors.errors;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (null == errors) {
        errors = {};
      }
      let closure_41 = errors;
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function handleGuildUpdateMetadata(arg0) {
    let about;
    let emojiDiscoverabilityEnabled;
    let isPublished;
    let keywords;
    let primaryCategoryId;
    let reasonsToJoin;
    let socialLinks;
    ({ primaryCategoryId, keywords, emojiDiscoverabilityEnabled, isPublished, reasonsToJoin, socialLinks, about } = arg0);
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      const obj = {};
      const merged = Object.assign(obj);
      if (null == primaryCategoryId) {
        primaryCategoryId = obj.primaryCategoryId;
      }
      obj["primaryCategoryId"] = primaryCategoryId;
      if (null == keywords) {
        keywords = obj.keywords;
      }
      obj["keywords"] = keywords;
      if (null == emojiDiscoverabilityEnabled) {
        emojiDiscoverabilityEnabled = obj.emojiDiscoverabilityEnabled;
      }
      obj["emojiDiscoverabilityEnabled"] = emojiDiscoverabilityEnabled;
      if (null == isPublished) {
        isPublished = obj.isPublished;
      }
      obj["isPublished"] = isPublished;
      if (null == reasonsToJoin) {
        reasonsToJoin = obj.reasonsToJoin;
      }
      obj["reasonsToJoin"] = reasonsToJoin;
      if (null == socialLinks) {
        socialLinks = obj.socialLinks;
      }
      obj["socialLinks"] = socialLinks;
      if (null == about) {
        about = obj.about;
      }
      obj["about"] = about;
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function handleGuildUpdateMetadataFail(errors) {
    errors = errors.errors;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (null == errors) {
        errors = {};
      }
      let closure_41 = errors;
    }
  },
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function handleGuildDiscoverySlugFetchSuccess(slug) {
    slug = slug.slug;
  },
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: function handleGuildDiscoverySlugFetchFail(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_34 = null;
    }
  },
  GUILD_SETTINGS_WIDGET_UPDATE: function handleWidgetUpdate(arg0) {
    if (null != user) {
      if (user.id === tmp) {
        let closure_45 = tmp2;
        let closure_47 = tmp3;
      }
    }
    return false;
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[19]), obj);
const tmp3 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_settings/GuildSettingsStore.tsx");

export default tmp5;
export const EMPTY_METADATA = obj;
