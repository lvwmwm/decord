// Module ID: 10003
// Function ID: 10004
// Name: guild/GuildUtils
// Dependencies: [6029, 2]
// Exports: handleJoinGuild

// Module 10003 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6029 */;
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
