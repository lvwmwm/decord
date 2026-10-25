// Module ID: 10692
// Function ID: 10693
// Name: ChannelLongPressActionSheet
// Dependencies: [5, 19, 10693, 6683, 4828, 6790, 4827, 7213, 4823, 7636, 4845, 4903, 6771, 4913, 4874, 6704, 1392, 4830, 1087, 10024, 21, 7878, 2002, 7867, 1128, 3830, 10694, 5210, 10696, 1114, 10816, 8668, 5676, 7411, 5604, 5908, 10120, 10025, 5678, 6672, 10818, 3412, 9646, 10839, 8545, 10841, 10856, 10857, 9050, 10859, 7209, 5151, 6931, 10861, 7957, 10862, 10863, 10865, 10867, 10868, 10870, 7063, 7206, 10872, 9140, 7215, 7210, 10874, 10093, 8544, 10876, 10877, 8568, 8542, 10878, 13845, 5710, 7869, 9971, 8108, 13846, 11535, 13847, 7061, 6830, 7488, 5682, 8975, 10412, 7285, 5662, 558, 576, 7253, 7278, 10843, 504, 4831, 6813, 9724, 4799, 6883, 1202, 13850, 11010, 13851, 13857, 7345, 13862, 13863, 13866, 7298, 1630, 11011, 7294, 2]

