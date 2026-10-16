// Module ID: 5488
// Function ID: 5489
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 5488 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
