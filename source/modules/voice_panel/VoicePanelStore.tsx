// Module ID: 4342
// Function ID: 38353
// Name: withEqualityFn
// Dependencies: [1348, 677, 4343, 682, 2]

// Module 4342 (withEqualityFn)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    channels: new Set(),
    isActivityFocused: false,
    isVoicePanelFullscreen() {
      return dependencyMap().voicePanelsFullscreen.size > 0;
    },
    isAnyVoicePanelOpen() {
      return dependencyMap().voicePanelsOpened.size > 0;
    }
  };
  let set = new Set();
  obj.voicePanelsFullscreen = new Set();
  let set1 = new Set();
  obj.voicePanelsOpened = new Set();
  let set2 = new Set();
  obj.voicePanelsPIP = new Set();
  obj.openChannel = function openChannel(channelId) {
    const callback = channelId;
    let result = callback(4343).isStageVoicePanelEnabled("voice_panel_store");
    if (!result) {
      const channel = outer1_2.getChannel(channelId);
      let isGuildStageVoiceResult;
      if (null != channel) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      result = true !== isGuildStageVoiceResult;
    }
    if (result) {
      const channels = dependencyMap().channels;
      if (!channels.has(channelId)) {
        callback(682).batchUpdates(() => {
          channelId((channels) => {
            const obj = {};
            const merged = Object.assign(channels);
            const items = [outer1_0, ...Array.from(channels.channels)];
            obj["channels"] = new Set(items);
            const items1 = [outer1_0, ...Array.from(channels.voicePanelsOpened)];
            const set = new Set(items);
            obj["voicePanelsOpened"] = new Set(items1);
            return obj;
          });
        });
        const obj3 = callback(682);
      }
    }
  };
  obj.closeChannel = function closeChannel(channelId) {
    const callback = channelId;
    callback(682).batchUpdates(() => {
      channelId((arg0) => {
        let channels;
        let voicePanelsFullscreen;
        let voicePanelsOpened;
        ({ channels, voicePanelsFullscreen, voicePanelsOpened } = arg0);
        if (!channels.has(outer1_0)) {
          if (!voicePanelsFullscreen.has(outer1_0)) {
            let tmp3 = arg0;
          }
          return tmp3;
        }
        let tmp4 = channels;
        if (channels.has(outer1_0)) {
          const _Set = Set;
          const set = new Set(channels);
          set.delete(outer1_0);
          tmp4 = set;
        }
        let tmp12 = voicePanelsFullscreen;
        if (voicePanelsFullscreen.has(outer1_0)) {
          const _Set2 = Set;
          const set1 = new Set(voicePanelsFullscreen);
          set1.delete(outer1_0);
          tmp12 = set1;
        }
        let tmp20 = voicePanelsOpened;
        if (voicePanelsOpened.has(outer1_0)) {
          const _Set3 = Set;
          const set2 = new Set(voicePanelsOpened);
          set2.delete(outer1_0);
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
    const channels = dependencyMap().channels;
    return channels.has(arg0);
  };
  obj.setIsActivityFocused = function setIsActivityFocused(arg0) {
    const callback = arg0;
    callback(682).batchUpdates(() => {
      callback((isActivityFocused) => {
        let tmp = isActivityFocused;
        if (isActivityFocused.isActivityFocused !== outer1_0) {
          const obj = {};
          const merged = Object.assign(isActivityFocused);
          obj["isActivityFocused"] = outer1_0;
          tmp = obj;
        }
        return tmp;
      });
    });
  };
  obj.setChannelPanelFullscreen = function setChannelPanelFullscreen(closure_0, closure_02) {
    const callback = closure_0;
    const dependencyMap = closure_02;
    callback(682).batchUpdates(() => {
      callback((voicePanelsFullscreen) => {
        const set = new Set(voicePanelsFullscreen.voicePanelsFullscreen);
        const hasItem = set.has(outer1_0);
        if (outer1_1) {
          if (hasItem) {
            return voicePanelsFullscreen;
          } else {
            set.add(outer1_0);
          }
        } else if (hasItem) {
          set.delete(outer1_0);
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
    const callback = channelId;
    const dependencyMap = arg1;
    callback(682).batchUpdates(() => {
      channelId((channels) => {
        channels = channels.channels;
        if (channels.has(outer1_0)) {
          const _Set = Set;
          const set = new Set(channels.voicePanelsOpened);
          const hasItem = set.has(outer1_0);
          if (outer1_1) {
            if (hasItem) {
              return channels;
            } else {
              set.add(outer1_0);
            }
          } else if (hasItem) {
            set.delete(outer1_0);
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
  obj.isChannelOpen = function isChannelOpen(closure_0) {
    const voicePanelsOpened = dependencyMap().voicePanelsOpened;
    return voicePanelsOpened.has(closure_0);
  };
  obj.setChannelPanelPIP = function setChannelPanelPIP(channelId, arg1) {
    const callback = channelId;
    const dependencyMap = arg1;
    callback(682).batchUpdates(() => {
      channelId((voicePanelsPIP) => {
        const set = new Set(voicePanelsPIP.voicePanelsPIP);
        const hasItem = set.has(outer1_0);
        if (outer1_1) {
          if (hasItem) {
            return voicePanelsPIP;
          } else {
            set.add(outer1_0);
          }
        } else if (hasItem) {
          set.delete(outer1_0);
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
let result = require("useIsStageVoicePanelEnabled").fileFinishedImporting("modules/voice_panel/VoicePanelStore.tsx");

export default withEqualityFn;
