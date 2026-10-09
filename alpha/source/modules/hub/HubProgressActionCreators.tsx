// Module ID: 8679
// Function ID: 8680
// Name: HubProgressActionCreators
// Dependencies: [2086, 8680, 1085, 2046, 1403, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 8679 (HubProgressActionCreators)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 8680 */;
import GuildStore from "GuildStore" /* 2086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f98920 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1403);
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
      const obj = items(2046);
      const result = obj.updateUserGuildSettings(guildId, f98920, items(2046).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f98920, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
