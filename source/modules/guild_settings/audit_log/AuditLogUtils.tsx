// Module ID: 16275
// Function ID: 126440
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4991, 5058, 4333, 1353, 5035, 16274, 1348, 1910, 3767, 1849, 16273, 653, 1355, 11034, 1354, 3, 4206, 1212, 7556, 21, 16276, 483, 1360, 4320, 1881, 24, 665, 8528, 16277, 3800, 3712, 2]
// Exports: checkChangesToRender, getChangeStrings, getChangeTitle, getSimpleAuditLogChangeDetails, getSimpleAuditLogTitleContextFromChange, getSimpleAuditLogTitleFromChange, getStringForAddedChannelFlag, getStringForPermission, getStringForRemovedChannelFlag, transformLogs

// Module 16275 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AuditLogChange } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";
import { AutomodTriggerType } from "AutomodEventType";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import importDefaultResult from "_isNativeReflectConstruct";

let AuditLogChangeKeys;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_32;
let closure_33;
let closure_34;
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
function CommonChangeStrings() {
  return { [closure_16.REASON]: () => outer1_0(outer1_3[17]).t["2IW3C5"] };
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
  let closure_0 = COMMUNICATION_DISABLED_UNTIL;
  let found = null;
  if (null != changes.changes) {
    changes = changes.changes;
    found = changes.find((key) => key.key === closure_0);
  }
  return found;
}
function findAllChangeByKey(ROLES_ADD, changes) {
  let closure_0 = ROLES_ADD;
  if (null != changes.changes) {
    changes = changes.changes;
    let found = changes.filter((key) => key.key === closure_0);
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
  const obj = importAll(483);
  const deserializeResult = importAll(483).deserialize(num);
  let num2 = 0;
  if ("string" === typeof arg1) {
    num2 = arg1;
  }
  const obj2 = importAll(483);
  const deserializeResult1 = importAll(483).deserialize(num2);
  const obj3 = importAll(483);
  importAll(483);
  const added = [];
  const removed = [];
  for (const key10035 in closure_23) {
    let tmp10 = key10035;
    let tmp11 = constants3;
    let tmp12 = constants3[key10035];
    let tmp13 = importAll;
    let tmp14 = dependencyMap;
    let obj5 = importAll(483);
    if (obj5.has(removeResult, tmp12)) {
      let arr = added.push(tmp12);
    }
    let tmp7 = importAll;
    let tmp8 = dependencyMap;
    let obj4 = importAll(483);
    if (!obj4.has(tmp5, tmp12)) {
      continue;
    } else {
      arr = removed.push(tmp12);
      continue;
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
  const item = availableTags.forEach((id) => {
    obj[id.id] = { name: id.name, emojiId: id.emojiId, emojiName: id.emojiName };
  });
  const set = new Set(arr);
  const set1 = new Set(arr2);
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
      let tmp13 = AuditLogChange;
      let tmp14 = AuditLogChangeKeys;
      let prototype = AuditLogChange.prototype;
      let tmp15 = new.target;
      let tmp16 = new.target;
      let tmp17 = null;
      let tmp18 = tmp12;
      let tmp19 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, tmp12);
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
      let tmp24 = AuditLogChange;
      let tmp25 = AuditLogChangeKeys;
      let prototype2 = AuditLogChange.prototype;
      let tmp26 = new.target;
      let tmp27 = new.target;
      let tmp28 = null;
      let tmp29 = tmp23;
      let tmp30 = new AuditLogChange(AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, tmp23);
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
  obj = {};
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
        let tmp5 = AuditLogChange;
        let tmp6 = AuditLogChangeKeys;
        let AVAILABLE_TAG_ADD = AuditLogChangeKeys.AVAILABLE_TAG_ADD;
        let tmp7 = convertForumTag;
        let prototype = AuditLogChange.prototype;
        let tmp8 = new.target;
        let tmp9 = new.target;
        let tmp10 = AVAILABLE_TAG_ADD;
        let tmp11 = null;
        let tmp12 = new AuditLogChange(AVAILABLE_TAG_ADD, null, convertForumTag(obj[key10026]));
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
        let tmp16 = AuditLogChange;
        let tmp17 = AuditLogChangeKeys;
        let AVAILABLE_TAG_DELETE = AuditLogChangeKeys.AVAILABLE_TAG_DELETE;
        let tmp18 = convertForumTag;
        let prototype2 = AuditLogChange.prototype;
        let tmp19 = new.target;
        let tmp20 = new.target;
        let tmp21 = AVAILABLE_TAG_DELETE;
        let tmp22 = null;
        let tmp23 = new AuditLogChange(AVAILABLE_TAG_DELETE, null, convertForumTag(obj[key10046]));
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
    let tmp28 = AuditLogChange;
    let tmp29 = AuditLogChangeKeys;
    let AVAILABLE_TAG_EDIT = AuditLogChangeKeys.AVAILABLE_TAG_EDIT;
    let tmp30 = convertForumTag;
    let tmp31 = convertForumTag(tmp40);
    let prototype3 = AuditLogChange.prototype;
    let tmp32 = new.target;
    let tmp33 = new.target;
    let tmp34 = AVAILABLE_TAG_EDIT;
    let tmp35 = new AuditLogChange(AVAILABLE_TAG_EDIT, tmp31, convertForumTag(tmp41));
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
    tmp2 = null != arg2 && null != tmp;
  }
  if (null != newValue.oldValue) {
    const tmp4 = arg1(newValue.oldValue);
    let tmp6 = tmp4;
    if (tmp5) {
      tmp6 = arg2(tmp4);
    }
    oldValue = tmp6;
    tmp5 = null != arg2 && null != tmp4;
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
  let closure_0 = arg1;
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
    tmp7 = null != deletedTargets.deletedTargets[targetId.targetType] && null != deletedTargets.deletedTargets[targetId.targetType][targetId];
  }
  let tmp8 = tmp4;
  if (null == tmp4) {
    tmp8 = tmp4;
    if (null != targetId.changes) {
      const changes = targetId.changes;
      const found = changes.find((key) => key.key === closure_0);
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
  let closure_0 = VOtRSO;
  let closure_1 = L5lDFJ;
  return (oldValue) => null == oldValue.oldValue ? closure_0 : closure_1;
}
function getNullableNewValueString(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (newValue) => null == newValue.newValue ? closure_0 : closure_1;
}
function getNullableNewOrOldValueString(IIanaY, _2NPsYu, _8crtns) {
  let closure_0 = IIanaY;
  let closure_1 = _2NPsYu;
  let closure_2 = _8crtns;
  let closure_3 = arg3;
  return (newValue) => {
    if (null != newValue.newValue) {
      if (null != newValue.oldValue) {
        let tmp = closure_0;
      }
      return tmp;
    }
    if (null != newValue.newValue) {
      tmp = closure_1;
    } else {
      tmp = null != newValue.oldValue ? closure_2 : closure_3;
    }
  };
}
function getNewValueStringByBoolean(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (newValue) => newValue.newValue ? closure_0 : closure_1;
}
function getNullableNewValueStringByKey(arg0) {
  let closure_0 = arg0;
  return (arg0) => table[arg0.newValue];
}
function getNewValueStringByKeyOrDefault(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => {
    let tmp = table[arg0.newValue];
    if (null == tmp) {
      tmp = closure_1;
    }
    return tmp;
  };
}
({ AuditLogActions: closure_15, AuditLogChangeKeys } = ME);
const AuditLogTargetTypes = ME.AuditLogTargetTypes;
({ MFALevels: closure_18, VerificationLevels: closure_19, UserNotificationSettings: closure_20, GuildExplicitContentFilterTypes: closure_21, ChannelTypes: closure_22, Permissions: closure_23, NOOP_NULL: closure_24, VideoQualityMode: closure_25, ApplicationCommandPermissionTypes: closure_26, AuditLogSubtargetTypes: closure_27, SystemChannelFlags: closure_28, AuditLogActionTypes: closure_29 } = ME);
({ GuildScheduledEventEntityTypes: closure_32, GuildScheduledEventStatus: closure_33, GuildScheduledEventPrivacyLevel: closure_34 } = GUILD_EVENT_MAX_NAME_LENGTH);
importDefaultResult = new importDefaultResult("AuditLogUtils");
let items = [require("sleep").TimeUnits.DAYS, require("sleep").TimeUnits.HOURS, require("sleep").TimeUnits.MINUTES, require("sleep").TimeUnits.SECONDS];
let closure_37 = { [AuditLogTargetTypes.CHANNEL]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.CHANNEL_OVERWRITE]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.PERMISSION_OVERWRITES]: true }, [AuditLogTargetTypes.INVITE]: { [AuditLogChangeKeys.INVITER_ID]: true, [AuditLogChangeKeys.USES]: true }, [AuditLogTargetTypes.WEBHOOK]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.APPLICATION_ID]: true }, [AuditLogTargetTypes.INTEGRATION]: { [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.NAME]: true }, [AuditLogTargetTypes.THREAD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true }, [AuditLogTargetTypes.STICKER]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.TYPE]: true, [AuditLogChangeKeys.ASSET]: true, [AuditLogChangeKeys.FORMAT_TYPE]: true, [AuditLogChangeKeys.AVAILABLE]: true, [AuditLogChangeKeys.GUILD_ID]: true }, [AuditLogTargetTypes.GUILD_HOME]: { [AuditLogChangeKeys.ENTITY_TYPE]: true }, [AuditLogTargetTypes.GUILD_ONBOARDING]: { [AuditLogChangeKeys.PROMPTS]: true }, [AuditLogTargetTypes.GUILD_SOUNDBOARD]: { [AuditLogChangeKeys.ID]: true, [AuditLogChangeKeys.SOUND_ID]: true } };
class ACTION_FILTER_ITEMS {
  constructor() {
    obj = { value: AuditLogActions.ALL };
    intl = require("getSystemLocale").intl;
    obj.label = intl.string(require("getSystemLocale").t.QxEVcv);
    intl2 = require("getSystemLocale").intl;
    obj.valueLabel = intl2.string(require("getSystemLocale").t.an9Ry3);
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = obj;
    obj = { value: AuditLogActions.GUILD_UPDATE };
    intl3 = require("getSystemLocale").intl;
    obj.label = intl3.string(require("getSystemLocale").t["5INZa3"]);
    items[1] = obj;
    obj1 = { value: AuditLogActions.CHANNEL_CREATE };
    intl4 = require("getSystemLocale").intl;
    obj1.label = intl4.string(require("getSystemLocale").t["2uh4vJ"]);
    items[2] = obj1;
    obj2 = { value: AuditLogActions.CHANNEL_UPDATE };
    intl5 = require("getSystemLocale").intl;
    obj2.label = intl5.string(require("getSystemLocale").t.mGsBLV);
    items[3] = obj2;
    obj3 = { value: AuditLogActions.CHANNEL_DELETE };
    intl6 = require("getSystemLocale").intl;
    obj3.label = intl6.string(require("getSystemLocale").t.hCHzAr);
    items[4] = obj3;
    obj4 = { value: AuditLogActions.CHANNEL_OVERWRITE_CREATE };
    intl7 = require("getSystemLocale").intl;
    obj4.label = intl7.string(require("getSystemLocale").t["8TnAMP"]);
    items[5] = obj4;
    obj5 = { value: AuditLogActions.CHANNEL_OVERWRITE_UPDATE };
    intl8 = require("getSystemLocale").intl;
    obj5.label = intl8.string(require("getSystemLocale").t.Jqx0Bi);
    items[6] = obj5;
    obj6 = { value: AuditLogActions.CHANNEL_OVERWRITE_DELETE };
    intl9 = require("getSystemLocale").intl;
    obj6.label = intl9.string(require("getSystemLocale").t.gBXOr4);
    items[7] = obj6;
    obj7 = { value: AuditLogActions.MEMBER_KICK };
    intl10 = require("getSystemLocale").intl;
    obj7.label = intl10.string(require("getSystemLocale").t["Q1/hN8"]);
    items[8] = obj7;
    obj8 = { value: AuditLogActions.MEMBER_PRUNE };
    intl11 = require("getSystemLocale").intl;
    obj8.label = intl11.string(require("getSystemLocale").t.tOTTja);
    items[9] = obj8;
    obj9 = { value: AuditLogActions.MEMBER_BAN_ADD };
    intl12 = require("getSystemLocale").intl;
    obj9.label = intl12.string(require("getSystemLocale").t["NfPn+e"]);
    items[10] = obj9;
    obj10 = { value: AuditLogActions.MEMBER_BAN_REMOVE };
    intl13 = require("getSystemLocale").intl;
    obj10.label = intl13.string(require("getSystemLocale").t.XCsGfI);
    items[11] = obj10;
    obj11 = { value: AuditLogActions.MEMBER_UPDATE };
    intl14 = require("getSystemLocale").intl;
    obj11.label = intl14.string(require("getSystemLocale").t["F/jmNJ"]);
    items[12] = obj11;
    obj12 = { value: AuditLogActions.MEMBER_ROLE_UPDATE };
    intl15 = require("getSystemLocale").intl;
    obj12.label = intl15.string(require("getSystemLocale").t.zAveSI);
    items[13] = obj12;
    obj13 = { value: AuditLogActions.MEMBER_MOVE };
    intl16 = require("getSystemLocale").intl;
    obj13.label = intl16.string(require("getSystemLocale").t.QshteR);
    items[14] = obj13;
    obj14 = { value: AuditLogActions.MEMBER_DISCONNECT };
    intl17 = require("getSystemLocale").intl;
    obj14.label = intl17.string(require("getSystemLocale").t.Z45os7);
    items[15] = obj14;
    obj15 = { value: AuditLogActions.BOT_ADD };
    intl18 = require("getSystemLocale").intl;
    obj15.label = intl18.string(require("getSystemLocale").t.vuH24Z);
    items[16] = obj15;
    obj16 = { value: AuditLogActions.THREAD_CREATE };
    intl19 = require("getSystemLocale").intl;
    obj16.label = intl19.string(require("getSystemLocale").t["+zl0DG"]);
    items[17] = obj16;
    obj17 = { value: AuditLogActions.THREAD_UPDATE };
    intl20 = require("getSystemLocale").intl;
    obj17.label = intl20.string(require("getSystemLocale").t.rbIry3);
    items[18] = obj17;
    obj18 = { value: AuditLogActions.THREAD_DELETE };
    intl21 = require("getSystemLocale").intl;
    obj18.label = intl21.string(require("getSystemLocale").t.hFjNEA);
    items[19] = obj18;
    obj19 = { value: AuditLogActions.ROLE_CREATE };
    intl22 = require("getSystemLocale").intl;
    obj19.label = intl22.string(require("getSystemLocale").t.AbxKtv);
    items[20] = obj19;
    obj20 = { value: AuditLogActions.ROLE_UPDATE };
    intl23 = require("getSystemLocale").intl;
    obj20.label = intl23.string(require("getSystemLocale").t.t3Z6sU);
    items[21] = obj20;
    obj21 = { value: AuditLogActions.ROLE_DELETE };
    intl24 = require("getSystemLocale").intl;
    obj21.label = intl24.string(require("getSystemLocale").t.YsFpa4);
    items[22] = obj21;
    obj22 = { value: AuditLogActions.ONBOARDING_PROMPT_CREATE };
    intl25 = require("getSystemLocale").intl;
    obj22.label = intl25.string(require("getSystemLocale").t.ZV9tqc);
    items[23] = obj22;
    obj23 = { value: AuditLogActions.ONBOARDING_PROMPT_UPDATE };
    intl26 = require("getSystemLocale").intl;
    obj23.label = intl26.string(require("getSystemLocale").t.PcOdvX);
    items[24] = obj23;
    obj24 = { value: AuditLogActions.ONBOARDING_PROMPT_DELETE };
    intl27 = require("getSystemLocale").intl;
    obj24.label = intl27.string(require("getSystemLocale").t["+r33Na"]);
    items[25] = obj24;
    obj25 = { value: AuditLogActions.ONBOARDING_CREATE };
    intl28 = require("getSystemLocale").intl;
    obj25.label = intl28.string(require("getSystemLocale").t.uDADde);
    items[26] = obj25;
    obj26 = { value: AuditLogActions.ONBOARDING_UPDATE };
    intl29 = require("getSystemLocale").intl;
    obj26.label = intl29.string(require("getSystemLocale").t.J1H1wg);
    items[27] = obj26;
    obj27 = { value: AuditLogActions.HOME_SETTINGS_CREATE };
    intl30 = require("getSystemLocale").intl;
    obj27.label = intl30.string(require("getSystemLocale").t.Di4cvI);
    items[28] = obj27;
    obj28 = { value: AuditLogActions.HOME_SETTINGS_UPDATE };
    intl31 = require("getSystemLocale").intl;
    obj28.label = intl31.string(require("getSystemLocale").t.tzyrJH);
    items[29] = obj28;
    obj29 = { value: AuditLogActions.INVITE_CREATE };
    intl32 = require("getSystemLocale").intl;
    obj29.label = intl32.string(require("getSystemLocale").t["0BNJdX"]);
    items[30] = obj29;
    obj30 = { value: AuditLogActions.INVITE_UPDATE };
    intl33 = require("getSystemLocale").intl;
    obj30.label = intl33.string(require("getSystemLocale").t["o++obV"]);
    items[31] = obj30;
    obj31 = { value: AuditLogActions.INVITE_DELETE };
    intl34 = require("getSystemLocale").intl;
    obj31.label = intl34.string(require("getSystemLocale").t.iP40Az);
    items[32] = obj31;
    obj32 = { value: AuditLogActions.WEBHOOK_CREATE };
    intl35 = require("getSystemLocale").intl;
    obj32.label = intl35.string(require("getSystemLocale").t["tBF4+S"]);
    items[33] = obj32;
    obj33 = { value: AuditLogActions.WEBHOOK_UPDATE };
    intl36 = require("getSystemLocale").intl;
    obj33.label = intl36.string(require("getSystemLocale").t.eV3McO);
    items[34] = obj33;
    obj34 = { value: AuditLogActions.WEBHOOK_DELETE };
    intl37 = require("getSystemLocale").intl;
    obj34.label = intl37.string(require("getSystemLocale").t.AAL3K1);
    items[35] = obj34;
    obj35 = { value: AuditLogActions.EMOJI_CREATE };
    intl38 = require("getSystemLocale").intl;
    obj35.label = intl38.string(require("getSystemLocale").t.RuWm0V);
    items[36] = obj35;
    obj36 = { value: AuditLogActions.EMOJI_UPDATE };
    intl39 = require("getSystemLocale").intl;
    obj36.label = intl39.string(require("getSystemLocale").t.WzdUY7);
    items[37] = obj36;
    obj37 = { value: AuditLogActions.EMOJI_DELETE };
    intl40 = require("getSystemLocale").intl;
    obj37.label = intl40.string(require("getSystemLocale").t.c3dK2L);
    items[38] = obj37;
    obj38 = { value: AuditLogActions.MESSAGE_DELETE };
    intl41 = require("getSystemLocale").intl;
    obj38.label = intl41.string(require("getSystemLocale").t.daTfXh);
    items[39] = obj38;
    obj39 = { value: AuditLogActions.MESSAGE_BULK_DELETE };
    intl42 = require("getSystemLocale").intl;
    obj39.label = intl42.string(require("getSystemLocale").t.nrBxeh);
    items[40] = obj39;
    obj40 = { value: AuditLogActions.MESSAGE_PIN };
    intl43 = require("getSystemLocale").intl;
    obj40.label = intl43.string(require("getSystemLocale").t.MUldyN);
    items[41] = obj40;
    obj41 = { value: AuditLogActions.MESSAGE_UNPIN };
    intl44 = require("getSystemLocale").intl;
    obj41.label = intl44.string(require("getSystemLocale").t.n4zKhA);
    items[42] = obj41;
    obj42 = { value: AuditLogActions.INTEGRATION_CREATE };
    intl45 = require("getSystemLocale").intl;
    obj42.label = intl45.string(require("getSystemLocale").t.deNm8x);
    items[43] = obj42;
    obj43 = { value: AuditLogActions.INTEGRATION_UPDATE };
    intl46 = require("getSystemLocale").intl;
    obj43.label = intl46.string(require("getSystemLocale").t.HT7Sfg);
    items[44] = obj43;
    obj44 = { value: AuditLogActions.INTEGRATION_DELETE };
    intl47 = require("getSystemLocale").intl;
    obj44.label = intl47.string(require("getSystemLocale").t["+kJ09q"]);
    items[45] = obj44;
    obj45 = { value: AuditLogActions.STICKER_CREATE };
    intl48 = require("getSystemLocale").intl;
    obj45.label = intl48.string(require("getSystemLocale").t["3DzNjU"]);
    items[46] = obj45;
    obj46 = { value: AuditLogActions.STICKER_UPDATE };
    intl49 = require("getSystemLocale").intl;
    obj46.label = intl49.string(require("getSystemLocale").t.tdhW5b);
    items[47] = obj46;
    obj47 = { value: AuditLogActions.STICKER_DELETE };
    intl50 = require("getSystemLocale").intl;
    obj47.label = intl50.string(require("getSystemLocale").t["+ZhGOk"]);
    items[48] = obj47;
    obj48 = { value: AuditLogActions.STAGE_INSTANCE_CREATE };
    intl51 = require("getSystemLocale").intl;
    obj48.label = intl51.string(require("getSystemLocale").t.sPbjA6);
    items[49] = obj48;
    obj49 = { value: AuditLogActions.STAGE_INSTANCE_UPDATE };
    intl52 = require("getSystemLocale").intl;
    obj49.label = intl52.string(require("getSystemLocale").t.cW9LfJ);
    items[50] = obj49;
    obj50 = { value: AuditLogActions.STAGE_INSTANCE_DELETE };
    intl53 = require("getSystemLocale").intl;
    obj50.label = intl53.string(require("getSystemLocale").t["U1r+yD"]);
    items[51] = obj50;
    obj51 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE };
    intl54 = require("getSystemLocale").intl;
    obj51.label = intl54.string(require("getSystemLocale").t.H81Zyy);
    items[52] = obj51;
    obj52 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE };
    intl55 = require("getSystemLocale").intl;
    obj52.label = intl55.string(require("getSystemLocale").t["FM69l+"]);
    items[53] = obj52;
    obj53 = { value: AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE };
    intl56 = require("getSystemLocale").intl;
    obj53.label = intl56.string(require("getSystemLocale").t.Rq28Bh);
    items[54] = obj53;
    obj54 = { value: AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE };
    intl57 = require("getSystemLocale").intl;
    obj54.label = intl57.string(require("getSystemLocale").t.iPdFOt);
    items[55] = obj54;
    obj55 = { value: AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE };
    intl58 = require("getSystemLocale").intl;
    obj55.label = intl58.string(require("getSystemLocale").t.gNq5z6);
    items[56] = obj55;
    obj56 = { value: AuditLogActions.AUTO_MODERATION_RULE_CREATE };
    intl59 = require("getSystemLocale").intl;
    obj56.label = intl59.string(require("getSystemLocale").t.f72Zqb);
    items[57] = obj56;
    obj57 = { value: AuditLogActions.AUTO_MODERATION_RULE_UPDATE };
    intl60 = require("getSystemLocale").intl;
    obj57.label = intl60.string(require("getSystemLocale").t.XeqIiv);
    items[58] = obj57;
    obj58 = { value: AuditLogActions.AUTO_MODERATION_RULE_DELETE };
    intl61 = require("getSystemLocale").intl;
    obj58.label = intl61.string(require("getSystemLocale").t.syAApU);
    items[59] = obj58;
    obj59 = { value: AuditLogActions.GUILD_HOME_FEATURE_ITEM };
    intl62 = require("getSystemLocale").intl;
    obj59.label = intl62.string(require("getSystemLocale").t.lhG5KN);
    items[60] = obj59;
    obj60 = { value: AuditLogActions.GUILD_HOME_REMOVE_ITEM };
    intl63 = require("getSystemLocale").intl;
    obj60.label = intl63.string(require("getSystemLocale").t.lRPRwS);
    items[61] = obj60;
    obj61 = { value: AuditLogActions.SOUNDBOARD_SOUND_CREATE };
    intl64 = require("getSystemLocale").intl;
    obj61.label = intl64.string(require("getSystemLocale").t.yoRi5r);
    items[62] = obj61;
    obj62 = { value: AuditLogActions.SOUNDBOARD_SOUND_UPDATE };
    intl65 = require("getSystemLocale").intl;
    obj62.label = intl65.string(require("getSystemLocale").t.uKlG0Z);
    items[63] = obj62;
    obj63 = { value: AuditLogActions.SOUNDBOARD_SOUND_DELETE };
    intl66 = require("getSystemLocale").intl;
    obj63.label = intl66.string(require("getSystemLocale").t.gq0iCT);
    items[64] = obj63;
    obj64 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_CREATE };
    intl67 = require("getSystemLocale").intl;
    obj64.label = intl67.string(require("getSystemLocale").t.rGr0YM);
    items[65] = obj64;
    obj65 = { value: AuditLogActions.VOICE_CHANNEL_STATUS_DELETE };
    intl68 = require("getSystemLocale").intl;
    obj65.label = intl68.string(require("getSystemLocale").t.V9PEQ4);
    items[66] = obj65;
    return items;
  }
}
let obj = {
  [arg1(4206).TimeUnits.SECONDS]: (seconds) => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.geSp4K, { seconds });
  },
  [arg1(4206).TimeUnits.MINUTES]: (minutes) => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iXLF9W, { minutes });
  },
  [arg1(4206).TimeUnits.HOURS]: (hours) => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.xCjYxK, { hours });
  },
  [arg1(4206).TimeUnits.DAYS]: (days) => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["k2UNz+"], { days });
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/audit_log/AuditLogUtils.tsx");

