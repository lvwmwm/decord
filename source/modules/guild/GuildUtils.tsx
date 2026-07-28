// Module ID: 9400
// Function ID: 73209
// Name: handleJoinGuild
// Dependencies: [5083, 2]
// Exports: handleJoinGuild

// Module 9400 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  const importDefault = guildId;
  if (null != guildId) {
    const obj = importDefault(5083);
    importDefault(5083).joinGuild(guildId).then(() => {
      const result = guildId(outer1_1[0]).transitionToGuildSync(guildId);
    });
    const joinGuildResult = importDefault(5083).joinGuild(guildId);
  }
};
