// Module ID: 5807
// Function ID: 5808
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 5807 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
