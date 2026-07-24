// Module ID: 1882
// Function ID: 20966
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1883, 1898, 566, 686, 2]

// Module 1882 (_isNativeReflectConstruct)
import module_1883 from "module_1883";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeDao(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let databaseResult = arg0;
    if (null == arg0) {
      databaseResult = outer1_1(outer1_2[7]).database(outer1_8.getId());
      const obj = outer1_1(outer1_2[7]);
    }
    let tmp5 = null;
    if (null != databaseResult) {
      tmp5 = callback(databaseResult);
    }
    return tmp5;
  };
}
let items = [require("module_1883").TableId.KvCache, "guild_basic_channels"];
let items1 = [items, ];
const items2 = [require("module_1883").TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
let tmp2 = ((Store) => {
  class DatabaseDaos {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.database = (arg0) => {
        let id = arg0;
        if (null == arg0) {
          id = outer2_8.getId();
        }
        return outer2_1(outer2_2[7]).database(id);
      };
      tmp2Result.channels = outer1_10((database) => {
        const guildEntityDao = new DatabaseDaos(outer2_2[6]).GuildEntityDao("guild_channels", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.channelsTemp = outer1_10((database) => {
        const guildDao = new DatabaseDaos(outer2_2[6]).GuildDao("guild_channels_temp", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return guildDao;
      });
      tmp2Result.basicChannels = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("basic_channels", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.syncedBasicChannels = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("basic_channels_synced", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.cache = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("cache", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.forceResyncVersion = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("force_resync_version", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.emojis = outer1_10((database) => {
        const guildEntityDao = new DatabaseDaos(outer2_2[6]).GuildEntityDao("guild_emojis", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.guilds = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("guilds", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.guildsRequiringDeletedIdsSync = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("guilds_requiring_deleted_ids_sync", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.guildsRequiringChannelSync = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("guilds_requiring_channel_sync", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.messages = outer1_10((database) => {
        const messageDao = new DatabaseDaos(outer2_2[6]).MessageDao("messages", DatabaseDaos(outer2_2[6]).TableId.Messages, database);
        return messageDao;
      });
      tmp2Result.stickers = outer1_10((database) => {
        const guildEntityDao = new DatabaseDaos(outer2_2[6]).GuildEntityDao("guild_stickers", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return guildEntityDao;
      });
      tmp2Result.guildVersions = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("guild_versions", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.nonGuildVersions = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("non_guild_versions", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.userSettings = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("user_settings", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return entityDao;
      });
      tmp2Result.readStates = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("read_states", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.userGuildSettings = outer1_10((database) => {
        const dao = new DatabaseDaos(outer2_2[6]).Dao("user_guild_settings", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
        return dao;
      });
      tmp2Result.userSearchItems = outer1_10((database) => {
        const entityDao = new DatabaseDaos(outer2_2[6]).EntityDao("user_search_items", DatabaseDaos(outer2_2[6]).TableId.KvCache, database);
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
  callback2(DatabaseDaos, Store);
  let items = [
    {
      key: "initialize",
      value() {
        this.waitFor(outer1_8);
      }
    }
  ];
  return callback(DatabaseDaos, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default tmp2;
export const DEPRECATED_KEYSPACES = items1;
