// Module ID: 7474
// Function ID: 60014
// Name: fillChunk
// Dependencies: []
// Exports: fillChunk, getParticipantNamesText, getRemoveModeratorTooltipHint, getStageChannelMetadata, summarizeUsernamesParticipating, summarizeUsernamesParticipatingWithSpeakerNickname

// Module 7474 (fillChunk)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).RequestToSpeakPermissionStates;
const Permissions = arg1(dependencyMap[3]).Permissions;
const RowType = arg1(dependencyMap[4]).RowType;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/StageChannelUtils.tsx");

export const fillChunk = function fillChunk(arg0, arg1, arg2) {
  let tmp = arg1;
  const obj = arg1(dependencyMap[5]);
  if (null != arg2) {
    tmp = arg2;
  }
  arg1 = tmp;
  return arg1(dependencyMap[5]).chunk(arg0, arg1).reduce((arg0, arg1) => {
    if (tmp <= arg1.length) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arg0, 0);
      items[arraySpreadResult] = arg1;
      const sum = arraySpreadResult + 1;
      return items;
    } else {
      const items1 = [];
      const _Array = Array;
      arraySpreadResult = HermesBuiltin.arraySpread(arg1, 0);
      const array = new Array(tmp - arg1.length);
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
  let obj = importDefault(dependencyMap[6]);
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
    const intl2 = arg1(dependencyMap[7]).intl;
    obj = { count: length };
    intl2.formatToPlainString(arg1(dependencyMap[7]).t.chmM9N, obj);
  } else {
    const intl = arg1(dependencyMap[7]).intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(arg1(dependencyMap[7]).t.GhkJ21, obj);
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
    const intl2 = name(dependencyMap[7]).intl;
    let obj = { count: length };
    intl2.formatToPlainString(name(dependencyMap[7]).t.chmM9N, obj);
  } else {
    const intl = name(dependencyMap[7]).intl;
    obj = { name, count: length - 1 };
    intl.formatToPlainString(name(dependencyMap[7]).t.GhkJ21, obj);
  }
};
export const getRemoveModeratorTooltipHint = function getRemoveModeratorTooltipHint(arg0, arg1) {
  if (RowType.OWNER === arg0) {
    const intl3 = arg1(dependencyMap[7]).intl;
    return intl3.string(arg1(dependencyMap[7]).t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl2 = arg1(dependencyMap[7]).intl;
    return intl2.string(arg1(dependencyMap[7]).t.eTmN5a);
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
    const intl = arg1(dependencyMap[7]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[7]).t;
    if (arg1) {
      let stringResult = string(t.Hw3XWx);
    } else {
      stringResult = string(t.YieyPi);
    }
    return stringResult;
  }
};
export const getStageChannelMetadata = function getStageChannelMetadata(channel_id) {
  const stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel_id.id);
  const obj = { channel_id: channel_id.id, guild_id: channel_id.guild_id };
  let topic;
  if (null != stageInstanceByChannel) {
    topic = stageInstanceByChannel.topic;
  }
  obj.topic = topic;
  obj.media_session_id = mediaSessionId.getMediaSessionId();
  obj.request_to_speak_state = importAll(dependencyMap[8]).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, channel_id) ? closure_6.EVERYONE : closure_6.NO_ONE;
  let id;
  if (null != stageInstanceByChannel) {
    id = stageInstanceByChannel.id;
  }
  obj.stage_instance_id = id;
  return obj;
};
export const getParticipantNamesText = function getParticipantNamesText(channel, found) {
  found = channel;
  function getParticipantName(user) {
    return set(closure_3[6]).getName(user.getGuildId(), user.id, user.user);
  }
  const importDefault = new Set();
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
    const intl4 = found(dependencyMap[7]).intl;
    let stringResult = intl4.string(found(dependencyMap[7]).t.FUVhyC);
  } else if (1 === found.length) {
    const intl3 = found(dependencyMap[7]).intl;
    let obj = { a: getParticipantName(found[0]) };
    stringResult = intl3.formatToPlainString(found(dependencyMap[7]).t.EQwZlN, obj);
  } else if (2 === found.length) {
    const intl2 = found(dependencyMap[7]).intl;
    obj = { a: getParticipantName(found[0]), b: getParticipantName(found[1]) };
    stringResult = intl2.formatToPlainString(found(dependencyMap[7]).t.zBcKoA, obj);
  } else {
    const intl = found(dependencyMap[7]).intl;
    obj = { a: getParticipantName(found[0]), b: getParticipantName(found[1]), n: found.length - 2 };
    stringResult = intl.formatToPlainString(found(dependencyMap[7]).t.3AqFaG, obj);
  }
  return stringResult;
};
