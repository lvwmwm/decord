// Module ID: 11961
// Function ID: 11962
// Name: ChatBeginningRow
// Dependencies: [32, 5, 19, 17, 4825, 2044, 6695, 9049, 6528, 7035, 2049, 2063, 2045, 4467, 2108, 2067, 4469, 4479, 5017, 1372, 1074, 2052, 11088, 11962, 11936, 10926, 21, 4836, 576, 5385, 1115, 5387, 5375, 5374, 5392, 5394, 5266, 4832, 4525, 4531, 5435, 11103, 1177, 11963, 8085, 9713, 504, 4678, 7403, 4989, 9016, 6693, 6690, 10090, 4767, 4823, 11964, 11965, 38, 11, 11967, 4527, 9048, 5450, 11971, 11973, 9275, 11972, 2111, 12085, 12089, 8089, 4849, 5281, 12093, 5205, 12094, 6591, 8765, 1241, 9614, 7391, 6540, 6535, 4528, 4800, 12096, 1981, 6583, 12097, 7632, 7624, 6610, 12098, 7636, 6760, 5039, 12115, 5896, 9195, 10330, 12117, 10927, 12124, 8055, 11085, 7826, 4654, 2029, 11097, 11089, 11086, 11087, 11093, 8122, 9492, 6642, 10371, 4775, 12128, 12132, 2]
// Exports: default

