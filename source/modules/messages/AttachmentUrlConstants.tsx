// Module ID: 4963
// Function ID: 4964
// Name: set
// Dependencies: [2]

// Module 4963 (set)
import set from "set" /* 2 */;

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
