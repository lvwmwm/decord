// Module ID: 9388
// Function ID: 73183
// Name: handleJoinGuild
// Dependencies: []
// Exports: handleJoinGuild

// Module 9388 (handleJoinGuild)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  const importDefault = guildId;
  if (null != guildId) {
    const obj = importDefault(dependencyMap[0]);
    importDefault(dependencyMap[0]).joinGuild(guildId).then(() => {
      const result = arg0(closure_1[0]).transitionToGuildSync(arg0);
    });
    const joinGuildResult = importDefault(dependencyMap[0]).joinGuild(guildId);
  }
};
