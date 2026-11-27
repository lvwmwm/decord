// Module ID: 18799
// Function ID: 18800
// Name: conjurePlanFormat
// Dependencies: [1071, 18800, 2118, 2]
// Exports: conjurePlanCommandPrefix, conjurePlanPermissionLabel, formatConjurePlanRequirementLabel

// Module 18799 (conjurePlanFormat)
import Constants from "Constants" /* 1071 */;
import Server from "Server" /* 2118 */;
import getGuildPermissionNameDefault from "getGuildPermissionName" /* 18800 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let closure_4 = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
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
export function conjurePlanPermissionLabel(str, guildPermissionSpecMap) {
  let sum;
  let tmp2 = str;
  const tmp = closure_4;
  if (Object.hasOwn(closure_4, str)) {
    tmp2 = tmp[str];
  }
  let tmp4 = null;
  const tmp3 = Permissions;
  if (Object.hasOwn(Permissions, tmp2)) {
    tmp4 = tmp3[tmp2];
  }
  if (null != tmp4) {
    sum = getGuildPermissionNameDefault(tmp4, guildPermissionSpecMap);
  } else {
    const parts = str.split("_");
    const str3 = parts.join(" ");
    const formatted = str3.toLowerCase();
    sum = formatted;
    if (0 !== formatted.length) {
      const str4 = formatted[0];
      const formatted1 = str4.toUpperCase();
      sum = formatted1 + formatted.slice(1);
    }
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
