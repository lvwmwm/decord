// Module ID: 10760
// Function ID: 10761
// Name: ChannelLongPressActionSheet
// Dependencies: [5, 19, 10761, 6741, 4862, 6848, 4861, 7273, 4857, 7694, 4879, 4937, 6829, 4947, 4908, 6762, 1389, 1084, 10090, 21, 7936, 2000, 7925, 1125, 10762, 8708, 5714, 7471, 5641, 5946, 10187, 10091, 5716, 6731, 10764, 3446, 9712, 1111, 10785, 8604, 10787, 10802, 3864, 10803, 5247, 10805, 10932, 10933, 9086, 10935, 7269, 5188, 6991, 10937, 8012, 10938, 10939, 10941, 10943, 10944, 10946, 7123, 7266, 10948, 9176, 7275, 7270, 10950, 10160, 8603, 10952, 10953, 8627, 8601, 10954, 14311, 5748, 7927, 10037, 8163, 14312, 14313, 11632, 14314, 7121, 6889, 7547, 5720, 9012, 10479, 7345, 5700, 558, 576, 7313, 7338, 10789, 504, 4865, 6872, 9790, 4833, 6943, 1199, 14317, 11105, 14318, 14324, 7405, 14329, 14330, 1453, 11585, 14333, 9631, 7358, 1628, 11106, 7354, 2]

