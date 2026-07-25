// Module ID: 15276
// Function ID: 116479
// Name: openDetailsActionSheet
// Dependencies: [8123, 4099, 15242, 1935, 2]
// Exports: openDetailsActionSheet

// Module 15276 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8123).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8123);
  importDefault(8123).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8123);
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(15242, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
