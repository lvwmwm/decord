// Module ID: 11735
// Function ID: 11736
// Name: handleMessagesTapGameMention
// Dependencies: [8950, 8944, 2]
// Exports: handleMessagesTapGameMention

// Module 11735 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8944 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8950 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
