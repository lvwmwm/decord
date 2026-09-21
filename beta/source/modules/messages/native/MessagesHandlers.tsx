// Module ID: 11662
// Function ID: 11663
// Name: MessagesHandlers
// Dependencies: [109, 5, 32, 4985, 7411, 11663, 7773, 8341, 7944, 7840, 10336, 4401, 7900, 502, 2045, 11561, 2109, 2067, 4742, 9621, 4978, 4399, 4798, 2099, 4580, 5498, 8085, 1376, 8196, 1078, 7983, 1378, 8696, 1118, 21, 7429, 11664, 11666, 1984, 11667, 11668, 11703, 11706, 8244, 4965, 7441, 1119, 8129, 11733, 11466, 4725, 11471, 7770, 11735, 11736, 4738, 7982, 11737, 11738, 10423, 10425, 10698, 1368, 8300, 7513, 10639, 8298, 11771, 9981, 8453, 11, 11773, 11774, 10335, 4989, 11779, 8234, 4726, 4727, 11804, 1105, 11789, 11874, 5653, 4938, 7755, 8231, 11875, 11876, 1389, 11881, 11889, 11890, 11891, 11892, 11893, 9594, 4455, 11894, 10206, 11598, 4743, 9760, 8006, 1613, 7940, 11895, 5668, 10564, 7969, 4746, 10591, 10592, 8654, 11918, 11096, 7586, 9999, 11921, 8139, 11935, 9317, 1245, 4968, 7573, 8669, 5630, 10469, 7459, 9425, 5836, 11565, 4961, 11570, 11943, 7666, 7626, 11944, 10959, 11945, 9046, 1253, 11212, 11213, 4458, 4754, 8989, 11947, 10424, 11948, 7703, 4982, 1982, 5110, 8390, 11950, 11952, 11956, 8264, 11957, 8674, 8280, 8278, 11958, 11963, 11991, 11992, 4769, 7436, 4457, 12003, 12004, 12005, 4912, 7585, 12006, 12007, 7847, 8687, 8689, 12009, 11840, 8541, 8535, 12042, 9506, 12044, 8870, 8230, 11224, 11739, 12059, 12060, 12061, 11805, 12062, 12065, 12068, 12069, 12075, 12078, 2]

// Module 11662 (MessagesHandlers)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import LinkingDefault from "Linking" /* 4455 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import HapticUtils from "HapticUtils" /* 4726 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4727 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4938 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import AgeGateUtils from "AgeGateUtils" /* 4968 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5653 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5836 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 7459 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7703 */;
import getInviteURLDefault from "getInviteURL" /* 8006 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8230 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 8231 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8234 */;
import isCrosspostDefault from "isCrosspost" /* 8300 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8654 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8674 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9425 */;
import trackApplicationOpenDefault from "trackApplicationOpen" /* 9594 */;
import SummaryActionCreatorsDefault from "SummaryActionCreators" /* 10335 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10423 */;
import _modDef10424 from "module_10424" /* 10424 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 10425 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10469 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10698 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10959 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 11224 */;
import MarkupReactCommandRule from "MarkupReactCommandRule" /* 11466 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11471 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11598 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11664 */;
import MessageDataSnowflakeUtils from "MessageDataSnowflakeUtils" /* 11667 */;
import contentHandlers2 from "contentHandlers" /* 11706 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 11737 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11739 */;
import trackRepliedMessageClickedDefault from "trackRepliedMessageClicked" /* 11773 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11789 */;
import replyToMessageDefault from "replyToMessage" /* 11804 */;
import PollsActionCreatorsDefault from "PollsActionCreators" /* 11840 */;
import canEditMessageDefault from "canEditMessage" /* 11874 */;
import UploadActionCreatorsDefault from "UploadActionCreators" /* 11875 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11921 */;
import PremiumGiftingIntentUtils from "PremiumGiftingIntentUtils" /* 11944 */;
import ForumOriginalPoster from "ForumOriginalPoster" /* 12003 */;
import MediaChannelActionCreatorsAll from "MediaChannelActionCreators" /* 12006 */;
import jumpToReferencedMessageDefault from "jumpToReferencedMessage" /* 12059 */;
import handleForwardBreadcrumbDefault from "handleForwardBreadcrumb" /* 12060 */;
import openSoundmojiActionSheetDefault from "openSoundmojiActionSheet" /* 12062 */;
import ContentInventoryActionCreators from "ContentInventoryActionCreators" /* 12065 */;
import onTapCheckpointCard from "onTapCheckpointCard" /* 12068 */;
import createAppMessageEmbed from "createAppMessageEmbed" /* 12069 */;
import previewSharedClientTheme from "previewSharedClientTheme" /* 12075 */;
import sharedClientThemeViewed from "sharedClientThemeViewed" /* 12078 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 7411 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11663 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7773 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 8341 */;
import QuestStore from "QuestStore" /* 7944 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7840 */;
import SummaryStore from "SummaryStore" /* 10336 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4401 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7900 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GiftCodeStore from "GiftCodeStore" /* 11561 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import InviteStore from "InviteStore" /* 4742 */;
import LocalActivityStore from "LocalActivityStore" /* 9621 */;
import MessageStore from "MessageStore" /* 4978 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import PresenceStore from "PresenceStore" /* 4798 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5498 */;
import UploadStore from "UploadStore" /* 8085 */;
import UserStore from "UserStore" /* 1376 */;

