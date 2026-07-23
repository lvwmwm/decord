// Module ID: 15219
// Function ID: 116029
// Name: openDetailsActionSheet
// Dependencies: [8321, 4098, 15185, 1934, 2]
// Exports: openDetailsActionSheet

// Module 15219 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8321).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8321);
  importDefault(8321).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8321);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(15185, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
