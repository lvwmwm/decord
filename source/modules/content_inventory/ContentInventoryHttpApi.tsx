// Module ID: 16366
// Function ID: 126435
// Name: _getMyContentInventory
// Dependencies: []
// Exports: deleteContentInventoryEntryHistory, getContentInventoryOutbox, getMyContentInventory, postTrackToContentInventory

// Module 16366 (_getMyContentInventory)
function _getMyContentInventory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getMyContentInventory = obj;
  return obj(...arguments);
}
function _getContentInventoryOutbox() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getContentInventoryOutbox = obj;
  return obj(...arguments);
}
function _deleteContentInventoryEntryHistory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteContentInventoryEntryHistory = obj;
  return obj(...arguments);
}
function _postTrackToContentInventory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _postTrackToContentInventory = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const ContentInventoryFeedKey = arg1(dependencyMap[1]).ContentInventoryFeedKey;
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/content_inventory/ContentInventoryHttpApi.tsx");

export const getMyContentInventory = function getMyContentInventory(arg0) {
  return _getMyContentInventory(...arguments);
};
export const getContentInventoryOutbox = function getContentInventoryOutbox() {
  return _getContentInventoryOutbox(...arguments);
};
export const deleteContentInventoryEntryHistory = function deleteContentInventoryEntryHistory() {
  return _deleteContentInventoryEntryHistory(...arguments);
};
export const postTrackToContentInventory = function postTrackToContentInventory() {
  return _postTrackToContentInventory(...arguments);
};
