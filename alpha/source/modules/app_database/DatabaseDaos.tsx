// Module ID: 2078
// Function ID: 2079
// Name: DatabaseDaos
// Dependencies: [502, 2079, 504, 2095, 584, 2]

// Module 2078 (DatabaseDaos)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod2079 from "module_2079" /* 2079 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2095 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const items = [_mod2079.TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [_mod2079.TableId.KvCache, "basic_channels_stale"];
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
        tmp5 = f85653(databaseResult);
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
    const f85636 = (database) => {
      const guildEntityDao = new f85636(closure_1_2[1]).GuildEntityDao("guild_channels", f85636(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f85637 = (database) => {
      const guildDao = new f85637(closure_1_2[1]).GuildDao("guild_channels_temp", f85637(closure_1_2[1]).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f85638 = (database) => {
      const dao = new f85638(closure_1_2[1]).Dao("basic_channels", f85638(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f85639 = (database) => {
      const dao = new f85639(closure_1_2[1]).Dao("basic_channels_synced", f85639(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f85640 = (database) => {
      const dao = new f85640(closure_1_2[1]).Dao("cache", f85640(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f85641 = (database) => {
      const dao = new f85641(closure_1_2[1]).Dao("force_resync_version", f85641(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f85642 = (database) => {
      const guildEntityDao = new f85642(closure_1_2[1]).GuildEntityDao("guild_emojis", f85642(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f85643 = (database) => {
      const entityDao = new f85643(closure_1_2[1]).EntityDao("guilds", f85643(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f85644 = (database) => {
      const entityDao = new f85644(closure_1_2[1]).EntityDao("guilds_requiring_deleted_ids_sync", f85644(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f85645 = (database) => {
      const entityDao = new f85645(closure_1_2[1]).EntityDao("guilds_requiring_channel_sync", f85645(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f85646 = (database) => {
      const messageDao = new f85646(closure_1_2[1]).MessageDao("messages", f85646(closure_1_2[1]).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f85647 = (database) => {
      const guildEntityDao = new f85647(closure_1_2[1]).GuildEntityDao("guild_stickers", f85647(closure_1_2[1]).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f85648 = (database) => {
      const entityDao = new f85648(closure_1_2[1]).EntityDao("guild_versions", f85648(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f85649 = (database) => {
      const entityDao = new f85649(closure_1_2[1]).EntityDao("non_guild_versions", f85649(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f85650 = (database) => {
      const entityDao = new f85650(closure_1_2[1]).EntityDao("user_settings", f85650(closure_1_2[1]).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f85651 = (database) => {
      const dao = new f85651(closure_1_2[1]).Dao("read_states", f85651(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f85652 = (database) => {
      const dao = new f85652(closure_1_2[1]).Dao("user_guild_settings", f85652(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f85653 = (database) => {
      const entityDao = new f85653(closure_1_2[1]).EntityDao("user_search_items", f85653(closure_1_2[1]).TableId.KvCache, database);
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
