// Module ID: 8344
// Function ID: 8345
// Name: disableFalsePositiveButton
// Dependencies: [709, 2]
// Exports: disableFalsePositiveButton

// Module 8344 (disableFalsePositiveButton)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function disableFalsePositiveButton(channelId, messageId) {
  let obj = dispatcherDefault;
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
