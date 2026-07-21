// Module ID: 6881
// Function ID: 54576
// Name: appDatabaseManager
// Dependencies: []

// Module 6881 (appDatabaseManager)
let obj = {
  name: "Channels",
  actions: [],
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
  actions: [],
  require() {
    return require(dependencyMap[3]).default;
  }
};
items[2] = obj;
items[3] = {
  name: "Guilds",
  actions: ["<string:2781455813>", "<string:2287011273>", "<string:4199639137>", "<string:2636206568>", "<string:315641953>", "<string:299519802>", "<string:2637733175>", "<string:2779096483>", "<string:2779882924>", "<string:84452793>"],
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
  actions: [],
  require() {
    return require(dependencyMap[7]).default;
  }
};
items[7] = {
  name: "GuildVersions",
  actions: ["count", "getChannel", "window", true, true, true, true, true, true, true, true, true, true],
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
  actions: [-620745012, true, true, true, true, true, true, true],
  require() {
    return require(dependencyMap[10]).default;
  }
};
items[10] = {
  name: "LowDiskTrim",
  actions: [],
  require() {
    return require(dependencyMap[11]).default;
  }
};
items[11] = {
  name: "NonGuildVersions",
  actions: [null, null],
  require() {
    return require(dependencyMap[12]).default;
  }
};
items[12] = {
  name: "ReadStates",
  actions: [true, true, true, true, true],
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
  actions: ["<string:2178437821>", "<string:1768086906>"],
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
