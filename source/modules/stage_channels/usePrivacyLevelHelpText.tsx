// Module ID: 8520
// Function ID: 67848
// Name: useStagePrivacyLevelSettings
// Dependencies: [3758, 653, 1354, 482, 566, 3763, 483, 1212, 1920, 2]
// Exports: default

// Module 8520 (useStagePrivacyLevelSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "sum";

const require = arg1;
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level) {
  const _require = channel;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_7.CREATE_INSTANT_INVITE, closure_0));
  const obj2 = importAll(3763);
  const canEveryoneRoleResult = obj2.canEveryoneRole(importAll(483).combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  obj = {};
  privacy_level = undefined;
  if (null != privacy_level) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = _require(1212).intl;
    let stringResult = intl4.string(_require(1212).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = _require(1212).intl;
        obj = { articleURL: importDefault(1920).getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(_require(1212).t["ew/Jq4"], obj);
        const obj6 = importDefault(1920);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = _require(1212).intl;
      stringResult1 = intl2.string(_require(1212).t.E5T7a3);
    }
  } else {
    const intl = _require(1212).intl;
    stringResult = intl.string(_require(1212).t.BOjr7t);
  }
  obj.helpText = stringResult;
  let privacy_level1;
  if (null != privacy_level) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj.guildOnlyDisabled = privacy_level1 === constants.PUBLIC;
  obj.publicDisabled = !stateFromStores || !canEveryoneRoleResult;
  return obj;
};
