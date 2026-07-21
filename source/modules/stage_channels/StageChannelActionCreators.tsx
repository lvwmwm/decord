// Module ID: 7476
// Function ID: 60002
// Name: audienceAckRequestToSpeak
// Dependencies: [131072, 451936256, 2, 5426, 5442, 5446, 5447, 7490, 7495, 7185, 7496, 5448, 7497, 5440, 5443, 5425, 7184, 7507, 5441, 7508]
// Exports: editStage, endStage, inviteUserToStage, moveSelfToAudience, moveUserToAudience, removeUserFromChannel, setEveryoneRolePermissionAllowed, startStage, toggleRequestToSpeak

// Module 7476 (audienceAckRequestToSpeak)
import result2 from "result2";
import context from "context";
import { SafetyToastType } from "FormArrow";
import FormSwitch from "FormSwitch";

function audienceAckRequestToSpeak(channel, suppress) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
  const voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(channel.id);
  let obj = suppress(dependencyMap[10]);
  const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!suppress) {
    let obj1 = suppress(dependencyMap[11]);
    if (obj1.shouldAgeVerifyToSpeakForCurrentUser()) {
      return Promise.resolve();
    }
  }
  if (!tmp8) {
    let obj2 = suppress(dependencyMap[6]);
    obj = {};
    const merged = Object.assign(suppress(dependencyMap[7]).getStageChannelMetadata(channel));
    obj2.trackWithMetadata(constants.PROMOTED_TO_SPEAKER, obj);
    const obj5 = suppress(dependencyMap[7]);
  }
  const HTTP = suppress(dependencyMap[8]).HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId) };
  obj1 = { suppress, request_to_speak_timestamp: null, channel_id: channel.id };
  if (flag) {
    obj2 = { silent: flag };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged1 = Object.assign(obj3);
  obj.body = obj1;
  obj1 = suppress(dependencyMap[8]);
  obj.rejectWithError = obj1.rejectWithMigratedError();
  HTTP.patch(obj);
}
function setUserSuppress(messageChannel, id, suppress) {
  const guildId = messageChannel.getGuildId();
  importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
  const HTTP = id(dependencyMap[8]).HTTP;
  let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id), body: obj };
  obj = { suppress, channel_id: messageChannel.id, rejectWithError: id(dependencyMap[8]).rejectWithMigratedError() };
  const obj3 = id(dependencyMap[8]);
  return HTTP.patch(obj).catch((code) => {
    if (code.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      callback(closure_3[9]).showFailedToast(constants2.GENERIC_ERROR);
      const obj = callback(closure_3[9]);
    }
    return code;
  });
}
async function _startStage(id, name, GUILD_ONLY, flag, arg4) {
  if ("" !== name) {
    if (voiceChannelId.getVoiceChannelId() !== id.id) {
      callback(closure_3[17]).connectToStage(id);
      const obj = callback(closure_3[17]);
    }
    const obj2 = callback(closure_3[18]);
    callback2(id, false, true);
    return yield obj2.startStageInstance(id.id, name, GUILD_ONLY, flag);
  }
}
async function _editStage(id, arg1, arg2, arg3) {
  if ("" !== arg1) {
    return yield callback(closure_3[18]).updateStageInstance(id.id, arg1, arg2);
  }
}
async function _endStage(id, arg1) {
  yield callback(closure_3[18]).endStageInstance(id.id);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ AbortCodes: closure_7, AnalyticEvents: closure_8, Endpoints: closure_9 } = context);
const result = FormSwitch.fileFinishedImporting("modules/stage_channels/StageChannelActionCreators.tsx");

