// Module ID: 6658
// Function ID: 58896
// Name: audienceAckRequestToSpeak
// Dependencies: [5, 1907, 4147, 653, 6659, 44, 4325, 6660, 507, 6664, 4315, 4956, 5049, 1882, 3764, 483, 4141, 6653, 6666, 2]
// Exports: editStage, endStage, inviteUserToStage, moveSelfToAudience, moveUserToAudience, removeUserFromChannel, setEveryoneRolePermissionAllowed, startStage, toggleRequestToSpeak

// Module 6658 (audienceAckRequestToSpeak)
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
  let obj = require(4315) /* getAudienceRequestToSpeakState */;
  const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(voiceStateForChannel);
  if (!c1) {
    let obj1 = require(4956) /* useIsStageSpeakingDisabledForCurrentUser */;
    if (obj1.shouldAgeVerifyToSpeakForCurrentUser()) {
      return Promise.resolve();
    }
  }
  if (!tmp8) {
    let obj2 = require(4325) /* _createForOfIteratorHelperLoose */;
    obj = {};
    const merged = Object.assign(require(6660) /* fillChunk */.getStageChannelMetadata(channel));
    obj2.trackWithMetadata(constants.PROMOTED_TO_SPEAKER, obj);
    const obj5 = require(6660) /* fillChunk */;
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
    let obj = require(4325) /* _createForOfIteratorHelperLoose */;
    obj = {};
    const merged = Object.assign(require(6660) /* fillChunk */.getStageChannelMetadata(closure_0));
    obj.trackWithMetadata(constants.REQUEST_TO_SPEAK_INITIATED, obj);
    const obj3 = require(6660) /* fillChunk */;
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
    importDefault(5049).setChannel(guildId, id.id, null);
    const obj = importDefault(5049);
  }
};
export const setEveryoneRolePermissionAllowed = function setEveryoneRolePermissionAllowed(stateFromStores, REQUEST_TO_SPEAK, arg2) {
  const guildId = stateFromStores.getGuildId();
  importDefault(44)(null != guildId, "Channel cannot be guildless");
  const obj = { id: guildId, type: require(1882) /* PermissionOverwriteType */.PermissionOverwriteType.ROLE, allow: importAll(3764).NONE, deny: importAll(3764).NONE };
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
  const result = importDefault(4141).updatePermissionOverwrite(stateFromStores.id, obj);
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
