// Module ID: 11990
// Function ID: 11991
// Name: handleMessagesTapGameMention
// Dependencies: [9649, 9654, 2]
// Exports: handleMessagesTapGameMention

// Module 11990 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9649 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9654 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
