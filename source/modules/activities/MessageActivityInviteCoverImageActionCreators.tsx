// Module ID: 12501
// Function ID: 12502
// Name: setCoverImageURL
// Dependencies: [709, 2]
// Exports: setCoverImageURL

// Module 12501 (setCoverImageURL)
const result = require("set").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  importDefault(709).dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
