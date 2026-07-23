// Module ID: 11325
// Function ID: 88114
// Name: _downloadPollGif
// Dependencies: [5, 7071, 2]
// Exports: downloadPollGif, getFileNameFromGifUrl, getFilePathForGif

// Module 11325 (_downloadPollGif)
import asyncGeneratorStep from "asyncGeneratorStep";
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER";

function _downloadPollGif() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("set").fileFinishedImporting("modules/polls/PollAttachmentUtils.tsx");

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
