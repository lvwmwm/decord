// Module ID: 8755
// Function ID: 8756
// Name: GuildBasicChannels
// Dependencies: [32, 5, 6800, 5159, 502, 5155, 5218, 5212, 5177, 5238, 5156, 3, 5184, 8756, 11, 5225, 5243, 1084, 5247, 2]

// Module 8755 (GuildBasicChannels)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import ChannelStore2 from "ChannelStore" /* 5155 */;
import ChannelRecord from "ChannelRecord" /* 5159 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 5184 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 5225 */;
import PermissionUtils from "PermissionUtils" /* 5243 */;
import BasicPermissionUtilsDefault from "BasicPermissionUtils" /* 5247 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6800 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildRoleStore from "GuildRoleStore" /* 5212 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import BasicChannelCacheStore from "BasicChannelCacheStore" /* 5156 */;
import size from "module_2" /* 2 */;

const ChannelStore = ChannelStore2;
let c10, c9, closure_3, map, set;

function hasBasicChannelChanged(basicChannel, nextResult) {
  let tmp = null == basicChannel || basicChannel.type !== nextResult.type || basicChannel.parent_id !== nextResult.parent_id;
  if (!tmp) {
    let flag = basicChannel.nsfw;
    if (flag == null) {
      flag = false;
    }
    tmp = flag !== nextResult.nsfw;
  }
  if (!tmp) {
    const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
    tmp = basicPermissions !== PermissionStore.computeBasicPermissions(nextResult);
  }
  return tmp;
}
function toPermissionInputs(roles) {
  let flag;
  let items;
  let num2;
  let prop;
  let tmp2 = null;
  if (null != roles) {
    const obj = { roles: items, isPending: flag, flags: num2, communicationDisabledUntil: prop };
    items = [];
    HermesBuiltin.arraySpread(items, roles.roles, 0);
    flag = roles.isPending;
    if (flag == null) {
      flag = false;
    }
    num2 = roles.flags;
    if (num2 == null) {
      num2 = 0;
    }
    prop = null;
    const obj2 = CommunicationDisabledUtils;
    if (obj2.isCommunicationDisabled(roles.communicationDisabledUntil)) {
      prop = roles.communicationDisabledUntil;
    }
    tmp2 = obj;
  }
  return tmp2;
}
function haveSelfMemberPermissionInputsChanged(roles, member) {
  let tmp = null != roles && undefined !== member;
  if (tmp) {
    let tmp2 = null === member;
    if (!tmp2) {
      roles = member.roles;
      const roles1 = roles.roles;
      set = undefined;
      let flag = false;
      if (roles.length === roles1.length) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(roles);
        flag = roles1.every((item) => set.has(item));
      }
      let tmp7 = !flag;
      if (flag) {
        let flag2 = roles.isPending;
        if (flag2 == null) {
          flag2 = false;
        }
        let flag3 = member.isPending;
        if (flag3 == null) {
          flag3 = false;
        }
        tmp7 = flag2 !== flag3;
      }
      if (!tmp7) {
        const tmp8 = null != member.communicationDisabledUntil;
        const obj = CommunicationDisabledUtils;
        tmp7 = tmp8 !== obj.isCommunicationDisabled(roles.communicationDisabledUntil);
      }
      if (!tmp7) {
        let num = roles.flags;
        if (num == null) {
          num = 0;
        }
        let num2 = member.flags;
        const tmp11 = require;
        const tmp13 = num & PermissionUtils.PERMISSION_MEMBER_FLAGS_MASK;
        if (num2 == null) {
          num2 = 0;
        }
        tmp7 = tmp13 != (num2 & tmp11(5243).PERMISSION_MEMBER_FLAGS_MASK);
      }
      tmp2 = tmp7;
    }
    tmp = tmp2;
  }
  return tmp;
}
function haveRolesChangedSinceSync(id, value, op) {
  let items = arg3;
  if (arg3 === undefined) {
    items = [];
  }
  let _Set1;
  map = undefined;
  if ("update" === op.op) {
    if (0 === op.writes.length) {
      if (0 === op.deletes.length) {
        return false;
      }
    }
  }
  if (null == value) {
    return true;
  } else {
    const _Set = Set;
    const items1 = [];
    const obj = _Set1(11);
    items1[0] = obj.castGuildIdAsEveryoneGuildRoleId(id);
    const member = value.member;
    let roles;
    if (member != null) {
      roles = member.roles;
    }
    if (roles == null) {
      roles = [];
    }
    const tmp3 = roles;
    HermesBuiltin.arraySpread(items1, items, HermesBuiltin.arraySpread(items1, roles, 1));
    const self = this;
    const self2 = this;
    _Set1 = new _Set(items1);
    if ("full_sync" === op.op) {
      const _Map = Map;
      const items2 = op.items;
      const self3 = this;
      const self4 = this;
      map = new Map(items2.map((item) => {
        const items = [, ];
        ({ id: arr[0], permissions: arr[1] } = item);
        return items;
      }));
      const items3 = [];
      HermesBuiltin.arraySpread(items3, tmp9, 0);
      return items3.some((item) => {
        value = map.get(item);
        let equalsResult = null != tmp && null != value;
        if (equalsResult) {
          const equals = BigFlagUtilsAll.equals;
          BigFlagUtilsAll;
          const deserializer = BigFlagUtilsAll;
          const deserializeResult = deserializer.deserialize(value.rolePermissions[item]);
          const deserializer2 = BigFlagUtilsAll;
          equalsResult = equals(deserializeResult, deserializer2.deserialize(value));
        }
        return !equalsResult;
      });
    } else {
      const deletes = op.deletes;
      let someResult = deletes.some((item) => _Set1.has(item));
      if (!someResult) {
        const writes = op.writes;
        someResult = writes.some((id) => {
          let hasItem = _Set1.has(id.id);
          if (hasItem) {
            const permissions = id.permissions;
            let equalsResult = null != tmp3 && null != permissions;
            if (equalsResult) {
              const equals = BigFlagUtilsAll.equals;
              BigFlagUtilsAll;
              const deserializer = BigFlagUtilsAll;
              const deserializeResult = deserializer.deserialize(value.rolePermissions[id.id]);
              const deserializer2 = BigFlagUtilsAll;
              equalsResult = equals(deserializeResult, deserializer2.deserialize(permissions));
            }
            hasItem = !equalsResult;
          }
          return hasItem;
        });
      }
      return someResult;
    }
  }
}
function isCurrentSyncStatus(version) {
  let communicationDisabledUntil;
  let flags;
  let isPending;
  let member;
  let ownerId;
  let regex;
  let rolePermissions;
  let roles;
  if (null != version) {
    if (typeof version === "object") {
      ({ member, rolePermissions, ownerId } = version);
      if (4 === version.version) {
        if (undefined !== member) {
          if (null != rolePermissions) {
            if (typeof rolePermissions === "object") {
              const _Array = Array;
              if (!Array.isArray(rolePermissions)) {
                const _Object = Object;
                const values = Object.values(rolePermissions);
                if (values.every((item) => {
                  let isMatch = typeof item === "string";
                  if (typeof item === "string") {
                    isMatch = regex.test(item);
                  }
                  return isMatch;
                })) {
                  if (null === ownerId) {
                    if (typeof tmp6 === "number") {
                      if (null === member) {
                        return true;
                      } else if (typeof member !== "object") {
                        return false;
                      } else {
                        ({ roles, isPending, flags, communicationDisabledUntil } = member);
                        const _Array2 = Array;
                        let tmp = Array.isArray(roles) && roles.every((item) => typeof item === "string");
                        if (tmp) {
                          tmp = null == isPending || typeof isPending === "boolean";
                          const tmp2 = null == isPending || typeof isPending === "boolean";
                        }
                        if (tmp) {
                          tmp = null == flags || typeof flags === "number";
                        }
                        if (tmp) {
                          let tmp4 = null == communicationDisabledUntil;
                          if (!tmp4) {
                            let result = typeof communicationDisabledUntil === "string";
                            if (typeof communicationDisabledUntil === "string") {
                              const obj2 = CommunicationDisabledUtils;
                              result = obj2.isCommunicationDisabled(communicationDisabledUntil);
                            }
                            tmp4 = result;
                          }
                          tmp = tmp4;
                        }
                        return tmp;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return false;
    }
  }
  return false;
}
let closure_7 = ChannelRecord.createChannelRecordFromServer;
const ChannelLoader = ChannelStore2.ChannelLoader;
let tmp2 = new LoggerDefault("GuildBasicChannels");
const authStore3 = tmp2;
const re17 = /^\d+$/;
class GuildBasicChannels {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.synced = null;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
        return obj.handleBackgroundSync(arg0, arg1);
      },
      CHANNEL_CREATE(arg0, arg1) {
        return obj.handleChannelCreate(arg0, arg1);
      },
      CHANNEL_DELETE(arg0, arg1) {
        return obj.handleChannelDelete(arg0, arg1);
      },
      CHANNEL_UPDATES(arg0, arg1) {
        return obj.handleChannelUpdates(arg0, arg1);
      },
      CONNECTION_OPEN(arg0, arg1) {
        return obj.handleConnectionOpen(arg0, arg1);
      },
      GUILD_CREATE(arg0, arg1) {
        return obj.handleGuildCreate(arg0, arg1);
      },
      GUILD_DELETE(arg0, arg1) {
        return obj.handleGuildDelete(arg0, arg1);
      },
      GUILD_MEMBER_UPDATE(arg0, arg1) {
        return obj.handleGuildMemberUpdate(arg0, arg1);
      },
      GUILD_ROLE_DELETE(arg0, arg1) {
        return obj.handleGuildRoleDelete(arg0, arg1);
      },
      GUILD_ROLE_UPDATE(arg0, arg1) {
        return obj.handleGuildRoleUpdate(arg0, arg1);
      },
      GUILD_UPDATE(arg0, arg1) {
        return obj.handleGuildUpdate(arg0, arg1);
      },
      POST_CONNECTION_OPEN() {
        return obj.handlePostConnectionOpen();
      },
      WRITE_CACHES(arg0, arg1) {
        return obj.handleWriteCaches(arg0, arg1);
      }
    };
    return obj;
  }
  getAsync(arg0) {
    let all;
    let closure_0 = arg0;
    let self = this;
    return (async function() {
      let c2;
      let closure_1;
      let tmp2;
      function groupStatuses(arg0) {
        let tmp5;
        let tmp6;
        const items = [];
        const items1 = [];
        const tmp = arg0[Symbol.iterator]();
        while (tmp !== undefined) {
          let tmp4 = closure_1_4(tmp2, 2);
          [tmp5, tmp6] = tmp4;
          let tmp7 = tmp6;
          if (closure_1_22(tmp6)) {
            let items2 = [tmp5, ];
            items2[1] = tmp7;
            let arr = items.push(items2);
          } else {
            let arr2 = items1.push(tmp5);
          }
          continue;
        }
        const items3 = [items, items1];
        return items3;
      }
      const _performance2 = performance;
      closure_0 = performance.now();
      const obj7 = tmp2(all[12]);
      let items = [, ];
      const basicChannelsResult = obj7.basicChannels(closure_0);
      items[0] = basicChannelsResult.getKvEntries();
      const obj9 = tmp2(all[12]);
      const syncedBasicChannelsResult = obj9.syncedBasicChannels(closure_0);
      items[1] = syncedBasicChannelsResult.getKvEntries();
      await c3(items);
      tmp2 = arg1;
      let closure_2 = _slicedToArray(tmp2, 2);
      let closure_4 = closure_2[1];
      const _performance = performance;
      let closure_5 = performance.now() - closure_0;
      let closure_6 = groupStatuses(closure_4);
      closure_7 = _slicedToArray(closure_6, 2);
      let closure_8 = closure_7[0];
      const stale = closure_7[1];
      const _Map = Map;
      self = this;
      const self2 = this;
      map = new Map(closure_8);
      closure_129_1.synced = map;
      const _HermesInternal = HermesInternal;
      closure_1_16.verbose("loaded in " + closure_5 + "ms (guilds: " + all.length + ", synced: " + map.size + " unsynced: " + stale.length + ")");
      const obj6 = {
        all,
        stale,
        channels: all.filter((item) => {
          let tmp;
          [tmp, ] = item;
          return set.has(tmp);
        })
      };
      return obj6;
    })();
  }
  handleChannelCreate(channel, iter) {
    if (null != channel.channel.guild_id) {
      const self = this;
      this.unsync(channel.channel.guild_id, iter);
    }
  }
  handleChannelDelete(channel, iter) {
    if (null != channel.channel.guild_id) {
      const self = this;
      this.unsync(channel.channel.guild_id, iter);
    }
  }
  handleChannelUpdates(channels, iter) {
    const self = this;
    channels = channels.channels;
    const found = channels.filter((guild_id) => null != guild_id.guild_id);
    iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (hasBasicChannelChanged(ChannelStore.getBasicChannel(nextResult.id), nextResult)) {
        let unsyncResult = self.unsync(tmp3.guild_id, iter);
      }
      continue;
    }
  }
  handleBackgroundSync(arg0, arg1) {
    let closure_0 = arg1;
    const self = this;
    function _loop(iter) {
      let deleted_role_ids;
      closure_0 = iter;
      const data_mode = iter.data_mode;
      if ("unavailable" !== data_mode) {
        if ("partial" === data_mode) {
          let value;
          const synced = self.synced;
          if (synced != null) {
            value = synced.get(iter.id);
          }
          const properties = iter.properties;
          let tmp6 = null != properties;
          if (tmp6) {
            let tmp7 = null == value || undefined === properties.owner_id || null == properties.mfa_level;
            if (!tmp7) {
              let owner_id = properties.owner_id;
              if (owner_id == null) {
                owner_id = null;
              }
              tmp7 = owner_id !== value.ownerId;
            }
            if (!tmp7) {
              tmp7 = properties.mfa_level !== value.mfaLevel;
            }
            tmp6 = tmp7;
          }
          if (!tmp6) {
            let roles = iter.partial_updates.roles;
            const id = iter.id;
            const tmp9 = haveRolesChangedSinceSync;
            if (roles == null) {
              roles = [];
            }
            const obj2 = { op: "update", writes: roles, deletes: deleted_role_ids };
            deleted_role_ids = iter.partial_updates.deleted_role_ids;
            if (deleted_role_ids == null) {
              deleted_role_ids = [];
            }
            if (!tmp9(id, value, obj2)) {
              const id2 = iter.id;
              const channels = iter.partial_updates.channels;
              let mapped;
              const onGuildUpdate = obj.onGuildUpdate;
              if (channels != null) {
                mapped = channels.map((item) => closure_2_7(item, id.id));
              }
              if (mapped == null) {
                mapped = [];
              }
              let deleted_channel_ids = iter.partial_updates.deleted_channel_ids;
              if (deleted_channel_ids == null) {
                deleted_channel_ids = [];
              }
              onGuildUpdate(id2, mapped, deleted_channel_ids, closure_0);
            }
          }
          self.unsync(iter.id, closure_0);
        } else {
          self.onGuildSync(iter.id, closure_0);
        }
      }
    }
    const iter = arg0.guilds[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  handleConnectionOpen(guilds, arg1) {
    const self = this;
    guilds = guilds.guilds;
    for (const item10008 of guilds) {
      let handleOneGuildCreateResult = self.handleOneGuildCreate(item10008, arg1);
      continue;
    }
  }
  handlePostConnectionOpen() {
    let self = this;
    return (async (arg0, value) => {
      let closure_0;
      let guildIds;
      let iter3;
      let method;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c7;
        try {
          let value2;
          let synced;
          let iter4;
          let next;
          let c2;
          let tmp15;
          c10 = 2;
          const tmp3 = c9;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value2 = undefined;
              let _loop2;
              let c4;
              synced = method.lastTimeConnectedChanged();
              const obj6 = guildIds(iter3[12]);
              const databaseResult = obj6.database();
              let c1 = databaseResult;
              const tmp57 = iter3;
              if (null != self.synced) {
                if (null != databaseResult) {
                  const obj7 = synced(tmp57[13]);
                  if (obj7.isCacheEnabled()) {
                    guildIds = guildIds.getGuildIds();
                    let _HermesInternal = HermesInternal;
                    const verboseResult = closure_1_16.verbose("scheduling basic_channel optimstic writes (guilds: " + guildIds.filter((item) => {
                      synced = synced.synced;
                      return !synced.has(item);
                    }).length + ")");
                    _loop2 = function _loop2(c4) {
                      synced = c4;
                      let c5 = 0;
                      let c6 = 0;
                      c4 = 0;
                      return (function* _loop2(arg0, value) {
                        if (c6 === 2) {
                          c6 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            return { value, done: true };
                          } else {
                            return { value: "HermesInternal", done: null };
                          }
                        } else {
                          try {
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                closure_2 = tmp;
                                closure_1 = tmp4;
                                if (null != synced.synced) {
                                  const obj10 = c1(_loop2[12]);
                                  if (c1 === obj10.database()) {
                                    if (synced === closure_2_6.lastTimeConnectedChanged()) {
                                      synced = tmp29.synced;
                                      if (synced.has(synced)) {
                                        c6 = 3;
                                        return { value: 1, done: true };
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        closure_2_16.verbose("optimstically writing basic_channels (guild: " + synced + ")");
                                        c4 = 1;
                                        const items = [synced];
                                        c5 = 3;
                                        c6 = 1;
                                        const obj4 = { value: closure_2_10.loadGuildIds(items), done: false };
                                        return obj4;
                                      }
                                    }
                                  }
                                }
                                c6 = 3;
                                return { value: 0, done: true };
                              }
                            } else if (1 === c5) {
                              c4 = 0;
                              closure_1 = closure_3;
                              closure_2_16.warn("couldn't optimstically write basic_channel:", closure_1);
                              c6 = 3;
                              return { value: { v: "r" }, done: true };
                            } else if (2 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                c6 = 3;
                                return { value: "HermesInternal", done: null };
                              }
                            } else if (3 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 0;
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                c5 = 4;
                                c6 = 1;
                                const obj8 = { value: closure_130_1.transaction((database) => closure_0.syncOne(closure_1_0, database), "handlePostConnectionOpen"), done: false };
                                return obj8;
                              }
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 0;
                              c6 = 3;
                              return { value, done: true };
                            } else {
                              c4 = 0;
                              self = this;
                              const self2 = this;
                              c5 = 2;
                              c6 = 1;
                              const obj = { value: new Promise((arg0) => setTimeout(arg0, 1000)), done: false };
                              return obj;
                            }
                          } catch (tmp20) {
                            closure_3 = tmp20;
                            if (0 === c4) {
                              c6 = 3;
                              throw tmp20;
                            } else {
                              c5 = 1;
                            }
                          }
                        }
                      })();
                    };
                    synced = guildIds[Symbol.iterator]();
                    if (synced !== undefined) {
                      c7 = 1;
                      c4 = tmp33;
                      const tmp64 = _loop2(c4);
                      iter4 = tmp64[tmp52.iterator]();
                      HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter4.next;
                      c2 = undefined;
                    }
                  }
                }
              }
              c10 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp3) {
            c7 = 0;
            synced.return();
            throw closure_8;
          } else {
            if (2 === tmp3) {
              c7 = 2;
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else {
                c2 = value;
                if (arg0 === 2) {
                  c2 = value;
                  c7 = 1;
                  method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    c7 = 0;
                    synced.return();
                    c10 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const iter2 = method(c2);
                    const tmp20 = iter2;
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter2.done) {
                      c7 = 0;
                      value = iter2.value;
                      synced.return();
                      c10 = 3;
                      let obj = { value, done: true };
                      return obj;
                    } else {
                      c9 = 2;
                      c10 = 1;
                      return iter2;
                    }
                  }
                } else {
                  c7 = 1;
                  tmp15 = value;
                }
              }
            } else {
              const tmp4 = iter4;
              c7 = 1;
              const str = "throw";
              const method1 = HermesBuiltin.getMethod("throw");
              const tmp5 = closure_8;
              if (method1 === undefined) {
                const str3 = "return";
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  const str4 = "iterator.return() did not return an object";
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                const str5 = "yield* delegate must have a .throw() method";
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp5);
                const str2 = "iterator.throw() did not return an object";
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter3 = iter;
                } else {
                  c9 = 2;
                  c10 = 1;
                  return iter;
                }
              }
            }
            value2 = iter3.value;
            if (0 === value2) {
              c7 = 0;
              synced.return();
            } else {
              if (1 !== value2) {
                const tmp42 = value2;
                if (tmp42) {
                  c7 = 0;
                  const v = value2.v;
                  synced.return();
                  c10 = 3;
                  const obj5 = { value: v, done: true };
                  return obj5;
                }
              }
              c7 = 0;
            }
          }
          iter3 = next(tmp15);
          HermesBuiltin.ensureObject("iterator.next() did not return an object");
          if (!iter3.done) {
            c9 = 2;
            c10 = 1;
            return iter3;
          }
        } catch (tmp46) {
          closure_8 = tmp46;
          if (0 === c7) {
            c10 = 3;
            throw tmp46;
          } else if (1 === tmp48) {
            c9 = 1;
          } else {
            c9 = 3;
          }
        }
      }
    })();
  }
  handleGuildCreate(guild, arg1) {
    this.handleOneGuildCreate(guild.guild, arg1);
  }
  handleOneGuildCreate(arg0, iter) {
    let channels;
    let communication_disabled_until;
    let flag;
    let flags;
    let id;
    let items1;
    let member;
    let members;
    let num3;
    let pending;
    let prop;
    let properties;
    let roles;
    let value;
    ({ id, channels, roles, properties, members } = arg0);
    const id1 = AuthenticationStore.getId();
    const found = members.find((user) => user.user.id === id1);
    if (null != found) {
      ({ pending, flags, communication_disabled_until } = found);
      const items = [];
      HermesBuiltin.arraySpread(items, found.roles, 0);
      if (pending == null) {
        pending = false;
      }
      if (flags == null) {
        flags = 0;
      }
      const obj2 = CommunicationDisabledUtils;
    }
    const self = this;
    const synced = this.synced;
    if (synced != null) {
      value = synced.get(id);
    }
    if (null == self.synced) {
      const trueMember = GuildMemberStore.getTrueMember(id, id1);
      let tmp13 = null;
      if (null != trueMember) {
        const obj3 = { roles: items1, isPending: flag, flags: num3, communicationDisabledUntil: prop };
        items1 = [];
        HermesBuiltin.arraySpread(items1, trueMember.roles, 0);
        flag = trueMember.isPending;
        if (flag == null) {
          flag = false;
        }
        num3 = trueMember.flags;
        if (num3 == null) {
          num3 = 0;
        }
        prop = null;
        const obj4 = CommunicationDisabledUtils;
        if (obj4.isCommunicationDisabled(trueMember.communicationDisabledUntil)) {
          prop = trueMember.communicationDisabledUntil;
        }
        tmp13 = obj3;
      }
      member = tmp13;
    } else if (value != null) {
      member = value.member;
    }
    let tmp19 = null != properties;
    if (tmp19) {
      let tmp20 = null == value || undefined === properties.owner_id || null == properties.mfa_level;
      if (!tmp20) {
        let owner_id = properties.owner_id;
        if (owner_id == null) {
          owner_id = null;
        }
        tmp20 = owner_id !== value.ownerId;
      }
      if (!tmp20) {
        tmp20 = properties.mfa_level !== value.mfaLevel;
      }
      tmp19 = tmp20;
    }
    if (!tmp19) {
      let roles1;
      const tmp22 = haveRolesChangedSinceSync;
      if (tmp4 != null) {
        roles1 = tmp4.roles;
      }
      if (!tmp22(id, value, roles, roles1)) {
        if (!haveSelfMemberPermissionInputsChanged(tmp4, member)) {
          const op = channels.op;
          if ("full_sync" === op) {
            self.onGuildSync(id, iter);
          } else if ("update" === op) {
            self.onGuildUpdate(id, channels.writes, channels.deletes, iter);
          }
        }
      }
    }
    self.unsync(id, iter);
  }
  handleGuildUpdate(guild, iter) {
    const self = this;
    guild = guild.guild;
    if (!this.isUnsynced(guild.id)) {
      let value;
      const synced = self.synced;
      if (synced != null) {
        value = synced.get(guild.id);
      }
      let tmp3 = null != guild;
      if (tmp3) {
        let tmp4 = null == value || undefined === guild.owner_id || null == guild.mfa_level;
        if (!tmp4) {
          let owner_id = guild.owner_id;
          if (owner_id == null) {
            owner_id = null;
          }
          tmp4 = owner_id !== value.ownerId;
        }
        if (!tmp4) {
          tmp4 = guild.mfa_level !== value.mfaLevel;
        }
        tmp3 = tmp4;
      }
      if (!tmp3) {
        const obj = { op: "full_sync", items: guild.roles };
        tmp3 = haveRolesChangedSinceSync(guild.id, value, obj);
      }
      if (tmp3) {
        self.unsync(guild.id, iter);
      }
    }
  }
  handleGuildDelete(guild, arg1) {
    if (true !== guild.guild.unavailable) {
      const self = this;
      this.delete(guild.guild.id, arg1);
    }
  }
  handleGuildRoleUpdate(arg0, iter) {
    let guildId;
    let items;
    let role;
    const self = this;
    ({ guildId, role } = arg0);
    if (!this.isUnsynced(guildId)) {
      const synced = self.synced;
      let value;
      const tmp = haveRolesChangedSinceSync;
      if (synced != null) {
        value = synced.get(guildId);
      }
      const obj = { op: "update", writes: items, deletes: [] };
      items = [role];
      if (tmp(guildId, value, obj)) {
        self.unsync(guildId, iter);
      }
    }
  }
  handleGuildRoleDelete(arg0, iter) {
    let guildId;
    let items;
    let roleId;
    const self = this;
    ({ guildId, roleId } = arg0);
    if (!this.isUnsynced(guildId)) {
      const synced = self.synced;
      let value;
      const tmp = haveRolesChangedSinceSync;
      if (synced != null) {
        value = synced.get(guildId);
      }
      const obj = { op: "update", writes: [], deletes: items };
      items = [roleId];
      if (tmp(guildId, value, obj)) {
        self.unsync(guildId, iter);
      }
    }
  }
  handleGuildMemberUpdate(user, iter) {
    let flag;
    let flag2;
    let items;
    let items1;
    let num2;
    let num4;
    let prop;
    let prop1;
    const id = AuthenticationStore.getId();
    if (user.user.id === id) {
      const self = this;
      if (!this.isUnsynced(user.guildId)) {
        let member;
        const synced = self.synced;
        let value;
        if (synced != null) {
          value = synced.get(user.guildId);
        }
        if (null != value) {
          member = value.member;
        } else {
          const trueMember = GuildMemberStore.getTrueMember(user.guildId, id);
          member = null;
          if (null != trueMember) {
            const obj = { roles: items, isPending: flag, flags: num2, communicationDisabledUntil: prop };
            items = [];
            HermesBuiltin.arraySpread(items, trueMember.roles, 0);
            flag = trueMember.isPending;
            if (flag == null) {
              flag = false;
            }
            num2 = trueMember.flags;
            if (num2 == null) {
              num2 = 0;
            }
            prop = null;
            const obj2 = CommunicationDisabledUtils;
            if (obj2.isCommunicationDisabled(trueMember.communicationDisabledUntil)) {
              prop = trueMember.communicationDisabledUntil;
            }
            member = obj;
          }
        }
        let tmp12 = null;
        const tmp11 = haveSelfMemberPermissionInputsChanged;
        if (null != user) {
          const obj3 = { roles: items1, isPending: flag2, flags: num4, communicationDisabledUntil: prop1 };
          items1 = [];
          HermesBuiltin.arraySpread(items1, user.roles, 0);
          flag2 = user.isPending;
          if (flag2 == null) {
            flag2 = false;
          }
          num4 = user.flags;
          if (num4 == null) {
            num4 = 0;
          }
          prop1 = null;
          const obj4 = CommunicationDisabledUtils;
          if (obj4.isCommunicationDisabled(user.communicationDisabledUntil)) {
            prop1 = user.communicationDisabledUntil;
          }
          tmp12 = obj3;
        }
        if (member == null) {
          member = null;
        }
        if (tmp11(tmp12, member)) {
          self.unsync(user.guildId, iter);
        }
      }
    }
  }
  isUnsynced(guildId) {
    let tmp2 = null != this.synced;
    if (tmp2) {
      const synced = tmp.synced;
      tmp2 = !synced.has(guildId);
    }
    return tmp2;
  }
  handleWriteCaches(arg0, arg1) {
    this.sync(arg1);
  }
  resetInMemoryState() {
    this.synced = null;
  }
  onGuildUpdate(id, mapped, deleted_channel_ids, iter) {
    let someResult = deleted_channel_ids.length > 0;
    if (!someResult) {
      let tmp2 = mapped;
      someResult = mapped.some((id) => {
        basicChannel = basicChannel.getBasicChannel(id.id);
        let tmp2 = null == basicChannel || basicChannel.type !== id.type || basicChannel.parent_id !== id.parent_id;
        if (!tmp2) {
          let flag = basicChannel.nsfw;
          if (flag == null) {
            flag = false;
          }
          tmp2 = flag !== id.nsfw;
        }
        if (!tmp2) {
          const basicPermissions = PermissionStore.computeBasicPermissions(basicChannel);
          tmp2 = basicPermissions !== PermissionStore.computeBasicPermissions(id);
        }
        return tmp2;
      });
    }
    if (someResult) {
      const self = this;
      this.unsync(id, iter);
    }
  }
  onGuildSync(id, iter) {
    this.unsync(id, iter);
  }
  delete(guildId, database) {
    this.unsync(guildId, database);
    const obj = DatabaseDaosDefault;
    const result = obj.basicChannelsTransaction(database);
    result.delete(guildId);
    const obj3 = DatabaseDaosDefault;
    const result1 = obj3.syncedBasicChannelsTransaction(database);
    result1.delete(guildId);
  }
  unsync(guildId, iter) {
    const synced = this.synced;
    if (synced != null) {
      synced.delete(guildId);
    }
    const obj = DatabaseDaosDefault;
    const result = obj.basicChannelsTransaction(iter);
    result.delete(guildId);
    const obj3 = DatabaseDaosDefault;
    const result1 = obj3.syncedBasicChannelsTransaction(iter);
    result1.put(guildId, false);
    BasicChannelCacheStore.invalidate(guildId);
  }
  sync(database) {
    const self = this;
    closure_16.verbose("Starting to write all basic channels");
    let num = 0;
    let num2 = 0;
    const nowResult = performance.now();
    const guildIds = GuildStore.getGuildIds();
    const tmp4 = guildIds[Symbol.iterator]();
    while (tmp4 !== undefined) {
      if (self.syncOne(tmp5, database)) {
        num = num + 1;
      } else {
        num2 = num2 + 1;
      }
      continue;
    }
    closure_16.verbose("" + num + " basic_channel guilds submitted (took: " + performance.now() - nowResult + "ms, skipped: " + num2 + " guilds)");
  }
  syncOne(id, database) {
    let member;
    function createSyncStatus(guild) {
      let ownerId;
      const tmp2 = toPermissionInputs(member.getMember(guild.id, id.getId()));
      const obj = {};
      const items = [];
      const obj2 = SnowflakeUtilsDefault;
      items[0] = obj2.castGuildIdAsEveryoneGuildRoleId(guild.id);
      let roles;
      if (tmp2 != null) {
        roles = tmp2.roles;
      }
      if (roles == null) {
        roles = [];
      }
      HermesBuiltin.arraySpread(items, roles, 1);
      for (const item10033 of items) {
        let tmp4 = item10033;
        role = role.getRole(guild.id, item10033);
        if (null != role) {
          let str = tmp7.permissions;
          obj[tmp4] = str.toString();
        }
        continue;
      }
      const obj3 = { version: 4, member: tmp2, rolePermissions: obj, ownerId, mfaLevel: guild.mfaLevel };
      ownerId = guild.ownerId;
      if (ownerId == null) {
        ownerId = null;
      }
      return obj3;
    }
    const guild = GuildStore.getGuild(id);
    if (null != guild) {
      const synced2 = this.synced;
      let hasItem;
      const self = this;
      if (synced2 != null) {
        hasItem = synced2.has(id);
      }
      if (!hasItem) {
        let tmp4 = globalThis;
        const _Object = Object;
        const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(id));
        const mapped = values.map((id) => {
          let obj2;
          const obj = { id: id.id, type: id.type, guild_id: id.guild_id, parent_id: id.parent_id, basicPermissions: obj2.asBasicFlag(PermissionStore.computePermissions(id)), nsfw: id.nsfw || undefined };
          obj2 = BasicPermissionUtilsDefault;
          return obj;
        });
        const tmp6 = createSyncStatus(guild);
        const synced = self.synced;
        if (synced != null) {
          const result = synced.set(id, tmp6);
        }
        let tmp8 = database;
        let tmp9 = importDefault;
        let obj = DatabaseDaosDefault;
        const result1 = obj.basicChannelsTransaction(database);
        result1.put(id, mapped);
        let obj3 = DatabaseDaosDefault;
        const result2 = obj3.syncedBasicChannelsTransaction(database);
        result2.put(id, tmp6);
        return true;
      }
    }
    return false;
  }
}
const prototype = GuildBasicChannels.prototype;
let obj = Object.create(GuildBasicChannels.prototype);
obj.synced = null;
obj.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CHANNEL_CREATE(arg0, arg1) {
    return obj.handleChannelCreate(arg0, arg1);
  },
  CHANNEL_DELETE(arg0, arg1) {
    return obj.handleChannelDelete(arg0, arg1);
  },
  CHANNEL_UPDATES(arg0, arg1) {
    return obj.handleChannelUpdates(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  },
  GUILD_MEMBER_UPDATE(arg0, arg1) {
    return obj.handleGuildMemberUpdate(arg0, arg1);
  },
  GUILD_ROLE_DELETE(arg0, arg1) {
    return obj.handleGuildRoleDelete(arg0, arg1);
  },
  GUILD_ROLE_UPDATE(arg0, arg1) {
    return obj.handleGuildRoleUpdate(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  },
  POST_CONNECTION_OPEN() {
    return obj.handlePostConnectionOpen();
  },
  WRITE_CACHES(arg0, arg1) {
    return obj.handleWriteCaches(arg0, arg1);
  }
};
let result = size.fileFinishedImporting("modules/app_database/modules/GuildBasicChannels.tsx");

export default obj;
