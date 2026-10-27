// Module ID: 2094
// Function ID: 2095
// Name: DatabaseDaos
// Dependencies: [502, 2095, 504, 2111, 584, 2]

// Module 2094 (DatabaseDaos)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod2095 from "module_2095" /* 2095 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2111 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const items = [_mod2095.TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [_mod2095.TableId.KvCache, "basic_channels_stale"];
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
        tmp5 = f88670(databaseResult);
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
    const f88653 = (database) => {
      const guildEntityDao = new f88653(closure_1_2[1]).GuildEntityDao("guild_channels", f88653(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f88654 = (database) => {
      const guildDao = new f88654(closure_1_2[1]).GuildDao("guild_channels_temp", f88654(closure_1_2[1]).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f88655 = (database) => {
      const dao = new f88655(closure_1_2[1]).Dao("basic_channels", f88655(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f88656 = (database) => {
      const dao = new f88656(closure_1_2[1]).Dao("basic_channels_synced", f88656(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f88657 = (database) => {
      const dao = new f88657(closure_1_2[1]).Dao("cache", f88657(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f88658 = (database) => {
      const dao = new f88658(closure_1_2[1]).Dao("force_resync_version", f88658(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f88659 = (database) => {
      const guildEntityDao = new f88659(closure_1_2[1]).GuildEntityDao("guild_emojis", f88659(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f88660 = (database) => {
      const entityDao = new f88660(closure_1_2[1]).EntityDao("guilds", f88660(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f88661 = (database) => {
      const entityDao = new f88661(closure_1_2[1]).EntityDao("guilds_requiring_deleted_ids_sync", f88661(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f88662 = (database) => {
      const entityDao = new f88662(closure_1_2[1]).EntityDao("guilds_requiring_channel_sync", f88662(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f88663 = (database) => {
      const messageDao = new f88663(closure_1_2[1]).MessageDao("messages", f88663(closure_1_2[1]).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f88664 = (database) => {
      const guildEntityDao = new f88664(closure_1_2[1]).GuildEntityDao("guild_stickers", f88664(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f88665 = (database) => {
      const entityDao = new f88665(closure_1_2[1]).EntityDao("guild_versions", f88665(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f88666 = (database) => {
      const entityDao = new f88666(closure_1_2[1]).EntityDao("non_guild_versions", f88666(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f88667 = (database) => {
      const entityDao = new f88667(closure_1_2[1]).EntityDao("user_settings", f88667(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f88668 = (database) => {
      const dao = new f88668(closure_1_2[1]).Dao("read_states", f88668(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f88669 = (database) => {
      const dao = new f88669(closure_1_2[1]).Dao("user_guild_settings", f88669(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f88670 = (database) => {
      const entityDao = new f88670(closure_1_2[1]).EntityDao("user_search_items", f88670(closure_1_2[1]).TableId.KvCache, database);
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
