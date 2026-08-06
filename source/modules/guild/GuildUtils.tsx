// Module ID: 8672
// Function ID: 8673
// Name: handleJoinGuild
// Dependencies: [5215, 2]
// Exports: handleJoinGuild

// Module 8672 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5215);
    importDefault(5215).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5215).joinGuild(closure_0);
  }
};
