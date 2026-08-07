// Module ID: 15524
// Function ID: 15525
// Name: openDetailsActionSheet
// Dependencies: [8853, 4270, 15490, 1988, 2]
// Exports: openDetailsActionSheet

// Module 15524 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8853).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8853);
  importDefault(8853).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8853);
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(15490, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
