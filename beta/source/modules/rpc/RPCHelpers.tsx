// Module ID: 11335
// Function ID: 11336
// Name: RPCHelpers
// Dependencies: [5, 5540, 2024, 2072, 2090, 2014, 5532, 5207, 1392, 5212, 5895, 1087, 1386, 5176, 1104, 12, 9168, 7445, 11336, 5509, 9167, 1389, 8731, 1297, 9169, 6299, 11338, 2]
// Exports: containsSameValues, getDeprecatedVoiceSettingsWithShortcut, getVoiceConnectionState, getVoiceSettingsWithShortcut, hasMessageReadPermission, isMatchingOrigin, processSocketThrottlers, transformApplicationRelationship, transformBaseRelationship, transformBigFlag, transformChannel, transformGuildMember, transformRole, transformVoiceState, validateActivityInvite, validateApplication, validateOriginAndUpdateSocket, validatePostMessageTransport, validateSocketApplication

// Module 11335 (RPCHelpers)
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1104 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import urlParseDefault from "urlParse" /* 1389 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5509 */;
import getURLForApplicationDefault from "getURLForApplication" /* 6299 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7445 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8731 */;
import transformUserDefault from "transformUser" /* 9167 */;
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 9168 */;
import RPCErrorDefault from "RPCError" /* 9169 */;
import transformMessage from "transformMessage" /* 11336 */;
import LeakyBucketDefault from "LeakyBucket" /* 11338 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
import ApplicationRecord from "ApplicationRecord" /* 2024 */;
import GuildStore from "GuildStore" /* 2090 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import MessageStore from "MessageStore" /* 5532 */;
import PresenceStore from "PresenceStore" /* 5207 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceStateStore from "VoiceStateStore" /* 5212 */;
import Constants_mod from "Constants" /* 5895 */;
import Constants_mod2 from "Constants" /* 1087 */;
import URLUtils from "URLUtils" /* 1386 */;
import RegexUtils_mod from "RegexUtils" /* 5176 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, createFromServer, rpc_origins, set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
function validateOrigin(arg0) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  return items.indexOf(arg0) > -1;
}
function fetchApplicationRPC(arg0) {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: closure_17.APPLICATION_RPC(arg0), oldFormErrors: true, retries: 3, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => body.body, () => {
    obj = { closeCode: constants.INVALID_CLIENTID };
    const tmp = new RPCErrorDefault(obj, "Invalid Client ID");
    throw tmp;
  });
}
let obj = function _validateSocketApplication() {
  let application;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    const transport = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (c8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let id;
          let name;
          let icon;
          let coverImage;
          let flags;
          let parentId;
          let bot;
          let embeddedSurfaces;
          let application2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              rpc_origins = undefined;
              closure_5 = undefined;
              user = undefined;
              id = undefined;
              name = undefined;
              icon = undefined;
              coverImage = undefined;
              flags = undefined;
              parentId = undefined;
              bot = undefined;
              embeddedSurfaces = undefined;
              application2 = application.getApplication(closure_1);
              const tmp75 = transport;
              if (typeof closure_2 === "string") {
                if (tmp75.transport === constants.POST_MESSAGE) {
                  const tmp18 = getURLForApplicationDefault(closure_1);
                  if (null != tmp18) {
                    const items = [tmp18];
                  }
                  const self3 = this;
                  const self4 = this;
                  const obj4 = { closeCode: constants2.INVALID_ORIGIN };
                  const tmp62 = new RPCErrorDefault(obj4, "Invalid Origin");
                  throw tmp62;
                } else {
                  c7 = 1;
                  c8 = 1;
                  const obj5 = { value: fetchApplicationRPC(closure_1), done: false };
                  return obj5;
                }
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                rpc_origins = value;
                application2 = closure_133_5.createFromServer(rpc_origins);
                if (!closure_133_25(closure_2, rpc_origins.rpc_origins)) {
                  const self = this;
                  const self2 = this;
                  const obj7 = { closeCode: closure_133_19.INVALID_ORIGIN };
                  const tmp13 = new closure_133_1(closure_133_2[24])(obj7, "Invalid Origin");
                  throw tmp13;
                }
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              application2 = createFromServer(value);
            }
            user = application2;
            id = user.id;
            name = user.name;
            icon = user.icon;
            coverImage = user.coverImage;
            flags = user.flags;
            parentId = user.parentId;
            bot = user.bot;
            embeddedSurfaces = user.embeddedSurfaces;
            const obj8 = { id, parentId, name, icon, coverImage, flags, bot, embeddedSurfaces };
            transport.application = obj8;
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
          closure_5 = transport.transport === closure_133_14.POST_MESSAGE && !closure_133_4.isHydrated(closure_1);
          const tmp24 = transport.transport === closure_133_14.POST_MESSAGE && !closure_133_4.isHydrated(closure_1);
          const tmp32 = null == application2 || closure_5;
          if (tmp32) {
            rpc_origins = closure_133_5;
            createFromServer = closure_133_5.createFromServer;
            c7 = 2;
            c8 = 1;
            const obj9 = { value: closure_133_26(closure_1), done: false };
            return obj9;
          }
        } catch (tmp64) {
          c8 = 3;
          throw tmp64;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _processSocketThrottlers() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let closure_1;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            let obj3 = closure_2_24[closure_0];
            const tmp28 = closure_2;
            if (null == obj3) {
              let num5 = 60;
              if (tmp27) {
                num5 = 2;
              }
              const self3 = this;
              const self4 = this;
              const tmp17 = new LeakyBucketDefault(num5, MINUTE);
              tmp29[tmp26] = tmp17;
              obj3 = tmp17;
            }
            c6 = 1;
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj3.process(tmp28), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          c6 = 0;
          const obj6 = { closeCode: closure_131_19.CLOSE_ABNORMAL };
          const self = this;
          const self2 = this;
          const tmp11 = new closure_131_1(closure_131_2[24])(obj6, "Socket closed during throttle");
          throw tmp11;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        let closure_5 = tmp19;
        if (0 === c6) {
          c7 = 3;
          throw tmp19;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const GUILD_VOCAL_CHANNEL_TYPES = ChannelRecord.GUILD_VOCAL_CHANNEL_TYPES;
let Constants = Constants_mod2;
({ RPC_LOCAL_SCOPE: map1, TransportTypes: closure_14 } = Constants);
Constants = Constants_mod2;
({ ActivityActionTypes: closure_15, ChannelTypes: closure_16, Endpoints: closure_17, MAX_MESSAGES_PER_CHANNEL: closure_18, RPCCloseCodes: closure_19, RPCErrors: closure_20, RTCConnectionStates: closure_21 } = Constants);
const toURLSafeResult = URLUtils.toURLSafe(window.GLOBAL_ENV.API_ENDPOINT);
let str;
if (toURLSafeResult != null) {
  str = toURLSafeResult.host;
}
if (str == null) {
  str = "localhost";
}
let str2 = str.split(":")[0];
let tmp5 = str2;
if (str2.includes(".")) {
  const parts = str2.split(".");
  let num = 1;
  let obj2 = /^\d+$/;
  if (!obj2.test(parts[parts.length - 1])) {
    const substr = parts.slice(-2);
    str2 = substr.join(".");
  }
  tmp5 = str2;
}
function transformBigFlag(permissions) {
  let str = permissions;
  if (typeof permissions !== "bigint") {
    str = permissions.toString();
  }
  return str;
}
function transformVoiceState(arg0, id, userId) {
  let deaf;
  let mute;
  let obj2;
  let selfDeaf;
  let selfMute;
  let suppress;
  userId = userId.userId;
  ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
  const user = UserStore.getUser(userId);
  if (null == user) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid user id: " + userId);
    throw error;
  } else {
    obj = { nick: obj2.getName(arg0, id, user), mute: MediaEngineStore.isLocalMute(user.id), volume: MediaEngineStore.getLocalVolume(user.id), pan: MediaEngineStore.getLocalPan(user.id), voice_state: obj3, user: transformUserDefault(user) };
    obj2 = NicknameUtilsDefault;
    return obj;
  }
}
let RegexUtils = RegexUtils_mod;
const escapeResult = RegexUtils.escape("https://");
RegexUtils = RegexUtils_mod;
const regExp = new RegExp("^" + escapeResult + "(?:[a-z]+\\.)?(" + RegexUtils.escape(tmp5) + "|discordapp.com|discord.com)$");
const MINUTE = DurationsDefault.Millis.MINUTE;
obj = {};
const result = size.fileFinishedImporting("modules/rpc/RPCHelpers.tsx");

export const VALIDATE_SOCKET_CALLS_PER_PERIOD_LOW = 2;
export const VALIDATE_SOCKET_CALLS_PER_PERIOD_HIGH = 60;
export const VALIDATE_SOCKET_PERIOD_MS = MINUTE;
export const VALIDATE_SOCKET_THROTTLERS = obj;
export const containsSameValues = function containsSameValues(arg0, arg1) {
  const isEqual = _modDef12.isEqual;
  _modDef12;
  obj = _modDef12;
  return isEqual(arg0, obj.pick(arg1, Object.keys(arg0)));
};
export { validateOrigin };
export { transformBigFlag };
export const transformRole = function transformRole(id) {
  let colors;
  let permissions;
  let str;
  obj = { id: id.id, name: id.name, color: id.color, colors, hoist: null, position: null, permissions: str, managed: null, mentionable: null, icon: null, unicode_emoji: null, tags: null, flags: null };
  colors = id.colors;
  if (colors == null) {
    colors = { primary_color: id.color, secondary_color: null, tertiary_color: null };
    const obj2 = { primary_color: id.color, secondary_color: null, tertiary_color: null };
  }
  ({ hoist: obj.hoist, position: obj.position, permissions } = id);
  str = permissions;
  if (typeof permissions !== "bigint") {
    str = permissions.toString();
  }
  ({ managed: obj.managed, mentionable: obj.mentionable, icon: obj.icon, unicodeEmoji: obj.unicode_emoji, tags: obj.tags, flags: obj.flags } = id);
  return obj;
};
export const transformGuildMember = function transformGuildMember(userId) {
  let avatar;
  let banner;
  let flag;
  let joinedAt;
  let nick;
  let num;
  let premiumSince;
  let prop;
  obj = { user_id: userId.userId, guild_id: userId.guildId, nick, avatar, avatar_decoration_data: transformAvatarDecorationDefault(userId.avatarDecoration), banner, roles: null, joined_at: joinedAt, premium_since: premiumSince, communication_disabled_until: prop, pending: flag, flags: num };
  nick = userId.nick;
  if (nick == null) {
    nick = null;
  }
  avatar = userId.avatar;
  if (avatar == null) {
    avatar = null;
  }
  banner = userId.banner;
  if (banner == null) {
    banner = null;
  }
  ({ roles: obj.roles, joinedAt } = userId);
  if (joinedAt == null) {
    joinedAt = null;
  }
  premiumSince = userId.premiumSince;
  if (premiumSince == null) {
    premiumSince = null;
  }
  prop = userId.communicationDisabledUntil;
  if (prop == null) {
    prop = null;
  }
  flag = userId.isPending;
  if (flag == null) {
    flag = false;
  }
  num = userId.flags;
  if (num == null) {
    num = 0;
  }
  return obj;
};
export const transformChannel = function transformChannel(channel, result) {
  let closure_1 = result;
  const items = [];
  const guild_id = channel.getGuildId();
  const items1 = [constants3.GUILD_CATEGORY, ...GUILD_VOCAL_CHANNEL_TYPES];
  if (!items1.includes(channel.type)) {
    let tmp = globalThis;
    let self = this;
    let self2 = this;
    const push = items.push;
    const promise = new Promise((arg0) => {
      channel = arg0;
      MessageStore.whenReady(channel.id, () => closure_0());
      obj = MessageActionCreatorsDefault;
      const obj2 = { channelId: channel.id, limit };
      const messages = obj.fetchMessages(obj2);
    });
    push(promise);
  }
  const allPromises = Promise.all(items);
  return allPromises.then(() => {
    let tmp = channel;
    if (!channel.isNSFW()) {
      const tmp6 = importDefault;
      if (tmp6) {
        const messages = MessageStore.getMessages(tmp.id);
        const toArrayResult = messages.toArray();
        const mapped = toArrayResult.map(transformMessage.transformMessageRecord);
      }
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(tmp.id));
      obj = {
        id: null,
        name: null,
        type: null,
        topic: null,
        bitrate: null,
        user_limit: null,
        guild_id,
        position: tmp.position,
        messages: [],
        voice_states: values.map(function(userId) {
            let deaf;
            let mute;
            let obj2;
            let selfDeaf;
            let selfMute;
            let suppress;
            userId = userId.userId;
            id = id.id;
            ({ mute, deaf, selfMute, selfDeaf, suppress } = userId);
            user = user.getUser(userId);
            const tmp = closure_1_2;
            if (null == user) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Invalid user id: " + userId);
              throw error;
            } else {
              obj = { nick: obj2.getName(tmp, id, user), mute: MediaEngineStore.isLocalMute(user.id), volume: MediaEngineStore.getLocalVolume(user.id), pan: MediaEngineStore.getLocalPan(user.id), voice_state: obj3, user: require("transformUser")(user) };
              obj2 = require("NicknameUtils");
              return obj;
            }
          })
      };
      ({ id: obj2.id, name: obj2.name, type: obj2.type, topic: obj2.topic, bitrate: obj2.bitrate, userLimit: obj2.user_limit } = tmp);
      return obj;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
    }
  });
};
export { transformVoiceState };
export const transformBaseRelationship = function transformBaseRelationship(relationshipType, user) {
  obj = { type: relationshipType, user: transformUserDefault(user), presence: { status: PresenceStore.getStatus(user.id, null), activity: null } };
  ({ status: PresenceStore.getStatus(user.id, null), activity: null });
  return obj;
};
export const transformApplicationRelationship = function transformApplicationRelationship(presence, id) {
  let applicationActivity;
  let obj2;
  let tmp = presence;
  if (null != id) {
    obj = { presence: obj2 };
    const merged = Object.assign(presence);
    obj2 = { activity: applicationActivity };
    const merged1 = Object.assign(presence.presence);
    applicationActivity = PresenceStore.getApplicationActivity(presence.user.id, id);
    if (applicationActivity == null) {
      applicationActivity = null;
    }
    tmp = obj;
  }
  return tmp;
};
export const isMatchingOrigin = function isMatchingOrigin(str) {
  if (null == str) {
    return false;
  } else {
    const _window2 = window;
    if (str === origin) {
      return true;
    } else {
      try {
        obj = urlParseDefault;
        const hostname = obj.parse(str).hostname;
        const _window = window;
        let tmp4 = window.location.hostname === hostname && "localhost" === hostname;
        if (!tmp4) {
          let tmp6 = null == str.match("staging");
          if (tmp6) {
            const isMatch = regExp.test(str);
            let tmp8 = !isMatch;
            const obj2 = regExp;
            if (!tmp8) {
              tmp8 = !obj2.test(origin);
            }
            tmp6 = !tmp8;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      } catch (err) {
        return false;
      }
    }
  }
};
export const hasMessageReadPermission = function hasMessageReadPermission(channel, id, scopes) {
  let application_id;
  const guild = GuildStore.getGuild(channel.getGuildId());
  if (null != guild) {
    application_id = guild.application_id;
  } else {
    application_id = channel.getApplicationId();
  }
  const hasItem = application_id === id || scopes.has(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ);
  return hasItem;
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
    tmp = null != id && null != id.id && null != join.join;
    const tmp4 = null != id && null != id.id && null != join.join;
  }
  return tmp;
};
export const validateSocketApplication = function validateSocketApplication() {
  return obj(...arguments);
};
export const processSocketThrottlers = function processSocketThrottlers() {
  return obj(...arguments);
};
export const validateOriginAndUpdateSocket = function validateOriginAndUpdateSocket(authorization, arg1) {
  if (null == arg1) {
    const _Set = Set;
    const items = [map1];
    const self = this;
    const self2 = this;
    authorization = authorization.authorization;
    authorization.scopes = new Set(items);
    set = new Set(items);
  }
};
export const getDeprecatedVoiceSettingsWithShortcut = function getDeprecatedVoiceSettingsWithShortcut(fn) {
  let obj3;
  let obj5;
  let sorted;
  let sorted1;
  let tmp2;
  const f145346 = (index, index2) => index.index - index2.index;
  const f145347 = (id) => ({ id: id.id, name: id.name });
  const settings = MediaEngineStore.getSettings();
  obj = { input: obj3, output: obj5, mode: { type: settings.mode, auto_threshold: settings.modeOptions.autoThreshold, threshold: settings.modeOptions.threshold, shortcut: tmp2, delay: settings.modeOptions.delay }, automatic_gain_control: null, echo_cancellation: null, noise_suppression: null, qos: null, silence_warning: null, deaf: null, mute: null };
  obj3 = { available_devices: sorted.map(f145347), device_id: null, volume: null };
  tmp2 = fn(settings);
  const values = Object.values(MediaEngineStore.getInputDevices());
  sorted = values.sort(f145346);
  ({ inputDeviceId: obj2.device_id, inputVolume: obj2.volume } = settings);
  obj5 = { available_devices: sorted1.map(f145347), device_id: null, volume: null };
  const values2 = Object.values(MediaEngineStore.getOutputDevices());
  sorted1 = values2.sort(f145346);
  ({ outputDeviceId: obj4.device_id, outputVolume: obj4.volume } = settings);
  ({ automaticGainControl: obj.automatic_gain_control, echoCancellation: obj.echo_cancellation, noiseSuppression: obj.noise_suppression, qos: obj.qos, silenceWarning: obj.silence_warning, deaf: obj.deaf, mute: obj.mute } = settings);
  return obj;
};
export const getVoiceSettingsWithShortcut = function getVoiceSettingsWithShortcut(arg0, fn) {
  const settings = MediaEngineStore.getSettings(arg0);
  obj = { input_mode: { type: settings.mode, shortcut: fn(settings) }, local_mutes: Object.keys(settings.localMutes), local_volumes: null, self_mute: null, self_deaf: null };
  ({ type: settings.mode, shortcut: fn(settings) });
  ({ localVolumes: obj.local_volumes, mute: obj.self_mute, deaf: obj.self_deaf } = settings);
  return obj;
};
export const validatePostMessageTransport = function validatePostMessageTransport(transport) {
  if (transport !== constants.POST_MESSAGE) {
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp3 = RPCErrorDefault;
    const tmp32 = new tmp3(obj, "command not available from \"" + transport + " transport");
    throw tmp32;
  }
};
export const validateApplication = function validateApplication(application) {
  if (null == application.id) {
    const self = this;
    const self2 = this;
    obj = { errorCode: constants4.INVALID_COMMAND };
    const tmp5 = new RPCErrorDefault(obj, "Invalid application");
    throw tmp5;
  } else {
    return application.id;
  }
};
