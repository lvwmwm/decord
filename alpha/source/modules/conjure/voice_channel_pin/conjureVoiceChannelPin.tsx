// Module ID: 10917
// Function ID: 10918
// Name: conjureVoiceChannelPin
// Dependencies: [5, 4857, 4937, 1084, 584, 10831, 10160, 2]
// Exports: parseVoiceChannelPinOutcome, pinVoiceChannel, resolveVoiceChannelPin

// Module 10917 (conjureVoiceChannelPin)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 10160 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10831 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let applicationId, c2, c3;

let metroImportDefault;
let metroRequire;
function canPinVoiceChannel(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  const canResult = null != channel && channel.type === metroRequire.GUILD_VOICE && PermissionStore.can(metroImportDefault.MANAGE_CHANNELS, channel);
  return canResult;
}
let obj = function _pinVoiceChannel() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let obj3;
    let closure_0 = arg0;
    applicationId = value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (canPinVoiceChannel(closure_0)) {
            channel = channel.getChannel(tmp15);
            let application_id;
            if (channel != null) {
              application_id = channel.application_id;
            }
            if (application_id === applicationId) {
              c2 = 3;
              return { value: true, done: true };
            } else {
              c4 = 1;
              const obj5 = { applicationId };
              c3 = 2;
              c2 = 1;
              const obj6 = { value: obj3.saveChannel(closure_0, obj5), done: false };
              obj3 = ChannelSettingsActionCreators;
              return obj6;
            }
          } else {
            c2 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c2 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c2 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c2 = 3;
          obj = { value: true === value.ok, done: true };
          return obj;
        }
      } catch (tmp9) {
        if (0 === c4) {
          c2 = 3;
          throw tmp9;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ ChannelTypes: metroRequire, Permissions: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/conjureVoiceChannelPin.tsx");

export function parseVoiceChannelPinOutcome(voice_channel_pin) {
  let channel_id;
  let status;
  if (null != voice_channel_pin) {
    if (typeof voice_channel_pin === "object") {
      let tmp;
      ({ status, channel_id } = voice_channel_pin);
      if ("skipped" === status) {
        tmp = { status };
        obj = { status };
      } else if ("pinned" === status) {
        if (typeof channel_id === "string") {
          tmp = { status, channelId: channel_id };
          const obj2 = { status, channelId: channel_id };
        }
      }
      return tmp;
    }
  }
}
export { canPinVoiceChannel };
export function resolveVoiceChannelPin(projectId, outcome) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_VOICE_CHANNEL_PIN_RESOLVED", projectId, outcome };
  obj.dispatch(obj2);
  try {
    const obj3 = conjureProjectSockets;
    const conjureSocket = obj3.getConjureSocket(projectId);
    const obj4 = conjureSocket;
    if (null == conjureSocket) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = obj4.sendVoiceChannelPinOutcome(outcome);
    }
  } catch (err) {
  }
}
export function pinVoiceChannel() {
  return obj(...arguments);
}
