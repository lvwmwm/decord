// Module ID: 7552
// Function ID: 7553
// Name: MobileAppDatabaseManager
// Dependencies: [7553, 7555, 7556, 6212, 7558, 7559, 7560, 6252, 7561, 7562, 7419, 7563, 7564, 7432, 7431, 7433, 7565, 2]

// Module 7552 (MobileAppDatabaseManager)
import AppDatabaseManager from "AppDatabaseManager" /* 7553 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const items = [, , , , , , , , , , , , , , , ];
const obj = {
  name: "Channels",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_CREATE", "GUILD_DELETE"],
  require() {
    return require("Channels").default;
  }
};
items[0] = obj;
items[1] = {
  name: "GuildBasicChannels",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE", "POST_CONNECTION_OPEN", "WRITE_CACHES"],
  require() {
    return require("GuildBasicChannels").default;
  }
};
items[2] = {
  name: "GuildEmojis",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require("GuildEmojis").default;
  }
};
items[3] = {
  name: "Guilds",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE"],
  require() {
    return require("Guilds").default;
  }
};
items[4] = {
  name: "GuildsRequiringDeletedIdsSync",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "DELETED_ENTITY_IDS"],
  require() {
    return require("GuildsRequiringDeletedIdsSync").default;
  }
};
items[5] = {
  name: "GuildsRequiringChannelSync",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "CHANNEL_SYNC", "UNMARK_RESYNC_GUILDS"],
  require() {
    return require("GuildsRequiringChannelSync").default;
  }
};
items[6] = {
  name: "GuildStickers",
  actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require("GuildStickers").default;
  }
};
items[7] = {
  name: "GuildVersions",
  actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
  require() {
    return require("GuildVersions").default;
  }
};
items[8] = {
  name: "KvCacheVersion",
  actions: ["CONNECTION_OPEN", "WRITE_CACHES", "BACKGROUND_SYNC"],
  require() {
    return require("KvCacheVersion").default;
  }
};
items[9] = {
  name: "Messages",
  actions: ["CHANNEL_DELETE", "GUILD_DELETE", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_DELETE_BULK", "MESSAGE_DELETE", "MESSAGE_PREVIEWS_LOADED", "MESSAGE_UPDATE"],
  require() {
    return require("modules/Messages").default;
  }
};
items[10] = {
  name: "LowDiskTrim",
  actions: ["POST_CONNECTION_OPEN"],
  require() {
    return require("LowDiskTrim").default;
  }
};
items[11] = {
  name: "NonGuildVersions",
  actions: ["CONNECTION_OPEN", "BACKGROUND_SYNC"],
  require() {
    return require("NonGuildVersions").default;
  }
};
items[12] = {
  name: "ReadStates",
  actions: ["CONNECTION_OPEN", "CHANNEL_PINS_ACK", "MESSAGE_ACK", "BACKGROUND_SYNC_FINISHED", "WRITE_CACHES"],
  require() {
    return require("ReadStates").default;
  }
};
items[13] = {
  name: "UserSettingsProto",
  actions: ["CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO"],
  require() {
    return require("UserSettingsProto").default;
  }
};
items[14] = {
  name: "UserGuildSettings",
  actions: ["CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
  require() {
    return require("UserGuildSettings").default;
  }
};
items[15] = {
  name: "UserSearchItems",
  actions: ["POST_CONNECTION_OPEN", "WRITE_CACHES"],
  require() {
    return require("UserSearchItems").default;
  }
};
const appDatabaseManager = new AppDatabaseManager.AppDatabaseManager("MobileAppDatabaseManager", [], items);
const result = size.fileFinishedImporting("modules/app_database/managers/MobileAppDatabaseManager.tsx");

export default appDatabaseManager;
