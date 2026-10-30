// Module ID: 18512
// Function ID: 18513
// Name: openDetailsActionSheet
// Dependencies: [8915, 5253, 18480, 1995, 2]
// Exports: openDetailsActionSheet

// Module 18512 (openDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8915 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export function openDetailsActionSheet(arg0) {
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
  obj3.openLazy(asyncRequire(18480, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
}
