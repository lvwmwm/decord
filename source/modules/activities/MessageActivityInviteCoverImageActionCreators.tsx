// Module ID: 12341
// Function ID: 96151
// Name: setCoverImageURL
// Dependencies: [686, 2]
// Exports: setCoverImageURL

// Module 12341 (setCoverImageURL)
const result = require("set").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  importDefault(686).dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
