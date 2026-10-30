// Module ID: 9111
// Function ID: 9112
// Name: HubProgressActionCreators
// Dependencies: [4880, 9112, 1072, 4839, 1397, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9111 (HubProgressActionCreators)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1397 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9112 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f93821 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1397);
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
      const obj = items(4839);
      const result = obj.updateUserGuildSettings(guildId, f93821, items(4839).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f93821, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