// Module 10692 (ChannelLongPressActionSheet)
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1114 */;
import intl40 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4831 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import useChannelName from "useChannelName" /* 5604 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5710 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5908 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6830 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7206 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7209 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7210 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7215 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7294 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import ReportModals from "ReportModals" /* 8108 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8975 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9050 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10024 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10025 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10093 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10693 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10696 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 10841 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10861 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10862 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10865 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10870 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10876 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10877 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 13845 */;
import openAppChannelToChatDefault from "openAppChannelToChat" /* 13846 */;
import closeFrameDefault from "closeFrame" /* 13847 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6683 */;
import StageInstanceStore from "StageInstanceStore" /* 4828 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6790 */;
import ChannelRecord from "ChannelRecord" /* 4827 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7213 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7636 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6704 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let c1, closure_1, dependencyMap, paths;

let c10;
let c9;
let closure_12;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let tmp;
let unpackModuleId;
const RootNavigationRef = tmp(5151);
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  obj = _asyncToGenerator(async (arg0) => {
    const guildStageVoice = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              const isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
              const tmp19 = require("asyncRequire");
              if (isGuildStageVoiceResult) {
                c2 = 2;
                c3 = 1;
                const obj4 = { value: tmp19(dependencyMap[21], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp19(dependencyMap[23], dependencyMap.paths), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                value.openGuildVoiceModal(guildStageVoice, "Channel List");
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              value.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
function getActionSheetButtons(channel) {
  let CopyIcon;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canMarkAsTier1InappropriateConversation;
  let canMarkAsTier2InappropriateConversation;
  let canMarkUnread;
  let canModerateStage;
  let currentlySelectedChannelId;
  let developerMode;
  let favorites;
  let favoritesCategoryAddAction;
  let favoritesMoveAction;
  let hasThreads;
  let hasUnread;
  let intl;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl27;
  let intl28;
  let intl3;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl38;
  let intl39;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isCollapsedVoiceChannel;
  let isFavoritesGuild;
  let isInCollapsedCategory;
  let isLiveStageChannel;
  let isMuted;
  let isNsfwGated;
  let isOptInEnabled;
  let isOptedIn;
  let isOwner;
  let isParentOptedIn;
  let isSpoilerAgreed;
  let isStaff;
  let items1;
  let items2;
  let items3;
  let items5;
  let items6;
  let sourceAnalyticsLocations;
  channel = channel.channel;
  ({ canCreateInstantInvite, developerMode, isMuted } = channel);
  ({ isLiveStageChannel, isOptedIn } = channel);
  const isPinned = channel.isPinned;
  const isMessagesFavorited = channel.isMessagesFavorited;
  ({ analyticsLocations: SafetyWarningTypes, isFavoritesGuild, favoritesCategoryAddAction, favoritesMoveAction } = channel);
  const conjureProjectId = channel.conjureProjectId;
  const appFrameId = channel.appFrameId;
  const conjureRemixProject = channel.conjureRemixProject;
  ({ canManageChannel, canConnect, hasUnread, canMarkUnread, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
  let guildId = channel.getGuildId();
  const tmp2 = null != conjureRemixProject && null != guildId;
  const items = [];
  if (tmp2) {
    obj = { sectionKey: "conjure-remix", buttons: items1 };
    let obj2 = {
      label: intl.string(isMuted(isOptedIn[25]).KMwCb7),
      IconComponent: channel(isOptedIn[26]).RemixIcon,
      onPress() {
          const tmp = ActionSheetActionCreators;
          obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
          const showActionSheet = tmp.showActionSheet;
          showActionSheet(obj);
        }
    };
    let tmp3 = channel;
    let tmp4 = isOptedIn;
    const push = items.push;
    intl = channel(isOptedIn[24]).intl;
    items1 = [obj2];
    push(obj);
  }
  let obj3 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    const buttons = obj3.buttons;
    let obj4 = {
      label: intl2.string(channel(isOptedIn[24]).t.LYju5J),
      IconComponent: channel(isOptedIn[30]).UserCircleIcon,
      onPress() {
          obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: SafetyWarningTypes };
          const tmp = showUserProfileActionSheetDefault;
          tmp(obj);
        }
    };
    const tmp7 = channel;
    const push2 = buttons.push;
    intl2 = channel(isOptedIn[24]).intl;
    push2(obj4);
    if (!isFavoritesGuild) {
      const buttons1 = obj3.buttons;
      const push3 = buttons1.push;
      const obj5 = {
        label: intl3.string(tmp7(isOptedIn[24]).t.jsvgc3),
        IconComponent: tmp7(isOptedIn[32]).UserMinusIcon,
        onPress() {
              obj = ChannelActionCreatorsDefault;
              obj.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
            }
      };
      intl3 = tmp7(tmp8[24]).intl;
      push3(obj5);
    }
  }
  const obj6 = { sectionKey: "gdm", buttons: [] };
  const obj7 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuild) {
      const buttons2 = obj7.buttons;
      const push4 = buttons2.push;
      const obj8 = {
        label: intl4.string(channel(isOptedIn[24]).t["26C4oi"]),
        IconComponent: channel(isOptedIn[32]).UserMinusIcon,
        isDestructive: true,
        onPress() {
              let intl5;
              let intl6;
              let user;
              obj = useChannelName;
              const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
              const intl = intl40.intl;
              const formatToPlainStringResult = intl.formatToPlainString(intl40.t.hJ5Ap4, { name: channelName });
              const intl2 = intl40.intl;
              let formatResult = intl2.format(intl40.t.SSIVOu, { name: channelName });
              let formatToPlainStringResult1 = formatToPlainStringResult;
              if (channel.isManaged()) {
                const intl3 = tmp(1128).intl;
                const obj2 = { name: channelName };
                formatToPlainStringResult1 = intl3.formatToPlainString(tmp(1128).t.hVGjEW, obj2);
                const intl4 = tmp(1128).intl;
                const obj3 = { name: channelName };
                formatResult = intl4.format(tmp(1128).t.IK1Qvs, obj3);
              }
              const obj4 = {
                title: formatToPlainStringResult1,
                body: formatResult,
                confirmText: intl5.string(intl40.t.p89ACt),
                cancelText: intl6.string(intl40.t.gm1Vej),
                onConfirm() {
                  obj = isMuted(isOptedIn[33]);
                  obj.closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
                }
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl5 = tmp(1128).intl;
              intl6 = tmp(1128).intl;
              show(obj4);
            }
      };
      intl4 = channel(isOptedIn[24]).intl;
      push4(obj8);
    }
    const buttons3 = obj6.buttons;
    const push5 = buttons3.push;
    const obj9 = {
      label: intl5.string(channel(isOptedIn[24]).t["1r5E+m"]),
      IconComponent: channel(isOptedIn[36]).PencilIcon,
      onPress() {
          obj = { channelId: channel.id };
          showChatGDMCustomizeActionSheetDefault(obj);
        }
    };
    intl5 = channel(isOptedIn[24]).intl;
    push5(obj9);
    if (isOwner) {
      const buttons4 = obj6.buttons;
      const push6 = buttons4.push;
      const obj10 = {
        label: intl6.string(channel(isOptedIn[24]).t.OQ9MKu),
        IconComponent: channel(isOptedIn[38]).LinkIcon,
        onPress() {
              obj = ModalActionCreatorsDefault;
              const obj2 = { channelId: channel.id };
              obj.pushLazy(asyncRequire(10818, dependencyMap.paths), obj2);
            }
      };
      intl6 = tmp14(tmp15[24]).intl;
      push6(obj10);
    }
  }
  if (obj3.buttons.length > 0) {
    items.push(obj3);
  }
  const tmp19 = isFavoritesGuild && null != channel.guild_id && !channel.isCategory();
  if (tmp19) {
    const obj11 = { sectionKey: "go-to-server", buttons: items2 };
    const push7 = items.push;
    const obj12 = {
      label: intl7.string(isMuted(isOptedIn[41])["3KruG3"]),
      IconComponent: channel(isOptedIn[42]).ServerIcon,
      onPress() {
          obj = router_utils;
          obj.transitionToGuild(channel.guild_id, channel.id);
        }
    };
    intl7 = channel(isOptedIn[24]).intl;
    items2 = [obj12];
    push7(obj11);
  }
  if (null != favoritesCategoryAddAction) {
    const obj13 = { sectionKey: "favorites-add-to-category", buttons: items3 };
    const push8 = items.push;
    items3 = [{ label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[43]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform }];
    const obj14 = { label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[43]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform };
    push8(obj13);
  }
  const items4 = [];
  if (null != favoritesMoveAction) {
    const push9 = items4.push;
    const obj15 = {
      label: favoritesMoveAction.label,
      IconComponent: channel(isOptedIn[44]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, favoritesMoveAction);
        }
    };
    push9(obj15);
  }
  const tmp31 = isOptedIn;
  const tmp32 = isMuted(isOptedIn[46])(favorites);
  const tmp30 = isMuted;
  if (null != tmp32) {
    items4.push(tmp32);
  }
  if (items4.length > 0) {
    const obj16 = { sectionKey: "favorites", buttons: items4 };
    items.push(obj16);
  }
  const tmp35 = null != conjureProjectId && null != guildId;
  if (tmp35) {
    const obj17 = { sectionKey: "conjure", buttons: items5 };
    const push10 = items.push;
    const obj18 = {
      label: intl8.string(tmp30(tmp31[25]).jMMrDM),
      IconComponent: channel(tmp31[36]).PencilIcon,
      onPress() {
          obj = router_utils;
          obj.transitionTo(closure_32.CHANNEL(guildId, StaticChannelRoute.CONJURE, conjureProjectId));
        }
    };
    intl8 = channel(tmp31[24]).intl;
    items5 = [obj18];
    push10(obj17);
  }
  const obj19 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj19.buttons;
    const push11 = buttons5.push;
    const obj20 = {
      label: intl9.string(channel(tmp31[24]).t.VINpSK),
      IconComponent: channel(tmp31[47]).GroupPlusIcon,
      onPress() {
          obj = instant_invite_InstantInviteUtils;
          const obj2 = { source: constants5.CONTEXT_MENU };
          const result = obj.showInstantInviteActionSheet(channel, obj2);
        }
    };
    intl9 = channel(tmp31[24]).intl;
    push11(obj20);
  }
  const tmp41 = isFavoritesGuild || null == guildId || channel.isThread();
  if (!tmp41) {
    if (!channel.isCategory()) {
      let stringResult;
      let tmp44;
      const buttons6 = obj19.buttons;
      const push12 = buttons6.push;
      const intl10 = channel(tmp31[24]).intl;
      const string = intl10.string;
      const t = channel(tmp31[24]).t;
      if (isPinned) {
        stringResult = string(t.M5PWSf);
        tmp44 = tmp42;
      } else {
        stringResult = string(t.RMpwZu);
        tmp44 = tmp42;
      }
      const obj21 = {
        label: stringResult,
        IconComponent: tmp44(tmp31[49]).PinIcon,
        onPress() {
              obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setIsFavorite(guildId, channel.id, !isPinned, obj2);
              const tmp3 = guildId;
              const tmp4 = channel;
              if (!isPinned) {
                const tmpResult = RootNavigationRef;
                const rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  let params;
                  const currentRoute = rootNavigationRef.getCurrentRoute();
                  let name;
                  if (currentRoute != null) {
                    name = currentRoute.name;
                  }
                  const currentRoute1 = rootNavigationRef.getCurrentRoute();
                  if (currentRoute1 != null) {
                    params = currentRoute1.params;
                  }
                  let tmp10 = "guilds" === name;
                  if (tmp10) {
                    guildId = undefined;
                    if (params != null) {
                      guildId = params.guildId;
                    }
                    tmp10 = guildId === tmp3;
                  }
                  if (tmp10) {
                    const obj3 = { jumpToChannelId: tmp4.id };
                    rootNavigationRef.setParams(obj3);
                  }
                }
              }
            }
      };
      push12(obj21);
    }
    if (isOptInEnabled) {
      const buttons7 = obj19.buttons;
      const push13 = buttons7.push;
      const obj22 = { label: null, IconComponent: null, onPress: null };
      const intl11 = channel(tmp31[24]).intl;
      const string2 = intl11.string;
      const t2 = channel(tmp31[24]).t;
      if (isParentOptedIn) {
        obj22.label = string2(t2.jNphKT);
        obj22.IconComponent = channel(tmp31[52]).XSmallIcon;
        obj22.onPress = function onPress() {
          if (null != channel.parent_id) {
            obj = OptInChannelsActionCreators;
            const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId, tmp.parent_id, false, obj2);
          }
        };
        push13(obj22);
      } else {
        let string2Result;
        let tmp48;
        let PlusLargeIcon;
        if (isOptedIn) {
          string2Result = string2(t2["3zySTA"]);
          tmp48 = tmp46;
        } else {
          string2Result = string2(t2["9mysCh"]);
          tmp48 = tmp46;
        }
        obj22.label = string2Result;
        if (isOptedIn) {
          PlusLargeIcon = tmp48(tmp31[52]).XSmallIcon;
        } else {
          PlusLargeIcon = tmp48(tmp31[43]).PlusLargeIcon;
        }
        obj22.IconComponent = PlusLargeIcon;
        obj22.onPress = function onPress() {
          obj = OptInChannelsActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj2);
        };
        push13(obj22);
      }
    }
  }
  const isForumLikeChannelResult = conjureRemixProject(channel.type) || guildId(channel.type) || channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const buttons8 = obj19.buttons;
    const push14 = buttons8.push;
    const obj23 = {
      label: intl12.string(channel(tmp31[24]).t.WqhZss),
      IconComponent: channel(tmp31[38]).LinkIcon,
      isDestructive: false,
      onPress() {
          obj = ChannelActionSheetUtils;
          const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
        }
    };
    intl12 = channel(tmp31[24]).intl;
    push14(obj23);
  }
  const tmp56 = !isFavoritesGuild && channel.isPrivate();
  if (tmp56) {
    let string3Result;
    let tmp59;
    const buttons9 = obj19.buttons;
    const push15 = buttons9.push;
    const intl13 = channel(tmp31[24]).intl;
    const string3 = intl13.string;
    const t3 = channel(tmp31[24]).t;
    if (isMessagesFavorited) {
      string3Result = string3(t3.vDYmad);
      tmp59 = tmp57;
    } else {
      string3Result = string3(t3["uKw3A+"]);
      tmp59 = tmp57;
    }
    const obj24 = {
      label: string3Result,
      IconComponent: tmp59(tmp31[49]).PinIcon,
      onPress() {
          obj = OptInChannelsActionCreators;
          obj.setMessagesFavorite(channel.id, !isMessagesFavorited);
        }
    };
    push15(obj24);
  }
  const obj25 = { sectionKey: "safety-warning-tooling", buttons: [] };
  if (canMarkAsTier1InappropriateConversation) {
    const buttons10 = obj25.buttons;
    const push16 = buttons10.push;
    const obj26 = {
      label: intl14.string(channel(tmp31[24]).t.EuzCET),
      IconComponent: channel(tmp31[54]).WarningIcon,
      onPress() {
          obj = InappropriateConversationsActionCreators;
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        }
    };
    intl14 = channel(tmp31[24]).intl;
    push16(obj26);
  }
  if (canMarkAsTier2InappropriateConversation) {
    const buttons11 = obj25.buttons;
    const push17 = buttons11.push;
    const obj27 = {
      label: intl15.string(channel(tmp31[24]).t["tBw/1i"]),
      IconComponent: channel(tmp31[54]).WarningIcon,
      onPress() {
          obj = InappropriateConversationsActionCreators;
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
        }
    };
    intl15 = channel(tmp31[24]).intl;
    push17(obj27);
  }
  if (obj25.buttons.length > 0) {
    items.push(obj25);
  }
  if (isStaff) {
    if (developerMode) {
      if (channel.isDM()) {
        const obj28 = { sectionKey: "message-request", buttons: [] };
        if (true !== channel.isMessageRequest) {
          const buttons12 = obj28.buttons;
          const push18 = buttons12.push;
          const obj29 = {
            label: intl16.string(channel(tmp31[24]).t.L6623r),
            IconComponent: channel(tmp31[56]).InboxIcon,
            onPress() {
                      obj = MessageRequestActionCreators;
                      obj.markAsMessageRequest(channel.id);
                    }
          };
          intl16 = channel(tmp31[24]).intl;
          push18(obj29);
        }
        const buttons13 = obj28.buttons;
        const push19 = buttons13.push;
        const obj30 = {
          label: intl17.string(channel(tmp31[24]).t["85YWlY"]),
          IconComponent: channel(tmp31[56]).InboxIcon,
          onPress() {
                  obj = MessageRequestActionCreators;
                  const result = obj.clearMessageRequestState(channel.id);
                }
        };
        intl17 = channel(tmp31[24]).intl;
        push19(obj30);
        if (obj28.buttons.length > 0) {
          items.push(obj28);
        }
      }
    }
  }
  if (obj19.buttons.length > 0) {
    items.push(obj19);
  }
  const obj31 = { sectionKey: "notifications", buttons: [] };
  const tmp72 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  if (tmp72) {
    const MarkChannelUnreadExperiment = channel(tmp31[58]).MarkChannelUnreadExperiment;
    if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
      if (!hasUnread) {
        if (canMarkUnread) {
          const buttons14 = obj31.buttons;
          const push20 = buttons14.push;
          const obj32 = {
            label: intl18.string(channel(tmp31[24]).t.RpE9k7),
            IconComponent: channel(tmp31[59]).ChatMarkUnreadIcon,
            onPress() {
                      markChannelUnreadDefault(channel.id);
                    }
          };
          intl18 = tmp73(tmp31[24]).intl;
          push20(obj32);
        }
      }
    }
    const buttons15 = obj31.buttons;
    const push21 = buttons15.push;
    const obj33 = {
      label: intl19.string(channel(tmp31[24]).t.e6RscS),
      IconComponent: channel(tmp31[61]).EyeIcon,
      onPress() {
          obj = ReadStateActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
          obj.ackChannel(channel, obj2);
        }
    };
    intl19 = tmp73(tmp31[24]).intl;
    push21(obj33);
  }
  if (!closure_12(channel.type)) {
    const tmp83 = conjureRemixProject(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
    if (tmp83) {
      const buttons16 = obj31.buttons;
      const push24 = buttons16.push;
      const obj34 = {
        label: intl27.string(channel(tmp31[24]).t.h850Ss),
        IconComponent: channel(tmp31[67]).ChannelNotificationIcon,
        disableColor: true,
        onPress() {
              obj = ChannelSettingsActionCreatorsDefault;
              obj.setSection(constants4.NOTIFICATIONS);
              const obj2 = ChannelSettingsActionCreatorsDefault;
              obj2.open(channel.id);
            }
      };
      intl27 = channel(tmp31[24]).intl;
      push24(obj34);
    }
    if (obj31.buttons.length > 0) {
      items.push(obj31);
    }
    const obj35 = { sectionKey: "threads", buttons: [] };
    const tmp87 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
    if (!tmp87) {
      const buttons17 = obj35.buttons;
      const push25 = buttons17.push;
      const obj36 = {
        label: intl28.string(channel(tmp31[24]).t.B2panI),
        IconComponent: channel(tmp31[69]).ThreadIcon,
        onPress() {
              showThreadBrowserModalDefault(channel);
            }
      };
      intl28 = channel(tmp31[24]).intl;
      push25(obj36);
    }
    if (obj35.buttons.length > 0) {
      items.push(obj35);
    }
    const obj37 = { sectionKey: "voice", buttons: [] };
    const tmp92 = guildId(channel.type) && !isInCollapsedCategory;
    if (tmp92) {
      let string5Result;
      let tmp95;
      const buttons18 = obj37.buttons;
      const push26 = buttons18.push;
      const intl29 = channel(tmp31[24]).intl;
      const string5 = intl29.string;
      const t5 = channel(tmp31[24]).t;
      if (isCollapsedVoiceChannel) {
        string5Result = string5(t5.JYF2Oa);
        tmp95 = tmp93;
      } else {
        string5Result = string5(t5.LxzNiu);
        tmp95 = tmp93;
      }
      const obj38 = {
        label: string5Result,
        IconComponent: tmp95(tmp31[30]).UserCircleIcon,
        onPress() {
              obj = ChannelCollapseActionCreatorsDefault;
              obj.update(channel.id);
            }
      };
      push26(obj38);
    }
    if (channel.isGuildVocal()) {
      const buttons19 = obj37.buttons;
      const push27 = buttons19.push;
      const obj39 = { label: null, IconComponent: null, onPress: null };
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl30 = channel(tmp31[24]).intl;
      const string6 = intl30.string;
      const t6 = channel(tmp31[24]).t;
      if (isGuildStageVoiceResult) {
        obj39.label = string6(t6["7vb2cc"]);
        obj39.IconComponent = channel(tmp31[72]).StageIcon;
        obj39.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
        };
        push27(obj39);
        const buttons20 = obj37.buttons;
        const push28 = buttons20.push;
        const obj40 = {
          label: intl31.string(channel(tmp31[24]).t.ZXxLQg),
          IconComponent: channel(tmp31[73]).ChatIcon,
          onPress() {
                  obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = ModalActionCreatorsDefault;
                  const obj3 = { channel };
                  obj2.pushLazy(asyncRequire(10878, dependencyMap.paths), obj3);
                  hideLaunchPadDefault();
                }
        };
        intl31 = tmp98(tmp31[24]).intl;
        push28(obj40);
      } else {
        obj39.label = string6(t6.ZXxLQg);
        obj39.IconComponent = channel(tmp31[73]).ChatIcon;
        obj39.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
          obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(channel.id, true);
          hideLaunchPadDefault();
        };
        push27(obj39);
      }
    }
    const tmp102 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
    if (tmp102) {
      const buttons21 = obj37.buttons;
      const push29 = buttons21.push;
      const obj41 = {
        label: intl32.string(channel(tmp31[24]).t.saZaRb),
        IconComponent: channel(tmp31[52]).XSmallIcon,
        isDestructive: true,
        onPress() {
              return (async (arg0, value) => {
                let closure_0;
                if (paths === 2) {
                  paths = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    paths = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        paths = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        paths = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c1 = 1;
                        paths = 1;
                        const obj4 = { value: tmp3(paths[22])(paths[77], paths.paths), done: false };
                        return obj4;
                      }
                    } else if (arg0 === 1) {
                      paths = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      paths = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      value.openEndStageModal(closure_128_0);
                      paths = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp9) {
                    paths = 3;
                    throw tmp9;
                  }
                }
              })();
            }
      };
      intl32 = channel(tmp31[24]).intl;
      push29(obj41);
    }
    const tmp105 = channel.isGuildStageVoice() && isLiveStageChannel && canConnect;
    if (tmp105) {
      const buttons22 = obj37.buttons;
      const push30 = buttons22.push;
      const obj42 = {
        label: intl33.string(channel(tmp31[24]).t["+78Pfm"]),
        IconComponent: channel(tmp31[78]).FlagIcon,
        isDestructive: true,
        onPress() {
              obj = ReportModals;
              const result = obj.showReportModalForStageChannel(channel);
            }
      };
      intl33 = channel(tmp31[24]).intl;
      push30(obj42);
    }
    if (obj37.buttons.length > 0) {
      items.push(obj37);
    }
    if (channel.type === constants5.GUILD_APP) {
      if (null != channel.application_id) {
        const obj43 = { sectionKey: "app-channel", buttons: items6 };
        const obj44 = {
          label: intl39.string(channel(tmp31[24]).t.ZXxLQg),
          IconComponent: channel(tmp31[73]).ChatIcon,
          onPress() {
                  openAppChannelToChatDefault(channel);
                  hideLaunchPadDefault();
                }
        };
        intl39 = channel(tmp31[24]).intl;
        items6 = [obj44];
        if (null != appFrameId) {
          const buttons23 = obj43.buttons;
          const push31 = buttons23.push;
          const obj45 = {
            label: intl34.string(channel(tmp31[24]).t.VkMnR2),
            IconComponent: channel(tmp31[81]).DoorExitIcon,
            onPress() {
                      closeFrameDefault(appFrameId);
                    }
          };
          intl34 = tmp130(tmp31[24]).intl;
          push31(obj45);
        }
        items.push(obj43);
      }
    }
    if (channel.isSpoilerChannel()) {
      if (isSpoilerAgreed) {
        const obj46 = { sectionKey: "spoiler", buttons: [] };
        const buttons24 = obj46.buttons;
        const push32 = buttons24.push;
        const obj47 = {
          label: intl35.string(channel(tmp31[24]).t.ix2UVZ),
          IconComponent: channel(tmp31[83]).EyeSlashIcon,
          onPress() {
                  obj = GuildActionCreatorsDefault;
                  obj.clearSpoilerAgree(channel.id);
                }
        };
        intl35 = channel(tmp31[24]).intl;
        push32(obj47);
        items.push(obj46);
      }
    }
    const obj48 = { sectionKey: "admin-actions", buttons: [] };
    if (canManageChannel) {
      let string7Result;
      let tmp118;
      const buttons25 = obj48.buttons;
      const push33 = buttons25.push;
      const isCategoryResult = channel.isCategory();
      const intl36 = channel(tmp31[24]).intl;
      const string7 = intl36.string;
      const t7 = channel(tmp31[24]).t;
      if (isCategoryResult) {
        string7Result = string7(t7.zdPFs9);
        tmp118 = tmp116;
      } else {
        string7Result = string7(t7["3gUsJb"]);
        tmp118 = tmp116;
      }
      const obj49 = {
        label: string7Result,
        IconComponent: tmp118(tmp31[85]).SettingsIcon,
        onPress() {
              obj = ChannelSettingsActionCreatorsDefault;
              obj.setSection(constants4.OVERVIEW);
              const obj2 = ChannelSettingsActionCreatorsDefault;
              obj2.open(channel.id);
            }
      };
      push33(obj49);
      const isForumLikeChannelResult1 = tmp51(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
      if (isForumLikeChannelResult1) {
        let string8Result;
        const buttons26 = obj48.buttons;
        const push34 = buttons26.push;
        const isCategoryResult1 = channel.isCategory();
        const intl37 = tmp118(tmp31[24]).intl;
        const string8 = intl37.string;
        const t8 = tmp118(tmp31[24]).t;
        if (isCategoryResult1) {
          string8Result = string8(t8["fUYU+j"]);
        } else {
          string8Result = string8(t8.dEaPc4);
        }
        const obj50 = {
          label: string8Result,
          IconComponent: CopyIcon,
          onPress() {
                  const open = CreateChannelModalActionCreatorsDefault.open;
                  let type;
                  CreateChannelModalActionCreatorsDefault;
                  if (!channel.isCategory()) {
                    type = obj.type;
                  }
                  guildId = obj.getGuildId();
                  let id;
                  const tmp4 = channel.isCategory() ? channel.id : channel.parent_id;
                  if (!channel.isCategory()) {
                    id = obj.id;
                  }
                  open(type, guildId, tmp4, id);
                }
        };
        if (channel.isCategory()) {
          CopyIcon = tmp118(tmp31[43]).PlusLargeIcon;
        } else {
          CopyIcon = tmp118(tmp31[86]).CopyIcon;
        }
        push34(obj50);
      }
    }
    if (developerMode) {
      const buttons27 = obj48.buttons;
      const push35 = buttons27.push;
      const obj51 = {
        label: intl38.string(channel(tmp31[24]).t.gFHI3k),
        IconComponent: channel(tmp31[88]).IdIcon,
        onPress() {
              obj = ClipboardUtils;
              obj.copy(channel.id);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            }
      };
      intl38 = channel(tmp31[24]).intl;
      push35(obj51);
    }
    if (obj48.buttons.length > 0) {
      items.push(obj48);
    }
    if (obj6.buttons.length > 0) {
      items.push(obj6);
    }
    if (obj7.buttons.length > 0) {
      items.push(obj7);
    }
    return items;
  }
  const intl20 = channel(tmp31[24]).intl;
  const string4 = intl20.string;
  const t4 = channel(tmp31[24]).t;
  if (isMuted) {
    let stringResult1;
    const string4Result = string4(t4.OYefme);
    if (channel.isCategory()) {
      const intl26 = tmp76(tmp31[24]).intl;
      stringResult1 = intl26.string(tmp76(tmp31[24]).t.olaBeG);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl24 = tmp76(tmp31[24]).intl;
            stringResult1 = intl24.string(tmp76(tmp31[24]).t["Cq/TzF"]);
          }
        }
      }
      const intl25 = tmp76(tmp31[24]).intl;
      stringResult1 = intl25.string(tmp76(tmp31[24]).t["s5/5fm"]);
    }
    const buttons28 = obj31.buttons;
    const push23 = buttons28.push;
    const obj52 = {
      label: stringResult1,
      IconComponent: channel(tmp31[64]).BellIcon,
      onPress() {
          let NotificationLabel;
          let obj2;
          const tmp = NotificationSettingsModalActionCreatorsDefault;
          const updateChannelOverrideSettings = tmp.updateChannelOverrideSettings;
          obj = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj2, label: NotificationLabel.muted(!isMuted) };
          obj2 = { muted: !isMuted };
          NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          const result = updateChannelOverrideSettings(obj);
        }
    };
    push23(obj52);
  } else {
    let stringResult2;
    const string4Result1 = string4(t4.tbeRRJ);
    if (channel.isCategory()) {
      const intl23 = tmp76(tmp31[24]).intl;
      stringResult2 = intl23.string(tmp76(tmp31[24]).t.pNMCg2);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult2 = string4Result1;
          if (channel.isThread()) {
            const intl21 = tmp76(tmp31[24]).intl;
            stringResult2 = intl21.string(tmp76(tmp31[24]).t.bUUd8q);
          }
        }
      }
      const intl22 = tmp76(tmp31[24]).intl;
      stringResult2 = intl22.string(tmp76(tmp31[24]).t.LO3kaK);
    }
    const buttons29 = obj31.buttons;
    const push22 = buttons29.push;
    const obj53 = {
      label: stringResult2,
      IconComponent: channel(tmp31[63]).BellSlashIcon,
      onPress() {
          obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp) {
            const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
            rootNavigationRef.navigate("sidebar", obj2);
          }
        }
    };
    push22(obj53);
  }
}
let react = react_mod;
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = ChannelRecord);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ AnalyticsObjectTypes: closure_24, AnalyticsObjects: closure_25, AnalyticsSections: closure_26, ChannelSettingsSections: closure_27, ChannelTypes: closure_28, InstantInviteSources: closure_29, NULL_STRING_GUILD_ID: closure_30, Permissions: closure_31, Routes: closure_32, ZERO_STRING_GUILD_ID: closure_33 } = Constants);
let closure_34 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheetConnected(channel) {
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let closure_2;
  let currentUser;
  let length;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp5;
  let tmp8;
  let tmp = channel;
  obj = channel(576);
  const cResult = obj.c(69);
  channel = channel.channel;
  const onClose = channel.onClose;
  const tmp4 = onClose(7253);
  const analyticsLocations = tmp4(onClose(7278).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmpResult = tmp(10843);
  const isFavoritesGuildSelected = tmpResult.useIsFavoritesGuildSelected();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const fn = function b() {
      return GuildStore.getGuild(closure_2);
    };
    cResult[3] = tmp5;
    cResult[4] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[5] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== channel) {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    cResult[6] = channel;
    cResult[7] = O;
    tmp14 = O;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  const tmpResult5 = tmp(504);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp12, tmp14);
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const useOptInEnabledForGuild = tmp(6813).useOptInEnabledForGuild;
  tmp(6813);
  const tmp17 = tmp5;
  if (tmp5 == null) {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(tmp17);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    const items2 = [UserGuildSettingsStore];
    cResult[8] = items2;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  if (cResult[9] === channel.id) {
    class O {
      constructor() {
        obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  class R {
    constructor() {
      let isFavorite;
      let tmp;
      obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(closure_2, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
      tmp = closure_2;
      isFavorite = obj2.isFavorite;
      null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
      if (tmp == null) {
        tmp = __initData2;
      }
      return obj;
    }
  }
  cResult[9] = channel.id;
  cResult[10] = channel.parent_id;
  cResult[11] = tmp5;
  cResult[12] = R;
}) : (function ChannelLongPressActionSheetConnected(channel) {
  let ActionSheet;
  let ActionSheetIconHeader;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let currentUser;
  let formatToPlainStringResult;
  let id;
  let isOptedIn;
  let isParentOptedIn;
  let isPinned;
  let isStaffResult;
  let length;
  let obj10;
  let obj9;
  let subtitle;
  let title;
  let tmp24;
  let tmp25;
  let tmp5Result26;
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  react = undefined;
  let tmp = onClose;
  const tmp3 = onClose(guildId[93]);
  const analyticsLocations = tmp3(onClose(guildId[94]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  obj = channel(guildId[95]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  const obj2 = channel(guildId[96]);
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [PermissionStore];
  const obj3 = channel(guildId[96]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
    return obj;
  });
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const useOptInEnabledForGuild = channel(guildId[98]).useOptInEnabledForGuild;
  channel(guildId[98]);
  if (guildId == null) {
    guildId = closure_30;
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(guildId);
  const items2 = [UserGuildSettingsStore];
  const tmp5Result = channel(guildId[96]);
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    let isFavorite;
    let tmp;
    obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
    tmp = guildId;
    isFavorite = obj2.isFavorite;
    null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData2;
    }
    return obj;
  });
  ({ isOptedIn, isParentOptedIn, isPinned } = stateFromStoresObject1);
  const items3 = [UserGuildSettingsStore];
  const tmp5Result14 = channel(guildId[96]);
  const stateFromStores1 = tmp5Result14.useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const items4 = [ReadStateStore];
  const tmp5Result15 = channel(guildId[96]);
  const stateFromStores2 = tmp5Result15.useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result16 = channel(guildId[60]);
  const canMarkChannelUnread = tmp5Result16.useCanMarkChannelUnread(channel);
  const items5 = [ActiveThreadsStore];
  const tmp5Result17 = channel(guildId[96]);
  const stateFromStores3 = tmp5Result17.useStateFromStores(items5, () => {
    const hasThreadsForChannelResult = null != guildId && ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    return hasThreadsForChannelResult;
  });
  const items6 = [CategoryCollapseStore];
  const tmp5Result18 = channel(guildId[96]);
  const stateFromStores4 = tmp5Result18.useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const items7 = [CollapsedVoiceChannelStore];
  const tmp5Result19 = channel(guildId[96]);
  const stateFromStores5 = tmp5Result19.useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const items8 = [StageInstanceStore];
  const tmp5Result20 = channel(guildId[96]);
  const stateFromStores6 = tmp5Result20.useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmpResult = tmp(guildId[34]);
  const tmpResultResult = tmpResult(channel, !channel.isThread());
  const tmp22 = tmp(guildId[99])(channel);
  const DeveloperMode = tmp5(tmp2[100]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp11 = UserGuildSettingsStore;
  if (null != stateFromStores) {
    tmp(guildId[101]);
    tmp25 = <tmpResult3 guild={stateFromStores} size={channel(tmp2[101]).GuildIconSizes.LARGE} />;
    tmp24 = jsx;
  } else {
    tmp24 = jsx;
    const Avatar = tmp5(tmp2[102]).Avatar;
    tmp25 = <Avatar size={channel(tmp2[102]).AvatarSizes.LARGE} channel={channel} />;
  }
  const items9 = [UserStore];
  const tmp5Result21 = channel(guildId[96]);
  const stateFromStores7 = tmp5Result21.useStateFromStores(items9, () => currentUser.getCurrentUser());
  const items10 = [tmp11];
  const tmp28 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const tmp5Result22 = channel(guildId[96]);
  const stateFromStores8 = tmp5Result22.useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result23 = channel(guildId[103]);
  const inappropriateConversationsTiers = tmp5Result23.useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp32 = null != isTier1;
  if (tmp32) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp32 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp35 = null != isTier2;
  if (tmp35) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp35 = !isTier21;
  }
  const items11 = [ChannelSpoilerAgreeStore];
  const tmp5Result24 = channel(guildId[96]);
  const stateFromStores9 = tmp5Result24.useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp38 = tmp(guildId[104])(channel);
  const tmp39 = tmp(guildId[105])(channel);
  const tmp40 = tmp(guildId[106])(channel);
  let isFavorites;
  if (tmp40 != null) {
    isFavorites = tmp40.isFavorites;
  }
  let tmp42 = null;
  if (true === isFavorites) {
    const destinations = tmp40.destinations;
    tmp42 = null;
    if (destinations.some((disabled) => !disabled.disabled)) {
      tmp42 = tmp40;
    }
  }
  const tmp5Result25 = channel(guildId[107]);
  const isConjureChannelCandidate = tmp5Result25.useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp45 = null;
  const tmpResult4 = tmp(guildId[108]);
  if (isConjureChannelCandidate) {
    tmp45 = channel;
  }
  const tmpResult2Result = tmpResult4(tmp45);
  const frameId = tmp(tmp2[109])(channel).frameId;
  const tmp47 = tmp(guildId[110])(channel, isConjureChannelCandidate);
  const obj6 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, hasUnread: stateFromStores2, canMarkUnread: canMarkChannelUnread, isOwner: tmp28, hasThreads: stateFromStores3, isNsfwGated: tmp22, isInCollapsedCategory: stateFromStores4, isCollapsedVoiceChannel: stateFromStores5, isLiveStageChannel: stateFromStores6, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, isMessagesFavorited: stateFromStores8, canMarkAsTier1InappropriateConversation: tmp32, canMarkAsTier2InappropriateConversation: tmp35, isSpoilerAgreed: stateFromStores9, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected, isStaff: true === isStaffResult, favorites: tmp38, favoritesCategoryAddAction: tmp39, favoritesMoveAction: tmp42, conjureProjectId: id, appFrameId: frameId, conjureRemixProject: tmp47.remixProject };
  isStaffResult = undefined;
  const tmp48 = getActionSheetButtons;
  if (stateFromStores7 != null) {
    isStaffResult = stateFromStores7.isStaff();
  }
  id = undefined;
  if (tmpResult2Result != null) {
    id = tmpResult2Result.id;
  }
  if (id == null) {
    id = null;
  }
  const tmp48Result = tmp48(obj6);
  react = tmp48Result;
  if (channel.isGroupDM()) {
    const intl = tmp5(tmp2[24]).intl;
    const obj7 = { members: channel.recipients.length + 1 };
    formatToPlainStringResult = intl.formatToPlainString(channel(guildId[24]).t.ABMKx3, obj7);
  }
  const items12 = [tmp48Result.length, setting, onClose];
  const effect = react.useEffect(() => {
    const tmp = 0 !== length.length || setting;
    if (!tmp) {
      onClose();
    }
  }, items12);
  const obj8 = { value: analyticsLocations, children: tmp24(ActionSheet, obj9) };
  const AnalyticsLocationProvider = tmp5(tmp2[93]).AnalyticsLocationProvider;
  obj9 = {
    showGradient: true,
    startExpanded: tmp5Result26.isMetaQuest(),
    header: tmp24(ActionSheetIconHeader, obj10),
    children: tmp48Result.map((buttons) => {
      buttons = buttons.buttons;
      const Group = ActionSheetRow2.ActionSheetRow.Group;
      return <Group key={arg0.sectionKey} hasIcons>{buttons.map((onPress, index) => {
        let IconComponent;
        let disableColor;
        let iconStyle;
        let label;
        let trailing;
        onPress = onPress.onPress;
        let str = "default";
        ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
        if (onPress.isDestructive) {
          str = "danger";
        }
        obj = {
          variant: str,
          label,
          icon: closure_1_35(channel(guildId[114]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
          trailing,
          onPress() {
            if (onPress != null) {
              tmp();
            }
            onClose();
          }
        };
        const ActionSheetRow = channel(guildId[114]).ActionSheetRow;
        return closure_1_35(ActionSheetRow, obj, index);
      })}</Group>;
    })
  };
  ActionSheet = tmp5(tmp2[111]).ActionSheet;
  const header = tmp47.header;
  let icon;
  tmp5Result26 = channel(guildId[112]);
  ActionSheetIconHeader = tmp5(tmp2[113]).ActionSheetIconHeader;
  if (header != null) {
    icon = header.icon;
  }
  if (icon == null) {
    icon = tmp25;
  }
  const header2 = tmp47.header;
  obj10 = { icon, title, subtitle };
  title = undefined;
  if (header2 != null) {
    title = header2.title;
  }
  if (title == null) {
    title = tmpResultResult;
  }
  const header3 = tmp47.header;
  subtitle = undefined;
  if (header3 != null) {
    subtitle = header3.subtitle;
  }
  if (subtitle == null) {
    subtitle = formatToPlainStringResult;
  }
  return tmp24(AnalyticsLocationProvider, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheet(channelId) {
  let first;
  let stateFromStores;
  let tmp6;
  obj = channelId(stateFromStores[92]);
  const cResult = obj.c(10);
  const tmp = channelId;
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[96]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    let tmp8;
    let tmp9;
    if (cResult[4] === onClose) {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    const effect = react.useEffect(tmp8, tmp9);
    if (cResult[7] === stateFromStores) {
      let tmp12;
      if (cResult[8] === onClose) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
    let tmp13 = null;
    if (null != stateFromStores) {
      tmp13 = <closure_39 channel={stateFromStores} onClose={onClose} />;
    }
    cResult[7] = stateFromStores;
    cResult[8] = onClose;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  const fn2 = function h() {
    if (null == stateFromStores) {
      onClose();
    }
  };
  const items1 = [stateFromStores, onClose];
  cResult[3] = stateFromStores;
  cResult[4] = onClose;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn2;
}) : (function ChannelLongPressActionSheet(arg0) {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = <closure_39 channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default tmp4;
