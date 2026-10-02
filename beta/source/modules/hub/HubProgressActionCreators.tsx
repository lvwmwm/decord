// Module ID: 9263
// Function ID: 9264
// Name: HubProgressActionCreators
// Dependencies: [2073, 9264, 1086, 2032, 1391, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9263 (HubProgressActionCreators)
import Constants from "Constants" /* 1086 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9264 */;
import GuildStore from "GuildStore" /* 2073 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f99633 = (hubProgress) => {
  let flag = false;
  for (const item10008 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10008;
    let tmp2 = require;
    let obj = FlagUtils;
    if (!obj.hasFlag(hubProgress.hubProgress, item10008)) {
      let tmp2Result = tmp2(1391);
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
      const obj = items(2032);
      const result = obj.updateUserGuildSettings(guildId, f99633, items(2032).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f99633, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
