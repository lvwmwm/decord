// Module ID: 6857
// Function ID: 6858
// Name: set
// Dependencies: [2]

// Module 6857 (set)
import set from "set" /* 2 */;

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
