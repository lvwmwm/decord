// Module ID: 14675
// Function ID: 14676
// Name: StageChannelSelfRichPresenceStore
// Dependencies: [4641, 4663, 5533, 4734, 4695, 1388, 6413, 4646, 6379, 1072, 4729, 13432, 6416, 5408, 6412, 5531, 1345, 504, 572, 2]

// Module 14675 (StageChannelSelfRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1345 from "module_1345" /* 1345 */;
import PermissionUtilsAll from "PermissionUtils" /* 4729 */;
import useChannelName from "useChannelName" /* 5408 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6379 */;
import StageMediaHooks from "StageMediaHooks" /* 6412 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6416 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 13432 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildStore from "GuildStore" /* 4663 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5533 */;
import RelationshipStore from "RelationshipStore" /* 4734 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import UserStore from "UserStore" /* 1388 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6413 */;
import StageInstanceStore from "StageInstanceStore" /* 4646 */;
import Constants from "Constants" /* 1072 */;
import size_mod from "module_2" /* 2 */;

let closure_14;
let closure_15;
let map1;
function handleUpdateActivity() {
  let ActivityTypes;
  let items;
  let obj4;
  let obj5;
  let obj6;
  let stageHasMedia;
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
            if (features.has(map1.DISCOVERABLE)) {
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
              const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(channel.id, tmp12(6416).StageChannelParticipantNamedIndex.SPEAKER);
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
              obj = { application_id: STAGE_APPLICATION_ID, name: topic, type: stageHasMedia ? ActivityTypes.WATCHING : ActivityTypes.LISTENING, timestamps: obj4, assets: obj5, party: obj6 };
              topic = stageInstanceByChannel.topic;
              if (topic == null) {
                topic = channel.topic;
              }
              if (topic == null) {
                const tmp12Result = useChannelName;
                topic = tmp12Result.computeChannelName(channel, UserStore, RelationshipStore);
              }
              const tmp12Result2 = StageMediaHooks;
              stageHasMedia = tmp12Result2.getStageHasMedia(channel.id);
              ActivityTypes = tmp12(5531).ActivityTypes;
              let start;
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
  let flag = !_modDef1345(tmp2, obj);
  _modDef1345(tmp2, obj);
  if (flag) {
    obj = tmp2;
    flag = true;
  }
  return flag;
}
const STAGE_APPLICATION_ID = StageChannelsConstants.STAGE_APPLICATION_ID;
({ GuildFeatures: map1, Permissions: closure_14, RTCConnectionStates: closure_15 } = Constants);
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