export const toggleRequestToSpeak = function toggleRequestToSpeak(getGuildId, arg1) {
  const guildId = getGuildId.getGuildId();
  importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
  if (arg1) {
    let obj = arg1(dependencyMap[6]);
    obj = {};
    const merged = Object.assign(arg1(dependencyMap[7]).getStageChannelMetadata(getGuildId));
    obj.trackWithMetadata(constants.REQUEST_TO_SPEAK_INITIATED, obj);
    const obj3 = arg1(dependencyMap[7]);
  }
  const HTTP = arg1(dependencyMap[8]).HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId) };
  const obj1 = {};
  let toISOStringResult = null;
  if (arg1) {
    const _Date = Date;
    const date = new Date();
    toISOStringResult = date.toISOString();
  }
  obj1.request_to_speak_timestamp = toISOStringResult;
  obj1.channel_id = getGuildId.id;
  obj.body = obj1;
  obj.rejectWithError = arg1(dependencyMap[8]).rejectWithMigratedError();
  return HTTP.patch(obj);
};
export const inviteUserToStage = function inviteUserToStage(voiceChannel, id) {
  const guildId = voiceChannel.getGuildId();
  importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
  const HTTP = id(dependencyMap[8]).HTTP;
  let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id) };
  obj = { suppress: false, request_to_speak_timestamp: new Date().toISOString(), channel_id: voiceChannel.id };
  obj.body = obj;
  const date = new Date();
  obj.rejectWithError = id(dependencyMap[8]).rejectWithMigratedError();
  const obj4 = id(dependencyMap[8]);
  return HTTP.patch(obj).catch((code) => {
    if (code.code === constants.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      callback(closure_3[9]).showFailedToast(constants2.GENERIC_ERROR);
      const obj = callback(closure_3[9]);
    }
    return code;
  });
};
export { audienceAckRequestToSpeak };
export const moveSelfToAudience = function moveSelfToAudience(channel_id) {
  let guildId;
  if (null != channel_id) {
    guildId = channel_id.getGuildId();
  }
  importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
  const HTTP = arg1(dependencyMap[8]).HTTP;
  const obj = { url: closure_9.UPDATE_VOICE_STATE(guildId), body: { channel_id: channel_id.id }, rejectWithError: arg1(dependencyMap[8]).rejectWithMigratedError() };
  return HTTP.patch(obj);
};
export { setUserSuppress };
export const moveUserToAudience = function moveUserToAudience(user, voiceChannel) {
  if (null != voiceChannel) {
    if (null != user) {
      const guildId = voiceChannel.getGuildId();
      importDefault(dependencyMap[5])(null != guildId, "This channel cannot be guildless.");
      setUserSuppress(voiceChannel, user.id, true);
      const HTTP = voiceChannel(dependencyMap[8]).HTTP;
      let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, user.id) };
      obj = { channel_id: voiceChannel.id };
      obj.body = obj;
      obj.rejectWithError = voiceChannel(dependencyMap[8]).rejectWithMigratedError();
      return HTTP.patch(obj);
    }
  }
};
export const removeUserFromChannel = function removeUserFromChannel(id, getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  if (tmp2) {
    importDefault(dependencyMap[12]).setChannel(guildId, id.id, null);
    const obj = importDefault(dependencyMap[12]);
  }
};
export const setEveryoneRolePermissionAllowed = function setEveryoneRolePermissionAllowed(stateFromStores, REQUEST_TO_SPEAK, arg2) {
  const guildId = stateFromStores.getGuildId();
  importDefault(dependencyMap[5])(null != guildId, "Channel cannot be guildless");
  const obj = { id: guildId, type: REQUEST_TO_SPEAK(dependencyMap[13]).PermissionOverwriteType.ROLE, allow: importAll(dependencyMap[14]).NONE, deny: importAll(dependencyMap[14]).NONE };
  const merged = Object.assign(stateFromStores.permissionOverwrites[guildId]);
  const obj2 = importAll(dependencyMap[15]);
  if (arg2) {
    obj.allow = obj2.add(obj.allow, REQUEST_TO_SPEAK);
    let tmp4Result = tmp4(tmp5[15]);
    obj.deny = tmp4Result.remove(obj.deny, REQUEST_TO_SPEAK);
  } else {
    obj.allow = obj2.remove(obj.allow, REQUEST_TO_SPEAK);
    tmp4Result = tmp4(tmp5[15]);
    obj.deny = tmp4Result.add(obj.deny, REQUEST_TO_SPEAK);
  }
  const result = importDefault(dependencyMap[16]).updatePermissionOverwrite(stateFromStores.id, obj);
};
export const startStage = function startStage(arg0, arg1, GUILD_ONLY, arg3) {
  return _startStage(...arguments);
};
export const editStage = function editStage(arg0, arg1, GUILD_ONLY) {
  return _editStage(...arguments);
};
export const endStage = function endStage(channel) {
  return _endStage(...arguments);
};
