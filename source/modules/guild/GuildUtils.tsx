// Module ID: 9582
// Function ID: 9583
// Name: handleJoinGuild
// Dependencies: [5171, 2]
// Exports: handleJoinGuild

// Module 9582 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5171);
    importDefault(5171).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5171).joinGuild(closure_0);
  }
};
