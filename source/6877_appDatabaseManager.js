// Module ID: 6877
// Function ID: 54566
// Name: appDatabaseManager
// Dependencies: []

// Module 6877 (appDatabaseManager)
let obj = {
  name: "Channels",
  actions: [null, "i", "e", "c", "t", "T", "y", "R", "u", "q"],
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
  actions: [50, 1, 100, 2, 250, 4],
  require() {
    return require(dependencyMap[3]).default;
  }
};
items[2] = obj;
items[3] = {
  name: "Guilds",
  actions: [],
  require() {
    return require(dependencyMap[4]).default;
  }
};
items[4] = {
  name: "GuildsRequiringDeletedIdsSync",
  actions: [9001, 16, 25, 0.75],
  require() {
    return require(dependencyMap[5]).default;
  }
};
items[5] = {
  name: "GuildsRequiringChannelSync",
  actions: [25, 0.75, 1000, 20, 9001],
  require() {
    return require(dependencyMap[6]).default;
  }
};
items[6] = {
  name: "GuildStickers",
  actions: [],
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
  actions: [null, null, null, null, null, null, null, null],
  require() {
    return require(dependencyMap[10]).default;
  }
};
items[10] = {
  name: "LowDiskTrim",
  actions: [327680],
  require() {
    return require(dependencyMap[11]).default;
  }
};
items[11] = {
  name: "NonGuildVersions",
  actions: [500, 10],
  require() {
    return require(dependencyMap[12]).default;
  }
};
items[12] = {
  name: "ReadStates",
  actions: [null, null, null, null, null],
  require() {
    return require(dependencyMap[13]).default;
  }
};
items[13] = {
  name: "UserSettingsProto",
  actions: ["<string:189857793>", "<string:1421624284>", "<string:1489960962>", "<string:262340609>"],
  require() {
    return require(dependencyMap[14]).default;
  }
};
items[14] = {
  name: "UserGuildSettings",
  actions: [false, false],
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
