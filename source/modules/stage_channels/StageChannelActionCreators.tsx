// Module ID: 7482
// Function ID: 60059
// Name: audienceAckRequestToSpeak
// Dependencies: [5, 1906, 4146, 653, 7483, 44, 4324, 7484, 507, 7488, 4314, 4955, 5048, 1881, 3763, 483, 4140, 7477, 7490, 2]
// Exports: editStage, endStage, inviteUserToStage, moveSelfToAudience, moveUserToAudience, removeUserFromChannel, setEveryoneRolePermissionAllowed, startStage, toggleRequestToSpeak

// Module 7482 (audienceAckRequestToSpeak)
import invariant from "invariant";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { SafetyToastType } from "SafetyToastType";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function audienceAckRequestToSpeak(channel, c1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  importDefault(44)(null != guildId, "This channel cannot be guildless.");
  voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(channel.id);
  let obj = require(4314) /* getAudienceRequestToSpeakState */;
  const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!c1) {
    let obj1 = require(4955) /* useIsStageSpeakingDisabledForCurrentUser */;
    if (obj1.shouldAgeVerifyToSpeakForCurrentUser()) {
      return Promise.resolve();
    }
  }
  if (!tmp8) {
    let obj2 = require(4324) /* _createForOfIteratorHelperLoose */;
    obj = {};
    const merged = Object.assign(require(7484) /* fillChunk */.getStageChannelMetadata(channel));
    obj2.trackWithMetadata(constants.PROMOTED_TO_SPEAKER, obj);
    const obj5 = require(7484) /* fillChunk */;
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId) };
  obj1 = { suppress: c1, request_to_speak_timestamp: null, channel_id: channel.id };
  if (flag) {
    obj2 = { silent: flag };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged1 = Object.assign(obj3);
  obj.body = obj1;
  obj1 = require(507) /* _isNativeReflectConstruct */;
  obj.rejectWithError = obj1.rejectWithMigratedError();
  HTTP.patch(obj);
}
function setUserSuppress(closure_0, id, suppress) {
  const guildId = closure_0.getGuildId();
  importDefault(44)(null != guildId, "This channel cannot be guildless.");
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id), body: obj };
  obj = { suppress, channel_id: closure_0.id, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const obj3 = require(507) /* _isNativeReflectConstruct */;
  return HTTP.patch(obj).catch((code) => {
    if (code.code === outer1_7.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      outer1_1(outer1_3[9]).showFailedToast(outer1_10.GENERIC_ERROR);
      const obj = outer1_1(outer1_3[9]);
    }
    return code;
  });
}
async function _startStage(arg0, arg1, arg2, arg3, arg4) {
  if ("" !== arg1) {
    if (outer2_5.getVoiceChannelId() !== arg0.id) {
      outer2_0(outer2_3[17]).connectToStage(arg0);
      const obj = outer2_0(outer2_3[17]);
    }
    const obj2 = outer2_0(outer2_3[18]);
    outer2_11(arg0, false, true);
    return yield obj2.startStageInstance(arg0.id, arg1, arg2, arg3);
  }
}
async function _editStage(arg0, arg1, arg2, arg3) {
  if ("" !== arg1) {
    return yield outer2_0(outer2_3[18]).updateStageInstance(arg0.id, arg1, arg2);
  }
}
async function _endStage(arg0, arg1) {
  yield outer2_0(outer2_3[18]).endStageInstance(arg0.id);
}
({ AbortCodes: closure_7, AnalyticEvents: closure_8, Endpoints: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageChannelActionCreators.tsx");

export const toggleRequestToSpeak = function toggleRequestToSpeak(closure_0, arg1) {
  const guildId = closure_0.getGuildId();
  importDefault(44)(null != guildId, "This channel cannot be guildless.");
  if (arg1) {
    let obj = require(4324) /* _createForOfIteratorHelperLoose */;
    obj = {};
    const merged = Object.assign(require(7484) /* fillChunk */.getStageChannelMetadata(closure_0));
    obj.trackWithMetadata(constants.REQUEST_TO_SPEAK_INITIATED, obj);
    const obj3 = require(7484) /* fillChunk */;
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_9.UPDATE_VOICE_STATE(guildId) };
  const obj1 = {};
  let toISOStringResult = null;
  if (arg1) {
    const _Date = Date;
    const date = new Date();
    toISOStringResult = date.toISOString();
  }
  obj1.request_to_speak_timestamp = toISOStringResult;
  obj1.channel_id = closure_0.id;
  obj.body = obj1;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  return HTTP.patch(obj);
};
export const inviteUserToStage = function inviteUserToStage(voiceChannel, id) {
  const guildId = voiceChannel.getGuildId();
  importDefault(44)(null != guildId, "This channel cannot be guildless.");
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, id) };
  obj = { suppress: false, request_to_speak_timestamp: new Date().toISOString(), channel_id: voiceChannel.id };
  obj.body = obj;
  const date = new Date();
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  const obj4 = require(507) /* _isNativeReflectConstruct */;
  return HTTP.patch(obj).catch((code) => {
    if (code.code === outer1_7.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK) {
      outer1_1(outer1_3[9]).showFailedToast(outer1_10.GENERIC_ERROR);
      const obj = outer1_1(outer1_3[9]);
    }
    return code;
  });
};
export { audienceAckRequestToSpeak };
export const moveSelfToAudience = function moveSelfToAudience(getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  importDefault(44)(null != guildId, "This channel cannot be guildless.");
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId) };
  obj = { suppress: true, channel_id: getGuildId.id, self_video: false, self_stream: false };
  obj.body = obj;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  return HTTP.patch(obj);
};
export { setUserSuppress };
export const moveUserToAudience = function moveUserToAudience(user, voiceChannel) {
  if (null != voiceChannel) {
    if (null != user) {
      const guildId = voiceChannel.getGuildId();
      importDefault(44)(null != guildId, "This channel cannot be guildless.");
      setUserSuppress(voiceChannel, user.id, true);
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      let obj = { url: closure_9.UPDATE_VOICE_STATE(guildId, user.id) };
      obj = { suppress: true, channel_id: voiceChannel.id, self_video: false, self_stream: false };
      obj.body = obj;
      obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
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
    importDefault(5048).setChannel(guildId, id.id, null);
    const obj = importDefault(5048);
  }
};
export const setEveryoneRolePermissionAllowed = function setEveryoneRolePermissionAllowed(stateFromStores, REQUEST_TO_SPEAK, arg2) {
  const guildId = stateFromStores.getGuildId();
  importDefault(44)(null != guildId, "Channel cannot be guildless");
  const obj = { id: guildId, type: require(1881) /* PermissionOverwriteType */.PermissionOverwriteType.ROLE, allow: importAll(3763).NONE, deny: importAll(3763).NONE };
  const merged = Object.assign(stateFromStores.permissionOverwrites[guildId]);
  const obj2 = importAll(483);
  if (arg2) {
    obj.allow = obj2.add(obj.allow, REQUEST_TO_SPEAK);
    let tmp4Result = tmp4(483);
    obj.deny = tmp4Result.remove(obj.deny, REQUEST_TO_SPEAK);
  } else {
    obj.allow = obj2.remove(obj.allow, REQUEST_TO_SPEAK);
    tmp4Result = tmp4(483);
    obj.deny = tmp4Result.add(obj.deny, REQUEST_TO_SPEAK);
  }
  const result = importDefault(4140).updatePermissionOverwrite(stateFromStores.id, obj);
};
export const startStage = function startStage(outer2_0, outer2_2, GUILD_ONLY, arg3) {
  return _startStage(...arguments);
};
export const editStage = function editStage(outer2_0, outer2_2, GUILD_ONLY) {
  return _editStage(...arguments);
};
export const endStage = function endStage(channel) {
  return _endStage(...arguments);
};
