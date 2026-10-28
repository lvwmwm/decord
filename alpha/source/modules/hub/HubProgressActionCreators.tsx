// Module ID: 9095
// Function ID: 9096
// Name: HubProgressActionCreators
// Dependencies: [4878, 9096, 1084, 4837, 1402, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9095 (HubProgressActionCreators)
import Constants from "Constants" /* 1084 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9096 */;
import GuildStore from "GuildStore" /* 4878 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f103411 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1402);
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

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, INVITE_USER) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [INVITE_USER];
      const obj = items(4837);
      const result = obj.updateUserGuildSettings(guildId, f103411, items(4837).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f103411, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
