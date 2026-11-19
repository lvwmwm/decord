// Module ID: 19946
// Function ID: 19947
// Name: EnableCommunityModalActionCreators
// Dependencies: [7876, 7878, 7875, 6308, 19947, 2121, 2]

// Module 19946 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7875 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7878 */;
import GuildSettingsStore from "GuildSettingsStore" /* 7876 */;
import size from "module_2" /* 2 */;

let tmp;
const ModalActionCreatorsDefault = tmp(6308);
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
    tmpResult.pushLazy(asyncRequire(19947, tmp2.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
