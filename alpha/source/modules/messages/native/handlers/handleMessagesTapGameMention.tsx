// Module ID: 11215
// Function ID: 11216
// Name: handleMessagesTapGameMention
// Dependencies: [9184, 9178, 2]
// Exports: handleMessagesTapGameMention

// Module 11215 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9178 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9184 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
