// Module ID: 11189
// Function ID: 11190
// Name: handleMessagesTapGameMention
// Dependencies: [9156, 9150, 2]
// Exports: handleMessagesTapGameMention

// Module 11189 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9150 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9156 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
