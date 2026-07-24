// Module ID: 7018
// Function ID: 56319
// Name: dispatcher
// Dependencies: [686, 2]

// Module 7018 (dispatcher)
const result = require("set").fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(channelId, draftType) {
    let obj = importDefault(686);
    obj = { type: "DRAFT_CLEAR", channelId, draftType };
    obj.dispatch(obj);
  },
  saveDraft(id, result, ChannelMessage) {
    let obj = importDefault(686);
    obj = { type: "DRAFT_SAVE", channelId: id, draft: result, draftType: ChannelMessage };
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
