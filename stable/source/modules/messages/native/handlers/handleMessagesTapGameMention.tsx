// Module ID: 11236
// Function ID: 11237
// Name: handleMessagesTapGameMention
// Dependencies: [8325, 8319, 2]
// Exports: handleMessagesTapGameMention

// Module 11236 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8325 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
