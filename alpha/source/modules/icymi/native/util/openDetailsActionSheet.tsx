// Module ID: 16135
// Function ID: 16136
// Name: openDetailsActionSheet
// Dependencies: [7799, 4800, 16101, 1981, 2]
// Exports: openDetailsActionSheet

// Module 16135 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16101, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
