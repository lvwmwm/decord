// Module ID: 7014
// Function ID: 56265
// Dependencies: [646840323, 899088385]

// Module 7014
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(channelId, draftType) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "DRAFT_CLEAR", channelId, draftType };
    obj.dispatch(obj);
  },
  saveDraft(id, comment, ChannelMessage) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "DRAFT_SAVE", channelId: id, draft: comment, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  }
};
