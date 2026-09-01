// Module ID: 11199
// Function ID: 11200
// Name: handleMessagesTapGameMention
// Dependencies: [8806, 8812, 2]
// Exports: handleMessagesTapGameMention

// Module 11199 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8806 from "module_8806" /* 8806 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8812 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8806;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
