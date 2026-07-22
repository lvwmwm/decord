// Module ID: 7676
// Function ID: 61331
// Name: getApplicationSubscriptionSystemMessageASTContent
// Dependencies: []
// Exports: getApplicationSubscriptionSystemMessageASTContent

// Module 7676 (getApplicationSubscriptionSystemMessageASTContent)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx");

export const getApplicationSubscriptionSystemMessageASTContent = function getApplicationSubscriptionSystemMessageASTContent(arg0) {
  let application;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick } = arg0);
  if (null != application) {
    const intl2 = require(dependencyMap[0]).intl;
    let obj = { username, applicationName: application.name, usernameOnClick };
    let formatToPartsResult = intl2.formatToParts(require(dependencyMap[0]).t.Tes5Ou, obj);
  } else {
    const intl = require(dependencyMap[0]).intl;
    obj = { username, usernameOnClick };
    formatToPartsResult = intl.formatToParts(require(dependencyMap[0]).t.PUJtgi, obj);
  }
  return formatToPartsResult;
};
