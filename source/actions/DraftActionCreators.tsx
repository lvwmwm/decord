// Module ID: 7019
// Function ID: 56310
// Name: dispatcher
// Dependencies: [686, 2]

// Module 7019 (dispatcher)
const result = require("set").fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(channelId, draftType) {
    let obj = importDefault(686);
    obj = { type: "DRAFT_CLEAR", channelId, draftType };
    obj.dispatch(obj);
  },
  saveDraft(id, comment, ChannelMessage) {
    let obj = importDefault(686);
    obj = { type: "DRAFT_SAVE", channelId: id, draft: comment, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    let obj = importDefault(686);
    obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    let obj = importDefault(686);
    obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  }
};
