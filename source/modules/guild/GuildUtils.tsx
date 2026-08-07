// Module ID: 8689
// Function ID: 8690
// Name: handleJoinGuild
// Dependencies: [5231, 2]
// Exports: handleJoinGuild

// Module 8689 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5231);
    importDefault(5231).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5231).joinGuild(closure_0);
  }
};
