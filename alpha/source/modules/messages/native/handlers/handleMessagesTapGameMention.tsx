// Module ID: 11370
// Function ID: 11371
// Name: handleMessagesTapGameMention
// Dependencies: [9283, 9278, 2]
// Exports: handleMessagesTapGameMention

// Module 11370 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9278 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9283 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
