// Module ID: 11944
// Function ID: 11945
// Name: handleMessagesTapGameMention
// Dependencies: [9027, 9033, 2]
// Exports: handleMessagesTapGameMention

// Module 11944 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9027 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9033 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
