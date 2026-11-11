// Module ID: 12493
// Function ID: 12494
// Name: handleMessagesTapGameMention
// Dependencies: [10214, 10219, 2]
// Exports: handleMessagesTapGameMention

// Module 12493 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10214 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
