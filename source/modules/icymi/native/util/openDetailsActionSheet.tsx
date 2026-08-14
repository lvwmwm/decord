// Module ID: 15698
// Function ID: 15699
// Name: openDetailsActionSheet
// Dependencies: [8976, 4310, 15664, 2007, 2]
// Exports: openDetailsActionSheet

// Module 15698 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8976).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8976);
  importDefault(8976).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8976);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(15664, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
