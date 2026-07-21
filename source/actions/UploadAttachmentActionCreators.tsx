// Module ID: 7931
// Function ID: 63328
// Dependencies: []

// Module 7931
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj);
  },
  addFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    ({ files, channelId, draftType } = arg0);
    importDefault(dependencyMap[0]).dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType });
  },
  addFile(arg0) {
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    ({ file, channelId, draftType, allowOptimization } = arg0);
    const items = [file];
    importDefault(dependencyMap[0]).dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization });
  },
  remove(channelId, id, draftType) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType };
    obj.dispatch(obj);
  },
  removeFiles(channelId, arr, InteractionModal) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId, attachmentIds: arr, draftType: InteractionModal };
    obj.dispatch(obj);
  },
  clearAll(channelId, draftType) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType };
    obj.dispatch(obj);
  },
  update(channelId, id, draftType) {
    let description;
    let filename;
    let spoiler;
    let thumbnail;
    ({ description, filename, spoiler, thumbnail } = arg3);
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_UPDATE_FILE", channelId, id, filename, description, thumbnail, spoiler, draftType };
    obj.dispatch(obj);
  },
  setUploads(uploads) {
    let channelId;
    let draftType;
    let resetState;
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "UPLOAD_ATTACHMENT_SET_UPLOADS", channelId };
    let mapped = uploads;
    if (resetState) {
      mapped = uploads.map((resetState) => resetState.resetState());
    }
    obj.uploads = mapped;
    obj.draftType = draftType;
    obj.dispatch(obj);
  },
  setFile(arg0) {
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    let id;
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    importDefault(dependencyMap[0]).dispatch({ type: "UPLOAD_ATTACHMENT_SET_FILE", channelId, id, file, draftType, allowOptimization });
  }
};
