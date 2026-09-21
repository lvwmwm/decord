// Module ID: 9507
// Function ID: 9508
// Name: ExplicitMediaFalsePositiveActionCreators
// Dependencies: [577, 2]
// Exports: disableFalsePositiveButton

// Module 9507 (ExplicitMediaFalsePositiveActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

function disableFalsePositiveButton(channelId, messageId) {
  DispatcherDefault.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId });
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
