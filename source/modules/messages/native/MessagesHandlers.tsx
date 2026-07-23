// Module ID: 10864
// Function ID: 84380
// Name: getCodedLinks
// Dependencies: [29, 5, 57, 6, 7, 7568, 4167, 5466, 10219, 6758, 7754, 6942, 6830, 9484, 3760, 6902, 1194, 1348, 8193, 1917, 1838, 4115, 10444, 4349, 3758, 4217, 1906, 3947, 4810, 7080, 1849, 7622, 653, 6979, 1851, 7544, 1211, 5484, 9490, 9967, 1934, 9528, 9968, 10009, 10865, 7668, 4341, 5497, 1212, 9085, 10159, 10881, 4098, 10886, 6755, 10888, 9488, 4111, 6978, 9489, 9483, 9312, 9315, 9619, 477, 7723, 5650, 9557, 7721, 10889, 8578, 8492, 21, 10891, 10892, 9527, 4359, 9529, 9966, 4099, 4100, 9871, 1198, 9542, 9965, 4966, 4324, 6740, 7656, 10899, 10900, 1360, 10905, 10913, 10914, 10915, 10916, 10917, 10829, 3827, 10918, 10689, 10455, 4116, 8365, 7001, 1553, 6940, 10919, 4981, 9444, 6969, 4119, 9476, 9477, 7460, 10939, 9734, 5737, 10942, 10944, 7781, 10951, 10832, 675, 4345, 5723, 7477, 4944, 9348, 5597, 7941, 9181, 7227, 4337, 8198, 10959, 6661, 5796, 10960, 9679, 10961, 8559, 480, 3831, 10963, 9314, 10964, 6691, 4353, 1881, 4470, 7798, 10966, 10968, 10972, 7688, 10973, 7482, 7704, 7702, 10974, 10978, 11005, 11006, 4138, 5492, 3830, 11017, 11018, 11019, 4321, 5736, 11020, 11021, 6835, 4347, 7536, 7538, 11023, 9935, 8276, 8274, 11056, 8143, 11058, 7655, 9107, 9492, 11074, 11075, 11076, 9872, 11077, 11080, 11083, 11084, 11090, 11093, 2]

// Module 10864 (getCodedLinks)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import parseQuery from "parseQuery";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import { isGuildScheduledEventActive as closure_16 } from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import closure_26 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_28 from "_isNativeReflectConstruct";
import closure_29 from "_isNativeReflectConstruct";
import closure_30 from "_isNativeReflectConstruct";
import closure_31 from "_isNativeReflectConstruct";
import closure_32 from "_isNativeReflectConstruct";
import closure_33 from "_isNativeReflectConstruct";
import closure_34 from "_isNativeReflectConstruct";
import closure_35 from "_isNativeReflectConstruct";
import closure_36 from "_isNativeReflectConstruct";
import closure_37 from "_isNativeReflectConstruct";
import { SeparatorAction } from "Changeset";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";
import GuildFeatures from "GuildFeatures";
import { SafetySystemNotificationCtaType as closure_63 } from "SafetyHubLinks";
import { OpenThreadAnalyticsLocations as closure_64 } from "AbortCodes";

