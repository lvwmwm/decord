// Module ID: 8670
// Function ID: 8671
// Name: HubProgressActionCreators
// Dependencies: [2086, 8671, 1085, 2045, 1402, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 8670 (HubProgressActionCreators)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 8671 */;
import GuildStore from "GuildStore" /* 2086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f98713 = (hubProgress) => {
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
      const obj = items(2045);
      const result = obj.updateUserGuildSettings(guildId, f98713, items(2045).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f98713, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
