// Module ID: 9948
// Function ID: 9949
// Name: guild/GuildUtils
// Dependencies: [5705, 2]
// Exports: handleJoinGuild

// Module 9948 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import size from "module_2" /* 2 */;

let importDefault;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(guildId);
    joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(guildId);
    });
  }
};
