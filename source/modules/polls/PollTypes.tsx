// Module ID: 11509
// Function ID: 11510
// Name: PollMediaUploadAttachmentStatus
// Dependencies: [2]

// Module 11509 (PollMediaUploadAttachmentStatus)
const result = require("set").fileFinishedImporting("modules/polls/PollTypes.tsx");

export const PollMediaUploadAttachmentStatus = { PREPARING: "PREPARING", READY_TO_UPLOAD: "READY_TO_UPLOAD", ERROR: "ERROR" };
