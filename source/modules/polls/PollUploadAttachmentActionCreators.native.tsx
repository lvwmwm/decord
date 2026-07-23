// Module ID: 11324
// Function ID: 88100
// Name: _handlePollGifAttachmentAdd
// Dependencies: [5, 4468, 7071, 11325, 8245, 4674, 4665, 7938, 2]
// Exports: handlePollGifAttachmentAdd, handlePollMediaAttachmentAdd, removeAllPollUploadAttachments, removePollUploadAttachment

// Module 11324 (_handlePollGifAttachmentAdd)
import openImagePickerUnhandled from "openImagePickerUnhandled";
import { DraftType } from "_isNativeReflectConstruct";
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER";

const require = arg1;
function _handlePollGifAttachmentAdd() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removePollUploadAttachment() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _removeAllPollUploadAttachments() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("POLL_ATTACHMENT_FOLDER").fileFinishedImporting("modules/polls/PollUploadAttachmentActionCreators.native.tsx");

export const handlePollGifAttachmentAdd = function handlePollGifAttachmentAdd(arg0, localCreationAnswerId, arg2) {
  return _handlePollGifAttachmentAdd(...arguments);
};
export function handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2) {

}
export const removePollUploadAttachment = function removePollUploadAttachment(arg0, localCreationAnswerId, fileNameFromGifUrl) {
  return _removePollUploadAttachment(...arguments);
};
export const removeAllPollUploadAttachments = function removeAllPollUploadAttachments(outer1_4) {
  return _removeAllPollUploadAttachments(...arguments);
};
