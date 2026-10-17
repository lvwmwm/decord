// Module ID: 17634
// Function ID: 17635
// Name: openDetailsActionSheet
// Dependencies: [8745, 5155, 17602, 2002, 2]
// Exports: openDetailsActionSheet

// Module 17634 (openDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8745 */;
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
  obj3.openLazy(asyncRequire(17602, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
