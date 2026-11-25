// Module ID: 18576
// Function ID: 18577
// Name: conjurePlanFormat
// Dependencies: [1071, 2117, 2]
// Exports: conjurePlanCommandPrefix, conjurePlanPermissionLabel, formatConjurePlanRequirementLabel

// Module 18576 (conjurePlanFormat)
import Constants from "Constants" /* 1071 */;
import Server from "Server" /* 2117 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let closure_3 = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
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
  let tmp2 = str;
  const tmp = closure_3;
  if (Object.hasOwn(closure_3, str)) {
    tmp2 = tmp[str];
  }
  let tmp4 = null;
  const tmp3 = Permissions;
  if (Object.hasOwn(Permissions, tmp2)) {
    tmp4 = tmp3[tmp2];
  }
  let tmp5 = null;
  if (null != tmp4) {
    let title;
    if (guildPermissionSpecMap != null) {
      const tmp8 = guildPermissionSpecMap[tmp4.toString(tmp4)];
      if (tmp8 != null) {
        title = tmp8.title;
      }
    }
    tmp5 = title;
  }
  if (tmp5 == null) {
    const parts = str.split("_");
    const str3 = parts.join(" ");
    const formatted = str3.toLowerCase();
    let sum = formatted;
    if (0 !== formatted.length) {
      const str4 = formatted[0];
      const formatted1 = str4.toUpperCase();
      sum = formatted1 + formatted.slice(1);
    }
    tmp5 = sum;
  }
  return tmp5;
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
