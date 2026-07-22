// Module ID: 6882
// Function ID: 54599
// Name: appDatabaseManager
// Dependencies: []

// Module 6882 (appDatabaseManager)
let obj = {
  name: "Channels",
  actions: ["d", "D", "E", "i", "c", "t", "T", "y", "R", "u"],
  require() {
    return require(dependencyMap[1]).default;
  }
};
const items = [obj, , , , , , , , , , , , , , , ];
obj = {
  name: "GuildBasicChannels",
  actions: [],
  require() {
    return require(dependencyMap[2]).default;
  }
};
items[1] = obj;
obj = {
  name: "GuildEmojis",
  actions: [false, false, false, false, false, false],
  require() {
    return require(dependencyMap[3]).default;
  }
};
items[2] = obj;
items[3] = {
  name: "Guilds",
  actions: ["<string:1409245440>", "<string:24510997>", "<string:727777583>", "<string:1979849811>", "<string:1627528193>", "<string:34953003>", "<string:29819420>", "<string:37618099>", "<string:87884150>", "<string:3428823121>"],
  require() {
    return require(dependencyMap[4]).default;
  }
};
items[4] = {
  name: "GuildsRequiringDeletedIdsSync",
  actions: [],
  require() {
    return require(dependencyMap[5]).default;
  }
};
items[5] = {
  name: "GuildsRequiringChannelSync",
  actions: [],
  require() {
    return require(dependencyMap[6]).default;
  }
};
items[6] = {
  name: "GuildStickers",
  actions: ["<string:1983271680>", "<string:717886051>", "<string:32919617>", "<string:2526302720>", "<string:1113697248>", "reduceMotionChanged"],
  require() {
    return require(dependencyMap[7]).default;
  }
};
items[7] = {
  name: "GuildVersions",
  actions: [],
  require() {
    return require(dependencyMap[8]).default;
  }
};
items[8] = {
  name: "KvCacheVersion",
  actions: [],
  require() {
    return require(dependencyMap[9]).default;
  }
};
items[9] = {
  name: "Messages",
  actions: ["GAME_CLICKED_LANDING", "woman_with_probing_cane", "_handleConnectionOpenSupplemental", "NitroSupergraphicLogo", "UNKNOWN_USER", "hasViewManagerConfig", "person_pouting", "BACKDROP_OPACITY"],
  require() {
    return require(dependencyMap[10]).default;
  }
};
items[10] = {
  name: "LowDiskTrim",
  actions: [false],
  require() {
    return require(dependencyMap[11]).default;
  }
};
items[11] = {
  name: "NonGuildVersions",
  actions: ["spoiler", "timestamp"],
  require() {
    return require(dependencyMap[12]).default;
  }
};
items[12] = {
  name: "ReadStates",
  actions: [17, 152, 122, 4, 153],
  require() {
    return require(dependencyMap[13]).default;
  }
};
items[13] = {
  name: "UserSettingsProto",
  actions: [],
  require() {
    return require(dependencyMap[14]).default;
  }
};
items[14] = {
  name: "UserGuildSettings",
  actions: [],
  require() {
    return require(dependencyMap[15]).default;
  }
};
items[15] = {
  name: "UserSearchItems",
  actions: [],
  require() {
    return require(dependencyMap[16]).default;
  }
};
const appDatabaseManager = new require(dependencyMap[0]).AppDatabaseManager("MobileAppDatabaseManager", [], items);
const _module = require(dependencyMap[17]);
const result = _module.fileFinishedImporting("modules/app_database/managers/MobileAppDatabaseManager.tsx");

export default appDatabaseManager;
