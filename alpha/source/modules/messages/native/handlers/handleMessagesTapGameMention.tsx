// Module ID: 11866
// Function ID: 11867
// Name: handleMessagesTapGameMention
// Dependencies: [9473, 9493, 2]
// Exports: handleMessagesTapGameMention

// Module 11866 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9473 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9493 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
