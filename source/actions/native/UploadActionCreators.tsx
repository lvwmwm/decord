// Module ID: 10888
// Function ID: 84599
// Dependencies: [5337, 4141, 653, 478]

// Module 10888
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import isWindows from "isWindows";

const result = isWindows.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    const messageForFile = messageForFile.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === draft.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE" };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        obj.draftType = DraftType.ChannelMessage;
        importDefault(dependencyMap[2]).dispatch(obj);
        const obj3 = importDefault(dependencyMap[2]);
      }
    }
  },
  cancelUploadItem(found, itemId) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  }
};
