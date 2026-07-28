// Module ID: 5911
// Function ID: 52067
// Name: appDatabaseManager
// Dependencies: [5912, 5914, 5915, 5032, 5917, 5918, 5919, 5073, 5920, 5921, 5715, 5922, 5923, 5728, 5727, 5729, 5924, 2]

// Module 5911 (appDatabaseManager)
let obj = {
  name: "Channels",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_CREATE", "GUILD_DELETE"],
  require() {
    return require(5914) /* _createForOfIteratorHelperLoose */.default;
  }
};
const items = [obj, , , , , , , , , , , , , , , ];
obj = {
  name: "GuildBasicChannels",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE", "POST_CONNECTION_OPEN", "WRITE_CACHES"],
  require() {
    return require(5915) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[1] = obj;
obj = {
  name: "GuildEmojis",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require(5032) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[2] = obj;
items[3] = {
  name: "Guilds",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE"],
  require() {
    return require(5917) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[4] = {
  name: "GuildsRequiringDeletedIdsSync",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "DELETED_ENTITY_IDS"],
  require() {
    return require(5918) /* GuildsRequiringDeletedIdsSync */.default;
  }
};
items[5] = {
  name: "GuildsRequiringChannelSync",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "CHANNEL_SYNC", "UNMARK_RESYNC_GUILDS"],
  require() {
    return require(5919) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[6] = {
  name: "GuildStickers",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require(5073) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[7] = {
  name: "GuildVersions",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require(5920) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[8] = {
  name: "KvCacheVersion",
  actions: ["CONNECTION_OPEN", "WRITE_CACHES", "BACKGROUND_SYNC"],
  require() {
    return require(5921) /* KvCacheVersion */.default;
  }
};
items[9] = {
  name: "Messages",
  actions: ["CHANNEL_DELETE", "GUILD_DELETE", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_DELETE_BULK", "MESSAGE_DELETE", "MESSAGE_PREVIEWS_LOADED", "MESSAGE_UPDATE"],
  require() {
    return require(5715) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[10] = {
  name: "LowDiskTrim",
  actions: ["POST_CONNECTION_OPEN"],
  require() {
    return require(5922) /* LowDiskTrim */.default;
  }
};
items[11] = {
  name: "NonGuildVersions",
  actions: ["CONNECTION_OPEN", "BACKGROUND_SYNC"],
  require() {
    return require(5923) /* NonGuildVersions */.default;
  }
};
items[12] = {
  name: "ReadStates",
  actions: ["CONNECTION_OPEN", "CHANNEL_PINS_ACK", "MESSAGE_ACK", "BACKGROUND_SYNC_FINISHED", "WRITE_CACHES"],
  require() {
    return require(5728) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[13] = {
  name: "UserSettingsProto",
  actions: ["CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO"],
  require() {
    return require(5727) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[14] = {
  name: "UserGuildSettings",
  actions: ["CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
  require() {
    return require(5729) /* _createForOfIteratorHelperLoose */.default;
  }
};
items[15] = {
  name: "UserSearchItems",
  actions: ["POST_CONNECTION_OPEN", "WRITE_CACHES"],
  require() {
    return require(5924) /* _createForOfIteratorHelperLoose */.default;
  }
};
const appDatabaseManager = new require("_createForOfIteratorHelperLoose").AppDatabaseManager("MobileAppDatabaseManager", [], items);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_database/managers/MobileAppDatabaseManager.tsx");

export default appDatabaseManager;
