// Module ID: 12000
// Function ID: 12001
// Name: handleMessagesTapGameMention
// Dependencies: [8608, 8613, 2]
// Exports: handleMessagesTapGameMention

// Module 12000 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8608 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
