// Module ID: 12149
// Function ID: 12150
// Name: handleMessagesTapGameMention
// Dependencies: [8749, 8754, 2]
// Exports: handleMessagesTapGameMention

// Module 12149 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8749 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8754 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
