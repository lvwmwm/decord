// Module ID: 15104
// Function ID: 15105
// Name: MessageActivityInviteCoverImageActionCreators
// Dependencies: [572, 2]
// Exports: setCoverImageURL

// Module 15104 (MessageActivityInviteCoverImageActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/MessageActivityInviteCoverImageActionCreators.tsx");

export function setCoverImageURL(arg0) {
  let coverImageURL;
  let messageId;
  ({ messageId, coverImageURL } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL", messageId, coverImageURL });
}
