// Module ID: 7026
// Function ID: 7027
// Name: appDatabaseManager
// Dependencies: [7027, 7029, 7030, 5164, 7032, 7033, 7034, 5205, 7035, 7036, 6857, 7037, 7038, 6870, 6869, 6871, 7039, 2]

// Module 7026 (appDatabaseManager)
const items = [
  {
    name: "Channels",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_CREATE", "GUILD_DELETE"],
    require() {
      return require(7029) /* handleBackgroundSync */.default;
    }
  },
  {
    name: "GuildBasicChannels",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE", "POST_CONNECTION_OPEN", "WRITE_CACHES"],
    require() {
      return require(7030) /* hasBasicChannelChanged */.default;
    }
  },
  {
    name: "GuildEmojis",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_UPDATE"],
    require() {
      return require(5164) /* getAsync */.default;
    }
  },
  {
    name: "Guilds",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_UPDATE"],
    require() {
      return require(7032) /* getAsync */.default;
    }
  },
  {
    name: "GuildsRequiringDeletedIdsSync",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "DELETED_ENTITY_IDS"],
    require() {
      return require(7033) /* getAll */.default;
    }
  },
  {
    name: "GuildsRequiringChannelSync",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "CHANNEL_SYNC", "UNMARK_RESYNC_GUILDS"],
    require() {
      return require(7034) /* getAll */.default;
    }
  },
  {
    name: "GuildStickers",
    actions: ["BACKGROUND_SYNC", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
    require() {
      return require(5205) /* getAsync */.default;
    }
  },
  {
    name: "GuildVersions",
    actions: ["BACKGROUND_SYNC", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "CONNECTION_OPEN", "GUILD_CREATE", "GUILD_DELETE", "GUILD_EMOJIS_UPDATE", "GUILD_ROLE_CREATE", "GUILD_ROLE_DELETE", "GUILD_ROLE_UPDATE", "GUILD_STICKERS_UPDATE", "GUILD_UPDATE"],
    require() {
      return require(7035) /* getCommittedVersions */.default;
    }
  },
  {
    name: "KvCacheVersion",
    actions: ["CONNECTION_OPEN", "WRITE_CACHES", "BACKGROUND_SYNC"],
    require() {
      return require(7036) /* okAsync */.default;
    }
  },
  {
    name: "Messages",
    actions: ["CHANNEL_DELETE", "GUILD_DELETE", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_DELETE_BULK", "MESSAGE_DELETE", "MESSAGE_PREVIEWS_LOADED", "MESSAGE_UPDATE"],
    require() {
      return require(6857) /* computeUsersAndMembers */.default;
    }
  },
  {
    name: "LowDiskTrim",
    actions: ["POST_CONNECTION_OPEN"],
    require() {
      return require(7037) /* handlePostConnectionOpen */.default;
    }
  },
  {
    name: "NonGuildVersions",
    actions: ["CONNECTION_OPEN", "BACKGROUND_SYNC"],
    require() {
      return require(7038) /* getCommittedVersions */.default;
    }
  },
  {
    name: "ReadStates",
    actions: ["CONNECTION_OPEN", "CHANNEL_PINS_ACK", "MESSAGE_ACK", "BACKGROUND_SYNC_FINISHED", "WRITE_CACHES"],
    require() {
      return require(6870) /* getAll */.default;
    }
  },
  {
    name: "UserSettingsProto",
    actions: ["CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO"],
    require() {
      return require(6869) /* getAll */.default;
    }
  },
  {
    name: "UserGuildSettings",
    actions: ["CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
    require() {
      return require(6871) /* getAll */.default;
    }
  },
  {
    name: "UserSearchItems",
    actions: ["POST_CONNECTION_OPEN", "WRITE_CACHES"],
    require() {
      return require(7039) /* getAll */.default;
    }
  }
];
const appDatabaseManager = new require("set").AppDatabaseManager("MobileAppDatabaseManager", [], items);
const result = require("hasBasicChannelChanged").fileFinishedImporting("modules/app_database/managers/MobileAppDatabaseManager.tsx");

export default appDatabaseManager;
