// Module ID: 11151
// Function ID: 86811
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4468, 6927, 4467, 1849, 653, 4123, 1851, 8025, 1184, 7018, 11150, 6923, 9580, 6691, 8026, 8021, 3776, 8028, 4470, 1212, 675, 9588, 8372, 4098, 11152, 1934, 4711, 4670, 5482, 10860, 8228, 11182, 6755, 2]
// Exports: chatInputCreateThread, chatInputHandleSendText, chatInputSendApplicationCommand

// Module 11151 (_createForOfIteratorHelperLoose)
import closure_3 from "ME";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { PremiumUpsellTypes } from "GuildFeatures";

let closure_10;
let closure_8;
let closure_9;
let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function chatInputSendMessage(params) {
  let chatInputRef;
  let hasAttachmentsToUpload;
  let importDefault;
  let parsedMessage;
  let text;
  let tts;
  ({ text, parsedMessage, tts } = params);
  if (tts === undefined) {
    tts = false;
  }
  params = params.params;
  const channel = params.channel;
  ({ chatInputRef, hasAttachmentsToUpload, analyticsLocations: importDefault } = params);
  let parsed;
  let items;
  if ("" === text) {
    let obj = importDefault(parsed[9]);
    obj = {};
    const _HermesInternal = HermesInternal;
    obj.message = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = importDefault(parsed[10]);
  obj2.saveDraft(channel.id, "", DraftType.ChannelMessage);
  const current = chatInputRef.current;
  if (null != current) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (null != current2) {
    current2.showSideActions();
  }
  let obj3 = channel(parsed[11]);
  const handleLegacyCommandsResult = obj3.handleLegacyCommands(text, { channel, isEdit: false });
  let tmp10 = text;
  parsed = parsedMessage;
  let tmp12 = tts;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      text = handleLegacyCommandsResult.content;
    }
    if (null != handleLegacyCommandsResult.tts) {
      tts = handleLegacyCommandsResult.tts;
    }
    tmp12 = tts;
    tmp10 = text;
    parsed = parsedMessage;
  }
  const current3 = chatInputRef.current;
  if (null != current3) {
    const applicationCommandManager = current3.getApplicationCommandManager();
    if (null != applicationCommandManager) {
      const mentionGames = applicationCommandManager.getMentionGames();
    }
  }
  if (null == parsed) {
    const obj6 = importDefault(parsed[12]);
    parsed = obj6.parse(channel, tmp10, undefined, mentionGames);
  }
  parsed.tts = tmp12;
  channel(parsed[13]).deletePendingReply(channel.id);
  obj = {};
  const obj7 = channel(parsed[13]);
  const merged = Object.assign(importDefault(parsed[14]).getSendMessageOptionsForReply(params.pendingReply));
  obj["location"] = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = store.getUploads(id, DraftType.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      importDefault(parsed[8]).clearAll(id, DraftType.ChannelMessage);
      const obj10 = importDefault(parsed[8]);
    }
  } else {
    items = [];
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      const obj1 = { message: "Parsed empty message content from text" };
      obj2 = { text: tmp10 };
      obj1.data = obj2;
      importDefault(parsed[9]).addBreadcrumb(obj1);
      const obj11 = importDefault(parsed[9]);
    }
    const obj14 = importDefault(parsed[14]);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3["attachmentsToUpload"] = items;
    obj3["onAttachmentUploadError"] = function onAttachmentUploadError(file, code, reason) {
      let obj = channel(parsed[15]);
      obj = { file, guildId: channel.getGuildId(), analyticsLocations: closure_1, code, reason };
      let result = obj.handleUploadMessageAttachmentsErrors(obj);
      if (result) {
        result = items.length > 0;
      }
      if (result) {
        obj = { channelId: channel.id, uploads: items, draftType: outer1_4.ChannelMessage, resetState: true };
        outer1_1(parsed[8]).setUploads(obj);
        const obj3 = outer1_1(parsed[8]);
        outer1_1(parsed[10]).saveDraft(channel.id, parsed.content, outer1_4.ChannelMessage);
        const obj5 = outer1_1(parsed[10]);
      }
    };
    obj14.sendMessage(id2, parsed, undefined, obj3);
  }
}
function chatInputValidateContentLength(arg0) {
  let params;
  let text;
  ({ text, params } = arg0);
  const current = params.chatInputRef.current;
  let mentionGames;
  if (null != current) {
    const applicationCommandManager = current.getApplicationCommandManager();
    if (null != applicationCommandManager) {
      mentionGames = applicationCommandManager.getMentionGames();
    }
  }
  let obj1 = importDefault(6923);
  const parsed = obj1.parse(params.channel, text, undefined, mentionGames);
  let obj2 = require(8021) /* getMaxMessageLength_ */;
  if (parsed.content.length <= obj2.getMaxMessageLength()) {
    return parsed;
  } else if (obj13.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
    let tmp13Result = tmp13(4470);
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.l8rYLt);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { currentLength: length, maxLength: require(8021) /* getMaxMessageLength_ */.getMaxMessageLength() };
    obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.FfjF15, obj);
    tmp13Result.show(obj);
    tmp13Result = tmp13(675);
    obj1 = { type: "Message Too Long Alert iOS", message_content_length: length };
    tmp13Result.track(constants.OPEN_MODAL, obj1);
    const obj10 = require(8021) /* getMaxMessageLength_ */;
  } else {
    obj2 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations: params.analyticsLocations };
    const obj3 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
    obj2.analyticsProperties = obj3;
    const result = tmp13(8028).handleShowUpsellAlert(obj2);
    const tmp13Result1 = tmp13(8028);
  }
}
function showFileSizeExceededAlert(c2, largestFileSize) {
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(3776);
  if (obj.canUploadLargeFiles(currentUser)) {
    obj = { location: "native.showFileSizeExceededAlert" };
    const kestrelConfig = require(4711) /* getKestrelConfig */.getKestrelConfig(obj);
    const obj6 = require(4711) /* getKestrelConfig */;
    obj = {};
    let num5 = 20;
    let sizeString = require(1212) /* getSystemLocale */.intl;
    let string = sizeString.string;
    let intl = require(1212) /* getSystemLocale */.t;
    if (kestrelConfig.enabled) {
      let stringResult = string(intl.bRYgjH);
    } else {
      stringResult = string(intl["/tGlcj"]);
    }
    obj.title = stringResult;
    intl = require(dependencyMap[num5]).intl;
    let obj1 = {};
    const obj8 = importDefault(4470);
    sizeString = require(4670) /* _createForOfIteratorHelperLoose */.sizeString;
    string = sizeString(c2);
    obj1.maxSize = string;
    num5 = intl.formatToPlainString(require(dependencyMap[num5]).t.fxEKdS, obj1);
    obj.body = num5;
    obj = obj8.show(obj);
    const tmp18 = require(4670) /* _createForOfIteratorHelperLoose */;
  } else {
    obj1 = importDefault(8028);
    const obj2 = { initialUpsellKey: constants3.UPLOAD };
    const obj3 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj2.analyticsLocation = obj3;
    const items = [importDefault(5482).FILE_UPLOAD_POPOUT];
    obj2.analyticsLocations = items;
    const obj4 = { type: PremiumUpsellTypes.UPLOAD_ERROR_UPSELL };
    obj2.analyticsProperties = obj4;
    obj2.largestFileSize = largestFileSize;
    const result = obj1.handleShowUpsellAlert(obj2);
  }
}
function _chatInputSendApplicationCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, UpsellTypes: closure_10 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  const require = text;
  const params = text.params;
  let dependencyMap;
  const channel = params.channel;
  if (!channelOnCooldown.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text, params };
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const tmp23 = _createForOfIteratorHelperLoose(require(9588) /* items */.RESTRICTIONS);
        let iter2 = tmp23();
        if (!iter2.done) {
          const checkResult = iter2.value.check(text, channel, null != channel.getGuildId());
          while (false === checkResult) {
            let iter = tmp23();
            iter2 = iter;
          }
          let obj1 = params(4470);
          obj = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.title = intl.string(require(1212) /* getSystemLocale */.t.mY3Y38);
          obj.body = checkResult.body;
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj.confirmText = intl2.string(require(1212) /* getSystemLocale */.t.KJnHq3);
          obj.onConfirm = function onConfirm() {
            outer1_15({ text: closure_0, parsedMessage: c2, tts: undefined, source: "alert onConfirm", params });
          };
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj.cancelText = intl3.string(require(1212) /* getSystemLocale */.t.fsBWmS);
          obj1.show(obj);
        }
        const uploads = store.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          if (obj4.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            obj = {
              threadId: channel.id,
              attachments: uploads,
              sendMessage() {
                          outer1_15({ text: closure_0, parsedMessage: c2, tts: undefined, source: "AddMediaToOriginalForumPostActionSheet", params });
                        }
            };
            params(4098).openLazy(require(1934) /* maybeLoadBundle */(11152, dependencyMap.paths), "add-media-to-original-forum-post", obj);
            const obj6 = params(4098);
          }
          obj4 = require(8372) /* isValidImageAttachment */;
        }
        obj1 = { text, parsedMessage: tmp2, tts: undefined, source: "handleSendMessage", params };
        chatInputSendMessage(obj1);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  let obj = require(8021) /* getMaxMessageLength_ */;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      obj = { initialUpsellKey: constants3.LONGER_MESSAGE };
      obj = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj.analyticsProperties = obj;
      const result = importDefault(8028).handleShowUpsellAlert(obj);
    }
    obj2 = importDefault(3776);
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand(arg0) {
  return _chatInputSendApplicationCommand(...arguments);
};
