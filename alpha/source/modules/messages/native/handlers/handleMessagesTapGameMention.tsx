// Module ID: 11259
// Function ID: 11260
// Name: handleMessagesTapGameMention
// Dependencies: [9211, 9205, 2]
// Exports: handleMessagesTapGameMention

// Module 11259 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9205 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
