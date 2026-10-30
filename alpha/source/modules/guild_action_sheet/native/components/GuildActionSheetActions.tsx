// Module ID: 15693
// Function ID: 15694
// Name: GuildActionSheetActions
// Dependencies: [19, 17, 7704, 1232, 4876, 6880, 4915, 6836, 6769, 1384, 1072, 7259, 8385, 6770, 21, 5009, 575, 504, 7362, 1114, 10978, 7508, 5039, 4842, 7700, 5253, 6738, 11540, 1995, 13789, 6036, 7320, 7345, 11483, 1188, 9182, 15694, 1197, 4839, 9058, 15695, 8728, 9276, 5619, 4834, 7159, 7282, 15744, 15745, 9070, 7342, 9025, 8976, 11561, 11588, 2405, 15746, 15749, 5955, 38, 15692, 11007, 11006, 6879, 11546, 15750, 8344, 8476, 13205, 7351, 7352, 5706, 1410, 2]
// Exports: GuildActionSheetDirectoryActions, GuildActionSheetGameOrganizationActions, GuildActionSheetPrimaryActions, GuildActionSheetSecondaryActions, GuildDeveloperOptionAction, GuildUnreadAction, handleLeaveServer

// Module 15693 (GuildActionSheetActions)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import _modDef2405 from "module_2405" /* 2405 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4839 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7259 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import ConnectionsUtils from "ConnectionsUtils" /* 7342 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import TidaWebformExperimentDefault from "TidaWebformExperiment" /* 7351 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import useGuildOnboardingAvailableDefault from "useGuildOnboardingAvailable" /* 7508 */;
import ChannelListState from "ChannelListState" /* 7700 */;
import ReportModals from "ReportModals" /* 8344 */;
import GuildTagConstants from "GuildTagConstants" /* 8385 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8476 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8976 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9025 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9070 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10978 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 11483 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11546 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11561 */;
import useCanInviteToLinkedGameOrganizationDefault from "useCanInviteToLinkedGameOrganization" /* 11588 */;
import useIsServerThemeAvailableForGuildDefault from "useIsServerThemeAvailableForGuild" /* 15694 */;
import markGuildsAsReadDefault from "markGuildsAsRead" /* 15744 */;
import GuildAntiRaidModalActionCreators from "GuildAntiRaidModalActionCreators" /* 15750 */;
import react from "react" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7704 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6880 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let Fonts;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp;
let tmp2;
const UserSettings = tmp(4834);
const DiscordTagDefault = tmp2(9182);
function HideMutedChannelsOption(guild) {
  let intl;
  guild = guild.guild;
  let obj = guild(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isGuildCollapsed(guild.id));
  const obj2 = {
    label: intl.string(guild(1114).t.UwOLJO),
    value: stateFromStores,
    onValueChange() {
      const obj = ChannelCollapseActionCreatorsDefault;
      return obj.toggleCollapseGuild(guild.id);
    }
  };
  const ActionSheetSwitchRow = guild(7362).ActionSheetSwitchRow;
  intl = guild(1114).intl;
  return closure_21(ActionSheetSwitchRow, obj2);
}
function BrowseChannelsOption(guild) {
  let stringResult;
  guild = guild.guild;
  const tmp2 = useGuildOnboardingAvailableDefault(guild);
  let obj = guild(5039);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(4842).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
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
    obj2.pushLazy(asyncRequire(11540, dependencyMap.paths), obj3, closure_18);
  }, items2);
  let tmp9Result = null;
  if (features.has(constants2.COMMUNITY)) {
    if (result) {
      let tmp9Result2;
      if (!stateFromStores) {
        tmp9Result2 = null;
      }
      const obj4 = { trailing: tmp9Result2, onPress: callback, label: stringResult };
      const intl = tmp3(1114).intl;
      const string = intl.string;
      const t = tmp3(1114).t;
      if (tmp2) {
        stringResult = string(t.h9mGOP);
      } else {
        stringResult = string(t.et6wav);
      }
      tmp9Result = tmp9(tmp10, obj4);
    }
    tmp9Result2 = tmp9(tmp3(13789).NewBadge, {});
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
  const tmp = closure_23();
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
      const Avatar = tmp7(1188).Avatar;
      items = [closure_21(Avatar, obj4), ];
      const obj9 = { user, nick: nickname, usernameStyle: null, discriminatorStyle: null, nicknameStyle: null };
      ({ identityName: obj5.usernameStyle, identityName: obj5.discriminatorStyle, identityName: obj5.nicknameStyle } = tmp);
      items[1] = closure_21(DiscordTagDefault, obj9);
      tmp9 = closure_22(View, obj3);
    }
  }
  return closure_21(ActionSheetRow, obj2);
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
    const obj2 = { label: intl.string(guild(1114).t.CFzDOG), value: stateFromStores === guild(1197).GuildThemeSourcePreference.GUILD, onValueChange: tmp5 };
    const ActionSheetSwitchRow = tmp3(7362).ActionSheetSwitchRow;
    intl = tmp3(1114).intl;
    tmp6 = closure_21(ActionSheetSwitchRow, obj2);
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
  const tmp = closure_23();
  let obj = guild(9058);
  [][0] = guild.id;
  const result = obj.canViewMobileServerTag(guild.id);
  if (result) {
    const profile = guild.profile;
    let badge;
    const getGuildTagBadgeUrl = tmp2(8728).getGuildTagBadgeUrl;
    const id = guild.id;
    tmp2(8728);
    if (profile != null) {
      badge = profile.badge;
    }
    const guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_16);
    let obj2 = { style: tmp.serverTagLabel, children: items };
    const ActionSheetRow = tmp2(7362).ActionSheetRow;
    const profile2 = guild.profile;
    let tag;
    const BaseGuildTagChiplet = tmp2(9276).BaseGuildTagChiplet;
    const tmp10 = GuildTagBadgeSize;
    const tmp13 = closure_22;
    if (profile2 != null) {
      tag = profile2.tag;
    }
    const obj3 = { label: tmp13(View, obj2), onPress: tmp5 };
    const obj4 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_21(BaseGuildTagChiplet, obj5) };
    obj5 = { guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: tmp10.SIZE_16 };
    items = [closure_21(View, obj4), ];
    const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(1114).t["2QmKZ2"]) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items[1] = closure_21(Text, obj6);
    return closure_21(ActionSheetRow, obj3);
  } else {
    return null;
  }
}
class RestrictedGuildPrivacyOption {
  constructor(guild) {
    let intl;
    let stringResult;
    guild = guild.guild;
    let RestrictedGuildIds = guild(4834).RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    const hasItem = setting.includes(guild.id);
    let obj = {
      label: intl.string(guild(1114).t.KXNTgb),
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
    const ActionSheetSwitchRow = guild(7362).ActionSheetSwitchRow;
    intl = guild(1114).intl;
    const features = guild.features;
    const hasItem1 = features.has(constants2.HUB);
    const intl2 = guild(1114).intl;
    const string = intl2.string;
    const t = guild(1114).t;
    const tmp2 = closure_21;
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
      label: intl.string(guild(1114).t.HcoRu0),
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = NotificationSettingsModalActionCreatorsDefault;
        obj2.open(guild.id);
      }
    };
    const ActionSheetRow = guild(7362).ActionSheetRow;
    intl = guild(1114).intl;
    return closure_21(ActionSheetRow, obj);
  }
}
const View = react_native.View;
({ isGuildOwner: metroImportDefault, getGuildIconURL: metroImportAll } = GuildRecord);
({ ChannelTypes: closure_14, GuildFeatures: closure_15, AnalyticsSections: closure_16, AVATAR_MAX_SIZE: closure_17, Fonts } = Constants);
let closure_18 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { guildServerAvatar: { marginRight: 4 }, identityName: obj2, identitySublabel: { flexDirection: "row" }, serverTagLabel: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
let closure_23 = createStyles(obj);
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
  const Group = guild(7362).ActionSheetRow.Group;
  const obj2 = {
    label: intl.string(guild(1114).t.e6RscS),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const items = [guild.id];
      markGuildsAsReadDefault(items, constants.GUILD_POPOUT);
    },
    disabled: !stateFromStores
  };
  const ActionSheetRow = guild(7362).ActionSheetRow;
  intl = guild(1114).intl;
  const children = [closure_21(ActionSheetRow, obj2), ];
  const features = guild.features;
  let tmp3Result = null;
  const tmp2 = closure_22;
  const tmp3 = closure_21;
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
  let obj = guild(15745);
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
      label: intl.string(guild(1114).t["fUYU+j"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = CreateChannelModalActionCreatorsDefault;
          obj2.open(null, guild.id, null, null);
        }
    };
    const ActionSheetRow = tmp(7362).ActionSheetRow;
    intl = tmp(1114).intl;
    push(closure_21(ActionSheetRow, obj3));
    const push2 = items1.push;
    const obj4 = {
      label: intl2.string(guild(1114).t["ISN+NM"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = CreateChannelModalActionCreatorsDefault;
          obj2.open(constants.GUILD_CATEGORY, guild.id, null, null);
        }
    };
    const ActionSheetRow2 = tmp(7362).ActionSheetRow;
    intl2 = tmp(1114).intl;
    push2(closure_21(ActionSheetRow2, obj4));
  }
  if (tmp3) {
    const push3 = items1.push;
    const obj5 = {
      label: intl3.string(guild(1114).t["60lJ0C"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
          const result = obj2.openCreateOrEditGuildEventModal(guild, {});
        }
    };
    const ActionSheetRow3 = tmp(7362).ActionSheetRow;
    intl3 = tmp(1114).intl;
    push3(closure_21(ActionSheetRow3, obj5));
  }
  if (stateFromStores) {
    const push4 = items1.push;
    const obj6 = {
      label: intl4.string(guild(1114).t.ghtnss),
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
    const ActionSheetRow4 = tmp(7362).ActionSheetRow;
    intl4 = tmp(1114).intl;
    push4(closure_21(ActionSheetRow4, obj6));
  }
  let tmp12 = null;
  if (0 !== items1.length) {
    const obj7 = {
      hasIcons: false,
      children: items1.map((children, index) => {
          const obj = { children };
          return closure_1_21(React.Fragment, obj, index);
        })
    };
    const Group = tmp(7362).ActionSheetRow.Group;
    tmp12 = closure_21(Group, obj7);
  }
  return tmp12;
}
export function GuildActionSheetGameOrganizationActions(guild) {
  let ActionSheetRow;
  let EnTIIr;
  let formatToPlainString;
  let intl2;
  let obj2;
  let obj3;
  guild = guild.guild;
  let tmp3 = null;
  if (useCanInviteToLinkedGameOrganizationDefault(guild, "guild_action_sheet")) {
    let obj = { hasIcons: false, children: closure_21(ActionSheetRow, obj2) };
    const Group = guild(7362).ActionSheetRow.Group;
    obj2 = {
      label: formatToPlainString(EnTIIr, obj3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = ActionSheetActionCreatorsDefault;
          const obj3 = { guildId: guild.id };
          obj2.openLazy(asyncRequire(15746, dependencyMap.paths), "GameOrganizationInviteActionSheet", obj3);
        }
    };
    ActionSheetRow = guild(7362).ActionSheetRow;
    const intl = guild(1114).intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { noun: intl2.string(_modDef2405.nVMqjA) };
    EnTIIr = tmp(2405).EnTIIr;
    intl2 = guild(1114).intl;
    tmp3 = closure_21(Group, obj);
  }
  return tmp3;
}
export function handleLeaveServer(guild) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const lazyResult = react.lazy(() => guild(paths[28])(paths[57], paths.paths));
  const obj2 = useAlertStore;
  const obj3 = { guild };
  obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
}
export function GuildActionSheetDirectoryActions(guild) {
  guild = guild.guild;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "GuildActionSheetDirectoryActions: user cannot be undefined");
  const items = [];
  const tmp4 = closure_7(guild, currentUser);
  items.push(closure_21(NotificationAction, { guild }));
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  let obj = guild(15692);
  const messageRequestPrivacyOption = obj.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (!tmp4) {
    let stringResult;
    const push = items.push;
    const features = guild.features;
    const ActionSheetRow = tmp9(7362).ActionSheetRow;
    const hasItem = features.has(constants2.HUB);
    const intl = tmp9(1114).intl;
    const string = intl.string;
    const t = tmp9(1114).t;
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
          const lazyResult = react.lazy(() => guild(paths[28])(paths[57], paths.paths));
          const obj2 = useAlertStore;
          const obj3 = { guild };
          obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
        }
    };
    push(closure_21(ActionSheetRow, obj2));
  }
  let tmp5Result = null;
  if (0 !== items.length) {
    let obj3 = {
      hasIcons: false,
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_21(React.Fragment, obj, index);
        })
    };
    const Group = tmp9(7362).ActionSheetRow.Group;
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
  const tmp2 = closure_7(guild, currentUser);
  let obj = guild(11007);
  const canReportRaid = obj.useCanReportRaid(guild);
  let obj2 = guild(11006);
  const guildIncidentsState = obj2.useGuildIncidentsState(guild.id);
  const items = [];
  ({ shouldShowIncidentActions, isUnderLockdown } = guildIncidentsState);
  let obj3 = guild(6879);
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guild.id);
  items.push(closure_21(ChangeIdentityOption, { guild, user: currentUser }));
  items.push(closure_21(GuildThemePreferenceOption, { guild }));
  items.push(closure_21(ServerTagOption, { guild }));
  const features = guild.features;
  const tmp12 = constants2;
  if (features.has(constants2.COMMUNITY)) {
    const push = items.push;
    let obj4 = {
      label: intl.string(guild(1114).t.FB2ZZV),
      value: !optInEnabledForGuild,
      onValueChange() {
          const obj = OptInOnboardingUtils;
          return obj.toggleShowAllChannels(guild.id);
        }
    };
    const ActionSheetSwitchRow = tmp3(7362).ActionSheetSwitchRow;
    intl = tmp3(1114).intl;
    push(closure_21(ActionSheetSwitchRow, obj4));
  }
  items.push(closure_21(HideMutedChannelsOption, { guild }));
  items.push(closure_21(RestrictedGuildPrivacyOption, { guild }));
  const tmp3Result = guild(15692);
  const messageRequestPrivacyOption = tmp3Result.useMessageRequestPrivacyOption({ guild });
  if (null != messageRequestPrivacyOption) {
    items.push(messageRequestPrivacyOption);
  }
  if (canReportRaid) {
    const push2 = items.push;
    const obj5 = {
      label: intl2.string(guild(1114).t.cswId3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = GuildAntiRaidModalActionCreators;
          obj2.openReportRaidModal(guild.id);
        }
    };
    const ActionSheetRow = tmp3(7362).ActionSheetRow;
    intl2 = tmp3(1114).intl;
    push2(closure_21(ActionSheetRow, obj5));
  }
  if (!tmp2) {
    const push3 = items.push;
    const obj6 = {
      label: intl3.string(guild(1114).t.Aen9eh),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = ReportModals;
          const result = obj2.showReportModalForGuild(guild);
        }
    };
    const ActionSheetRow2 = tmp3(7362).ActionSheetRow;
    intl3 = tmp3(1114).intl;
    push3(closure_21(ActionSheetRow2, obj6));
  }
  if (shouldShowIncidentActions) {
    let stringResult;
    const push4 = items.push;
    const ActionSheetRow3 = tmp3(7362).ActionSheetRow;
    const intl4 = tmp3(1114).intl;
    const string = intl4.string;
    const t = tmp3(1114).t;
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
          obj3.openLazy(asyncRequire(13205, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        }
    };
    push4(closure_21(ActionSheetRow3, obj7));
  }
  if (!tmp2) {
    let string2Result;
    const push5 = items.push;
    const features2 = guild.features;
    const ActionSheetRow4 = tmp3(7362).ActionSheetRow;
    const hasItem = features2.has(tmp12.HUB);
    const intl5 = tmp3(1114).intl;
    const string2 = intl5.string;
    const t2 = tmp3(1114).t;
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
          const lazyResult = react.lazy(() => guild(paths[28])(paths[57], paths.paths));
          const obj2 = useAlertStore;
          const obj3 = { guild };
          obj2.openAlert("guild-action-sheet-leave-server", closure_21(lazyResult, obj3));
        }
    };
    push5(closure_21(ActionSheetRow4, obj8));
  }
  let tmp8Result = null;
  if (0 !== items.length) {
    const obj9 = {
      hasIcons: false,
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_21(React.Fragment, obj, index);
        })
    };
    const Group = tmp3(7362).ActionSheetRow.Group;
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
  const DeveloperMode = guild(4834).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  TidaWebformExperimentDefault;
  if (setting) {
    const items = [];
    const push = items.push;
    let obj = {
      label: intl.string(tmp(1114).t["94lLD7"]),
      onPress() {
          const obj = ClipboardUtils;
          obj.copy(guild.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        }
    };
    const ActionSheetRow = tmp(7362).ActionSheetRow;
    intl = tmp(1114).intl;
    push(closure_21(ActionSheetRow, obj));
    if (tmp5) {
      if (null != guild.icon) {
        const push2 = items.push;
        let obj2 = {
          label: intl2.string(tmp(1114).t["7H30wR"]),
          onPress() {
                  const tmp = metroImportAll(guild, closure_17, true);
                  if (null != tmp) {
                    const obj = ClipboardUtils;
                    obj.copy(tmp);
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
        };
        const ActionSheetRow2 = tmp(7362).ActionSheetRow;
        intl2 = tmp(1114).intl;
        push2(closure_21(ActionSheetRow2, obj2));
      }
      if (null != guild.banner) {
        const push3 = items.push;
        let obj3 = {
          label: intl3.string(tmp(1114).t["2FoUnk"]),
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
        const ActionSheetRow3 = tmp(7362).ActionSheetRow;
        intl3 = tmp(1114).intl;
        push3(closure_21(ActionSheetRow3, obj3));
      }
    }
    let obj4 = {
      hasIcons: false,
      title: intl4.string(tmp(1114).t.ObIb1Q),
      children: items.map((children, index) => {
          const obj = { children };
          return closure_1_21(React.Fragment, obj, index);
        })
    };
    const Group = tmp(7362).ActionSheetRow.Group;
    intl4 = tmp(1114).intl;
    return closure_21(Group, obj4);
  } else {
    return null;
  }
}
