// Module ID: 8483
// Function ID: 67502
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1388, 8461, 1352, 1391, 7544, 1857, 1838, 1849, 653, 8484, 7811, 21, 8485, 507, 686, 8487, 1387, 8488, 3712, 8489, 22, 587, 566, 2]

// Module 8483 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_5 from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import canUseMobileServerTagSettings from "canUseMobileServerTagSettings";
import closure_7 from "_isNativeReflectConstruct";
import { set } from "constructInPlace";
import closure_9 from "_isNativeReflectConstruct";
import { createChannelRecordFromInvite as closure_10 } from "_callSuper";
import { getGuildEveryoneRoleId } from "isGuildOwner";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import { DEFAULT_DISCOVERY_CATEGORY_ID } from "DEFAULT_DISCOVERY_CATEGORY_ID";
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import set from "_possibleConstructorReturn";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_23;
let closure_24;
const require = arg1;
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
        guild = store2.getGuild(guildId);
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
    let closure_45 = c44;
    let closure_47 = c46;
    const OPEN = FormStates.OPEN;
    let closure_41 = {};
    let c42 = null;
    let closure_32 = importDefault(21).castGuildIdAsEveryoneGuildRoleId(guildId);
    const mfaLevel = guild.mfaLevel;
    let closure_56 = obj;
    let c34 = null;
    let closure_48 = {};
    location = location.location;
    if (section === constants.TAG) {
      obj = require(8485) /* canUseMobileServerTagSettings */;
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
    const obj5 = importDefault(21);
  }
}
function handleFormClose() {
  let c39 = false;
  const CLOSED = FormStates.CLOSED;
  let c29 = null;
  let c28 = null;
  let c43 = false;
  let c45 = false;
  let c47 = null;
  let c49 = null;
  let c50 = 0;
  let c57 = null;
  let c60 = null;
  let c61 = null;
  let c25 = null;
  let c26 = null;
  let c27 = null;
  const NONE = MFALevels.NONE;
  let closure_48 = {};
  let c33;
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
    fromInviteGuildResult = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(code.guild);
    const obj2 = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
  }
  obj.guild = fromInviteGuildResult;
  ({ uses: obj.uses, max_uses: obj.maxUses, max_age: obj.maxAge } = code);
  const created_at = code.created_at;
  let tmp10;
  if (null != created_at) {
    tmp10 = created_at;
  }
  obj.createdAt = importDefault(3712)(tmp10);
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
      const guildIntegrationsApplications = require(8489) /* _fetchGuildIntegrationsApplications */.fetchGuildIntegrationsApplications(user.id);
      const obj = require(8489) /* _fetchGuildIntegrationsApplications */;
    }
    tmp = tmp4;
  }
  return tmp;
}
function handleProfileUpdateStart(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      let c42 = null;
    }
  }
  return false;
}
function handleProfileApiUpdateFailure(arg0) {
  if (null != user) {
    if (user.id === tmp) {
      let c42 = tmp2;
    }
  }
  return false;
}
const FormStates = ME.FormStates;
const MFALevels = ME.MFALevels;
({ GuildSettingsSections: closure_18, GuildSettingsSubsections: closure_19, Endpoints: closure_20, GuildFeatures: closure_21 } = ME);
({ PUBLIC_SUCCESS_MODAL_SEEN_KEY: closure_23, CREATE_NEW_CHANNEL_VALUE: closure_24 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
let closure_35 = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "ownerConfiguredContentLevel", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled", "officialMessageColor", "verificationRoleId"];
let closure_36 = ["brandColorPrimary", "description", "icon", "name", "traits", "visibility", "gameApplicationIds", "customBanner", "tag", "badge", "badgeColorPrimary", "badgeColorSecondary"];
set = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]);
let closure_38 = { icon: "iconOriginalMd5", banner: "bannerOriginalMd5", splash: "splashOriginalMd5", discoverySplash: "discoverySplashOriginalMd5" };
let c39 = false;
let CLOSED = FormStates.CLOSED;
let closure_41 = {};
let c42 = null;
let c43 = false;
let c44 = false;
let c45 = false;
let c46 = null;
let c47 = null;
let closure_48 = {};
let c49 = null;
let c50 = 0;
let NONE = MFALevels.NONE;
let c52 = null;
let obj = { primaryCategoryId: DEFAULT_DISCOVERY_CATEGORY_ID, secondaryCategoryIds: [], keywords: [], emojiDiscoverabilityEnabled: true, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: false, reasonsToJoin: [], socialLinks: [], about: "" };
let c54 = false;
let c57 = null;
let c58 = 0;
let c59 = null;
let c60 = null;
let c61 = null;
let tmp5 = ((Store) => {
  class GuildSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildSettingsStore);
      obj = outer1_6(GuildSettingsStore);
      tmp2 = outer1_5;
      if (outer1_62()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_14, outer1_9, outer1_15);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getMetadata",
    value() {
      return outer1_56;
    }
  };
  items[1] = obj;
  obj = {
    key: "widgetHasChanges",
    value() {
      let tmp = false !== outer1_43;
      if (tmp) {
        let tmp4 = outer1_45 !== outer1_44;
        if (!tmp4) {
          tmp4 = outer1_47 !== outer1_46;
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
      let widgetHasChangesResult = !outer1_1(outer1_2[25]).isEqual(outer1_29, outer1_28);
      if (!widgetHasChangesResult) {
        widgetHasChangesResult = !outer1_1(outer1_2[25]).isEqual(outer1_56, outer1_55);
        const obj2 = outer1_1(outer1_2[25]);
      }
      if (!widgetHasChangesResult) {
        widgetHasChangesResult = !outer1_1(outer1_2[25]).isEqual(outer1_31, outer1_30);
        const obj3 = outer1_1(outer1_2[25]);
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
      return outer1_39;
    }
  };
  items[5] = {
    key: "getSavedRouteState",
    value() {
      return outer1_33;
    }
  };
  items[6] = {
    key: "getSection",
    value() {
      return outer1_25;
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
      if (null != outer1_29) {
        id = outer1_29.id;
      }
      return id;
    }
  };
  items[9] = {
    key: "showPublicSuccessModal",
    value() {
      const Storage = GuildSettingsStore(outer1_2[26]).Storage;
      return !Storage.get(outer1_23);
    }
  };
  items[10] = {
    key: "getGuild",
    value() {
      return outer1_29;
    }
  };
  items[11] = {
    key: "getPendingOriginalMd5s",
    value() {
      return outer1_48;
    }
  };
  items[12] = {
    key: "getGuildProfile",
    value() {
      return outer1_31;
    }
  };
  items[13] = {
    key: "getWidget",
    value() {
      return { enabled: outer1_45, channelId: outer1_47 };
    }
  };
  items[14] = {
    key: "isSubmitting",
    value() {
      return outer1_40 === outer1_16.SUBMITTING;
    }
  };
  items[15] = {
    key: "isGuildMetadataLoaded",
    value() {
      return outer1_54;
    }
  };
  items[16] = {
    key: "getErrors",
    value() {
      return outer1_41;
    }
  };
  items[17] = {
    key: "getError",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_41[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[18] = {
    key: "getProfileError",
    value() {
      return outer1_42;
    }
  };
  items[19] = {
    key: "getSelectedRoleId",
    value() {
      return outer1_32;
    }
  };
  items[20] = {
    key: "getSlug",
    value() {
      return outer1_34;
    }
  };
  items[21] = {
    key: "getBans",
    value() {
      const items = [outer1_57, outer1_58];
      return items;
    }
  };
  items[22] = {
    key: "getProps",
    value() {
      return { submitting: this.isSubmitting(), integrations: outer1_61, section: outer1_25, subsection: outer1_26, errors: outer1_41, guild: outer1_29, bans: outer1_57, bansVersion: outer1_58, invites: outer1_60, selectedRoleId: outer1_32, fetchedEmbed: outer1_43, embedEnabled: outer1_45, embedChannelId: outer1_47, mfaLevel: outer1_51, searchQuery: outer1_27, vanityURLCode: outer1_49, vanityURLUses: outer1_50, originalGuild: outer1_28, hasChanges: this.hasChanges(), guildMetadata: outer1_56, analyticsLocation: outer1_52, isGuildMetadataLoaded: outer1_54, originalProfile: outer1_30, profile: outer1_31 };
    }
  };
  return callback(GuildSettingsStore, items);
})(require("initialize").Store);
tmp5.displayName = "GuildSettingsStore";
obj = {
  GUILD_SETTINGS_INIT: handleFormInit,
  GUILD_SETTINGS_OPEN: function handleFormOpen(arg0) {
    let c39 = true;
    handleFormInit(arg0);
  },
  GUILD_SETTINGS_CLOSE: handleFormClose,
  GUILD_SETTINGS_UPDATE: function handleUpdate(arg0) {
    let closure_0 = arg0;
    if (null == closure_29) {
      return false;
    } else {
      const item = closure_35.forEach((arg0) => {
        let hasOwnPropertyResult = null != outer1_29;
        if (hasOwnPropertyResult) {
          hasOwnPropertyResult = closure_0.hasOwnProperty(arg0);
        }
        if (hasOwnPropertyResult) {
          let tmp7 = null;
          if (null != closure_0[arg0]) {
            tmp7 = tmp6;
          }
          outer1_29 = outer1_8(outer1_29, arg0, tmp7);
          const tmp3 = outer1_8;
          const tmp4 = outer1_29;
        }
      });
      const _Object = Object;
      const keys = Object.keys(table);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp3 = keys[num];
        if (arg0.hasOwnProperty(tmp3)) {
          let tmp4 = table;
          let tmp5 = arg0[table[tmp3]];
          if (null != tmp5) {
            let tmp8 = closure_48;
            closure_48[tmp3] = tmp5;
            let tmp9 = tmp5;
          } else {
            let tmp6 = closure_48;
            delete tmp[tmp2];
            let tmp7 = tmp5;
          }
        }
      }
      (function validateUpdate() {
        let closure_0 = outer1_29;
        if (null == outer1_29) {
          return false;
        } else if (!outer1_35.some((arg0) => table[arg0] !== outer2_28[arg0])) {
          outer1_29 = outer1_28;
        }
      })();
    }
  },
  GUILD_SETTINGS_PROFILE_UPDATE: function handleSettingsProfileUpdate(arg0) {
    let closure_0 = arg0;
    if (null != closure_31) {
      if (null != user) {
        if (user.id === tmp) {
          const item = closure_36.forEach((arg0) => {
            if (null != outer1_31) {
              if (closure_0.hasOwnProperty(arg0)) {
                if (undefined !== closure_0[arg0]) {
                  const obj = {};
                  const merged = Object.assign(outer1_31);
                  obj[arg0] = tmp3;
                  outer1_31 = obj;
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
    const SUBMITTING = FormStates.SUBMITTING;
    let closure_41 = {};
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess(guild) {
    const OPEN = FormStates.OPEN;
    let closure_48 = {};
    let tmp = null != guild.guild;
    if (tmp) {
      tmp = null != fromGuildResult;
    }
    if (tmp) {
      tmp = fromGuildResult.id === guild.guild.id;
    }
    if (tmp) {
      fromGuildResult = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromGuild(guild.guild, fromGuildResult);
      const obj = require(1387) /* fromGuildPropertiesWithAdditionalFields */;
    }
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    const OPEN = FormStates.OPEN;
    if (null == defaultGuildSettingsSection) {
      defaultGuildSettingsSection = require(8488) /* getDefaultGuildSettingsSection */.getDefaultGuildSettingsSection();
      const obj = require(8488) /* getDefaultGuildSettingsSection */;
    }
    let c26 = null;
    errors = errors.errors;
    if (null == errors) {
      errors = {};
    }
  },
  GUILD_SETTINGS_SET_SECTION: function handleSetSection(section) {
    let closure_25;
    let closure_26;
    if (null == user) {
      return false;
    } else {
      ({ section: closure_25, subsection: closure_26 } = section);
      if (closure_25 !== constants.INSTANT_INVITES) {
        if (closure_25 !== constants.INVITES) {
          if (closure_25 !== constants.INTEGRATIONS) {
            if (closure_25 !== constants.ROLES) {
              if (closure_25 === constants.MEMBERS) {
                let c32 = getGuildEveryoneRoleId(user);
              } else if (closure_25 === constants.VANITY_URL) {
                let obj = require(8487) /* fetchVanityUrl */;
                const vanityUrl = obj.fetchVanityUrl(user.id);
              } else if (closure_25 === constants.SAFETY) {
                obj = { type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION" };
                if (null == closure_26) {
                  let SAFETY_OVERVIEW = constants2.SAFETY_OVERVIEW;
                } else {
                  SAFETY_OVERVIEW = closure_26;
                }
                obj.subsection = SAFETY_OVERVIEW;
                importDefault(686).dispatch(obj);
                const obj3 = importDefault(686);
              }
            }
          }
          c32 = null;
          if (tmp17 !== section.section) {
            return handleIntegrationsUpdate(section);
          }
        }
      }
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      obj = { url: closure_20.GUILD_INSTANT_INVITES(user.id), oldFormErrors: true, rejectWithError: true };
      const value = HTTP.get(obj);
      value.then((body) => {
        let obj = outer1_1(outer1_2[19]);
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
    let tmp = guildId === guildId;
    if (tmp) {
      tmp = null != closure_57;
    }
    if (!tmp) {
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
      arg0[code.code] = outer1_66(code);
      return arg0;
    }, {});
  },
  GUILD_SETTINGS_SET_WIDGET: function handleSetEmbed(enabled) {
    let c43 = true;
    enabled = enabled.enabled;
    const channelId = enabled.channelId;
  },
  GUILD_SETTINGS_SET_VANITY_URL: function handleSetVanityURL(code) {
    code = code.code;
    let tmp = null;
    if (null != code) {
      tmp = code;
    }
    let c49 = tmp;
    const uses = code.uses;
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function handleSetMFALevelSuccess(level) {
    level = level.level;
  },
  GUILD_SETTINGS_ROLE_SELECT: function handleRoleSelect(roleId) {
    roleId = roleId.roleId;
    let tmp = null;
    if (null != roleId) {
      tmp = roleId;
    }
    let closure_32 = tmp;
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
        user = set(user, "features", set);
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
        user = set(user, "features", set);
      }
    }
    return false;
  },
  GUILD_BAN_ADD: function handleAddBan(user) {
    user = user.user;
    let tmp2 = null != _null;
    if (tmp2) {
      let tmp4 = null != user;
      if (tmp4) {
        tmp4 = user.id === tmp;
      }
      if (tmp4) {
        const obj = { user, reason: null };
        const result = _null.set(user.id, obj);
        closure_58 = +closure_58 + 1;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_BAN_REMOVE: function handleRemoveBan(arg0) {
    let tmp3 = null != _null;
    if (tmp3) {
      let tmp5 = null != user;
      if (tmp5) {
        tmp5 = user.id === tmp2;
      }
      if (tmp5) {
        _null.delete(tmp.id);
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
      if (c32 === guildId.roleId) {
        c32 = null;
      }
    } else {
      return false;
    }
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    if (null != user) {
      if (user.id === guild.guild.id) {
        guild = store2.getGuild(user.id);
        if (null == guild) {
          return false;
        } else {
          const profile = store.getProfile(user.id);
          let result = closure_25 === constants.PROFILE;
          if (!result) {
            result = closure_25 === constants.TAG;
          }
          if (!result) {
            obj = guild(obj[17]);
            result = obj.isServerTagDraftDirty(closure_31, profile);
          }
          if (!result) {
            closure_31 = profile;
          }
          if (closure_25 === constants.PROFILE) {
            user = guild;
          } else {
            obj = {};
            const merged = Object.assign(user);
            const item = closure_35.forEach((arg0) => {
              if (!outer1_37.has(arg0)) {
                let tmp = "rulesChannelId" !== arg0;
                if (tmp) {
                  tmp = "publicUpdatesChannelId" !== arg0;
                }
                if (!tmp) {
                  tmp = obj[arg0] !== outer1_24;
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
                  closure_1 = outer1_8(closure_1, arg0, tmp7);
                  const tmp4 = outer1_8;
                  const tmp5 = closure_1;
                }
              }
            });
            user = guild;
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
      const tmp7 = !require(8485) /* canUseMobileServerTagSettings */.isServerTagDraftDirty(profile, profile);
      tmp2 = tmp7;
      const obj = require(8485) /* canUseMobileServerTagSettings */;
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
          let c42 = null;
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
          profile = store.getProfile(guildId);
          let c42 = null;
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
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInviteCreateSuccess(invite) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[invite.invite.code] = _createInvite(invite.invite);
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function handleGuildMetadataServerUpdate(metadata) {
    metadata = metadata.metadata;
    let tmp2 = null != user;
    if (tmp2) {
      tmp2 = tmp === user.id;
    }
    if (tmp2) {
      if (false === c54) {
        c54 = true;
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
          obj = {};
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
      let c34 = null;
    }
  },
  GUILD_SETTINGS_WIDGET_UPDATE: function handleWidgetUpdate(arg0) {
    if (null != user) {
      if (user.id === tmp) {
        let c45 = tmp2;
        let c47 = tmp3;
      }
    }
    return false;
  }
};
tmp5 = new tmp5(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsStore.tsx");

export default tmp5;
export const EMPTY_METADATA = obj;
