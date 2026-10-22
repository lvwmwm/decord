// Module ID: 4847
// Function ID: 4848
// Name: DatabaseDaos
// Dependencies: [502, 4848, 504, 4864, 584, 2]

// Module 4847 (DatabaseDaos)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod4848 from "module_4848" /* 4848 */;
import DatabaseManagerDefault from "DatabaseManager" /* 4864 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const items = [_mod4848.TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [_mod4848.TableId.KvCache, "basic_channels_stale"];
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
        tmp5 = f93305(databaseResult);
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
    const f93288 = (database) => {
      const guildEntityDao = new f93288(closure_1_2[1]).GuildEntityDao("guild_channels", f93288(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f93289 = (database) => {
      const guildDao = new f93289(closure_1_2[1]).GuildDao("guild_channels_temp", f93289(closure_1_2[1]).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f93290 = (database) => {
      const dao = new f93290(closure_1_2[1]).Dao("basic_channels", f93290(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f93291 = (database) => {
      const dao = new f93291(closure_1_2[1]).Dao("basic_channels_synced", f93291(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f93292 = (database) => {
      const dao = new f93292(closure_1_2[1]).Dao("cache", f93292(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f93293 = (database) => {
      const dao = new f93293(closure_1_2[1]).Dao("force_resync_version", f93293(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f93294 = (database) => {
      const guildEntityDao = new f93294(closure_1_2[1]).GuildEntityDao("guild_emojis", f93294(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f93295 = (database) => {
      const entityDao = new f93295(closure_1_2[1]).EntityDao("guilds", f93295(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f93296 = (database) => {
      const entityDao = new f93296(closure_1_2[1]).EntityDao("guilds_requiring_deleted_ids_sync", f93296(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f93297 = (database) => {
      const entityDao = new f93297(closure_1_2[1]).EntityDao("guilds_requiring_channel_sync", f93297(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f93298 = (database) => {
      const messageDao = new f93298(closure_1_2[1]).MessageDao("messages", f93298(closure_1_2[1]).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f93299 = (database) => {
      const guildEntityDao = new f93299(closure_1_2[1]).GuildEntityDao("guild_stickers", f93299(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f93300 = (database) => {
      const entityDao = new f93300(closure_1_2[1]).EntityDao("guild_versions", f93300(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f93301 = (database) => {
      const entityDao = new f93301(closure_1_2[1]).EntityDao("non_guild_versions", f93301(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f93302 = (database) => {
      const entityDao = new f93302(closure_1_2[1]).EntityDao("user_settings", f93302(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f93303 = (database) => {
      const dao = new f93303(closure_1_2[1]).Dao("read_states", f93303(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f93304 = (database) => {
      const dao = new f93304(closure_1_2[1]).Dao("user_guild_settings", f93304(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f93305 = (database) => {
      const entityDao = new f93305(closure_1_2[1]).EntityDao("user_search_items", f93305(closure_1_2[1]).TableId.KvCache, database);
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
