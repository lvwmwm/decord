// Module ID: 11038
// Function ID: 11039
// Name: MessagesHandlers
// Dependencies: [109, 5, 32, 5063, 7014, 7018, 6585, 9540, 6946, 7521, 7116, 7013, 10887, 4471, 7072, 502, 2045, 10973, 2108, 2067, 4817, 8814, 5056, 4469, 4876, 2099, 4655, 5591, 7257, 1372, 7375, 1074, 7155, 1374, 7868, 1114, 21, 6603, 11039, 11041, 1981, 11042, 11043, 11078, 11081, 7423, 5043, 6615, 1115, 7305, 9569, 10782, 4800, 10787, 6943, 11108, 11109, 4813, 7154, 11110, 11111, 10822, 10824, 9865, 1364, 7480, 6687, 9725, 7478, 11144, 9206, 7624, 11, 11146, 11147, 7350, 7335, 7333, 7338, 10886, 5067, 11152, 7413, 4801, 4802, 11175, 1101, 11162, 11246, 5746, 5016, 6928, 7410, 11247, 11248, 1385, 11253, 11261, 11262, 11263, 11264, 11265, 8787, 4525, 11266, 9408, 11010, 4818, 8976, 7178, 1610, 7112, 10678, 5761, 10683, 7141, 4821, 10848, 10849, 7826, 11267, 10262, 6760, 9224, 11270, 7316, 11284, 8506, 1241, 5046, 6747, 7841, 5723, 6633, 8614, 9230, 5933, 10977, 5039, 10982, 11292, 6842, 6800, 11293, 10124, 11294, 8230, 1249, 10367, 10368, 4528, 4832, 8173, 11296, 10823, 11297, 6876, 5060, 1979, 5203, 7573, 11299, 11301, 11305, 7444, 11306, 7846, 7460, 7458, 11307, 11311, 11339, 11340, 4847, 6610, 4527, 11351, 11352, 11353, 4990, 6759, 11354, 11355, 7020, 7859, 7861, 11357, 11214, 7713, 7707, 11390, 8699, 11392, 8047, 7409, 10380, 11112, 11410, 11411, 11412, 11176, 11413, 11416, 11419, 11420, 11426, 11429, 2]

// Module 11038 (MessagesHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1101 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import LinkingDefault from "Linking" /* 4525 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import AgeGateUtils from "AgeGateUtils" /* 5046 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5746 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5933 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 6633 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import getInviteURLDefault from "getInviteURL" /* 7178 */;
import resolveSelectedConversationDefault from "resolveSelectedConversation" /* 7350 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 7409 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7410 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7413 */;
import isCrosspostDefault from "isCrosspost" /* 7480 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import trackApplicationOpenDefault from "trackApplicationOpen" /* 8787 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 9865 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10124 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10380 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 10782 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 10787 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10822 */;
import _modDef10823 from "module_10823" /* 10823 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 10824 */;
import SummaryActionCreatorsDefault from "SummaryActionCreators" /* 10886 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11010 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11039 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11042 */;
import contentHandlers2 from "contentHandlers" /* 11081 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 11110 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11112 */;
import trackRepliedMessageClickedDefault from "trackRepliedMessageClicked" /* 11146 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11162 */;
import replyToMessageDefault from "replyToMessage" /* 11175 */;
import PollsActionCreatorsDefault from "PollsActionCreators" /* 11214 */;
import canEditMessageDefault from "canEditMessage" /* 11246 */;
import UploadActionCreatorsDefault from "UploadActionCreators" /* 11247 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11270 */;
import PremiumGiftingIntentUtils from "PremiumGiftingIntentUtils" /* 11293 */;
import ForumOriginalPoster from "ForumOriginalPoster" /* 11351 */;
import MediaChannelActionCreatorsAll from "MediaChannelActionCreators" /* 11354 */;
import jumpToReferencedMessageDefault from "jumpToReferencedMessage" /* 11410 */;
import handleForwardBreadcrumbDefault from "handleForwardBreadcrumb" /* 11411 */;
import openSoundmojiActionSheetDefault from "openSoundmojiActionSheet" /* 11413 */;
import ContentInventoryActionCreators from "ContentInventoryActionCreators" /* 11416 */;
import onTapCheckpointCard from "onTapCheckpointCard" /* 11419 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 11420 */;
import previewSharedClientTheme from "previewSharedClientTheme" /* 11426 */;
import sharedClientThemeViewed from "sharedClientThemeViewed" /* 11429 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7014 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6585 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 7521 */;
import QuestStore from "QuestStore" /* 7116 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7013 */;
import SummaryStore from "SummaryStore" /* 10887 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GiftCodeStore from "GiftCodeStore" /* 10973 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import InviteStore from "InviteStore" /* 4817 */;
import LocalActivityStore from "LocalActivityStore" /* 8814 */;
import MessageStore from "MessageStore" /* 5056 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import UploadStore from "UploadStore" /* 7257 */;
import UserStore from "UserStore" /* 1372 */;

