// Module ID: 9269
// Function ID: 72416
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9269 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function isSurveyDataStale() {
  let tmp = null == obj.lastFetched;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - obj.lastFetched >= DAY;
  }
  return tmp;
}
function fetchSurveyIfNeeded() {
  let tmp = closure_23;
  if (!closure_23) {
    const tmp3 = isSurveyDataStale();
    let tmp4 = !tmp3;
    if (!tmp3) {
      tmp4 = null == obj.surveyOverride;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    closure_23 = true;
    const obj = arg1(dependencyMap[12]);
    obj.surveyFetch(obj.surveyOverride, true);
  }
}
function meetsSurveyRequirements(closure_22) {
  let obj;
  let guild_requirements = closure_22.guild_requirements;
  if (undefined === guild_requirements) {
    guild_requirements = [];
  }
  let guild_size = closure_22.guild_size;
  if (undefined === guild_size) {
    guild_size = [null, null];
  }
  let guild_permissions = closure_22.guild_permissions;
  if (undefined === guild_permissions) {
    guild_permissions = [];
  }
  let flag = true;
  if (0 !== guild_requirements.length) {
    const tmp58 = _createForOfIteratorHelperLoose(guild_requirements);
    let iter2 = tmp58();
    if (iter2.done) {
      const hasItem = guild_requirements.includes(obj.GUILD_SIZE_ALL);
      const tmp6 = _createForOfIteratorHelperLoose(guildsArray.getGuildsArray());
      const iter3 = tmp6();
      let iter4 = iter3;
      let flag2 = true;
      let flag3 = true;
      if (!iter3.done) {
        while (true) {
          let value = iter4.value;
          if (hasItem) {
            let tmp15 = memberCount;
            let tmp16 = value;
            let memberCount = memberCount.getMemberCount(value.id);
            let flag4 = false;
            let tmp18 = memberCount;
            let tmp19 = tmp9;
            let tmp20 = tmp10;
            let tmp21 = tmp11;
            let tmp22 = tmp12;
            let tmp23 = tmp13;
            if (null == memberCount) {
              let iter7 = tmp6();
              flag2 = flag4;
              let tmp8 = tmp18;
              let tmp9 = tmp19;
              let tmp10 = tmp20;
              let tmp11 = tmp21;
              let tmp12 = tmp22;
              let tmp13 = tmp23;
              iter4 = iter7;
              flag3 = flag4;
              break;
            } else if (null == guild_size[0]) {
              tmp8 = memberCount;
              if (null != guild_size[1]) {
                tmp8 = memberCount;
                flag4 = false;
                tmp18 = memberCount;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
                tmp23 = tmp13;
              }
            } else {
              flag4 = false;
              tmp18 = memberCount;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
              tmp23 = tmp13;
            }
          } else {
            let tmp14 = obj;
          }
          let tmp24 = obj;
          if (!guild_requirements.includes(obj.IS_COMMUNITY)) {
            let tmp27 = obj;
            if (!guild_requirements.includes(obj.IS_HUB)) {
              let tmp30 = obj;
              if (!guild_requirements.includes(obj.GUILD_PERMISSIONS)) {
                let tmp39 = currentUser;
                let currentUser = currentUser.getCurrentUser();
                let id;
                if (null != currentUser) {
                  id = currentUser.id;
                }
                let tmp42 = value;
                let tmp43 = id === value.ownerId;
                let tmp44 = closure_11;
                let tmp45 = constants2;
                let canResult = closure_11.can(constants2.ADMINISTRATOR, value);
                let tmp47 = obj;
                if (!guild_requirements.includes(obj.IS_OWNER)) {
                  let tmp48 = obj;
                  if (!guild_requirements.includes(obj.IS_ADMIN)) {
                    let tmp49 = closure_21;
                    let tmp50 = null != closure_21 ? closure_21 : {};
                    closure_21 = tmp50;
                    if (null == tmp50[closure_22.key]) {
                      let tmp51 = closure_21;
                      closure_21[closure_22.key] = closure_22;
                    }
                    let tmp52 = guildId;
                    let guildId = guildId.getGuildId();
                    let tmp54 = null != guildId;
                    if (tmp54) {
                      let tmp55 = value;
                      tmp54 = guildId === value.id;
                    }
                    let tmp56 = obj;
                    if (!guild_requirements.includes(obj.IS_VIEWING)) {
                      flag4 = flag2;
                      tmp18 = tmp8;
                      tmp19 = currentUser;
                      tmp20 = tmp43;
                      tmp21 = canResult;
                      tmp22 = guildId;
                      tmp23 = tmp54;
                      flag = true;
                      if (!hasItem) {
                        break;
                      }
                    } else {
                      flag4 = flag2;
                      tmp18 = tmp8;
                      tmp19 = currentUser;
                      tmp20 = tmp43;
                      tmp21 = canResult;
                      tmp22 = guildId;
                      tmp23 = tmp54;
                    }
                  } else {
                    flag4 = flag2;
                    tmp18 = tmp8;
                    tmp19 = currentUser;
                    tmp20 = tmp43;
                    tmp22 = tmp12;
                    tmp23 = tmp13;
                    tmp21 = canResult;
                  }
                } else {
                  flag4 = flag2;
                  tmp18 = tmp8;
                  tmp19 = currentUser;
                  tmp20 = tmp43;
                  tmp21 = canResult;
                  tmp22 = tmp12;
                  tmp23 = tmp13;
                }
              } else {
                flag4 = flag2;
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
                tmp23 = tmp13;
                if (0 !== guild_permissions.length) {
                  let flag5 = false;
                  let tmp59 = _createForOfIteratorHelperLoose;
                  let tmp60 = _createForOfIteratorHelperLoose(guild_permissions);
                  let tmp61 = tmp60;
                  let iter8 = tmp60();
                  let iter6 = iter8;
                  if (!iter8.done) {
                    let tmp31 = iter6;
                    value = iter6.value;
                    let tmp32 = importAll;
                    let tmp33 = dependencyMap;
                    obj = importAll(dependencyMap[13]);
                    let tmp34 = value;
                    let tmp35 = closure_11;
                    let tmp36 = value;
                    while (!closure_11.can(obj.deserialize(value), value)) {
                      do {
                        let tmp37 = tmp60;
                        let iter5 = tmp61();
                        iter6 = iter5;
                      } while (iter5.done);
                    }
                    flag5 = true;
                  }
                  let tmp38 = flag5;
                  flag4 = flag2;
                  tmp18 = tmp8;
                  tmp19 = tmp9;
                  tmp20 = tmp10;
                  tmp21 = tmp11;
                  tmp22 = tmp12;
                  tmp23 = tmp13;
                }
              }
            } else {
              let tmp28 = value;
              let features2 = value.features;
              let tmp29 = constants;
              flag4 = flag2;
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
              tmp23 = tmp13;
            }
          } else {
            let tmp25 = value;
            let features = value.features;
            let tmp26 = constants;
            flag4 = flag2;
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
            tmp23 = tmp13;
          }
        }
      }
      flag = false;
      if (hasItem) {
        flag = false;
        if (flag3) {
          flag = true;
        }
      }
    } else {
      flag = false;
      while (set.has(iter2.value)) {
        let iter = tmp58();
        iter2 = iter;
        break;
      }
    }
  }
  return flag;
}
function setSurvey(survey) {
  survey = survey.survey;
  let closure_23 = false;
  obj.lastFetched = Date.now();
  if (survey.isActionTriggered) {
    const _Date = Date;
    obj.lastActionTriggered = Date.now();
  }
  if (null == obj.hiddenSurveys) {
    obj.hiddenSurveys = {};
  }
  let tmp3 = null != survey;
  let tmp4 = tmp3;
  if (tmp3) {
    tmp4 = null == obj.hiddenSurveys[survey.key];
  }
  if (tmp3) {
    tmp3 = meetsSurveyRequirements(survey);
  }
  let tmp7 = closure_19;
  if (!closure_19) {
    tmp7 = closure_20;
  }
  const Storage = arg1(dependencyMap[14]).Storage;
  const value = Storage.get(closure_16);
  let tmp9 = null == value;
  if (!tmp9) {
    const obj = importDefault(dependencyMap[15])();
    tmp9 = obj.diff(value, "day") < 7;
  }
  let tmp12 = null;
  if (tmp4) {
    tmp12 = null;
    if (tmp3) {
      tmp12 = null;
      if (!tmp7) {
        tmp12 = null;
        if (!tmp9) {
          tmp12 = survey;
        }
      }
    }
  }
  let closure_22 = tmp12;
}
function handleSelectedGuildChange() {
  if (null != closure_22) {
    const tmp3 = meetsSurveyRequirements(closure_22);
    let flag = tmp3;
    if (!tmp3) {
      closure_22 = null;
      flag = false;
    }
    if (flag) {
      return false;
    }
  }
  closure_21 = null != closure_21 ? closure_21 : {};
  const first = Object.values(closure_21)[0];
  if (null != first) {
    if (meetsSurveyRequirements(first)) {
      const obj = { type: "SURVEY_FETCHED", survey: first };
      setSurvey(obj);
    }
  }
  if (null != closure_22) {
    closure_22 = null;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
({ GuildFeatures: closure_14, Permissions: closure_15, FIRST_RUN_DATE_KEY: closure_16 } = arg1(dependencyMap[10]));
let obj = { height: null, flex: null, justifyContent: null, width: null, height: null, hiddenSurveys: {} };
let closure_19 = false;
let closure_20 = false;
let closure_21 = {};
let closure_22 = null;
let closure_23 = false;
const DAY = importDefault(dependencyMap[11]).Millis.DAY;
const result = 10 * importDefault(dependencyMap[11]).Millis.HOUR;
obj = { IS_OWNER: "is_owner", IS_ADMIN: "is_admin", IS_COMMUNITY: "is_community", GUILD_SIZE: "guild_size", IS_HUB: "is_hub", IS_VIEWING: "is_viewing", GUILD_PERMISSIONS: "guild_permissions", GUILD_SIZE_ALL: "guild_size_all" };
const set = new Set(Object.values(obj));
let tmp5 = (PersistedStore) => {
  class SurveyStore {
    constructor() {
      self = this;
      tmp = closure_4(this, SurveyStore);
      obj = closure_7(SurveyStore);
      tmp2 = closure_6;
      if (closure_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SurveyStore;
  callback2(SurveyStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      this.waitFor(closure_9, closure_10, closure_11, closure_12, closure_13);
      if (null == arg0) {
        tmp = closure_17;
      }
      const items = [closure_12];
      self.syncWith(items, closure_34);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_18;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentSurvey",
    value() {
      let tmp = null;
      if (!callback4()) {
        tmp = closure_22;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSurveyOverride",
    value() {
      return closure_18.surveyOverride;
    }
  };
  items[4] = {
    key: "getLastSeenTimestamp",
    value() {
      return closure_18.lastSeen;
    }
  };
  items[5] = {
    key: "shouldAllowSurveyAction",
    value() {
      const lastActionTriggered = closure_18.lastActionTriggered;
      let num = 0;
      const timestamp = Date.now();
      if (null != lastActionTriggered) {
        num = lastActionTriggered;
      }
      return timestamp - num >= closure_25;
    }
  };
  return callback(SurveyStore, items);
}(importDefault(dependencyMap[16]).PersistedStore);
tmp5.displayName = "SurveyStore";
tmp5.persistKey = "SurveyStore";
const items = [
  (arg0) => {
    const merged = Object.assign(arg0);
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    // DelByIdLong (0x48)
    return {};
  },
  (lastSeen) => {
    const obj = {};
    const merged = Object.assign(lastSeen);
    lastSeen = lastSeen.lastSeen;
    let tmp2 = null;
    if (null != lastSeen) {
      tmp2 = lastSeen;
    }
    obj["lastSeen"] = tmp2;
    return obj;
  },
  (hiddenSurveys) => {
    const obj = {};
    const merged = Object.assign(hiddenSurveys);
    hiddenSurveys = hiddenSurveys.hiddenSurveys;
    if (null == hiddenSurveys) {
      hiddenSurveys = {};
    }
    obj["hiddenSurveys"] = hiddenSurveys;
    return obj;
  }
];
tmp5.migrations = items;
obj = {
  CONNECTION_OPEN: fetchSurveyIfNeeded,
  CONNECTION_RESUMED: fetchSurveyIfNeeded,
  SURVEY_FETCHED: setSurvey,
  SURVEY_HIDE: function handleSurveyHide(key) {
    obj.hiddenSurveys[key.key] = true;
    let closure_22 = null;
    closure_21 = null != closure_21 ? closure_21 : {};
    delete r0[r1];
  },
  SURVEY_OVERRIDE: function handleSurveyOverride(id) {
    id = id.id;
    obj.surveyOverride = id;
    if (null != id) {
      const hiddenSurveys = obj.hiddenSurveys;
      delete r0[r2];
    }
    const obj = arg1(dependencyMap[12]);
    obj.surveyFetch(obj.surveyOverride, true);
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    let closure_19 = true;
  },
  DISPLAYED_INVITE_SHOW: function handleInviteShow() {
    let closure_20 = true;
  },
  LOGOUT: function handleLogout() {
    obj.hiddenSurveys = {};
  },
  SURVEY_SEEN: function handleSurveySeen() {
    obj.lastSeen = Date.now();
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[17]), obj);
const tmp2 = arg1(dependencyMap[10]);
const result1 = arg1(dependencyMap[18]).fileFinishedImporting("stores/SurveyStore.tsx");

export default tmp5;
export const SURVEY_REFETCH_INTERVAL = DAY;
export const SURVEY_ACTION_INTERVAL = result;
