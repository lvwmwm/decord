// Module ID: 12969
// Function ID: 100548
// Name: HideMutedChannelsOption
// Dependencies: [31, 27, 6764, 1316, 1391, 6878, 1910, 4142, 4325, 1849, 653, 5055, 7721, 4326, 33, 4130, 689, 566, 5500, 1212, 10237, 5730, 3946, 1334, 6760, 4098, 4337, 10002, 1934, 11418, 4319, 5462, 5482, 9814, 1273, 9465, 12970, 1282, 1331, 8485, 12971, 7934, 8620, 4126, 3803, 5793, 5079, 10315, 5073, 13019, 10310, 13020, 8498, 4939, 8456, 8409, 10022, 13021, 4472, 44, 12968, 10270, 10269, 6767, 10008, 13022, 7689, 7793, 11001, 5489, 5490, 3830, 1392, 2]
// Exports: GuildActionSheetDirectoryActions, GuildActionSheetPrimaryActions, GuildActionSheetSecondaryActions, GuildDeveloperOptionAction, GuildUnreadAction

// Module 12969 (HideMutedChannelsOption)
import mergeLocations from "mergeLocations";
import { View } from "ChannelsAndRolesScreen";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import isGuildOwner from "isGuildOwner";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_18 } from "GUILD_ONBOARDING_MODAL_KEY";
import { GuildTagBadgeSize } from "items";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "useOpenProfileSettings";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_21;
let closure_22;
let closure_7;
let closure_8;
const require = arg1;
function HideMutedChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(566);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.isGuildCollapsed(guild.id));
  obj = {};
  const intl = guild(1212).intl;
  obj.label = intl.string(guild(1212).t.UwOLJO);
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange() {
    return outer1_1(outer1_2[20]).toggleCollapseGuild(guild.id);
  };
  return callback2(guild(5500).ActionSheetSwitchRow, obj);
}
function BrowseChannelsOption(guild) {
  guild = guild.guild;
  let obj = guild(3946);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1334).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  const tmp = importDefault(5730)(guild);
  const items = [closure_11];
  const stateFromStores = guild(566).useStateFromStores(items, () => outer1_11.hasUnread(guild.id, outer1_20.GUILD_ONBOARDING_QUESTION));
  const obj2 = guild(566);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [guild.id];
  const stateFromStores1 = guild(566).useStateFromStores(items1, () => outer1_5.getNewChannelIds(guild.id).size > guild(outer1_2[24]).MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[25]);
    obj.hideActionSheet();
    obj = { guildId: guild.id };
    outer1_1(outer1_2[26]).pushLazy(guild(outer1_2[28])(outer1_2[27], outer1_2.paths), obj, outer1_18);
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
      const intl = guild(1212).intl;
      const string = intl.string;
      let h9mGOP = guild(1212).t;
      if (tmp) {
        h9mGOP = h9mGOP.h9mGOP;
        let stringResult = string(h9mGOP);
      } else {
        stringResult = string(h9mGOP.et6wav);
      }
      obj.label = stringResult;
      tmp6(tmp9, obj);
    }
    tmp10 = callback2(guild(11418).NewBadge, {});
    tmp6 = callback2;
  }
}
function ChangeIdentityOption(arg0) {
  let guild;
  let user;
  ({ guild, user } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importDefault(4319);
  const nickname = obj.getNickname(guild.id, undefined, user);
  const _require = importDefault(9814)({ guild, analyticsLocations: importDefault(5462)(importDefault(5482).GUILD_SETTINGS).analyticsLocations });
  obj = {};
  const intl = _require(1212).intl;
  const features = guild.features;
  const hasItem = features.has(constants.HUB);
  const t = _require(1212).t;
  obj.label = intl.string(hasItem ? t["+MWrWt"] : t["PKQB/H"]);
  let tmp6 = nickname;
  if (null != user) {
    tmp6 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      obj = { style: tmp.identitySublabel };
      const obj1 = { size: _require(1273).AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const items = [callback2(_require(1273).Avatar, obj1), ];
      const obj2 = { user, nick: nickname };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = callback2(importDefault(9465), obj2);
      obj.children = items;
      tmp6 = callback3(View, obj);
    }
  }
  obj.subLabel = tmp6;
  obj.onPress = function onPress() {
    outer1_1(outer1_2[25]).hideActionSheet();
    callback();
  };
  return callback2(_require(5500).ActionSheetRow, obj);
}
function GuildThemePreferenceOption(guild) {
  guild = guild.guild;
  let obj = guild(566);
  const items = [closure_6];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp4 = null;
  if (tmp) {
    obj = {};
    const intl = guild(1212).intl;
    obj.label = intl.string(guild(1212).t.CFzDOG);
    obj.value = stateFromStores === guild(1282).GuildThemeSourcePreference.GUILD;
    obj.onValueChange = tmp3;
    tmp4 = callback2(guild(5500).ActionSheetSwitchRow, obj);
  }
  return tmp4;
}
function ServerTagOption(guild) {
  guild = guild.guild;
  let obj = guild(8485);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    let obj1 = guild(7934);
    const profile = guild.profile;
    let badge;
    if (null != profile) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = obj1.getGuildTagBadgeUrl(guild.id, badge, GuildTagBadgeSize.SIZE_16);
    obj = {};
    obj = { style: tmp.serverTagLabel };
    obj1 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    let obj2 = {};
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
    obj1.children = callback2(guild(8620).BaseGuildTagChiplet, obj2);
    const items = [callback2(View, obj1), ];
    const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
    const intl = guild(1212).intl;
    obj3.children = intl.string(guild(1212).t["2QmKZ2"]);
    items[1] = callback2(guild(4126).Text, obj3);
    obj.children = items;
    obj.label = closure_22(View, obj);
    obj.onPress = tmp3;
    return callback2(guild(5500).ActionSheetRow, obj);
  } else {
    return null;
  }
  tmp = _createForOfIteratorHelperLoose();
}
class RestrictedGuildPrivacyOption {
  constructor(arg0) {
    guild = global.guild;
    RestrictedGuildIds = require("explicitContentFromProto").RestrictedGuildIds;
    setting = RestrictedGuildIds.useSetting();
    hasItem = setting.includes(guild.id);
    tmp2 = jsx;
    obj = {};
    intl = require("getSystemLocale").intl;
    obj.label = intl.string(require("getSystemLocale").t.KXNTgb);
    features = guild.features;
    hasItem1 = features.has(GuildFeatures.HUB);
    intl2 = require("getSystemLocale").intl;
    string = intl2.string;
    t = require("getSystemLocale").t;
    if (hasItem1) {
      stringResult = string(t["2YwzGs"]);
    } else {
      stringResult = string(t.jMFSQV);
    }
    obj.subLabel = stringResult;
    obj.value = !hasItem;
    obj.onValueChange = function onValueChange(arg0) {
      const sanitizedRestrictedGuilds = guild(outer1_2[45]).getSanitizedRestrictedGuilds();
      if (arg0) {
        sanitizedRestrictedGuilds.delete(guild.id);
      } else {
        sanitizedRestrictedGuilds.add(guild.id);
      }
      const RestrictedGuildIds = guild(outer1_2[44]).RestrictedGuildIds;
      RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
    };
    return tmp2(require("ActionSheetRowIcon").ActionSheetSwitchRow, obj);
  }
}
class NotificationAction {
  constructor(arg0) {
    guild = global.guild;
    obj = {};
    intl = require("getSystemLocale").intl;
    obj.label = intl.string(require("getSystemLocale").t.HcoRu0);
    obj.onPress = function onPress() {
      outer1_1(outer1_2[25]).hideActionSheet();
      const obj = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[46]).open(guild.id);
    };
    return jsx(require("ActionSheetRowIcon").ActionSheetRow, obj);
  }
}
function handleLeaveServer(guild) {
  let obj = importDefault(4098);
  obj.hideActionSheet();
  const lazyResult = React.lazy(() => outer1_0(outer1_2[28])(outer1_2[57], outer1_2.paths));
  obj = { guild };
  require(4472) /* useAlertStore */.openAlert("guild-action-sheet-leave-server", callback2(lazyResult, obj));
}
({ isGuildOwner: closure_7, getGuildIconURL: closure_8 } = isGuildOwner);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
_createForOfIteratorHelperLoose = { guildServerAvatar: { marginRight: 4 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: ME.Fonts.PRIMARY_MEDIUM, fontSize: 12 };
_createForOfIteratorHelperLoose.identityName = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.identitySublabel = { flexDirection: "row" };
let obj1 = { flexDirection: "row", alignItems: "center", columnGap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.serverTagLabel = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export const GuildUnreadAction = function GuildUnreadAction(guild) {
  guild = guild.guild;
  let obj = guild(stateFromStores1[17]);
  let items = [closure_9];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  let obj1 = guild(stateFromStores1[47]);
  const shouldUseNewNotificationSystem = obj1.useShouldUseNewNotificationSystem("GuildUnreadAction");
  const items2 = [guild.id];
  let closure_1 = React.useCallback(() => {
    const result = callback(stateFromStores1[46]).updateGuildNotificationSettings(guild.id, { muted: false }, guild(stateFromStores1[48]).NotificationLabels.Unmuted);
  }, items2);
  let obj2 = guild(stateFromStores1[17]);
  const items3 = [closure_12];
  stateFromStores1 = obj2.useStateFromStores(items3, () => outer1_12.isMuted(guild.id));
  obj = { hasIcons: false };
  obj = {};
  const intl = guild(stateFromStores1[19]).intl;
  obj.label = intl.string(guild(stateFromStores1[19]).t.e6RscS);
  obj.onPress = function onPress() {
    callback(stateFromStores1[25]).hideActionSheet();
    const items = [guild.id];
    callback(stateFromStores1[49])(items, outer1_16.GUILD_POPOUT);
  };
  obj.disabled = !stateFromStores;
  const items4 = [callback2(guild(stateFromStores1[18]).ActionSheetRow, obj), , ];
  if (!shouldUseNewNotificationSystem) {
    items4[1] = shouldUseNewNotificationSystem;
    const features = guild.features;
    let tmp13 = null;
    if (features.has(constants.COMMUNITY)) {
      obj1 = { guild };
      tmp13 = callback2(BrowseChannelsOption, obj1);
    }
    items4[2] = tmp13;
    obj.children = items4;
    return closure_22(guild(stateFromStores1[18]).ActionSheetRow.Group, obj);
  } else {
    obj2 = {};
    const intl2 = guild(stateFromStores1[19]).intl;
    const string = intl2.string;
    let De0BTC = guild(stateFromStores1[19]).t;
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
    callback2(guild(stateFromStores1[18]).ActionSheetRow, obj2);
    let tmp5 = callback2;
  }
};
export const GuildActionSheetPrimaryActions = function GuildActionSheetPrimaryActions(guild) {
  guild = guild.guild;
  let obj = guild(13020);
  let obj1 = guild(566);
  const items = [closure_10];
  const items1 = [];
  const stateFromStores = obj1.useStateFromStores(items, () => guild(outer1_2[53]).isVerifiedRolesChannelVisible(outer1_10.getSortedRoles(guild.id)));
  if (obj.useGuildActionSheetPermissions(guild).canManageChannels) {
    obj = {};
    const intl = guild(1212).intl;
    obj.label = intl.string(guild(1212).t["fUYU+j"]);
    obj.onPress = function onPress() {
      outer1_1(outer1_2[25]).hideActionSheet();
      const obj = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[54]).open(null, guild.id, null, null);
    };
    items1.push(callback2(guild(5500).ActionSheetRow, obj));
    obj = {};
    const intl2 = guild(1212).intl;
    obj.label = intl2.string(guild(1212).t["ISN+NM"]);
    obj.onPress = function onPress() {
      outer1_1(outer1_2[25]).hideActionSheet();
      const obj = outer1_1(outer1_2[25]);
      outer1_1(outer1_2[54]).open(outer1_14.GUILD_CATEGORY, guild.id, null, null);
    };
    items1.push(callback2(guild(5500).ActionSheetRow, obj));
  }
  if (tmp) {
    obj1 = {};
    const intl3 = guild(1212).intl;
    obj1.label = intl3.string(guild(1212).t["60lJ0C"]);
    obj1.onPress = function onPress() {
      outer1_1(outer1_2[25]).hideActionSheet();
      const obj = outer1_1(outer1_2[25]);
      const result = guild(outer1_2[55]).openCreateOrEditGuildEventModal(guild, {});
    };
    items1.push(callback2(guild(5500).ActionSheetRow, obj1));
  }
  if (stateFromStores) {
    const obj2 = {};
    const intl4 = guild(1212).intl;
    obj2.label = intl4.string(guild(1212).t.ghtnss);
    obj2.onPress = function onPress() {
      let obj = outer1_1(outer1_2[25]);
      obj.hideActionSheet();
      obj = {
        guildId: guild.id,
        onClose() {

        }
      };
      const result = guild(outer1_2[56]).openGuildRoleConnectionsModal(obj);
    };
    items1.push(callback2(guild(5500).ActionSheetRow, obj2));
  }
  let tmp17 = null;
  if (0 !== items1.length) {
    const obj3 = { hasIcons: false, children: items1.map((children) => outer1_21(outer1_3.Fragment, { children }, arg1)) };
    tmp17 = callback2(guild(5500).ActionSheetRow.Group, obj3);
  }
  return tmp17;
};
export { handleLeaveServer };
export const GuildActionSheetDirectoryActions = function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = authStore.getCurrentUser();
  importDefault(44)(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  items.push(callback2(NotificationAction, { guild }));
  items.push(callback2(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback2(RestrictedGuildPrivacyOption, { guild }));
  let obj = guild(12968);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (tmp3) {
    let tmp17 = null;
    if (0 !== items.length) {
      obj = { hasIcons: false, children: items.map((children) => outer1_21(outer1_3.Fragment, { children }, arg1)) };
      tmp17 = callback2(guild(5500).ActionSheetRow.Group, obj);
    }
    return tmp17;
  } else {
    obj = {};
    const features = guild.features;
    const hasItem = features.has(constants.HUB);
    const intl = guild(1212).intl;
    const string = intl.string;
    let Dv8gFT = guild(1212).t;
    if (hasItem) {
      Dv8gFT = Dv8gFT.Dv8gFT;
      let stringResult = string(Dv8gFT);
    } else {
      stringResult = string(Dv8gFT.J2TBi3);
    }
    obj.label = stringResult;
    obj.variant = "danger";
    obj.onPress = function onPress() {
      outer1_31(guild);
    };
    obj = items.push(callback2(guild(5500).ActionSheetRow, obj));
    const tmp9 = callback2;
  }
};
export const GuildActionSheetSecondaryActions = function GuildActionSheetSecondaryActions(guild) {
  let isUnderLockdown;
  let shouldShowIncidentActions;
  guild = guild.guild;
  const currentUser = authStore.getCurrentUser();
  let obj = guild(10270);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj1 = guild(10269);
  const guildIncidentsState = obj1.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj2 = guild(6767);
  const optInEnabledForGuild = obj2.useOptInEnabledForGuild(guild.id);
  items.push(callback2(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(callback2(GuildThemePreferenceOption, { guild }));
  items.push(callback2(ServerTagOption, { guild }));
  const features = guild.features;
  if (features.has(constants.COMMUNITY)) {
    obj = {};
    const intl = guild(1212).intl;
    obj.label = intl.string(guild(1212).t.FB2ZZV);
    obj.value = !optInEnabledForGuild;
    obj.onValueChange = function onValueChange() {
      return guild(outer1_2[64]).toggleShowAllChannels(guild.id);
    };
    items.push(callback2(guild(5500).ActionSheetSwitchRow, obj));
  }
  items.push(callback2(HideMutedChannelsOption, { guild }));
  items.push(callback2(RestrictedGuildPrivacyOption, { guild }));
  let obj4 = guild(12968);
  const messageRequestPrivacyOption = obj4.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    obj = {};
    const intl2 = guild(1212).intl;
    obj.label = intl2.string(guild(1212).t.cswId3);
    obj.onPress = function onPress() {
      outer1_1(outer1_2[25]).hideActionSheet();
      const obj = outer1_1(outer1_2[25]);
      guild(outer1_2[65]).openReportRaidModal(guild.id);
    };
    items.push(callback2(guild(5500).ActionSheetRow, obj));
  }
  obj1 = {};
  const intl3 = guild(1212).intl;
  obj1.label = intl3.string(guild(1212).t.Aen9eh);
  obj1.onPress = function onPress() {
    outer1_1(outer1_2[25]).hideActionSheet();
    const obj = outer1_1(outer1_2[25]);
    const result = guild(outer1_2[66]).showReportModalForGuild(guild);
  };
  items.push(callback2(guild(5500).ActionSheetRow, obj1));
  if (!shouldShowIncidentActions) {
    if (tmp2) {
      let tmp36 = null;
      if (0 !== items.length) {
        obj2 = { hasIcons: false, children: items.map((children) => outer1_21(outer1_3.Fragment, { children }, arg1)) };
        tmp36 = callback2(guild(5500).ActionSheetRow.Group, obj2);
      }
      return tmp36;
    } else {
      let obj3 = {};
      const features2 = guild.features;
      const hasItem = features2.has(constants.HUB);
      const intl5 = guild(1212).intl;
      const string2 = intl5.string;
      let Dv8gFT = guild(1212).t;
      if (hasItem) {
        Dv8gFT = Dv8gFT.Dv8gFT;
        let string2Result = string2(Dv8gFT);
      } else {
        string2Result = string2(Dv8gFT.J2TBi3);
      }
      obj3.label = string2Result;
      obj3.variant = "danger";
      obj3.onPress = function onPress() {
        outer1_31(guild);
      };
      obj3 = items.push(callback2(guild(5500).ActionSheetRow, obj3));
      const tmp28 = callback2;
    }
  } else {
    obj4 = {};
    const intl4 = guild(1212).intl;
    const string = intl4.string;
    _tSVi3 = guild(1212).t;
    if (isUnderLockdown) {
      _tSVi3 = _tSVi3["+tSVi3"];
      let stringResult = string(_tSVi3);
    } else {
      stringResult = string(_tSVi3.EPlEdu);
    }
    obj4.label = stringResult;
    obj4.variant = "danger";
    obj4.onPress = function onPress() {
      let obj = outer1_1(outer1_2[25]);
      obj.hideActionSheet();
      obj = { source: guild(outer1_2[67]).GuildIncidentActionSources.GUILD_PROFILE };
      obj = { guild, analyticsData: obj };
      outer1_1(outer1_2[25]).openLazy(guild(outer1_2[28])(outer1_2[68], outer1_2.paths), "GuildIncidentActionsActionSheet", obj);
    };
    obj4 = items.push(callback2(guild(5500).ActionSheetRow, obj4));
    const tmp22 = callback2;
  }
};
export const GuildDeveloperOptionAction = function GuildDeveloperOptionAction(guild) {
  guild = guild.guild;
  const DeveloperMode = guild(3803).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  importDefault(5489);
  if (setting) {
    const items = [];
    let obj = {};
    const intl = guild(1212).intl;
    obj.label = intl.string(guild(1212).t["94lLD7"]);
    obj.onPress = function onPress() {
      guild(outer1_2[70]).copy(guild.id);
      const obj = guild(outer1_2[70]);
      guild(outer1_2[71]).presentIdCopied();
    };
    items.push(callback2(guild(5500).ActionSheetRow, obj));
    if (tmp3) {
      if (null != guild.icon) {
        obj = {};
        const intl2 = guild(1212).intl;
        obj.label = intl2.string(guild(1212).t["7H30wR"]);
        obj.onPress = function onPress() {
          const tmp = outer1_8(guild, outer1_17, true);
          if (null != tmp) {
            guild(outer1_2[70]).copy(tmp);
            const obj = guild(outer1_2[70]);
            guild(outer1_2[71]).presentLinkCopied();
            const obj2 = guild(outer1_2[71]);
          }
        };
        items.push(callback2(guild(5500).ActionSheetRow, obj));
      }
      if (null != guild.banner) {
        obj = {};
        const intl3 = guild(1212).intl;
        obj.label = intl3.string(guild(1212).t["2FoUnk"]);
        obj.onPress = function onPress() {
          let obj = outer1_1(outer1_2[72]);
          obj = { id: guild.id, banner: guild.banner };
          const guildBannerURL = obj.getGuildBannerURL(obj, true);
          if (null != guildBannerURL) {
            guild(outer1_2[70]).copy(guildBannerURL);
            const obj3 = guild(outer1_2[70]);
            guild(outer1_2[71]).presentLinkCopied();
            const obj4 = guild(outer1_2[71]);
          }
        };
        items.push(callback2(guild(5500).ActionSheetRow, obj));
      }
    }
    const obj1 = { hasIcons: false };
    const intl4 = guild(1212).intl;
    obj1.title = intl4.string(guild(1212).t.ObIb1Q);
    obj1.children = items.map((children) => outer1_21(outer1_3.Fragment, { children }, arg1));
    return callback2(guild(5500).ActionSheetRow.Group, obj1);
  } else {
    return null;
  }
};
