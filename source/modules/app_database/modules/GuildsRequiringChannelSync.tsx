// Module ID: 6890
// Function ID: 54793
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6890 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ createChannelRecordFromServer: closure_6, ChannelRecordBase: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_14, BasicPermissions: closure_15 } = arg1(dependencyMap[9]));
const ChannelFlags = arg1(dependencyMap[10]).ChannelFlags;
const Permissions = arg1(dependencyMap[11]).Permissions;
const tmp3 = arg1(dependencyMap[9]);
let closure_17 = importAll(dependencyMap[12]).combine(Permissions.VIEW_CHANNEL, Permissions.ADMINISTRATOR);
let importDefaultResult = importDefault(dependencyMap[13]);
importDefaultResult = new importDefaultResult("GuildsRequiringChannelSync");
let closure_19 = { NewGuild: "new_guild", OwnershipChange: "ownership_change", RolePermissions: "role_permissions", RoleSubscriptionTags: "role_subscription_tags", MemberRoles: "member_roles", ChannelVisibleParentHidden: "channel_visible_parent_hidden", Unknown: "unknown" };
let closure_20 = { ConnectionOpen: "connection_open", GuildCreate: "guild_create", BackgroundSync: "background_sync" };
let tmp6 = () => {
  class GuildsRequiringChannelSync {
    constructor() {
      GuildsRequiringChannelSync = this;
      tmp = closure_4(this, GuildsRequiringChannelSync);
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
        CHANNEL_SYNC(integrity_check) {
              return self.handleChannelSync(integrity_check, arg1);
            },
        UNMARK_RESYNC_GUILDS(arg0, arg1) {
              return self.handleUnmarkResyncGuilds(arg0, arg1);
            }
      };
      return;
    }
  }
  const arg1 = GuildsRequiringChannelSync;
  let obj = {
    key: "getAll",
    value() {
      const result = callback(closure_3[14]).guildsRequiringChannelSync();
      if (null == result) {
        let resolved = Promise.resolve([]);
      } else {
        resolved = result.getMany();
      }
      return resolved;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value(guilds) {
      let done;
      const self = this;
      const tmp = callback3(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_20;
          let handleGuildResult = self.handleGuild(iter.value, arg1, closure_20.ConnectionOpen);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleGuildCreate",
    value(guild) {
      const self = this;
      guild = guild.guild;
      if (true !== guild.unavailable) {
        self.handleGuild(guild, arg1, closure_20.GuildCreate);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleBackgroundSync",
    value(guilds) {
      let done;
      const self = this;
      const tmp = callback3(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let result = self.handleBackgroundSyncGuild(iter.value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[4] = {
    key: "handleUnmarkResyncGuilds",
    value(guildIds) {
      let done;
      const self = this;
      guildIds = guildIds.guildIds;
      const tmp = callback3(guildIds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let unmarkGuildForResyncResult = self.unmarkGuildForResync(iter.value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      closure_18.verbose("Unmarked guilds " + JSON.stringify(guildIds));
    }
  };
  items[5] = {
    key: "detectRoleVisibilityChanges",
    value(arg0, arg1, obj, has) {
      for (const key10010 in arg2) {
        let tmp19 = key10010;
        let tmp20 = arg2[key10010];
        let tmp21 = arg1[key10010];
        let isSubscriptionRoleResult = null != tmp21;
        if (isSubscriptionRoleResult) {
          let tmp = closure_0;
          let tmp2 = closure_3;
          obj = closure_0(closure_3[15]);
          isSubscriptionRoleResult = obj.isSubscriptionRole(tmp21);
        }
        if (isSubscriptionRoleResult) {
          let tmp4 = closure_0;
          let tmp5 = closure_3;
          let obj2 = closure_0(closure_3[15]);
          isSubscriptionRoleResult = obj2.isSubscriptionRoleAvailableForPurchase(tmp21);
        }
        let tmp6 = closure_0;
        let tmp7 = closure_3;
        let obj3 = closure_0(closure_3[15]);
        let isSubscriptionRoleResult1 = obj3.isSubscriptionRole(tmp20);
        if (isSubscriptionRoleResult1) {
          let tmp9 = closure_0;
          let tmp10 = closure_3;
          let obj4 = closure_0(closure_3[15]);
          isSubscriptionRoleResult1 = obj4.isSubscriptionRoleAvailableForPurchase(tmp20);
        }
        if (!isSubscriptionRoleResult) {
          if (isSubscriptionRoleResult1) {
            let tmp11 = closure_19;
            return closure_19.RoleSubscriptionTags;
          }
        }
        if (key10010 === arg0) {
          if (null == tmp21) {
            let tmp18 = closure_19;
            return closure_19.RolePermissions;
          } else {
            let tmp12 = closure_2;
            let tmp13 = closure_3;
            let arr = closure_2(closure_3[12]);
            let tmp14 = closure_17;
            let found = arr.filter(tmp21.permissions, closure_17);
            let arr2 = closure_2(closure_3[12]);
            let found1 = arr2.filter(tmp20.permissions, closure_17);
            let obj5 = closure_2(closure_3[12]);
            if (obj5.equals(found, found1)) {
              continue;
            } else {
              let tmp17 = closure_19;
              return closure_19.RolePermissions;
            }
          }
        }
        continue;
      }
      return null;
    }
  };
  items[6] = {
    key: "processMemberRoleIds",
    value(arg0, arg1) {
      let done;
      if (arg0.length !== arg1.length) {
        return {};
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp10 = callback3(arg0);
        let iter2 = tmp10();
        if (!iter2.done) {
          do {
            let addResult = set.add(iter2.value);
            let iter = tmp10();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
        const tmp3 = callback3(arg1);
        let iter3 = tmp3();
        if (!iter3.done) {
          const value = iter3.value;
          while (set.has(value)) {
            let addResult1 = set.add(value);
            let iter4 = tmp3();
            iter3 = iter4;
          }
          return {};
        }
        const obj = { rolesAreDifferent: false, allRoleIds: set };
        return obj;
      }
    }
  };
  items[7] = {
    key: "userBecameGuildOwner",
    value(arg0, arg1, arg2) {
      let tmp = null != arg2;
      if (tmp) {
        let tmp3 = arg1 === arg2;
        if (tmp3) {
          tmp3 = arg0 !== arg2;
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[8] = {
    key: "handleBackgroundSyncGuild",
    value(id) {
      let iter;
      const self = this;
      let selfMember = store3.getSelfMember(id.id);
      if (null == selfMember) {
        selfMember = store3.getCachedSelfMember(id.id);
      }
      if (null != selfMember) {
        if ("partial" === id.data_mode) {
          if (self.backgroundSyncGuildHasObfuscatedChannels(id)) {
            let ChannelVisibleParentHidden = closure_19.Unknown;
            let obj = {};
            if (null != id.partial_updates.roles) {
              const tmp35 = callback3(id.partial_updates.roles);
              let iter2 = tmp35();
              if (!iter2.done) {
                do {
                  let value = iter2.value;
                  obj = { id: value.id };
                  let tmp5 = closure_2;
                  let tmp6 = closure_3;
                  let obj3 = closure_2(closure_3[12]);
                  obj.permissions = obj3.deserialize(value.permissions);
                  let tags = value.tags;
                  if (null == tags) {
                    tags = {};
                  }
                  obj.tags = tags;
                  obj[value.id] = obj;
                  iter = tmp35();
                  iter2 = iter;
                } while (!iter.done);
              }
            }
            const properties = id.properties;
            const guild = store5.getGuild(id.id);
            let ownerId;
            if (null != guild) {
              ownerId = guild.ownerId;
            }
            let owner_id;
            if (null != properties) {
              owner_id = properties.owner_id;
            }
            const userBecameGuildOwnerResult = self.userBecameGuildOwner(ownerId, owner_id, store.getId());
            if (userBecameGuildOwnerResult) {
              ChannelVisibleParentHidden = closure_19.OwnershipChange;
              let flag = userBecameGuildOwnerResult;
            } else {
              const unsafeMutableRoles = store4.getUnsafeMutableRoles(id.id);
              let _Set = Set;
              let roles;
              if (null != selfMember) {
                roles = selfMember.roles;
              }
              if (null == roles) {
                roles = [];
              }
              const prototype = _Set.prototype;
              _Set = new _Set(roles);
              const result = self.detectRoleVisibilityChanges(id.id, unsafeMutableRoles, obj, _Set);
              flag = userBecameGuildOwnerResult;
              if (null != result) {
                flag = true;
                ChannelVisibleParentHidden = result;
              }
            }
            let result1 = !flag;
            if (result1) {
              let channels = id.partial_updates.channels;
              if (null == channels) {
                channels = [];
              }
              let deleted_channel_ids = id.partial_updates.deleted_channel_ids;
              if (null == deleted_channel_ids) {
                deleted_channel_ids = [];
              }
              result1 = self.hasNewlyVisibleChannelWithHiddenParent(id.id, channels, deleted_channel_ids);
            }
            if (result1) {
              ChannelVisibleParentHidden = closure_19.ChannelVisibleParentHidden;
              flag = true;
            }
            if (flag) {
              self.markGuildForResync(id.id, arg1, closure_20.BackgroundSync, ChannelVisibleParentHidden);
            }
          } else {
            self.unmarkGuildForResync(id.id, arg1);
          }
        } else if ("full" === id.data_mode) {
          self.unmarkGuildForResync(id.id, arg1);
        }
      }
    }
  };
  items[9] = {
    key: "handleGuild",
    value(channels) {
      let allRoleIds;
      let iter2;
      let rolesAreDifferent;
      const self = this;
      if ("full_sync" !== channels.channels.op) {
        const id = store.getId();
        const GuildsRequiringChannelSync = id;
        const guild = store5.getGuild(channels.id);
        if (null != guild) {
          const properties = channels.properties;
          let owner_id;
          if (null != properties) {
            owner_id = properties.owner_id;
          }
          const userBecameGuildOwnerResult = self.userBecameGuildOwner(guild.ownerId, owner_id, id);
          let flag = userBecameGuildOwnerResult;
          let MemberRoles = closure_19.Unknown;
          if (userBecameGuildOwnerResult) {
            MemberRoles = closure_19.OwnershipChange;
            flag = userBecameGuildOwnerResult;
          }
        } else {
          MemberRoles = closure_19.NewGuild;
          flag = true;
        }
        let tmp12 = MemberRoles;
        let tmp13 = null;
        if (!flag) {
          let selfMember = store3.getSelfMember(channels.id);
          if (null == selfMember) {
            selfMember = store3.getCachedSelfMember(channels.id);
          }
          const members = channels.members;
          const found = members.find((user) => user.user.id === id);
          let roles;
          if (null != found) {
            roles = found.roles;
          }
          if (null == roles) {
            roles = [];
          }
          ({ rolesAreDifferent, allRoleIds } = self.processMemberRoleIds(null != selfMember ? selfMember.roles : [], roles));
          if (rolesAreDifferent) {
            MemberRoles = closure_19.MemberRoles;
          }
          flag = rolesAreDifferent;
          tmp12 = MemberRoles;
          tmp13 = null;
          if (null != allRoleIds) {
            flag = rolesAreDifferent;
            tmp12 = MemberRoles;
            tmp13 = allRoleIds;
          }
          const processMemberRoleIdsResult = self.processMemberRoleIds(null != selfMember ? selfMember.roles : [], roles);
          const tmp18 = null != selfMember ? selfMember.roles : [];
        }
        let ChannelVisibleParentHidden = tmp12;
        let flag2 = flag;
        if (!flag) {
          flag2 = flag;
          ChannelVisibleParentHidden = tmp12;
          if (null != tmp13) {
            const unsafeMutableRoles = store4.getUnsafeMutableRoles(channels.id);
            let obj = {};
            if ("full_sync" === channels.roles.op) {
              let writes = channels.roles.items;
            } else {
              writes = channels.roles.writes;
            }
            const tmp39Result = closure_21(writes);
            let iter = tmp39Result();
            if (!iter.done) {
              do {
                let value = iter.value;
                obj = { id: value.id };
                let tmp22 = closure_2;
                let tmp23 = closure_3;
                let obj2 = closure_2(closure_3[12]);
                obj.permissions = obj2.deserialize(value.permissions);
                let tags = value.tags;
                if (null == tags) {
                  tags = {};
                }
                obj.tags = tags;
                obj[value.id] = obj;
                iter2 = tmp39Result();
                iter = iter2;
              } while (!iter2.done);
            }
            const result = self.detectRoleVisibilityChanges(channels.id, unsafeMutableRoles, obj, tmp13);
            flag2 = flag;
            ChannelVisibleParentHidden = tmp12;
            if (null != result) {
              flag2 = true;
              ChannelVisibleParentHidden = result;
            }
            const tmp39 = closure_21;
          }
        }
        if (tmp29) {
          ChannelVisibleParentHidden = closure_19.ChannelVisibleParentHidden;
          flag2 = true;
        }
        if (flag2) {
          if (self.gatewayGuildHasObfuscatedChannels(channels)) {
            self.markGuildForResync(channels.id, arg1, arg2, ChannelVisibleParentHidden);
          } else {
            self.unmarkGuildForResync(channels.id, arg1);
          }
        }
        const tmp29 = !flag2 && self.hasNewlyVisibleChannelWithHiddenParent(channels.id, channels.channels.writes, channels.channels.deletes);
      } else {
        self.unmarkGuildForResync(channels.id, arg1);
      }
    }
  };
  items[10] = {
    key: "handleChannelSync",
    value(integrity_check) {
      const self = this;
      if (!integrity_check.integrity_check) {
        self.unmarkGuildForResync(tmp, arg1);
      }
    }
  };
  items[11] = {
    key: "markGuildForResync",
    value(guild_id, arg1, trigger, change_type) {
      let obj = GuildsRequiringChannelSync(closure_3[16]);
      const v4Result = obj.v4();
      obj = { guild_id, request_id: v4Result, trigger, change_type };
      callback(closure_3[17]).track(constants.GUILD_CHANNEL_RESYNC_REQUESTED, obj);
      const obj2 = callback(closure_3[17]);
      const result = callback(closure_3[14]).guildsRequiringChannelSyncTransaction(arg1);
      obj = { id: guild_id, requestId: v4Result };
      result.put(obj);
    }
  };
  items[12] = {
    key: "unmarkGuildForResync",
    value(arg0, arg1) {
      const result = callback(closure_3[14]).guildsRequiringChannelSyncTransaction(arg1);
      result.delete(arg0);
    }
  };
  items[13] = {
    key: "hasNewlyVisibleChannelWithHiddenParent",
    value(arg0, arg1, items) {
      let iter;
      if (items === undefined) {
        items = [];
      }
      if (0 === arg1.length) {
        return false;
      } else {
        const mutableBasicGuildChannelsForGuild = store2.getMutableBasicGuildChannelsForGuild(arg0);
        const _Set = Set;
        const set = new Set(items);
        const _Map = Map;
        const map = new Map();
        const tmp43 = callback3(arg1);
        let iter2 = tmp43();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let tmp = closure_7;
            let tmp2 = value;
            if (!(value instanceof closure_7)) {
              let tmp3 = closure_6;
              tmp2 = closure_6(value, arg0);
            }
            let result = map.set(tmp2.id, tmp2);
            iter = tmp43();
            iter2 = iter;
          } while (!iter.done);
        }
        const tmp6 = callback3(map.values());
        const iter3 = tmp6();
        let iter4 = iter3;
        if (!iter3.done) {
          while (true) {
            value = iter4.value;
            let tmp10 = tmp8;
            let tmp11 = tmp9;
            if (!value.isCategory()) {
              let tmp12 = mutableBasicGuildChannelsForGuild[value.id];
              let canBasicChannelResult = null != tmp12;
              if (canBasicChannelResult) {
                let tmp14 = closure_13;
                let tmp15 = constants2;
                canBasicChannelResult = closure_13.canBasicChannel(constants2.VIEW_CHANNEL, tmp12);
              }
              let tmp16 = !value.isObfuscated();
              if (canBasicChannelResult) {
                if (null != tmp12) {
                  let tmp17 = tmp12;
                  let tmp18 = tmp16;
                  tmp10 = tmp8;
                  tmp11 = tmp9;
                }
              }
              let tmp19 = tmp12;
              tmp10 = tmp8;
              tmp11 = tmp9;
              let tmp20 = tmp16;
              if (tmp16) {
                let parent_id = value.parent_id;
                let tmp21 = tmp12;
                let tmp22 = tmp16;
                tmp10 = parent_id;
                tmp11 = tmp9;
                if (null != parent_id) {
                  let tmp23 = tmp12;
                  let tmp24 = tmp16;
                  tmp10 = parent_id;
                  tmp11 = tmp9;
                  if (!set.has(parent_id)) {
                    let tmp25 = tmp12;
                    let tmp26 = tmp16;
                    tmp10 = parent_id;
                    tmp11 = tmp9;
                    if (null == map.get(parent_id)) {
                      let tmp27 = mutableBasicGuildChannelsForGuild[parent_id];
                      if (null == tmp27) {
                        break;
                      } else {
                        let tmp28 = closure_13;
                        let tmp29 = constants2;
                        let tmp30 = tmp12;
                        let tmp31 = tmp16;
                        tmp10 = parent_id;
                        tmp11 = tmp27;
                        if (!closure_13.canBasicChannel(constants2.VIEW_CHANNEL, tmp27)) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
            let iter5 = tmp6();
            let tmp8 = tmp10;
            let tmp9 = tmp11;
            iter4 = iter5;
          }
          return true;
        }
        return false;
      }
    }
  };
  items[14] = {
    key: "gatewayGuildHasObfuscatedChannels",
    value(channels) {
      const self = this;
      if ("full_sync" === channels.channels.op) {
        let writes = channels.channels.items;
        let items = [];
      } else {
        writes = channels.channels.writes;
        items = channels.channels.deletes;
      }
      return self.guildHasStoredObfuscatedChannels(channels.id, items) || self.anyChannelRecordsObfuscated(writes);
    }
  };
  items[15] = {
    key: "backgroundSyncGuildHasObfuscatedChannels",
    value(data_mode) {
      const self = this;
      if ("partial" === data_mode.data_mode) {
        let channels = data_mode.partial_updates.channels;
        if (null == channels) {
          channels = [];
        }
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (null == deleted_channel_ids) {
          deleted_channel_ids = [];
        }
        let items = deleted_channel_ids;
      } else {
        channels = data_mode.channels;
        items = [];
      }
      return self.guildHasStoredObfuscatedChannels(data_mode.id, items) || self.anyChannelsObfuscated(channels);
    }
  };
  items[16] = {
    key: "guildHasStoredObfuscatedChannels",
    value(arg0) {
      let items = arg1;
      const self = this;
      if (arg1 === undefined) {
        items = [];
      }
      const GuildsRequiringChannelSync = items;
      const values = Object.values(store2.getMutableGuildChannelsForGuild(arg0));
      return self.anyChannelRecordsObfuscated(values.filter((id) => -1 === items.indexOf(id.id)));
    }
  };
  items[17] = {
    key: "anyChannelRecordsObfuscated",
    value(arr) {
      return null != arr.find((isObfuscated) => isObfuscated.isObfuscated());
    }
  };
  items[18] = {
    key: "anyChannelsObfuscated",
    value(arr) {
      return null != arr.find((flags) => {
        flags = flags.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        return callback(closure_3[18]).hasFlag(num, constants.OBFUSCATED);
      });
    }
  };
  items[19] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  return callback(GuildsRequiringChannelSync, items);
}();
tmp6 = new tmp6();
const importAllResult = importAll(dependencyMap[12]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/app_database/modules/GuildsRequiringChannelSync.tsx");

export default tmp6;
