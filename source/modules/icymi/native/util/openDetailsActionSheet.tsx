// Module ID: 15680
// Function ID: 15681
// Name: openDetailsActionSheet
// Dependencies: [8962, 4310, 15646, 2007, 2]
// Exports: openDetailsActionSheet

// Module 15680 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8962).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8962);
  importDefault(8962).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8962);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(15646, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
