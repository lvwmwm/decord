// Module ID: 12196
// Function ID: 93734
// Name: setCoverImageURL
// Dependencies: [646840323, 899088385]
// Exports: setCoverImageURL

// Module 12196 (setCoverImageURL)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  importDefault(dependencyMap[0]).dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
