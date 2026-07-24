// Module ID: 10475
// Function ID: 80768
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1838, 4202, 3767, 1906, 1849, 4951, 1353, 4947, 653, 3763, 9120, 4957, 4320, 4950, 636, 566, 686, 2]

// Module 10475 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import calculateElevatedPermissions from "calculateElevatedPermissions";
import sortKey from "sortKey";
import computeDefaultGroupDmNameFromUserIds from "computeDefaultGroupDmNameFromUserIds";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { STAGE_APPLICATION_ID } from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdateActivity() {
  const tmp = (function buildActivity() {
    const voiceChannelId = outer1_13.getVoiceChannelId();
    if (null == voiceChannelId) {
      return null;
    } else {
      const stageInstanceByChannel = outer1_16.getStageInstanceByChannel(voiceChannelId);
      if (null == stageInstanceByChannel) {
        return null;
      } else {
        const channel = outer1_9.getChannel(voiceChannelId);
        if (null == channel) {
          return null;
        } else {
          if (obj10.canEveryone(outer1_20.VIEW_CHANNEL, channel)) {
            const guild = outer1_10.getGuild(channel.getGuildId());
            if (null == guild) {
              return null;
            } else {
              const features = guild.features;
              if (features.has(outer1_19.DISCOVERABLE)) {
                let obj = outer1_0(outer1_3[16]);
                const result = obj.packStageChannelPartyId(channel, stageInstanceByChannel);
                let id;
                if (null != tmp) {
                  const party = tmp.party;
                  if (null != party) {
                    id = party.id;
                  }
                }
                let tmp8 = null;
                if (id === result) {
                  tmp8 = tmp;
                }
                const mutableParticipants = outer1_15.getMutableParticipants(channel.id, outer1_0(outer1_3[17]).StageChannelParticipantNamedIndex.SPEAKER);
                const length = mutableParticipants.filter((type) => type.type === outer2_0(outer2_3[17]).StageChannelParticipantTypes.STREAM).length;
                const diff = mutableParticipants.length - length;
                let size;
                const diff1 = outer1_15.getParticipantCount(voiceChannelId) - length;
                if (null != tmp8) {
                  const party2 = tmp8.party;
                  if (null != party2) {
                    size = party2.size;
                  }
                }
                let num3 = 0;
                if (null != size) {
                  num3 = tmp8.party.size[1];
                }
                obj = { application_id: outer1_17 };
                let topic = stageInstanceByChannel.topic;
                if (null == topic) {
                  topic = channel.topic;
                }
                if (null == topic) {
                  let obj2 = outer1_0(outer1_3[18]);
                  topic = obj2.computeChannelName(channel, outer1_14, outer1_12);
                }
                obj.name = topic;
                obj.type = outer1_0(outer1_3[19]).getStageHasMedia(channel.id) ? outer1_18.WATCHING : outer1_18.LISTENING;
                obj = {};
                let start;
                if (null != tmp8) {
                  const timestamps = tmp8.timestamps;
                  if (null != timestamps) {
                    start = timestamps.start;
                  }
                }
                if (null == start) {
                  const _Date = Date;
                  const date = new Date();
                  start = date.getTime();
                }
                obj.start = start;
                obj.timestamps = obj;
                const obj1 = {};
                const icon = guild.icon;
                let tmp29;
                if (null != icon) {
                  tmp29 = icon;
                }
                obj1.small_image = tmp29;
                obj1.small_text = guild.name;
                obj.assets = obj1;
                obj2 = { id: result };
                const items = [diff, ];
                const _Math = Math;
                items[1] = Math.max(diff1, num3);
                obj2.size = items;
                obj.party = obj2;
                return obj;
              } else {
                return null;
              }
            }
          } else {
            return null;
          }
          obj10 = outer1_2(outer1_3[15]);
        }
      }
    }
  })();
  let flag = !importDefault(636)(tmp, c22);
  if (flag) {
    c22 = tmp;
    flag = true;
  }
  return flag;
}
({ ActivityTypes: closure_18, GuildFeatures: closure_19, Permissions: closure_20, RTCConnectionStates: closure_21 } = ME);
let c22 = null;
let tmp3 = ((Store) => {
  class StageChannelSelfRichPresenceStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, StageChannelSelfRichPresenceStore);
      obj = outer1_7(StageChannelSelfRichPresenceStore);
      tmp2 = outer1_6;
      if (outer1_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StageChannelSelfRichPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_13, outer1_15, outer1_16);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getActivity",
    value() {
      return outer1_22;
    }
  };
  items[1] = obj;
  return callback(StageChannelSelfRichPresenceStore, items);
})(require("initialize").Store);
tmp3.displayName = "StageChannelSelfRichPresenceStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let tmp;
    if (null != _null) {
      const party = _null.party;
      if (null != party) {
        const size = party.size;
        if (null != size) {
          tmp = size[1];
        }
      }
    }
    let num2 = 0;
    if (null != tmp) {
      num2 = tmp;
    }
    let tmp3 = !tmp2;
    if (!(state.state !== constants.RTC_CONNECTED || num2 > 0)) {
      tmp3 = handleUpdateActivity();
    }
    return tmp3;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let _require;
    if (null != c22) {
      const result = _require(9120).unpackStageChannelParty(c22);
      _require = result;
      const obj = _require(9120);
      if (tmp5) {
        handleUpdateActivity();
      }
      tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === _undefined.channelId);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default tmp3;
