// Module ID: 19905
// Function ID: 19906
// Name: EnableCommunityModalActionCreators
// Dependencies: [7995, 7997, 7994, 6429, 19906, 2119, 2]

// Module 19905 (EnableCommunityModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7994 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 7997 */;
import GuildSettingsStore from "GuildSettingsStore" /* 7995 */;
import size from "module_2" /* 2 */;

let tmp;
const ModalActionCreatorsDefault = tmp(6429);
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
    tmpResult.pushLazy(asyncRequire(19906, tmp2.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default obj;
