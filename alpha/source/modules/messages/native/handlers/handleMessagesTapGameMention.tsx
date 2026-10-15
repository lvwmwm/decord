// Module ID: 11095
// Function ID: 11096
// Name: handleMessagesTapGameMention
// Dependencies: [9101, 9095, 2]
// Exports: handleMessagesTapGameMention

// Module 11095 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9095 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9101 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