// Module 10760 (ChannelLongPressActionSheet)
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1111 */;
import intl40 from "intl" /* 1125 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import useChannelName from "useChannelName" /* 5641 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5748 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5946 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6889 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7266 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7269 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7270 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7275 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7354 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7471 */;
import ReportModals from "ReportModals" /* 8163 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8708 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9012 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9086 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10090 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10091 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10160 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10761 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 10787 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10805 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10937 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10938 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10941 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10946 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10952 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10953 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11585 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 14311 */;
import openAppChannelToChatDefault from "openAppChannelToChat" /* 14312 */;
import closeFrameDefault from "closeFrame" /* 14314 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6741 */;
import StageInstanceStore from "StageInstanceStore" /* 4862 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6848 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7273 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7694 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6762 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1084 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let c1, closure_1, dependencyMap, paths;

let c10;
let c9;
let closure_12;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let tmp;
let unpackModuleId;
const RootNavigationRef = tmp(5188);
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
          return { value: "IconComponent", done: "IconComponent" };
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
                const obj4 = { value: tmp19(dependencyMap[20], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp19(dependencyMap[22], dependencyMap.paths), done: false };
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
            return { value: "IconComponent", done: "IconComponent" };
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
  let items4;
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
  const appUserMuted = channel.appUserMuted;
  ({ canManageChannel, canConnect, hasUnread, canMarkUnread, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
  let guildId = channel.getGuildId();
  obj = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    const buttons = obj.buttons;
    let obj2 = {
      label: intl.string(channel(isOptedIn[23]).t.LYju5J),
      IconComponent: channel(isOptedIn[24]).UserCircleIcon,
      onPress() {
          obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: SafetyWarningTypes };
          const tmp = showUserProfileActionSheetDefault;
          tmp(obj);
        }
    };
    const tmp2 = channel;
    let tmp3 = isOptedIn;
    const push = buttons.push;
    intl = channel(isOptedIn[23]).intl;
    push(obj2);
    if (!isFavoritesGuild) {
      const buttons1 = obj.buttons;
      let obj3 = {
        label: intl2.string(tmp2(tmp3[23]).t.jsvgc3),
        IconComponent: tmp2(tmp3[26]).UserMinusIcon,
        onPress() {
              obj = ChannelActionCreatorsDefault;
              obj.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
            }
      };
      const push2 = buttons1.push;
      intl2 = tmp2(tmp3[23]).intl;
      push2(obj3);
    }
  }
  let obj4 = { sectionKey: "gdm", buttons: [] };
  const obj5 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuild) {
      const buttons2 = obj5.buttons;
      const push3 = buttons2.push;
      const obj6 = {
        label: intl3.string(channel(isOptedIn[23]).t["26C4oi"]),
        IconComponent: channel(isOptedIn[26]).UserMinusIcon,
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
                const intl3 = tmp(1125).intl;
                const obj2 = { name: channelName };
                formatToPlainStringResult1 = intl3.formatToPlainString(tmp(1125).t.hVGjEW, obj2);
                const intl4 = tmp(1125).intl;
                const obj3 = { name: channelName };
                formatResult = intl4.format(tmp(1125).t.IK1Qvs, obj3);
              }
              const obj4 = {
                title: formatToPlainStringResult1,
                body: formatResult,
                confirmText: intl5.string(intl40.t.p89ACt),
                cancelText: intl6.string(intl40.t.gm1Vej),
                onConfirm() {
                  obj = isMuted(isOptedIn[27]);
                  obj.closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
                }
              };
              const show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl5 = tmp(1125).intl;
              intl6 = tmp(1125).intl;
              show(obj4);
            }
      };
      intl3 = channel(isOptedIn[23]).intl;
      push3(obj6);
    }
    const buttons3 = obj4.buttons;
    const tmp9 = channel;
    let tmp10 = isOptedIn;
    const push4 = buttons3.push;
    const obj7 = {
      label: intl4.string(channel(isOptedIn[23]).t["1r5E+m"]),
      IconComponent: channel(isOptedIn[30]).PencilIcon,
      onPress() {
          obj = { channelId: channel.id };
          showChatGDMCustomizeActionSheetDefault(obj);
        }
    };
    intl4 = channel(isOptedIn[23]).intl;
    push4(obj7);
    if (isOwner) {
      const buttons4 = obj4.buttons;
      const push5 = buttons4.push;
      const obj8 = {
        label: intl5.string(tmp9(tmp10[23]).t.OQ9MKu),
        IconComponent: tmp9(tmp10[32]).LinkIcon,
        onPress() {
              obj = ModalActionCreatorsDefault;
              const obj2 = { channelId: channel.id };
              obj.pushLazy(asyncRequire(10764, dependencyMap.paths), obj2);
            }
      };
      intl5 = tmp9(tmp10[23]).intl;
      push5(obj8);
    }
  }
  const items = [];
  if (obj.buttons.length > 0) {
    items.push(obj);
  }
  const tmp14 = isFavoritesGuild && null != channel.guild_id && !channel.isCategory();
  if (tmp14) {
    const obj9 = { sectionKey: "go-to-server", buttons: items1 };
    const push6 = items.push;
    const obj10 = {
      label: intl6.string(isMuted(isOptedIn[35])["3KruG3"]),
      IconComponent: channel(isOptedIn[36]).ServerIcon,
      onPress() {
          obj = router_utils;
          obj.transitionToGuild(channel.guild_id, channel.id);
        }
    };
    intl6 = channel(isOptedIn[23]).intl;
    items1 = [obj10];
    push6(obj9);
  }
  if (null != favoritesCategoryAddAction) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: items2 };
    const push7 = items.push;
    items2 = [{ label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[38]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform }];
    const obj12 = { label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[38]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform };
    push7(obj11);
  }
  const items3 = [];
  if (null != favoritesMoveAction) {
    const push8 = items3.push;
    const obj13 = {
      label: favoritesMoveAction.label,
      IconComponent: channel(isOptedIn[39]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, favoritesMoveAction);
        }
    };
    push8(obj13);
  }
  const tmp27 = isOptedIn;
  const tmp28 = isMuted(isOptedIn[41])(favorites);
  if (null != tmp28) {
    items3.push(tmp28);
  }
  if (items3.length > 0) {
    const obj14 = { sectionKey: "favorites", buttons: items3 };
    items.push(obj14);
  }
  const obj15 = { sectionKey: "conjure", buttons: [] };
  const tmp31 = null != conjureRemixProject && null != guildId;
  if (tmp31) {
    const buttons5 = obj15.buttons;
    const push9 = buttons5.push;
    const obj16 = {
      label: intl7.string(isMuted(tmp27[42]).KMwCb7),
      IconComponent: channel(tmp27[43]).RemixIcon,
      onPress() {
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
          showActionSheet(obj);
        }
    };
    intl7 = channel(tmp27[23]).intl;
    push9(obj16);
  }
  const tmp34 = null != conjureProjectId && null != guildId;
  if (tmp34) {
    const buttons6 = obj15.buttons;
    const push10 = buttons6.push;
    const obj17 = {
      label: intl8.string(isMuted(tmp27[42]).jMMrDM),
      IconComponent: channel(tmp27[30]).PencilIcon,
      onPress() {
          openConjureHomeScreenDefault(conjureProjectId);
        }
    };
    intl8 = channel(tmp27[23]).intl;
    push10(obj17);
  }
  if (obj15.buttons.length > 0) {
    items.push(obj15);
  }
  const obj18 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons7 = obj18.buttons;
    const push11 = buttons7.push;
    const obj19 = {
      label: intl9.string(channel(tmp27[23]).t.VINpSK),
      IconComponent: channel(tmp27[47]).GroupPlusIcon,
      onPress() {
          obj = instant_invite_InstantInviteUtils;
          const obj2 = { source: constants5.CONTEXT_MENU };
          const result = obj.showInstantInviteActionSheet(channel, obj2);
        }
    };
    intl9 = channel(tmp27[23]).intl;
    push11(obj19);
  }
  const tmp41 = isFavoritesGuild || null == guildId || channel.isThread();
  if (!tmp41) {
    if (!channel.isCategory()) {
      let stringResult;
      let tmp44;
      const buttons8 = obj18.buttons;
      const push12 = buttons8.push;
      const intl10 = channel(tmp27[23]).intl;
      const string = intl10.string;
      const t = channel(tmp27[23]).t;
      if (isPinned) {
        stringResult = string(t.M5PWSf);
        tmp44 = tmp42;
      } else {
        stringResult = string(t.RMpwZu);
        tmp44 = tmp42;
      }
      const obj20 = {
        label: stringResult,
        IconComponent: tmp44(tmp27[49]).PinIcon,
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
      push12(obj20);
    }
    if (isOptInEnabled) {
      const buttons9 = obj18.buttons;
      const push13 = buttons9.push;
      const obj21 = { label: null, IconComponent: null, onPress: null };
      const intl11 = channel(tmp27[23]).intl;
      const string2 = intl11.string;
      const t2 = channel(tmp27[23]).t;
      if (isParentOptedIn) {
        obj21.label = string2(t2.jNphKT);
        obj21.IconComponent = channel(tmp27[52]).XSmallIcon;
        obj21.onPress = function onPress() {
          if (null != channel.parent_id) {
            obj = OptInChannelsActionCreators;
            const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId, tmp.parent_id, false, obj2);
          }
        };
        push13(obj21);
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
        obj21.label = string2Result;
        if (isOptedIn) {
          PlusLargeIcon = tmp48(tmp27[52]).XSmallIcon;
        } else {
          PlusLargeIcon = tmp48(tmp27[38]).PlusLargeIcon;
        }
        obj21.IconComponent = PlusLargeIcon;
        obj21.onPress = function onPress() {
          obj = OptInChannelsActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj2);
        };
        push13(obj21);
      }
    }
  }
  const isForumLikeChannelResult = conjureRemixProject(channel.type) || guildId(channel.type) || channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const buttons10 = obj18.buttons;
    const push14 = buttons10.push;
    const obj22 = {
      label: intl12.string(channel(tmp27[23]).t.WqhZss),
      IconComponent: channel(tmp27[32]).LinkIcon,
      isDestructive: false,
      onPress() {
          obj = ChannelActionSheetUtils;
          const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
        }
    };
    intl12 = channel(tmp27[23]).intl;
    push14(obj22);
  }
  const tmp56 = !isFavoritesGuild && channel.isPrivate();
  if (tmp56) {
    let string3Result;
    let tmp59;
    const buttons11 = obj18.buttons;
    const push15 = buttons11.push;
    const intl13 = channel(tmp27[23]).intl;
    const string3 = intl13.string;
    const t3 = channel(tmp27[23]).t;
    if (isMessagesFavorited) {
      string3Result = string3(t3.vDYmad);
      tmp59 = tmp57;
    } else {
      string3Result = string3(t3["uKw3A+"]);
      tmp59 = tmp57;
    }
    const obj23 = {
      label: string3Result,
      IconComponent: tmp59(tmp27[49]).PinIcon,
      onPress() {
          obj = OptInChannelsActionCreators;
          obj.setMessagesFavorite(channel.id, !isMessagesFavorited);
        }
    };
    push15(obj23);
  }
  const obj24 = { sectionKey: "safety-warning-tooling", buttons: [] };
  if (canMarkAsTier1InappropriateConversation) {
    const buttons12 = obj24.buttons;
    const push16 = buttons12.push;
    const obj25 = {
      label: intl14.string(channel(tmp27[23]).t.EuzCET),
      IconComponent: channel(tmp27[54]).WarningIcon,
      onPress() {
          obj = InappropriateConversationsActionCreators;
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        }
    };
    intl14 = channel(tmp27[23]).intl;
    push16(obj25);
  }
  if (canMarkAsTier2InappropriateConversation) {
    const buttons13 = obj24.buttons;
    const push17 = buttons13.push;
    const obj26 = {
      label: intl15.string(channel(tmp27[23]).t["tBw/1i"]),
      IconComponent: channel(tmp27[54]).WarningIcon,
      onPress() {
          obj = InappropriateConversationsActionCreators;
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
        }
    };
    intl15 = channel(tmp27[23]).intl;
    push17(obj26);
  }
  if (obj24.buttons.length > 0) {
    items.push(obj24);
  }
  if (isStaff) {
    if (developerMode) {
      if (channel.isDM()) {
        const obj27 = { sectionKey: "message-request", buttons: [] };
        if (true !== channel.isMessageRequest) {
          const buttons14 = obj27.buttons;
          const push18 = buttons14.push;
          const obj28 = {
            label: intl16.string(channel(tmp27[23]).t.L6623r),
            IconComponent: channel(tmp27[56]).InboxIcon,
            onPress() {
                      obj = MessageRequestActionCreators;
                      obj.markAsMessageRequest(channel.id);
                    }
          };
          intl16 = channel(tmp27[23]).intl;
          push18(obj28);
        }
        const buttons15 = obj27.buttons;
        const push19 = buttons15.push;
        const obj29 = {
          label: intl17.string(channel(tmp27[23]).t["85YWlY"]),
          IconComponent: channel(tmp27[56]).InboxIcon,
          onPress() {
                  obj = MessageRequestActionCreators;
                  const result = obj.clearMessageRequestState(channel.id);
                }
        };
        intl17 = channel(tmp27[23]).intl;
        push19(obj29);
        if (obj27.buttons.length > 0) {
          items.push(obj27);
        }
      }
    }
  }
  if (obj18.buttons.length > 0) {
    items.push(obj18);
  }
  const obj30 = { sectionKey: "notifications", buttons: [] };
  const tmp72 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  if (tmp72) {
    const MarkChannelUnreadExperiment = channel(tmp27[58]).MarkChannelUnreadExperiment;
    if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
      if (!hasUnread) {
        if (canMarkUnread) {
          const buttons16 = obj30.buttons;
          const push20 = buttons16.push;
          const obj31 = {
            label: intl18.string(channel(tmp27[23]).t.RpE9k7),
            IconComponent: channel(tmp27[59]).ChatMarkUnreadIcon,
            onPress() {
                      markChannelUnreadDefault(channel.id);
                    }
          };
          intl18 = tmp73(tmp27[23]).intl;
          push20(obj31);
        }
      }
    }
    const buttons17 = obj30.buttons;
    const push21 = buttons17.push;
    const obj32 = {
      label: intl19.string(channel(tmp27[23]).t.e6RscS),
      IconComponent: channel(tmp27[61]).EyeIcon,
      onPress() {
          obj = ReadStateActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
          obj.ackChannel(channel, obj2);
        }
    };
    intl19 = tmp73(tmp27[23]).intl;
    push21(obj32);
  }
  if (!closure_12(channel.type)) {
    const tmp83 = conjureRemixProject(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
    if (tmp83) {
      const buttons18 = obj30.buttons;
      const push24 = buttons18.push;
      const obj33 = {
        label: intl27.string(channel(tmp27[23]).t.h850Ss),
        IconComponent: channel(tmp27[67]).ChannelNotificationIcon,
        disableColor: true,
        onPress() {
              obj = ChannelSettingsActionCreatorsDefault;
              obj.setSection(constants4.NOTIFICATIONS);
              const obj2 = ChannelSettingsActionCreatorsDefault;
              obj2.open(channel.id);
            }
      };
      intl27 = channel(tmp27[23]).intl;
      push24(obj33);
    }
    if (obj30.buttons.length > 0) {
      items.push(obj30);
    }
    const obj34 = { sectionKey: "threads", buttons: [] };
    const tmp87 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
    if (!tmp87) {
      const buttons19 = obj34.buttons;
      const push25 = buttons19.push;
      const obj35 = {
        label: intl28.string(channel(tmp27[23]).t.B2panI),
        IconComponent: channel(tmp27[69]).ThreadIcon,
        onPress() {
              showThreadBrowserModalDefault(channel);
            }
      };
      intl28 = channel(tmp27[23]).intl;
      push25(obj35);
    }
    if (obj34.buttons.length > 0) {
      items.push(obj34);
    }
    const obj36 = { sectionKey: "voice", buttons: [] };
    const tmp92 = guildId(channel.type) && !isInCollapsedCategory;
    if (tmp92) {
      let string5Result;
      let tmp95;
      const buttons20 = obj36.buttons;
      const push26 = buttons20.push;
      const intl29 = channel(tmp27[23]).intl;
      const string5 = intl29.string;
      const t5 = channel(tmp27[23]).t;
      if (isCollapsedVoiceChannel) {
        string5Result = string5(t5.JYF2Oa);
        tmp95 = tmp93;
      } else {
        string5Result = string5(t5.LxzNiu);
        tmp95 = tmp93;
      }
      const obj37 = {
        label: string5Result,
        IconComponent: tmp95(tmp27[24]).UserCircleIcon,
        onPress() {
              obj = ChannelCollapseActionCreatorsDefault;
              obj.update(channel.id);
            }
      };
      push26(obj37);
    }
    if (channel.isGuildVocal()) {
      const buttons21 = obj36.buttons;
      const push27 = buttons21.push;
      const obj38 = { label: null, IconComponent: null, onPress: null };
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl30 = channel(tmp27[23]).intl;
      const string6 = intl30.string;
      const t6 = channel(tmp27[23]).t;
      if (isGuildStageVoiceResult) {
        obj38.label = string6(t6["7vb2cc"]);
        obj38.IconComponent = channel(tmp27[72]).StageIcon;
        obj38.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
        };
        push27(obj38);
        const buttons22 = obj36.buttons;
        const push28 = buttons22.push;
        const obj39 = {
          label: intl31.string(channel(tmp27[23]).t.ZXxLQg),
          IconComponent: channel(tmp27[73]).ChatIcon,
          onPress() {
                  obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = ModalActionCreatorsDefault;
                  const obj3 = { channel };
                  obj2.pushLazy(asyncRequire(10954, dependencyMap.paths), obj3);
                  hideLaunchPadDefault();
                }
        };
        intl31 = tmp98(tmp27[23]).intl;
        push28(obj39);
      } else {
        obj38.label = string6(t6.ZXxLQg);
        obj38.IconComponent = channel(tmp27[73]).ChatIcon;
        obj38.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
          obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(channel.id, true);
          hideLaunchPadDefault();
        };
        push27(obj38);
      }
    }
    const tmp102 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
    if (tmp102) {
      const buttons23 = obj36.buttons;
      const push29 = buttons23.push;
      const obj40 = {
        label: intl32.string(channel(tmp27[23]).t.saZaRb),
        IconComponent: channel(tmp27[52]).XSmallIcon,
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
                    return { value: "IconComponent", done: "IconComponent" };
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
                        const obj4 = { value: tmp3(paths[21])(paths[77], paths.paths), done: false };
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
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } catch (tmp9) {
                    paths = 3;
                    throw tmp9;
                  }
                }
              })();
            }
      };
      intl32 = channel(tmp27[23]).intl;
      push29(obj40);
    }
    const tmp105 = channel.isGuildStageVoice() && isLiveStageChannel && canConnect;
    if (tmp105) {
      const buttons24 = obj36.buttons;
      const push30 = buttons24.push;
      const obj41 = {
        label: intl33.string(channel(tmp27[23]).t["+78Pfm"]),
        IconComponent: channel(tmp27[78]).FlagIcon,
        isDestructive: true,
        onPress() {
              obj = ReportModals;
              const result = obj.showReportModalForStageChannel(channel);
            }
      };
      intl33 = channel(tmp27[23]).intl;
      push30(obj41);
    }
    if (obj36.buttons.length > 0) {
      items.push(obj36);
    }
    if (channel.type === constants5.GUILD_APP) {
      if (null != channel.application_id) {
        const obj42 = { sectionKey: "app-channel", buttons: items4 };
        const obj43 = {
          label: intl39.string(channel(tmp27[23]).t.ZXxLQg),
          IconComponent: channel(tmp27[73]).ChatIcon,
          onPress() {
                  openAppChannelToChatDefault(channel);
                  hideLaunchPadDefault();
                }
        };
        intl39 = channel(tmp27[23]).intl;
        items4 = [obj43];
        const tmp110 = null != appFrameId && null != appUserMuted;
        if (tmp110) {
          const buttons25 = obj42.buttons;
          buttons25.push(isMuted(tmp27[81])(appFrameId, appUserMuted));
        }
        if (null != appFrameId) {
          const buttons26 = obj42.buttons;
          const push31 = buttons26.push;
          const obj44 = {
            label: intl34.string(channel(tmp27[23]).t.VkMnR2),
            IconComponent: channel(tmp27[82]).DoorExitIcon,
            onPress() {
                      closeFrameDefault(appFrameId);
                    }
          };
          intl34 = tmp132(tmp27[23]).intl;
          push31(obj44);
        }
        items.push(obj42);
      }
    }
    if (channel.isSpoilerChannel()) {
      if (isSpoilerAgreed) {
        const obj45 = { sectionKey: "spoiler", buttons: [] };
        const buttons27 = obj45.buttons;
        const push32 = buttons27.push;
        const obj46 = {
          label: intl35.string(channel(tmp27[23]).t.ix2UVZ),
          IconComponent: channel(tmp27[84]).EyeSlashIcon,
          onPress() {
                  obj = GuildActionCreatorsDefault;
                  obj.clearSpoilerAgree(channel.id);
                }
        };
        intl35 = channel(tmp27[23]).intl;
        push32(obj46);
        items.push(obj45);
      }
    }
    const obj47 = { sectionKey: "admin-actions", buttons: [] };
    if (canManageChannel) {
      let string7Result;
      let tmp120;
      const buttons28 = obj47.buttons;
      const push33 = buttons28.push;
      const isCategoryResult = channel.isCategory();
      const intl36 = channel(tmp27[23]).intl;
      const string7 = intl36.string;
      const t7 = channel(tmp27[23]).t;
      if (isCategoryResult) {
        string7Result = string7(t7.zdPFs9);
        tmp120 = tmp118;
      } else {
        string7Result = string7(t7["3gUsJb"]);
        tmp120 = tmp118;
      }
      const obj48 = {
        label: string7Result,
        IconComponent: tmp120(tmp27[86]).SettingsIcon,
        onPress() {
              obj = ChannelSettingsActionCreatorsDefault;
              obj.setSection(constants4.OVERVIEW);
              const obj2 = ChannelSettingsActionCreatorsDefault;
              obj2.open(channel.id);
            }
      };
      push33(obj48);
      const isForumLikeChannelResult1 = tmp51(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
      if (isForumLikeChannelResult1) {
        let string8Result;
        const buttons29 = obj47.buttons;
        const push34 = buttons29.push;
        const isCategoryResult1 = channel.isCategory();
        const intl37 = tmp120(tmp27[23]).intl;
        const string8 = intl37.string;
        const t8 = tmp120(tmp27[23]).t;
        if (isCategoryResult1) {
          string8Result = string8(t8["fUYU+j"]);
        } else {
          string8Result = string8(t8.dEaPc4);
        }
        const obj49 = {
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
          CopyIcon = tmp120(tmp27[38]).PlusLargeIcon;
        } else {
          CopyIcon = tmp120(tmp27[87]).CopyIcon;
        }
        push34(obj49);
      }
    }
    if (developerMode) {
      const buttons30 = obj47.buttons;
      const push35 = buttons30.push;
      const obj50 = {
        label: intl38.string(channel(tmp27[23]).t.gFHI3k),
        IconComponent: channel(tmp27[89]).IdIcon,
        onPress() {
              obj = ClipboardUtils;
              obj.copy(channel.id);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            }
      };
      intl38 = channel(tmp27[23]).intl;
      push35(obj50);
    }
    if (obj47.buttons.length > 0) {
      items.push(obj47);
    }
    if (obj4.buttons.length > 0) {
      items.push(obj4);
    }
    if (obj5.buttons.length > 0) {
      items.push(obj5);
    }
    return items;
  }
  const intl20 = channel(tmp27[23]).intl;
  const string4 = intl20.string;
  const t4 = channel(tmp27[23]).t;
  if (isMuted) {
    let stringResult1;
    const string4Result = string4(t4.OYefme);
    if (channel.isCategory()) {
      const intl26 = tmp76(tmp27[23]).intl;
      stringResult1 = intl26.string(tmp76(tmp27[23]).t.olaBeG);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl24 = tmp76(tmp27[23]).intl;
            stringResult1 = intl24.string(tmp76(tmp27[23]).t["Cq/TzF"]);
          }
        }
      }
      const intl25 = tmp76(tmp27[23]).intl;
      stringResult1 = intl25.string(tmp76(tmp27[23]).t["s5/5fm"]);
    }
    const buttons31 = obj30.buttons;
    const push23 = buttons31.push;
    const obj51 = {
      label: stringResult1,
      IconComponent: channel(tmp27[64]).BellIcon,
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
    push23(obj51);
  } else {
    let stringResult2;
    const string4Result1 = string4(t4.tbeRRJ);
    if (channel.isCategory()) {
      const intl23 = tmp76(tmp27[23]).intl;
      stringResult2 = intl23.string(tmp76(tmp27[23]).t.pNMCg2);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult2 = string4Result1;
          if (channel.isThread()) {
            const intl21 = tmp76(tmp27[23]).intl;
            stringResult2 = intl21.string(tmp76(tmp27[23]).t.bUUd8q);
          }
        }
      }
      const intl22 = tmp76(tmp27[23]).intl;
      stringResult2 = intl22.string(tmp76(tmp27[23]).t.LO3kaK);
    }
    const buttons32 = obj30.buttons;
    const push22 = buttons32.push;
    const obj52 = {
      label: stringResult2,
      IconComponent: channel(tmp27[63]).BellSlashIcon,
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
    push22(obj52);
  }
}
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = ChannelRecord);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = Constants);
let closure_32 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheetConnected(channel) {
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
  const cResult = obj.c(74);
  channel = channel.channel;
  const onClose = channel.onClose;
  const tmp4 = onClose(7313);
  const analyticsLocations = tmp4(onClose(7338).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmpResult = tmp(10789);
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
  const useOptInEnabledForGuild = tmp(6872).useOptInEnabledForGuild;
  tmp(6872);
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
  class F {
    constructor() {
      let isFavorite;
      let tmp;
      obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(closure_2, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
      tmp = closure_2;
      isFavorite = obj2.isFavorite;
      null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
      if (tmp == null) {
        tmp = __initData;
      }
      return obj;
    }
  }
  cResult[9] = channel.id;
  cResult[10] = channel.parent_id;
  cResult[11] = tmp5;
  cResult[12] = F;
}) : (function ChannelLongPressActionSheetConnected(channel) {
  let ActionSheet;
  let ActionSheetIconHeader;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let currentUser;
  let formatToPlainStringResult;
  let isOptedIn;
  let isParentOptedIn;
  let isPinned;
  let isStaffResult;
  let obj10;
  let obj9;
  let remixProject;
  let subtitle;
  let title;
  let tmp24;
  let tmp25;
  let tmp56;
  let tmp59;
  let tmp5Result30;
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  let isConjureChannelCandidate;
  let frameId;
  let length;
  let tmp = onClose;
  const tmp3 = onClose(guildId[94]);
  const analyticsLocations = tmp3(onClose(guildId[95]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  obj = channel(guildId[96]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  const obj2 = channel(guildId[97]);
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [PermissionStore];
  const obj3 = channel(guildId[97]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
    return obj;
  });
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const useOptInEnabledForGuild = channel(guildId[99]).useOptInEnabledForGuild;
  channel(guildId[99]);
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(guildId);
  const items2 = [UserGuildSettingsStore];
  const tmp5Result = channel(guildId[97]);
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    let isFavorite;
    let tmp;
    obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
    tmp = guildId;
    isFavorite = obj2.isFavorite;
    null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData;
    }
    return obj;
  });
  ({ isOptedIn, isParentOptedIn, isPinned } = stateFromStoresObject1);
  const items3 = [UserGuildSettingsStore];
  const tmp5Result16 = channel(guildId[97]);
  const stateFromStores1 = tmp5Result16.useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const items4 = [ReadStateStore];
  const tmp5Result17 = channel(guildId[97]);
  const stateFromStores2 = tmp5Result17.useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result18 = channel(guildId[60]);
  const canMarkChannelUnread = tmp5Result18.useCanMarkChannelUnread(channel);
  const items5 = [ActiveThreadsStore];
  const tmp5Result19 = channel(guildId[97]);
  const stateFromStores3 = tmp5Result19.useStateFromStores(items5, () => {
    const hasThreadsForChannelResult = null != guildId && ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    return hasThreadsForChannelResult;
  });
  const items6 = [CategoryCollapseStore];
  const tmp5Result20 = channel(guildId[97]);
  const stateFromStores4 = tmp5Result20.useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const items7 = [CollapsedVoiceChannelStore];
  const tmp5Result21 = channel(guildId[97]);
  const stateFromStores5 = tmp5Result21.useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const items8 = [StageInstanceStore];
  const tmp5Result22 = channel(guildId[97]);
  const stateFromStores6 = tmp5Result22.useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmpResult = tmp(guildId[28]);
  const tmpResultResult = tmpResult(channel, !channel.isThread());
  const tmp22 = tmp(guildId[100])(channel);
  const DeveloperMode = tmp5(tmp2[101]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp11 = UserGuildSettingsStore;
  if (null != stateFromStores) {
    tmp(guildId[102]);
    tmp25 = <tmpResult3 guild={stateFromStores} size={tmp5(tmp2[102]).GuildIconSizes.LARGE} />;
    tmp24 = jsx;
  } else {
    tmp24 = jsx;
    const Avatar = tmp5(tmp2[103]).Avatar;
    tmp25 = <Avatar size={tmp5(tmp2[103]).AvatarSizes.LARGE} channel={channel} />;
  }
  const items9 = [UserStore];
  const tmp5Result23 = channel(guildId[97]);
  const stateFromStores7 = tmp5Result23.useStateFromStores(items9, () => currentUser.getCurrentUser());
  const items10 = [tmp11];
  const tmp28 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const tmp5Result24 = channel(guildId[97]);
  const stateFromStores8 = tmp5Result24.useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result25 = channel(guildId[104]);
  const inappropriateConversationsTiers = tmp5Result25.useInappropriateConversationsTiers(channel);
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
  const items11 = [length];
  const tmp5Result26 = channel(guildId[97]);
  const stateFromStores9 = tmp5Result26.useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp38 = tmp(guildId[105])(channel);
  const tmp39 = tmp(guildId[106])(channel);
  const tmp40 = tmp(guildId[107])(channel);
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
  const tmp5Result27 = channel(guildId[108]);
  isConjureChannelCandidate = tmp5Result27.useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp45 = null;
  const tmpResult4 = tmp(guildId[109]);
  if (isConjureChannelCandidate) {
    tmp45 = channel;
  }
  const tmpResult2Result = tmpResult4(tmp45);
  const tmp47 = tmp(guildId[110])(channel);
  frameId = tmp47.frameId;
  const userMuted = tmp47.userMuted;
  const useStateFromStores = tmp5(tmp2[97]).useStateFromStores;
  const items12 = [];
  channel(guildId[97]);
  items12[0] = channel(guildId[111]).ApexExperimentStore;
  const items13 = [isConjureChannelCandidate, frameId];
  const stateFromStores10 = useStateFromStores(items12, () => {
    let tmp = isConjureChannelCandidate && null != frameId;
    if (tmp) {
      obj = EmbeddedAppShimExperiment;
      tmp = 2 === obj.getEmbeddedAppShimVersion("ChannelLongPressActionSheet");
    }
    return tmp;
  }, items13);
  const tmp50 = tmp(guildId[113])(channel, isConjureChannelCandidate);
  let tmp52 = null != tmpResult2Result;
  const useIsConjureMobileEnabled = tmp5(tmp2[114]).useIsConjureMobileEnabled;
  channel(guildId[114]);
  if (!tmp52) {
    tmp52 = null != tmp50.remixProject;
  }
  const isConjureMobileEnabled = useIsConjureMobileEnabled(tmp52, "ChannelLongPressActionSheet");
  const obj6 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, hasUnread: stateFromStores2, canMarkUnread: canMarkChannelUnread, isOwner: tmp28, hasThreads: stateFromStores3, isNsfwGated: tmp22, isInCollapsedCategory: stateFromStores4, isCollapsedVoiceChannel: stateFromStores5, isLiveStageChannel: stateFromStores6, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, isMessagesFavorited: stateFromStores8, canMarkAsTier1InappropriateConversation: tmp32, canMarkAsTier2InappropriateConversation: tmp35, isSpoilerAgreed: stateFromStores9, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected, isStaff: true === isStaffResult, favorites: tmp38, favoritesCategoryAddAction: tmp39, favoritesMoveAction: tmp42, conjureProjectId: tmp56, appFrameId: frameId, conjureRemixProject: remixProject, appUserMuted: tmp59 };
  isStaffResult = undefined;
  const tmp54 = getActionSheetButtons;
  if (stateFromStores7 != null) {
    isStaffResult = stateFromStores7.isStaff();
  }
  tmp56 = null;
  if (isConjureMobileEnabled) {
    let id;
    if (tmpResult2Result != null) {
      id = tmpResult2Result.id;
    }
    if (id == null) {
      id = null;
    }
    tmp56 = id;
  }
  remixProject = null;
  if (isConjureMobileEnabled) {
    remixProject = tmp50.remixProject;
  }
  tmp59 = null;
  if (stateFromStores10) {
    tmp59 = userMuted;
  }
  const tmp54Result = tmp54(obj6);
  length = tmp54Result;
  if (channel.isGroupDM()) {
    const intl = tmp5(tmp2[23]).intl;
    const obj7 = { members: channel.recipients.length + 1 };
    formatToPlainStringResult = intl.formatToPlainString(channel(guildId[23]).t.ABMKx3, obj7);
  }
  const items14 = [tmp54Result.length, setting, onClose];
  const effect = isConjureChannelCandidate.useEffect(() => {
    const tmp = 0 !== length.length || setting;
    if (!tmp) {
      onClose();
    }
  }, items14);
  const obj8 = { value: analyticsLocations, children: tmp24(ActionSheet, obj9) };
  const AnalyticsLocationProvider = tmp5(tmp2[94]).AnalyticsLocationProvider;
  obj9 = {
    showGradient: true,
    startExpanded: tmp5Result30.isMetaQuest(),
    header: tmp24(ActionSheetIconHeader, obj10),
    children: tmp54Result.map((buttons) => {
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
          icon: closure_1_33(channel(guildId[118]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
          trailing,
          onPress() {
            if (onPress != null) {
              tmp();
            }
            onClose();
          }
        };
        const ActionSheetRow = channel(guildId[118]).ActionSheetRow;
        return closure_1_33(ActionSheetRow, obj, index);
      })}</Group>;
    })
  };
  ActionSheet = tmp5(tmp2[115]).ActionSheet;
  const header = tmp50.header;
  let icon;
  tmp5Result30 = channel(guildId[116]);
  ActionSheetIconHeader = tmp5(tmp2[117]).ActionSheetIconHeader;
  if (header != null) {
    icon = header.icon;
  }
  if (icon == null) {
    icon = tmp25;
  }
  const header2 = tmp50.header;
  obj10 = { icon, title, subtitle };
  title = undefined;
  if (header2 != null) {
    title = header2.title;
  }
  if (title == null) {
    title = tmpResultResult;
  }
  const header3 = tmp50.header;
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
  obj = channelId(stateFromStores[93]);
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
  const tmpResult = tmp(tmp2[97]);
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
      tmp13 = <closure_37 channel={stateFromStores} onClose={onClose} />;
    }
    cResult[7] = stateFromStores;
    cResult[8] = onClose;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  const fn2 = function p() {
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
    tmp3 = <closure_37 channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default tmp4;
