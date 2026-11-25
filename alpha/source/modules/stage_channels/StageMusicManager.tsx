// Module ID: 10255
// Function ID: 10256
// Name: StageMusicManager
// Dependencies: [4861, 2131, 4915, 5660, 6781, 4866, 10253, 10256, 504, 6830, 6824, 7444, 2]
// Exports: shouldShowStageMusicMuteButton, useShowStageMusicMuteButton

// Module 10255 (StageMusicManager)
import StageChannelParticipants from "StageChannelParticipants" /* 6824 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import VoiceStateStore from "VoiceStateStore" /* 5660 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6781 */;
import StageInstanceStore from "StageInstanceStore" /* 4866 */;
import StageMusicStore from "StageMusicStore" /* 10253 */;
import SoundUtils from "SoundUtils" /* 10256 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, voiceState;

function checkVoiceStates() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null == voiceChannelId) {
    closure_10.stop();
    c9 = false;
  } else {
    const channel = ChannelStore.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      if (MediaEngineStore.isSelfDeaf()) {
        closure_10.stop();
        c9 = false;
      } else {
        const obj2 = StageMusicStore;
        if (StageMusicStore.shouldPlay()) {
          closure_10.volume = MediaEngineStore.getOutputVolume() / 400;
          closure_10.loop();
          c9 = true;
        } else if (StageInstanceStore.isLive(voiceChannelId)) {
          closure_10.stop();
          c9 = false;
        } else if (obj2.isMuted()) {
          closure_10.pause();
          c9 = false;
        } else {
          const _Object = Object;
          const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
          const tmp8 = null != values.find((suppress) => {
            const tmp = !suppress.suppress && !suppress.isVoiceMuted();
            return tmp;
          });
          if (!tmp8) {
            const tmp9 = c9;
            if (!tmp9) {
              closure_10.volume = MediaEngineStore.getOutputVolume() / 400;
              closure_10.loop();
              c9 = true;
            }
          }
          if (tmp8) {
            closure_10.pause();
            c9 = false;
          }
        }
      }
    } else {
      closure_10.stop();
      c9 = false;
    }
  }
}
let c9 = false;
const authStore = SoundUtils.createSound("stage_waiting", "stage_waiting", MediaEngineStore.getOutputVolume() / 400);
class StageMusicManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, LOGOUT: applyArgumentsResult.handleLogout, STAGE_MUSIC_MUTE: applyArgumentsResult.handleMute, STAGE_MUSIC_PLAY: applyArgumentsResult.handlePlay, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, AUDIO_SET_OUTPUT_VOLUME: applyArgumentsResult.handleSetOutputVolume, AUDIO_TOGGLE_SELF_DEAF: applyArgumentsResult.handleToggleSelfDeaf };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        checkVoiceStates();
      } else {
        closure_10.stop();
        c9 = false;
      }
    } else {
      closure_10.stop();
      c9 = false;
    }
  }
  handleLogout() {
    closure_10.stop();
    c9 = false;
  }
  handlePlay(play) {
    if (play.play) {
      checkVoiceStates();
    } else {
      closure_10.pause();
      c9 = false;
    }
  }
  handleMute(muted) {
    if (muted.muted) {
      closure_10.pause();
      c9 = false;
    } else {
      checkVoiceStates();
    }
  }
  handleVoiceStateUpdates() {
    checkVoiceStates();
  }
  handleSetOutputVolume(volume) {
    closure_10.volume = volume.volume / 400;
  }
  handleToggleSelfDeaf() {
    checkVoiceStates();
  }
}
const prototype = StageMusicManager.prototype;
const stageMusicManager = new StageMusicManager();
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default stageMusicManager;
export function useShowStageMusicMuteButton(channelId) {
  _require = channelId;
  const items = [SelectedChannelStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === channelId);
  const obj2 = require("StageChannelParticipantStoreHooks");
  const stageParticipants = obj2.useStageParticipants(channelId, require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER);
  const items1 = [StageInstanceStore];
  const tmp2 = null != stageParticipants.find((voiceState) => {
    voiceState = voiceState.voiceState;
    return !voiceState.isVoiceMuted();
  });
  const obj3 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = null == obj3.useStateFromStores(items1, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  }
  if (stateFromStores) {
    stateFromStores = !tmp2;
  }
  return stateFromStores;
}
export function shouldShowStageMusicMuteButton(id) {
  let tmp = SelectedChannelStore.getVoiceChannelId() === id;
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const tmp2 = null != mutableParticipants.find((voiceState) => {
    voiceState = voiceState.voiceState;
    return !voiceState.isVoiceMuted();
  });
  if (tmp) {
    tmp = null == StageInstanceStore.getStageInstanceByChannel(id);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
}
