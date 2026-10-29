// Module ID: 8924
// Function ID: 8925
// Name: GuildScheduledEventManager
// Dependencies: [5, 5036, 6842, 8925, 7274, 8931, 8932, 2]

// Module 8924 (GuildScheduledEventManager)
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8925 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5036 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6842 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let _self, c0, c1, c3, c7, c8;

function getGuildEventsForCurrentUser() {
  return obj(...arguments);
}
let obj = function _getGuildEventsForCurrentUser() {
  let guildScheduledEventsForGuild;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            if (0 !== guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(closure_0).length) {
              if (!set.has(closure_0)) {
                if (!set2.has(closure_0)) {
                  c4 = 1;
                  set.add(closure_0);
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj2.getGuildEventsForCurrentUser(closure_0), done: false };
                  obj2 = GuildScheduledEventsActionCreatorsDefault;
                  return obj5;
                }
              }
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_7.delete(closure_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_8.add(closure_0);
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp22) {
        let closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_6 = {};
let set = new Set();
const set1 = new Set();
let c9 = 1800000;
const map = new Map();
class GuildScheduledEventManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return applyArgumentsResult.handleConnectionOpen();
      },
      GUILD_DELETE(arg0) {
        return applyArgumentsResult.handleGuildDelete(arg0);
      },
      GUILD_UNAVAILABLE(arg0) {
        return applyArgumentsResult.handleGuildUnavailable(arg0);
      },
      INVITE_RESOLVE_SUCCESS(arg0) {
        return applyArgumentsResult.handleInviteResolveSuccess(arg0);
      },
      CHANNEL_SELECT(arg0) {
        return applyArgumentsResult.handleChannelSelect(arg0);
      }
    };
    return applyArgumentsResult;
  }
  getGuildEventUserCounts(guild_id, id, items1) {
    return this.fetchGuildEventUserCounts(guild_id, id, items1, false);
  }
  getGuildEventUserCountsForEmbed(guild_id, id, items1) {
    if (null == GuildScheduledEventStore.getGuildScheduledEvent(id)) {
      return Promise.resolve();
    } else {
      let tmp2;
      const _HermesInternal = HermesInternal;
      const combined = "" + guild_id + "-" + id;
      let value2 = map.get(combined);
      if (null == value2) {
        const _Date2 = Date;
        const _Set = Set;
        const self = this;
        const self2 = this;
        obj = { startedAt: Date.now(), ids: set };
        tmp2 = obj;
        set = new Set();
      } else {
        const _Date = Date;
        const tmp = c9;
        tmp2 = value2;
      }
      value2 = tmp2;
      const found = items1.filter((item) => {
        const ids = value2.ids;
        let hasItem = ids.has(item);
        if (!hasItem) {
          let flag = tmp.ids.size < 8;
          if (flag) {
            const ids2 = tmp.ids;
            ids2.add(item);
            flag = true;
          }
          hasItem = flag;
        }
        return hasItem;
      });
      map.delete(combined);
      const result = obj3.set(combined, tmp2);
      if (map.size > 1024) {
        const iter = map.keys();
        const value = iter.next().value;
        while (null != value) {
          let deleteResult1 = obj2.delete(value);
          if (obj2.size <= 1024) {
            break;
          }
        }
      }
      if (items1.length > 0) {
        let resolved;
        if (0 === found.length) {
          resolved = Promise.resolve();
        }
        return resolved;
      }
      const self3 = this;
      let flag = true;
      const self4 = this;
      resolved = this.fetchGuildEventUserCounts(guild_id, id, found, true);
    }
  }
  fetchGuildEventUserCounts(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    return (async (arg0, value) => {
      let tmp;
      let tmp18;
      let tmp19;
      let tmp2;
      let tmp3;
      let tmp4;
      let v1;
      if (c4 === 2) {
        let num9 = 3;
        let num10 = 3;
        c4 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let tmp20 = value;
        let tmp21 = arg0;
        let tmp22 = tmp2;
        let num11 = 3;
        let num12 = 1;
        let tmp23 = globalThis;
        const str2 = "-";
        const str3 = "";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          let c2;
          try {
            let neededIds;
            let combined;
            let num = 2;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                let num7 = 3;
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                let num6 = 3;
                c4 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                neededIds = function neededIds() {
                  return closure_2_2.filter((item) => {
                    let tmp2 = null == closure_3_6["" + closure_1_0 + "-" + item];
                    const tmp = closure_1_0;
                    if (!tmp2) {
                      const _Date = Date;
                      const _HermesInternal = HermesInternal;
                      const timestamp = Date.now();
                      tmp2 = timestamp - closure_3_6["" + tmp + "-" + item] >= closure_3_9;
                    }
                    return tmp2;
                  });
                };
                let tmp32 = tmp19;
                let tmp33 = tmp;
                let _HermesInternal = HermesInternal;
                combined = "" + tmp19 + "-" + tmp;
                c2 = 1;
                let tmp35 = closure_1_6;
                if (null != closure_1_6[combined]) {
                  let _Date = Date;
                  let tmp9 = closure_1_6;
                  let tmp10 = closure_1_9;
                  if (Date.now() - closure_1_6[combined] < closure_1_9) {
                    if (neededIds().length <= 0) {
                      c2 = 0;
                    }
                  }
                }
                let tmp11 = tmp19;
                let tmp12 = tmp;
                let tmp13 = tmp19;
                let tmp14 = c2;
                let obj2 = tmp19(c2[5]);
                let tmp15 = closure_129_0;
                let tmp17 = c3;
                c3 = 2;
                let num5 = 1;
                c4 = 1;
                let obj5 = {
                  value: obj2.guardGuildEventUserCountFetch(closure_129_0, closure_129_1, c3(async (arg0, value) => {
                              let tmp19;
                              let tmp7;
                              if (c0 === 2) {
                                c0 = 3;
                                let str = "Generator functions may not be called on executing generators";
                                throw new TypeError("Generator functions may not be called on executing generators");
                              } else {
                                let tmp8 = value;
                                let tmp9 = arg0;
                                const tmp10 = tmp;
                                if (tmp2 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    let obj3 = { value, done: true };
                                    return obj3;
                                  } else {
                                    return { value: "IconComponent", done: "IconComponent" };
                                  }
                                } else {
                                  try {
                                    let num = 2;
                                    c0 = 2;
                                    const tmp3 = c1;
                                    let num2 = 0;
                                    if (0 === c1) {
                                      let num7 = 1;
                                      if (arg0 === 1) {
                                        c0 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c0 = 3;
                                        let obj4 = { value, done: true };
                                        return obj4;
                                      } else {
                                        obj = function _fetch() {
                                          obj = v1(function*(arg0, value) {
                                            if (c7 === 2) {
                                              c7 = 3;
                                              throw new TypeError("Generator functions may not be called on executing generators");
                                            } else if (tmp3 === 3) {
                                              if (arg0 === 1) {
                                                throw value;
                                              } else if (arg0 === 2) {
                                                const obj3 = { value, done: true };
                                                return obj3;
                                              } else {
                                                return { value: "IconComponent", done: "IconComponent" };
                                              }
                                            } else {
                                              while (true) {
                                                c7 = 2;
                                                let tmp4 = c6;
                                                if (0 === c6) {
                                                  if (arg0 === 1) {
                                                    c7 = 3;
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    c7 = 3;
                                                    let obj4 = { value, done: true };
                                                    return obj4;
                                                  } else {
                                                    closure_3 = tmp;
                                                    closure_2 = tmp4;
                                                    c0 = undefined;
                                                    let tmp36 = closure_2_3;
                                                    if (tmp36) {
                                                      if (null == guildScheduledEvent.getGuildScheduledEvent(closure_2_1)) {
                                                        let _Error = Error;
                                                        let self = this;
                                                        let self2 = this;
                                                        let str = "guild event not found";
                                                        let error = new Error("guild event not found");
                                                        throw error;
                                                      }
                                                    }
                                                    let obj2 = obj(closure_3_2[3]);
                                                    c6 = 1;
                                                    c7 = 1;
                                                    let obj5 = { value: obj2.fetchGuildEventUserCounts(closure_2_0, closure_2_1, closure_2_0), done: false };
                                                    return obj5;
                                                  }
                                                } else if (1 === tmp4) {
                                                  if (arg0 === 1) {
                                                    c7 = 3;
                                                    throw value;
                                                  } else if (arg0 === 2) {
                                                    c7 = 3;
                                                    obj = { value, done: true };
                                                    return obj;
                                                  } else {
                                                    let _Date2 = Date;
                                                    closure_3_6[closure_0] = Date.now();
                                                    closure_1 = closure_131_0;
                                                    closure_0 = closure_131_0[Symbol.iterator]();
                                                    while (closure_0 !== undefined) {
                                                      c0 = tmp10;
                                                      let _HermesInternal = HermesInternal;
                                                      let _Date = Date;
                                                      let combined = "" + closure_0 + "-" + c0;
                                                      closure_3_6[combined] = Date.now();
                                                      let c5 = 0;
                                                      continue;
                                                    }
                                                    c7 = 3;
                                                    return { value: "IconComponent", done: "IconComponent" };
                                                  }
                                                } else {
                                                  c5 = 0;
                                                  closure_0.return();
                                                  throw closure_1_4;
                                                }
                                              }
                                            }
                                          });
                                          return obj(...arguments);
                                        };
                                        let tmp4 = tmp;
                                        closure_0 = tmp();
                                        let tmp5 = tmp19;
                                        let tmp6 = closure_2_2;
                                        let obj2 = tmp19(closure_2_2[6]);
                                        c1 = 1;
                                        c0 = 1;
                                        let obj5 = {
                                          value: obj2.scheduleGuildEventEmbedFetch(function fetch() {
                                                      return obj(...arguments);
                                                    }),
                                          done: false
                                        };
                                        return obj5;
                                      }
                                    } else {
                                      let num3 = 1;
                                      if (arg0 === 1) {
                                        let num6 = 3;
                                        c0 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        let num5 = 3;
                                        c0 = 3;
                                        obj = { value, done: true };
                                        return obj;
                                      } else {
                                        let num4 = 3;
                                        c0 = 3;
                                        return { value: "IconComponent", done: "IconComponent" };
                                      }
                                    }
                                  } catch (tmp7) {
                                    c0 = 3;
                                    throw tmp7;
                                  }
                                }
                              }
                            })),
                  done: false
                };
                return obj5;
              }
            } else if (1 === tmp4) {
              c2 = 0;
            } else if (arg0 === 1) {
              let num3 = 3;
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              let num2 = 3;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp5 = tmp19;
              let tmp6 = tmp;
              let tmp7 = closure_1_6;
              let tmp8 = combined;
              if (null != closure_1_6[combined]) {
                let tmp25 = tmp19;
                let _Date2 = Date;
                if (Date.now() - closure_1_6[combined] < closure_1_9) {
                  let tmp31 = neededIds;
                }
              }
            }
            let num4 = 3;
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          } catch (tmp18) {
            tmp19 = c2;
            if (0 === c2) {
              let num8 = 3;
              c4 = 3;
              throw tmp18;
            } else {
              c3 = 1;
            }
          }
        }
      }
    })();
  }
  getGuildEventUsers(id, arg1, guild_id) {
    obj = GuildScheduledEventsActionCreatorsDefault;
    return obj.fetchUsersForGuildEvent(id, arg1, guild_id);
  }
  getGuildEventsForCurrentUser(arg0) {
    return getGuildEventsForCurrentUser(arg0);
  }
  handleConnectionOpen() {
    let self = this;
    return (async function(arg0, value) {
      let closure_0;
      let guildScheduledEventsForGuild2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        while (true) {
          let lastSelectedGuildId;
          c7 = 2;
          let tmp4 = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              lastSelectedGuildId = undefined;
              guildScheduledEventsForGuild = undefined;
              let clearResult = c7.clear();
              let clearResult1 = set1.clear();
              c6 = {};
              let clearResult2 = map.clear();
              let obj7 = _self(closure_2[5]);
              let result = obj7.forgetTransientGuildEventFetchFailures();
              lastSelectedGuildId = lastSelectedGuildId.getLastSelectedGuildId();
              if (null != lastSelectedGuildId) {
                guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(lastSelectedGuildId);
                _self = guildScheduledEventsForGuild[Symbol.iterator]();
              }
              c7 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else if (1 === tmp4) {
            guildScheduledEventsForGuild = 0;
            _self.return();
            throw lastSelectedGuildId;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              guildScheduledEventsForGuild = 0;
              _self.return();
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              let _Promise = Promise;
              let self = this;
              let self2 = this;
              let promise = new Promise((arg0) => setTimeout(arg0, 200 * Math.random() + 50));
              c6 = 3;
              c7 = 1;
              let obj5 = { value: promise, done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            guildScheduledEventsForGuild = 0;
            _self.return();
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            guildScheduledEventsForGuild = 0;
          }
          if (_self !== undefined) {
            guildScheduledEventsForGuild = tmp14;
            c6 = 2;
            c7 = 1;
            let obj6 = { value: closure_131_0.getGuildEventUserCounts(lastSelectedGuildId, guildScheduledEventsForGuild.id, []), done: false };
            return obj6;
          }
        }
      }
    })();
  }
  handleGuildUnavailable(guildId) {
    guildId = guildId.guildId;
    set.delete(guildId);
    set1.delete(guildId);
    delete closure_6[guildId];
  }
  handleGuildDelete(guild) {
    const id = guild.guild.id;
    set.delete(id);
    set1.delete(id);
    delete closure_6[id];
  }
  handleInviteResolveSuccess(invite) {
    invite = invite.invite;
    const guild = invite.guild;
    let id;
    const guild_scheduled_event = invite.guild_scheduled_event;
    if (guild != null) {
      id = guild.id;
    }
    const tmp2 = null != guild_scheduled_event && null != id;
    if (tmp2) {
      getGuildEventsForCurrentUser(id);
    }
  }
  handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let self = this;
    return (async function(arg0, value) {
      let closure_0;
      const f162214 = (arg0) => setTimeout(arg0, 200 * Math.random() + 50);
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        while (true) {
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let guildScheduledEventsForGuild = tmp;
              let closure_4 = tmp4;
              guildId = undefined;
              if (null != guildId) {
                guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(guildId);
                guildId = guildScheduledEventsForGuild[Symbol.iterator]();
              }
              c9 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else if (1 === tmp4) {
            let c6 = 0;
            guildId.return();
            throw set;
          } else {
            let closure_3;
            if (2 === tmp4) {
              closure_3 = set;
              c6 = 1;
              let _Promise3 = Promise;
              let self5 = this;
              let self6 = this;
              let promise = new Promise(f162214);
              c8 = 3;
              c9 = 1;
              let obj4 = { value: promise, done: false };
              return obj4;
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                guildId.return();
                c9 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                throw closure_3;
              }
            } else if (4 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 1;
                let _Promise2 = Promise;
                let self3 = this;
                let self4 = this;
                let promise3 = new Promise(f162214);
                c8 = 5;
                c9 = 1;
                let obj6 = { value: promise3, done: false };
                return obj6;
              } else {
                c6 = 1;
                let _Promise = Promise;
                self = this;
                let self2 = this;
                let promise4 = new Promise(f162214);
                c8 = 6;
                c9 = 1;
                let obj7 = { value: promise4, done: false };
                return obj7;
              }
            } else if (5 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                guildId.return();
                c9 = 3;
                let obj8 = { value, done: true };
                return obj8;
              } else {
                c6 = 0;
                guildId.return();
                c9 = 3;
                let obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              guildId.return();
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
          }
          if (guildId !== undefined) {
            guildId = tmp24;
            c6 = 2;
            c8 = 4;
            c9 = 1;
            let obj10 = { value: closure_133_1.getGuildEventUserCounts(closure_133_0, guildId.id, []), done: false };
            return obj10;
          }
        }
      }
    })();
  }
}
const prototype = GuildScheduledEventManager.prototype;
const guildScheduledEventManager = new GuildScheduledEventManager();
let result = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default guildScheduledEventManager;
export const MAX_EMBED_COUNT_RECURRENCES = 8;
