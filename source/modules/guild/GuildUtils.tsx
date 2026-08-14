// Module ID: 8812
// Function ID: 8813
// Name: handleJoinGuild
// Dependencies: [5293, 2]
// Exports: handleJoinGuild

// Module 8812 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5293);
    importDefault(5293).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5293).joinGuild(closure_0);
  }
};
