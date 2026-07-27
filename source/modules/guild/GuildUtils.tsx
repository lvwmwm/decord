// Module ID: 9356
// Function ID: 73058
// Name: handleJoinGuild
// Dependencies: [5049, 2]
// Exports: handleJoinGuild

// Module 9356 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  const importDefault = guildId;
  if (null != guildId) {
    const obj = importDefault(5049);
    importDefault(5049).joinGuild(guildId).then(() => {
      const result = guildId(outer1_1[0]).transitionToGuildSync(guildId);
    });
    const joinGuildResult = importDefault(5049).joinGuild(guildId);
  }
};
