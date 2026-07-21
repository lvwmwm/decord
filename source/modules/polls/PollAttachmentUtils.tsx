// Module ID: 11314
// Function ID: 88051
// Name: _downloadPollGif
// Dependencies: []
// Exports: downloadPollGif, getFileNameFromGifUrl, getFilePathForGif

// Module 11314 (_downloadPollGif)
function _downloadPollGif() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _downloadPollGif = obj;
  return obj(...arguments);
}
let closure_0 = importDefault(dependencyMap[0]);
const POLL_ATTACHMENT_FOLDER = arg1(dependencyMap[1]).POLL_ATTACHMENT_FOLDER;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

export const getFileNameFromGifUrl = function getFileNameFromGifUrl(localCreationAnswerId, mediaURL) {
  const parts = decodeURIComponent(mediaURL).split("/");
  const arr = parts.pop();
  let str2 = "temp.gif";
  if (null != arr) {
    str2 = arr;
  }
  return "" + localCreationAnswerId + "-" + str2;
};
export const getFilePathForGif = function getFilePathForGif(fileNameFromGifUrl) {
  return POLL_ATTACHMENT_FOLDER + "/" + fileNameFromGifUrl;
};
export const downloadPollGif = function downloadPollGif(mediaURL) {
  return _downloadPollGif(...arguments);
};
