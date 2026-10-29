// Module ID: 11424
// Function ID: 11425
// Name: handleMessagesTapGameMention
// Dependencies: [9287, 9282, 2]
// Exports: handleMessagesTapGameMention

// Module 11424 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9282 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9287 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
