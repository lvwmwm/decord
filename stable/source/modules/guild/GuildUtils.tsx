// Module ID: 9721
// Function ID: 9722
// Name: guild/GuildUtils
// Dependencies: [5833, 2]
// Exports: handleJoinGuild

// Module 9721 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5833 */;
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
