// Module ID: 15904
// Function ID: 121784
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15904 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleDeletedEntityIds(guild_id, arg1) {
  const importDefault = guild_id;
  const guild = guild.getGuild(guild_id.guild_id);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  importDefaultResult.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = importDefault(dependencyMap[14]).Emitter;
  Emitter.batched((self) => {
    if (null != self.channels) {
      const _Set = Set;
      const set = new Set(self.channels);
      function syncChannels(guild_id, set) {
        let obj = guild_id(set[17]);
        const keys = obj.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(guild_id));
        obj = { channelIdsInMemory: keys, channelIdsFromServer: set };
        closure_13.fileOnly("syncChannels", obj);
        const item = keys.forEach((id) => {
          if (!arg1.has(id)) {
            let obj = id(arg1[12]);
            obj = { type: "CHANNEL_DELETE" };
            obj = { guild_id: id, id, parent_id: undefined };
            obj.channel = obj;
            obj.dispatch(obj);
          }
        });
      }(self.guild_id, set);
    }
    if (null != self.roles) {
      const _Set2 = Set;
      const set1 = new Set(self.roles);
      function syncRoles(guild_id, set1) {
        const keys = guild_id(set1[17]).keys(unsafeMutableRoles.getUnsafeMutableRoles(guild_id));
        const item = keys.forEach((roleId) => {
          if (!arg1.has(roleId)) {
            let obj = roleId(arg1[12]);
            obj = { type: "GUILD_ROLE_DELETE", guildId: roleId, roleId };
            obj.dispatch(obj);
          }
        });
      }(self.guild_id, set1);
    }
    if (null != self.emojis) {
      const _Set3 = Set;
      const set2 = new Set(self.emojis);
      function syncEmojis(guild_id, set2) {
        const guildEmoji = guildEmoji.getGuildEmoji(guild_id);
        const found = guildEmoji.filter((id) => arg1.has(id.id));
        if (guildEmoji.length !== found.length) {
          let obj = set2(closure_1[12]);
          obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guild_id, emojis: found };
          obj.dispatch(obj);
        }
      }(self.guild_id, set2);
    }
    if (null != self.stickers) {
      const _Set4 = Set;
      const set3 = new Set(self.stickers);
      function syncStickers(guild_id, set3) {
        let stickersByGuildId = stickersByGuildId.getStickersByGuildId(guild_id);
        if (null == stickersByGuildId) {
          stickersByGuildId = [];
        }
        const found = stickersByGuildId.filter((id) => arg1.has(id.id));
        if (stickersByGuildId.length !== found.length) {
          let obj = set3(closure_1[12]);
          obj = { type: "GUILD_STICKERS_UPDATE", guildId: guild_id, stickers: found };
          obj.dispatch(obj);
        }
      }(self.guild_id, set3);
    }
  });
}
function handleConnectionOpen() {
  const all = importDefault(dependencyMap[15]).getAll();
  all.then((arr) => {
    const item = arr.forEach((arg0) => {
      callback(arg0);
    });
  });
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  if (guild.unableToSyncDeletes) {
    scheduleGuild(guild.id);
  }
}
function scheduleGuild(id) {
  const importDefault = id;
  const timerId = setTimeout(() => {
    function computeHashAndFetchDeletedIds(guildId) {
      const guild = guild.getGuild(guildId);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      closure_13.fileOnly("requesting deleted guild entities (id: " + guildId + ", name: " + name + ")");
      const sortedRoles = sortedRoles.getSortedRoles(guildId);
      const tmp4 = callback;
      const tmp5 = callback(Object.keys(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(guildId)));
      const guildEmoji = guildEmoji.getGuildEmoji(guildId);
      const tmp6 = callback(sortedRoles.map((id) => id.id));
      const stickersByGuildId = stickersByGuildId.getStickersByGuildId(guildId);
      let mapped;
      if (null != stickersByGuildId) {
        mapped = stickersByGuildId.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      const tmp7 = callback(guildEmoji.map((id) => id.id));
      const socket = socket.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(guildId, tmp5, tmp6, tmp7, tmp4(mapped));
    }(arg0);
  }, Math.ceil(2000 * Math.random()));
}
function computeHash(arr) {
  const sorted = arr.sort();
  const obj = importDefault(dependencyMap[16]);
  return importDefault(dependencyMap[16]).v3(sorted.join(",")).toString();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("EntityVersionsManager");
let tmp4 = (arg0) => {
  class EntityVersionsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, EntityVersionsManager);
      items1 = [...items];
      obj = closure_5(EntityVersionsManager);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { GUILD_CREATE: closure_17, DELETED_ENTITY_IDS: closure_15 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const importDefault = EntityVersionsManager;
  callback2(EntityVersionsManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = EntityVersionsManager(closure_1[12]).subscribe("CONNECTION_OPEN", closure_16);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      EntityVersionsManager(closure_1[12]).unsubscribe("CONNECTION_OPEN", closure_16);
    }
  };
  items[1] = obj;
  return callback(EntityVersionsManager, items);
}(importDefault(dependencyMap[13]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default tmp4;
