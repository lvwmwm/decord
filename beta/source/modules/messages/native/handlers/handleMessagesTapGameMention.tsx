// Module ID: 12115
// Function ID: 12116
// Name: handleMessagesTapGameMention
// Dependencies: [9769, 9774, 2]
// Exports: handleMessagesTapGameMention

// Module 12115 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9769 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9774 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
}
