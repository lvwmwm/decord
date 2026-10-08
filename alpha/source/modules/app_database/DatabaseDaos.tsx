// Module ID: 2090
// Function ID: 2091
// Name: DatabaseDaos
// Dependencies: [502, 2091, 504, 2107, 584, 2]

// Module 2090 (DatabaseDaos)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod2091 from "module_2091" /* 2091 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2107 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const items = [_mod2091.TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [_mod2091.TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
const Store = get_initializedDefault.Store;
class DatabaseDaos extends Store {
  constructor() {
    const channels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        const obj = DatabaseManagerDefault;
        databaseResult = obj.database(AuthenticationStore.getId());
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f86807(databaseResult);
      }
      return tmp5;
    };
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      const database = DatabaseManagerDefault.database;
      DatabaseManagerDefault;
      if (arg0 == null) {
        id = AuthenticationStore.getId();
      }
      return database(id);
    };
    const f86790 = (database) => {
      const guildEntityDao = new f86790(closure_1_2[1]).GuildEntityDao("guild_channels", f86790(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f86791 = (database) => {
      const guildDao = new f86791(closure_1_2[1]).GuildDao("guild_channels_temp", f86791(closure_1_2[1]).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f86792 = (database) => {
      const dao = new f86792(closure_1_2[1]).Dao("basic_channels", f86792(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f86793 = (database) => {
      const dao = new f86793(closure_1_2[1]).Dao("basic_channels_synced", f86793(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f86794 = (database) => {
      const dao = new f86794(closure_1_2[1]).Dao("cache", f86794(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f86795 = (database) => {
      const dao = new f86795(closure_1_2[1]).Dao("force_resync_version", f86795(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f86796 = (database) => {
      const guildEntityDao = new f86796(closure_1_2[1]).GuildEntityDao("guild_emojis", f86796(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f86797 = (database) => {
      const entityDao = new f86797(closure_1_2[1]).EntityDao("guilds", f86797(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f86798 = (database) => {
      const entityDao = new f86798(closure_1_2[1]).EntityDao("guilds_requiring_deleted_ids_sync", f86798(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f86799 = (database) => {
      const entityDao = new f86799(closure_1_2[1]).EntityDao("guilds_requiring_channel_sync", f86799(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f86800 = (database) => {
      const messageDao = new f86800(closure_1_2[1]).MessageDao("messages", f86800(closure_1_2[1]).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f86801 = (database) => {
      const guildEntityDao = new f86801(closure_1_2[1]).GuildEntityDao("guild_stickers", f86801(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f86802 = (database) => {
      const entityDao = new f86802(closure_1_2[1]).EntityDao("guild_versions", f86802(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f86803 = (database) => {
      const entityDao = new f86803(closure_1_2[1]).EntityDao("non_guild_versions", f86803(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f86804 = (database) => {
      const entityDao = new f86804(closure_1_2[1]).EntityDao("user_settings", f86804(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f86805 = (database) => {
      const dao = new f86805(closure_1_2[1]).Dao("read_states", f86805(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f86806 = (database) => {
      const dao = new f86806(closure_1_2[1]).Dao("user_guild_settings", f86806(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f86807 = (database) => {
      const entityDao = new f86807(closure_1_2[1]).EntityDao("user_search_items", f86807(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSearchItems = channels;
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      const channelsResult = require.channels(database.database);
      return channelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      const channelsTempResult = require.channelsTemp(database.database);
      return channelsTempResult.upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      const basicChannelsResult = require.basicChannels(database.database);
      return basicChannelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      const syncedBasicChannelsResult = require.syncedBasicChannels(database.database);
      return syncedBasicChannelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      const cacheResult = require.cache(database.database);
      return cacheResult.upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      const forceResyncVersionResult = require.forceResyncVersion(database.database);
      return forceResyncVersionResult.upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      const emojisResult = require.emojis(database.database);
      return emojisResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      const guildsResult = require.guilds(database.database);
      return guildsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      const messagesResult = require.messages(database.database);
      return messagesResult.upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      const stickersResult = require.stickers(database.database);
      return stickersResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      const guildVersionsResult = require.guildVersions(database.database);
      return guildVersionsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      const nonGuildVersionsResult = require.nonGuildVersions(database.database);
      return nonGuildVersionsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      const userSettingsResult = require.userSettings(database.database);
      return userSettingsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = require.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      const userGuildSettingsResult = require.userGuildSettings(database.database);
      return userGuildSettingsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(database) {
      const result = require.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(database) {
      const result = require.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      const userSearchItemsResult = require.userSearchItems(database.database);
      return userSearchItemsResult.upgradeTransaction(database);
    };
    return applyArgumentsResult;
  }
  initialize() {
    this.waitFor(AuthenticationStore);
  }
}
const prototype = DatabaseDaos.prototype;
const databaseDaos = new DatabaseDaos(DispatcherDefault, {});
let result = size.fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default databaseDaos;
export const DEPRECATED_KEYSPACES = items1;
