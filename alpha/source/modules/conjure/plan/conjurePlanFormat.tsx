// Module ID: 17142
// Function ID: 17143
// Name: conjurePlanFormat
// Dependencies: [2]
// Exports: conjurePlanCommandPrefix, formatConjurePlanRequirementName

// Module 17142 (conjurePlanFormat)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanFormat.tsx");

export const formatConjurePlanRequirementName = function formatConjurePlanRequirementName(str) {
  const parts = str.split("_");
  const mapped = parts.map((arr) => {
    let sum = arr;
    if (0 !== arr.length) {
      const first = arr[0];
      const str = arr.slice(1);
      sum = first + str.toLowerCase();
    }
    return sum;
  });
  return mapped.join(" ");
};
export const conjurePlanCommandPrefix = function conjurePlanCommandPrefix(kind) {
  let str = "\u21EA /";
  if ("launch" !== kind.kind) {
    str = "\u21EA /";
    if (4 !== kind.type) {
      let str2;
      if (2 === kind.type) {
        str2 = "";
      } else {
        str2 = "/";
      }
      str = str2;
    }
  }
  return str;
};
