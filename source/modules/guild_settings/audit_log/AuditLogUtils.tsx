// Module ID: 16111
// Function ID: 123943
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: checkChangesToRender, getChangeStrings, getChangeTitle, getSimpleAuditLogChangeDetails, getSimpleAuditLogTitleContextFromChange, getSimpleAuditLogTitleFromChange, getStringForAddedChannelFlag, getStringForPermission, getStringForRemovedChannelFlag, transformLogs

// Module 16111 (_createForOfIteratorHelperLoose)
let AuditLogChangeKeys;
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
function CommonChangeStrings() {
  return { [closure_16.REASON]: () => callback(closure_3[17]).t.2IW3C5 };
}
function shouldNotRenderChangeDetail(log, key) {
  if (log.actionType === constants4.DELETE) {
    if (log.action !== constants.MEMBER_BAN_ADD) {
      if (log.action !== constants.MEMBER_KICK) {
        if (log.action !== constants.MEMBER_PRUNE) {
          return key.key !== AuditLogChangeKeys.REASON;
        }
      }
    }
  }
  let tmp5 = null != tmp4;
  if (tmp5) {
    tmp5 = true === tmp4[key.key];
  }
  return tmp5;
}
function findChangeByKey(COMMUNICATION_DISABLED_UNTIL, changes) {
  changes = COMMUNICATION_DISABLED_UNTIL;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === key);
  }
  return found;
}
function findAllChangeByKey(ROLES_ADD, changes) {
  changes = ROLES_ADD;
  if (null != changes.changes) {
    changes = changes.changes;
    let found = changes.filter((key) => key.key === key);
  } else {
    found = [];
  }
  return found;
}
function getPermissionChanges(arg0, arg1) {
  let num = 0;
  if ("string" === typeof arg0) {
    num = arg0;
  }
  const obj = importAll(dependencyMap[21]);
  const deserializeResult = importAll(dependencyMap[21]).deserialize(num);
  let num2 = 0;
  if ("string" === typeof arg1) {
    num2 = arg1;
  }
  const obj2 = importAll(dependencyMap[21]);
  const deserializeResult1 = importAll(dependencyMap[21]).deserialize(num2);
  const obj3 = importAll(dependencyMap[21]);
  importAll(dependencyMap[21]);
  const added = [];
  const removed = [];
  for (const key10035 in closure_23) {
    let tmp10 = key10035;
    let tmp11 = closure_23;
    let tmp12 = closure_23[key10035];
    let tmp13 = closure_2;
    let tmp14 = closure_3;
    let obj5 = closure_2(closure_3[21]);
    if (obj5.has(removeResult, tmp12)) {
      let arr = added.push(tmp12);
    }
    let tmp7 = closure_2;
    let tmp8 = closure_3;
    let obj4 = closure_2(closure_3[21]);
    if (!obj4.has(tmp5, tmp12)) {
      continue;
    } else {
      arr = removed.push(tmp12);
      // continue
    }
    continue;
  }
  return { added, removed };
}
function convertForumTag(emoji_id) {
  let tmp = null;
  if (null != emoji_id) {
    const obj = {};
    ({ id: obj.id, name: obj.name } = emoji_id);
    emoji_id = undefined;
    if (0 !== emoji_id.emoji_id) {
      emoji_id = emoji_id.emoji_id;
    }
    obj.emojiId = emoji_id;
    ({ emoji_name: obj.emojiName, moderated: obj.moderated } = emoji_id);
    tmp = obj;
  }
  return tmp;
}
function transformAppliedForumTagChange(oldValue, targetId) {
  let iter2;
  let iter4;
  let tmp = oldValue;
  let arr = Array.isArray(oldValue.oldValue) ? tmp.oldValue : [];
  const arr2 = Array.isArray(tmp.newValue) ? tmp.newValue : [];
  const channel = store.getChannel(targetId.targetId);
  let parent_id;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  let channel1 = null;
  if (null != parent_id) {
    channel1 = store.getChannel(channel.parent_id);
  }
  let availableTags;
  if (null != channel1) {
    availableTags = channel1.availableTags;
  }
  if (null == availableTags) {
    availableTags = [];
  }
  let obj = {};
  targetId = obj;
  const item = availableTags.forEach((id) => {
    obj[id.id] = { name: id.name, emojiId: id.emojiId, emojiName: id.emojiName };
  });
  const importDefault = new Set(arr);
  const set = new Set(arr);
  const importAll = new Set(arr2);
  const found = arr2.filter((arg0) => !set.has(arg0));
  const items = [];
  const found1 = arr.filter((arg0) => !set1.has(arg0));
  const tmp11 = _createForOfIteratorHelperLoose(found);
  let iter = tmp11();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp12 = obj[value];
      if (null == tmp12) {
        obj = { id: value, name: value };
        tmp12 = obj;
      }
      let tmp13 = closure_9;
      let tmp14 = closure_16;
      let prototype = closure_9.prototype;
      let tmp15 = new.target;
      let tmp16 = new.target;
      let tmp17 = null;
      let tmp18 = tmp12;
      let tmp19 = new closure_9(closure_16.AVAILABLE_TAG_ADD, null, tmp12);
      let tmp20 = tmp19;
      arr = items.push(tmp19);
      iter2 = tmp11();
      iter = iter2;
    } while (!iter2.done);
  }
  const tmp22 = _createForOfIteratorHelperLoose(found1);
  let iter3 = tmp22();
  if (!iter3.done) {
    do {
      value = iter3.value;
      let tmp23 = obj[value];
      if (null == tmp23) {
        obj = { id: value, name: value };
        tmp23 = obj;
      }
      let tmp24 = closure_9;
      let tmp25 = closure_16;
      let prototype2 = closure_9.prototype;
      let tmp26 = new.target;
      let tmp27 = new.target;
      let tmp28 = null;
      let tmp29 = tmp23;
      let tmp30 = new closure_9(closure_16.AVAILABLE_TAG_DELETE, null, tmp23);
      let tmp31 = tmp30;
      arr = items.push(tmp30);
      iter4 = tmp22();
      iter3 = iter4;
    } while (!iter4.done);
  }
  if (items.length > 0) {
    tmp = items;
  }
  return tmp;
}
function transformAvailableForumTagChange(arg0) {
  let newValue;
  let oldValue;
  ({ oldValue, newValue } = arg0);
  if (!Array.isArray(oldValue)) {
    oldValue = [];
  }
  if (!Array.isArray(newValue)) {
    newValue = [];
  }
  if (0 === oldValue.length) {
    if (0 === newValue.length) {
      return arg0;
    }
  }
  let obj = {};
  const arg1 = obj;
  obj = {};
  const importDefault = obj;
  const item = oldValue.forEach((id) => {
    obj[id.id] = id;
  });
  const item1 = newValue.forEach((id) => {
    obj[id.id] = id;
  });
  if (oldValue.length < newValue.length) {
    for (const key10026 in obj) {
      let tmp37 = key10026;
      if (null != obj[key10026]) {
        continue;
      } else {
        let tmp5 = closure_9;
        let tmp6 = closure_16;
        let AVAILABLE_TAG_ADD = closure_16.AVAILABLE_TAG_ADD;
        let tmp7 = closure_47;
        let prototype = closure_9.prototype;
        let tmp8 = new.target;
        let tmp9 = new.target;
        let tmp10 = AVAILABLE_TAG_ADD;
        let tmp11 = null;
        let tmp12 = new closure_9(AVAILABLE_TAG_ADD, null, closure_47(obj[key10026]));
        let tmp13 = tmp12;
        return tmp12;
      }
    }
  }
  if (oldValue.length > newValue.length) {
    for (const key10046 in obj) {
      let tmp38 = key10046;
      if (null != obj[key10046]) {
        continue;
      } else {
        let tmp16 = closure_9;
        let tmp17 = closure_16;
        let AVAILABLE_TAG_DELETE = closure_16.AVAILABLE_TAG_DELETE;
        let tmp18 = closure_47;
        let prototype2 = closure_9.prototype;
        let tmp19 = new.target;
        let tmp20 = new.target;
        let tmp21 = AVAILABLE_TAG_DELETE;
        let tmp22 = null;
        let tmp23 = new closure_9(AVAILABLE_TAG_DELETE, null, closure_47(obj[key10046]));
        let tmp24 = tmp23;
        return tmp23;
      }
    }
  }
  for (const key10065 in obj) {
    let tmp39 = key10065;
    let tmp40 = obj[key10065];
    let tmp41 = obj[key10065];
    let name;
    if (null != tmp41) {
      name = tmp41.name;
    }
    if (name === tmp40.name) {
      let emoji_id;
      if (null != tmp41) {
        emoji_id = tmp41.emoji_id;
      }
      if (emoji_id === tmp40.emoji_id) {
        let emoji_name;
        if (null != tmp41) {
          emoji_name = tmp41.emoji_name;
        }
      }
    }
    let tmp28 = closure_9;
    let tmp29 = closure_16;
    let AVAILABLE_TAG_EDIT = closure_16.AVAILABLE_TAG_EDIT;
    let tmp30 = closure_47;
    let tmp31 = closure_47(tmp40);
    let prototype3 = closure_9.prototype;
    let tmp32 = new.target;
    let tmp33 = new.target;
    let tmp34 = AVAILABLE_TAG_EDIT;
    let tmp35 = new closure_9(AVAILABLE_TAG_EDIT, tmp31, closure_47(tmp41));
    let tmp36 = tmp35;
    return tmp35;
  }
  return arg0;
}
function convertValue(newValue) {
  let oldValue;
  ({ newValue, oldValue } = newValue);
  if (null != newValue.newValue) {
    const tmp = arg1(newValue.newValue);
    let tmp3 = tmp;
    if (tmp2) {
      tmp3 = arg2(tmp);
    }
    newValue = tmp3;
    const tmp2 = null != arg2 && null != tmp;
  }
  if (null != newValue.oldValue) {
    const tmp4 = arg1(newValue.oldValue);
    let tmp6 = tmp4;
    if (tmp5) {
      tmp6 = arg2(tmp4);
    }
    oldValue = tmp6;
    const tmp5 = null != arg2 && null != tmp4;
  }
  let tmp7 = AuditLogChange;
  if (!oldValue) {
    oldValue = newValue.oldValue;
  }
  if (!newValue) {
    newValue = newValue.newValue;
  }
  tmp7 = new tmp7(newValue.key, oldValue, newValue);
  return tmp7;
}
function getTargetValue(targetId) {
  targetId = arg4;
  if (null == arg4) {
    targetId = targetId.targetId;
  }
  const tmp = arg2(targetId);
  let tmp3 = null;
  if (tmp2) {
    tmp3 = arg3(tmp);
  }
  let tmp4 = tmp3;
  if (null == tmp3) {
    tmp4 = tmp3;
    if (tmp7) {
      tmp4 = tmp6[targetId];
    }
    const tmp7 = null != deletedTargets.deletedTargets[targetId.targetType] && null != deletedTargets.deletedTargets[targetId.targetType][targetId];
  }
  let tmp8 = tmp4;
  if (null == tmp4) {
    tmp8 = tmp4;
    if (null != targetId.changes) {
      const changes = targetId.changes;
      const found = changes.find((key) => key.key === arg1);
      tmp8 = tmp4;
      if (null != found) {
        tmp8 = found.newValue || found.oldValue;
        const tmp10 = found.newValue || found.oldValue;
      }
    }
  }
  if (null != tmp8) {
    targetId = tmp8;
  }
  return targetId;
}
function convertSubtarget(arg0, arg1, arg2) {
  let tmp = arg0;
  const tmp2 = arg1(arg0);
  if (tmp3) {
    tmp = arg2(tmp2);
  }
  return tmp;
}
function getNullableOldValueString(VOtRSO, L5lDFJ) {
  L5lDFJ = VOtRSO;
  const importDefault = L5lDFJ;
  return (oldValue) => null == oldValue.oldValue ? oldValue : arg1;
}
function getNullableNewValueString(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return (newValue) => null == newValue.newValue ? newValue : arg1;
}
function getNullableNewOrOldValueString(IIanaY, 2NPsYu, 8crtns) {
  const importDefault = _2NPsYu;
  const importAll = _8crtns;
  const dependencyMap = arg3;
  return (newValue) => {
    if (null != newValue.newValue) {
      if (null != newValue.oldValue) {
        let tmp = newValue;
      }
      return tmp;
    }
    if (null != newValue.newValue) {
      tmp = arg1;
    } else {
      tmp = null != newValue.oldValue ? arg2 : arg3;
    }
  };
}
function getNewValueStringByBoolean(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return (newValue) => newValue.newValue ? newValue : arg1;
}
function getNullableNewValueStringByKey(arg0) {
  const arg1 = arg0;
  return (arg0) => arg0[arg0.newValue];
}
function getNewValueStringByKeyOrDefault(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return (arg0) => {
    let tmp = arg0[arg0.newValue];
    if (null == tmp) {
      tmp = arg1;
    }
    return tmp;
  };
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const AuditLogChange = arg1(dependencyMap[5]).AuditLogChange;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[11]);
({ AuditLogActions: closure_15, AuditLogChangeKeys } = tmp2);
const AuditLogTargetTypes = tmp2.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = tmp2);
const ChannelFlags = arg1(dependencyMap[12]).ChannelFlags;
const AutomodTriggerType = arg1(dependencyMap[13]).AutomodTriggerType;
({ GuildScheduledEventEntityTypes: closure_32, GuildScheduledEventStatus: closure_33, GuildScheduledEventPrivacyLevel: closure_34 } = arg1(dependencyMap[14]));
let importDefaultResult = importDefault(dependencyMap[15]);
importDefaultResult = new importDefaultResult("AuditLogUtils");
const items = [arg1(dependencyMap[16]).TimeUnits.DAYS, arg1(dependencyMap[16]).TimeUnits.HOURS, arg1(dependencyMap[16]).TimeUnits.MINUTES, arg1(dependencyMap[16]).TimeUnits.SECONDS];
let closure_37 = { [AuditLogTargetTypes.CHANNEL]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.CHANNEL_OVERWRITE]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.INVITE]: { [AuditLogChangeKeys.INVITER_ID]: true, [AuditLogChangeKeys.USES]: true }, [AuditLogTargetTypes.WEBHOOK]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.APPLICATION_ID]: true }, [AuditLogTargetTypes.INTEGRATION]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.NAME]: true }, [AuditLogTargetTypes.THREAD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true }, [AuditLogTargetTypes.STICKER]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ASSET]: true, [AuditLogChangeKeys.FORMAT_TYPE]: true, [AuditLogChangeKeys.AVAILABLE]: true, [AuditLogChangeKeys.GUILD_ID]: true }, [AuditLogTargetTypes.GUILD_HOME]: { [AuditLogChangeKeys.ENTITY_TYPE]: true }, [AuditLogTargetTypes.GUILD_ONBOARDING]: { [AuditLogChangeKeys.PROMPTS]: true }, [AuditLogTargetTypes.GUILD_SOUNDBOARD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.SOUND_ID]: true } };
class ACTION_FILTER_ITEMS {
  constructor() {
    obj = { value: AuditLogActions.ALL };
    intl = arg1(dependencyMap[17]).intl;
    obj.label = intl.string(arg1(dependencyMap[17]).t.QxEVcv);
    intl2 = arg1(dependencyMap[17]).intl;
    obj.valueLabel = intl2.string(arg1(dependencyMap[17]).t.an9Ry3);
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    obj = { value: AuditLogActions.GUILD_UPDATE };
    intl3 = arg1(dependencyMap[17]).intl;
    obj.label = intl3.string(arg1(dependencyMap[17]).t.5INZa3);
    items[1] = obj;
    obj1 = { value: AuditLogActions.CHANNEL_CREATE };
    intl4 = arg1(dependencyMap[17]).intl;
    obj1.label = intl4.string(arg1(dependencyMap[17]).t.2uh4vJ);
    items[2] = obj1;
    obj2 = { value: AuditLogActions.CHANNEL_UPDATE };
    intl5 = arg1(dependencyMap[17]).intl;
    obj2.label = intl5.string(arg1(dependencyMap[17]).t.mGsBLV);
    items[3] = obj2;
    obj3 = { value: AuditLogActions.CHANNEL_DELETE };
    intl6 = arg1(dependencyMap[17]).intl;
    obj3.label = intl6.string(arg1(dependencyMap[17]).t.hCHzAr);
    items[4] = obj3;
    obj4 = { value: AuditLogActions.CHANNEL_OVERWRITE_CREATE };
    intl7 = arg1(dependencyMap[17]).intl;
    obj4.label = intl7.string(arg1(dependencyMap[17]).t.8TnAMP);
    items[5] = obj4;
    obj5 = { value: AuditLogActions.CHANNEL_OVERWRITE_UPDATE };
    intl8 = arg1(dependencyMap[17]).intl;
    obj5.label = intl8.string(arg1(dependencyMap[17]).t.Jqx0Bi);
    items[6] = obj5;
    obj6 = { value: AuditLogActions.CHANNEL_OVERWRITE_DELETE };
    intl9 = arg1(dependencyMap[17]).intl;
    obj6.label = intl9.string(arg1(dependencyMap[17]).t.gBXOr4);
    items[7] = obj6;
    obj7 = { value: AuditLogActions.MEMBER_KICK };
    intl10 = arg1(dependencyMap[17]).intl;
    obj7.label = intl10.string(arg1(dependencyMap[17]).t.Q1/hN8);
    items[8] = obj7;
    obj8 = { value: AuditLogActions.MEMBER_PRUNE };
    intl11 = arg1(dependencyMap[17]).intl;
    obj8.label = intl11.string(arg1(dependencyMap[17]).t.tOTTja);
    items[9] = obj8;
    obj9 = { value: AuditLogActions.MEMBER_BAN_ADD };
    intl12 = arg1(dependencyMap[17]).intl;
    obj9.label = intl12.string(arg1(dependencyMap[17]).t.NfPn+e);
    items[10] = obj9;
    obj10 = { value: AuditLogActions.MEMBER_BAN_REMOVE };
    intl13 = arg1(dependencyMap[17]).intl;
    obj10.label = intl13.string(arg1(dependencyMap[17]).t.XCsGfI);
    items[11] = obj10;
    obj11 = { value: AuditLogActions.MEMBER_UPDATE };
    intl14 = arg1(dependencyMap[17]).intl;
    obj11.label = intl14.string(arg1(dependencyMap[17]).t.F/jmNJ);
    items[12] = obj11;
    obj12 = { value: AuditLogActions.MEMBER_ROLE_UPDATE };
    intl15 = arg1(dependencyMap[17]).intl;
    obj12.label = intl15.string(arg1(dependencyMap[17]).t.zAveSI);
    items[13] = obj12;
    obj13 = { value: AuditLogActions.MEMBER_MOVE };
    intl16 = arg1(dependencyMap[17]).intl;
    obj13.label = intl16.string(arg1(dependencyMap[17]).t.QshteR);
    items[14] = obj13;
    obj14 = { value: AuditLogActions.MEMBER_DISCONNECT };
    intl17 = arg1(dependencyMap[17]).intl;
    obj14.label = intl17.string(arg1(dependencyMap[17]).t.Z45os7);
    items[15] = obj14;
    obj15 = { value: AuditLogActions.BOT_ADD };
    intl18 = arg1(dependencyMap[17]).intl;
    obj15.label = intl18.string(arg1(dependencyMap[17]).t.vuH24Z);
    items[16] = obj15;
    obj16 = { value: AuditLogActions.THREAD_CREATE };
    intl19 = arg1(dependencyMap[17]).intl;
    obj16.label = intl19.string(arg1(dependencyMap[17]).t.+zl0DG);
    items[17] = obj16;
    obj17 = { value: AuditLogActions.THREAD_UPDATE };
    intl20 = arg1(dependencyMap[17]).intl;
    obj17.label = intl20.string(arg1(dependencyMap[17]).t.rbIry3);
    items[18] = obj17;
    obj18 = { value: AuditLogActions.THREAD_DELETE };
    intl21 = arg1(dependencyMap[17]).intl;
    obj18.label = intl21.string(arg1(dependencyMap[17]).t.hFjNEA);
    items[19] = obj18;
    obj19 = { value: AuditLogActions.ROLE_CREATE };
    intl22 = arg1(dependencyMap[17]).intl;
    obj19.label = intl22.string(arg1(dependencyMap[17]).t.AbxKtv);
    items[20] = obj19;
    obj20 = { value: AuditLogActions.ROLE_UPDATE };
    intl23 = arg1(dependencyMap[17]).intl;
    obj20.label = intl23.string(arg1(dependencyMap[17]).t.t3Z6sU);
    items[21] = obj20;
    obj21 = { value: AuditLogActions.ROLE_DELETE };
    intl24 = arg1(dependencyMap[17]).intl;
    obj21.label = intl24.string(arg1(dependencyMap[17]).t.YsFpa4);
    items[22] = obj21;
    obj22 = { value: AuditLogActions.ONBOARDING_PROMPT_CREATE };
    intl25 = arg1(dependencyMap[17]).intl;
    obj22.label = intl25.string(arg1(dependencyMap[17]).t.ZV9tqc);
    items[23] = obj22;
    obj23 = { value: AuditLogActions.ONBOARDING_PROMPT_UPDATE };
    intl26 = arg1(dependencyMap[17]).intl;
    obj23.label = intl26.string(arg1(dependencyMap[17]).t.PcOdvX);
    items[24] = obj23;
    obj24 = { value: AuditLogActions.ONBOARDING_PROMPT_DELETE };
    intl27 = arg1(dependencyMap[17]).intl;
    obj24.label = intl27.string(arg1(dependencyMap[17]).t.+r33Na);
    items[25] = obj24;
    obj25 = { value: AuditLogActions.ONBOARDING_CREATE };
    intl28 = arg1(dependencyMap[17]).intl;
    obj25.label = intl28.string(arg1(dependencyMap[17]).t.uDADde);
    items[26] = obj25;
    obj26 = { value: AuditLogActions.ONBOARDING_UPDATE };
    intl29 = arg1(dependencyMap[17]).intl;
    obj26.label = intl29.string(arg1(dependencyMap[17]).t.J1H1wg);
    items[27] = obj26;
    obj27 = { value: AuditLogActions.HOME_SETTINGS_CREATE };
    intl30 = arg1(dependencyMap[17]).intl;
    obj27.label = intl30.string(arg1(dependencyMap[17]).t.Di4cvI);
    items[28] = obj27;
    obj28 = { value: AuditLogActions.HOME_SETTINGS_UPDATE };
    intl31 = arg1(dependencyMap[17]).intl;
    obj28.label = intl31.string(arg1(dependencyMap[17]).t.tzyrJH);
    items[29] = obj28;
    obj29 = { value: AuditLogActions.INVITE_CREATE };
    intl32 = arg1(dependencyMap[17]).intl;
    obj29.label = intl32.string(arg1(dependencyMap[17]).t.0BNJdX);
    items[30] = obj29;
    obj30 = { value: AuditLogActions.INVITE_UPDATE };
    intl33 = arg1(dependencyMap[17]).intl;
    obj30.label = intl33.string(arg1(dependencyMap[17]).t.o++obV);
    items[31] = obj30;
    obj31 = { value: AuditLogActions.INVITE_DELETE };
    intl34 = arg1(dependencyMap[17]).intl;
    obj31.label = intl34.string(arg1(dependencyMap[17]).t.iP40Az);
    items[32] = obj31;
    obj32 = { value: AuditLogActions.WEBHOOK_CREATE };
    intl35 = arg1(dependencyMap[17]).intl;
    obj32.label = intl35.string(arg1(dependencyMap[17]).t.tBF4+S);
    items[33] = obj32;
    obj33 = { value: AuditLogActions.WEBHOOK_UPDATE };
    intl36 = arg1(dependencyMap[17]).intl;
    obj33.label = intl36.string(arg1(dependencyMap[17]).t.eV3McO);
    items[34] = obj33;
    obj34 = { value: AuditLogActions.WEBHOOK_DELETE };
    intl37 = arg1(dependencyMap[17]).intl;
    obj34.label = intl37.string(arg1(dependencyMap[17]).t.AAL3K1);
    items[35] = obj34;
    obj35 = { value: AuditLogActions.EMOJI_CREATE };
    intl38 = arg1(dependencyMap[17]).intl;
    obj35.label = intl38.string(arg1(dependencyMap[17]).t.RuWm0V);
    items[36] = obj35;
    obj36 = { value: AuditLogActions.EMOJI_UPDATE };
    intl39 = arg1(dependencyMap[17]).intl;
    obj36.label = intl39.string(arg1(dependencyMap[17]).t.WzdUY7);
    items[37] = obj36;
    obj37 = { value: AuditLogActions.EMOJI_DELETE };
    intl40 = arg1(dependencyMap[17]).intl;
    obj37.label = intl40.string(arg1(dependencyMap[17]).t.c3dK2L);
    items[38] = obj37;
    obj38 = { value: AuditLogActions.MESSAGE_DELETE };
    intl41 = arg1(dependencyMap[17]).intl;
    obj38.label = intl41.string(arg1(dependencyMap[17]).t.daTfXh);
    items[39] = obj38;
    obj39 = { value: AuditLogActions.MESSAGE_BULK_DELETE };
    intl42 = arg1(dependencyMap[17]).intl;
    obj39.label = intl42.string(arg1(dependencyMap[17]).t.nrBxeh);
    items[40] = obj39;
    obj40 = { value: AuditLogActions.MESSAGE_PIN };
    intl43 = arg1(dependencyMap[17]).intl;
    obj40.label = intl43.string(arg1(dependencyMap[17]).t.MUldyN);
    items[41] = obj40;
    obj41 = { value: AuditLogActions.MESSAGE_UNPIN };
    intl44 = arg1(dependencyMap[17]).intl;
    obj41.label = intl44.string(arg1(dependencyMap[17]).t.n4zKhA);
    items[42] = obj41;
    obj42 = { value: AuditLogActions.INTEGRATION_CREATE };
    intl45 = arg1(dependencyMap[17]).intl;
    obj42.label = intl45.string(arg1(dependencyMap[17]).t.deNm8x);
    items[43] = obj42;
    obj43 = { value: AuditLogActions.INTEGRATION_UPDATE };
    intl46 = arg1(dependencyMap[17]).intl;
    obj43.label = intl46.string(arg1(dependencyMap[17]).t.HT7Sfg);
    items[44] = obj43;
    obj44 = { value: AuditLogActions.INTEGRATION_DELETE };
    intl47 = arg1(dependencyMap[17]).intl;
    obj44.label = intl47.string(arg1(dependencyMap[17]).t.+kJ09q);
    items[45] = obj44;
    obj45 = { value: AuditLogActions.STICKER_CREATE };
    intl48 = arg1(dependencyMap[17]).intl;
    obj45.label = intl48.string(arg1(dependencyMap[17]).t.3DzNjU);
    items[46] = obj45;
    obj46 = { value: AuditLogActions.STICKER_UPDATE };
    intl49 = arg1(dependencyMap[17]).intl;
    obj46.label = intl49.string(arg1(dependencyMap[17]).t.tdhW5b);
    items[47] = obj46;
    obj47 = { value: AuditLogActions.STICKER_DELETE };
    intl50 = arg1(dependencyMap[17]).intl;
    obj47.label = intl50.string(arg1(dependencyMap[17]).t.+ZhGOk);
    items[48] = obj47;
    obj48 = { value: AuditLogActions.STAGE_INSTANCE_CREATE };
    intl51 = arg1(dependencyMap[17]).intl;
    obj48.label = intl51.string(arg1(dependencyMap[17]).t.sPbjA6);
    items[49] = obj48;
    obj49 = { value: AuditLogActions.STAGE_INSTANCE_UPDATE };
    intl52 = arg1(dependencyMap[17]).intl;
    obj49.label = intl52.string(arg1(dependencyMap[17]).t.cW9LfJ);
    items[50] = obj49;
    obj50 = { value: AuditLogActions.STAGE_INSTANCE_DELETE };
    intl53 = arg1(dependencyMap[17]).intl;
    obj50.label = intl53.string(arg1(dependencyMap[17]).t.U1r+yD);
    items[51] = obj50;
    obj51 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE };
    intl54 = arg1(dependencyMap[17]).intl;
    obj51.label = intl54.string(arg1(dependencyMap[17]).t.H81Zyy);
    items[52] = obj51;
    obj52 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE };
    intl55 = arg1(dependencyMap[17]).intl;
    obj52.label = intl55.string(arg1(dependencyMap[17]).t.FM69l+);
    items[53] = obj52;
    obj53 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE };
    intl56 = arg1(dependencyMap[17]).intl;
    obj53.label = intl56.string(arg1(dependencyMap[17]).t.Rq28Bh);
    items[54] = obj53;
    obj54 = { value: AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE };
    intl57 = arg1(dependencyMap[17]).intl;
    obj54.label = intl57.string(arg1(dependencyMap[17]).t.iPdFOt);
    items[55] = obj54;
    obj55 = { value: AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE };
    intl58 = arg1(dependencyMap[17]).intl;
    obj55.label = intl58.string(arg1(dependencyMap[17]).t.gNq5z6);
    items[56] = obj55;
    obj56 = { value: AuditLogActions.AUTO_MODERATION_RULE_CREATE };
    intl59 = arg1(dependencyMap[17]).intl;
    obj56.label = intl59.string(arg1(dependencyMap[17]).t.f72Zqb);
    items[57] = obj56;
    obj57 = { value: AuditLogActions.AUTO_MODERATION_RULE_UPDATE };
    intl60 = arg1(dependencyMap[17]).intl;
    obj57.label = intl60.string(arg1(dependencyMap[17]).t.XeqIiv);
    items[58] = obj57;
    obj58 = { value: AuditLogActions.AUTO_MODERATION_RULE_DELETE };
    intl61 = arg1(dependencyMap[17]).intl;
    obj58.label = intl61.string(arg1(dependencyMap[17]).t.syAApU);
    items[59] = obj58;
    obj59 = { value: AuditLogActions.GUILD_HOME_FEATURE_ITEM };
    intl62 = arg1(dependencyMap[17]).intl;
    obj59.label = intl62.string(arg1(dependencyMap[17]).t.lhG5KN);
    items[60] = obj59;
    obj60 = { value: AuditLogActions.GUILD_HOME_REMOVE_ITEM };
    intl63 = arg1(dependencyMap[17]).intl;
    obj60.label = intl63.string(arg1(dependencyMap[17]).t.lRPRwS);
    items[61] = obj60;
    obj61 = { value: AuditLogActions.SOUNDBOARD_SOUND_CREATE };
    intl64 = arg1(dependencyMap[17]).intl;
    obj61.label = intl64.string(arg1(dependencyMap[17]).t.yoRi5r);
    items[62] = obj61;
    obj62 = { value: AuditLogActions.SOUNDBOARD_SOUND_UPDATE };
    intl65 = arg1(dependencyMap[17]).intl;
    obj62.label = intl65.string(arg1(dependencyMap[17]).t.uKlG0Z);
    items[63] = obj62;
    obj63 = { value: AuditLogActions.SOUNDBOARD_SOUND_DELETE };
    intl66 = arg1(dependencyMap[17]).intl;
    obj63.label = intl66.string(arg1(dependencyMap[17]).t.gq0iCT);
    items[64] = obj63;
    obj64 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_CREATE };
    intl67 = arg1(dependencyMap[17]).intl;
    obj64.label = intl67.string(arg1(dependencyMap[17]).t.rGr0YM);
    items[65] = obj64;
    obj65 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_DELETE };
    intl68 = arg1(dependencyMap[17]).intl;
    obj65.label = intl68.string(arg1(dependencyMap[17]).t.V9PEQ4);
    items[66] = obj65;
    return items;
  }
}
const obj = {
  [arg1(dependencyMap[16]).TimeUnits.SECONDS]: (seconds) => {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[17]).t.geSp4K, { seconds });
  },
  [arg1(dependencyMap[16]).TimeUnits.MINUTES]: (minutes) => {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[17]).t.iXLF9W, { minutes });
  },
  [arg1(dependencyMap[16]).TimeUnits.HOURS]: (hours) => {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[17]).t.xCjYxK, { hours });
  },
  [arg1(dependencyMap[16]).TimeUnits.DAYS]: (days) => {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[17]).t.k2UNz+, { days });
  }
};
const tmp3 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  targetType = targetType.targetType;
  if (AuditLogTargetTypes.GUILD === targetType) {
    return function GuildChangeStrings() {
      let ALL_MEMBERS;
      let ALL_MESSAGES;
      let DISABLED;
      let ELEVATED;
      let HIGH;
      let LOW;
      let MEDIUM;
      let MEMBERS_WITHOUT_ROLES;
      let NONE;
      let NONE2;
      let ONLY_MENTIONS;
      let VERY_HIGH;
      let obj = { [closure_16.NAME]: () => callback(closure_3[17]).t.CkDiNH };
      obj[constants.DESCRIPTION] = callback4(callback(closure_3[17]).t.RP3Ey3, callback(closure_3[17]).t.QAVj1Y);
      obj[constants.ICON_HASH] = () => callback(closure_3[17]).t.iLZ8Q9;
      obj[constants.SPLASH_HASH] = () => callback(closure_3[17]).t.4VV6dn;
      obj[constants.DISCOVERY_SPLASH_HASH] = () => callback(closure_3[17]).t.2pds6p;
      obj[constants.BANNER_HASH] = callback4(callback(closure_3[17]).t.Cxq4zO, callback(closure_3[17]).t.H7eE/9);
      obj[constants.OWNER_ID] = () => callback(closure_3[17]).t.8ltsLT;
      obj[constants.REGION] = () => callback(closure_3[17]).t.X9r5Kf;
      obj[constants.PREFERRED_LOCALE] = () => callback(closure_3[17]).t.UnXuDS;
      obj[constants.AFK_CHANNEL_ID] = callback4(callback(closure_3[17]).t.ClBuA4, callback(closure_3[17]).t.ms+xtL);
      obj[constants.AFK_TIMEOUT] = () => callback(closure_3[17]).t.q21fHa;
      obj[constants.SYSTEM_CHANNEL_ID] = callback4(callback(closure_3[17]).t.H1VXaa, callback(closure_3[17]).t.XhtmxJ);
      obj[constants.RULES_CHANNEL_ID] = callback4(callback(closure_3[17]).t.OI6MG2, callback(closure_3[17]).t.lik3tI);
      obj[constants.PUBLIC_UPDATES_CHANNEL_ID] = callback4(callback(closure_3[17]).t.YxBKrY, callback(closure_3[17]).t.Ehsnij);
      obj = { [NONE]: callback(closure_3[17]).t.voaCCQ, [ELEVATED]: callback(closure_3[17]).t.pRNVwz };
      ({ NONE, ELEVATED } = closure_18);
      obj[constants.MFA_LEVEL] = callback7(obj);
      obj[constants.WIDGET_ENABLED] = callback6(callback(closure_3[17]).t.ADIty8, callback(closure_3[17]).t.nf58VY);
      obj[constants.WIDGET_CHANNEL_ID] = callback4(callback(closure_3[17]).t.6SBsDc, callback(closure_3[17]).t.deQ5wO);
      obj = { [NONE2]: callback(closure_3[17]).t.W27rsc, [LOW]: callback(closure_3[17]).t.V8P+Pw, [MEDIUM]: callback(closure_3[17]).t.ERQFau, [HIGH]: callback(closure_3[17]).t.83fN0j, [VERY_HIGH]: callback(closure_3[17]).t.PnkQJE };
      ({ NONE: NONE2, LOW, MEDIUM, HIGH, VERY_HIGH } = closure_19);
      obj[constants.VERIFICATION_LEVEL] = callback7(obj);
      ({ ALL_MESSAGES, ONLY_MENTIONS } = closure_20);
      obj[constants.DEFAULT_MESSAGE_NOTIFICATIONS] = callback7({ [ALL_MESSAGES]: callback(closure_3[17]).t.LDi76A, [ONLY_MENTIONS]: callback(closure_3[17]).t.6K83ba });
      obj[constants.VANITY_URL_CODE] = callback4(callback(closure_3[17]).t.Zplsov, callback(closure_3[17]).t.u6cArh);
      const obj1 = { [ALL_MESSAGES]: callback(closure_3[17]).t.LDi76A, [ONLY_MENTIONS]: callback(closure_3[17]).t.6K83ba };
      ({ DISABLED, MEMBERS_WITHOUT_ROLES, ALL_MEMBERS } = closure_21);
      obj[constants.EXPLICIT_CONTENT_FILTER] = callback7({ [DISABLED]: callback(closure_3[17]).t.fmOeL3, [MEMBERS_WITHOUT_ROLES]: callback(closure_3[17]).t.4FghYw, [ALL_MEMBERS]: callback(closure_3[17]).t.olyrSm });
      obj[constants.PREMIUM_PROGRESS_BAR_ENABLED] = callback6(callback(closure_3[17]).t.rBT0sn, callback(closure_3[17]).t.gc+te5);
      obj[constants.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => callback(closure_3[17]).t.YbouFH;
      obj[constants.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS] = () => callback(closure_3[17]).t.g3DMjB;
      obj[constants.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS] = () => callback(closure_3[17]).t.+fQAel;
      obj[constants.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS] = () => callback(closure_3[17]).t.E1fc4v;
      obj[constants.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES] = () => callback(closure_3[17]).t.XbwtSA;
      const merged = Object.assign(callback2());
      return obj;
    }();
  } else {
    if (AuditLogTargetTypes.CHANNEL !== targetType) {
      if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
        if (AuditLogTargetTypes.USER === targetType) {
          return function UserChangeStrings() {
            const obj = {};
            obj[constants.NICK] = callback5(callback(closure_3[17]).t.qXDsHv, callback(closure_3[17]).t.m+qury, callback(closure_3[17]).t.DvLvjF);
            obj[constants.DEAF] = callback6(callback(closure_3[17]).t.mArLlW, callback(closure_3[17]).t.ddvVYG);
            obj[constants.MUTE] = callback6(callback(closure_3[17]).t.bxs/lS, callback(closure_3[17]).t.FjecQM);
            obj[constants.ROLES_REMOVE] = () => callback(closure_3[17]).t.+2SDWV;
            obj[constants.ROLES_ADD] = () => callback(closure_3[17]).t.B3/3IJ;
            obj[constants.PRUNE_DELETE_DAYS] = () => callback(closure_3[17]).t.+Cvc+D;
            obj[constants.COMMUNICATION_DISABLED_UNTIL] = callback5(callback(closure_3[17]).t.LXTQr5, callback(closure_3[17]).t.LXTQr5, callback(closure_3[17]).t.ULSdnE);
            obj[constants.BYPASSES_VERIFICATION] = callback6(callback(closure_3[17]).t.NBPBui, callback(closure_3[17]).t.zATost);
            obj[constants.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => callback(closure_3[17]).t.YbouFH;
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.ROLE === targetType) {
          return function RoleChangeStrings() {
            let obj = {};
            obj[constants.NAME] = callback3(callback(closure_3[17]).t.QBmlaD, callback(closure_3[17]).t.Lfs4r+);
            obj[constants.DESCRIPTION] = callback3(callback(closure_3[17]).t.XeYKWJ, callback(closure_3[17]).t.PSfeIj);
            obj[constants.PERMISSIONS_GRANTED] = () => callback(closure_3[17]).t.9i/DvE;
            obj[constants.PERMISSIONS_DENIED] = () => callback(closure_3[17]).t.pa1ZVh;
            obj = { #000000: callback(closure_3[17]).t.TK6E1H };
            obj[constants.COLOR] = callback8(obj, callback(closure_3[17]).t.2FQFiw);
            obj[constants.COLORS] = (newValue) => {
              if (null == newValue.newValue.secondary_color) {
                WnSwL/ = callback(closure_3[17]).t.U44ttm;
              } else {
                WnSwL/ = callback(closure_3[17]).t.WnSwL/;
              }
              return WnSwL_;
            };
            obj[constants.HOIST] = callback6(callback(closure_3[17]).t.gWfe24, callback(closure_3[17]).t.+tb8kN);
            obj[constants.MENTIONABLE] = callback6(callback(closure_3[17]).t.LL8VFF, callback(closure_3[17]).t.Z7xzmC);
            obj[constants.ICON_HASH] = () => callback(closure_3[17]).t.iEE79/;
            obj[constants.UNICODE_EMOJI] = () => callback(closure_3[17]).t.KiLMM0;
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
          return function OnboardingPromptChangeStrings() {
            const obj = {};
            const merged = Object.assign(callback2());
            obj[constants.TITLE] = callback3(callback(closure_3[17]).t.sNpuy/, callback(closure_3[17]).t.3Ukc/g);
            obj[constants.DESCRIPTION] = callback3(callback(closure_3[17]).t.PP1q0x, callback(closure_3[17]).t.z7pYLg);
            obj[constants.OPTIONS] = () => callback(closure_3[17]).t.3G5C9+;
            obj[constants.SINGLE_SELECT] = callback6(callback(closure_3[17]).t.v4WnR3, callback(closure_3[17]).t.6Qg3uC);
            obj[constants.REQUIRED] = callback6(callback(closure_3[17]).t.0MPAM6, callback(closure_3[17]).t.pwsXir);
            return obj;
          }();
        } else if (AuditLogTargetTypes.GUILD_ONBOARDING === targetType) {
          return function OnboardingChangeStrings() {
            const obj = {};
            const merged = Object.assign(callback2());
            obj[constants.DEFAULT_CHANNEL_IDS] = () => callback(closure_3[17]).t.8M+D2s;
            obj[constants.ENABLE_DEFAULT_CHANNELS] = callback6(callback(closure_3[17]).t.EYd/ls, callback(closure_3[17]).t.36OZeQ);
            obj[constants.ENABLE_ONBOARDING_PROMPTS] = callback6(callback(closure_3[17]).t.V3u8PV, callback(closure_3[17]).t.r66lc/);
            obj[constants.ENABLED] = callback6(callback(closure_3[17]).t.SODVIs, callback(closure_3[17]).t.u8HY5U);
            return obj;
          }();
        } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
          return function HomeSettingsChangeStrings() {
            const obj = {};
            const merged = Object.assign(callback2());
            obj[constants.WELCOME_MESSAGE] = () => callback(closure_3[17]).t.dKQ1xd;
            obj[constants.NEW_MEMBER_ACTIONS] = () => callback(closure_3[17]).t.jDUIno;
            obj[constants.RESOURCE_CHANNELS] = () => callback(closure_3[17]).t.SIX0mr;
            return obj;
          }();
        } else if (AuditLogTargetTypes.INVITE === targetType) {
          return function InviteChangeStrings() {
            let obj = { [closure_16.CODE]: () => callback(closure_3[17]).t.rrRHgb, [closure_16.CHANNEL_ID]: () => callback(closure_3[17]).t.Q1vd5q };
            obj = { [0]: callback(closure_3[17]).t.Yx8LNm };
            obj[constants.MAX_USES] = callback8(obj, callback(closure_3[17]).t.3ygnwU);
            obj = {};
            const intl = callback(closure_3[17]).intl;
            obj[intl.string(callback(closure_3[17]).t.PqEzn8)] = callback(closure_3[17]).t.uWrLvw;
            obj[constants.MAX_AGE] = callback8(obj, callback(closure_3[17]).t.Q+5kcO);
            obj[constants.TEMPORARY] = callback6(callback(closure_3[17]).t.MWp6H7, callback(closure_3[17]).t.omiqTH);
            const obj1 = {};
            obj1[callback(closure_3[18]).GuildInviteFlags.IS_GUEST_INVITE] = callback(closure_3[17]).t.XYZMbL;
            obj[constants.FLAGS] = callback7(obj1);
            obj[constants.ROLE_IDS] = () => callback(closure_3[17]).t.gb1Owj;
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
          return function WebhookChangeStrings() {
            const obj = {};
            obj[constants.CHANNEL_ID] = callback3(callback(closure_3[17]).t.jhPprR, callback(closure_3[17]).t.ar4qYO);
            obj[constants.NAME] = callback3(callback(closure_3[17]).t.ZVGrzU, callback(closure_3[17]).t.tywdZR);
            obj[constants.AVATAR_HASH] = () => callback(closure_3[17]).t.KB52Uj;
            obj[constants.REASON] = () => callback(closure_3[17]).t.2IW3C5;
            return obj;
          }();
        } else if (AuditLogTargetTypes.EMOJI === targetType) {
          let obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(arg1(dependencyMap[17]).t.ahU1o5, arg1(dependencyMap[17]).t.wxs+vZ);
          const merged = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.STICKER === targetType) {
          obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(arg1(dependencyMap[17]).t.cdl0Yo, arg1(dependencyMap[17]).t.o3W2ly);
          obj[AuditLogChangeKeys.TAGS] = getNullableOldValueString(arg1(dependencyMap[17]).t.zwL+S2, arg1(dependencyMap[17]).t.VYfKA+);
          obj[AuditLogChangeKeys.DESCRIPTION] = getNullableOldValueString(arg1(dependencyMap[17]).t.XeYKWJ, arg1(dependencyMap[17]).t.PSfeIj);
          const merged1 = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
          return function IntegrationChangeStrings() {
            let obj = {};
            obj[constants.ENABLE_EMOTICONS] = callback6(callback(closure_3[17]).t.FI0m5x, callback(closure_3[17]).t.olpKC6);
            obj = { [0]: callback(closure_3[17]).t.1Bb1+u, [1]: callback(closure_3[17]).t.vjlW6m };
            obj[constants.EXPIRE_BEHAVIOR] = callback7(obj);
            obj[constants.EXPIRE_GRACE_PERIOD] = () => callback(closure_3[17]).t.iovXMa;
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
          const obj1 = {};
          obj1[AuditLogChangeKeys.TOPIC] = getNullableOldValueString(arg1(dependencyMap[17]).t.m+veAn, arg1(dependencyMap[17]).t.esQcxn);
          const obj2 = {};
          obj2[constants5.GUILD_ONLY] = arg1(dependencyMap[17]).t.EC+CDt;
          obj2[constants5.PUBLIC] = arg1(dependencyMap[17]).t.pK/WG0;
          obj1[AuditLogChangeKeys.PRIVACY_LEVEL] = getNullableNewValueStringByKey(obj2);
          const merged2 = Object.assign(CommonChangeStrings());
          return obj1;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT === targetType) {
          return function GuildScheduledEventChangeStrings() {
            let ACTIVE;
            let CANCELED;
            let COMPLETED;
            let EXTERNAL;
            let GUILD_ONLY;
            let NONE;
            let PUBLIC;
            let SCHEDULED;
            let STAGE_INSTANCE;
            let VOICE;
            let obj = { [closure_16.NAME]: () => callback(closure_3[17]).t.21EXHW, [closure_16.DESCRIPTION]: () => callback(closure_3[17]).t.Vm1ofw };
            obj = { [GUILD_ONLY]: callback(closure_3[17]).t.EC+CDt, [PUBLIC]: callback(closure_3[17]).t.pK/WG0 };
            ({ GUILD_ONLY, PUBLIC } = closure_34);
            obj[constants.PRIVACY_LEVEL] = callback7(obj);
            obj = { [SCHEDULED]: callback(closure_3[17]).t.hXKDgq, [ACTIVE]: callback(closure_3[17]).t.lRX1nz, [COMPLETED]: callback(closure_3[17]).t./eFIhq, [CANCELED]: callback(closure_3[17]).t.NWIYhj };
            ({ SCHEDULED, ACTIVE, COMPLETED, CANCELED } = closure_33);
            obj[constants.STATUS] = callback7(obj);
            ({ NONE, STAGE_INSTANCE, VOICE, EXTERNAL } = closure_32);
            obj[constants.ENTITY_TYPE] = callback7({ [NONE]: callback(closure_3[17]).t.6sO3Ss, [STAGE_INSTANCE]: callback(closure_3[17]).t.Wo+s1y, [VOICE]: callback(closure_3[17]).t.XCVaIL, [EXTERNAL]: callback(closure_3[17]).t.IvhAj2 });
            obj[constants.CHANNEL_ID] = callback4(callback(closure_3[17]).t.yJBIcX, callback(closure_3[17]).t.+PqSsi);
            obj[constants.LOCATION] = callback4(callback(closure_3[17]).t.GaMBHy, callback(closure_3[17]).t.PsICk0);
            obj[constants.IMAGE_HASH] = callback4(callback(closure_3[17]).t.S3vcRK, callback(closure_3[17]).t.KQu47I);
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          return function GuildScheduledEventExceptionChangeStrings() {
            const obj = {};
            obj[constants.SCHEDULED_START_TIME] = callback4(callback(closure_3[17]).t.zMIYVg, callback(closure_3[17]).t.fzF8Gd);
            obj[constants.SCHEDULED_END_TIME] = callback4(callback(closure_3[17]).t.vONSQA, callback(closure_3[17]).t.IlIti3);
            obj[constants.IS_CANCELED] = (oldValue) => {
              if (null != oldValue.oldValue) {
                if (!oldValue.oldValue) {
                  if (oldValue.newValue) {
                    return callback(closure_3[17]).t.7RkicW;
                  }
                }
                if (oldValue.oldValue) {
                  if (!oldValue.newValue) {
                    return callback(closure_3[17]).t.dRNTWW;
                  }
                }
              }
            };
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.THREAD === targetType) {
          return function ThreadChangeStrings() {
            const obj = {};
            obj[constants.NAME] = callback3(callback(closure_3[17]).t.tUKRzX, callback(closure_3[17]).t.kPCHON);
            obj[constants.ARCHIVED] = callback6(callback(closure_3[17]).t.jDi9FK, callback(closure_3[17]).t.F6dvbT);
            obj[constants.LOCKED] = callback6(callback(closure_3[17]).t.JSy1QW, callback(closure_3[17]).t.C7Jgo8);
            obj[constants.INVITABLE] = callback6(callback(closure_3[17]).t.dxNUs9, callback(closure_3[17]).t.biJvYG);
            obj[constants.AUTO_ARCHIVE_DURATION] = callback3(callback(closure_3[17]).t.LuaG3y, callback(closure_3[17]).t.18d9qr);
            obj[constants.RATE_LIMIT_PER_USER] = callback3(callback(closure_3[17]).t.7lirhF, callback(closure_3[17]).t.j4CCJR);
            obj[constants.FLAGS] = () => callback(closure_3[17]).t.sSAQtj;
            obj[constants.AVAILABLE_TAG_ADD] = () => callback(closure_3[17]).t.H86QQU;
            obj[constants.AVAILABLE_TAG_DELETE] = () => callback(closure_3[17]).t.8QOseg;
            const merged = Object.assign(callback2());
            return obj;
          }();
        } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
          return function CommandPermissionChangeStrings(changes) {
            const obj = {};
            const merged = Object.assign(callback2());
            if (null != changes) {
              const item = changes.forEach((newValue) => {
                if (newValue.newValue) {
                  if (newValue.newValue.permission) {
                    tmp2[key] = () => callback(closure_3[17]).t.JH+89C;
                  } else {
                    tmp2[key] = () => callback(closure_3[17]).t.HUrFDu;
                  }
                } else {
                  obj[newValue.key] = () => callback(closure_3[17]).t.vynxnV;
                }
              });
            }
            return obj;
          }(targetType.changes);
        } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
          return function AutoModerationRuleChangeStrings() {
            const merged = Object.assign(callback2());
            return {
              [closure_16.NAME]: () => callback(closure_3[17]).t.XwxAJT,
              [closure_16.AUTO_MODERATION_TRIGGER_TYPE]: () => callback(closure_3[17]).t.fx0pyl,
              [closure_16.AUTO_MODERATION_EVENT_TYPE]: () => callback(closure_3[17]).t.46Y+L5,
              [closure_16.AUTO_MODERATION_ACTIONS]: () => callback(closure_3[17]).t.8efxfv,
              [closure_16.AUTO_MODERATION_ENABLED]: (newValue) => {
                let oldValue = newValue.newValue;
                if (null == oldValue) {
                  oldValue = newValue.oldValue;
                }
                if (true === oldValue) {
                  let Wrg9Jn = callback(closure_3[17]).t.fCmxC2;
                } else {
                  Wrg9Jn = callback(closure_3[17]).t.Wrg9Jn;
                }
                return Wrg9Jn;
              },
              [closure_16.AUTO_MODERATION_EXEMPT_ROLES]: () => callback(closure_3[17]).t.TRb7Nx,
              [closure_16.AUTO_MODERATION_EXEMPT_CHANNELS]: () => callback(closure_3[17]).t.mzitLE,
              [closure_16.AUTO_MODERATION_TRIGGER_METADATA]: () => callback(closure_3[17]).t.h/lM65,
              [closure_16.AUTO_MODERATION_ADD_KEYWORDS]: () => callback(closure_3[17]).t.9V2yaC,
              [closure_16.AUTO_MODERATION_REMOVE_KEYWORDS]: () => callback(closure_3[17]).t.4Qe9ny,
              [closure_16.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => callback(closure_3[17]).t.GyZtxp,
              [closure_16.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => callback(closure_3[17]).t.OQDadc,
              [closure_16.AUTO_MODERATION_ADD_ALLOW_LIST]: () => callback(closure_3[17]).t.FvvR+K,
              [closure_16.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => callback(closure_3[17]).t.p5nSvy
            };
          }();
        } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
          obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(arg1(dependencyMap[17]).t.VOtRSO, arg1(dependencyMap[17]).t.OK7B8E);
          obj[AuditLogChangeKeys.VOLUME] = getNullableOldValueString(arg1(dependencyMap[17]).t.igrDB9, arg1(dependencyMap[17]).t.L5lDFJ);
          obj[AuditLogChangeKeys.EMOJI_NAME] = getNullableNewOrOldValueString(arg1(dependencyMap[17]).t.IIanaY, arg1(dependencyMap[17]).t.z4w4U/, arg1(dependencyMap[17]).t.V8TfyU);
          obj[AuditLogChangeKeys.EMOJI_ID] = getNullableNewOrOldValueString(arg1(dependencyMap[17]).t.ainxMB, arg1(dependencyMap[17]).t.2NPsYu, arg1(dependencyMap[17]).t.8crtns);
          const merged3 = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
          return function VoiceChannelStatusStrings() {
            const merged = Object.assign(callback2());
            return { [closure_16.STATUS]: () => callback(closure_3[17]).t.HyCSnI };
          }();
        } else if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION === targetType) {
          return function MemberVerificationChangeStrings() {
            const merged = Object.assign(callback2());
            return {
              [closure_16.VERIFICATION_ENABLED]: (newValue) => {
                if (true === newValue.newValue) {
                  let WYT6ka = callback(closure_3[17]).t.fnkzDY;
                } else {
                  WYT6ka = callback(closure_3[17]).t.WYT6ka;
                }
                return WYT6ka;
              },
              [closure_16.MANUAL_APPROVAL_ENABLED]: (newValue) => {
                if (true === newValue.newValue) {
                  let WxyOtj = callback(closure_3[17]).t.jzSvVd;
                } else {
                  WxyOtj = callback(closure_3[17]).t.WxyOtj;
                }
                return WxyOtj;
              }
            };
          }();
        } else if (AuditLogTargetTypes.GUILD_PROFILE === targetType) {
          return function GuildProfileChangeStrings() {
            const obj = { [closure_16.DESCRIPTION]: () => callback(closure_3[17]).t.nsUZKY, [closure_16.BRAND_COLOR_PRIMARY]: () => callback(closure_3[17]).t.qe9mgN, [closure_16.CUSTOM_BANNER_HASH]: () => callback(closure_3[17]).t.04b5KC, [closure_16.TRAITS]: () => callback(closure_3[17]).t.dEy9WO, [closure_16.GAME_APPLICATION_IDS]: () => callback(closure_3[17]).t.8BOT3x, [closure_16.VISIBILITY]: () => callback(closure_3[17]).t.bCl1Ep };
            obj[constants.SERVER_TAG] = callback4(callback(closure_3[17]).t.ix1dnX, callback(closure_3[17]).t.4LKpKb);
            return obj;
          }();
        } else {
          return CommonChangeStrings();
        }
      }
    }
    return function ChannelChangeStrings() {
      const obj = {};
      obj[constants.NAME] = callback3(callback(closure_3[17]).t.f8Rh0U, callback(closure_3[17]).t.ebD4Qp);
      obj[constants.POSITION] = callback3(callback(closure_3[17]).t.isS8te, callback(closure_3[17]).t.t5uBis);
      obj[constants.TOPIC] = callback5(callback(closure_3[17]).t.esQcxn, callback(closure_3[17]).t.m+veAn, callback(closure_3[17]).t.ws/1FA);
      obj[constants.BITRATE] = callback3(callback(closure_3[17]).t.fw81ak, callback(closure_3[17]).t.MFNlgZ);
      obj[constants.RTC_REGION_OVERRIDE] = callback5(callback(closure_3[17]).t.6kajxx, callback(closure_3[17]).t.eGOlmU, callback(closure_3[17]).t.0JMZdz);
      obj[constants.USER_LIMIT] = callback3(callback(closure_3[17]).t.wk5t7p, callback(closure_3[17]).t.XgjCEh);
      obj[constants.RATE_LIMIT_PER_USER] = callback3(callback(closure_3[17]).t.7lirhF, callback(closure_3[17]).t.j4CCJR);
      obj[constants.PERMISSIONS_RESET] = () => callback(closure_3[17]).t.+vSBFY;
      obj[constants.PERMISSIONS_GRANTED] = () => callback(closure_3[17]).t.EKLJv8;
      obj[constants.PERMISSIONS_DENIED] = () => callback(closure_3[17]).t.U3rO5X;
      obj[constants.REASON] = () => callback(closure_3[17]).t.2IW3C5;
      obj[constants.NSFW] = callback6(callback(closure_3[17]).t.H8Ri2Y, callback(closure_3[17]).t.WW6cJw);
      obj[constants.TYPE] = callback3(callback(closure_3[17]).t.Vn5zn2, callback(closure_3[17]).t.aq4uWI);
      obj[constants.VIDEO_QUALITY_MODE] = callback3(callback(closure_3[17]).t.e68fAU, callback(closure_3[17]).t.djbES0);
      obj[constants.DEFAULT_AUTO_ARCHIVE_DURATION] = callback3(callback(closure_3[17]).t.nYz2mg, callback(closure_3[17]).t.oczvRI);
      obj[constants.DEFAULT_THREAD_RATE_LIMIT_PER_USER] = callback5(callback(closure_3[17]).t.tOJ8h7, callback(closure_3[17]).t.WaSgzk, callback(closure_3[17]).t.lj+A4u);
      obj[constants.FLAGS] = () => callback(closure_3[17]).t.ImCQko;
      obj[constants.AVAILABLE_TAG_ADD] = () => callback(closure_3[17]).t.H86QQU;
      obj[constants.AVAILABLE_TAG_EDIT] = () => callback(closure_3[17]).t.YtUzls;
      obj[constants.AVAILABLE_TAG_DELETE] = () => callback(closure_3[17]).t.8QOseg;
      obj[constants.LINKED_LOBBY] = callback4(callback(closure_3[17]).t.+/3TkD, callback(closure_3[17]).t.5kDYS3);
      return obj;
    }();
  }
};
export { shouldNotRenderChangeDetail };
export const checkChangesToRender = function checkChangesToRender(log) {
  const arg1 = log;
  const changes = log.changes;
  return null != changes && changes.some((arg0) => !callback(arg0, arg0));
};
export { ACTION_FILTER_ITEMS };
export { findChangeByKey };
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  const arg1 = changes;
  const found = ACTION_FILTER_ITEMS().find((value) => value.value === value.action);
  if (null != findChangeByKey(AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, changes)) {
    const intl = arg1(dependencyMap[17]).intl;
    let stringResult = intl.string(arg1(dependencyMap[17]).t.z3wbj8);
  } else {
    let label;
    if (null != found) {
      label = found.label;
    }
    stringResult = null;
    if (null != label) {
      stringResult = label;
    }
  }
  return stringResult;
};
export const getSimpleAuditLogTitleContextFromChange = function getSimpleAuditLogTitleContextFromChange(id) {
  let unit;
  let unit2;
  const tmp = findChangeByKey(AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, id);
  const tmp2 = findAllChangeByKey(AuditLogChangeKeys.ROLES_ADD, id).length > 0;
  const tmp3 = findAllChangeByKey(AuditLogChangeKeys.ROLES_REMOVE, id).length > 0;
  if (null != tmp) {
    let newValue;
    if (null != tmp) {
      newValue = tmp.newValue;
    }
    if (null != newValue) {
      let _Date = Date;
      let newValue1;
      if (null != tmp) {
        newValue1 = tmp.newValue;
      }
      const prototype = _Date.prototype;
      _Date = new _Date(newValue1);
      let time = _Date.getTime();
      const diff = time - importDefault(dependencyMap[19]).extractTimestamp(id.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const obj2 = importDefault(dependencyMap[19]);
      const timeAndUnit = arg1(dependencyMap[16]).getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === arg1(dependencyMap[16]).TimeUnits.SECONDS) {
              const _Math2 = Math;
              time = Math.round(diff / 1000);
            } else {
              time = timeAndUnit.time;
            }
            return obj[unit](time);
          }
        }
      }
      return null;
    } else {
      let oldValue;
      if (null != tmp) {
        oldValue = tmp.oldValue;
      }
      if (null != oldValue) {
        const intl4 = arg1(dependencyMap[17]).intl;
        return intl4.string(arg1(dependencyMap[17]).t.MA1ltr);
      }
    }
    return null;
  } else {
    if (tmp2) {
      if (tmp3) {
        const intl3 = arg1(dependencyMap[17]).intl;
        let stringResult = intl3.string(arg1(dependencyMap[17]).t.RdMMew);
      }
      return stringResult;
    }
    if (tmp2) {
      const intl2 = arg1(dependencyMap[17]).intl;
      stringResult = intl2.string(arg1(dependencyMap[17]).t.4GQqs8);
    } else {
      stringResult = null;
      if (tmp3) {
        const intl = arg1(dependencyMap[17]).intl;
        stringResult = intl.string(arg1(dependencyMap[17]).t.8mQ6x0);
      }
    }
  }
};
export const getSimpleAuditLogChangeDetails = function getSimpleAuditLogChangeDetails(changes) {
  const arr = findAllChangeByKey(AuditLogChangeKeys.ROLES_ADD, changes);
  const arr2 = findAllChangeByKey(AuditLogChangeKeys.ROLES_REMOVE, changes);
  if (null != arr) {
    const mapped = arr.map((newValue) => {
      newValue = newValue.newValue;
      let joined;
      if (null != newValue) {
        const mapped = newValue.map((name) => name.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    const joined = mapped.join(", ");
  }
  if (null != arr2) {
    const mapped1 = arr2.map((newValue) => {
      newValue = newValue.newValue;
      let joined;
      if (null != newValue) {
        const mapped = newValue.map((name) => name.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    const joined1 = mapped1.join(", ");
  }
  if (arr.length > 0) {
    if (arr2.length > 0) {
      const intl3 = arg1(dependencyMap[17]).intl;
      let obj = { roleNamesAdded: joined, roleNamesRemoved: joined1 };
      let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[17]).t.tZw1EW, obj);
    }
    return formatToPlainStringResult;
  }
  if (arr.length > 0) {
    const intl2 = arg1(dependencyMap[17]).intl;
    obj = { roleNames: joined };
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[17]).t./mTqt5, obj);
  } else {
    formatToPlainStringResult = null;
    if (arr2.length > 0) {
      const intl = arg1(dependencyMap[17]).intl;
      const obj1 = { roleNames: joined1 };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[17]).t.Wk4pAJ, obj1);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  if (constants.GUILD_UPDATE === action) {
    let found = arg1;
    found = dependencyMap;
    return arg1(dependencyMap[17]).t.LjZO31;
  } else {
    found = constants;
    if (constants.CHANNEL_CREATE === action) {
      found = null;
      found = null;
      if (null != log.changes) {
        const changes = log.changes;
        found = changes.find((key) => key.key === constants.TYPE);
      }
      if (null == found) {
        found = globalThis;
        const _Error2 = Error;
        found = new.target;
        found = new.target;
        found = new Error("[AuditLog] Could not find type change for channel create");
        throw found;
      } else {
        const newValue3 = found.newValue;
        found = constants2;
        if (constants2.GUILD_STAGE_VOICE === newValue3) {
          found = arg1;
          found = dependencyMap;
          return arg1(dependencyMap[17]).t.OKp4+o;
        } else {
          found = constants2;
          if (constants2.GUILD_VOICE === newValue3) {
            found = arg1;
            found = dependencyMap;
            return arg1(dependencyMap[17]).t.NPOy4G;
          } else {
            found = constants2;
            if (constants2.GUILD_CATEGORY === newValue3) {
              found = arg1;
              found = dependencyMap;
              return arg1(dependencyMap[17]).t.T3KIjz;
            } else {
              found = arg1;
              found = dependencyMap;
              return arg1(dependencyMap[17]).t.wrYNG2;
            }
          }
        }
      }
    } else {
      found = constants;
      if (constants.CHANNEL_UPDATE === action) {
        found = arg1;
        found = dependencyMap;
        return arg1(dependencyMap[17]).t.nTYk6B;
      } else {
        found = constants;
        if (constants.CHANNEL_DELETE === action) {
          found = arg1;
          found = dependencyMap;
          return arg1(dependencyMap[17]).t.ynfvkm;
        } else {
          found = constants;
          if (constants.CHANNEL_OVERWRITE_CREATE === action) {
            found = arg1;
            found = dependencyMap;
            return arg1(dependencyMap[17]).t.l5Cu1a;
          } else {
            found = constants;
            if (constants.CHANNEL_OVERWRITE_UPDATE === action) {
              found = arg1;
              found = dependencyMap;
              return arg1(dependencyMap[17]).t.uhtbNU;
            } else {
              found = constants;
              if (constants.CHANNEL_OVERWRITE_DELETE === action) {
                found = arg1;
                found = dependencyMap;
                return arg1(dependencyMap[17]).t.HASt/3;
              } else {
                found = constants;
                if (constants.MEMBER_KICK === action) {
                  found = arg1;
                  found = dependencyMap;
                  return arg1(dependencyMap[17]).t.B5hDZX;
                } else {
                  found = constants;
                  if (constants.MEMBER_PRUNE === action) {
                    found = arg1;
                    found = dependencyMap;
                    return arg1(dependencyMap[17]).t.qKOZTP;
                  } else {
                    found = constants;
                    if (constants.MEMBER_BAN_ADD === action) {
                      found = arg1;
                      found = dependencyMap;
                      return arg1(dependencyMap[17]).t.XklUm/;
                    } else {
                      found = constants;
                      if (constants.MEMBER_BAN_REMOVE === action) {
                        found = arg1;
                        found = dependencyMap;
                        return arg1(dependencyMap[17]).t.o3Y6HD;
                      } else {
                        found = constants;
                        if (constants.MEMBER_UPDATE === action) {
                          found = arg1;
                          found = dependencyMap;
                          return arg1(dependencyMap[17]).t.pznhLN;
                        } else {
                          found = constants;
                          if (constants.MEMBER_ROLE_UPDATE === action) {
                            found = arg1;
                            found = dependencyMap;
                            return arg1(dependencyMap[17]).t.Vngfia;
                          } else {
                            found = constants;
                            if (constants.MEMBER_MOVE === action) {
                              found = arg1;
                              found = dependencyMap;
                              return arg1(dependencyMap[17]).t.Yt6NkU;
                            } else {
                              found = constants;
                              if (constants.MEMBER_DISCONNECT === action) {
                                found = arg1;
                                found = dependencyMap;
                                return arg1(dependencyMap[17]).t.K4eCZw;
                              } else {
                                found = constants;
                                if (constants.BOT_ADD === action) {
                                  found = arg1;
                                  found = dependencyMap;
                                  return arg1(dependencyMap[17]).t.fWvX0G;
                                } else {
                                  found = constants;
                                  if (constants.ROLE_CREATE === action) {
                                    found = arg1;
                                    found = dependencyMap;
                                    return arg1(dependencyMap[17]).t.UTLTx6;
                                  } else {
                                    found = constants;
                                    if (constants.ROLE_UPDATE === action) {
                                      found = arg1;
                                      found = dependencyMap;
                                      return arg1(dependencyMap[17]).t.NRbN18;
                                    } else {
                                      found = constants;
                                      if (constants.ROLE_DELETE === action) {
                                        found = arg1;
                                        found = dependencyMap;
                                        return arg1(dependencyMap[17]).t.4s63tb;
                                      } else {
                                        found = constants;
                                        if (constants.INVITE_CREATE === action) {
                                          found = arg1;
                                          found = dependencyMap;
                                          return arg1(dependencyMap[17]).t.YHOXWy;
                                        } else {
                                          found = constants;
                                          if (constants.INVITE_UPDATE === action) {
                                            found = arg1;
                                            found = dependencyMap;
                                            return arg1(dependencyMap[17]).t.ja3kGS;
                                          } else {
                                            found = constants;
                                            if (constants.INVITE_DELETE === action) {
                                              found = arg1;
                                              found = dependencyMap;
                                              return arg1(dependencyMap[17]).t.3n/iWk;
                                            } else {
                                              found = constants;
                                              if (constants.WEBHOOK_CREATE === action) {
                                                found = arg1;
                                                found = dependencyMap;
                                                return arg1(dependencyMap[17]).t.MhYhil;
                                              } else {
                                                found = constants;
                                                if (constants.WEBHOOK_UPDATE === action) {
                                                  found = arg1;
                                                  found = dependencyMap;
                                                  return arg1(dependencyMap[17]).t.6GTlWB;
                                                } else {
                                                  found = constants;
                                                  if (constants.WEBHOOK_DELETE === action) {
                                                    found = arg1;
                                                    found = dependencyMap;
                                                    return arg1(dependencyMap[17]).t.in0VjZ;
                                                  } else {
                                                    found = constants;
                                                    if (constants.EMOJI_CREATE === action) {
                                                      found = arg1;
                                                      found = dependencyMap;
                                                      return arg1(dependencyMap[17]).t.7vekRO;
                                                    } else {
                                                      found = constants;
                                                      if (constants.EMOJI_UPDATE === action) {
                                                        found = arg1;
                                                        found = dependencyMap;
                                                        return arg1(dependencyMap[17]).t.IsCKfh;
                                                      } else {
                                                        found = constants;
                                                        if (constants.EMOJI_DELETE === action) {
                                                          found = arg1;
                                                          found = dependencyMap;
                                                          return arg1(dependencyMap[17]).t.JnUaVG;
                                                        } else {
                                                          found = constants;
                                                          if (constants.STICKER_CREATE === action) {
                                                            found = arg1;
                                                            found = dependencyMap;
                                                            return arg1(dependencyMap[17]).t.DRZifq;
                                                          } else {
                                                            found = constants;
                                                            if (constants.STICKER_UPDATE === action) {
                                                              found = arg1;
                                                              found = dependencyMap;
                                                              return arg1(dependencyMap[17]).t.bhujGc;
                                                            } else {
                                                              found = constants;
                                                              if (constants.STICKER_DELETE === action) {
                                                                found = arg1;
                                                                found = dependencyMap;
                                                                return arg1(dependencyMap[17]).t.rGEP9U;
                                                              } else {
                                                                found = constants;
                                                                if (constants.MESSAGE_DELETE === action) {
                                                                  found = arg1;
                                                                  found = dependencyMap;
                                                                  return arg1(dependencyMap[17]).t.HPkD+M;
                                                                } else {
                                                                  found = constants;
                                                                  if (constants.MESSAGE_BULK_DELETE === action) {
                                                                    found = arg1;
                                                                    found = dependencyMap;
                                                                    return arg1(dependencyMap[17]).t.3RIvLE;
                                                                  } else {
                                                                    found = constants;
                                                                    if (constants.MESSAGE_PIN === action) {
                                                                      found = arg1;
                                                                      found = dependencyMap;
                                                                      return arg1(dependencyMap[17]).t.Yna7E7;
                                                                    } else {
                                                                      found = constants;
                                                                      if (constants.MESSAGE_UNPIN === action) {
                                                                        found = arg1;
                                                                        found = dependencyMap;
                                                                        return arg1(dependencyMap[17]).t.NCxXUW;
                                                                      } else {
                                                                        found = constants;
                                                                        if (constants.INTEGRATION_CREATE === action) {
                                                                          found = arg1;
                                                                          found = dependencyMap;
                                                                          return arg1(dependencyMap[17]).t.HYvCb3;
                                                                        } else {
                                                                          found = constants;
                                                                          if (constants.INTEGRATION_UPDATE === action) {
                                                                            found = arg1;
                                                                            found = dependencyMap;
                                                                            return arg1(dependencyMap[17]).t.ibCCOS;
                                                                          } else {
                                                                            found = constants;
                                                                            if (constants.INTEGRATION_DELETE === action) {
                                                                              found = arg1;
                                                                              found = dependencyMap;
                                                                              return arg1(dependencyMap[17]).t.8zScWY;
                                                                            } else {
                                                                              found = constants;
                                                                              if (constants.STAGE_INSTANCE_CREATE === action) {
                                                                                found = arg1;
                                                                                found = dependencyMap;
                                                                                return arg1(dependencyMap[17]).t.n7x/DF;
                                                                              } else {
                                                                                found = constants;
                                                                                if (constants.STAGE_INSTANCE_UPDATE === action) {
                                                                                  found = arg1;
                                                                                  found = dependencyMap;
                                                                                  return arg1(dependencyMap[17]).t.0hQYU4;
                                                                                } else {
                                                                                  found = constants;
                                                                                  if (constants.STAGE_INSTANCE_DELETE === action) {
                                                                                    found = null;
                                                                                    if (null != log.userId) {
                                                                                      found = arg1;
                                                                                      found = dependencyMap;
                                                                                    } else {
                                                                                      found = arg1;
                                                                                      found = dependencyMap;
                                                                                    }
                                                                                    return _7ZIFm9;
                                                                                  } else {
                                                                                    found = constants;
                                                                                    if (constants.GUILD_SCHEDULED_EVENT_CREATE === action) {
                                                                                      found = arg1;
                                                                                      found = dependencyMap;
                                                                                      return arg1(dependencyMap[17]).t.S7k52p;
                                                                                    } else {
                                                                                      found = constants;
                                                                                      if (constants.GUILD_SCHEDULED_EVENT_UPDATE === action) {
                                                                                        found = dependencyMap;
                                                                                        return arg1(dependencyMap[17]).t.ebTK11;
                                                                                      } else {
                                                                                        found = constants;
                                                                                        if (constants.GUILD_SCHEDULED_EVENT_DELETE === action) {
                                                                                          return arg1(dependencyMap[17]).t./ARPKQ;
                                                                                        } else {
                                                                                          found = constants;
                                                                                          if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
                                                                                            found = constants;
                                                                                            if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
                                                                                              found = constants;
                                                                                              if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
                                                                                                return arg1(dependencyMap[17]).t.zYb2da;
                                                                                              } else {
                                                                                                found = constants;
                                                                                                if (constants.THREAD_CREATE === action) {
                                                                                                  let found1 = null;
                                                                                                  if (null != log.changes) {
                                                                                                    const changes1 = log.changes;
                                                                                                    found1 = changes1.find((key) => key.key === constants.TYPE);
                                                                                                  }
                                                                                                  if (null == found1) {
                                                                                                    const _Error = Error;
                                                                                                    const error = new Error("[AuditLog] Could not find type change for thread create");
                                                                                                    throw error;
                                                                                                  } else {
                                                                                                    const newValue2 = found1.newValue;
                                                                                                    found = constants2;
                                                                                                    if (constants2.PRIVATE_THREAD === newValue2) {
                                                                                                      return arg1(dependencyMap[17]).t.Br0y5w;
                                                                                                    } else if (constants2.ANNOUNCEMENT_THREAD === newValue2) {
                                                                                                      return arg1(dependencyMap[17]).t.6uaMmO;
                                                                                                    } else {
                                                                                                      return arg1(dependencyMap[17]).t.2cxQ7G;
                                                                                                    }
                                                                                                  }
                                                                                                } else {
                                                                                                  found = constants;
                                                                                                  if (constants.THREAD_UPDATE === action) {
                                                                                                    return arg1(dependencyMap[17]).t.PSsy4t;
                                                                                                  } else {
                                                                                                    found = constants;
                                                                                                    if (constants.THREAD_DELETE === action) {
                                                                                                      return arg1(dependencyMap[17]).t.s3Khn8;
                                                                                                    } else {
                                                                                                      found = constants;
                                                                                                      if (constants.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
                                                                                                        return arg1(dependencyMap[17]).t.uzCqBm;
                                                                                                      } else {
                                                                                                        found = constants;
                                                                                                        if (constants.AUTO_MODERATION_BLOCK_MESSAGE === action) {
                                                                                                          return arg1(dependencyMap[17]).t.NqWv2K;
                                                                                                        } else {
                                                                                                          found = constants;
                                                                                                          if (constants.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
                                                                                                            const options = log.options;
                                                                                                            let prop;
                                                                                                            if (null != options) {
                                                                                                              prop = options.auto_moderation_rule_trigger_type;
                                                                                                            }
                                                                                                            if (prop === str.toString()) {
                                                                                                              let SD0PwJ = arg1(dependencyMap[17]).t.YQsjej;
                                                                                                            } else {
                                                                                                              SD0PwJ = arg1(dependencyMap[17]).t.SD0PwJ;
                                                                                                            }
                                                                                                            return SD0PwJ;
                                                                                                          } else {
                                                                                                            found = constants;
                                                                                                            if (constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
                                                                                                              return arg1(dependencyMap[17]).t.Vk4TwX;
                                                                                                            } else {
                                                                                                              found = constants;
                                                                                                              if (constants.AUTO_MODERATION_QUARANTINE_USER === action) {
                                                                                                                return arg1(dependencyMap[17]).t./W5u5o;
                                                                                                              } else {
                                                                                                                found = constants;
                                                                                                                if (constants.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
                                                                                                                  return arg1(dependencyMap[17]).t.ONvWyr;
                                                                                                                } else {
                                                                                                                  found = constants;
                                                                                                                  if (constants.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
                                                                                                                    return arg1(dependencyMap[17]).t.ryGLk+;
                                                                                                                  } else {
                                                                                                                    found = constants;
                                                                                                                    if (constants.AUTO_MODERATION_RULE_CREATE === action) {
                                                                                                                      return arg1(dependencyMap[17]).t.NKljj+;
                                                                                                                    } else {
                                                                                                                      found = constants;
                                                                                                                      if (constants.AUTO_MODERATION_RULE_UPDATE === action) {
                                                                                                                        return arg1(dependencyMap[17]).t.3wEA9u;
                                                                                                                      } else {
                                                                                                                        found = constants;
                                                                                                                        if (constants.AUTO_MODERATION_RULE_DELETE === action) {
                                                                                                                          return arg1(dependencyMap[17]).t.umua3n;
                                                                                                                        } else {
                                                                                                                          found = constants;
                                                                                                                          if (constants.ONBOARDING_PROMPT_CREATE === action) {
                                                                                                                            return arg1(dependencyMap[17]).t./8A1g2;
                                                                                                                          } else {
                                                                                                                            found = constants;
                                                                                                                            if (constants.ONBOARDING_PROMPT_UPDATE === action) {
                                                                                                                              return arg1(dependencyMap[17]).t.ArIrWI;
                                                                                                                            } else {
                                                                                                                              found = constants;
                                                                                                                              if (constants.ONBOARDING_PROMPT_DELETE === action) {
                                                                                                                                return arg1(dependencyMap[17]).t.IuBTao;
                                                                                                                              } else {
                                                                                                                                found = constants;
                                                                                                                                if (constants.ONBOARDING_CREATE === action) {
                                                                                                                                  return arg1(dependencyMap[17]).t.wDaq3/;
                                                                                                                                } else {
                                                                                                                                  found = constants;
                                                                                                                                  if (constants.ONBOARDING_UPDATE === action) {
                                                                                                                                    return arg1(dependencyMap[17]).t.yONu/l;
                                                                                                                                  } else {
                                                                                                                                    found = constants;
                                                                                                                                    if (constants.HOME_SETTINGS_CREATE === action) {
                                                                                                                                      return arg1(dependencyMap[17]).t.dSdCjG;
                                                                                                                                    } else {
                                                                                                                                      found = constants;
                                                                                                                                      if (constants.HOME_SETTINGS_UPDATE === action) {
                                                                                                                                        return arg1(dependencyMap[17]).t.XHE8qv;
                                                                                                                                      } else {
                                                                                                                                        found = constants;
                                                                                                                                        if (constants.GUILD_HOME_FEATURE_ITEM === action) {
                                                                                                                                          let found2 = null;
                                                                                                                                          if (null != log.changes) {
                                                                                                                                            const changes2 = log.changes;
                                                                                                                                            found2 = changes2.find((key) => key.key === constants.ENTITY_TYPE);
                                                                                                                                          }
                                                                                                                                          if (null == found2) {
                                                                                                                                            return arg1(dependencyMap[17]).t.UZ+U3A;
                                                                                                                                          } else {
                                                                                                                                            const newValue = found2.newValue;
                                                                                                                                            found = arg1;
                                                                                                                                            found = dependencyMap;
                                                                                                                                            if (arg1(dependencyMap[20]).GuildFeedItemTypes.MESSAGE === newValue) {
                                                                                                                                              return arg1(dependencyMap[17]).t.PyEa+J;
                                                                                                                                            } else if (arg1(dependencyMap[20]).GuildFeedItemTypes.FORUM_POST === newValue) {
                                                                                                                                              return arg1(dependencyMap[17]).t.hCuAb1;
                                                                                                                                            } else {
                                                                                                                                              return arg1(dependencyMap[17]).t.UZ+U3A;
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          found = constants;
                                                                                                                                          if (constants.GUILD_HOME_REMOVE_ITEM === action) {
                                                                                                                                            return arg1(dependencyMap[17]).t.kPReun;
                                                                                                                                          } else {
                                                                                                                                            found = constants;
                                                                                                                                            if (constants.SOUNDBOARD_SOUND_CREATE === action) {
                                                                                                                                              return arg1(dependencyMap[17]).t.0PD83V;
                                                                                                                                            } else {
                                                                                                                                              found = constants;
                                                                                                                                              if (constants.SOUNDBOARD_SOUND_UPDATE === action) {
                                                                                                                                                return arg1(dependencyMap[17]).t.CM8n1w;
                                                                                                                                              } else {
                                                                                                                                                found = constants;
                                                                                                                                                if (constants.SOUNDBOARD_SOUND_DELETE === action) {
                                                                                                                                                  return arg1(dependencyMap[17]).t.kVz4/0;
                                                                                                                                                } else {
                                                                                                                                                  found = constants;
                                                                                                                                                  if (constants.VOICE_CHANNEL_STATUS_CREATE === action) {
                                                                                                                                                    return arg1(dependencyMap[17]).t.MWjnU7;
                                                                                                                                                  } else {
                                                                                                                                                    found = constants;
                                                                                                                                                    if (constants.VOICE_CHANNEL_STATUS_DELETE === action) {
                                                                                                                                                      return arg1(dependencyMap[17]).t.aS8Krq;
                                                                                                                                                    } else {
                                                                                                                                                      found = constants;
                                                                                                                                                      if (constants.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
                                                                                                                                                        return arg1(dependencyMap[17]).t.NUKUb+;
                                                                                                                                                      } else {
                                                                                                                                                        found = constants;
                                                                                                                                                        if (constants.GUILD_PROFILE_UPDATE === action) {
                                                                                                                                                          return arg1(dependencyMap[17]).t.Ed6hF1;
                                                                                                                                                        } else {
                                                                                                                                                          found = constants;
                                                                                                                                                          if (constants.GUILD_MIGRATE_PIN_PERMISSION === action) {
                                                                                                                                                            return arg1(dependencyMap[17]).t.3Ne7MA;
                                                                                                                                                          } else if (constants.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
                                                                                                                                                            return arg1(dependencyMap[17]).t.naflH+;
                                                                                                                                                          } else {
                                                                                                                                                            return null;
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          return arg1(dependencyMap[17]).t.8qCI36;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export const getStringForAddedChannelFlag = function getStringForAddedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = arg1(dependencyMap[17]).intl;
    return intl3.string(arg1(dependencyMap[17]).t.5G8ZD4);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.4YLtzC);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.1QLRYb);
  } else {
    return null;
  }
};
export const getStringForRemovedChannelFlag = function getStringForRemovedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = arg1(dependencyMap[17]).intl;
    return intl3.string(arg1(dependencyMap[17]).t.S5kuWQ);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.8qpgcz);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(arg0, log) {
  if (constants3.CREATE_INSTANT_INVITE === arg0) {
    let stringResult = log;
    stringResult = dependencyMap;
    const intl52 = log(dependencyMap[17]).intl;
    return intl52.string(log(dependencyMap[17]).t.zJrgTG);
  } else {
    stringResult = constants3;
    if (constants3.KICK_MEMBERS === arg0) {
      stringResult = log;
      stringResult = dependencyMap;
      const intl51 = log(dependencyMap[17]).intl;
      return intl51.string(log(dependencyMap[17]).t.pBNv6i);
    } else {
      stringResult = constants3;
      if (constants3.BAN_MEMBERS === arg0) {
        stringResult = log;
        stringResult = dependencyMap;
        const intl50 = log(dependencyMap[17]).intl;
        return intl50.string(log(dependencyMap[17]).t.oTBA7N);
      } else {
        stringResult = constants3;
        if (constants3.ADMINISTRATOR === arg0) {
          stringResult = log;
          stringResult = dependencyMap;
          const intl49 = log(dependencyMap[17]).intl;
          return intl49.string(log(dependencyMap[17]).t.PGvZqX);
        } else {
          stringResult = constants3;
          if (constants3.MANAGE_CHANNELS === arg0) {
            if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
              if (log.targetType !== AuditLogTargetTypes.CHANNEL_OVERWRITE) {
                stringResult = log;
                stringResult = dependencyMap;
                const intl47 = log(dependencyMap[17]).intl;
                stringResult = intl47.string(log(dependencyMap[17]).t.9qLtWs);
              }
              return stringResult;
            }
            stringResult = log;
            stringResult = dependencyMap;
            const intl48 = log(dependencyMap[17]).intl;
            stringResult = intl48.string(log(dependencyMap[17]).t.nAw15L);
          } else {
            stringResult = constants3;
            if (constants3.MANAGE_GUILD === arg0) {
              const intl46 = log(dependencyMap[17]).intl;
              return intl46.string(log(dependencyMap[17]).t.QZRcfO);
            } else {
              stringResult = constants3;
              if (constants3.VIEW_GUILD_ANALYTICS === arg0) {
                const intl45 = log(dependencyMap[17]).intl;
                return intl45.string(log(dependencyMap[17]).t.rQJBE/);
              } else {
                stringResult = constants3;
                if (constants3.VIEW_CREATOR_MONETIZATION_ANALYTICS === arg0) {
                  const intl44 = log(dependencyMap[17]).intl;
                  return intl44.string(log(dependencyMap[17]).t.0lTLTv);
                } else {
                  stringResult = constants3;
                  if (constants3.CHANGE_NICKNAME === arg0) {
                    const intl43 = log(dependencyMap[17]).intl;
                    return intl43.string(log(dependencyMap[17]).t.dilOF6);
                  } else {
                    stringResult = constants3;
                    if (constants3.MANAGE_NICKNAMES === arg0) {
                      const intl42 = log(dependencyMap[17]).intl;
                      return intl42.string(log(dependencyMap[17]).t.t+Ct5x);
                    } else {
                      stringResult = constants3;
                      if (constants3.MANAGE_ROLES === arg0) {
                        const intl41 = log(dependencyMap[17]).intl;
                        return intl41.string(log(dependencyMap[17]).t.C8d+oG);
                      } else {
                        stringResult = constants3;
                        if (constants3.MANAGE_WEBHOOKS === arg0) {
                          const intl40 = log(dependencyMap[17]).intl;
                          return intl40.string(log(dependencyMap[17]).t./ADKmM);
                        } else {
                          stringResult = constants3;
                          if (constants3.CREATE_GUILD_EXPRESSIONS === arg0) {
                            const intl39 = log(dependencyMap[17]).intl;
                            return intl39.string(log(dependencyMap[17]).t.HarVuP);
                          } else {
                            stringResult = constants3;
                            if (constants3.MANAGE_GUILD_EXPRESSIONS === arg0) {
                              const intl38 = log(dependencyMap[17]).intl;
                              return intl38.string(log(dependencyMap[17]).t.bbuXIn);
                            } else {
                              stringResult = constants3;
                              if (constants3.VIEW_AUDIT_LOG === arg0) {
                                const intl37 = log(dependencyMap[17]).intl;
                                return intl37.string(log(dependencyMap[17]).t.fZgLpA);
                              } else {
                                stringResult = constants3;
                                if (constants3.VIEW_CHANNEL === arg0) {
                                  if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
                                    if (log.targetType !== AuditLogTargetTypes.CHANNEL_OVERWRITE) {
                                      const intl35 = log(dependencyMap[17]).intl;
                                      let stringResult1 = intl35.string(log(dependencyMap[17]).t.uV83yi);
                                    }
                                    return stringResult1;
                                  }
                                  const intl36 = log(dependencyMap[17]).intl;
                                  stringResult1 = intl36.string(log(dependencyMap[17]).t.W/A4Qp);
                                } else {
                                  stringResult = constants3;
                                  if (constants3.SEND_MESSAGES === arg0) {
                                    const intl34 = log(dependencyMap[17]).intl;
                                    return intl34.string(log(dependencyMap[17]).t.T32rkC);
                                  } else {
                                    stringResult = constants3;
                                    if (constants3.SEND_TTS_MESSAGES === arg0) {
                                      const intl33 = log(dependencyMap[17]).intl;
                                      return intl33.string(log(dependencyMap[17]).t.Mg7bku);
                                    } else {
                                      stringResult = constants3;
                                      if (constants3.USE_APPLICATION_COMMANDS === arg0) {
                                        const intl32 = log(dependencyMap[17]).intl;
                                        return intl32.string(log(dependencyMap[17]).t.shbR1a);
                                      } else {
                                        stringResult = constants3;
                                        if (constants3.MANAGE_MESSAGES === arg0) {
                                          const intl31 = log(dependencyMap[17]).intl;
                                          return intl31.string(log(dependencyMap[17]).t.6lU9xM);
                                        } else {
                                          stringResult = constants3;
                                          if (constants3.EMBED_LINKS === arg0) {
                                            const intl30 = log(dependencyMap[17]).intl;
                                            return intl30.string(log(dependencyMap[17]).t.969dEL);
                                          } else {
                                            stringResult = constants3;
                                            if (constants3.ATTACH_FILES === arg0) {
                                              const intl29 = log(dependencyMap[17]).intl;
                                              return intl29.string(log(dependencyMap[17]).t.3AS4UM);
                                            } else {
                                              stringResult = constants3;
                                              if (constants3.READ_MESSAGE_HISTORY === arg0) {
                                                const intl28 = log(dependencyMap[17]).intl;
                                                return intl28.string(log(dependencyMap[17]).t.l9ufaR);
                                              } else {
                                                stringResult = constants3;
                                                if (constants3.MENTION_EVERYONE === arg0) {
                                                  const intl27 = log(dependencyMap[17]).intl;
                                                  return intl27.string(log(dependencyMap[17]).t.Y78KGC);
                                                } else {
                                                  stringResult = constants3;
                                                  if (constants3.USE_EXTERNAL_EMOJIS === arg0) {
                                                    const intl26 = log(dependencyMap[17]).intl;
                                                    return intl26.string(log(dependencyMap[17]).t.BpBGZU);
                                                  } else {
                                                    stringResult = constants3;
                                                    if (constants3.USE_EXTERNAL_STICKERS === arg0) {
                                                      const intl25 = log(dependencyMap[17]).intl;
                                                      return intl25.string(log(dependencyMap[17]).t.UeRs+b);
                                                    } else {
                                                      stringResult = constants3;
                                                      if (constants3.ADD_REACTIONS === arg0) {
                                                        const intl24 = log(dependencyMap[17]).intl;
                                                        return intl24.string(log(dependencyMap[17]).t.yEoJAr);
                                                      } else {
                                                        stringResult = constants3;
                                                        if (constants3.CONNECT === arg0) {
                                                          const intl23 = log(dependencyMap[17]).intl;
                                                          return intl23.string(log(dependencyMap[17]).t.S0W8Z5);
                                                        } else {
                                                          stringResult = constants3;
                                                          if (constants3.SPEAK === arg0) {
                                                            const intl22 = log(dependencyMap[17]).intl;
                                                            return intl22.string(log(dependencyMap[17]).t.8w1tIR);
                                                          } else {
                                                            stringResult = constants3;
                                                            if (constants3.MUTE_MEMBERS === arg0) {
                                                              const intl21 = log(dependencyMap[17]).intl;
                                                              return intl21.string(log(dependencyMap[17]).t.8EI30/);
                                                            } else {
                                                              stringResult = constants3;
                                                              if (constants3.DEAFEN_MEMBERS === arg0) {
                                                                const intl20 = log(dependencyMap[17]).intl;
                                                                return intl20.string(log(dependencyMap[17]).t.9L47Fr);
                                                              } else {
                                                                stringResult = constants3;
                                                                if (constants3.MOVE_MEMBERS === arg0) {
                                                                  const intl19 = log(dependencyMap[17]).intl;
                                                                  return intl19.string(log(dependencyMap[17]).t.YtjJPQ);
                                                                } else {
                                                                  stringResult = constants3;
                                                                  if (constants3.USE_VAD === arg0) {
                                                                    const intl18 = log(dependencyMap[17]).intl;
                                                                    return intl18.string(log(dependencyMap[17]).t.08zAV7);
                                                                  } else {
                                                                    stringResult = constants3;
                                                                    if (constants3.PRIORITY_SPEAKER === arg0) {
                                                                      const intl17 = log(dependencyMap[17]).intl;
                                                                      return intl17.string(log(dependencyMap[17]).t.BVK71i);
                                                                    } else {
                                                                      stringResult = constants3;
                                                                      if (constants3.STREAM === arg0) {
                                                                        const intl16 = log(dependencyMap[17]).intl;
                                                                        return intl16.string(log(dependencyMap[17]).t.FlNoSV);
                                                                      } else {
                                                                        stringResult = constants3;
                                                                        if (constants3.REQUEST_TO_SPEAK === arg0) {
                                                                          const intl15 = log(dependencyMap[17]).intl;
                                                                          return intl15.string(log(dependencyMap[17]).t.5kicT2);
                                                                        } else {
                                                                          stringResult = constants3;
                                                                          if (constants3.USE_EMBEDDED_ACTIVITIES === arg0) {
                                                                            const intl14 = log(dependencyMap[17]).intl;
                                                                            return intl14.string(log(dependencyMap[17]).t.rLSGeh);
                                                                          } else {
                                                                            stringResult = constants3;
                                                                            if (constants3.CREATE_EVENTS === arg0) {
                                                                              const intl13 = log(dependencyMap[17]).intl;
                                                                              return intl13.string(log(dependencyMap[17]).t.qyjZua);
                                                                            } else {
                                                                              stringResult = constants3;
                                                                              if (constants3.MANAGE_EVENTS === arg0) {
                                                                                const intl12 = log(dependencyMap[17]).intl;
                                                                                return intl12.string(log(dependencyMap[17]).t.HIgA5a);
                                                                              } else {
                                                                                stringResult = constants3;
                                                                                if (constants3.CREATE_PUBLIC_THREADS === arg0) {
                                                                                  const intl11 = log(dependencyMap[17]).intl;
                                                                                  return intl11.string(log(dependencyMap[17]).t.25rKnX);
                                                                                } else {
                                                                                  stringResult = constants3;
                                                                                  if (constants3.CREATE_PRIVATE_THREADS === arg0) {
                                                                                    const intl10 = log(dependencyMap[17]).intl;
                                                                                    return intl10.string(log(dependencyMap[17]).t.QwbTSa);
                                                                                  } else {
                                                                                    stringResult = constants3;
                                                                                    if (constants3.SEND_MESSAGES_IN_THREADS === arg0) {
                                                                                      const intl9 = log(dependencyMap[17]).intl;
                                                                                      return intl9.string(log(dependencyMap[17]).t.fTE74g);
                                                                                    } else {
                                                                                      stringResult = constants3;
                                                                                      if (constants3.MANAGE_THREADS === arg0) {
                                                                                        const intl8 = log(dependencyMap[17]).intl;
                                                                                        return intl8.string(log(dependencyMap[17]).t.kEqgr7);
                                                                                      } else {
                                                                                        stringResult = constants3;
                                                                                        if (constants3.MODERATE_MEMBERS === arg0) {
                                                                                          const intl7 = log(dependencyMap[17]).intl;
                                                                                          return intl7.string(log(dependencyMap[17]).t.+RL6pz);
                                                                                        } else {
                                                                                          stringResult = constants3;
                                                                                          if (constants3.SET_VOICE_CHANNEL_STATUS === arg0) {
                                                                                            const intl6 = log(dependencyMap[17]).intl;
                                                                                            return intl6.string(log(dependencyMap[17]).t.VBwkUf);
                                                                                          } else {
                                                                                            stringResult = constants3;
                                                                                            if (constants3.SEND_POLLS === arg0) {
                                                                                              const intl5 = log(dependencyMap[17]).intl;
                                                                                              return intl5.string(log(dependencyMap[17]).t.UMQ7Ww);
                                                                                            } else {
                                                                                              stringResult = constants3;
                                                                                              if (constants3.USE_EXTERNAL_APPS === arg0) {
                                                                                                const intl4 = log(dependencyMap[17]).intl;
                                                                                                return intl4.string(log(dependencyMap[17]).t.TtA5rK);
                                                                                              } else {
                                                                                                stringResult = constants3;
                                                                                                if (constants3.PIN_MESSAGES === arg0) {
                                                                                                  const intl3 = log(dependencyMap[17]).intl;
                                                                                                  return intl3.string(log(dependencyMap[17]).t.Y5BI39);
                                                                                                } else {
                                                                                                  stringResult = constants3;
                                                                                                  if (constants3.BYPASS_SLOWMODE === arg0) {
                                                                                                    const intl2 = log(dependencyMap[17]).intl;
                                                                                                    return intl2.string(log(dependencyMap[17]).t.kqcjeV);
                                                                                                  } else {
                                                                                                    stringResult = constants3;
                                                                                                    if (constants3.MANAGE_OFFICIAL_MESSAGES === arg0) {
                                                                                                      const intl = log(dependencyMap[17]).intl;
                                                                                                      return intl.string(log(dependencyMap[17]).t.Aj9ruN);
                                                                                                    } else {
                                                                                                      return null;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export const transformLogs = function transformLogs(_logs, stateFromStores1) {
  const items = [];
  const importDefault = items;
  const item = _logs.forEach((set) => {
    let arg1 = set;
    const tmp = function transformTarget(targetType, id) {
      const result3 = targetType;
      const items = id;
      targetType = targetType.targetType;
      if (constants2.GUILD !== targetType) {
        if (constants2.GUILD_HOME !== targetType) {
          if (constants2.GUILD_PROFILE !== targetType) {
            if (constants2.CHANNEL !== targetType) {
              if (constants2.CHANNEL_OVERWRITE !== targetType) {
                if (constants2.USER === targetType) {
                  return callback(targetType, constants.NICK, (arg0) => user.getUser(arg0), (arg0) => arg0);
                } else if (constants2.ROLE === targetType) {
                  return callback(targetType, constants.NAME, (arg0) => role.getRole(arg1.id, arg0), (name) => name.name);
                } else if (constants2.ONBOARDING_PROMPT === targetType) {
                  let stringResult = callback(targetType, constants.ID, (arg0) => onboardingPrompt.getOnboardingPrompt(arg0), (title) => title.title);
                  if (null == stringResult) {
                    const intl = result3(closure_3[17]).intl;
                    stringResult = intl.string(result3(closure_3[17]).t.ZNQyiR);
                  }
                  return stringResult;
                } else {
                  if (constants2.GUILD_ONBOARDING !== targetType) {
                    if (constants2.GUILD_MEMBER_VERIFICATION !== targetType) {
                      if (constants2.INVITE === targetType) {
                        return callback(targetType, constants.CODE, closure_24);
                      } else if (constants2.INTEGRATION === targetType) {
                        return callback(targetType, constants.TYPE, (arg0) => {
                          const integrations = closure_14.integrations;
                          return integrations.find((id) => id.id === id);
                        }, (name) => name.name);
                      } else if (constants2.WEBHOOK === targetType) {
                        return callback(targetType, constants.NAME, (arg0) => {
                          const webhooks = closure_14.webhooks;
                          return webhooks.find((id) => id.id === id);
                        }, (name) => name.name);
                      } else if (constants2.EMOJI === targetType) {
                        return callback(targetType, constants.NAME, (arg0) => {
                          const guildEmoji = guildEmoji.getGuildEmoji(arg1.id);
                          return guildEmoji.find((id) => id.id === id);
                        }, (name) => name.name);
                      } else if (constants2.STICKER === targetType) {
                        return callback(targetType, constants.NAME, (arg0) => stickerById.getStickerById(arg0), (name) => name.name);
                      } else if (constants2.STAGE_INSTANCE === targetType) {
                        return callback(targetType, constants.TOPIC, (arg0) => {
                          const values = Object.values(stageInstancesByGuild.getStageInstancesByGuild(arg1.id));
                          let found;
                          if (null != values) {
                            found = values.find((id) => id.id === id);
                          }
                          return found;
                        }, (topic) => topic.topic);
                      } else {
                        if (constants2.GUILD_SCHEDULED_EVENT !== targetType) {
                          if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                            if (constants2.THREAD === targetType) {
                              return callback(targetType, constants.NAME, (arg0) => {
                                const threads = closure_14.threads;
                                return threads.find((id) => id.id === id);
                              }, (name) => name.name);
                            } else if (constants2.APPLICATION_COMMAND === targetType) {
                              if (targetType.targetId === targetType.options.application_id) {
                                const integrations = closure_14.integrations;
                                const found = integrations.find((application) => {
                                  application = application.application;
                                  let id;
                                  if (null != application) {
                                    id = application.id;
                                  }
                                  return id === application.targetId;
                                });
                                return null != found ? found.name : targetType.targetId;
                              } else {
                                return callback(targetType, constants.NAME, (arg0) => {
                                  const applicationCommands = closure_14.applicationCommands;
                                  return applicationCommands.find((id) => id.id === id);
                                }, (name_localized) => {
                                  if (null != name_localized.name_localized) {
                                    if ("" !== name_localized.name_localized) {
                                      let name = name_localized.name_localized;
                                    }
                                    let combined = name;
                                    if (name_localized.type === name_localized(closure_3[24]).ApplicationCommandType.CHAT) {
                                      const _HermesInternal = HermesInternal;
                                      combined = "/\u2060" + name;
                                    }
                                    return combined;
                                  }
                                  name = name_localized.name;
                                });
                              }
                            } else if (constants2.AUTO_MODERATION_RULE === targetType) {
                              return callback(targetType, constants.NAME, (arg0) => {
                                const automodRules = closure_14.automodRules;
                                return automodRules.find((id) => id.id === id);
                              }, (name) => name.name);
                            } else if (constants2.GUILD_SOUNDBOARD === targetType) {
                              return callback(targetType, constants.NAME, closure_24);
                            } else if (constants2.HOME_SETTINGS === targetType) {
                              return callback(targetType, constants.GUILD_ID, (closure_0) => settings.getSettings(closure_0), () => {
                                const intl = arg0(closure_3[17]).intl;
                                return intl.string(arg0(closure_3[17]).t.VbpLyU);
                              }, id.id);
                            } else if (constants2.VOICE_CHANNEL_STATUS === targetType) {
                              return callback(targetType, constants.STATUS, (channelId) => store.getChannel(channelId), (channel) => channel(closure_3[23]).computeChannelName(channel, closure_13, closure_12, true));
                            } else {
                              closure_35.warn("Unknown targetType for log", targetType);
                              return null;
                            }
                          }
                        }
                        return callback(targetType, constants.NAME, (arg0) => {
                          const guildScheduledEvents = closure_14.guildScheduledEvents;
                          return guildScheduledEvents.find((id) => id.id === id);
                        }, (name) => name.name);
                      }
                    }
                  }
                  return id;
                }
              }
            }
            return callback(targetType, constants.NAME, (channelId) => store.getChannel(channelId), (channel) => channel(closure_3[23]).computeChannelName(channel, closure_13, closure_12, true));
          }
        }
      }
      return id;
    }(set, arg1);
    if (null != tmp) {
      const result = set.set("user", tmp2);
      arg1 = result;
      const result1 = result.set("target", tmp);
      arg1 = result1;
      const result2 = result1.set("options", function transformOptions(result1) {
        const result3 = result1;
        if (null != result1.options) {
          const obj = {};
          const merged = Object.assign(result1.options);
          const type = result1.options.type;
          if (constants3.USER === type) {
            obj.subtarget = callback2(result1.options.id, (arg0) => user.getUser(arg0), (tag) => tag.tag);
          } else if (constants3.ROLE === type) {
            obj.subtarget = callback2(result1.options.role_name, closure_24);
          }
          if (null != result1.options.channel_id) {
            obj.channel = callback(result1, "", (channelId) => channel.getChannel(channelId), (arg0) => arg0, result1.options.channel_id);
          }
          let tmp10 = null != result1.options.members_removed;
          if (tmp10) {
            tmp10 = 0 !== result1.options.members_removed;
          }
          if (tmp10) {
            obj.count = result1.options.members_removed;
          }
          if (null != result1.options.event_exception_id) {
            const guildScheduledEvents = closure_14.guildScheduledEvents;
            const found = guildScheduledEvents.find((id) => id.id === id.targetId);
            let found1;
            if (null != found) {
              const prop = found.guild_scheduled_event_exceptions;
              found1 = prop.find((event_exception_id) => event_exception_id.event_exception_id === event_exception_id.options.event_exception_id);
            }
            const obj2 = result3(closure_3[29]);
            const tmp15 = items(closure_3[30]);
            let event_exception_id;
            if (null != found1) {
              event_exception_id = found1.event_exception_id;
            }
            let str2 = "0";
            if (null != event_exception_id) {
              str2 = event_exception_id;
            }
            obj.subtarget = obj2.dateFormat(tmp15(items(closure_3[19]).extractTimestamp(str2)), "LL");
            const obj3 = items(closure_3[19]);
          }
          return obj;
        } else {
          return result1.options;
        }
      }(result1));
      arg1 = result2;
      let tmp8 = result2;
      if (null != result2.changes) {
        const items = [];
        const changes = result2.changes;
        const item = changes.forEach((newValue) => {
          let arr = function transformChange(newValue, result3, result32) {
            let added;
            let added2;
            let added3;
            let oldValue;
            let removed;
            let removed2;
            let removed3;
            if (result3.action === constants.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let arr = newValue.newValue || newValue.oldValue;
              const type = arr.type;
              arr = constants4;
              if (constants4.ROLE === type) {
                arr = callback6;
                newValue.subtarget = callback6(arr.id, (arg0) => role.getRole(arg2.id, arg0), (name) => name.name);
              } else {
                arr = constants4;
                if (constants4.USER === type) {
                  arr = callback6;
                  newValue.subtarget = callback6(arr.id, (arg0) => authStore.getUser(arg0), (tag) => tag.tag);
                } else {
                  arr = constants4;
                  if (constants4.CHANNEL === type) {
                    arr = closure_3;
                    const obj5 = arr(closure_3[25])(result32.id);
                    if (arr.id === str2.toString()) {
                      arr = result32;
                      arr = closure_3;
                      const intl = result32(closure_3[17]).intl;
                      newValue.subtarget = intl.string(result32(closure_3[17]).t.MSYhgh);
                    } else {
                      arr = callback6;
                      newValue.subtarget = callback6(arr.id, (channelId) => store.getChannel(channelId), (channel) => arg2(closure_3[23]).computeChannelName(channel, closure_13, closure_12, true));
                    }
                    const str2 = arr(closure_3[25])(result32.id).subtract(1);
                  }
                }
              }
              return newValue;
            } else {
              const key = newValue.key;
              arr = constants2;
              if (constants2.OWNER_ID === key) {
                arr = callback5;
                return callback5(newValue, (arg0) => authStore.getUser(arg0));
              } else {
                arr = constants2;
                if (constants2.CHANNEL_ID !== key) {
                  arr = constants2;
                  if (constants2.AFK_CHANNEL_ID !== key) {
                    arr = constants2;
                    if (constants2.SYSTEM_CHANNEL_ID !== key) {
                      arr = constants2;
                      if (constants2.RULES_CHANNEL_ID !== key) {
                        arr = constants2;
                        if (constants2.PUBLIC_UPDATES_CHANNEL_ID !== key) {
                          arr = constants2;
                          if (constants2.AFK_TIMEOUT === key) {
                            arr = callback5;
                            return callback5(newValue, (arg0) => arg0 / 60);
                          } else {
                            arr = constants2;
                            if (constants2.BITRATE === key) {
                              arr = callback5;
                              return callback5(newValue, (arg0) => arg0 / 1000);
                            } else {
                              arr = constants2;
                              if (constants2.COLOR === key) {
                                arr = callback5;
                                return callback5(newValue, (color) => {
                                  const obj = arg2(closure_3[26]);
                                  return arg2(closure_3[26]).int2hex(color).toUpperCase();
                                });
                              } else {
                                arr = constants2;
                                if (constants2.THEME_COLORS === key) {
                                  arr = callback5;
                                  return callback5(newValue, (arg0) => {
                                    const obj = arg2(closure_3[26]);
                                    const formatted = arg2(closure_3[26]).int2hex(arg0[0]).toUpperCase();
                                    const str = arg2(closure_3[26]).int2hex(arg0[0]);
                                    const obj2 = arg2(closure_3[26]);
                                    return "" + formatted + ", " + arg2(closure_3[26]).int2hex(arg0[1]).toUpperCase();
                                  });
                                } else {
                                  arr = constants2;
                                  if (constants2.MAX_AGE === key) {
                                    arr = callback5;
                                    return callback5(newValue, (maxAge) => {
                                      let label = maxAge;
                                      const maxAgeOptionByValue = callback(closure_3[27]).getMaxAgeOptionByValue(maxAge);
                                      if (null !== maxAgeOptionByValue) {
                                        label = maxAgeOptionByValue.label;
                                      }
                                      return label;
                                    });
                                  } else {
                                    arr = constants2;
                                    if (constants2.PERMISSIONS === key) {
                                      const items = [];
                                      ({ added: added3, removed: removed3 } = callback2(newValue.oldValue, newValue.newValue));
                                      if (added3.length > 0) {
                                        const prototype5 = ctor.prototype;
                                        const tmp91 = new ctor(constants2.PERMISSIONS_GRANTED, null, added3);
                                        arr = items.push(tmp91);
                                      }
                                      if (removed3.length > 0) {
                                        const prototype6 = ctor.prototype;
                                        arr = new ctor(constants2.PERMISSIONS_DENIED, null, removed3);
                                        arr = items.push(arr);
                                      }
                                      return items;
                                    } else {
                                      arr = constants2;
                                      if (constants2.PERMISSIONS_GRANTED !== key) {
                                        arr = constants2;
                                        if (constants2.PERMISSIONS_DENIED !== key) {
                                          arr = constants2;
                                          if (constants2.FLAGS === key) {
                                            const items1 = [];
                                            ({ oldValue, newValue } = newValue);
                                            let num4 = 0;
                                            if ("number" === typeof oldValue) {
                                              num4 = oldValue;
                                            }
                                            let num5 = 0;
                                            if ("number" === typeof newValue) {
                                              num5 = newValue;
                                            }
                                            let obj = callback(closure_3[22]);
                                            callback(closure_3[22]);
                                            const items2 = [];
                                            const items3 = [];
                                            for (const key10129 in closure_30) {
                                              arr = key10129;
                                              arr = closure_30;
                                              arr = closure_30[key10129];
                                              arr = closure_2;
                                              arr = closure_3;
                                              let obj4 = closure_2(closure_3[22]);
                                              if (obj4.hasFlag(removeFlagResult, arr)) {
                                                let arr1 = items2.push(arr);
                                              }
                                              let tmp45 = closure_2;
                                              let tmp46 = closure_3;
                                              let obj2 = closure_2(closure_3[22]);
                                              if (!obj2.hasFlag(tmp42, arr)) {
                                                continue;
                                              } else {
                                                let arr2 = items3.push(arr);
                                                // continue
                                              }
                                              continue;
                                            }
                                            obj = { added: items2, removed: items3 };
                                            ({ added, removed } = obj);
                                            if (added.length > 0) {
                                              const prototype = ctor.prototype;
                                              const tmp53 = new ctor(newValue.key, null, added);
                                              items1.push(tmp53);
                                            }
                                            if (removed.length > 0) {
                                              const prototype2 = ctor.prototype;
                                              const tmp61 = new ctor(newValue.key, removed, null);
                                              items1.push(tmp61);
                                            }
                                            return items1;
                                          } else {
                                            arr = constants2;
                                            if (constants2.PREFERRED_LOCALE === key) {
                                              return callback5(newValue, (arg0) => {
                                                const arg2 = arg0;
                                                const availableLocales = arg2(closure_3[17]).getAvailableLocales();
                                                const found = availableLocales.find(() => { ... });
                                                let name = null;
                                                if (null != found) {
                                                  name = found.name;
                                                }
                                                return name;
                                              });
                                            } else {
                                              arr = constants2;
                                              if (constants2.VIDEO_QUALITY_MODE === key) {
                                                return callback5(newValue, (arg0) => {
                                                  if (arg0 === constants2.FULL) {
                                                    const intl2 = arg2(closure_3[17]).intl;
                                                    let stringResult = intl2.string(arg2(closure_3[17]).t.7jOoJE);
                                                  } else {
                                                    const intl = arg2(closure_3[17]).intl;
                                                    stringResult = intl.string(arg2(closure_3[17]).t.jjKYpu);
                                                  }
                                                  return stringResult;
                                                });
                                              } else {
                                                arr = constants2;
                                                if (constants2.SYSTEM_CHANNEL_FLAGS === key) {
                                                  return function transformSystemChannelFlagsChanges(newValue) {
                                                    const arg2 = newValue;
                                                    const obj = { [closure_28.SUPPRESS_JOIN_NOTIFICATIONS]: constants.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS, [closure_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: constants.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS, [closure_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: constants.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS, [closure_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: constants.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES };
                                                    const items = [];
                                                    const values = Object.values(closure_28);
                                                    const item = values.forEach(() => { ... });
                                                    return items;
                                                  }(newValue);
                                                } else {
                                                  arr = constants2;
                                                  if (constants2.AUTO_MODERATION_ACTIONS === key) {
                                                    let tmp34 = newValue;
                                                    if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                      tmp34 = callback5(newValue, (arr) => arr.map(() => { ... }), (arr) => {
                                                        const mapped = arr.map(arg2(closure_3[28]).actionTypeToName);
                                                        return mapped.join(", ");
                                                      });
                                                    }
                                                    return tmp34;
                                                  } else {
                                                    arr = constants2;
                                                    if (constants2.AUTO_MODERATION_EVENT_TYPE === key) {
                                                      let tmp29 = newValue;
                                                      if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                        tmp29 = callback5(newValue, result32(closure_3[28]).eventTypeToName);
                                                      }
                                                      return tmp29;
                                                    } else {
                                                      arr = constants2;
                                                      if (constants2.AUTO_MODERATION_TRIGGER_TYPE === key) {
                                                        let tmp24 = newValue;
                                                        if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                          tmp24 = callback5(newValue, result32(closure_3[28]).triggerTypeToName);
                                                        }
                                                        return tmp24;
                                                      } else {
                                                        arr = constants2;
                                                        if (constants2.AUTO_MODERATION_TRIGGER_METADATA === key) {
                                                          let tmp21 = newValue;
                                                          if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                            tmp21 = callback5(newValue, (arg0) => {
                                                              let joined = arg0;
                                                              let tmp2 = arg0;
                                                              if (null != arg0) {
                                                                tmp2 = joined;
                                                                if ("object" === typeof joined) {
                                                                  if (null == joined.keyword_filter) {
                                                                    const _JSON = JSON;
                                                                    let json = JSON.stringify(joined);
                                                                  } else {
                                                                    const _Array = Array;
                                                                  }
                                                                  const intl = arg2(closure_3[17]).intl;
                                                                  const obj = {};
                                                                  const keyword_filter = joined.keyword_filter;
                                                                  const mapped = keyword_filter.map(() => { ... });
                                                                  joined = mapped.join(", ");
                                                                  obj.newValue = joined;
                                                                  json = intl.formatToMarkdownString(arg2(closure_3[17]).t.y91UXV, obj);
                                                                }
                                                              }
                                                              return tmp2;
                                                            });
                                                          }
                                                          return tmp21;
                                                        } else {
                                                          arr = constants2;
                                                          if (constants2.AUTO_MODERATION_ADD_KEYWORDS !== key) {
                                                            arr = constants2;
                                                            if (constants2.AUTO_MODERATION_REMOVE_KEYWORDS !== key) {
                                                              arr = constants2;
                                                              if (constants2.AUTO_MODERATION_ADD_REGEX_PATTERNS !== key) {
                                                                arr = constants2;
                                                                if (constants2.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== key) {
                                                                  arr = constants2;
                                                                  if (constants2.AUTO_MODERATION_ADD_ALLOW_LIST !== key) {
                                                                    arr = constants2;
                                                                    if (constants2.AUTO_MODERATION_REMOVE_ALLOW_LIST !== key) {
                                                                      arr = constants2;
                                                                      if (constants2.AUTO_MODERATION_EXEMPT_CHANNELS === key) {
                                                                        let tmp15 = newValue;
                                                                        if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                                          tmp15 = callback5(newValue, (arr) => {
                                                                            const mapped = arr.map(store.getChannel);
                                                                            const found = mapped.filter(() => { ... });
                                                                            return found.map(() => { ... });
                                                                          }, (join) => {
                                                                            if (null != join) {
                                                                              if (join.length > 0) {
                                                                                let joined = join.join(", ");
                                                                              }
                                                                              return joined;
                                                                            }
                                                                            const intl = arg2(closure_3[17]).intl;
                                                                            joined = intl.string(arg2(closure_3[17]).t.K/EdV8);
                                                                          });
                                                                        }
                                                                        return tmp15;
                                                                      } else {
                                                                        arr = constants2;
                                                                        if (constants2.AUTO_MODERATION_EXEMPT_ROLES === key) {
                                                                          let tmp12 = newValue;
                                                                          if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                                            tmp12 = callback5(newValue, (arr) => {
                                                                              const mapped = arr.map(() => { ... });
                                                                              const found = mapped.filter(() => { ... });
                                                                              return found.map(() => { ... });
                                                                            }, (join) => {
                                                                              if (null != join) {
                                                                                if (join.length > 0) {
                                                                                  let joined = join.join(", ");
                                                                                }
                                                                                return joined;
                                                                              }
                                                                              const intl = arg2(closure_3[17]).intl;
                                                                              joined = intl.string(arg2(closure_3[17]).t.K/EdV8);
                                                                            });
                                                                          }
                                                                          return tmp12;
                                                                        } else {
                                                                          arr = constants2;
                                                                          if (constants2.ROLE_IDS === key) {
                                                                            let tmp9 = newValue;
                                                                            if (result3.targetType === constants3.INVITE) {
                                                                              tmp9 = callback5(newValue, (arr) => {
                                                                                const mapped = arr.map(() => { ... });
                                                                                const found = mapped.filter(() => { ... });
                                                                                return found.map(() => { ... });
                                                                              });
                                                                            }
                                                                            return tmp9;
                                                                          } else {
                                                                            arr = constants2;
                                                                            if (constants2.AVAILABLE_TAGS === key) {
                                                                              return callback4(newValue);
                                                                            } else if (constants2.APPLIED_TAGS === key) {
                                                                              return callback3(newValue, result3);
                                                                            } else {
                                                                              if (constants2.SCHEDULED_START_TIME !== key) {
                                                                                if (constants2.SCHEDULED_END_TIME !== key) {
                                                                                  return newValue;
                                                                                }
                                                                              }
                                                                              return callback5(newValue, (arg0) => {
                                                                                const obj = arg2(closure_3[29]);
                                                                                const tmp = callback(closure_3[30]);
                                                                                return obj.dateFormat(tmp(new Date(arg0)), "LLLL");
                                                                              });
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          let tmp18 = newValue;
                                                          if (result3.targetType === constants3.AUTO_MODERATION_RULE) {
                                                            tmp18 = callback5(newValue, (arr) => {
                                                              if (null != arr) {
                                                                const _Array = Array;
                                                                if (Array.isArray(arr)) {
                                                                  const mapped = arr.map(() => { ... });
                                                                  let joined = mapped.join(", ");
                                                                }
                                                                return joined;
                                                              }
                                                              joined = JSON.stringify(arr);
                                                            });
                                                          }
                                                          return tmp18;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const items4 = [];
                                      ({ added: added2, removed: removed2 } = callback2(newValue.oldValue, newValue.newValue));
                                      if (added2.length > 0) {
                                        const prototype3 = ctor.prototype;
                                        const tmp71 = new ctor(newValue.key, null, added2);
                                        items4.push(tmp71);
                                      }
                                      if (removed2.length > 0) {
                                        const prototype4 = ctor.prototype;
                                        const tmp80 = new ctor(constants2.PERMISSIONS_RESET, removed2, removed2);
                                        items4.push(tmp80);
                                      }
                                      return items4;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                arr = callback5;
                return callback5(newValue, (channelId) => store.getChannel(channelId), (channel) => arg2(closure_3[23]).computeChannelName(channel, closure_13, closure_12, true));
              }
            }
          }(newValue, result3, result3);
          if (Array.isArray(arr)) {
            const item = arr.forEach((arg0) => arr.push(arg0));
          } else {
            arr = items.push(arr);
          }
        });
        const result3 = result2.set("changes", items);
        arg1 = result3;
        tmp8 = result3;
      }
      items.push(tmp8);
    } else {
      const items1 = [constants.MEMBER_PRUNE, constants.MEMBER_DISCONNECT, constants.MEMBER_MOVE, constants.CREATOR_MONETIZATION_REQUEST_CREATED, constants.CREATOR_MONETIZATION_TERMS_ACCEPTED];
    }
  });
  return items;
};
export { transformAppliedForumTagChange };
export { transformAvailableForumTagChange };
