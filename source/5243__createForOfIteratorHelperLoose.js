// Module ID: 5243
// Function ID: 44384
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getBoosterMap, getGameProfileMatchTier

// Module 5243 (_createForOfIteratorHelperLoose)
let ChannelTypes;
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
function NOOP() {
  return true;
}
function calculateScore() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  let num2 = 1;
  const result = 1000 * num;
  if (null != arg1) {
    num2 = arg1;
  }
  return result * num2;
}
function getMatchValue(name, arg1, arg2) {
  let containQuery;
  let exactQuery;
  let queryLower;
  let flag = arg2;
  ({ exactQuery, containQuery, queryLower } = arg1);
  if (arg2 === undefined) {
    flag = true;
  }
  if (exactQuery.test(name)) {
    let num5 = 7;
    if (name.toLocaleLowerCase() === queryLower) {
      num5 = closure_48;
    }
    return num5;
  } else if (containQuery.test(name)) {
    return 5;
  } else if (function multiTokenMatch(queryLower, name) {
    const parts = queryLower.split(/(?:,| )+/);
    return parts.every((arg0) => {
      const regExp = new RegExp(callback(closure_3[33]).escape(arg0), "i");
      return regExp.test(arg1);
    });
  }(queryLower, name)) {
    return 3;
  } else if (flag) {
    if (importDefault(dependencyMap[34])(queryLower, name)) {
      return 1;
    }
  }
}
function isValidGuildMember(joinedAt) {
  joinedAt = undefined;
  if (null != joinedAt) {
    joinedAt = joinedAt.joinedAt;
  }
  return null != joinedAt && !joinedAt.isPending;
}
function stripAndNormalize(arg0) {
  if (null == arg0) {
    return [];
  } else {
    const stripDiacriticsResult = arg1(dependencyMap[35]).stripDiacritics(arg0);
    const items = [stripDiacriticsResult, ];
    const obj = arg1(dependencyMap[35]);
    items[1] = arg1(dependencyMap[35]).normalize(stripDiacriticsResult);
    return items;
  }
}
function queryMemberList(arg0) {
  let boosters;
  let filter;
  let limit;
  let members;
  let query;
  let str6;
  let str7;
  let str8;
  let str9;
  ({ query, members, limit, filter, boosters } = arg0);
  const users = authStore2.getUsers();
  const guildId = guildId.getGuildId();
  const toLocaleLowerCaseResult = query.toLocaleLowerCase();
  let obj = arg1(dependencyMap[35]);
  const normalizeResult = obj.normalize(toLocaleLowerCaseResult);
  const items = [];
  const items1 = [];
  let num = 0;
  let num2 = 0;
  if (0 < members.length) {
    do {
      let tmp19 = members[num];
      let tmp20 = closure_23;
      if (tmp19 instanceof closure_23) {
        let tmp23 = closure_29;
        let nick = closure_29.getNick(guildId, tmp19.id);
        let toLocaleLowerCaseResult1;
        if (null != nick) {
          toLocaleLowerCaseResult1 = nick.toLocaleLowerCase();
        }
        let str = toLocaleLowerCaseResult1;
        let tmp25 = nick;
        let tmp22 = tmp4;
        let tmp21 = tmp19;
      } else {
        nick = tmp19.nick;
        if (null != nick) {
          str = nick.toLocaleLowerCase();
        }
        tmp21 = users[tmp19.userId];
        tmp22 = nick;
      }
      let tmp26 = closure_1;
      let tmp27 = closure_3;
      let obj3 = closure_1(closure_3[36]);
      let globalName = obj3.getGlobalName(tmp21);
      let tmp28 = tmp21;
      if (null != globalName) {
        let str2 = globalName.toLocaleLowerCase();
      }
      let sum = num2;
      let tmp30 = tmp5;
      let tmp31 = tmp6;
      let tmp32 = tmp7;
      let tmp33 = tmp8;
      let tmp34 = tmp9;
      let tmp35 = tmp10;
      let tmp36 = tmp11;
      let tmp37 = tmp12;
      let tmp38 = tmp13;
      let tmp39 = tmp14;
      let tmp40 = tmp15;
      let tmp41 = tmp16;
      let tmp42 = tmp17;
      let tmp43 = tmp18;
      if (null != tmp21) {
        if (null == filter) {
          let username = tmp21.username;
          let str3 = username.toLocaleLowerCase();
          let tmp44 = closure_0;
          let tmp45 = closure_3;
          let obj5 = closure_0(closure_3[35]);
          let str4 = obj5.stripDiacritics(str3);
          let obj6 = closure_0(closure_3[35]);
          let str5 = obj6.normalize(str4);
          let tmp46 = closure_65;
          let tmp47 = closure_4;
          let tmp48 = closure_4(closure_65(str), 2);
          [str6, str7] = tmp48;
          let tmp49 = closure_4;
          let tmp50 = closure_4(closure_65(str2), 2);
          [str8, str9] = tmp50;
          if (!tmp) {
            let tmp51 = tmp5;
            if (str3.substring(0, toLocaleLowerCaseResult.length) !== toLocaleLowerCaseResult) {
              tmp51 = tmp5;
              if (str4.substring(0, toLocaleLowerCaseResult.length) !== toLocaleLowerCaseResult) {
                let substr;
                if (null != str) {
                  substr = str.substring(0, toLocaleLowerCaseResult.length);
                }
                tmp51 = str;
                if (substr !== toLocaleLowerCaseResult) {
                  let substr1;
                  if (null != str6) {
                    substr1 = str6.substring(0, toLocaleLowerCaseResult.length);
                  }
                  tmp51 = str;
                  if (substr1 !== toLocaleLowerCaseResult) {
                    let substr2;
                    if (null != str2) {
                      substr2 = str2.substring(0, toLocaleLowerCaseResult.length);
                    }
                    tmp51 = str;
                    if (substr2 !== toLocaleLowerCaseResult) {
                      let substr3;
                      if (null != str8) {
                        substr3 = str8.substring(0, toLocaleLowerCaseResult.length);
                      }
                      tmp51 = str;
                      if (substr3 !== toLocaleLowerCaseResult) {
                        if (str5.substring(0, normalizeResult.length) !== normalizeResult) {
                          let substr4;
                          if (null != str7) {
                            substr4 = str7.substring(0, normalizeResult.length);
                          }
                          if (substr4 !== normalizeResult) {
                            let substr5;
                            if (null != str9) {
                              substr5 = str9.substring(0, normalizeResult.length);
                            }
                            if (substr5 !== normalizeResult) {
                              sum = num2;
                              tmp30 = str;
                              tmp31 = tmp6;
                              tmp32 = tmp7;
                              tmp33 = str3;
                              tmp34 = str4;
                              tmp35 = str5;
                              tmp36 = str6;
                              tmp37 = str7;
                              tmp38 = str8;
                              tmp39 = str9;
                              tmp40 = tmp15;
                              tmp41 = tmp16;
                              tmp42 = tmp17;
                              tmp43 = tmp18;
                              if (num2 < 50) {
                                let tmp95 = closure_1;
                                let tmp96 = closure_3;
                                if (!closure_1(closure_3[34])(toLocaleLowerCaseResult, str4)) {
                                  let tmp58 = closure_1;
                                  let tmp59 = closure_3;
                                  if (!closure_1(closure_3[34])(normalizeResult, str5)) {
                                    if (null == str6) {
                                      if (null == str7) {
                                        if (null == str8) {
                                          sum = num2;
                                          tmp30 = str;
                                          tmp31 = tmp6;
                                          tmp32 = tmp7;
                                          tmp33 = str3;
                                          tmp34 = str4;
                                          tmp35 = str5;
                                          tmp36 = str6;
                                          tmp37 = str7;
                                          tmp38 = str8;
                                          tmp39 = str9;
                                          tmp40 = tmp15;
                                          tmp41 = tmp16;
                                          tmp42 = tmp17;
                                          tmp43 = tmp18;
                                          if (null != str9) {
                                            let tmp97 = closure_1;
                                            let tmp98 = closure_3;
                                            sum = num2;
                                            tmp30 = str;
                                            tmp31 = tmp6;
                                            tmp32 = tmp7;
                                            tmp33 = str3;
                                            tmp34 = str4;
                                            tmp35 = str5;
                                            tmp36 = str6;
                                            tmp37 = str7;
                                            tmp38 = str8;
                                            tmp39 = str9;
                                            tmp40 = tmp15;
                                            tmp41 = tmp16;
                                            tmp42 = tmp17;
                                            tmp43 = tmp18;
                                          }
                                        } else {
                                          let tmp64 = closure_1;
                                          let tmp65 = closure_3;
                                        }
                                      } else {
                                        let tmp62 = closure_1;
                                        let tmp63 = closure_3;
                                      }
                                    } else {
                                      let tmp60 = closure_1;
                                      let tmp61 = closure_3;
                                    }
                                  }
                                }
                                obj = {};
                                let tmp66 = closure_45;
                                obj.type = closure_45.USER;
                                obj.record = tmp21;
                                let tmp68;
                                let tmp67 = closure_62;
                                if (null != boosters) {
                                  tmp68 = boosters[tmp21.id];
                                }
                                obj.score = tmp67(1, tmp68);
                                let tmp69 = str;
                                if (null != str2) {
                                  tmp69 = str2;
                                }
                                let tmp70 = str3;
                                if (null != tmp69) {
                                  tmp70 = tmp69;
                                }
                                obj.comparator = tmp70;
                                let tmp71 = str6;
                                if (null != str8) {
                                  tmp71 = str8;
                                }
                                let tmp72 = str4;
                                if (null != tmp71) {
                                  tmp72 = tmp71;
                                }
                                obj.sortable = tmp72;
                                let arr = items1.push(obj);
                                sum = num2 + 1;
                                tmp30 = str;
                                tmp31 = tmp6;
                                tmp32 = tmp7;
                                tmp33 = str3;
                                tmp34 = str4;
                                tmp35 = str5;
                                tmp36 = str6;
                                tmp37 = str7;
                                tmp38 = str8;
                                tmp39 = str9;
                                tmp40 = tmp15;
                                tmp41 = tmp16;
                                tmp42 = tmp69;
                                tmp43 = tmp71;
                              }
                            }
                          }
                        }
                        obj = {};
                        let tmp74 = closure_45;
                        obj.type = closure_45.USER;
                        obj.record = tmp21;
                        let tmp76;
                        let tmp75 = closure_62;
                        if (null != boosters) {
                          tmp76 = boosters[tmp21.id];
                        }
                        obj.score = tmp75(1, tmp76);
                        let tmp77 = str;
                        if (null != str2) {
                          tmp77 = str2;
                        }
                        let tmp78 = str3;
                        if (null != tmp77) {
                          tmp78 = tmp77;
                        }
                        obj.comparator = tmp78;
                        let tmp79 = str6;
                        if (null != str8) {
                          tmp79 = str8;
                        }
                        let tmp80 = str4;
                        if (null != tmp79) {
                          tmp80 = tmp79;
                        }
                        obj.sortable = tmp80;
                        arr = items.push(obj);
                        sum = num2;
                        tmp30 = str;
                        tmp31 = tmp6;
                        tmp32 = tmp7;
                        tmp33 = str3;
                        tmp34 = str4;
                        tmp35 = str5;
                        tmp36 = str6;
                        tmp37 = str7;
                        tmp38 = str8;
                        tmp39 = str9;
                        tmp40 = tmp77;
                        tmp41 = tmp79;
                        tmp42 = tmp17;
                        tmp43 = tmp18;
                      }
                    }
                  }
                }
              }
            }
          } else {
            tmp51 = tmp5;
          }
          let obj1 = {};
          let tmp82 = closure_45;
          obj1.type = closure_45.USER;
          obj1.record = tmp21;
          let tmp85;
          let tmp83 = closure_62;
          let tmp84 = closure_48;
          if (null != boosters) {
            tmp85 = boosters[tmp21.id];
          }
          obj1.score = tmp83(tmp84, tmp85);
          if (null != str2) {
            str = str2;
          }
          let tmp86 = str3;
          if (null != str) {
            tmp86 = str;
          }
          obj1.comparator = tmp86;
          let tmp87 = str6;
          if (null != str8) {
            tmp87 = str8;
          }
          let tmp88 = str4;
          if (null != tmp87) {
            tmp88 = tmp87;
          }
          obj1.sortable = tmp88;
          let arr1 = items.push(obj1);
          sum = num2;
          tmp30 = tmp51;
          tmp31 = str;
          tmp32 = tmp87;
          tmp33 = str3;
          tmp34 = str4;
          tmp35 = str5;
          tmp36 = str6;
          tmp37 = str7;
          tmp38 = str8;
          tmp39 = str9;
          tmp40 = tmp15;
          tmp41 = tmp16;
          tmp42 = tmp17;
          tmp43 = tmp18;
        } else {
          sum = num2;
          tmp30 = tmp5;
          tmp31 = tmp6;
          tmp32 = tmp7;
          tmp33 = tmp8;
          tmp34 = tmp9;
          tmp35 = tmp10;
          tmp36 = tmp11;
          tmp37 = tmp12;
          tmp38 = tmp13;
          tmp39 = tmp14;
          tmp40 = tmp15;
          tmp41 = tmp16;
          tmp42 = tmp17;
          tmp43 = tmp18;
        }
      }
      num = num + 1;
      num2 = sum;
      let tmp5 = tmp30;
      let tmp6 = tmp31;
      let tmp7 = tmp32;
      let tmp8 = tmp33;
      let tmp9 = tmp34;
      let tmp10 = tmp35;
      let tmp11 = tmp36;
      let tmp12 = tmp37;
      let tmp13 = tmp38;
      let tmp14 = tmp39;
      let tmp15 = tmp40;
      let tmp16 = tmp41;
      let tmp17 = tmp42;
      let tmp18 = tmp43;
      let tmp4 = tmp22;
    } while (num < length);
  }
  const sorted = items.sort(importDefault(dependencyMap[37]));
  let combined = items;
  if (items.length < limit) {
    const sorted1 = items1.sort(importDefault(dependencyMap[37]));
    const _Math = Math;
    combined = items.concat(items1.slice(0, Math.max(0, limit - items.length)));
  }
  if (combined.length > limit) {
    combined.length = limit;
  }
  return combined;
}
function getPriorityForStickerMetadataType(arg0) {
  if (arg1(dependencyMap[38]).StickerMetadataTypes.STICKER_NAME === arg0) {
    return 11;
  } else if (arg1(dependencyMap[38]).StickerMetadataTypes.CORRELATED_EMOJI === arg0) {
    return 6;
  } else if (arg1(dependencyMap[38]).StickerMetadataTypes.TAG === arg0) {
    return 1;
  } else {
    if (arg1(dependencyMap[38]).StickerMetadataTypes.GUILD_NAME !== arg0) {
      if (arg1(dependencyMap[38]).StickerMetadataTypes.PACK_NAME !== arg0) {
        return 1;
      }
    }
    return 8;
  }
}
function isPartialTypeMatch(type, type2) {
  let tmp = type === GUILD_SELECTABLE_CHANNELS_KEY;
  if (tmp) {
    tmp = callback4(type2);
  }
  return tmp;
}
function getBestScore(toLocaleLowerCaseResult, items1, flag) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(items1);
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let tmp2 = null;
  let num2 = 0;
  let tmp3 = null;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp4 = closure_63;
      let tmp5 = closure_63(toLocaleLowerCaseResult, value, flag);
      if (tmp5 > num) {
        num = tmp5;
        tmp2 = value;
      }
      iter3 = tmp();
      iter2 = iter3;
      num2 = num;
      tmp3 = tmp2;
    } while (!iter3.done);
  }
  if (null != tmp3) {
    if (tmp3.isFullMatch) {
      items1.length = 0;
    } else {
      items1.splice(items1.indexOf(tmp3), 1);
    }
  }
  return num2;
}
function getGuildName(value, arg1) {
  if (null != value.guild_id) {
    let tmp = arg1[value.guild_id];
    if (null == tmp) {
      const guild = store4.getGuild(value.guild_id);
      let toLocaleLowerCaseResult;
      if (null != guild) {
        const name = guild.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[value.guild_id] = toLocaleLowerCaseResult;
      tmp = toLocaleLowerCaseResult;
    }
    return tmp;
  }
}
function getCategoryName(value, arg1) {
  if (null != value.parent_id) {
    let tmp = arg1[value.parent_id];
    if (null == tmp) {
      const channel = authStore.getChannel(value.parent_id);
      let toLocaleLowerCaseResult;
      if (null != channel) {
        const name = channel.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
      }
      arg1[value.parent_id] = toLocaleLowerCaseResult;
      tmp = toLocaleLowerCaseResult;
    }
    return tmp;
  }
}
function getRecentlyTalked(channelId, limit) {
  const channel = authStore.getChannel(channelId);
  limit = channel;
  if (null != channelId) {
    if (null != channel) {
      const messages = messages.getMessages(channelId);
      const tmp5 = importDefault(dependencyMap[39]);
      const reversed = importDefault(dependencyMap[39])(messages.toArray()).reverse();
      const tmp5Result = importDefault(dependencyMap[39])(messages.toArray());
      const mapped = reversed.uniqBy((author) => author.author.id).map((author) => user.getUser(author.author.id));
      const found = mapped.filter((isNonUserBot) => {
        if (null == isNonUserBot) {
          return false;
        } else if (isNonUserBot.isNonUserBot()) {
          return false;
        } else {
          const guildId = channel.getGuildId();
          let tmp3 = null == guildId;
          if (!tmp3) {
            tmp3 = callback2(store.getMember(guildId, isNonUserBot.id));
          }
          return tmp3;
        }
      });
      const mapped1 = found.map((id) => {
        const guildId = channel.getGuildId();
        let member = null;
        if (null != guildId) {
          member = store.getMember(guildId, id.id);
        }
        const obj = { type: constants.USER, record: id, score: 0 };
        let nick;
        if (null != member) {
          nick = member.nick;
        }
        if (null == nick) {
          nick = callback(closure_3[36]).getName(id);
          const obj2 = callback(closure_3[36]);
        }
        obj.comparator = nick;
        return obj;
      });
      const uniqByResult = reversed.uniqBy((author) => author.author.id);
      mapped1.take(limit).value();
      const iter = mapped1.take(limit);
    }
    return [];
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ InAppNavigationRecord: closure_7, InAppNavigationType: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
const tmp2 = arg1(dependencyMap[3]);
({ ChannelRecordBase: closure_15, isGuildChannelType: closure_16, isGuildSelectableChannelType: closure_17, isGuildVocalChannelType: closure_18, isThread: closure_19, PrivateChannelRecord: closure_20, UnknownChannelRecord: closure_21 } = arg1(dependencyMap[10]));
const isEveryoneRole = arg1(dependencyMap[11]).isEveryoneRole;
let closure_23 = importDefault(dependencyMap[12]);
let closure_24 = importDefault(dependencyMap[13]);
let closure_25 = importDefault(dependencyMap[14]);
const tmp4 = arg1(dependencyMap[15]);
const GUILD_SELECTABLE_CHANNELS_KEY = tmp4.GUILD_SELECTABLE_CHANNELS_KEY;
const GUILD_VOCAL_CHANNELS_KEY = tmp4.GUILD_VOCAL_CHANNELS_KEY;
let closure_28 = importDefault(dependencyMap[15]);
let closure_29 = importDefault(dependencyMap[16]);
let closure_30 = importDefault(dependencyMap[17]);
let closure_31 = importDefault(dependencyMap[18]);
let closure_32 = importDefault(dependencyMap[19]);
let closure_33 = importDefault(dependencyMap[20]);
let closure_34 = importDefault(dependencyMap[21]);
let closure_35 = importDefault(dependencyMap[22]);
let closure_36 = importDefault(dependencyMap[23]);
let closure_37 = importDefault(dependencyMap[24]);
let closure_38 = importDefault(dependencyMap[25]);
let closure_39 = importDefault(dependencyMap[26]);
const tmp5 = arg1(dependencyMap[27]);
({ Permissions: closure_40, GuildFeatures: closure_41, ChannelTypes } = tmp5);
({ SKUTypes: closure_43, MAX_AUTOCOMPLETE_RESULTS: closure_44 } = tmp5);
arg1(dependencyMap[28]).AutocompleterResultTypes;
const StaticChannelId = arg1(dependencyMap[29]).StaticChannelId;
let importDefaultResult = importDefault(dependencyMap[30]);
importDefaultResult = new importDefaultResult("AutocompleteUtils");
let closure_48 = 10;
const tmp8 = /(\t|\s)/;
let closure_50 = [];
const MENTION_EVERYONE = arg1(dependencyMap[31]).default.MENTION_EVERYONE;
const MENTION_HERE = arg1(dependencyMap[31]).default.MENTION_HERE;
const MENTION_GAME = arg1(dependencyMap[31]).default.MENTION_GAME;
const MENTION_TIMESTAMP = arg1(dependencyMap[31]).default.MENTION_TIMESTAMP;
const LAUNCHABLE_APPLICATIONS = arg1(dependencyMap[31]).default.LAUNCHABLE_APPLICATIONS;
let tmp9 = () => {
  class AutocompleteBoostersCache {
    constructor() {
      tmp = closure_5(this, AutocompleteBoostersCache);
      this.lastFrecencyVersion = null;
      this.lastRelationshipVersion = null;
      this.lastPrivateChannelsVersion = null;
      map = new Map();
      this.cache = map;
      return;
    }
  }
  const arg1 = AutocompleteBoostersCache;
  let obj = {
    key: "get",
    value(arg0) {
      const self = this;
      if (this.isStale()) {
        const cache = self.cache;
        cache.clear();
      }
      const cache2 = self.cache;
      const value = cache2.get(arg0);
      if (null != value) {
        return value;
      } else {
        const buildResult = self.build(arg0);
        const cache3 = self.cache;
        const result = cache3.set(arg0, buildResult);
        return buildResult;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isStale",
    value() {
      const self = this;
      const version = store.getVersion();
      const version1 = store2.getVersion();
      const privateChannelsVersion = authStore.getPrivateChannelsVersion();
      let flag = this.lastFrecencyVersion !== version || self.lastRelationshipVersion !== version1 || self.lastPrivateChannelsVersion !== privateChannelsVersion;
      if (flag) {
        self.lastFrecencyVersion = version;
        self.lastRelationshipVersion = version1;
        self.lastPrivateChannelsVersion = privateChannelsVersion;
        flag = true;
      }
      return flag;
    }
  };
  items[1] = obj;
  obj = {
    key: "build",
    value(arg0) {
      let iter7;
      let iter9;
      const frequentlyWithoutFetchingLatest = store.getFrequentlyWithoutFetchingLatest();
      const reduced = frequentlyWithoutFetchingLatest.reduce((arg0, id) => {
        let tmp = arg0;
        const scoreWithoutFetchingLatest = scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id);
        if (scoreWithoutFetchingLatest > arg0) {
          tmp = scoreWithoutFetchingLatest;
        }
        return tmp;
      }, 0);
      if (constants2.GUILD === arg0) {
        let found = frequentlyWithoutFetchingLatest.filter((guild) => callback(closure_3[32]).isGuildRecord(guild));
      } else if (constants2.USER === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((type) => {
          let tmp = type instanceof closure_15;
          if (tmp) {
            tmp = type.type === constants.DM;
          }
          return tmp;
        });
      } else if (constants2.GROUP_DM === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((isMultiUserDM) => isMultiUserDM instanceof closure_15 && isMultiUserDM.isMultiUserDM());
      } else if (constants2.TEXT_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((type) => {
          let tmp = type instanceof closure_15;
          if (tmp) {
            tmp = callback2(type.type);
          }
          return tmp;
        });
      } else if (constants2.VOICE_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((isGuildVocal) => isGuildVocal instanceof closure_15 && isGuildVocal.isGuildVocal());
      }
      const obj = {};
      const tmp6 = callback2([]);
      const iter = tmp6();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          let id = value.id;
          let tmp10 = store;
          let scoreWithoutFetchingLatest = store.getScoreWithoutFetchingLatest(id);
          let tmp12 = constants2;
          if (arg0 === constants2.USER) {
            let tmp13 = closure_20;
            if (value instanceof closure_20) {
              let type = value.type;
              let tmp17 = constants;
              if (constants.DM === type) {
                obj[value.getRecipientId()] = 1 + scoreWithoutFetchingLatest / reduced;
                let tmp14 = tmp7;
                let tmp15 = tmp8;
                let tmp16 = tmp9;
              } else {
                let tmp23 = constants;
                tmp14 = tmp7;
                tmp15 = tmp8;
                tmp16 = tmp9;
                if (constants.GROUP_DM === type) {
                  let length = value.recipients.length;
                  let tmp24 = callback2;
                  let tmp25 = callback2(value.recipients);
                  let iter10 = tmp25();
                  let iter4 = iter10;
                  tmp14 = iter10;
                  tmp15 = length;
                  tmp16 = tmp25;
                  if (!iter10.done) {
                    obj[iter4.value] = 1 + scoreWithoutFetchingLatest / reduced * (1 / length);
                    let iter3 = tmp25();
                    iter4 = iter3;
                    tmp14 = iter3;
                    tmp15 = length;
                    tmp16 = tmp25;
                  }
                }
              }
              let iter5 = tmp6();
              let tmp7 = tmp14;
              let tmp8 = tmp15;
              let tmp9 = tmp16;
              iter2 = iter5;
              if (iter5.done) {
                break;
              }
            }
          }
          obj[id] = 1 + scoreWithoutFetchingLatest / reduced;
          tmp14 = tmp7;
          tmp15 = tmp8;
          tmp16 = tmp9;
        }
      }
      const tmp18 = callback2(store2.getFriendIDs());
      let iter6 = tmp18();
      if (!iter6.done) {
        do {
          value = iter6.value;
          let tmp19 = obj[value];
          let num = 1;
          if (null != tmp19) {
            num = tmp19;
          }
          obj[value] = num + 0.2;
          iter7 = tmp18();
          iter6 = iter7;
        } while (!iter7.done);
      }
      const tmp20 = callback2(authStore.getDMUserIds());
      let iter8 = tmp20();
      if (!iter8.done) {
        do {
          value = iter8.value;
          let tmp21 = obj[value];
          let num2 = 1;
          if (null != tmp21) {
            num2 = tmp21;
          }
          obj[value] = num2 + 0.1;
          iter9 = tmp20();
          iter8 = iter9;
        } while (!iter9.done);
      }
      return obj;
    }
  };
  items[2] = obj;
  return callback(AutocompleteBoostersCache, items);
}();
tmp9 = new tmp9();
const items = [GUILD_SELECTABLE_CHANNELS_KEY, GUILD_VOCAL_CHANNELS_KEY, ChannelTypes.GUILD_CATEGORY];
let obj = arg1(dependencyMap[40]);
let closure_58 = obj.cachedFunction(() => {
  const channelsByRecipientId = new Map();
  const arg1 = channelsByRecipientId;
  const recipientsById = new Map();
  const importDefault = recipientsById;
  const recipients = [];
  const importAll = recipients;
  const tmp3 = importDefault(dependencyMap[39]);
  const tmp3Result = importDefault(dependencyMap[39])(authStore.getMutablePrivateChannels());
  const iter = importDefault(dependencyMap[39])(authStore.getMutablePrivateChannels()).values();
  const item = importDefault(dependencyMap[39])(authStore.getMutablePrivateChannels()).values().value().forEach((isDM) => {
    if (isDM.isDM()) {
      const recipientId = isDM.getRecipientId();
      const user = user.getUser(recipientId);
      let hasItem = null == recipientId || null == user;
      if (!hasItem) {
        hasItem = channelsByRecipientId.has(recipientId);
      }
      if (!hasItem) {
        const result = channelsByRecipientId.set(recipientId, isDM);
        const obj = { userId: recipientId, nick: nickname.getNickname(recipientId) };
        recipients.push(obj);
        const result1 = recipientsById.set(recipientId, user);
      }
    }
  });
  return { channelsByRecipientId, recipientsById, recipients };
});
obj = {
  queryFriends(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query };
    const friendIDs = store5.getFriendIDs();
    const mapped = friendIDs.map((arg0) => user.getUser(arg0));
    obj.members = mapped.filter(arg1(dependencyMap[41]).isNotNullish);
    obj.limit = num;
    obj.filter = limit.filter;
    return queryMemberList(obj);
  },
  queryDMUsers(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query };
    const dMUserIds = authStore.getDMUserIds();
    const mapped = dMUserIds.map((arg0) => user.getUser(arg0));
    obj.members = mapped.filter(arg1(dependencyMap[41]).isNotNullish);
    obj.limit = num;
    obj.filter = limit.filter;
    return queryMemberList(obj);
  },
  queryChannelUsers(request) {
    let limit;
    let query;
    ({ query, limit } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = request.checkRecentlyTalkedOnEmptyQuery;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = request.allowSnowflake;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let arg1;
    const channel = authStore.getChannel(request.channelId);
    if (null == channel) {
      return [];
    } else {
      let channel1 = null;
      if (channel.isThread()) {
        channel1 = authStore.getChannel(channel.parent_id);
      }
      let obj2 = channel;
      if (null != channel1) {
        obj2 = channel1;
      }
      arg1 = obj2;
      if (null == obj2) {
        return [];
      } else {
        if (obj2.isPrivate()) {
          const recipients = obj2.recipients;
          const mapped = recipients.map((userId) => {
            const obj = { userId };
            const nickname = nickname.getNickname(userId);
            let tmp2 = null;
            if (null != nickname) {
              tmp2 = nickname;
            }
            obj.nick = tmp2;
            return obj;
          });
          const currentUser = authStore2.getCurrentUser();
          let tmp7 = mapped;
          if (null != currentUser) {
            let obj = { userId: currentUser.id, nick: null };
            let arr = mapped.push(obj);
            tmp7 = mapped;
          }
        } else {
          if (0 === query.length) {
            if (flag2) {
              arr = getRecentlyTalked(channel.id, limit);
              if (arr.length > 0) {
                return arr;
              }
            }
          }
          const members = store2.getMembers(obj2.guild_id);
          const found = members.filter(isValidGuildMember);
          tmp7 = found;
          if (flag) {
            const members1 = importDefault(dependencyMap[42]).requestMembers(obj2.guild_id, query, limit);
            tmp7 = found;
            const obj3 = importDefault(dependencyMap[42]);
          }
        }
        obj = {
          query,
          members: tmp7,
          limit,
          filter(user) {
                let isPrivateResult = obj2.isPrivate();
                if (!isPrivateResult) {
                  let obj = callback(closure_3[43]);
                  obj = { permission: constants.VIEW_CHANNEL, user, context: obj2 };
                  isPrivateResult = obj.can(obj);
                }
                return isPrivateResult;
              },
          allowSnowflake: flag3
        };
        return queryMemberList(obj);
      }
    }
  },
  queryGuildUsers(request) {
    let allowSnowflake;
    let filter;
    let guildId;
    let limit;
    let query;
    ({ guildId, query, limit } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = request.checkRecentlyTalkedOnEmptyQuery;
    if (flag2 === undefined) {
      flag2 = true;
    }
    ({ filter, allowSnowflake } = request);
    if (null == store4.getGuild(guildId)) {
      return [];
    } else {
      if (0 === query.length) {
        if (flag2) {
          const arr = getRecentlyTalked(channelId.getChannelId(guildId), limit);
          if (arr.length > 0) {
            return arr;
          }
        }
      }
      const members = store2.getMembers(guildId);
      const found = members.filter(isValidGuildMember);
      if (flag) {
        flag = query.length > 0;
      }
      if (flag) {
        let obj = importDefault(dependencyMap[42]);
        const members1 = obj.requestMembers(guildId, query, limit);
      }
      obj = { query, members: found, limit, filter, allowSnowflake };
      return queryMemberList(obj);
    }
  },
  queryUsers(query, arg1, _limit) {
    let boosters;
    let filter;
    let num = query.limit;
    ({ query, filter, boosters } = query);
    if (num === undefined) {
      num = 10;
    }
    const obj = { query, members: query.users, limit: num, filter, allowSnowflake: query.allowSnowflake, boosters };
    return queryMemberList(obj);
  },
  queryAllUsers(request) {
    let boosters;
    let filter;
    let limit;
    let query;
    const self = this;
    ({ query, limit } = request);
    ({ filter, boosters } = request);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = request.request;
    if (flag === undefined) {
      flag = true;
    }
    let tmp = flag;
    if (flag) {
      tmp = query.length > 0;
    }
    if (tmp) {
      let obj = importDefault(dependencyMap[42]);
      const members = obj.requestMembers(null, query, limit);
    }
    obj = { query, limit, request: flag, filter, boosters };
    const tmp6 = importDefault(dependencyMap[39]);
    const tmp6Result = importDefault(dependencyMap[39])(authStore2.getUsers());
    obj.users = importDefault(dependencyMap[39])(authStore2.getUsers()).values().value();
    return self.queryUsers(obj);
  },
  queryChannels(fuzzy) {
    let allowSnowflake;
    let bound;
    let guildId;
    let includeAllThreads;
    let limit;
    let query;
    let tmp33;
    let tmp34;
    let tmp66;
    let tmp79;
    let tmp80;
    let toLocaleLowerCaseResult;
    let value;
    ({ query, guildId, limit } = fuzzy);
    if (limit === undefined) {
      limit = closure_44;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    let type = fuzzy.type;
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    let flag2 = fuzzy.allowEmptyQueries;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = fuzzy.requireVocalConnectAccess;
    if (flag3 === undefined) {
      flag3 = true;
    }
    let boosters = fuzzy.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    ({ allowSnowflake, includeAllThreads } = fuzzy);
    let sorted = function getSeparatedQueries(query, flag2) {
      let flag = flag2;
      if (flag2 === undefined) {
        flag = false;
      }
      const parts = query.split(" ");
      const found = parts.filter((arg0) => "" !== arg0 || flag);
      const mapped = found.map((toLocaleLowerCase) => {
        const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
        const obj = { queryLower: toLocaleLowerCaseResult };
        const regExp = new RegExp("^" + callback(closure_3[33]).escape(toLocaleLowerCaseResult), "i");
        obj.exactQuery = regExp;
        const obj2 = callback(closure_3[33]);
        const regExp1 = new RegExp(callback(closure_3[33]).escape(toLocaleLowerCaseResult), "i");
        obj.containQuery = regExp1;
        obj.isFullMatch = false;
        return obj;
      });
      if (query.includes(" ")) {
        const toLocaleLowerCaseResult = query.toLocaleLowerCase();
        const obj = { queryLower: toLocaleLowerCaseResult };
        const _RegExp = RegExp;
        const obj2 = callback(closure_3[33]);
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + callback(closure_3[33]).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.exactQuery = regExp;
        const _RegExp2 = RegExp;
        const str = callback(closure_3[33]).escape(toLocaleLowerCaseResult);
        const obj3 = callback(closure_3[33]);
        const regExp1 = new RegExp(callback(closure_3[33]).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.containQuery = regExp1;
        obj.isFullMatch = true;
        mapped.unshift(obj);
        const str6 = callback(closure_3[33]).escape(toLocaleLowerCaseResult);
      }
      return mapped;
    }(query, flag2);
    let tmp2 = type === GUILD_SELECTABLE_CHANNELS_KEY;
    if (!tmp2) {
      let tmp4 = type !== GUILD_VOCAL_CHANNELS_KEY;
      if (tmp4) {
        tmp4 = callback5(type);
      }
      tmp2 = tmp4;
    }
    if (null != guildId) {
      const tmp14 = importDefault(dependencyMap[39]);
      const mapped = importDefault(dependencyMap[39])(channels.getChannels(guildId)[type]).map((channel) => channel.channel);
      if (!tmp2) {
        let valueResult = tmp17([]).value();
        const iter2 = tmp17([]);
      }
      if (includeAllThreads) {
        let allThreadsForGuild = authStore.getAllThreadsForGuild(guildId);
      } else {
        allThreadsForGuild = closure_13.computeAllActiveJoinedThreads(guildId);
      }
      const tmp14Result = importDefault(dependencyMap[39])(channels.getChannels(guildId)[type]);
    } else {
      const tmp8 = importDefault(dependencyMap[39]);
      const values = importDefault(dependencyMap[39])(authStore.loadAllGuildAndPrivateChannelsFromDisk()).values();
      if (tmp2) {
        let allActiveJoinedThreads = closure_13.computeAllActiveJoinedThreads();
      } else {
        allActiveJoinedThreads = [];
      }
      const tmp8Result = importDefault(dependencyMap[39])(authStore.loadAllGuildAndPrivateChannelsFromDisk());
      let obj = {};
      const items = [];
      valueResult = values.concat(allActiveJoinedThreads).value();
      const maxScore = store.getMaxScore();
      const tmp26 = _createForOfIteratorHelperLoose(valueResult);
      const iter3 = tmp26();
      let iter4 = iter3;
      if (!iter3.done) {
        while (true) {
          value = iter4.value;
          let type2 = value.type;
          if (type === type2) {
            let tmp55 = callback2;
            if (!callback2(value.type)) {
              let tmp39 = tmp28;
              let tmp40 = tmp29;
              let tmp41 = tmp30;
              let tmp42 = tmp31;
              let tmp43 = tmp32;
              let tmp44 = tmp33;
              let tmp45 = tmp34;
              let tmp46 = tmp35;
              let tmp47 = tmp36;
              if (filter(value)) {
                let items1 = [];
                let tmp58 = items1;
                let tmp59 = sorted;
                let num11 = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(sorted, 0);
                let tmp61 = arg1;
                let tmp62 = dependencyMap;
                let obj5 = arg1(dependencyMap[44]);
                let tmp63 = closure_38;
                let tmp64 = closure_35;
                let channelName = obj5.computeChannelName(value, closure_38, closure_35);
                toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
                tmp66 = allowSnowflake;
                if (allowSnowflake) {
                  tmp66 = query === value.id;
                }
                if (tmp66) {
                  let tmp68 = closure_48;
                } else {
                  let tmp67 = getBestScore;
                  tmp68 = getBestScore(toLocaleLowerCaseResult, items1, flag);
                }
                tmp39 = tmp28;
                tmp40 = items1;
                tmp41 = toLocaleLowerCaseResult;
                tmp42 = tmp66;
                tmp44 = tmp33;
                tmp45 = tmp34;
                tmp46 = tmp35;
                tmp47 = tmp36;
                tmp43 = tmp68;
                if (0 !== tmp68) {
                  bound = tmp68;
                  tmp79 = tmp35;
                  tmp80 = tmp36;
                  if (items1.length > 0) {
                    sorted = getGuildName;
                    let items2 = [getGuildName(value, obj), ];
                    sorted = getCategoryName;
                    items2[1] = getCategoryName(value, obj);
                    let tmp74 = tmp68;
                    let num12 = 0;
                    let tmp75 = tmp36;
                    let tmp76 = tmp68;
                    let num13 = 0;
                    let tmp77 = tmp36;
                    if (0 < items2.length) {
                      do {
                        let tmp69 = items2[num12];
                        let sum = tmp74;
                        let tmp71 = tmp75;
                        if (null != tmp69) {
                          sum = tmp74;
                          tmp71 = tmp75;
                          if ("" !== tmp69) {
                            let tmp72 = closure_69;
                            let tmp73 = closure_69(tmp69, items1, false);
                            sum = tmp74;
                            tmp71 = tmp73;
                            if (0 !== tmp73) {
                              sum = tmp74 + 0.5 * tmp73;
                              tmp71 = tmp73;
                            }
                          }
                        }
                        num12 = num12 + 1;
                        tmp74 = sum;
                        tmp75 = tmp71;
                        tmp76 = sum;
                        let tmp35 = tmp69;
                        tmp77 = tmp71;
                        num13 = num12;
                      } while (num12 < items2.length);
                    }
                    let _Math = Math;
                    bound = Math.min(6, tmp76);
                    tmp33 = num13;
                    tmp79 = tmp35;
                    tmp80 = tmp77;
                    tmp34 = items2;
                  }
                  tmp39 = tmp28;
                  tmp40 = items1;
                  tmp41 = toLocaleLowerCaseResult;
                  tmp42 = tmp66;
                  tmp44 = tmp33;
                  tmp45 = tmp34;
                  tmp46 = tmp79;
                  tmp47 = tmp80;
                  tmp43 = bound;
                  if (0 !== bound) {
                    tmp39 = tmp28;
                    tmp40 = items1;
                    tmp41 = toLocaleLowerCaseResult;
                    tmp42 = tmp66;
                    tmp43 = bound;
                    tmp44 = tmp33;
                    tmp45 = tmp34;
                    tmp46 = tmp79;
                    tmp47 = tmp80;
                    if (items1.length <= 1) {
                      if (1 !== items1.length) {
                        break;
                      } else if (items1[0].isFullMatch) {
                        break;
                      } else {
                        tmp39 = tmp28;
                        tmp40 = items1;
                        tmp41 = toLocaleLowerCaseResult;
                        tmp42 = tmp66;
                        tmp43 = bound;
                        tmp44 = tmp33;
                        tmp45 = tmp34;
                        tmp46 = tmp79;
                        tmp47 = tmp80;
                        if (tmp66) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              let tmp56 = closure_33;
              if (flag3) {
                let VIEW_CHANNEL = value.accessPermissions;
              } else {
                let tmp57 = constants2;
                VIEW_CHANNEL = constants2.VIEW_CHANNEL;
              }
              tmp39 = tmp28;
              tmp40 = tmp29;
              tmp41 = tmp30;
              tmp42 = tmp31;
              tmp43 = tmp32;
              tmp44 = tmp33;
              tmp45 = tmp34;
              tmp46 = tmp35;
              tmp47 = tmp36;
            }
          } else if (tmp37) {
            let tmp48 = GUILD_SELECTABLE_CHANNELS_KEY;
            if (type === GUILD_SELECTABLE_CHANNELS_KEY) {
              let tmp52 = callback3;
              let tmp53 = callback3(type2);
              if (!tmp53) {
                let tmp54 = callback4;
                tmp53 = callback4(type2);
              }
              let tmp50 = tmp53;
            } else {
              let tmp49 = GUILD_VOCAL_CHANNELS_KEY;
              tmp50 = type === GUILD_VOCAL_CHANNELS_KEY;
              if (tmp50) {
                let tmp51 = callback4;
                tmp50 = callback4(type2);
              }
            }
            tmp39 = tmp28;
            tmp40 = tmp29;
            tmp41 = tmp30;
            tmp42 = tmp31;
            tmp43 = tmp32;
            tmp44 = tmp33;
            tmp45 = tmp34;
            tmp46 = tmp35;
            tmp47 = tmp36;
          } else {
            let tmp38 = callback2;
            tmp39 = tmp28;
            tmp40 = tmp29;
            tmp41 = tmp30;
            tmp42 = tmp31;
            tmp43 = tmp32;
            tmp44 = tmp33;
            tmp45 = tmp34;
            tmp46 = tmp35;
            tmp47 = tmp36;
          }
          let iter5 = tmp26();
          let tmp28 = tmp39;
          let tmp29 = tmp40;
          let tmp30 = tmp41;
          let tmp31 = tmp42;
          let tmp32 = tmp43;
          tmp33 = tmp44;
          tmp34 = tmp45;
          tmp35 = tmp46;
          let tmp36 = tmp47;
          iter4 = iter5;
        }
        let bound1 = bound;
        if (isPartialTypeMatch(type, value.type)) {
          const _Math2 = Math;
          bound1 = Math.max(bound - 1, 0.5);
        }
        let tmp83 = bound1;
        if (value.isThread()) {
          let diff = bound1;
          if (!value.isActiveThread()) {
            diff = bound1 - 3;
          }
          let diff1 = diff;
          if (!closure_14.hasJoined(value.id)) {
            diff1 = diff - 5;
          }
          tmp83 = diff1;
        }
        const scoreWithoutFetchingLatest = store.getScoreWithoutFetchingLatest(value.id);
        let result = scoreWithoutFetchingLatest;
        if (null == scoreWithoutFetchingLatest) {
          result = 0 / maxScore;
        }
        let num14 = 7;
        const sum1 = tmp83 + 3 * Math.min(result, 1);
        if (tmp83 >= 7) {
          num14 = closure_48;
        }
        const bound2 = Math.min(sum1, num14);
        obj = {};
        let tmp93 = AutocompleterResultTypes;
        obj.type = callback4(value.type) ? tmp93.VOICE_CHANNEL : tmp93.TEXT_CHANNEL;
        obj.record = value;
        obj.score = calculateScore(bound2, boosters[value.id]);
        tmp93 = closure_38;
        obj.comparator = arg1(dependencyMap[44]).computeChannelName(value, closure_38, closure_35);
        obj.sortable = toLocaleLowerCaseResult;
        obj = items.push(obj);
        sorted = toLocaleLowerCaseResult;
        sorted = tmp66;
        sorted = bound2;
        sorted = tmp33;
        sorted = tmp34;
        sorted = tmp79;
        sorted = tmp80;
        const obj8 = arg1(dependencyMap[44]);
      }
      sorted = importDefault;
      sorted = dependencyMap;
      sorted = items.sort(importDefault(dependencyMap[37]));
      sorted = null != limit && items.length > limit;
      if (sorted) {
        items.length = limit;
      }
      return items;
    }
  },
  queryGuilds(fuzzy) {
    let allowSnowflake;
    let filter;
    let iter3;
    let limit;
    let query;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    ({ filter, allowSnowflake } = fuzzy);
    if (filter === undefined) {
      filter = NOOP;
    }
    let boosters = fuzzy.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    let str = "";
    if ("" !== query) {
      str = query.toLocaleLowerCase();
    }
    let obj = {};
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(str), "i");
    obj.exactQuery = regExp;
    const obj3 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(str), "i");
    obj.containQuery = regExp1;
    obj.queryLower = str;
    const items = [];
    const tmp3 = _createForOfIteratorHelperLoose(store4.getGuildsArray());
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (filter(value)) {
          let name = value.name;
          let toLocaleLowerCaseResult = name.toLocaleLowerCase();
          if (allowSnowflake) {
            if (query === value.id) {
              let tmp6 = closure_48;
              let tmp7 = toLocaleLowerCaseResult;
              let tmp8 = tmp6;
              if (tmp6 > 0) {
                obj = {};
                let tmp9 = closure_45;
                obj.type = closure_45.GUILD;
                obj.record = value;
                let tmp10 = closure_62;
                obj.score = closure_62(tmp6, boosters[value.id]);
                obj.comparator = value.name;
                obj.sortable = toLocaleLowerCaseResult;
                let arr = items.push(obj);
                let tmp12 = toLocaleLowerCaseResult;
                let tmp13 = tmp6;
              }
            }
          }
          let tmp5 = closure_63;
          tmp6 = closure_63(toLocaleLowerCaseResult, obj, flag);
        }
        iter3 = tmp3();
        iter2 = iter3;
      } while (!iter3.done);
    }
    const sorted = items.sort(importDefault(dependencyMap[37]));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryDMChannels(limit) {
    let recipients;
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    let boosters = limit.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    let closure_0;
    let importDefault;
    let importAll;
    const privateChannelsVersion = authStore.getPrivateChannelsVersion();
    const version = store5.getVersion();
    ({ channelsByRecipientId: closure_0, recipientsById: closure_1, recipients } = callback6(privateChannelsVersion, version, authStore2.getUserStoreVersion()));
    const obj = { query: limit.query, members: recipients, limit: recipients.length, boosters };
    const tmp3 = callback6(privateChannelsVersion, version, authStore2.getUserStoreVersion());
    const items = [];
    importAll = items;
    const item = queryMemberList(obj).forEach((record) => {
      const value = _undefined.get(record.record.id);
      if (null != value) {
        const obj = { type: constants.DM, record: value, score: record.score, comparator: _undefined2(closure_3[36]).getUserTag(_undefined2.get(record.record.id)), sortable: record.sortable };
        items.push(obj);
        const obj2 = _undefined2(closure_3[36]);
      }
    });
    const sorted = items.sort(importDefault(dependencyMap[37]));
    if (items.length > num) {
      items.length = num;
    }
    return items;
  },
  queryGroupDMs(query, _limit) {
    let iter7;
    let limit;
    ({ query, limit } = query);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = query.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = query.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    let boosters = query.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    const obj2 = _limit(dependencyMap[35]);
    const stripDiacriticsResult = obj2.stripDiacritics(_limit(dependencyMap[35]).normalize(query.toLocaleLowerCase()));
    let obj = {};
    const obj3 = _limit(dependencyMap[35]);
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(stripDiacriticsResult), "i");
    obj.exactQuery = regExp;
    const obj5 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(stripDiacriticsResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = stripDiacriticsResult;
    const items = [];
    const obj6 = importDefault(dependencyMap[33]);
    const tmp4 = importDefault(dependencyMap[39]);
    const tmp4Result = importDefault(dependencyMap[39])(authStore.getMutablePrivateChannels());
    const tmp5 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[39])(authStore.getMutablePrivateChannels()).values().value());
    const iter2 = tmp5();
    let iter3 = iter2;
    if (!iter2.done) {
      do {
        let value = iter3.value;
        let tmp19 = tmp6;
        let tmp20 = tmp7;
        let tmp21 = tmp8;
        let tmp22 = tmp9;
        let tmp23 = tmp10;
        let tmp24 = tmp11;
        let tmp25 = tmp12;
        let tmp26 = tmp13;
        let tmp27 = tmp14;
        let tmp28 = tmp15;
        let tmp29 = tmp16;
        let tmp30 = tmp17;
        let tmp31 = tmp18;
        if (value.isMultiUserDM()) {
          tmp19 = tmp6;
          tmp20 = tmp7;
          tmp21 = tmp8;
          tmp22 = tmp9;
          tmp23 = tmp10;
          tmp24 = tmp11;
          tmp25 = tmp12;
          tmp26 = tmp13;
          tmp27 = tmp14;
          tmp28 = tmp15;
          tmp29 = tmp16;
          tmp30 = tmp17;
          tmp31 = tmp18;
          if (filter(value)) {
            let tmp32 = closure_0;
            let tmp33 = closure_3;
            let obj8 = closure_0(closure_3[44]);
            let tmp34 = closure_38;
            let tmp35 = closure_35;
            let channelName = obj8.computeChannelName(value, closure_38, closure_35);
            let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
            let obj10 = closure_0(closure_3[35]);
            let obj11 = closure_0(closure_3[35]);
            let stripDiacriticsResult1 = obj10.stripDiacritics(obj11.normalize(toLocaleLowerCaseResult));
            let tmp38 = closure_63;
            let tmp39 = closure_63(stripDiacriticsResult1, obj, flag);
            let items1 = [];
            let tmp40 = closure_59;
            let tmp41 = closure_59(value.recipients);
            let iter4 = tmp41();
            let iter5 = iter4;
            let tmp42 = tmp13;
            let tmp43 = tmp14;
            let tmp44 = tmp15;
            let tmp45 = iter4;
            let tmp46 = tmp13;
            let tmp47 = tmp14;
            let tmp48 = tmp15;
            if (!iter4.done) {
              do {
                value = iter5.value;
                let tmp49 = closure_38;
                let user = closure_38.getUser(value);
                if (null != user) {
                  let username = user.username;
                  let tmp51 = closure_1;
                  let tmp52 = closure_3;
                  let obj12 = closure_1(closure_3[36]);
                  let globalName = obj12.getGlobalName(user);
                  let tmp54 = closure_35;
                  let nickname = closure_35.getNickname(value);
                  if (null != username) {
                    let arr = items1.push(username);
                  }
                  if (null != globalName) {
                    arr = items1.push(globalName);
                  }
                  tmp42 = username;
                  tmp43 = globalName;
                  tmp44 = nickname;
                  if (null != nickname) {
                    let arr1 = items1.push(nickname);
                    tmp42 = username;
                    tmp43 = globalName;
                    tmp44 = nickname;
                  }
                }
                let iter6 = tmp41();
                iter5 = iter6;
                tmp45 = iter6;
                let tmp11 = value;
                let tmp12 = user;
                tmp46 = tmp42;
                tmp47 = tmp43;
                tmp48 = tmp44;
              } while (!iter6.done);
            }
            let tmp59 = tmp39;
            let num = 0;
            let tmp60 = tmp39;
            let num2 = 0;
            if (0 < items1.length) {
              do {
                let obj13 = items1[num];
                let tmp61 = closure_0;
                let tmp62 = closure_3;
                let obj14 = closure_0(closure_3[35]);
                let obj15 = closure_0(closure_3[35]);
                let _Math = Math;
                let tmp63 = closure_63;
                let bound = Math.min(5, closure_63(obj14.stripDiacritics(obj15.normalize(obj13.toLocaleLowerCase())), obj, flag));
                if (bound > tmp59) {
                  tmp59 = bound;
                }
                num = num + 1;
                tmp60 = tmp59;
                let tmp18 = bound;
                num2 = num;
              } while (num < items1.length);
            }
            tmp19 = tmp45;
            tmp20 = stripDiacriticsResult1;
            tmp21 = tmp60;
            tmp22 = items1;
            tmp23 = tmp41;
            tmp24 = tmp11;
            tmp25 = tmp12;
            tmp26 = tmp46;
            tmp27 = tmp47;
            tmp28 = tmp48;
            tmp29 = num2;
            tmp30 = items1;
            tmp31 = tmp18;
            if (tmp60 > 0) {
              obj = {};
              let tmp66 = closure_45;
              obj.type = closure_45.GROUP_DM;
              obj.record = value;
              let tmp67 = closure_62;
              obj.score = closure_62(tmp60, boosters[value.id]);
              let tmp68 = closure_0;
              let tmp69 = closure_3;
              let obj17 = closure_0(closure_3[44]);
              let tmp70 = closure_38;
              let tmp71 = closure_35;
              obj.comparator = obj17.computeChannelName(value, closure_38, closure_35);
              obj.sortable = stripDiacriticsResult1;
              let arr2 = items.push(obj);
              tmp19 = tmp45;
              tmp20 = stripDiacriticsResult1;
              tmp21 = tmp60;
              tmp22 = items1;
              tmp23 = tmp41;
              tmp24 = tmp11;
              tmp25 = tmp12;
              tmp26 = tmp46;
              tmp27 = tmp47;
              tmp28 = tmp48;
              tmp29 = num2;
              tmp30 = items1;
              tmp31 = tmp18;
            }
          }
        }
        iter7 = tmp5();
        let tmp6 = tmp19;
        let tmp7 = tmp20;
        let tmp8 = tmp21;
        let tmp9 = tmp22;
        let tmp10 = tmp23;
        tmp11 = tmp24;
        tmp12 = tmp25;
        let tmp13 = tmp26;
        let tmp14 = tmp27;
        let tmp15 = tmp28;
        let tmp16 = tmp29;
        let tmp17 = tmp30;
        tmp18 = tmp31;
        iter3 = iter7;
      } while (!iter7.done);
    }
    const sorted = items.sort(importDefault(dependencyMap[37]));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryApplications(query, _limit) {
    let iter3;
    let limit;
    ({ query, limit } = query);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = query.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = query.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    const items = [];
    const tmp4 = _createForOfIteratorHelperLoose(LAUNCHABLE_APPLICATIONS());
    const iter = tmp4();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let application = iter2.value.application;
        if (filter(application)) {
          let name = application.name;
          let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
          let tmp6 = closure_63;
          let tmp7 = closure_63(toLocaleLowerCaseResult1, obj, flag);
          let tmp8 = toLocaleLowerCaseResult1;
          let tmp9 = tmp7;
          if (tmp7 > 0) {
            obj = {};
            let tmp10 = closure_45;
            obj.type = closure_45.APPLICATION;
            obj.record = application;
            obj.score = tmp7;
            obj.comparator = application.name;
            obj.sortable = toLocaleLowerCaseResult1;
            let arr = items.push(obj);
            let tmp12 = toLocaleLowerCaseResult1;
            let tmp13 = tmp7;
          }
        }
        iter3 = tmp4();
        iter2 = iter3;
      } while (!iter3.done);
    }
    const sorted = items.sort(importDefault(dependencyMap[37]));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryInAppNavigations(query, _limit) {
    let limit;
    ({ query, limit } = query);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = query.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    obj = {};
    const intl = _limit(dependencyMap[45]).intl;
    const items = [intl.string(_limit(dependencyMap[45]).t.pWG4ze)];
    obj[constants.SHOP] = items;
    const intl2 = _limit(dependencyMap[45]).intl;
    const items1 = [intl2.string(_limit(dependencyMap[45]).t.ElYQFS), , ];
    const intl3 = _limit(dependencyMap[45]).intl;
    items1[1] = intl3.string(_limit(dependencyMap[45]).t.pWG4ze);
    const intl4 = _limit(dependencyMap[45]).intl;
    items1[2] = intl4.string(_limit(dependencyMap[45]).t.EBYkzk);
    obj[constants.SHOP_ORBS_TAB] = items1;
    const intl5 = _limit(dependencyMap[45]).intl;
    const items2 = [intl5.string(_limit(dependencyMap[45]).t.ElYQFS), , ];
    const intl6 = _limit(dependencyMap[45]).intl;
    items2[1] = intl6.string(_limit(dependencyMap[45]).t.v/R2aC);
    const intl7 = _limit(dependencyMap[45]).intl;
    items2[2] = intl7.string(_limit(dependencyMap[45]).t.qQR4tn);
    obj[constants.QUEST_ORBS] = items2;
    const intl8 = _limit(dependencyMap[45]).intl;
    const items3 = [intl8.string(_limit(dependencyMap[45]).t.Ipxkog)];
    obj[constants.NITRO_HOME] = items3;
    const intl9 = _limit(dependencyMap[45]).intl;
    const items4 = [intl9.string(_limit(dependencyMap[45]).t.JALI2K)];
    obj[constants.QUEST_HOME] = items4;
    const intl10 = _limit(dependencyMap[45]).intl;
    const items5 = [intl10.string(_limit(dependencyMap[45]).t.PHjkRE), ];
    const intl11 = _limit(dependencyMap[45]).intl;
    items5[1] = intl11.string(_limit(dependencyMap[45]).t.AKcFUj);
    obj[constants.APPS_HOME] = items5;
    const intl12 = _limit(dependencyMap[45]).intl;
    const items6 = [intl12.string(_limit(dependencyMap[45]).t.3D5yo/)];
    obj[constants.SETTINGS] = items6;
    const items7 = [];
    for (const key10173 in obj) {
      let tmp20 = key10173;
      let tmp21 = closure_8;
      let tmp22 = closure_8[key10173];
      let tmp23 = obj[tmp22];
      if (null == tmp23) {
        continue;
      } else {
        let tmp4 = closure_59;
        let tmp5 = closure_59(tmp23);
        let iter = tmp5();
        let tmp6 = iter;
        let tmp7 = tmp5;
        let iter2 = iter;
        if (iter.done) {
          continue;
        } else {
          while (true) {
            let value = iter2.value;
            let toLocaleLowerCaseResult1 = value.toLocaleLowerCase();
            let tmp9 = closure_63;
            let tmp10 = closure_63(toLocaleLowerCaseResult1, obj, flag);
            if (tmp10 > 0) {
              obj = {};
              let tmp11 = closure_45;
              obj.type = closure_45.IN_APP_NAVIGATION;
              let tmp12 = closure_7;
              obj.record = closure_7.fromType(tmp22);
              let tmp13 = closure_62;
              obj.score = closure_62(tmp10);
              obj.comparator = toLocaleLowerCaseResult1;
              obj.sortable = toLocaleLowerCaseResult1;
              let arr = items7.push(obj);
            }
            let iter3 = tmp5();
            let tmp15 = iter3;
            let tmp16 = tmp5;
            let tmp17 = toLocaleLowerCaseResult1;
            let tmp18 = tmp10;
            iter2 = iter3;
            if (iter3.done) {
              break;
            } else {
              // continue
            }
          }
        }
        continue;
      }
      continue;
    }
    const sorted = items7.sort(importDefault(dependencyMap[37]));
    if (items7.length > limit) {
      items7.length = limit;
    }
    return items7;
  },
  querySKUs(fuzzy) {
    let iter4;
    let limit;
    let query;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = fuzzy.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    const items = [];
    const obj3 = importDefault(dependencyMap[33]);
    const tmp4 = importDefault(dependencyMap[39]);
    const tmp4Result = importDefault(dependencyMap[39])(sKUs.getSKUs());
    const tmp5 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[39])(sKUs.getSKUs()).values().value());
    const iter2 = tmp5();
    let iter3 = iter2;
    if (!iter2.done) {
      do {
        let value = iter3.value;
        let tmp8 = closure_43;
        let tmp9 = tmp6;
        let tmp10 = tmp7;
        if (value.type === closure_43.DURABLE_PRIMARY) {
          tmp9 = tmp6;
          tmp10 = tmp7;
          if (filter(value)) {
            let name = value.name;
            let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
            let tmp12 = closure_63;
            let tmp13 = closure_63(toLocaleLowerCaseResult1, obj, flag);
            tmp9 = toLocaleLowerCaseResult1;
            tmp10 = tmp13;
            if (tmp13 > 0) {
              obj = {};
              let tmp14 = closure_45;
              obj.type = closure_45.SKU;
              obj.record = value;
              obj.score = tmp13;
              obj.comparator = value.name;
              obj.sortable = toLocaleLowerCaseResult1;
              let arr = items.push(obj);
              tmp9 = toLocaleLowerCaseResult1;
              tmp10 = tmp13;
            }
          }
        }
        iter4 = tmp5();
        let tmp6 = tmp9;
        let tmp7 = tmp10;
        iter3 = iter4;
      } while (!iter4.done);
    }
    const sorted = items.sort(importDefault(dependencyMap[37]));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  getRecentlyTalked,
  queryMentionResults(canMentionEveryone) {
    let allowSnowflake;
    let channel;
    let query;
    let request;
    const self = this;
    ({ query, channel } = canMentionEveryone);
    const arg1 = channel;
    let flag = canMentionEveryone.canMentionEveryone;
    if (flag === undefined) {
      flag = false;
    }
    const importDefault = flag;
    let flag2 = canMentionEveryone.canMentionHere;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = canMentionEveryone.canMentionUsers;
    if (flag3 === undefined) {
      flag3 = true;
    }
    let flag4 = canMentionEveryone.canMentionRoles;
    if (flag4 === undefined) {
      flag4 = true;
    }
    let flag5 = canMentionEveryone.canMentionOtherGlobals;
    if (flag5 === undefined) {
      flag5 = true;
    }
    const importAll = flag5;
    let flag6 = canMentionEveryone.includeAllGuildUsers;
    if (flag6 === undefined) {
      flag6 = false;
    }
    let flag7 = canMentionEveryone.includeNonMentionableRoles;
    if (flag7 === undefined) {
      flag7 = false;
    }
    const dependencyMap = flag7;
    let flag8 = canMentionEveryone.checkRecentlyTalkedOnEmptyQuery;
    if (flag8 === undefined) {
      flag8 = true;
    }
    let limit = canMentionEveryone.limit;
    if (limit === undefined) {
      limit = closure_44;
    }
    let closure_4 = limit;
    ({ allowSnowflake, request } = canMentionEveryone);
    if (allowSnowflake === undefined) {
      allowSnowflake = false;
    }
    let closure_5 = allowSnowflake;
    let closure_6;
    let closure_7;
    let formatted;
    let closure_9;
    let closure_10;
    let closure_11;
    function maybePushOtherGlobal(test) {
      let tmp = flag5;
      if (flag5) {
        tmp = null != test;
      }
      if (tmp) {
        let tmp5 = closure_7 < limit;
        if (!tmp5) {
          tmp5 = 0 === formatted.length;
        }
        if (tmp5) {
          tmp5 = flag(flag7[34])(formatted, test.test);
        }
        if (!tmp5) {
          tmp5 = formatted === test.test;
        }
        if (tmp5) {
          if (closure_7 < limit) {
            items2.push(test);
            closure_7 = closure_7 + 1;
          } else if (substr.length <= 0) {
            if (items.length > 0) {
              items.pop();
            }
          }
          substr.pop();
        }
      }
    }
    if (flag3) {
      if (!flag6) {
        let obj = { channelId: channel.id, query, limit, checkRecentlyTalkedOnEmptyQuery: flag8, allowSnowflake };
        let queryChannelUsersResult = self.queryChannelUsers(obj);
        const mapped = queryChannelUsersResult.map((record) => {
          record = record.record;
          return { user: record, score: record.score, comparator: record.comparator, nick: nick.getNick(channel.guild_id, record.id), status: status.getStatus(record.id) };
        });
      }
      obj = { guildId: channel.guild_id, query, limit, checkRecentlyTalkedOnEmptyQuery: flag8, request, allowSnowflake };
      queryChannelUsersResult = self.queryGuildUsers(obj);
    } else {
      const items = [];
      closure_6 = items;
      closure_7 = items.length;
      formatted = query.toLowerCase();
      const items1 = [];
      closure_9 = items1;
      let tmp5 = items1;
      if (closure_7 < limit) {
        tmp5 = items1;
        if (flag4) {
          const guildId = channel.getGuildId();
          closure_10 = guildId;
          const guild = store4.getGuild(guildId);
          tmp5 = items1;
          if (null != guild) {
            const tmp44 = importDefault(dependencyMap[39]);
            const tmp44Result = importDefault(dependencyMap[39])(store3.getSortedRoles(guild.id));
            const iter = importDefault(dependencyMap[39])(store3.getSortedRoles(guild.id)).filter((arg0) => {
              let id;
              let mentionable;
              let name;
              ({ mentionable, name, id } = arg0);
              if (!mentionable) {
                mentionable = flag;
              }
              if (!mentionable) {
                mentionable = flag7;
              }
              if (mentionable) {
                let tmp3Result = flag(flag7[34])(formatted, name.toLowerCase());
                if (!tmp3Result) {
                  let tmp6 = allowSnowflake;
                  if (allowSnowflake) {
                    tmp6 = formatted === id;
                  }
                  tmp3Result = tmp6;
                }
                mentionable = tmp3Result;
                const tmp3 = flag(flag7[34]);
              }
              if (mentionable) {
                mentionable = id !== flag(flag7[46]).castGuildIdAsEveryoneGuildRoleId(guildId);
                const obj = flag(flag7[46]);
              }
              return mentionable;
            });
            const valueResult = importDefault(dependencyMap[39])(store3.getSortedRoles(guild.id)).filter((arg0) => {
              let id;
              let mentionable;
              let name;
              ({ mentionable, name, id } = arg0);
              if (!mentionable) {
                mentionable = flag;
              }
              if (!mentionable) {
                mentionable = flag7;
              }
              if (mentionable) {
                let tmp3Result = flag(flag7[34])(formatted, name.toLowerCase());
                if (!tmp3Result) {
                  let tmp6 = allowSnowflake;
                  if (allowSnowflake) {
                    tmp6 = formatted === id;
                  }
                  tmp3Result = tmp6;
                }
                mentionable = tmp3Result;
                const tmp3 = flag(flag7[34]);
              }
              if (mentionable) {
                mentionable = id !== flag(flag7[46]).castGuildIdAsEveryoneGuildRoleId(guildId);
                const obj = flag(flag7[46]);
              }
              return mentionable;
            }).value();
            obj = { keys: ["iban"] };
            const obj5 = arg1(dependencyMap[47]);
            const substr = arg1(dependencyMap[47]).matchSorter(valueResult, query, obj).slice(0, limit - closure_7);
            closure_9 = substr;
            closure_7 = closure_7 + substr.length;
            tmp5 = substr;
            const matchSorterResult = arg1(dependencyMap[47]).matchSorter(valueResult, query, obj);
          }
        }
      }
      const items2 = [];
      closure_11 = items2;
      if (tmp10) {
        let tmp15Result = closure_7 < limit;
        if (tmp15Result) {
          tmp15Result = importDefault(dependencyMap[34])(formatted, MENTION_EVERYONE().test);
          const tmp15 = importDefault(dependencyMap[34]);
        }
        if (tmp15Result) {
          items2.push(MENTION_EVERYONE());
          closure_7 = closure_7 + 1;
        }
        if (flag2) {
          flag2 = closure_7 < limit;
        }
        if (flag2) {
          flag2 = importDefault(dependencyMap[34])(formatted, MENTION_HERE().test);
          const tmp23 = importDefault(dependencyMap[34]);
        }
        if (flag2) {
          items2.push(MENTION_HERE());
          closure_7 = closure_7 + 1;
        }
      }
      const GameMentionsExperiment = arg1(dependencyMap[48]).GameMentionsExperiment;
      const obj1 = { location: "mention autocomplete" };
      const config = GameMentionsExperiment.getConfig(obj1);
      if (tmp31) {
        let tmp34;
        if (null != MENTION_GAME) {
          tmp34 = MENTION_GAME();
        }
        maybePushOtherGlobal(tmp34);
      }
      let tmp39;
      if (null != MENTION_TIMESTAMP) {
        tmp39 = MENTION_TIMESTAMP();
      }
      maybePushOtherGlobal(tmp39);
      const obj2 = { users: items, globals: items2, roles: tmp5 };
      return obj2;
    }
  },
  queryGuildMentionResults(canMentionUsers) {
    let canMentionEveryone;
    let guildId;
    let query;
    const self = this;
    ({ query, guildId, canMentionEveryone } = canMentionUsers);
    if (canMentionEveryone === undefined) {
      canMentionEveryone = false;
    }
    const arg1 = canMentionEveryone;
    let flag = canMentionUsers.canMentionUsers;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = canMentionUsers.canMentionRoles;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = canMentionUsers.canMentionNonMentionableRoles;
    if (flag3 === undefined) {
      flag3 = false;
    }
    const importDefault = flag3;
    let importAll;
    let dependencyMap;
    if (flag) {
      let obj = { guildId, query };
      let mapped = self.queryGuildUsers(obj).map((record) => {
        const obj = {};
        const merged = Object.assign(record);
        obj["status"] = status.getStatus(record.record.id);
        return obj;
      });
      const queryGuildUsersResult = self.queryGuildUsers(obj);
    } else {
      mapped = [];
    }
    const formatted = query.toLowerCase();
    importAll = formatted;
    const items = [];
    dependencyMap = items;
    let sum = length;
    if (mapped.length < closure_44) {
      sum = length;
      if (flag2) {
        const guild = store4.getGuild(guildId);
        sum = length;
        if (null != guild) {
          const tmp8 = importDefault(dependencyMap[39]);
          const found = importDefault(dependencyMap[39])(store3.getSortedRoles(guild.id)).filter((mentionable) => {
            let tmp = mentionable.mentionable || canMentionEveryone || flag3;
            if (tmp) {
              tmp = flag3(items[34])(formatted, mentionable.name.toLowerCase());
              const str = mentionable.name;
              const tmp4 = flag3(items[34]);
            }
            if (tmp) {
              tmp = !callback(mentionable);
            }
            return tmp;
          });
          const tmp8Result = importDefault(dependencyMap[39])(store3.getSortedRoles(guild.id));
          const item = found.take(closure_44 - length).forEach((arg0) => {
            items.push(arg0);
          });
          sum = length + items.length;
          const takeResult = found.take(closure_44 - length);
        }
      }
    }
    const items1 = [];
    if (canMentionEveryone) {
      canMentionEveryone = flag2;
    }
    if (canMentionEveryone) {
      let tmp16Result = sum < closure_44;
      if (tmp16Result) {
        tmp16Result = importDefault(dependencyMap[34])(formatted, MENTION_EVERYONE().test);
        const tmp16 = importDefault(dependencyMap[34]);
      }
      let sum1 = sum;
      if (tmp16Result) {
        items1.push(MENTION_EVERYONE());
        sum1 = sum + 1;
      }
      let tmp25Result = sum1 < closure_44;
      if (tmp25Result) {
        tmp25Result = importDefault(dependencyMap[34])(formatted, MENTION_HERE().test);
        const tmp25 = importDefault(dependencyMap[34]);
      }
      if (tmp25Result) {
        items1.push(MENTION_HERE());
      }
    }
    obj = { users: mapped, globals: items1, roles: items };
    return obj;
  },
  queryChoice(fuzzy) {
    let limit;
    let query;
    ({ query, limit } = fuzzy);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = fuzzy.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    const arg1 = flag;
    let importDefault;
    let importAll;
    let dependencyMap;
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    importDefault = toLocaleLowerCaseResult;
    const regExp = new RegExp("^" + importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    importAll = regExp;
    const obj = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(importDefault(dependencyMap[33]).escape(toLocaleLowerCaseResult), "i");
    dependencyMap = regExp1;
    const obj2 = importDefault(dependencyMap[33]);
    const mapped = importDefault(dependencyMap[39])(fuzzy.choices).map((displayName, originalIndex) => {
      displayName = displayName.displayName;
      let obj = { exactQuery: regExp, containQuery: regExp1, queryLower: toLocaleLowerCaseResult };
      const tmp = callback(displayName.toLocaleLowerCase(), obj, flag);
      let tmp2 = null;
      if (tmp > 0) {
        obj = { choice: displayName, score: tmp, originalIndex };
        tmp2 = obj;
      }
      return tmp2;
    });
    const found = mapped.filter(arg1(dependencyMap[41]).isNotNullish);
    const sortByResult = found.sortBy((score) => -1 * score.score);
    let iter = sortByResult;
    if (null !== limit) {
      iter = sortByResult.take(limit);
    }
    return iter.value();
  },
  queryStaticRouteChannels(arg0) {
    let guild;
    let query;
    ({ query, guild } = arg0);
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    let obj1 = importDefault(dependencyMap[33]);
    const regExp = new RegExp("^" + obj1.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    let obj2 = importDefault(dependencyMap[33]);
    const regExp1 = new RegExp(obj2.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    let canSeeOnboardingHomeResult = arg1(dependencyMap[49]).canSeeOnboardingHome(guild.id);
    if (canSeeOnboardingHomeResult) {
      const features = guild.features;
      canSeeOnboardingHomeResult = !features.has(constants3.HUB);
    }
    const features2 = guild.features;
    const hasItem = features2.has(constants3.COMMUNITY);
    const obj4 = arg1(dependencyMap[49]);
    let result = arg1(dependencyMap[50]).isGuildOnboardingAvailable(guild);
    if (result) {
      const features3 = guild.features;
      result = features3.has(constants3.COMMUNITY);
    }
    const items = [];
    obj = { id: StaticChannelId.SERVER_GUIDE };
    const intl = arg1(dependencyMap[45]).intl;
    obj.name = intl.string(arg1(dependencyMap[45]).t.VbpLyU);
    const items1 = [obj, , ];
    obj = { id: StaticChannelId.CHANNEL_BROWSER };
    const intl2 = arg1(dependencyMap[45]).intl;
    obj.name = intl2.string(arg1(dependencyMap[45]).t.et6wav);
    items1[1] = obj;
    obj1 = { id: StaticChannelId.CUSTOMIZE_COMMUNITY };
    const intl3 = arg1(dependencyMap[45]).intl;
    obj1.name = intl3.string(arg1(dependencyMap[45]).t.h9mGOP);
    items1[2] = obj1;
    for (let num = 0; num < items1.length; num = num + 1) {
      let tmp9 = items1[num];
      let tmp10 = StaticChannelId;
      if (tmp9.id !== StaticChannelId.SERVER_GUIDE) {
        let tmp11 = StaticChannelId;
        if (tmp9.id !== StaticChannelId.CHANNEL_BROWSER) {
          let tmp12 = StaticChannelId;
          if (tmp9.id !== StaticChannelId.CUSTOMIZE_COMMUNITY) {
            let tmp13 = getMatchValue;
            let name = tmp9.name;
            if (getMatchValue(name.toLocaleLowerCase(), obj, false) > 0) {
              let tmp14 = ctor;
              obj2 = {};
              ({ id: obj9.id, name: obj9.name } = tmp9);
              let tmp15 = ChannelTypes;
              obj2.type = ChannelTypes.UNKNOWN;
              obj2.guild_id = guild.id;
              let prototype = ctor.prototype;
              let tmp16 = new.target;
              let tmp17 = new.target;
              let tmp18 = obj2;
              let tmp19 = new ctor(obj2);
              let tmp20 = tmp19;
              let arr = items.push(tmp19);
            }
          }
        }
      }
    }
    return items;
  },
  queryChannelResults(channelTypes) {
    let channel;
    let type;
    const self = this;
    ({ channel, type } = channelTypes);
    if (type === undefined) {
      type = GUILD_SELECTABLE_CHANNELS_KEY;
    }
    const arg1 = channelTypes.channelTypes;
    let obj = {};
    obj = {
      query: channelTypes.query,
      guildId: channel.getGuildId(),
      limit: undefined,
      fuzzy: undefined,
      filter(type) {
        let hasItem = null == channelTypes;
        if (!hasItem) {
          hasItem = channelTypes.includes(type.type);
        }
        return hasItem;
      },
      type,
      allowEmptyQueries: true
    };
    obj.channels = self.queryChannels(obj).map((record) => record.record);
    return obj;
  },
  queryApplicationCommandChannelResults(limit) {
    let channel;
    let channelTypes;
    let length;
    const self = this;
    ({ channel, channelTypes } = limit);
    const arg1 = channelTypes;
    limit = limit.limit;
    if (limit === undefined) {
      limit = closure_44;
    }
    if (null == channel.guild_id) {
      const items = [];
      if (tmp6) {
        items.push(channel);
      }
      let obj = { channels: items };
      return obj;
    } else {
      let items1 = [];
      let num = 0;
      let arr2 = items1;
      if (0 < items.length) {
        do {
          obj = {
            query: tmp,
            guildId: channel.guild_id,
            limit,
            fuzzy: true,
            filter(type) {
                    let hasItem = null == closure_0;
                    if (!hasItem) {
                      hasItem = closure_0.includes(type.type);
                    }
                    return hasItem;
                  },
            type: arr6[num],
            allowEmptyQueries: true,
            requireVocalConnectAccess: false,
            allowSnowflake: tmp2
          };
          items1 = items1.concat(self.queryChannels(obj));
          num = num + 1;
          arr2 = items1;
          length = arr6.length;
        } while (num < length);
      }
      const found = arr2.filter((record) => "null" !== record.record.id);
      const sorted = found.sort(importDefault(dependencyMap[51]));
      let substr = sorted;
      if (tmp5) {
        substr = sorted.slice(0, limit);
      }
      obj = { channels: substr.map((record) => record.record) };
      return obj;
    }
  },
  queryChoiceResults(query) {
    let obj = {};
    obj = { query: query.query, choices: query.choices, limit: null };
    obj.choices = this.queryChoice(obj).map((choice) => choice.choice);
    return obj;
  },
  queryEmojiResults(maxCount) {
    let channel;
    let intention;
    let query;
    maxCount = maxCount.maxCount;
    ({ query, channel, intention } = maxCount);
    if (maxCount === undefined) {
      maxCount = closure_44;
    }
    const FrecencyUserSettingsActionCreators = arg1(dependencyMap[52]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    let obj = { emojis: closure_9.searchWithoutFetchingLatest(obj) };
    obj = { channel, query, count: maxCount, intention, matchComparator: maxCount.matchComparator };
    return obj;
  },
  queryStickers(items, arg1, items1) {
    let done;
    let importAll;
    let importDefault;
    let flag = arg1;
    let tmp = items1;
    if (arg1 === undefined) {
      flag = true;
    }
    arg1 = flag;
    if (tmp === undefined) {
      items = [true, NOOP];
      tmp = items;
    }
    [importDefault, importAll] = tmp;
    let currentUser;
    let closure_4;
    let closure_5;
    let closure_6;
    currentUser = authStore2.getCurrentUser();
    closure_4 = new Set();
    items1 = [];
    closure_5 = items1;
    const FrecencyUserSettingsActionCreators = arg1(currentUser[52]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    function _loop() {
      if ("" === _undefined) {
        return 1;
      } else {
        const toLocaleLowerCaseResult = _undefined.toLocaleLowerCase();
        const stripDiacriticsResult = toLocaleLowerCaseResult(closure_3[35]).stripDiacritics(toLocaleLowerCaseResult);
        const _RegExp = RegExp;
        const obj = toLocaleLowerCaseResult(closure_3[35]);
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + nextResult(closure_3[33]).escape(stripDiacriticsResult), "i");
        const _RegExp2 = RegExp;
        const obj2 = nextResult(closure_3[33]);
        const _HermesInternal2 = HermesInternal;
        const regExp1 = new RegExp("" + regExp(closure_3[33]).escape(stripDiacriticsResult), "i");
        const stickerMetadataArrays = stickerMetadataArrays.getStickerMetadataArrays();
        const item = stickerMetadataArrays.forEach((arr) => {
          const item = arr.forEach((arg0, id) => {
            let iter3;
            let type;
            let value;
            const stickerById = stickerById.getStickerById(id);
            if (null != stickerById) {
              if (callback2(stickerById, obj2.getStickerSendability(stickerById, closure_3, closure_1))) {
                const tmp4 = callback3(arg0);
                const iter = tmp4();
                let num5 = 0;
                let tmp5 = null;
                let iter2 = iter;
                let num6 = 0;
                let tmp6 = null;
                if (!iter.done) {
                  do {
                    ({ type, value } = iter2.value);
                    let tmp7 = closure_67;
                    let tmp8 = closure_67(type);
                    let tmp9 = closure_0;
                    let tmp10 = closure_0;
                    if (closure_0) {
                      if (value === tmp10) {
                        let tmp20 = closure_48;
                        let num7 = closure_48 * tmp8;
                        let tmp11 = tmp5;
                      } else {
                        let tmp36 = closure_1;
                        if (closure_1.test(value)) {
                          num7 = 7 * tmp8;
                          tmp11 = tmp5;
                        } else {
                          let tmp12 = closure_0;
                          let tmp13 = closure_3;
                          let tmp14 = type !== closure_0(closure_3[38]).StickerMetadataTypes.GUILD_NAME;
                          if (tmp14) {
                            let tmp15 = closure_0;
                            let tmp16 = closure_3;
                            tmp14 = type !== closure_0(closure_3[38]).StickerMetadataTypes.PACK_NAME;
                          }
                          if (tmp14) {
                            let tmp17 = closure_0;
                            let tmp18 = closure_3;
                            tmp14 = type !== closure_0(closure_3[38]).StickerMetadataTypes.STICKER_NAME;
                          }
                          if (!tmp14) {
                            let tmp19 = closure_2;
                            tmp14 = !closure_2.test(value);
                          }
                          tmp11 = tmp5;
                          num7 = 0;
                          if (!tmp14) {
                            num7 = 5 * tmp8;
                            tmp11 = tmp5;
                          }
                        }
                      }
                    } else {
                      tmp11 = tmp5;
                      num7 = 0;
                      if (value === tmp10) {
                        let tmp35 = closure_48;
                        num7 = closure_48 * tmp8;
                        tmp11 = value;
                      }
                    }
                    if (num7 > num5) {
                      num5 = num7;
                      tmp11 = value;
                    }
                    iter3 = tmp4();
                    tmp5 = tmp11;
                    iter2 = iter3;
                    num6 = num5;
                    tmp6 = tmp11;
                  } while (!iter3.done);
                }
                const stickerFrecencyWithoutFetchingLatest = obj.stickerFrecencyWithoutFetchingLatest;
                const score = stickerFrecencyWithoutFetchingLatest.getScore(id);
                let result = num6;
                if (null != score) {
                  result = num6 * (score / 100);
                }
                let tmp24 = result > 0 && null != tmp6;
                if (tmp24) {
                  tmp24 = !set.has(stickerById.id);
                }
                if (tmp24) {
                  set.add(stickerById.id);
                  const obj = { sticker: stickerById, comparator: tmp6, score: result };
                  const arr = arr.push(obj);
                }
              }
              const obj2 = callback(closure_3[53]);
            }
          });
        });
      }
    }
    const tmp10 = _createForOfIteratorHelperLoose(items);
    let iter2 = tmp10();
    if (!iter2.done) {
      do {
        closure_6 = iter2.value;
        let _loopResult = _loop();
        let iter3 = tmp10();
        iter2 = iter3;
        done = iter3.done;
      } while (!done);
    }
    const set = new Set();
    const obj = importDefault(currentUser[39])(items1);
    let valueResult = importDefault(currentUser[39])(items1).sortBy((score) => -1 * score.score).value();
    closure_5 = valueResult;
    if (0 === valueResult.length) {
      closure_5 = closure_50;
      valueResult = closure_50;
    }
    return valueResult;
  },
  querySoundmoji(arg0, channel) {
    const currentUser = authStore2.getCurrentUser();
    let tmp2 = !closure_10.isFetching();
    if (tmp2) {
      tmp2 = !closure_10.hasFetchedAllSounds();
    }
    if (tmp2) {
      const result = channel(dependencyMap[54]).maybeFetchSoundboardSounds();
      const obj = channel(dependencyMap[54]);
    }
    const FrecencyUserSettingsActionCreators = channel(dependencyMap[52]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const sounds = closure_10.getSounds();
    const reduced = Array.from(sounds.values()).reduce((arg0, arr) => {
      arr = arg0;
      const item = arr.forEach((self) => {
        let guild_id;
        if (null != self) {
          guild_id = self.guild_id;
        }
        let id;
        if (null != self) {
          id = self.id;
        }
        if (tmp(self, guild_id, id)) {
          self.push(self);
        }
      });
      return arg0;
    }, []);
    const arr = Array.from(sounds.values());
    return channel(dependencyMap[56]).searchSounds(arg0, reduced, currentUser, channel);
  },
  matchSentinel(arg0, arg1, closure_11) {
    let tmp = !tmp8.test(arg1);
    if (tmp) {
      tmp = arg0 === closure_11;
    }
    return tmp;
  },
  hasSameRoleAsUsername(getGuildId, hasUniqueUsername) {
    if (hasUniqueUsername.hasUniqueUsername()) {
      const guild = store4.getGuild(getGuildId.getGuildId());
      if (null != guild) {
        let sortedRoles = store3.getSortedRoles(guild.id);
      } else {
        sortedRoles = [];
      }
      const tmp3Result = _createForOfIteratorHelperLoose(sortedRoles);
      let iter = tmp3Result();
      if (!iter.done) {
        const username = hasUniqueUsername.username;
        while (!tmp7(str.toLowerCase())) {
          let iter2 = tmp3Result();
          iter = iter2;
        }
        return true;
      }
      return false;
    } else {
      return false;
    }
  },
  queryMemberList
};
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[57]).fileFinishedImporting("utils/AutocompleteUtils.tsx");

export default obj;
export const WHITESPACE_REGEX = tmp8;
export { calculateScore };
export const getGameProfileMatchTier = function getGameProfileMatchTier(name, closure_0, arg2) {
  const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  if (toLocaleLowerCaseResult === closure_0) {
    let num2 = closure_48;
  } else {
    num2 = 7;
    if (!toLocaleLowerCaseResult.startsWith(closure_0)) {
      const _Math = Math;
      num2 = Math.max(1, 7 - arg2);
    }
  }
  return num2;
};
export const getBoosterMap = function getBoosterMap(USER) {
  return tmp9.get(USER);
};
export const COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS = items;
