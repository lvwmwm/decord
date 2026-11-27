// Module ID: 10441
// Function ID: 10442
// Name: HubProgressActionCreators
// Dependencies: [4914, 10442, 1071, 4873, 1405, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 10441 (HubProgressActionCreators)
import Constants from "Constants" /* 1071 */;
import FlagUtils from "FlagUtils" /* 1405 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 10442 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f97882 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1405);
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
      const obj = items(4873);
      const result = obj.updateUserGuildSettings(guildId, f97882, items(4873).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f97882, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
