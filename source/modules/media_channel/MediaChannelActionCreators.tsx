// Module ID: 11009
// Function ID: 85643
// Name: _fetchMediaPostEmbed
// Dependencies: []
// Exports: dismissMediaPostSharePrompt, fetchMediaPostEmbed, unfurlEmbedUrl

// Module 11009 (_fetchMediaPostEmbed)
function _fetchMediaPostEmbed() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchMediaPostEmbed = obj;
  return obj(...arguments);
}
function _unfurlEmbedUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _unfurlEmbedUrl = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/media_channel/MediaChannelActionCreators.tsx");

export const dismissMediaPostSharePrompt = function dismissMediaPostSharePrompt(threadId) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId };
  obj.dispatch(obj);
};
export const fetchMediaPostEmbed = function fetchMediaPostEmbed(threadId) {
  return _fetchMediaPostEmbed(...arguments);
};
export const unfurlEmbedUrl = function unfurlEmbedUrl(items) {
  return _unfurlEmbedUrl(...arguments);
};
