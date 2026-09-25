// Module ID: 9791
// Function ID: 9792
// Name: guild/GuildUtils
// Dependencies: [5827, 2]
// Exports: handleJoinGuild

// Module 9791 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5827 */;
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
