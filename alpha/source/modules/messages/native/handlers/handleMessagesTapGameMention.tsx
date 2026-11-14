// Module ID: 12583
// Function ID: 12584
// Name: handleMessagesTapGameMention
// Dependencies: [10281, 10286, 2]
// Exports: handleMessagesTapGameMention

// Module 12583 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10281 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10286 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
