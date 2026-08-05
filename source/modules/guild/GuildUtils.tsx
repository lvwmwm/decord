// Module ID: 8643
// Function ID: 8644
// Name: handleJoinGuild
// Dependencies: [5185, 2]
// Exports: handleJoinGuild

// Module 8643 (handleJoinGuild)
let result = require("set").fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(closure_0) {
  const importDefault = closure_0;
  if (null != closure_0) {
    const obj = importDefault(5185);
    importDefault(5185).joinGuild(closure_0).then(() => {
      const result = callback(outer1_1[0]).transitionToGuildSync(callback);
    });
    const joinGuildResult = importDefault(5185).joinGuild(closure_0);
  }
};
