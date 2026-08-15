// Module ID: 9417
// Function ID: 9418
// Name: handleJoinGuild
// Dependencies: [6778, 2]
// Exports: handleJoinGuild

// Module 9417 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(6778);
    importDefault(6778).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(6778).joinGuild(closure_0);
  }
};
