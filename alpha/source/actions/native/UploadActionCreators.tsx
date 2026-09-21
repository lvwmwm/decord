// Module ID: 12000
// Function ID: 12001
// Name: UploadActionCreators
// Dependencies: [5105, 8080, 573, 2]

// Module 12000 (UploadActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DraftStore from "DraftStore" /* 5105 */;
import UploadStore from "UploadStore" /* 8080 */;

const DraftType = fn(5105).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    DispatcherDefault.dispatch({ type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file });
  },
  cancel(channelId, file) {
    DispatcherDefault.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId, file });
    const messageForFile = UploadStore.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === DraftStore.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        const obj3 = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        obj3.draftType = tmp6.ChannelMessage;
        DispatcherDefault.dispatch(obj3);
        const tmpResult = DispatcherDefault;
      }
      tmp6 = DraftType;
    }
  },
  cancelUploadItem(found, itemId) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId });
  }
};