const InviteCodeUtils = trackInviteEmbedActioned(4818);
const CodedLink = trackInviteEmbedActioned(4821);
const InviteTypeUtils = trackInviteEmbedActioned(7154);
const InstantInviteActionCreators = trackInviteEmbedActioned(7826);
const SocialLayerStorefrontNativeActionCreators = trackInviteEmbedActioned(10262);
const VoiceChannelListInviteExperiment = trackInviteEmbedActioned(10848);
const VoiceChannelListInviteEmbed = trackInviteEmbedActioned(10849);
const build_overrides_BuildOverrideUtils = trackInviteEmbedActioned(11267);
require = fn;
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
let closure_15 = fn(6946).isGuildScheduledEventActive;
const SeparatorAction = fn(7375).SeparatorAction;
const Constants = fn(1074);
({ ActivityActionTypes: closure_38, ActivityFlags: closure_39, ActivityGamePlatforms: closure_40, ActivityTypes: closure_41, AnalyticEvents: closure_42, AnalyticsGameOpenTypes: closure_43, AnalyticsLocations: closure_44, AnalyticsObjects: closure_45, AnalyticsObjectTypes: closure_46, AnalyticsPages: closure_47, AnalyticsSections: closure_48, LinkingTypes: closure_49, ME: closure_50, MessageFlags: closure_51, MessageStates: closure_52, MessageTypes: closure_53, Permissions: closure_54, Routes: closure_55, UpsellTypes: closure_56, UserSettingsSections: closure_57, WebBrowserType: closure_58 } = Constants);
const InviteTypes = fn(7155).InviteTypes;
const PremiumConstants = fn(1374);
({ PremiumTypes: closure_60, PremiumUpsellTypes: closure_61 } = PremiumConstants);
let closure_62 = fn(7868).SafetySystemNotificationCtaType;
let closure_63 = fn(1114).OpenThreadAnalyticsLocations;
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.PREMIUM_GIFT_INTENT_CARD];
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/MessagesHandlers.tsx");
class MessagesHandlers {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.getMessageData = function getMessageData(messageId) {
      if (null == messageId) {
        return null;
      } else {
        const message = obj.params.getMessage(messageId);
        if (null == message) {
          return null;
        } else {
          channel = ChannelStore.getChannel(message.channel_id);
          let tmp5 = null;
          if (null != channel) {
            obj = { message, messageChannel: channel };
            tmp5 = obj;
          }
          return tmp5;
        }
      }
    };
    obj.isModalOrActionsheetObstructing = function isModalOrActionsheetObstructing() {
      obj = isAlertOrActionSheetOpen;
      return obj.isAlertOrActionSheetOpen(obj.params.selectedChannelId);
    };
    obj.handleTapImage = function handleTapImage(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const messageData = nativeEvent.getMessageData(nativeEvent.id);
      if (null != messageData) {
        obj(dependencyMap[40])(dependencyMap[39], dependencyMap.paths).then((handleMessagesTapImage) => {
          obj = { tapImageData: nativeEvent, allowWithinModal: false, message: messageData.message, messageChannel: messageData.messageChannel, selectedChannelId: obj.params.selectedChannelId };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        });
        const promise = obj(dependencyMap[40])(dependencyMap[39], dependencyMap.paths);
      }
    };
    obj.handleTapChannel = function handleTapChannel(nativeEvent) {
      if (!data.isModalOrActionsheetObstructing()) {
        obj = obj(dependencyMap[41]);
        data = obj.getNativeSyntheticEventData(nativeEvent).data;
        obj(dependencyMap[40])(dependencyMap[42], dependencyMap.paths).then((handleMessagesTapChannel) => {
          const result = handleMessagesTapChannel.handleMessagesTapChannel({
            data,
            dismissKeyboard() {
              const current = params.getParams().chatInputRef.current;
              let dismissKeyboardResult;
              if (current != null) {
                dismissKeyboardResult = current.dismissKeyboard();
              }
              return dismissKeyboardResult;
            }
          });
        });
        const promise = obj(dependencyMap[40])(dependencyMap[42], dependencyMap.paths);
      }
    };
    obj.handleLongPressChannel = function handleLongPressChannel(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const data = obj.getNativeSyntheticEventData(nativeEvent).data;
        asyncRequireImpl(11078, dependencyMap.paths).then((handleMessagesLongPressChannel) => {
          const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel({ data });
        });
        const promise = asyncRequireImpl(11078, dependencyMap.paths);
      }
    };
    obj.handleTapAttachmentLink = function handleTapAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapAttachmentLink(arg0);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleLongPressAttachmentLink = function handleLongPressAttachmentLink(arg0) {
      if (!obj.isModalOrActionsheetObstructing()) {
        const result = contentHandlers2.contentHandlers.onLongPressAttachmentLink(arg0);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapCall = function handleTapCall(nativeEvent) {
      const data = channel(dependencyMap[41]).getNativeSyntheticEventData(nativeEvent).data;
      const channelId = data.channelId;
      channel = channel.getChannel(channelId);
      obj = channel(dependencyMap[41]);
      if (tmp3) {
        if (tmpResult.checkIsCallActive(channelId, data.messageId)) {
          tmp(tmp2[46]).handleJoinCall(channel);
          const tmpResult3 = tmp(tmp2[46]);
        } else {
          const obj2 = { key: "CallTap", options: null, hasIcons: true };
          const obj3 = { label: null, IconComponent: null, onPress: null };
          const intl = tmp(tmp2[48]).intl;
          obj3.label = intl.string(tmp(tmp2[48]).t.focH1t);
          obj3.IconComponent = tmp(tmp2[49]).PhoneCallIcon;
          obj3.onPress = function onPress() {
            obj = obj(dependencyMap[46]);
            obj.handleStartCall(channel);
          };
          items = [obj3, ];
          const obj4 = { label: null, IconComponent: null, onPress: null };
          const intl2 = tmp(tmp2[48]).intl;
          obj4.label = intl2.string(tmp(tmp2[48]).t.oCqlGG);
          obj4.IconComponent = tmp(tmp2[50]).VideoIcon;
          obj4.onPress = function onPress() {
            obj = obj(dependencyMap[46]);
            obj.handleStartCall(channel, true);
          };
          items[1] = obj4;
          obj2.options = items;
          const result = tmp(tmp2[47]).showSimpleActionSheet(obj2);
          const tmpResult4 = tmp(tmp2[47]);
        }
        tmpResult = tmp(tmp2[45]);
      }
    };
    obj.handleTapMention = function handleTapMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapMention(nativeEvent);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapCommandMention = function handleTapCommandMention(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const commandName = nativeSyntheticEventData.commandName;
      const commandId = nativeSyntheticEventData.commandId;
      const chatInputRef = obj.getParams().chatInputRef;
      const obj3 = { channelId: nativeSyntheticEventData.channelId, currentText: null, commandId: null, commandName: null, onOpenCustomKeyboard: null, onSetCommand: null };
      let current = chatInputRef.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      obj3.currentText = str;
      obj3.commandId = commandId;
      obj3.commandName = commandName;
      obj3.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
        const current = chatInputRef.current;
        let openCustomKeyboardResult;
        if (current != null) {
          openCustomKeyboardResult = current.openCustomKeyboard(arg0);
        }
        return openCustomKeyboardResult;
      };
      obj3.onSetCommand = function onSetCommand() {
        obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        navigateToLastChannelDefault();
        const current = chatInputRef.current;
        if (current != null) {
          current.openSystemKeyboard();
        }
        const current2 = chatInputRef.current;
        if (current2 != null) {
          const applicationCommandManager = current2.getApplicationCommandManager();
          if (applicationCommandManager != null) {
            applicationCommandManager.setPartialCommand(commandId, commandName, obj(dependencyMap[54]).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      const result = MarkupReactCommandRule.handleTapCommandMention(obj3);
    };
    obj.handleLongPressCommandMention = function handleLongPressCommandMention(nativeEvent) {
      ({ commandName, commandId } = nativeEvent.nativeEvent);
      obj = obj(dependencyMap[51]);
      const result = obj.handleLongPressCommandMention(commandName, commandId);
    };
    obj.handleTapGameMention = function handleTapGameMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const gameId = obj.getNativeSyntheticEventData(nativeEvent);
        asyncRequireImpl(11108, dependencyMap.paths).then((handleMessagesTapGameMention) => {
          const result = handleMessagesTapGameMention.handleMessagesTapGameMention({ gameId: gameId.gameId });
        });
        const promise = asyncRequireImpl(11108, dependencyMap.paths);
      }
    };
    obj.handleTapGuildEventLink = function handleTapGuildEventLink(node) {
      node = node.node;
      if (null != node) {
        obj = obj(dependencyMap[56]);
        if (obj.isLinkTrusted(node)) {
          const payload = require("parseURL")(tmp).payload;
          if (payload.type !== constants8.INVITE) {
            return false;
          } else if (null == payload.inviteCode) {
            return false;
          } else {
            invite = invite.getInvite(payload.inviteCode);
            let tmp8 = null == invite;
            if (!tmp8) {
              tmp8 = !tmp2(tmp3[58]).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(tmp3[58]);
            }
            let flag = !tmp8;
            if (!tmp8) {
              tmp4(tmp3[59])(invite);
              flag = true;
            }
            return flag;
          }
          tmp4 = importDefault;
        }
        tmp2 = obj;
      }
      return false;
    };
    obj.handleTapLink = function handleTapLink(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const messageData = nativeEvent.getMessageData(nativeEvent.data.messageId);
      obj(dependencyMap[40])(dependencyMap[60], dependencyMap.paths).then((handleMessagesTapLink) => {
        obj = { allowWithinModal: false, chatInputRef: obj.params.chatInputRef, handleTransitionToThread: obj.handleTransitionToThread, message: null, messageChannel: null, selectedChannelId: null, tapLinkData: null };
        let message;
        if (closure_1 != null) {
          message = tmp2.message;
        }
        obj.message = message;
        let messageChannel;
        if (closure_1 != null) {
          messageChannel = tmp2.messageChannel;
        }
        obj.messageChannel = messageChannel;
        obj.selectedChannelId = obj.params.selectedChannelId;
        obj.tapLinkData = nativeEvent;
        const result = handleMessagesTapLink.handleMessagesTapLink(obj);
      });
    };
    obj.handleLongPressLink = function handleLongPressLink(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onLongPressLink(nativeEvent);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapReaction = function handleTapReaction(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const messageData = obj.getMessageData(messageId);
        if (null != messageData) {
          const messageChannel = messageData.messageChannel;
          const tmpResult = messages_MessagesUtils;
          let tmp6 = null;
          if (null != reaction) {
            const obj3 = {};
            const merged = Object.assign(reaction);
            obj3.emoji = reaction.emoji;
            tmp6 = obj3;
          }
          const result = tmpResult.handleAddOrRemoveReaction(messageId, messageChannel, tmp6, isBurst, nativeEvent.nativeEvent.location);
        }
      }
    };
    obj.handleTapReactionOverflow = function handleTapReactionOverflow(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const obj2 = { messageId, channelId, location: null };
        const obj3 = { object: constants2.CHANNEL, objectType: constants3.REACTION_OVERFLOW };
        obj2.location = obj3;
        reactions_ReactionUtils.handleViewReactions(obj2);
        const tmpResult = reactions_ReactionUtils;
      }
    };
    obj.handleLongPressReaction = function handleLongPressReaction(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const reaction = nativeSyntheticEventData.reaction;
      ({ messageId, channelId, isBurst } = nativeSyntheticEventData);
      if (!obj.isModalOrActionsheetObstructing()) {
        const obj2 = { messageId, channelId, emoji: null, isSelectedBurst: null, location: null };
        let emoji = null;
        if (null != reaction) {
          emoji = reaction.emoji;
        }
        obj2.emoji = emoji;
        obj2.isSelectedBurst = isBurst;
        const obj3 = { object: constants2.CHANNEL, objectType: constants3.REACTION };
        obj2.location = obj3;
        reactions_ReactionUtils.handleViewReactions(obj2);
        const tmpResult = reactions_ReactionUtils;
      }
    };
    obj.handleOpenSticker = function handleOpenSticker(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const obj2 = { renderableSticker: nativeSyntheticEventData.sticker, channel: messageData.messageChannel, chatInputRef: obj.params.chatInputRef };
        const result = showStickerDetailActionSheet.showStickerDetailActionSheet(obj2);
        const tmpResult = showStickerDetailActionSheet;
      }
    };
    obj.handleTapAvatar = function handleTapAvatar(arg0) {
      items = [AnalyticsLocationDefault.AVATAR];
      obj.handleOpenProfile(arg0, items);
    };
    obj.handleTapUsername = function handleTapUsername(nativeEvent) {
      obj = PlatformUtils;
      if (obj.isIOS()) {
        items = [AnalyticsLocationDefault.USERNAME];
        obj.handleOpenProfile(nativeEvent, items);
      } else {
        const nativeSyntheticEventData = tmp(11042).getNativeSyntheticEventData(nativeEvent);
        const userId = nativeSyntheticEventData.userId;
        const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (isCrosspostDefault(message)) {
            if (null != message.messageReference.guild_id) {
              const items1 = [tmp13(6603).USERNAME];
              obj3.handleOpenProfile(nativeEvent, items1);
            }
          }
          if (null != userId) {
            const user = UserStore.getUser(userId);
            const messageChannel = messageData.messageChannel;
            const isPrivateResult = messageChannel.isPrivate();
            const canResult = PermissionStore.can(constants9.SEND_MESSAGES, messageChannel);
            let tmp7 = undefined === user;
            const isReadOnlyThread = tmp(6687).computeIsReadOnlyThread(messageChannel);
            if (!tmp7) {
              let tmp6 = !isPrivateResult;
              if (!isPrivateResult) {
                tmp6 = !canResult;
              }
              tmp7 = tmp6;
            }
            if (!tmp7) {
              tmp7 = isReadOnlyThread;
            }
            if (!tmp7) {
              const current = obj3.getParams().chatInputRef.current;
              if (current != null) {
                current.insertText(tmp(9725).getMentionTextWithUser(messageChannel, user), null, true);
                const tmpResult4 = tmp(9725);
              }
            }
            const tmpResult3 = tmp(6687);
          }
          tmp13 = importDefault;
        }
        const tmpResult = tmp(11042);
      }
    };
    obj.handleLongPressUsername = function handleLongPressUsername(arg0) {
      items = [AnalyticsLocationDefault.USERNAME];
      obj.handleOpenProfile(arg0, items);
    };
    obj.handleOpenProfile = function handleOpenProfile(nativeEvent, sourceAnalyticsLocations) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, userId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        const message = messageData.message;
        let user;
        if (null != userId) {
          user = UserStore.getUser(userId);
        }
        let tmp7 = user;
        if (null != messageId) {
          if (tmpResult.isPublicSystemMessage(message)) {
            ActionSheetActionCreatorsDefault.openLazy(tmp(1981)(11144, tmp2.paths), "PublicGuildAnnouncementProfile");
          } else {
            let user1 = user;
            if (null == user) {
              user1 = UserStore.getUser(message.author.id);
            }
            if (isCrosspostDefault(message)) {
              const guild_id = message.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal2 = HermesInternal;
                const tmp10Result = tmp10(4800);
                const obj2 = { guildId: guild_id };
                tmp10Result.openLazy(tmp(1981)(9206, tmp2.paths), "GuildProfileActionSheet:" + guild_id, obj2);
              }
            }
            tmp7 = user1;
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              tmp7 = user1;
              if (null != message.messageReference) {
                const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
                tmp7 = user1;
                if (null != messageByReference) {
                  tmp7 = user1;
                  if (null != messageByReference.message) {
                    tmp7 = user1;
                    if (tmp10(7480)(messageByReference.message)) {
                      tmp7 = user1;
                      if (null != messageByReference.message.messageReference) {
                        tmp7 = user1;
                        if (null != messageByReference.message.messageReference.guild_id) {
                          const guild_id2 = messageByReference.message.messageReference.guild_id;
                          const _HermesInternal = HermesInternal;
                          const tmp10Result2 = tmp10(4800);
                          const obj3 = { guildId: guild_id2 };
                          tmp10Result2.openLazy(tmp(1981)(9206, tmp2.paths), "GuildProfileActionSheet:" + guild_id2, obj3);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmpResult = tmp(7478);
        }
        if (null != tmp7) {
          const obj4 = { userId: tmp7.id, channelId: messageData.messageChannel.id, messageId, sourceAnalyticsLocations };
          showUserProfileActionSheetDefault(obj4);
        }
      }
    };
    obj.handleTapThreadEmbed = function handleTapThreadEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        const messageChannel = messageData.messageChannel;
        const guildId = messageChannel.getGuildId();
        if (tmp4) {
          const current = obj2.getParams().chatInputRef.current;
          if (current != null) {
            current.blur();
          }
          const result = obj2.handleTransitionToThread(guildId, SnowflakeUtilsDefault.castMessageIdAsChannelId(messageId), constants12.EMBED);
        }
        tmp4 = null != messageId && null != guildId;
      }
    };
    obj.handleTapReply = function handleTapReply(nativeEvent) {
      const messageData = obj.getMessageData(nativeEvent.nativeEvent.originId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = closure_2_50;
        }
        const messageReference = message.messageReference;
        let message_id;
        if (messageReference != null) {
          message_id = messageReference.message_id;
        }
        if (null != message_id) {
          const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
          trackRepliedMessageClickedDefault(message, messageByReference, messageChannel);
          const result = obj.handleTransitionToMessage(guildId, messageChannel.id, message_id);
        }
      }
    };
    obj.handleTapSummary = function handleTapSummary(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      if (null != obj.getMessageData(nativeSyntheticEventData.messageId)) {
        const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
        if (null != findSummaryResult) {
          const obj3 = { summary: findSummaryResult };
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11147, dependencyMap.paths), "SummaryActionSheet", obj3);
        }
      }
    };
    obj.handleTapConversationHeader = function handleTapConversationHeader(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, conversationId } = nativeSyntheticEventData);
      if (null != obj.getMessageData(nativeSyntheticEventData.messageId)) {
        const tmp12 = resolveSelectedConversationDefault(ConversationsStore, ConversationPreviewStore, channelId, conversationId);
        if (null != tmp12) {
          const ConversationsAnalytics = tmp(7335).ConversationsAnalytics;
          const obj2 = { channelId, conversationId, isFocusMode: false };
          const result = ConversationsAnalytics.trackTopicsUnitClicked(obj2);
          const conversationMessages = tmp(7333).fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true });
          const tmpResult = tmp(7333);
          const obj3 = { channelId, guildId: tmp12.guildId, focusSelectedConversation: true };
          const result1 = tmp(7338).openConversationNavigator(obj3);
          const tmpResult2 = tmp(7338);
        }
      }
    };
    obj.handleTapSummaryJump = function handleTapSummaryJump(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, summaryId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        let guildId = messageChannel.getGuildId();
        if (guildId == null) {
          guildId = closure_2_50;
        }
        const result = obj.handleTransitionToMessage(guildId, messageChannel.id, message.id);
        SummaryActionCreatorsDefault.setSelectedSummary(channelId, summaryId);
      }
    };
    obj.handleLongPressMessage = function handleLongPressMessage(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (!obj2.isModalOrActionsheetObstructing()) {
          const user = UserStore.getUser(message.author.id);
          if (null != user) {
            if (null == UploadStore.getUploaderFileForMessageId(messageId)) {
              const tmpResult = tmp(10822);
              const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmp(5067).asComponentId(nativeSyntheticEventData.componentId), componentMediaIndex);
              const tmpResult3 = tmp(5067);
              const obj3 = { analyticsLocation: null, canAddNewReactions: null, channel: null, chatInputRef: null, message: null, selectedMedia: null, user: null };
              const obj4 = { section: constants5.CHANNEL, object: constants2.MESSAGE };
              obj3.analyticsLocation = obj4;
              obj3.canAddNewReactions = canAddNewReactionsDefault(messageChannel);
              obj3.channel = messageChannel;
              obj3.chatInputRef = obj2.params.chatInputRef;
              obj3.message = message;
              obj3.selectedMedia = longPressSelectedMedia;
              obj3.user = user;
              const result = tmp(11152).showLongPressMessageActionSheet(obj3);
              const tmpResult4 = tmp(11152);
            }
          }
        }
      }
    };
    obj.handleInitiateReply = function handleInitiateReply(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (nativeEvent.nativeEvent.triggerHaptic) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          const tmpResult = HapticUtils;
        }
        const obj2 = { message, channel: messageChannel, chatInputRef: obj.params.chatInputRef, actionSource: null, invertible: true };
        let str = nativeEvent.nativeEvent.location;
        if (str == null) {
          str = "message_swipe";
        }
        obj2.actionSource = str;
        replyToMessageDefault(obj2);
      }
    };
    obj.handleInitiateThread = function handleInitiateThread(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const result = tmp(4801).triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (message.hasFlag(constants6.HAS_THREAD)) {
          const tmpResult3 = tmp(1101);
          tmpResult3.transitionToGuild(messageChannel.guild_id, tmp6(11).castMessageIdAsChannelId(message.id));
          const tmp6Result = tmp6(11);
        } else {
          tmp(11162).handleCreateThread(messageChannel, message, "Message Shortcut");
          const tmpResult4 = tmp(11162);
        }
        tmp6 = importDefault;
        const tmpResult = tmp(4801);
      }
    };
    obj.handleInitiateEdit = function handleInitiateEdit(nativeEvent) {
      const chatInputRef = obj.params.chatInputRef;
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const currentUser = UserStore.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (tmp7(message, id)) {
          const tmpResult = LongPressMessageActionSheetUtils;
          tmpResult.handleEdit(message, messageChannel, chatInputRef, "message_swipe", true);
        }
        tmp7 = canEditMessageDefault;
      }
    };
    obj.handleTapMessage = function handleTapMessage(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const guildId = messageChannel.getGuildId();
        if (null != message) {
          if (null != guildId) {
            const type = message.type;
            if (constants8.GUILD_BOOST !== type) {
              if (tmp16.GUILD_BOOST_TIER_1 !== type) {
                if (tmp16.GUILD_BOOST_TIER_2 !== type) {
                  if (tmp16.GUILD_BOOST_TIER_3 !== type) {
                    if (tmp16.AUTO_MODERATION_ACTION === type) {
                      if (tmpResult.isAutomodMessageRecord(message)) {
                        const result = tmp(6928).extractAutomodMessageFields(message);
                        ({ embedChannel, flaggedMessageId } = result);
                        if (tmp5) {
                          id = undefined;
                          if (embedChannel != null) {
                            id = embedChannel.id;
                          }
                          const result1 = obj.handleTransitionToMessage(guildId, id, flaggedMessageId);
                        }
                        tmp5 = null != flaggedMessageId && null != embedChannel;
                        const tmpResult2 = tmp(6928);
                      }
                      tmpResult = tmp(6928);
                    }
                  }
                }
              }
            }
            actions_BoostingActionCreatorsAll.openApplyBoostModal(guildId);
            const obj3 = { location: null };
            const obj6 = { section: constants5.CHANNEL_TEXT_AREA, object: constants2.BOOST_ANNOUNCEMENT_UPSELL };
            obj3.location = obj6;
            AppAnalyticsUtilsDefault.trackWithMetadata(closure_2_42.PREMIUM_GUILD_PROMOTION_OPENED, obj3);
          }
        }
      }
    };
    obj.handleDoubleTapMessage = function handleDoubleTapMessage(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        const result = DoubleTapToReactUtils.handleAddDefaultDoubleTapReaction(message, messageChannel);
        const tmpResult = DoubleTapToReactUtils;
      }
    };
    obj.handleTapSeparator = function handleTapSeparator(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (!obj.isModalOrActionsheetObstructing()) {
        const type = nativeEvent.type;
        if (SeparatorAction.LOAD_MORE_BEFORE === type) {
          const params2 = obj.params;
          const moreBefore = params2.loadMoreBefore();
        } else if (tmp.LOAD_MORE_AFTER === type) {
          const params = obj.params;
          const moreAfter = params.loadMoreAfter();
        } else if (tmp.TOGGLE_BLOCKED_MESSAGES === type) {
          if (null != nativeEvent.context) {
            obj.handleReveal(nativeEvent.context);
          }
        }
      }
    };
    obj.handleTapCancelUploadItem = function handleTapCancelUploadItem(nativeEvent) {
      const uploaderId = nativeEvent.nativeEvent.uploaderId;
      const uploads = obj.params.uploads;
      if (null != uploads) {
        const found = uploads.find((id) => id.id === uploaderId);
        if (null != found) {
          obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          UploadActionCreatorsDefault.cancelUploadItem(found, tmp);
        }
      }
    };
    obj.handleTapSpotifyResource = function handleTapSpotifyResource(message) {
      const author = message.author;
      if (null != author) {
        if (null != author.id) {
          obj = obj(dependencyMap[94]);
          obj.openTrack(PresenceStore.findActivity(author.id, (type) => type.type === constants.LISTENING));
          const findActivityResult = PresenceStore.findActivity(author.id, (type) => type.type === constants.LISTENING);
        }
      }
    };
    obj.handleTapActivityResource = function handleTapActivityResource(message) {
      ({ author, application } = message);
      if (null != author) {
        if (null != message.activity) {
          if (null != application) {
            if (null != author.id) {
              const channel_id = message.channel_id;
              channel = ChannelStore.getChannel(channel_id);
              ({ id, deeplink_uri } = application);
              applicationActivity = PresenceStore.getApplicationActivity(author.id, id);
              if (null != applicationActivity) {
                const session_id = applicationActivity.session_id;
                if (null != session_id) {
                  if (obj11.isIOS()) {
                    let ANDROID = constants3.IOS;
                  } else {
                    if (tmp31Result.isAndroid()) {
                      ANDROID = constants3.ANDROID;
                    }
                    tmp31Result = tmp31(tmp32[64]);
                  }
                  let hasFlagResult = null != applicationActivity.flags;
                  if (hasFlagResult) {
                    hasFlagResult = tmp31(tmp32[95]).hasFlag(applicationActivity.flags, constants2.EMBEDDED);
                    const tmp31Result6 = tmp31(tmp32[95]);
                  }
                  let flag = null != ANDROID;
                  if (flag) {
                    const supported_platforms = applicationActivity.supported_platforms;
                    let hasItem;
                    if (supported_platforms != null) {
                      hasItem = supported_platforms.includes(ANDROID);
                    }
                    flag = hasItem;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  let application1 = application.getApplication(id);
                  if (application1 == null) {
                    application1 = null;
                  }
                  if (null != application1) {
                    obj = { presenceActivity: applicationActivity, currentUserPresenceActivity: require("getCurrentUserPresenceActivity")(LocalActivityStore, closure_1_34, id), currentUserId: id.getId(), message, application: application1, isEmbeddedApplication: hasFlagResult, isFrameApplication: false, isGameLaunchable: flag };
                    const canJoin = tmp31(tmp32[96]).getCanJoin(obj);
                    const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                    let tmp11;
                    if (null != remoteJoinPlatform) {
                      const party = applicationActivity.party;
                      let id1;
                      if (party != null) {
                        id1 = party.id;
                      }
                      tmp11 = id1;
                    }
                    if (!canJoin.canJoin) {
                      if (tmp31Result8.getSupportsRemoteJoin(applicationActivity)) {
                        if (tmp31Result9.getShouldShowAppAuthPrompt(application1)) {
                          items = [tmp33(tmp32[37]).INVITE_EMBED];
                          const result = tmp31(tmp32[100]).startAuthorizationNoHook(application1, items);
                        }
                        tmp31Result9 = tmp31(tmp32[99]);
                      }
                      tmp31Result8 = tmp31(tmp32[98]);
                    }
                    const tmp31Result7 = tmp31(tmp32[96]);
                    const obj2 = { userId: author.id, sessionId: session_id, application, channelId: channel_id, messageId: message.id, applicationActivity, remotePartyId: tmp11, embedded: hasFlagResult, source: constants5.MESSAGE_EMBED, analyticsLocations: null };
                    const items1 = [require("AnalyticsLocation").INVITE_EMBED];
                    obj2.analyticsLocations = items1;
                    const joined = require("GamesActionCreators").join(obj2);
                    const obj3 = { type: constants4.JOIN, source: constants5.MESSAGE_EMBED, userId: message.author.id, guildId: null, channelId: null, applicationId: null, partyId: null, messageId: null, analyticsLocations: null, remoteJoinPlatform: null };
                    let guild_id;
                    const tmp33Result = require("GamesActionCreators");
                    if (channel != null) {
                      guild_id = channel.guild_id;
                    }
                    obj3.guildId = guild_id;
                    obj3.channelId = channel_id;
                    obj3.applicationId = id;
                    const party2 = applicationActivity.party;
                    let id2;
                    if (party2 != null) {
                      id2 = party2.id;
                    }
                    obj3.partyId = id2;
                    obj3.messageId = message.id;
                    const items2 = [require("AnalyticsLocation").INVITE_EMBED];
                    obj3.analyticsLocations = items2;
                    obj3.remoteJoinPlatform = remoteJoinPlatform;
                    require("trackApplicationOpen")(obj3);
                    const tmp33Result2 = require("trackApplicationOpen");
                  }
                  obj11 = obj(dependencyMap[64]);
                }
              } else if (null != deeplink_uri) {
                LinkingDefault.openURL(deeplink_uri, constants10.SAFARI);
                const obj4 = { type: constants4.PLAY, source: constants5.MESSAGE_EMBED, userId: message.author.id, guildId: null, channelId: null, applicationId: null, messageId: null, analyticsLocations: null };
                let guild_id1;
                const tmp24 = importDefault;
                const tmp25 = dependencyMap;
                if (channel != null) {
                  guild_id1 = channel.guild_id;
                }
                obj4.guildId = guild_id1;
                obj4.channelId = channel_id;
                obj4.applicationId = application.id;
                obj4.messageId = message.id;
                const items3 = [tmp24(tmp25[37]).INVITE_EMBED];
                obj4.analyticsLocations = items3;
                trackApplicationOpenDefault(obj4);
              }
            }
          }
        }
      }
    };
    obj.handleTapStreamRequest = function handleTapStreamRequest(message) {
      obj = obj(dependencyMap[104]);
      if (_slicedToArray(obj.canFulfillStreamRequest(message, true), 1)[0]) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (null != channel) {
          const oSRequirement = tmp(tmp2[105]).getOSRequirement();
          const tmpResult = tmp(tmp2[105]);
          const obj2 = { channel, hasPermission: true, isActive: false, osRequirement: oSRequirement };
          tmp(tmp2[105]).getStreamPressHandler(obj2)();
          const tmpResult2 = tmp(tmp2[105]);
        }
      }
    };
    obj.handleTapActivityInviteToJoin = function handleTapActivityInviteToJoin(message) {
      ({ author, application } = message);
      if (null != author) {
        if (null != application) {
          if (null != author.id) {
            applicationActivity = applicationActivity.getApplicationActivity(application.id, true);
            if (null != applicationActivity) {
              const obj2 = { channelId: message.channel_id, type: constants.JOIN, activity: applicationActivity, location: constants5.MESSAGE_EMBED };
              ActivitiesActionCreatorsDefault.sendActivityInvite(obj2);
            }
          }
        }
      }
    };
    obj.handleTapGuildEventInvite = function handleTapGuildEventInvite(arg0) {
      ({ invite, primary, guildEventId, recurrenceId } = arg0);
      ({ isMember, secondary } = arg0);
      if (null != invite) {
        const guild_scheduled_event = invite.guild_scheduled_event;
        id = undefined;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        guildEventId = id;
      }
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (null != guildEventId) {
          if (!isMember) {
            if (null != invite) {
              handleAcceptEventInstantInviteDefault(invite);
              return { action: "accept" };
            }
          }
          if (secondary) {
            let inviteKeyFromExtraData = null;
            if (null != invite) {
              const obj2 = { baseCode: invite.code, guildScheduledEventId: guildEventId };
              inviteKeyFromExtraData = obj(dependencyMap[107]).generateInviteKeyFromExtraData(obj2);
              const obj4 = obj(dependencyMap[107]);
            }
            let tmp19;
            if (null != inviteKeyFromExtraData) {
              tmp19 = getInviteURLDefault(inviteKeyFromExtraData);
            }
            obj(dependencyMap[108]).openShareEvent(guildScheduledEvent, tmp19);
            return { action: "share" };
          } else {
            if (primary) {
              if (closure_1_15(guildScheduledEvent)) {
                const result = obj(dependencyMap[108]).transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                let obj5 = { action: "transition" };
                const obj3 = obj(dependencyMap[108]);
              }
              return obj5;
            }
            obj = obj(dependencyMap[108]);
            if (primary) {
              const result1 = obj.handleGuildScheduledEventRsvp(guildScheduledEvent.id, recurrenceId, guildScheduledEvent.guild_id);
              obj5 = { action: "rsvp" };
            } else {
              const result2 = obj.transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
              obj5 = { action: "transition" };
            }
          }
        }
      }
      return { action: "noop" };
    };
    obj._questsEmbedOnPress = function _questsEmbedOnPress(code) {
      obj = obj(dependencyMap[110]);
      if (!obj.isMetaQuest()) {
        const result = tmp(tmp2[111]).findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          const obj2 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[112]).openQuestHome(obj2);
          const tmpResult3 = tmp(tmp2[112]);
        } else {
          const obj3 = { fromContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[112]).openQuestHome(obj3);
          const tmpResult4 = tmp(tmp2[112]);
        }
        const tmpResult = tmp(tmp2[111]);
      }
    };
    obj._questsEmbedOnAccept = function _questsEmbedOnAccept(code) {
      obj = obj(dependencyMap[110]);
      if (obj.isMetaQuest()) {
        tmp(tmp2[112]).openDiscordQuestsFAQ();
        const tmpResult = tmp(tmp2[112]);
      } else {
        const result = tmp(tmp2[111]).findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          if (null == QuestStore.questEnrollmentBlockedUntil) {
            if (!tmp4.isQuestAccessSuspended) {
              const userStatus = result.userStatus;
              let enrolledAt;
              if (userStatus != null) {
                enrolledAt = userStatus.enrolledAt;
              }
              let tmp9 = null != enrolledAt;
              const _Date = Date;
              const date = new Date();
              if (!tmp9) {
                tmp9 = result.config.expiresAt < date.toISOString();
              }
              if (!tmp9) {
                const obj2 = { questContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE, questContentCTA: tmp(tmp2[115]).QuestContentCTA.ACCEPT_QUEST, sourceQuestContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
                tmp(tmp2[114]).enrollInQuest(result.id, obj2);
                const tmpResult7 = tmp(tmp2[114]);
              }
              const obj3 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
              tmp(tmp2[112]).openQuestHome(obj3);
              const tmpResult8 = tmp(tmp2[112]);
            }
          }
          const obj4 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[112]).openQuestHome(obj4);
          const tmpResult9 = tmp(tmp2[112]);
        } else {
          const obj5 = { fromContent: tmp(tmp2[113]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[112]).openQuestHome(obj5);
          const tmpResult10 = tmp(tmp2[112]);
        }
        tmp4 = QuestStore;
        const tmpResult6 = tmp(tmp2[111]);
      }
    };
    obj.handleTapInviteEmbedAccept = function handleTapInviteEmbedAccept(nativeEvent) {
      let trackInviteEmbedActioned = require;
      let result8 = dependencyMap;
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ index, primary, secondary } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        id = messageData.message;
        const current = obj2.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (id.type === constants8.THREAD_STARTER_MESSAGE) {
          if (null != id.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(id.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp7;
          if (codedLinks != null) {
            tmp7 = codedLinks[index];
          }
          if (null != tmp7) {
            if (tmp7.type === CodedLink.CodedLinkType.INVITE) {
              invite = InviteStore.getInvite(tmp7.code);
              if (null != invite) {
                const id1 = AuthenticationStore.getId();
                let id2;
                if (invite != null) {
                  const guild = invite.guild;
                  if (guild != null) {
                    id2 = guild.id;
                  }
                }
                const isMemberResult = GuildMemberStore.isMember(id2, id1);
                let flag = false;
                if (isMemberResult) {
                  flag = false;
                  if (null != invite.roles) {
                    flag = false;
                    if (invite.roles.length > 0) {
                      const guild2 = invite.guild;
                      let id3;
                      if (guild2 != null) {
                        id3 = guild2.id;
                      }
                      flag = false;
                      if (null != id3) {
                        const member = obj15.getMember(invite.guild.id, id1);
                        let roles1;
                        if (member != null) {
                          roles1 = member.roles;
                        }
                        if (roles1 == null) {
                          roles1 = [];
                        }
                        const set = new Set(roles1);
                        const roles = invite.roles;
                        flag = roles.some((id) => !set.has(id.id));
                      }
                    }
                  }
                }
                const result = InviteCodeUtils;
                const inviteInstanceId = result.getInviteInstanceId(tmp7.code, id.id);
                const result1 = InviteTypeUtils;
                if (result1.isGuildScheduledEventInviteEmbed(invite)) {
                  const obj3 = { invite, isMember: isMemberResult, primary, secondary };
                  let str5 = obj2.handleTapGuildEventInvite(obj3).action;
                } else {
                  if (isMemberResult) {
                    if (!flag) {
                      const result2 = obj2.handleTransitionToInviteChannel(invite);
                      str5 = "transition";
                    }
                  }
                  const result3 = obj2.handleAcceptInstantInvite(invite, inviteInstanceId);
                  str5 = "accept";
                }
                const guild3 = invite.guild;
                let id4;
                if (guild3 != null) {
                  id4 = guild3.id;
                }
                if (null != id4) {
                  const result4 = InviteTypeUtils;
                  const guildInviteExtendedType = result4.getGuildInviteExtendedType(invite);
                  if (guildInviteExtendedType === InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL) {
                    const result5 = VoiceChannelListInviteExperiment;
                    const obj4 = { guildId: id4, location: "mobile_invite_embed" };
                    if (result5.getVoiceChannelListInviteExperiment(obj4).enabled) {
                      const result6 = VoiceChannelListInviteEmbed;
                      const result7 = InstantInviteActionCreators;
                      trackInviteEmbedActioned = result7.trackInviteEmbedActioned;
                      const obj5 = { invite, action: str5, inviter_id: null, invite_message_id: null, invite_instance_id: null };
                      str5 = id.author.id;
                      obj5.inviter_id = str5;
                      id = id.id;
                      obj5.invite_message_id = id;
                      obj5.invite_instance_id = inviteInstanceId;
                      result8 = trackInviteEmbedActioned(obj5, items1);
                    }
                    items = [AnalyticsLocationDefault.INVITE_EMBED, AnalyticsLocationDefault.VOICE_CHANNEL_LIST_INVITE_EMBED];
                    items1 = items;
                  }
                }
                items1 = [AnalyticsLocationDefault.INVITE_EMBED];
                obj15 = GuildMemberStore;
              }
            } else if (tmp7.type === CodedLink.CodedLinkType.CHANNEL_LINK) {
              const obj7 = { guildId: null, channelId: null, message: null };
              [obj6.guildId, obj6.channelId] = tmp7.code.split("/");
              obj7.message = id;
              const result9 = obj2.handleTapVoiceChannelPreview(obj7);
              const tmp14 = _slicedToArray(tmp7.code.split("/"), 2);
            } else {
              if (tmp7.type !== CodedLink.CodedLinkType.BUILD_OVERRIDE) {
                if (tmp7.type !== CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                  if (tmp7.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
                    obj2._questsEmbedOnAccept(tmp7.code);
                  } else if (tmp7.type === CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                    const result10 = SocialLayerStorefrontNativeActionCreators;
                    const obj8 = { skuId: _slicedToArray(tmp7.code.split("-"), 1)[0], analyticsLocations: null };
                    const items2 = [AnalyticsLocationDefault.GIFT_CODE_EMBED];
                    obj8.analyticsLocations = items2;
                    const result11 = result10.openSocialLayerStorefrontProductDetailsModal(obj8);
                  }
                }
              }
              const result12 = build_overrides_BuildOverrideUtils;
              result12.toggleOverride(tmp7.code);
            }
          }
        }
        if (id.messageSnapshots.length > 0) {
          codedLinks = id.messageSnapshots[0].message.codedLinks;
        } else {
          codedLinks = id.codedLinks;
        }
      }
    };
    obj.handleTapInviteEmbed = function handleTapInviteEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ primary, secondary } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const message2 = messageData.message;
        const current = obj2.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        if (message2.type === constants8.THREAD_STARTER_MESSAGE) {
          if (null != message2.messageReference) {
            const message = ReferencedMessageStore.getMessageByReference(message2.messageReference).message;
            if (null != message) {
              let codedLinks = message.codedLinks;
            }
          }
          let tmp8;
          if (codedLinks != null) {
            tmp8 = codedLinks[nativeSyntheticEventData.index];
          }
          if (null != tmp8) {
            id = AuthenticationStore.getId();
            if (tmp8.type !== tmp(4821).CodedLinkType.INVITE) {
              if (tmp8.type !== tmp(4821).CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp8.type === tmp(4821).CodedLinkType.TEMPLATE) {
                  guild_templates_GuildTemplateActionCreatorsDefault.showModal(tmp8.code);
                } else {
                  if (tmp8.type !== tmp(4821).CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp8.type !== tmp(4821).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      if (tmp8.type === tmp(4821).CodedLinkType.EXPERIMENT) {
                        const experimentFromEmbedURL = tmp(7316).getExperimentFromEmbedURL(tmp8.code);
                        if (null != experimentFromEmbedURL) {
                          const experimentTreatmentFromEmbedURL = tmp(7316).getExperimentTreatmentFromEmbedURL(tmp8.code);
                          const tmpResult15 = tmp(7316);
                          const result = tmp(11284).handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL);
                          const tmpResult16 = tmp(11284);
                        }
                        const tmpResult = tmp(7316);
                      } else if (tmp8.type === tmp(4821).CodedLinkType.EVENT) {
                        const tmp21 = _slicedToArray(tmp8.code.split("-"), 3);
                        const obj3 = { invite: null, isMember: GuildMemberStore.isMember(tmp21[0], id), primary, secondary, guildEventId: tmp21[1], recurrenceId: tmp21[2] };
                        const result1 = obj2.handleTapGuildEventInvite(obj3);
                      } else if (tmp8.type === tmp(4821).CodedLinkType.CHANNEL_LINK) {
                        const obj4 = { guildId: null, channelId: null, message: null };
                        [obj7.guildId, obj7.channelId] = tmp8.code.split("/");
                        obj4.message = message2;
                        const result2 = obj2.handleTapVoiceChannelPreview(obj4);
                        const tmp18 = _slicedToArray(tmp8.code.split("/"), 2);
                      } else if (tmp8.type === tmp(4821).CodedLinkType.APP_DIRECTORY_PROFILE) {
                        application = ApplicationDirectoryApplicationsStore.getApplication(tmp8.code);
                        if (null != application) {
                          ({ id: obj6.applicationId, custom_install_url: obj6.customInstallUrl, install_params: obj6.installParams, integration_types_config: obj6.integrationTypesConfig } = application);
                          tmp(8506).installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" });
                          const obj5 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" };
                          const tmpResult17 = tmp(8506);
                        }
                      } else if (tmp8.type === tmp(4821).CodedLinkType.QUESTS_EMBED) {
                        obj2._questsEmbedOnPress(tmp8.code);
                      } else {
                        if (tmp8.type !== tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                          if (tmp8.type !== tmp(4821).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                            if (tmp8.type !== tmp(4821).CodedLinkType.APP_OAUTH2_LINK) {
                              const _Error = Error;
                              const _HermesInternal = HermesInternal;
                              throw Error("Unknown coded link type: " + tmp8.type);
                            } else {
                              const application1 = ApplicationStore.getApplication(tmp8.code);
                              if (null != application1) {
                                const obj8 = { application_id: application1.id };
                                AppAnalyticsUtilsDefault.trackWithMetadata(closure_2_42.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj8);
                                ({ id: obj30.applicationId, customInstallUrl: obj30.customInstallUrl, installParams: obj30.installParams, integrationTypesConfig: obj30.integrationTypesConfig } = application1);
                                tmp(8506).installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" });
                                const obj9 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" };
                                const tmpResult18 = tmp(8506);
                              }
                            }
                          }
                        }
                        const obj10 = { skuId: _slicedToArray(tmp8.code.split("-"), 1)[0], analyticsLocations: null };
                        items = [AnalyticsLocationDefault.GIFT_CODE_EMBED];
                        obj10.analyticsLocations = items;
                        const result3 = tmp(10262).openSocialLayerStorefrontProductDetailsModal(obj10);
                        const tmpResult19 = tmp(10262);
                      }
                    }
                  }
                  tmp(11267).toggleOverride(tmp8.code);
                  const tmpResult20 = tmp(11267);
                }
              }
            }
            invite = InviteStore.getInvite(tmp8.code);
            let id1;
            if (invite != null) {
              const guild = invite.guild;
              if (guild != null) {
                id1 = guild.id;
              }
            }
            const isMemberResult = GuildMemberStore.isMember(id1, id);
            if (null != invite) {
              const guild4 = invite.guild;
              let id2;
              if (guild4 != null) {
                id2 = guild4.id;
              }
              let enabled = null != id2;
              if (enabled) {
                const guildInviteExtendedType = tmp(7154).getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === tmp(7154).GuildInviteExtendedType.VOICE_CHANNEL;
                const tmpResult21 = tmp(7154);
              }
              if (enabled) {
                const obj11 = { guildId: id2, location: "mobile_invite_embed" };
                enabled = tmp(10848).getVoiceChannelListInviteExperiment(obj11).enabled;
                const tmpResult22 = tmp(10848);
              }
              if (enabled) {
                enabled = tmp(10849).canShowVoiceChannelListInviteEmbed(invite);
                const tmpResult23 = tmp(10849);
              }
              if (tmpResult24.isGuildScheduledEventInviteEmbed(invite)) {
                const obj12 = { invite, isMember: isMemberResult, primary, secondary };
                let str8 = obj2.handleTapGuildEventInvite(obj12).action;
              } else {
                if (enabled) {
                  channel = invite.channel;
                  let id3;
                  if (channel != null) {
                    id3 = channel.id;
                  }
                  if (null != id3) {
                    const channel1 = ChannelStore.getChannel(invite.channel.id);
                    str8 = "noop";
                    if (null != channel1) {
                      const guildId = channel1.getGuildId();
                      let tmp48 = null != guildId;
                      if (tmp48) {
                        tmp48 = guildId !== SelectedGuildStore.getGuildId();
                      }
                      if (tmp48) {
                        tmp(6760).transitionToGuild(guildId);
                        const tmpResult25 = tmp(6760);
                      }
                      const result4 = tmp(5043).navigateToVoiceChannel(channel1, "Mobile Invite Embed");
                      str8 = "voice channel preview";
                      const tmpResult26 = tmp(5043);
                    }
                  }
                }
                const guild2 = invite.guild;
                let id4;
                if (guild2 != null) {
                  id4 = guild2.id;
                }
                if (null != id4) {
                  const _HermesInternal2 = HermesInternal;
                  const obj20 = ActionSheetActionCreatorsDefault;
                  const obj14 = { guildId: invite.guild.id, context: null, inviteKey: null };
                  const combined = "GuildProfileActionSheet:" + invite.guild.id;
                  obj14.context = tmp(9224).GuildProfileCTAContext.INVITE;
                  obj14.inviteKey = tmp8.code;
                  obj20.openLazy(tmp(1981)(9206, dependencyMap.paths), combined, obj14);
                  str8 = "show profile";
                  const tmp42 = tmp(1981)(9206, dependencyMap.paths);
                } else if (isMemberResult) {
                  const result5 = obj2.handleTransitionToInviteChannel(invite);
                  str8 = "transition";
                } else {
                  const result6 = obj2.handleAcceptInstantInvite(invite, tmp(4818).getInviteInstanceId(tmp8.code, message2.id));
                  str8 = "accept";
                  const tmpResult27 = tmp(4818);
                }
              }
              const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, tmp52(6603).VOICE_CHANNEL_LIST_INVITE_EMBED];
                let items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              tmp52 = importDefault;
              tmpResult24 = tmp(7154);
              let id5;
              if (invite != null) {
                const guild3 = invite.guild;
                if (guild3 != null) {
                  id5 = guild3.id;
                }
              }
              const result7 = tmp(7826).trackInviteServerClicked(id5, str8, items2);
              const tmpResult28 = tmp(7826);
            }
          }
        }
        if (message2.messageSnapshots.length > 0) {
          codedLinks = message2.messageSnapshots[0].message.codedLinks;
        } else {
          codedLinks = message2.codedLinks;
        }
      }
    };
    obj.handleTapVoiceChannelPreview = function handleTapVoiceChannelPreview(message) {
      ({ guildId, channelId } = message);
      const guildId1 = SelectedGuildStore.getGuildId();
      const channelId1 = SelectedChannelStore.getChannelId(guildId1);
      channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        obj = { author_id: message.message.author.id, link_guild_id: guildId, link_channel_id: channelId, link_channel_type: channel.type, guild_id: guildId1, channel_id: channelId1 };
        AnalyticsUtilsDefault.track(closure_2_42.CHANNEL_LINK_PREVIEW_JOINED, obj);
        const current = obj.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        const tmp10 = importDefault;
        if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
          if (!tmp4Result.shouldShowSpoilerGateForChannelId(channelId)) {
            if (channel.isGuildStageVoice()) {
              tmp4(7841).connectAndOpen(channel);
              const tmp4Result4 = tmp4(7841);
            } else {
              const voiceChannel = tmp10(5723).selectVoiceChannel(channelId);
              const tmp10Result = tmp10(5723);
              tmp4(5043).openChannelCallModal(channel);
              const tmp4Result5 = tmp4(5043);
            }
          }
          tmp4Result = tmp4(6747);
        }
        obj2 = AgeGateUtils;
        router_utils.transitionTo(closure_2_55.CHANNEL(guildId, channelId));
        const tmp4Result6 = router_utils;
      }
    };
    obj.handleTapJoinActivity = function handleTapJoinActivity(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === constants.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === tmp2.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === tmp2.STREAM_REQUEST) {
            const result2 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleTapJoinRichPresence = function handleTapJoinRichPresence(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        const message = messageData.message;
        const activity = message.activity;
        if (null != activity) {
          const type = activity.type;
          if (type === constants.LISTEN) {
            const result = obj2.handleTapSpotifyResource(message);
          } else if (type === tmp2.JOIN) {
            const result1 = obj2.handleTapActivityResource(message);
          } else if (type === tmp2.JOIN_REQUEST) {
            const result2 = obj2.handleTapActivityInviteToJoin(message);
          } else if (type === tmp2.STREAM_REQUEST) {
            const result3 = obj2.handleTapStreamRequest(message);
          }
        }
      }
    };
    obj.handleAcceptInstantInvite = function handleAcceptInstantInvite(invite, inviteInstanceId) {
      closure_1 = inviteInstanceId;
      const code = invite.code;
      if (null != code) {
        function acceptInvite() {
          if (invite.type === InviteTypes.GUILD) {
            obj = GuildCapUpsellHooks;
            if (obj.isAtGuildCapAndNonPremium()) {
              const obj3 = { initialUpsellKey: constants10.GUILD_CAP, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
              const obj4 = { page: constants4.INVITE_EMBED };
              obj3.analyticsLocation = obj4;
              items = [AnalyticsLocationDefault.INVITE_EMBED];
              obj3.analyticsLocations = items;
              const obj5 = { type: constants11.GUILD_CAP_MODAL_UPSELL };
              obj3.analyticsProperties = obj5;
              const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj3);
            }
          }
          const obj6 = { inviteKey: code, context: null, callback: null };
          if (null != closure_1) {
            const obj8 = { invite_instance_id: tmp3 };
            let obj9 = obj8;
          } else {
            obj9 = {};
          }
          const merged = Object.assign(obj9);
          obj6.context = { location: "Invite Button Embed" };
          obj6.callback = obj.handleTransitionToInviteChannel;
          InstantInviteActionCreatorsDefault.acceptInvite(obj6);
        }
        obj = obj(dependencyMap[135]);
        const obj2 = { onConfirm: acceptInvite };
        if (!obj.handleNSFWGuildInvite(invite, obj2)) {
          acceptInvite();
        }
      }
    };
    obj.handleTransitionToInviteChannel = function handleTransitionToInviteChannel(invite) {
      InstantInviteActionCreatorsDefault.transitionToInvite(invite, { forceTransition: true });
    };
    obj.handleTapGiftCodeEmbed = function handleTapGiftCodeEmbed() {

    };
    obj.handleTapGiftCodeAccept = function handleTapGiftCodeAccept(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const giftCode = nativeSyntheticEventData.giftCode;
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        if (currentUser.verified) {
          value = GiftCodeStore.get(giftCode);
          if (null != value) {
            if (null != value.giftStyle) {
              const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
            }
            if (obj.params.paymentsBlocked) {
              tmp12(10977)();
            } else {
              tmp12(1241).track(closure_2_42.OPEN_MODAL, { type: "gift_accept", location: null });
              const tmp12Result = tmp12(1241);
              const obj3 = { code: giftCode, customMessage: null, soundId: null, emojiName: null };
              let content;
              const tmp12Result2 = tmp12(5039);
              if (null != messageData) {
                content = messageData.message.content;
              }
              obj3.customMessage = content;
              id = undefined;
              if (messageData != null) {
                const message = messageData.message;
                if (message != null) {
                  const giftInfo = message.giftInfo;
                  if (giftInfo != null) {
                    const sound = giftInfo.sound;
                    if (sound != null) {
                      id = sound.id;
                    }
                  }
                }
              }
              obj3.soundId = id;
              let name;
              if (messageData != null) {
                const message2 = messageData.message;
                if (message2 != null) {
                  const giftInfo2 = message2.giftInfo;
                  if (giftInfo2 != null) {
                    const emoji = giftInfo2.emoji;
                    if (emoji != null) {
                      name = emoji.name;
                    }
                  }
                }
              }
              obj3.emojiName = name;
              tmp12Result2.pushLazy(asyncRequireImpl(10982, dependencyMap.paths), obj3);
              const tmp15 = asyncRequireImpl(10982, dependencyMap.paths);
            }
          }
        } else {
          EmailVerificationModalActionCreatorsDefault.open();
        }
      }
    };
    obj.handleTapReferralRedeem = function handleTapReferralRedeem() {
      obj = obj(dependencyMap[140]);
      if (obj.canOpenPremiumPlanDirectlyForReferralTrial()) {
        const obj2 = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
        const obj3 = { page: constants6.REFERRAL_MESSAGE_EMBED };
        obj2.analyticsLocation = obj3;
        items = [require("AnalyticsLocation").REFERRAL_MESSAGE_EMBED];
        obj2.analyticsLocations = items;
        obj2.premiumType = TIER_2.TIER_2;
        require("openPremiumPlanSelectionActionSheet")(obj2);
        const tmp6 = require("openPremiumPlanSelectionActionSheet");
      } else {
        const obj4 = { screen: constants9.PREMIUM };
        obj(tmp2[142]).openUserSettings(obj4);
        const tmpResult = obj(tmp2[142]);
      }
    };
    obj.getGiftIntentCtaContext = function getGiftIntentCtaContext(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, recipientUserId, giftIntentType } = nativeSyntheticEventData);
      const parseGiftIntentTypeResult = PremiumGiftingIntentUtils.parseGiftIntentType(giftIntentType);
      if (null == parseGiftIntentTypeResult) {
        return null;
      } else {
        const params = obj.params;
        const message = params.getMessage(messageId);
        let channel_id;
        if (message != null) {
          channel_id = message.channel_id;
        }
        if (channel_id == null) {
          channel_id = obj.params.selectedChannelId;
        }
        const obj3 = { channel: ChannelStore.getChannel(channel_id), giftIntentType: parseGiftIntentTypeResult, messageId, recipientUserId };
        return obj3;
      }
    };
    obj.handleTapGiftIntentPrimaryCta = function handleTapGiftIntentPrimaryCta(nativeEvent) {
      const giftIntentCtaContext = navigationParams.getGiftIntentCtaContext(nativeEvent);
      if (null != giftIntentCtaContext) {
        ({ channel, recipientUserId } = giftIntentCtaContext);
        const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
        const obj3 = { gift_intent_type: giftIntentCtaContext.giftIntentType, affinity: null, location_stack: null };
        let dmProbability;
        if (userAffinity != null) {
          dmProbability = userAffinity.dmProbability;
        }
        obj3.affinity = dmProbability;
        navigationParams = items;
        obj3.location_stack = items;
        AnalyticsUtilsDefault.track(closure_2_42.GIFT_INTENT_ACTION_BUTTON_CLICKED, obj3);
        let obj4 = { recipientUserId, analyticsLocation: null, analyticsLocations: null, navigationParams: null };
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (null != guild_id) {
          let DM_CHANNEL = constants4.GUILD_CHANNEL;
        } else {
          DM_CHANNEL = constants4.DM_CHANNEL;
        }
        const obj6 = { page: DM_CHANNEL };
        obj4.analyticsLocation = obj6;
        obj4.analyticsLocations = navigationParams;
        navigationParams = { presentation: "card" };
        obj4.navigationParams = navigationParams;
        obj4 = utils_openGiftModal.openGiftModal(obj4);
      }
    };
    obj.handleTapGiftIntentSecondaryCta = function handleTapGiftIntentSecondaryCta(nativeEvent) {
      const giftIntentCtaContext = obj.getGiftIntentCtaContext(nativeEvent);
      if (tmp2) {
        obj = AnalyticsUtilsDefault;
        const obj2 = { gift_intent_type: giftIntentCtaContext.giftIntentType, cta_type: "send_message", location_stack: items };
        obj.track(closure_2_42.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj2);
        const obj4 = { channelId: giftIntentCtaContext.channel.id, giftIntentType: giftIntentCtaContext.giftIntentType };
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11294, dependencyMap.paths), obj4);
      }
    };
    obj.handleGiftIntentCardViewed = function handleGiftIntentCardViewed(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const parseGiftIntentTypeResult = obj(dependencyMap[143]).parseGiftIntentType(obj.getNativeSyntheticEventData(nativeEvent).giftIntentType);
      if (null != parseGiftIntentTypeResult) {
        const obj3 = { name: tmp(tmp2[147]).ImpressionNames.GIFT_INTENT_CARD, type: tmp(tmp2[147]).ImpressionTypes.VIEW, properties: null };
        const obj4 = { gift_intent_type: parseGiftIntentTypeResult, num_friend_anniversaries: friendAnniversaries.getFriendAnniversaries().length };
        obj3.properties = obj4;
        tmp(tmp2[146]).trackImpression(obj3);
        const tmpResult = tmp(tmp2[146]);
      }
    };
    obj.handleTapEmoji = function handleTapEmoji(emojiNode) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapEmoji(emojiNode);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapTimestamp = function handleTapTimestamp(nativeEvent) {
      obj(dependencyMap[44]).contentHandlers.onTapTimestamp(nativeEvent);
    };
    obj.handleTapInlineCode = function handleTapInlineCode(nativeEvent) {
      obj(dependencyMap[44]).contentHandlers.onTapInlineCode(nativeEvent);
    };
    obj.handleTapRoleIcon = function handleTapRoleIcon(nativeEvent) {
      ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
      let name;
      let winningStreak;
      if (roleName.startsWith(name(dependencyMap[148]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX)) {
        const decodeWinnerDataResult = tmp(tmp2[148]).decodeWinnerData(roleName.slice(tmp(tmp2[148]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX.length));
        const tmpResult = tmp(tmp2[148]);
        name = tmp(tmp2[149]).getStatName(decodeWinnerDataResult.winningStat).name;
        winningStreak = decodeWinnerDataResult.winningStreak;
        const tmpResult2 = tmp(tmp2[149]);
        let obj2 = {
          key: "LEADERBOARD_WINNER_BADGE_TOOLTIP",
          content() {
              if (null != winningStreak) {
                if (tmp5 > 1) {
                  const intl2 = tmp2(tmp3[48]).intl;
                  const obj2 = { streakCount: tmp5, statName: name };
                  let formatResult = intl2.format(tmp2(tmp3[48]).t.owAd83, obj2);
                }
                const obj3 = { variant: "text-md/normal", color: "text-default", children: formatResult };
                return <tmp4 variant="text-md/normal" color="text-default">{formatResult}</tmp4>;
              }
              const intl = tmp2(tmp3[48]).intl;
              obj = { statName: name };
              formatResult = intl.format(tmp2(tmp3[48]).t.So4gmj, obj);
            },
          IconComponent: tmp(tmp2[152]).TrophyIcon,
          iconColor: "text-feedback-warning"
        };
        winningStreak(tmp2[150]).open(obj2);
        const obj6 = winningStreak(tmp2[150]);
      } else {
        let obj3 = { key: null, content: null, icon: null };
        const _HermesInternal = HermesInternal;
        obj3.key = "ROLE_NAME-" + roleName;
        let combined = roleName;
        if (null != roleIconUnicodeEmoji) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + roleIconUnicodeEmoji + " " + roleName;
        }
        obj3.content = combined;
        let tmp7;
        if (null != roleIconSource) {
          const obj4 = { uri: roleIconSource };
          tmp7 = obj4;
        }
        obj3.icon = tmp7;
        winningStreak(tmp2[150]).open(obj3);
        obj = winningStreak(tmp2[150]);
      }
    };
    obj.handleTapVoiceChannelBadge = function handleTapVoiceChannelBadge(nativeEvent) {
      obj = obj(dependencyMap[41]);
      channel = ChannelStore.getChannel(obj.getNativeSyntheticEventData(nativeEvent).channelId);
      if (null != channel) {
        const result = obj(dependencyMap[46]).navigateToVoiceChannel(channel);
        const tmpResult = obj(dependencyMap[46]);
      }
    };
    obj.handleTapGameIcon = function handleTapGameIcon(nativeEvent) {
      ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = ActionSheetActionCreatorsDefault;
        const obj2 = { applicationId: gameApplicationId, messageTimestamp: timestamp };
        obj.openLazy(asyncRequireImpl(11296, dependencyMap.paths), "MessageGameIconActionSheet", obj2);
      }
    };
    obj.handleTapSuppressNotificationsIcon = function handleTapSuppressNotificationsIcon() {
      obj = ToastActionCreatorsDefault;
      const obj2 = { key: "SUPPRESS_NOTIFICATIONS_TOOLTIP", content: null, icon: null };
      const intl = obj(dependencyMap[48]).intl;
      obj2.content = intl.string(obj(dependencyMap[48]).t["RO/KYj"]);
      obj2.icon = _modDef10823;
      obj.open(obj2);
    };
    obj.handleTapConnectionsRoleTag = function handleTapConnectionsRoleTag(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[40])(dependencyMap[155], dependencyMap.paths), "ConnectionsRoleMessageBadgeActionSheet", { userId, guildId, channelId, roleId });
    };
    obj.handleTapTimeoutIcon = function handleTapTimeoutIcon() {
      obj = ToastActionCreatorsDefault;
      const obj2 = { key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY", content: null, icon: null };
      const intl = obj(dependencyMap[48]).intl;
      obj2.content = intl.string(obj(dependencyMap[48]).t["AeYyL+"]);
      obj2.icon = _modDef10823;
      obj.open(obj2);
    };
    obj.handleReveal = function handleReveal(context) {
      const messageData = obj.getMessageData(context);
      if (null != messageData) {
        obj = MessageActionCreatorsDefault;
        let tmp5 = null;
        if (obj.params.revealedMessageId !== context) {
          tmp5 = context;
        }
        obj.revealMessage(messageData.messageChannel.id, tmp5);
      }
    };
    obj.handleTapButtonActionComponent = function handleTapButtonActionComponent(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, componentId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        id = message.applicationId;
        if (id == null) {
          id = message.author.id;
        }
        const tmpResult = tmp(5060);
        const flattenComponentsResult = tmp(5060).flattenComponents(message.components);
        value = flattenComponentsResult.get(tmp(5067).asComponentId(componentId));
        let tmp6 = null != value;
        if (tmp6) {
          tmp6 = value.type === tmp(1979).ComponentType.BUTTON;
        }
        if (tmp6) {
          tmp6 = null != value.customId;
        }
        if (tmp6) {
          if (value.style !== tmp(1979).ButtonStyle.PREMIUM) {
            const obj2 = { componentType: tmp(1979).ComponentType.BUTTON, messageId, messageFlags: message.flags, customId: value.customId, componentId: null, applicationId: null, channelId: null, guildId: null };
            const tmpResult5 = tmp(7573);
            obj2.componentId = tmp(5067).asComponentId(componentId);
            obj2.applicationId = id;
            obj2.channelId = messageChannel.id;
            obj2.guildId = messageChannel.getGuildId();
            const result = tmpResult5.executeMessageComponentInteraction(obj2);
            const tmpResult6 = tmp(5067);
          } else {
            const obj3 = { title: null, body: null, confirmText: null };
            const intl = tmp(1115).intl;
            obj3.title = intl.string(tmp(1115).t["ZtdF0+"]);
            const intl2 = tmp(1115).intl;
            obj3.body = intl2.string(tmp(1115).t["0BEZLT"]);
            const intl3 = tmp(1115).intl;
            obj3.confirmText = intl3.string(tmp(1115).t.BddRzS);
            AlertActionCreatorsDefault.show(obj3);
          }
        }
        const tmpResult4 = tmp(5067);
      }
    };
    obj.handleTapSelectActionComponent = function handleTapSelectActionComponent(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageId = nativeSyntheticEventData.messageId;
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        ({ flags: closure_1, applicationId } = message);
        if (applicationId == null) {
          applicationId = message.author.id;
        }
        id = messageChannel.id;
        const guildId = messageChannel.getGuildId();
        const tmpResult = tmp(5060);
        const flattenComponentsResult = tmp(5060).flattenComponents(message.components);
        value = flattenComponentsResult.get(tmp(5067).asComponentId(nativeSyntheticEventData.componentId));
        closure_5 = value;
        if (null != value) {
          const parents = tmp(5060).getParents(message.components, value);
          let first;
          if (parents != null) {
            first = parents[0];
          }
          let type1;
          if (first != null) {
            type1 = first.type;
          }
          let tmp9;
          if (type1 === tmp(1979).ComponentType.LABEL) {
            tmp9 = first;
          }
          const obj2 = { channelId: id, guildId, containerId: messageId, labelComponent: tmp9, allowEmpty: null, onSubmit: null };
          const tmpResult5 = tmp(5060);
          obj2.allowEmpty = tmp(5060).canSelectBeEmpty(value, "message");
          obj2.onSubmit = function onSubmit(localState) {
            obj = obj(dependencyMap[160]);
            const result = obj.executeMessageComponentInteraction({ componentType: value.type, messageId, messageFlags, customId: value.customId, componentId: value.id, applicationId, channelId: id, guildId, localState });
          };
          const type = value.type;
          if (tmp(1979).ComponentType.STRING_SELECT === type) {
            const _HermesInternal2 = HermesInternal;
            const obj9 = ActionSheetActionCreatorsDefault;
            const obj3 = { selectionActionComponent: value };
            const combined = "StringSelectComponentActionSheet:" + messageId;
            const merged = Object.assign(obj2);
            obj9.openLazy(tmp(1981)(11299, tmp2.paths), combined, obj3);
            const tmp19 = tmp(1981)(11299, tmp2.paths);
          } else {
            if (tmp(1979).ComponentType.USER_SELECT !== type) {
              if (tmp(1979).ComponentType.ROLE_SELECT !== type) {
                if (tmp(1979).ComponentType.MENTIONABLE_SELECT !== type) {
                  if (tmp(1979).ComponentType.CHANNEL_SELECT === type) {
                    const _HermesInternal3 = HermesInternal;
                    const obj12 = ActionSheetActionCreatorsDefault;
                    const obj4 = { selectionActionComponent: value };
                    const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                    const merged1 = Object.assign(obj2);
                    obj12.openLazy(tmp(1981)(11305, tmp2.paths), combined1, obj4);
                    const tmp28 = tmp(1981)(11305, tmp2.paths);
                  }
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const obj7 = ActionSheetActionCreatorsDefault;
            const obj5 = { selectionActionComponent: value };
            const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
            const merged2 = Object.assign(obj2);
            obj7.openLazy(tmp(1981)(11301, tmp2.paths), combined2, obj5);
            const tmp11 = tmp(1981)(11301, tmp2.paths);
          }
          const tmpResult6 = tmp(5060);
        }
        const tmpResult4 = tmp(5067);
      }
    };
    obj.handleTapWelcomeReply = function handleTapWelcomeReply(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const stickerId = nativeSyntheticEventData.stickerId;
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === constants8.USER_JOIN) {
          const result = tmp(7444).handleWelcomeCtaClicked(messageChannel, message, stickerId);
          const tmpResult = tmp(7444);
        } else if (message.type === tmp5.ROLE_SUBSCRIPTION_PURCHASE) {
          const result1 = tmp(11306).handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId);
          const tmpResult2 = tmp(11306);
        }
      }
    };
    obj.handleTapInviteToSpeak = function handleTapInviteToSpeak(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != messageData) {
        ({ messageChannel, message } = messageData);
        if (message.type === constants8.STAGE_RAISE_HAND) {
          StageChannelActionCreators.setUserSuppress(messageChannel, message.author.id, false);
          const tmpResult = StageChannelActionCreators;
          MessageActionCreatorsDefault.deleteMessage(messageChannel.id, message.id, true);
        }
      }
    };
    obj.handleTapAutoModerationActions = function handleTapAutoModerationActions(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const channelId = nativeSyntheticEventData.channelId;
      if (!obj.isModalOrActionsheetObstructing()) {
        const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          if (tmpResult.isAutomodMessageRecord(message)) {
            if (messageChannel.id === channelId) {
              channel = ChannelStore.getChannel(channelId);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const guild = GuildStore.getGuild(guild_id);
              if (null != guild) {
                if (tmpResult4.isAutomodMessageRecord(message)) {
                  if (tmpResult5.isAutomodNotification(message)) {
                    const obj3 = { source: null, alertType: null, messageId: null };
                    const guildIncident = GuildIncidentsStore.getGuildIncident(guild.id);
                    obj3.source = tmp(7460).GuildIncidentActionSources.MESSAGE;
                    obj3.alertType = tmp(7458).getIncidentAlertType(guildIncident);
                    obj3.messageId = message.id;
                    const tmpResult6 = tmp(7458);
                    const obj4 = { guild, analyticsData: obj3 };
                    ActionSheetActionCreatorsDefault.openLazy(tmp(1981)(11307, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
                  }
                  tmpResult5 = tmp(6928);
                }
                if (GuildMemberStore.isMember(guild.id, message.author.id)) {
                  const obj5 = { user: message.author, guild };
                  tmp9(11311)(obj5);
                } else {
                  const obj6 = { key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER", content: null, icon: null };
                  const intl = tmp(1115).intl;
                  obj6.content = intl.string(tmp(1115).t.UsD2YP);
                  obj6.icon = tmp9(10823);
                  tmp9(4528).open(obj6);
                  const tmp9Result = tmp9(4528);
                }
                tmpResult4 = tmp(6928);
              }
            }
          }
          tmpResult = tmp(6928);
        }
      }
    };
    obj.handleTapAutoModerationFeedback = function handleTapAutoModerationFeedback(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        ({ message, messageChannel } = messageData);
        if (tmpResult.isAutomodMessageRecord(message)) {
          if (messageChannel.id === channelId) {
            channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              if (tmpResult5.isAutomodMessageRecord(message)) {
                if (tmpResult6.isAutomodNotification(message)) {
                  const obj2 = { guildId: channel.guild_id, messageId };
                  ActionSheetActionCreatorsDefault.openLazy(tmp(1981)(11339, dependencyMap.paths), "GuildRaidResolveActionSheet", obj2);
                }
                tmpResult6 = tmp(6928);
              }
              tmpResult5 = tmp(6928);
              const result = tmp(6928).extractAutomodMessageFields(message);
              ({ decisionId, content } = result);
              const tmpResult8 = tmp(11340);
              tmpResult8.openSubmitFeedback(messageId, content, decisionId, channel);
              const tmpResult7 = tmp(6928);
            }
          }
        }
        tmpResult = tmp(6928);
      }
    };
    obj.handleTransitionToThread = function handleTransitionToThread(arg0, arg1, source) {
      channel = ChannelStore.getChannel(arg1);
      if (null != channel) {
        obj = obj(dependencyMap[173]);
        const obj2 = { source, navigationReplace: false };
        obj.transitionToThread(channel, obj2);
      }
    };
    obj.handleTransitionToMessage = function handleTransitionToMessage(guildId, id, flaggedMessageId) {
      obj = obj(dependencyMap[173]);
      obj.transitionToMessage(id, flaggedMessageId, { navigationReplace: false });
    };
    obj.handleTapFollowForumPost = function handleTapFollowForumPost(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
      if (null != messageData) {
        const result = messages_MessagesUtils.handleToggleFollowForumPost(messageData.messageChannel, JoinedThreadsStore.hasJoined(nativeSyntheticEventData.channelId));
        const tmpResult = messages_MessagesUtils;
      }
    };
    obj.handleTapShareForumPost = function handleTapShareForumPost(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ guildId, channelId } = nativeSyntheticEventData);
      const result = obj(dependencyMap[61]).handleCopyLinkForumPost(guildId, channelId, { section: constants7.CHANNEL });
    };
    obj.handleTapSeeMore = function handleTapSeeMore() {

    };
    obj.handleCopyText = function handleCopyText(nativeEvent) {
      obj = obj(dependencyMap[174]);
      obj.copy(nativeEvent.nativeEvent.text);
      const result = obj(dependencyMap[175]).presentCopiedToClipboard();
    };
    obj.handleTapTag = function handleTapTag(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageData = obj.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
    };
    obj.handleTapOpTag = function handleTapOpTag() {
      obj = ToastActionCreatorsDefault;
      obj.open({ key: "FORUM_OP-" + obj.params.selectedChannelId, content: ForumOriginalPoster.getForumOriginalPoster });
    };
    obj.handleMediaAttachmentPlaybackStarted = function handleMediaAttachmentPlaybackStarted(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, totalDurationSecs, startDurationSecs, isVoiceMessage, attachmentId: obj } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === obj);
            }
            if (null != found) {
              const tmpResult = tmp(11353);
              const result = tmpResult.logMediaAttachmentPlaybackStarted(messageData.messageChannel, found, totalDurationSecs, messageId, startDurationSecs, messageData.message.author.id);
            }
          }
        }
        const tmpResult2 = tmp(11352);
        const result1 = tmpResult2.logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, messageData.message.author.id);
      }
    };
    obj.handleMediaAttachmentPlaybackEnded = function handleMediaAttachmentPlaybackEnded(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, totalDurationSecs, endDurationSecs, durationListeningSecs, isVoiceMessage, attachmentId: obj } = nativeSyntheticEventData);
      const messageData = obj.getMessageData(messageId);
      if (null != messageData) {
        if (undefined !== isVoiceMessage) {
          if (!isVoiceMessage) {
            const message = messageData.message;
            const contentMessage = message.getContentMessage();
            let found;
            if (contentMessage != null) {
              const attachments = contentMessage.attachments;
              found = attachments.find((id) => id.id === obj);
            }
            if (null != found) {
              const tmpResult = tmp(11353);
              const result = tmpResult.logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs, found);
            }
          }
        }
        const tmpResult2 = tmp(11352);
        const result1 = tmpResult2.logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs);
      }
    };
    obj.handleVoiceMessagePlaybackFailed = function handleVoiceMessagePlaybackFailed(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, errorMessage } = nativeSyntheticEventData);
      if (errorMessage == null) {
        errorMessage = null;
      }
      const result = obj(dependencyMap[177]).logVoiceMessagePlaybackFailed(messageId, errorMessage);
      const obj2 = obj(dependencyMap[177]);
      const obj4 = { key: "AUDIO_PLAYBACK_FAILED-" + messageId, content: null, icon: null };
      const intl = tmp(tmp2[48]).intl;
      obj4.content = intl.string(obj(dependencyMap[48]).t.gRHMh8);
      obj4.icon = _modDef10823;
      ToastActionCreatorsDefault.open(obj4);
    };
    closure_129_0 = undefined;
    closure_129_0 = closure_7(async (arg0, value) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c1 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const nativeSyntheticEventData = closure_0(dependencyMap[41]).getNativeSyntheticEventData(closure_0);
              ({ guildId, parentChannelId, threadId } = nativeSyntheticEventData);
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              const isMemberResult = member.isMember(guildId, id);
              channel = channel.getChannel(parentChannelId);
              const obj11 = closure_0(dependencyMap[41]);
              const obj4 = { media_post_id: threadId, can_access: null, is_member: null };
              let canViewChannelResult = null != channel;
              if (canViewChannelResult) {
                canViewChannelResult = tmp24(tmp25[179]).canViewChannel(channel);
                const tmp24Result3 = tmp24(tmp25[179]);
              }
              obj4.can_access = canViewChannelResult;
              obj4.is_member = isMemberResult;
              closure_0(dependencyMap[90]).trackWithMetadata(constants.MEDIA_POST_PREVIEW_EMBED_CLICKED, obj4);
              if (isMemberResult) {
                const result = tmp24(tmp25[173]).tryTransitionToThreadMessage(parentChannelId, threadId, nativeSyntheticEventData.messageId);
                const tmp24Result4 = tmp24(tmp25[173]);
              } else {
                dependencyMap = 1;
                const obj6 = { channelId: parentChannelId };
                v2 = 2;
                c1 = 1;
                const obj7 = { value: v2(tmp25[180]).startLurking(guildId, {}, obj6), done: false };
                return obj7;
              }
              const tmp24Result = closure_0(dependencyMap[90]);
            }
          } else {
            if (1 === tmp6) {
              dependencyMap = 0;
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
          c1 = 3;
        } catch (tmp16) {
          if (tmp3 === dependencyMap) {
            c1 = tmp2;
            throw tmp16;
          } else {
            v2 = tmp;
          }
        }
      }
    });
    obj.handleTapPostPreviewEmbed = function() {
      const self = this;
      const apply = obj.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.handleTapDismissMediaPostSharePrompt = function handleTapDismissMediaPostSharePrompt(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const obj2 = MediaChannelActionCreatorsAll;
      const result = obj2.dismissMediaPostSharePrompt(SnowflakeUtilsDefault.castMessageIdAsChannelId(obj.getNativeSyntheticEventData(nativeEvent).messageId));
    };
    obj.handleTapObscuredMediaLearnMore = function handleTapObscuredMediaLearnMore(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[40])(dependencyMap[182], dependencyMap.paths), "ExplicitMediaLearnMore", { messageId, channelId, attachmentId, embedId });
    };
    obj.onTapObscuredMediaToggle = function onTapObscuredMediaToggle(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, isReveal, attachmentId, embedId } = nativeSyntheticEventData);
      let result = isReveal;
      if (isReveal) {
        result = obj2.shouldAgeVerifyForExplicitMedia();
      }
      if (result) {
        const obj4 = { entryPoint: tmp(tmp2[185]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result1 = require("AgeVerificationActionCreators").showAgeVerificationGetStartedModal(obj4);
        const obj3 = require("AgeVerificationActionCreators");
      }
      obj2 = obj(dependencyMap[183]);
      const result2 = obj(dependencyMap[183]).trackToggleMediaObscurityV2({ obscure: isReveal });
    };
    obj.handleTapSafetyPolicyNoticeEmbed = function handleTapSafetyPolicyNoticeEmbed(nativeEvent) {
      obj = obj(dependencyMap[41]);
      ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[40])(dependencyMap[186], dependencyMap.paths), { classificationId: obj.getNativeSyntheticEventData(nativeEvent).classificationId, shouldRedirectToAccountStanding: true });
    };
    obj.handleTapSafetySystemNotificationCta = function handleTapSafetySystemNotificationCta(nativeEvent) {
      ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
      if (constants11.POLICY_VIOLATION_DETAIL === ctaType) {
        if (null != ctaKey) {
          const obj3 = { classificationId: ctaKey, shouldRedirectToAccountStanding: true };
          ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[40])(dependencyMap[186], dependencyMap.paths), obj3);
        }
      } else if (tmp.LEARN_MORE_LINK === ctaType) {
        if (null != ctaKey) {
          obj = LinkingDefault;
          obj.openURL(ctaKey);
        }
      }
    };
    obj.handleTapPollAnswer = function handleTapPollAnswer(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = PollsActionCreatorsDefault.handlePollAnswerTapped(result);
      }
    };
    obj.handleTapPollSubmitVote = function handleTapPollSubmitVote(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        PollsActionCreatorsDefault.handlePollSubmitVote(result);
      }
    };
    obj.handleTapPollAction = function handleTapPollAction(arg0) {
      obj = MessageDataSnowflakeUtils;
      const result = obj.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
      if (null != result) {
        const result1 = PollsActionCreatorsDefault.handlePollActionTapped(result);
      }
    };
    obj.handleLongPressPollImage = function handleLongPressPollImage(arg0) {
      const result = obj.replaceCorrectMessageParams(MessageDataSnowflakeUtils.castNativeSyntheticEventData(arg0));
      obj = result;
      if (null != result) {
        const messageData = obj.getMessageData(result.messageId);
        if (null != messageData) {
          ({ message, messageChannel } = messageData);
          const attachments = message.attachments;
          const findIndexResult = attachments.findIndex((id) => id.id === result.attachmentId);
          if (null != findIndexResult) {
            const result1 = tmp(7713).extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
            const tmpResult = tmp(7713);
            const obj3 = { initialSources: result1, initialIndex: findIndexResult, originViewOrOriginLayout: result.layout, analyticsSource: "Channel", channelId: messageChannel.id };
            tmp(7707).openMediaModal(obj3);
            const tmpResult2 = tmp(7707);
          }
        }
      }
    };
    obj.handleTapCtaButton = function handleTapCtaButton(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, callback, messageId } = nativeSyntheticEventData);
      if (obj(dependencyMap[190]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
        const result = tmp(tmp2[191]).handleSenderFalsePositiveFlow(channelId, messageId);
        const tmpResult = tmp(tmp2[191]);
      } else if (tmp(tmp2[190]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
        const obj2 = { entryPoint: tmp(tmp2[185]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON };
        const result1 = require("AgeVerificationActionCreators").showAgeVerificationGetStartedModal(obj2);
        const obj6 = require("AgeVerificationActionCreators");
        const result2 = tmp(tmp2[185]).trackAgeVerificationDmClicked(tmp(tmp2[185]).AgeVerificationDmCta.RETRY, channelId);
        const tmpResult7 = tmp(tmp2[185]);
      } else if (tmp(tmp2[190]).CtaButtonType.CONNECT_TO_TEEN === callback) {
        if (!tmpResult8.resumeFamilyCenterConnection()) {
          const obj3 = { screen: constants9.FAMILY_CENTER };
          tmp(tmp2[142]).openUserSettings(obj3);
          const tmpResult9 = tmp(tmp2[142]);
        }
        tmpResult8 = tmp(tmp2[192]);
        const result3 = tmp(tmp2[185]).trackAgeVerificationDmClicked(tmp(tmp2[185]).AgeVerificationDmCta.CONNECT_TO_TEEN, channelId);
        const tmpResult10 = tmp(tmp2[185]);
      } else if (tmp(tmp2[190]).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW === callback) {
        const result4 = tmp(tmp2[193]).handleManualReviewCta();
        const tmpResult11 = tmp(tmp2[193]);
        const result5 = tmp(tmp2[185]).trackAgeVerificationDmClicked(tmp(tmp2[185]).AgeVerificationDmCta.MANUAL_REVIEW, channelId);
        const tmpResult12 = tmp(tmp2[185]);
      }
    };
    obj.handleMessageAccessibilityAction = function handleMessageAccessibilityAction(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
      const messageAccessibilityActionFromLabel = MessageAccessibilityActions.getMessageAccessibilityActionFromLabel(nativeEvent.nativeEvent.action);
      const params = obj.params;
      const message = params.getMessage(messageId);
      if (null != message) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (tmp(7409).MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel) {
          if (message.type === constants8.FRIEND_REQUEST_ACCEPTED) {
            if (null != channel) {
              if (channel.isDM()) {
                id = channel.getRecipientId();
              }
              if (null != id) {
                const obj3 = { userId: id, channelId: null, messageId: null };
                let id1;
                if (channel != null) {
                  id1 = channel.id;
                }
                obj3.channelId = id1;
                obj3.messageId = messageId;
                showUserProfileActionSheetDefault(obj3);
              }
            }
          }
          const author2 = message.author;
          if (author2 != null) {
            id = author2.id;
          }
        } else if (tmp(7409).MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj4 = { message, channel, chatInputRef: params.chatInputRef, actionSource: "a11y_action" };
            replyToMessageDefault(obj4);
          }
        } else if (tmp(7409).MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result = tmp(10824).handleAddNewReactions(channel, message.id);
            const tmpResult = tmp(10824);
          }
        } else if (tmp(7409).MessageAccessibilityAction.MESSAGE_ACTIONS_MENU === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj5 = { channel, message, canAddNewReactions: canAddNewReactionsDefault(channel), user: null, chatInputRef: null };
            let id2;
            if (message != null) {
              const author = message.author;
              if (author != null) {
                id2 = author.id;
              }
            }
            obj5.user = UserStore.getUser(id2);
            obj5.chatInputRef = obj.params.chatInputRef;
            const result1 = tmp(11152).showLongPressMessageActionSheet(obj5);
            const tmpResult3 = tmp(11152);
          }
        } else if (tmp(7409).MessageAccessibilityAction.ADD_QUICK_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result2 = tmp(7410).handleAddDefaultDoubleTapReaction(message, channel);
            const tmpResult4 = tmp(7410);
          }
        } else if (tmp(7409).MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj6 = { channelId: channel.id };
            showChatGDMCustomizeActionSheetDefault(obj6);
          }
        } else if (tmp(7409).MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel) {
          openPinnedMessagesDefault(message.channel_id, "pinned-message-system-message");
        } else if (tmp(7409).MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel) {
          jumpToReferencedMessageDefault(message);
        }
      }
    };
    obj.handleTapForwardFooter = function handleTapForwardFooter(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const params = obj.params;
      const message = params.getMessage(obj.getNativeSyntheticEventData(nativeEvent).messageId);
      if (null != message) {
        handleForwardBreadcrumbDefault(message);
      }
    };
    obj.handleTapInlineForward = function handleTapInlineForward(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const params = obj.params;
      const message = params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const inlineForwardOptions = tmp(11412).getInlineForwardOptions(message, nativeSyntheticEventData);
        if (null != inlineForwardOptions) {
          const _Object = Object;
          if (nativeEvent.nativeEvent.triggerHaptic) {
            const result = tmp(4801).triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            const tmpResult3 = tmp(4801);
          }
          const obj2 = { message, source: null, forwardOptions: null };
          let str = nativeEvent.nativeEvent.location;
          if (str == null) {
            str = "inline-button";
          }
          obj2.source = str;
          let tmp7;
          if (0 !== Object.keys(inlineForwardOptions).length) {
            tmp7 = inlineForwardOptions;
          }
          obj2.forwardOptions = tmp7;
          tmp(11176).openForwardModal(obj2);
          const tmpResult4 = tmp(11176);
        }
        const tmpResult = tmp(11412);
      }
    };
    obj.handleTapSoundmoji = function handleTapSoundmoji(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      openSoundmojiActionSheetDefault(nativeSyntheticEventData);
    };
    obj.handleTapClanTagChiplet = function handleTapClanTagChiplet(nativeEvent) {
      obj = obj(dependencyMap[41]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      if (tmp4) {
        const _HermesInternal = HermesInternal;
        const obj2 = require("ActionSheetActionCreators");
        const obj3 = { guildId: nativeSyntheticEventData.guildId };
        obj2.openLazy(obj(tmp2[40])(tmp2[70], tmp2.paths), "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj3);
        const tmp6 = obj(tmp2[40])(tmp2[70], tmp2.paths);
      }
    };
    obj.handleTapContentInventoryEntryEmbed = function handleTapContentInventoryEntryEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = { message, authorId: null, contentId: null, tappedElement: null };
        ({ authorId: obj3.authorId, contentId: obj3.contentId, tappedElement: obj3.tappedElement } = tmp4);
        const result = ContentInventoryActionCreators.onTapContentInventoryEntryEmbed(obj2);
        const tmpResult = ContentInventoryActionCreators;
      }
    };
    obj.handleTapCheckpointCard = function handleTapCheckpointCard(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = { message, authorId: tmp4.authorId };
        onTapCheckpointCard.onTapCheckpointCard(obj2);
        const tmpResult = onTapCheckpointCard;
      }
    };
    obj.handleTapAppMessageEmbed = function handleTapAppMessageEmbed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj2.message = message;
        const result = createAppMessageEmbed.handleTapAppMessageEmbed(obj2);
        const tmpResult = createAppMessageEmbed;
      }
    };
    obj.handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj2.message = message;
        const result = previewSharedClientTheme.handleTapPreviewSharedClientTheme(obj2);
        const tmpResult = previewSharedClientTheme;
      }
    };
    obj.handleSharedClientThemeViewed = function handleSharedClientThemeViewed(nativeEvent) {
      obj = MessageDataSnowflakeUtils;
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      const message = obj.params.getMessage(nativeSyntheticEventData.messageId);
      if (null != message) {
        const obj2 = {};
        const merged = Object.assign(nativeSyntheticEventData);
        obj2.message = message;
        const result = sharedClientThemeViewed.handleSharedClientThemeViewed(obj2);
        const tmpResult = sharedClientThemeViewed;
      }
    };
    obj.getParams = global;
    return obj;
  }
}
const prototype = MessagesHandlers.prototype;
Object.defineProperty(prototype, "params", {
  get: function params() {
    return this.getParams();
  },
  set: undefined
});
prototype["replaceCorrectMessageParams"] = function replaceCorrectMessageParams(nativeEvent) {
  const self = this;
  nativeEvent = nativeEvent.nativeEvent;
  const message = this.params.getMessage(nativeEvent.messageId);
  if (null != message) {
    if (message.type === constants8.THREAD_STARTER_MESSAGE) {
      const messageReference = message.messageReference;
      if (null != messageReference) {
        if (null != MessageStore.getMessage(messageReference.channel_id, messageReference.message_id)) {
          const obj2 = {};
          const merged = Object.assign(nativeEvent);
          ({ message_id: obj4.messageId, channel_id: obj4.channelId } = messageReference);
          const tmp13 = obj2;
        } else {
          const obj3 = {};
          const merged1 = Object.assign(nativeEvent);
          const obj7 = {};
          const merged2 = Object.assign(nativeEvent);
          obj7.mediaIndex = 0;
          obj7.mediaType = "";
          obj3.nativeEvent = obj7;
          const result = self.handleLongPressMessage(obj3);
        }
        return tmp13;
      }
    } else {
      const obj = {};
      ({ id, channel_id } = message);
      const merged3 = Object.assign(nativeEvent);
      obj.messageId = id;
      obj.channelId = channel_id;
      return obj;
    }
  }
};

export { MessagesHandlers };
