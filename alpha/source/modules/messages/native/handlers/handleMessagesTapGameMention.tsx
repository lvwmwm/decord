// Module ID: 10737
// Function ID: 10738
// Name: handleMessagesTapGameMention
// Dependencies: [8865, 8859, 2]
// Exports: handleMessagesTapGameMention

// Module 10737 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
