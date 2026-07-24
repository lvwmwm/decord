// Module ID: 7771
// Function ID: 61654
// Name: getApplicationSubscriptionSystemMessageASTContent
// Dependencies: [1212, 2]
// Exports: getApplicationSubscriptionSystemMessageASTContent

// Module 7771 (getApplicationSubscriptionSystemMessageASTContent)
const result = require("set").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent = function getApplicationSubscriptionSystemMessageASTContent(arg0) {
  let application;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick } = arg0);
  if (null != application) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { username, applicationName: application.name, usernameOnClick };
    let formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t.Tes5Ou, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username, usernameOnClick };
    formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.PUJtgi, obj);
  }
  return formatToPartsResult;
};
