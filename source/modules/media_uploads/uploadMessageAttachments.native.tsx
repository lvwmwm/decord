// Module ID: 7069
// Function ID: 56550
// Name: _uploadMessageAttachments
// Dependencies: [653, 4316, 2, 57, 5, 1348]
// Exports: uploadMessageAttachments

// Module 7069 (_uploadMessageAttachments)
import ME from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

async function _uploadMessageAttachments(arg0, arg1) {
  const fn = function*(shouldUploadFailureSendNotification) {
    let message;
    let nonce;
    ({ channelId: closure_0, message, nonce } = shouldUploadFailureSendNotification);
    let closure_2 = shouldUploadFailureSendNotification.shouldUploadFailureSendNotification;
    let tmp4;
    let _createForOfIteratorHelperLoose;
    yield undefined;
    if (!set.has(nonce)) {
      tmp4 = nonce(closure_2[2]);
      const prototype = tmp4.prototype;
      tmp4 = new tmp4();
      const _HermesInternal = HermesInternal;
      const combined = "pending-upload-" + tmp4._file.id;
      let obj = {};
      const merged = Object.assign(message);
      obj["key"] = combined;
      _createForOfIteratorHelperLoose = callback(closure_2[3]).createMessageRecord(obj);
      tmp4.on("start", (file) => {
        set.add(nonce);
        let obj = nonce(closure_2[4]);
        obj = { type: "UPLOAD_START", channelId: closure_0, file, uploader: tmp4, message: _createForOfIteratorHelperLoose };
        obj.dispatch(obj);
      });
      tmp4.on("compression-progress", (file) => {
        let obj = nonce(closure_2[4]);
        obj = { type: "UPLOAD_COMPRESSION_PROGRESS", channelId: closure_0, file };
        obj.dispatch(obj);
      });
      tmp4.on("progress", (file) => {
        let obj = nonce(closure_2[4]);
        obj = { type: "UPLOAD_PROGRESS", channelId: closure_0, file };
        obj.dispatch(obj);
      });
      tmp4.on("error", (file) => {
        set.delete(nonce);
        tmp4.cancel();
        let obj = nonce(closure_2[4]);
        obj = { type: "UPLOAD_FAIL", channelId: closure_0, file, messageId: messageForFile.id, shouldSendNotification: closure_2 };
        obj.dispatch(obj);
      });
      tmp4.on("complete", (id) => {
        set.delete(nonce);
        const messageForFile = messageForFile.getMessageForFile(id.id);
        let _aborted = null != messageForFile;
        if (_aborted) {
          _aborted = "" === messageForFile.content;
        }
        if (_aborted) {
          _aborted = tmp4._aborted;
        }
        if (_aborted) {
          let obj = nonce(closure_2[4]);
          obj = { type: "MESSAGE_DELETE" };
          id = messageForFile.nonce;
          if (null == id) {
            id = messageForFile.id;
          }
          obj.id = id;
          obj.channelId = messageForFile.channel_id;
          obj.dispatch(obj);
        }
        if (tmp4._aborted) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let obj = callback(closure_2[4]);
            obj = { type: "UPLOAD_COMPLETE", channelId: arg0, file: arg0, aborted: true };
            obj.dispatch(obj);
          }, 0);
        }
      });
      tmp4.on("cancel-upload-item", (file) => {
        let obj = nonce(closure_2[4]);
        obj = { type: "UPLOAD_FILE_UPDATE", file, channelId: closure_0 };
        obj.dispatch(obj);
      });
      obj = { attachments: yield tmp4.uploadFiles(shouldUploadFailureSendNotification.items), uploader: tmp4 };
      return obj;
    }
  };
  fn.next();
  return fn;
}
const set = new Set();
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/media_uploads/uploadMessageAttachments.native.tsx");

export const uploadMessageAttachments = function uploadMessageAttachments(arg0) {
  return _uploadMessageAttachments(...arguments);
};
