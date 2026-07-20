// Module ID: 1882
// Function ID: 20959
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1882 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeDao(arg0) {
  const arg1 = arg0;
  return (arg0) => {
    let databaseResult = arg0;
    if (null == arg0) {
      databaseResult = callback(closure_2[7]).database(id.getId());
      const obj = callback(closure_2[7]);
    }
    let tmp5 = null;
    if (null != databaseResult) {
      tmp5 = arg0(databaseResult);
    }
    return tmp5;
  };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const items = [arg1(dependencyMap[6]).TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [arg1(dependencyMap[6]).TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
let tmp2 = (Store) => {
  class DatabaseDaos {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, DatabaseDaos);
      items1 = [...items];
      obj = closure_6(DatabaseDaos);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      DatabaseDaos = tmp2Result;
      tmp2Result.database = (arg0) => {
        let id = arg0;
        if (null == arg0) {
          id = id.getId();
        }
        return callback(closure_2[7]).database(id);
      };
      tmp2Result.channels = closure_10((database) => {
        const guildEntityDao = new tmp2Result(closure_2[6]).GuildEntityDao("guild_channels", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.channelsTemp = closure_10((database) => {
        const guildDao = new tmp2Result(closure_2[6]).GuildDao("guild_channels_temp", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return guildDao;
      });
      tmp2Result.basicChannels = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("basic_channels", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.syncedBasicChannels = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("basic_channels_synced", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.cache = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("cache", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.forceResyncVersion = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("force_resync_version", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.emojis = closure_10((database) => {
        const guildEntityDao = new tmp2Result(closure_2[6]).GuildEntityDao("guild_emojis", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.guilds = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("guilds", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.guildsRequiringDeletedIdsSync = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("guilds_requiring_deleted_ids_sync", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.guildsRequiringChannelSync = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("guilds_requiring_channel_sync", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.messages = closure_10((database) => {
        const messageDao = new tmp2Result(closure_2[6]).MessageDao("messages", tmp2Result(closure_2[6]).TableId.Messages, database);
        return messageDao;
      });
      tmp2Result.stickers = closure_10((database) => {
        const guildEntityDao = new tmp2Result(closure_2[6]).GuildEntityDao("guild_stickers", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.guildVersions = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("guild_versions", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.nonGuildVersions = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("non_guild_versions", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.userSettings = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("user_settings", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.readStates = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("read_states", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.userGuildSettings = closure_10((database) => {
        const dao = new tmp2Result(closure_2[6]).Dao("user_guild_settings", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.userSearchItems = closure_10((database) => {
        const entityDao = new tmp2Result(closure_2[6]).EntityDao("user_search_items", tmp2Result(closure_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.channelsTransaction = (database) => tmp2Result.channels(database.database).upgradeTransaction(database);
      tmp2Result.channelsTempTransaction = (database) => tmp2Result.channelsTemp(database.database).upgradeTransaction(database);
      tmp2Result.basicChannelsTransaction = (database) => tmp2Result.basicChannels(database.database).upgradeTransaction(database);
      tmp2Result.syncedBasicChannelsTransaction = (database) => tmp2Result.syncedBasicChannels(database.database).upgradeTransaction(database);
      tmp2Result.cacheTransaction = (database) => tmp2Result.cache(database.database).upgradeTransaction(database);
      tmp2Result.forceResyncVersionTransaction = (database) => tmp2Result.forceResyncVersion(database.database).upgradeTransaction(database);
      tmp2Result.emojisTransaction = (database) => tmp2Result.emojis(database.database).upgradeTransaction(database);
      tmp2Result.guildsTransaction = (database) => tmp2Result.guilds(database.database).upgradeTransaction(database);
      tmp2Result.messagesTransaction = (database) => tmp2Result.messages(database.database).upgradeTransaction(database);
      tmp2Result.stickersTransaction = (database) => tmp2Result.stickers(database.database).upgradeTransaction(database);
      tmp2Result.guildVersionsTransaction = (database) => tmp2Result.guildVersions(database.database).upgradeTransaction(database);
      tmp2Result.nonGuildVersionsTransaction = (database) => tmp2Result.nonGuildVersions(database.database).upgradeTransaction(database);
      tmp2Result.userSettingsTransaction = (database) => tmp2Result.userSettings(database.database).upgradeTransaction(database);
      tmp2Result.readStatesTransaction = (database) => {
        const states = tmp2Result.readStates(database.database);
        return states.upgradeTransaction(database);
      };
      tmp2Result.userGuildSettingsTransaction = (database) => tmp2Result.userGuildSettings(database.database).upgradeTransaction(database);
      tmp2Result.guildsRequiringDeletedIdsSyncTransaction = (database) => {
        const result = tmp2Result.guildsRequiringDeletedIdsSync(database.database);
        return result.upgradeTransaction(database);
      };
      tmp2Result.guildsRequiringChannelSyncTransaction = (database) => {
        const result = tmp2Result.guildsRequiringChannelSync(database.database);
        return result.upgradeTransaction(database);
      };
      tmp2Result.userSearchItemsTransaction = (database) => tmp2Result.userSearchItems(database.database).upgradeTransaction(database);
      return tmp2Result;
    }
  }
  const arg1 = DatabaseDaos;
  callback2(DatabaseDaos, Store);
  const items = [
    {
      key: "initialize",
      value() {
        this.waitFor(closure_8);
      }
    }
  ];
  return callback(DatabaseDaos, items);
}(importDefault(dependencyMap[8]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[9]), {});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default tmp2;
export const DEPRECATED_KEYSPACES = items1;
