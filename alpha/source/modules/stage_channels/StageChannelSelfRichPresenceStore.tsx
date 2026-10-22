// Module ID: 11162
// Function ID: 11163
// Name: StageChannelSelfRichPresenceStore
// Dependencies: [4821, 4843, 5700, 4911, 4872, 1392, 6627, 4826, 6623, 1087, 4906, 10622, 6674, 5590, 6626, 1357, 504, 584, 2]

// Module 11162 (StageChannelSelfRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1357 from "module_1357" /* 1357 */;
import PermissionUtilsAll from "PermissionUtils" /* 4906 */;
import useChannelName from "useChannelName" /* 5590 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6623 */;
import StageMediaHooks from "StageMediaHooks" /* 6626 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6674 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 10622 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import UserStore from "UserStore" /* 1392 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6627 */;
import StageInstanceStore from "StageInstanceStore" /* 4826 */;
import Constants from "Constants" /* 1087 */;
import size_mod from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_16;
let map1;
function handleUpdateActivity() {
  let items;
  let obj4;
  let obj5;
  let obj6;
  let tmp12Result2;
  let topic;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let tmp2 = null;
  if (null != voiceChannelId) {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
    tmp2 = null;
    if (null != stageInstanceByChannel) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      tmp2 = null;
      if (null != channel) {
        tmp2 = null;
        const obj2 = PermissionUtilsAll;
        if (obj2.canEveryone(constants2.VIEW_CHANNEL, channel)) {
          const guild = GuildStore.getGuild(channel.getGuildId());
          tmp2 = null;
          if (null != guild) {
            const features = guild.features;
            tmp2 = null;
            if (features.has(constants.DISCOVERABLE)) {
              const obj3 = StageChannelRichPresenceUtils;
              const result = obj3.packStageChannelPartyId(channel, stageInstanceByChannel);
              let id;
              if (obj != null) {
                const party = obj.party;
                if (party != null) {
                  id = party.id;
                }
              }
              let tmp15 = null;
              if (id === result) {
                tmp15 = obj;
              }
              const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, tmp12(6674).StageChannelParticipantNamedIndex.SPEAKER);
              const length = mutableParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.STREAM).length;
              const diff = mutableParticipants.length - length;
              size = undefined;
              const diff1 = StageChannelParticipantStore.getParticipantCount(voiceChannelId) - length;
              if (tmp15 != null) {
                const party2 = tmp15.party;
                if (party2 != null) {
                  size = party2.size;
                }
              }
              let num = 0;
              if (null != size) {
                num = tmp15.party.size[1];
              }
              obj = { application_id: STAGE_APPLICATION_ID, name: topic, type: tmp12Result2.getStageHasMedia(channel.id) ? map1.WATCHING : map1.LISTENING, timestamps: obj4, assets: obj5, party: obj6 };
              topic = stageInstanceByChannel.topic;
              if (topic == null) {
                topic = channel.topic;
              }
              if (topic == null) {
                const tmp12Result = useChannelName;
                topic = tmp12Result.computeChannelName(channel, UserStore, RelationshipStore);
              }
              let start;
              tmp12Result2 = StageMediaHooks;
              if (tmp15 != null) {
                const timestamps = tmp15.timestamps;
                if (timestamps != null) {
                  start = timestamps.start;
                }
              }
              if (start == null) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date();
                start = date.getTime();
              }
              const icon = guild.icon;
              obj6 = { id: result, size: items };
              items = [diff, ];
              const _Math = Math;
              obj4 = { start };
              obj5 = { small_image: icon, small_text: guild.name };
              items[1] = Math.max(diff1, num);
              tmp2 = obj;
            }
          }
        }
      }
    }
  }
  let flag = !_modDef1357(tmp2, obj);
  _modDef1357(tmp2, obj);
  if (flag) {
    obj = tmp2;
    flag = true;
  }
  return flag;
}
const STAGE_APPLICATION_ID = StageChannelsConstants.STAGE_APPLICATION_ID;
({ ActivityTypes: map1, GuildFeatures: closure_14, Permissions: closure_15, RTCConnectionStates: closure_16 } = Constants);
let obj = null;
const Store = get_initializedDefault.Store;
class StageChannelSelfRichPresenceStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildStore, RTCConnectionStore, SelectedChannelStore, StageChannelParticipantStore, StageInstanceStore);
  }
  getActivity() {
    return obj;
  }
}
const prototype = StageChannelSelfRichPresenceStore.prototype;
StageChannelSelfRichPresenceStore.displayName = "StageChannelSelfRichPresenceStore";
obj = {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let num;
    state = state.state;
    if (obj != null) {
      const party = obj.party;
      if (party != null) {
        size = party.size;
        if (size != null) {
          num = size[1];
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    const tmp = state !== constants3.RTC_CONNECTED || num > 0;
    const tmp2 = !tmp && handleUpdateActivity();
    return tmp2;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let c0;
    if (null != obj) {
      obj = StageChannelRichPresenceUtils;
      const result = obj.unpackStageChannelParty(obj);
      c0 = result;
      const tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === _undefined.channelId);
      if (tmp5) {
        handleUpdateActivity();
      }
    }
  }
};
const stageChannelSelfRichPresenceStore = new StageChannelSelfRichPresenceStore(DispatcherDefault, obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default stageChannelSelfRichPresenceStore;
