// Module ID: 7672
// Function ID: 61299
// Name: getPrivateChannelIntegrationAddedSystemMessageContent
// Dependencies: []
// Exports: getPrivateChannelIntegrationAddedSystemMessageASTContent, getPrivateChannelIntegrationAddedSystemMessageContent, getPrivateChannelIntegrationRemovedSystemMessageASTContent, getPrivateChannelIntegrationRemovedSystemMessageContent

// Module 7672 (getPrivateChannelIntegrationAddedSystemMessageContent)
const _module = require(dependencyMap[0]);
({ HelpdeskArticles: closure_3, NOOP: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

export const getPrivateChannelIntegrationAddedSystemMessageContent = function getPrivateChannelIntegrationAddedSystemMessageContent(applicationNameHook) {
  let application;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = require(dependencyMap[1]).intl;
    let obj = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(require(dependencyMap[1]).t.J8SaGy, obj);
    const obj4 = importDefault(dependencyMap[2]);
  } else {
    const intl = require(dependencyMap[1]).intl;
    obj = { username, usernameHook, helpCenterLink: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(require(dependencyMap[1]).t.+6V2sd, obj);
    const obj2 = importDefault(dependencyMap[2]);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageContent = function getPrivateChannelIntegrationRemovedSystemMessageContent(applicationNameHook) {
  let application;
  let username;
  let usernameHook;
  ({ application, username, usernameHook } = applicationNameHook);
  if (usernameHook === undefined) {
    usernameHook = closure_4;
  }
  applicationNameHook = applicationNameHook.applicationNameHook;
  if (applicationNameHook === undefined) {
    applicationNameHook = closure_4;
  }
  if (null != application) {
    const intl2 = require(dependencyMap[1]).intl;
    let obj = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(require(dependencyMap[1]).t.eGCDak, obj);
    const obj4 = importDefault(dependencyMap[2]);
  } else {
    const intl = require(dependencyMap[1]).intl;
    obj = { username, usernameHook, helpCenterLink: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(require(dependencyMap[1]).t.sAX6rs, obj);
    const obj2 = importDefault(dependencyMap[2]);
  }
  return formatResult;
};
export const getPrivateChannelIntegrationAddedSystemMessageASTContent = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg0) {
  let application;
  let medium;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = require(dependencyMap[1]).intl;
    let obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium };
    obj = { url: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj;
    let formatToPartsResult = intl.formatToParts(require(dependencyMap[1]).t.8r+Z+I, obj);
    const obj3 = importDefault(dependencyMap[2]);
  } else {
    const intl2 = require(dependencyMap[1]).intl;
    obj = { username, usernameOnClick, medium };
    const obj1 = { url: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj1;
    formatToPartsResult = intl2.formatToParts(require(dependencyMap[1]).t.ojysqe, obj);
    const obj6 = importDefault(dependencyMap[2]);
  }
  return formatToPartsResult;
};
export const getPrivateChannelIntegrationRemovedSystemMessageASTContent = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg0) {
  let application;
  let medium;
  let username;
  let usernameOnClick;
  ({ application, username, usernameOnClick, medium } = arg0);
  if (null != application) {
    const intl = require(dependencyMap[1]).intl;
    let obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium };
    obj = { url: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj;
    let formatToPartsResult = intl.formatToParts(require(dependencyMap[1]).t.zmc0mq, obj);
    const obj3 = importDefault(dependencyMap[2]);
  } else {
    const intl2 = require(dependencyMap[1]).intl;
    obj = { username, usernameOnClick, medium };
    const obj1 = { url: importDefault(dependencyMap[2]).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj1;
    formatToPartsResult = intl2.formatToParts(require(dependencyMap[1]).t.x2CN/Z, obj);
    const obj6 = importDefault(dependencyMap[2]);
  }
  return formatToPartsResult;
};
