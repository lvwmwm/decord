// Module ID: 8671
// Function ID: 8672
// Name: handleJoinGuild
// Dependencies: [5200, 2]
// Exports: handleJoinGuild

// Module 8671 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5200);
    importDefault(5200).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5200).joinGuild(closure_0);
  }
};
