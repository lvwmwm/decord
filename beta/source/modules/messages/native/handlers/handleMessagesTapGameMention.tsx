// Module ID: 11893
// Function ID: 11894
// Name: handleMessagesTapGameMention
// Dependencies: [8983, 8989, 2]
// Exports: handleMessagesTapGameMention

// Module 11893 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8983 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8989 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
