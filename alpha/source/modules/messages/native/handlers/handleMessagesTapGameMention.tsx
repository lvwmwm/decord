// Module ID: 11107
// Function ID: 11108
// Name: handleMessagesTapGameMention
// Dependencies: [9110, 9104, 2]
// Exports: handleMessagesTapGameMention

// Module 11107 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9104 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
