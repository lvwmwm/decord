// Module ID: 4338
// Function ID: 38312
// Name: withEqualityFn
// Dependencies: []

// Module 4338 (withEqualityFn)
let closure_2 = importDefault(dependencyMap[0]);
const withEqualityFn = arg1(dependencyMap[1]).createWithEqualityFn((arg0, arg1) => {
  arg1 = arg0;
  const dependencyMap = arg1;
  const obj = {
    channels: new Set(),
    isActivityFocused: false,
    isVoicePanelFullscreen() {
      return arg1().voicePanelsFullscreen.size > 0;
    },
    isAnyVoicePanelOpen() {
      return arg1().voicePanelsOpened.size > 0;
    }
  };
  const set = new Set();
  obj.voicePanelsFullscreen = new Set();
  const set1 = new Set();
  obj.voicePanelsOpened = new Set();
  const set2 = new Set();
  obj.voicePanelsPIP = new Set();
  obj.openChannel = function openChannel(channelId) {
    let result = channelId(arg1[2]).isStageVoicePanelEnabled("voice_panel_store");
    if (!result) {
      const channel = channel.getChannel(channelId);
      let isGuildStageVoiceResult;
      if (null != channel) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      result = true !== isGuildStageVoiceResult;
    }
    if (result) {
      const channels = arg1().channels;
      if (!channels.has(channelId)) {
        channelId(arg1[3]).batchUpdates(() => {
          arg0((channels) => {
            const obj = {};
            const merged = Object.assign(channels);
            const items = [closure_0, ...Array.from(channels.channels)];
            obj["channels"] = new Set(items);
            const items1 = [closure_0, ...Array.from(channels.voicePanelsOpened)];
            const set = new Set(items);
            obj["voicePanelsOpened"] = new Set(items1);
            return obj;
          });
        });
        const obj3 = channelId(arg1[3]);
      }
    }
  };
  obj.closeChannel = function closeChannel(channelId) {
    channelId(arg1[3]).batchUpdates(() => {
      arg0((arg0) => {
        let channels;
        let voicePanelsFullscreen;
        let voicePanelsOpened;
        ({ channels, voicePanelsFullscreen, voicePanelsOpened } = arg0);
        if (!channels.has(closure_0)) {
          if (!voicePanelsFullscreen.has(closure_0)) {
            let tmp3 = arg0;
          }
          return tmp3;
        }
        let tmp4 = channels;
        if (channels.has(closure_0)) {
          const _Set = Set;
          const set = new Set(channels);
          set.delete(closure_0);
          tmp4 = set;
        }
        let tmp12 = voicePanelsFullscreen;
        if (voicePanelsFullscreen.has(closure_0)) {
          const _Set2 = Set;
          const set1 = new Set(voicePanelsFullscreen);
          set1.delete(closure_0);
          tmp12 = set1;
        }
        let tmp20 = voicePanelsOpened;
        if (voicePanelsOpened.has(closure_0)) {
          const _Set3 = Set;
          const set2 = new Set(voicePanelsOpened);
          set2.delete(closure_0);
          tmp20 = set2;
        }
        const obj = {};
        const merged = Object.assign(arg0);
        obj["channels"] = tmp4;
        obj["voicePanelsFullscreen"] = tmp12;
        obj["voicePanelsOpened"] = tmp20;
        tmp3 = obj;
      });
    });
  };
  obj.isMounted = function isMounted(arg0) {
    const channels = arg1().channels;
    return channels.has(arg0);
  };
  obj.setIsActivityFocused = function setIsActivityFocused(arg0) {
    arg0(arg1[3]).batchUpdates(() => {
      arg0((isActivityFocused) => {
        let tmp = isActivityFocused;
        if (isActivityFocused.isActivityFocused !== closure_0) {
          const obj = {};
          const merged = Object.assign(isActivityFocused);
          obj["isActivityFocused"] = closure_0;
          tmp = obj;
        }
        return tmp;
      });
    });
  };
  obj.setChannelPanelFullscreen = function setChannelPanelFullscreen(closure_0, closure_02) {
    closure_0(closure_02[3]).batchUpdates(() => {
      arg0((voicePanelsFullscreen) => {
        const set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
        const hasItem = set.has(closure_0);
        if (closure_1) {
          if (hasItem) {
            return voicePanelsFullscreen;
          } else {
            set.add(closure_0);
          }
        } else if (hasItem) {
          set.delete(closure_0);
        } else {
          return voicePanelsFullscreen;
        }
        const obj = {};
        const merged = Object.assign(voicePanelsFullscreen);
        obj["voicePanelsFullscreen"] = set;
        return obj;
      });
    });
  };
  obj.setChannelPanelOpen = function setChannelPanelOpen(channelId, arg1) {
    channelId(arg1[3]).batchUpdates(() => {
      arg0((channels) => {
        channels = channels.channels;
        if (channels.has(closure_0)) {
          const _Set = Set;
          const set = new Set(channels.voicePanelsOpened);
          const hasItem = set.has(closure_0);
          if (closure_1) {
            if (hasItem) {
              return channels;
            } else {
              set.add(closure_0);
            }
          } else if (hasItem) {
            set.delete(closure_0);
          } else {
            return channels;
          }
          const obj = {};
          const merged = Object.assign(channels);
          obj["voicePanelsOpened"] = set;
          return obj;
        } else {
          return channels;
        }
      });
    });
  };
  obj.isChannelOpen = function isChannelOpen(arg0) {
    const voicePanelsOpened = arg1().voicePanelsOpened;
    return voicePanelsOpened.has(arg0);
  };
  obj.setChannelPanelPIP = function setChannelPanelPIP(channelId, arg1) {
    channelId(arg1[3]).batchUpdates(() => {
      arg0((voicePanelsPIP) => {
        const set = new Set(voicePanelsPIP.voicePanelsPIP);
        const hasItem = set.has(closure_0);
        if (closure_1) {
          if (hasItem) {
            return voicePanelsPIP;
          } else {
            set.add(closure_0);
          }
        } else if (hasItem) {
          set.delete(closure_0);
        } else {
          return voicePanelsPIP;
        }
        const obj = {};
        const merged = Object.assign(voicePanelsPIP);
        obj["voicePanelsPIP"] = set;
        return obj;
      });
    });
  };
  return obj;
});
const obj = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;
