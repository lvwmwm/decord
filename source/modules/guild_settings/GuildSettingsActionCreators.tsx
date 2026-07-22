// Module ID: 8432
// Function ID: 67180
// Dependencies: []

// Module 8432
let Layers;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ Endpoints: closure_10, Layers, GuildSettingsSubsections: closure_11, GuildSettingsSections: closure_12, GuildFeatures: closure_13, Routes: closure_14 } = arg1(dependencyMap[7]));
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("GuildSettingsActionCreators");
const obj = {
  init(guildId, section, location, subsection) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "GUILD_SETTINGS_INIT", guildId, section, subsection, location };
    obj.dispatch(obj);
  },
  open(arg0, arg1, arg2, arg3) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  close() {
    importDefault(dependencyMap[9]).dispatch({ type: "GUILD_SETTINGS_CLOSE" });
  },
  saveRouteStack(state) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "GUILD_SETTINGS_SAVE_ROUTE_STACK", state };
    obj.dispatch(obj);
  },
  setSection(arg0, arg1) {
    let SAFETY_DM_AND_SPAM_PROTECTION = arg1;
    const guildId = store.getGuildId();
    if (null != guildId) {
      const guild = guild.getGuild(guildId);
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
      let obj = importDefault(dependencyMap[9]);
      obj = { type: "GUILD_SETTINGS_SET_SECTION", section: tmp4, subsection: tmp5 };
      obj.dispatch(obj);
    }
  },
  setSearchQuery(searchQuery) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "GUILD_SETTINGS_SET_SEARCH_QUERY", searchQuery };
    obj.dispatch(obj);
  },
  selectRole(roleId) {
    let obj = importDefault(dependencyMap[9]);
    obj = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId, searchQuery: arg1 };
    return obj.dispatch(obj);
  },
  updateEmbed(arg0, enabled, channel_id) {
    enabled = arg0;
    const HTTP = enabled(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD_WIDGET(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { enabled, channel_id };
    return HTTP.patch(obj).then((body) => {
      let obj = callback(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_SET_WIDGET", guildId: body, enabled: body.body.enabled, channelId: body.body.channel_id };
      obj.dispatch(obj);
    });
  },
  updateMFALevel(updateMFALevelResult) {
    let guildId;
    let level;
    ({ guildId, level } = updateMFALevelResult);
    const HTTP = arg1(dependencyMap[10]).HTTP;
    const obj = { url: closure_10.GUILD_MFA(guildId), body: { level }, oldFormErrors: true, rejectWithError: arg1(dependencyMap[10]).rejectWithMigratedError() };
    const obj2 = arg1(dependencyMap[10]);
    return HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_SET_MFA_SUCCESS", level: body.body.level };
      return obj.dispatch(obj);
    });
  },
  updateIcon(id, base64) {
    base64 = id;
    const importDefault = base64;
    const HTTP = base64(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { icon: base64, rejectWithError: base64(dependencyMap[10]).rejectWithMigratedError() };
    const obj3 = base64(dependencyMap[10]);
    HTTP.patch(obj).then(() => {
      let obj = arg1(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_UPDATE", icon: arg1 };
      obj.dispatch(obj);
      const result = arg1(closure_2[11]).checkGuildTemplateDirty(arg0);
    }, (body) => {
      let obj = arg1(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: body.body };
      return obj.dispatch(obj);
    });
  },
  cancelChanges(id) {
    let obj = importDefault(dependencyMap[9]);
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
    const tmp9 = null != store.getGuildId() && null != safetyAlertsChannelId;
    const merged3 = Object.assign(obj);
    importDefault(dependencyMap[9]).dispatch({ type: "GUILD_SETTINGS_UPDATE" });
  },
  updateGuildProfile(guildId, arg1) {
    let obj = importDefault(dependencyMap[9]);
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
    arg1 = id;
    ({ premiumProgressBarEnabled, profile } = arg1);
    ({ name, description, icon, splash, banner, homeHeader, afkChannelId, afkTimeout, systemChannelId, verificationLevel, defaultMessageNotifications, explicitContentFilter, features, systemChannelFlags, preferredLocale, rulesChannelId, safetyAlertsChannelId, ownerConfiguredContentLevel, discoverySplash, publicUpdatesChannelId, moderatorReportingEnabled, officialMessageColor, verificationRoleId } = arg1);
    if (arg2 === undefined) {
      obj = {};
    }
    const importDefault = obj;
    obj = { name, description, icon, splash, banner, home_header: homeHeader, features, preferred_locale: preferredLocale, afk_channel_id: afkChannelId, afk_timeout: afkTimeout, system_channel_id: systemChannelId, verification_level: verificationLevel, default_message_notifications: defaultMessageNotifications, explicit_content_filter: explicitContentFilter, system_channel_flags: systemChannelFlags, rules_channel_id: rulesChannelId, owner_configured_content_level: ownerConfiguredContentLevel, discovery_splash: discoverySplash, public_updates_channel_id: publicUpdatesChannelId, safety_alerts_channel_id: safetyAlertsChannelId };
    let tmp = null;
    if (null != premiumProgressBarEnabled) {
      obj = { premium_progress_bar_enabled: premiumProgressBarEnabled };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    let toServerGuildProfileResult = profile;
    if (null != profile) {
      let obj3 = arg1(dependencyMap[12]);
      toServerGuildProfileResult = obj3.toServerGuildProfile(profile);
    }
    obj["profile"] = toServerGuildProfileResult;
    obj["moderator_reporting_enabled"] = moderatorReportingEnabled;
    obj["official_message_color"] = officialMessageColor;
    obj["verification_role_id"] = verificationRoleId;
    importDefault(dependencyMap[9]).dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const pendingOriginalMd5s = store.getPendingOriginalMd5s();
    const obj5 = importDefault(dependencyMap[9]);
    const obj6 = importDefault(dependencyMap[13]);
    const headersForMd5 = obj6.buildHeadersForMd5({ [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash });
    const HTTP = arg1(dependencyMap[10]).HTTP;
    const obj2 = { url: closure_10.GUILD(id), query: obj3, body: obj, headers: headersForMd5, oldFormErrors: true };
    obj3 = { for_discovery: obj.isForDiscovery };
    const obj1 = { [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_ICON]: pendingOriginalMd5s.icon, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_BANNER]: pendingOriginalMd5s.banner, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_INVITE_SPLASH]: pendingOriginalMd5s.splash, [closure_0(closure_2[14]).SafetyScannedUploadSurface.GUILD_DISCOVERY_SPLASH]: pendingOriginalMd5s.discoverySplash };
    obj2.rejectWithError = arg1(dependencyMap[10]).rejectWithMigratedError();
    const obj10 = arg1(dependencyMap[10]);
    return HTTP.patch(obj2).then((body) => {
      let obj = obj(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_SUCCESS", guild: body.body };
      obj.dispatch(obj);
      const result = obj(closure_2[11]).checkGuildTemplateDirty(body);
    }, (errors) => {
      let obj = obj(closure_2[9]);
      obj = { type: "GUILD_SETTINGS_SUBMIT_FAILURE", errors: errors.body };
      obj.dispatch(obj);
      obj = { errors: errors.body };
      closure_15.error("Failed to save guild settings", obj);
      if (obj.throwErr) {
        throw errors.body;
      }
    });
  },
  updateGuildModeration(id, verificationLevel) {
    verificationLevel = id;
    const HTTP = verificationLevel(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { verification_level: verificationLevel.verificationLevel, explicit_content_filter: verificationLevel.explicitContentFilter, rejectWithError: verificationLevel(dependencyMap[10]).rejectWithMigratedError() };
    const obj3 = verificationLevel(dependencyMap[10]);
    return HTTP.patch(obj).then((arg0) => {
      const result = callback(closure_2[11]).checkGuildTemplateDirty(arg0);
      return arg0;
    });
  },
  updateGuildPremiumProgressBar(id, premium_progress_bar_enabled) {
    premium_progress_bar_enabled = id;
    const HTTP = premium_progress_bar_enabled(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { premium_progress_bar_enabled, rejectWithError: premium_progress_bar_enabled(dependencyMap[10]).rejectWithMigratedError() };
    const obj3 = premium_progress_bar_enabled(dependencyMap[10]);
    return HTTP.patch(obj).then((arg0) => {
      const result = callback(closure_2[11]).checkGuildTemplateDirty(arg0);
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
    let obj = importDefault(dependencyMap[15]);
    obj = { url: closure_10.GUILD(id), body: obj, oldFormErrors: true };
    obj = { owner_id: id2, code: tmp2 };
    const obj2 = { guild_id: id, verification_type: tmp };
    obj.trackedActionData = { event: id2(dependencyMap[16]).NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    const obj1 = { event: id2(dependencyMap[16]).NetworkActionNames.GUILD_TRANSFER_OWNERSHIP, properties: obj2 };
    obj.rejectWithError = id2(dependencyMap[10]).rejectWithMigratedError();
    return obj.patch(obj);
  },
  sendTransferOwnershipPincode(id, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = importDefault(dependencyMap[15]);
    obj = { url: closure_10.GUILD_PINCODE(id), oldFormErrors: true };
    obj = { event: arg1(dependencyMap[16]).NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE, properties: obj1 };
    const obj1 = { guild_id: id, is_resend: flag };
    obj.trackedActionData = obj;
    obj.rejectWithError = arg1(dependencyMap[10]).rejectWithMigratedError();
    return obj.put(obj);
  },
  deleteGuild(arg0) {
    const HTTP = arg1(dependencyMap[10]).HTTP;
    const obj = { url: closure_10.GUILD_DELETE(arg0), oldFormErrors: true, rejectWithError: arg1(dependencyMap[10]).rejectWithMigratedError() };
    const obj2 = arg1(dependencyMap[10]);
    return HTTP.post(obj).then(() => {
      closure_16.close();
    });
  },
  leaveGuild(id) {
    let flag = arg1;
    const arg1 = id;
    if (arg1 === undefined) {
      flag = false;
    }
    const importDefault = flag;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateMemberRoles(arg0, arg1, arg2, arg3, arg4) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  bulkAddMemberRoles(id, id2, keys) {
    id2 = id;
    const importDefault = id2;
    const HTTP = id2(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD_ROLE_MEMBERS(id, id2), body: obj };
    obj = { member_ids: keys, rejectWithError: id2(dependencyMap[10]).rejectWithMigratedError() };
    const obj3 = id2(dependencyMap[10]);
    return HTTP.patch(obj).then((added) => {
      let obj = arg1(closure_2[9]);
      obj = { type: "GUILD_ROLE_MEMBER_BULK_ADD", guildId: added, roleId: arg1, added: added.body };
      obj.dispatch(obj);
    });
  },
  enableIntegration(id, type, id2) {
    const HTTP = type(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD_INTEGRATIONS(id), body: obj, oldFormErrors: true };
    obj = { type, id: id2, rejectWithError: type(dependencyMap[10]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  disableIntegration(id, id2) {
    const HTTP = id2(dependencyMap[10]).HTTP;
    const obj = { url: closure_10.GUILD_INTEGRATION(id, id2), oldFormErrors: true, rejectWithError: id2(dependencyMap[10]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  updateIntegration(guildId, id, expire_behavior, expire_grace_period, enable_emoticons) {
    const HTTP = id(dependencyMap[10]).HTTP;
    let obj = { url: closure_10.GUILD_INTEGRATION(guildId, id), body: obj, oldFormErrors: true };
    obj = { expire_behavior, expire_grace_period, enable_emoticons, rejectWithError: id(dependencyMap[10]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  syncIntegration(guildId, id) {
    const HTTP = id(dependencyMap[10]).HTTP;
    const obj = { url: closure_10.GUILD_INTEGRATION_SYNC(guildId, id), oldFormErrors: true, rejectWithError: id(dependencyMap[10]).rejectWithMigratedError() };
    HTTP.post(obj);
  },
  migratePinPermission(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  migrateSlowmodePermission(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  migratePermissions(arg0, arg1) {
    arg1 = arg0;
    ({ migratePin: closure_1, migrateSlowmode: closure_2 } = arg1);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_settings/GuildSettingsActionCreators.tsx");

export default obj;
