// Module ID: 11746
// Function ID: 11747
// Name: handleMessagesTapGameMention
// Dependencies: [8803, 8809, 2]
// Exports: handleMessagesTapGameMention

// Module 11746 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8803 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
