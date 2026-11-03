// Module ID: 11799
// Function ID: 11800
// Name: handleMessagesTapGameMention
// Dependencies: [9448, 9468, 2]
// Exports: handleMessagesTapGameMention

// Module 11799 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9448 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9468 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
