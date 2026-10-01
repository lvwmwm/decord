// Module ID: 9995
// Function ID: 9996
// Name: guild/GuildUtils
// Dependencies: [6018, 2]
// Exports: handleJoinGuild

// Module 9995 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6018 */;
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
