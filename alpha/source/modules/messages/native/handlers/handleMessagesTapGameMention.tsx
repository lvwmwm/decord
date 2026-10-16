// Module ID: 11110
// Function ID: 11111
// Name: handleMessagesTapGameMention
// Dependencies: [9109, 9103, 2]
// Exports: handleMessagesTapGameMention

// Module 11110 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9103 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
