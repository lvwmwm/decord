// Module ID: 6884
// Function ID: 54740
// Name: GuildsRequiringDeletedIdsSync
// Dependencies: []

// Module 6884 (GuildsRequiringDeletedIdsSync)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let tmp2 = () => {
  class GuildsRequiringDeletedIdsSync {
    constructor() {
      f54747 = this;
      tmp = closure_3(this, GuildsRequiringDeletedIdsSync);
      this.actions = {
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleBackgroundSync(arg0, arg1);
            },
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        GUILD_CREATE(arg0, arg1) {
              return self.handleGuildCreate(arg0, arg1);
            },
        DELETED_ENTITY_IDS(guild_id) {
              return self.handleDeletedEntityIds(guild_id, arg1);
            }
      };
      return;
    }
  }
  const dependencyMap = GuildsRequiringDeletedIdsSync;
  let obj = { key: "getAll" };
  let closure_0 = callback(async () => {
    const result = callback(closure_1[3]).guildsRequiringDeletedIdsSync();
    if (null == result) {
      const _Set2 = Set;
      const set = new Set();
      return set;
    } else {
      const _Set = Set;
      const set1 = new Set(yield result.getMany().map((id) => id.id));
      return set1;
    }
    const obj = callback(closure_1[3]);
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  const items = [obj, , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value(guilds) {
      guilds = guilds.guilds;
      const found = guilds.filter((unableToSyncDeletes) => unableToSyncDeletes.unableToSyncDeletes);
      const mapped = found.map((id) => ({ id: id.id }));
      if (mapped.length > 0) {
        const result = callback(GuildsRequiringDeletedIdsSync[3]).guildsRequiringDeletedIdsSyncTransaction(arg1);
        result.putAll(mapped);
        const obj = callback(GuildsRequiringDeletedIdsSync[3]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleBackgroundSync",
    value(guilds) {
      guilds = guilds.guilds;
      const found = guilds.filter((data_mode) => "partial" === data_mode.data_mode && data_mode.unable_to_sync_deletes);
      const mapped = found.map((id) => ({ id: id.id }));
      if (mapped.length > 0) {
        const result = callback(GuildsRequiringDeletedIdsSync[3]).guildsRequiringDeletedIdsSyncTransaction(arg1);
        result.putAll(mapped);
        const obj = callback(GuildsRequiringDeletedIdsSync[3]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleGuildCreate",
    value(guild) {
      guild = guild.guild;
      if (guild.unableToSyncDeletes) {
        let obj = callback(GuildsRequiringDeletedIdsSync[3]);
        const result = obj.guildsRequiringDeletedIdsSyncTransaction(arg1);
        obj = { id: guild.id };
        result.put(obj);
      }
    }
  };
  items[4] = {
    key: "handleDeletedEntityIds",
    value(guild_id) {
      const result = callback(GuildsRequiringDeletedIdsSync[3]).guildsRequiringDeletedIdsSyncTransaction(arg1);
      result.delete(guild_id.guild_id);
    }
  };
  items[5] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  return callback2(GuildsRequiringDeletedIdsSync, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx");

export default tmp2;
