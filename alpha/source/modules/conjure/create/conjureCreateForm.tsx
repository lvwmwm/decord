// Module ID: 12982
// Function ID: 12983
// Name: conjureCreateForm
// Dependencies: [2]
// Exports: createSubmissionBlocker, isConjureEligibleGuild, isCreateDisabled

// Module 12982 (conjureCreateForm)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureCreateForm.tsx");

export function createSubmissionBlocker(idea) {
  let str2 = "submitting";
  const str = idea.idea;
  if (!idea.submitting) {
    let str3 = "idea";
    if ("" !== str.trim()) {
      let str5 = null;
      if (null == tmp) {
        str5 = "scope";
      }
      str3 = str5;
    }
    str2 = str3;
  }
  return str2;
}
export function isCreateDisabled(idea) {
  let str2 = "submitting";
  const str = idea.idea;
  if (!idea.submitting) {
    let str3 = "idea";
    if ("" !== str.trim()) {
      let str5 = null;
      if (null == tmp) {
        str5 = "scope";
      }
      str3 = str5;
    }
    str2 = str3;
  }
  return "idea" === str2 || "submitting" === str2;
}
export function isConjureEligibleGuild(arr, guildId) {
  let closure_0 = guildId;
  return arr.some((id) => id.id === guildId);
}
