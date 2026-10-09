// Module ID: 11479
// Function ID: 11480
// Name: ExplicitMediaFalsePositiveActionCreators
// Dependencies: [584, 2]
// Exports: disableFalsePositiveButton

// Module 11479 (ExplicitMediaFalsePositiveActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function disableFalsePositiveButton(channelId, messageId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
