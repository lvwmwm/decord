// Module ID: 4974
// Function ID: 42866
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 4975, 4991, 4578, 5034, 5035, 5039, 3760, 1352, 1911, 1857, 1348, 5042, 1907, 1917, 1910, 1838, 4349, 3758, 4217, 3767, 1906, 3947, 1849, 4175, 653, 5043, 1355, 3, 5044, 1387, 4118, 5045, 1832, 3969, 5046, 4799, 22, 1916, 1327, 5047, 3763, 4320, 1212, 21, 5725, 5728, 5605, 5730, 5731, 1331, 5732, 5733, 4583, 5738, 2]
// Exports: getBoosterMap, getGameProfileMatchTier

// Module 4974 (_createForOfIteratorHelperLoose)
import set from "set";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_23 from "_isNativeReflectConstruct";
import closure_24 from "_isNativeReflectConstruct";
import closure_25 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_28 from "_isNativeReflectConstruct";
import closure_29 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_31 from "_createForOfIteratorHelperLoose";
import closure_32 from "_isNativeReflectConstruct";
import closure_33 from "_isNativeReflectConstruct";
import closure_34 from "_isNativeReflectConstruct";
import closure_35 from "_isNativeReflectConstruct";
import closure_36 from "_isNativeReflectConstruct";
import closure_37 from "_isNativeReflectConstruct";
import closure_38 from "_isNativeReflectConstruct";
import closure_39 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelId } from "set";
import importDefaultResult from "_isNativeReflectConstruct";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

