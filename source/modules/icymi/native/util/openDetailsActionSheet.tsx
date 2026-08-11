// Module ID: 15624
// Function ID: 15625
// Name: openDetailsActionSheet
// Dependencies: [8919, 4271, 15590, 2007, 2]
// Exports: openDetailsActionSheet

// Module 15624 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8919).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8919);
  importDefault(8919).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8919);
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(15590, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
