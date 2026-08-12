// Module ID: 8794
// Function ID: 8795
// Name: handleJoinGuild
// Dependencies: [5271, 2]
// Exports: handleJoinGuild

// Module 8794 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5271);
    importDefault(5271).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5271).joinGuild(closure_0);
  }
};
