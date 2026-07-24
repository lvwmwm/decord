// Module ID: 10530
// Function ID: 82132
// Name: recurseReplaceContentTree
// Dependencies: [5, 4167, 4153, 1352, 1857, 1348, 1838, 4177, 4349, 4217, 1849, 4146, 4033, 653, 1443, 4118, 664, 22, 6691, 4120, 4360, 10531, 4319, 1445, 8354, 507, 10525, 10510, 10532, 2]
// Exports: containsSameValues, getDeprecatedVoiceSettingsWithShortcut, getVoiceConnectionState, getVoiceSettingsWithShortcut, hasMessageReadPermission, isMatchingOrigin, processSocketThrottlers, transformApplicationRelationship, transformBaseRelationship, transformChannel, validateActivityInvite, validateApplication, validateOriginAndUpdateSocket, validatePostMessageTransport, validateSocketApplication

// Module 10530 (recurseReplaceContentTree)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { GUILD_VOCAL_CHANNEL_TYPES } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import importDefaultResult from "isOriginalContentTypeDifferent";
import importDefaultResult1 from "set";
import importDefaultResult2 from "set";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function recurseReplaceContentTree(type) {
  if ("customEmoji" === type.type) {
    type.type = "emoji";
  }
  if (tmp) {
    type.src = getRemoteIconURL(type.src);
  }
  if (Array.isArray(type.content)) {
    const content = type.content;
    type.content = content.map(recurseReplaceContentTree);
  }
  return type;
}
function getRemoteIconURL(icon) {
  let combined = icon;
  if (!obj.test(icon)) {
    const _location = location;
    const _location2 = location;
    let str = "/";
    if ("/" === icon.charAt(0)) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + "//" + host + str + icon;
  }
  return combined;
}
function validateOrigin(arg0) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return items.indexOf(arg0) > -1;
}
function transformInternalTextMessage(message) {
  let obj = importDefault(4120);
  obj = { channelId: message.channel_id };
  const mapped = obj.parseToAST(message.content, true, obj).map(recurseReplaceContentTree);
  let tmp2;
  channel = channel.getChannel(message.channel_id);
  if (null != message.author) {
    const prototype = ctor.prototype;
    tmp2 = new ctor(message.author);
  }
  let userAuthor;
  if (null != message.author) {
    userAuthor = require(4360) /* useNullableMessageAuthor */.getUserAuthor(tmp2, channel);
    const obj3 = require(4360) /* useNullableMessageAuthor */;
  }
  obj = { id: message.id, blocked: message.blocked, bot: message.bot, content: message.content };
  let tmp9;
  if (mapped.length) {
    tmp9 = mapped;
  }
  obj.content_parsed = tmp9;
  let nick;
  if (null != userAuthor) {
    nick = userAuthor.nick;
  }
  obj.nick = nick;
  let colorString;
  if (null != userAuthor) {
    colorString = userAuthor.colorString;
  }
  obj.author_color = colorString;
  obj.edited_timestamp = message.edited_timestamp || message.editedTimestamp;
  ({ timestamp: obj4.timestamp, tts: obj4.tts, mentions: obj4.mentions } = message);
  obj.mention_everyone = message.mention_everyone || message.mentionEveryone;
  obj.mention_roles = message.mention_roles || message.mentionRoles;
  ({ embeds: obj4.embeds, attachments: obj4.attachments } = message);
  let tmp12;
  if (null != tmp2) {
    tmp12 = importDefault(10531)(tmp2);
  }
  obj.author = tmp12;
  ({ pinned: obj4.pinned, type: obj4.type } = message);
  return obj;
}
function transformVoiceState(closure_2, id, userId) {
  let deaf;
  let mute;
  let selfDeaf;
  let selfMute;
  let suppress;
  userId = userId.userId;
  ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
  user = user.getUser(userId);
  if (null == user) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid user id: " + userId);
    throw error;
  } else {
    let obj = { nick: importDefault(4319).getName(closure_2, id, user), mute: store.isLocalMute(user.id), volume: store.getLocalVolume(user.id), pan: store.getLocalPan(user.id) };
    obj = { mute, deaf, self_mute: selfMute, self_deaf: selfDeaf, suppress };
    obj.voice_state = obj;
    obj.user = importDefault(10531)(user);
    return obj;
  }
}
function fetchApplicationRPC(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: closure_19.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => body.body, () => {
    let tmp = outer1_1(outer1_2[26]);
    tmp = new tmp({ closeCode: outer1_21.INVALID_CLIENTID }, "Invalid Client ID");
    throw tmp;
  });
}
function _validateSocketApplication() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _processSocketThrottlers() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ RPC_LOCAL_SCOPE: closure_15, TransportTypes: closure_16 } = RPC_SCOPE_CONFIG);
({ ActivityActionTypes: closure_17, ChannelTypes: closure_18, Endpoints: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, RPCCloseCodes: closure_21, RPCErrors: closure_22, RTCConnectionStates: closure_23 } = ME);
const toURLSafeResult = require("isOriginalContentTypeDifferent").toURLSafe(window.GLOBAL_ENV.API_ENDPOINT);
let host;
if (null != toURLSafeResult) {
  host = toURLSafeResult.host;
}
let str = "localhost";
if (null != host) {
  str = host;
}
let str2 = str.split(":")[0];
let tmp6 = str2;
if (str2.includes(".")) {
  const parts = str2.split(".");
  if (!obj2.test(parts[parts.length - 1])) {
    const substr = require("module_4294967294");
    str2 = substr.join(".");
  }
  tmp6 = str2;
  obj2 = /^\d+$/;
}
const escapeResult = require("set").escape("https://");
const regExp = new RegExp("^" + escapeResult + "(?:[a-z]+\\.)?(" + require("set").escape(tmp6) + "|discordapp.com|discord.com)$");
const MINUTE = require("set").Millis.MINUTE;
let obj = {};
const result = require("_callSuper").fileFinishedImporting("modules/rpc/RPCHelpers.tsx");

