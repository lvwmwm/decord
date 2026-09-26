// Module ID: 9285
// Function ID: 9286
// Name: HubProgressActionCreators
// Dependencies: [2067, 9286, 1074, 2026, 1385, 2]
// Exports: setHubProgressActionComplete, skipHubProgress

// Module 9285 (HubProgressActionCreators)
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const HUB_PROGRESS_STEP_ORDER = fn(9286).HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [JOIN_GUILD];
      const result = items(2026).updateUserGuildSettings(guildId, (hubProgress) => {
        let flag = false;
        for (const item10008 of closure_0) {
          let tmp = item10008;
          let tmp2 = require;
          let obj = FlagUtils;
          if (!obj.hasFlag(arg0.hubProgress, item10008)) {
            let tmp2Result = tmp2(1385);
            arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
            flag = true;
          }
          continue;
        }
        return flag;
      }, items(2026).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj = items(2026);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(id, (hubProgress) => {
    let flag = false;
    for (const item10008 of closure_0) {
      let tmp = item10008;
      let tmp2 = require;
      let obj = FlagUtils;
      if (!obj.hasFlag(arg0.hubProgress, item10008)) {
        let tmp2Result = tmp2(1385);
        arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
        flag = true;
      }
      continue;
    }
    return flag;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
