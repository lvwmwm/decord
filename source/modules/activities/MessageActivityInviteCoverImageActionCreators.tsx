// Module ID: 13239
// Function ID: 13240
// Name: setCoverImageURL
// Dependencies: [573, 2]
// Exports: setCoverImageURL

// Module 13239 (setCoverImageURL)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  ({ messageId, coverImageURL } = arg0);
  dispatcherDefault.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
