// Module ID: 13360
// Function ID: 13361
// Name: ChatBeginningRow
// Dependencies: [32, 5, 19, 17, 4914, 4761, 8462, 7995, 6825, 6956, 4766, 4780, 4762, 4843, 4825, 4784, 4845, 4855, 6552, 1386, 1071, 4769, 12067, 13361, 13334, 11818, 21, 4913, 575, 7672, 1112, 7674, 7703, 7704, 7679, 7681, 5143, 5504, 5592, 5477, 7030, 12082, 1186, 13362, 11256, 11247, 504, 4969, 8699, 5529, 7734, 11252, 12896, 11619, 5122, 5637, 13363, 13364, 38, 11, 13366, 5594, 7994, 8474, 13370, 13372, 8051, 13371, 2187, 13487, 13491, 10181, 7737, 5511, 13496, 5862, 13497, 7012, 10631, 1255, 4190, 13500, 10370, 8683, 7485, 7480, 5595, 11244, 5127, 13501, 2119, 7520, 13493, 13502, 13503, 8073, 8067, 7545, 13504, 8136, 6835, 6429, 13542, 7322, 7740, 10256, 10252, 11819, 13543, 13547, 7711, 12064, 7262, 4945, 4746, 12076, 12068, 12065, 12066, 12072, 8952, 11061, 6843, 10129, 5609, 13548, 13552, 2]
// Exports: default

