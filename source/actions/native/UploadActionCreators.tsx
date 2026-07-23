// Module ID: 10899
// Function ID: 84661
// Dependencies: [4468, 7080, 686, 2]

// Module 10899
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const result = require("dispatcher").fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    let obj = importDefault(686);
    obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = importDefault(686);
    obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    messageForFile = messageForFile.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === draft.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE" };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        obj.draftType = DraftType.ChannelMessage;
        importDefault(686).dispatch(obj);
        const obj3 = importDefault(686);
      }
    }
  },
  cancelUploadItem(found, itemId) {
    let obj = importDefault(686);
    obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  }
};
