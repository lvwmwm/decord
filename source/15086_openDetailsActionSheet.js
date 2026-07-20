// Module ID: 15086
// Function ID: 113759
// Name: openDetailsActionSheet
// Dependencies: []
// Exports: openDetailsActionSheet

// Module 15086 (openDetailsActionSheet)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(dependencyMap[0]).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[0]).feedItemActioned({ itemId: id, itemType: type, actionParameters: {} });
  const obj2 = importDefault(dependencyMap[0]);
  importDefault(dependencyMap[1]).openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
