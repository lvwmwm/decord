// Module ID: 6895
// Function ID: 54827
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 1352, 1194, 1348, 1917, 1910, 1838, 3758, 653, 1355, 482, 483, 3, 1882, 3749, 491, 675, 1360, 2]

// Module 6895 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";
import { Permissions } from "sum";
import importDefaultResult from "_isNativeReflectConstruct";
import importAllResult from "fromHexReverseArray";

let closure_14;
let closure_15;
let closure_6;
let closure_7;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
({ createChannelRecordFromServer: closure_6, ChannelRecordBase: closure_7 } = _callSuper);
({ AnalyticEvents: closure_14, BasicPermissions: closure_15 } = ME);
let closure_17 = require("fromHexReverseArray").combine(Permissions.VIEW_CHANNEL, Permissions.ADMINISTRATOR);
importDefaultResult = new importDefaultResult("GuildsRequiringChannelSync");
let closure_19 = { NewGuild: "new_guild", OwnershipChange: "ownership_change", RolePermissions: "role_permissions", RoleSubscriptionTags: "role_subscription_tags", MemberRoles: "member_roles", ChannelVisibleParentHidden: "channel_visible_parent_hidden", Unknown: "unknown" };
let closure_20 = { ConnectionOpen: "connection_open", GuildCreate: "guild_create", BackgroundSync: "background_sync" };
let tmp6 = (() => {
  class GuildsRequiringChannelSync {
    constructor() {
      self = this;
      tmp = outer1_4(this, self);
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
  let obj = {
    key: "getAll",
    value() {
      const result = outer1_1(outer1_3[14]).guildsRequiringChannelSync();
      if (null == result) {
        let resolved = Promise.resolve([]);
      } else {
        resolved = result.getMany();
      }
      return resolved;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "handleConnectionOpen",
    value(guilds) {
      let done;
      const self = this;
      const tmp = outer1_21(guilds.guilds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_20;
          let handleGuildResult = self.handleGuild(iter.value, arg1, outer1_20.ConnectionOpen);
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
        self.handleGuild(guild, arg1, outer1_20.GuildCreate);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleBackgroundSync",
    value(guilds) {
      let done;
      const self = this;
      const tmp = outer1_21(guilds.guilds);
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
      const tmp = outer1_21(guildIds);
      let iter = tmp();
      if (!iter.done) {
        do {
          let unmarkGuildForResyncResult = self.unmarkGuildForResync(iter.value, arg1);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      outer1_18.verbose("Unmarked guilds " + JSON.stringify(guildIds));
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
          let tmp = GuildsRequiringChannelSync;
          let tmp2 = outer1_3;
          obj = GuildsRequiringChannelSync(outer1_3[15]);
          isSubscriptionRoleResult = obj.isSubscriptionRole(tmp21);
        }
        if (isSubscriptionRoleResult) {
          let tmp4 = GuildsRequiringChannelSync;
          let tmp5 = outer1_3;
          let obj2 = GuildsRequiringChannelSync(outer1_3[15]);
          isSubscriptionRoleResult = obj2.isSubscriptionRoleAvailableForPurchase(tmp21);
        }
        let tmp6 = GuildsRequiringChannelSync;
        let tmp7 = outer1_3;
        let obj3 = GuildsRequiringChannelSync(outer1_3[15]);
        let isSubscriptionRoleResult1 = obj3.isSubscriptionRole(tmp20);
        if (isSubscriptionRoleResult1) {
          let tmp9 = GuildsRequiringChannelSync;
          let tmp10 = outer1_3;
          let obj4 = GuildsRequiringChannelSync(outer1_3[15]);
          isSubscriptionRoleResult1 = obj4.isSubscriptionRoleAvailableForPurchase(tmp20);
        }
        if (!isSubscriptionRoleResult) {
          if (isSubscriptionRoleResult1) {
            let tmp11 = outer1_19;
            return outer1_19.RoleSubscriptionTags;
          }
        }
        if (key10010 === arg0) {
          if (null == tmp21) {
            let tmp18 = outer1_19;
            return outer1_19.RolePermissions;
          } else {
            let tmp12 = outer1_2;
            let tmp13 = outer1_3;
            let arr = outer1_2(outer1_3[12]);
            let tmp14 = outer1_17;
            let found = arr.filter(tmp21.permissions, outer1_17);
            let arr2 = outer1_2(outer1_3[12]);
            let found1 = arr2.filter(tmp20.permissions, outer1_17);
            let obj5 = outer1_2(outer1_3[12]);
            if (obj5.equals(found, found1)) {
              continue;
            } else {
              let tmp17 = outer1_19;
              return outer1_19.RolePermissions;
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
        return { rolesAreDifferent: true, allRoleIds: null };
      } else {
        const _Set = Set;
        const set = new Set();
        const tmp10 = outer1_21(arg0);
        let iter2 = tmp10();
        if (!iter2.done) {
          do {
            let addResult = set.add(iter2.value);
            let iter = tmp10();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
        const tmp3 = outer1_21(arg1);
        let iter3 = tmp3();
        if (!iter3.done) {
          const value = iter3.value;
          while (set.has(value)) {
            let addResult1 = set.add(value);
            let iter4 = tmp3();
            iter3 = iter4;
          }
          return { rolesAreDifferent: true, allRoleIds: null };
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
      let selfMember = outer1_10.getSelfMember(id.id);
      if (null == selfMember) {
        selfMember = outer1_10.getCachedSelfMember(id.id);
      }
      if (null != selfMember) {
        if ("partial" === id.data_mode) {
          if (self.backgroundSyncGuildHasObfuscatedChannels(id)) {
            let ChannelVisibleParentHidden = outer1_19.Unknown;
            let obj = {};
            if (null != id.partial_updates.roles) {
              const tmp35 = outer1_21(id.partial_updates.roles);
              let iter2 = tmp35();
              if (!iter2.done) {
                do {
                  let value = iter2.value;
                  obj = { id: value.id };
                  let tmp5 = outer1_2;
                  let tmp6 = outer1_3;
                  let obj3 = outer1_2(outer1_3[12]);
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
            const guild = outer1_12.getGuild(id.id);
            let ownerId;
            if (null != guild) {
              ownerId = guild.ownerId;
            }
            let owner_id;
            if (null != properties) {
              owner_id = properties.owner_id;
            }
            const userBecameGuildOwnerResult = self.userBecameGuildOwner(ownerId, owner_id, outer1_8.getId());
            if (userBecameGuildOwnerResult) {
              ChannelVisibleParentHidden = outer1_19.OwnershipChange;
              let flag = userBecameGuildOwnerResult;
            } else {
              const unsafeMutableRoles = outer1_11.getUnsafeMutableRoles(id.id);
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
              ChannelVisibleParentHidden = outer1_19.ChannelVisibleParentHidden;
              flag = true;
            }
            if (flag) {
              self.markGuildForResync(id.id, arg1, outer1_20.BackgroundSync, ChannelVisibleParentHidden);
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
        const id = outer1_8.getId();
        const guild = outer1_12.getGuild(channels.id);
        if (null != guild) {
          const properties = channels.properties;
          let owner_id;
          if (null != properties) {
            owner_id = properties.owner_id;
          }
          const userBecameGuildOwnerResult = self.userBecameGuildOwner(guild.ownerId, owner_id, id);
          let flag = userBecameGuildOwnerResult;
          let MemberRoles = outer1_19.Unknown;
          if (userBecameGuildOwnerResult) {
            MemberRoles = outer1_19.OwnershipChange;
            flag = userBecameGuildOwnerResult;
          }
        } else {
          MemberRoles = outer1_19.NewGuild;
          flag = true;
        }
        let tmp12 = MemberRoles;
        let tmp13 = null;
        if (!flag) {
          let selfMember = outer1_10.getSelfMember(channels.id);
          if (null == selfMember) {
            selfMember = outer1_10.getCachedSelfMember(channels.id);
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
            MemberRoles = outer1_19.MemberRoles;
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
            const unsafeMutableRoles = outer1_11.getUnsafeMutableRoles(channels.id);
            let obj = {};
            if ("full_sync" === channels.roles.op) {
              let writes = channels.roles.items;
            } else {
              writes = channels.roles.writes;
            }
            const tmp39Result = outer1_21(writes);
            let iter = tmp39Result();
            if (!iter.done) {
              do {
                let value = iter.value;
                obj = { id: value.id };
                let tmp22 = outer1_2;
                let tmp23 = outer1_3;
                let obj2 = outer1_2(outer1_3[12]);
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
            const tmp39 = outer1_21;
          }
        }
        if (tmp29) {
          ChannelVisibleParentHidden = outer1_19.ChannelVisibleParentHidden;
          flag2 = true;
        }
        if (flag2) {
          if (self.gatewayGuildHasObfuscatedChannels(channels)) {
            self.markGuildForResync(channels.id, arg1, arg2, ChannelVisibleParentHidden);
          } else {
            self.unmarkGuildForResync(channels.id, arg1);
          }
        }
        tmp29 = !flag2 && self.hasNewlyVisibleChannelWithHiddenParent(channels.id, channels.channels.writes, channels.channels.deletes);
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
      let obj = GuildsRequiringChannelSync(outer1_3[16]);
      const v4Result = obj.v4();
      obj = { guild_id, request_id: v4Result, trigger, change_type };
      outer1_1(outer1_3[17]).track(outer1_14.GUILD_CHANNEL_RESYNC_REQUESTED, obj);
      const obj2 = outer1_1(outer1_3[17]);
      const result = outer1_1(outer1_3[14]).guildsRequiringChannelSyncTransaction(arg1);
      obj = { id: guild_id, requestId: v4Result };
      result.put(obj);
    }
  };
  items[12] = {
    key: "unmarkGuildForResync",
    value(arg0, arg1) {
      const result = outer1_1(outer1_3[14]).guildsRequiringChannelSyncTransaction(arg1);
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
        const mutableBasicGuildChannelsForGuild = outer1_9.getMutableBasicGuildChannelsForGuild(arg0);
        const _Set = Set;
        const set = new Set(items);
        const _Map = Map;
        const map = new Map();
        const tmp43 = outer1_21(arg1);
        let iter2 = tmp43();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let tmp = outer1_7;
            let tmp2 = value;
            if (!(value instanceof outer1_7)) {
              let tmp3 = outer1_6;
              tmp2 = outer1_6(value, arg0);
            }
            let result = map.set(tmp2.id, tmp2);
            iter = tmp43();
            iter2 = iter;
          } while (!iter.done);
        }
        const tmp6 = outer1_21(map.values());
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
                let tmp14 = outer1_13;
                let tmp15 = outer1_15;
                canBasicChannelResult = outer1_13.canBasicChannel(outer1_15.VIEW_CHANNEL, tmp12);
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
                        let tmp28 = outer1_13;
                        let tmp29 = outer1_15;
                        let tmp30 = tmp12;
                        let tmp31 = tmp16;
                        tmp10 = parent_id;
                        tmp11 = tmp27;
                        if (!outer1_13.canBasicChannel(outer1_15.VIEW_CHANNEL, tmp27)) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
            let iter5 = tmp6();
            tmp8 = tmp10;
            tmp9 = tmp11;
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
      const values = Object.values(outer1_9.getMutableGuildChannelsForGuild(arg0));
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
        return GuildsRequiringChannelSync(outer2_3[18]).hasFlag(num, outer2_16.OBFUSCATED);
      });
    }
  };
  items[19] = {
    key: "resetInMemoryState",
    value() {

    }
  };
  return callback(GuildsRequiringChannelSync, items);
})();
tmp6 = new tmp6();
let result = require("_callSuper").fileFinishedImporting("modules/app_database/modules/GuildsRequiringChannelSync.tsx");

export default tmp6;
