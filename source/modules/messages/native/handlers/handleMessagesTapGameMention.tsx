// Module ID: 10989
// Function ID: 10990
// Name: handleMessagesTapGameMention
// Dependencies: [9194, 9200, 2]
// Exports: handleMessagesTapGameMention

// Module 10989 (handleMessagesTapGameMention)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(9194);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(9200) /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
