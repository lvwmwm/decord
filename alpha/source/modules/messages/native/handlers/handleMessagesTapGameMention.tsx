// Module ID: 11856
// Function ID: 11857
// Name: handleMessagesTapGameMention
// Dependencies: [9466, 9486, 2]
// Exports: handleMessagesTapGameMention

// Module 11856 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9466 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9486 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
