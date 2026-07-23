// Module ID: 7079
// Function ID: 56618
// Name: _uploadMessageAttachments
// Dependencies: [5, 7080, 7081, 4351, 686, 2]
// Exports: uploadMessageAttachments

// Module 7079 (_uploadMessageAttachments)
import closure_3 from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_createForOfIteratorHelperLoose";

const require = arg1;
async function _uploadMessageAttachments(arg0, arg1) {
  let iter = (function*(shouldUploadFailureSendNotification) {
    let closure_0;
    let message;
    let nonce;
    ({ channelId: closure_0, message, nonce } = shouldUploadFailureSendNotification);
    let closure_2 = shouldUploadFailureSendNotification.shouldUploadFailureSendNotification;
    let c3;
    let _isNativeReflectConstruct;
    yield undefined;
    if (!outer2_5.has(nonce)) {
      let tmp4 = outer2_1(outer2_2[2]);
      const prototype = tmp4.prototype;
      tmp4 = new tmp4();
      c3 = tmp4;
      const _HermesInternal = HermesInternal;
      const combined = "pending-upload-" + tmp4._file.id;
      let obj = {};
      const merged = Object.assign(message);
      obj["key"] = combined;
      _isNativeReflectConstruct = outer2_0(outer2_2[3]).createMessageRecord(obj);
      tmp4.on("start", (file) => {
        outer3_5.add(nonce);
        let obj = outer3_1(outer3_2[4]);
        obj = { type: "UPLOAD_START", channelId: closure_0, file, uploader: c3, message: _isNativeReflectConstruct };
        obj.dispatch(obj);
      });
      tmp4.on("compression-progress", (file) => {
        let obj = outer3_1(outer3_2[4]);
        obj = { type: "UPLOAD_COMPRESSION_PROGRESS", channelId: closure_0, file };
        obj.dispatch(obj);
      });
      tmp4.on("progress", (file) => {
        let obj = outer3_1(outer3_2[4]);
        obj = { type: "UPLOAD_PROGRESS", channelId: closure_0, file };
        obj.dispatch(obj);
      });
      tmp4.on("error", (file) => {
        outer3_5.delete(nonce);
        _undefined.cancel();
        let obj = outer3_1(outer3_2[4]);
        obj = { type: "UPLOAD_FAIL", channelId: closure_0, file, messageId: id.id, shouldSendNotification: closure_2 };
        obj.dispatch(obj);
      });
      tmp4.on("complete", (id) => {
        let closure_0 = id;
        outer3_5.delete(nonce);
        const messageForFile = outer3_4.getMessageForFile(id.id);
        let _aborted = null != messageForFile;
        if (_aborted) {
          _aborted = "" === messageForFile.content;
        }
        if (_aborted) {
          _aborted = _undefined._aborted;
        }
        if (_aborted) {
          let obj = outer3_1(outer3_2[4]);
          obj = { type: "MESSAGE_DELETE" };
          id = messageForFile.nonce;
          if (null == id) {
            id = messageForFile.id;
          }
          obj.id = id;
          obj.channelId = messageForFile.channel_id;
          obj.dispatch(obj);
        }
        if (_undefined._aborted) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let obj = outer4_1(outer4_2[4]);
            obj = { type: "UPLOAD_COMPLETE", channelId: closure_0, file: closure_0, aborted: true };
            obj.dispatch(obj);
          }, 0);
        }
      });
      tmp4.on("cancel-upload-item", (file) => {
        let obj = outer3_1(outer3_2[4]);
        obj = { type: "UPLOAD_FILE_UPDATE", file, channelId: closure_0 };
        obj.dispatch(obj);
      });
      obj = { attachments: yield tmp4.uploadFiles(shouldUploadFailureSendNotification.items), uploader: tmp4 };
      return obj;
    }
  })();
  iter.next();
  return iter;
}
let set = new Set();
const result = set.fileFinishedImporting("modules/media_uploads/uploadMessageAttachments.native.tsx");

export const uploadMessageAttachments = function uploadMessageAttachments(arg0) {
  return _uploadMessageAttachments(...arguments);
};
