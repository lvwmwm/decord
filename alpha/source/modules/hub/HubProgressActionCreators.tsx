// Module ID: 9275
// Function ID: 9276
// Name: HubProgressActionCreators
// Dependencies: [5012, 9276, 1072, 4971, 1398, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9275 (HubProgressActionCreators)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1398 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9276 */;
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f94938 = (hubProgress) => {
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
      const obj = items(4971);
      const result = obj.updateUserGuildSettings(guildId, f94938, items(4971).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f94938, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
