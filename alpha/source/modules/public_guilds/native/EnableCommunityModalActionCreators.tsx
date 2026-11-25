// Module ID: 20040
// Function ID: 20041
// Name: EnableCommunityModalActionCreators
// Dependencies: [8532, 8534, 8531, 6099, 20041, 2119, 2]

// Module 20040 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8531 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8534 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8532 */;
import size from "module_2" /* 2 */;

let tmp;
const ModalActionCreatorsDefault = tmp(6099);
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
    tmpResult.pushLazy(asyncRequire(20041, tmp2.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
