// Module ID: 11364
// Function ID: 11365
// Name: handleMessagesTapGameMention
// Dependencies: [8856, 8850, 2]
// Exports: handleMessagesTapGameMention

// Module 11364 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
