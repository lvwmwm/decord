// Module ID: 11204
// Function ID: 11205
// Name: handleMessagesTapGameMention
// Dependencies: [9172, 9166, 2]
// Exports: handleMessagesTapGameMention

// Module 11204 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9166 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9172 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
