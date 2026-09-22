// Module ID: 12130
// Function ID: 12131
// Name: ChatInputSendUtils
// Dependencies: [5, 4977, 7789, 4976, 1371, 1074, 4629, 1373, 9436, 7879, 1230, 12129, 12124, 7784, 7559, 11802, 9439, 9433, 4294, 9443, 4980, 1114, 1240, 10386, 8001, 4603, 12131, 1896, 5260, 5215, 7285, 9702, 9541, 12161, 7626, 2]
// Exports: chatInputCreateThread, chatInputHandleSendText, chatInputSendApplicationCommand

// Module 12130 (ChatInputSendUtils)
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4294 */;
import KestrelExperiment from "KestrelExperiment" /* 5260 */;
import MessageParserDefault from "MessageParser" /* 7784 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7879 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 8001 */;
import useMessageMaxLength from "useMessageMaxLength" /* 9433 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9436 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 9439 */;
import ChatRestrictions from "ChatRestrictions" /* 10386 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 12124 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DraftStore from "DraftStore" /* 4977 */;
import SlowmodeStore from "SlowmodeStore" /* 7789 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4976 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function recoverDraft(chatInputRef) {
  ({ channel, content, attachmentsToUpload } = chatInputRef);
  let tmp = attachmentsToUpload.length > 0;
  if (tmp) {
    tmp = 0 === UploadAttachmentStore.getUploadCount(channel.id, DraftType.ChannelMessage);
  }
  if (tmp) {
    const obj2 = { channelId: channel.id, uploads: attachmentsToUpload, draftType: DraftType.ChannelMessage, resetState: true };
    UploadAttachmentActionCreatorsDefault.setUploads(obj2);
  }
  let tmp8 = "" !== content;
  if (tmp8) {
    tmp8 = "" === DraftStore.getDraft(channel.id, DraftType.ChannelMessage);
  }
  if (tmp8) {
    DraftActionCreatorsDefault.saveDraft(channel.id, content, DraftType.ChannelMessage);
    const current = chatInputRef.chatInputRef.current;
    if (current != null) {
      current.setText(content);
    }
  }
}
function chatInputSendMessage(params) {
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
  if ("" === text) {
    const obj2 = { message: null };
    const _HermesInternal = HermesInternal;
    obj2.message = "Empty text from " + tmp;
    chatInputRef(1230).addBreadcrumb(obj2);
    let obj = chatInputRef(1230);
  }
  chatInputRef(7879).saveDraft(channel.id, "", scheduledTimestamp.ChannelMessage);
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (current2 != null) {
    current2.showSideActions();
  }
  let obj3 = chatInputRef(7879);
  const handleLegacyCommandsResult = channel(12129).handleLegacyCommands(text, { channel, isEdit: false });
  let tmp14 = tts;
  parsed = parsedMessage;
  let tmp16 = text;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      text = handleLegacyCommandsResult.content;
    }
    if (null != handleLegacyCommandsResult.tts) {
      tts = handleLegacyCommandsResult.tts;
    }
    tmp14 = tts;
    parsed = parsedMessage;
    tmp16 = text;
  }
  const current3 = chatInputRef.current;
  let applicationCommandManager;
  if (current3 != null) {
    applicationCommandManager = current3.getApplicationCommandManager();
  }
  if (applicationCommandManager != null) {
    const mentionGames = applicationCommandManager.getMentionGames();
  }
  let mentionTimestamps;
  if (applicationCommandManager != null) {
    mentionTimestamps = applicationCommandManager.getMentionTimestamps();
  }
  let result = tmp16;
  if (null != mentionTimestamps) {
    result = tmp16;
    if (mentionTimestamps.size > 0) {
      result = tmp12(12124).serializeComposerTimestampMentions(tmp16, mentionTimestamps);
      const tmp12Result = tmp12(12124);
    }
  }
  if (parsed == null) {
    const tmp6Result = tmp6(7784);
    parsed = tmp6Result.parse(channel, result, undefined, mentionGames);
  }
  parsed.tts = tmp14;
  const obj5 = {};
  const obj4 = channel(12129);
  const merged = Object.assign(chatInputRef(7559).getSendMessageOptionsForReply(params.pendingReply));
  obj5.location = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = UploadAttachmentStore.getUploads(id, tmp8.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      tmp6(9436).clearAll(id, tmp8.ChannelMessage);
      const tmp6Result6 = tmp6(9436);
    }
  } else {
    items = [];
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      const obj6 = { message: "Parsed empty message content from text", data: null };
      const obj7 = { text: tmp16 };
      obj6.data = obj7;
      tmp6(1230).addBreadcrumb(obj6);
      const tmp6Result7 = tmp6(1230);
    }
    const scheduledMessage = items.getScheduledMessage(channel.id);
    scheduledTimestamp = undefined;
    if (scheduledMessage != null) {
      scheduledTimestamp = scheduledMessage.scheduledTimestamp;
    }
    tmp12(11802).deletePendingReply(channel.id);
    if (applicationCommandManager != null) {
      const result1 = applicationCommandManager.clearTimestampMentions();
    }
    const tmp6Result8 = tmp6(7559);
    const id2 = channel.id;
    const obj8 = {};
    const merged1 = Object.assign(obj5);
    obj8.scheduledTimestamp = scheduledTimestamp;
    obj8.attachmentsToUpload = items;
    obj8.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      const obj = handleUploadAttachmentErrors;
      if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
        const obj3 = { channel, chatInputRef, content: parsed.content, attachmentsToUpload: items };
        recoverDraft(obj3);
      }
    };
    const tmp12Result2 = tmp12(11802);
    tmp6Result8.sendMessage(id2, parsed, undefined, obj8).catch((error) => {
      if (null != scheduledTimestamp) {
        const obj = { channel, chatInputRef, content: parsed.content, attachmentsToUpload: items };
        recoverDraft(obj);
      }
      throw error;
    });
  }
}
function chatInputValidateContentLength(arg0) {
  ({ text, params } = arg0);
  const current = params.chatInputRef.current;
  let applicationCommandManager;
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
      result = ChatInputCommandOptionParser.serializeComposerTimestampMentions(text, mentionTimestamps);
    }
  }
  const parsed = MessageParserDefault.parse(params.channel, result, undefined, mentionGames);
  if (parsed.content.length <= obj3.getMaxMessageLength()) {
    return parsed;
  } else if (tmp7Result.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
    const obj4 = { title: null, body: null };
    const intl = tmp10(1114).intl;
    obj4.title = intl.string(tmp10(1114).t.l8rYLt);
    const intl2 = tmp10(1114).intl;
    const obj5 = { currentLength: length, maxLength: null };
    const tmp7Result4 = tmp7(4980);
    obj5.maxLength = tmp10(9433).getMaxMessageLength();
    obj4.body = intl2.formatToPlainString(tmp10(1114).t.FfjF15, obj5);
    tmp7Result4.show(obj4);
    const tmp10Result = tmp10(9433);
    const obj6 = { type: "Message Too Long Alert iOS", message_content_length: length };
    tmp7(1240).track(constants.OPEN_MODAL, obj6);
    const tmp7Result5 = tmp7(1240);
  } else {
    const obj7 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations: params.analyticsLocations, analyticsProperties: null };
    const obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
    obj7.analyticsProperties = obj8;
    const result1 = tmp7(9443).handleShowUpsellAlert(obj7);
    const tmp7Result6 = tmp7(9443);
  }
  obj3 = useMessageMaxLength;
}
function showFileSizeExceededAlert(c8, largestFileSize) {
  let sizeStringResult = dependencyMap;
  const currentUser = UserStore.getCurrentUser();
  if (obj.canUploadLargeFiles(currentUser)) {
    let obj6 = require;
    const kestrelConfig = KestrelExperiment.getKestrelConfig({ location: "native.showFileSizeExceededAlert" });
    tmp2(4980);
    if (kestrelConfig.enabled) {
      if (!kestrelConfig.isGA) {
        const intl = obj6(1114).intl;
        let stringResult = intl.string(obj6(1114).t.bRYgjH);
      }
      const obj2 = { title: stringResult, body: null };
      const intl3 = obj6(1114).intl;
      const obj3 = { maxSize: null };
      obj6 = obj6(5215);
      sizeStringResult = obj6.sizeString(c8);
      obj3.maxSize = sizeStringResult;
      obj2.body = intl3.formatToPlainString(obj6(1114).t.fxEKdS, obj3);
      tmp11(obj2);
    }
    const intl2 = obj6(1114).intl;
    stringResult = intl2.string(obj6(1114).t["/tGlcj"]);
  } else {
    const obj4 = { initialUpsellKey: constants3.UPLOAD, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null, largestFileSize: null };
    const obj5 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj4.analyticsLocation = obj5;
    const items = [tmp2(7285).FILE_UPLOAD_POPOUT];
    obj4.analyticsLocations = items;
    const obj8 = { type: PremiumUpsellTypes.UPLOAD_ERROR_UPSELL };
    obj4.analyticsProperties = obj8;
    obj4.largestFileSize = largestFileSize;
    const result = tmp2(9443).handleShowUpsellAlert(obj4);
  }
}
let closure_18 = async function _chatInputSendApplicationCommand(arg0, value) {
  const channel = params.channel;
  const chatInputRef = params.chatInputRef;
  const current = chatInputRef.current;
  if (current != null) {
    current.clearText();
  }
  await closure_130_0(closure_130_2[31]).installApplicationOnDemandIfNeeded({ applicationId: closure_129_0.applicationId, channel: params.channel, commandIntegrationTypes: closure_129_0.integration_types });
  if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      closure_129_5 = value;
      let tmp20 = closure_129_0.inputType === closure_130_0(closure_130_2[34]).ApplicationCommandInputType.BUILT_IN_TEXT;
      if (tmp20) {
        tmp20 = null != closure_129_5;
      }
      if (tmp20) {
        closure_130_15({ text: closure_129_5.content, parsedMessage: "Array", tts: closure_129_5.tts, source: null, params });
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else if (value.isAuthorized) {
    const obj = { command: closure_129_0, optionValues: closure_129_1, context: null, maxSizeCallback: null };
    obj.context = closure_130_0(closure_130_2[33]).getCommandContext({ channel, type: "channel" });
    obj.maxSizeCallback = closure_130_17;
    c3 = 2;
    c4 = 1;
    closure_130_1(closure_130_2[32]);
    return { value: closure_130_1(closure_130_2[32])(obj), done: false };
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ command: closure_129_0, optionValues: closure_129_1 } = _require.applicationCommand);
  params = _require.params;
  return "PX_16";
};
const DraftType = fn(4977).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsSections: c10, UpsellTypes: closure_11 } = Constants);
const MessageSendLocation = fn(4629).MessageSendLocation;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  const require = text;
  const params = text.params;
  dependencyMap = undefined;
  const channel = params.channel;
  if (!SlowmodeStore.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text, params };
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const RESTRICTIONS = ChatRestrictions.RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(text, channel, null != channel.getGuildId());
          if (false !== checkResult) {
            let obj2 = params(4980);
            let obj3 = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let intl = util.intl;
            obj3.title = intl.string(util.t.mY3Y38);
            obj3.body = checkResult.body;
            let intl2 = util.intl;
            obj3.confirmText = intl2.string(util.t.KJnHq3);
            obj3.onConfirm = function onConfirm() {
              const obj = { text, parsedMessage, tts: "accessible", source: "Array", params };
              chatInputSendMessage(obj);
            };
            let intl3 = util.intl;
            obj3.cancelText = intl3.string(util.t.fsBWmS);
            let showResult = obj2.show(obj3);
            iter.return();
          }
        }
        const uploads = UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          if (obj4.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            const obj5 = {
              threadId: channel.id,
              attachments: uploads,
              sendMessage() {
                          const obj = { text, parsedMessage, tts: "accessible", source: false, params };
                          chatInputSendMessage(obj);
                        }
            };
            params(4603).openLazy(tmp19(1896)(12131, tmp20.paths), "add-media-to-original-forum-post", obj5);
            const obj6 = params(4603);
          }
          obj4 = ForumPostMediaUtils;
          tmp19 = require;
          tmp20 = dependencyMap;
        }
        const obj7 = { text, parsedMessage: tmp2, tts: "accessible", source: "<string:1090584577>", params };
        chatInputSendMessage(obj7);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(UserStore.getCurrentUser())) {
      const obj3 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsProperties: null };
      const obj4 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj3.analyticsProperties = obj4;
      const result = tmp2(9443).handleShowUpsellAlert(obj3);
    }
    obj2 = PremiumUtilsDefault;
    tmp2 = importDefault;
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
