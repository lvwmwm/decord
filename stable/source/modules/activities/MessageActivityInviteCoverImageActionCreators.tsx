// Module ID: 13080
// Function ID: 13081
// Name: MessageActivityInviteCoverImageActionCreators
// Dependencies: [584, 2]
// Exports: setCoverImageURL

// Module 13080 (MessageActivityInviteCoverImageActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export const setCoverImageURL = function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
};
