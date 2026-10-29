// Module ID: 9098
// Function ID: 9099
// Name: HubProgressActionCreators
// Dependencies: [4879, 9099, 1084, 4838, 1402, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9098 (HubProgressActionCreators)
import Constants from "Constants" /* 1084 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9099 */;
import GuildStore from "GuildStore" /* 4879 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f104419 = (hubProgress) => {
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

export function setHubProgressActionComplete(guildId, INVITE_USER) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [INVITE_USER];
      const obj = items(4838);
      const result = obj.updateUserGuildSettings(guildId, f104419, items(4838).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f104419, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
