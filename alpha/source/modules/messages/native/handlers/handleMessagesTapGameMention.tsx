// Module ID: 11868
// Function ID: 11869
// Name: handleMessagesTapGameMention
// Dependencies: [8956, 8962, 2]
// Exports: handleMessagesTapGameMention

// Module 11868 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8956 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
