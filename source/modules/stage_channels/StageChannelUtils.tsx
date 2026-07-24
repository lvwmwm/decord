// Module ID: 7564
// Function ID: 60329
// Name: fillChunk
// Dependencies: [4202, 1353, 4947, 653, 7565, 22, 4319, 1212, 3763, 2]
// Exports: fillChunk, getParticipantNamesText, getRemoveModeratorTooltipHint, getStageChannelMetadata, summarizeUsernamesParticipating, summarizeUsernamesParticipatingWithSpeakerNickname

// Module 7564 (fillChunk)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { RequestToSpeakPermissionStates as closure_6 } from "MAX_STAGE_TOPIC_LENGTH";
import { Permissions } from "ME";
import { RowType } from "RowType";

let require = arg1;
const result = require("MAX_STAGE_TOPIC_LENGTH").fileFinishedImporting("modules/stage_channels/StageChannelUtils.tsx");

export const fillChunk = function fillChunk(arg0, arg1, arg2) {
  let tmp = arg1;
  const obj = require(22) /* apply */;
  if (null != arg2) {
    tmp = arg2;
  }
  require = tmp;
  return require(22) /* apply */.chunk(arg0, arg1).reduce((arg0, arg1) => {
    if (closure_0 <= arg1.length) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arg0, 0);
      items[arraySpreadResult] = arg1;
      const sum = arraySpreadResult + 1;
      return items;
    } else {
      const items1 = [];
      const _Array = Array;
      arraySpreadResult = HermesBuiltin.arraySpread(arg1, 0);
      const array = new Array(closure_0 - arg1.length);
      HermesBuiltin.arraySpread(array.fill(null), arraySpreadResult);
      const items2 = [];
      const arraySpreadResult2 = HermesBuiltin.arraySpread(arg0, 0);
      items2[arraySpreadResult2] = items1;
      const sum1 = arraySpreadResult2 + 1;
      return items2;
    }
  }, []);
};
export const summarizeUsernamesParticipating = function summarizeUsernamesParticipating(arg0, arg1, arg2, arg3) {
  let length = arg3;
  const first = arg1[0];
  let obj = importDefault(4319);
  const name = obj.getName(arg0, arg2, first);
  if (null == arg3) {
    length = arg1.length;
  }
  if (1 === length) {
    if (null != first) {
      return name;
    }
  }
  if (null == first) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { count: length };
    intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.chmM9N, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(require(1212) /* getSystemLocale */.t.GhkJ21, obj);
  }
};
export const summarizeUsernamesParticipatingWithSpeakerNickname = function summarizeUsernamesParticipatingWithSpeakerNickname(arg0, name) {
  let length = arg2;
  if (null == arg2) {
    length = arg0.length;
  }
  if (1 === length) {
    if (null != name) {
      return name;
    }
  }
  if (null == name) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { count: length };
    intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.chmM9N, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(require(1212) /* getSystemLocale */.t.GhkJ21, obj);
  }
};
export const getRemoveModeratorTooltipHint = function getRemoveModeratorTooltipHint(arg0, arg1) {
  if (RowType.OWNER === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.eTmN5a);
  } else {
    if (RowType.MEMBER !== arg0) {
      if (RowType.ROLE !== arg0) {
        if (RowType.EMPTY_STATE === arg0) {
          return null;
        } else {
          return null;
        }
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (arg1) {
      let stringResult = string(t.Hw3XWx);
    } else {
      stringResult = string(t.YieyPi);
    }
    return stringResult;
  }
};
export const getStageChannelMetadata = function getStageChannelMetadata(channel_id) {
  stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel_id.id);
  const obj = { channel_id: channel_id.id, guild_id: channel_id.guild_id };
  let topic;
  if (null != stageInstanceByChannel) {
    topic = stageInstanceByChannel.topic;
  }
  obj.topic = topic;
  obj.media_session_id = mediaSessionId.getMediaSessionId();
  obj.request_to_speak_state = importAll(3763).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, channel_id) ? closure_6.EVERYONE : closure_6.NO_ONE;
  let id;
  if (null != stageInstanceByChannel) {
    id = stageInstanceByChannel.id;
  }
  obj.stage_instance_id = id;
  return obj;
};
export const getParticipantNamesText = function getParticipantNamesText(channel, found) {
  const _require = channel;
  function getParticipantName(user) {
    return set(outer1_3[6]).getName(guildId.getGuildId(), guildId.id, user.user);
  }
  const set = new Set();
  found = found.filter((user) => {
    const id = user.user.id;
    let flag = !set.has(id);
    if (flag) {
      set.add(id);
      flag = true;
    }
    return flag;
  });
  if (0 === found.length) {
    const intl4 = _require(1212).intl;
    let stringResult = intl4.string(_require(1212).t.FUVhyC);
  } else if (1 === found.length) {
    const intl3 = _require(1212).intl;
    let obj = { a: getParticipantName(found[0]) };
    stringResult = intl3.formatToPlainString(_require(1212).t.EQwZlN, obj);
  } else if (2 === found.length) {
    const intl2 = _require(1212).intl;
    obj = { a: getParticipantName(found[0]), b: getParticipantName(found[1]) };
    stringResult = intl2.formatToPlainString(_require(1212).t.zBcKoA, obj);
  } else {
    const intl = _require(1212).intl;
    obj = { a: getParticipantName(found[0]), b: getParticipantName(found[1]), n: found.length - 2 };
    stringResult = intl.formatToPlainString(_require(1212).t["3AqFaG"], obj);
  }
  return stringResult;
};
