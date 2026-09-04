// Module ID: 16416
// Function ID: 16417
// Name: openDetailsActionSheet
// Dependencies: [8281, 4448, 16382, 2008, 2]
// Exports: openDetailsActionSheet

// Module 16416 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef8281 from "module_8281" /* 8281 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8281.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8281;
  _modDef8281.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8281;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16382, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