// Module 13360 (ChatBeginningRow)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef4190 from "module_4190" /* 4190 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import ChannelRecord from "ChannelRecord" /* 4766 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import GuildRecord from "GuildRecord" /* 4780 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import UserUtilsDefault from "UserUtils" /* 4969 */;
import useThemeDefault from "useTheme" /* 5122 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import useToken from "useToken" /* 5477 */;
import Text_Text from "Text/Text" /* 5504 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import useChannelNameDefault from "useChannelName" /* 5529 */;
import LinkingDefault from "Linking" /* 5592 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import useAlertStore from "useAlertStore" /* 5862 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6825 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7012 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7480 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7485 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import ChatIcon from "ChatIcon" /* 7672 */;
import ThreadIcon from "ThreadIcon" /* 7674 */;
import TextLockIcon from "TextLockIcon" /* 7679 */;
import TextIcon from "TextIcon" /* 7681 */;
import RowButton2 from "RowButton" /* 7711 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8051 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8067 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8073 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8699 */;
import ReportModals from "ReportModals" /* 10181 */;
import BellIcon from "BellIcon" /* 11244 */;
import PencilIcon from "PencilIcon" /* 11247 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 11256 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 11818 */;
import openGroupDMAddMembers from "openGroupDMAddMembers" /* 12064 */;
import GroupDMConstants from "GroupDMConstants" /* 12067 */;
import showChatGDMUpsellActionSheetDefault from "showChatGDMUpsellActionSheet" /* 12076 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 12082 */;
import MessageRequestConstants from "MessageRequestConstants" /* 13334 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13496 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 13497 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 13500 */;
import PortalAccessibilityWorkaroundViewDefault from "PortalAccessibilityWorkaroundView" /* 13552 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 8462 */;
import GuildSettingsStore from "GuildSettingsStore" /* 7995 */;
import UserProfileStore from "UserProfileStore" /* 6956 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import GuildProgressConstants from "GuildProgressConstants" /* 13361 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const openGroupDMAddMembersDefault = openGroupDMAddMembers;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, c3, dependencyMap;

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
let obj4;
let size;
let tmp;
let tmp4;
const AssetRegistryDefault = tmp4(13362);
const ChannelAccessInfoDefault = tmp(13363);
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
      AppsIcon = tmp6(7703).AppsLockIcon;
      tmp9 = tmp6;
    } else {
      AppsIcon = tmp6(7704).AppsIcon;
      tmp9 = tmp6;
    }
    tmp4 = tmp9;
    tmp5 = { IconComponent: AppsIcon, label: tmp9(1112).t.ZkcrC2 };
    const obj = { IconComponent: AppsIcon, label: tmp9(1112).t.ZkcrC2 };
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
  const obj5 = { style: tmp.iconContainer, children: closure_44(IconComponent, obj6) };
  obj6 = { size: "lg", color: "icon-strong", accessibilityLabel: intl.string(label) };
  ({ IconComponent, label } = tmp5);
  intl = tmp4(1112).intl;
  return closure_44(metroImportDefault, obj5);
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
  let obj = subtitleLink(5143);
  const tmp4 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  let tmp5Result = !isGameInvitesPost;
  if (tmp5Result) {
    const obj2 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items = [closure_44(ChatBeginningRowIcon, obj2), ];
    const items1 = [tmp.title, ];
    let num = 8;
    const Text = tmp2(5504).Text;
    const tmp8 = closure_44;
    if (isForumPost) {
      num = 0;
    }
    const obj3 = { children: items };
    const obj4 = { style: items1, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    items[1] = tmp8(Text, obj4);
    tmp5Result = tmp5(tmp6, obj3);
  }
  const children = [tmp5Result, ];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    let str;
    const Text2 = tmp2(5504).Text;
    const tmp11 = closure_44;
    if (tmp4) {
      str = "link";
    }
    const obj6 = { accessibilityRole: str, onPress: fn, style: tmp.subtitle, variant: "body-md/medium", color: "text-default", children: subtitle };
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
    const PressableOpacity = tmp2(7030).PressableOpacity;
    const obj4 = { source: AssetRegistryDefault, size: native.IconSizes.REFRESH_SMALL_16, color: token };
    const Icon = tmp2(1186).Icon;
    items1 = [closure_44(Icon, obj4), ];
    const obj5 = { style: items2, variant: "body-sm/medium", color: "text-link", children: intl.string(intl10.t.dMJ3Y6) };
    items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    const Text = tmp2(5504).Text;
    intl = tmp2(1112).intl;
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
    const PressableOpacity2 = tmp2(7030).PressableOpacity;
    const obj7 = { size: "xs", color: token };
    items5 = [closure_44(PencilIcon.PencilIcon, obj7), ];
    const obj8 = { style: tmp.ctaLabel, variant: "body-sm/medium", color: "text-link", children: intl2.string(intl10.t.GE1Tlo) };
    const Text2 = tmp2(5504).Text;
    intl2 = tmp2(1112).intl;
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
    const obj4 = guildId(4969);
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
    const Text = tmp2(5504).Text;
    const tmp17 = closure_44;
    if (tmp12) {
      tmp18 = processColorStringsArray;
    }
    const obj6 = { gradientColors: tmp18, style: tmp16, variant: "body-md/semibold", color: "text-default", children: str };
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
      tmp13 = closure_44(tmp2(1186).RoleDot, obj7);
    }
    const obj8 = { children: items3 };
    items3 = [tmp13, ];
    const obj9 = { variant: "body-md/semibold", color: "text-default", children: str };
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
  let obj = channel(7734);
  const result = obj.isPrivateGuildChannel(channel);
  const obj2 = channel(11252);
  const appliedTags = obj2.useAppliedTags(channel);
  const obj3 = channel(12896);
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
      const obj6 = { style: tmp.threadDetails, variant: "body-md/medium", color: "text-default", children: intl.format(channel(1112).t.imPXd5, obj7) };
      const Text = tmp4(5504).Text;
      intl = tmp4(1112).intl;
      obj7 = {
        usernameHook(arg0, arg1) {
              const obj = { userId: channel.ownerId, guildId: channel.guild_id };
              return closure_44(ThreadOwner, obj, arg1);
            }
      };
      tmp12Result3 = tmp12(Text, obj6);
    }
    items[2] = tmp12Result3;
    let tmp12Result4 = null;
    if (channel.isForumPost()) {
      tmp12Result4 = null;
      if (null == tmp8) {
        const obj8 = { style: tmp.threadDetails, variant: "body-md/medium", color: "text-default", children: intl2.string(channel(1112).t.mE3KJN) };
        const Text2 = tmp4(5504).Text;
        intl2 = tmp4(1112).intl;
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
  let obj = channel(7734);
  const result = obj.isPrivateGuildChannel(channel);
  const tmp10 = useThemeDefault();
  const intl = channel(1112).intl;
  const formatToPlainStringResult = intl.formatToPlainString(channel(1112).t.q0tgLe, { channelName: tmp3 });
  const intl2 = channel(1112).intl;
  if (result) {
    let obj2 = {
      channelName: tmp3,
      topicHook() {
          const obj = MarkupUtilsDefault;
          const obj2 = { channelId: channel.id };
          return obj.parseTopic(channel.topic, true, obj2);
        }
    };
    formatResult = intl2.format(tmp8(1112).t.QuwqjG, obj2);
  } else if (canResult2) {
    const obj3 = { channelName: tmp3 };
    formatResult = intl2.formatToPlainString(tmp8(1112).t.JHKUGB, obj3);
  } else {
    const obj4 = { channelName: tmp4 };
    formatResult = intl2.format(tmp8(1112).t.hPVEQG, obj4);
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
  let obj = channel(13491);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      const obj2 = {
        size: "sm",
        variant: "destructive",
        text: intl.string(tmp(1112).t.HHZmDn),
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
      const Button = tmp(5511).Button;
      intl = tmp(1112).intl;
      return closure_44(Button, obj2);
    }
  }
  return null;
}
function DeauthorizeAppButton(application) {
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
        text: intl.string(tmp2(1112).t.xUqheM),
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
                  const leaveEmbeddedActivity = application(dependencyMap[78]).leaveEmbeddedActivity;
                  application(dependencyMap[78]);
                  const tmp2 = id;
                  if (value != null) {
                    _location = value.location;
                  }
                  const obj2 = { location: _location, applicationId: tmp2.id };
                  const result = leaveEmbeddedActivity(obj2);
                }
              };
              obj.openAlert("confirm-delete-authed-app", closure_44(UserSettingsAuthedAppDeleteWarningModalDefault, obj2));
              const obj3 = AnalyticsUtilsDefault;
              const obj4 = { application_id: application.id, channel_id: importDefault.id, channel_type: importDefault.type };
              obj3.track(constants.APP_MANAGE_CTA_CLICKED, obj4);
            }
      };
      const Button = tmp2(5511).Button;
      intl = tmp2(1112).intl;
      obj3 = { size: tmp2(1186).Icon.Sizes.SMALL, source: AssetRegistryDefault2, style: tmp.appDMButtonIcon };
      Icon = tmp2(1186).Icon;
      tmp4 = closure_44(Button, obj2);
    }
  }
  return tmp4;
}
function EditConjuredAppButton(project) {
  let intl;
  let obj2;
  project = project.project;
  const obj = {
    size: "sm",
    variant: "secondary",
    text: intl.string(_modDef4190.jMMrDM),
    icon: closure_44(project(11247).PencilIcon, obj2),
    onPress() {
      return openConjureProjectInBuilderDefault(project);
    }
  };
  const tmp = closure_47();
  const Button = project(5511).Button;
  intl = project(1112).intl;
  obj2 = { size: "xs", style: tmp.appDMButtonIcon };
  return closure_44(Button, obj);
}
function MuteAppButton(channel) {
  let Icon;
  let WHITE;
  let obj3;
  let stringResult;
  channel = channel.channel;
  const user = channel.user;
  const tmp = closure_47();
  let obj = channel(504);
  const items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (user.bot) {
    let str = "destructive";
    const Button = tmp2(5511).Button;
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
            const obj = { guildId: null, channelId: channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
            const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
            NotificationSettingsModalActionCreatorsDefault;
            const result = updateChannelOverrideSettings(obj);
            const obj2 = { text: intl.string(intl10.t["/6kulz"]), icon: BellIcon.BellIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl10.intl;
            open("NOTIFICATIONS_UNMUTED", obj2);
          } else {
            const obj3 = { channel };
            const tmpResult2 = ActionSheetActionCreatorsDefault;
            tmpResult2.openLazy(asyncRequire(13501, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj3);
          }
        }
    };
    let intl = tmp2(1112).intl;
    const string = intl.string;
    const t = tmp2(1112).t;
    if (stateFromStores) {
      stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj3 = { size: tmp2(1186).Icon.Sizes.SMALL, source: stateFromStores(stateFromStores ? 10370 : 8683), color: WHITE, style: tmp.appDMButtonIcon };
    Icon = tmp2(1186).Icon;
    WHITE = undefined;
    if (!stateFromStores) {
      WHITE = tmp8(575).unsafe_rawColors.WHITE;
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
  let isOwned;
  let items6;
  let items8;
  let obj10;
  let obj16;
  let obj6;
  let obj8;
  let project;
  let relationshipType;
  let tmp28;
  channel = channel.channel;
  const user = channel.user;
  authorizedAppsFetchState = undefined;
  let userTag;
  const showingSpamBanner = channel.showingSpamBanner;
  let tmp = closure_47();
  dependencyMap = tmp;
  const analyticsLocations = user(7520)().analyticsLocations;
  let id;
  const tmp4 = user(13493);
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
  let id1;
  const isSystemDMResult = channel.isSystemDM();
  const tmp2Result = user(13502);
  if (tmp4Result != null) {
    id1 = tmp4Result.id;
  }
  ({ project, isOwned } = tmp2Result(id1, user.bot));
  tmp2Result(id1, user.bot);
  let items3 = [user, channel];
  const tmp7Result = channel(13503);
  const isEmptyMessageRequestChat = tmp7Result.useIsEmptyMessageRequestChat(channel.id);
  const effect = authorizedAppsFetchState.useEffect(() => {
    let getAvatarURL;
    let guild_id;
    ({ id, getAvatarURL } = user);
    const tmp = maybeFetchUserProfileDefault;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true });
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
    const tmp2Result3 = user(4969);
    userTag = tmp2Result3.getUserTag(user, { decoration: "never", identifiable: "always" });
    const tmp2Result4 = user(4969);
    const name = tmp2Result4.getName(user);
    let intl6 = tmp7(1112).intl;
    let stringResult = intl6.string(tmp7(1112).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1112).intl;
      let obj3 = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1112).t.Q56TRC, obj3);
    }
    function handleCopyUserTag() {
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }
    let obj4 = { channel, user, showingSpamBanner };
    const tmp21 = closure_44(DMSpamButton, obj4);
    let obj5 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
          const obj = { userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        },
      accessibilityLabel: intl2.string(channel(1112).t.iXAna6),
      children: closure_44(Avatar, obj6)
    };
    const PressableOpacity = tmp7(7030).PressableOpacity;
    intl2 = tmp7(1112).intl;
    obj6 = { style: tmp.avatar, user, guildId: channel.guild_id, size: channel(1186).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    Avatar = tmp7(1186).Avatar;
    const items5 = [closure_44(PressableOpacity, obj5), , , , , , , ];
    let obj7 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: intl3.string(channel(1112).t.y5MwJy), children: closure_44(channel(5504).Text, obj8) };
    const PressableOpacity2 = tmp7(7030).PressableOpacity;
    intl3 = tmp7(1112).intl;
    obj8 = { variant: "heading-xxl/semibold", color: "mobile-text-heading-primary", children: name };
    items5[1] = closure_44(PressableOpacity2, obj7);
    let tmp19Result = null;
    if (!user.isProvisional) {
      let obj9 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: intl4.string(channel(1112).t.y5MwJy), children: closure_44(channel(5504).Text, obj10) };
      const PressableOpacity3 = tmp7(7030).PressableOpacity;
      intl4 = tmp7(1112).intl;
      obj10 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      tmp19Result = tmp19(PressableOpacity3, obj9);
    }
    items5[2] = tmp19Result;
    let obj11 = { style: tmp.dmBeginningMessage, variant: "body-md/medium", color: "text-default", children: stringResult };
    items5[3] = closure_44(channel(5504).Text, obj11);
    let tmp19Result4 = null;
    if (user.isProvisional) {
      let obj12 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp19Result4 = tmp19(tmp7(13543).ChatProvisionalAccountExplainerCard, obj12);
    }
    items5[4] = tmp19Result4;
    let tmp22Result;
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
                  const obj = channel(closure_1_2[99]);
                  const result = obj.trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                  const obj2 = channel(closure_1_2[100]);
                  obj2.transitionToGuild(arg0);
                  const obj3 = user(closure_1_2[88]);
                  obj3.hideActionSheet();
                  const obj4 = user(closure_1_2[101]);
                  obj4.popWithKey(closure_1_42);
                }
            };
            obj.openLazy(asyncRequire(13504, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
          }
        }
        const substr = slice(0, num2);
        let obj13 = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: tmp.mutualGuildsContainer, children: items6 };
        const PressableOpacity4 = tmp7(7030).PressableOpacity;
        let obj14 = {
          size: channel(7322).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: channel(closure_2[103]).GuildIconSizes.SMALL };
                  const tmp = user(closure_2[103]);
                  return closure_1_44(tmp, obj, guild.id);
                })
        };
        const GuildIconPile = tmp7(13542).GuildIconPile;
        items6 = [closure_44(GuildIconPile, obj14), ];
        let obj15 = { style: tmp.mutualGuildsLabel, variant: "body-sm/medium", color: "text-default", children: intl5.format(channel(1112).t.eE3oep, obj16) };
        let Text = tmp7(5504).Text;
        intl5 = tmp7(1112).intl;
        obj16 = { count: stateFromStores.length };
        items6[1] = closure_44(Text, obj15);
        tmp22Result = tmp22(PressableOpacity4, obj13);
      }
    }
    items5[5] = tmp22Result;
    const obj17 = { style: tmp.dmButtonRow, children: tmp28 };
    tmp28 = null;
    const tmp27 = closure_7;
    if (!user.isNonUserBot()) {
      let tmp22Result4;
      if (user.bot) {
        let tmp22Result3 = null;
        if (null != tmp4Result) {
          if (null != authorizedAppToken) {
            let tmp19Result5;
            const obj18 = { channel, user };
            const items7 = [closure_44(MuteAppButton, obj18), ];
            if (null != project) {
              const obj19 = { project };
              tmp19Result5 = tmp19(EditConjuredAppButton, obj19);
            } else {
              tmp19Result5 = null;
              if (null != authorizedAppToken) {
                tmp19Result5 = null;
                if (false === isOwned) {
                  const obj20 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
                  tmp19Result5 = tmp19(DeauthorizeAppButton, obj20);
                }
              }
            }
            const obj21 = { children: items7 };
            items7[1] = tmp19Result5;
            tmp22Result3 = tmp22(tmp23, obj21);
          } else {
            tmp22Result3 = null;
          }
        }
        const obj22 = { children: items8 };
        items8 = [tmp22Result3, tmp21];
        tmp22Result4 = tmp22(tmp23, obj22);
      } else {
        const obj23 = { reportButton: tmp21 };
        tmp22Result4 = tmp19(function RelationshipButtons(reportButton) {
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
            const obj = user(paths[88]);
            const obj2 = { userId: user.id, channelId: id.id };
            obj.openLazy(channel(paths[90])(paths[107], paths.paths), closure_2_43, obj2);
          }
          let obj = get_initialized;
          const items = [RelationshipStore];
          const stateFromStores = obj.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
          let obj2 = { text: intl.string(intl10.t.l4Emac), size: "sm", variant: "secondary", onPress: handleBlock };
          const Button = components_Button_Button.Button;
          intl = intl10.intl;
          if (stateFromStores === constants.PENDING_INCOMING) {
            let obj3 = { style: paths.pendingIncoming, children: items1 };
            const obj4 = { variant: "body-sm/normal", color: "text-default", children: format(uIomXw, obj5) };
            const Text = Text_Text.Text;
            const intl5 = intl10.intl;
            format = intl5.format;
            obj5 = { username: obj10.getName(user) };
            uIomXw = intl10.t.uIomXw;
            obj10 = UserUtilsDefault;
            items1 = [closure_44(Text, obj4), ];
            const obj6 = { style: paths.pendingIncomingButtons, children: items2 };
            const obj7 = {
              text: intl6.string(intl10.t["+WbSn5"]),
              size: "sm",
              variant: "active",
              onPress: function handleAcceptFriend() {
                  const obj = user(paths[105]);
                  const obj2 = { userId: user.id, location: constants.DM_CHANNEL };
                  const result = obj.maybeConfirmFriendRequestAccept(obj2);
                }
            };
            const Button5 = components_Button_Button.Button;
            intl6 = intl10.intl;
            items2 = [closure_44(Button5, obj7), , , ];
            const obj8 = {
              text: intl7.string(intl10.t.rQSndv),
              size: "sm",
              variant: "secondary",
              onPress: function handleIgnoreFriendRequest() {
                  const obj = user(paths[104]);
                  const obj2 = { location: constants.DM_CHANNEL };
                  obj.cancelFriendRequest(user.id, obj2);
                }
            };
            const Button6 = components_Button_Button.Button;
            intl7 = intl10.intl;
            items2[1] = closure_44(Button6, obj8);
            const obj9 = { text: intl8.string(intl10.t.l4Emac), size: "sm", variant: "secondary", onPress: handleBlock };
            const Button7 = components_Button_Button.Button;
            intl8 = intl10.intl;
            items2[2] = closure_44(Button7, obj9);
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
                  const obj = user(paths[104]);
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
                    const obj = user(paths[104]);
                    const obj2 = { location: constants.DM_CHANNEL };
                    obj.removeFriend(id.id, obj2);
                  }
                };
                const confirmRemoveFriend = channel(paths[106]).confirmRemoveFriend;
                channel(paths[106]);
                obj2 = user(paths[47]);
                confirmRemoveFriend(obj);
              }
              const obj12 = { text: intl3.string(intl10.t.cvSt1J), size: "sm", variant: "secondary", onPress: handleRemoveFriend };
              const Button3 = components_Button_Button.Button;
              intl3 = intl10.intl;
              tmp4Result2 = tmp4(Button3, obj12);
            } else if (constants.BLOCKED === stateFromStores) {
              function handleUnblock() {
                const obj = user(paths[104]);
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
        }, obj23);
      }
      tmp28 = tmp22Result4;
    }
    items5[6] = closure_44(tmp27, obj17);
    let tmp19Result6 = null;
    if (isEmptyMessageRequestChat) {
      const obj24 = { style: tmp.dmEmptyChat };
      tmp19Result6 = tmp19(tmp2(13547), obj24);
    }
    const obj25 = { children: items5 };
    items5[7] = tmp19Result6;
    return closure_46(closure_45, obj25);
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
  const obj = { style: style.style, children: closure_44(RowButton, obj2) };
  obj2 = { onPress, icon: closure_44(RowButton2.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  RowButton = RowButton2.RowButton;
  return closure_44(metroImportDefault, obj);
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
  const arr = first(5529)(channel);
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
              const obj3 = tmp(c2[112]);
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
  let obj2 = first(12068);
  let obj3 = { location: GroupDMChatBeginning };
  const enabled = obj2.useConfig(obj3).enabled;
  let obj4 = channel(12065);
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
  const tmp16 = first(12066)({ useNitroCapExperiment: true });
  if (stateFromStores) {
    const tmp7Result = channel(12065);
    result = tmp7Result.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
  }
  if (result) {
    result = enabled;
  }
  if (result) {
    result = sum >= tmp16;
  }
  let obj5 = { audience: groupDMNitroAudience, location: tmp13, acquisitionStrategy: tmp7(12065).GroupDMNitroAcquisitionStrategy.MARKETING };
  const id = channel.id;
  let obj6 = { style: tmp.centerHeader, children: items5 };
  const tmp2Result = first(12072);
  const tmp2ResultResult = tmp2Result(obj5);
  const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp7(6843).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  const obj7 = { style: tmp.avatarRedesign, channel, size: channel(1186).AvatarSizes.XXLARGE, accessible: false };
  const tmp2Result2 = first(10129);
  items5 = [closure_44(tmp2Result2, obj7), , , ];
  const obj8 = { style: tmp.dmTitle, variant: str, color: "mobile-text-heading-primary", children: arr };
  str = "heading-xxl/semibold";
  const Text = tmp7(5504).Text;
  const tmp21 = closure_7;
  if (null != arr) {
    str = "heading-xxl/semibold";
    if (arr.length > 40) {
      str = "heading-lg/semibold";
    }
  }
  items5[1] = closure_44(Text, obj8);
  const obj9 = { style: tmp.gdmText, variant: "body-md/medium", color: "text-default", children: formatResult };
  const Text2 = tmp7(5504).Text;
  const intl = tmp7(1112).intl;
  if (id === FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    const obj10 = { name: arr };
    formatResult = intl.format(tmp7(1112).t.MFwcqO, obj10);
  } else {
    formatResult = intl.string(tmp7(1112).t["0Q7uk0"]);
  }
  items5[2] = closure_44(Text2, obj9);
  let tmp20Result = null;
  if (id !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    let tmp22Result;
    const tmp27 = closure_45;
    if (result) {
      let tmp30 = ChatBeginningRowButton;
      const obj11 = { style: tmp.gdmInviteFriends, onPress: tmp2ResultResult, IconComponent: channel(8952).NitroWheelIcon, iconVariant: "default", title: intl3.string(channel(1112).t["LR+Ptf"]), subtitle: intl4.formatToPlainString(channel(1112).t["8o8Zk5"], obj12) };
      intl3 = tmp7(1112).intl;
      intl4 = tmp7(1112).intl;
      obj12 = { number };
      tmp22Result = tmp22(ChatBeginningRowButton, obj11);
    } else {
      tmp22Result = null;
      if (stateFromStores) {
        const obj13 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: channel(11061).GroupPlusIcon, iconVariant: "default", title: intl2.string(channel(1112).t["LR+Ptf"]) };
        intl2 = tmp7(1112).intl;
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
    const obj14 = { style: items7, onPress: callback3, IconComponent: channel(5609).LinkIcon, title: intl5.string(channel(1112).t["3XVNyt"]), subtitle: intl6.string(channel(1112).t.qa9CQu), trailing: tmp22Result3 };
    intl5 = tmp7(1112).intl;
    intl6 = tmp7(1112).intl;
    tmp22Result3 = null;
    if (first) {
      tmp22Result3 = tmp22(closure_6, {});
    }
    items6[1] = closure_44(tmp32, obj14);
    let tmp22Result4 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj15 = { channelId: channel.id };
      tmp22Result4 = tmp22(tmp2(13548), obj15);
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
let obj = { container: { position: "absolute", width: "100%" }, contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 }, title: { marginTop: 16 }, subtitle: { marginBottom: 16, lineHeight: 20 }, gdmInviteFriends: obj2, gdmShareInviteLink: obj3, gdmShareInviteLinkNoRelationships: { marginTop: 16 }, ctaLabel: { marginLeft: 8 }, ctaContainer: { flexDirection: "row", flexWrap: "wrap" }, ctaButton: { flexDirection: "row", alignItems: "center" }, ctaAddRoles: { paddingRight: 24 }, avatar: { marginBottom: 16 }, avatarRedesign: { marginBottom: 16 }, centerHeader: { paddingHorizontal: 8, alignItems: "center" }, gdmText: { textAlign: "center" }, dmTitle: { marginBottom: 8, textAlign: "center" }, dmBeginningMessage: { marginTop: 8 }, dmEmptyChat: obj4, provisionalAccountExplainer: { marginTop: 12 }, mutualGuildsLabel: { marginTop: 8, marginLeft: 8, height: 26 }, mutualGuildsContainer: { flexDirection: "row", alignItems: "center", marginTop: 6 }, iconContainer: size, threadDetails: { lineHeight: 20 }, threadCreatorRoleDot: { paddingRight: 4, paddingTop: 2 }, tagContainer: { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 4 }, dmButtonRow: { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 }, pendingIncoming: { flexDirection: "column", gap: 8 }, pendingIncomingButtons: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, appDMButtonIcon: { marginRight: 2 }, formCtaIcon: { width: 32, height: 32 } };
obj2 = { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
obj4 = { marginTop: nativeDefault.space.PX_24 };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
let closure_47 = createStyles(obj);
function ChatBeginningRowGuildDefaultChannel(guild) {
  let canInvite;
  let canManageGuild;
  let currentUser;
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
