// Module ID: 8407
// Function ID: 8408
// Name: ApplicationSubscriptionSystemMessageUtils
// Dependencies: [1125, 2]
// Exports: getApplicationSubscriptionSystemMessageASTContent

// Module 8407 (ApplicationSubscriptionSystemMessageUtils)
import intl3 from "intl" /* 1125 */;
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
