// Module ID: 15748
// Function ID: 15749
// Name: openDetailsActionSheet
// Dependencies: [9057, 4342, 15714, 2007, 2]
// Exports: openDetailsActionSheet

// Module 15748 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(9057).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(9057);
  importDefault(9057).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(9057);
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(15714, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
