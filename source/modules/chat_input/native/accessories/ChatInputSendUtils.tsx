// Module ID: 11111
// Function ID: 86492
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: chatInputCreateThread, chatInputHandleSendText, chatInputSendApplicationCommand

// Module 11111 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let hasAttachmentsToUpload;
  let parsedMessage;
  let tts;
  text = text.text;
  let arg1 = text;
  ({ parsedMessage, tts } = text);
  if (tts === undefined) {
    tts = false;
  }
  const params = text.params;
  const channel = params.channel;
  const importDefault = channel;
  ({ chatInputRef, hasAttachmentsToUpload, analyticsLocations: closure_2 } = params);
  let closure_3;
  if ("" === text) {
    let obj = importDefault(dependencyMap[9]);
    obj = {};
    const _HermesInternal = HermesInternal;
    obj.message = "Empty text from " + tmp;
    obj.addBreadcrumb(obj);
  }
  let obj2 = importDefault(dependencyMap[10]);
  obj2.saveDraft(channel.id, "", DraftType.ChannelMessage);
  const current = chatInputRef.current;
  if (null != current) {
    current.clearText();
  }
  const current2 = chatInputRef.current;
  if (null != current2) {
    current2.showSideActions();
  }
  let obj3 = arg1(dependencyMap[11]);
  const handleLegacyCommandsResult = obj3.handleLegacyCommands(text, { channel, isEdit: false });
  let tmp10 = text;
  let parsed = parsedMessage;
  let tmp12 = tts;
  if (null != handleLegacyCommandsResult) {
    if (null != handleLegacyCommandsResult.content) {
      const content = handleLegacyCommandsResult.content;
      arg1 = content;
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
    parsed = importDefault(dependencyMap[12]).parse(channel, tmp10);
    const obj5 = importDefault(dependencyMap[12]);
  }
  parsed.tts = tmp12;
  arg1(dependencyMap[13]).deletePendingReply(channel.id);
  obj = {};
  const obj6 = arg1(dependencyMap[13]);
  const merged = Object.assign(importDefault(dependencyMap[14]).getSendMessageOptionsForReply(params.pendingReply));
  obj["location"] = MessageSendLocation.CHAT_INPUT;
  const id = channel.id;
  if (hasAttachmentsToUpload) {
    let uploads = store.getUploads(id, DraftType.ChannelMessage);
    if (null == uploads) {
      uploads = [];
    } else {
      importDefault(dependencyMap[8]).clearAll(id, DraftType.ChannelMessage);
      const obj9 = importDefault(dependencyMap[8]);
    }
  } else {
    const items = [];
    closure_3 = items;
    if (!hasAttachmentsToUpload) {
      hasAttachmentsToUpload = "" !== parsed.content;
    }
    if (!hasAttachmentsToUpload) {
      const obj1 = { message: "Parsed empty message content from text" };
      obj2 = { text: tmp10 };
      obj1.data = obj2;
      importDefault(dependencyMap[9]).addBreadcrumb(obj1);
      const obj10 = importDefault(dependencyMap[9]);
    }
    const obj13 = importDefault(dependencyMap[14]);
    const id2 = channel.id;
    obj3 = {};
    const merged1 = Object.assign(obj);
    obj3["attachmentsToUpload"] = items;
    obj3["onAttachmentUploadError"] = function onAttachmentUploadError(file, code, reason) {
      let obj = content(closure_2[15]);
      obj = { file, guildId: channel.getGuildId(), analyticsLocations: closure_2, code, reason };
      let result = obj.handleUploadMessageAttachmentsErrors(obj);
      if (result) {
        result = items.length > 0;
      }
      if (result) {
        obj = { channelId: channel.id, uploads: items, draftType: closure_4.ChannelMessage, resetState: true };
        channel(closure_2[8]).setUploads(obj);
        const obj3 = channel(closure_2[8]);
        channel(closure_2[10]).saveDraft(channel.id, content, closure_4.ChannelMessage);
        const obj5 = channel(closure_2[10]);
      }
    };
    obj13.sendMessage(id2, parsed, undefined, obj3);
  }
}
function chatInputValidateContentLength(params) {
  let analyticsLocations;
  let channel;
  ({ channel, analyticsLocations } = params.params);
  let obj = importDefault(dependencyMap[12]);
  const parsed = obj.parse(channel, params.text);
  let obj1 = arg1(dependencyMap[16]);
  if (parsed.content.length <= obj1.getMaxMessageLength()) {
    return parsed;
  } else if (obj12.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
    let tmp12Result = tmp12(tmp13[19]);
    obj = {};
    const intl = arg1(tmp13[20]).intl;
    obj.title = intl.string(arg1(tmp13[20]).t.l8rYLt);
    const intl2 = arg1(tmp13[20]).intl;
    obj = { currentLength: length, maxLength: arg1(tmp13[16]).getMaxMessageLength() };
    obj.body = intl2.formatToPlainString(arg1(tmp13[20]).t.FfjF15, obj);
    tmp12Result.show(obj);
    tmp12Result = tmp12(tmp13[21]);
    obj1 = { type: "Message Too Long Alert iOS", message_content_length: length };
    tmp12Result.track(constants.OPEN_MODAL, obj1);
    const obj9 = arg1(tmp13[16]);
  } else {
    const obj2 = { initialUpsellKey: constants3.LONGER_MESSAGE, analyticsLocation: {}, analyticsLocations };
    const obj3 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
    obj2.analyticsProperties = obj3;
    const result = tmp12(tmp13[18]).handleShowUpsellAlert(obj2);
    const tmp12Result1 = tmp12(tmp13[18]);
  }
}
function showFileSizeExceededAlert(currentSize, largestFileSize) {
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(dependencyMap[17]);
  if (obj.canUploadLargeFiles(currentUser)) {
    obj = { location: "native.showFileSizeExceededAlert" };
    const kestrelConfig = largestFileSize(dependencyMap[27]).getKestrelConfig(obj);
    const obj6 = largestFileSize(dependencyMap[27]);
    obj = {};
    let num5 = 20;
    let sizeString = largestFileSize(dependencyMap[20]).intl;
    let string = sizeString.string;
    let intl = largestFileSize(dependencyMap[20]).t;
    if (kestrelConfig.enabled) {
      let stringResult = string(intl.bRYgjH);
    } else {
      stringResult = string(intl./tGlcj);
    }
    obj.title = stringResult;
    intl = largestFileSize(dependencyMap[num5]).intl;
    let obj1 = {};
    const obj8 = importDefault(dependencyMap[19]);
    sizeString = largestFileSize(dependencyMap[28]).sizeString;
    string = sizeString(currentSize);
    obj1.maxSize = string;
    num5 = intl.formatToPlainString(largestFileSize(dependencyMap[num5]).t.fxEKdS, obj1);
    obj.body = num5;
    obj = obj8.show(obj);
    const tmp18 = largestFileSize(dependencyMap[28]);
  } else {
    obj1 = importDefault(dependencyMap[18]);
    const obj2 = { initialUpsellKey: constants3.UPLOAD };
    const obj3 = { section: constants2.FILE_UPLOAD_POPOUT };
    obj2.analyticsLocation = obj3;
    const items = [importDefault(dependencyMap[29]).FILE_UPLOAD_POPOUT];
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
  const _chatInputSendApplicationCommand = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const DraftType = arg1(dependencyMap[1]).DraftType;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, UpsellTypes: closure_10 } = arg1(dependencyMap[5]));
