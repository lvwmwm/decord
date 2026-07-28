// Module ID: 16616
// Function ID: 129443
// Name: _getMyContentInventory
// Dependencies: [5, 8169, 653, 507, 4064, 686, 1212, 2]
// Exports: deleteContentInventoryEntryHistory, getContentInventoryOutbox, getMyContentInventory, postTrackToContentInventory

// Module 16616 (_getMyContentInventory)
import dispatcher from "dispatcher";
import { ContentInventoryFeedKey } from "ContentInventoryFeedKey";
import { Endpoints } from "ME";

const require = arg1;
function _getMyContentInventory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getContentInventoryOutbox() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteContentInventoryEntryHistory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _postTrackToContentInventory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("modules/content_inventory/ContentInventoryHttpApi.tsx");

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
