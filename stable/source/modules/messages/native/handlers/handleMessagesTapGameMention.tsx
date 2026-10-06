// Module ID: 10978
// Function ID: 10979
// Name: handleMessagesTapGameMention
// Dependencies: [8131, 8125, 2]
// Exports: handleMessagesTapGameMention

// Module 10978 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8125 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
