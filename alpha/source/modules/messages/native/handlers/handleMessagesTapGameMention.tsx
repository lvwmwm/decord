// Module ID: 11832
// Function ID: 11833
// Name: handleMessagesTapGameMention
// Dependencies: [9419, 9439, 2]
// Exports: handleMessagesTapGameMention

// Module 11832 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9419 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
