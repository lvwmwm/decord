// Module ID: 9884
// Function ID: 9885
// Name: retrySendMessage
// Dependencies: [4182, 5713, 8019, 4721, 6187, 2]
// Exports: default

// Module 9884 (retrySendMessage)
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let result = require("_executeCommand").fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  let content;
  let flags;
  let nonce;
  let tts;
  const _require = id;
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  importDefault(5713).deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      _require(8019).retryCommandMessage(id2, id, obj);
      const obj6 = _require(8019);
    }
    tmp17 = null != id2.interactionData && null != obj.applicationId;
  } else {
    const messageReference = id2.messageReference;
    let mapped;
    ({ content, tts, flags, nonce } = id2);
    if (arr != null) {
      mapped = arr.map((on) => {
        let fromJsonResult = on;
        if (null == on.on) {
          const CloudUpload = guildId(table[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(on);
        }
        return fromJsonResult;
      });
    }
    const tmpResult = importDefault(5713);
    id = id.id;
    obj = { content: null, tts: null, invalidEmojis: null, validNonShortcutEmojis: null };
    obj[0] = content;
    obj[1] = tts;
    obj[2] = [];
    obj[3] = [];
    obj = {};
    const merged = Object.assign(obj);
    obj.nonce = nonce;
    obj.flags = flags;
    obj.messageReference = messageReference;
    obj.location = MessageSendLocation.RETRY;
    obj.attachmentsToUpload = mapped;
    obj.onAttachmentUploadError = function onAttachmentUploadError(file, code, reason) {
      let obj = guildId(outer1_2[4]);
      obj = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    tmpResult.sendMessage(id, obj, undefined, obj);
  }
};
