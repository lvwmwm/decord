// Module ID: 14626
// Function ID: 14627
// Name: HubProgressActionCreators
// Dependencies: [5114, 14627, 1072, 5073, 1403, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 14626 (HubProgressActionCreators)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 14627 */;
import GuildStore from "GuildStore" /* 5114 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f108646 = (hubProgress) => {
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
      const obj = items(5073);
      const result = obj.updateUserGuildSettings(guildId, f108646, items(5073).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
}
export function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(id, f108646, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
}
