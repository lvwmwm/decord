// Module ID: 20007
// Function ID: 20008
// Name: IntegrationAppUtils
// Dependencies: [5781, 11, 1112, 5099, 2]
// Exports: getIntegrationAddedLabel, integrationHasBot, integrationHasCommands, integrationHasCommandsScope

// Module 20007 (IntegrationAppUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl3 from "intl" /* 1112 */;
import OAuth2Scopes from "OAuth2Scopes" /* 5781 */;
import size from "module_2" /* 2 */;

let tmp;
const UserUtilsDefault = tmp(5099);
const result = size.fileFinishedImporting("modules/integration_settings/IntegrationAppUtils.tsx");

export function integrationHasBot(application, integration) {
  let tmp = null != application.bot;
  if (tmp) {
    const scopes = integration.scopes;
    let flag;
    if (scopes != null) {
      flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT);
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
export function integrationHasCommandsScope(integration) {
  const scopes = integration.scopes;
  let flag;
  if (scopes != null) {
    flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function integrationHasCommands(application, integration, arg2) {
  const scopes = integration.scopes;
  let flag;
  if (scopes != null) {
    flag = scopes.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    let commands;
    const _Object = Object;
    if (arg2 != null) {
      if (arg2[application.id] != null) {
        commands = tmp6.commands;
      }
    }
    if (commands == null) {
      commands = {};
    }
    flag = keys(commands).length > 0;
  }
  return flag;
}
export function getIntegrationAddedLabel(integration) {
  let formatToPlainStringResult;
  let tmpResult;
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(integration.id);
  if (null != integration.user) {
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const obj2 = { timestamp: extractTimestampResult, user: tmpResult.getUserTag(integration.user) };
    const Nu9sat = intl3.t.Nu9sat;
    tmpResult = UserUtilsDefault;
    formatToPlainStringResult = formatToPlainString(Nu9sat, obj2);
  } else {
    const intl = intl3.intl;
    const obj3 = { timestamp: extractTimestampResult };
    formatToPlainStringResult = intl.formatToPlainString(intl3.t.gcdJ8J, obj3);
  }
  return formatToPlainStringResult;
}
