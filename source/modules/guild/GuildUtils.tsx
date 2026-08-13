// Module ID: 8798
// Function ID: 8799
// Name: handleJoinGuild
// Dependencies: [5272, 2]
// Exports: handleJoinGuild

// Module 8798 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5272);
    importDefault(5272).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5272).joinGuild(closure_0);
  }
};
