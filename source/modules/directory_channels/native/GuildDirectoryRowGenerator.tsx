// Module ID: 11689
// Function ID: 90712
// Name: RowType
// Dependencies: []
// Exports: generateDirectoryRows

// Module 11689 (RowType)
const DirectoryEntryCategories = require(dependencyMap[0]).DirectoryEntryCategories;
let obj = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
obj = { type: obj.PLACEHOLDER };
let closure_4 = require("module_20").fill(obj);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

export const RowType = obj;
export const generateDirectoryRows = function generateDirectoryRows(directoryIsFetching, arr, currentCategoryId) {
  if (directoryIsFetching) {
    if (0 === arr.length) {
      return closure_4;
    }
  }
  if (0 === arr.length) {
    return [];
  } else if (currentCategoryId !== DirectoryEntryCategories.ALL) {
    const obj4 = require(dependencyMap[1]);
    return require(dependencyMap[1]).rankGuildEntries(arr).map((entry) => ({ type: constants.ENTRY, entry }));
  } else {
    const items = [];
    const rankByDateAddedResult = require(dependencyMap[1]).rankByDateAdded(arr);
    const _Set = Set;
    const set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    const require = set;
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      let obj = {};
      obj.type = obj.HEADER;
      const intl = require(dependencyMap[2]).intl;
      obj.header = intl.string(require(dependencyMap[2]).t.CbaapP);
      items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const obj5 = require(dependencyMap[1]);
    const result = require(dependencyMap[1]).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      obj = {};
      obj.type = obj.HEADER;
      const intl2 = require(dependencyMap[2]).intl;
      obj.header = intl2.string(require(dependencyMap[2]).t.wxbhEe);
      combined.push(obj);
      combined1 = combined.concat(result.map((entry) => ({ type: constants.ENTRY, entry })));
    }
    return combined1;
  }
};
