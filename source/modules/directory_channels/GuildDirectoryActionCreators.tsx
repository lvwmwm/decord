// Module ID: 10078
// Function ID: 77809
// Name: _addDirectoryGuildEntry
// Dependencies: [5, 10065, 10067, 653, 574, 686, 507, 4942, 480, 2]
// Exports: addDirectoryGuildEntry, clearDirectorySearch, fetchGuildEntriesForIds, removeDirectoryGuildEntry, selectDirectoryCategory, updateDirectoryEntry

// Module 10078 (_addDirectoryGuildEntry)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DirectoryEntryCategories } from "DirectoryEntryTypes";
import { Endpoints } from "ME";
import importDefaultResult from "debounce";
import importDefaultResult1 from "debounce";
import importDefaultResult2 from "debounce";

const require = arg1;
function _addDirectoryGuildEntry() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateDirectoryEntry() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchGuildEntriesForIds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const importDefaultResultResult = require("debounce")((() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})(), 200);
const importDefaultResult1Result = require("debounce")((() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})(), 200);
const importDefaultResult2Result = require("debounce")((() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
})(), 200);
const result = require("DirectoryEntryTypes").fileFinishedImporting("modules/directory_channels/GuildDirectoryActionCreators.tsx");

export const fetchDirectoryEntries = importDefaultResultResult;
export const fetchDirectoryCounts = importDefaultResult1Result;
export const addDirectoryGuildEntry = function addDirectoryGuildEntry(directoryChannelId, id, description, category) {
  return _addDirectoryGuildEntry(...arguments);
};
export const removeDirectoryGuildEntry = function removeDirectoryGuildEntry(channelId, guildId) {
  let obj = importDefault(4942);
  obj = { url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId) };
  obj = { event: require(480) /* isThrottled */.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE, properties: obj1 };
  obj.trackedActionData = obj;
  obj.rejectWithError = true;
  obj.delete(obj);
  importDefault(686).dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId });
};
export const searchDirectoryEntries = importDefaultResult2Result;
export const clearDirectorySearch = function clearDirectorySearch(id) {
  let obj = importDefault(686);
  obj = { type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id };
  obj.dispatch(obj);
};
export const updateDirectoryEntry = function updateDirectoryEntry(channelId, guildId, arg2, arg3) {
  return _updateDirectoryEntry(...arguments);
};
export const selectDirectoryCategory = function selectDirectoryCategory(id, value) {
  let obj = importDefault(686);
  obj = { type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value };
  obj.dispatch(obj);
};
export const fetchGuildEntriesForIds = function fetchGuildEntriesForIds(arg0, arg1) {
  return _fetchGuildEntriesForIds(...arguments);
};
