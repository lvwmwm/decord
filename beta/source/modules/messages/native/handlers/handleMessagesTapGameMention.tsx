// Module ID: 10773
// Function ID: 10774
// Name: handleMessagesTapGameMention
// Dependencies: [8880, 8874, 2]
// Exports: handleMessagesTapGameMention

// Module 10773 (handleMessagesTapGameMention)
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8874 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8880 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj2);
};
