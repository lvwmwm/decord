// Module ID: 5010
// Function ID: 5011
// Name: set
// Dependencies: [2]

// Module 5010 (set)
import set from "set" /* 2 */;

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
