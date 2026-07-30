// Module ID: 10924
// Function ID: 10925
// Name: handleMessagesTapGameMention
// Dependencies: [8477, 8483, 2]
// Exports: handleMessagesTapGameMention

// Module 10924 (handleMessagesTapGameMention)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(8477);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(8483) /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
