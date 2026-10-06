// Module ID: 11392
// Function ID: 11393
// Name: UploadActionCreators
// Dependencies: [7044, 7477, 584, 2]

// Module 11392 (UploadActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DraftStore2 from "DraftStore" /* 7044 */;
import UploadStore from "UploadStore" /* 7477 */;
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