let ChannelTypes;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_40;
let closure_41;
let closure_43;
let closure_44;
let closure_7;
let closure_8;
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
function getMatchValue(toLocaleLowerCaseResult1, value, flag) {
  let containQuery;
  let exactQuery;
  let queryLower;
  ({ exactQuery, containQuery, queryLower } = value);
  if (flag === undefined) {
    flag = true;
  }
  if (exactQuery.test(toLocaleLowerCaseResult1)) {
    let num5 = 7;
    if (toLocaleLowerCaseResult1.toLocaleLowerCase() === queryLower) {
      num5 = c48;
    }
    return num5;
  } else if (containQuery.test(toLocaleLowerCaseResult1)) {
    return 5;
  } else if ((function multiTokenMatch(queryLower, toLocaleLowerCaseResult1) {
    let closure_0 = toLocaleLowerCaseResult1;
    const parts = queryLower.split(/(?:,| )+/);
    return parts.every((arg0) => {
      const regExp = new RegExp(outer2_1(outer2_3[33]).escape(arg0), "i");
      return regExp.test(closure_0);
    });
  })(queryLower, toLocaleLowerCaseResult1)) {
    return 3;
  } else if (flag) {
    if (importDefault(5045)(queryLower, toLocaleLowerCaseResult1)) {
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
    return [null, null];
  } else {
    const stripDiacriticsResult = require(1832) /* isNullOrEmpty */.stripDiacritics(arg0);
    const items = [stripDiacriticsResult, ];
    const obj = require(1832) /* isNullOrEmpty */;
    items[1] = require(1832) /* isNullOrEmpty */.normalize(stripDiacriticsResult);
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
  guildId = guildId.getGuildId();
  const toLocaleLowerCaseResult = query.toLocaleLowerCase();
  let obj = require(1832) /* isNullOrEmpty */;
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
        let tmp23 = store2;
        let nick = store2.getNick(guildId, tmp19.id);
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
      let tmp26 = importDefault;
      let tmp27 = dependencyMap;
      let obj3 = importDefault(3969);
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
          let tmp44 = require;
          let tmp45 = dependencyMap;
          let obj5 = require(1832) /* isNullOrEmpty */;
          let str4 = obj5.stripDiacritics(str3);
          let obj6 = require(1832) /* isNullOrEmpty */;
          let str5 = obj6.normalize(str4);
          let tmp46 = stripAndNormalize;
          let tmp47 = callback;
          let tmp48 = callback(stripAndNormalize(str), 2);
          [str6, str7] = tmp48;
          let tmp49 = callback;
          let tmp50 = callback(stripAndNormalize(str2), 2);
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
                                let tmp95 = importDefault;
                                let tmp96 = dependencyMap;
                                if (!importDefault(5045)(toLocaleLowerCaseResult, str4)) {
                                  let tmp58 = importDefault;
                                  let tmp59 = dependencyMap;
                                  if (!importDefault(5045)(normalizeResult, str5)) {
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
                                            let tmp97 = importDefault;
                                            let tmp98 = dependencyMap;
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
                                          let tmp64 = importDefault;
                                          let tmp65 = dependencyMap;
                                        }
                                      } else {
                                        let tmp62 = importDefault;
                                        let tmp63 = dependencyMap;
                                      }
                                    } else {
                                      let tmp60 = importDefault;
                                      let tmp61 = dependencyMap;
                                    }
                                  }
                                }
                                obj = {};
                                let tmp66 = AutocompleterResultTypes;
                                obj.type = AutocompleterResultTypes.USER;
                                obj.record = tmp21;
                                let tmp68;
                                let tmp67 = calculateScore;
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
                        let tmp74 = AutocompleterResultTypes;
                        obj.type = AutocompleterResultTypes.USER;
                        obj.record = tmp21;
                        let tmp76;
                        let tmp75 = calculateScore;
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
          let tmp82 = AutocompleterResultTypes;
          obj1.type = AutocompleterResultTypes.USER;
          obj1.record = tmp21;
          let tmp85;
          let tmp83 = calculateScore;
          let tmp84 = c48;
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
      tmp5 = tmp30;
      tmp6 = tmp31;
      tmp7 = tmp32;
      tmp8 = tmp33;
      tmp9 = tmp34;
      tmp10 = tmp35;
      tmp11 = tmp36;
      tmp12 = tmp37;
      tmp13 = tmp38;
      tmp14 = tmp39;
      tmp15 = tmp40;
      tmp16 = tmp41;
      tmp17 = tmp42;
      tmp18 = tmp43;
      tmp4 = tmp22;
    } while (num < length);
  }
  const sorted = items.sort(importDefault(5046));
  let combined = items;
  if (items.length < limit) {
    const sorted1 = items1.sort(importDefault(5046));
    const _Math = Math;
    combined = items.concat(items1.slice(0, Math.max(0, limit - items.length)));
  }
  if (combined.length > limit) {
    combined.length = limit;
  }
  return combined;
}
function getPriorityForStickerMetadataType(arg0) {
  if (require(4799) /* StickerFormat */.StickerMetadataTypes.STICKER_NAME === arg0) {
    return 11;
  } else if (require(4799) /* StickerFormat */.StickerMetadataTypes.CORRELATED_EMOJI === arg0) {
    return 6;
  } else if (require(4799) /* StickerFormat */.StickerMetadataTypes.TAG === arg0) {
    return 1;
  } else {
    if (require(4799) /* StickerFormat */.StickerMetadataTypes.GUILD_NAME !== arg0) {
      if (require(4799) /* StickerFormat */.StickerMetadataTypes.PACK_NAME !== arg0) {
        return 1;
      }
    }
    return 8;
  }
}
function isPartialTypeMatch(type, type2) {
  let tmp = type === GUILD_SELECTABLE_CHANNELS_KEY;
  if (tmp) {
    tmp = callback5(type2);
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
      let tmp4 = getMatchValue;
      let tmp5 = getMatchValue(toLocaleLowerCaseResult, value, flag);
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
  if (null != channelId) {
    if (null != channel) {
      messages = messages.getMessages(channelId);
      const tmp5 = importDefault(22);
      const reversed = importDefault(22)(messages.toArray()).reverse();
      const tmp5Result = importDefault(22)(messages.toArray());
      const mapped = reversed.uniqBy((author) => author.author.id).map((author) => outer1_38.getUser(author.author.id));
      const found = mapped.filter((isNonUserBot) => {
        if (null == isNonUserBot) {
          return false;
        } else if (isNonUserBot.isNonUserBot()) {
          return false;
        } else {
          const guildId = channel.getGuildId();
          let tmp3 = null == guildId;
          if (!tmp3) {
            tmp3 = outer1_64(outer1_29.getMember(guildId, isNonUserBot.id));
          }
          return tmp3;
        }
      });
      const mapped1 = found.map((id) => {
        const guildId = channel.getGuildId();
        let member = null;
        if (null != guildId) {
          member = outer1_29.getMember(guildId, id.id);
        }
        const obj = { type: outer1_45.USER, record: id, score: 0 };
        let nick;
        if (null != member) {
          nick = member.nick;
        }
        if (null == nick) {
          nick = outer1_1(outer1_3[36]).getName(id);
          const obj2 = outer1_1(outer1_3[36]);
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
({ InAppNavigationRecord: closure_7, InAppNavigationType: closure_8 } = _isNativeReflectConstruct);
({ ChannelRecordBase: closure_15, isGuildChannelType: closure_16, isGuildSelectableChannelType: closure_17, isGuildVocalChannelType: closure_18, isThread: closure_19, PrivateChannelRecord: closure_20, UnknownChannelRecord: closure_21 } = _callSuper);
const GUILD_SELECTABLE_CHANNELS_KEY = _isNativeReflectConstruct.GUILD_SELECTABLE_CHANNELS_KEY;
const GUILD_VOCAL_CHANNELS_KEY = _isNativeReflectConstruct.GUILD_VOCAL_CHANNELS_KEY;
({ Permissions: closure_40, GuildFeatures: closure_41, ChannelTypes } = ME);
({ SKUTypes: closure_43, MAX_AUTOCOMPLETE_RESULTS: closure_44 } = ME);
require("HeaderRecord").AutocompleterResultTypes;
importDefaultResult = new importDefaultResult("AutocompleteUtils");
let c48 = 10;
let tmp8 = /(\t|\s)/;
let closure_49 = tmp8;
let closure_50 = [];
const MENTION_EVERYONE = require("module_5044").default.MENTION_EVERYONE;
const MENTION_HERE = require("module_5044").default.MENTION_HERE;
const MENTION_GAME = require("module_5044").default.MENTION_GAME;
const MENTION_TIMESTAMP = require("module_5044").default.MENTION_TIMESTAMP;
const LAUNCHABLE_APPLICATIONS = require("module_5044").default.LAUNCHABLE_APPLICATIONS;
let tmp9 = (() => {
  class AutocompleteBoostersCache {
    constructor() {
      tmp = outer1_5(this, AutocompleteBoostersCache);
      this.lastFrecencyVersion = null;
      this.lastRelationshipVersion = null;
      this.lastPrivateChannelsVersion = null;
      map = new Map();
      this.cache = map;
      return;
    }
  }
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
      const version = outer1_25.getVersion();
      const version1 = outer1_35.getVersion();
      const privateChannelsVersion = outer1_24.getPrivateChannelsVersion();
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
      const frequentlyWithoutFetchingLatest = outer1_25.getFrequentlyWithoutFetchingLatest();
      const reduced = frequentlyWithoutFetchingLatest.reduce((arg0, id) => {
        let tmp = arg0;
        const scoreWithoutFetchingLatest = outer2_25.getScoreWithoutFetchingLatest(id.id);
        if (scoreWithoutFetchingLatest > arg0) {
          tmp = scoreWithoutFetchingLatest;
        }
        return tmp;
      }, 0);
      if (outer1_45.GUILD === arg0) {
        let found = frequentlyWithoutFetchingLatest.filter((guild) => AutocompleteBoostersCache(outer2_3[32]).isGuildRecord(guild));
      } else if (outer1_45.USER === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((type) => {
          let tmp = type instanceof outer2_15;
          if (tmp) {
            tmp = type.type === outer2_42.DM;
          }
          return tmp;
        });
      } else if (outer1_45.GROUP_DM === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((isMultiUserDM) => isMultiUserDM instanceof outer2_15 && isMultiUserDM.isMultiUserDM());
      } else if (outer1_45.TEXT_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((type) => {
          let tmp = type instanceof outer2_15;
          if (tmp) {
            tmp = outer2_17(type.type);
          }
          return tmp;
        });
      } else if (outer1_45.VOICE_CHANNEL === arg0) {
        found = frequentlyWithoutFetchingLatest.filter((isGuildVocal) => isGuildVocal instanceof outer2_15 && isGuildVocal.isGuildVocal());
      }
      const obj = {};
      const tmp6 = outer1_59([]);
      const iter = tmp6();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          let id = value.id;
          let tmp10 = outer1_25;
          let scoreWithoutFetchingLatest = outer1_25.getScoreWithoutFetchingLatest(id);
          let tmp12 = outer1_45;
          if (arg0 === outer1_45.USER) {
            let tmp13 = outer1_20;
            if (value instanceof outer1_20) {
              let type = value.type;
              let tmp17 = outer1_42;
              if (outer1_42.DM === type) {
                obj[value.getRecipientId()] = 1 + scoreWithoutFetchingLatest / reduced;
                let tmp14 = tmp7;
                let tmp15 = tmp8;
                let tmp16 = tmp9;
              } else {
                let tmp23 = outer1_42;
                tmp14 = tmp7;
                tmp15 = tmp8;
                tmp16 = tmp9;
                if (outer1_42.GROUP_DM === type) {
                  let length = value.recipients.length;
                  let tmp24 = outer1_59;
                  let tmp25 = outer1_59(value.recipients);
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
              tmp7 = tmp14;
              tmp8 = tmp15;
              tmp9 = tmp16;
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
      const tmp18 = outer1_59(outer1_35.getFriendIDs());
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
      const tmp20 = outer1_59(outer1_24.getDMUserIds());
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
  return callback2(AutocompleteBoostersCache, items);
})();
tmp9 = new tmp9();
let closure_56 = tmp9;
let items = [GUILD_SELECTABLE_CHANNELS_KEY, GUILD_VOCAL_CHANNELS_KEY, ChannelTypes.GUILD_CATEGORY];
let closure_58 = areArraysShallowlyEqual.cachedFunction(() => {
  const channelsByRecipientId = new Map();
  const recipientsById = new Map();
  const recipients = [];
  const tmp3 = recipientsById(22);
  const tmp3Result = recipientsById(22)(authStore.getMutablePrivateChannels());
  const iter = recipientsById(22)(authStore.getMutablePrivateChannels()).values();
  const item = recipientsById(22)(authStore.getMutablePrivateChannels()).values().value().forEach((isDM) => {
    if (isDM.isDM()) {
      const recipientId = isDM.getRecipientId();
      const user = outer1_38.getUser(recipientId);
      let hasItem = null == recipientId || null == user;
      if (!hasItem) {
        hasItem = channelsByRecipientId.has(recipientId);
      }
      if (!hasItem) {
        const result = channelsByRecipientId.set(recipientId, isDM);
        const obj = { userId: recipientId, nick: outer1_35.getNickname(recipientId) };
        recipients.push(obj);
        const result1 = recipientsById.set(recipientId, user);
      }
    }
  });
  return { channelsByRecipientId, recipientsById, recipients };
});
areArraysShallowlyEqual = {
  queryFriends(limit) {
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    const obj = { query: limit.query };
    const friendIDs = store5.getFriendIDs();
    const mapped = friendIDs.map((arg0) => outer1_38.getUser(arg0));
    obj.members = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
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
    const mapped = dMUserIds.map((arg0) => outer1_38.getUser(arg0));
    obj.members = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
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
    let obj2;
    const channel = authStore.getChannel(request.channelId);
    if (null == channel) {
      return [];
    } else {
      let channel1 = null;
      if (channel.isThread()) {
        channel1 = authStore.getChannel(channel.parent_id);
      }
      obj2 = channel;
      if (null != channel1) {
        obj2 = channel1;
      }
      if (null == obj2) {
        return [];
      } else {
        if (obj2.isPrivate()) {
          const recipients = obj2.recipients;
          const mapped = recipients.map((userId) => {
            const obj = { userId };
            const nickname = outer1_35.getNickname(userId);
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
            const members1 = importDefault(5047).requestMembers(obj2.guild_id, query, limit);
            tmp7 = found;
            const obj3 = importDefault(5047);
          }
        }
        obj = {
          query,
          members: tmp7,
          limit,
          filter(user) {
                let isPrivateResult = obj2.isPrivate();
                if (!isPrivateResult) {
                  let obj = outer1_2(outer1_3[43]);
                  obj = { permission: outer1_40.VIEW_CHANNEL, user, context: obj2 };
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
        let obj = importDefault(5047);
        const members1 = obj.requestMembers(guildId, query, limit);
      }
      obj = { query, members: found, limit, filter, allowSnowflake };
      return queryMemberList(obj);
    }
  },
  queryUsers(closure_1, closure_2, _limit) {
    let boosters;
    let filter;
    let query;
    let num = closure_1.limit;
    ({ query, filter, boosters } = closure_1);
    if (num === undefined) {
      num = 10;
    }
    const obj = { query, members: closure_1.users, limit: num, filter, allowSnowflake: closure_1.allowSnowflake, boosters };
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
      let obj = importDefault(5047);
      const members = obj.requestMembers(null, query, limit);
    }
    obj = { query, limit, request: flag, filter, boosters };
    const tmp6 = importDefault(22);
    const tmp6Result = importDefault(22)(authStore2.getUsers());
    obj.users = importDefault(22)(authStore2.getUsers()).values().value();
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
    let sorted = (function getSeparatedQueries(query, flag2) {
      let flag = flag2;
      if (flag2 === undefined) {
        flag = false;
      }
      const parts = query.split(" ");
      const found = parts.filter((arg0) => "" !== arg0 || flag);
      const mapped = found.map((toLocaleLowerCase) => {
        const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
        const obj = { queryLower: toLocaleLowerCaseResult };
        const regExp = new RegExp("^" + outer2_1(outer2_3[33]).escape(toLocaleLowerCaseResult), "i");
        obj.exactQuery = regExp;
        const obj2 = outer2_1(outer2_3[33]);
        const regExp1 = new RegExp(outer2_1(outer2_3[33]).escape(toLocaleLowerCaseResult), "i");
        obj.containQuery = regExp1;
        obj.isFullMatch = false;
        return obj;
      });
      if (query.includes(" ")) {
        let toLocaleLowerCaseResult = query.toLocaleLowerCase();
        let obj = { queryLower: toLocaleLowerCaseResult };
        const _RegExp = RegExp;
        let obj2 = outer1_1(outer1_3[33]);
        const _HermesInternal = HermesInternal;
        let regExp = new RegExp("^" + outer1_1(outer1_3[33]).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.exactQuery = regExp;
        const _RegExp2 = RegExp;
        const str = outer1_1(outer1_3[33]).escape(toLocaleLowerCaseResult);
        const obj3 = outer1_1(outer1_3[33]);
        let regExp1 = new RegExp(outer1_1(outer1_3[33]).escape(toLocaleLowerCaseResult).replace(" ", "( |-)"), "i");
        obj.containQuery = regExp1;
        obj.isFullMatch = true;
        mapped.unshift(obj);
        const str6 = outer1_1(outer1_3[33]).escape(toLocaleLowerCaseResult);
      }
      return mapped;
    })(query, flag2);
    let tmp2 = type === GUILD_SELECTABLE_CHANNELS_KEY;
    if (!tmp2) {
      let tmp4 = type !== GUILD_VOCAL_CHANNELS_KEY;
      if (tmp4) {
        tmp4 = callback6(type);
      }
      tmp2 = tmp4;
    }
    if (null != guildId) {
      const tmp14 = importDefault(22);
      let mapped = importDefault(22)(channels.getChannels(guildId)[type]).map((channel) => channel.channel);
      if (!tmp2) {
        let valueResult = tmp17([]).value();
        const iter2 = tmp17([]);
      }
      if (includeAllThreads) {
        let allThreadsForGuild = authStore.getAllThreadsForGuild(guildId);
      } else {
        allThreadsForGuild = closure_13.computeAllActiveJoinedThreads(guildId);
      }
      const tmp14Result = importDefault(22)(channels.getChannels(guildId)[type]);
    } else {
      const tmp8 = importDefault(22);
      const values = importDefault(22)(authStore.loadAllGuildAndPrivateChannelsFromDisk()).values();
      if (tmp2) {
        let allActiveJoinedThreads = closure_13.computeAllActiveJoinedThreads();
      } else {
        allActiveJoinedThreads = [];
      }
      const tmp8Result = importDefault(22)(authStore.loadAllGuildAndPrivateChannelsFromDisk());
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
            let tmp55 = callback3;
            if (!callback3(value.type)) {
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
                let tmp61 = require;
                let tmp62 = dependencyMap;
                let obj5 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
                let tmp63 = closure_38;
                let tmp64 = closure_35;
                let channelName = obj5.computeChannelName(value, closure_38, closure_35);
                toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
                tmp66 = allowSnowflake;
                if (allowSnowflake) {
                  tmp66 = query === value.id;
                }
                if (tmp66) {
                  let tmp68 = c48;
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
                            let tmp72 = getBestScore;
                            let tmp73 = getBestScore(tmp69, items1, false);
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
                        tmp35 = tmp69;
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
              let tmp52 = callback4;
              let tmp53 = callback4(type2);
              if (!tmp53) {
                let tmp54 = callback5;
                tmp53 = callback5(type2);
              }
              let tmp50 = tmp53;
            } else {
              let tmp49 = GUILD_VOCAL_CHANNELS_KEY;
              tmp50 = type === GUILD_VOCAL_CHANNELS_KEY;
              if (tmp50) {
                let tmp51 = callback5;
                tmp50 = callback5(type2);
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
            let tmp38 = callback3;
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
          tmp28 = tmp39;
          tmp29 = tmp40;
          tmp30 = tmp41;
          tmp31 = tmp42;
          tmp32 = tmp43;
          tmp33 = tmp44;
          tmp34 = tmp45;
          tmp35 = tmp46;
          tmp36 = tmp47;
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
          num14 = c48;
        }
        const bound2 = Math.min(sum1, num14);
        obj = {};
        let tmp93 = AutocompleterResultTypes;
        obj.type = callback5(value.type) ? tmp93.VOICE_CHANNEL : tmp93.TEXT_CHANNEL;
        obj.record = value;
        obj.score = calculateScore(bound2, boosters[value.id]);
        tmp93 = closure_38;
        obj.comparator = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(value, closure_38, closure_35);
        obj.sortable = toLocaleLowerCaseResult;
        obj = items.push(obj);
        sorted = toLocaleLowerCaseResult;
        sorted = tmp66;
        sorted = bound2;
        sorted = tmp33;
        sorted = tmp34;
        sorted = tmp79;
        sorted = tmp80;
        const obj8 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
      }
      sorted = importDefault;
      sorted = dependencyMap;
      sorted = items.sort(importDefault(5046));
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
    const regExp = new RegExp("^" + importDefault(4118).escape(str), "i");
    obj.exactQuery = regExp;
    const obj3 = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(str), "i");
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
              let tmp6 = c48;
              let tmp7 = toLocaleLowerCaseResult;
              let tmp8 = tmp6;
              if (tmp6 > 0) {
                obj = {};
                let tmp9 = AutocompleterResultTypes;
                obj.type = AutocompleterResultTypes.GUILD;
                obj.record = value;
                let tmp10 = calculateScore;
                obj.score = calculateScore(tmp6, boosters[value.id]);
                obj.comparator = value.name;
                obj.sortable = toLocaleLowerCaseResult;
                let arr = items.push(obj);
                let tmp12 = toLocaleLowerCaseResult;
                let tmp13 = tmp6;
              }
            }
          }
          let tmp5 = getMatchValue;
          tmp6 = getMatchValue(toLocaleLowerCaseResult, obj, flag);
        }
        iter3 = tmp3();
        iter2 = iter3;
      } while (!iter3.done);
    }
    const sorted = items.sort(importDefault(5046));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryDMChannels(limit) {
    let c0;
    let c1;
    let recipients;
    let num = limit.limit;
    if (num === undefined) {
      num = 10;
    }
    let boosters = limit.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    c0 = undefined;
    let importDefault;
    let items;
    const privateChannelsVersion = authStore.getPrivateChannelsVersion();
    const version = store5.getVersion();
    ({ channelsByRecipientId: c0, recipientsById: c1, recipients } = callback7(privateChannelsVersion, version, authStore2.getUserStoreVersion()));
    let obj = { query: limit.query, members: recipients, limit: recipients.length, boosters };
    const tmp3 = callback7(privateChannelsVersion, version, authStore2.getUserStoreVersion());
    items = [];
    const item = queryMemberList(obj).forEach((record) => {
      const value = _undefined.get(record.record.id);
      if (null != value) {
        const obj = { type: outer1_45.DM, record: value, score: record.score, comparator: _undefined2(outer1_3[36]).getUserTag(_undefined2.get(record.record.id)), sortable: record.sortable };
        items.push(obj);
        const obj2 = _undefined2(outer1_3[36]);
      }
    });
    const sorted = items.sort(importDefault(5046));
    if (items.length > num) {
      items.length = num;
    }
    return items;
  },
  queryGroupDMs(closure_1, _limit) {
    let iter7;
    let limit;
    let query;
    ({ query, limit } = closure_1);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = closure_1.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = closure_1.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    let boosters = closure_1.boosters;
    if (boosters === undefined) {
      boosters = {};
    }
    const obj2 = require(1832) /* isNullOrEmpty */;
    const stripDiacriticsResult = obj2.stripDiacritics(require(1832) /* isNullOrEmpty */.normalize(query.toLocaleLowerCase()));
    let obj = {};
    const obj3 = require(1832) /* isNullOrEmpty */;
    const regExp = new RegExp("^" + importDefault(4118).escape(stripDiacriticsResult), "i");
    obj.exactQuery = regExp;
    const obj5 = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(stripDiacriticsResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = stripDiacriticsResult;
    const items = [];
    const obj6 = importDefault(4118);
    const tmp4 = importDefault(22);
    const tmp4Result = importDefault(22)(authStore.getMutablePrivateChannels());
    const tmp5 = _createForOfIteratorHelperLoose(importDefault(22)(authStore.getMutablePrivateChannels()).values().value());
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
            let tmp32 = require;
            let tmp33 = dependencyMap;
            let obj8 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
            let tmp34 = authStore2;
            let tmp35 = store5;
            let channelName = obj8.computeChannelName(value, authStore2, store5);
            let toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
            let obj10 = require(1832) /* isNullOrEmpty */;
            let obj11 = require(1832) /* isNullOrEmpty */;
            let stripDiacriticsResult1 = obj10.stripDiacritics(obj11.normalize(toLocaleLowerCaseResult));
            let tmp38 = getMatchValue;
            let tmp39 = getMatchValue(stripDiacriticsResult1, obj, flag);
            let items1 = [];
            let tmp40 = _createForOfIteratorHelperLoose;
            let tmp41 = _createForOfIteratorHelperLoose(value.recipients);
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
                let tmp49 = authStore2;
                let user = authStore2.getUser(value);
                if (null != user) {
                  let username = user.username;
                  let tmp51 = importDefault;
                  let tmp52 = dependencyMap;
                  let obj12 = importDefault(3969);
                  let globalName = obj12.getGlobalName(user);
                  let tmp54 = store5;
                  let nickname = store5.getNickname(value);
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
                iter6 = tmp41();
                iter5 = iter6;
                tmp45 = iter6;
                tmp11 = value;
                tmp12 = user;
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
                let tmp61 = require;
                let tmp62 = dependencyMap;
                let obj14 = require(1832) /* isNullOrEmpty */;
                let obj15 = require(1832) /* isNullOrEmpty */;
                let _Math = Math;
                let tmp63 = getMatchValue;
                let bound = Math.min(5, getMatchValue(obj14.stripDiacritics(obj15.normalize(obj13.toLocaleLowerCase())), obj, flag));
                if (bound > tmp59) {
                  tmp59 = bound;
                }
                num = num + 1;
                tmp60 = tmp59;
                tmp18 = bound;
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
              let tmp66 = AutocompleterResultTypes;
              obj.type = AutocompleterResultTypes.GROUP_DM;
              obj.record = value;
              let tmp67 = calculateScore;
              obj.score = calculateScore(tmp60, boosters[value.id]);
              let tmp68 = require;
              let tmp69 = dependencyMap;
              let obj17 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
              let tmp70 = authStore2;
              let tmp71 = store5;
              obj.comparator = obj17.computeChannelName(value, authStore2, store5);
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
        tmp6 = tmp19;
        tmp7 = tmp20;
        tmp8 = tmp21;
        tmp9 = tmp22;
        tmp10 = tmp23;
        tmp11 = tmp24;
        tmp12 = tmp25;
        tmp13 = tmp26;
        tmp14 = tmp27;
        tmp15 = tmp28;
        tmp16 = tmp29;
        tmp17 = tmp30;
        tmp18 = tmp31;
        iter3 = iter7;
      } while (!iter7.done);
    }
    const sorted = items.sort(importDefault(5046));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryApplications(closure_1, _limit) {
    let iter3;
    let limit;
    let query;
    ({ query, limit } = closure_1);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = closure_1.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    let filter = closure_1.filter;
    if (filter === undefined) {
      filter = NOOP;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    const regExp = new RegExp("^" + importDefault(4118).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(toLocaleLowerCaseResult), "i");
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
          let tmp6 = getMatchValue;
          let tmp7 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
          let tmp8 = toLocaleLowerCaseResult1;
          let tmp9 = tmp7;
          if (tmp7 > 0) {
            obj = {};
            let tmp10 = AutocompleterResultTypes;
            obj.type = AutocompleterResultTypes.APPLICATION;
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
    const sorted = items.sort(importDefault(5046));
    if (items.length > limit) {
      items.length = limit;
    }
    return items;
  },
  queryInAppNavigations(closure_1, _limit) {
    let limit;
    let query;
    ({ query, limit } = closure_1);
    if (limit === undefined) {
      limit = 10;
    }
    let flag = closure_1.fuzzy;
    if (flag === undefined) {
      flag = true;
    }
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    let obj = {};
    const regExp = new RegExp("^" + importDefault(4118).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.pWG4ze)];
    obj[constants.SHOP] = items;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const items1 = [intl2.string(require(1212) /* getSystemLocale */.t.ElYQFS), , ];
    const intl3 = require(1212) /* getSystemLocale */.intl;
    items1[1] = intl3.string(require(1212) /* getSystemLocale */.t.pWG4ze);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    items1[2] = intl4.string(require(1212) /* getSystemLocale */.t.EBYkzk);
    obj[constants.SHOP_ORBS_TAB] = items1;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const items2 = [intl5.string(require(1212) /* getSystemLocale */.t.ElYQFS), , ];
    const intl6 = require(1212) /* getSystemLocale */.intl;
    items2[1] = intl6.string(require(1212) /* getSystemLocale */.t["v/R2aC"]);
    const intl7 = require(1212) /* getSystemLocale */.intl;
    items2[2] = intl7.string(require(1212) /* getSystemLocale */.t.qQR4tn);
    obj[constants.QUEST_ORBS] = items2;
    const intl8 = require(1212) /* getSystemLocale */.intl;
    const items3 = [intl8.string(require(1212) /* getSystemLocale */.t.Ipxkog)];
    obj[constants.NITRO_HOME] = items3;
    const intl9 = require(1212) /* getSystemLocale */.intl;
    const items4 = [intl9.string(require(1212) /* getSystemLocale */.t.JALI2K)];
    obj[constants.QUEST_HOME] = items4;
    const intl10 = require(1212) /* getSystemLocale */.intl;
    const items5 = [intl10.string(require(1212) /* getSystemLocale */.t.PHjkRE), ];
    const intl11 = require(1212) /* getSystemLocale */.intl;
    items5[1] = intl11.string(require(1212) /* getSystemLocale */.t.AKcFUj);
    obj[constants.APPS_HOME] = items5;
    const intl12 = require(1212) /* getSystemLocale */.intl;
    const items6 = [intl12.string(require(1212) /* getSystemLocale */.t["3D5yo/"])];
    obj[constants.SETTINGS] = items6;
    const items7 = [];
    for (const key10173 in obj) {
      let tmp20 = key10173;
      let tmp21 = constants;
      let tmp22 = constants[key10173];
      let tmp23 = obj[tmp22];
      if (null == tmp23) {
        continue;
      } else {
        let tmp4 = _createForOfIteratorHelperLoose;
        let tmp5 = _createForOfIteratorHelperLoose(tmp23);
        let iter = tmp5();
        let tmp6 = iter;
        let tmp7 = tmp5;
        let iter2 = iter;
        if (iter.done) {
          continue;
        } else {
          do {
            let value = iter2.value;
            let toLocaleLowerCaseResult1 = value.toLocaleLowerCase();
            let tmp9 = getMatchValue;
            let tmp10 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
            if (tmp10 > 0) {
              obj = {};
              let tmp11 = AutocompleterResultTypes;
              obj.type = AutocompleterResultTypes.IN_APP_NAVIGATION;
              let tmp12 = closure_7;
              obj.record = closure_7.fromType(tmp22);
              let tmp13 = calculateScore;
              obj.score = calculateScore(tmp10);
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
          } while (!iter3.done);
        }
        continue;
      }
      continue;
    }
    const sorted = items7.sort(importDefault(5046));
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
    const regExp = new RegExp("^" + importDefault(4118).escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    const obj2 = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    const items = [];
    const obj3 = importDefault(4118);
    const tmp4 = importDefault(22);
    const tmp4Result = importDefault(22)(sKUs.getSKUs());
    const tmp5 = _createForOfIteratorHelperLoose(importDefault(22)(sKUs.getSKUs()).values().value());
    const iter2 = tmp5();
    let iter3 = iter2;
    if (!iter2.done) {
      do {
        let value = iter3.value;
        let tmp8 = constants4;
        let tmp9 = tmp6;
        let tmp10 = tmp7;
        if (value.type === constants4.DURABLE_PRIMARY) {
          tmp9 = tmp6;
          tmp10 = tmp7;
          if (filter(value)) {
            let name = value.name;
            let toLocaleLowerCaseResult1 = name.toLocaleLowerCase();
            let tmp12 = getMatchValue;
            let tmp13 = getMatchValue(toLocaleLowerCaseResult1, obj, flag);
            tmp9 = toLocaleLowerCaseResult1;
            tmp10 = tmp13;
            if (tmp13 > 0) {
              obj = {};
              let tmp14 = AutocompleterResultTypes;
              obj.type = AutocompleterResultTypes.SKU;
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
        tmp6 = tmp9;
        tmp7 = tmp10;
        iter3 = iter4;
      } while (!iter4.done);
    }
    const sorted = items.sort(importDefault(5046));
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
    let flag = canMentionEveryone.canMentionEveryone;
    if (flag === undefined) {
      flag = false;
    }
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
    let flag6 = canMentionEveryone.includeAllGuildUsers;
    if (flag6 === undefined) {
      flag6 = false;
    }
    let flag7 = canMentionEveryone.includeNonMentionableRoles;
    if (flag7 === undefined) {
      flag7 = false;
    }
    let flag8 = canMentionEveryone.checkRecentlyTalkedOnEmptyQuery;
    if (flag8 === undefined) {
      flag8 = true;
    }
    let limit = canMentionEveryone.limit;
    if (limit === undefined) {
      limit = closure_44;
    }
    ({ allowSnowflake, request } = canMentionEveryone);
    if (allowSnowflake === undefined) {
      allowSnowflake = false;
    }
    let items;
    let closure_7;
    let formatted;
    let substr;
    let guildId;
    let items2;
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
          return { user: record, score: record.score, comparator: record.comparator, nick: outer1_29.getNick(channel.guild_id, record.id), status: outer1_34.getStatus(record.id) };
        });
      }
      obj = { guildId: channel.guild_id, query, limit, checkRecentlyTalkedOnEmptyQuery: flag8, request, allowSnowflake };
      queryChannelUsersResult = self.queryGuildUsers(obj);
    } else {
      items = [];
      closure_7 = items.length;
      formatted = query.toLowerCase();
      const items1 = [];
      substr = items1;
      let tmp5 = items1;
      if (closure_7 < limit) {
        tmp5 = items1;
        if (flag4) {
          guildId = channel.getGuildId();
          const guild = store4.getGuild(guildId);
          tmp5 = items1;
          if (null != guild) {
            const tmp44 = flag(flag7[39]);
            const tmp44Result = flag(flag7[39])(store3.getSortedRoles(guild.id));
            const iter = flag(flag7[39])(store3.getSortedRoles(guild.id)).filter((arg0) => {
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
            const valueResult = flag(flag7[39])(store3.getSortedRoles(guild.id)).filter((arg0) => {
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
            obj = { keys: ["name"] };
            const obj5 = channel(flag7[47]);
            substr = channel(flag7[47]).matchSorter(valueResult, query, obj).slice(0, limit - closure_7);
            closure_7 = closure_7 + substr.length;
            tmp5 = substr;
            const matchSorterResult = channel(flag7[47]).matchSorter(valueResult, query, obj);
          }
        }
      }
      items2 = [];
      if (tmp10) {
        let tmp15Result = closure_7 < limit;
        if (tmp15Result) {
          tmp15Result = flag(flag7[34])(formatted, MENTION_EVERYONE().test);
          const tmp15 = flag(flag7[34]);
        }
        if (tmp15Result) {
          items2.push(MENTION_EVERYONE());
          closure_7 = closure_7 + 1;
        }
        if (flag2) {
          flag2 = closure_7 < limit;
        }
        if (flag2) {
          flag2 = flag(flag7[34])(formatted, MENTION_HERE().test);
          const tmp23 = flag(flag7[34]);
        }
        if (flag2) {
          items2.push(MENTION_HERE());
          closure_7 = closure_7 + 1;
        }
      }
      tmp10 = !channel.isPrivate() && flag && flag4;
      const gameMentionsAutocompleteConfig = channel(flag7[48]).getGameMentionsAutocompleteConfig("mention autocomplete");
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
      const obj1 = { users: items, globals: items2, roles: tmp5 };
      return obj1;
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
    let formatted;
    let items;
    if (flag) {
      let obj = { guildId, query };
      let mapped = self.queryGuildUsers(obj).map((record) => {
        const obj = {};
        const merged = Object.assign(record);
        obj["status"] = outer1_34.getStatus(record.record.id);
        return obj;
      });
      const queryGuildUsersResult = self.queryGuildUsers(obj);
    } else {
      mapped = [];
    }
    formatted = query.toLowerCase();
    items = [];
    let sum = length;
    if (mapped.length < closure_44) {
      sum = length;
      if (flag2) {
        const guild = store4.getGuild(guildId);
        sum = length;
        if (null != guild) {
          const tmp8 = flag3(items[39]);
          const found = flag3(items[39])(store3.getSortedRoles(guild.id)).filter((mentionable) => {
            let tmp = mentionable.mentionable || canMentionEveryone || flag3;
            if (tmp) {
              tmp = flag3(items[34])(formatted, mentionable.name.toLowerCase());
              const str = mentionable.name;
              const tmp4 = flag3(items[34]);
            }
            if (tmp) {
              tmp = !outer1_22(mentionable);
            }
            return tmp;
          });
          const tmp8Result = flag3(items[39])(store3.getSortedRoles(guild.id));
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
        tmp16Result = flag3(items[34])(formatted, MENTION_EVERYONE().test);
        const tmp16 = flag3(items[34]);
      }
      let sum1 = sum;
      if (tmp16Result) {
        items1.push(MENTION_EVERYONE());
        sum1 = sum + 1;
      }
      let tmp25Result = sum1 < closure_44;
      if (tmp25Result) {
        tmp25Result = flag3(items[34])(formatted, MENTION_HERE().test);
        const tmp25 = flag3(items[34]);
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
    let importDefault;
    let regExp;
    let regExp1;
    const toLocaleLowerCaseResult = query.toLocaleLowerCase();
    importDefault = toLocaleLowerCaseResult;
    regExp = new RegExp("^" + importDefault(regExp1[33]).escape(toLocaleLowerCaseResult), "i");
    let obj = importDefault(regExp1[33]);
    regExp1 = new RegExp(importDefault(regExp1[33]).escape(toLocaleLowerCaseResult), "i");
    const obj2 = importDefault(regExp1[33]);
    const mapped = importDefault(regExp1[39])(fuzzy.choices).map((displayName, originalIndex) => {
      displayName = displayName.displayName;
      let obj = { exactQuery: regExp, containQuery: regExp1, queryLower: c1 };
      const tmp = outer1_63(displayName.toLocaleLowerCase(), obj, flag);
      let tmp2 = null;
      if (tmp > 0) {
        obj = { choice: displayName, score: tmp, originalIndex };
        tmp2 = obj;
      }
      return tmp2;
    });
    const found = mapped.filter(flag(regExp1[41]).isNotNullish);
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
    let obj1 = importDefault(4118);
    const regExp = new RegExp("^" + obj1.escape(toLocaleLowerCaseResult), "i");
    obj.exactQuery = regExp;
    let obj2 = importDefault(4118);
    const regExp1 = new RegExp(obj2.escape(toLocaleLowerCaseResult), "i");
    obj.containQuery = regExp1;
    obj.queryLower = toLocaleLowerCaseResult;
    let canSeeOnboardingHomeResult = require(5605) /* canSeeOnboardingHomeInPreview */.canSeeOnboardingHome(guild.id);
    if (canSeeOnboardingHomeResult) {
      const features = guild.features;
      canSeeOnboardingHomeResult = !features.has(constants3.HUB);
    }
    const features2 = guild.features;
    const hasItem = features2.has(constants3.COMMUNITY);
    const obj4 = require(5605) /* canSeeOnboardingHomeInPreview */;
    let result = require(5730) /* useGuildOnboardingAvailable */.isGuildOnboardingAvailable(guild);
    if (result) {
      const features3 = guild.features;
      result = features3.has(constants3.COMMUNITY);
    }
    const items = [];
    obj = { id: StaticChannelId.SERVER_GUIDE };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.name = intl.string(require(1212) /* getSystemLocale */.t.VbpLyU);
    const items1 = [obj, , ];
    obj = { id: StaticChannelId.CHANNEL_BROWSER };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.name = intl2.string(require(1212) /* getSystemLocale */.t.et6wav);
    items1[1] = obj;
    obj1 = { id: StaticChannelId.CUSTOMIZE_COMMUNITY };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.name = intl3.string(require(1212) /* getSystemLocale */.t.h9mGOP);
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
    channelTypes = channelTypes.channelTypes;
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
      const sorted = found.sort(importDefault(5731));
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
    const FrecencyUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    obj = { emojis: closure_9.searchWithoutFetchingLatest(obj) };
    obj = { channel, query, count: maxCount, intention, matchComparator: maxCount.matchComparator };
    return obj;
  },
  queryStickers(items, arg1, items1) {
    let done;
    let importDefault;
    let flag = arg1;
    let tmp = items1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (tmp === undefined) {
      items = [null, NOOP];
      tmp = items;
    }
    [importDefault, ] = tmp;
    let dependencyMap;
    let set;
    let closure_5;
    let value;
    dependencyMap = authStore2.getCurrentUser();
    set = new Set();
    items1 = [];
    closure_5 = items1;
    const FrecencyUserSettingsActionCreators = flag(1331).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    function _loop() {
      if ("" === _undefined) {
        return 1;
      } else {
        const toLocaleLowerCaseResult = _undefined.toLocaleLowerCase();
        const stripDiacriticsResult = toLocaleLowerCaseResult(1832).stripDiacritics(toLocaleLowerCaseResult);
        const _RegExp = RegExp;
        let obj = toLocaleLowerCaseResult(1832);
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + nextResult(4118).escape(stripDiacriticsResult), "i");
        const _RegExp2 = RegExp;
        let obj2 = nextResult(4118);
        const _HermesInternal2 = HermesInternal;
        const regExp1 = new RegExp("" + nextResult(4118).escape(stripDiacriticsResult), "i");
        const stickerMetadataArrays = outer1_12.getStickerMetadataArrays();
        let item = stickerMetadataArrays.forEach((arr) => {
          const item = arr.forEach((arg0, id) => {
            let iter3;
            let type;
            let value;
            const stickerById = outer3_12.getStickerById(id);
            if (null != stickerById) {
              if (regExp1(stickerById, obj2.getStickerSendability(stickerById, outer2_3, regExp))) {
                const tmp4 = outer3_59(arg0);
                const iter = tmp4();
                let num5 = 0;
                let tmp5 = null;
                let iter2 = iter;
                let num6 = 0;
                let tmp6 = null;
                if (!iter.done) {
                  do {
                    ({ type, value } = iter2.value);
                    let tmp7 = outer3_67;
                    let tmp8 = outer3_67(type);
                    let tmp9 = toLocaleLowerCaseResult;
                    let tmp10 = outer1_0;
                    if (toLocaleLowerCaseResult) {
                      if (value === tmp10) {
                        let tmp20 = outer3_48;
                        let num7 = outer3_48 * tmp8;
                        let tmp11 = tmp5;
                      } else {
                        let tmp36 = outer1_1;
                        if (outer1_1.test(value)) {
                          num7 = 7 * tmp8;
                          tmp11 = tmp5;
                        } else {
                          let tmp12 = flag;
                          let tmp13 = dependencyMap;
                          let tmp14 = type !== flag(4799).StickerMetadataTypes.GUILD_NAME;
                          if (tmp14) {
                            let tmp15 = flag;
                            let tmp16 = dependencyMap;
                            tmp14 = type !== flag(4799).StickerMetadataTypes.PACK_NAME;
                          }
                          if (tmp14) {
                            let tmp17 = flag;
                            let tmp18 = dependencyMap;
                            tmp14 = type !== flag(4799).StickerMetadataTypes.STICKER_NAME;
                          }
                          if (!tmp14) {
                            let tmp19 = outer1_2;
                            tmp14 = !outer1_2.test(value);
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
                        let tmp35 = outer3_48;
                        num7 = outer3_48 * tmp8;
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
                const stickerFrecencyWithoutFetchingLatest = outer3_11.stickerFrecencyWithoutFetchingLatest;
                const score = stickerFrecencyWithoutFetchingLatest.getScore(id);
                let result = num6;
                if (null != score) {
                  result = num6 * (score / 100);
                }
                let tmp24 = result > 0 && null != tmp6;
                if (tmp24) {
                  tmp24 = !outer2_4.has(stickerById.id);
                }
                if (tmp24) {
                  outer2_4.add(stickerById.id);
                  const obj = { sticker: stickerById, comparator: tmp6, score: result };
                  outer2_5.push(obj);
                }
              }
              obj2 = flag(5732);
            }
          });
        });
      }
    }
    let tmp10 = _createForOfIteratorHelperLoose(items);
    let iter2 = tmp10();
    if (!iter2.done) {
      do {
        value = iter2.value;
        let _loopResult = _loop();
        let iter3 = tmp10();
        iter2 = iter3;
        done = iter3.done;
      } while (!done);
    }
    let obj = importDefault(22)(items1);
    let valueResult = importDefault(22)(items1).sortBy((score) => -1 * score.score).value();
    closure_5 = valueResult;
    if (0 === valueResult.length) {
      closure_5 = closure_50;
      valueResult = closure_50;
    }
    return valueResult;
  },
  querySoundmoji(arg0, channel) {
    const _require = channel;
    const currentUser = authStore2.getCurrentUser();
    let tmp2 = !closure_10.isFetching();
    if (tmp2) {
      tmp2 = !closure_10.hasFetchedAllSounds();
    }
    if (tmp2) {
      const result = _require(5733).maybeFetchSoundboardSounds();
      const obj = _require(5733);
    }
    const FrecencyUserSettingsActionCreators = _require(1331).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    const sounds = closure_10.getSounds();
    const reduced = Array.from(sounds.values()).reduce((arg0, arr) => {
      let closure_0 = arg0;
      const item = arr.forEach((arg0) => {
        let guild_id;
        if (null != arr) {
          guild_id = arr.guild_id;
        }
        let id;
        if (null != arr) {
          id = arr.id;
        }
        if (tmp(arg0, guild_id, id)) {
          arr = arr.push(arg0);
        }
      });
      return arg0;
    }, []);
    let arr = Array.from(sounds.values());
    return _require(5738).searchSounds(arg0, reduced, currentUser, channel);
  },
  matchSentinel(arg0, arg1, outer1_12) {
    let tmp = !tmp8.test(arg1);
    if (tmp) {
      tmp = arg0 === outer1_12;
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
let result = require("_defineProperties").fileFinishedImporting("utils/AutocompleteUtils.tsx");

export default areArraysShallowlyEqual;
export const WHITESPACE_REGEX = tmp8;
export { calculateScore };
export const getGameProfileMatchTier = function getGameProfileMatchTier(name, closure_0, arg2) {
  const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  if (toLocaleLowerCaseResult === closure_0) {
    let num2 = c48;
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
