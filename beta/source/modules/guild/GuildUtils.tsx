// Module ID: 10556
// Function ID: 10557
// Name: guild/GuildUtils
// Dependencies: [5771, 2]
// Exports: handleJoinGuild

// Module 10556 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5771 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(guildId);
  }
};
