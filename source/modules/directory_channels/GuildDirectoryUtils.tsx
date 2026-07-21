// Module ID: 10025
// Function ID: 77463
// Name: orderByTotalMemberCount
// Dependencies: []
// Exports: guildDirectoryEntryFromServer, rankByDateAdded, rankGuildEntries

// Module 10025 (orderByTotalMemberCount)
function orderByTotalMemberCount(found) {
  const items = [(approximateMemberCount) => approximateMemberCount.approximateMemberCount];
  return importDefault(dependencyMap[2]).orderBy(found, items, []);
}
function orderByDateAdded(items) {
  items = [(createdAt) => createdAt.createdAt];
  return importDefault(dependencyMap[2]).orderBy(items, items, []);
}
const DirectoryEntryTypes = require(dependencyMap[0]).DirectoryEntryTypes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/directory_channels/GuildDirectoryUtils.tsx");

export const guildDirectoryEntryFromServer = function guildDirectoryEntryFromServer(entry) {
  let guild;
  if (entry.type === DirectoryEntryTypes.GUILD) {
    const obj = {};
    ({ directory_channel_id: obj.channelId, entity_id: obj.guildId, type: obj.type, author_id: obj.authorId, created_at: obj.createdAt, description: obj.description, primary_category_id: obj.primaryCategoryId, guild } = entry);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj.name = name;
    const guild2 = entry.guild;
    let icon;
    if (null != guild2) {
      icon = guild2.icon;
    }
    obj.icon = icon;
    const guild3 = entry.guild;
    let splash;
    if (null != guild3) {
      splash = guild3.splash;
    }
    obj.splash = splash;
    let _Set = Set;
    const guild4 = entry.guild;
    let features;
    if (null != guild4) {
      features = guild4.features;
    }
    const prototype = _Set.prototype;
    _Set = new _Set(features);
    obj.features = _Set;
    const guild5 = entry.guild;
    let prop;
    if (null != guild5) {
      prop = guild5.approximate_member_count;
    }
    obj.approximateMemberCount = prop;
    const guild6 = entry.guild;
    let prop1;
    if (null != guild6) {
      prop1 = guild6.approximate_presence_count;
    }
    obj.approximatePresenceCount = prop1;
    const guild7 = entry.guild;
    let prop2;
    if (null != guild7) {
      prop2 = guild7.featurable_in_directory;
    }
    obj.featurableInDirectory = prop2;
    return obj;
  } else {
    const type = entry.type;
    importDefault(dependencyMap[1])(false, "Directory entries must be connected to a guild!");
  }
};
export const MAX_CATEGORY_SERVERS = 5;
export { orderByTotalMemberCount };
export { orderByDateAdded };
export const rankByDateAdded = function rankByDateAdded(arr) {
  return orderByDateAdded(arr.filter((featurableInDirectory) => featurableInDirectory.featurableInDirectory)).slice(0, 5);
};
export const rankGuildEntries = function rankGuildEntries(arr) {
  return orderByTotalMemberCount(arr);
};