export const VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = 2;
export const VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = 60;
export const VALIDATE_SOCKET_PERIOD_MS = MINUTE;
export const VALIDATE_SOCKET_THROTTLERS = obj;
export { getRemoteIconURL };
export const containsSameValues = function containsSameValues(arg0, arg1) {
  const obj = importDefault(22);
  return obj.isEqual(arg0, importDefault(22).pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export const transformChannel = function transformChannel(channel, arg1) {
  let closure_0 = channel;
  let closure_1 = arg1;
  const items = [];
  const guildId = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    const promise = new Promise((arg0) => {
      const nSFW = arg0;
      outer1_11.whenReady(nSFW.id, () => callback());
      let obj = callback(table[18]);
      obj = { channelId: nSFW.id, limit: outer1_20 };
      const messages = obj.fetchMessages(obj);
    });
    items.push(promise);
  }
  return Promise.all(items).then(() => {
    if (!nSFW.isNSFW()) {
      if (closure_1) {
        const messages = outer1_11.getMessages(nSFW.id);
        const mapped = messages.toArray().map(outer1_30);
        const toArrayResult = messages.toArray();
      }
      const _Object = Object;
      const values = Object.values(outer1_14.getVoiceStatesForChannel(nSFW.id));
      const obj = {};
      ({ id: obj2.id, name: obj2.name, type: obj2.type, topic: obj2.topic, bitrate: obj2.bitrate, userLimit: obj2.user_limit } = nSFW);
      obj.guild_id = closure_2;
      obj.position = nSFW.position;
      obj.messages = [];
      obj.voice_states = values.map((arg0) => outer2_31(outer1_2, outer1_0.id, arg0));
      return obj;
    } else {
      const currentUser = outer1_13.getCurrentUser();
      let nsfwAllowed;
      if (null != currentUser) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
    }
  });
};
export { transformInternalTextMessage };
export { transformVoiceState };
export const transformBaseRelationship = function transformBaseRelationship(relationshipType, user) {
  let obj = { type: relationshipType, user: importDefault(10531)(user) };
  obj = { status: store2.getStatus(user.id, null), activity: null };
  obj.presence = obj;
  return obj;
};
export const transformApplicationRelationship = function transformApplicationRelationship(closure_0, id) {
  let tmp = closure_0;
  if (null != id) {
    let obj = {};
    const merged = Object.assign(closure_0);
    obj = {};
    const merged1 = Object.assign(closure_0.presence);
    const applicationActivity = store2.getApplicationActivity(closure_0.user.id, id);
    let tmp9 = null;
    if (null != applicationActivity) {
      tmp9 = applicationActivity;
    }
    obj["activity"] = tmp9;
    obj["presence"] = obj;
    tmp = obj;
  }
  return tmp;
};
export const isMatchingOrigin = function isMatchingOrigin(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const _window = window;
    if (str === origin) {
      return true;
    } else {
      const hostname = importDefault(1445).parse(str).hostname;
      const _window2 = window;
      let tmp2 = tmp18;
      if (window.location.hostname === hostname) {
        tmp2 = "localhost" === hostname;
      }
      let tmp3 = tmp2;
      if (!tmp2) {
        const tmp5 = null == str.match("staging");
        let tmp6 = tmp5;
        if (tmp5) {
          const tmp8 = !regExp.test(arg0);
          let tmp9 = tmp8;
          if (!tmp8) {
            tmp9 = !regExp.test(origin);
          }
          tmp6 = !tmp9;
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  }
};
export const hasMessageReadPermission = function hasMessageReadPermission(channel, id, scopes) {
  guild = guild.getGuild(channel.getGuildId());
  if (null != guild) {
    let application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  let tmp2 = application_id === id;
  if (!tmp2) {
    tmp2 = scopes.indexOf(require(8354) /* set */.OAuth2Scopes.MESSAGES_READ) > -1;
  }
  return tmp2;
};
export const getVoiceConnectionState = function getVoiceConnectionState(state) {
  if (constants5.RTC_CONNECTED !== state) {
    if (constants5.RTC_CONNECTING !== state) {
      if (constants5.RTC_DISCONNECTED !== state) {
        return state;
      }
    }
  }
  return state.replace(/^RTC_/, "VOICE_");
};
export const validateActivityInvite = function validateActivityInvite(arg0, id, join) {
  let tmp = arg0 === constants2.JOIN;
  if (tmp) {
    let tmp3 = null != id && null != id.id;
    if (tmp3) {
      tmp3 = null != join.join;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const validateSocketApplication = function validateSocketApplication(transport, arg1, arg2) {
  return _validateSocketApplication(...arguments);
};
export const processSocketThrottlers = function processSocketThrottlers(arg0, arg1, signal) {
  return _processSocketThrottlers(...arguments);
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(authorization, arg1) {
  if (null == arg1) {
    const items = [closure_15];
    authorization.authorization.scopes = items;
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(arg0) {
  function formatDevices(inputDevices) {
    const values = Object.values(inputDevices);
    const sorted = values.sort((index, index2) => index.index - index2.index);
    return sorted.map((id) => ({ id: id.id, name: id.name }));
  }
  const settings = store.getSettings();
  let obj = {};
  obj = { available_devices: formatDevices(store.getInputDevices()) };
  ({ inputDeviceId: obj2.device_id, inputVolume: obj2.volume } = settings);
  obj.input = obj;
  obj = { available_devices: formatDevices(store.getOutputDevices()), device_id: settings.outputDeviceId, volume: settings.outputVolume };
  obj.output = obj;
  obj.mode = { type: settings.mode, auto_threshold: settings.modeOptions.autoThreshold, threshold: settings.modeOptions.threshold, shortcut: arg0(settings), delay: settings.modeOptions.delay };
  ({ automaticGainControl: obj.automatic_gain_control, echoCancellation: obj.echo_cancellation, noiseSuppression: obj.noise_suppression, qos: obj.qos, silenceWarning: obj.silence_warning, deaf: obj.deaf, mute: obj.mute } = settings);
  return obj;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(guildId, arg1) {
  const settings = store.getSettings(guildId);
  let obj = {};
  obj = { type: settings.mode, shortcut: arg1(settings) };
  obj.input_mode = obj;
  obj.local_mutes = Object.keys(settings.localMutes);
  ({ localVolumes: obj.local_volumes, mute: obj.self_mute, deaf: obj.self_deaf } = settings);
  return obj;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    let tmp3 = importDefault(10525);
    const obj = { errorCode: constants4.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "command not available from \"" + transport + " transport");
    throw tmp3;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    let tmp3 = importDefault(10525);
    const obj = { errorCode: constants4.INVALID_COMMAND };
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "Invalid application");
    throw tmp3;
  } else {
    return application.id;
  }
};