const InviteCodeUtils = trackInviteEmbedActioned(4743);
const CodedLink = trackInviteEmbedActioned(4746);
const InviteTypeUtils = trackInviteEmbedActioned(7982);
const InstantInviteActionCreators = trackInviteEmbedActioned(8654);
const VoiceChannelListInviteExperiment = trackInviteEmbedActioned(10591);
const VoiceChannelListInviteEmbed = trackInviteEmbedActioned(10592);
const SocialLayerStorefrontNativeActionCreators = trackInviteEmbedActioned(11096);
const build_overrides_BuildOverrideUtils = trackInviteEmbedActioned(11918);
require = fn;
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
let closure_13 = fn(7773).isGuildScheduledEventActive;
const SeparatorAction = fn(8196).SeparatorAction;
const Constants = fn(1078);
({ ActivityActionTypes: closure_36, ActivityFlags: closure_37, ActivityGamePlatforms: closure_38, ActivityTypes: closure_39, AnalyticEvents: closure_40, AnalyticsGameOpenTypes: closure_41, AnalyticsLocations: closure_42, AnalyticsObjects: closure_43, AnalyticsObjectTypes: closure_44, AnalyticsPages: closure_45, AnalyticsSections: closure_46, LinkingTypes: closure_47, ME: closure_48, MessageFlags: closure_49, MessageStates: closure_50, MessageTypes: closure_51, Permissions: closure_52, Routes: closure_53, UpsellTypes: closure_54, UserSettingsSections: closure_55, WebBrowserType: closure_56 } = Constants);
const InviteTypes = fn(7983).InviteTypes;
const PremiumConstants = fn(1378);
({ PremiumTypes: closure_58, PremiumUpsellTypes: closure_59 } = PremiumConstants);
let closure_60 = fn(8696).SafetySystemNotificationCtaType;
let closure_61 = fn(1118).OpenThreadAnalyticsLocations;
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
        obj(dependencyMap[38])(dependencyMap[37], dependencyMap.paths).then((handleMessagesTapImage) => {
          obj = { tapImageData: nativeEvent, allowWithinModal: false, message: messageData.message, messageChannel: messageData.messageChannel, selectedChannelId: obj.params.selectedChannelId };
          const result = handleMessagesTapImage.handleMessagesTapImage(obj);
        });
        const promise = obj(dependencyMap[38])(dependencyMap[37], dependencyMap.paths);
      }
    };
    obj.handleTapChannel = function handleTapChannel(nativeEvent) {
      if (!data.isModalOrActionsheetObstructing()) {
        obj = obj(dependencyMap[39]);
        data = obj.getNativeSyntheticEventData(nativeEvent).data;
        obj(dependencyMap[38])(dependencyMap[40], dependencyMap.paths).then((handleMessagesTapChannel) => {
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
        const promise = obj(dependencyMap[38])(dependencyMap[40], dependencyMap.paths);
      }
    };
    obj.handleLongPressChannel = function handleLongPressChannel(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const data = obj.getNativeSyntheticEventData(nativeEvent).data;
        asyncRequireImpl(11703, dependencyMap.paths).then((handleMessagesLongPressChannel) => {
          const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel({ data });
        });
        const promise = asyncRequireImpl(11703, dependencyMap.paths);
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
      const data = channel(dependencyMap[39]).getNativeSyntheticEventData(nativeEvent).data;
      const channelId = data.channelId;
      channel = channel.getChannel(channelId);
      obj = channel(dependencyMap[39]);
      if (tmp3) {
        if (tmpResult.checkIsCallActive(channelId, data.messageId)) {
          tmp(tmp2[44]).handleJoinCall(channel);
          const tmpResult3 = tmp(tmp2[44]);
        } else {
          const obj2 = { key: "CallTap", options: null, hasIcons: true };
          const obj3 = { label: null, IconComponent: null, onPress: null };
          const intl = tmp(tmp2[46]).intl;
          obj3.label = intl.string(tmp(tmp2[46]).t.focH1t);
          obj3.IconComponent = tmp(tmp2[47]).PhoneCallIcon;
          obj3.onPress = function onPress() {
            obj = obj(dependencyMap[44]);
            obj.handleStartCall(channel);
          };
          items = [obj3, ];
          const obj4 = { label: null, IconComponent: null, onPress: null };
          const intl2 = tmp(tmp2[46]).intl;
          obj4.label = intl2.string(tmp(tmp2[46]).t.oCqlGG);
          obj4.IconComponent = tmp(tmp2[48]).VideoIcon;
          obj4.onPress = function onPress() {
            obj = obj(dependencyMap[44]);
            obj.handleStartCall(channel, true);
          };
          items[1] = obj4;
          obj2.options = items;
          const result = tmp(tmp2[45]).showSimpleActionSheet(obj2);
          const tmpResult4 = tmp(tmp2[45]);
        }
        tmpResult = tmp(tmp2[43]);
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
            applicationCommandManager.setPartialCommand(commandId, commandName, obj(dependencyMap[52]).ApplicationCommandTriggerLocations.MENTION);
          }
        }
      };
      const result = MarkupReactCommandRule.handleTapCommandMention(obj3);
    };
    obj.handleLongPressCommandMention = function handleLongPressCommandMention(nativeEvent) {
      ({ commandName, commandId } = nativeEvent.nativeEvent);
      obj = obj(dependencyMap[49]);
      const result = obj.handleLongPressCommandMention(commandName, commandId);
    };
    obj.handleTapGameMention = function handleTapGameMention(nativeEvent) {
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = MessageDataSnowflakeUtils;
        const gameId = obj.getNativeSyntheticEventData(nativeEvent);
        asyncRequireImpl(11735, dependencyMap.paths).then((handleMessagesTapGameMention) => {
          const result = handleMessagesTapGameMention.handleMessagesTapGameMention({ gameId: gameId.gameId });
        });
        const promise = asyncRequireImpl(11735, dependencyMap.paths);
      }
    };
    obj.handleTapGuildEventLink = function handleTapGuildEventLink(node) {
      node = node.node;
      if (null != node) {
        obj = obj(dependencyMap[54]);
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
              tmp8 = !tmp2(tmp3[56]).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(tmp3[56]);
            }
            let flag = !tmp8;
            if (!tmp8) {
              tmp4(tmp3[57])(invite);
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
      obj(dependencyMap[38])(dependencyMap[58], dependencyMap.paths).then((handleMessagesTapLink) => {
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
        const nativeSyntheticEventData = tmp(11667).getNativeSyntheticEventData(nativeEvent);
        const userId = nativeSyntheticEventData.userId;
        const messageData = obj.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (isCrosspostDefault(message)) {
            if (null != message.messageReference.guild_id) {
              const items1 = [tmp13(7429).USERNAME];
              obj3.handleOpenProfile(nativeEvent, items1);
            }
          }
          if (null != userId) {
            const user = UserStore.getUser(userId);
            const messageChannel = messageData.messageChannel;
            const isPrivateResult = messageChannel.isPrivate();
            const canResult = PermissionStore.can(constants9.SEND_MESSAGES, messageChannel);
            let tmp7 = undefined === user;
            const isReadOnlyThread = tmp(7513).computeIsReadOnlyThread(messageChannel);
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
                current.insertText(tmp(10639).getMentionTextWithUser(messageChannel, user), null, true);
                const tmpResult4 = tmp(10639);
              }
            }
            const tmpResult3 = tmp(7513);
          }
          tmp13 = importDefault;
        }
        const tmpResult = tmp(11667);
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
            ActionSheetActionCreatorsDefault.openLazy(tmp(1984)(11771, tmp2.paths), "PublicGuildAnnouncementProfile");
          } else {
            let user1 = user;
            if (null == user) {
              user1 = UserStore.getUser(message.author.id);
            }
            if (isCrosspostDefault(message)) {
              const guild_id = message.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal2 = HermesInternal;
                const tmp10Result = tmp10(4725);
                const obj2 = { guildId: guild_id };
                tmp10Result.openLazy(tmp(1984)(9981, tmp2.paths), "GuildProfileActionSheet:" + guild_id, obj2);
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
                    if (tmp10(8300)(messageByReference.message)) {
                      tmp7 = user1;
                      if (null != messageByReference.message.messageReference) {
                        tmp7 = user1;
                        if (null != messageByReference.message.messageReference.guild_id) {
                          const guild_id2 = messageByReference.message.messageReference.guild_id;
                          const _HermesInternal = HermesInternal;
                          const tmp10Result2 = tmp10(4725);
                          const obj3 = { guildId: guild_id2 };
                          tmp10Result2.openLazy(tmp(1984)(9981, tmp2.paths), "GuildProfileActionSheet:" + guild_id2, obj3);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          tmpResult = tmp(8298);
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
          guildId = __V;
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
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11774, dependencyMap.paths), "SummaryActionSheet", obj3);
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
          guildId = __V;
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
              const tmpResult = tmp(10423);
              const longPressSelectedMedia = tmpResult.getLongPressSelectedMedia(message, mediaIndex, mediaType, tmp(4989).asComponentId(nativeSyntheticEventData.componentId), componentMediaIndex);
              const tmpResult3 = tmp(4989);
              const obj3 = { analyticsLocation: null, canAddNewReactions: null, channel: null, chatInputRef: null, message: null, selectedMedia: null, user: null };
              const obj4 = { section: constants5.CHANNEL, object: constants2.MESSAGE };
              obj3.analyticsLocation = obj4;
              obj3.canAddNewReactions = canAddNewReactionsDefault(messageChannel);
              obj3.channel = messageChannel;
              obj3.chatInputRef = obj2.params.chatInputRef;
              obj3.message = message;
              obj3.selectedMedia = longPressSelectedMedia;
              obj3.user = user;
              const result = tmp(11779).showLongPressMessageActionSheet(obj3);
              const tmpResult4 = tmp(11779);
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
        const result = tmp(4726).triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (message.hasFlag(constants6.HAS_THREAD)) {
          const tmpResult3 = tmp(1105);
          tmpResult3.transitionToGuild(messageChannel.guild_id, tmp6(11).castMessageIdAsChannelId(message.id));
          const tmp6Result = tmp6(11);
        } else {
          tmp(11789).handleCreateThread(messageChannel, message, "Message Shortcut");
          const tmpResult4 = tmp(11789);
        }
        tmp6 = importDefault;
        const tmpResult = tmp(4726);
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
                        const result = tmp(7755).extractAutomodMessageFields(message);
                        ({ embedChannel, flaggedMessageId } = result);
                        if (tmp5) {
                          id = undefined;
                          if (embedChannel != null) {
                            id = embedChannel.id;
                          }
                          const result1 = obj.handleTransitionToMessage(guildId, id, flaggedMessageId);
                        }
                        tmp5 = null != flaggedMessageId && null != embedChannel;
                        const tmpResult2 = tmp(7755);
                      }
                      tmpResult = tmp(7755);
                    }
                  }
                }
              }
            }
            actions_BoostingActionCreatorsAll.openApplyBoostModal(guildId);
            const obj3 = { location: null };
            const obj6 = { section: constants5.CHANNEL_TEXT_AREA, object: constants2.BOOST_ANNOUNCEMENT_UPSELL };
            obj3.location = obj6;
            AppAnalyticsUtilsDefault.trackWithMetadata(BottomSheet.PREMIUM_GUILD_PROMOTION_OPENED, obj3);
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
          obj = obj(dependencyMap[88]);
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
                    tmp31Result = tmp31(tmp32[62]);
                  }
                  let hasFlagResult = null != applicationActivity.flags;
                  if (hasFlagResult) {
                    hasFlagResult = tmp31(tmp32[89]).hasFlag(applicationActivity.flags, constants2.EMBEDDED);
                    const tmp31Result6 = tmp31(tmp32[89]);
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
                    obj = { presenceActivity: applicationActivity, currentUserPresenceActivity: require("getCurrentUserPresenceActivity")(LocalActivityStore, closure_1_32, id), currentUserId: id.getId(), message, application: application1, isEmbeddedApplication: hasFlagResult, isFrameApplication: false, isGameLaunchable: flag };
                    const canJoin = tmp31(tmp32[90]).getCanJoin(obj);
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
                          items = [tmp33(tmp32[35]).INVITE_EMBED];
                          const result = tmp31(tmp32[94]).startAuthorizationNoHook(application1, items);
                        }
                        tmp31Result9 = tmp31(tmp32[93]);
                      }
                      tmp31Result8 = tmp31(tmp32[92]);
                    }
                    const tmp31Result7 = tmp31(tmp32[90]);
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
                  obj11 = obj(dependencyMap[62]);
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
                const items3 = [tmp24(tmp25[35]).INVITE_EMBED];
                obj4.analyticsLocations = items3;
                trackApplicationOpenDefault(obj4);
              }
            }
          }
        }
      }
    };
    obj.handleTapStreamRequest = function handleTapStreamRequest(message) {
      obj = obj(dependencyMap[98]);
      if (_slicedToArray(obj.canFulfillStreamRequest(message, true), 1)[0]) {
        channel = ChannelStore.getChannel(message.channel_id);
        if (null != channel) {
          const oSRequirement = tmp(tmp2[99]).getOSRequirement();
          const tmpResult = tmp(tmp2[99]);
          const obj2 = { channel, hasPermission: true, isActive: false, osRequirement: oSRequirement };
          tmp(tmp2[99]).getStreamPressHandler(obj2)();
          const tmpResult2 = tmp(tmp2[99]);
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
              inviteKeyFromExtraData = obj(dependencyMap[101]).generateInviteKeyFromExtraData(obj2);
              const obj4 = obj(dependencyMap[101]);
            }
            let tmp19;
            if (null != inviteKeyFromExtraData) {
              tmp19 = getInviteURLDefault(inviteKeyFromExtraData);
            }
            obj(dependencyMap[102]).openShareEvent(guildScheduledEvent, tmp19);
            return { action: "share" };
          } else {
            if (primary) {
              if (closure_1_13(guildScheduledEvent)) {
                const result = obj(dependencyMap[102]).transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                let obj5 = { action: "transition" };
                const obj3 = obj(dependencyMap[102]);
              }
              return obj5;
            }
            obj = obj(dependencyMap[102]);
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
      obj = obj(dependencyMap[104]);
      if (!obj.isMetaQuest()) {
        const result = tmp(tmp2[105]).findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
        if (null != result) {
          const obj2 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[106]).openQuestHome(obj2);
          const tmpResult3 = tmp(tmp2[106]);
        } else {
          const obj3 = { fromContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[106]).openQuestHome(obj3);
          const tmpResult4 = tmp(tmp2[106]);
        }
        const tmpResult = tmp(tmp2[105]);
      }
    };
    obj._questsEmbedOnAccept = function _questsEmbedOnAccept(code) {
      obj = obj(dependencyMap[104]);
      if (obj.isMetaQuest()) {
        tmp(tmp2[106]).openDiscordQuestsFAQ();
        const tmpResult = tmp(tmp2[106]);
      } else {
        const result = tmp(tmp2[105]).findQuestOrReplacement(code, QuestStore.quests, QuestStore.excludedQuests);
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
                const obj2 = { questContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE, questContentCTA: tmp(tmp2[109]).QuestContentCTA.ACCEPT_QUEST, sourceQuestContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
                tmp(tmp2[108]).enrollInQuest(result.id, obj2);
                const tmpResult7 = tmp(tmp2[108]);
              }
              const obj3 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
              tmp(tmp2[106]).openQuestHome(obj3);
              const tmpResult8 = tmp(tmp2[106]);
            }
          }
          const obj4 = { scrollToQuestId: result.id, fromContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[106]).openQuestHome(obj4);
          const tmpResult9 = tmp(tmp2[106]);
        } else {
          const obj5 = { fromContent: tmp(tmp2[107]).QuestContent.QUEST_EMBED_MOBILE };
          tmp(tmp2[106]).openQuestHome(obj5);
          const tmpResult10 = tmp(tmp2[106]);
        }
        tmp4 = QuestStore;
        const tmpResult6 = tmp(tmp2[105]);
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
                  guild = invite.guild;
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
            if (tmp8.type !== tmp(4746).CodedLinkType.INVITE) {
              if (tmp8.type !== tmp(4746).CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp8.type === tmp(4746).CodedLinkType.TEMPLATE) {
                  guild_templates_GuildTemplateActionCreatorsDefault.showModal(tmp8.code);
                } else {
                  if (tmp8.type !== tmp(4746).CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp8.type !== tmp(4746).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      if (tmp8.type === tmp(4746).CodedLinkType.EXPERIMENT) {
                        const experimentFromEmbedURL = tmp(8139).getExperimentFromEmbedURL(tmp8.code);
                        if (null != experimentFromEmbedURL) {
                          const experimentTreatmentFromEmbedURL = tmp(8139).getExperimentTreatmentFromEmbedURL(tmp8.code);
                          const tmpResult15 = tmp(8139);
                          const result = tmp(11935).handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL);
                          const tmpResult16 = tmp(11935);
                        }
                        const tmpResult = tmp(8139);
                      } else if (tmp8.type === tmp(4746).CodedLinkType.EVENT) {
                        const tmp21 = _slicedToArray(tmp8.code.split("-"), 3);
                        const obj3 = { invite: null, isMember: GuildMemberStore.isMember(tmp21[0], id), primary, secondary, guildEventId: tmp21[1], recurrenceId: tmp21[2] };
                        const result1 = obj2.handleTapGuildEventInvite(obj3);
                      } else if (tmp8.type === tmp(4746).CodedLinkType.CHANNEL_LINK) {
                        const obj4 = { guildId: null, channelId: null, message: null };
                        [obj7.guildId, obj7.channelId] = tmp8.code.split("/");
                        obj4.message = message2;
                        const result2 = obj2.handleTapVoiceChannelPreview(obj4);
                        const tmp18 = _slicedToArray(tmp8.code.split("/"), 2);
                      } else if (tmp8.type === tmp(4746).CodedLinkType.APP_DIRECTORY_PROFILE) {
                        application = ApplicationDirectoryApplicationsStore.getApplication(tmp8.code);
                        if (null != application) {
                          ({ id: obj6.applicationId, custom_install_url: obj6.customInstallUrl, install_params: obj6.installParams, integration_types_config: obj6.integrationTypesConfig } = application);
                          tmp(9317).installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" });
                          const obj5 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_directory_profile_embed" };
                          const tmpResult17 = tmp(9317);
                        }
                      } else if (tmp8.type === tmp(4746).CodedLinkType.QUESTS_EMBED) {
                        obj2._questsEmbedOnPress(tmp8.code);
                      } else {
                        if (tmp8.type !== tmp(4746).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                          if (tmp8.type !== tmp(4746).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                            if (tmp8.type !== tmp(4746).CodedLinkType.APP_OAUTH2_LINK) {
                              const _Error = Error;
                              const _HermesInternal = HermesInternal;
                              throw Error("Unknown coded link type: " + tmp8.type);
                            } else {
                              const application1 = ApplicationStore.getApplication(tmp8.code);
                              if (null != application1) {
                                const obj8 = { application_id: application1.id };
                                AppAnalyticsUtilsDefault.trackWithMetadata(BottomSheet.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj8);
                                ({ id: obj30.applicationId, customInstallUrl: obj30.customInstallUrl, installParams: obj30.installParams, integrationTypesConfig: obj30.integrationTypesConfig } = application1);
                                tmp(9317).installApplication({ applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" });
                                const obj9 = { applicationId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, source: "app_oauth2_link_embed" };
                                const tmpResult18 = tmp(9317);
                              }
                            }
                          }
                        }
                        const obj10 = { skuId: _slicedToArray(tmp8.code.split("-"), 1)[0], analyticsLocations: null };
                        items = [AnalyticsLocationDefault.GIFT_CODE_EMBED];
                        obj10.analyticsLocations = items;
                        const result3 = tmp(11096).openSocialLayerStorefrontProductDetailsModal(obj10);
                        const tmpResult19 = tmp(11096);
                      }
                    }
                  }
                  tmp(11918).toggleOverride(tmp8.code);
                  const tmpResult20 = tmp(11918);
                }
              }
            }
            invite = InviteStore.getInvite(tmp8.code);
            let id1;
            if (invite != null) {
              guild = invite.guild;
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
                const guildInviteExtendedType = tmp(7982).getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === tmp(7982).GuildInviteExtendedType.VOICE_CHANNEL;
                const tmpResult21 = tmp(7982);
              }
              if (enabled) {
                const obj11 = { guildId: id2, location: "mobile_invite_embed" };
                enabled = tmp(10591).getVoiceChannelListInviteExperiment(obj11).enabled;
                const tmpResult22 = tmp(10591);
              }
              if (enabled) {
                enabled = tmp(10592).canShowVoiceChannelListInviteEmbed(invite);
                const tmpResult23 = tmp(10592);
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
                        tmp(7586).transitionToGuild(guildId);
                        const tmpResult25 = tmp(7586);
                      }
                      const result4 = tmp(4965).navigateToVoiceChannel(channel1, "Mobile Invite Embed");
                      str8 = "voice channel preview";
                      const tmpResult26 = tmp(4965);
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
                  obj14.context = tmp(9999).GuildProfileCTAContext.INVITE;
                  obj14.inviteKey = tmp8.code;
                  obj20.openLazy(tmp(1984)(9981, dependencyMap.paths), combined, obj14);
                  str8 = "show profile";
                  const tmp42 = tmp(1984)(9981, dependencyMap.paths);
                } else if (isMemberResult) {
                  const result5 = obj2.handleTransitionToInviteChannel(invite);
                  str8 = "transition";
                } else {
                  const result6 = obj2.handleAcceptInstantInvite(invite, tmp(4743).getInviteInstanceId(tmp8.code, message2.id));
                  str8 = "accept";
                  const tmpResult27 = tmp(4743);
                }
              }
              const INVITE_EMBED = AnalyticsLocationDefault.INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, tmp52(7429).VOICE_CHANNEL_LIST_INVITE_EMBED];
                let items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              tmp52 = importDefault;
              tmpResult24 = tmp(7982);
              let id5;
              if (invite != null) {
                const guild3 = invite.guild;
                if (guild3 != null) {
                  id5 = guild3.id;
                }
              }
              const result7 = tmp(8654).trackInviteServerClicked(id5, str8, items2);
              const tmpResult28 = tmp(8654);
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
        AnalyticsUtilsDefault.track(BottomSheet.CHANNEL_LINK_PREVIEW_JOINED, obj);
        const current = obj.getParams().chatInputRef.current;
        if (current != null) {
          current.dismissKeyboard();
        }
        const tmp10 = importDefault;
        if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
          if (!tmp4Result.shouldShowSpoilerGateForChannelId(channelId)) {
            if (channel.isGuildStageVoice()) {
              tmp4(8669).connectAndOpen(channel);
              const tmp4Result4 = tmp4(8669);
            } else {
              const voiceChannel = tmp10(5630).selectVoiceChannel(channelId);
              const tmp10Result = tmp10(5630);
              tmp4(4965).openChannelCallModal(channel);
              const tmp4Result5 = tmp4(4965);
            }
          }
          tmp4Result = tmp4(7573);
        }
        obj2 = AgeGateUtils;
        router_utils.transitionTo(closure_2_53.CHANNEL(guildId, channelId));
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
      obj = age_gate_AgeGateUtils;
      if (!obj.handleNSFWGuildInvite(invite)) {
        if (null != invite.code) {
          if (invite.type === InviteTypes.GUILD) {
            if (tmpResult.isAtGuildCapAndNonPremium()) {
              const obj2 = { initialUpsellKey: constants10.GUILD_CAP, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
              const obj4 = { page: constants4.INVITE_EMBED };
              obj2.analyticsLocation = obj4;
              items = [AnalyticsLocationDefault.INVITE_EMBED];
              obj2.analyticsLocations = items;
              const obj5 = { type: constants11.GUILD_CAP_MODAL_UPSELL };
              obj2.analyticsProperties = obj5;
              const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
            }
            tmpResult = GuildCapUpsellHooks;
          }
          const obj6 = { inviteKey: invite.code, context: null, callback: null };
          if (null != inviteInstanceId) {
            const obj7 = { invite_instance_id: inviteInstanceId };
            let obj9 = obj7;
          } else {
            obj9 = {};
          }
          const obj10 = { location: "Invite Button Embed" };
          const merged = Object.assign(obj9);
          obj6.context = obj10;
          obj6.callback = obj.handleTransitionToInviteChannel;
          InstantInviteActionCreatorsDefault.acceptInvite(obj6);
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
              tmp12(11565)();
            } else {
              tmp12(1245).track(BottomSheet.OPEN_MODAL, { type: "gift_accept", location: null });
              const tmp12Result = tmp12(1245);
              const obj3 = { code: giftCode, customMessage: null, soundId: null, emojiName: null };
              let content;
              const tmp12Result2 = tmp12(4961);
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
              tmp12Result2.pushLazy(asyncRequireImpl(11570, dependencyMap.paths), obj3);
              const tmp15 = asyncRequireImpl(11570, dependencyMap.paths);
            }
          }
        } else {
          EmailVerificationModalActionCreatorsDefault.open();
        }
      }
    };
    obj.handleTapReferralRedeem = function handleTapReferralRedeem() {
      obj = obj(dependencyMap[134]);
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
        obj(tmp2[136]).openUserSettings(obj4);
        const tmpResult = obj(tmp2[136]);
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
        AnalyticsUtilsDefault.track(BottomSheet.GIFT_INTENT_ACTION_BUTTON_CLICKED, obj3);
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
        obj.track(BottomSheet.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj2);
        const obj4 = { channelId: giftIntentCtaContext.channel.id, giftIntentType: giftIntentCtaContext.giftIntentType };
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11945, dependencyMap.paths), obj4);
      }
    };
    obj.handleGiftIntentCardViewed = function handleGiftIntentCardViewed(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const parseGiftIntentTypeResult = obj(dependencyMap[137]).parseGiftIntentType(obj.getNativeSyntheticEventData(nativeEvent).giftIntentType);
      if (null != parseGiftIntentTypeResult) {
        const obj3 = { name: tmp(tmp2[141]).ImpressionNames.GIFT_INTENT_CARD, type: tmp(tmp2[141]).ImpressionTypes.VIEW, properties: null };
        const obj4 = { gift_intent_type: parseGiftIntentTypeResult, num_friend_anniversaries: friendAnniversaries.getFriendAnniversaries().length };
        obj3.properties = obj4;
        tmp(tmp2[140]).trackImpression(obj3);
        const tmpResult = tmp(tmp2[140]);
      }
    };
    obj.handleTapEmoji = function handleTapEmoji(emojiNode) {
      if (!obj.isModalOrActionsheetObstructing()) {
        contentHandlers2.contentHandlers.onTapEmoji(emojiNode);
        const contentHandlers = contentHandlers2.contentHandlers;
      }
    };
    obj.handleTapTimestamp = function handleTapTimestamp(nativeEvent) {
      obj(dependencyMap[42]).contentHandlers.onTapTimestamp(nativeEvent);
    };
    obj.handleTapInlineCode = function handleTapInlineCode(nativeEvent) {
      obj(dependencyMap[42]).contentHandlers.onTapInlineCode(nativeEvent);
    };
    obj.handleTapRoleIcon = function handleTapRoleIcon(nativeEvent) {
      ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
      let name;
      let winningStreak;
      if (roleName.startsWith(name(dependencyMap[142]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX)) {
        const decodeWinnerDataResult = tmp(tmp2[142]).decodeWinnerData(roleName.slice(tmp(tmp2[142]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX.length));
        const tmpResult = tmp(tmp2[142]);
        name = tmp(tmp2[143]).getStatName(decodeWinnerDataResult.winningStat).name;
        winningStreak = decodeWinnerDataResult.winningStreak;
        const tmpResult2 = tmp(tmp2[143]);
        let obj2 = {
          key: "LEADERBOARD_WINNER_BADGE_TOOLTIP",
          content() {
              if (null != winningStreak) {
                if (tmp5 > 1) {
                  const intl2 = tmp2(tmp3[46]).intl;
                  const obj2 = { streakCount: tmp5, statName: name };
                  let formatResult = intl2.format(tmp2(tmp3[46]).t.owAd83, obj2);
                }
                const obj3 = { variant: "text-md/normal", color: "text-default", children: formatResult };
                return <tmp4 variant="text-md/normal" color="text-default">{formatResult}</tmp4>;
              }
              const intl = tmp2(tmp3[46]).intl;
              obj = { statName: name };
              formatResult = intl.format(tmp2(tmp3[46]).t.So4gmj, obj);
            },
          IconComponent: tmp(tmp2[146]).TrophyIcon,
          iconColor: "text-feedback-warning"
        };
        winningStreak(tmp2[144]).open(obj2);
        const obj6 = winningStreak(tmp2[144]);
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
        winningStreak(tmp2[144]).open(obj3);
        obj = winningStreak(tmp2[144]);
      }
    };
    obj.handleTapVoiceChannelBadge = function handleTapVoiceChannelBadge(nativeEvent) {
      obj = obj(dependencyMap[39]);
      channel = ChannelStore.getChannel(obj.getNativeSyntheticEventData(nativeEvent).channelId);
      if (null != channel) {
        const result = obj(dependencyMap[44]).navigateToVoiceChannel(channel);
        const tmpResult = obj(dependencyMap[44]);
      }
    };
    obj.handleTapGameIcon = function handleTapGameIcon(nativeEvent) {
      ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
      if (!obj.isModalOrActionsheetObstructing()) {
        obj = ActionSheetActionCreatorsDefault;
        const obj2 = { applicationId: gameApplicationId, messageTimestamp: timestamp };
        obj.openLazy(asyncRequireImpl(11947, dependencyMap.paths), "MessageGameIconActionSheet", obj2);
      }
    };
    obj.handleTapSuppressNotificationsIcon = function handleTapSuppressNotificationsIcon() {
      obj = ToastActionCreatorsDefault;
      const obj2 = { key: "SUPPRESS_NOTIFICATIONS_TOOLTIP", content: null, icon: null };
      const intl = obj(dependencyMap[46]).intl;
      obj2.content = intl.string(obj(dependencyMap[46]).t["RO/KYj"]);
      obj2.icon = _modDef10424;
      obj.open(obj2);
    };
    obj.handleTapConnectionsRoleTag = function handleTapConnectionsRoleTag(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[38])(dependencyMap[149], dependencyMap.paths), "ConnectionsRoleMessageBadgeActionSheet", { userId, guildId, channelId, roleId });
    };
    obj.handleTapTimeoutIcon = function handleTapTimeoutIcon() {
      obj = ToastActionCreatorsDefault;
      const obj2 = { key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY", content: null, icon: null };
      const intl = obj(dependencyMap[46]).intl;
      obj2.content = intl.string(obj(dependencyMap[46]).t["AeYyL+"]);
      obj2.icon = _modDef10424;
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
        const tmpResult = tmp(4982);
        const flattenComponentsResult = tmp(4982).flattenComponents(message.components);
        value = flattenComponentsResult.get(tmp(4989).asComponentId(componentId));
        let tmp6 = null != value;
        if (tmp6) {
          tmp6 = value.type === tmp(1982).ComponentType.BUTTON;
        }
        if (tmp6) {
          tmp6 = null != value.customId;
        }
        if (tmp6) {
          if (value.style !== tmp(1982).ButtonStyle.PREMIUM) {
            const obj2 = { componentType: tmp(1982).ComponentType.BUTTON, messageId, messageFlags: message.flags, customId: value.customId, componentId: null, applicationId: null, channelId: null, guildId: null };
            const tmpResult5 = tmp(8390);
            obj2.componentId = tmp(4989).asComponentId(componentId);
            obj2.applicationId = id;
            obj2.channelId = messageChannel.id;
            obj2.guildId = messageChannel.getGuildId();
            const result = tmpResult5.executeMessageComponentInteraction(obj2);
            const tmpResult6 = tmp(4989);
          } else {
            const obj3 = { title: null, body: null, confirmText: null };
            const intl = tmp(1119).intl;
            obj3.title = intl.string(tmp(1119).t["ZtdF0+"]);
            const intl2 = tmp(1119).intl;
            obj3.body = intl2.string(tmp(1119).t["0BEZLT"]);
            const intl3 = tmp(1119).intl;
            obj3.confirmText = intl3.string(tmp(1119).t.BddRzS);
            AlertActionCreatorsDefault.show(obj3);
          }
        }
        const tmpResult4 = tmp(4989);
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
        const tmpResult = tmp(4982);
        const flattenComponentsResult = tmp(4982).flattenComponents(message.components);
        value = flattenComponentsResult.get(tmp(4989).asComponentId(nativeSyntheticEventData.componentId));
        closure_5 = value;
        if (null != value) {
          const parents = tmp(4982).getParents(message.components, value);
          let first;
          if (parents != null) {
            first = parents[0];
          }
          let type1;
          if (first != null) {
            type1 = first.type;
          }
          let tmp9;
          if (type1 === tmp(1982).ComponentType.LABEL) {
            tmp9 = first;
          }
          const obj2 = { channelId: id, guildId, containerId: messageId, labelComponent: tmp9, allowEmpty: null, onSubmit: null };
          const tmpResult5 = tmp(4982);
          obj2.allowEmpty = tmp(4982).canSelectBeEmpty(value, "message");
          obj2.onSubmit = function onSubmit(localState) {
            obj = obj(dependencyMap[154]);
            const result = obj.executeMessageComponentInteraction({ componentType: value.type, messageId, messageFlags, customId: value.customId, componentId: value.id, applicationId, channelId: id, guildId, localState });
          };
          const type = value.type;
          if (tmp(1982).ComponentType.STRING_SELECT === type) {
            const _HermesInternal2 = HermesInternal;
            const obj9 = ActionSheetActionCreatorsDefault;
            const obj3 = { selectionActionComponent: value };
            const combined = "StringSelectComponentActionSheet:" + messageId;
            const merged = Object.assign(obj2);
            obj9.openLazy(tmp(1984)(11950, tmp2.paths), combined, obj3);
            const tmp19 = tmp(1984)(11950, tmp2.paths);
          } else {
            if (tmp(1982).ComponentType.USER_SELECT !== type) {
              if (tmp(1982).ComponentType.ROLE_SELECT !== type) {
                if (tmp(1982).ComponentType.MENTIONABLE_SELECT !== type) {
                  if (tmp(1982).ComponentType.CHANNEL_SELECT === type) {
                    const _HermesInternal3 = HermesInternal;
                    const obj12 = ActionSheetActionCreatorsDefault;
                    const obj4 = { selectionActionComponent: value };
                    const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                    const merged1 = Object.assign(obj2);
                    obj12.openLazy(tmp(1984)(11956, tmp2.paths), combined1, obj4);
                    const tmp28 = tmp(1984)(11956, tmp2.paths);
                  }
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const obj7 = ActionSheetActionCreatorsDefault;
            const obj5 = { selectionActionComponent: value };
            const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
            const merged2 = Object.assign(obj2);
            obj7.openLazy(tmp(1984)(11952, tmp2.paths), combined2, obj5);
            const tmp11 = tmp(1984)(11952, tmp2.paths);
          }
          const tmpResult6 = tmp(4982);
        }
        const tmpResult4 = tmp(4989);
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
          const result = tmp(8264).handleWelcomeCtaClicked(messageChannel, message, stickerId);
          const tmpResult = tmp(8264);
        } else if (message.type === tmp5.ROLE_SUBSCRIPTION_PURCHASE) {
          const result1 = tmp(11957).handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId);
          const tmpResult2 = tmp(11957);
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
              guild = GuildStore.getGuild(guild_id);
              if (null != guild) {
                if (tmpResult4.isAutomodMessageRecord(message)) {
                  if (tmpResult5.isAutomodNotification(message)) {
                    const obj3 = { source: null, alertType: null, messageId: null };
                    const guildIncident = GuildIncidentsStore.getGuildIncident(guild.id);
                    obj3.source = tmp(8280).GuildIncidentActionSources.MESSAGE;
                    obj3.alertType = tmp(8278).getIncidentAlertType(guildIncident);
                    obj3.messageId = message.id;
                    const tmpResult6 = tmp(8278);
                    const obj4 = { guild, analyticsData: obj3 };
                    ActionSheetActionCreatorsDefault.openLazy(tmp(1984)(11958, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
                  }
                  tmpResult5 = tmp(7755);
                }
                if (GuildMemberStore.isMember(guild.id, message.author.id)) {
                  const obj5 = { user: message.author, guild };
                  tmp9(11963)(obj5);
                } else {
                  const obj6 = { key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER", content: null, icon: null };
                  const intl = tmp(1119).intl;
                  obj6.content = intl.string(tmp(1119).t.UsD2YP);
                  obj6.icon = tmp9(10424);
                  tmp9(4458).open(obj6);
                  const tmp9Result = tmp9(4458);
                }
                tmpResult4 = tmp(7755);
              }
            }
          }
          tmpResult = tmp(7755);
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
                  ActionSheetActionCreatorsDefault.openLazy(tmp(1984)(11991, dependencyMap.paths), "GuildRaidResolveActionSheet", obj2);
                }
                tmpResult6 = tmp(7755);
              }
              tmpResult5 = tmp(7755);
              const result = tmp(7755).extractAutomodMessageFields(message);
              ({ decisionId, content } = result);
              const tmpResult8 = tmp(11992);
              tmpResult8.openSubmitFeedback(messageId, content, decisionId, channel);
              const tmpResult7 = tmp(7755);
            }
          }
        }
        tmpResult = tmp(7755);
      }
    };
    obj.handleTransitionToThread = function handleTransitionToThread(arg0, arg1, source) {
      channel = ChannelStore.getChannel(arg1);
      if (null != channel) {
        obj = obj(dependencyMap[167]);
        const obj2 = { source, navigationReplace: false };
        obj.transitionToThread(channel, obj2);
      }
    };
    obj.handleTransitionToMessage = function handleTransitionToMessage(guildId, id, flaggedMessageId) {
      obj = obj(dependencyMap[167]);
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
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ guildId, channelId } = nativeSyntheticEventData);
      const result = obj(dependencyMap[59]).handleCopyLinkForumPost(guildId, channelId, { section: constants7.CHANNEL });
    };
    obj.handleTapSeeMore = function handleTapSeeMore() {

    };
    obj.handleCopyText = function handleCopyText(nativeEvent) {
      obj = obj(dependencyMap[168]);
      obj.copy(nativeEvent.nativeEvent.text);
      const result = obj(dependencyMap[169]).presentCopiedToClipboard();
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
              const tmpResult = tmp(12005);
              const result = tmpResult.logMediaAttachmentPlaybackStarted(messageData.messageChannel, found, totalDurationSecs, messageId, startDurationSecs, messageData.message.author.id);
            }
          }
        }
        const tmpResult2 = tmp(12004);
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
              const tmpResult = tmp(12005);
              const result = tmpResult.logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs, found);
            }
          }
        }
        const tmpResult2 = tmp(12004);
        const result1 = tmpResult2.logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs);
      }
    };
    obj.handleVoiceMessagePlaybackFailed = function handleVoiceMessagePlaybackFailed(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, errorMessage } = nativeSyntheticEventData);
      if (errorMessage == null) {
        errorMessage = null;
      }
      const result = obj(dependencyMap[171]).logVoiceMessagePlaybackFailed(messageId, errorMessage);
      const obj2 = obj(dependencyMap[171]);
      const obj4 = { key: "AUDIO_PLAYBACK_FAILED-" + messageId, content: null, icon: null };
      const intl = tmp(tmp2[46]).intl;
      obj4.content = intl.string(obj(dependencyMap[46]).t.gRHMh8);
      obj4.icon = _modDef10424;
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
          return { value: "IconComponent", done: null };
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
              const nativeSyntheticEventData = closure_0(dependencyMap[39]).getNativeSyntheticEventData(closure_0);
              ({ guildId, parentChannelId, threadId } = nativeSyntheticEventData);
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              const isMemberResult = member.isMember(guildId, id);
              channel = channel.getChannel(parentChannelId);
              const obj11 = closure_0(dependencyMap[39]);
              const obj4 = { media_post_id: threadId, can_access: null, is_member: null };
              let canViewChannelResult = null != channel;
              if (canViewChannelResult) {
                canViewChannelResult = tmp24(tmp25[173]).canViewChannel(channel);
                const tmp24Result3 = tmp24(tmp25[173]);
              }
              obj4.can_access = canViewChannelResult;
              obj4.is_member = isMemberResult;
              closure_0(dependencyMap[84]).trackWithMetadata(constants.MEDIA_POST_PREVIEW_EMBED_CLICKED, obj4);
              if (isMemberResult) {
                const result = tmp24(tmp25[167]).tryTransitionToThreadMessage(parentChannelId, threadId, nativeSyntheticEventData.messageId);
                const tmp24Result4 = tmp24(tmp25[167]);
              } else {
                dependencyMap = 1;
                const obj6 = { channelId: parentChannelId };
                v2 = 2;
                c1 = 1;
                const obj7 = { value: v2(tmp25[174]).startLurking(guildId, {}, obj6), done: false };
                return obj7;
              }
              const tmp24Result = closure_0(dependencyMap[84]);
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
      obj = obj(dependencyMap[39]);
      const obj2 = MediaChannelActionCreatorsAll;
      const result = obj2.dismissMediaPostSharePrompt(SnowflakeUtilsDefault.castMessageIdAsChannelId(obj.getNativeSyntheticEventData(nativeEvent).messageId));
    };
    obj.handleTapObscuredMediaLearnMore = function handleTapObscuredMediaLearnMore(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
      ActionSheetActionCreatorsDefault.openLazy(obj(dependencyMap[38])(dependencyMap[176], dependencyMap.paths), "ExplicitMediaLearnMore", { messageId, channelId, attachmentId, embedId });
    };
    obj.onTapObscuredMediaToggle = function onTapObscuredMediaToggle(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ messageId, channelId, isReveal, attachmentId, embedId } = nativeSyntheticEventData);
      let result = isReveal;
      if (isReveal) {
        result = obj2.shouldAgeVerifyForExplicitMedia();
      }
      if (result) {
        const obj4 = { entryPoint: tmp(tmp2[179]).AgeVerificationModalEntryPoint.OBSCURED_MEDIA };
        const result1 = require("AgeVerificationActionCreators").showAgeVerificationGetStartedModal(obj4);
        const obj3 = require("AgeVerificationActionCreators");
      }
      obj2 = obj(dependencyMap[177]);
      const result2 = obj(dependencyMap[177]).trackToggleMediaObscurityV2({ obscure: isReveal });
    };
    obj.handleTapSafetyPolicyNoticeEmbed = function handleTapSafetyPolicyNoticeEmbed(nativeEvent) {
      obj = obj(dependencyMap[39]);
      ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[38])(dependencyMap[180], dependencyMap.paths), { classificationId: obj.getNativeSyntheticEventData(nativeEvent).classificationId, shouldRedirectToAccountStanding: true });
    };
    obj.handleTapSafetySystemNotificationCta = function handleTapSafetySystemNotificationCta(nativeEvent) {
      ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
      if (constants11.POLICY_VIOLATION_DETAIL === ctaType) {
        if (null != ctaKey) {
          const obj3 = { classificationId: ctaKey, shouldRedirectToAccountStanding: true };
          ModalActionCreatorsDefault.pushLazy(obj(dependencyMap[38])(dependencyMap[180], dependencyMap.paths), obj3);
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
            const result1 = tmp(8541).extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
            const tmpResult = tmp(8541);
            const obj3 = { initialSources: result1, initialIndex: findIndexResult, originViewOrOriginLayout: result.layout, analyticsSource: "Channel", channelId: messageChannel.id };
            tmp(8535).openMediaModal(obj3);
            const tmpResult2 = tmp(8535);
          }
        }
      }
    };
    obj.handleTapCtaButton = function handleTapCtaButton(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      ({ channelId, callback, messageId } = nativeSyntheticEventData);
      if (obj(dependencyMap[184]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
        const result = tmp(tmp2[185]).handleSenderFalsePositiveFlow(channelId, messageId);
        const tmpResult = tmp(tmp2[185]);
      } else if (tmp(tmp2[184]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
        const obj2 = { entryPoint: tmp(tmp2[179]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON };
        const result1 = require("AgeVerificationActionCreators").showAgeVerificationGetStartedModal(obj2);
        const obj6 = require("AgeVerificationActionCreators");
        const result2 = tmp(tmp2[179]).trackAgeVerificationDmClicked(tmp(tmp2[179]).AgeVerificationDmCta.RETRY, channelId);
        const tmpResult7 = tmp(tmp2[179]);
      } else if (tmp(tmp2[184]).CtaButtonType.CONNECT_TO_TEEN === callback) {
        if (!tmpResult8.resumeFamilyCenterConnection()) {
          const obj3 = { screen: constants9.FAMILY_CENTER };
          tmp(tmp2[136]).openUserSettings(obj3);
          const tmpResult9 = tmp(tmp2[136]);
        }
        tmpResult8 = tmp(tmp2[186]);
        const result3 = tmp(tmp2[179]).trackAgeVerificationDmClicked(tmp(tmp2[179]).AgeVerificationDmCta.CONNECT_TO_TEEN, channelId);
        const tmpResult10 = tmp(tmp2[179]);
      } else if (tmp(tmp2[184]).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW === callback) {
        const result4 = tmp(tmp2[187]).handleManualReviewCta();
        const tmpResult11 = tmp(tmp2[187]);
        const result5 = tmp(tmp2[179]).trackAgeVerificationDmClicked(tmp(tmp2[179]).AgeVerificationDmCta.MANUAL_REVIEW, channelId);
        const tmpResult12 = tmp(tmp2[179]);
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
        if (tmp(8230).MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel) {
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
        } else if (tmp(8230).MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj4 = { message, channel, chatInputRef: params.chatInputRef, actionSource: "a11y_action" };
            replyToMessageDefault(obj4);
          }
        } else if (tmp(8230).MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result = tmp(10425).handleAddNewReactions(channel, message.id);
            const tmpResult = tmp(10425);
          }
        } else if (tmp(8230).MessageAccessibilityAction.MESSAGE_ACTIONS_MENU === messageAccessibilityActionFromLabel) {
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
            const result1 = tmp(11779).showLongPressMessageActionSheet(obj5);
            const tmpResult3 = tmp(11779);
          }
        } else if (tmp(8230).MessageAccessibilityAction.ADD_QUICK_REACTION === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const result2 = tmp(8231).handleAddDefaultDoubleTapReaction(message, channel);
            const tmpResult4 = tmp(8231);
          }
        } else if (tmp(8230).MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel) {
          if (null != channel) {
            const obj6 = { channelId: channel.id };
            showChatGDMCustomizeActionSheetDefault(obj6);
          }
        } else if (tmp(8230).MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel) {
          openPinnedMessagesDefault(message.channel_id, "pinned-message-system-message");
        } else if (tmp(8230).MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel) {
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
        const inlineForwardOptions = tmp(12061).getInlineForwardOptions(message, nativeSyntheticEventData);
        if (null != inlineForwardOptions) {
          const _Object = Object;
          if (nativeEvent.nativeEvent.triggerHaptic) {
            const result = tmp(4726).triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            const tmpResult3 = tmp(4726);
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
          tmp(11805).openForwardModal(obj2);
          const tmpResult4 = tmp(11805);
        }
        const tmpResult = tmp(12061);
      }
    };
    obj.handleTapSoundmoji = function handleTapSoundmoji(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      openSoundmojiActionSheetDefault(nativeSyntheticEventData);
    };
    obj.handleTapClanTagChiplet = function handleTapClanTagChiplet(nativeEvent) {
      obj = obj(dependencyMap[39]);
      const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
      if (tmp4) {
        const _HermesInternal = HermesInternal;
        const obj2 = require("ActionSheetActionCreators");
        const obj3 = { guildId: nativeSyntheticEventData.guildId };
        obj2.openLazy(obj(tmp2[38])(tmp2[68], tmp2.paths), "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj3);
        const tmp6 = obj(tmp2[38])(tmp2[68], tmp2.paths);
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
