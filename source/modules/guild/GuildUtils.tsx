// Module ID: 8749
// Function ID: 8750
// Name: handleJoinGuild
// Dependencies: [5232, 2]
// Exports: handleJoinGuild

// Module 8749 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5232);
    importDefault(5232).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5232).joinGuild(closure_0);
  }
};
