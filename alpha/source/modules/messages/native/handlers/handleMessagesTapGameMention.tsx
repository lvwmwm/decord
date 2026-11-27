// Module ID: 12157
// Function ID: 12158
// Name: handleMessagesTapGameMention
// Dependencies: [8750, 8755, 2]
// Exports: handleMessagesTapGameMention

// Module 12157 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8750 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
