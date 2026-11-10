// Module ID: 11662
// Function ID: 11663
// Name: handleMessagesTapGameMention
// Dependencies: [9320, 9340, 2]
// Exports: handleMessagesTapGameMention

// Module 11662 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9320 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
