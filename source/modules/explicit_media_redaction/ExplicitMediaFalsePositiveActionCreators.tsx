// Module ID: 8188
// Function ID: 64647
// Name: disableFalsePositiveButton
// Dependencies: [686, 2]
// Exports: disableFalsePositiveButton

// Module 8188 (disableFalsePositiveButton)
function disableFalsePositiveButton(channelId, messageId) {
  let obj = importDefault(686);
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
