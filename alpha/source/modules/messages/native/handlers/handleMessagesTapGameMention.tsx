// Module ID: 11321
// Function ID: 11322
// Name: handleMessagesTapGameMention
// Dependencies: [8320, 8326, 2]
// Exports: handleMessagesTapGameMention

// Module 11321 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8320 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8326 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
