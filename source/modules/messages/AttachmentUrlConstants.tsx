// Module ID: 4849
// Function ID: 4850
// Name: set
// Dependencies: [2]

// Module 4849 (set)
import set from "set" /* 2 */;

let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const result = set.fileFinishedImporting("modules/messages/AttachmentUrlConstants.tsx");

export const ATTACHMENT_PATH_PREFIXES = set;
