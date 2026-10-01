// Module ID: 9270
// Function ID: 9271
// Name: usePrivacyLevelHelpText
// Dependencies: [4469, 1074, 2051, 1085, 504, 4474, 1086, 1115, 2111, 2]
// Exports: default

// Module 9270 (usePrivacyLevelHelpText)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const HelpdeskArticles = Constants.HelpdeskArticles;
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
const Permissions = Constants2.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level, arg2) {
  let obj4;
  let privacy_level1;
  let stringResult;
  let tmp16;
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel));
  const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
  PermissionUtilsAll;
  const obj2 = BigFlagUtilsAll;
  const canEveryoneRoleResult = canEveryoneRole(obj2.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1115).intl;
    stringResult = intl4.string(tmp(1115).t.GFq5Rg);
  } else if (stateFromStores) {
    let stringResult1;
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1115).intl;
        const format = intl3.format;
        const obj3 = { articleURL: obj4.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        const prop = tmp(1115).t["ew/Jq4"];
        obj4 = HelpdeskUtilsDefault;
        formatResult = format(prop, obj3);
      }
      stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1115).intl;
      stringResult1 = intl2.string(tmp(1115).t.E5T7a3);
    }
    stringResult = stringResult1;
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.BOjr7t);
  }
  const obj5 = { helpText: stringResult, guildOnlyDisabled: privacy_level1 === constants.PUBLIC, publicDisabled: tmp16 };
  privacy_level1 = undefined;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  tmp16 = !stateFromStores;
  if (stateFromStores) {
    tmp16 = !canEveryoneRoleResult;
  }
  return obj5;
};
