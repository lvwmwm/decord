// Module ID: 5426
// Function ID: 5427
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 5426 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
