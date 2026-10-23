// Module ID: 11308
// Function ID: 11309
// Name: handleMessagesTapGameMention
// Dependencies: [9250, 9244, 2]
// Exports: handleMessagesTapGameMention

// Module 11308 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9244 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9250 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
