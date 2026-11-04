// Module ID: 6036
// Function ID: 6037
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 6036 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
