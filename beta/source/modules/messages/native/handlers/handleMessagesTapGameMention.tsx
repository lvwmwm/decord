// Module ID: 11864
// Function ID: 11865
// Name: handleMessagesTapGameMention
// Dependencies: [8951, 8957, 2]
// Exports: handleMessagesTapGameMention

// Module 11864 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8951 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8957 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
