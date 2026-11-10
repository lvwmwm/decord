// Module ID: 6056
// Function ID: 6057
// Name: AttachmentUrlConstants
// Dependencies: [2]

// Module 6056 (AttachmentUrlConstants)
import size from "module_2" /* 2 */;

const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = size.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
