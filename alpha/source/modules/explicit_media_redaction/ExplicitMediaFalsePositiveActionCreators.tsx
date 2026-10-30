// Module ID: 13304
// Function ID: 13305
// Name: ExplicitMediaFalsePositiveActionCreators
// Dependencies: [572, 2]
// Exports: disableFalsePositiveButton

// Module 13304 (ExplicitMediaFalsePositiveActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function disableFalsePositiveButton(channelId, messageId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
