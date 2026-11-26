// Module ID: 10611
// Function ID: 10612
// Name: ApplicationSubscriptionSystemMessageUtils
// Dependencies: [1112, 2]
// Exports: getApplicationSubscriptionSystemMessageASTContent

// Module 10611 (ApplicationSubscriptionSystemMessageUtils)
import intl3 from "intl" /* 1112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export function getApplicationSubscriptionSystemMessageASTContent(arg0) {
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
}
