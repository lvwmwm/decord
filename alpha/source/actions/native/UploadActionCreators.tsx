// Module ID: 10783
// Function ID: 10784
// Name: UploadActionCreators
// Dependencies: [7243, 7886, 584, 2]

// Module 10783 (UploadActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DraftStore2 from "DraftStore" /* 7243 */;
import UploadStore from "UploadStore" /* 7886 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;

const DraftType = DraftStore2.DraftType;
let obj = {
  restoreFailedUpload(messageId, file) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj2);
  },
  cancel(channelId, file) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj2);
    const messageForFile = UploadStore.getMessageForFile(file.id);
    if (null != messageForFile) {
      const tmp6 = DraftType;
      if ("" === DraftStore.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        const obj3 = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: tmp6.ChannelMessage };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        const tmpResult = DispatcherDefault;
        tmpResult.dispatch(obj3);
      }
    }
  },
  cancelUploadItem(found, itemId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default obj;
