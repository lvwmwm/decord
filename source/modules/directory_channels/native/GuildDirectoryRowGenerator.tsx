// Module ID: 11699
// Function ID: 90761
// Name: RowType
// Dependencies: [10035, 10034, 1212, 2]
// Exports: generateDirectoryRows

// Module 11699 (RowType)
import { DirectoryEntryCategories } from "DirectoryEntryTypes";
import ArrayResult from "module_20";

let obj = { ENTRY: 0, [0]: "ENTRY", HEADER: 1, [1]: "HEADER", PLACEHOLDER: 2, [2]: "PLACEHOLDER" };
obj = { type: obj.PLACEHOLDER };
let closure_4 = require("module_20").fill(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryRowGenerator.tsx");

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
    const obj4 = set(10034);
    return set(10034).rankGuildEntries(arr).map((entry) => ({ type: outer1_3.ENTRY, entry }));
  } else {
    const items = [];
    const rankByDateAddedResult = set(10034).rankByDateAdded(arr);
    const _Set = Set;
    set = new Set(rankByDateAddedResult.map((guildId) => guildId.guildId));
    let combined = items;
    if (rankByDateAddedResult.length > 0) {
      let obj = {};
      obj.type = obj.HEADER;
      const intl = set(1212).intl;
      obj.header = intl.string(set(1212).t.CbaapP);
      items.push(obj);
      combined = items.concat(rankByDateAddedResult.map((entry) => ({ type: outer1_3.ENTRY, entry })));
    }
    const found = arr.filter((guildId) => !set.has(guildId.guildId));
    const obj5 = set(10034);
    const result = set(10034).orderByTotalMemberCount(found);
    let combined1 = combined;
    if (result.length > 0) {
      obj = {};
      obj.type = obj.HEADER;
      const intl2 = set(1212).intl;
      obj.header = intl2.string(set(1212).t.wxbhEe);
      combined.push(obj);
      combined1 = combined.concat(result.map((entry) => ({ type: outer1_3.ENTRY, entry })));
    }
    return combined1;
  }
};
