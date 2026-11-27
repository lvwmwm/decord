// Module ID: 11456
// Function ID: 11457
// Name: conjureCopyPlan
// Dependencies: [7693, 11453, 11457, 2]
// Exports: conjureCopyKeepsUpdates, sendConjureCopyFirstMessage

// Module 11456 (conjureCopyPlan)
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import ConjureRemix from "ConjureRemix" /* 11453 */;
import startConjureScopeMigration from "startConjureScopeMigration" /* 11457 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
let result = size.fileFinishedImporting("modules/conjure/remix/conjureCopyPlan.tsx");

export function conjureCopyKeepsUpdates(project, id, arg2) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "";
  }
  let tmp = arg2 && "" === str.trim();
  if (tmp) {
    const obj = ConjureRemix;
    tmp = !obj.conjureCopyChangesType(project, id);
  }
  return tmp;
}
export function sendConjureCopyFirstMessage(install_scope, projectId, id) {
  let str = arg3;
  if (arg3 === undefined) {
    str = "";
  }
  const trimmed = str.trim();
  const obj = ConjureRemix;
  if (obj.conjureCopyChangesType(install_scope, id)) {
    let str3 = "removed";
    if (null != id) {
      str3 = "added";
    }
    const sendConjureScopeMigrationMessage = startConjureScopeMigration.sendConjureScopeMigrationMessage;
    startConjureScopeMigration;
    const tmp2Result2 = startConjureScopeMigration;
    const result = sendConjureScopeMigrationMessage(projectId, tmp2Result2.conjureScopeMigrationMessage(str3, trimmed));
  } else if ("" !== trimmed) {
    sendUserMessage(projectId, trimmed);
  }
}
