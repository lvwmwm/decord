// Module ID: 16068
// Function ID: 124279
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4991, 5035, 1348, 1910, 1838, 4808, 3, 686, 5078, 566, 6893, 1193, 21, 2]

// Module 16068 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import GuildsRequiringDeletedIdsSync from "GuildsRequiringDeletedIdsSync";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import set from "set";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import importDefaultResult from "_getPrototypeOf";
import tmp4 from "AutomaticLifecycleManager";

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
  guild = guild.getGuild(guild_id.guild_id);
  let name;
  if (null != guild) {
    name = guild.name;
  }
  importDefaultResult.fileOnly("received deleted guild entities (id: " + guild_id.guild_id + ", name: " + name + ")");
  const Emitter = importDefault(566).Emitter;
  Emitter.batched(() => {
    if (null != guild_id.channels) {
      const _Set = Set;
      const set = new Set(guild_id.channels);
      (function syncChannels(guild_id, set) {
        const callback = guild_id;
        let closure_1 = set;
        let obj = callback(outer2_1[17]);
        const keys = obj.keys(outer2_9.getMutableBasicGuildChannelsForGuild(guild_id));
        obj = { channelIdsInMemory: keys, channelIdsFromServer: set };
        outer2_13.fileOnly("syncChannels", obj);
        const item = keys.forEach((id) => {
          if (!set.has(id)) {
            let obj = guild_id(outer3_1[12]);
            obj = { type: "CHANNEL_DELETE" };
            obj = { guild_id, id, parent_id: undefined };
            obj.channel = obj;
            obj.dispatch(obj);
          }
        });
      })(guild_id.guild_id, set);
    }
    if (null != guild_id.roles) {
      const _Set2 = Set;
      const set1 = new Set(guild_id.roles);
      (function syncRoles(guild_id, set1) {
        const callback = guild_id;
        let closure_1 = set1;
        const keys = callback(outer2_1[17]).keys(outer2_10.getUnsafeMutableRoles(guild_id));
        const item = keys.forEach((roleId) => {
          if (!set1.has(roleId)) {
            let obj = guild_id(outer3_1[12]);
            obj = { type: "GUILD_ROLE_DELETE", guildId: guild_id, roleId };
            obj.dispatch(obj);
          }
        });
      })(guild_id.guild_id, set1);
    }
    if (null != guild_id.emojis) {
      const _Set3 = Set;
      const set2 = new Set(guild_id.emojis);
      (function syncEmojis(guild_id, set2) {
        const callback = set2;
        const guildEmoji = outer2_7.getGuildEmoji(guild_id);
        const found = guildEmoji.filter((id) => set2.has(id.id));
        if (guildEmoji.length !== found.length) {
          let obj = callback(outer2_1[12]);
          obj = { type: "GUILD_EMOJIS_UPDATE", guildId: guild_id, emojis: found };
          obj.dispatch(obj);
        }
      })(guild_id.guild_id, set2);
    }
    if (null != guild_id.stickers) {
      const _Set4 = Set;
      const set3 = new Set(guild_id.stickers);
      (function syncStickers(guild_id, set3) {
        const callback = set3;
        let stickersByGuildId = outer2_8.getStickersByGuildId(guild_id);
        if (null == stickersByGuildId) {
          stickersByGuildId = [];
        }
        const found = stickersByGuildId.filter((id) => set3.has(id.id));
        if (stickersByGuildId.length !== found.length) {
          let obj = callback(outer2_1[12]);
          obj = { type: "GUILD_STICKERS_UPDATE", guildId: guild_id, stickers: found };
          obj.dispatch(obj);
        }
      })(guild_id.guild_id, set3);
    }
  });
}
function handleConnectionOpen() {
  const all = importDefault(6893).getAll();
  all.then((arr) => {
    const item = arr.forEach((arg0) => {
      outer2_18(arg0);
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
  let closure_0 = id;
  const timerId = setTimeout(() => {
    (function computeHashAndFetchDeletedIds(closure_0) {
      const guild = outer2_11.getGuild(closure_0);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      outer2_13.fileOnly("requesting deleted guild entities (id: " + closure_0 + ", name: " + name + ")");
      const sortedRoles = outer2_10.getSortedRoles(closure_0);
      const tmp4 = outer2_19;
      const tmp5 = outer2_19(Object.keys(outer2_9.getMutableBasicGuildChannelsForGuild(closure_0)));
      const guildEmoji = outer2_7.getGuildEmoji(closure_0);
      const tmp6 = outer2_19(sortedRoles.map((id) => id.id));
      const stickersByGuildId = outer2_8.getStickersByGuildId(closure_0);
      let mapped;
      if (null != stickersByGuildId) {
        mapped = stickersByGuildId.map((id) => id.id);
      }
      if (null == mapped) {
        mapped = [];
      }
      const tmp7 = outer2_19(guildEmoji.map((id) => id.id));
      const socket = outer2_12.getSocket();
      const deletedEntityIdsNotMatchingHash = socket.getDeletedEntityIdsNotMatchingHash(closure_0, tmp5, tmp6, tmp7, tmp4(mapped));
    })(closure_0);
  }, Math.ceil(2000 * Math.random()));
}
function computeHash(arr) {
  const sorted = arr.sort();
  const obj = importDefault(1193);
  return importDefault(1193).v3(sorted.join(",")).toString();
}
importDefaultResult = new importDefaultResult("EntityVersionsManager");
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/gateway/EntityVersionsManager.tsx");

export default tmp4;
