// Module ID: 19770
// Function ID: 19771
// Name: EnableCommunityModalActionCreators
// Dependencies: [9056, 8495, 9055, 6738, 19771, 1995, 2]

// Module 19770 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8495 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import size from "module_2" /* 2 */;

let tmp;
const ModalActionCreatorsDefault = tmp(6738);
const CREATE_NEW_CHANNEL_VALUE = PublicGuildsConstants.CREATE_NEW_CHANNEL_VALUE;
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
let obj = {
  open() {
    const guild = GuildSettingsStore.getProps().guild;
    let rulesChannelId;
    const updateGuild = GuildSettingsActionCreatorsDefault.updateGuild;
    GuildSettingsActionCreatorsDefault;
    const tmp2 = dependencyMap;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    if (rulesChannelId == null) {
      rulesChannelId = CREATE_NEW_CHANNEL_VALUE;
    }
    updateGuild({ rulesChannelId });
    const tmpResult = ModalActionCreatorsDefault;
    tmpResult.pushLazy(asyncRequire(19771, tmp2.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
