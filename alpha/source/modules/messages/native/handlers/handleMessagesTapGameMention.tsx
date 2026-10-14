// Module ID: 10871
// Function ID: 10872
// Name: handleMessagesTapGameMention
// Dependencies: [8889, 8883, 2]
// Exports: handleMessagesTapGameMention

// Module 10871 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8883 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8889 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
