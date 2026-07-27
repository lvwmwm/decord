// Module ID: 9822
// Function ID: 76174
// Name: retrySendMessage
// Dependencies: [4124, 5685, 7957, 4665, 6135, 2]
// Exports: default

// Module 9822 (retrySendMessage)
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  let content;
  let flags;
  let nonce;
  let tts;
  let obj = arg3;
  const _require = id;
  if (arg3 === undefined) {
    obj = {};
  }
  importDefault(5685).deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      _require(7957).retryCommandMessage(id2, id, obj);
      const obj6 = _require(7957);
    }
    tmp17 = null != id2.interactionData && null != obj.applicationId;
  } else {
    const messageReference = id2.messageReference;
    let mapped;
    ({ content, tts, flags, nonce } = id2);
    if (null != arr) {
      mapped = arr.map((on) => {
        let fromJsonResult = on;
        if (null == on.on) {
          const CloudUpload = guildId(outer1_2[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(on);
        }
        return fromJsonResult;
      });
    }
    const obj3 = importDefault(5685);
    id = id.id;
    obj = { content, tts, invalidEmojis: [], validNonShortcutEmojis: [] };
    obj = {};
    const merged = Object.assign(obj);
    obj["nonce"] = nonce;
    obj["flags"] = flags;
    let tmp9;
    if (null != messageReference) {
      tmp9 = messageReference;
    }
    obj["messageReference"] = tmp9;
    obj["location"] = MessageSendLocation.RETRY;
    obj["attachmentsToUpload"] = mapped;
    obj["onAttachmentUploadError"] = function onAttachmentUploadError(file, code, reason) {
      let obj = guildId(outer1_2[4]);
      obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    obj3.sendMessage(id, obj, undefined, obj);
  }
};
