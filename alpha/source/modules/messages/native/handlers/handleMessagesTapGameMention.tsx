// Module ID: 12487
// Function ID: 12488
// Name: handleMessagesTapGameMention
// Dependencies: [10212, 10217, 2]
// Exports: handleMessagesTapGameMention

// Module 12487 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10212 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
