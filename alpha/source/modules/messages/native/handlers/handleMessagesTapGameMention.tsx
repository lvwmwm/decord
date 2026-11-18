// Module ID: 12071
// Function ID: 12072
// Name: handleMessagesTapGameMention
// Dependencies: [9670, 9675, 2]
// Exports: handleMessagesTapGameMention

// Module 12071 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9670 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9675 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
