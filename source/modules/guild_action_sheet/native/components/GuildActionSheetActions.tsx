// Module ID: 12787
// Function ID: 97991
// Name: HideMutedChannelsOption
// Dependencies: []
// Exports: GuildActionSheetDirectoryActions, GuildActionSheetPrimaryActions, GuildActionSheetSecondaryActions, GuildDeveloperOptionAction, GuildUnreadAction

// Module 12787 (HideMutedChannelsOption)
function HideMutedChannelsOption(guild) {
  const arg1 = guild.guild;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => guildCollapsed.isGuildCollapsed(guild.id));
  obj = {};
  const intl = arg1(dependencyMap[19]).intl;
  obj.label = intl.string(arg1(dependencyMap[19]).t.UwOLJO);
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange() {
    return callback(closure_2[20]).toggleCollapseGuild(guild.id);
  };
  return callback3(arg1(dependencyMap[18]).ActionSheetSwitchRow, obj);
}
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[22]);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[23]).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  const tmp = importDefault(dependencyMap[21])(guild);
  const items = [closure_11];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => closure_11.hasUnread(guild.id, constants.GUILD_ONBOARDING_QUESTION));
  const obj2 = arg1(dependencyMap[17]);
  const items1 = [closure_5];
  const items2 = [guild.id];
  const stateFromStores1 = arg1(dependencyMap[17]).useStateFromStores(items1, () => newChannelIds.getNewChannelIds(guild.id).size > guild(closure_2[24]).MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = React.useCallback(() => {
    let obj = callback(paths[25]);
    obj.hideActionSheet();
    obj = { guildId: guild.id };
    callback(paths[26]).pushLazy(guild(paths[28])(paths[27], paths.paths), obj, closure_18);
  }, items2);
  if (!features.has(constants.COMMUNITY)) {
    return null;
  } else {
    obj = {};
    if (result) {
      if (!stateFromStores) {
        let tmp10 = null;
      }
      obj.trailing = tmp10;
      obj.onPress = callback;
      const intl = arg1(dependencyMap[19]).intl;
      const string = intl.string;
      let h9mGOP = arg1(dependencyMap[19]).t;
      if (tmp) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj.label = stringResult;
      tmp6(tmp9, obj);
    }
    tmp10 = callback3(arg1(dependencyMap[29]).NewBadge, {});
    const tmp6 = callback3;
  }
}
function ChangeIdentityOption(arg0) {
  let guild;
  let user;
  ({ guild, user } = arg0);
  const tmp = callback5();
  let obj = importDefault(dependencyMap[30]);
  const nickname = obj.getNickname(guild.id, undefined, user);
  const callback = importDefault(dependencyMap[33])({ guild, analyticsLocations: importDefault(dependencyMap[31])(importDefault(dependencyMap[32]).GUILD_SETTINGS).analyticsLocations });
  obj = {};
  const intl = callback(dependencyMap[19]).intl;
  const features = guild.features;
  const hasItem = features.has(constants.HUB);
  const t = callback(dependencyMap[19]).t;
  obj.label = intl.string(hasItem ? t.+MWrWt : t.PKQB/H);
  let tmp6 = nickname;
  if (null != user) {
    tmp6 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      obj = { style: tmp.identitySublabel };
      const obj1 = { size: callback(dependencyMap[34]).AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const items = [callback3(callback(dependencyMap[34]).Avatar, obj1), ];
      const obj2 = { user, nick: nickname };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = callback3(importDefault(dependencyMap[35]), obj2);
      obj.children = items;
      tmp6 = callback4(View, obj);
    }
  }
  obj.subLabel = tmp6;
  obj.onPress = function onPress() {
    callback2(closure_2[25]).hideActionSheet();
    callback();
  };
  return callback3(callback(dependencyMap[18]).ActionSheetRow, obj);
}
function GuildThemePreferenceOption(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_6];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp4 = null;
  if (tmp) {
    obj = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.CFzDOG);
    obj.value = stateFromStores === arg1(dependencyMap[37]).GuildThemeSourcePreference.GUILD;
    obj.onValueChange = tmp3;
    tmp4 = callback3(arg1(dependencyMap[18]).ActionSheetSwitchRow, obj);
  }
  return tmp4;
}
function ServerTagOption(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[39]);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    let obj1 = arg1(dependencyMap[41]);
    const profile = guild.profile;
    let badge;
    if (null != profile) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = obj1.getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    obj = {};
    obj = { style: tmp.serverTagLabel };
    obj1 = { "Null": "showAllButtonUnderline", "Null": "ynfFaI" };
    const obj2 = {};
    const profile2 = guild.profile;
    let tag;
    if (null != profile2) {
      tag = profile2.tag;
    }
    let tmp20;
    if (null != tag) {
      tmp20 = tag;
    }
    obj2.guildTag = tmp20;
    obj2.guildBadge = guildTagBadgeUrl;
    obj2.badgeSize = GuildTagBadgeSize.SIZE_16;
    obj1.children = callback3(arg1(dependencyMap[42]).BaseGuildTagChiplet, obj2);
    const items = [callback3(View, obj1), ];
    const obj3 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    const intl = arg1(dependencyMap[19]).intl;
    obj3.children = intl.string(arg1(dependencyMap[19]).t.2QmKZ2);
    items[1] = callback3(arg1(dependencyMap[43]).Text, obj3);
    obj.children = items;
    obj.label = closure_22(View, obj);
    obj.onPress = tmp3;
    return callback3(arg1(dependencyMap[18]).ActionSheetRow, obj);
  } else {
    return null;
  }
  const tmp = callback5();
}
class RestrictedGuildPrivacyOption {
  constructor(arg0) {
    guild = global.guild;
    arg1 = guild;
    RestrictedGuildIds = arg1(dependencyMap[44]).RestrictedGuildIds;
    setting = RestrictedGuildIds.useSetting();
    hasItem = setting.includes(guild.id);
    tmp2 = jsx;
    obj = {};
    intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.KXNTgb);
    features = guild.features;
    hasItem1 = features.has(GuildFeatures.HUB);
    intl2 = arg1(dependencyMap[19]).intl;
    string = intl2.string;
    t = arg1(dependencyMap[19]).t;
    if (hasItem1) {
      stringResult = string(t.2YwzGs);
    } else {
      stringResult = string(t.jMFSQV);
    }
    obj.subLabel = stringResult;
    obj.value = !hasItem;
    obj.onValueChange = function onValueChange(arg0) {
      const sanitizedRestrictedGuilds = guild(closure_2[45]).getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(guild.id);
      } else {
        sanitizedRestrictedGuilds.add(guild.id);
      }
      const RestrictedGuildIds = guild(closure_2[44]).RestrictedGuildIds;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    };
    return tmp2(arg1(dependencyMap[18]).ActionSheetSwitchRow, obj);
  }
}
class NotificationAction {
  constructor(arg0) {
    arg1 = global.guild;
    obj = {};
    intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.HcoRu0);
    obj.onPress = function onPress() {
      callback(closure_2[25]).hideActionSheet();
      const obj = callback(closure_2[25]);
      callback(closure_2[46]).open(guild.id);
    };
    return jsx(arg1(dependencyMap[18]).ActionSheetRow, obj);
  }
}
function handleLeaveServer(guild) {
  let obj = importDefault(dependencyMap[25]);
  obj.hideActionSheet();
  const lazyResult = React.lazy(() => callback(paths[28])(paths[57], paths.paths));
  obj = { guild };
  arg1(dependencyMap[58]).openAlert("guild-action-sheet-leave-server", callback3(lazyResult, obj));
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ isGuildOwner: closure_7, getGuildIconURL: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const tmp3 = arg1(dependencyMap[10]);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17 } = tmp3);
let closure_18 = arg1(dependencyMap[11]).CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = arg1(dependencyMap[12]).GuildTagBadgeSize;
const ReadStateTypes = arg1(dependencyMap[13]).ReadStateTypes;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { guildServerAvatar: { marginRight: 4 } };
obj = { color: importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: tmp3.Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj.identityName = obj;
obj.identitySublabel = { flexDirection: "row" };
const obj1 = { -9223372036854775808: true, filter: true, columnGap: importDefault(dependencyMap[16]).space.PX_8 };
obj.serverTagLabel = obj1;
let closure_23 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[73]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_9];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => guildHasUnreadIgnoreMuted.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  let obj1 = arg1(dependencyMap[47]);
  const shouldUseNewNotificationSystem = obj1.useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  let closure_1 = React.useCallback(() => {
    const result = callback(stateFromStores1[46]).updateGuildNotificationSettings(guild.id, { muted: false }, guild(stateFromStores1[48]).NotificationLabels.Unmuted);
  }, items2);
  let obj2 = arg1(dependencyMap[17]);
  const items3 = [closure_12];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => muted.isMuted(guild.id));
  const dependencyMap = stateFromStores1;
  obj = { hasIcons: false };
  obj = {};
  const intl = arg1(dependencyMap[19]).intl;
  obj.label = intl.string(arg1(dependencyMap[19]).t.e6RscS);
  obj.onPress = function onPress() {
    callback(stateFromStores1[25]).hideActionSheet();
    const items = [guild.id];
    callback(stateFromStores1[49])(items, constants.GUILD_POPOUT);
  };
  obj.disabled = !stateFromStores;
  const items4 = [callback3(arg1(dependencyMap[18]).ActionSheetRow, obj), , ];
  if (!shouldUseNewNotificationSystem) {
    items4[1] = shouldUseNewNotificationSystem;
    const features = guild.features;
    let tmp13 = null;
    if (features.has(constants.COMMUNITY)) {
      obj1 = { guild };
      tmp13 = callback3(BrowseChannelsOption, obj1);
    }
    items4[2] = tmp13;
    obj.children = items4;
    return closure_22(arg1(dependencyMap[18]).ActionSheetRow.Group, obj);
  } else {
    obj2 = {};
    const intl2 = arg1(dependencyMap[19]).intl;
    const string = intl2.string;
    let De0BTC = arg1(dependencyMap[19]).t;
    if (stateFromStores1) {
      De0BTC = De0BTC.De0BTC;
      let stringResult = string(De0BTC);
    } else {
      stringResult = string(De0BTC.vRzp7P);
    }
    obj2.label = stringResult;
    obj2.onPress = function onPress() {
      if (stateFromStores1) {
        callback();
      } else {
        let obj = callback(stateFromStores1[25]);
        obj.hideActionSheet();
        const _HermesInternal = HermesInternal;
        const obj2 = callback(stateFromStores1[25]);
        obj = { guildId: guild.id };
        obj2.openLazy(guild(stateFromStores1[28])(stateFromStores1[50], stateFromStores1.paths), "muteSettings" + guild.id, obj);
        const tmp5 = guild(stateFromStores1[28])(stateFromStores1[50], stateFromStores1.paths);
      }
    };
    callback3(arg1(dependencyMap[18]).ActionSheetRow, obj2);
    const tmp5 = callback3;
  }
};
export const GuildActionSheetPrimaryActions = function GuildActionSheetPrimaryActions(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[51]);
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_10];
  const items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => guild(closure_2[53]).isVerifiedRolesChannelVisible(sortedRoles.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    obj = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.fUYU+j);
    obj.onPress = function onPress() {
      callback(closure_2[25]).hideActionSheet();
      const obj = callback(closure_2[25]);
      callback(closure_2[54]).open(null, guild.id, null, null);
    };
    items1.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
    obj = {};
    const intl2 = arg1(dependencyMap[19]).intl;
    obj.label = intl2.string(arg1(dependencyMap[19]).t.ISN+NM);
    obj.onPress = function onPress() {
      callback(closure_2[25]).hideActionSheet();
      const obj = callback(closure_2[25]);
      callback(closure_2[54]).open(constants.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
  }
  if (tmp) {
    obj1 = {};
    const intl3 = arg1(dependencyMap[19]).intl;
    obj1.label = intl3.string(arg1(dependencyMap[19]).t.60lJ0C);
    obj1.onPress = function onPress() {
      callback(closure_2[25]).hideActionSheet();
      const obj = callback(closure_2[25]);
      const result = guild(closure_2[55]).openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj1));
  }
  if (stateFromStores) {
    const obj2 = {};
    const intl4 = arg1(dependencyMap[19]).intl;
    obj2.label = intl4.string(arg1(dependencyMap[19]).t.ghtnss);
    obj2.onPress = function onPress() {
      let obj = callback(closure_2[25]);
      obj.hideActionSheet();
      obj = {
        guildId: guild.id,
        onClose() {

        }
      };
      const result = guild(closure_2[56]).openGuildRoleConnectionsModal(obj);
    };
    items1.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj2));
  }
  let tmp17 = null;
  if (0 !== items1.length) {
    const obj3 = { hasIcons: false, children: items1.map((children) => callback2(React.Fragment, { children }, arg1)) };
    tmp17 = callback3(arg1(dependencyMap[18]).ActionSheetRow.Group, obj3);
  }
  return tmp17;
};
export { handleLeaveServer };
export const GuildActionSheetDirectoryActions = function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const currentUser = authStore.getCurrentUser();
  importDefault(dependencyMap[59])(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(callback3(NotificationAction, { guild }));
  items.push(callback3(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback3(RestrictedGuildPrivacyOption, { guild }));
  let obj = arg1(dependencyMap[60]);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp3) {
    let tmp17 = null;
    if (0 !== items.length) {
      obj = { hasIcons: false, children: items.map((children) => callback(React.Fragment, { children }, arg1)) };
      tmp17 = callback3(arg1(dependencyMap[18]).ActionSheetRow.Group, obj);
    }
    return tmp17;
  } else {
    obj = {};
    const features = guild.features;
    const hasItem = features.has(constants.HUB);
    const intl = arg1(dependencyMap[19]).intl;
    const string = intl.string;
    let Dv8gFT = arg1(dependencyMap[19]).t;
    if (hasItem) {
      Dv8gFT = Dv8gFT.Dv8gFT;
      let stringResult = string(Dv8gFT);
    } else {
      stringResult = string(Dv8gFT.J2TBi3);
    }
    obj.label = stringResult;
    obj.variant = "danger";
    obj.onPress = function onPress() {
      callback2(guild);
    };
    obj = items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
    const tmp9 = callback3;
  }
};
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  let isUnderLockdown;
  let shouldShowIncidentActions;
  guild = guild.guild;
  const arg1 = guild;
  const currentUser = authStore.getCurrentUser();
  let obj = arg1(dependencyMap[61]);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj1 = arg1(dependencyMap[62]);
  const guildIncidentsState = obj1.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = arg1(dependencyMap[63]);
  const optInEnabledForGuild = obj2.useOptInEnabledForGuild(guild.id);
  items.push(callback3(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback3(GuildThemePreferenceOption, { guild }));
  items.push(callback3(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants.COMMUNITY)) {
    obj = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.FB2ZZV);
    obj.value = !optInEnabledForGuild;
    obj.onValueChange = function onValueChange() {
      return guild(closure_2[64]).toggleShowAllChannels(guild.id);
    };
    items.push(callback3(arg1(dependencyMap[18]).ActionSheetSwitchRow, obj));
  }
  items.push(callback3(HideMutedChannelsOption, { guild }));
  items.push(callback3(RestrictedGuildPrivacyOption, { guild }));
  let obj4 = arg1(dependencyMap[60]);
  const messageRequestPrivacyOption = obj4.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    obj = {};
    const intl2 = arg1(dependencyMap[19]).intl;
    obj.label = intl2.string(arg1(dependencyMap[19]).t.cswId3);
    obj.onPress = function onPress() {
      callback(closure_2[25]).hideActionSheet();
      const obj = callback(closure_2[25]);
      guild(closure_2[65]).openReportRaidModal(guild.id);
    };
    items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
  }
  obj1 = {};
  const intl3 = arg1(dependencyMap[19]).intl;
  obj1.label = intl3.string(arg1(dependencyMap[19]).t.Aen9eh);
  obj1.onPress = function onPress() {
    callback(closure_2[25]).hideActionSheet();
    const obj = callback(closure_2[25]);
    const result = guild(closure_2[66]).showReportModalForGuild(guild);
  };
  items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj1));
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp36 = null;
      if (0 !== items.length) {
        obj2 = { hasIcons: false, children: items.map((children) => callback2(React.Fragment, { children }, arg1)) };
        tmp36 = callback3(arg1(dependencyMap[18]).ActionSheetRow.Group, obj2);
      }
      return tmp36;
    } else {
      let obj3 = {};
      const features2 = guild.features;
      const hasItem = features2.has(constants.HUB);
      const intl5 = arg1(dependencyMap[19]).intl;
      const string2 = intl5.string;
      let Dv8gFT = arg1(dependencyMap[19]).t;
      if (hasItem) {
        Dv8gFT = Dv8gFT.Dv8gFT;
        let string2Result = string2(Dv8gFT);
      } else {
        string2Result = string2(Dv8gFT.J2TBi3);
      }
      obj3.label = string2Result;
      obj3.variant = "danger";
      obj3.onPress = function onPress() {
        callback3(guild);
      };
      obj3 = items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj3));
      const tmp28 = callback3;
    }
  } else {
    obj4 = {};
    const intl4 = arg1(dependencyMap[19]).intl;
    const string = intl4.string;
    +tSVi3 = arg1(dependencyMap[19]).t;
    if (isUnderLockdown) {
      +tSVi3 = _tSVi3.+tSVi3;
      let stringResult = string(_tSVi3);
    } else {
      stringResult = string(_tSVi3.EPlEdu);
    }
    obj4.label = stringResult;
    obj4.variant = "danger";
    obj4.onPress = function onPress() {
      let obj = callback(paths[25]);
      obj.hideActionSheet();
      obj = { source: guild(paths[67]).GuildIncidentActionSources.GUILD_PROFILE };
      obj = { guild, analyticsData: obj };
      callback(paths[25]).openLazy(guild(paths[28])(paths[68], paths.paths), "GuildIncidentActionsActionSheet", obj);
    };
    obj4 = items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj4));
    const tmp22 = callback3;
  }
};
export const GuildDeveloperOptionAction = function GuildDeveloperOptionAction(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const DeveloperMode = arg1(dependencyMap[44]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  importDefault(dependencyMap[69]);
  if (setting) {
    const items = [];
    let obj = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj.label = intl.string(arg1(dependencyMap[19]).t.94lLD7);
    obj.onPress = function onPress() {
      guild(closure_2[70]).copy(guild.id);
      const obj = guild(closure_2[70]);
      guild(closure_2[71]).presentIdCopied();
    };
    items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
    if (tmp3) {
      if (null != guild.icon) {
        obj = {};
        const intl2 = arg1(dependencyMap[19]).intl;
        obj.label = intl2.string(arg1(dependencyMap[19]).t.7H30wR);
        obj.onPress = function onPress() {
          const tmp = callback2(guild, closure_17, true);
          if (null != tmp) {
            guild(closure_2[70]).copy(tmp);
            const obj = guild(closure_2[70]);
            guild(closure_2[71]).presentLinkCopied();
            const obj2 = guild(closure_2[71]);
          }
        };
        items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
      }
      if (null != guild.banner) {
        obj = {};
        const intl3 = arg1(dependencyMap[19]).intl;
        obj.label = intl3.string(arg1(dependencyMap[19]).t.2FoUnk);
        obj.onPress = function onPress() {
          let obj = callback(closure_2[72]);
          obj = { id: guild.id, banner: guild.banner };
          const guildBannerURL = obj.getGuildBannerURL(obj, true);
          if (null != guildBannerURL) {
            guild(closure_2[70]).copy(guildBannerURL);
            const obj3 = guild(closure_2[70]);
            guild(closure_2[71]).presentLinkCopied();
            const obj4 = guild(closure_2[71]);
          }
        };
        items.push(callback3(arg1(dependencyMap[18]).ActionSheetRow, obj));
      }
    }
    const obj1 = { hasIcons: false };
    const intl4 = arg1(dependencyMap[19]).intl;
    obj1.title = intl4.string(arg1(dependencyMap[19]).t.ObIb1Q);
    obj1.children = items.map((children) => callback3(React.Fragment, { children }, arg1));
    return callback3(arg1(dependencyMap[18]).ActionSheetRow.Group, obj1);
  } else {
    return null;
  }
};
