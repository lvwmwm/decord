// Module ID: 15607
// Function ID: 15608
// Name: openDetailsActionSheet
// Dependencies: [8913, 4271, 15573, 1988, 2]
// Exports: openDetailsActionSheet

// Module 15607 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8913).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8913);
  importDefault(8913).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8913);
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(15573, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
