// Module ID: 12317
// Function ID: 95960
// Name: setCoverImageURL
// Dependencies: [686, 2]
// Exports: setCoverImageURL

// Module 12317 (setCoverImageURL)
const result = require("set").fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  importDefault(686).dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
