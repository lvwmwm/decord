// Module ID: 16845
// Function ID: 16846
// Name: openDetailsActionSheet
// Dependencies: [8659, 4757, 16811, 1984, 2]
// Exports: openDetailsActionSheet

// Module 16845 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16811, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
