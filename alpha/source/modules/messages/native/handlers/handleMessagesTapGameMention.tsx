// Module ID: 12777
// Function ID: 12778
// Name: handleMessagesTapGameMention
// Dependencies: [10389, 10394, 2]
// Exports: handleMessagesTapGameMention

// Module 12777 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10389 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10394 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
