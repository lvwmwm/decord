// Module ID: 10037
// Function ID: 77562
// Name: _addDirectoryGuildEntry
// Dependencies: []
// Exports: addDirectoryGuildEntry, clearDirectorySearch, fetchGuildEntriesForIds, removeDirectoryGuildEntry, selectDirectoryCategory, updateDirectoryEntry

// Module 10037 (_addDirectoryGuildEntry)
function _addDirectoryGuildEntry() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _addDirectoryGuildEntry = obj;
  return obj(...arguments);
}
function _updateDirectoryEntry() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateDirectoryEntry = obj;
  return obj(...arguments);
}
function _fetchGuildEntriesForIds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildEntriesForIds = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const DirectoryEntryCategories = arg1(dependencyMap[2]).DirectoryEntryCategories;
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const importDefaultResult = importDefault(dependencyMap[4]);
const importDefaultResultResult = importDefault(dependencyMap[4])(() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}(), 200);
const importDefaultResult1 = importDefault(dependencyMap[4]);
const importDefaultResult1Result = importDefault(dependencyMap[4])(() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}(), 200);
const importDefaultResult2 = importDefault(dependencyMap[4]);
const importDefaultResult2Result = importDefault(dependencyMap[4])(() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}(), 200);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/directory_channels/GuildDirectoryActionCreators.tsx");

export const fetchDirectoryEntries = importDefaultResultResult;
export const fetchDirectoryCounts = importDefaultResult1Result;
export const addDirectoryGuildEntry = function addDirectoryGuildEntry(directoryChannelId, id, description, category) {
  return _addDirectoryGuildEntry(...arguments);
};
export const removeDirectoryGuildEntry = function removeDirectoryGuildEntry(channelId, guildId) {
  let obj = importDefault(dependencyMap[7]);
  obj = { url: Endpoints.DIRECTORY_CHANNEL_ENTRY(channelId, guildId) };
  obj = { event: guildId(dependencyMap[8]).NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE, properties: obj1 };
  obj.trackedActionData = obj;
  obj.rejectWithError = true;
  obj.delete(obj);
  importDefault(dependencyMap[5]).dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId, guildId });
};
export const searchDirectoryEntries = importDefaultResult2Result;
export const clearDirectorySearch = function clearDirectorySearch(id) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: id };
  obj.dispatch(obj);
};
export const updateDirectoryEntry = function updateDirectoryEntry(channelId, guildId, arg2, arg3) {
  return _updateDirectoryEntry(...arguments);
};
export const selectDirectoryCategory = function selectDirectoryCategory(id, value) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: id, categoryId: value };
  obj.dispatch(obj);
};
export const fetchGuildEntriesForIds = function fetchGuildEntriesForIds(arg0, arg1) {
  return _fetchGuildEntriesForIds(...arguments);
};
