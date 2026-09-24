// Module ID: 11771
// Function ID: 11772
// Name: handleMessagesTapGameMention
// Dependencies: [8982, 8976, 2]
// Exports: handleMessagesTapGameMention

// Module 11771 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8976 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8982 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
