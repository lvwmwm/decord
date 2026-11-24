// Module ID: 6958
// Function ID: 6959
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 6958 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
