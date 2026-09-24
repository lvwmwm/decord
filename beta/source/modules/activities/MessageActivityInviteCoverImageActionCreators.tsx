// Module ID: 13582
// Function ID: 13583
// Name: MessageActivityInviteCoverImageActionCreators
// Dependencies: [577, 2]
// Exports: setCoverImageURL

// Module 13582 (MessageActivityInviteCoverImageActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  ({ messageId, coverImageURL } = arg0);
  DispatcherDefault.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
