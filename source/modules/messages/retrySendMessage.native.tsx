// Module ID: 9858
// Function ID: 76319
// Name: retrySendMessage
// Dependencies: []
// Exports: default

// Module 9858 (retrySendMessage)
const MessageSendLocation = require(dependencyMap[0]).MessageSendLocation;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/messages/retrySendMessage.native.tsx");

export default function retrySendMessage(id, id2, arr) {
  let content;
  let flags;
  let nonce;
  let tts;
  let obj = arg3;
  const require = id;
  if (arg3 === undefined) {
    obj = {};
  }
  importDefault(dependencyMap[1]).deleteMessage(id.id, id2.id, true);
  if (id2.isCommandType()) {
    if (tmp17) {
      require(dependencyMap[2]).retryCommandMessage(id2, id, obj);
      const obj6 = require(dependencyMap[2]);
    }
    const tmp17 = null != id2.interactionData && null != obj.applicationId;
  } else {
    const messageReference = id2.messageReference;
    let mapped;
    ({ content, tts, flags, nonce } = id2);
    if (null != arr) {
      mapped = arr.map((on) => {
        let fromJsonResult = on;
        if (null == on.on) {
          const CloudUpload = on(closure_2[3]).CloudUpload;
          fromJsonResult = CloudUpload.fromJson(on);
        }
        return fromJsonResult;
      });
    }
    const obj3 = importDefault(dependencyMap[1]);
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
      let obj = file(closure_2[4]);
      obj = { file, guildId: file.getGuildId(), analyticsLocations: [], code, reason };
      const result = obj.handleUploadMessageAttachmentsErrors(obj);
    };
    obj3.sendMessage(id, obj, undefined, obj);
  }
};
