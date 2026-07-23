// Module ID: 11020
// Function ID: 85717
// Name: _fetchMediaPostEmbed
// Dependencies: [5, 653, 686, 507, 4029, 2]
// Exports: dismissMediaPostSharePrompt, fetchMediaPostEmbed, unfurlEmbedUrl

// Module 11020 (_fetchMediaPostEmbed)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _fetchMediaPostEmbed() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _unfurlEmbedUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("dispatcher").fileFinishedImporting("modules/media_channel/MediaChannelActionCreators.tsx");

export const dismissMediaPostSharePrompt = function dismissMediaPostSharePrompt(threadId) {
  let obj = importDefault(686);
  obj = { type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId };
  obj.dispatch(obj);
};
export const fetchMediaPostEmbed = function fetchMediaPostEmbed(threadId) {
  return _fetchMediaPostEmbed(...arguments);
};
export const unfurlEmbedUrl = function unfurlEmbedUrl(items) {
  return _unfurlEmbedUrl(...arguments);
};
