// Module ID: 11545
// Function ID: 11546
// Name: handleMessagesTapGameMention
// Dependencies: [8610, 8616, 2]
// Exports: handleMessagesTapGameMention

// Module 11545 (handleMessagesTapGameMention)
import set from "set" /* 2 */;
import _modDef8610 from "module_8610" /* 8610 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8616 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  let obj = _modDef8610;
  obj = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileEmbedAction.GameProfileSources.GameMention };
  obj.openGameProfileModal(obj);
};
