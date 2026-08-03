// Module ID: 8321
// Function ID: 8322
// Name: disableFalsePositiveButton
// Dependencies: [709, 2]
// Exports: disableFalsePositiveButton

// Module 8321 (disableFalsePositiveButton)
function disableFalsePositiveButton(channelId, messageId) {
  let obj = importDefault(709);
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
