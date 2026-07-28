// Module ID: 15329
// Function ID: 116687
// Name: openDetailsActionSheet
// Dependencies: [8161, 4133, 15295, 1935, 2]
// Exports: openDetailsActionSheet

// Module 15329 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8161).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8161);
  importDefault(8161).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8161);
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(15295, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
