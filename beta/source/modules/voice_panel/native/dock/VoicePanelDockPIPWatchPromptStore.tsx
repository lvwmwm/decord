// Module ID: 19735
// Function ID: 19736
// Name: VoicePanelDockPIPWatchPromptStore
// Dependencies: [6801, 502, 5073, 6804, 504, 572, 2]

// Module 19735 (VoicePanelDockPIPWatchPromptStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6804 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import size from "module_2" /* 2 */;

function markWatched(ownerId) {
  let flag = ownerId !== AuthenticationStore.getId() && !set.has(ownerId);
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(set);
    set = set.add(ownerId);
    flag = true;
  }
  return flag;
}
let voiceChannelId = null;
let set = new Set();
let c7 = false;
let c8 = false;
const Store = get_initializedDefault.Store;
class VoicePanelDockPIPWatchPromptStore extends Store {
  initialize() {
    this.waitFor(SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore);
    voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const obj = ApplicationStreamingStore;
    if (voiceChannelId == null) {
      voiceChannelId = null;
    }
    const allActiveStreams = obj.getAllActiveStreams();
    const tmp4 = allActiveStreams[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = markWatched(tmp5.ownerId);
      continue;
    }
  }
  hasWatched(ownerId) {
    return set.has(ownerId);
  }
  isDismissed() {
    return c7;
  }
  isVideoPIPDismissed() {
    return c8;
  }
}
const prototype = VoicePanelDockPIPWatchPromptStore.prototype;
VoicePanelDockPIPWatchPromptStore.displayName = "VoicePanelDockPIPWatchPromptStore";
let obj = {
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId == null) {
      channelId = null;
    }
    let tmp2 = channelId !== voiceChannelId;
    if (tmp2) {
      const tmp3 = voiceChannelId !== channelId || set.size > 0 || c7 || c8;
      voiceChannelId = channelId;
      const _Set = Set;
      const self = this;
      const self2 = this;
      c7 = false;
      c8 = false;
      tmp2 = tmp3;
      set = new Set();
    }
    return tmp2;
  },
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    const obj = StreamKeyUtils;
    const ownerId = obj.decodeStreamKey(streamKey).ownerId;
    let flag = ownerId !== AuthenticationStore.getId() && !set.has(ownerId);
    if (flag) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set = set.add(ownerId);
      flag = true;
    }
    return flag;
  },
  VOICE_PANEL_DOCK_WATCH_PROMPT_DISMISS: function handleDismiss() {
    let flag = !c7;
    if (flag) {
      c7 = true;
      flag = true;
    }
    return flag;
  },
  VOICE_PANEL_DOCK_VIDEO_PIP_DISMISS: function handleVideoPIPDismiss() {
    let flag = !c8;
    if (flag) {
      c8 = true;
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    const tmp = voiceChannelId !== null || set.size > 0 || c7 || c8;
    voiceChannelId = null;
    c7 = false;
    c8 = false;
    set = new Set();
    return tmp;
  }
};
const voicePanelDockPIPWatchPromptStore = new VoicePanelDockPIPWatchPromptStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIPWatchPromptStore.tsx");

export default voicePanelDockPIPWatchPromptStore;
