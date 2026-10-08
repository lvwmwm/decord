// Module ID: 16736
// Function ID: 16737
// Name: openDetailsActionSheet
// Dependencies: [8447, 5054, 16702, 1999, 2]
// Exports: openDetailsActionSheet

// Module 16736 (openDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8447 */;
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
  obj3.openLazy(asyncRequire(16702, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
