// Module ID: 15267
// Function ID: 15268
// Name: GuildActionSheetActions
// Dependencies: [19, 17, 15268, 8248, 1230, 4879, 6945, 4918, 6901, 6136, 1386, 1071, 7421, 8537, 6137, 21, 5012, 575, 504, 7517, 1112, 11455, 11981, 5044, 4845, 8244, 5226, 6099, 11980, 2119, 13186, 6776, 6348, 6349, 9394, 1186, 8589, 15269, 1195, 4842, 8535, 15270, 8536, 8680, 5603, 4837, 7320, 7445, 15319, 15320, 8570, 6339, 8487, 8431, 12002, 12043, 15321, 12049, 2650, 12048, 15323, 15329, 6017, 38, 15266, 10585, 10584, 6944, 11987, 15330, 8149, 10553, 12432, 7507, 5693, 1412, 2]
// Exports: GuildActionSheetDirectoryActions, GuildActionSheetGameOrganizationActions, GuildActionSheetPrimaryActions, GuildActionSheetSecondaryActions, GuildDeveloperOptionAction, GuildUnreadAction, handleLeaveServer

// Module 15267 (GuildActionSheetActions)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4842 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import useAlertStore from "useAlertStore" /* 6017 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import ReadStateConstants from "ReadStateConstants" /* 6137 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6339 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6348 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6776 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7320 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7421 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7445 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
import ReportModals from "ReportModals" /* 8149 */;
import ChannelListState from "ChannelListState" /* 8244 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8431 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8487 */;
import GuildTagConstants from "GuildTagConstants" /* 8537 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8570 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9394 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 10553 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 11455 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 11981 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11987 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 12002 */;
import useCanInviteToLinkedGameOrganizationDefault from "useCanInviteToLinkedGameOrganization" /* 12043 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12049 */;
import useIsServerThemeAvailableForGuildDefault from "useIsServerThemeAvailableForGuild" /* 15269 */;
import markGuildsAsReadDefault from "markGuildsAsRead" /* 15319 */;
import GuildAntiRaidModalActionCreators from "GuildAntiRaidModalActionCreators" /* 15330 */;
import react from "react" /* 19 */;
import GameOrganizationStore from "GameOrganizationStore" /* 15268 */;
import NewChannelsStore from "NewChannelsStore" /* 8248 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import GuildRecord from "GuildRecord" /* 4879 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6945 */;
import GuildRoleStore from "GuildRoleStore" /* 4918 */;
import ReadStateStore from "ReadStateStore" /* 6901 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6136 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let Fonts;
let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_22;
let closure_23;
let metroImportAll;
let obj2;
let obj3;
let tmp;
let tmp2;
const UserSettings = tmp(4837);
const DiscordTagDefault = tmp2(8589);
function HideMutedChannelsOption(guild) {
  let intl;
  guild = guild.guild;
  let obj = guild(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
  const obj2 = {
    label: intl.string(guild(1112).t.UwOLJO),
    value: stateFromStores,
    onValueChange() {
      const obj = ChannelCollapseActionCreatorsDefault;
      return obj.toggleCollapseGuild(guild.id);
    }
  };
  const ActionSheetSwitchRow = guild(7517).ActionSheetSwitchRow;
  intl = guild(1112).intl;
  return closure_22(ActionSheetSwitchRow, obj2);
}
function BrowseChannelsOption(guild) {
  let stringResult;
  guild = guild.guild;
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  let obj = guild(5044);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(4845).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj2 = guild(504);
  const items = [ReadStateStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ReadStateStore.hasUnread(guild.id, ReadStateTypes.GUILD_ONBOARDING_QUESTION));
  let obj3 = guild(504);
  const items1 = [NewChannelsStore];
  const items2 = [guild.id];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => NewChannelsStore.getNewChannelIds(guild.id).size > ChannelListState.MAX_NEW_CHANNELS_TO_SHOW);
  const features = guild.features;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = { guildId: guild.id };
    obj2.pushLazy(asyncRequire(11980, dependencyMap.paths), obj3, closure_19);
  }, items2);
  let tmp9Result = null;
  if (features.has(constants2.COMMUNITY)) {
    if (result) {
      let tmp9Result2;
      if (!stateFromStores) {
        tmp9Result2 = null;
      }
      const obj4 = { trailing: tmp9Result2, onPress: callback, label: stringResult };
      const intl = tmp3(1112).intl;
      const string = intl.string;
      const t = tmp3(1112).t;
      if (tmp2) {
        stringResult = string(t.h9mGOP);
      } else {
        stringResult = string(t.et6wav);
      }
      tmp9Result = tmp9(tmp10, obj4);
    }
    tmp9Result2 = tmp9(tmp3(13186).NewBadge, {});
  }
  return tmp9Result;
}
function ChangeIdentityOption(arg0) {
  let closure_0;
  let guild;
  let items;
  let tmp9;
  let user;
  ({ guild, user } = arg0);
  const tmp = closure_24();
  let obj = NicknameUtilsDefault;
  const nickname = obj.getNickname(guild.id, undefined, user);
  const tmp5 = useAnalyticsLocationsDefault;
  _require = useOpenProfileSettingsDefault({ guild, analyticsLocations: tmp5(AnalyticsLocationDefault.GUILD_SETTINGS).analyticsLocations });
  const ActionSheetRow = require("ActionSheetRow").ActionSheetRow;
  const intl = require("intl").intl;
  const features = guild.features;
  const string = intl.string;
  const hasItem = features.has(constants2.HUB);
  const t = require("intl").t;
  const obj2 = {
    label: string(hasItem ? t["+MWrWt"] : t["PKQB/H"]),
    subLabel: tmp9,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      closure_0();
    }
  };
  tmp9 = nickname;
  if (null != user) {
    tmp9 = nickname;
    if (user.hasAvatarForGuild(guild.id)) {
      const obj3 = { style: tmp.identitySublabel, children: items };
      const obj4 = { size: require("native").AvatarSizes.SIZE_16, style: tmp.guildServerAvatar, user, guildId: guild.id };
      const Avatar = tmp7(1186).Avatar;
      items = [closure_22(Avatar, obj4), ];
      const obj9 = { user, nick: nickname, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = closure_22(DiscordTagDefault, obj9);
      tmp9 = closure_23(View, obj3);
    }
  }
  return closure_22(ActionSheetRow, obj2);
}
function GuildThemePreferenceOption(guild) {
  let intl;
  guild = guild.guild;
  let tmp = dependencyMap;
  const tmp2 = useIsServerThemeAvailableForGuildDefault(guild.id, "GuildActionSheetActions");
  let obj = guild(504);
  const items = [UserSettingsProtoStore];
  const items1 = [guild.id];
  [][0] = guild.id;
  const stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.resolveGuildThemeSourcePreference(guild.id), items1);
  let tmp6 = null;
  if (tmp2) {
    const obj2 = { label: intl.string(guild(1112).t.CFzDOG), value: stateFromStores === guild(1195).GuildThemeSourcePreference.GUILD, onValueChange: tmp5 };
    const ActionSheetSwitchRow = tmp3(7517).ActionSheetSwitchRow;
    intl = tmp3(1112).intl;
    tmp6 = closure_22(ActionSheetSwitchRow, obj2);
  }
  return tmp6;
}
function ServerTagOption(guild) {
  let intl;
  let items;
  let obj5;
  guild = guild.guild;
  const tmp2 = guild;
  let tmp3 = dependencyMap;
  const tmp = closure_24();
  let obj = guild(8535);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    const getGuildTagBadgeUrl = tmp2(8536).getGuildTagBadgeUrl;
    const id = guild.id;
    tmp2(8536);
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_16);
    let obj2 = { style: tmp.serverTagLabel, children: items };
    const ActionSheetRow = tmp2(7517).ActionSheetRow;
    const profile2 = guild.profile;
    let tag;
    const BaseGuildTagChiplet = tmp2(8680).BaseGuildTagChiplet;
    const tmp10 = GuildTagBadgeSize;
    const tmp13 = closure_23;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    const obj3 = { label: tmp13(View, obj2), onPress: tmp5 };
    const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_22(BaseGuildTagChiplet, obj5) };
    obj5 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: tmp10.SIZE_16 };
    items = [closure_22(View, obj4), ];
    const obj6 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(1112).t["2QmKZ2"]) };
    const Text = tmp2(5603).Text;
    intl = tmp2(1112).intl;
    items[1] = closure_22(Text, obj6);
    return closure_22(ActionSheetRow, obj3);
  } else {
    return null;
  }
}
class RestrictedGuildPrivacyOption {
  constructor(guild) {
    let intl;
    let stringResult;
    guild = guild.guild;
    let RestrictedGuildIds = guild(4837).RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    const hasItem = setting.includes(guild.id);
    let obj = {
      label: intl.string(guild(1112).t.KXNTgb),
      subLabel: stringResult,
      value: !hasItem,
      onValueChange: function handleRestrictedGuildChange(arg0) {
        const obj = UserSettingsUtils;
        const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
        const tmp3 = arg0;
        if (tmp3) {
          sanitizedRestrictedGuilds.delete(guild.id);
        } else {
          sanitizedRestrictedGuilds.add(guild.id);
        }
        const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
        RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
      }
    };
    const ActionSheetSwitchRow = guild(7517).ActionSheetSwitchRow;
    intl = guild(1112).intl;
    const features = guild.features;
    const hasItem1 = features.has(constants2.HUB);
    const intl2 = guild(1112).intl;
    const string = intl2.string;
    const t = guild(1112).t;
    const tmp2 = closure_22;
    if (hasItem1) {
      stringResult = string(t["2YwzGs"]);
    } else {
      stringResult = string(t.jMFSQV);
    }
    return tmp2(ActionSheetSwitchRow, obj);
  }
}
class NotificationAction {
  constructor(guild) {
    let intl;
    guild = guild.guild;
    let obj = {
      label: intl.string(guild(1112).t.HcoRu0),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = NotificationSettingsModalActionCreatorsDefault;
        obj2.open(guild.id);
      }
    };
    const ActionSheetRow = guild(7517).ActionSheetRow;
    intl = guild(1112).intl;
    return closure_22(ActionSheetRow, obj);
  }
}
const View = react_native.View;
({ isGuildOwner: metroImportAll, getGuildIconURL: c9 } = GuildRecord);
({ ChannelTypes: closure_15, GuildFeatures: closure_16, AnalyticsSections: closure_17, AVATAR_MAX_SIZE: closure_18, Fonts } = Constants);
let closure_19 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { guildServerAvatar: { marginRight: 4 }, identityName: obj2, identitySublabel: { flexDirection: "row" }, serverTagLabel: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_24 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetActions.tsx");

export { RestrictedGuildPrivacyOption };
export { NotificationAction };
export function GuildUnreadAction(guild) {
  let intl;
  guild = guild.guild;
  let obj = guild(504);
  let items = [GuildReadStateStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => GuildReadStateStore.getGuildHasUnreadIgnoreMuted(guild.id), items1);
  const Group = guild(7517).ActionSheetRow.Group;
  const obj2 = {
    label: intl.string(guild(1112).t.e6RscS),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const items = [guild.id];
      markGuildsAsReadDefault(items, constants.GUILD_POPOUT);
    },
    disabled: !stateFromStores
  };
  const ActionSheetRow = guild(7517).ActionSheetRow;
  intl = guild(1112).intl;
  const children = [closure_22(ActionSheetRow, obj2), ];
  const features = guild.features;
  let tmp3Result = null;
  const tmp2 = closure_23;
  const tmp3 = closure_22;
  if (features.has(constants2.COMMUNITY)) {
    const obj3 = { guild };
    tmp3Result = tmp3(BrowseChannelsOption, obj3);
  }
  children[1] = tmp3Result;
  return tmp2(Group, { hasIcons: false, children });
}
export function GuildActionSheetPrimaryActions(guild) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  guild = guild.guild;
  let obj = guild(15320);
  const canManageChannels = obj.useGuildActionSheetPermissions(guild).canManageChannels;
  const tmp3 = useCanCreateAnEventDefault(guild.id);
  let obj2 = guild(504);
  const items = [GuildRoleStore];
  const items1 = [];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const obj = ConnectionsUtils;
    return obj.isVerifiedRolesChannelVisible(GuildRoleStore.getSortedRoles(guild.id));
  });
  if (canManageChannels) {
    const push = items1.push;
    let obj3 = {
      label: intl.string(guild(1112).t["fUYU+j"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = CreateChannelModalActionCreatorsDefault;
          obj2.open(null, guild.id, null, null);
        }
    };
    const ActionSheetRow = tmp(7517).ActionSheetRow;
    intl = tmp(1112).intl;
    push(closure_22(ActionSheetRow, obj3));
    const push2 = items1.push;
    const obj4 = {
      label: intl2.string(guild(1112).t["ISN+NM"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = CreateChannelModalActionCreatorsDefault;
          obj2.open(constants.GUILD_CATEGORY, guild.id, null, null);
        }
    };
    const ActionSheetRow2 = tmp(7517).ActionSheetRow;
    intl2 = tmp(1112).intl;
    push2(closure_22(ActionSheetRow2, obj4));
  }
  if (tmp3) {
    const push3 = items1.push;
    const obj5 = {
      label: intl3.string(guild(1112).t["60lJ0C"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildScheduledEventModalActionCreators;
          const result = obj2.openCreateOrEditGuildEventModal(guild, {});
        }
    };
    const ActionSheetRow3 = tmp(7517).ActionSheetRow;
    intl3 = tmp(1112).intl;
    push3(closure_22(ActionSheetRow3, obj5));
  }
  if (stateFromStores) {
    const push4 = items1.push;
    const obj6 = {
      label: intl4.string(guild(1112).t.ghtnss),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildRoleConnectionsModalActionCreators;
          const obj3 = {
            guildId: guild.id,
            onClose() {

            }
          };
          const result = obj2.openGuildRoleConnectionsModal(obj3);
        }
    };
    const ActionSheetRow4 = tmp(7517).ActionSheetRow;
    intl4 = tmp(1112).intl;
    push4(closure_22(ActionSheetRow4, obj6));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj7 = {
      hasIcons: false,
      children: items1.map((children, index) => {
          const obj = { children };
          return closure_1_22(React.Fragment, obj, index);
        })
    };
    const Group = tmp(7517).ActionSheetRow.Group;
    tmp12 = closure_22(Group, obj7);
  }
  return tmp12;
}
export function GuildActionSheetGameOrganizationActions(guild) {
  let gameOrganizationFullSubLabel;
  let obj2;
  guild = guild.guild;
  const tmp3 = useCanInviteToLinkedGameOrganizationDefault(guild, "guild_action_sheet");
  let id = null;
  const useLinkedGameOrganization = guild(15321).useLinkedGameOrganization;
  guild(15321);
  if (tmp3) {
    id = guild.id;
  }
  const data = useLinkedGameOrganization(id).data;
  const items = [GameOrganizationStore];
  const items1 = [guild.id];
  const tmp4Result = guild(504);
  const stateFromStores = tmp4Result.useStateFromStores(items, () => GameOrganizationStore.getDisplayNounByGuildId(guild.id), items1);
  if (tmp3) {
    const tmp8 = null != data && isGameOrganizationFullDefault(data);
    const Group = tmp4(7517).ActionSheetRow.Group;
    const ActionSheetRow = tmp4(7517).ActionSheetRow;
    const intl = tmp4(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str = stateFromStores;
    const EnTIIr = tmp(2650).EnTIIr;
    if (stateFromStores == null) {
      str = "other";
    }
    let obj = {
      label: formatToPlainString(EnTIIr, obj2),
      subLabel: gameOrganizationFullSubLabel,
      disabled: tmp8,
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = ActionSheetActionCreatorsDefault;
          const obj3 = { guildId: guild.id };
          obj2.openLazy(asyncRequire(15323, dependencyMap.paths), "GameOrganizationInviteActionSheet", obj3);
        }
    };
    obj2 = { displayNoun: str };
    gameOrganizationFullSubLabel = undefined;
    if (tmp8) {
      const tmp4Result2 = guild(12048);
      gameOrganizationFullSubLabel = tmp4Result2.getGameOrganizationFullSubLabel(data, stateFromStores);
    }
    let obj3 = { hasIcons: false, children: closure_22(ActionSheetRow, obj) };
    return closure_22(Group, obj3);
  } else {
    return null;
  }
}
export function handleLeaveServer(guild) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const lazyResult = react.lazy(() => guild(paths[29])(paths[61], paths.paths));
  const obj2 = useAlertStore;
  const obj3 = { guild };
  obj2.openAlert("guild-action-sheet-leave-server", authStore5(lazyResult, obj3));
}
export function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  const tmp4 = closure_8(guild, currentUser);
  items.push(closure_22(NotificationAction, { guild }));
  items.push(closure_22(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_22(RestrictedGuildPrivacyOption, { guild }));
  let obj = guild(15266);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (!tmp4) {
    let stringResult;
    const push = items.push;
    const features = guild.features;
    const ActionSheetRow = tmp9(7517).ActionSheetRow;
    const hasItem = features.has(constants2.HUB);
    const intl = tmp9(1112).intl;
    const string = intl.string;
    const t = tmp9(1112).t;
    if (hasItem) {
      stringResult = string(t.Dv8gFT);
    } else {
      stringResult = string(t.J2TBi3);
    }
    let obj2 = {
      label: stringResult,
      variant: "danger",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const lazyResult = react.lazy(() => guild(paths[29])(paths[61], paths.paths));
          const obj2 = useAlertStore;
          const obj3 = { guild };
          obj2.openAlert("guild-action-sheet-leave-server", authStore5(lazyResult, obj3));
        }
    };
    push(closure_22(ActionSheetRow, obj2));
  }
  let tmp5Result = null;
  if (0 !== items.length) {
    let obj3 = {
      hasIcons: false,
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_22(React.Fragment, obj, index);
        })
    };
    const Group = tmp9(7517).ActionSheetRow.Group;
    tmp5Result = tmp5(Group, obj3);
  }
  return tmp5Result;
}
export function GuildActionSheetSecondaryActions(guild) {
  let intl;
  let intl2;
  let intl3;
  let isUnderLockdown;
  let shouldShowIncidentActions;
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  const tmp2 = closure_8(guild, currentUser);
  let obj = guild(10585);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj2 = guild(10584);
  const guildIncidentsState = obj2.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj3 = guild(6944);
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guild.id);
  items.push(closure_22(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_22(GuildThemePreferenceOption, { guild }));
  items.push(closure_22(ServerTagOption, { guild }));
  const features = guild.features;
  const tmp12 = constants2;
  if (features.has(constants2.COMMUNITY)) {
    const push = items.push;
    let obj4 = {
      label: intl.string(guild(1112).t.FB2ZZV),
      value: !optInEnabledForGuild,
      onValueChange() {
          const obj = OptInOnboardingUtils;
          return obj.toggleShowAllChannels(guild.id);
        }
    };
    const ActionSheetSwitchRow = tmp3(7517).ActionSheetSwitchRow;
    intl = tmp3(1112).intl;
    push(closure_22(ActionSheetSwitchRow, obj4));
  }
  items.push(closure_22(HideMutedChannelsOption, { guild }));
  items.push(closure_22(RestrictedGuildPrivacyOption, { guild }));
  const tmp3Result = guild(15266);
  const messageRequestPrivacyOption = tmp3Result.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    const push2 = items.push;
    const obj5 = {
      label: intl2.string(guild(1112).t.cswId3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildAntiRaidModalActionCreators;
          obj2.openReportRaidModal(guild.id);
        }
    };
    const ActionSheetRow = tmp3(7517).ActionSheetRow;
    intl2 = tmp3(1112).intl;
    push2(closure_22(ActionSheetRow, obj5));
  }
  if (!tmp2) {
    const push3 = items.push;
    const obj6 = {
      label: intl3.string(guild(1112).t.Aen9eh),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = ReportModals;
          const result = obj2.showReportModalForGuild(guild);
        }
    };
    const ActionSheetRow2 = tmp3(7517).ActionSheetRow;
    intl3 = tmp3(1112).intl;
    push3(closure_22(ActionSheetRow2, obj6));
  }
  if (shouldShowIncidentActions) {
    let stringResult;
    const push4 = items.push;
    const ActionSheetRow3 = tmp3(7517).ActionSheetRow;
    const intl4 = tmp3(1112).intl;
    const string = intl4.string;
    const t = tmp3(1112).t;
    if (isUnderLockdown) {
      stringResult = string(t["+tSVi3"]);
    } else {
      stringResult = string(t.EPlEdu);
    }
    const obj7 = {
      label: stringResult,
      variant: "danger",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = { source: GuildAntiRaidTypes.GuildIncidentActionSources.GUILD_PROFILE };
          const obj3 = ActionSheetActionCreatorsDefault;
          const obj4 = { guild, analyticsData: obj2 };
          obj3.openLazy(asyncRequire(12432, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        }
    };
    push4(closure_22(ActionSheetRow3, obj7));
  }
  if (!tmp2) {
    let string2Result;
    const push5 = items.push;
    const features2 = guild.features;
    const ActionSheetRow4 = tmp3(7517).ActionSheetRow;
    const hasItem = features2.has(tmp12.HUB);
    const intl5 = tmp3(1112).intl;
    const string2 = intl5.string;
    const t2 = tmp3(1112).t;
    if (hasItem) {
      string2Result = string2(t2.Dv8gFT);
    } else {
      string2Result = string2(t2.J2TBi3);
    }
    const obj8 = {
      label: string2Result,
      variant: "danger",
      onPress() {
          let paths;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const lazyResult = react.lazy(() => guild(paths[29])(paths[61], paths.paths));
          const obj2 = useAlertStore;
          const obj3 = { guild };
          obj2.openAlert("guild-action-sheet-leave-server", authStore5(lazyResult, obj3));
        }
    };
    push5(closure_22(ActionSheetRow4, obj8));
  }
  let tmp8Result = null;
  if (0 !== items.length) {
    const obj9 = {
      hasIcons: false,
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_22(React.Fragment, obj, index);
        })
    };
    const Group = tmp3(7517).ActionSheetRow.Group;
    tmp8Result = tmp8(Group, obj9);
  }
  return tmp8Result;
}
export function GuildDeveloperOptionAction(guild) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  guild = guild.guild;
  let tmp = guild;
  const DeveloperMode = guild(4837).DeveloperMode;
  if (DeveloperMode.useSetting()) {
    const items = [];
    const push = items.push;
    let obj = {
      label: intl.string(tmp(1112).t["94lLD7"]),
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(guild.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        }
    };
    const ActionSheetRow = tmp(7517).ActionSheetRow;
    intl = tmp(1112).intl;
    push(closure_22(ActionSheetRow, obj));
    if (null != guild.icon) {
      const push2 = items.push;
      let obj2 = {
        label: intl2.string(tmp(1112).t["7H30wR"]),
        onPress() {
              const tmp = React4(guild, closure_18, true);
              if (null != tmp) {
                const obj = ClipboardUtils;
                obj.copy(tmp);
                const obj2 = ToastUtils;
                obj2.presentLinkCopied();
              }
            }
      };
      const ActionSheetRow2 = tmp(7517).ActionSheetRow;
      intl2 = tmp(1112).intl;
      push2(closure_22(ActionSheetRow2, obj2));
    }
    if (null != guild.banner) {
      const push3 = items.push;
      let obj3 = {
        label: intl3.string(tmp(1112).t["2FoUnk"]),
        onPress() {
              const obj = AvatarUtilsDefault;
              const obj2 = { id: guild.id, banner: guild.banner };
              const guildBannerURL = obj.getGuildBannerURL(obj2, true);
              if (null != guildBannerURL) {
                const obj3 = ClipboardUtils;
                obj3.copy(guildBannerURL);
                const obj4 = ToastUtils;
                obj4.presentLinkCopied();
              }
            }
      };
      const ActionSheetRow3 = tmp(7517).ActionSheetRow;
      intl3 = tmp(1112).intl;
      push3(closure_22(ActionSheetRow3, obj3));
    }
    let obj4 = {
      hasIcons: false,
      title: intl4.string(tmp(1112).t.ObIb1Q),
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_22(React.Fragment, obj, index);
        })
    };
    const Group = tmp(7517).ActionSheetRow.Group;
    intl4 = tmp(1112).intl;
    return closure_22(Group, obj4);
  } else {
    return null;
  }
}