export const getChangeStrings = function getChangeStrings(targetType) {
  targetType = targetType.targetType;
  if (AuditLogTargetTypes.GUILD === targetType) {
    return (function GuildChangeStrings() {
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
      let obj = { [outer1_16.NAME]: () => outer2_0(outer2_3[17]).t.CkDiNH };
      obj[outer1_16.DESCRIPTION] = outer1_54(outer1_0(outer1_3[17]).t.RP3Ey3, outer1_0(outer1_3[17]).t.QAVj1Y);
      obj[outer1_16.ICON_HASH] = () => outer2_0(outer2_3[17]).t.iLZ8Q9;
      obj[outer1_16.SPLASH_HASH] = () => outer2_0(outer2_3[17]).t["4VV6dn"];
      obj[outer1_16.DISCOVERY_SPLASH_HASH] = () => outer2_0(outer2_3[17]).t["2pds6p"];
      obj[outer1_16.BANNER_HASH] = outer1_54(outer1_0(outer1_3[17]).t.Cxq4zO, outer1_0(outer1_3[17]).t["H7eE/9"]);
      obj[outer1_16.OWNER_ID] = () => outer2_0(outer2_3[17]).t["8ltsLT"];
      obj[outer1_16.REGION] = () => outer2_0(outer2_3[17]).t.X9r5Kf;
      obj[outer1_16.PREFERRED_LOCALE] = () => outer2_0(outer2_3[17]).t.UnXuDS;
      obj[outer1_16.AFK_CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t.ClBuA4, outer1_0(outer1_3[17]).t["ms+xtL"]);
      obj[outer1_16.AFK_TIMEOUT] = () => outer2_0(outer2_3[17]).t.q21fHa;
      obj[outer1_16.SYSTEM_CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t.H1VXaa, outer1_0(outer1_3[17]).t.XhtmxJ);
      obj[outer1_16.RULES_CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t.OI6MG2, outer1_0(outer1_3[17]).t.lik3tI);
      obj[outer1_16.PUBLIC_UPDATES_CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t.YxBKrY, outer1_0(outer1_3[17]).t.Ehsnij);
      obj = { [NONE]: outer1_0(outer1_3[17]).t.voaCCQ, [ELEVATED]: outer1_0(outer1_3[17]).t.pRNVwz };
      ({ NONE, ELEVATED } = outer1_18);
      obj[outer1_16.MFA_LEVEL] = outer1_57(obj);
      obj[outer1_16.WIDGET_ENABLED] = outer1_56(outer1_0(outer1_3[17]).t.ADIty8, outer1_0(outer1_3[17]).t.nf58VY);
      obj[outer1_16.WIDGET_CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t["6SBsDc"], outer1_0(outer1_3[17]).t.deQ5wO);
      obj = { [NONE2]: outer1_0(outer1_3[17]).t.W27rsc, [LOW]: outer1_0(outer1_3[17]).t["V8P+Pw"], [MEDIUM]: outer1_0(outer1_3[17]).t.ERQFau, [HIGH]: outer1_0(outer1_3[17]).t["83fN0j"], [VERY_HIGH]: outer1_0(outer1_3[17]).t.PnkQJE };
      ({ NONE: NONE2, LOW, MEDIUM, HIGH, VERY_HIGH } = outer1_19);
      obj[outer1_16.VERIFICATION_LEVEL] = outer1_57(obj);
      ({ ALL_MESSAGES, ONLY_MENTIONS } = outer1_20);
      obj[outer1_16.DEFAULT_MESSAGE_NOTIFICATIONS] = outer1_57({ [ALL_MESSAGES]: outer1_0(outer1_3[17]).t.LDi76A, [ONLY_MENTIONS]: outer1_0(outer1_3[17]).t["6K83ba"] });
      obj[outer1_16.VANITY_URL_CODE] = outer1_54(outer1_0(outer1_3[17]).t.Zplsov, outer1_0(outer1_3[17]).t.u6cArh);
      const obj1 = { [ALL_MESSAGES]: outer1_0(outer1_3[17]).t.LDi76A, [ONLY_MENTIONS]: outer1_0(outer1_3[17]).t["6K83ba"] };
      ({ DISABLED, MEMBERS_WITHOUT_ROLES, ALL_MEMBERS } = outer1_21);
      obj[outer1_16.EXPLICIT_CONTENT_FILTER] = outer1_57({ [DISABLED]: outer1_0(outer1_3[17]).t.fmOeL3, [MEMBERS_WITHOUT_ROLES]: outer1_0(outer1_3[17]).t["4FghYw"], [ALL_MEMBERS]: outer1_0(outer1_3[17]).t.olyrSm });
      obj[outer1_16.PREMIUM_PROGRESS_BAR_ENABLED] = outer1_56(outer1_0(outer1_3[17]).t.rBT0sn, outer1_0(outer1_3[17]).t["gc+te5"]);
      obj[outer1_16.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => outer2_0(outer2_3[17]).t.YbouFH;
      obj[outer1_16.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS] = () => outer2_0(outer2_3[17]).t.g3DMjB;
      obj[outer1_16.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS] = () => outer2_0(outer2_3[17]).t["+fQAel"];
      obj[outer1_16.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS] = () => outer2_0(outer2_3[17]).t.E1fc4v;
      obj[outer1_16.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES] = () => outer2_0(outer2_3[17]).t.XbwtSA;
      const merged = Object.assign(outer1_42());
      return obj;
    })();
  } else {
    if (AuditLogTargetTypes.CHANNEL !== targetType) {
      if (AuditLogTargetTypes.CHANNEL_OVERWRITE !== targetType) {
        if (AuditLogTargetTypes.USER === targetType) {
          return (function UserChangeStrings() {
            const obj = {};
            obj[outer1_16.NICK] = outer1_55(outer1_0(outer1_3[17]).t.qXDsHv, outer1_0(outer1_3[17]).t["m+qury"], outer1_0(outer1_3[17]).t.DvLvjF);
            obj[outer1_16.DEAF] = outer1_56(outer1_0(outer1_3[17]).t.mArLlW, outer1_0(outer1_3[17]).t.ddvVYG);
            obj[outer1_16.MUTE] = outer1_56(outer1_0(outer1_3[17]).t["bxs/lS"], outer1_0(outer1_3[17]).t.FjecQM);
            obj[outer1_16.ROLES_REMOVE] = () => outer2_0(outer2_3[17]).t["+2SDWV"];
            obj[outer1_16.ROLES_ADD] = () => outer2_0(outer2_3[17]).t["B3/3IJ"];
            obj[outer1_16.PRUNE_DELETE_DAYS] = () => outer2_0(outer2_3[17]).t["+Cvc+D"];
            obj[outer1_16.COMMUNICATION_DISABLED_UNTIL] = outer1_55(outer1_0(outer1_3[17]).t.LXTQr5, outer1_0(outer1_3[17]).t.LXTQr5, outer1_0(outer1_3[17]).t.ULSdnE);
            obj[outer1_16.BYPASSES_VERIFICATION] = outer1_56(outer1_0(outer1_3[17]).t.NBPBui, outer1_0(outer1_3[17]).t.zATost);
            obj[outer1_16.AUTO_MODERATION_TRIGGERED_RULE_NAME] = () => outer2_0(outer2_3[17]).t.YbouFH;
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.ROLE === targetType) {
          return (function RoleChangeStrings() {
            let obj = {};
            obj[outer1_16.NAME] = outer1_53(outer1_0(outer1_3[17]).t.QBmlaD, outer1_0(outer1_3[17]).t["Lfs4r+"]);
            obj[outer1_16.DESCRIPTION] = outer1_53(outer1_0(outer1_3[17]).t.XeYKWJ, outer1_0(outer1_3[17]).t.PSfeIj);
            obj[outer1_16.PERMISSIONS_GRANTED] = () => outer2_0(outer2_3[17]).t["9i/DvE"];
            obj[outer1_16.PERMISSIONS_DENIED] = () => outer2_0(outer2_3[17]).t.pa1ZVh;
            obj = { "#000000": outer1_0(outer1_3[17]).t.TK6E1H };
            obj[outer1_16.COLOR] = outer1_58(obj, outer1_0(outer1_3[17]).t["2FQFiw"]);
            obj[outer1_16.COLORS] = (newValue) => {
              if (null == newValue.newValue.secondary_color) {
                WnSwL_ = outer2_0(outer2_3[17]).t.U44ttm;
              } else {
                WnSwL_ = outer2_0(outer2_3[17]).t["WnSwL/"];
              }
              return WnSwL_;
            };
            obj[outer1_16.HOIST] = outer1_56(outer1_0(outer1_3[17]).t.gWfe24, outer1_0(outer1_3[17]).t["+tb8kN"]);
            obj[outer1_16.MENTIONABLE] = outer1_56(outer1_0(outer1_3[17]).t.LL8VFF, outer1_0(outer1_3[17]).t.Z7xzmC);
            obj[outer1_16.ICON_HASH] = () => outer2_0(outer2_3[17]).t["iEE79/"];
            obj[outer1_16.UNICODE_EMOJI] = () => outer2_0(outer2_3[17]).t.KiLMM0;
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.ONBOARDING_PROMPT === targetType) {
          return (function OnboardingPromptChangeStrings() {
            const obj = {};
            const merged = Object.assign(outer1_42());
            obj[outer1_16.TITLE] = outer1_53(outer1_0(outer1_3[17]).t["sNpuy/"], outer1_0(outer1_3[17]).t["3Ukc/g"]);
            obj[outer1_16.DESCRIPTION] = outer1_53(outer1_0(outer1_3[17]).t.PP1q0x, outer1_0(outer1_3[17]).t.z7pYLg);
            obj[outer1_16.OPTIONS] = () => outer2_0(outer2_3[17]).t["3G5C9+"];
            obj[outer1_16.SINGLE_SELECT] = outer1_56(outer1_0(outer1_3[17]).t.v4WnR3, outer1_0(outer1_3[17]).t["6Qg3uC"]);
            obj[outer1_16.REQUIRED] = outer1_56(outer1_0(outer1_3[17]).t["0MPAM6"], outer1_0(outer1_3[17]).t.pwsXir);
            return obj;
          })();
        } else if (AuditLogTargetTypes.GUILD_ONBOARDING === targetType) {
          return (function OnboardingChangeStrings() {
            const obj = {};
            const merged = Object.assign(outer1_42());
            obj[outer1_16.DEFAULT_CHANNEL_IDS] = () => outer2_0(outer2_3[17]).t["8M+D2s"];
            obj[outer1_16.ENABLE_DEFAULT_CHANNELS] = outer1_56(outer1_0(outer1_3[17]).t["EYd/ls"], outer1_0(outer1_3[17]).t["36OZeQ"]);
            obj[outer1_16.ENABLE_ONBOARDING_PROMPTS] = outer1_56(outer1_0(outer1_3[17]).t.V3u8PV, outer1_0(outer1_3[17]).t["r66lc/"]);
            obj[outer1_16.ENABLED] = outer1_56(outer1_0(outer1_3[17]).t.SODVIs, outer1_0(outer1_3[17]).t.u8HY5U);
            return obj;
          })();
        } else if (AuditLogTargetTypes.HOME_SETTINGS === targetType) {
          return (function HomeSettingsChangeStrings() {
            const obj = {};
            const merged = Object.assign(outer1_42());
            obj[outer1_16.WELCOME_MESSAGE] = () => outer2_0(outer2_3[17]).t.dKQ1xd;
            obj[outer1_16.NEW_MEMBER_ACTIONS] = () => outer2_0(outer2_3[17]).t.jDUIno;
            obj[outer1_16.RESOURCE_CHANNELS] = () => outer2_0(outer2_3[17]).t.SIX0mr;
            return obj;
          })();
        } else if (AuditLogTargetTypes.INVITE === targetType) {
          return (function InviteChangeStrings() {
            let obj = { [outer1_16.CODE]: () => outer2_0(outer2_3[17]).t.rrRHgb, [outer1_16.CHANNEL_ID]: () => outer2_0(outer2_3[17]).t.Q1vd5q };
            obj = { [0]: outer1_0(outer1_3[17]).t.Yx8LNm };
            obj[outer1_16.MAX_USES] = outer1_58(obj, outer1_0(outer1_3[17]).t["3ygnwU"]);
            obj = {};
            const intl = outer1_0(outer1_3[17]).intl;
            obj[intl.string(outer1_0(outer1_3[17]).t.PqEzn8)] = outer1_0(outer1_3[17]).t.uWrLvw;
            obj[outer1_16.MAX_AGE] = outer1_58(obj, outer1_0(outer1_3[17]).t["Q+5kcO"]);
            obj[outer1_16.TEMPORARY] = outer1_56(outer1_0(outer1_3[17]).t.MWp6H7, outer1_0(outer1_3[17]).t.omiqTH);
            const obj1 = {};
            obj1[outer1_0(outer1_3[18]).GuildInviteFlags.IS_GUEST_INVITE] = outer1_0(outer1_3[17]).t.XYZMbL;
            obj[outer1_16.FLAGS] = outer1_57(obj1);
            obj[outer1_16.ROLE_IDS] = () => outer2_0(outer2_3[17]).t.gb1Owj;
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.WEBHOOK === targetType) {
          return (function WebhookChangeStrings() {
            const obj = {};
            obj[outer1_16.CHANNEL_ID] = outer1_53(outer1_0(outer1_3[17]).t.jhPprR, outer1_0(outer1_3[17]).t.ar4qYO);
            obj[outer1_16.NAME] = outer1_53(outer1_0(outer1_3[17]).t.ZVGrzU, outer1_0(outer1_3[17]).t.tywdZR);
            obj[outer1_16.AVATAR_HASH] = () => outer2_0(outer2_3[17]).t.KB52Uj;
            obj[outer1_16.REASON] = () => outer2_0(outer2_3[17]).t["2IW3C5"];
            return obj;
          })();
        } else if (AuditLogTargetTypes.EMOJI === targetType) {
          let obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(require(1212) /* getSystemLocale */.t.ahU1o5, require(1212) /* getSystemLocale */.t["wxs+vZ"]);
          let merged = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.STICKER === targetType) {
          obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(require(1212) /* getSystemLocale */.t.cdl0Yo, require(1212) /* getSystemLocale */.t.o3W2ly);
          obj[AuditLogChangeKeys.TAGS] = getNullableOldValueString(require(1212) /* getSystemLocale */.t["zwL+S2"], require(1212) /* getSystemLocale */.t["VYfKA+"]);
          obj[AuditLogChangeKeys.DESCRIPTION] = getNullableOldValueString(require(1212) /* getSystemLocale */.t.XeYKWJ, require(1212) /* getSystemLocale */.t.PSfeIj);
          const merged1 = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.INTEGRATION === targetType) {
          return (function IntegrationChangeStrings() {
            let obj = {};
            obj[outer1_16.ENABLE_EMOTICONS] = outer1_56(outer1_0(outer1_3[17]).t.FI0m5x, outer1_0(outer1_3[17]).t.olpKC6);
            obj = { [0]: outer1_0(outer1_3[17]).t["1Bb1+u"], [1]: outer1_0(outer1_3[17]).t.vjlW6m };
            obj[outer1_16.EXPIRE_BEHAVIOR] = outer1_57(obj);
            obj[outer1_16.EXPIRE_GRACE_PERIOD] = () => outer2_0(outer2_3[17]).t.iovXMa;
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.STAGE_INSTANCE === targetType) {
          let obj1 = {};
          obj1[AuditLogChangeKeys.TOPIC] = getNullableOldValueString(require(1212) /* getSystemLocale */.t["m+veAn"], require(1212) /* getSystemLocale */.t.esQcxn);
          const obj2 = {};
          obj2[constants5.GUILD_ONLY] = require(1212) /* getSystemLocale */.t["EC+CDt"];
          obj2[constants5.PUBLIC] = require(1212) /* getSystemLocale */.t["pK/WG0"];
          obj1[AuditLogChangeKeys.PRIVACY_LEVEL] = getNullableNewValueStringByKey(obj2);
          const merged2 = Object.assign(CommonChangeStrings());
          return obj1;
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT === targetType) {
          return (function GuildScheduledEventChangeStrings() {
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
            let obj = { [outer1_16.NAME]: () => outer2_0(outer2_3[17]).t["21EXHW"], [outer1_16.DESCRIPTION]: () => outer2_0(outer2_3[17]).t.Vm1ofw };
            obj = { [GUILD_ONLY]: outer1_0(outer1_3[17]).t["EC+CDt"], [PUBLIC]: outer1_0(outer1_3[17]).t["pK/WG0"] };
            ({ GUILD_ONLY, PUBLIC } = outer1_34);
            obj[outer1_16.PRIVACY_LEVEL] = outer1_57(obj);
            obj = { [SCHEDULED]: outer1_0(outer1_3[17]).t.hXKDgq, [ACTIVE]: outer1_0(outer1_3[17]).t.lRX1nz, [COMPLETED]: outer1_0(outer1_3[17]).t["/eFIhq"], [CANCELED]: outer1_0(outer1_3[17]).t.NWIYhj };
            ({ SCHEDULED, ACTIVE, COMPLETED, CANCELED } = outer1_33);
            obj[outer1_16.STATUS] = outer1_57(obj);
            ({ NONE, STAGE_INSTANCE, VOICE, EXTERNAL } = outer1_32);
            obj[outer1_16.ENTITY_TYPE] = outer1_57({ [NONE]: outer1_0(outer1_3[17]).t["6sO3Ss"], [STAGE_INSTANCE]: outer1_0(outer1_3[17]).t["Wo+s1y"], [VOICE]: outer1_0(outer1_3[17]).t.XCVaIL, [EXTERNAL]: outer1_0(outer1_3[17]).t.IvhAj2 });
            obj[outer1_16.CHANNEL_ID] = outer1_54(outer1_0(outer1_3[17]).t.yJBIcX, outer1_0(outer1_3[17]).t["+PqSsi"]);
            obj[outer1_16.LOCATION] = outer1_54(outer1_0(outer1_3[17]).t.GaMBHy, outer1_0(outer1_3[17]).t.PsICk0);
            obj[outer1_16.IMAGE_HASH] = outer1_54(outer1_0(outer1_3[17]).t.S3vcRK, outer1_0(outer1_3[17]).t.KQu47I);
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION === targetType) {
          return (function GuildScheduledEventExceptionChangeStrings() {
            const obj = {};
            obj[outer1_16.SCHEDULED_START_TIME] = outer1_54(outer1_0(outer1_3[17]).t.zMIYVg, outer1_0(outer1_3[17]).t.fzF8Gd);
            obj[outer1_16.SCHEDULED_END_TIME] = outer1_54(outer1_0(outer1_3[17]).t.vONSQA, outer1_0(outer1_3[17]).t.IlIti3);
            obj[outer1_16.IS_CANCELED] = (oldValue) => {
              if (null != oldValue.oldValue) {
                if (!oldValue.oldValue) {
                  if (oldValue.newValue) {
                    return outer2_0(outer2_3[17]).t["7RkicW"];
                  }
                }
                if (oldValue.oldValue) {
                  if (!oldValue.newValue) {
                    return outer2_0(outer2_3[17]).t.dRNTWW;
                  }
                }
              }
            };
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.THREAD === targetType) {
          return (function ThreadChangeStrings() {
            const obj = {};
            obj[outer1_16.NAME] = outer1_53(outer1_0(outer1_3[17]).t.tUKRzX, outer1_0(outer1_3[17]).t.kPCHON);
            obj[outer1_16.ARCHIVED] = outer1_56(outer1_0(outer1_3[17]).t.jDi9FK, outer1_0(outer1_3[17]).t.F6dvbT);
            obj[outer1_16.LOCKED] = outer1_56(outer1_0(outer1_3[17]).t.JSy1QW, outer1_0(outer1_3[17]).t.C7Jgo8);
            obj[outer1_16.INVITABLE] = outer1_56(outer1_0(outer1_3[17]).t.dxNUs9, outer1_0(outer1_3[17]).t.biJvYG);
            obj[outer1_16.AUTO_ARCHIVE_DURATION] = outer1_53(outer1_0(outer1_3[17]).t.LuaG3y, outer1_0(outer1_3[17]).t["18d9qr"]);
            obj[outer1_16.RATE_LIMIT_PER_USER] = outer1_53(outer1_0(outer1_3[17]).t["7lirhF"], outer1_0(outer1_3[17]).t.j4CCJR);
            obj[outer1_16.FLAGS] = () => outer2_0(outer2_3[17]).t.sSAQtj;
            obj[outer1_16.AVAILABLE_TAG_ADD] = () => outer2_0(outer2_3[17]).t.H86QQU;
            obj[outer1_16.AVAILABLE_TAG_DELETE] = () => outer2_0(outer2_3[17]).t["8QOseg"];
            const merged = Object.assign(outer1_42());
            return obj;
          })();
        } else if (AuditLogTargetTypes.APPLICATION_COMMAND === targetType) {
          return (function CommandPermissionChangeStrings(changes) {
            const obj = {};
            const merged = Object.assign(outer1_42());
            if (null != changes) {
              const item = changes.forEach((newValue) => {
                if (newValue.newValue) {
                  if (newValue.newValue.permission) {
                    tmp2[key] = () => outer3_0(outer3_3[17]).t["JH+89C"];
                  } else {
                    tmp2[key] = () => outer3_0(outer3_3[17]).t.HUrFDu;
                  }
                } else {
                  obj[newValue.key] = () => outer3_0(outer3_3[17]).t.vynxnV;
                }
              });
            }
            return obj;
          })(targetType.changes);
        } else if (AuditLogTargetTypes.AUTO_MODERATION_RULE === targetType) {
          return (function AutoModerationRuleChangeStrings() {
            const merged = Object.assign(outer1_42());
            return {
              [outer1_16.NAME]: () => outer2_0(outer2_3[17]).t.XwxAJT,
              [outer1_16.AUTO_MODERATION_TRIGGER_TYPE]: () => outer2_0(outer2_3[17]).t.fx0pyl,
              [outer1_16.AUTO_MODERATION_EVENT_TYPE]: () => outer2_0(outer2_3[17]).t["46Y+L5"],
              [outer1_16.AUTO_MODERATION_ACTIONS]: () => outer2_0(outer2_3[17]).t["8efxfv"],
              [outer1_16.AUTO_MODERATION_ENABLED]: (newValue) => {
                let oldValue = newValue.newValue;
                if (null == oldValue) {
                  oldValue = newValue.oldValue;
                }
                if (true === oldValue) {
                  let Wrg9Jn = outer2_0(outer2_3[17]).t.fCmxC2;
                } else {
                  Wrg9Jn = outer2_0(outer2_3[17]).t.Wrg9Jn;
                }
                return Wrg9Jn;
              },
              [outer1_16.AUTO_MODERATION_EXEMPT_ROLES]: () => outer2_0(outer2_3[17]).t.TRb7Nx,
              [outer1_16.AUTO_MODERATION_EXEMPT_CHANNELS]: () => outer2_0(outer2_3[17]).t.mzitLE,
              [outer1_16.AUTO_MODERATION_TRIGGER_METADATA]: () => outer2_0(outer2_3[17]).t["h/lM65"],
              [outer1_16.AUTO_MODERATION_ADD_KEYWORDS]: () => outer2_0(outer2_3[17]).t["9V2yaC"],
              [outer1_16.AUTO_MODERATION_REMOVE_KEYWORDS]: () => outer2_0(outer2_3[17]).t["4Qe9ny"],
              [outer1_16.AUTO_MODERATION_ADD_REGEX_PATTERNS]: () => outer2_0(outer2_3[17]).t.GyZtxp,
              [outer1_16.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: () => outer2_0(outer2_3[17]).t.OQDadc,
              [outer1_16.AUTO_MODERATION_ADD_ALLOW_LIST]: () => outer2_0(outer2_3[17]).t["FvvR+K"],
              [outer1_16.AUTO_MODERATION_REMOVE_ALLOW_LIST]: () => outer2_0(outer2_3[17]).t.p5nSvy
            };
          })();
        } else if (AuditLogTargetTypes.GUILD_SOUNDBOARD === targetType) {
          obj = {};
          obj[AuditLogChangeKeys.NAME] = getNullableOldValueString(require(1212) /* getSystemLocale */.t.VOtRSO, require(1212) /* getSystemLocale */.t.OK7B8E);
          obj[AuditLogChangeKeys.VOLUME] = getNullableOldValueString(require(1212) /* getSystemLocale */.t.igrDB9, require(1212) /* getSystemLocale */.t.L5lDFJ);
          obj[AuditLogChangeKeys.EMOJI_NAME] = getNullableNewOrOldValueString(require(1212) /* getSystemLocale */.t.IIanaY, require(1212) /* getSystemLocale */.t["z4w4U/"], require(1212) /* getSystemLocale */.t.V8TfyU);
          obj[AuditLogChangeKeys.EMOJI_ID] = getNullableNewOrOldValueString(require(1212) /* getSystemLocale */.t.ainxMB, require(1212) /* getSystemLocale */.t["2NPsYu"], require(1212) /* getSystemLocale */.t["8crtns"]);
          const merged3 = Object.assign(CommonChangeStrings());
          return obj;
        } else if (AuditLogTargetTypes.VOICE_CHANNEL_STATUS === targetType) {
          return (function VoiceChannelStatusStrings() {
            const merged = Object.assign(outer1_42());
            return { [outer1_16.STATUS]: () => outer2_0(outer2_3[17]).t.HyCSnI };
          })();
        } else if (AuditLogTargetTypes.GUILD_MEMBER_VERIFICATION === targetType) {
          return (function MemberVerificationChangeStrings() {
            const merged = Object.assign(outer1_42());
            return {
              [outer1_16.VERIFICATION_ENABLED]: (newValue) => {
                if (true === newValue.newValue) {
                  let WYT6ka = outer2_0(outer2_3[17]).t.fnkzDY;
                } else {
                  WYT6ka = outer2_0(outer2_3[17]).t.WYT6ka;
                }
                return WYT6ka;
              },
              [outer1_16.MANUAL_APPROVAL_ENABLED]: (newValue) => {
                if (true === newValue.newValue) {
                  let WxyOtj = outer2_0(outer2_3[17]).t.jzSvVd;
                } else {
                  WxyOtj = outer2_0(outer2_3[17]).t.WxyOtj;
                }
                return WxyOtj;
              }
            };
          })();
        } else if (AuditLogTargetTypes.GUILD_PROFILE === targetType) {
          return (function GuildProfileChangeStrings() {
            const obj = { [outer1_16.DESCRIPTION]: () => outer2_0(outer2_3[17]).t.nsUZKY, [outer1_16.BRAND_COLOR_PRIMARY]: () => outer2_0(outer2_3[17]).t.qe9mgN, [outer1_16.CUSTOM_BANNER_HASH]: () => outer2_0(outer2_3[17]).t["04b5KC"], [outer1_16.TRAITS]: () => outer2_0(outer2_3[17]).t.dEy9WO, [outer1_16.GAME_APPLICATION_IDS]: () => outer2_0(outer2_3[17]).t["8BOT3x"], [outer1_16.VISIBILITY]: () => outer2_0(outer2_3[17]).t.bCl1Ep };
            obj[outer1_16.SERVER_TAG] = outer1_54(outer1_0(outer1_3[17]).t.ix1dnX, outer1_0(outer1_3[17]).t["4LKpKb"]);
            return obj;
          })();
        } else {
          return CommonChangeStrings();
        }
      }
    }
    return (function ChannelChangeStrings() {
      const obj = {};
      obj[outer1_16.NAME] = outer1_53(outer1_0(outer1_3[17]).t.f8Rh0U, outer1_0(outer1_3[17]).t.ebD4Qp);
      obj[outer1_16.POSITION] = outer1_53(outer1_0(outer1_3[17]).t.isS8te, outer1_0(outer1_3[17]).t.t5uBis);
      obj[outer1_16.TOPIC] = outer1_55(outer1_0(outer1_3[17]).t.esQcxn, outer1_0(outer1_3[17]).t["m+veAn"], outer1_0(outer1_3[17]).t["ws/1FA"]);
      obj[outer1_16.BITRATE] = outer1_53(outer1_0(outer1_3[17]).t.fw81ak, outer1_0(outer1_3[17]).t.MFNlgZ);
      obj[outer1_16.RTC_REGION_OVERRIDE] = outer1_55(outer1_0(outer1_3[17]).t["6kajxx"], outer1_0(outer1_3[17]).t.eGOlmU, outer1_0(outer1_3[17]).t["0JMZdz"]);
      obj[outer1_16.USER_LIMIT] = outer1_53(outer1_0(outer1_3[17]).t.wk5t7p, outer1_0(outer1_3[17]).t.XgjCEh);
      obj[outer1_16.RATE_LIMIT_PER_USER] = outer1_53(outer1_0(outer1_3[17]).t["7lirhF"], outer1_0(outer1_3[17]).t.j4CCJR);
      obj[outer1_16.PERMISSIONS_RESET] = () => outer2_0(outer2_3[17]).t["+vSBFY"];
      obj[outer1_16.PERMISSIONS_GRANTED] = () => outer2_0(outer2_3[17]).t.EKLJv8;
      obj[outer1_16.PERMISSIONS_DENIED] = () => outer2_0(outer2_3[17]).t.U3rO5X;
      obj[outer1_16.REASON] = () => outer2_0(outer2_3[17]).t["2IW3C5"];
      obj[outer1_16.NSFW] = outer1_56(outer1_0(outer1_3[17]).t.H8Ri2Y, outer1_0(outer1_3[17]).t.WW6cJw);
      obj[outer1_16.TYPE] = outer1_53(outer1_0(outer1_3[17]).t.Vn5zn2, outer1_0(outer1_3[17]).t.aq4uWI);
      obj[outer1_16.VIDEO_QUALITY_MODE] = outer1_53(outer1_0(outer1_3[17]).t.e68fAU, outer1_0(outer1_3[17]).t.djbES0);
      obj[outer1_16.DEFAULT_AUTO_ARCHIVE_DURATION] = outer1_53(outer1_0(outer1_3[17]).t.nYz2mg, outer1_0(outer1_3[17]).t.oczvRI);
      obj[outer1_16.DEFAULT_THREAD_RATE_LIMIT_PER_USER] = outer1_55(outer1_0(outer1_3[17]).t.tOJ8h7, outer1_0(outer1_3[17]).t.WaSgzk, outer1_0(outer1_3[17]).t["lj+A4u"]);
      obj[outer1_16.FLAGS] = () => outer2_0(outer2_3[17]).t.ImCQko;
      obj[outer1_16.AVAILABLE_TAG_ADD] = () => outer2_0(outer2_3[17]).t.H86QQU;
      obj[outer1_16.AVAILABLE_TAG_EDIT] = () => outer2_0(outer2_3[17]).t.YtUzls;
      obj[outer1_16.AVAILABLE_TAG_DELETE] = () => outer2_0(outer2_3[17]).t["8QOseg"];
      obj[outer1_16.LINKED_LOBBY] = outer1_54(outer1_0(outer1_3[17]).t["+/3TkD"], outer1_0(outer1_3[17]).t["5kDYS3"]);
      return obj;
    })();
  }
};
export { shouldNotRenderChangeDetail };
export const checkChangesToRender = function checkChangesToRender(log) {
  let closure_0 = log;
  const changes = log.changes;
  return null != changes && changes.some((arg0) => !outer1_43(closure_0, arg0));
};
export { ACTION_FILTER_ITEMS };
export { findChangeByKey };
export const getSimpleAuditLogTitleFromChange = function getSimpleAuditLogTitleFromChange(changes) {
  const _require = changes;
  const found = ACTION_FILTER_ITEMS().find((value) => value.value === action.action);
  if (null != findChangeByKey(AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, changes)) {
    const intl = _require(1212).intl;
    let stringResult = intl.string(_require(1212).t.z3wbj8);
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
      const diff = time - importDefault(21).extractTimestamp(id.id);
      const _Math = Math;
      const rounded = Math.round(diff / 1000 / 60);
      const obj2 = importDefault(21);
      const timeAndUnit = require(4206) /* sleep */.getTimeAndUnit(rounded, items);
      if (null != timeAndUnit.unit) {
        if (null != timeAndUnit.time) {
          if (timeAndUnit.unit in obj) {
            ({ unit, unit: unit2 } = timeAndUnit);
            if (unit2 === require(4206) /* sleep */.TimeUnits.SECONDS) {
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
        const intl4 = require(1212) /* getSystemLocale */.intl;
        return intl4.string(require(1212) /* getSystemLocale */.t.MA1ltr);
      }
    }
    return null;
  } else {
    if (tmp2) {
      if (tmp3) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.RdMMew);
      }
      return stringResult;
    }
    if (tmp2) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t["4GQqs8"]);
    } else {
      stringResult = null;
      if (tmp3) {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t["8mQ6x0"]);
      }
    }
  }
};
export const getSimpleAuditLogChangeDetails = function getSimpleAuditLogChangeDetails(changes) {
  const arr = findAllChangeByKey(AuditLogChangeKeys.ROLES_ADD, changes);
  const arr2 = findAllChangeByKey(AuditLogChangeKeys.ROLES_REMOVE, changes);
  if (null != arr) {
    let mapped = arr.map((newValue) => {
      newValue = newValue.newValue;
      let joined;
      if (null != newValue) {
        const mapped = newValue.map((name) => name.name);
        joined = mapped.join(", ");
      }
      return joined;
    });
    let joined = mapped.join(", ");
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
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { roleNamesAdded: joined, roleNamesRemoved: joined1 };
      let formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.tZw1EW, obj);
    }
    return formatToPlainStringResult;
  }
  if (arr.length > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { roleNames: joined };
    formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["/mTqt5"], obj);
  } else {
    formatToPlainStringResult = null;
    if (arr2.length > 0) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj1 = { roleNames: joined1 };
      formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Wk4pAJ, obj1);
    }
  }
};
export const getChangeTitle = function getChangeTitle(log) {
  const action = log.action;
  if (constants.GUILD_UPDATE === action) {
    let found = require;
    found = dependencyMap;
    return require(1212) /* getSystemLocale */.t.LjZO31;
  } else {
    found = constants;
    if (constants.CHANNEL_CREATE === action) {
      found = null;
      found = null;
      if (null != log.changes) {
        const changes = log.changes;
        found = changes.find((key) => key.key === outer1_16.TYPE);
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
          found = require;
          found = dependencyMap;
          return require(1212) /* getSystemLocale */.t["OKp4+o"];
        } else {
          found = constants2;
          if (constants2.GUILD_VOICE === newValue3) {
            found = require;
            found = dependencyMap;
            return require(1212) /* getSystemLocale */.t.NPOy4G;
          } else {
            found = constants2;
            if (constants2.GUILD_CATEGORY === newValue3) {
              found = require;
              found = dependencyMap;
              return require(1212) /* getSystemLocale */.t.T3KIjz;
            } else {
              found = require;
              found = dependencyMap;
              return require(1212) /* getSystemLocale */.t.wrYNG2;
            }
          }
        }
      }
    } else {
      found = constants;
      if (constants.CHANNEL_UPDATE === action) {
        found = require;
        found = dependencyMap;
        return require(1212) /* getSystemLocale */.t.nTYk6B;
      } else {
        found = constants;
        if (constants.CHANNEL_DELETE === action) {
          found = require;
          found = dependencyMap;
          return require(1212) /* getSystemLocale */.t.ynfvkm;
        } else {
          found = constants;
          if (constants.CHANNEL_OVERWRITE_CREATE === action) {
            found = require;
            found = dependencyMap;
            return require(1212) /* getSystemLocale */.t.l5Cu1a;
          } else {
            found = constants;
            if (constants.CHANNEL_OVERWRITE_UPDATE === action) {
              found = require;
              found = dependencyMap;
              return require(1212) /* getSystemLocale */.t.uhtbNU;
            } else {
              found = constants;
              if (constants.CHANNEL_OVERWRITE_DELETE === action) {
                found = require;
                found = dependencyMap;
                return require(1212) /* getSystemLocale */.t["HASt/3"];
              } else {
                found = constants;
                if (constants.MEMBER_KICK === action) {
                  found = require;
                  found = dependencyMap;
                  return require(1212) /* getSystemLocale */.t.B5hDZX;
                } else {
                  found = constants;
                  if (constants.MEMBER_PRUNE === action) {
                    found = require;
                    found = dependencyMap;
                    return require(1212) /* getSystemLocale */.t.qKOZTP;
                  } else {
                    found = constants;
                    if (constants.MEMBER_BAN_ADD === action) {
                      found = require;
                      found = dependencyMap;
                      return require(1212) /* getSystemLocale */.t["XklUm/"];
                    } else {
                      found = constants;
                      if (constants.MEMBER_BAN_REMOVE === action) {
                        found = require;
                        found = dependencyMap;
                        return require(1212) /* getSystemLocale */.t.o3Y6HD;
                      } else {
                        found = constants;
                        if (constants.MEMBER_UPDATE === action) {
                          found = require;
                          found = dependencyMap;
                          return require(1212) /* getSystemLocale */.t.pznhLN;
                        } else {
                          found = constants;
                          if (constants.MEMBER_ROLE_UPDATE === action) {
                            found = require;
                            found = dependencyMap;
                            return require(1212) /* getSystemLocale */.t.Vngfia;
                          } else {
                            found = constants;
                            if (constants.MEMBER_MOVE === action) {
                              found = require;
                              found = dependencyMap;
                              return require(1212) /* getSystemLocale */.t.Yt6NkU;
                            } else {
                              found = constants;
                              if (constants.MEMBER_DISCONNECT === action) {
                                found = require;
                                found = dependencyMap;
                                return require(1212) /* getSystemLocale */.t.K4eCZw;
                              } else {
                                found = constants;
                                if (constants.BOT_ADD === action) {
                                  found = require;
                                  found = dependencyMap;
                                  return require(1212) /* getSystemLocale */.t.fWvX0G;
                                } else {
                                  found = constants;
                                  if (constants.ROLE_CREATE === action) {
                                    found = require;
                                    found = dependencyMap;
                                    return require(1212) /* getSystemLocale */.t.UTLTx6;
                                  } else {
                                    found = constants;
                                    if (constants.ROLE_UPDATE === action) {
                                      found = require;
                                      found = dependencyMap;
                                      return require(1212) /* getSystemLocale */.t.NRbN18;
                                    } else {
                                      found = constants;
                                      if (constants.ROLE_DELETE === action) {
                                        found = require;
                                        found = dependencyMap;
                                        return require(1212) /* getSystemLocale */.t["4s63tb"];
                                      } else {
                                        found = constants;
                                        if (constants.INVITE_CREATE === action) {
                                          found = require;
                                          found = dependencyMap;
                                          return require(1212) /* getSystemLocale */.t.YHOXWy;
                                        } else {
                                          found = constants;
                                          if (constants.INVITE_UPDATE === action) {
                                            found = require;
                                            found = dependencyMap;
                                            return require(1212) /* getSystemLocale */.t.ja3kGS;
                                          } else {
                                            found = constants;
                                            if (constants.INVITE_DELETE === action) {
                                              found = require;
                                              found = dependencyMap;
                                              return require(1212) /* getSystemLocale */.t["3n/iWk"];
                                            } else {
                                              found = constants;
                                              if (constants.WEBHOOK_CREATE === action) {
                                                found = require;
                                                found = dependencyMap;
                                                return require(1212) /* getSystemLocale */.t.MhYhil;
                                              } else {
                                                found = constants;
                                                if (constants.WEBHOOK_UPDATE === action) {
                                                  found = require;
                                                  found = dependencyMap;
                                                  return require(1212) /* getSystemLocale */.t["6GTlWB"];
                                                } else {
                                                  found = constants;
                                                  if (constants.WEBHOOK_DELETE === action) {
                                                    found = require;
                                                    found = dependencyMap;
                                                    return require(1212) /* getSystemLocale */.t.in0VjZ;
                                                  } else {
                                                    found = constants;
                                                    if (constants.EMOJI_CREATE === action) {
                                                      found = require;
                                                      found = dependencyMap;
                                                      return require(1212) /* getSystemLocale */.t["7vekRO"];
                                                    } else {
                                                      found = constants;
                                                      if (constants.EMOJI_UPDATE === action) {
                                                        found = require;
                                                        found = dependencyMap;
                                                        return require(1212) /* getSystemLocale */.t.IsCKfh;
                                                      } else {
                                                        found = constants;
                                                        if (constants.EMOJI_DELETE === action) {
                                                          found = require;
                                                          found = dependencyMap;
                                                          return require(1212) /* getSystemLocale */.t.JnUaVG;
                                                        } else {
                                                          found = constants;
                                                          if (constants.STICKER_CREATE === action) {
                                                            found = require;
                                                            found = dependencyMap;
                                                            return require(1212) /* getSystemLocale */.t.DRZifq;
                                                          } else {
                                                            found = constants;
                                                            if (constants.STICKER_UPDATE === action) {
                                                              found = require;
                                                              found = dependencyMap;
                                                              return require(1212) /* getSystemLocale */.t.bhujGc;
                                                            } else {
                                                              found = constants;
                                                              if (constants.STICKER_DELETE === action) {
                                                                found = require;
                                                                found = dependencyMap;
                                                                return require(1212) /* getSystemLocale */.t.rGEP9U;
                                                              } else {
                                                                found = constants;
                                                                if (constants.MESSAGE_DELETE === action) {
                                                                  found = require;
                                                                  found = dependencyMap;
                                                                  return require(1212) /* getSystemLocale */.t["HPkD+M"];
                                                                } else {
                                                                  found = constants;
                                                                  if (constants.MESSAGE_BULK_DELETE === action) {
                                                                    found = require;
                                                                    found = dependencyMap;
                                                                    return require(1212) /* getSystemLocale */.t["3RIvLE"];
                                                                  } else {
                                                                    found = constants;
                                                                    if (constants.MESSAGE_PIN === action) {
                                                                      found = require;
                                                                      found = dependencyMap;
                                                                      return require(1212) /* getSystemLocale */.t.Yna7E7;
                                                                    } else {
                                                                      found = constants;
                                                                      if (constants.MESSAGE_UNPIN === action) {
                                                                        found = require;
                                                                        found = dependencyMap;
                                                                        return require(1212) /* getSystemLocale */.t.NCxXUW;
                                                                      } else {
                                                                        found = constants;
                                                                        if (constants.INTEGRATION_CREATE === action) {
                                                                          found = require;
                                                                          found = dependencyMap;
                                                                          return require(1212) /* getSystemLocale */.t.HYvCb3;
                                                                        } else {
                                                                          found = constants;
                                                                          if (constants.INTEGRATION_UPDATE === action) {
                                                                            found = require;
                                                                            found = dependencyMap;
                                                                            return require(1212) /* getSystemLocale */.t.ibCCOS;
                                                                          } else {
                                                                            found = constants;
                                                                            if (constants.INTEGRATION_DELETE === action) {
                                                                              found = require;
                                                                              found = dependencyMap;
                                                                              return require(1212) /* getSystemLocale */.t["8zScWY"];
                                                                            } else {
                                                                              found = constants;
                                                                              if (constants.STAGE_INSTANCE_CREATE === action) {
                                                                                found = require;
                                                                                found = dependencyMap;
                                                                                return require(1212) /* getSystemLocale */.t["n7x/DF"];
                                                                              } else {
                                                                                found = constants;
                                                                                if (constants.STAGE_INSTANCE_UPDATE === action) {
                                                                                  found = require;
                                                                                  found = dependencyMap;
                                                                                  return require(1212) /* getSystemLocale */.t["0hQYU4"];
                                                                                } else {
                                                                                  found = constants;
                                                                                  if (constants.STAGE_INSTANCE_DELETE === action) {
                                                                                    found = null;
                                                                                    if (null != log.userId) {
                                                                                      found = require;
                                                                                      found = dependencyMap;
                                                                                    } else {
                                                                                      found = require;
                                                                                      found = dependencyMap;
                                                                                    }
                                                                                    return _7ZIFm9;
                                                                                  } else {
                                                                                    found = constants;
                                                                                    if (constants.GUILD_SCHEDULED_EVENT_CREATE === action) {
                                                                                      found = require;
                                                                                      found = dependencyMap;
                                                                                      return require(1212) /* getSystemLocale */.t.S7k52p;
                                                                                    } else {
                                                                                      found = constants;
                                                                                      if (constants.GUILD_SCHEDULED_EVENT_UPDATE === action) {
                                                                                        found = dependencyMap;
                                                                                        return require(1212) /* getSystemLocale */.t.ebTK11;
                                                                                      } else {
                                                                                        found = constants;
                                                                                        if (constants.GUILD_SCHEDULED_EVENT_DELETE === action) {
                                                                                          return require(1212) /* getSystemLocale */.t["/ARPKQ"];
                                                                                        } else {
                                                                                          found = constants;
                                                                                          if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
                                                                                            found = constants;
                                                                                            if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
                                                                                              found = constants;
                                                                                              if (constants.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE === action) {
                                                                                                return require(1212) /* getSystemLocale */.t.zYb2da;
                                                                                              } else {
                                                                                                found = constants;
                                                                                                if (constants.THREAD_CREATE === action) {
                                                                                                  let found1 = null;
                                                                                                  if (null != log.changes) {
                                                                                                    const changes1 = log.changes;
                                                                                                    found1 = changes1.find((key) => key.key === outer1_16.TYPE);
                                                                                                  }
                                                                                                  if (null == found1) {
                                                                                                    const _Error = Error;
                                                                                                    const error = new Error("[AuditLog] Could not find type change for thread create");
                                                                                                    throw error;
                                                                                                  } else {
                                                                                                    const newValue2 = found1.newValue;
                                                                                                    found = constants2;
                                                                                                    if (constants2.PRIVATE_THREAD === newValue2) {
                                                                                                      return require(1212) /* getSystemLocale */.t.Br0y5w;
                                                                                                    } else if (constants2.ANNOUNCEMENT_THREAD === newValue2) {
                                                                                                      return require(1212) /* getSystemLocale */.t["6uaMmO"];
                                                                                                    } else {
                                                                                                      return require(1212) /* getSystemLocale */.t["2cxQ7G"];
                                                                                                    }
                                                                                                  }
                                                                                                } else {
                                                                                                  found = constants;
                                                                                                  if (constants.THREAD_UPDATE === action) {
                                                                                                    return require(1212) /* getSystemLocale */.t.PSsy4t;
                                                                                                  } else {
                                                                                                    found = constants;
                                                                                                    if (constants.THREAD_DELETE === action) {
                                                                                                      return require(1212) /* getSystemLocale */.t.s3Khn8;
                                                                                                    } else {
                                                                                                      found = constants;
                                                                                                      if (constants.APPLICATION_COMMAND_PERMISSION_UPDATE === action) {
                                                                                                        return require(1212) /* getSystemLocale */.t.uzCqBm;
                                                                                                      } else {
                                                                                                        found = constants;
                                                                                                        if (constants.AUTO_MODERATION_BLOCK_MESSAGE === action) {
                                                                                                          return require(1212) /* getSystemLocale */.t.NqWv2K;
                                                                                                        } else {
                                                                                                          found = constants;
                                                                                                          if (constants.AUTO_MODERATION_FLAG_TO_CHANNEL === action) {
                                                                                                            const options = log.options;
                                                                                                            let prop;
                                                                                                            if (null != options) {
                                                                                                              prop = options.auto_moderation_rule_trigger_type;
                                                                                                            }
                                                                                                            if (prop === str.toString()) {
                                                                                                              let SD0PwJ = require(1212) /* getSystemLocale */.t.YQsjej;
                                                                                                            } else {
                                                                                                              SD0PwJ = require(1212) /* getSystemLocale */.t.SD0PwJ;
                                                                                                            }
                                                                                                            return SD0PwJ;
                                                                                                          } else {
                                                                                                            found = constants;
                                                                                                            if (constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED === action) {
                                                                                                              return require(1212) /* getSystemLocale */.t.Vk4TwX;
                                                                                                            } else {
                                                                                                              found = constants;
                                                                                                              if (constants.AUTO_MODERATION_QUARANTINE_USER === action) {
                                                                                                                return require(1212) /* getSystemLocale */.t["/W5u5o"];
                                                                                                              } else {
                                                                                                                found = constants;
                                                                                                                if (constants.CREATOR_MONETIZATION_REQUEST_CREATED === action) {
                                                                                                                  return require(1212) /* getSystemLocale */.t.ONvWyr;
                                                                                                                } else {
                                                                                                                  found = constants;
                                                                                                                  if (constants.CREATOR_MONETIZATION_TERMS_ACCEPTED === action) {
                                                                                                                    return require(1212) /* getSystemLocale */.t["ryGLk+"];
                                                                                                                  } else {
                                                                                                                    found = constants;
                                                                                                                    if (constants.AUTO_MODERATION_RULE_CREATE === action) {
                                                                                                                      return require(1212) /* getSystemLocale */.t["NKljj+"];
                                                                                                                    } else {
                                                                                                                      found = constants;
                                                                                                                      if (constants.AUTO_MODERATION_RULE_UPDATE === action) {
                                                                                                                        return require(1212) /* getSystemLocale */.t["3wEA9u"];
                                                                                                                      } else {
                                                                                                                        found = constants;
                                                                                                                        if (constants.AUTO_MODERATION_RULE_DELETE === action) {
                                                                                                                          return require(1212) /* getSystemLocale */.t.umua3n;
                                                                                                                        } else {
                                                                                                                          found = constants;
                                                                                                                          if (constants.ONBOARDING_PROMPT_CREATE === action) {
                                                                                                                            return require(1212) /* getSystemLocale */.t["/8A1g2"];
                                                                                                                          } else {
                                                                                                                            found = constants;
                                                                                                                            if (constants.ONBOARDING_PROMPT_UPDATE === action) {
                                                                                                                              return require(1212) /* getSystemLocale */.t.ArIrWI;
                                                                                                                            } else {
                                                                                                                              found = constants;
                                                                                                                              if (constants.ONBOARDING_PROMPT_DELETE === action) {
                                                                                                                                return require(1212) /* getSystemLocale */.t.IuBTao;
                                                                                                                              } else {
                                                                                                                                found = constants;
                                                                                                                                if (constants.ONBOARDING_CREATE === action) {
                                                                                                                                  return require(1212) /* getSystemLocale */.t["wDaq3/"];
                                                                                                                                } else {
                                                                                                                                  found = constants;
                                                                                                                                  if (constants.ONBOARDING_UPDATE === action) {
                                                                                                                                    return require(1212) /* getSystemLocale */.t["yONu/l"];
                                                                                                                                  } else {
                                                                                                                                    found = constants;
                                                                                                                                    if (constants.HOME_SETTINGS_CREATE === action) {
                                                                                                                                      return require(1212) /* getSystemLocale */.t.dSdCjG;
                                                                                                                                    } else {
                                                                                                                                      found = constants;
                                                                                                                                      if (constants.HOME_SETTINGS_UPDATE === action) {
                                                                                                                                        return require(1212) /* getSystemLocale */.t.XHE8qv;
                                                                                                                                      } else {
                                                                                                                                        found = constants;
                                                                                                                                        if (constants.GUILD_HOME_FEATURE_ITEM === action) {
                                                                                                                                          let found2 = null;
                                                                                                                                          if (null != log.changes) {
                                                                                                                                            const changes2 = log.changes;
                                                                                                                                            found2 = changes2.find((key) => key.key === outer1_16.ENTITY_TYPE);
                                                                                                                                          }
                                                                                                                                          if (null == found2) {
                                                                                                                                            return require(1212) /* getSystemLocale */.t["UZ+U3A"];
                                                                                                                                          } else {
                                                                                                                                            const newValue = found2.newValue;
                                                                                                                                            found = require;
                                                                                                                                            found = dependencyMap;
                                                                                                                                            if (require(16276) /* set */.GuildFeedItemTypes.MESSAGE === newValue) {
                                                                                                                                              return require(1212) /* getSystemLocale */.t["PyEa+J"];
                                                                                                                                            } else if (require(16276) /* set */.GuildFeedItemTypes.FORUM_POST === newValue) {
                                                                                                                                              return require(1212) /* getSystemLocale */.t.hCuAb1;
                                                                                                                                            } else {
                                                                                                                                              return require(1212) /* getSystemLocale */.t["UZ+U3A"];
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        } else {
                                                                                                                                          found = constants;
                                                                                                                                          if (constants.GUILD_HOME_REMOVE_ITEM === action) {
                                                                                                                                            return require(1212) /* getSystemLocale */.t.kPReun;
                                                                                                                                          } else {
                                                                                                                                            found = constants;
                                                                                                                                            if (constants.SOUNDBOARD_SOUND_CREATE === action) {
                                                                                                                                              return require(1212) /* getSystemLocale */.t["0PD83V"];
                                                                                                                                            } else {
                                                                                                                                              found = constants;
                                                                                                                                              if (constants.SOUNDBOARD_SOUND_UPDATE === action) {
                                                                                                                                                return require(1212) /* getSystemLocale */.t.CM8n1w;
                                                                                                                                              } else {
                                                                                                                                                found = constants;
                                                                                                                                                if (constants.SOUNDBOARD_SOUND_DELETE === action) {
                                                                                                                                                  return require(1212) /* getSystemLocale */.t["kVz4/0"];
                                                                                                                                                } else {
                                                                                                                                                  found = constants;
                                                                                                                                                  if (constants.VOICE_CHANNEL_STATUS_CREATE === action) {
                                                                                                                                                    return require(1212) /* getSystemLocale */.t.MWjnU7;
                                                                                                                                                  } else {
                                                                                                                                                    found = constants;
                                                                                                                                                    if (constants.VOICE_CHANNEL_STATUS_DELETE === action) {
                                                                                                                                                      return require(1212) /* getSystemLocale */.t.aS8Krq;
                                                                                                                                                    } else {
                                                                                                                                                      found = constants;
                                                                                                                                                      if (constants.GUILD_MEMBER_VERIFICATION_UPDATE === action) {
                                                                                                                                                        return require(1212) /* getSystemLocale */.t["NUKUb+"];
                                                                                                                                                      } else {
                                                                                                                                                        found = constants;
                                                                                                                                                        if (constants.GUILD_PROFILE_UPDATE === action) {
                                                                                                                                                          return require(1212) /* getSystemLocale */.t.Ed6hF1;
                                                                                                                                                        } else {
                                                                                                                                                          found = constants;
                                                                                                                                                          if (constants.GUILD_MIGRATE_PIN_PERMISSION === action) {
                                                                                                                                                            return require(1212) /* getSystemLocale */.t["3Ne7MA"];
                                                                                                                                                          } else if (constants.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION === action) {
                                                                                                                                                            return require(1212) /* getSystemLocale */.t["naflH+"];
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
                                                                                          return require(1212) /* getSystemLocale */.t["8qCI36"];
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
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["5G8ZD4"]);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["4YLtzC"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1QLRYb"]);
  } else {
    return null;
  }
};
export const getStringForRemovedChannelFlag = function getStringForRemovedChannelFlag(arg0) {
  if (ChannelFlags.GUILD_FEED_REMOVED === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.S5kuWQ);
  } else if (ChannelFlags.ACTIVE_CHANNELS_REMOVED === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["8qpgcz"]);
  } else if (ChannelFlags.PINNED === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CMweGA);
  } else {
    return null;
  }
};
export const getStringForPermission = function getStringForPermission(arg0, log) {
  if (constants3.CREATE_INSTANT_INVITE === arg0) {
    let stringResult = require;
    stringResult = dependencyMap;
    const intl52 = require(1212) /* getSystemLocale */.intl;
    return intl52.string(require(1212) /* getSystemLocale */.t.zJrgTG);
  } else {
    stringResult = constants3;
    if (constants3.KICK_MEMBERS === arg0) {
      stringResult = require;
      stringResult = dependencyMap;
      const intl51 = require(1212) /* getSystemLocale */.intl;
      return intl51.string(require(1212) /* getSystemLocale */.t.pBNv6i);
    } else {
      stringResult = constants3;
      if (constants3.BAN_MEMBERS === arg0) {
        stringResult = require;
        stringResult = dependencyMap;
        const intl50 = require(1212) /* getSystemLocale */.intl;
        return intl50.string(require(1212) /* getSystemLocale */.t.oTBA7N);
      } else {
        stringResult = constants3;
        if (constants3.ADMINISTRATOR === arg0) {
          stringResult = require;
          stringResult = dependencyMap;
          const intl49 = require(1212) /* getSystemLocale */.intl;
          return intl49.string(require(1212) /* getSystemLocale */.t.PGvZqX);
        } else {
          stringResult = constants3;
          if (constants3.MANAGE_CHANNELS === arg0) {
            if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
              if (log.targetType !== AuditLogTargetTypes.CHANNEL_OVERWRITE) {
                stringResult = require;
                stringResult = dependencyMap;
                const intl47 = require(1212) /* getSystemLocale */.intl;
                stringResult = intl47.string(require(1212) /* getSystemLocale */.t["9qLtWs"]);
              }
              return stringResult;
            }
            stringResult = require;
            stringResult = dependencyMap;
            const intl48 = require(1212) /* getSystemLocale */.intl;
            stringResult = intl48.string(require(1212) /* getSystemLocale */.t.nAw15L);
          } else {
            stringResult = constants3;
            if (constants3.MANAGE_GUILD === arg0) {
              const intl46 = require(1212) /* getSystemLocale */.intl;
              return intl46.string(require(1212) /* getSystemLocale */.t.QZRcfO);
            } else {
              stringResult = constants3;
              if (constants3.VIEW_GUILD_ANALYTICS === arg0) {
                const intl45 = require(1212) /* getSystemLocale */.intl;
                return intl45.string(require(1212) /* getSystemLocale */.t["rQJBE/"]);
              } else {
                stringResult = constants3;
                if (constants3.VIEW_CREATOR_MONETIZATION_ANALYTICS === arg0) {
                  const intl44 = require(1212) /* getSystemLocale */.intl;
                  return intl44.string(require(1212) /* getSystemLocale */.t["0lTLTv"]);
                } else {
                  stringResult = constants3;
                  if (constants3.CHANGE_NICKNAME === arg0) {
                    const intl43 = require(1212) /* getSystemLocale */.intl;
                    return intl43.string(require(1212) /* getSystemLocale */.t.dilOF6);
                  } else {
                    stringResult = constants3;
                    if (constants3.MANAGE_NICKNAMES === arg0) {
                      const intl42 = require(1212) /* getSystemLocale */.intl;
                      return intl42.string(require(1212) /* getSystemLocale */.t["t+Ct5x"]);
                    } else {
                      stringResult = constants3;
                      if (constants3.MANAGE_ROLES === arg0) {
                        const intl41 = require(1212) /* getSystemLocale */.intl;
                        return intl41.string(require(1212) /* getSystemLocale */.t["C8d+oG"]);
                      } else {
                        stringResult = constants3;
                        if (constants3.MANAGE_WEBHOOKS === arg0) {
                          const intl40 = require(1212) /* getSystemLocale */.intl;
                          return intl40.string(require(1212) /* getSystemLocale */.t["/ADKmM"]);
                        } else {
                          stringResult = constants3;
                          if (constants3.CREATE_GUILD_EXPRESSIONS === arg0) {
                            const intl39 = require(1212) /* getSystemLocale */.intl;
                            return intl39.string(require(1212) /* getSystemLocale */.t.HarVuP);
                          } else {
                            stringResult = constants3;
                            if (constants3.MANAGE_GUILD_EXPRESSIONS === arg0) {
                              const intl38 = require(1212) /* getSystemLocale */.intl;
                              return intl38.string(require(1212) /* getSystemLocale */.t.bbuXIn);
                            } else {
                              stringResult = constants3;
                              if (constants3.VIEW_AUDIT_LOG === arg0) {
                                const intl37 = require(1212) /* getSystemLocale */.intl;
                                return intl37.string(require(1212) /* getSystemLocale */.t.fZgLpA);
                              } else {
                                stringResult = constants3;
                                if (constants3.VIEW_CHANNEL === arg0) {
                                  if (log.targetType !== AuditLogTargetTypes.CHANNEL) {
                                    if (log.targetType !== AuditLogTargetTypes.CHANNEL_OVERWRITE) {
                                      const intl35 = require(1212) /* getSystemLocale */.intl;
                                      let stringResult1 = intl35.string(require(1212) /* getSystemLocale */.t.uV83yi);
                                    }
                                    return stringResult1;
                                  }
                                  const intl36 = require(1212) /* getSystemLocale */.intl;
                                  stringResult1 = intl36.string(require(1212) /* getSystemLocale */.t["W/A4Qp"]);
                                } else {
                                  stringResult = constants3;
                                  if (constants3.SEND_MESSAGES === arg0) {
                                    const intl34 = require(1212) /* getSystemLocale */.intl;
                                    return intl34.string(require(1212) /* getSystemLocale */.t.T32rkC);
                                  } else {
                                    stringResult = constants3;
                                    if (constants3.SEND_TTS_MESSAGES === arg0) {
                                      const intl33 = require(1212) /* getSystemLocale */.intl;
                                      return intl33.string(require(1212) /* getSystemLocale */.t.Mg7bku);
                                    } else {
                                      stringResult = constants3;
                                      if (constants3.USE_APPLICATION_COMMANDS === arg0) {
                                        const intl32 = require(1212) /* getSystemLocale */.intl;
                                        return intl32.string(require(1212) /* getSystemLocale */.t.shbR1a);
                                      } else {
                                        stringResult = constants3;
                                        if (constants3.MANAGE_MESSAGES === arg0) {
                                          const intl31 = require(1212) /* getSystemLocale */.intl;
                                          return intl31.string(require(1212) /* getSystemLocale */.t["6lU9xM"]);
                                        } else {
                                          stringResult = constants3;
                                          if (constants3.EMBED_LINKS === arg0) {
                                            const intl30 = require(1212) /* getSystemLocale */.intl;
                                            return intl30.string(require(1212) /* getSystemLocale */.t["969dEL"]);
                                          } else {
                                            stringResult = constants3;
                                            if (constants3.ATTACH_FILES === arg0) {
                                              const intl29 = require(1212) /* getSystemLocale */.intl;
                                              return intl29.string(require(1212) /* getSystemLocale */.t["3AS4UM"]);
                                            } else {
                                              stringResult = constants3;
                                              if (constants3.READ_MESSAGE_HISTORY === arg0) {
                                                const intl28 = require(1212) /* getSystemLocale */.intl;
                                                return intl28.string(require(1212) /* getSystemLocale */.t.l9ufaR);
                                              } else {
                                                stringResult = constants3;
                                                if (constants3.MENTION_EVERYONE === arg0) {
                                                  const intl27 = require(1212) /* getSystemLocale */.intl;
                                                  return intl27.string(require(1212) /* getSystemLocale */.t.Y78KGC);
                                                } else {
                                                  stringResult = constants3;
                                                  if (constants3.USE_EXTERNAL_EMOJIS === arg0) {
                                                    const intl26 = require(1212) /* getSystemLocale */.intl;
                                                    return intl26.string(require(1212) /* getSystemLocale */.t.BpBGZU);
                                                  } else {
                                                    stringResult = constants3;
                                                    if (constants3.USE_EXTERNAL_STICKERS === arg0) {
                                                      const intl25 = require(1212) /* getSystemLocale */.intl;
                                                      return intl25.string(require(1212) /* getSystemLocale */.t["UeRs+b"]);
                                                    } else {
                                                      stringResult = constants3;
                                                      if (constants3.ADD_REACTIONS === arg0) {
                                                        const intl24 = require(1212) /* getSystemLocale */.intl;
                                                        return intl24.string(require(1212) /* getSystemLocale */.t.yEoJAr);
                                                      } else {
                                                        stringResult = constants3;
                                                        if (constants3.CONNECT === arg0) {
                                                          const intl23 = require(1212) /* getSystemLocale */.intl;
                                                          return intl23.string(require(1212) /* getSystemLocale */.t.S0W8Z5);
                                                        } else {
                                                          stringResult = constants3;
                                                          if (constants3.SPEAK === arg0) {
                                                            const intl22 = require(1212) /* getSystemLocale */.intl;
                                                            return intl22.string(require(1212) /* getSystemLocale */.t["8w1tIR"]);
                                                          } else {
                                                            stringResult = constants3;
                                                            if (constants3.MUTE_MEMBERS === arg0) {
                                                              const intl21 = require(1212) /* getSystemLocale */.intl;
                                                              return intl21.string(require(1212) /* getSystemLocale */.t["8EI30/"]);
                                                            } else {
                                                              stringResult = constants3;
                                                              if (constants3.DEAFEN_MEMBERS === arg0) {
                                                                const intl20 = require(1212) /* getSystemLocale */.intl;
                                                                return intl20.string(require(1212) /* getSystemLocale */.t["9L47Fr"]);
                                                              } else {
                                                                stringResult = constants3;
                                                                if (constants3.MOVE_MEMBERS === arg0) {
                                                                  const intl19 = require(1212) /* getSystemLocale */.intl;
                                                                  return intl19.string(require(1212) /* getSystemLocale */.t.YtjJPQ);
                                                                } else {
                                                                  stringResult = constants3;
                                                                  if (constants3.USE_VAD === arg0) {
                                                                    const intl18 = require(1212) /* getSystemLocale */.intl;
                                                                    return intl18.string(require(1212) /* getSystemLocale */.t["08zAV7"]);
                                                                  } else {
                                                                    stringResult = constants3;
                                                                    if (constants3.PRIORITY_SPEAKER === arg0) {
                                                                      const intl17 = require(1212) /* getSystemLocale */.intl;
                                                                      return intl17.string(require(1212) /* getSystemLocale */.t.BVK71i);
                                                                    } else {
                                                                      stringResult = constants3;
                                                                      if (constants3.STREAM === arg0) {
                                                                        const intl16 = require(1212) /* getSystemLocale */.intl;
                                                                        return intl16.string(require(1212) /* getSystemLocale */.t.FlNoSV);
                                                                      } else {
                                                                        stringResult = constants3;
                                                                        if (constants3.REQUEST_TO_SPEAK === arg0) {
                                                                          const intl15 = require(1212) /* getSystemLocale */.intl;
                                                                          return intl15.string(require(1212) /* getSystemLocale */.t["5kicT2"]);
                                                                        } else {
                                                                          stringResult = constants3;
                                                                          if (constants3.USE_EMBEDDED_ACTIVITIES === arg0) {
                                                                            const intl14 = require(1212) /* getSystemLocale */.intl;
                                                                            return intl14.string(require(1212) /* getSystemLocale */.t.rLSGeh);
                                                                          } else {
                                                                            stringResult = constants3;
                                                                            if (constants3.CREATE_EVENTS === arg0) {
                                                                              const intl13 = require(1212) /* getSystemLocale */.intl;
                                                                              return intl13.string(require(1212) /* getSystemLocale */.t.qyjZua);
                                                                            } else {
                                                                              stringResult = constants3;
                                                                              if (constants3.MANAGE_EVENTS === arg0) {
                                                                                const intl12 = require(1212) /* getSystemLocale */.intl;
                                                                                return intl12.string(require(1212) /* getSystemLocale */.t.HIgA5a);
                                                                              } else {
                                                                                stringResult = constants3;
                                                                                if (constants3.CREATE_PUBLIC_THREADS === arg0) {
                                                                                  const intl11 = require(1212) /* getSystemLocale */.intl;
                                                                                  return intl11.string(require(1212) /* getSystemLocale */.t["25rKnX"]);
                                                                                } else {
                                                                                  stringResult = constants3;
                                                                                  if (constants3.CREATE_PRIVATE_THREADS === arg0) {
                                                                                    const intl10 = require(1212) /* getSystemLocale */.intl;
                                                                                    return intl10.string(require(1212) /* getSystemLocale */.t.QwbTSa);
                                                                                  } else {
                                                                                    stringResult = constants3;
                                                                                    if (constants3.SEND_MESSAGES_IN_THREADS === arg0) {
                                                                                      const intl9 = require(1212) /* getSystemLocale */.intl;
                                                                                      return intl9.string(require(1212) /* getSystemLocale */.t.fTE74g);
                                                                                    } else {
                                                                                      stringResult = constants3;
                                                                                      if (constants3.MANAGE_THREADS === arg0) {
                                                                                        const intl8 = require(1212) /* getSystemLocale */.intl;
                                                                                        return intl8.string(require(1212) /* getSystemLocale */.t.kEqgr7);
                                                                                      } else {
                                                                                        stringResult = constants3;
                                                                                        if (constants3.MODERATE_MEMBERS === arg0) {
                                                                                          const intl7 = require(1212) /* getSystemLocale */.intl;
                                                                                          return intl7.string(require(1212) /* getSystemLocale */.t["+RL6pz"]);
                                                                                        } else {
                                                                                          stringResult = constants3;
                                                                                          if (constants3.SET_VOICE_CHANNEL_STATUS === arg0) {
                                                                                            const intl6 = require(1212) /* getSystemLocale */.intl;
                                                                                            return intl6.string(require(1212) /* getSystemLocale */.t.VBwkUf);
                                                                                          } else {
                                                                                            stringResult = constants3;
                                                                                            if (constants3.SEND_POLLS === arg0) {
                                                                                              const intl5 = require(1212) /* getSystemLocale */.intl;
                                                                                              return intl5.string(require(1212) /* getSystemLocale */.t.UMQ7Ww);
                                                                                            } else {
                                                                                              stringResult = constants3;
                                                                                              if (constants3.USE_EXTERNAL_APPS === arg0) {
                                                                                                const intl4 = require(1212) /* getSystemLocale */.intl;
                                                                                                return intl4.string(require(1212) /* getSystemLocale */.t.TtA5rK);
                                                                                              } else {
                                                                                                stringResult = constants3;
                                                                                                if (constants3.PIN_MESSAGES === arg0) {
                                                                                                  const intl3 = require(1212) /* getSystemLocale */.intl;
                                                                                                  return intl3.string(require(1212) /* getSystemLocale */.t.Y5BI39);
                                                                                                } else {
                                                                                                  stringResult = constants3;
                                                                                                  if (constants3.BYPASS_SLOWMODE === arg0) {
                                                                                                    const intl2 = require(1212) /* getSystemLocale */.intl;
                                                                                                    return intl2.string(require(1212) /* getSystemLocale */.t.kqcjeV);
                                                                                                  } else {
                                                                                                    stringResult = constants3;
                                                                                                    if (constants3.MANAGE_OFFICIAL_MESSAGES === arg0) {
                                                                                                      const intl = require(1212) /* getSystemLocale */.intl;
                                                                                                      return intl.string(require(1212) /* getSystemLocale */.t.Aj9ruN);
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
  let closure_0 = stateFromStores1;
  let items = [];
  let item = _logs.forEach((set) => {
    let result3 = set;
    let tmp = (function transformTarget(targetType, result3) {
      const callback = targetType;
      let closure_1 = result3;
      targetType = targetType.targetType;
      if (outer2_17.GUILD !== targetType) {
        if (outer2_17.GUILD_HOME !== targetType) {
          if (outer2_17.GUILD_PROFILE !== targetType) {
            if (outer2_17.CHANNEL !== targetType) {
              if (outer2_17.CHANNEL_OVERWRITE !== targetType) {
                if (outer2_17.USER === targetType) {
                  return outer2_51(targetType, outer2_16.NICK, (arg0) => outer3_13.getUser(arg0), (arg0) => arg0);
                } else if (outer2_17.ROLE === targetType) {
                  return outer2_51(targetType, outer2_16.NAME, (arg0) => outer3_11.getRole(user.id, arg0), (name) => name.name);
                } else if (outer2_17.ONBOARDING_PROMPT === targetType) {
                  let stringResult = outer2_51(targetType, outer2_16.ID, (arg0) => outer3_5.getOnboardingPrompt(arg0), (title) => title.title);
                  if (null == stringResult) {
                    let intl = callback(outer2_3[17]).intl;
                    stringResult = intl.string(callback(outer2_3[17]).t.ZNQyiR);
                  }
                  return stringResult;
                } else {
                  if (outer2_17.GUILD_ONBOARDING !== targetType) {
                    if (outer2_17.GUILD_MEMBER_VERIFICATION !== targetType) {
                      if (outer2_17.INVITE === targetType) {
                        return outer2_51(targetType, outer2_16.CODE, outer2_24);
                      } else if (outer2_17.INTEGRATION === targetType) {
                        return outer2_51(targetType, outer2_16.TYPE, (arg0) => {
                          let closure_0 = arg0;
                          const integrations = outer3_14.integrations;
                          return integrations.find((id) => id.id === closure_0);
                        }, (name) => name.name);
                      } else if (outer2_17.WEBHOOK === targetType) {
                        return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                          let closure_0 = arg0;
                          const webhooks = outer3_14.webhooks;
                          return webhooks.find((id) => id.id === closure_0);
                        }, (name) => name.name);
                      } else if (outer2_17.EMOJI === targetType) {
                        return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                          let closure_0 = arg0;
                          const guildEmoji = outer3_4.getGuildEmoji(user.id);
                          return guildEmoji.find((id) => id.id === closure_0);
                        }, (name) => name.name);
                      } else if (outer2_17.STICKER === targetType) {
                        return outer2_51(targetType, outer2_16.NAME, (arg0) => outer3_8.getStickerById(arg0), (name) => name.name);
                      } else if (outer2_17.STAGE_INSTANCE === targetType) {
                        return outer2_51(targetType, outer2_16.TOPIC, (arg0) => {
                          let closure_0 = arg0;
                          const values = Object.values(outer3_7.getStageInstancesByGuild(user.id));
                          let found;
                          if (null != values) {
                            found = values.find((id) => id.id === closure_0);
                          }
                          return found;
                        }, (topic) => topic.topic);
                      } else {
                        if (outer2_17.GUILD_SCHEDULED_EVENT !== targetType) {
                          if (outer2_17.GUILD_SCHEDULED_EVENT_EXCEPTION !== targetType) {
                            if (outer2_17.THREAD === targetType) {
                              return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                                let closure_0 = arg0;
                                const threads = outer3_14.threads;
                                return threads.find((id) => id.id === closure_0);
                              }, (name) => name.name);
                            } else if (outer2_17.APPLICATION_COMMAND === targetType) {
                              if (targetType.targetId === targetType.options.application_id) {
                                let integrations = outer2_14.integrations;
                                let found = integrations.find((application) => {
                                  application = application.application;
                                  let id;
                                  if (null != application) {
                                    id = application.id;
                                  }
                                  return id === targetType.targetId;
                                });
                                return null != found ? found.name : targetType.targetId;
                              } else {
                                return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                                  let closure_0 = arg0;
                                  const applicationCommands = outer3_14.applicationCommands;
                                  return applicationCommands.find((id) => id.id === closure_0);
                                }, (name_localized) => {
                                  if (null != name_localized.name_localized) {
                                    if ("" !== name_localized.name_localized) {
                                      let name = name_localized.name_localized;
                                    }
                                    let combined = name;
                                    if (name_localized.type === targetType(outer3_3[24]).ApplicationCommandType.CHAT) {
                                      const _HermesInternal = HermesInternal;
                                      combined = "/\u2060" + name;
                                    }
                                    return combined;
                                  }
                                  name = name_localized.name;
                                });
                              }
                            } else if (outer2_17.AUTO_MODERATION_RULE === targetType) {
                              return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                                let closure_0 = arg0;
                                const automodRules = outer3_14.automodRules;
                                return automodRules.find((id) => id.id === closure_0);
                              }, (name) => name.name);
                            } else if (outer2_17.GUILD_SOUNDBOARD === targetType) {
                              return outer2_51(targetType, outer2_16.NAME, outer2_24);
                            } else if (outer2_17.HOME_SETTINGS === targetType) {
                              return outer2_51(targetType, outer2_16.GUILD_ID, (guildId) => outer3_6.getSettings(guildId), () => {
                                const intl = targetType(outer3_3[17]).intl;
                                return intl.string(targetType(outer3_3[17]).t.VbpLyU);
                              }, result3.id);
                            } else if (outer2_17.VOICE_CHANNEL_STATUS === targetType) {
                              return outer2_51(targetType, outer2_16.STATUS, (channelId) => outer3_10.getChannel(channelId), (channel) => targetType(outer3_3[23]).computeChannelName(channel, outer3_13, outer3_12, true));
                            } else {
                              outer2_35.warn("Unknown targetType for log", targetType);
                              return null;
                            }
                          }
                        }
                        return outer2_51(targetType, outer2_16.NAME, (arg0) => {
                          let closure_0 = arg0;
                          const guildScheduledEvents = outer3_14.guildScheduledEvents;
                          return guildScheduledEvents.find((id) => id.id === closure_0);
                        }, (name) => name.name);
                      }
                    }
                  }
                  return result3;
                }
              }
            }
            return outer2_51(targetType, outer2_16.NAME, (channelId) => outer3_10.getChannel(channelId), (channel) => targetType(outer3_3[23]).computeChannelName(channel, outer3_13, outer3_12, true));
          }
        }
      }
      return result3;
    })(set, result3);
    if (null != tmp) {
      const result = set.set("user", tmp2);
      result3 = result;
      const result1 = result.set("target", tmp);
      result3 = result1;
      const result2 = result1.set("options", (function transformOptions(result1) {
        const callback = result1;
        if (null != result1.options) {
          const obj = {};
          const merged = Object.assign(result1.options);
          const type = result1.options.type;
          if (outer2_27.USER === type) {
            obj.subtarget = outer2_52(result1.options.id, (arg0) => outer3_13.getUser(arg0), (tag) => tag.tag);
          } else if (outer2_27.ROLE === type) {
            obj.subtarget = outer2_52(result1.options.role_name, outer2_24);
          }
          if (null != result1.options.channel_id) {
            obj.channel = outer2_51(result1, "", (channelId) => outer3_10.getChannel(channelId), (arg0) => arg0, result1.options.channel_id);
          }
          let tmp10 = null != result1.options.members_removed;
          if (tmp10) {
            tmp10 = 0 !== result1.options.members_removed;
          }
          if (tmp10) {
            obj.count = result1.options.members_removed;
          }
          if (null != result1.options.event_exception_id) {
            const guildScheduledEvents = outer2_14.guildScheduledEvents;
            const found = guildScheduledEvents.find((id) => id.id === closure_0.targetId);
            let found1;
            if (null != found) {
              const prop = found.guild_scheduled_event_exceptions;
              found1 = prop.find((event_exception_id) => event_exception_id.event_exception_id === closure_0.options.event_exception_id);
            }
            const obj2 = callback(outer2_3[29]);
            const tmp15 = items(outer2_3[30]);
            let event_exception_id;
            if (null != found1) {
              event_exception_id = found1.event_exception_id;
            }
            let str2 = "0";
            if (null != event_exception_id) {
              str2 = event_exception_id;
            }
            obj.subtarget = obj2.dateFormat(tmp15(items(outer2_3[19]).extractTimestamp(str2)), "LL");
            const obj3 = items(outer2_3[19]);
          }
          return obj;
        } else {
          return result1.options;
        }
      })(result1));
      result3 = result2;
      let tmp8 = result2;
      if (null != result2.changes) {
        let items = [];
        const changes = result2.changes;
        let item = changes.forEach((newValue) => {
          let arr = (function transformChange(newValue, result3, result32) {
            let added;
            let added2;
            let added3;
            let oldValue;
            let removed;
            let removed2;
            let removed3;
            const callback = result32;
            if (result3.action === outer3_15.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let arr = newValue.newValue || newValue.oldValue;
              const type = arr.type;
              arr = outer3_26;
              if (outer3_26.ROLE === type) {
                arr = outer3_52;
                newValue.subtarget = outer3_52(arr.id, (arg0) => outer4_11.getRole(lib.id, arg0), (name) => name.name);
              } else {
                arr = outer3_26;
                if (outer3_26.USER === type) {
                  arr = outer3_52;
                  newValue.subtarget = outer3_52(arr.id, (arg0) => outer4_13.getUser(arg0), (tag) => tag.tag);
                } else {
                  arr = outer3_26;
                  if (outer3_26.CHANNEL === type) {
                    arr = items;
                    arr = outer3_3;
                    const obj5 = items(outer3_3[25])(result32.id);
                    if (arr.id === str2.toString()) {
                      arr = callback;
                      arr = outer3_3;
                      let intl = callback(outer3_3[17]).intl;
                      newValue.subtarget = intl.string(callback(outer3_3[17]).t.MSYhgh);
                    } else {
                      arr = outer3_52;
                      newValue.subtarget = outer3_52(arr.id, (channelId) => outer4_10.getChannel(channelId), (channel) => lib(outer4_3[23]).computeChannelName(channel, outer4_13, outer4_12, true));
                    }
                    str2 = items(outer3_3[25])(result32.id).subtract(1);
                  }
                }
              }
              return newValue;
            } else {
              arr = outer3_16;
              if (outer3_16.OWNER_ID === newValue.key) {
                arr = outer3_50;
                return outer3_50(newValue, (arg0) => outer4_13.getUser(arg0));
              } else {
                arr = outer3_16;
                if (outer3_16.CHANNEL_ID !== key) {
                  arr = outer3_16;
                  if (outer3_16.AFK_CHANNEL_ID !== key) {
                    arr = outer3_16;
                    if (outer3_16.SYSTEM_CHANNEL_ID !== key) {
                      arr = outer3_16;
                      if (outer3_16.RULES_CHANNEL_ID !== key) {
                        arr = outer3_16;
                        if (outer3_16.PUBLIC_UPDATES_CHANNEL_ID !== key) {
                          arr = outer3_16;
                          if (outer3_16.AFK_TIMEOUT === key) {
                            arr = outer3_50;
                            return outer3_50(newValue, (arg0) => arg0 / 60);
                          } else {
                            arr = outer3_16;
                            if (outer3_16.BITRATE === key) {
                              arr = outer3_50;
                              return outer3_50(newValue, (arg0) => arg0 / 1000);
                            } else {
                              arr = outer3_16;
                              if (outer3_16.COLOR === key) {
                                arr = outer3_50;
                                return outer3_50(newValue, (color) => {
                                  const obj = lib(outer4_3[26]);
                                  return lib(outer4_3[26]).int2hex(color).toUpperCase();
                                });
                              } else {
                                arr = outer3_16;
                                if (outer3_16.THEME_COLORS === key) {
                                  arr = outer3_50;
                                  return outer3_50(newValue, (arg0) => {
                                    const obj = lib(outer4_3[26]);
                                    const formatted = lib(outer4_3[26]).int2hex(arg0[0]).toUpperCase();
                                    const str = lib(outer4_3[26]).int2hex(arg0[0]);
                                    const obj2 = lib(outer4_3[26]);
                                    return "" + formatted + ", " + lib(outer4_3[26]).int2hex(arg0[1]).toUpperCase();
                                  });
                                } else {
                                  arr = outer3_16;
                                  if (outer3_16.MAX_AGE === key) {
                                    arr = outer3_50;
                                    return outer3_50(newValue, (maxAge) => {
                                      let label = maxAge;
                                      const maxAgeOptionByValue = items(outer4_3[27]).getMaxAgeOptionByValue(maxAge);
                                      if (null !== maxAgeOptionByValue) {
                                        label = maxAgeOptionByValue.label;
                                      }
                                      return label;
                                    });
                                  } else {
                                    arr = outer3_16;
                                    if (outer3_16.PERMISSIONS === key) {
                                      items = [];
                                      ({ added: added3, removed: removed3 } = outer3_46(newValue.oldValue, newValue.newValue));
                                      if (added3.length > 0) {
                                        const prototype5 = outer3_9.prototype;
                                        const tmp91 = new outer3_9(outer3_16.PERMISSIONS_GRANTED, null, added3);
                                        arr = items.push(tmp91);
                                      }
                                      if (removed3.length > 0) {
                                        const prototype6 = outer3_9.prototype;
                                        arr = new outer3_9(outer3_16.PERMISSIONS_DENIED, null, removed3);
                                        arr = items.push(arr);
                                      }
                                      return items;
                                    } else {
                                      arr = outer3_16;
                                      if (outer3_16.PERMISSIONS_GRANTED !== key) {
                                        arr = outer3_16;
                                        if (outer3_16.PERMISSIONS_DENIED !== key) {
                                          arr = outer3_16;
                                          if (outer3_16.FLAGS === key) {
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
                                            let obj = outer3_2(outer3_3[22]);
                                            outer3_2(outer3_3[22]);
                                            const items2 = [];
                                            const items3 = [];
                                            for (const key10129 in outer3_30) {
                                              arr = key10129;
                                              arr = outer3_30;
                                              arr = outer3_30[key10129];
                                              arr = outer3_2;
                                              arr = outer3_3;
                                              let obj4 = outer3_2(outer3_3[22]);
                                              if (obj4.hasFlag(removeFlagResult, arr)) {
                                                let arr1 = items2.push(arr);
                                              }
                                              let tmp45 = outer3_2;
                                              let tmp46 = outer3_3;
                                              let obj2 = outer3_2(outer3_3[22]);
                                              if (!obj2.hasFlag(tmp42, arr)) {
                                                continue;
                                              } else {
                                                let arr2 = items3.push(arr);
                                                continue;
                                              }
                                              continue;
                                            }
                                            obj = { added: items2, removed: items3 };
                                            ({ added, removed } = obj);
                                            if (added.length > 0) {
                                              let prototype = outer3_9.prototype;
                                              const tmp53 = new outer3_9(newValue.key, null, added);
                                              items1.push(tmp53);
                                            }
                                            if (removed.length > 0) {
                                              const prototype2 = outer3_9.prototype;
                                              const tmp61 = new outer3_9(newValue.key, removed, null);
                                              items1.push(tmp61);
                                            }
                                            return items1;
                                          } else {
                                            arr = outer3_16;
                                            if (outer3_16.PREFERRED_LOCALE === key) {
                                              return outer3_50(newValue, (arg0) => {
                                                const lib = arg0;
                                                const availableLocales = lib(outer4_3[17]).getAvailableLocales();
                                                const found = availableLocales.find(() => { ... });
                                                let name = null;
                                                if (null != found) {
                                                  name = found.name;
                                                }
                                                return name;
                                              });
                                            } else {
                                              arr = outer3_16;
                                              if (outer3_16.VIDEO_QUALITY_MODE === key) {
                                                return outer3_50(newValue, (arg0) => {
                                                  if (arg0 === outer4_25.FULL) {
                                                    const intl2 = lib(outer4_3[17]).intl;
                                                    let stringResult = intl2.string(lib(outer4_3[17]).t["7jOoJE"]);
                                                  } else {
                                                    const intl = lib(outer4_3[17]).intl;
                                                    stringResult = intl.string(lib(outer4_3[17]).t.jjKYpu);
                                                  }
                                                  return stringResult;
                                                });
                                              } else {
                                                arr = outer3_16;
                                                if (outer3_16.SYSTEM_CHANNEL_FLAGS === key) {
                                                  return (function transformSystemChannelFlagsChanges(newValue) {
                                                    let closure_0 = newValue;
                                                    const obj = { [outer4_28.SUPPRESS_JOIN_NOTIFICATIONS]: outer4_16.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS, [outer4_28.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: outer4_16.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS, [outer4_28.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: outer4_16.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS, [outer4_28.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: outer4_16.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES };
                                                    const items = [];
                                                    const values = Object.values(outer4_28);
                                                    const item = values.forEach(() => { ... });
                                                    return items;
                                                  })(newValue);
                                                } else {
                                                  arr = outer3_16;
                                                  if (outer3_16.AUTO_MODERATION_ACTIONS === key) {
                                                    let tmp34 = newValue;
                                                    if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                      tmp34 = outer3_50(newValue, (arr) => arr.map(() => { ... }), (arr) => {
                                                        const mapped = arr.map(lib(outer4_3[28]).actionTypeToName);
                                                        return mapped.join(", ");
                                                      });
                                                    }
                                                    return tmp34;
                                                  } else {
                                                    arr = outer3_16;
                                                    if (outer3_16.AUTO_MODERATION_EVENT_TYPE === key) {
                                                      let tmp29 = newValue;
                                                      if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                        tmp29 = outer3_50(newValue, callback(outer3_3[28]).eventTypeToName);
                                                      }
                                                      return tmp29;
                                                    } else {
                                                      arr = outer3_16;
                                                      if (outer3_16.AUTO_MODERATION_TRIGGER_TYPE === key) {
                                                        let tmp24 = newValue;
                                                        if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                          tmp24 = outer3_50(newValue, callback(outer3_3[28]).triggerTypeToName);
                                                        }
                                                        return tmp24;
                                                      } else {
                                                        arr = outer3_16;
                                                        if (outer3_16.AUTO_MODERATION_TRIGGER_METADATA === key) {
                                                          let tmp21 = newValue;
                                                          if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                            tmp21 = outer3_50(newValue, (arg0) => {
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
                                                                  const intl = lib(outer4_3[17]).intl;
                                                                  const obj = {};
                                                                  const keyword_filter = joined.keyword_filter;
                                                                  const mapped = keyword_filter.map(() => { ... });
                                                                  joined = mapped.join(", ");
                                                                  obj.newValue = joined;
                                                                  json = intl.formatToMarkdownString(lib(outer4_3[17]).t.y91UXV, obj);
                                                                }
                                                              }
                                                              return tmp2;
                                                            });
                                                          }
                                                          return tmp21;
                                                        } else {
                                                          arr = outer3_16;
                                                          if (outer3_16.AUTO_MODERATION_ADD_KEYWORDS !== key) {
                                                            arr = outer3_16;
                                                            if (outer3_16.AUTO_MODERATION_REMOVE_KEYWORDS !== key) {
                                                              arr = outer3_16;
                                                              if (outer3_16.AUTO_MODERATION_ADD_REGEX_PATTERNS !== key) {
                                                                arr = outer3_16;
                                                                if (outer3_16.AUTO_MODERATION_REMOVE_REGEX_PATTERNS !== key) {
                                                                  arr = outer3_16;
                                                                  if (outer3_16.AUTO_MODERATION_ADD_ALLOW_LIST !== key) {
                                                                    arr = outer3_16;
                                                                    if (outer3_16.AUTO_MODERATION_REMOVE_ALLOW_LIST !== key) {
                                                                      arr = outer3_16;
                                                                      if (outer3_16.AUTO_MODERATION_EXEMPT_CHANNELS === key) {
                                                                        let tmp15 = newValue;
                                                                        if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                                          tmp15 = outer3_50(newValue, (arr) => {
                                                                            const mapped = arr.map(outer4_10.getChannel);
                                                                            const found = mapped.filter(() => { ... });
                                                                            return found.map(() => { ... });
                                                                          }, (join) => {
                                                                            if (null != join) {
                                                                              if (join.length > 0) {
                                                                                let joined = join.join(", ");
                                                                              }
                                                                              return joined;
                                                                            }
                                                                            const intl = lib(outer4_3[17]).intl;
                                                                            joined = intl.string(lib(outer4_3[17]).t["K/EdV8"]);
                                                                          });
                                                                        }
                                                                        return tmp15;
                                                                      } else {
                                                                        arr = outer3_16;
                                                                        if (outer3_16.AUTO_MODERATION_EXEMPT_ROLES === key) {
                                                                          let tmp12 = newValue;
                                                                          if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                                            tmp12 = outer3_50(newValue, (arr) => {
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
                                                                              const intl = lib(outer4_3[17]).intl;
                                                                              joined = intl.string(lib(outer4_3[17]).t["K/EdV8"]);
                                                                            });
                                                                          }
                                                                          return tmp12;
                                                                        } else {
                                                                          arr = outer3_16;
                                                                          if (outer3_16.ROLE_IDS === key) {
                                                                            let tmp9 = newValue;
                                                                            if (result3.targetType === outer3_17.INVITE) {
                                                                              tmp9 = outer3_50(newValue, (arr) => {
                                                                                const mapped = arr.map(() => { ... });
                                                                                const found = mapped.filter(() => { ... });
                                                                                return found.map(() => { ... });
                                                                              });
                                                                            }
                                                                            return tmp9;
                                                                          } else {
                                                                            arr = outer3_16;
                                                                            if (outer3_16.AVAILABLE_TAGS === key) {
                                                                              return outer3_49(newValue);
                                                                            } else if (outer3_16.APPLIED_TAGS === key) {
                                                                              return outer3_48(newValue, result3);
                                                                            } else {
                                                                              if (outer3_16.SCHEDULED_START_TIME !== key) {
                                                                                if (outer3_16.SCHEDULED_END_TIME !== key) {
                                                                                  return newValue;
                                                                                }
                                                                              }
                                                                              return outer3_50(newValue, (arg0) => {
                                                                                const obj = lib(outer4_3[29]);
                                                                                const tmp = items(outer4_3[30]);
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
                                                          if (result3.targetType === outer3_17.AUTO_MODERATION_RULE) {
                                                            tmp18 = outer3_50(newValue, (arr) => {
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
                                      ({ added: added2, removed: removed2 } = outer3_46(newValue.oldValue, newValue.newValue));
                                      if (added2.length > 0) {
                                        const prototype3 = outer3_9.prototype;
                                        const tmp71 = new outer3_9(newValue.key, null, added2);
                                        items4.push(tmp71);
                                      }
                                      if (removed2.length > 0) {
                                        const prototype4 = outer3_9.prototype;
                                        const tmp80 = new outer3_9(outer3_16.PERMISSIONS_RESET, removed2, removed2);
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
                arr = outer3_50;
                return outer3_50(newValue, (channelId) => outer4_10.getChannel(channelId), (channel) => lib(outer4_3[23]).computeChannelName(channel, outer4_13, outer4_12, true));
              }
            }
          })(newValue, result3, result3);
          if (Array.isArray(arr)) {
            let item = arr.forEach((arg0) => outer1_1.push(arg0));
          } else {
            arr = items.push(arr);
          }
        });
        result3 = result2.set("changes", items);
        tmp8 = result3;
      }
      items.push(tmp8);
    } else {
      let items1 = [outer1_15.MEMBER_PRUNE, outer1_15.MEMBER_DISCONNECT, outer1_15.MEMBER_MOVE, outer1_15.CREATOR_MONETIZATION_REQUEST_CREATED, outer1_15.CREATOR_MONETIZATION_TERMS_ACCEPTED];
    }
  });
  return items;
};
export { transformAppliedForumTagChange };
export { transformAvailableForumTagChange };
