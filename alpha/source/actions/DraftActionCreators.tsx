// Module ID: 8343
// Function ID: 8344
// Name: DraftActionCreators
// Dependencies: [572, 2]

// Module 8343 (DraftActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  clearDraft(id, ThreadSettings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj2);
  },
  clearDraftCommand(channelId, draftType) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_COMMAND_CLEAR", channelId, draftType };
    obj.dispatch(obj2);
  },
  saveDraft(id, result1, ChannelMessage, toDraftCommandResult) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_SAVE", channelId: id, draft: result1, draftType: ChannelMessage, command: toDraftCommandResult };
    obj.dispatch(obj2);
  },
  changeDraft(id, draft, ChannelMessage, command) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage, command };
    obj.dispatch(obj2);
  },
  changeThreadSettings(id, draft) {
    const obj = DispatcherDefault;
    const obj2 = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj2);
  },
  changeScheduledMessage(channelId, draft) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId, draft };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default obj;