const MessageSendLocation = arg1(dependencyMap[6]).MessageSendLocation;
const PremiumUpsellTypes = arg1(dependencyMap[7]).PremiumUpsellTypes;
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendUtils.tsx");

export { chatInputValidateContentLength };
export const chatInputHandleSendText = function chatInputHandleSendText(text) {
  text = text.text;
  const arg1 = text;
  const params = text.params;
  const importDefault = params;
  let dependencyMap;
  const channel = params.channel;
  if (!channelOnCooldown.isChannelOnCooldown(channel)) {
    if (0 !== text.length) {
      let obj = { text, params };
      const tmp2 = chatInputValidateContentLength(obj);
      dependencyMap = tmp2;
      if (null != tmp2) {
        const tmp23 = _createForOfIteratorHelperLoose(arg1(dependencyMap[22]).RESTRICTIONS);
        let iter2 = tmp23();
        if (!iter2.done) {
          const checkResult = iter2.value.check(text, channel, null != channel.getGuildId());
          while (false === checkResult) {
            let iter = tmp23();
            iter2 = iter;
          }
          let obj1 = importDefault(dependencyMap[19]);
          obj = {};
          const intl = arg1(dependencyMap[20]).intl;
          obj.title = intl.string(arg1(dependencyMap[20]).t.mY3Y38);
          obj.body = checkResult.body;
          const intl2 = arg1(dependencyMap[20]).intl;
          obj.confirmText = intl2.string(arg1(dependencyMap[20]).t.KJnHq3);
          obj.onConfirm = function onConfirm() {
            callback({ text, parsedMessage: tmp2, tts: undefined, source: "alert onConfirm", params });
          };
          const intl3 = arg1(dependencyMap[20]).intl;
          obj.cancelText = intl3.string(arg1(dependencyMap[20]).t.fsBWmS);
          obj1.show(obj);
        }
        const uploads = store.getUploads(channel.id, DraftType.ChannelMessage);
        if (null != uploads) {
          if (obj4.shouldShowAddMediaToOriginalPostModal(uploads, channel.id)) {
            obj = {
              threadId: channel.id,
              attachments: uploads,
              sendMessage() {
                          callback({ text, parsedMessage: tmp2, tts: undefined, source: "AddMediaToOriginalForumPostActionSheet", params });
                        }
            };
            importDefault(dependencyMap[24]).openLazy(arg1(dependencyMap[26])(dependencyMap[25], dependencyMap.paths), "add-media-to-original-forum-post", obj);
            const obj6 = importDefault(dependencyMap[24]);
          }
          const obj4 = arg1(dependencyMap[23]);
        }
        obj1 = { text, parsedMessage: tmp2, tts: undefined, source: "handleSendMessage", params };
        chatInputSendMessage(obj1);
      }
    }
  }
};
export const chatInputCreateThread = function chatInputCreateThread(text) {
  text = text.text;
  let obj = arg1(dependencyMap[16]);
  if (text.length > obj.getMaxMessageLength()) {
    if (!obj2.canUseIncreasedMessageLength(authStore.getCurrentUser())) {
      obj = { initialUpsellKey: constants3.LONGER_MESSAGE };
      obj = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj.analyticsProperties = obj;
      const result = importDefault(dependencyMap[18]).handleShowUpsellAlert(obj);
    }
    const obj2 = importDefault(dependencyMap[17]);
  }
  const result1 = text.threadCreationCallback(text);
};
export { showFileSizeExceededAlert };
export const chatInputSendApplicationCommand = function chatInputSendApplicationCommand(arg0) {
  return _chatInputSendApplicationCommand(...arguments);
};