let closure_39;
let closure_40;
let closure_41;
let closure_42;
let closure_43;
let closure_44;
let closure_45;
let closure_46;
let closure_47;
let closure_48;
let closure_49;
let closure_50;
let closure_51;
let closure_52;
let closure_53;
let closure_54;
let closure_55;
let closure_56;
let closure_57;
let closure_58;
let closure_59;
let closure_61;
let closure_62;
const require = arg1;
function getCodedLinks(type) {
  if (type.type === constants.THREAD_STARTER_MESSAGE) {
    if (null != type.messageReference) {
      const message = messageByReference.getMessageByReference(type.messageReference).message;
      return null == message ? undefined : message.codedLinks;
    }
  }
  if (type.messageSnapshots.length > 0) {
    let codedLinks = type.messageSnapshots[0].message.codedLinks;
  } else {
    codedLinks = type.codedLinks;
  }
  return codedLinks;
}
let closure_4 = ["messageId"];
let closure_5 = ["messageId"];
({ ActivityActionTypes: closure_39, ActivityFlags: closure_40, ActivityGamePlatforms: closure_41, ActivityTypes: closure_42, AnalyticEvents: closure_43, AnalyticsGameOpenTypes: closure_44, AnalyticsLocations: closure_45, AnalyticsObjects: closure_46, AnalyticsObjectTypes: closure_47, AnalyticsPages: closure_48, AnalyticsSections: closure_49, LinkingTypes: closure_50, ME: closure_51, MessageFlags: closure_52, MessageStates: closure_53, MessageTypes: closure_54, Permissions: closure_55, Routes: closure_56, UpsellTypes: closure_57, UserSettingsSections: closure_58, WebBrowserType: closure_59 } = ME);
({ PremiumTypes: closure_61, PremiumUpsellTypes: closure_62 } = GuildFeatures);
let items = [require("QUICK_SWITCHER").PREMIUM_GIFT_INTENT_CARD];
let tmp4 = (() => {
  class MessagesHandlers {
    constructor(arg0) {
      self = this;
      tmp = outer1_9(this, self);
      this.getParams = arg0;
      this.getMessageData = (arg0) => {
        if (null == arg0) {
          return null;
        } else {
          const message = self.params.getMessage(arg0);
          if (null == message) {
            return null;
          } else {
            const channel = outer2_24.getChannel(message.channel_id);
            let tmp5 = null;
            if (null != channel) {
              const obj = { message, messageChannel: channel };
              tmp5 = obj;
            }
            return tmp5;
          }
        }
      };
      this.isModalOrActionsheetObstructing = () => MessagesHandlers(outer2_3[38]).isAlertOrActionSheetOpen(self.params.selectedChannelId);
      this.handleTapImage = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const messageData = nativeEvent.getMessageData(nativeEvent.id);
        if (null != messageData) {
          MessagesHandlers(outer2_3[40])(outer2_3[39], outer2_3.paths).then((handleMessagesTapImage) => {
            const result = handleMessagesTapImage.handleMessagesTapImage({ tapImageData: nativeEvent, allowWithinModal: false, message: messageData.message, messageChannel: messageData.messageChannel, selectedChannelId: nativeEvent.params.selectedChannelId });
          });
          const promise = MessagesHandlers(outer2_3[40])(outer2_3[39], outer2_3.paths);
        }
      };
      this.handleTapChannel = (nativeEvent) => {
        if (!data.isModalOrActionsheetObstructing()) {
          data = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).data;
          const obj = MessagesHandlers(outer2_3[41]);
          MessagesHandlers(outer2_3[40])(outer2_3[42], outer2_3.paths).then((handleMessagesTapChannel) => {
            const result = handleMessagesTapChannel.handleMessagesTapChannel({
              data,
              dismissKeyboard() {
                const current = data.getParams().chatInputRef.current;
                let dismissKeyboardResult;
                if (null != current) {
                  dismissKeyboardResult = current.dismissKeyboard();
                }
                return dismissKeyboardResult;
              }
            });
          });
          const promise = MessagesHandlers(outer2_3[40])(outer2_3[42], outer2_3.paths);
        }
      };
      this.handleLongPressChannel = (nativeEvent) => {
        if (!data.isModalOrActionsheetObstructing()) {
          data = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).data;
          const obj = MessagesHandlers(outer2_3[41]);
          MessagesHandlers(outer2_3[40])(outer2_3[43], outer2_3.paths).then((handleMessagesLongPressChannel) => {
            const result = handleMessagesLongPressChannel.handleMessagesLongPressChannel({ data });
          });
          const promise = MessagesHandlers(outer2_3[40])(outer2_3[43], outer2_3.paths);
        }
      };
      this.handleTapAttachmentLink = (arg0) => {
        if (!self.isModalOrActionsheetObstructing()) {
          MessagesHandlers(outer2_3[44]).contentHandlers.onTapAttachmentLink(arg0);
          const contentHandlers = MessagesHandlers(outer2_3[44]).contentHandlers;
        }
      };
      this.handleLongPressAttachmentLink = (arg0) => {
        if (!self.isModalOrActionsheetObstructing()) {
          const result = MessagesHandlers(outer2_3[44]).contentHandlers.onLongPressAttachmentLink(arg0);
          const contentHandlers = MessagesHandlers(outer2_3[44]).contentHandlers;
        }
      };
      this.handleTapCall = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const data = obj.getNativeSyntheticEventData(nativeEvent).data;
        const channelId = data.channelId;
        const channel = outer2_24.getChannel(channelId);
        if (tmp) {
          if (obj3.checkIsCallActive(channelId, data.messageId)) {
            let tmp4Result = tmp4(tmp5[46]);
            tmp4Result.handleJoinCall(channel);
          } else {
            tmp4Result = tmp4(tmp5[47]);
            obj = { key: "CallTap", options: null, hasIcons: true };
            obj = {};
            const intl = tmp4(tmp5[48]).intl;
            obj.label = intl.string(tmp4(tmp5[48]).t.focH1t);
            obj.IconComponent = tmp4(tmp5[49]).PhoneCallIcon;
            obj.onPress = function onPress() {
              MessagesHandlers(outer3_3[46]).handleStartCall(channel);
            };
            const items = [obj, ];
            const obj1 = {};
            const intl2 = tmp4(tmp5[48]).intl;
            obj1.label = intl2.string(tmp4(tmp5[48]).t.oCqlGG);
            obj1.IconComponent = tmp4(tmp5[50]).VideoIcon;
            obj1.onPress = function onPress() {
              MessagesHandlers(outer3_3[46]).handleStartCall(channel, true);
            };
            items[1] = obj1;
            obj.options = items;
            const result = tmp4Result.showSimpleActionSheet(obj);
          }
          obj3 = MessagesHandlers(outer2_3[45]);
        }
      };
      this.handleTapMention = (nativeEvent) => {
        if (!self.isModalOrActionsheetObstructing()) {
          MessagesHandlers(outer2_3[44]).contentHandlers.onTapMention(nativeEvent);
          const contentHandlers = MessagesHandlers(outer2_3[44]).contentHandlers;
        }
      };
      this.handleTapCommandMention = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const commandName = nativeSyntheticEventData.commandName;
        const commandId = nativeSyntheticEventData.commandId;
        const chatInputRef = commandName.getParams().chatInputRef;
        obj = { channelId: nativeSyntheticEventData.channelId };
        let current = chatInputRef.current;
        let text;
        if (null != current) {
          text = current.getText();
        }
        let str = "";
        if (null != text) {
          str = text;
        }
        obj.currentText = str;
        obj.commandId = commandId;
        obj.commandName = commandName;
        obj.onOpenCustomKeyboard = function onOpenCustomKeyboard(arg0) {
          const current = chatInputRef.current;
          let openCustomKeyboardResult;
          if (null != current) {
            openCustomKeyboardResult = current.openCustomKeyboard(arg0);
          }
          return openCustomKeyboardResult;
        };
        obj.onSetCommand = function onSetCommand() {
          outer3_1(outer3_3[52]).hideActionSheet();
          outer3_1(outer3_3[53])();
          const current = chatInputRef.current;
          if (null != current) {
            current.openSystemKeyboard();
          }
          const current2 = chatInputRef.current;
          let tmp4 = null == current2;
          let obj2 = current2;
          if (!tmp4) {
            const applicationCommandManager = current2.getApplicationCommandManager();
            tmp4 = null == applicationCommandManager;
            obj2 = applicationCommandManager;
          }
          if (!tmp4) {
            obj2.setPartialCommand(commandId, commandName, MessagesHandlers(outer3_3[54]).ApplicationCommandTriggerLocations.MENTION);
          }
        };
        const result = MessagesHandlers(outer2_3[51]).handleTapCommandMention(obj);
      };
      this.handleLongPressCommandMention = (nativeEvent) => {
        let commandId;
        let commandName;
        ({ commandName, commandId } = nativeEvent.nativeEvent);
        const result = MessagesHandlers(outer2_3[51]).handleLongPressCommandMention(commandName, commandId);
      };
      this.handleTapGameMention = (nativeEvent) => {
        if (!_self.isModalOrActionsheetObstructing()) {
          _self = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
          const obj = MessagesHandlers(outer2_3[41]);
          MessagesHandlers(outer2_3[40])(outer2_3[55], outer2_3.paths).then((handleMessagesTapGameMention) => {
            const result = handleMessagesTapGameMention.handleMessagesTapGameMention({ gameId: gameId.gameId });
          });
          const promise = MessagesHandlers(outer2_3[40])(outer2_3[55], outer2_3.paths);
        }
      };
      this.handleTapGuildEventLink = (node) => {
        node = node.node;
        if (null != node) {
          if (obj.isLinkTrusted(node)) {
            const payload = outer2_1(outer2_3[57])(tmp).payload;
            if (payload.type !== outer2_50.INVITE) {
              return false;
            } else if (null == payload.inviteCode) {
              return false;
            } else {
              const invite = outer2_28.getInvite(payload.inviteCode);
              let tmp9 = null == invite;
              if (!tmp9) {
                tmp9 = !MessagesHandlers(outer2_3[58]).isGuildScheduledEventInviteEmbed(invite);
                const obj2 = MessagesHandlers(outer2_3[58]);
              }
              let flag = !tmp9;
              if (!tmp9) {
                outer2_1(outer2_3[59])(invite);
                flag = true;
              }
              return flag;
            }
          }
          obj = MessagesHandlers(outer2_3[56]);
        }
        return false;
      };
      this.handleTapLink = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        const messageData = nativeEvent.getMessageData(nativeEvent.data.messageId);
        MessagesHandlers(outer2_3[40])(outer2_3[60], outer2_3.paths).then((handleMessagesTapLink) => {
          const obj = { allowWithinModal: false, chatInputRef: nativeEvent.params.chatInputRef, handleTransitionToThread: nativeEvent.handleTransitionToThread };
          let message;
          if (null != closure_1) {
            message = closure_1.message;
          }
          obj.message = message;
          let messageChannel;
          if (null != closure_1) {
            messageChannel = closure_1.messageChannel;
          }
          obj.messageChannel = messageChannel;
          obj.selectedChannelId = nativeEvent.params.selectedChannelId;
          obj.tapLinkData = nativeEvent;
          const result = handleMessagesTapLink.handleMessagesTapLink(obj);
        });
      };
      this.handleLongPressLink = (nativeEvent) => {
        if (!self.isModalOrActionsheetObstructing()) {
          MessagesHandlers(outer2_3[44]).contentHandlers.onLongPressLink(nativeEvent);
          const contentHandlers = MessagesHandlers(outer2_3[44]).contentHandlers;
        }
      };
      this.handleTapReaction = (nativeEvent) => {
        let isBurst;
        let messageId;
        let reaction;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ reaction, messageId, isBurst } = nativeSyntheticEventData);
        if (!self.isModalOrActionsheetObstructing()) {
          const messageData = self.getMessageData(messageId);
          if (null != messageData) {
            const messageChannel = messageData.messageChannel;
            const obj2 = MessagesHandlers(outer2_3[61]);
            let tmp7 = null;
            if (null != reaction) {
              obj = {};
              const merged = Object.assign(reaction);
              obj["emoji"] = reaction.emoji;
              tmp7 = obj;
            }
            const result = obj2.handleAddOrRemoveReaction(messageId, messageChannel, tmp7, isBurst, nativeEvent.nativeEvent.location);
          }
        }
      };
      this.handleTapReactionOverflow = (nativeEvent) => {
        let channelId;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, channelId } = nativeSyntheticEventData);
        if (!self.isModalOrActionsheetObstructing()) {
          obj = { messageId, channelId };
          obj = { object: outer2_46.CHANNEL, objectType: outer2_47.REACTION_OVERFLOW };
          obj.location = obj;
          MessagesHandlers(outer2_3[62]).handleViewReactions(obj);
          const obj2 = MessagesHandlers(outer2_3[62]);
        }
      };
      this.handleLongPressReaction = (nativeEvent) => {
        let channelId;
        let isBurst;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const reaction = nativeSyntheticEventData.reaction;
        ({ messageId, channelId, isBurst } = nativeSyntheticEventData);
        if (!self.isModalOrActionsheetObstructing()) {
          obj = { messageId, channelId };
          let emoji = null;
          if (null != reaction) {
            emoji = reaction.emoji;
          }
          obj.emoji = emoji;
          obj.isSelectedBurst = isBurst;
          obj = { object: outer2_46.CHANNEL, objectType: outer2_47.REACTION };
          obj.location = obj;
          MessagesHandlers(outer2_3[62]).handleViewReactions(obj);
          const obj2 = MessagesHandlers(outer2_3[62]);
        }
      };
      this.handleOpenSticker = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          obj = { renderableSticker: nativeSyntheticEventData.sticker, channel: messageData.messageChannel, chatInputRef: self.params.chatInputRef };
          const result = MessagesHandlers(outer2_3[63]).showStickerDetailActionSheet(obj);
          const obj2 = MessagesHandlers(outer2_3[63]);
        }
      };
      this.handleTapAvatar = (nativeEvent) => {
        const items = [outer2_1(outer2_3[37]).AVATAR];
        self.handleOpenProfile(nativeEvent, items);
      };
      this.handleTapUsername = (nativeEvent) => {
        if (obj.isIOS()) {
          const items = [outer2_1(outer2_3[37]).USERNAME];
          self.handleOpenProfile(nativeEvent, items);
        } else {
          const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
          const userId = nativeSyntheticEventData.userId;
          const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
          if (null != messageData) {
            const message = messageData.message;
            if (outer2_1(outer2_3[65])(message)) {
              if (null != message.messageReference.guild_id) {
                const items1 = [outer2_1(outer2_3[37]).USERNAME];
                self.handleOpenProfile(nativeEvent, items1);
              }
            }
            if (null != userId) {
              const user = outer2_37.getUser(userId);
              const messageChannel = messageData.messageChannel;
              const isPrivateResult = messageChannel.isPrivate();
              const canResult = outer2_31.can(outer2_55.SEND_MESSAGES, messageChannel);
              if (undefined !== user) {
                if (isPrivateResult) {
                  if (!obj3.computeIsReadOnlyThread(messageChannel)) {
                    const current = self.getParams().chatInputRef.current;
                    if (null != current) {
                      current.insertText(MessagesHandlers(outer2_3[67]).getMentionTextWithUser(messageChannel, user), null, true);
                      const obj4 = MessagesHandlers(outer2_3[67]);
                    }
                  }
                }
              }
              obj3 = MessagesHandlers(outer2_3[66]);
            }
          }
          const obj2 = MessagesHandlers(outer2_3[41]);
        }
      };
      this.handleLongPressUsername = (nativeEvent) => {
        const items = [outer2_1(outer2_3[37]).USERNAME];
        self.handleOpenProfile(nativeEvent, items);
      };
      this.handleOpenProfile = (nativeEvent, sourceAnalyticsLocations) => {
        let messageId;
        let userId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, userId } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          const message = messageData.message;
          let user;
          if (null != userId) {
            user = outer2_37.getUser(userId);
          }
          let tmp5 = user;
          if (null != messageId) {
            if (obj8.isPublicSystemMessage(message)) {
              outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[69], outer2_3.paths), "PublicGuildAnnouncementProfile");
            } else {
              let user1 = user;
              if (null == user) {
                user1 = outer2_37.getUser(message.author.id);
              }
              if (outer2_1(outer2_3[65])(message)) {
                const guild_id = message.messageReference.guild_id;
                if (null != guild_id) {
                  const _HermesInternal2 = HermesInternal;
                  const obj5 = outer2_1(outer2_3[52]);
                  obj = { guildId: guild_id };
                  obj5.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths), "GuildProfileActionSheet:" + guild_id, obj);
                }
              }
              tmp5 = user1;
              if (message.type === outer2_54.THREAD_STARTER_MESSAGE) {
                tmp5 = user1;
                if (null != message.messageReference) {
                  const messageByReference = outer2_19.getMessageByReference(message.messageReference);
                  tmp5 = user1;
                  if (null != messageByReference) {
                    tmp5 = user1;
                    if (null != messageByReference.message) {
                      tmp5 = user1;
                      if (outer2_1(outer2_3[65])(messageByReference.message)) {
                        tmp5 = user1;
                        if (null != messageByReference.message.messageReference) {
                          tmp5 = user1;
                          if (null != messageByReference.message.messageReference.guild_id) {
                            const guild_id2 = messageByReference.message.messageReference.guild_id;
                            const _HermesInternal = HermesInternal;
                            const obj3 = outer2_1(outer2_3[52]);
                            obj = { guildId: guild_id2 };
                            obj3.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths), "GuildProfileActionSheet:" + guild_id2, obj);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            obj8 = MessagesHandlers(outer2_3[68]);
          }
          if (null != tmp5) {
            const obj1 = { userId: tmp5.id, channelId: messageData.messageChannel.id, messageId, sourceAnalyticsLocations };
            outer2_1(outer2_3[71])(obj1);
          }
        }
      };
      this.handleTapThreadEmbed = (nativeEvent) => {
        const messageId = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId;
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          const messageChannel = messageData.messageChannel;
          const guildId = messageChannel.getGuildId();
          if (null != messageId) {
            if (null != guildId) {
              const current = self.getParams().chatInputRef.current;
              if (null != current) {
                current.blur();
              }
              const result = self.handleTransitionToThread(guildId, outer2_1(outer2_3[72]).castMessageIdAsChannelId(messageId), outer2_64.EMBED);
              const obj2 = outer2_1(outer2_3[72]);
            }
          }
        }
      };
      this.handleTapReply = (nativeEvent) => {
        let message;
        let messageChannel;
        const messageData = self.getMessageData(nativeEvent.nativeEvent.originId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          let guildId = messageChannel.getGuildId();
          if (null == guildId) {
            guildId = outer2_51;
          }
          const messageReference = message.messageReference;
          let message_id;
          if (null != messageReference) {
            message_id = messageReference.message_id;
          }
          if (null != message_id) {
            const messageByReference = outer2_19.getMessageByReference(message.messageReference);
            outer2_1(outer2_3[73])(message, messageByReference, messageChannel);
            const result = self.handleTransitionToMessage(guildId, messageChannel.id, message_id);
          }
        }
      };
      this.handleTapSummary = (nativeEvent) => {
        let channelId;
        let summaryId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ channelId, summaryId } = nativeSyntheticEventData);
        if (null != self.getMessageData(nativeSyntheticEventData.messageId)) {
          const findSummaryResult = outer2_20.findSummary(channelId, summaryId);
          if (null != findSummaryResult) {
            obj = { summary: findSummaryResult };
            outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[74], outer2_3.paths), "SummaryActionSheet", obj);
            const obj2 = outer2_1(outer2_3[52]);
          }
        }
      };
      this.handleTapSummaryJump = (nativeEvent) => {
        let channelId;
        let message;
        let messageChannel;
        let summaryId;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        ({ channelId, summaryId } = nativeSyntheticEventData);
        const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          let guildId = messageChannel.getGuildId();
          if (null == guildId) {
            guildId = outer2_51;
          }
          const result = self.handleTransitionToMessage(guildId, messageChannel.id, message.id);
          outer2_1(outer2_3[75]).setSelectedSummary(channelId, summaryId);
          const obj2 = outer2_1(outer2_3[75]);
        }
      };
      this.handleLongPressMessage = (nativeEvent) => {
        let componentMediaIndex;
        let mediaIndex;
        let mediaType;
        let message;
        let messageChannel;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, mediaIndex, mediaType, componentMediaIndex } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          if (!self.isModalOrActionsheetObstructing()) {
            const user = outer2_37.getUser(message.author.id);
            if (null != user) {
              if (null == outer2_36.getUploaderFileForMessageId(messageId)) {
                const obj2 = MessagesHandlers(outer2_3[61]);
                const longPressSelectedMedia = obj2.getLongPressSelectedMedia(message, mediaIndex, mediaType, MessagesHandlers(outer2_3[76]).asComponentId(nativeSyntheticEventData.componentId), componentMediaIndex);
                const obj3 = MessagesHandlers(outer2_3[76]);
                obj = {};
                obj = { section: outer2_49.CHANNEL, object: outer2_46.MESSAGE };
                obj.analyticsLocation = obj;
                obj.canAddNewReactions = outer2_1(outer2_3[78])(messageChannel);
                obj.channel = messageChannel;
                obj.chatInputRef = self.params.chatInputRef;
                obj.message = message;
                let tmp20;
                if (null != longPressSelectedMedia) {
                  tmp20 = longPressSelectedMedia;
                }
                obj.selectedMedia = tmp20;
                obj.user = user;
                const result = MessagesHandlers(outer2_3[77]).showLongPressMessageActionSheet(obj);
                const obj4 = MessagesHandlers(outer2_3[77]);
              }
            }
          }
        }
      };
      this.handleInitiateReply = (nativeEvent) => {
        let message;
        let messageChannel;
        let obj = MessagesHandlers(outer2_3[41]);
        const messageData = self.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          if (nativeEvent.nativeEvent.triggerHaptic) {
            const result = MessagesHandlers(outer2_3[79]).triggerHapticFeedback(outer2_1(outer2_3[80]).IMPACT_LIGHT);
            const obj2 = MessagesHandlers(outer2_3[79]);
          }
          obj = { message, channel: messageChannel, chatInputRef: self.params.chatInputRef };
          const _location = nativeEvent.nativeEvent.location;
          let str = "message_swipe";
          if (null != _location) {
            str = _location;
          }
          obj.actionSource = str;
          obj.invertible = true;
          outer2_1(outer2_3[81])(obj);
          const tmp8 = outer2_1(outer2_3[81]);
        }
      };
      this.handleInitiateThread = (nativeEvent) => {
        let message;
        let messageChannel;
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          const result = MessagesHandlers(outer2_3[79]).triggerHapticFeedback(outer2_1(outer2_3[80]).IMPACT_LIGHT);
          if (message.hasFlag(outer2_52.HAS_THREAD)) {
            let tmp10Result = tmp10(tmp11[82]);
            tmp10Result.transitionToGuild(messageChannel.guild_id, outer2_1(tmp11[72]).castMessageIdAsChannelId(message.id));
            const obj4 = outer2_1(tmp11[72]);
          } else {
            tmp10Result = tmp10(tmp11[83]);
            tmp10Result.handleCreateThread(messageChannel, message, "Message Shortcut");
          }
          const obj5 = MessagesHandlers(outer2_3[79]);
        }
      };
      this.handleInitiateEdit = (nativeEvent) => {
        let message;
        let messageChannel;
        const chatInputRef = self.params.chatInputRef;
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          const currentUser = outer2_37.getCurrentUser();
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          if (tmp6(message, id)) {
            const obj2 = MessagesHandlers(outer2_3[83]);
            obj2.handleEdit(message, messageChannel, chatInputRef, "message_swipe", true);
          }
          tmp6 = outer2_1(outer2_3[84]);
        }
      };
      this.handleTapMessage = (nativeEvent) => {
        let embedChannel;
        let flaggedMessageId;
        let message;
        let messageChannel;
        let obj = MessagesHandlers(outer2_3[41]);
        const messageData = self.getMessageData(obj.getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          const guildId = messageChannel.getGuildId();
          if (null != message) {
            if (null != guildId) {
              const type = message.type;
              if (outer2_54.GUILD_BOOST !== type) {
                if (outer2_54.GUILD_BOOST_TIER_1 !== type) {
                  if (outer2_54.GUILD_BOOST_TIER_2 !== type) {
                    if (outer2_54.GUILD_BOOST_TIER_3 !== type) {
                      if (outer2_54.AUTO_MODERATION_ACTION === type) {
                        if (obj7.isAutomodMessageRecord(message)) {
                          const result = MessagesHandlers(outer2_3[87]).extractAutomodMessageFields(message);
                          ({ embedChannel, flaggedMessageId } = result);
                          if (tmp5) {
                            let id;
                            if (null != embedChannel) {
                              id = embedChannel.id;
                            }
                            const result1 = self.handleTransitionToMessage(guildId, id, flaggedMessageId);
                          }
                          const obj2 = MessagesHandlers(outer2_3[87]);
                          tmp5 = null != flaggedMessageId && null != embedChannel;
                        }
                        obj7 = MessagesHandlers(outer2_3[87]);
                      }
                    }
                  }
                }
              }
              outer2_2(outer2_3[85]).openApplyBoostModal(guildId);
              const obj3 = outer2_2(outer2_3[85]);
              obj = {};
              obj = { section: outer2_49.CHANNEL_TEXT_AREA, object: outer2_46.BOOST_ANNOUNCEMENT_UPSELL };
              obj.location = obj;
              outer2_1(outer2_3[86]).trackWithMetadata(outer2_43.PREMIUM_GUILD_PROMOTION_OPENED, obj);
              const obj4 = outer2_1(outer2_3[86]);
            }
          }
        }
      };
      this.handleDoubleTapMessage = (nativeEvent) => {
        let message;
        let messageChannel;
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          const result = MessagesHandlers(outer2_3[88]).handleAddDefaultDoubleTapReaction(message, messageChannel);
          const obj2 = MessagesHandlers(outer2_3[88]);
        }
      };
      this.handleTapSeparator = (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        if (!self.isModalOrActionsheetObstructing()) {
          const type = nativeEvent.type;
          if (outer2_38.LOAD_MORE_BEFORE === type) {
            const params2 = self.params;
            const moreBefore = params2.loadMoreBefore();
          } else if (outer2_38.LOAD_MORE_AFTER === type) {
            const params = self.params;
            const moreAfter = params.loadMoreAfter();
          } else if (outer2_38.TOGGLE_BLOCKED_MESSAGES === type) {
            if (null != nativeEvent.context) {
              self.handleReveal(nativeEvent.context);
            }
          }
        }
      };
      this.handleTapCancelUploadItem = (nativeEvent) => {
        const uploaderId = nativeEvent.nativeEvent.uploaderId;
        const uploads = uploaderId.params.uploads;
        if (null != uploads) {
          const found = uploads.find((id) => id.id === uploaderId);
          if (null != found) {
            const result = MessagesHandlers(outer2_3[79]).triggerHapticFeedback(outer2_1(outer2_3[80]).IMPACT_LIGHT);
            const obj = MessagesHandlers(outer2_3[79]);
            outer2_1(outer2_3[89]).cancelUploadItem(found, tmp);
            const obj2 = outer2_1(outer2_3[89]);
          }
        }
      };
      this.handleTapSpotifyResource = (author) => {
        author = author.author;
        if (null != author) {
          if (null != author.id) {
            const findActivityResult = outer2_32.findActivity(author.id, (type) => type.type === outer3_42.LISTENING);
            MessagesHandlers(outer2_3[90]).openTrack(findActivityResult);
            const obj = MessagesHandlers(outer2_3[90]);
          }
        }
      };
      this.handleTapActivityResource = (activity) => {
        let application;
        let author;
        let deeplink_uri;
        let id;
        ({ author, application } = activity);
        if (null != author) {
          if (null != activity.activity) {
            if (null != application) {
              if (null != author.id) {
                const channel_id = activity.channel_id;
                const channel = outer2_24.getChannel(channel_id);
                ({ id, deeplink_uri } = application);
                const applicationActivity = outer2_32.getApplicationActivity(author.id, id);
                if (null != applicationActivity) {
                  const session_id = applicationActivity.session_id;
                  if (null != session_id) {
                    if (obj11.isIOS()) {
                      let ANDROID = outer2_41.IOS;
                    } else {
                      let obj = MessagesHandlers(outer2_3[64]);
                      if (obj.isAndroid()) {
                        ANDROID = outer2_41.ANDROID;
                      }
                    }
                    let hasFlagResult = null != applicationActivity.flags;
                    if (hasFlagResult) {
                      let obj1 = MessagesHandlers(outer2_3[91]);
                      hasFlagResult = obj1.hasFlag(applicationActivity.flags, outer2_40.EMBEDDED);
                    }
                    let tmp13 = null != ANDROID;
                    if (tmp13) {
                      const supported_platforms = applicationActivity.supported_platforms;
                      let hasItem;
                      if (null != supported_platforms) {
                        hasItem = supported_platforms.includes(ANDROID);
                      }
                      tmp13 = hasItem;
                    }
                    application = outer2_12.getApplication(id);
                    let tmp18 = null;
                    if (null != application) {
                      tmp18 = application;
                    }
                    if (null != tmp18) {
                      obj = { presenceActivity: applicationActivity, currentUserPresenceActivity: outer2_1(outer2_3[93])(outer2_29, outer2_35, id), currentUserId: outer2_23.getId(), message: activity, application: tmp18, isEmbeddedApplication: hasFlagResult, isFrameApplication: false, isGameLaunchable: tmp15 };
                      const canJoin = MessagesHandlers(outer2_3[92]).getCanJoin(obj);
                      const remoteJoinPlatform = canJoin.remoteJoinPlatform;
                      let tmp20;
                      if (null != remoteJoinPlatform) {
                        const party = applicationActivity.party;
                        id = undefined;
                        if (null != party) {
                          id = party.id;
                        }
                        tmp20 = id;
                      }
                      if (!canJoin.canJoin) {
                        let obj2 = MessagesHandlers(outer2_3[94]);
                        if (obj2.getSupportsRemoteJoin(applicationActivity)) {
                          if (obj4.getShouldShowAppAuthPrompt(tmp18)) {
                            const items = [outer2_1(outer2_3[37]).INVITE_EMBED];
                            const result = MessagesHandlers(outer2_3[96]).startAuthorizationNoHook(tmp18, items);
                          }
                          obj4 = MessagesHandlers(outer2_3[95]);
                        }
                      }
                      const obj12 = MessagesHandlers(outer2_3[92]);
                      obj = { userId: author.id, sessionId: session_id, application, channelId: channel_id, messageId: activity.id, applicationActivity, remotePartyId: tmp20, embedded: hasFlagResult, source: outer2_45.MESSAGE_EMBED };
                      const items1 = [outer2_1(outer2_3[37]).INVITE_EMBED];
                      obj.analyticsLocations = items1;
                      const joined = outer2_1(outer2_3[97]).join(obj);
                      obj1 = { type: outer2_44.JOIN, source: outer2_45.MESSAGE_EMBED, userId: activity.author.id };
                      let guild_id;
                      const obj6 = outer2_1(outer2_3[97]);
                      if (null != channel) {
                        guild_id = channel.guild_id;
                      }
                      obj1.guildId = guild_id;
                      obj1.channelId = channel_id;
                      obj1.applicationId = id;
                      const party2 = applicationActivity.party;
                      let id1;
                      if (null != party2) {
                        id1 = party2.id;
                      }
                      obj1.partyId = id1;
                      obj1.messageId = activity.id;
                      const items2 = [outer2_1(outer2_3[37]).INVITE_EMBED];
                      obj1.analyticsLocations = items2;
                      obj1.remoteJoinPlatform = remoteJoinPlatform;
                      outer2_1(outer2_3[98])(obj1);
                      const tmp33 = outer2_1(outer2_3[98]);
                    }
                    obj11 = MessagesHandlers(outer2_3[64]);
                    tmp15 = null != tmp13 && tmp13;
                  }
                } else if (null != deeplink_uri) {
                  outer2_1(outer2_3[99]).openURL(deeplink_uri, outer2_59.SAFARI);
                  obj2 = { type: outer2_44.PLAY, source: outer2_45.MESSAGE_EMBED, userId: activity.author.id };
                  let guild_id1;
                  const obj9 = outer2_1(outer2_3[99]);
                  if (null != channel) {
                    guild_id1 = channel.guild_id;
                  }
                  obj2.guildId = guild_id1;
                  obj2.channelId = channel_id;
                  obj2.applicationId = application.id;
                  obj2.messageId = activity.id;
                  const items3 = [outer2_1(outer2_3[37]).INVITE_EMBED];
                  obj2.analyticsLocations = items3;
                  outer2_1(outer2_3[98])(obj2);
                  const tmp48 = outer2_1(outer2_3[98]);
                }
              }
            }
          }
        }
      };
      this.handleTapStreamRequest = (channel_id) => {
        let obj = MessagesHandlers(outer2_3[100]);
        if (outer2_8(obj.canFulfillStreamRequest(channel_id, true), 1)[0]) {
          const channel = outer2_24.getChannel(channel_id.channel_id);
          if (null != channel) {
            const oSRequirement = MessagesHandlers(outer2_3[101]).getOSRequirement();
            const obj2 = MessagesHandlers(outer2_3[101]);
            obj = { channel, hasPermission: true, isActive: false, osRequirement: oSRequirement };
            MessagesHandlers(outer2_3[101]).getStreamPressHandler(obj)();
            const obj3 = MessagesHandlers(outer2_3[101]);
          }
        }
      };
      this.handleTapActivityInviteToJoin = (channel_id) => {
        let application;
        let author;
        ({ author, application } = channel_id);
        if (null != author) {
          if (null != application) {
            if (null != author.id) {
              const applicationActivity = outer2_35.getApplicationActivity(application.id, true);
              if (null != applicationActivity) {
                let obj = outer2_1(outer2_3[102]);
                obj = { channelId: channel_id.channel_id, type: outer2_39.JOIN, activity: applicationActivity, location: outer2_45.MESSAGE_EMBED };
                obj.sendActivityInvite(obj);
              }
            }
          }
        }
      };
      this.handleTapGuildEventInvite = (arg0) => {
        let guildEventId;
        let invite;
        let isMember;
        let primary;
        let recurrenceId;
        let secondary;
        ({ invite, primary, guildEventId, recurrenceId } = arg0);
        ({ isMember, secondary } = arg0);
        if (null != invite) {
          const guild_scheduled_event = invite.guild_scheduled_event;
          let id;
          if (null != guild_scheduled_event) {
            id = guild_scheduled_event.id;
          }
          guildEventId = id;
        }
        const guildScheduledEvent = outer2_15.getGuildScheduledEvent(guildEventId);
        if (null != guildScheduledEvent) {
          if (null != guildEventId) {
            if (!isMember) {
              if (null != invite) {
                outer2_1(outer2_3[59])(invite);
                let obj = { action: "accept" };
                return obj;
              }
            }
            if (secondary) {
              let inviteKeyFromExtraData = null;
              if (null != invite) {
                obj = { baseCode: invite.code, guildScheduledEventId: guildEventId };
                inviteKeyFromExtraData = MessagesHandlers(outer2_3[103]).generateInviteKeyFromExtraData(obj);
                const obj7 = MessagesHandlers(outer2_3[103]);
              }
              let tmp19;
              if (null != inviteKeyFromExtraData) {
                tmp19 = outer2_1(outer2_3[105])(inviteKeyFromExtraData);
              }
              MessagesHandlers(outer2_3[104]).openShareEvent(guildScheduledEvent, tmp19);
              obj = { action: "share" };
              return obj;
            } else {
              if (primary) {
                if (outer2_16(guildScheduledEvent)) {
                  const result = MessagesHandlers(outer2_3[104]).transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                  let obj1 = { action: "transition" };
                  let obj3 = obj1;
                  const obj5 = MessagesHandlers(outer2_3[104]);
                }
                return obj3;
              }
              obj1 = MessagesHandlers(outer2_3[104]);
              if (primary) {
                const result1 = obj1.handleGuildScheduledEventRsvp(guildScheduledEvent.id, recurrenceId, guildScheduledEvent.guild_id);
                const obj2 = { action: "rsvp" };
                obj3 = obj2;
              } else {
                const result2 = obj1.transitionToEventDetailsFromInvite(guildScheduledEvent, recurrenceId);
                obj3 = { action: "transition" };
              }
            }
          }
        }
        return { action: "noop" };
      };
      this._questsEmbedOnPress = (scrollToQuestId) => {
        let obj = MessagesHandlers(outer2_3[106]);
        if (!obj.isMetaQuest()) {
          const result = MessagesHandlers(outer2_3[107]).findQuestOrReplacement(scrollToQuestId, outer2_18.quests, outer2_18.excludedQuests);
          if (null != result) {
            obj = { scrollToQuestId: result.id, fromContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
            MessagesHandlers(outer2_3[108]).openQuestHome(obj);
            const obj5 = MessagesHandlers(outer2_3[108]);
          } else {
            obj = { fromContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
            MessagesHandlers(outer2_3[108]).openQuestHome(obj);
            const obj3 = MessagesHandlers(outer2_3[108]);
          }
          const obj2 = MessagesHandlers(outer2_3[107]);
        }
      };
      this._questsEmbedOnAccept = (scrollToQuestId) => {
        let obj = MessagesHandlers(outer2_3[106]);
        if (obj.isMetaQuest()) {
          let tmpResult = tmp(tmp2[108]);
          tmpResult.openDiscordQuestsFAQ();
        } else {
          tmpResult = tmp(tmp2[107]);
          const result = tmpResult.findQuestOrReplacement(scrollToQuestId, outer2_18.quests, outer2_18.excludedQuests);
          if (null != result) {
            if (null != outer2_18.questEnrollmentBlockedUntil) {
              obj = { scrollToQuestId: result.id, fromContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
              MessagesHandlers(outer2_3[108]).openQuestHome(obj);
              const obj10 = MessagesHandlers(outer2_3[108]);
            } else {
              const userStatus = result.userStatus;
              let enrolledAt;
              if (null != userStatus) {
                enrolledAt = userStatus.enrolledAt;
              }
              let tmp11 = null != enrolledAt;
              const _Date = Date;
              const date = new Date();
              if (!tmp11) {
                tmp11 = result.config.expiresAt < date.toISOString();
              }
              if (!tmp11) {
                obj = { questContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE, questContentCTA: MessagesHandlers(outer2_3[111]).QuestContentCTA.ACCEPT_QUEST, sourceQuestContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
                MessagesHandlers(outer2_3[110]).enrollInQuest(result.id, obj);
                const obj6 = MessagesHandlers(outer2_3[110]);
              }
              const obj1 = { scrollToQuestId: result.id, fromContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
              MessagesHandlers(outer2_3[108]).openQuestHome(obj1);
              const obj8 = MessagesHandlers(outer2_3[108]);
            }
          } else {
            let obj2 = MessagesHandlers(outer2_3[108]);
            obj2 = { fromContent: MessagesHandlers(outer2_3[109]).QuestContent.QUEST_EMBED_MOBILE };
            obj2.openQuestHome(obj2);
          }
        }
      };
      this.handleTapInviteEmbedAccept = (nativeEvent) => {
        let index;
        let primary;
        let secondary;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ index, primary, secondary } = nativeSyntheticEventData);
        const messageData = _Set.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          let id = messageData.message;
          const current = _Set.getParams().chatInputRef.current;
          if (null != current) {
            current.dismissKeyboard();
          }
          const tmp5 = outer2_66(id);
          let tmp6;
          if (null != tmp5) {
            tmp6 = tmp5[index];
          }
          if (null != tmp6) {
            if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.INVITE) {
              const invite = outer2_28.getInvite(tmp6.code);
              if (null != invite) {
                id = outer2_23.getId();
                let id1;
                if (null != invite) {
                  const guild = invite.guild;
                  if (null != guild) {
                    id1 = guild.id;
                  }
                }
                const isMemberResult = outer2_26.isMember(id1, id);
                let flag = false;
                if (isMemberResult) {
                  flag = false;
                  if (null != invite.roles) {
                    flag = false;
                    if (invite.roles.length > 0) {
                      const guild2 = invite.guild;
                      let id2;
                      if (null != guild2) {
                        id2 = guild2.id;
                      }
                      flag = false;
                      if (null != id2) {
                        const member = outer2_26.getMember(invite.guild.id, id);
                        _Set = Set;
                        let roles;
                        if (null != member) {
                          roles = member.roles;
                        }
                        if (null == roles) {
                          roles = [];
                        }
                        const prototype = _Set.prototype;
                        _Set = new _Set(roles);
                        roles = invite.roles;
                        flag = roles.some((id) => !_Set.has(id.id));
                      }
                    }
                  }
                }
                const inviteInstanceId = MessagesHandlers(outer2_3[103]).getInviteInstanceId(tmp6.code, id.id);
                const obj6 = MessagesHandlers(outer2_3[103]);
                if (obj7.isGuildScheduledEventInviteEmbed(invite)) {
                  obj = { invite, isMember: isMemberResult, primary, secondary };
                  let str5 = _Set.handleTapGuildEventInvite(obj).action;
                } else {
                  if (isMemberResult) {
                    if (!flag) {
                      const result = _Set.handleTransitionToInviteChannel(invite);
                      str5 = "transition";
                    }
                  }
                  const result1 = _Set.handleAcceptInstantInvite(invite, inviteInstanceId);
                  str5 = "accept";
                }
                const guild3 = invite.guild;
                let id3;
                if (null != guild3) {
                  id3 = guild3.id;
                }
                if (null != id3) {
                  const guildInviteExtendedType = MessagesHandlers(outer2_3[58]).getGuildInviteExtendedType(invite);
                  if (guildInviteExtendedType === MessagesHandlers(outer2_3[58]).GuildInviteExtendedType.VOICE_CHANNEL) {
                    obj = { guildId: id3, location: "mobile_invite_embed" };
                    if (obj9.getVoiceChannelListInviteExperiment(obj).enabled) {
                      const obj11 = MessagesHandlers(outer2_3[114]);
                      let obj1 = { invite, action: str5 };
                      str5 = id.author.id;
                      obj1.inviter_id = str5;
                      id = id.id;
                      obj1.invite_message_id = id;
                      obj1.invite_instance_id = inviteInstanceId;
                      const result2 = MessagesHandlers(outer2_3[115]).trackInviteEmbedActioned(obj1, items1);
                      const obj12 = MessagesHandlers(outer2_3[115]);
                    }
                    const items = [outer2_1(outer2_3[37]).INVITE_EMBED, outer2_1(outer2_3[37]).VOICE_CHANNEL_LIST_INVITE_EMBED];
                    items1 = items;
                    obj9 = MessagesHandlers(outer2_3[113]);
                  }
                  const obj14 = MessagesHandlers(outer2_3[58]);
                }
                items1 = [outer2_1(outer2_3[37]).INVITE_EMBED];
                obj7 = MessagesHandlers(outer2_3[58]);
              }
            } else if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.CHANNEL_LINK) {
              const obj2 = {};
              [obj5.guildId, obj5.channelId] = outer2_8(tmp6.code.split("/"), 2);
              obj2.message = id;
              const result3 = _Set.handleTapVoiceChannelPreview(obj2);
              const str3 = tmp6.code;
              const tmp20 = outer2_8(tmp6.code.split("/"), 2);
            } else {
              if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.BUILD_OVERRIDE) {
                if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                  if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.QUESTS_EMBED) {
                    _Set._questsEmbedOnAccept(tmp6.code);
                  } else if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                    obj1 = MessagesHandlers(outer2_3[117]);
                    let obj3 = { skuId: outer2_8(tmp6.code.split("-"), 1)[0] };
                    const items2 = [outer2_1(outer2_3[37]).GIFT_CODE_EMBED];
                    obj3.analyticsLocations = items2;
                    const result4 = obj1.openSocialLayerStorefrontProductDetailsModal(obj3);
                    const str = tmp6.code;
                  }
                }
              }
              obj3 = MessagesHandlers(outer2_3[116]);
              obj3.toggleOverride(tmp6.code);
            }
          }
        }
      };
      this.handleTapInviteEmbed = (nativeEvent) => {
        let primary;
        let secondary;
        let obj = MessagesHandlers(outer2_3[41]);
        let nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ primary, secondary } = nativeSyntheticEventData);
        const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const message = messageData.message;
          const current = self.getParams().chatInputRef.current;
          if (null != current) {
            current.dismissKeyboard();
          }
          const tmp5 = outer2_66(message);
          let tmp6;
          if (null != tmp5) {
            tmp6 = tmp5[nativeSyntheticEventData.index];
          }
          if (null != tmp6) {
            const id = outer2_23.getId();
            if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.INVITE) {
              if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE) {
                if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.TEMPLATE) {
                  outer2_1(outer2_3[120]).showModal(tmp6.code);
                  const obj12 = outer2_1(outer2_3[120]);
                } else {
                  if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.BUILD_OVERRIDE) {
                    if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.MANUAL_BUILD_OVERRIDE) {
                      nativeSyntheticEventData = MessagesHandlers;
                      nativeSyntheticEventData = outer2_3;
                      if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.EXPERIMENT) {
                        let obj7 = MessagesHandlers(outer2_3[121]);
                        const experimentFromEmbedURL = obj7.getExperimentFromEmbedURL(tmp6.code);
                        if (null != experimentFromEmbedURL) {
                          const experimentTreatmentFromEmbedURL = MessagesHandlers(outer2_3[121]).getExperimentTreatmentFromEmbedURL(tmp6.code);
                          const obj9 = MessagesHandlers(outer2_3[121]);
                          const result = MessagesHandlers(outer2_3[122]).handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL);
                          const obj10 = MessagesHandlers(outer2_3[122]);
                        }
                      } else {
                        nativeSyntheticEventData = MessagesHandlers;
                        nativeSyntheticEventData = outer2_3;
                        if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.EVENT) {
                          const tmp25 = outer2_8(tmp6.code.split("-"), 3);
                          obj = { invite: null, isMember: outer2_26.isMember(tmp25[0], id), primary, secondary, guildEventId: tmp25[1], recurrenceId: tmp25[2] };
                          const result1 = self.handleTapGuildEventInvite(obj);
                          const str7 = tmp6.code;
                        } else {
                          nativeSyntheticEventData = MessagesHandlers;
                          nativeSyntheticEventData = outer2_3;
                          if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.CHANNEL_LINK) {
                            obj = {};
                            [obj6.guildId, obj6.channelId] = outer2_8(tmp6.code.split("/"), 2);
                            obj.message = message;
                            const result2 = self.handleTapVoiceChannelPreview(obj);
                            const str5 = tmp6.code;
                            const tmp21 = outer2_8(tmp6.code.split("/"), 2);
                          } else {
                            nativeSyntheticEventData = MessagesHandlers;
                            nativeSyntheticEventData = outer2_3;
                            if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.APP_DIRECTORY_PROFILE) {
                              const application = outer2_13.getApplication(tmp6.code);
                              if (null != application) {
                                let obj3 = MessagesHandlers(outer2_3[123]);
                                let obj1 = {};
                                ({ id: obj5.applicationId, custom_install_url: obj5.customInstallUrl, install_params: obj5.installParams, integration_types_config: obj5.integrationTypesConfig } = application);
                                obj1.source = "app_directory_profile_embed";
                                obj3.installApplication(obj1);
                              }
                            } else {
                              nativeSyntheticEventData = MessagesHandlers;
                              nativeSyntheticEventData = outer2_3;
                              if (tmp6.type === MessagesHandlers(outer2_3[112]).CodedLinkType.QUESTS_EMBED) {
                                self._questsEmbedOnPress(tmp6.code);
                              } else {
                                nativeSyntheticEventData = MessagesHandlers;
                                nativeSyntheticEventData = outer2_3;
                                if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
                                  nativeSyntheticEventData = MessagesHandlers;
                                  nativeSyntheticEventData = outer2_3;
                                  if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                                    nativeSyntheticEventData = MessagesHandlers;
                                    nativeSyntheticEventData = outer2_3;
                                    if (tmp6.type !== MessagesHandlers(outer2_3[112]).CodedLinkType.APP_OAUTH2_LINK) {
                                      const _Error = Error;
                                      const _HermesInternal = HermesInternal;
                                      throw Error("Unknown coded link type: " + tmp6.type);
                                    } else {
                                      nativeSyntheticEventData = outer2_12;
                                      nativeSyntheticEventData = outer2_12.getApplication(tmp6.code);
                                      if (null != nativeSyntheticEventData) {
                                        nativeSyntheticEventData = outer2_1;
                                        nativeSyntheticEventData = outer2_3;
                                        nativeSyntheticEventData = outer2_43;
                                        const obj2 = { application_id: nativeSyntheticEventData.id };
                                        nativeSyntheticEventData = outer2_1(outer2_3[86]).trackWithMetadata(outer2_43.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, obj2);
                                        nativeSyntheticEventData = MessagesHandlers;
                                        const obj27 = outer2_1(outer2_3[86]);
                                        obj3 = {};
                                        ({ id: obj30.applicationId, customInstallUrl: obj30.customInstallUrl, installParams: obj30.installParams, integrationTypesConfig: obj30.integrationTypesConfig } = nativeSyntheticEventData);
                                        obj3.source = "app_oauth2_link_embed";
                                        nativeSyntheticEventData = MessagesHandlers(outer2_3[123]).installApplication(obj3);
                                        const obj29 = MessagesHandlers(outer2_3[123]);
                                      }
                                    }
                                  }
                                }
                                obj1 = MessagesHandlers(outer2_3[117]);
                                const obj4 = { skuId: outer2_8(tmp6.code.split("-"), 1)[0] };
                                const items = [outer2_1(outer2_3[37]).GIFT_CODE_EMBED];
                                obj4.analyticsLocations = items;
                                const result3 = obj1.openSocialLayerStorefrontProductDetailsModal(obj4);
                                const str2 = tmp6.code;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  MessagesHandlers(outer2_3[116]).toggleOverride(tmp6.code);
                  const obj11 = MessagesHandlers(outer2_3[116]);
                }
              }
            }
            const invite = outer2_28.getInvite(tmp6.code);
            let id1;
            if (null != invite) {
              const guild = invite.guild;
              if (null != guild) {
                id1 = guild.id;
              }
            }
            const isMemberResult = outer2_26.isMember(id1, id);
            if (null != invite) {
              const guild4 = invite.guild;
              let id2;
              if (null != guild4) {
                id2 = guild4.id;
              }
              let enabled = null != id2;
              if (enabled) {
                const guildInviteExtendedType = MessagesHandlers(outer2_3[58]).getGuildInviteExtendedType(invite);
                enabled = guildInviteExtendedType === MessagesHandlers(outer2_3[58]).GuildInviteExtendedType.VOICE_CHANNEL;
                const obj13 = MessagesHandlers(outer2_3[58]);
              }
              if (enabled) {
                const obj5 = { guildId: id2, location: "mobile_invite_embed" };
                enabled = MessagesHandlers(outer2_3[113]).getVoiceChannelListInviteExperiment(obj5).enabled;
                const obj14 = MessagesHandlers(outer2_3[113]);
              }
              if (enabled) {
                enabled = MessagesHandlers(outer2_3[114]).canShowVoiceChannelListInviteEmbed(invite);
                const obj16 = MessagesHandlers(outer2_3[114]);
              }
              if (obj17.isGuildScheduledEventInviteEmbed(invite)) {
                const obj6 = { invite, isMember: isMemberResult, primary, secondary };
                let str10 = self.handleTapGuildEventInvite(obj6).action;
              } else {
                if (enabled) {
                  let channel = invite.channel;
                  let id3;
                  if (null != channel) {
                    id3 = channel.id;
                  }
                  if (null != id3) {
                    channel = outer2_24.getChannel(invite.channel.id);
                    str10 = "noop";
                    if (null != channel) {
                      const guildId = channel.getGuildId();
                      let tmp72 = null != guildId;
                      if (tmp72) {
                        tmp72 = guildId !== outer2_34.getGuildId();
                      }
                      if (tmp72) {
                        MessagesHandlers(outer2_3[118]).transitionToGuild(guildId);
                        const obj23 = MessagesHandlers(outer2_3[118]);
                      }
                      const result4 = MessagesHandlers(outer2_3[46]).navigateToVoiceChannel(channel, "Mobile Invite Embed");
                      str10 = "voice channel preview";
                      const obj24 = MessagesHandlers(outer2_3[46]);
                    }
                  }
                }
                const guild2 = invite.guild;
                let id4;
                if (null != guild2) {
                  id4 = guild2.id;
                }
                if (null != id4) {
                  const _HermesInternal2 = HermesInternal;
                  const obj20 = outer2_1(outer2_3[52]);
                  obj7 = { guildId: invite.guild.id };
                  const combined = "GuildProfileActionSheet:" + invite.guild.id;
                  obj7.context = MessagesHandlers(outer2_3[119]).GuildProfileCTAContext.INVITE;
                  obj7.inviteKey = tmp6.code;
                  obj20.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths), combined, obj7);
                  str10 = "show profile";
                  const tmp66 = MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths);
                } else if (isMemberResult) {
                  const result5 = obj18.handleTransitionToInviteChannel(invite);
                  str10 = "transition";
                } else {
                  const result6 = obj18.handleAcceptInstantInvite(invite, MessagesHandlers(outer2_3[103]).getInviteInstanceId(tmp6.code, message.id));
                  str10 = "accept";
                  const obj19 = MessagesHandlers(outer2_3[103]);
                }
              }
              const INVITE_EMBED = outer2_1(outer2_3[37]).INVITE_EMBED;
              if (enabled) {
                const items1 = [INVITE_EMBED, tmp81(tmp82[37]).VOICE_CHANNEL_LIST_INVITE_EMBED];
                let items2 = items1;
              } else {
                items2 = [INVITE_EMBED];
              }
              obj17 = MessagesHandlers(outer2_3[58]);
              tmp81 = outer2_1;
              tmp82 = outer2_3;
              let id5;
              if (null != invite) {
                const guild3 = invite.guild;
                if (null != guild3) {
                  id5 = guild3.id;
                }
              }
              const result7 = MessagesHandlers(outer2_3[115]).trackInviteServerClicked(id5, str10, items2);
              const obj26 = MessagesHandlers(outer2_3[115]);
            }
          }
        }
      };
      this.handleTapVoiceChannelPreview = (message) => {
        let channelId;
        let guildId;
        ({ guildId, channelId } = message);
        guildId = outer2_34.getGuildId();
        channelId = outer2_33.getChannelId(guildId);
        const channel = outer2_24.getChannel(channelId);
        if (null != channel) {
          const obj = { author_id: message.message.author.id, link_guild_id: guildId, link_channel_id: channelId, link_channel_type: channel.type, guild_id: guildId, channel_id: channelId };
          outer2_1(outer2_3[124]).track(outer2_43.CHANNEL_LINK_PREVIEW_JOINED, obj);
          const current = self.getParams().chatInputRef.current;
          if (null != current) {
            current.dismissKeyboard();
          }
          const obj8 = outer2_1(outer2_3[124]);
          if (!obj2.shouldShowAgeGateForVoiceChannel(channelId)) {
            if (!obj3.shouldShowSpoilerGateForChannelId(channelId)) {
              if (channel.isGuildStageVoice()) {
                MessagesHandlers(outer2_3[127]).connectAndOpen(channel);
                const obj6 = MessagesHandlers(outer2_3[127]);
              } else {
                const voiceChannel = outer2_1(outer2_3[128]).selectVoiceChannel(channelId);
                const obj4 = outer2_1(outer2_3[128]);
                MessagesHandlers(outer2_3[46]).openChannelCallModal(channel);
                const obj5 = MessagesHandlers(outer2_3[46]);
              }
            }
            obj3 = MessagesHandlers(outer2_3[126]);
          }
          obj2 = MessagesHandlers(outer2_3[125]);
          MessagesHandlers(outer2_3[82]).transitionTo(outer2_56.CHANNEL(guildId, channelId));
          const obj7 = MessagesHandlers(outer2_3[82]);
        }
      };
      this.handleTapJoinActivity = (nativeEvent) => {
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          const message = messageData.message;
          const activity = message.activity;
          if (null != activity) {
            const type = activity.type;
            if (type === outer2_39.LISTEN) {
              const result = self.handleTapSpotifyResource(message);
            } else if (type === outer2_39.JOIN) {
              const result1 = self.handleTapActivityResource(message);
            } else if (type === outer2_39.STREAM_REQUEST) {
              const result2 = self.handleTapStreamRequest(message);
            }
          }
        }
      };
      this.handleTapJoinRichPresence = (nativeEvent) => {
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          const message = messageData.message;
          const activity = message.activity;
          if (null != activity) {
            const type = activity.type;
            if (type === outer2_39.LISTEN) {
              const result = self.handleTapSpotifyResource(message);
            } else if (type === outer2_39.JOIN) {
              const result1 = self.handleTapActivityResource(message);
            } else if (type === outer2_39.JOIN_REQUEST) {
              const result2 = self.handleTapActivityInviteToJoin(message);
            } else if (type === outer2_39.STREAM_REQUEST) {
              const result3 = self.handleTapStreamRequest(message);
            }
          }
        }
      };
      this.handleAcceptInstantInvite = (code, invite_instance_id) => {
        let obj = MessagesHandlers(outer2_3[129]);
        if (!obj.handleNSFWGuildInvite(code)) {
          if (null != code.code) {
            if (code.type === outer2_60.GUILD) {
              let obj1 = MessagesHandlers(outer2_3[130]);
              if (obj1.isAtGuildCapAndNonPremium()) {
                obj = { initialUpsellKey: outer2_57.GUILD_CAP };
                obj = { page: outer2_48.INVITE_EMBED };
                obj.analyticsLocation = obj;
                const items = [outer2_1(outer2_3[37]).INVITE_EMBED];
                obj.analyticsLocations = items;
                obj1 = { type: outer2_62.GUILD_CAP_MODAL_UPSELL };
                obj.analyticsProperties = obj1;
                const result = outer2_1(outer2_3[131]).handleShowUpsellAlert(obj);
              }
            }
            let obj2 = outer2_1(outer2_3[115]);
            obj2 = { inviteKey: code.code };
            const obj3 = { location: "Invite Button Embed" };
            if (null != invite_instance_id) {
              const obj4 = { invite_instance_id };
              let obj5 = obj4;
            } else {
              obj5 = {};
            }
            const merged = Object.assign(obj5);
            obj2.context = obj3;
            obj2.callback = self.handleTransitionToInviteChannel;
            obj2.acceptInvite(obj2);
          }
        }
      };
      this.handleTransitionToInviteChannel = (closure_0) => {
        outer2_1(outer2_3[115]).transitionToInvite(closure_0, { forceTransition: true });
      };
      this.handleTapGiftCodeEmbed = () => {

      };
      this.handleTapGiftCodeAccept = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const giftCode = nativeSyntheticEventData.giftCode;
        const currentUser = outer2_37.getCurrentUser();
        if (null != currentUser) {
          if (currentUser.verified) {
            const value = outer2_25.get(giftCode);
            if (null != value) {
              if (null != value.giftStyle) {
                const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
              }
              if (self.params.paymentsBlocked) {
                tmp11(tmp12[133])();
              } else {
                let tmp11Result = tmp11(tmp12[124]);
                tmp11Result.track(outer2_43.OPEN_MODAL, { type: "gift_accept", location: null });
                tmp11Result = tmp11(tmp12[134]);
                obj = { code: giftCode };
                let content;
                if (null != messageData) {
                  content = messageData.message.content;
                }
                obj.customMessage = content;
                let id;
                if (null != messageData) {
                  const message = messageData.message;
                  if (null != message) {
                    const giftInfo = message.giftInfo;
                    if (null != giftInfo) {
                      const sound = giftInfo.sound;
                      if (null != sound) {
                        id = sound.id;
                      }
                    }
                  }
                }
                obj.soundId = id;
                let name;
                if (null != messageData) {
                  const message2 = messageData.message;
                  if (null != message2) {
                    const giftInfo2 = message2.giftInfo;
                    if (null != giftInfo2) {
                      const emoji = giftInfo2.emoji;
                      if (null != emoji) {
                        name = emoji.name;
                      }
                    }
                  }
                }
                obj.emojiName = name;
                tmp11Result.pushLazy(MessagesHandlers(tmp12[40])(tmp12[135], tmp12.paths), obj);
                const tmp16 = MessagesHandlers(tmp12[40])(tmp12[135], tmp12.paths);
              }
            }
          } else {
            outer2_1(outer2_3[132]).open();
            const obj2 = outer2_1(outer2_3[132]);
          }
        }
      };
      this.handleTapReferralRedeem = () => {
        let obj = MessagesHandlers(outer2_3[136]);
        if (obj.canOpenPremiumPlanDirectlyForReferralTrial()) {
          obj = {};
          obj = { page: outer2_48.REFERRAL_MESSAGE_EMBED };
          obj.analyticsLocation = obj;
          const items = [outer2_1(outer2_3[37]).REFERRAL_MESSAGE_EMBED];
          obj.analyticsLocations = items;
          obj.premiumType = outer2_61.TIER_2;
          outer2_1(outer2_3[137])(obj);
          const tmp7 = outer2_1(outer2_3[137]);
        } else {
          let obj1 = MessagesHandlers(outer2_3[138]);
          obj1 = { screen: outer2_58.PREMIUM };
          obj1.openUserSettings(obj1);
        }
      };
      this.getGiftIntentCtaContext = (nativeEvent) => {
        let giftIntentType;
        let recipientUserId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const messageId = nativeSyntheticEventData.messageId;
        ({ recipientUserId, giftIntentType } = nativeSyntheticEventData);
        const parseGiftIntentTypeResult = MessagesHandlers(outer2_3[139]).parseGiftIntentType(giftIntentType);
        if (null == parseGiftIntentTypeResult) {
          return null;
        } else {
          const params = self.params;
          const message = params.getMessage(messageId);
          let channel_id;
          if (null != message) {
            channel_id = message.channel_id;
          }
          if (null == channel_id) {
            channel_id = self.params.selectedChannelId;
          }
          obj = { channel: outer2_24.getChannel(channel_id), giftIntentType: parseGiftIntentTypeResult, messageId, recipientUserId };
          return obj;
        }
        const obj2 = MessagesHandlers(outer2_3[139]);
      };
      this.handleTapGiftIntentPrimaryCta = (arg0) => {
        let channel;
        let recipientUserId;
        const giftIntentCtaContext = self.getGiftIntentCtaContext(arg0);
        if (null != giftIntentCtaContext) {
          ({ channel, recipientUserId } = giftIntentCtaContext);
          const userAffinity = outer2_22.getUserAffinity(recipientUserId);
          let obj = { gift_intent_type: giftIntentCtaContext.giftIntentType };
          let dmProbability;
          if (null != userAffinity) {
            dmProbability = userAffinity.dmProbability;
          }
          obj.affinity = dmProbability;
          obj.location_stack = outer2_65;
          outer2_1(outer2_3[124]).track(outer2_43.GIFT_INTENT_ACTION_BUTTON_CLICKED, obj);
          obj = MessagesHandlers(outer2_3[140]);
          obj = { recipientUserId };
          let str = {};
          let guild_id;
          if (null != channel) {
            guild_id = channel.guild_id;
          }
          if (null != guild_id) {
            let DM_CHANNEL = outer2_48.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = outer2_48.DM_CHANNEL;
          }
          str.page = DM_CHANNEL;
          obj.analyticsLocation = str;
          obj.analyticsLocations = outer2_65;
          const obj1 = {};
          str = "card";
          obj1.presentation = "card";
          obj.navigationParams = obj1;
          obj = obj.openGiftModal(obj);
          const obj4 = outer2_1(outer2_3[124]);
        }
      };
      this.handleTapGiftIntentSecondaryCta = (arg0) => {
        const giftIntentCtaContext = self.getGiftIntentCtaContext(arg0);
        if (tmp2) {
          let obj = outer2_1(outer2_3[124]);
          obj = { gift_intent_type: giftIntentCtaContext.giftIntentType, cta_type: "send_message", location_stack: outer2_65 };
          obj.track(outer2_43.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, obj);
          obj = { channelId: giftIntentCtaContext.channel.id, giftIntentType: giftIntentCtaContext.giftIntentType };
          outer2_1(outer2_3[134]).pushLazy(MessagesHandlers(outer2_3[40])(outer2_3[141], outer2_3.paths), obj);
          const obj3 = outer2_1(outer2_3[134]);
        }
      };
      this.handleGiftIntentCardViewed = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const parseGiftIntentTypeResult = MessagesHandlers(outer2_3[139]).parseGiftIntentType(obj.getNativeSyntheticEventData(nativeEvent).giftIntentType);
        if (null != parseGiftIntentTypeResult) {
          obj = { name: MessagesHandlers(outer2_3[143]).ImpressionNames.GIFT_INTENT_CARD, type: MessagesHandlers(outer2_3[143]).ImpressionTypes.VIEW };
          obj = { gift_intent_type: parseGiftIntentTypeResult, num_friend_anniversaries: outer2_17.getFriendAnniversaries().length };
          obj.properties = obj;
          MessagesHandlers(outer2_3[142]).trackImpression(obj);
          const obj3 = MessagesHandlers(outer2_3[142]);
        }
      };
      this.handleTapEmoji = (emojiNode) => {
        if (!self.isModalOrActionsheetObstructing()) {
          MessagesHandlers(outer2_3[44]).contentHandlers.onTapEmoji(emojiNode);
          const contentHandlers = MessagesHandlers(outer2_3[44]).contentHandlers;
        }
      };
      this.handleTapTimestamp = (nativeEvent) => {
        MessagesHandlers(outer2_3[44]).contentHandlers.onTapTimestamp(nativeEvent);
      };
      this.handleTapInlineCode = (nativeEvent) => {
        MessagesHandlers(outer2_3[44]).contentHandlers.onTapInlineCode(nativeEvent);
      };
      this.handleTapRoleIcon = (nativeEvent) => {
        let roleIconSource;
        let roleIconUnicodeEmoji;
        let roleName;
        ({ roleName, roleIconSource, roleIconUnicodeEmoji } = nativeEvent.nativeEvent);
        let obj = outer2_1(outer2_3[144]);
        obj = { key: "ROLE_NAME-" + roleName };
        let combined = roleName;
        if (null != roleIconUnicodeEmoji) {
          const _HermesInternal = HermesInternal;
          combined = "" + roleIconUnicodeEmoji + " " + roleName;
        }
        obj.content = combined;
        let tmp2;
        if (null != roleIconSource) {
          obj = { uri: roleIconSource };
          tmp2 = obj;
        }
        obj.icon = tmp2;
        obj.open(obj);
      };
      this.handleTapVoiceChannelBadge = (nativeEvent) => {
        const channel = outer2_24.getChannel(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).channelId);
        if (null != channel) {
          const result = MessagesHandlers(outer2_3[46]).navigateToVoiceChannel(channel);
          const obj2 = MessagesHandlers(outer2_3[46]);
        }
      };
      this.handleTapGameIcon = (nativeEvent) => {
        let gameApplicationId;
        let timestamp;
        ({ gameApplicationId, timestamp } = nativeEvent.nativeEvent);
        if (!self.isModalOrActionsheetObstructing()) {
          let obj = outer2_1(outer2_3[52]);
          obj = { applicationId: gameApplicationId, messageTimestamp: timestamp };
          obj.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[145], outer2_3.paths), "MessageGameIconActionSheet", obj);
        }
      };
      this.handleTapSuppressNotificationsIcon = () => {
        let obj = outer2_1(outer2_3[144]);
        obj = { key: "SUPPRESS_NOTIFICATIONS_TOOLTIP" };
        const intl = MessagesHandlers(outer2_3[48]).intl;
        obj.content = intl.string(MessagesHandlers(outer2_3[48]).t["RO/KYj"]);
        obj.icon = outer2_1(outer2_3[146]);
        obj.open(obj);
      };
      this.handleTapConnectionsRoleTag = (nativeEvent) => {
        let channelId;
        let guildId;
        let roleId;
        let userId;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        ({ userId, guildId, channelId, roleId } = nativeSyntheticEventData);
        const obj = MessagesHandlers(outer2_3[41]);
        outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[147], outer2_3.paths), "ConnectionsRoleMessageBadgeActionSheet", { userId, guildId, channelId, roleId });
      };
      this.handleTapTimeoutIcon = () => {
        let obj = outer2_1(outer2_3[144]);
        obj = { key: "GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY" };
        const intl = MessagesHandlers(outer2_3[48]).intl;
        obj.content = intl.string(MessagesHandlers(outer2_3[48]).t["AeYyL+"]);
        obj.icon = outer2_1(outer2_3[146]);
        obj.open(obj);
      };
      this.handleReveal = (messageId) => {
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          let tmp5 = null;
          if (self.params.revealedMessageId !== messageId) {
            tmp5 = messageId;
          }
          outer2_1(outer2_3[148]).revealMessage(messageData.messageChannel.id, tmp5);
          const obj = outer2_1(outer2_3[148]);
        }
      };
      this.handleTapButtonActionComponent = (nativeEvent) => {
        let componentId;
        let message;
        let messageChannel;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, componentId } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          let id = message.applicationId;
          if (null == id) {
            id = message.author.id;
          }
          const obj2 = MessagesHandlers(outer2_3[149]);
          const flattenComponentsResult = MessagesHandlers(outer2_3[149]).flattenComponents(message.components);
          const value = flattenComponentsResult.get(MessagesHandlers(outer2_3[76]).asComponentId(componentId));
          let tmp6 = null != value;
          if (tmp6) {
            tmp6 = value.type === MessagesHandlers(outer2_3[150]).ComponentType.BUTTON;
          }
          if (tmp6) {
            tmp6 = null != value.customId;
          }
          if (tmp6) {
            if (value.style !== MessagesHandlers(outer2_3[150]).ButtonStyle.PREMIUM) {
              obj = { componentType: MessagesHandlers(outer2_3[150]).ComponentType.BUTTON, messageId, messageFlags: message.flags, customId: value.customId };
              const obj5 = MessagesHandlers(outer2_3[152]);
              obj.componentId = MessagesHandlers(outer2_3[76]).asComponentId(componentId);
              obj.applicationId = id;
              obj.channelId = messageChannel.id;
              obj.guildId = messageChannel.getGuildId();
              const result = obj5.executeMessageComponentInteraction(obj);
              const obj7 = MessagesHandlers(outer2_3[76]);
            } else {
              obj = {};
              const intl = MessagesHandlers(outer2_3[48]).intl;
              obj.title = intl.string(MessagesHandlers(outer2_3[48]).t["ZtdF0+"]);
              const intl2 = MessagesHandlers(outer2_3[48]).intl;
              obj.body = intl2.string(MessagesHandlers(outer2_3[48]).t["0BEZLT"]);
              const intl3 = MessagesHandlers(outer2_3[48]).intl;
              obj.confirmText = intl3.string(MessagesHandlers(outer2_3[48]).t.BddRzS);
              outer2_1(outer2_3[151]).show(obj);
              const obj8 = outer2_1(outer2_3[151]);
            }
          }
          const obj4 = MessagesHandlers(outer2_3[76]);
        }
      };
      this.handleTapSelectActionComponent = (nativeEvent) => {
        let applicationId;
        let closure_1;
        let message;
        let messageChannel;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const messageId = nativeSyntheticEventData.messageId;
        const messageData = messageId.getMessageData(messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          ({ flags: closure_1, applicationId } = message);
          if (null == applicationId) {
            applicationId = message.author.id;
          }
          const id = messageChannel.id;
          const guildId = messageChannel.getGuildId();
          let obj1 = MessagesHandlers(outer2_3[149]);
          const flattenComponentsResult = obj1.flattenComponents(message.components);
          const value = flattenComponentsResult.get(MessagesHandlers(outer2_3[76]).asComponentId(nativeSyntheticEventData.componentId));
          if (null != value) {
            const parents = MessagesHandlers(outer2_3[149]).getParents(message.components, value);
            let first;
            if (null != parents) {
              first = parents[0];
            }
            let type;
            if (null != first) {
              type = first.type;
            }
            let tmp11;
            if (type === MessagesHandlers(outer2_3[150]).ComponentType.LABEL) {
              tmp11 = first;
            }
            obj = { channelId: id, guildId, containerId: messageId, labelComponent: tmp11 };
            const obj11 = MessagesHandlers(outer2_3[149]);
            obj.allowEmpty = MessagesHandlers(outer2_3[149]).canSelectBeEmpty(value, "message");
            obj.onSubmit = function onSubmit(localState) {
              let obj = MessagesHandlers(outer3_3[152]);
              obj = { componentType: value.type, messageId, messageFlags: closure_1, customId: value.customId, componentId: value.id, applicationId, channelId: id, guildId, localState };
              const result = obj.executeMessageComponentInteraction(obj);
            };
            type = value.type;
            if (MessagesHandlers(outer2_3[150]).ComponentType.STRING_SELECT === type) {
              const _HermesInternal2 = HermesInternal;
              const obj9 = outer2_1(outer2_3[52]);
              obj = { selectionActionComponent: value };
              const combined = "StringSelectComponentActionSheet:" + messageId;
              const merged = Object.assign(obj);
              obj9.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[153], outer2_3.paths), combined, obj);
              const tmp27 = MessagesHandlers(outer2_3[40])(outer2_3[153], outer2_3.paths);
            } else {
              if (MessagesHandlers(outer2_3[150]).ComponentType.USER_SELECT !== type) {
                if (MessagesHandlers(outer2_3[150]).ComponentType.ROLE_SELECT !== type) {
                  if (MessagesHandlers(outer2_3[150]).ComponentType.MENTIONABLE_SELECT !== type) {
                    if (MessagesHandlers(outer2_3[150]).ComponentType.CHANNEL_SELECT === type) {
                      const _HermesInternal3 = HermesInternal;
                      const obj12 = outer2_1(outer2_3[52]);
                      obj1 = { selectionActionComponent: value };
                      const combined1 = "ChannelSelectComponentActionSheet:" + messageId;
                      const merged1 = Object.assign(obj);
                      obj12.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[155], outer2_3.paths), combined1, obj1);
                      const tmp48 = MessagesHandlers(outer2_3[40])(outer2_3[155], outer2_3.paths);
                    }
                  }
                }
              }
              const _HermesInternal = HermesInternal;
              const obj7 = outer2_1(outer2_3[52]);
              const obj2 = { selectionActionComponent: value };
              const combined2 = "MentionableSelectComponentActionSheet:" + messageId;
              const merged2 = Object.assign(obj);
              obj7.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[154], outer2_3.paths), combined2, obj2);
              const tmp17 = MessagesHandlers(outer2_3[40])(outer2_3[154], outer2_3.paths);
            }
            const obj6 = MessagesHandlers(outer2_3[149]);
          }
          const obj4 = MessagesHandlers(outer2_3[76]);
        }
      };
      this.handleTapWelcomeReply = (nativeEvent) => {
        let message;
        let messageChannel;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        const stickerId = nativeSyntheticEventData.stickerId;
        const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          if (message.type === outer2_54.USER_JOIN) {
            const result = MessagesHandlers(outer2_3[156]).handleWelcomeCtaClicked(messageChannel, message, stickerId);
            const obj3 = MessagesHandlers(outer2_3[156]);
          } else if (message.type === outer2_54.ROLE_SUBSCRIPTION_PURCHASE) {
            const result1 = MessagesHandlers(outer2_3[157]).handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId);
            const obj2 = MessagesHandlers(outer2_3[157]);
          }
        }
      };
      this.handleTapInviteToSpeak = (nativeEvent) => {
        let message;
        let messageChannel;
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != messageData) {
          ({ messageChannel, message } = messageData);
          if (message.type === outer2_54.STAGE_RAISE_HAND) {
            MessagesHandlers(outer2_3[158]).setUserSuppress(messageChannel, message.author.id, false);
            const obj2 = MessagesHandlers(outer2_3[158]);
            outer2_1(outer2_3[148]).deleteMessage(messageChannel.id, message.id, true);
            const obj3 = outer2_1(outer2_3[148]);
          }
        }
      };
      this.handleTapAutoModerationActions = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const channelId = nativeSyntheticEventData.channelId;
        if (!self.isModalOrActionsheetObstructing()) {
          const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
          if (null != messageData) {
            const message = messageData.message;
            if (obj10.isAutomodMessageRecord(message)) {
              if (messageData.messageChannel.id === channelId) {
                const channel = outer2_24.getChannel(channelId);
                let guild_id;
                if (null != channel) {
                  guild_id = channel.guild_id;
                }
                const guild = outer2_27.getGuild(guild_id);
                if (null != guild) {
                  if (obj11.isAutomodMessageRecord(message)) {
                    let obj1 = MessagesHandlers(outer2_3[87]);
                    if (obj1.isAutomodNotification(message)) {
                      obj = {};
                      const guildIncident = outer2_14.getGuildIncident(guild.id);
                      obj.source = MessagesHandlers(outer2_3[159]).GuildIncidentActionSources.MESSAGE;
                      obj.alertType = MessagesHandlers(outer2_3[160]).getIncidentAlertType(guildIncident);
                      obj.messageId = message.id;
                      const obj7 = MessagesHandlers(outer2_3[160]);
                      obj = { guild };
                      obj.analyticsData = obj;
                      outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[161], outer2_3.paths), "GuildIncidentActionsActionSheet", obj);
                      const obj8 = outer2_1(outer2_3[52]);
                    }
                  }
                  if (outer2_26.isMember(guild.id, message.author.id)) {
                    obj1 = { user: message.author, guild };
                    tmp10(tmp11[162])(obj1);
                  } else {
                    const obj2 = { key: "GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER" };
                    const intl = MessagesHandlers(tmp11[48]).intl;
                    obj2.content = intl.string(MessagesHandlers(tmp11[48]).t.UsD2YP);
                    obj2.icon = tmp10(tmp11[146]);
                    tmp10(tmp11[144]).open(obj2);
                    const tmp10Result = tmp10(tmp11[144]);
                  }
                  obj11 = MessagesHandlers(outer2_3[87]);
                }
              }
            }
            obj10 = MessagesHandlers(outer2_3[87]);
          }
        }
      };
      this.handleTapAutoModerationFeedback = (nativeEvent) => {
        let channelId;
        let content;
        let decisionId;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, channelId } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          const message = messageData.message;
          if (obj7.isAutomodMessageRecord(message)) {
            if (messageData.messageChannel.id === channelId) {
              const channel = outer2_24.getChannel(channelId);
              if (null != channel) {
                if (obj8.isAutomodMessageRecord(message)) {
                  if (obj2.isAutomodNotification(message)) {
                    obj = { guildId: channel.guild_id, messageId };
                    outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[163], outer2_3.paths), "GuildRaidResolveActionSheet", obj);
                    const obj5 = outer2_1(outer2_3[52]);
                  }
                  obj2 = MessagesHandlers(outer2_3[87]);
                }
                obj8 = MessagesHandlers(outer2_3[87]);
                const result = MessagesHandlers(outer2_3[87]).extractAutomodMessageFields(message);
                ({ decisionId, content } = result);
                const obj4 = MessagesHandlers(outer2_3[164]);
                obj4.openSubmitFeedback(messageId, content, decisionId, channel);
                const obj3 = MessagesHandlers(outer2_3[87]);
              }
            }
          }
          obj7 = MessagesHandlers(outer2_3[87]);
        }
      };
      this.handleTransitionToThread = (arg0, channelId, source) => {
        const channel = outer2_24.getChannel(channelId);
        if (null != channel) {
          let obj = MessagesHandlers(outer2_3[165]);
          obj = { source, navigationReplace: false };
          obj.transitionToThread(channel, obj);
        }
      };
      this.handleTransitionToMessage = (arg0, channelId, id) => {
        MessagesHandlers(outer2_3[165]).transitionToMessage(channelId, id, { navigationReplace: false });
      };
      this.handleTapFollowForumPost = (nativeEvent) => {
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        const messageData = self.getMessageData(nativeSyntheticEventData.messageId);
        if (null != messageData) {
          const result = MessagesHandlers(outer2_3[61]).handleToggleFollowForumPost(messageData.messageChannel, outer2_21.hasJoined(nativeSyntheticEventData.channelId));
          const obj2 = MessagesHandlers(outer2_3[61]);
        }
      };
      this.handleTapShareForumPost = (nativeEvent) => {
        let channelId;
        let guildId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ guildId, channelId } = nativeSyntheticEventData);
        obj = { section: outer2_49.CHANNEL };
        const result = MessagesHandlers(outer2_3[61]).handleCopyLinkForumPost(guildId, channelId, obj);
      };
      this.handleTapSeeMore = () => {

      };
      this.handleCopyText = (nativeEvent) => {
        MessagesHandlers(outer2_3[166]).copy(nativeEvent.nativeEvent.text);
        const obj = MessagesHandlers(outer2_3[166]);
        const result = MessagesHandlers(outer2_3[167]).presentCopiedToClipboard();
      };
      this.handleTapTag = (nativeEvent) => {
        const messageData = self.getMessageData(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
      };
      this.handleTapOpTag = () => {
        let obj = outer2_1(outer2_3[144]);
        obj = { key: "FORUM_OP-" + self.params.selectedChannelId, content: MessagesHandlers(outer2_3[168]).getForumOriginalPoster };
        obj.open(obj);
      };
      this.handleMediaAttachmentPlaybackStarted = (nativeEvent) => {
        let isVoiceMessage;
        let messageId;
        let self;
        let startDurationSecs;
        let totalDurationSecs;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        ({ messageId, totalDurationSecs, startDurationSecs, isVoiceMessage, attachmentId: self } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          if (undefined !== isVoiceMessage) {
            if (!isVoiceMessage) {
              const message = messageData.message;
              const contentMessage = message.getContentMessage();
              let found;
              if (null != contentMessage) {
                const attachments = contentMessage.attachments;
                found = attachments.find((id) => id.id === closure_0);
              }
              if (null != found) {
                const obj2 = MessagesHandlers(outer2_3[170]);
                const result = obj2.logMediaAttachmentPlaybackStarted(messageData.messageChannel, found, totalDurationSecs, messageId, startDurationSecs, messageData.message.author.id);
              }
            }
          }
          const obj3 = MessagesHandlers(outer2_3[169]);
          const result1 = obj3.logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, messageData.message.author.id);
        }
      };
      this.handleMediaAttachmentPlaybackEnded = (nativeEvent) => {
        let durationListeningSecs;
        let endDurationSecs;
        let isVoiceMessage;
        let messageId;
        let self;
        let totalDurationSecs;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        ({ messageId, totalDurationSecs, endDurationSecs, durationListeningSecs, isVoiceMessage, attachmentId: self } = nativeSyntheticEventData);
        const messageData = self.getMessageData(messageId);
        if (null != messageData) {
          if (undefined !== isVoiceMessage) {
            if (!isVoiceMessage) {
              const message = messageData.message;
              const contentMessage = message.getContentMessage();
              let found;
              if (null != contentMessage) {
                const attachments = contentMessage.attachments;
                found = attachments.find((id) => id.id === closure_0);
              }
              if (null != found) {
                const obj2 = MessagesHandlers(outer2_3[170]);
                const result = obj2.logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs, found);
              }
            }
          }
          const obj3 = MessagesHandlers(outer2_3[169]);
          const result1 = obj3.logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, messageData.message.author.id, durationListeningSecs);
        }
      };
      this.handleVoiceMessagePlaybackFailed = (nativeEvent) => {
        let errorMessage;
        let messageId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ messageId, errorMessage } = nativeSyntheticEventData);
        let tmp2 = null;
        if (null != errorMessage) {
          tmp2 = errorMessage;
        }
        const result = MessagesHandlers(outer2_3[169]).logVoiceMessagePlaybackFailed(messageId, tmp2);
        const obj2 = MessagesHandlers(outer2_3[169]);
        obj = { key: "AUDIO_PLAYBACK_FAILED-" + messageId };
        const intl = MessagesHandlers(outer2_3[48]).intl;
        obj.content = intl.string(MessagesHandlers(outer2_3[48]).t.gRHMh8);
        obj.icon = outer2_1(outer2_3[146]);
        outer2_1(outer2_3[144]).open(obj);
      };
      this.handleTapPostPreviewEmbed = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_7(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      this.handleTapDismissMediaPostSharePrompt = (nativeEvent) => {
        const obj = MessagesHandlers(outer2_3[41]);
        const obj2 = outer2_2(outer2_3[173]);
        const result = obj2.dismissMediaPostSharePrompt(outer2_1(outer2_3[72]).castMessageIdAsChannelId(obj.getNativeSyntheticEventData(nativeEvent).messageId));
      };
      this.handleTapObscuredMediaLearnMore = (nativeEvent) => {
        let attachmentId;
        let channelId;
        let embedId;
        let messageId;
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        ({ messageId, channelId, attachmentId, embedId } = nativeSyntheticEventData);
        const obj = MessagesHandlers(outer2_3[41]);
        outer2_1(outer2_3[52]).openLazy(MessagesHandlers(outer2_3[40])(outer2_3[174], outer2_3.paths), "ExplicitMediaLearnMore", { messageId, channelId, attachmentId, embedId });
      };
      this.onTapObscuredMediaToggle = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer2_7(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
      this.handleTapSafetyPolicyNoticeEmbed = (nativeEvent) => {
        const obj = MessagesHandlers(outer2_3[41]);
        outer2_1(outer2_3[134]).pushLazy(MessagesHandlers(outer2_3[40])(outer2_3[179], outer2_3.paths), { classificationId: obj.getNativeSyntheticEventData(nativeEvent).classificationId, shouldRedirectToAccountStanding: true });
      };
      this.handleTapSafetySystemNotificationCta = (nativeEvent) => {
        let ctaKey;
        let ctaType;
        ({ ctaType, ctaKey } = nativeEvent.nativeEvent);
        if (outer2_63.POLICY_VIOLATION_DETAIL === ctaType) {
          if (null != ctaKey) {
            let obj = outer2_1(outer2_3[134]);
            obj = { classificationId: ctaKey, shouldRedirectToAccountStanding: true };
            obj.pushLazy(MessagesHandlers(outer2_3[40])(outer2_3[179], outer2_3.paths), obj);
          }
        } else if (outer2_63.LEARN_MORE_LINK === ctaType) {
          if (null != ctaKey) {
            outer2_1(outer2_3[99]).openURL(ctaKey);
            const obj3 = outer2_1(outer2_3[99]);
          }
        }
      };
      this.handleTapPollAnswer = (arg0) => {
        const result = self.replaceCorrectMessageParams(MessagesHandlers(outer2_3[41]).castNativeSyntheticEventData(arg0));
        if (null != result) {
          const result1 = outer2_1(outer2_3[180]).handlePollAnswerTapped(result);
          const obj2 = outer2_1(outer2_3[180]);
        }
      };
      this.handleTapPollSubmitVote = (arg0) => {
        const result = self.replaceCorrectMessageParams(MessagesHandlers(outer2_3[41]).castNativeSyntheticEventData(arg0));
        if (null != result) {
          outer2_1(outer2_3[180]).handlePollSubmitVote(result);
          const obj2 = outer2_1(outer2_3[180]);
        }
      };
      this.handleTapPollAction = (arg0) => {
        const result = self.replaceCorrectMessageParams(MessagesHandlers(outer2_3[41]).castNativeSyntheticEventData(arg0));
        if (null != result) {
          const result1 = outer2_1(outer2_3[180]).handlePollActionTapped(result);
          const obj2 = outer2_1(outer2_3[180]);
        }
      };
      this.handleLongPressPollImage = (arg0) => {
        let message;
        let messageChannel;
        let obj = MessagesHandlers(outer2_3[41]);
        const result = self.replaceCorrectMessageParams(obj.castNativeSyntheticEventData(arg0));
        self = result;
        if (null != result) {
          const messageData = self.getMessageData(result.messageId);
          if (null != messageData) {
            ({ message, messageChannel } = messageData);
            const attachments = message.attachments;
            const findIndexResult = attachments.findIndex((id) => id.id === attachmentId.attachmentId);
            if (null != findIndexResult) {
              const result1 = MessagesHandlers(outer2_3[181]).extractMediaSourcesFromMessage(message, message, messageChannel.guild_id);
              const obj2 = MessagesHandlers(outer2_3[181]);
              obj = { initialSources: result1, initialIndex: findIndexResult, originViewOrOriginLayout: result.layout, analyticsSource: "Channel", channelId: messageChannel.id };
              MessagesHandlers(outer2_3[182]).openMediaModal(obj);
              const obj3 = MessagesHandlers(outer2_3[182]);
            }
          }
        }
      };
      this.handleTapCtaButton = (nativeEvent) => {
        let callback;
        let channelId;
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        ({ channelId, callback } = nativeSyntheticEventData);
        if (MessagesHandlers(outer2_3[183]).CtaButtonType.MARK_AS_FALSE_POSITIVE === callback) {
          const result = MessagesHandlers(outer2_3[184]).handleSenderFalsePositiveFlow(channelId, nativeSyntheticEventData.messageId);
          const obj8 = MessagesHandlers(outer2_3[184]);
        } else if (MessagesHandlers(outer2_3[183]).CtaButtonType.AGE_VERIFICATION_RETRY === callback) {
          obj = { entryPoint: MessagesHandlers(outer2_3[178]).AgeVerificationModalEntryPoint.SYSTEM_DM_RETRY_BUTTON };
          const result1 = outer2_1(outer2_3[177]).showAgeVerificationGetStartedModal(obj);
          const obj5 = outer2_1(outer2_3[177]);
          const result2 = MessagesHandlers(outer2_3[178]).trackAgeVerificationDmClicked(MessagesHandlers(outer2_3[178]).AgeVerificationDmCta.RETRY, channelId);
          const obj7 = MessagesHandlers(outer2_3[178]);
        } else if (MessagesHandlers(outer2_3[183]).CtaButtonType.CONNECT_TO_TEEN === callback) {
          if (!obj9.resumeFamilyCenterConnection()) {
            obj = { screen: outer2_58.FAMILY_CENTER };
            MessagesHandlers(outer2_3[138]).openUserSettings(obj);
            const obj2 = MessagesHandlers(outer2_3[138]);
          }
          obj9 = MessagesHandlers(outer2_3[185]);
          const result3 = MessagesHandlers(outer2_3[178]).trackAgeVerificationDmClicked(MessagesHandlers(outer2_3[178]).AgeVerificationDmCta.CONNECT_TO_TEEN, channelId);
          const obj4 = MessagesHandlers(outer2_3[178]);
        }
      };
      this.handleMessageAccessibilityAction = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const messageId = obj.getNativeSyntheticEventData(nativeEvent).messageId;
        let obj1 = MessagesHandlers(outer2_3[186]);
        const messageAccessibilityActionFromLabel = obj1.getMessageAccessibilityActionFromLabel(nativeEvent.nativeEvent.action);
        const params = self.params;
        const message = params.getMessage(messageId);
        if (null != message) {
          const channel = outer2_24.getChannel(message.channel_id);
          if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.VIEW_PROFILE === messageAccessibilityActionFromLabel) {
            if (message.type === outer2_54.FRIEND_REQUEST_ACCEPTED) {
              if (null != channel) {
                if (channel.isDM()) {
                  let id = channel.getRecipientId();
                }
                if (null != id) {
                  obj = { userId: id };
                  id = undefined;
                  if (null != channel) {
                    id = channel.id;
                  }
                  obj.channelId = id;
                  obj.messageId = messageId;
                  outer2_1(outer2_3[71])(obj);
                  const tmp14 = outer2_1(outer2_3[71]);
                }
              }
            }
            const author2 = message.author;
            if (null != author2) {
              id = author2.id;
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.REPLY === messageAccessibilityActionFromLabel) {
            if (null != channel) {
              obj = { message, channel, chatInputRef: params.chatInputRef, actionSource: "a11y_action" };
              outer2_1(outer2_3[81])(obj);
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.ADD_REACTION === messageAccessibilityActionFromLabel) {
            if (null != channel) {
              const result = MessagesHandlers(outer2_3[62]).handleAddNewReactions(channel, message.id);
              const obj9 = MessagesHandlers(outer2_3[62]);
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.MESSAGE_ACTIONS_MENU === messageAccessibilityActionFromLabel) {
            if (null != channel) {
              obj1 = { channel, message, canAddNewReactions: outer2_1(outer2_3[78])(channel) };
              let id1;
              if (null != message) {
                const author = message.author;
                if (null != author) {
                  id1 = author.id;
                }
              }
              obj1.user = outer2_37.getUser(id1);
              obj1.chatInputRef = self.params.chatInputRef;
              const result1 = MessagesHandlers(outer2_3[77]).showLongPressMessageActionSheet(obj1);
              const obj7 = MessagesHandlers(outer2_3[77]);
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.ADD_QUICK_REACTION === messageAccessibilityActionFromLabel) {
            if (null != channel) {
              const result2 = MessagesHandlers(outer2_3[88]).handleAddDefaultDoubleTapReaction(message, channel);
              const obj6 = MessagesHandlers(outer2_3[88]);
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.EDIT_GDM === messageAccessibilityActionFromLabel) {
            if (null != channel) {
              const obj2 = { channelId: channel.id };
              outer2_1(outer2_3[187])(obj2);
            }
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.OPEN_PINS === messageAccessibilityActionFromLabel) {
            outer2_1(outer2_3[188])(message.channel_id, "pinned-message-system-message");
          } else if (MessagesHandlers(outer2_3[186]).MessageAccessibilityAction.JUMP_TO_MESSAGE === messageAccessibilityActionFromLabel) {
            outer2_1(outer2_3[189])(message);
          }
        }
      };
      this.handleTapForwardFooter = (nativeEvent) => {
        const params = self.params;
        const message = params.getMessage(MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent).messageId);
        if (null != message) {
          outer2_1(outer2_3[190])(message);
        }
      };
      this.handleTapInlineForward = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const params = self.params;
        const message = params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          const inlineForwardOptions = MessagesHandlers(outer2_3[191]).getInlineForwardOptions(message, nativeSyntheticEventData);
          if (null != inlineForwardOptions) {
            const _Object = Object;
            if (nativeEvent.nativeEvent.triggerHaptic) {
              const result = MessagesHandlers(outer2_3[79]).triggerHapticFeedback(outer2_1(outer2_3[80]).IMPACT_LIGHT);
              const obj2 = MessagesHandlers(outer2_3[79]);
            }
            obj = { message };
            const _location = nativeEvent.nativeEvent.location;
            let str = "inline-button";
            if (null != _location) {
              str = _location;
            }
            obj.source = str;
            let tmp9;
            if (0 !== Object.keys(inlineForwardOptions).length) {
              tmp9 = inlineForwardOptions;
            }
            obj.forwardOptions = tmp9;
            MessagesHandlers(outer2_3[192]).openForwardModal(obj);
            const obj3 = MessagesHandlers(outer2_3[192]);
          }
          const obj5 = MessagesHandlers(outer2_3[191]);
        }
      };
      this.handleTapSoundmoji = (nativeEvent) => {
        const nativeSyntheticEventData = MessagesHandlers(outer2_3[41]).getNativeSyntheticEventData(nativeEvent);
        outer2_1(outer2_3[193])(nativeSyntheticEventData);
      };
      this.handleTapClanTagChiplet = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        if (tmp2) {
          const _HermesInternal = HermesInternal;
          const obj2 = outer2_1(outer2_3[52]);
          obj = { guildId: nativeSyntheticEventData.guildId };
          obj2.openLazy(MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths), "GuildProfileActionSheet:" + nativeSyntheticEventData.guildId, obj);
          const tmp6 = MessagesHandlers(outer2_3[40])(outer2_3[70], outer2_3.paths);
        }
      };
      this.handleTapContentInventoryEntryEmbed = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const message = self.params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          obj = { message };
          ({ authorId: obj3.authorId, contentId: obj3.contentId, tappedElement: obj3.tappedElement } = tmp2);
          const result = MessagesHandlers(outer2_3[194]).onTapContentInventoryEntryEmbed(obj);
          const obj2 = MessagesHandlers(outer2_3[194]);
        }
      };
      this.handleTapCheckpointCard = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const message = self.params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          obj = { message, authorId: tmp2.authorId };
          MessagesHandlers(outer2_3[195]).onTapCheckpointCard(obj);
          const obj2 = MessagesHandlers(outer2_3[195]);
        }
      };
      this.handleTapAppMessageEmbed = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const message = self.params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          obj = {};
          const merged = Object.assign(nativeSyntheticEventData);
          obj["message"] = message;
          const result = MessagesHandlers(outer2_3[196]).handleTapAppMessageEmbed(obj);
          const obj2 = MessagesHandlers(outer2_3[196]);
        }
      };
      this.handleTapPreviewSharedClientTheme = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const message = self.params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          obj = {};
          const merged = Object.assign(nativeSyntheticEventData);
          obj["message"] = message;
          const result = MessagesHandlers(outer2_3[197]).handleTapPreviewSharedClientTheme(obj);
          const obj2 = MessagesHandlers(outer2_3[197]);
        }
      };
      this.handleSharedClientThemeViewed = (nativeEvent) => {
        let obj = MessagesHandlers(outer2_3[41]);
        const nativeSyntheticEventData = obj.getNativeSyntheticEventData(nativeEvent);
        const message = self.params.getMessage(nativeSyntheticEventData.messageId);
        if (null != message) {
          obj = {};
          const merged = Object.assign(nativeSyntheticEventData);
          obj["message"] = message;
          const result = MessagesHandlers(outer2_3[198]).handleSharedClientThemeViewed(obj);
          const obj2 = MessagesHandlers(outer2_3[198]);
        }
      };
      return;
    }
  }
  let obj = {
    key: "params",
    get() {
      return this.getParams();
    }
  };
  let items = [obj, ];
  obj = {
    key: "replaceCorrectMessageParams",
    value(nativeEvent) {
      let channel_id;
      let id;
      const self = this;
      nativeEvent = nativeEvent.nativeEvent;
      const message = this.params.getMessage(nativeEvent.messageId);
      if (null != message) {
        if (message.type === outer1_54.THREAD_STARTER_MESSAGE) {
          const messageReference = message.messageReference;
          if (null != messageReference) {
            if (null != outer1_30.getMessage(messageReference.channel_id, messageReference.message_id)) {
              let obj = {};
              const merged = Object.assign(nativeEvent);
              obj["messageId"] = messageReference.message_id;
              obj["channelId"] = messageReference.channel_id;
              const tmp13 = obj;
            } else {
              obj = {};
              const merged1 = Object.assign(nativeEvent);
              const obj1 = {};
              const merged2 = Object.assign(nativeEvent);
              obj1["mediaIndex"] = 0;
              obj1["mediaType"] = "";
              obj["nativeEvent"] = obj1;
              const result = self.handleLongPressMessage(obj);
            }
            return tmp13;
          }
        } else {
          obj = {};
          ({ id, channel_id } = message);
          const merged3 = Object.assign(nativeEvent);
          obj["messageId"] = id;
          obj["channelId"] = channel_id;
          return obj;
        }
      }
    }
  };
  items[1] = obj;
  return callback(MessagesHandlers, items);
})();
let result = require("_slicedToArray").fileFinishedImporting("modules/messages/native/MessagesHandlers.tsx");

export const MessagesHandlers = tmp4;
