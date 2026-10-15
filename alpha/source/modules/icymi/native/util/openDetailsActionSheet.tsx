// Module ID: 17531
// Function ID: 17532
// Name: openDetailsActionSheet
// Dependencies: [8690, 5115, 17499, 2000, 2]
// Exports: openDetailsActionSheet

// Module 17531 (openDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8690 */;
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
  obj3.openLazy(asyncRequire(17499, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
