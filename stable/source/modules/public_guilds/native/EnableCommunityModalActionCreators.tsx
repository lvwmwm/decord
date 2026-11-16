// Module ID: 20280
// Function ID: 20281
// Name: EnableCommunityModalActionCreators
// Dependencies: [9188, 8607, 9187, 6831, 20281, 2118, 2]

// Module 20280 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8607 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9187 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9188 */;
import size from "module_2" /* 2 */;

let tmp;
const ModalActionCreatorsDefault = tmp(6831);
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
    tmpResult.pushLazy(asyncRequire(20281, tmp2.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
