// Module ID: 16432
// Function ID: 16433
// Name: openDetailsActionSheet
// Dependencies: [8029, 4854, 16398, 1987, 2]
// Exports: openDetailsActionSheet

// Module 16432 (openDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  const obj = ICYMIActionCreatorsDefault;
  obj.itemInteracted(id, type, "overflow_menu");
  const obj2 = ICYMIActionCreatorsDefault;
  obj2.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(16398, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
