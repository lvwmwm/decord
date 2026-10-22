// Module ID: 11276
// Function ID: 11277
// Name: handleMessagesTapGameMention
// Dependencies: [9220, 9214, 2]
// Exports: handleMessagesTapGameMention

// Module 11276 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9214 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
