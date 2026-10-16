// Module ID: 8233
// Function ID: 8234
// Name: ApplicationSubscriptionSystemMessageUtils
// Dependencies: [1128, 2]
// Exports: getApplicationSubscriptionSystemMessageASTContent

// Module 8233 (ApplicationSubscriptionSystemMessageUtils)
import intl3 from "intl" /* 1128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent = function getApplicationSubscriptionSystemMessageASTContent(arg0) {
  let application;
  let formatToPartsResult;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick } = arg0);
  if (null != application) {
    const intl2 = intl3.intl;
    const obj2 = { username, applicationName: application.name, usernameOnClick };
    formatToPartsResult = intl2.formatToParts(intl3.t.Tes5Ou, obj2);
  } else {
    const intl = intl3.intl;
    const obj = { username, usernameOnClick };
    formatToPartsResult = intl.formatToParts(intl3.t.PUJtgi, obj);
  }
  return formatToPartsResult;
};
