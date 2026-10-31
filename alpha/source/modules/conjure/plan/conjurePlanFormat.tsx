// Module ID: 12729
// Function ID: 12730
// Name: conjurePlanFormat
// Dependencies: [1992, 2]
// Exports: conjurePlanCommandPrefix, formatConjurePlanRequirementLabel

// Module 12729 (conjurePlanFormat)
import Server from "Server" /* 1992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanFormat.tsx");

export function formatConjurePlanRequirementLabel(str) {
  const parts = str.split("_");
  str = parts.join(" ");
  const formatted = str.toLowerCase();
  let sum = formatted;
  if (0 !== formatted.length) {
    const str2 = formatted[0];
    const formatted1 = str2.toUpperCase();
    sum = formatted1 + formatted.slice(1);
  }
  return sum;
}
export function conjurePlanCommandPrefix(type) {
  let str = "\u21EA /";
  if (type.type !== Server.ApplicationCommandType.PRIMARY_ENTRY_POINT) {
    let str2;
    if (type.type === Server.ApplicationCommandType.USER) {
      str2 = "";
    } else {
      str2 = "/";
    }
    str = str2;
  }
  return str;
}
