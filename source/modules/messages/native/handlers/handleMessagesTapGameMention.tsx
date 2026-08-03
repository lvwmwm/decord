// Module ID: 11064
// Function ID: 11065
// Name: handleMessagesTapGameMention
// Dependencies: [8779, 8785, 2]
// Exports: handleMessagesTapGameMention

// Module 11064 (handleMessagesTapGameMention)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(8779);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(8785) /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
