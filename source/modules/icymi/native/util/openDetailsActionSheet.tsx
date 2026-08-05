// Module ID: 15462
// Function ID: 15463
// Name: openDetailsActionSheet
// Dependencies: [8807, 4223, 15428, 1959, 2]
// Exports: openDetailsActionSheet

// Module 15462 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8807).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8807);
  importDefault(8807).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8807);
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(15428, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
