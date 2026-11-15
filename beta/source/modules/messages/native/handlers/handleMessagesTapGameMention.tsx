// Module ID: 11854
// Function ID: 11855
// Name: handleMessagesTapGameMention
// Dependencies: [9434, 9454, 2]
// Exports: handleMessagesTapGameMention

// Module 11854 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9434 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9454 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
