// Module ID: 9282
// Function ID: 9283
// Name: HubProgressActionCreators
// Dependencies: [5014, 9283, 1072, 4973, 1398, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9282 (HubProgressActionCreators)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1398 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9283 */;
import GuildStore from "GuildStore" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f95105 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1398);
      hubProgress.hubProgress = tmp2Result.addFlag(hubProgress.hubProgress, tmp);
      flag = true;
    }
    continue;
  }
  return flag;
};
const HUB_PROGRESS_STEP_ORDER = HubProgressBarConstants.HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [JOIN_GUILD];
      const obj = items(4973);
      const result = obj.updateUserGuildSettings(guildId, f95105, items(4973).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f95105, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
