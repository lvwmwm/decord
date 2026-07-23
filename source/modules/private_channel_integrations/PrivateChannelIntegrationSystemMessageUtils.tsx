// Module ID: 7683
// Function ID: 61370
// Name: getPrivateChannelIntegrationAddedSystemMessageContent
// Dependencies: [653, 1212, 1920, 2]
// Exports: getPrivateChannelIntegrationAddedSystemMessageASTContent, getPrivateChannelIntegrationAddedSystemMessageContent, getPrivateChannelIntegrationRemovedSystemMessageASTContent, getPrivateChannelIntegrationRemovedSystemMessageContent

// Module 7683 (getPrivateChannelIntegrationAddedSystemMessageContent)
import ME from "ME";

let closure_3;
let closure_4;
({ HelpdeskArticles: closure_3, NOOP: closure_4 } = ME);
const result = require("wrapURL").fileFinishedImporting("modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx");

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
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(require(1212) /* getSystemLocale */.t.J8SaGy, obj);
    const obj4 = importDefault(1920);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username, usernameHook, helpCenterLink: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(require(1212) /* getSystemLocale */.t["+6V2sd"], obj);
    const obj2 = importDefault(1920);
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
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { username, otherUsername: application.name, usernameHook, otherUsernameHook: applicationNameHook, helpCenterLink: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    let formatResult = intl2.format(require(1212) /* getSystemLocale */.t.eGCDak, obj);
    const obj4 = importDefault(1920);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username, usernameHook, helpCenterLink: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    formatResult = intl.format(require(1212) /* getSystemLocale */.t.sAX6rs, obj);
    const obj2 = importDefault(1920);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium };
    obj = { url: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj;
    let formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t["8r+Z+I"], obj);
    const obj3 = importDefault(1920);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { username, usernameOnClick, medium };
    const obj1 = { url: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj1;
    formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t.ojysqe, obj);
    const obj6 = importDefault(1920);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { username, otherUsername: application.name, usernameOnClick, otherUsernameOnClick: tmp, medium };
    obj = { url: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj;
    let formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.zmc0mq, obj);
    const obj3 = importDefault(1920);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { username, usernameOnClick, medium };
    const obj1 = { url: importDefault(1920).getArticleURL(constants.PRIVATE_CHANNEL_INTEGRATIONS) };
    obj.helpCenterLink = obj1;
    formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t["x2CN/Z"], obj);
    const obj6 = importDefault(1920);
  }
  return formatToPartsResult;
};
