// Module ID: 10904
// Function ID: 84544
// Name: handleMessagesTapGameMention
// Dependencies: [8456, 8462, 2]
// Exports: handleMessagesTapGameMention

// Module 10904 (handleMessagesTapGameMention)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(8456);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(8462) /* GameProfileEmbedAction */.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
