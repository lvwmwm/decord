// Module ID: 11121
// Function ID: 86542
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4468, 6928, 4467, 1849, 653, 4123, 1851, 7938, 1184, 7019, 11120, 6924, 9544, 6691, 7939, 7934, 3776, 7941, 4470, 1212, 675, 9552, 8328, 4098, 11122, 1934, 4711, 4670, 5484, 10831, 8184, 11152, 6755, 2]
// Exports: chatInputCreateThread, chatInputHandleSendText, chatInputSendApplicationCommand

// Module 11121 (_createForOfIteratorHelperLoose)
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
function chatInputSendMessage(text) {
  let chatInputRef;
  let dependencyMap;
  let hasAttachmentsToUpload;
  let parsedMessage;
  let tts;
  text = text.text;
  let content = text;
  ({ parsedMessage, tts } = text);
  if (tts === undefined) {
    tts = false;
  }
  const params = text.params;
  const channel = params.channel;
  ({ chatInputRef, hasAttachmentsToUpload, analyticsLocations: dependencyMap } = params);
  let items;
  if ("" === text) {
    let obj = channel(1184);
    obj = {};
    const _HermesInternal = HermesInternal;
    obj.message = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = channel(7019);
  obj2.saveDraft(channel.id, "", DraftType.ChannelMessage);
  const current = chatInputRef.current;
  if (null != current) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (null != current2) {
    current2.showSideActions();
  }
  let obj3 = content(11120);
  const handleLegacyCommandsResult = obj3.handleLegacyCommands(text, { channel, isEdit: false });
  let tmp10 = text;
  let parsed = parsedMessage;
  let tmp12 = tts;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      content = handleLegacyCommandsResult.content;
      text = content;
    }
    if (null != handleLegacyCommandsResult.tts) {
      tts = handleLegacyCommandsResult.tts;
    }
    tmp12 = tts;
    tmp10 = text;
    parsed = parsedMessage;
  }
  if (null == parsed) {
    parsed = channel(6924).parse(channel, tmp10);
    let obj5 = channel(6924);
  }
  parsed.tts = tmp12;
  content(9544).deletePendingReply(channel.id);
  obj = {};
  const obj6 = content(9544);
  const merged = Object.assign(channel(6691).getSendMessageOptionsForReply(params.pendingReply));
  obj["location"] = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = store.getUploads(id, DraftType.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      channel(7938).clearAll(id, DraftType.ChannelMessage);
      const obj9 = channel(7938);
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
      channel(1184).addBreadcrumb(obj1);
      const obj10 = channel(1184);
    }
    const obj13 = channel(6691);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3["attachmentsToUpload"] = items;
    obj3["onAttachmentUploadError"] = function onAttachmentUploadError(file, code, reason) {
      let obj = content(outer1_2[15]);
      obj = { file, guildId: channel.getGuildId(), analyticsLocations: closure_2, code, reason };
      let result = obj.handleUploadMessageAttachmentsErrors(obj);
      if (result) {
        result = items.length > 0;
      }
      if (result) {
        obj = { channelId: channel.id, uploads: items, draftType: outer1_4.ChannelMessage, resetState: true };
        channel(outer1_2[8]).setUploads(obj);
        const obj3 = channel(outer1_2[8]);
        channel(outer1_2[10]).saveDraft(channel.id, content, outer1_4.ChannelMessage);
        const obj5 = channel(outer1_2[10]);
      }
    };
    obj13.sendMessage(id2, parsed, undefined, obj3);
  }
}
function chatInputValidateContentLength(params) {
  let analyticsLocations;
  let channel;
  ({ channel, analyticsLocations } = params.params);
  let obj = importDefault(6924);
  const parsed = obj.parse(channel, params.text);
  let obj1 = require(7934) /* getMaxMessageLength_ */;
  if (parsed.content.length <= obj1.getMaxMessageLength()) {
    return parsed;
  } else if (obj12.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
    let tmp12Result = tmp12(4470);
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.l8rYLt);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { currentLength: length, maxLength: require(7934) /* getMaxMessageLength_ */.getMaxMessageLength() };
    obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.FfjF15, obj);
    tmp12Result.show(obj);
    tmp12Result = tmp12(675);
    obj1 = { type: "Message Too Long Alert iOS", message_content_length: length };
    tmp12Result.track(constants.OPEN_MODAL, obj1);
    const obj9 = require(7934) /* getMaxMessageLength_ */;
  } else {
    const obj2 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations };
    const obj3 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
    obj2.analyticsProperties = obj3;
    const result = tmp12(7941).handleShowUpsellAlert(obj2);
    const tmp12Result1 = tmp12(7941);
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
    obj1 = importDefault(7941);
    const obj2 = { initialUpsellKey: constants3.UPLOAD };
    const obj3 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj2.analyticsLocation = obj3;
    const items = [importDefault(5484).FILE_UPLOAD_POPOUT];
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
        const tmp23 = _createForOfIteratorHelperLoose(require(9552) /* items */.RESTRICTIONS);
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
            params(4098).openLazy(require(1934) /* maybeLoadBundle */(11122, dependencyMap.paths), "add-media-to-original-forum-post", obj);
            const obj6 = params(4098);
          }
          obj4 = require(8328) /* isValidImageAttachment */;
        }
        obj1 = { text, parsedMessage: tmp2, tts: undefined, source: "handleSendMessage", params };
        chatInputSendMessage(obj1);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  let obj = require(7934) /* getMaxMessageLength_ */;
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      obj = { initialUpsellKey: constants3.LONGER_MESSAGE };
      obj = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj.analyticsProperties = obj;
      const result = importDefault(7941).handleShowUpsellAlert(obj);
    }
    obj2 = importDefault(3776);
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand(arg0) {
  return _chatInputSendApplicationCommand(...arguments);
};
