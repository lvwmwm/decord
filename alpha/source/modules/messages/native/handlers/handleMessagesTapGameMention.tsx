// Module ID: 11285
// Function ID: 11286
// Name: handleMessagesTapGameMention
// Dependencies: [9227, 9221, 2]
// Exports: handleMessagesTapGameMention

// Module 11285 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9221 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9227 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
