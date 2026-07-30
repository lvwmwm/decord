// Module ID: 15356
// Function ID: 15357
// Name: openDetailsActionSheet
// Dependencies: [8182, 4157, 15322, 1959, 2]
// Exports: openDetailsActionSheet

// Module 15356 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8182).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8182);
  importDefault(8182).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8182);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(15322, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
