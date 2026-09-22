// Module ID: 9517
// Function ID: 9518
// Name: ExplicitMediaFalsePositiveActionCreators
// Dependencies: [573, 2]
// Exports: disableFalsePositiveButton

// Module 9517 (ExplicitMediaFalsePositiveActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

function disableFalsePositiveButton(channelId, messageId) {
  DispatcherDefault.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId });
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
