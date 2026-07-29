// Module ID: 15362
// Function ID: 15363
// Name: openDetailsActionSheet
// Dependencies: [8185, 4157, 15328, 1959, 2]
// Exports: openDetailsActionSheet

// Module 15362 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8185).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8185);
  importDefault(8185).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8185);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(15328, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
