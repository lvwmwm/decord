// Module ID: 8482
// Function ID: 67445
// Dependencies: [5, 1909, 3759, 1194, 1917, 1838, 8483, 653, 3, 686, 507, 5717, 8490, 7941, 7938, 4942, 480, 3945, 1212, 1198, 5064, 2]

// Module 8482
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_isNativeReflectConstruct";

let Layers;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ Endpoints: closure_10, Layers, GuildSettingsSubsections: closure_11, GuildSettingsSections: closure_12, GuildFeatures: closure_13, Routes: closure_14 } = ME);
importDefaultResult = new importDefaultResult("GuildSettingsActionCreators");
let obj = {
  init(guildId, section, location, subsection) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location };
    obj.dispatch(obj);
  },
  open(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  close() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_CLOSE" });
  },
  saveRouteStack(state) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state };
    obj.dispatch(obj);
  },
  setSection(arg0, arg1) {
    let SAFETY_DM_AND_SPAM_PROTECTION = arg1;
    const guildId = store.getGuildId();
    if (null != guildId) {
      guild = guild.getGuild(guildId);
      let hasItem = null != guild;
      if (hasItem) {
        const features = guild.features;
        hasItem = features.has(constants3.COMMUNITY);
      }
      let tmp4 = arg0;
      let tmp5 = SAFETY_DM_AND_SPAM_PROTECTION;
      if (hasItem) {
        let SAFETY = arg0;
        if (arg0 === constants2.GUILD_AUTOMOD) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_AUTOMOD;
        }
        if (SAFETY === constants2.MEMBER_VERIFICATION) {
          SAFETY = constants2.SAFETY;
          SAFETY_DM_AND_SPAM_PROTECTION = constants.SAFETY_DM_AND_SPAM_PROTECTION;
        }
        tmp4 = SAFETY;
        tmp5 = SAFETY_DM_AND_SPAM_PROTECTION;
      }
      let obj = importDefault(686);
      obj = { type: "GUILD_SETTINGS_SET_SECTION", section: tmp4, subsection: tmp5 };
      obj.dispatch(obj);
    }
  },
  setSearchQuery(searchQuery) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery };
    obj.dispatch(obj);
  },
  selectRole(roleId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId, searchQuery: arg1 };
    return obj.dispatch(obj);
  },
  updateEmbed(arg0, enabled, channel_id) {
    const _require = arg0;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_10.GUILD_WIDGET(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { enabled, channel_id };
    return HTTP.patch(obj).then((body) => {
      let obj = outer1_1(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_SET_WIDGET", guildId: closure_0, enabled: body.body.enabled, channelId: body.body.channel_id };
      obj.dispatch(obj);
    });
  },
  updateMFALevel(updateMFALevelResult) {
    let guildId;
    let level;
    ({ guildId, level } = updateMFALevelResult);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_10.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj2 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level };
      return obj.dispatch(obj);
    });
  },
  updateIcon(id, base64) {
    const _require = id;
    let closure_1 = base64;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { icon: base64, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    HTTP.patch(obj).then(() => {
      let obj = base64(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_UPDATE", icon: base64 };
      obj.dispatch(obj);
      const result = base64(outer1_2[11]).checkGuildTemplateDirty(closure_0);
    }, (body) => {
      let obj = base64(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      return obj.dispatch(obj);
    });
  },
  cancelChanges(id) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_CANCEL_CHANGES", guildId: id };
    obj.dispatch(obj);
  },
  updateGuild(arg0) {
    let profile;
    let safetyAlertsChannelId;
    ({ safetyAlertsChannelId, profile } = arg0);
    let obj = Object.create(null);
    obj.safetyAlertsChannelId = 0;
    obj.profile = 0;
    obj = {};
    const merged = Object.assign(Object.assign(arg0, obj));
    if (null != profile) {
      obj = {};
      profile = obj.profile;
      if (null == profile) {
        profile = {};
      }
      const merged1 = Object.assign(profile);
      const merged2 = Object.assign(profile);
      obj.profile = obj;
    }
    if (tmp9) {
      obj.safetyAlertsChannelId = safetyAlertsChannelId;
    }
    tmp9 = null != store.getGuildId() && null != safetyAlertsChannelId;
    const merged3 = Object.assign(obj);
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_UPDATE" });
  },
  updateGuildProfile(guildId, arg1) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_PROFILE_UPDATE", guildId };
    const merged = Object.assign(arg1);
    obj.dispatch(obj);
  },
  saveGuild(id, arg1, arg2) {
    let afkChannelId;
    let afkTimeout;
    let banner;
    let defaultMessageNotifications;
    let description;
    let discoverySplash;
    let explicitContentFilter;
    let features;
    let homeHeader;
    let icon;
    let moderatorReportingEnabled;
    let name;
    let officialMessageColor;
    let ownerConfiguredContentLevel;
    let preferredLocale;
    let premiumProgressBarEnabled;
    let profile;
    let publicUpdatesChannelId;
    let rulesChannelId;
    let safetyAlertsChannelId;
    let splash;
    let systemChannelFlags;
    let systemChannelId;
    let verificationLevel;
    let verificationRoleId;
    let obj = arg2;
    const _require = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (arg2 === undefined) {
      obj = {};
    }
    obj = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      obj = { premium_progress_bar_enabled: premiumProgressBarEnabled };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    let toServerGuildProfileResult = profile;
    if (null != profile) {
      let obj3 = _require(8490);
      toServerGuildProfileResult = obj3.toServerGuildProfile(profile);
    }
    obj["profile"] = toServerGuildProfileResult;
    obj["moderator_reporting_enabled"] = moderatorReportingEnabled;
    obj["official_message_color"] = officialMessageColor;
    obj["verification_role_id"] = verificationRoleId;
    obj(686).dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = store.getPendingOriginalMd5s();
    const obj5 = obj(686);
    const obj6 = obj(7941);
    const headersForMd5 = obj6.buildHeadersForMd5({ [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash });
    const HTTP = _require(507).HTTP;
    const obj2 = { url: closure_10.GUILD(id), query: obj3, body: obj, headers: headersForMd5, oldFormErrors: true };
    obj3 = { for_discovery: obj.isForDiscovery };
    const obj1 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    obj2.rejectWithError = _require(507).rejectWithMigratedError();
    const obj10 = _require(507);
    return HTTP.patch(obj2).then((body) => {
      obj = obj(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      obj.dispatch(obj);
      const result = obj(outer1_2[11]).checkGuildTemplateDirty(closure_0);
    }, (errors) => {
      obj = obj(outer1_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      obj.dispatch(obj);
      obj = { errors: errors.body };
      outer1_15.error("Failed to save guild settings", obj);
      if (obj.throwErr) {
        throw errors.body;
      }
    });
  },
  updateGuildModeration(id, verificationLevel) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { verification_level: verificationLevel.verificationLevel, explicit_content_filter: verificationLevel.explicitContentFilter, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((arg0) => {
      const result = outer1_1(outer1_2[11]).checkGuildTemplateDirty(closure_0);
      return arg0;
    });
  },
  updateGuildPremiumProgressBar(id, premium_progress_bar_enabled) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { premium_progress_bar_enabled, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((arg0) => {
      const result = outer1_1(outer1_2[11]).checkGuildTemplateDirty(closure_0);
      return arg0;
    });
  },
  transferOwnership(id, id2, EMAIL, arg3) {
    let tmp = EMAIL;
    let tmp2 = arg3;
    if (EMAIL === undefined) {
      tmp = null;
    }
    if (tmp2 === undefined) {
      tmp2 = null;
    }
    let obj = importDefault(4942);
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { owner_id: id2, code: tmp2 };
    const obj2 = { guild_id: id, verification_type: tmp };
    obj.trackedActionData = { event: require(480) /* isThrottled */.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    const obj1 = { event: require(480) /* isThrottled */.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.patch(obj);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = importDefault(4942);
    obj = { url: closure_10.GUILD_PINCODE(id), oldFormErrors: true };
    obj = { event: require(480) /* isThrottled */.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: obj1 };
    obj1 = { guild_id: id, is_resend: flag };
    obj.trackedActionData = obj;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.put(obj);
  },
  deleteGuild(arg0) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj2 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then(() => {
      outer1_16.close();
    });
  },
  leaveGuild(id) {
    let flag = arg1;
    let closure_0 = id;
    if (arg1 === undefined) {
      flag = false;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateMemberRoles(arg0, arg1, arg2, arg3, arg4) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    let _isNativeReflectConstruct = arg4;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  bulkAddMemberRoles(id, id2, keys) {
    const _require = id;
    let closure_1 = id2;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_10.GUILD_ROLE_MEMBERS(id, id2), body: obj };
    obj = { member_ids: keys, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((added) => {
      let obj = id2(outer1_2[9]);
      obj = { type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: closure_0, roleId: id2, added: added.body };
      obj.dispatch(obj);
    });
  },
  enableIntegration(id, type, id2) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATIONS(id), body: obj, oldFormErrors: true };
    obj = { type, id: id2, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  disableIntegration(id, id2) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_INTEGRATION(guildId, id), body: obj, oldFormErrors: true };
    obj = { expire_behavior, expire_grace_period, enable_emoticons, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  syncIntegration(guildId, id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    HTTP.post(obj);
  },
  migratePinPermission(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  migrateSlowmodePermission(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  migratePermissions(arg0, arg1) {
    let dependencyMap;
    let importDefault;
    let closure_0 = arg0;
    ({ migratePin: importDefault, migrateSlowmode: dependencyMap } = arg1);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/GuildSettingsActionCreators.tsx");

export default obj;
