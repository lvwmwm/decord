// Module ID: 16553
// Function ID: 129067
// Name: _getMyContentInventory
// Dependencies: [5, 8373, 653, 507, 4029, 686, 1212, 2]
// Exports: deleteContentInventoryEntryHistory, getContentInventoryOutbox, getMyContentInventory, postTrackToContentInventory

// Module 16553 (_getMyContentInventory)
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
