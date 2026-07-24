// Module ID: 15266
// Function ID: 116351
// Name: openDetailsActionSheet
// Dependencies: [8365, 4098, 15232, 1934, 2]
// Exports: openDetailsActionSheet

// Module 15266 (openDetailsActionSheet)
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8365).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8365);
  importDefault(8365).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8365);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(15232, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
