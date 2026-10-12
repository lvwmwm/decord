// Module ID: 10772
// Function ID: 10773
// Name: handleMessagesTapGameMention
// Dependencies: [8885, 8879, 2]
// Exports: handleMessagesTapGameMention

// Module 10772 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8879 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8885 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
