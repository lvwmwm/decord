// Module ID: 11133
// Function ID: 11134
// Name: handleMessagesTapGameMention
// Dependencies: [9323, 9329, 2]
// Exports: handleMessagesTapGameMention

// Module 11133 (handleMessagesTapGameMention)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(9323);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(9329) /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
