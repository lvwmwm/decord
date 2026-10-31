// Module ID: 12642
// Function ID: 12643
// Name: ConjureChatRestore
// Dependencies: [2]
// Exports: proposalRestoreEntry, turnRestoreEntry

// Module 12642 (ConjureChatRestore)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/history/ConjureChatRestore.tsx");

export function turnRestoreEntry(message) {
  let date;
  let tmp = null;
  if ("assistant" === message.role) {
    tmp = null;
    if (null != message.sourceSha) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj = { sha: message.sourceSha, authorName: "", authorEmail: "", authoredAt: date.toISOString(), subject: message.content };
      tmp = obj;
      date = new Date(message.created_at);
    }
  }
  return tmp;
}
export function proposalRestoreEntry(sha) {
  return { sha: sha.sha, authorName: "", authorEmail: "", authoredAt: sha.authored_at, subject: sha.subject };
}
