// Module ID: 10871
// Function ID: 84543
// Name: handleMessagesTapGameMention
// Dependencies: []
// Exports: handleMessagesTapGameMention

// Module 10871 (handleMessagesTapGameMention)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = importDefault(dependencyMap[0]);
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: require(dependencyMap[1]).GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