// Module 11961 (ChatBeginningRow)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import LinkingDefault from "Linking" /* 4525 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import useToken from "useToken" /* 4531 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ChatIcon from "ChatIcon" /* 5385 */;
import ThreadIcon from "ThreadIcon" /* 5387 */;
import TextLockIcon from "TextLockIcon" /* 5392 */;
import TextIcon from "TextIcon" /* 5394 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6528 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6591 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import RowButton2 from "RowButton" /* 8055 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import ReportModals from "ReportModals" /* 8089 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import PencilIcon from "PencilIcon" /* 9713 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 10926 */;
import openGroupDMAddMembers from "openGroupDMAddMembers" /* 11085 */;
import GroupDMConstants from "GroupDMConstants" /* 11088 */;
import showChatGDMUpsellActionSheetDefault from "showChatGDMUpsellActionSheet" /* 11097 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11103 */;
import MessageRequestConstants from "MessageRequestConstants" /* 11936 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12093 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12094 */;
import PortalAccessibilityWorkaroundViewDefault from "PortalAccessibilityWorkaroundView" /* 12132 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6695 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import GuildProgressConstants from "GuildProgressConstants" /* 11962 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const openGroupDMAddMembersDefault = openGroupDMAddMembers;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, c3, dependencyMap, importDefault;

let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_40;
let closure_41;
let closure_44;
let closure_45;
let closure_46;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let tmp;
let tmp4;
const AssetRegistryDefault = tmp4(11963);
const ChannelAccessInfoDefault = tmp(11964);
function ChatBeginningRowIcon(arg0) {
  let IconComponent;
  let channelType;
  let intl;
  let isForumPost;
  let isNSFW;
  let isPrivate;
  let isThread;
  let label;
  let obj6;
  let tmp4;
  let tmp5;
  ({ isPrivate, isNSFW } = arg0);
  ({ isThread, isForumPost, channelType } = arg0);
  const tmp = closure_47();
  if (isForumPost) {
    tmp4 = require;
    tmp5 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
    const obj2 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
  } else if (isThread) {
    tmp4 = require;
    tmp5 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
    const obj3 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
  } else if (channelType === constants4.GUILD_APP) {
    let AppsIcon;
    let tmp9;
    if (isPrivate) {
      AppsIcon = tmp6(5375).AppsLockIcon;
      tmp9 = tmp6;
    } else {
      AppsIcon = tmp6(5374).AppsIcon;
      tmp9 = tmp6;
    }
    tmp4 = tmp9;
    tmp5 = { IconComponent: AppsIcon, label: tmp9(1115).t.ZkcrC2 };
    const obj = { IconComponent: AppsIcon, label: tmp9(1115).t.ZkcrC2 };
  } else {
    const obj4 = { IconComponent: null, label: null };
    if (isPrivate) {
      obj4.IconComponent = TextLockIcon.TextLockIcon;
      obj4.label = intl10.t.GK18KJ;
      tmp4 = tmp14;
      tmp5 = obj4;
    } else {
      obj4.IconComponent = TextIcon.TextIcon;
      obj4.label = intl10.t.GK18KJ;
      tmp4 = tmp14;
      tmp5 = obj4;
    }
  }
  const obj5 = { style: tmp.iconContainer, children: numOpens(IconComponent, obj6) };
  obj6 = { size: "lg", color: "icon-strong", accessibilityLabel: intl.string(label) };
  ({ IconComponent, label } = tmp5);
  intl = tmp4(1115).intl;
  return numOpens(metroImportDefault, obj5);
}
function ChatBeginningRowHeader(arg0) {
  let channelType;
  let fn;
  let isForumPost;
  let isGameInvitesPost;
  let isNSFW;
  let isPrivate;
  let isThread;
  let subtitle;
  let subtitleLink;
  let title;
  ({ subtitle, isForumPost, isGameInvitesPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW, channelType } = arg0);
  const tmp = closure_47();
  let obj = subtitleLink(5266);
  const tmp4 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  let tmp5Result = !isGameInvitesPost;
  if (tmp5Result) {
    const obj2 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items = [closure_44(ChatBeginningRowIcon, obj2), ];
    const items1 = [tmp.title, ];
    let num = 8;
    const Text = tmp2(4832).Text;
    const tmp8 = closure_44;
    if (isForumPost) {
      num = 0;
    }
    const obj3 = { children: items };
    const obj4 = { style: items1, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    items[1] = tmp8(Text, obj4);
    tmp5Result = tmp5(tmp6, obj3);
  }
  const children = [tmp5Result, ];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    let str;
    const Text2 = tmp2(4832).Text;
    const tmp11 = closure_44;
    if (tmp4) {
      str = "link";
    }
    const obj6 = { accessibilityRole: str, onPress: fn, style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: subtitle };
    fn = undefined;
    if (tmp4) {
      fn = () => {
        const obj = LinkingDefault;
        return obj.openURL(subtitleLink);
      };
    }
    tmp11Result = tmp11(Text2, obj6);
  }
  children[1] = tmp11Result;
  return closure_46(closure_45, { children });
}
function LinkManageButtons(arg0) {
  let canEdit;
  let canManageRoles;
  let id;
  let intl;
  let intl2;
  let isPrivate;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let require;
  let theme;
  ({ canEdit, isPrivate, channel: require } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = closure_47();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_LINK, theme);
  let obj2 = { style: tmp.ctaContainer, children: items3 };
  const tmp7 = closure_7;
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
          const obj = channel_permissions_ChannelPermissionsUtils;
          return obj.openAddMembersActionSheet(require);
        },
      style: items,
      children: items1
    };
    items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    const PressableOpacity = tmp2(5435).PressableOpacity;
    const obj4 = { source: AssetRegistryDefault, size: native.IconSizes.REFRESH_SMALL_16, color: token };
    const Icon = tmp2(1177).Icon;
    items1 = [closure_44(Icon, obj4), ];
    const obj5 = { style: items2, variant: "text-sm/medium", color: "text-link", children: intl.string(intl10.t.dMJ3Y6) };
    items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1[1] = closure_44(Text, obj5);
    isPrivate = tmp6(PressableOpacity, obj3);
  }
  items3 = [isPrivate, ];
  if (canEdit) {
    const obj6 = {
      accessibilityRole: "button",
      onPress() {
          const obj = ChannelSettingsActionCreatorsDefault;
          obj.setSection(constants.OVERVIEW);
          const obj2 = ChannelSettingsActionCreatorsDefault;
          obj2.open(require.id);
        },
      style: items4,
      children: items5
    };
    items4 = [, ];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    const PressableOpacity2 = tmp2(5435).PressableOpacity;
    const obj7 = { size: "xs", color: token };
    items5 = [closure_44(PencilIcon.PencilIcon, obj7), ];
    const obj8 = { style: items6, variant: "text-sm/medium", color: "text-link", children: intl2.string(intl10.t.GE1Tlo) };
    items6 = [tmp.ctaLabel];
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items5[1] = closure_44(Text2, obj8);
    canEdit = tmp6(PressableOpacity2, obj6);
  }
  items3[1] = canEdit;
  return closure_46(tmp7, obj2);
}
function ThreadOwner(arg0) {
  let guildId;
  let items3;
  let require;
  let roleStyle;
  ({ userId: require, guildId } = arg0);
  const tmp = closure_47();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(_require));
  const items1 = [GuildMemberStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != _require) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  });
  const items2 = [AccessibilityStore];
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => roleStyle.roleStyle);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.nick;
  }
  if (str == null) {
    const obj4 = guildId(4678);
    str = obj4.getName(stateFromStores);
  }
  if (str == null) {
    str = "???";
  }
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  let colorStrings;
  if (stateFromStores1 != null) {
    colorStrings = stateFromStores1.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
  enhanced_role_colors_EnhancedRoleColorUtils;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp16;
    if (null != colorString) {
      tmp16 = { color: colorString };
      const obj5 = { color: colorString };
    }
    let tmp18;
    const Text = tmp2(4832).Text;
    const tmp17 = closure_44;
    if (tmp12) {
      tmp18 = processColorStringsArray;
    }
    const obj6 = { gradientColors: tmp18, style: tmp16, variant: "text-md/semibold", color: "text-default", children: str };
    return tmp17(Text, obj6);
  } else {
    let tmp13 = "dot" === stateFromStores2;
    const tmp19 = closure_46;
    const tmp20 = closure_45;
    if (tmp13) {
      tmp13 = null != colorString;
    }
    if (tmp13) {
      const obj7 = { color: colorString, colors: colorStrings, containerStyles: tmp.threadCreatorRoleDot };
      tmp13 = closure_44(tmp2(1177).RoleDot, obj7);
    }
    const obj8 = { children: items3 };
    items3 = [tmp13, ];
    const obj9 = { variant: "text-md/semibold", color: "text-default", children: str };
    items3[1] = closure_44(Text_Text.Text, obj9);
    return tmp19(tmp20, obj8);
  }
}
function ChatBeginningRowThread(channel) {
  let intl;
  let intl2;
  let obj7;
  channel = channel.channel;
  const tmp = closure_47();
  const tmp3 = useChannelNameDefault(channel);
  let obj = channel(9016);
  const result = obj.isPrivateGuildChannel(channel);
  const obj2 = channel(6693);
  const appliedTags = obj2.useAppliedTags(channel);
  const obj3 = channel(6690);
  const isGameInvitesPost = obj3.useIsGameInvitesPost(channel);
  channel(504);
  [][0] = ForumPostMessagesStore;
  let tmp10Result = null;
  if (null != channel.threadMetadata) {
    const obj4 = { isNSFW: channel.isNSFW(), title: tmp3, isPrivate: result, isThread: true, isForumPost: channel.isForumPost(), isGameInvitesPost };
    const items = [closure_44(ChatBeginningRowHeader, obj4), , , ];
    let tmp12Result = null;
    const tmp10 = closure_46;
    const tmp11 = closure_45;
    if (channel.isForumPost()) {
      tmp12Result = null;
      if (appliedTags.length > 0) {
        const obj5 = {
          style: tmp.tagContainer,
          children: appliedTags.map((tag) => {
                  const obj = { tag };
                  return closure_1_44(channel(dependencyMap[53]).AppliedForumTagPill, obj, tag.id);
                })
        };
        tmp12Result = tmp12(closure_7, obj5);
      }
    }
    items[1] = tmp12Result;
    let tmp12Result3 = !channel.isForumPost();
    channel.isForumPost();
    if (tmp12Result3) {
      const obj6 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: intl.format(channel(1115).t.imPXd5, obj7) };
      const Text = tmp4(4832).Text;
      intl = tmp4(1115).intl;
      obj7 = {
        usernameHook(arg0, arg1) {
              const obj = { userId: channel.ownerId, guildId: channel.guild_id };
              return numOpens(ThreadOwner, obj, arg1);
            }
      };
      tmp12Result3 = tmp12(Text, obj6);
    }
    items[2] = tmp12Result3;
    let tmp12Result4 = null;
    if (channel.isForumPost()) {
      tmp12Result4 = null;
      if (null == tmp8) {
        const obj8 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: intl2.string(channel(1115).t.mE3KJN) };
        const Text2 = tmp4(4832).Text;
        intl2 = tmp4(1115).intl;
        tmp12Result4 = tmp12(Text2, obj8);
      }
    }
    const obj9 = { children: items };
    items[3] = tmp12Result4;
    tmp10Result = tmp10(tmp11, obj9);
  }
  return tmp10Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  let formatResult;
  channel = channel.channel;
  const guild = channel.guild;
  const tmp3 = useChannelNameDefault(channel, true);
  const tmp4 = useChannelNameDefault(channel, false);
  const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
  const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
  const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
  let obj = channel(9016);
  const result = obj.isPrivateGuildChannel(channel);
  const tmp10 = useThemeDefault();
  const intl = channel(1115).intl;
  const formatToPlainStringResult = intl.formatToPlainString(channel(1115).t.q0tgLe, { channelName: tmp3 });
  const intl2 = channel(1115).intl;
  if (result) {
    let obj2 = {
      channelName: tmp3,
      topicHook() {
          const obj = MarkupUtilsDefault;
          const obj2 = { channelId: channel.id };
          return obj.parseTopic(channel.topic, true, obj2);
        }
    };
    formatResult = intl2.format(tmp8(1115).t.QuwqjG, obj2);
  } else if (canResult2) {
    const obj3 = { channelName: tmp3 };
    formatResult = intl2.formatToPlainString(tmp8(1115).t.JHKUGB, obj3);
  } else {
    const obj4 = { channelName: tmp4 };
    formatResult = intl2.format(tmp8(1115).t.hPVEQG, obj4);
  }
  const children = [, , ];
  const obj5 = { title: formatToPlainStringResult, subtitle: formatResult, isPrivate: result, channelType: channel.type };
  children[0] = closure_44(ChatBeginningRowHeader, obj5);
  children[1] = closure_44(LinkManageButtons, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp10 });
  let tmp15Result = null;
  const tmp13 = closure_46;
  const tmp14 = closure_45;
  const tmp15 = closure_44;
  if (result) {
    tmp15Result = null;
    if (canResult) {
      const obj6 = { channel, guild };
      tmp15Result = tmp15(ChannelAccessInfoDefault, obj6);
    }
  }
  children[2] = tmp15Result;
  return tmp13(tmp14, { children });
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const items = [GuildChannelStore];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
    let tmp4;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      const obj2 = { guild, channel };
      tmp4 = closure_44(ChatBeginningRowGuildDefaultChannel, obj2);
    }
    return tmp4;
  }
  tmp4 = closure_44(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
}
function DMSpamButton(channel) {
  let intl;
  channel = channel.channel;
  const user = channel.user;
  const tmp = channel;
  const showingSpamBanner = channel.showingSpamBanner;
  let obj = channel(12089);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      const obj2 = {
        size: "sm",
        variant: "destructive",
        text: intl.string(tmp(1115).t.HHZmDn),
        disabled: null == message,
        onPress: function handleShowReportModal() {
              let id;
              if (null != message) {
                let obj = ReportModals;
                const result = obj.showReportModalForFirstDM(tmp, () => {
                  const obj = message(dependencyMap[72]);
                  obj.closePrivateChannel(id.id, true);
                });
              }
            }
      };
      const Button = tmp(5281).Button;
      intl = tmp(1115).intl;
      return closure_44(Button, obj2);
    }
  }
  return null;
}
function ManageAppButton(application) {
  let Icon;
  let intl;
  let obj3;
  let scopes;
  let selfEmbeddedActivities;
  application = application.application;
  ({ channel: importDefault, oauth2Token: dependencyMap } = application);
  const user = application.user;
  let tmp2 = application;
  const tmp = closure_47();
  let obj = application(504);
  const items = [EmbeddedActivitiesStore];
  let closure_3 = obj.useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
  let tmp4 = null;
  if (user.bot) {
    tmp4 = null;
    if (null != application) {
      let obj2 = {
        size: "sm",
        variant: "secondary",
        text: intl.string(tmp2(1115).t["5S3sQF"]),
        icon: closure_44(Icon, obj3),
        onPress() {
              let id;
              let id2;
              let obj = useAlertStore;
              let obj2 = {
                application,
                scopes: dependencyMap.scopes,
                onDelete() {
                  const obj = AuthorizedAppsActionCreatorsDefault;
                  obj.delete(id2.id);
                  const value = closure_1_3.get(id.id);
                  let _location;
                  const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
                  EmbeddedActivitiesNativeManagerDefault;
                  const tmp2 = id;
                  if (value != null) {
                    _location = value.location;
                  }
                  const obj2 = { location: _location, applicationId: tmp2.id };
                  leaveActivity(obj2);
                }
              };
              obj.openAlert("confirm-delete-authed-app", numOpens(UserSettingsAuthedAppDeleteWarningModalDefault, obj2));
              const obj3 = AnalyticsUtilsDefault;
              const obj4 = { application_id: application.id, channel_id: importDefault.id, channel_type: importDefault.type };
              obj3.track(constants.APP_MANAGE_CTA_CLICKED, obj4);
            }
      };
      const Button = tmp2(5281).Button;
      intl = tmp2(1115).intl;
      obj3 = { size: tmp2(1177).Icon.Sizes.SMALL, source: AssetRegistryDefault2, style: tmp.appDMButtonIcon };
      Icon = tmp2(1177).Icon;
      tmp4 = closure_44(Button, obj2);
    }
  }
  return tmp4;
}
function MuteAppButton(channel) {
  let Icon;
  let WHITE;
  let closure_1;
  let obj3;
  let stringResult;
  channel = channel.channel;
  let stateFromStores;
  const user = channel.user;
  const tmp = closure_47();
  importDefault = tmp;
  let obj = channel(stateFromStores[46]);
  const items = [UserGuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (user.bot) {
    let str = "destructive";
    const Button = tmp2(tmp3[73]).Button;
    if (stateFromStores) {
      str = "secondary";
    }
    let obj2 = {
      size: "sm",
      variant: str,
      text: stringResult,
      icon: tmp6(Icon, obj3),
      onPress() {
          let intl;
          if (stateFromStores) {
            let obj = { guildId: null, channelId: channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
            const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
            NotificationSettingsModalActionCreatorsDefault;
            const result = updateChannelOverrideSettings(obj);
            let obj2 = {
              key: "NOTIFICATIONS_UNMUTED",
              content: intl.string(intl10.t["/6kulz"]),
              icon() {
                  let Icon;
                  let obj2;
                  const obj = { style: closure_1_1.unmutedNotificationContainer, children: closure_2_44(Icon, obj2) };
                  obj2 = { source: closure_1(stateFromStores[81]), color: closure_1(stateFromStores[28]).unsafe_rawColors.WHITE, style: closure_1_1.unmutedNotification };
                  Icon = channel(stateFromStores[42]).Icon;
                  return closure_2_44(closure_2_7, obj);
                }
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl10.intl;
            open(obj2);
          } else {
            const obj3 = { channel };
            const tmpResult2 = ActionSheetActionCreatorsDefault;
            tmpResult2.openLazy(asyncRequire(12096, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj3);
          }
        }
    };
    let intl = tmp2(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[30]).t;
    if (stateFromStores) {
      stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj3 = { size: tmp2(tmp3[42]).Icon.Sizes.SMALL, source: importDefault(stateFromStores ? tmp3[80] : tmp3[81]), color: WHITE, style: tmp.appDMButtonIcon };
    Icon = tmp2(tmp3[42]).Icon;
    WHITE = undefined;
    if (!stateFromStores) {
      WHITE = tmp8(tmp3[28]).unsafe_rawColors.WHITE;
    }
    tmp6Result = tmp6(Button, obj2);
  }
  return tmp6Result;
}
function ChatBeginningRowDMGuard(arg0) {
  _require = arg0;
  const items = [UserStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    channel = channel.channel;
    return UserStore.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { user: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = closure_44(ChatBeginningRowDM, obj2);
  }
  return tmp2;
}
function ChatBeginningRowDM(channel) {
  let Avatar;
  let authorizedAppToken;
  let authorizedAppsFetchState;
  let closure_2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj16;
  let obj6;
  let obj8;
  let relationshipType;
  let tmp24;
  channel = channel.channel;
  const user = channel.user;
  authorizedAppsFetchState = undefined;
  let userTag;
  const showingSpamBanner = channel.showingSpamBanner;
  let tmp = closure_47();
  dependencyMap = tmp;
  const analyticsLocations = user(6583)().analyticsLocations;
  let id;
  const tmp4 = user(12097);
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_30;
  }
  let tmp4Result = tmp4(id);
  id = tmp4Result;
  let obj = channel(504);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    id = undefined;
    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
    const obj = AuthorizedAppsStore;
    if (id != null) {
      id = id.id;
    }
    const obj2 = { authorizedAppToken: getNewestTokenForApplication(id), authorizedAppsFetchState: obj.getFetchState() };
    return obj2;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj2 = channel(504);
  let items1 = [UserProfileStore];
  let items2 = [user];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = UserProfileStore.getMutualGuilds(tmp.id);
    }
    return mutualGuilds;
  }, items2);
  let items3 = [user, channel];
  const isSystemDMResult = channel.isSystemDM();
  const effect = authorizedAppsFetchState.useEffect(() => {
    let getAvatarURL;
    let guild_id;
    ({ id, getAvatarURL } = user);
    const tmp = maybeFetchUserProfileDefault;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true, dispatchWait: true });
  }, items3);
  let bot;
  const useEffect = authorizedAppsFetchState.useEffect;
  if (user != null) {
    bot = user.bot;
  }
  const items4 = [bot, authorizedAppToken, authorizedAppsFetchState];
  const effect1 = useEffect(() => {
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    if (bot) {
      bot = authorizedAppsFetchState === FetchState.NOT_FETCHED;
    }
    if (bot) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    const tmp2Result = user(4678);
    userTag = tmp2Result.getUserTag(user, { decoration: "never", identifiable: "always" });
    const tmp2Result2 = user(4678);
    const name = tmp2Result2.getName(user);
    let intl6 = tmp7(1115).intl;
    let stringResult = intl6.string(tmp7(1115).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1115).intl;
      let obj3 = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1115).t.Q56TRC, obj3);
    }
    function handleCopyUserTag() {
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }
    let obj4 = { channel, user, showingSpamBanner };
    let tmp17 = closure_44(DMSpamButton, obj4);
    let tmp18 = closure_46;
    let obj5 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
          const obj = { userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        },
      accessibilityLabel: intl2.string(channel(1115).t.iXAna6),
      children: closure_44(Avatar, obj6)
    };
    const PressableOpacity = tmp7(5435).PressableOpacity;
    intl2 = tmp7(1115).intl;
    obj6 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(1177).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    Avatar = tmp7(1177).Avatar;
    const items5 = [closure_44(PressableOpacity, obj5), , , , , , ];
    let obj7 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: intl3.string(channel(1115).t.y5MwJy), children: closure_44(channel(4832).Text, obj8) };
    const PressableOpacity2 = tmp7(5435).PressableOpacity;
    intl3 = tmp7(1115).intl;
    obj8 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    items5[1] = closure_44(PressableOpacity2, obj7);
    let tmp15Result = null;
    if (!user.isProvisional) {
      let obj9 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: intl4.string(channel(1115).t.y5MwJy), children: tmp15(channel(4832).Text, obj10) };
      const PressableOpacity3 = tmp7(5435).PressableOpacity;
      intl4 = tmp7(1115).intl;
      obj10 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      tmp15Result = tmp15(PressableOpacity3, obj9);
    }
    items5[2] = tmp15Result;
    let obj11 = { style: tmp.dmBeginningMessage, variant: "text-md/medium", color: "text-default", children: stringResult };
    items5[3] = closure_44(channel(4832).Text, obj11);
    let tmp15Result2 = null;
    if (user.isProvisional) {
      let obj12 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp15Result2 = tmp15(tmp7(12124).ChatProvisionalAccountExplainerCard, obj12);
    }
    items5[4] = tmp15Result2;
    let tmp18Result;
    if (null != stateFromStores) {
      if (stateFromStores.length >= 1) {
        let num2 = 5;
        const slice = stateFromStores.slice;
        if (stateFromStores.length > 5) {
          num2 = 4;
        }
        function handleOpenMutualGuilds() {
          if (null != user) {
            let obj = ActionSheetActionCreatorsDefault;
            let obj2 = {
              user: tmp,
              onPressMutualGuild(arg0) {
                  const obj = channel(closure_1_2[94]);
                  const result = obj.trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                  const obj2 = channel(closure_1_2[95]);
                  obj2.transitionToGuild(arg0);
                  const obj3 = user(closure_1_2[85]);
                  obj3.hideActionSheet();
                  const obj4 = user(closure_1_2[96]);
                  obj4.popWithKey(closure_1_42);
                }
            };
            obj.openLazy(asyncRequire(12098, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
          }
        }
        const substr = slice(0, num2);
        let obj13 = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: tmp.mutualGuildsContainer, children: items6 };
        const PressableOpacity4 = tmp7(5435).PressableOpacity;
        let obj14 = {
          size: channel(5896).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: channel(closure_2[98]).GuildIconSizes.SMALL };
                  const tmp = user(closure_2[98]);
                  return closure_1_44(tmp, obj, guild.id);
                })
        };
        const GuildIconPile = tmp7(12115).GuildIconPile;
        items6 = [tmp15(GuildIconPile, obj14), ];
        let obj15 = { style: tmp.mutualGuildsLabel, variant: "text-sm/medium", color: "text-default", children: intl5.format(channel(1115).t.eE3oep, obj16) };
        let Text = tmp7(4832).Text;
        intl5 = tmp7(1115).intl;
        obj16 = { count: stateFromStores.length };
        items6[1] = closure_44(Text, obj15);
        tmp18Result = tmp18(PressableOpacity4, obj13);
      }
    }
    items5[5] = tmp18Result;
    const obj17 = { style: tmp.dmButtonRow, children: tmp24 };
    tmp24 = null;
    const tmp23 = closure_7;
    if (!user.isNonUserBot()) {
      let tmp18Result4;
      if (user.bot) {
        let tmp18Result3 = null;
        if (null != authorizedAppToken) {
          tmp18Result3 = null;
          if (null != tmp4Result) {
            const obj18 = { children: items7 };
            const obj19 = { channel, user };
            items7 = [tmp15(MuteAppButton, obj19), ];
            const obj20 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
            items7[1] = closure_44(ManageAppButton, obj20);
            tmp18Result3 = tmp18(tmp19, obj18);
          }
        }
        const obj21 = { children: items8 };
        items8 = [tmp18Result3, tmp17];
        tmp18Result4 = tmp18(tmp19, obj21);
      } else {
        const obj22 = { reportButton: tmp17 };
        tmp18Result4 = tmp15(function RelationshipButtons(reportButton) {
          let format;
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let intl6;
          let intl7;
          let intl8;
          let intl9;
          let items1;
          let items2;
          let obj10;
          let obj5;
          let uIomXw;
          reportButton = reportButton.reportButton;
          function handleBlock() {
            const obj = user(paths[85]);
            const obj2 = { userId: user.id, channelId: id.id };
            obj.openLazy(channel(paths[87])(paths[102], paths.paths), closure_2_43, obj2);
          }
          let obj = get_initialized;
          const items = [RelationshipStore];
          const stateFromStores = obj.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
          let obj2 = { text: intl.string(intl10.t.l4Emac), size: "sm", variant: "secondary", onPress: handleBlock };
          const Button = components_Button_Button.Button;
          intl = intl10.intl;
          if (stateFromStores === constants.PENDING_INCOMING) {
            let obj3 = { style: paths.pendingIncoming, children: items1 };
            const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(uIomXw, obj5) };
            const Text = Text_Text.Text;
            const intl5 = intl10.intl;
            format = intl5.format;
            obj5 = { username: obj10.getName(user) };
            uIomXw = intl10.t.uIomXw;
            obj10 = UserUtilsDefault;
            items1 = [numOpens(Text, obj4), ];
            const obj6 = { style: paths.pendingIncomingButtons, children: items2 };
            const obj7 = {
              text: intl6.string(intl10.t["+WbSn5"]),
              size: "sm",
              variant: "active",
              onPress: function handleAcceptFriend() {
                  const obj = user(paths[100]);
                  const obj2 = { userId: user.id, location: constants.DM_CHANNEL };
                  const result = obj.maybeConfirmFriendRequestAccept(obj2);
                }
            };
            const Button5 = components_Button_Button.Button;
            intl6 = intl10.intl;
            items2 = [numOpens(Button5, obj7), , , ];
            const obj8 = {
              text: intl7.string(intl10.t.rQSndv),
              size: "sm",
              variant: "secondary",
              onPress: function handleIgnoreFriendRequest() {
                  const obj = user(paths[99]);
                  const obj2 = { location: constants.DM_CHANNEL };
                  obj.cancelFriendRequest(user.id, obj2);
                }
            };
            const Button6 = components_Button_Button.Button;
            intl7 = intl10.intl;
            items2[1] = numOpens(Button6, obj8);
            const obj9 = { text: intl8.string(intl10.t.l4Emac), size: "sm", variant: "secondary", onPress: handleBlock };
            const Button7 = components_Button_Button.Button;
            intl8 = intl10.intl;
            items2[2] = numOpens(Button7, obj9);
            items2[3] = reportButton;
            items1[1] = closure_46(metroImportDefault, obj6);
            return closure_46(metroImportDefault, obj3);
          } else {
            let tmp4Result2;
            const tmp17 = closure_46;
            const tmp18 = closure_45;
            if (constants.NONE === stateFromStores) {
              let bot;
              if (user != null) {
                bot = user.bot;
              }
              let tmp4Result = null;
              if (!bot) {
                function handleAddFriend() {
                  let obj3;
                  const obj2 = { userId: user.id, context: obj3 };
                  obj3 = { location: constants.DM_CHANNEL };
                  const obj = user(paths[99]);
                  obj.addRelationship(obj2);
                }
                const obj11 = { text: intl4.string(intl10.t["PMsq/b"]), size: "sm", variant: "active", onPress: handleAddFriend };
                const Button4 = components_Button_Button.Button;
                intl4 = intl10.intl;
                tmp4Result = tmp4(Button4, obj11);
              }
              tmp4Result2 = tmp4Result;
            } else if (constants.FRIEND === stateFromStores) {
              function handleRemoveFriend() {
                let obj2;
                let obj = {
                  userDisplayName: obj2.getName(closure_1_1),
                  onConfirm() {
                    const obj = user(paths[99]);
                    const obj2 = { location: constants.DM_CHANNEL };
                    obj.removeFriend(id.id, obj2);
                  }
                };
                const confirmRemoveFriend = channel(paths[101]).confirmRemoveFriend;
                channel(paths[101]);
                obj2 = user(paths[47]);
                confirmRemoveFriend(obj);
              }
              const obj12 = { text: intl3.string(intl10.t.cvSt1J), size: "sm", variant: "secondary", onPress: handleRemoveFriend };
              const Button3 = components_Button_Button.Button;
              intl3 = intl10.intl;
              tmp4Result2 = tmp4(Button3, obj12);
            } else if (constants.BLOCKED === stateFromStores) {
              function handleUnblock() {
                const obj = user(paths[99]);
                const obj2 = { location: constants.DM_CHANNEL };
                obj.unblockUser(user.id, obj2);
              }
              const obj13 = { text: intl2.string(intl10.t.XyHpKH), size: "sm", variant: "secondary", onPress: handleUnblock };
              const Button2 = components_Button_Button.Button;
              intl2 = intl10.intl;
              tmp4Result2 = tmp4(Button2, obj13);
            } else {
              tmp4Result2 = null;
              if (constants.PENDING_OUTGOING === stateFromStores) {
                const obj14 = { text: intl9.string(intl10.t.xMH6vD), size: "sm", variant: "active", disabled: true, onPress: "a" };
                const Button8 = components_Button_Button.Button;
                intl9 = intl10.intl;
                tmp4Result2 = tmp4(Button8, obj14);
              }
            }
            const items3 = [tmp4Result2, , ];
            let tmp11 = null;
            if (stateFromStores !== constants.BLOCKED) {
              tmp11 = tmp5;
            }
            const obj15 = { children: items3 };
            items3[1] = tmp11;
            items3[2] = reportButton;
            return tmp17(tmp18, obj15);
          }
        }, obj22);
      }
      tmp24 = tmp18Result4;
    }
    const obj23 = { children: items5 };
    items5[6] = closure_44(tmp23, obj17);
    return tmp18(closure_45, obj23);
  }
}
function ChatBeginningRowButton(style) {
  let IconComponent;
  let RowButton;
  let iconVariant;
  let obj2;
  let onPress;
  let subtitle;
  let title;
  let trailing;
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  const obj = { style: style.style, children: numOpens(RowButton, obj2) };
  obj2 = { onPress, icon: numOpens(RowButton2.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  RowButton = RowButton2.RowButton;
  return numOpens(metroImportDefault, obj);
}
function ChatBeginningRowGroupDM(channel) {
  let closure_2;
  let formatResult;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items5;
  let obj12;
  let relationshipCount;
  let str;
  let tmp22Result3;
  channel = channel.channel;
  let first;
  dependencyMap = undefined;
  let onClick;
  let callback1;
  const tmp = closure_47();
  let tmp3 = dependencyMap;
  const arr = first(4989)(channel);
  let tmp4 = onClick(react.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  let obj = channel(504);
  const items = [RelationshipStore];
  const stateFromStores = obj.useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
  const items1 = [channel];
  onClick = react.useCallback(() => {
    openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_TEXT_AREA);
  }, items1);
  const items2 = [channel, first, tmp6];
  callback1 = react.useCallback(callback1(function*(arg0, value) {
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let tmp4;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp4 = undefined;
            const tmp30 = first;
            if (!tmp30) {
              closure_2(true);
              const obj3 = tmp(c2[106]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.mobileCreateInvite(channel, constants.GROUP_DM), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp4 = value;
          if (null != tmp4) {
            const obj = tmp4(c2[66]);
            obj.handleCopy(tmp4, closure_129_0, constants.GROUP_DM, false);
          }
          closure_129_2(false);
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  }), items2);
  const items3 = [channel.id, onClick];
  const items4 = [callback1];
  const callback2 = react.useCallback(() => {
    const obj = openGroupDMAddMembers;
    const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
    const tmp3 = constants;
    if ("open" === groupDMAddMembersAction) {
      const tmpResult = DismissibleContentUnsafeUtils;
      if (tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
        onClick();
      } else {
        const obj2 = { onClick };
        showChatGDMUpsellActionSheetDefault(obj2);
      }
    } else {
      const tmpResult2 = openGroupDMAddMembers;
      const result = tmpResult2.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
    }
  }, items3);
  const callback3 = react.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    if (obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      const obj2 = { onClick: callback1 };
      showChatGDMUpsellActionSheetDefault(obj2);
    }
  }, items4);
  let obj2 = first(11089);
  let obj3 = { location: GroupDMChatBeginning };
  const enabled = obj2.useConfig(obj3).enabled;
  let obj4 = channel(11086);
  const groupDMNitroAudience = obj4.useGroupDMNitroAudience();
  const recipients = channel.recipients;
  let num;
  const tmp13 = GroupDMChatBeginning;
  if (recipients != null) {
    num = recipients.length;
  }
  if (num == null) {
    num = 0;
  }
  const sum = num + 1;
  let result = stateFromStores;
  const tmp16 = first(11087)({ useNitroCapExperiment: true });
  if (stateFromStores) {
    const tmp7Result = channel(11086);
    result = tmp7Result.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
  }
  if (result) {
    result = enabled;
  }
  if (result) {
    result = sum >= tmp16;
  }
  let obj5 = { audience: groupDMNitroAudience, location: tmp13, acquisitionStrategy: tmp7(11086).GroupDMNitroAcquisitionStrategy.MARKETING };
  const id = channel.id;
  let obj6 = { style: tmp.centerHeader, children: items5 };
  const tmp2Result = first(11093);
  const tmp2ResultResult = tmp2Result(obj5);
  const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp7(6642).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  const obj7 = { style: tmp.avatarRedesign, channel, size: channel(1177).AvatarSizes.XXLARGE, accessible: false };
  const tmp2Result2 = first(10371);
  items5 = [closure_44(tmp2Result2, obj7), , , ];
  const obj8 = { style: tmp.dmTitle, variant: str, color: "mobile-text-heading-primary", children: arr };
  str = "heading-xxl/extrabold";
  const Text = tmp7(4832).Text;
  const tmp21 = closure_7;
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  items5[1] = closure_44(Text, obj8);
  const obj9 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: formatResult };
  const Text2 = tmp7(4832).Text;
  const intl = tmp7(1115).intl;
  if (id === FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    const obj10 = { name: arr };
    formatResult = intl.format(tmp7(1115).t.MFwcqO, obj10);
  } else {
    formatResult = intl.string(tmp7(1115).t["0Q7uk0"]);
  }
  items5[2] = closure_44(Text2, obj9);
  let tmp20Result = null;
  if (id !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    let tmp22Result;
    const tmp27 = closure_45;
    if (result) {
      let tmp30 = ChatBeginningRowButton;
      const obj11 = { style: tmp.gdmInviteFriends, onPress: tmp2ResultResult, IconComponent: channel(8122).NitroWheelIcon, iconVariant: "default", title: intl3.string(channel(1115).t["LR+Ptf"]), subtitle: intl4.formatToPlainString(channel(1115).t["8o8Zk5"], obj12) };
      intl3 = tmp7(1115).intl;
      intl4 = tmp7(1115).intl;
      obj12 = { number };
      tmp22Result = tmp22(ChatBeginningRowButton, obj11);
    } else {
      tmp22Result = null;
      if (stateFromStores) {
        const obj13 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: channel(9492).GroupPlusIcon, iconVariant: "default", title: intl2.string(channel(1115).t["LR+Ptf"]) };
        intl2 = tmp7(1115).intl;
        tmp22Result = tmp22(ChatBeginningRowButton, obj13);
      }
    }
    const items6 = [tmp22Result, , ];
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    const tmp32 = ChatBeginningRowButton;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    items7[1] = prop;
    const obj14 = { style: items7, onPress: callback3, IconComponent: channel(4775).LinkIcon, title: intl5.string(channel(1115).t["3XVNyt"]), subtitle: intl6.string(channel(1115).t.qa9CQu), trailing: tmp22Result3 };
    intl5 = tmp7(1115).intl;
    intl6 = tmp7(1115).intl;
    tmp22Result3 = null;
    if (first) {
      tmp22Result3 = tmp22(closure_6, {});
    }
    items6[1] = closure_44(tmp32, obj14);
    let tmp22Result4 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj15 = { channelId: channel.id };
      tmp22Result4 = tmp22(tmp2(12128), obj15);
    }
    const obj16 = { children: items6 };
    items6[2] = tmp22Result4;
    tmp20Result = tmp20(tmp27, obj16);
  }
  items5[3] = tmp20Result;
  return closure_46(tmp21, obj6);
}
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const FetchState = AuthorizedAppsStore2.FetchState;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const isGuildOwner = GuildRecord.isGuildOwner;
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, ChannelTypes: closure_29, EMPTY_STRING_SNOWFLAKE_ID: closure_30, GuildSettingsSections: closure_31, HelpdeskArticles: closure_32, InstantInviteSources: closure_33, Permissions: closure_34, RelationshipTypes: closure_35, UPLOAD_MEDIUM_SIZE: closure_36, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_37 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ AnalyticsActions: closure_40, AnalyticsSetupTypes: closure_41 } = GuildProgressConstants);
let closure_42 = MessageRequestConstants.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_43 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
let Fragment = Fragment_mod;
({ jsx: closure_44, Fragment: closure_45, jsxs: closure_46 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", width: "100%" }, contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 }, title: { marginTop: 16 }, subtitle: { marginBottom: 16, lineHeight: 20 }, gdmInviteFriends: obj2, gdmShareInviteLink: obj3, gdmShareInviteLinkNoRelationships: { marginTop: 16 }, ctaLabel: { marginLeft: 8 }, ctaContainer: { flexDirection: "row", flexWrap: "wrap" }, ctaButton: { flexDirection: "row", alignItems: "center" }, ctaAddRoles: { paddingRight: 24 }, avatar: { marginBottom: 16 }, avatarRedesign: { marginBottom: 16 }, centerHeader: { paddingHorizontal: 8, alignItems: "center" }, gdmText: { textAlign: "center" }, dmTitle: { marginBottom: 8, textAlign: "center" }, dmBeginningMessage: { marginTop: 8 }, provisionalAccountExplainer: { marginTop: 12 }, mutualGuildsLabel: { marginTop: 8, marginLeft: 8, height: 26 }, mutualGuildsContainer: { flexDirection: "row", alignItems: "center", marginTop: 6 }, iconContainer: size, threadDetails: { lineHeight: 20 }, threadCreatorRoleDot: { paddingRight: 4, paddingTop: 2 }, tagContainer: { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 4 }, unmutedNotificationContainer: size1, unmutedNotification: { width: 16, height: 16 }, dmButtonRow: { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 }, pendingIncoming: { flexDirection: "column", gap: 8 }, pendingIncomingButtons: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, appDMButtonIcon: { marginRight: 2 }, formCtaIcon: { width: 32, height: 32 } };
obj2 = { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE, height: 24, width: 24, padding: 4, alignContent: "center" };
let closure_47 = createStyles(obj);
function ChatBeginningRowGuildDefaultChannel(guild) {
  let canInvite;
  let canManageGuild;
  let currentUser;
  let errors;
  let guildPersonalized;
  let guildPopulated;
  let intl;
  let intl2;
  let intl5;
  let items4;
  let items6;
  let obj11;
  let obj15;
  let obj9;
  let stringResult;
  let tmp17;
  let tmp22;
  let tmp31Result2;
  let tmp31Result3;
  let tmp37;
  guild = guild.guild;
  const channel = guild.channel;
  const id = guild.id;
  const tmp = closure_47();
  const tmp3 = id;
  let obj = guild(id[57]);
  const completedStates = obj.useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj2 = guild(id[57]);
  const permissions = obj2.usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj3 = guild(id[46]);
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  channel(id[58])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  const tmp9 = isGuildOwner(guild, stateFromStores);
  let obj4 = channel(id[59]);
  const extractTimestampResult = obj4.extractTimestamp(guild.id);
  const tmp11 = extractTimestampResult < Date.now() - closure_37;
  let obj5 = guild(id[50]);
  let result = obj5.isPrivateGuildChannel(channel);
  let obj6 = guild(id[60]);
  const isEligibleForGuildProgress = obj6.useIsEligibleForGuildProgress(guild);
  let obj7 = guild(id[46]);
  const items1 = [GuildSettingsStore];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => errors.getErrors());
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = react.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      obj = ToastUtils;
      obj.presentError(tmp.message);
    }
  }, items2);
  const tmp15 = react;
  if (canManageGuild) {
    obj = function _addServerIcon() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let base64;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_0 = tmp;
                base64 = undefined;
                const obj7 = tmp4(c2[62]);
                obj7.init(id);
                const obj5 = { size };
                const obj8 = tmp4(c2[63]);
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj8.openImagePicker(obj5), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              base64 = value.base64;
              if (null != base64) {
                obj = tmp4(c2[62]);
                obj.updateIcon(closure_129_2, base64);
                const obj2 = tmp4(c2[62]);
                obj2.open(closure_129_2, constants.LANDING);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c3 = 3;
            throw tmp17;
          }
        }
      });
      return obj(...arguments);
    };
    let obj8 = {
      onPress: function addServerIcon() {
          return obj(...arguments);
        },
      source: obj9,
      iconStyle: tmp.formCtaIcon,
      title: intl.string(tmp2(tmp3[30]).t["Yhi9/N"]),
      isCompleted: guildPersonalized,
      analyticsSetupType: constants10.CHANNEL_WELCOME,
      analyticsAction: constants9.PERSONALIZE_SERVER
    };
    obj9 = { uri: tmp7(tmp3[65]) };
    const tmp7Result = channel(tmp3[64]);
    intl = tmp2(tmp3[30]).intl;
    tmp17 = closure_44(tmp7Result, obj8);
  }
  if (canInvite) {
    const obj10 = {
      onPress: function inviteFriends() {
          if (null != guild.vanityURLCode) {
            const obj3 = instant_invite_InstantInviteUtils;
            const result = obj3.showVanityUrlInviteActionSheet(tmp, channel, constants.WELCOME_MESSAGE);
          } else {
            const obj2 = { source: constants.WELCOME_MESSAGE };
            obj = instant_invite_InstantInviteUtils;
            const result1 = obj.showInstantInviteActionSheet(channel, obj2);
          }
        },
      source: obj11,
      iconStyle: tmp.formCtaIcon,
      title: intl2.string(guild(tmp3[30]).t.q9n0Ta),
      isCompleted: guildPopulated,
      analyticsSetupType: constants10.CHANNEL_WELCOME,
      analyticsAction: constants9.INVITE
    };
    obj11 = { uri: channel(tmp3[67]) };
    const tmp7Result3 = channel(tmp3[64]);
    intl2 = tmp2(tmp3[30]).intl;
    tmp22 = closure_44(tmp7Result3, obj10);
  }
  const intl3 = tmp2(tmp3[30]).intl;
  const string = intl3.string;
  const t = tmp2(tmp3[30]).t;
  if (tmp11) {
    stringResult = string(t["gwyU/J"]);
  } else if (tmp9) {
    stringResult = string(t["1ach9C"]);
  } else {
    stringResult = string(t["ezm+/j"]);
  }
  let tmp28 = !isEligibleForGuildProgress;
  if (tmp28) {
    tmp28 = null != tmp22 || null != tmp17;
    const tmp29 = null != tmp22 || null != tmp17;
  }
  const tmp7Result4 = channel(tmp3[68]);
  const combined = "" + tmp7Result4.getArticleURL(constants5.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  const items3 = [stringResult, ];
  let tmp31Result = null;
  if (tmp28) {
    const obj12 = { children: items4 };
    const intl4 = tmp2(tmp3[30]).intl;
    const obj13 = { guideURL: combined };
    items4 = [" ", intl4.format(tmp2(tmp3[30]).t.UOtD32, obj13)];
    tmp31Result = tmp31(tmp32, obj12);
  }
  items3[1] = tmp31Result;
  const Fragment = tmp15.Fragment;
  const obj14 = { title: intl5.formatToPlainString(guild(tmp3[30]).t["j59F/c"], obj15), subtitle: tmp31Result2, isPrivate: result, subtitleLink: tmp37 };
  tmp31Result2 = closure_46(closure_45, { children: items3 });
  intl5 = tmp2(tmp3[30]).intl;
  tmp37 = undefined;
  obj15 = { guildName: guild.name };
  const tmp36 = ChatBeginningRowHeader;
  if (tmp28) {
    tmp37 = combined;
  }
  const children = [closure_44(tmp36, obj14), ];
  if (isEligibleForGuildProgress) {
    const obj16 = { guild };
    tmp31Result3 = tmp35(tmp7(tmp3[69]), obj16);
  } else {
    const obj17 = { children: items6 };
    items6 = [tmp22, tmp17];
    tmp31Result3 = tmp31(tmp32, obj17);
  }
  children[1] = tmp31Result3;
  return closure_46(Fragment, { children });
}
const GroupDMChatBeginning = "GroupDMChatBeginning";
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default function ChatBeginningRow(channelId) {
  let _undefined;
  let c2;
  let shouldRender;
  let tmp19Result;
  let tmp5;
  channelId = channelId.channelId;
  ({ guildId: importDefault, shouldRender } = channelId);
  dependencyMap = undefined;
  const showingSpamBanner = channelId.showingSpamBanner;
  let tmp = closure_47();
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GuildStore];
  const obj3 = channelId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  [tmp5, c2] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const obj4 = react;
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  let tmp7 = null;
  if (shouldRender) {
    let tmp9;
    if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
      const obj2 = { channel: stateFromStores };
      tmp9 = closure_44(ChatBeginningRowThread, obj2);
    } else if (stateFromStores.isDM()) {
      const obj5 = { channel: stateFromStores, showingSpamBanner };
      tmp9 = closure_44(ChatBeginningRowDMGuard, obj5);
    } else if (stateFromStores.isGroupDM()) {
      const obj6 = { channel: stateFromStores };
      tmp9 = closure_44(ChatBeginningRowGroupDM, obj6);
    } else {
      tmp9 = null;
      if (null != stateFromStores1) {
        const obj7 = { guild: stateFromStores1, channel: stateFromStores };
        tmp9 = closure_44(ChatBeginningRowGuild, obj7);
      }
    }
    tmp7 = tmp9;
  }
  const callback = obj4.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let tmp = _undefined((arg0) => {
      let tmp = arg0;
      if (null == arg0) {
        tmp = height;
      } else {
        const _Math = Math;
      }
      return tmp;
    });
  }, []);
  const items2 = [tmp.container, ];
  let num = 0;
  const tmp20 = PortalAccessibilityWorkaroundViewDefault;
  if (null != tmp7) {
    num = tmp5;
  }
  const obj8 = { style: items2, children: tmp19Result };
  items2[1] = { height: num };
  tmp19Result = null != tmp7;
  if (tmp19Result) {
    const obj9 = { style: tmp.contentWrapper, onLayout: callback, children: tmp7 };
    tmp19Result = tmp19(closure_7, obj9, channelId);
  }
  return closure_44(tmp20, obj8);
};
