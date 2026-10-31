// Module ID: 9111
// Function ID: 9112
// Name: usePrivacyLevelHelpText
// Dependencies: [4946, 1072, 4869, 1083, 504, 4951, 1084, 1113, 2061, 2]
// Exports: default

// Module 9111 (usePrivacyLevelHelpText)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4869 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import PermissionStore from "PermissionStore" /* 4946 */;
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
    const intl4 = tmp(1113).intl;
    stringResult = intl4.string(tmp(1113).t.GFq5Rg);
  } else if (stateFromStores) {
    let stringResult1;
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1113).intl;
        const format = intl3.format;
        const obj3 = { articleURL: obj4.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        const prop = tmp(1113).t["ew/Jq4"];
        obj4 = HelpdeskUtilsDefault;
        formatResult = format(prop, obj3);
      }
      stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1113).intl;
      stringResult1 = intl2.string(tmp(1113).t.E5T7a3);
    }
    stringResult = stringResult1;
  } else {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t.BOjr7t);
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
