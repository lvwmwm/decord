// Module ID: 11330
// Function ID: 11331
// Name: handleMessagesTapGameMention
// Dependencies: [9251, 9245, 2]
// Exports: handleMessagesTapGameMention

// Module 11330 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9245 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9251 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
