// Module ID: 7084
// Function ID: 7085
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 7084 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
