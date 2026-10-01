// Module ID: 11479
// Function ID: 11480
// Name: ChatInputSendUtils
// Dependencies: [5, 5200, 7100, 5199, 1372, 1074, 4829, 1374, 8608, 7196, 1231, 11478, 11473, 7095, 6876, 11164, 8610, 8605, 4488, 8614, 5203, 1115, 1241, 9720, 7323, 4800, 11480, 1981, 5446, 6603, 8791, 8714, 11510, 6943, 2]
// Exports: chatInputCreateThread, chatInputHandleSendText, chatInputSendApplicationCommand

// Module 11479 (ChatInputSendUtils)
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import DraftStore2 from "DraftStore" /* 5200 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import FileUtils from "FileUtils" /* 5446 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import MessageParserDefault from "MessageParser" /* 7095 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7196 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7323 */;
import useMessageMaxLength from "useMessageMaxLength" /* 8605 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 8610 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import ChatRestrictions from "ChatRestrictions" /* 9720 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 11473 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SlowmodeStore from "SlowmodeStore" /* 7100 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let closure_2, command, dependencyMap, optionValues;

let c10;
let c9;
let unpackModuleId;
function recoverDraft(chatInputRef) {
  let attachmentsToUpload;
  let channel;
  let content;
  ({ channel, content, attachmentsToUpload } = chatInputRef);
  let tmp = attachmentsToUpload.length > 0;
  chatInputRef = chatInputRef.chatInputRef;
  if (tmp) {
    tmp = 0 === UploadAttachmentStore.getUploadCount(channel.id, DraftType.ChannelMessage);
  }
  if (tmp) {
    const obj2 = { channelId: channel.id, uploads: attachmentsToUpload, draftType: DraftType.ChannelMessage, resetState: true };
    obj = UploadAttachmentActionCreatorsDefault;
    obj.setUploads(obj2);
  }
  const tmp8 = "" !== content && "" === DraftStore.getDraft(channel.id, DraftType.ChannelMessage);
  if (tmp8) {
    const obj3 = DraftActionCreatorsDefault;
    obj3.saveDraft(channel.id, content, DraftType.ChannelMessage);
    const current = chatInputRef.current;
    if (current != null) {
      current.setText(content);
    }
  }
}
function chatInputSendMessage(params) {
  let analyticsLocations;
  let hasAttachmentsToUpload;
  let mentionGames;
  let obj6;
  let parsedMessage;
  let text;
  let tmp;
  let tts;
  ({ text, parsedMessage, tts } = params);
  if (tts === undefined) {
    tts = false;
  }
  params = params.params;
  const channel = params.channel;
  const chatInputRef = params.chatInputRef;
  ({ hasAttachmentsToUpload, analyticsLocations: dependencyMap } = params);
  let parsed;
  let items;
  let scheduledTimestamp;
  const pendingReply = params.pendingReply;
  if ("" === text) {
    const tmp4 = chatInputRef(1231);
    obj = { message: "Empty text from " + tmp };
    const _HermesInternal = HermesInternal;
    const addBreadcrumb = tmp4.addBreadcrumb;
    addBreadcrumb(obj);
  }
  let obj2 = chatInputRef(7196);
  obj2.saveDraft(channel.id, "", scheduledTimestamp.ChannelMessage);
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (current2 != null) {
    current2.showSideActions();
  }
  let obj3 = channel(11478);
  const handleLegacyCommandsResult = obj3.handleLegacyCommands(text, { channel, isEdit: false });
  let tmp15 = tts;
  parsed = parsedMessage;
  let tmp17 = text;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      text = handleLegacyCommandsResult.content;
    }
    if (null != handleLegacyCommandsResult.tts) {
      tts = handleLegacyCommandsResult.tts;
    }
    tmp15 = tts;
    parsed = parsedMessage;
    tmp17 = text;
  }
  const current3 = chatInputRef.current;
  let applicationCommandManager;
  if (current3 != null) {
    applicationCommandManager = current3.getApplicationCommandManager();
  }
  if (applicationCommandManager != null) {
    mentionGames = applicationCommandManager.getMentionGames();
  }
  let mentionTimestamps;
  if (applicationCommandManager != null) {
    mentionTimestamps = applicationCommandManager.getMentionTimestamps();
  }
  let result = tmp17;
  if (null != mentionTimestamps) {
    result = tmp17;
    if (mentionTimestamps.size > 0) {
      const tmp13Result = channel(11473);
      result = tmp13Result.serializeComposerTimestampMentions(tmp17, mentionTimestamps);
    }
  }
  if (parsed == null) {
    const tmp7Result = chatInputRef(7095);
    parsed = tmp7Result.parse(channel, result, undefined, mentionGames);
  }
  parsed.tts = tmp15;
  const obj4 = { location: MessageSendLocation.CHAT_INPUT };
  const tmp7Result5 = chatInputRef(6876);
  const merged = Object.assign(tmp7Result5.getSendMessageOptionsForReply(pendingReply));
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = UploadAttachmentStore.getUploads(id, tmp9.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      const tmp7Result6 = chatInputRef(8608);
      tmp7Result6.clearAll(id, scheduledTimestamp.ChannelMessage);
    }
    items = uploads;
  } else {
    items = [];
  }
  if (!hasAttachmentsToUpload) {
    hasAttachmentsToUpload = "" !== parsed.content;
  }
  if (!hasAttachmentsToUpload) {
    const obj5 = { message: "Parsed empty message content from text", data: obj6 };
    obj6 = { text: tmp17 };
    const tmp7Result7 = chatInputRef(1231);
    tmp7Result7.addBreadcrumb(obj5);
  }
  const scheduledMessage = items.getScheduledMessage(channel.id);
  scheduledTimestamp = undefined;
  if (scheduledMessage != null) {
    scheduledTimestamp = scheduledMessage.scheduledTimestamp;
  }
  const tmp13Result2 = channel(11164);
  tmp13Result2.deletePendingReply(channel.id);
  if (applicationCommandManager != null) {
    const result1 = applicationCommandManager.clearTimestampMentions();
  }
  const id2 = channel.id;
  const obj7 = {
    scheduledTimestamp,
    attachmentsToUpload: items,
    onAttachmentUploadError(file, code, reason) {
      obj = handleUploadAttachmentErrors;
      const obj2 = { file, guildId: channel.getGuildId(), analyticsLocations: dependencyMap, code, reason };
      const tmp = channel;
      if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
        const obj3 = { channel: tmp, chatInputRef, content: parsed.content, attachmentsToUpload: items };
        recoverDraft(obj3);
      }
    }
  };
  const sendMessage = chatInputRef(6876).sendMessage;
  chatInputRef(6876);
  const merged1 = Object.assign(obj4);
  const sendMessageResult = sendMessage(id2, parsed, undefined, obj7);
  sendMessageResult.catch((error) => {
    if (null != scheduledTimestamp) {
      obj = { channel, chatInputRef, content: parsed.content, attachmentsToUpload: items };
      recoverDraft(obj);
    }
    throw error;
  });
}
function chatInputValidateContentLength(arg0) {
  let FfjF15;
  let formatToPlainString;
  let intl;
  let obj5;
  let obj8;
  let params;
  let text;
  let tmp10Result;
  ({ text, params } = arg0);
  const channel = params.channel;
  const current = params.chatInputRef.current;
  let applicationCommandManager;
  const analyticsLocations = params.analyticsLocations;
  if (current != null) {
    applicationCommandManager = current.getApplicationCommandManager();
  }
  let mentionGames;
  if (applicationCommandManager != null) {
    mentionGames = applicationCommandManager.getMentionGames();
  }
  let mentionTimestamps;
  if (applicationCommandManager != null) {
    mentionTimestamps = applicationCommandManager.getMentionTimestamps();
  }
  let result = text;
  if (null != mentionTimestamps) {
    result = text;
    if (mentionTimestamps.size > 0) {
      obj = ChatInputCommandOptionParser;
      result = obj.serializeComposerTimestampMentions(text, mentionTimestamps);
    }
  }
  const obj2 = MessageParserDefault;
  const parsed = obj2.parse(channel, result, undefined, mentionGames);
  const obj3 = useMessageMaxLength;
  if (parsed.content.length <= obj3.getMaxMessageLength()) {
    return parsed;
  } else {
    const tmp7Result = PremiumUtilsDefault;
    if (tmp7Result.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
      const obj4 = { title: intl.string(intl4.t.l8rYLt), body: formatToPlainString(FfjF15, obj5) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = tmp10(1115).intl;
      const intl2 = tmp10(1115).intl;
      formatToPlainString = intl2.formatToPlainString;
      obj5 = { currentLength: parsed.content.length, maxLength: tmp10Result.getMaxMessageLength() };
      FfjF15 = tmp10(1115).t.FfjF15;
      tmp10Result = useMessageMaxLength;
      show(obj4);
      const obj6 = { type: "Message Too Long Alert iOS", message_content_length: parsed.content.length };
      const tmp7Result5 = AnalyticsUtilsDefault;
      tmp7Result5.track(constants.OPEN_MODAL, obj6);
    } else {
      const obj7 = { initialUpsellKey: unpackModuleId.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations, analyticsProperties: obj8 };
      obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      const tmp7Result6 = PremiumUpsellUtilsDefault;
      const result1 = tmp7Result6.handleShowUpsellAlert(obj7);
    }
  }
}
function showFileSizeExceededAlert(c8, largestFileSize) {
  let formatToPlainString;
  let fxEKdS;
  let intl;
  let items;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  const currentUser = UserStore.getCurrentUser();
  obj = PremiumUtilsDefault;
  if (obj.canUploadLargeFiles(currentUser)) {
    const obj2 = { title: intl.string(intl4.t["/tGlcj"]), body: formatToPlainString(fxEKdS, obj3) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl4.intl;
    const intl2 = intl4.intl;
    formatToPlainString = intl2.formatToPlainString;
    obj3 = { maxSize: obj7.sizeString(c8) };
    fxEKdS = intl4.t.fxEKdS;
    obj7 = FileUtils;
    show(obj2);
  } else {
    const obj4 = { initialUpsellKey: unpackModuleId.UPLOAD, analyticsLocation: obj5, analyticsLocations: items, analyticsProperties: obj6, largestFileSize };
    obj5 = { section: constants2.FILE_UPLOAD_POPOUT };
    const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
    items = [];
    PremiumUpsellUtilsDefault;
    items[0] = AnalyticsLocationDefault.FILE_UPLOAD_POPOUT;
    obj6 = { type: PremiumUpsellTypes.UPLOAD_ERROR_UPSELL };
    const result = handleShowUpsellAlert(obj4);
  }
}
let obj = function _chatInputSendApplicationCommand() {
  obj = _asyncToGenerator(async (command) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let obj12;
      let obj2;
      let obj8;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let params;
          let channel;
          let chatInputRef;
          let closure_5;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              let closure_1 = tmp;
              command = undefined;
              optionValues = undefined;
              ({ command: c0, optionValues: c1 } = command.applicationCommand);
              params = command.params;
              channel = undefined;
              chatInputRef = undefined;
              closure_5 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              channel = params.channel;
              chatInputRef = params.chatInputRef;
              const current = chatInputRef.current;
              if (current != null) {
                current.clearText();
              }
              c3 = 3;
              c4 = 1;
              const obj6 = { applicationId: command.applicationId, channel: params.channel, commandIntegrationTypes: command.integration_types };
              const obj7 = { value: obj8.installApplicationOnDemandIfNeeded(obj6), done: false };
              obj8 = closure_130_0(closure_130_2[30]);
              return obj7;
            }
          } else {
            if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                closure_5 = value;
                const tmp19 = command.inputType === closure_130_0(closure_130_2[33]).ApplicationCommandInputType.BUILT_IN_TEXT && null != closure_5;
                if (tmp19) {
                  const obj10 = { text: closure_5.content, parsedMessage: "Array", tts: closure_5.tts, source: null, params };
                  closure_130_15(obj10);
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else if (value.isAuthorized) {
              obj = { command, optionValues, context: obj2.getCommandContext(obj12), maxSizeCallback: closure_130_17 };
              obj12 = { channel, type: "channel" };
              const tmp9 = closure_130_1(closure_130_2[31]);
              c3 = 2;
              c4 = 1;
              obj2 = closure_130_0(closure_130_2[32]);
              const obj13 = { value: tmp9(obj), done: false };
              return obj13;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp36) {
          c4 = 3;
          throw tmp36;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const DraftType = DraftStore2.DraftType;
({ AnalyticEvents: c9, AnalyticsSections: c10, UpsellTypes: unpackModuleId } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  let intl;
  let intl2;
  let intl3;
  let parsedMessage;
  text = text.text;
  require = text;
  const params = text.params;
  dependencyMap = undefined;
  const channel = params.channel;
  const hasAttachmentsToUpload = params.hasAttachmentsToUpload;
  if (!SlowmodeStore.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      obj = { text, params };
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const RESTRICTIONS = ChatRestrictions.RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(text, channel, null != channel.getGuildId());
          if (false !== checkResult) {
            let tmp11 = params(5203);
            let obj2 = {
              title: intl.string(intl4.t.mY3Y38),
              body: checkResult.body,
              confirmText: intl2.string(intl4.t.KJnHq3),
              onConfirm() {
                          obj = { text: require, parsedMessage, tts: "paddingHorizontal", source: 1359020034, params };
                          chatInputSendMessage(obj);
                        },
              cancelText: intl3.string(intl4.t.fsBWmS)
            };
            let show = tmp11.show;
            intl = intl4.intl;
            intl2 = intl4.intl;
            intl3 = intl4.intl;
            let showResult = show(obj2);
            iter.return();
          }
        }
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          const obj3 = ForumPostMediaUtils;
          const tmp20 = require;
          const tmp21 = dependencyMap;
          if (obj3.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            const obj4 = {
              threadId: channel.id,
              attachments: uploads,
              sendMessage() {
                          obj = { text: require, parsedMessage, tts: "paddingHorizontal", source: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015060070210097, params };
                          chatInputSendMessage(obj);
                        }
            };
            const obj5 = params(4800);
            obj5.openLazy(tmp20(1981)(11480, tmp21.paths), "add-media-to-original-forum-post", obj4);
          }
        }
        const obj6 = { text, parsedMessage: tmp2, tts: "paddingHorizontal", source: true, params };
        chatInputSendMessage(obj6);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  let obj4;
  text = text.text;
  const length = text.length;
  const threadCreationCallback = text.threadCreationCallback;
  obj = useMessageMaxLength;
  if (length > obj.getMaxMessageLength()) {
    const obj2 = PremiumUtilsDefault;
    const tmp2 = importDefault;
    if (!obj2.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
      const obj3 = { initialUpsellKey: unpackModuleId.LONGER_MESSAGE, analyticsProperties: obj4 };
      obj4 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      const tmp2Result = tmp2(8614);
      const result = tmp2Result.handleShowUpsellAlert(obj3);
    }
  }
  const result1 = threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand() {
  return obj(...arguments);
};
